<?php

namespace App\Http\Controllers\Cmsrs\Api;

use App\Http\Controllers\Controller;
use App\Models\Cmsrs\Image;
use App\Services\Cmsrs\ImageService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class ImageController extends Controller
{
    // private $validationRules = [
    //     'name' => 'max:255',
    // ];

    public function __construct(
        protected ImageService $imageService,
    ) {}

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
        try {
            $this->imageService->createImages([$dataImage], $type, $refId);
        } catch (\Exception $e) {
            // 'Allowed memory size of 134217728 bytes exhausted - therefor i removed: .var_export($e, true) on server
            Log::error('upload images: '.$e->getMessage().' line: '.$e->getLine().'  file: '.$e->getFile());

            return response()->json(['success' => false, 'error' => $e->getMessage()], 200);
        }

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

        foreach ($ids as $itemId) {
            $image = Image::find($itemId);

            if (empty($image)) {
                return response()->json(['success' => false, 'error' => 'Image not find id='.$itemId], 200);
            }

            $res = $this->imageService->delete($image);
            if (empty($res)) {
                return response()->json(['success' => false, 'error' => 'Image delete problem id='.$itemId], 200);
            }
        }

        return response()->json(['success' => true], 200);
    }
}
