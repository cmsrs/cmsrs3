<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
//use JWTAuth;

use App\Page;
use App\Image;
use Validator;
use Illuminate\Support\Facades\Log;


class ImageController extends Controller
{

  private $validationRules = [
      'name' => 'max:255',
  ];

  public function getItemByPageId(Request $request, $pageId)
  {
    //var_dump($pageId);
    $images = Image::getImagesByPageId($pageId);

    return response()->json(['success' => true, 'data'=> $images], 200);
    //var_dump($data);
    //die('======');
  }

  public function position(Request $request, $direction, $id)
  {
      $ret = Image::swapPosition($direction, $id);
      return response()->json(['success'=> $ret]);
  }

  public function delete(Request $request, $id)
  {
      $image = Image::find($id);
      //$pageId = $image->page_id;

      if(empty($image)){
        return response()->json(['success'=> false, 'error'=> 'Image not find'], 200);
      }


      //$dirFiles = Image::getImageDir( $image->page_id, $image->id );
      //echo $dirToDel."\n";

      $image->deleteImg();
      $res = $image->delete();
      //var_dump($res);
      if(empty($res)){
        return response()->json(['success'=> false, 'error'=> 'Update delete problem'], 200);
      }

      return response()->json(['success'=> true], 200);
  }


/*
  public function index()
  {
      $pages = Page::query()->orderBy('position', 'asc' )->get(['id', 'title', 'short_title', 'published', 'position', 'type', 'content', 'menu_id'])->toArray();

      return response()->json(['success' => true, 'data'=> $pages], 200);
  }


  public function update(Request $request, $id)
  {
      $page = Page::findOrFail($id);

      if(empty($page)){
        return response()->json(['success'=> false, 'error'=> 'Page not find'], 200);
      }

      $data = $request->only('title', 'short_title', 'published',  'type', 'content', 'menu_id'); //'position',
      $validator = Validator::make($data, $this->validationRules);
      if($validator->fails()) {
          return response()->json(['success'=> false, 'error'=> $validator->messages()], 200);
      }

      try{
        $res = $page->update($data);
      } catch (\Exception $e) {
          Log::error('page update ex: '.$e->getMessage() );
          return response()->json(['success'=> false, 'error'=> 'Update page problem - exeption'], 200);
      }

      if(empty($res)){
        return response()->json(['success'=> false, 'error'=> 'Update page problem'], 200);
      }

      return response()->json(['success'=> true], 200);
  }
*/

}
