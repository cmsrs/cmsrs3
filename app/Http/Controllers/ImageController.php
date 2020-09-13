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
      'alt' => 'max:255'
  ];

  public function getItemByTypeAndRefId(Request $request, $type,  $refId)
  {
    $images = Image::getImagesAndThumbsByTypeAndRefId(  $type,  $refId);

    return response()->json(['success' => true, 'data'=> $images], 200);
  }

  public function position(Request $request, $direction, $id)
  {
      $ret = Image::swapPosition($direction, $id);
      return response()->json(['success'=> $ret]);
  }

  public function delete(Request $request, $id)
  {
      $image = Image::find($id);

      if(empty($image)){
        return response()->json(['success'=> false, 'error'=> 'Image not find'], 200);
      }

      $res = $image->delete();
      if(empty($res)){
        return response()->json(['success'=> false, 'error'=> 'Update delete problem'], 200);
      }

      return response()->json(['success'=> true], 200);
  }

  public function update(Request $request, $id)
  {
    $image = Image::find($id);

    if(empty($image)){
      return response()->json(['success'=> false, 'error'=> 'Image not find'], 200);
    }

    $data = $request->only('alt');
    $validator = Validator::make($data, $this->validationRules);
    if($validator->fails()) {
        return response()->json(['success'=> false, 'error'=> $validator->messages()], 200);
    }  

    try{
      $res = $image->update($data);
    } catch (\Exception $e) {
        Log::error('image update ex: '.$e->getMessage().' line: '.$e->getLine().'  file: '.$e->getFile()  );
        return response()->json(['success'=> false, 'error'=> 'Update image problem - exeption'], 200);
    }

    if(empty($res)){
      return response()->json(['success'=> false, 'error'=> 'Update image problem'], 200);
    }

    return response()->json(['success'=> true], 200);
  }

}
