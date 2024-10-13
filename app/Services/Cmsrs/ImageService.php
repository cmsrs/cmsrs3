<?php

namespace App\Services\Cmsrs;

use Carbon\Carbon;
use App\Models\Cmsrs\Translate;
use App\Models\Cmsrs\Image;
use Intervention\Image\Laravel\Facades\Image as LibImage;

class ImageService extends BaseService
{
    private $translate;

    public function __construct(array $attributes = array())
    {
        //parent::__construct($attributes);

        $this->translate = new TranslateService;
    }


    public function setTranslate($objTranslate)
    {
        if (!empty($objTranslate)) {
            $this->translate = $objTranslate;
        }
    }

    public function getAllTranslate(Image $mImage)
    {
        $imageId = $mImage->id; 
        $isCache = (new ConfigService)->isCacheEnable();
        if ($isCache) {
            $ret = cache()->remember('imagetranslate_'.$imageId, Carbon::now()->addYear(1), function () use ($mImage, $imageId) {
                return  $mImage->translates()->where('image_id', $imageId)->get(['lang', 'column', 'value'])->toArray();
            });
        } else {
            $ret = $mImage->translates()->where('image_id', $imageId)->get(['lang', 'column', 'value'])->toArray();
        }

        return $ret;
    }

    /**
    * TODO - move function to helper
    * fix for another language
    */
    public static function filter($string, $delimiter = '-')
    {
        $to_replace   = array('ą', 'ę', 'ó', 'ś', 'ć', 'ń', 'ł', 'ż', 'ź', 'Ą', 'Ę', 'Ó', 'Ś', 'Ć', 'Ń', 'Ł', 'Ż', 'Ź', //Poish
                        'ä', 'ö', 'ü', 'ß', 'Ä', 'Ö', 'Ü',  //German
                        '%20',' ');
        $replace_with = array('a', 'e', 'o', 's', 'c', 'n', 'l', 'z', 'z', 'A', 'E', 'O', 'S', 'C', 'N', 'L', 'Z', 'Z', 
                        'a', 'o', 'u', 'ss', 'A', 'O', 'U', 
                        $delimiter, $delimiter );
        //$filter = array('!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '=', '+', '[', ']', ';', ':', '"', '\'', '<', '>', '/', '?', '.');
        $filter = array('!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '=', '+', '[', ']', ';', ':', '"', '\'', '<', '>', '/', '?');

        $string = str_replace($to_replace, $replace_with, $string);
        $string = str_replace($filter, '', $string);
        return   strtolower(trim($string));
    }

    public function delete(Image $mImage )
    {
        $this->deleteImg($mImage);
        return  $mImage->delete(); //parent::delete();
    }

    private function deleteImg(Image $mImage)
    {
        $allImg = self::getAllImage($mImage);
        foreach ($allImg as $key => $path) {
            if (file_exists($path)) {
                unlink($path);
            }
        }
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
        $imageService = new ImageService();
        $imgDir = self::getImageDir($imageService->getRefType($objImg), $imageService->getRefId($objImg), $img->id, $isAbs);
        $fileName = pathinfo($img->name, PATHINFO_FILENAME);
        $fileExt = pathinfo($img->name, PATHINFO_EXTENSION);

        $out[Image::IMAGE_ORG] = $imgDir.'/'.$img->name;
        foreach (Image::$thumbs as $imgName => $dimention) {
            $out[$imgName] = $imgDir.'/'.$fileName.'-'.$imgName.'.'.$fileExt;
        }

        return $out;
    }

    public static function getImageDir($type, $refId, $imageId, $isAbs = true)
    {
        if (empty(Image::$type[$type])) {
            throw new \Exception("I can't get image type");
        }

        $url = Image::IMAGE_DIR.'/'. $type .'/'.$refId.'/'.$imageId;

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
            if (!empty($image['id'])) {
                $imagesUpdate[] = $image;
            } else {
                $imagesCreate[] = $image;
            }
        }

        //the order is important - first update then create
        if ($imagesUpdate) {
            (new ImageService() )->updateImages($imagesUpdate);
        }
        if ($imagesCreate) {
            (new ImageService() )->createImages($imagesCreate, $type, $refId);
        }

        return true;
    }

    public function updateImages($images)
    {
        foreach ($images as $image) {
            $this->translate->wrapCreate([ 'image_id' => $image['id'], 'data' => $image ], false);
        }
    }

    public static function updatePositionImages($images)
    {
        foreach ($images as $image) {
            if(empty($image['id'])){
                continue;
            }
            if(empty($image['position'])){
                continue;
            }
            $imageObj = Image::find($image['id']);
            if (!$imageObj) {
                continue;
            }

            $imageObj->position = $image['position'];
            $imageObj->save();            
        }
    }

    public function createImages($images, $type, $refId)
    {
        $out = [];

        foreach ($images as $key => $image) {
            $name = self::filter($image['name']);
            $alt = !empty($image['alt']) ? $image['alt'] : null;

            $data = $image['data'];

            if (empty($strRefId = Image::$type[$type])) {
                throw new \Exception("I can't get image type in createImages");
            }

            $dbData = [
            'name' => $name,
            'position' => self::getNextPositionByTypeAndRefId($type, $refId),
            $strRefId => $refId
        ];
            $image = Image::create($dbData);

            if (empty($image->id)) {
                throw new \Exception("I can't get image id");
            }

            $this->translate->wrapCreate([ 'image_id' => $image->id, 'data' => ['alt' => $alt ] ]);

            $out[$key] = $image;

            $dirImg = self::getImageDir($type, $refId, $image->id);
            if (!file_exists($dirImg)) {
                mkdir($dirImg, 0777, true);
            }
            LibImage::read($data)->save($dirImg.'/'.$name);

            $fileName = pathinfo($name, PATHINFO_FILENAME);
            $fileExt = pathinfo($name, PATHINFO_EXTENSION);

            foreach (Image::$thumbs as $thumbName => $dimension) {
                $fileThumb = $dirImg.'/'.$fileName.'-'.$thumbName.'.'.$fileExt;
                LibImage::read($data)->resize($dimension['x'], $dimension['y'])->save($fileThumb);
            }
        }
        return $out;
    }

    public static function getNextPositionByTypeAndRefId($type, $refId)
    {
        if (empty($strRefId = Image::$type[$type])) {
            throw new \Exception("I can't get image type in getNextPositionByTypeAndRefId");
        }

        if (empty($refId)) {
            throw new \Exception("Image (next pos): refId must be defined");
            // $image = Image::query()
            //       ->whereNull($strRefId)
            //       ->orderBy('position', 'desc')
            //       ->first()
            //       ;
        }
        $image = Image::query()
                ->where($strRefId, '=', $refId)
                ->orderBy('position', 'desc')
                ->first()
                ;


        if (!$image) {
            return 1;
        }
        return  $image->position+1;
    }


    public static function getImagesAndThumbsByTypeAndRefId($type, $refId = null)
    {
        $images  = ImageService::getImagesByTypeAndRefId($type, $refId);

        foreach ($images  as $k => $img) {
            $images[$k]['alt'] = ImageService::getAltImg($img);
            $images[$k]['fs']  = ImageService::getAllImage($img, false);
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
            throw new \Exception("Image: refId must be defined");
            // $image = Image::with(['translates'])
            //       ->whereNull($strRefId)
            //       ->orderBy('position', 'asc')
            //       ->get()
            //       ;
        }
        $image = Image::with(['translates'])
                ->where($strRefId, '=', $refId)
                ->orderBy('position', 'asc')
                ->get()
                ;
        
        return $image;
    }

    public static function swapPosition($direction, $id)
    {
        $image = Image::find($id);
        if (!$image) {
            return false;
        }

        $t = 'page';
        $refId = null;
        foreach (Image::$type as $type => $key) {
            if (!empty($image->{$key})) {
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
                if ($direction === "up") {
                    $swapKey = ($key === 0) ?  $countImages - 1 : $key - 1;
                }

                if ($direction === "down") {
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
