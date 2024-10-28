<?php

namespace App\Http\Controllers\Cmsrs;

use App\Http\Controllers\Controller;
use App\Models\Cmsrs\Image;
//use JWTAuth;

//it is depend on type
//it is depend on type

use App\Services\Cmsrs\ImageService;
use Illuminate\Http\Request;

class ImageController extends Controller
{
    // private $validationRules = [
    //     'name' => 'max:255',
    // ];

    public function getItemByTypeAndRefId(Request $request, $type, $refId)
    {
        $images = ImageService::getImagesAndThumbsByTypeAndRefId($type, $refId);

        return response()->json(['success' => true, 'data' => $images], 200);
    }

    public function uploadImageByTypeAndRefId(Request $request, $type, $refId)
    {
        if (empty(Image::$type[$type])) {
            return response()->json(['success' => false, 'error' => 'page type not exist'], 404);
        }

        $strObj = '\\App\\Models\\Cmsrs\\'.ucfirst($type);
        $obj = (new $strObj)->find($refId);
        if (empty($obj)) {
            return response()->json(['success' => false, 'error' => 'obj not found'], 404);
        }

        $dataImage = $request->only('data', 'name');
        $objImage = new ImageService;
        $objImage->createImages([$dataImage], $type, $refId);

        return response()->json(['success' => true], 200);
    }

    public function position(Request $request, $direction, $id)
    {
        $ret = ImageService::swapPosition($direction, $id);

        return response()->json(['success' => $ret]);
    }

    public function delete(Request $request, $id)
    {
        $ids = explode(',', $id);
        $imageService = new ImageService;

        foreach ($ids as $itemId) {
            $image = Image::find($itemId);

            if (empty($image)) {
                return response()->json(['success' => false, 'error' => 'Image not find id='.$itemId], 200);
            }

            $res = $imageService->delete($image);
            if (empty($res)) {
                return response()->json(['success' => false, 'error' => 'Image delete problem id='.$itemId], 200);
            }
        }

        return response()->json(['success' => true], 200);
    }
}
