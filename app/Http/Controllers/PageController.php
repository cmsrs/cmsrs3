<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Page;
use App\Config;
use App\Image;
use Validator;
use Illuminate\Support\Facades\Log;


class PageController extends Controller
{

  public function __construct(){
    $this->validationRules['type'] = 'in:'.Config::getPageTypes();

    $langs = (new Config)->arrGetLangs();
    foreach($langs as $lang){
      $this->validationRules['title.'.$lang] = 'max:255|required';
      $this->validationRules['short_title.'.$lang] = 'max:128|required';
      $this->validationRules['description.'.$lang] = 'max:1027';      
    }

  }

  private $validationRules = [
      'published' => 'boolean',
      'commented' => 'boolean',
      'after_login' => 'boolean',
  ];
  
  public function oneItem(Request $request, $id, $lang)
  {
    $page = Page::find($id);

    if(empty($page)){
      return response()->json(['success'=> false, 'error'=> 'Page not find'], 404);
    }

    try{
      $page = $page->getPageWithImages($lang);
    } catch (\Exception $e) {
      Log::error('page add ex: '.$e->getMessage().' line: '.$e->getLine().'  file: '.$e->getFile() ); //.' for: '.var_export($data, true )
      return response()->json(['success'=> false, 'error'=> 'Get page with lang problem, details in the log file.'], 200); //.$e->getMessage()
    }

    return response()->json(['success' => true, 'data'=> $page], 200);
  }

  
  public function oneItemAdmin(Request $request, $id)
  {
    $page = Page::find($id);

    if(empty($page)){
      return response()->json(['success'=> false, 'error'=> 'Page not find'], 404);
    }

    $onePage = $page->getAllPagesWithImagesOneItem();

    return response()->json(['success' => true, 'data'=> $onePage], 200);
  }

  public function index()
  {
      $pages = (new Page)->getAllPagesWithImages();


      return response()->json(['success' => true, 'data'=> $pages], 200);
  }

  public function getPagesByType(Request $request, $type)
  {
      $pages = (new Page)->getAllPagesWithImages($type);

      return response()->json(['success' => true, 'data'=> $pages], 200);
  }


  public function position(Request $request, $direction, $id)
  {
      $ret = Page::swapPosition($direction, $id);
      return response()->json(['success'=> $ret]);
  }


  public function create(Request $request)
  {
    $data = $request->only('title', 'short_title', 'description', 'published', 'commented', 'after_login',  'type', 'content', 'menu_id', 'page_id', 'images');    
    $validator = Validator::make($data, $this->validationRules);
    if($validator->fails()) {
        return response()->json(['success'=> false, 'error'=> $validator->messages()], 200);
    }

    //check unique
    $valid = Page::checkIsDuplicateTitleByMenu($data);
    if( empty($valid['success']) ){
      return response()->json($valid, 200);
    }

    try{      
      $page =  (new Page)->wrapCreate($data);
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

      $data = $request->only('title', 'short_title', 'description', 'published', 'commented', 'after_login',  'type', 'content', 'menu_id', 'page_id', 'images'); //'position',
      $validator = Validator::make($data, $this->validationRules);
      if($validator->fails()) {
          return response()->json(['success'=> false, 'error'=> $validator->messages()], 200);
      }

      //check unique
      $valid = Page::checkIsDuplicateTitleByMenu($data, $page->id);
      if( empty($valid['success']) ){
        return response()->json($valid, 200);
      }      

      try{
        $data = Page::validateMainPage($data, false);
        if( empty($data['published']) ){
          $page->unpublishedChildren();
        }
        $res = $page->wrapUpdate($data);
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
