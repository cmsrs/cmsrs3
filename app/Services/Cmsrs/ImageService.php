<?php

namespace App\Services\Cmsrs;

use App\Models\Cmsrs\Image;
use App\Models\Cmsrs\Menu;
use App\Models\Cmsrs\Page;
use App\Services\Cmsrs\Helpers\CacheService;
use App\Services\Cmsrs\Helpers\ImageHelperService;
use App\Services\Cmsrs\Helpers\StrHelperService;
use App\Services\Cmsrs\Interfaces\TranslateInterface;

class ImageService extends BaseService implements TranslateInterface
{
    private $translate;

    public function __construct()
    {
        $this->translate = new TranslateService;
    }

    public function setTranslate($objTranslate)
    {
        if (! empty($objTranslate)) {
            $this->translate = $objTranslate;
        }
    }

    public function getAllTranslate(Page|Image|Menu $mImage)
    {
        $imageId = $mImage->id;
        $isCache = (new ConfigService)->isCacheEnable();
        if ($isCache) {
            $ret = cache()->remember('imagetranslate_'.$imageId, CacheService::setTime(), function () use ($mImage, $imageId) {
                return $mImage->translates()->where('image_id', $imageId)->get(['lang', 'column', 'value'])->toArray();
            });
        } else {
            $ret = $mImage->translates()->where('image_id', $imageId)->get(['lang', 'column', 'value'])->toArray();
        }

        return $ret;
    }

    private static function deleteDirectoryIfEmpty($dirPath)
    {
        if (is_dir($dirPath)) {
            $files = scandir($dirPath);

            $files = array_diff($files, ['.', '..']);

            if (empty($files)) {
                if (rmdir($dirPath)) {
                    return true;
                }
            }
        }

        return false;
    }

    public function delete(Image $mImage)
    {
        $this->deleteImg($mImage);

        return $mImage->delete(); // parent::delete();
    }

    public static function deleteImagesFromFs($allImg)
    {
        foreach ($allImg as $path) {
            if (file_exists($path)) {
                unlink($path);
            }
        }
    }

    public function deleteImg(Image $mImage)
    {
        $allImg = self::getAllImage($mImage);

        self::deleteImagesFromFs($allImg);

        $dirImgs = self::getImgDir($mImage);
        self::removeTwoDirectoryIfEmpty($dirImgs);
    }

    public static function removeTwoDirectoryIfEmpty($dirImgs)
    {
        self::deleteDirectoryIfEmpty($dirImgs);
        $higherDirectory = dirname($dirImgs);
        self::deleteDirectoryIfEmpty($higherDirectory);
    }

    public function getHtmlImage(Image $mImage, $type = Image::IMAGE_THUMB_TYPE_MEDIUM)
    {
        $img = self::getAllImage($mImage, false);

        return $img[$type];
    }

    public function getRefId(Image $mImage)
    {
        if ($mImage->page_id) {
            return $mImage->page_id;
        }
        if ($mImage->product_id) {
            return $mImage->product_id;
        }

        return null;
    }

    public function getRefType(Image $mImage)
    {
        if ($mImage->page_id) {
            return 'page';
        }
        if ($mImage->product_id) {
            return 'product';
        }

        return null;
    }

    public static function getImgDir(Image $objImg, $isAbs = true)
    {
        $imageService = new ImageService;

        return self::getImageDir($imageService->getRefType($objImg), $imageService->getRefId($objImg), $objImg->id, $isAbs);
    }

    /**
     *  return all thumbs and main img
     */
    public static function getAllImage($img, $isAbs = true)
    {
        $out = [];
        $objImg = Image::find($img->id);
        if (empty($objImg)) {
            return false;
        }
        $imgDir = self::getImgDir($objImg, $isAbs);
        $fileName = pathinfo($img->name, PATHINFO_FILENAME);
        $fileExt = pathinfo($img->name, PATHINFO_EXTENSION);

        $out[Image::IMAGE_ORG] = $imgDir.'/'.$img->name;
        foreach (array_keys(Image::$thumbs) as $imgName) {
            $out[$imgName] = $imgDir.'/'.$fileName.'-'.$imgName.'.'.$fileExt;
        }

        return $out;
    }

    public static function getImageDir($type, $refId, $imageId, $isAbs = true)
    {
        if (empty(Image::$type[$type])) {
            throw new \Exception("I can't get image type");
        }

        $url = Image::IMAGE_DIR.'/'.$type.'/'.$refId.'/'.$imageId;

        if ($isAbs) {
            return public_path($url);
        }

        return '/'.$url;
    }

    public static function createImagesAndUpdateAlt($images, $type, $refId)
    {
        $imagesCreate = [];
        $imagesUpdate = [];

        foreach ($images as $image) {
            if (! empty($image['id'])) {
                $imagesUpdate[] = $image;
            } else {
                $imagesCreate[] = $image;
            }
        }

        // the order is important - first update then create
        if ($imagesUpdate) {
            (new ImageService)->updateImages($imagesUpdate);
        }
        if ($imagesCreate) {
            (new ImageService)->createImages($imagesCreate, $type, $refId);
        }

        return true;
    }

    public function updateImages($images)
    {
        foreach ($images as $image) {
            $this->translate->wrapCreate(['image_id' => $image['id'], 'data' => $image], false);
        }
    }

    public static function updatePositionImages($images)
    {
        foreach ($images as $image) {
            if (empty($image['id'])) {
                continue;
            }
            if (empty($image['position'])) {
                continue;
            }
            $imageObj = Image::find($image['id']);
            if (! $imageObj) {
                continue;
            }

            $imageObj->position = $image['position'];
            $imageObj->save();
        }
    }

    private function sanitizeNameImages($images)
    {
        $sanitizeNameImages = [];
        $allowedExtensions = (new ConfigService)->arrAllowedUploadFileExt();  // ['jpg', 'jpeg', 'png', 'gif']; //, 'bmp', 'svg', 'webp'];
        foreach ($images as $key => $image) {
            $basename = pathinfo($image['name'], PATHINFO_FILENAME);
            $extension = strtolower(trim(pathinfo($image['name'], PATHINFO_EXTENSION)));

            if (empty($basename)) {
                throw new \Exception('Wrong file name ='.$basename);
            }

            if (! in_array($extension, $allowedExtensions)) {
                throw new \Exception('File is not an image: '.$image['name'].', allowed extension are: '.implode(', ', $allowedExtensions));
            }

            $sanitizeNameImages[$key] = StrHelperService::filterFileName($basename, $extension);
        }

        return $sanitizeNameImages;
    }

    public function createImages($images, $type, $refId)
    {
        $out = [];

        $sanitizeNameImages = $this->sanitizeNameImages($images);
        foreach ($images as $key => $image) {
            if (empty($name = $sanitizeNameImages[$key])) {
                throw new \Exception('Sth wrong with sanitizeNameImages');
            }
            $alt = ! empty($image['alt']) ? $image['alt'] : null;

            $data = $image['data'];

            if (empty($strRefId = Image::$type[$type])) {
                throw new \Exception("I can't get image type in createImages");
            }

            $dbData = [
                'name' => $name,
                'position' => self::getNextPositionByTypeAndRefId($type, $refId),
                $strRefId => $refId,
            ];
            $image = Image::create($dbData);

            if (empty($image->id)) {
                throw new \Exception("I can't get image id");
            }

            $this->translate->wrapCreate(['image_id' => $image->id, 'data' => ['alt' => $alt]]);

            $out[$key] = $image;

            $dirImg = self::getImageDir($type, $refId, $image->id);
            if (! file_exists($dirImg)) {
                mkdir($dirImg, 0777, true);
            }

            ImageHelperService::saveImageAndThumbs($data, $dirImg, $name);
        }

        return $out;
    }

    public static function getNextPositionByTypeAndRefId($type, $refId)
    {
        if (empty($strRefId = Image::$type[$type])) {
            throw new \Exception("I can't get image type in getNextPositionByTypeAndRefId");
        }

        if (empty($refId)) {
            throw new \Exception('Image (next pos): refId must be defined');
            // $image = Image::query()
            //       ->whereNull($strRefId)
            //       ->orderBy('position', 'desc')
            //       ->first()
            //       ;
        }
        $image = Image::query()
            ->where($strRefId, '=', $refId)
            ->orderBy('position', 'desc')
            ->first();

        if (! $image) {
            return 1;
        }

        return $image->position + 1;
    }

    public static function getImagesAndThumbsByTypeAndRefId($type, $refId = null)
    {
        $images = ImageService::getImagesByTypeAndRefId($type, $refId);

        foreach ($images as $k => $img) {
            $images[$k]['alt'] = ImageService::getAltImg($img);
            $images[$k]['fs'] = ImageService::getAllImage($img, false);
            unset($img['translates']);
        }

        return $images;
    }

    public static function getAltImg($objImg)
    {
        $out = [];
        $translates = $objImg->translates->toArray();
        foreach ($translates as $translate) {
            if ($translate['column'] == 'alt') {
                $out[$translate['lang']] = $translate['value'];
            }
        }

        return $out;
    }

    public static function getImagesByTypeAndRefId($type, $refId = null)
    {
        if (empty($strRefId = Image::$type[$type])) {
            throw new \Exception("I can't get image type in getImagesByTypeAndRefId");
        }

        $image = [];
        if (empty($refId)) {
            throw new \Exception('Image: refId must be defined');
            // $image = Image::with(['translates'])
            //       ->whereNull($strRefId)
            //       ->orderBy('position', 'asc')
            //       ->get()
            //       ;
        }
        $image = Image::with(['translates'])
            ->where($strRefId, '=', $refId)
            ->orderBy('position', 'asc')
            ->get();

        return $image;
    }

    public static function swapPosition($direction, $id)
    {
        if (! in_array($direction, ['up', 'down'])) {
            throw new \Exception('Wrong direction (Image). It can be up or down direction = '.$direction);
        }

        $image = Image::find($id);
        if (! $image) {
            return false;
        }

        $t = 'page';
        $refId = null;
        foreach (Image::$type as $type => $key) {
            if (! empty($image->{$key})) {
                $t = $type;
                $refId = $image->{$key};
            }
        }

        $images = ImageService::getImagesByTypeAndRefId($t, $refId);

        $countImages = count($images);
        if ($countImages < 2) {
            return false;
        }

        foreach ($images as $key => $img) {
            if (($img->id == $id)) {
                $swapKey = null;

                if ($direction === 'up') {
                    $swapKey = ($key === 0) ? $countImages - 1 : $key - 1;
                }

                if ($direction === 'down') {
                    $swapKey = ($key === ($countImages - 1)) ? 0 : $key + 1;
                }

                $positionKey = $img->position;
                $img->position = $images[$swapKey]->position;
                $img->save();
                $images[$swapKey]->position = $positionKey;
                $images[$swapKey]->save();
            }
        }

        return true;
    }
}
