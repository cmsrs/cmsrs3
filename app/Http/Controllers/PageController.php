<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Page;
use App\Image;
use Validator;
use Illuminate\Support\Facades\Log;


class PageController extends Controller
{

  private $validationRules = [
      //'name' => 'max:255|required',
      //'position' => 'numeric'

      'title' => 'max:255|required',
      'short_title' => 'max:128',
      'description' => 'max:1027',
      'published' => 'boolean',
      'commented' => 'boolean',
      //'position'=> 'numeric',
      'type' => 'in:cms,gallery,shop'
  ];

  public function index()
  {
      $pages = Page::getAllPagesWithImages();

      // $pages = Page::query()->orderBy('position', 'asc' )->get(['id', 'title', 'short_title', 'published', 'position', 'type', 'content', 'menu_id'])->toArray();
      // foreach ($pages as $key => $page) {
      //   $pages[$key]['images'] = Image::getImagesAndThumbsByPageId($page['id'], false);
      // }

      return response()->json(['success' => true, 'data'=> $pages], 200);
  }

  public function getPagesByType(Request $request, $type)
  {

      //      $validator = Validator::make( ['type' => $type] , [
      //          'type' => $this->validationRules['type'],
      //      ]);
      //      $tmp = $validator->fails();

      $pages = Page::getAllPagesWithImages($type);

      return response()->json(['success' => true, 'data'=> $pages], 200);
  }


  public function position(Request $request, $direction, $id)
  {
      $ret = Page::swapPosition($direction, $id);
      return response()->json(['success'=> $ret]);
  }


  public function create(Request $request)
  {

    $data = $request->only('title', 'short_title', 'description', 'published', 'commented',  'type', 'content', 'menu_id', 'page_id', 'images');    
    $validator = Validator::make($data, $this->validationRules);
    if($validator->fails()) {
        return response()->json(['success'=> false, 'error'=> $validator->messages()], 200);
    }

    try{
      $page = Page::wrapCreate($data);
    } catch (\Exception $e) {
      Log::error('page add ex: '.$e->getMessage().' line: '.$e->getLine().'  file: '.$e->getFile() ); //.' for: '.var_export($data, true )
      return response()->json(['success'=> false, 'error'=> 'Add page problem, details in the log file.'], 200); //.$e->getMessage()
    }

    return response()->json(['success'=> true, 'data' => ['pageId' => $page->id, 'data' => $data] ]);
  }

  public function update(Request $request, $id)
  {
      $page = Page::findOrFail($id);

      if(empty($page)){
        return response()->json(['success'=> false, 'error'=> 'Page not find'], 200);
      }

      $data = $request->only('title', 'short_title', 'description', 'published', 'commented', 'type', 'content', 'menu_id', 'page_id', 'images'); //'position',
      $validator = Validator::make($data, $this->validationRules);
      if($validator->fails()) {
          return response()->json(['success'=> false, 'error'=> $validator->messages()], 200);
      }

      try{
        $res = $page->update($data);
        if( !empty($data['images']) && is_array($data['images']) ){
          Image::createImagesAndUpdateAlt($data['images'], 'page', $page->id);
        }
      } catch (\Exception $e) {
          Log::error('page update ex: '.$e->getMessage().' line: '.$e->getLine().'  file: '.$e->getFile()  ); //.' for: '.var_export($data, true )
          return response()->json(['success'=> false, 'error'=> 'Update page problem - exeption'], 200);
      }



      if(empty($res)){
        return response()->json(['success'=> false, 'error'=> 'Update page problem'], 200);
      }

      return response()->json(['success'=> true], 200);
  }

  public function delete(Request $request, $id)
  {
      $page = Page::find($id);

      if(empty($page)){
        return response()->json(['success'=> false, 'error'=> 'Page not find'], 200);
      }

      $res = $page->delete();
      if(empty($res)){
        return response()->json(['success'=> false, 'error'=> 'Page delete problem'], 200);
      }

      return response()->json(['success'=> true], 200);
  }
}
