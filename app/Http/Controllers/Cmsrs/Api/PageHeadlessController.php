<?php

namespace App\Http\Controllers\Cmsrs\Api;

use App\Http\Controllers\Controller;
use App\Services\Cmsrs\ConfigService;
use App\Services\Cmsrs\PageService;
use Illuminate\Http\Request;

class PageHeadlessController extends Controller
{
    public function __construct(
        protected ConfigService $configService,
        protected PageService $pageService,
    ) {
    }

    public function getPagesByShortTitleForGuest(Request $request, $shortTitle)
    {
        if (empty($shortTitle)) {
            return response()->json(['success' => false, 'error' => 'Short title is required'], 200);
        }

        $pages = $this->pageService->getPagesByShortTitleWithImagesForGuest($shortTitle);

        return response()->json(['success' => true, 'data' => $pages], 200);
    }

    public function getAllPagesByTypeForGuest(Request $request, $type)
    {
        if (! in_array($type, ConfigService::arrGetPageTypes())) {
            return response()->json(['success' => false, 'error' => 'wrong type'], 200);
        }

        $pages = $this->pageService->getAllPagesWithImagesForGuest($type);

        return response()->json(['success' => true, 'data' => $pages], 200);
    }

}
