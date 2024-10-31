<?php

namespace App\Services\Cmsrs\Helpers;

use App\Models\Cmsrs\Image;
use Intervention\Image\Laravel\Facades\Image as LibImage;

class ImageHelperService
{
    public static function saveImageAndThumbs($data, $dirImg, $name)
    {
        LibImage::read($data)->save($dirImg.'/'.$name);

        $fileName = pathinfo($name, PATHINFO_FILENAME);
        $fileExt = pathinfo($name, PATHINFO_EXTENSION);

        foreach (Image::$thumbs as $thumbName => $dimension) {
            $fileThumb = $dirImg.'/'.$fileName.'-'.$thumbName.'.'.$fileExt;
            LibImage::read($data)->resize($dimension['x'], $dimension['y'])->save($fileThumb);
        }
    }
}
