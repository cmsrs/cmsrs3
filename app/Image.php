<?php

namespace App;

use Illuminate\Database\Eloquent\Model;


class Image extends Model
{
    const IMAGE_DIR = 'images';

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
        'name', 'alt', 'position', 'page_id', 'product_id'
    ];

    static private  $type = [
        'page' => 'page_id',
        'product' => 'product_id'
    ];


    /**
    * TODO - mmove function to helper
    */
    static  public function filter($string, $delimiter = '-' )
    {
        $to_replace   = array('ą', 'ę', 'ó', 'ś', 'ć', 'ń', 'ł', 'ż', 'ź', 'Ą', 'Ę', 'Ó', 'Ś', 'Ć', 'Ń', 'Ł', 'Ż', 'Ź', '%20',' ');
        $replace_with = array('a', 'e', 'o', 's', 'c', 'n', 'l', 'z', 'z', 'A', 'E', 'O', 'S', 'C', 'N', 'L', 'Z', 'Z', $delimiter, $delimiter );
        //$filter = array('!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '=', '+', '[', ']', ';', ':', '"', '\'', '<', '>', '/', '?', '.');
        $filter = array('!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '=', '+', '[', ']', ';', ':', '"', '\'', '<', '>', '/', '?');

        $string = str_replace($to_replace, $replace_with, $string);
        $string = str_replace($filter, '', $string);
        return   strtolower( trim(  $string) );
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
        unlink($path);
      }
    }

    public function getHtmlImage( $type = self::IMAGE_THUMB_TYPE_MEDIUM ){
      $img = self::getAllImage($this, false);
      return $img[$type];
    }

    public function getRefId()
    {
        if($this->page_id){
            return $this->page_id;
        }
        if($this->product_id){
            return $this->product_id;
        }
        return null;
    }

    public function getRefType()
    {
        if($this->page_id){
            return 'page';
        }
        if($this->product_id){
            return 'product';
        }
        return null;
    }



    /**
    *  return all thumbs and main img
    */
    public  static  function getAllImage($img, $isAbs = true){
      $out = [];
      $objImg = Image::find($img->id);
      if(empty($objImg)){
        return false;
      }
      $imgDir = Image::getImageDir( $objImg->getRefType(),  $objImg->getRefId(), $img->id, $isAbs );
      $fileName = pathinfo($img->name, PATHINFO_FILENAME );
      $fileExt = pathinfo($img->name, PATHINFO_EXTENSION );

      $out['org'] = $imgDir.'/'.$img->name;
      foreach (self::$thumbs as $imgName => $dimention) {
        $out[$imgName] = $imgDir.'/'.$fileName.'-'.$imgName.'.'.$fileExt;
      }

      return $out;
    }

    static public function getImageDir( $type, $refId, $imageId, $isAbs = true )
    {
        if( empty(  Image::$type[$type]) ){
            throw new \Exception("I can't get image type");
        }

        $url = Image::IMAGE_DIR.'/'. $type .'/'.$refId.'/'.$imageId;

        if($isAbs){
            return public_path($url);
        }

        return '/'.$url;
    }

    static public function createImages($images, $type,  $refId){
      //var_dump($images);
      $out = [];
      foreach ($images as $key => $image) {
        $name = self::filter($image['name']);
        $alt = empty($image['alt']) ? null : $image['alt'];
        //$name = str_file($image['name'], "-");

        $data = $image['data'];

        if( empty( $strRefId = Image::$type[$type]) ){
            throw new \Exception("I can't get image type in createImages");
        }

        $dbData = [
            'name' => $name,
            'position' => Image::getNextPositionByTypeAndRefId( $type,  $refId ),
            'alt' => $alt,
            $strRefId => $refId
        ];
        $image = Image::create($dbData);

        if( empty($image->id) ){
          throw new \Exception("I can't get image id");
        }
        $out[$key] = $image;

        $dirImg = Image::getImageDir( $type,  $refId, $image->id );
        if (!file_exists($dirImg)) {
          mkdir($dirImg, 0777, true);
        }
        //var_dump($dirImg);
        \LibImage::make($data)->save($dirImg.'/'.$name);

        $fileName = pathinfo($name, PATHINFO_FILENAME );
        $fileExt = pathinfo($name, PATHINFO_EXTENSION );

        foreach (self::$thumbs as $thumbName => $dimension) {
          $fileThumb = $dirImg.'/'.$fileName.'-'.$thumbName.'.'.$fileExt;
          \LibImage::make($data)->resize($dimension['x'], $dimension['y'])->save($fileThumb);

        }

      }
      return $out;
    }

    static public function getNextPositionByTypeAndRefId( $type,  $refId )
    //static public function getNextPositionByPageId( $pageId )
    {
      if( empty( $strRefId = Image::$type[$type]) ){
           throw new \Exception("I can't get image type in getNextPositionByTypeAndRefId");
      }

      if( empty($refId) ){
        $image = Image::query()
                  ->whereNull( $strRefId  )
                  ->orderBy('position', 'desc')
                  ->first()
                  ;
      }else{
        $image = Image::query()
                  ->where( $strRefId, '=', $refId )
                  ->orderBy('position', 'desc')
                  ->first()
                  ;
      }

      if( !$image ){
        return 1;
      }
      return  $image->position+1;
    }


    //static public function getImagesAndThumbsByPageId($pageId = null)
    static public function getImagesAndThumbsByTypeAndRefId(  $type, $refId = null)
    {
        //echo "++++++++++++";

      //$images  = Image::getImagesByPageId($pageId);
      $images  = Image::getImagesByTypeAndRefId(  $type, $refId);

      //dump($images);

      foreach($images  as $k => $img){
        $images[$k]['fs']  = Image::getAllImage($img, false);
      }
      //echo public_path();

      return $images;
    }

    //static public function getImagesByPageId($pageId = null)
    static public function getImagesByTypeAndRefId(  $type, $refId = null)
    {

      if( empty( $strRefId = Image::$type[$type]) ){
            throw new \Exception("I can't get image type in getImagesByTypeAndRefId");
      }

      $image = [];
      if( empty($refId) ){
        $image = Image::query()
                  ->whereNull( $strRefId  )
                  ->orderBy('position', 'asc')
                  ->get()
                  ;
      }else{
        $image = Image::query()
                  ->where( $strRefId, '=', $refId )
                  ->orderBy('position', 'asc')
                  ->get()
                  ;
      }
      return $image;
    }

    static public function swapPosition($direction, $id)
    {

      $image = Image::find($id);
      if( !$image ){
          return false;
      }
      $pageId = $image->page_id;
      $images = Image::getImagesByTypeAndRefId( 'page', $pageId);

      $countImages = count($images);
      if($countImages < 2){
        return false;
      }

      foreach ($images as $key => $img) {

        if( ($img->id == $id)  ){
          if( $direction === "up" ){
            $swapKey = ( $key === 0 ) ?  $countImages - 1 : $key - 1;
          }

          if( $direction === "down" ){
            $swapKey = ( $key === ($countImages - 1) ) ? 0 : $key + 1;
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
