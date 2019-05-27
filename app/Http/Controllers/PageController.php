<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
//use JWTAuth;

use App\Page;
use Validator;
use Illuminate\Support\Facades\Log;


class PageController extends Controller
{

  private $validationRules = [
      //'name' => 'max:255|required',
      //'position' => 'numeric'

      'title' => 'max:255|required',
      'short_title' => 'max:128',
      'published' => 'boolean',
      //'position'=> 'numeric',
      'type' => 'in:cms,gallery'
      // 'type' => [
      //     'required',
      //     Rule::in(['cms', 'gallery']),
      // ]
      //'menu_id' => 'integer'
  ];

  public function index()
  {
      $pages = Page::query()->orderBy('position', 'asc' )->get(['id', 'title', 'short_title', 'published', 'position', 'type', 'menu_id'])->toArray();

      return response()->json(['success' => true, 'data'=> $pages], 200);
  }

  public function position(Request $request, $direction, $id)
  {
      $ret = Page::swapPosition($direction, $id);
      return response()->json(['success'=> $ret]);
  }


  public function create(Request $request)
  {

    $data = $request->only('title', 'short_title', 'published',  'type', 'menu_id');


    $menuId = empty($data['menu_id']) ? null : $data['menu_id'];
    $data['position'] = Page::getNextPositionByMenuId($menuId);



    $validator = Validator::make($data, $this->validationRules);
    if($validator->fails()) {
        return response()->json(['success'=> false, 'error'=> $validator->messages()], 200);
    }

    try{
      $ret = Page::create( $data );
    } catch (\Exception $e) {
      Log::error('page add ex: '.$e->getMessage() );
      return response()->json(['success'=> false, 'error'=> 'Add page problem - exeption'], 200);
    }


    return response()->json(['success'=> true]);
  }

  public function update(Request $request, $id)
  {


      $page = Page::findOrFail($id);

      if(empty($page)){
        return response()->json(['success'=> false, 'error'=> 'Page not find'], 200);
      }

      $data = $request->only('title', 'short_title', 'published',  'type', 'menu_id'); //'position',
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

  public function delete(Request $request, $id)
  {
      $page = Page::find($id);

      if(empty($page)){
        return response()->json(['success'=> false, 'error'=> 'Page not find'], 200);
      }

      $res = $page->delete();
      //var_dump($res);
      if(empty($res)){
        return response()->json(['success'=> false, 'error'=> 'Update delete problem'], 200);
      }

      return response()->json(['success'=> true], 200);
  }
}
