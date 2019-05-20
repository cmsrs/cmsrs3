<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
//use JWTAuth;

use App\Menu;
use Validator;


class MenuController extends Controller
{
  //protected $user;

  // public function __construct()
  // {
  //   $this->user = JWTAuth::parseToken()->authenticate();
  // }
  private $validationRules = [
      'name' => 'max:255|required',
      'position' => 'numeric'
  ];


  public function index()
  {
      $menus = Menu::get(['id',  'name', 'position'])->toArray();

      return response()->json(['success' => true, 'data'=> $menus], 200);
      //$ret = $this->menu->getAll();

      //var_dump($menus);
      //die('_____index______');
  }

  public function create(Request $request)
  {

    $data = $request->only('name', 'position');

    // $rules = [
    //     'name' => 'max:255|required',
    //     'position' => 'numeric'
    // ];
    $validator = Validator::make($data, $this->validationRules);
    if($validator->fails()) {
        return response()->json(['success'=> false, 'error'=> $validator->messages()], 200);
    }

    try{
      $ret = Menu::create( $data );
    } catch (\Exception $e) {
      return response()->json(['success'=> false, 'error'=> 'Add menu problem - exeption'], 200);
    }

    //var_dump($ret);

    return response()->json(['success'=> true]);
  }

  public function update(Request $request, $id)
  {

      //die('+++++++++++++++++++++++++++++++++++++++++++');

      //var_dump($menu->get());
      //var_dump($request->get(['name', 'position']));
      $menu = Menu::findOrFail($id);
      //die('+++++++++++++++++++++--++++++++++++++++++');

      //var_dump($menu);

      if(empty($menu)){
        return response()->json(['success'=> false, 'error'=> 'Menu not find'], 200);
      }

      $data = $request->only('name', 'position');
      $validator = Validator::make($data, $this->validationRules);
      if($validator->fails()) {
          return response()->json(['success'=> false, 'error'=> $validator->messages()], 200);
      }


      //$res = $menu->update($request->all());
      try{
        $res = $menu->update($data);
      } catch (\Exception $e) {
          return response()->json(['success'=> false, 'error'=> 'Update menu problem - exeption'], 200);
      }



      if(empty($res)){
        return response()->json(['success'=> false, 'error'=> 'Update menu problem'], 200);
      }

      //dump($res);

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
