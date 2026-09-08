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

        try {
            $originalPath = $dirImg . '/' . $name;

            self::saveImage($source, $originalPath);

            $fileName = pathinfo($name, PATHINFO_FILENAME);
            $fileExt = strtolower(pathinfo($name, PATHINFO_EXTENSION));

            foreach (Image::$thumbs as $thumbName => $dimension) {
                $fileThumb = $dirImg
                    . '/'
                    . $fileName
                    . '-'
                    . $thumbName
                    . '.'
                    . $fileExt;

                $thumbnail = self::createThumbnail(
                    $source,
                    $dimension['x'],
                    $dimension['y']
                );

                try {
                    self::saveImage($thumbnail, $fileThumb);
                } finally {
                    imagedestroy($thumbnail);
                }
            }
        } finally {
            imagedestroy($source);
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

        self::prepareTransparency($source, $thumbnail);

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
            imagedestroy($thumbnail);

            throw new RuntimeException('Unable to resize image.');
        }

        return $thumbnail;
    }

    /**
     * Prepare transparency for PNG/WebP images.
     */
    private static function prepareTransparency(
        GdImage $source,
        GdImage $destination
    ): void {
        imagealphablending($destination, false);
        imagesavealpha($destination, true);

        $transparent = imagecolorallocatealpha(
            $destination,
            0,
            0,
            0,
            127
        );

        if ($transparent !== false) {
            imagefill($destination, 0, 0, $transparent);
        }
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
            'webp' => imagewebp($image, $path, 90),
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

    /**
     * Save PNG with maximum quality and preserved transparency.
     */
    private static function savePng(
        GdImage $image,
        string $path
    ): bool {
        imagealphablending($image, false);
        imagesavealpha($image, true);

        return imagepng($image, $path, 6);
    }
}