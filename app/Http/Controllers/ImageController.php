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
        'name' => 'max:255'
    ];

    public function getItemByTypeAndRefId(Request $request, $type, $refId)
    {
        $images = Image::getImagesAndThumbsByTypeAndRefId($type, $refId);

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

        if (empty($image)) {
            return response()->json(['success'=> false, 'error'=> 'Image not find'], 200);
        }

        $res = $image->delete();
        if (empty($res)) {
            return response()->json(['success'=> false, 'error'=> 'Update delete problem'], 200);
        }

        return response()->json(['success'=> true], 200);
    }
}
