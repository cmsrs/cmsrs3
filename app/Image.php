<?php

namespace App;

use Illuminate\Database\Eloquent\Model;


class Image extends Model
{
    const IMAGE_DIR = 'images';

    public static $thumbs = [
      'small' => [
        'x' => 100,
        'y' => 100
      ],
      'medium' => [
        'x' => 300,
        'y' => 300
      ]
    ];

    protected $fillable = [
        'name', 'position', 'page_id'
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
      //echo "______________________hhh_____________";

      $this->deleteImg();
      return parent::delete();
    }

    private function deleteImg()
    {
      $allImg = self::getAllImage($this);
      foreach ($allImg as $key => $path) {
        unlink($path);
      }

      // $imgDir = Image::getImageDir( $this->page_id, $this->id );
      // $fileName = pathinfo($this->name, PATHINFO_FILENAME );
      // $imgPathDel = $imgDir.'/'.$fileName.'*.*';
      // $filesToDel = glob($imgPathDel);
      // foreach ($filesToDel as $path) {
      //   //echo "\n"."kasuje= ".$path;
      //   unlink($path);
      // }
    }

    /**
    *  return all thumbs and main img
    */
    public  static  function getAllImage($img, $isAbs = true){
      $out = [];
      $imgDir = Image::getImageDir( $img->page_id, $img->id, $isAbs );
      $fileName = pathinfo($img->name, PATHINFO_FILENAME );
      $fileExt = pathinfo($img->name, PATHINFO_EXTENSION );

      $out['org'] = $imgDir.'/'.$img->name;
      foreach (self::$thumbs as $imgName => $dimention) {
        $out[$imgName] = $imgDir.'/'.$fileName.'-'.$imgName.'.'.$fileExt;
      }

      // $imgPathDel = $imgDir.'/'.$fileName.'*.*';
      // $filesToDel = glob($imgPathDel);
      // foreach ($filesToDel as $path) {
      //   $out[] =  $path;
      // }

      return $out;
    }



    // static public function createEmptyRecord(){
    // }

    // static public function getImgPath( $imageId, $pageId, $name )
    // {
    //   return Image::IMAGE_DIR.'/'.$pageId.'/'.$imageId.'-'.$name;
    // }
    //
    // static public function getImagePath( $pageId, $imageId, $name )
    // {
    //   return public_path( Image::IMAGE_DIR.'/'.$pageId.'/'.$imageId.'/'.$name);
    // }

    static public function getImageDir( $pageId, $imageId, $isAbs = true )
    {
      $url = Image::IMAGE_DIR.'/'.$pageId.'/'.$imageId;

      if($isAbs){
        return public_path($url);
      }

      return '/'.$url;
    }

    static public function createImages($images, $pageId){
      //var_dump($images);
      $out = [];
      foreach ($images as $key => $image) {
        $name = self::filter($image['name']);
        $data = $image['data'];

        $dbData = [
            'name' => $name,
            'position' => Image::getNextPositionByPageId( $pageId ),
            'page_id' => $pageId
        ];
        $image = Image::create($dbData);

        if( empty($image->id) ){
          throw new \Exception("I can't get image id");
        }
        $out[$key] = $image;

        //var_dump($name);
        //var_dump($data);

        $dirImg = Image::getImageDir( $pageId, $image->id );
        //$dirImg = public_path( Image::IMAGE_DIR.'/'.$pageId.'/'.$image->id);
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

          // echo "\n".$fileThumb;
          // print_r($dimension);
          // code...
        }



        //\LibImage::make('public/foo.jpg')->resize(320, 240);


      }
      return $out;
    }

    static public function getNextPositionByPageId( $pageId )
    {

      if( empty($pageId) ){
        $image = Image::query()
                  ->whereNull( 'page_id'  )
                  ->orderBy('position', 'desc')
                  ->first()
                  ;
      }else{
        $image = Image::query()
                  ->where( 'page_id', '=', $pageId )
                  ->orderBy('position', 'desc')
                  ->first()
                  ;
      }

      if( !$image ){
        return 1;
      }
      return  $image->position+1;
    }

    static public function getImagesAndThumbsByPageId($pageId = null)
    {
      $images  = Image::getImagesByPageId($pageId);
      foreach($images  as $k => $img){
        $images[$k]['fs']  = Image::getAllImage($img, false);
      }
      //echo public_path();

      return $images;
    }

    static public function getImagesByPageId($pageId = null)
    {
      $image = [];
      if( empty($pageId) ){
        $image = Image::query()
                  ->whereNull( 'page_id'  )
                  ->orderBy('position', 'asc')
                  ->get()
                  ;
      }else{
        $image = Image::query()
                  ->where( 'page_id', '=', $pageId )
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
      $images = Image::getImagesByPageId($pageId);

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
