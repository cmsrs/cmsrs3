<?php

declare(strict_types=1);

namespace App\Services\Cmsrs\Helpers;

use App\Models\Cmsrs\Image;
use GdImage;
use RuntimeException;

class ImageHelperService
{
    /**
     * Save original image and all configured thumbnails.
     */
    public static function saveImageAndThumbs(
        string $data,
        string $dirImg,
        string $name
    ): void {
        $source = self::createImageFromString($data);

        $fileName = pathinfo($name, PATHINFO_FILENAME);
        $fileExt = strtolower(pathinfo($name, PATHINFO_EXTENSION));

        foreach (Image::$thumbs as $thumbName => $dimension) {
            $fileThumb = $dirImg
                .'/'
                .$fileName
                .'-'
                .$thumbName
                .'.'
                .$fileExt;

            $thumbnail = self::createThumbnail(
                $source,
                $dimension['x'],
                $dimension['y']
            );

            self::saveImage($thumbnail, $fileThumb);
        }
    }

    /**
     * Create GD image from binary image data.
     */
    private static function createImageFromString(string $data): GdImage
    {
        $image = @imagecreatefromstring($data);

        if ($image === false) {
            throw new RuntimeException('Unable to read image data.');
        }

        return $image;
    }

    /**
     * Create an exact-size thumbnail using a centered crop.
     *
     * Example:
     * 2000x1000 -> 300x300
     * The image is cropped to a centered 1000x1000 square
     * and then resized to 300x300.
     */
    private static function createThumbnail(
        GdImage $source,
        int $width,
        int $height
    ): GdImage {
        if ($width < 1 || $height < 1) {
            throw new RuntimeException('Thumbnail dimensions must be greater than zero.');
        }

        $sourceWidth = imagesx($source);
        $sourceHeight = imagesy($source);

        $sourceRatio = $sourceWidth / $sourceHeight;
        $targetRatio = $width / $height;

        if ($sourceRatio > $targetRatio) {
            // Source image is wider than target.
            $cropHeight = $sourceHeight;
            $cropWidth = (int) round($sourceHeight * $targetRatio);

            $sourceX = (int) round(($sourceWidth - $cropWidth) / 2);
            $sourceY = 0;
        } else {
            // Source image is taller than target.
            $cropWidth = $sourceWidth;
            $cropHeight = (int) round($sourceWidth / $targetRatio);

            $sourceX = 0;
            $sourceY = (int) round(($sourceHeight - $cropHeight) / 2);
        }

        $thumbnail = imagecreatetruecolor($width, $height);

        if ($thumbnail === false) {
            throw new RuntimeException('Unable to create thumbnail.');
        }

        self::prepareTransparency($thumbnail); //jpeg does not support transparency, but png and webp do

        $result = imagecopyresampled(
            $thumbnail,
            $source,
            0,
            0,
            $sourceX,
            $sourceY,
            $width,
            $height,
            $cropWidth,
            $cropHeight
        );

        if ($result === false) {
            // imagedestroy($thumbnail); //8.5 deprecated in PHP 8.5, no need to destroy manually
            throw new RuntimeException('Unable to resize image.');
        }

        return $thumbnail;
    }


    /**
     * Save GD image according to the file extension.
     */
    private static function saveImage(
        GdImage $image,
        string $path
    ): void {
        $extension = strtolower(
            pathinfo($path, PATHINFO_EXTENSION)
        );

        $result = match ($extension) {
            'jpg', 'jpeg' => imagejpeg($image, $path, 90),
            'png' => self::savePng($image, $path),
            'webp' => self::saveWebP($image, $path, 90),
            default => throw new RuntimeException(
                sprintf(
                    'Unsupported image format: "%s". Supported formats: jpg, jpeg, png, webp.',
                    $extension
                )
            ),
        };

        if ($result === false) {
            throw new RuntimeException(
                sprintf('Unable to save image: "%s".', $path)
            );
        }
    }

    private static function prepareTransparency(
        GdImage $image
    ): void {
        imagealphablending($image, false);
        imagesavealpha($image, true);
    }

    /**
     * Save PNG with preserved transparency.
     */
    private static function savePng(
        GdImage $image,
        string $path
    ): bool {
        self::prepareTransparency($image);

        return imagepng($image, $path, 6);
    }

    /**
     * Save WebP with preserved transparency.
     */
    private static function saveWebP(
        GdImage $image,
        string $path,
        int $quality = 90
    ): bool {
        self::prepareTransparency($image);

        return imagewebp($image, $path, $quality);
    }
}
