<?php

namespace App\Http\Controllers\Cmsrs\Api;

use App\Http\Controllers\Controller;
use App\Models\Cmsrs\Page;
use App\Services\Cmsrs\ConfigService;
use App\Services\Cmsrs\MenuService;
use App\Services\Cmsrs\PageService;
use Illuminate\Http\Request;

class HeadlessController extends Controller
{
    public function __construct(
        protected ConfigService $configService,
        protected PageService $pageService,
        protected MenuService $menuService,
    ) {}

    public function getPagesByShortTitle(Request $request, $shortTitle)
    {
        if (empty($shortTitle)) {
            return response()->json(['success' => false, 'error' => 'Short title is required'], 200);
        }

        $pages = $this->pageService->getPagesByShortTitleWithImagesForGuest($shortTitle);

        return response()->json(['success' => true, 'data' => $pages], 200);
    }

    public function getAllPagesByType(Request $request, $type)
    {
        if (! in_array($type, ConfigService::arrGetPageTypes())) {
            return response()->json(['success' => false, 'error' => 'wrong type'], 200);
        }

        $pages = $this->pageService->getAllPagesWithImagesForGuest($type);

        return response()->json(['success' => true, 'data' => $pages], 200);
    }

    public function onePageItem(Request $request, $id)
    {
        $page = Page::find($id);

        if (empty($page)) {
            return response()->json(['success' => false, 'error' => 'Page not find'], 404);
        }

        if ($page->after_login) {
            return response()->json(['success' => false, 'error' => 'Unauthorized access'], 403);
        }

        if (! $page->published) {
            return response()->json(['success' => false, 'error' => 'Page not published'], 403);
        }

        $onePage = $this->pageService->getAllPagesWithImagesOneItem($page, null);

        return response()->json(['success' => true, 'data' => $onePage], 200);
    }

    public function index()
    {
        $menus = MenuService::getAllMenus();

        return response()->json(['success' => true, 'data' => $menus], 200);
    }
}
