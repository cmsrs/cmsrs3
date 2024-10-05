<?php

namespace App\Models\Cmsrs;
//use LibImage;

use Carbon\Carbon;

class Image extends Base
{
    private $translate;

    const IMAGE_DIR = 'images';

    const IMAGE_ORG = 'org';
    const IMAGE_THUMB_TYPE_SMALL = 'small';
    const IMAGE_THUMB_TYPE_MEDIUM = 'medium';

    public static $thumbs = [
      self::IMAGE_THUMB_TYPE_SMALL => [
        'x' => 100,
        'y' => 100
      ],
      self::IMAGE_THUMB_TYPE_MEDIUM => [
        'x' => 300,
        'y' => 300
      ]
    ];

    protected $fillable = [
        'name',
        'position',
        'page_id',
        'product_id'
    ];

    public static $type = [
        'page' => 'page_id',
        'product' => 'product_id'
    ];

    protected $casts = [
      'page_id' => 'integer',
      'product_id' => 'integer',
      'position' => 'integer'
    ];

    public function __construct(array $attributes = array())
    {
        parent::__construct($attributes);

        $this->translate = new Translate;
    }

    public function translates()
    {
        return $this->hasMany('App\Translate');
    }

    public function setTranslate($objTranslate)
    {
        if (!empty($objTranslate)) {
            $this->translate = $objTranslate;
        }
    }

    public function getAllTranslate()
    {
        $imageId = $this->id;
        $isCache = (new Config)->isCacheEnable();
        if ($isCache) {
            $ret = cache()->remember('imagetranslate_'.$imageId, Carbon::now()->addYear(1), function () use ($imageId) {
                return $this->translates()->where('image_id', $imageId)->get(['lang', 'column', 'value'])->toArray();
            });
        } else {
            $ret = $this->translates()->where('image_id', $imageId)->get(['lang', 'column', 'value'])->toArray();
        }

        return $ret;
    }

    /**
    * TODO - move function to helper
    * fix for another language
    */
    public static function filter($string, $delimiter = '-')
    {
        $to_replace   = array('ą', 'ę', 'ó', 'ś', 'ć', 'ń', 'ł', 'ż', 'ź', 'Ą', 'Ę', 'Ó', 'Ś', 'Ć', 'Ń', 'Ł', 'Ż', 'Ź', '%20',' ');
        $replace_with = array('a', 'e', 'o', 's', 'c', 'n', 'l', 'z', 'z', 'A', 'E', 'O', 'S', 'C', 'N', 'L', 'Z', 'Z', $delimiter, $delimiter );
        //$filter = array('!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '=', '+', '[', ']', ';', ':', '"', '\'', '<', '>', '/', '?', '.');
        $filter = array('!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '=', '+', '[', ']', ';', ':', '"', '\'', '<', '>', '/', '?');

        $string = str_replace($to_replace, $replace_with, $string);
        $string = str_replace($filter, '', $string);
        return   strtolower(trim($string));
    }

    public function delete()
    {
        $this->deleteImg();
        return parent::delete();
    }

    private function deleteImg()
    {
        $allImg = self::getAllImage($this);
        foreach ($allImg as $key => $path) {
            if (file_exists($path)) {
                unlink($path);
            }
        }
    }

    public function getHtmlImage($type = self::IMAGE_THUMB_TYPE_MEDIUM)
    {
        $img = self::getAllImage($this, false);
        return $img[$type];
    }

    public function getRefId()
    {
        if ($this->page_id) {
            return $this->page_id;
        }
        if ($this->product_id) {
            return $this->product_id;
        }
        return null;
    }

    public function getRefType()
    {
        if ($this->page_id) {
            return 'page';
        }
        if ($this->product_id) {
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
        $imgDir = Image::getImageDir($objImg->getRefType(), $objImg->getRefId(), $img->id, $isAbs);
        $fileName = pathinfo($img->name, PATHINFO_FILENAME);
        $fileExt = pathinfo($img->name, PATHINFO_EXTENSION);

        $out[self::IMAGE_ORG] = $imgDir.'/'.$img->name;
        foreach (self::$thumbs as $imgName => $dimention) {
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
            (new Image)->updateImages($imagesUpdate);
        }
        if ($imagesCreate) {
            (new Image)->createImages($imagesCreate, $type, $refId);
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
            'position' => Image::getNextPositionByTypeAndRefId($type, $refId),
            $strRefId => $refId
        ];
            $image = Image::create($dbData);

            if (empty($image->id)) {
                throw new \Exception("I can't get image id");
            }

            $this->translate->wrapCreate([ 'image_id' => $image->id, 'data' => ['alt' => $alt ] ]);

            $out[$key] = $image;

            $dirImg = Image::getImageDir($type, $refId, $image->id);
            if (!file_exists($dirImg)) {
                mkdir($dirImg, 0777, true);
            }
            \Intervention\Image\Laravel\Facades\Image::read($data)->save($dirImg.'/'.$name);

            $fileName = pathinfo($name, PATHINFO_FILENAME);
            $fileExt = pathinfo($name, PATHINFO_EXTENSION);

            foreach (self::$thumbs as $thumbName => $dimension) {
                $fileThumb = $dirImg.'/'.$fileName.'-'.$thumbName.'.'.$fileExt;
                \Intervention\Image\Laravel\Facades\Image::read($data)->resize($dimension['x'], $dimension['y'])->save($fileThumb);
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
        $images  = Image::getImagesByTypeAndRefId($type, $refId);

        foreach ($images  as $k => $img) {
            $images[$k]['alt'] = Image::getAltImg($img);
            $images[$k]['fs']  = Image::getAllImage($img, false);
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

        $images = Image::getImagesByTypeAndRefId($t, $refId);

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
