<?php

namespace App\Http\Controllers\Cmsrs\Api;

use App\Http\Controllers\Controller;
use App\Models\Cmsrs\Page;
use App\Services\Cmsrs\ConfigService;
use App\Services\Cmsrs\HeadlessService;
use App\Services\Cmsrs\MenuService;
use App\Services\Cmsrs\PageService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class HeadlessController extends Controller
{
    public function __construct(
        protected ConfigService $configService,
        protected PageService $pageService,
        protected MenuService $menuService,
        protected HeadlessService $headlessService,
    ) {}

    public function getPagesByShortTitle(Request $request, $shortTitle)
    {
        if (empty($shortTitle)) {
            return response()->json(['success' => false, 'error' => 'Short title is required'], 200);
        }

        $pages = $this->headlessService->getPagesByShortTitleWithImages($shortTitle);

        return response()->json(['success' => true, 'data' => $pages], 200);
    }

    public function getAllPagesByType(Request $request, $type)
    {
        if (! in_array($type, ConfigService::arrGetPageTypes())) {
            return response()->json(['success' => false, 'error' => 'wrong type'], 200);
        }

        $pages = $this->headlessService->getAllPagesWithImages($type);

        return response()->json(['success' => true, 'data' => $pages], 200);
    }

    public function onePageItemByLang(Request $request, $id, $lang)
    {
        if (! in_array($lang, ConfigService::arrGetLangsEnv())) {
            return response()->json(['success' => false, 'error' => 'wrong lang'], 200);
        }

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

        $onePage = (new HeadlessService)->getAllPagesWithImagesOneItemByLang($page, $lang);

        return response()->json(['success' => true, 'data' => $onePage], 200);
    }

    public function getMenusByLang(Request $request, $lang)
    {
        if (! in_array($lang, ConfigService::arrGetLangsEnv())) {
            return response()->json(['success' => false, 'error' => 'wrong lang'], 200);
        }

        $menus = $this->headlessService->getAllUrlRelatedToMenusByLang($lang);

        return response()->json(['success' => true, 'data' => $menus], 200);
    }

    public function config()
    {
        try {
            $config = [];
            $config['langs'] = $this->configService->arrGetLangs();
            $config['default_lang'] = $this->configService->getDefaultLang();
            // $config['currency'] = $this->configService->getCurrency();
            // $config['demo_status'] = $this->configService->getDemoStatus();
            // $config['is_shop'] = $this->configService->getIsShop();
        } catch (\Exception $e) {
            Log::error('headless config ex: '.$e->getMessage().' line: '.$e->getLine().'  file: '.$e->getFile());

            return response()->json(['success' => false, 'error' => $e->getMessage().' Details in the log file.'], 200);
        }

        return response()->json(['success' => true, 'data' => $config], 200);
    }
}
