<?php

namespace App;

//use Illuminate\Database\Eloquent\Model;
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
        //'alt', 
        'position', 
        'page_id', 
        'product_id'
    ];

    static private  $type = [
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

    public function setTranslate( $objTranslate )
    {
        if( !empty($objTranslate) ){
            $this->translate = $objTranslate;
        }
    }

    public function getAllTranslate()
    {
      $imageId = $this->id;
      $isCache = env( 'CACHE_ENABLE', false );
      if($isCache){
        $ret = cache()->remember( 'imagetranslate_'.$imageId  , Carbon::now()->addYear(1), function() use($imageId) {
          return $this->translates()->where('image_id', $imageId )->get(['lang', 'column', 'value'])->toArray();
        });
      }else{
        $ret = $this->translates()->where('image_id', $imageId )->get(['lang', 'column', 'value'])->toArray();
      }

      return $ret;
    }    

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

    public function translates()
    {
        return $this->hasMany('App\Translate');
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

      $out[self::IMAGE_ORG] = $imgDir.'/'.$img->name;
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

    static public function createImagesAndUpdateAlt($images, $type,  $refId){
      $imagesCreate = [];
      $imagesUpdate = [];

      foreach($images as $image){
        if(!empty($image['id'])){
          $imagesUpdate[] = $image;
        }else{
          $imagesCreate[] = $image;
        }
      }

      //the order is important - first update then create
      if($imagesUpdate){
        (new Image)->updateImages($imagesUpdate);
      }
      if($imagesCreate){
        (new Image)->createImages($imagesCreate, $type,  $refId);
      }

      return true;    
    }

    public function updateImages($images){
      foreach($images as $image){
        //$objImage = Image::findOrFail($image['id']);
        //$objImage->update([ 'id' => $image['id'],  'alt' => $image['alt']]); //TODO
        //$this->createTranslate( [ 'image_id' => $this->id, 'data' => $image['alt'] ], false );

        //dump([ 'image_id' => $image['id'], 'data' => $image ]);
        //dd('_____jestem____');
        $this->translate->wrapCreate( [ 'image_id' => $image['id'], 'data' => $image ], false );    
      }
    }

    public function createImages($images, $type,  $refId ){
      //var_dump($images);

      $out = [];

      // \Illuminate\Support\Facades\Log::error('custom: '.var_export($images, true ) );
      foreach ($images as $key => $image) {
        $name = self::filter($image['name']);
        $alt = !empty($image['alt']) ? $image['alt'] : null;

        $data = $image['data'];

        if( empty( $strRefId = Image::$type[$type]) ){
            throw new \Exception("I can't get image type in createImages");
        }

        $dbData = [
            'name' => $name,
            //'alt' => $alt,
            'position' => Image::getNextPositionByTypeAndRefId( $type,  $refId ),
            $strRefId => $refId
        ];
        $image = Image::create($dbData);

        if( empty($image->id) ){
          throw new \Exception("I can't get image id");
        }

        $this->translate->wrapCreate( [ 'image_id' => $image->id, 'data' => ['alt' => $alt ] ] );  

        $out[$key] = $image;

        $dirImg = Image::getImageDir( $type,  $refId, $image->id );
        if (!file_exists($dirImg)) {
          mkdir($dirImg, 0777, true);
        }
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
      $images  = Image::getImagesByTypeAndRefId(  $type, $refId);

      foreach($images  as $k => $img){
        $images[$k]['alt'] = Image::getAltImg($img);
        $images[$k]['fs']  = Image::getAllImage($img, false);
        unset($img['translates']);
      }
      //dd( $images->toArray() );

      return $images;
    }

    static public function getAltImg( $objImg )
    {
      $out = [];          
      $translates = $objImg->translates->toArray();
      foreach($translates as $translate){
        if($translate['column'] == 'alt' ){
          $out[$translate['lang']] = $translate['value'];
        }
      }
      return $out;
    }

    //static public function getImagesByPageId($pageId = null)
    static public function getImagesByTypeAndRefId(  $type, $refId = null)
    {

      if( empty( $strRefId = Image::$type[$type]) ){
            throw new \Exception("I can't get image type in getImagesByTypeAndRefId");
      }

      $image = [];
      if( empty($refId) ){
        $image = Image::with(['translates'])
                  ->whereNull( $strRefId  )
                  ->orderBy('position', 'asc')
                  ->get()
                  ;
      }else{
        $image = Image::with(['translates'])
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
