<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
//use JWTAuth;

use App\Menu;
use Validator;


class MenuController extends Controller
{
  private $validationRules = [
      'name' => 'max:255|required',
      'position' => 'numeric'
  ];


  public function index()
  {
      $menus = Menu::getAllMenus();
      //var_dump( $menus  );

      return response()->json(['success' => true, 'data'=> $menus], 200);
  }

  public function position(Request $request, $direction, $id)
  {
      $ret = Menu::swapPosition($direction, $id);
      return response()->json(['success'=> $ret]);
  }

  public function create(Request $request)
  {

    $data = $request->only('name');

    $validator = Validator::make($data, $this->validationRules);
    if($validator->fails()) {
        return response()->json(['success'=> false, 'error'=> $validator->messages()], 200);
    }

    try{
      Menu::wrapCreate($data);
    } catch (\Exception $e) {
      Log::error('menu add ex: '.$e->getMessage() );
      return response()->json(['success'=> false, 'error'=> 'Add menu problem - exeption'], 200);
    }


    return response()->json(['success'=> true]);
  }

  public function update(Request $request, $id)
  {

      $menu = Menu::findOrFail($id);

      if(empty($menu)){
        return response()->json(['success'=> false, 'error'=> 'Menu not find'], 200);
      }

      $data = $request->only('name');
      //, 'position'

      $validator = Validator::make($data, $this->validationRules);
      if($validator->fails()) {
          return response()->json(['success'=> false, 'error'=> $validator->messages()], 200);
      }

      try{
        $res = $menu->update($data);
      } catch (\Exception $e) {
          Log::error('menu update ex: '.$e->getMessage() );
          return response()->json(['success'=> false, 'error'=> 'Update menu problem - exeption'], 200);
      }

      if(empty($res)){
        return response()->json(['success'=> false, 'error'=> 'Update menu problem'], 200);
      }

      return response()->json(['success'=> true], 200);
  }

  public function delete(Request $request, $id)
  {
      $menu = Menu::find($id);

      if(empty($menu)){
        return response()->json(['success'=> false, 'error'=> 'Menu not find'], 200);
      }

      $res = $menu->delete();
      //var_dump($res);
      if(empty($res)){
        return response()->json(['success'=> false, 'error'=> 'Update delete problem'], 200);
      }

      return response()->json(['success'=> true], 200);
  }

}
