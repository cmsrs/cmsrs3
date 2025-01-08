<?php

namespace App\Http\Controllers\Cmsrs\Api;

use App\Http\Controllers\Controller;
use App\Models\Cmsrs\Page;
use App\Services\Cmsrs\ConfigService;
use App\Services\Cmsrs\ImageService;
use App\Services\Cmsrs\PageService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Validator;

class PageController extends Controller
{
    public function __construct(
        protected ConfigService $configService,
        protected PageService $pageService,
    ) {
        $this->validationRules['type'] = 'in:'.ConfigService::getPageTypes();

        $langs = $this->configService->arrGetLangs();
        foreach ($langs as $lang) {
            $this->validationRules['title.'.$lang] = 'max:255|required';
            $this->validationRules['short_title.'.$lang] = 'max:128|required';
            $this->validationRules['description.'.$lang] = 'max:1027';
        }
    }

    private $validationRules = [
        'published' => 'boolean',
        'commented' => 'boolean',
        'after_login' => 'boolean',
    ];

    public function oneItem(Request $request, $id, $lang)
    {
        $page = Page::find($id);

        if (empty($page)) {
            return response()->json(['success' => false, 'error' => 'Page not find'], 404);
        }

        try {
            $page = $this->pageService->getPageWithImages($page, $lang);
        } catch (\Exception $e) {
            Log::error('page add ex: '.$e->getMessage().' line: '.$e->getLine().'  file: '.$e->getFile().' for: '.var_export($e, true));

            return response()->json(['success' => false, 'error' => 'Get page with lang problem, details in the log file.'], 200); // .$e->getMessage()
        }

        return response()->json(['success' => true, 'data' => $page], 200);
    }

    public function oneItemAdmin(Request $request, $id, ?string $simple = null)
    {
        $page = Page::find($id);

        if (empty($page)) {
            return response()->json(['success' => false, 'error' => 'Page not find'], 404);
        }

        $onePage = $this->pageService->getAllPagesWithImagesOneItem($page, $simple);

        return response()->json(['success' => true, 'data' => $onePage], 200);
    }

    public function index()
    {
        $pages = $this->pageService->getAllPagesWithImages();

        return response()->json(['success' => true, 'data' => $pages], 200);
    }

    /**
     * we don't use this method
     */
    /*
    public function getFirstPageByTypeForGuest(Request $request, $type)
    {
        if (! in_array($type, ConfigService::arrGetPageTypes())) {
            return response()->json(['success' => false, 'error' => 'wrong type'], 200);
        }

        $page = $this->pageService->getFirstPageWithImagesForGuest($type);

        return response()->json(['success' => true, 'data' => $page], 200);
    }
    */

    public function getPagesByType(Request $request, $type)
    {
        $pages = $this->pageService->getAllPagesWithImages($type);

        return response()->json(['success' => true, 'data' => $pages], 200);
    }

    public function position(Request $request, $direction, $id)
    {
        $ret = PageService::swapPosition($direction, $id);

        return response()->json(['success' => $ret]);
    }

    public function create(Request $request)
    {
        $data = $request->only('title', 'short_title', 'description', 'published', 'commented', 'after_login', 'type', 'content', 'menu_id', 'page_id', 'images');
        $validator = Validator::make($data, $this->validationRules);
        if ($validator->fails()) {
            return response()->json(['success' => false, 'error' => $validator->messages()], 200);
        }

        // check unique
        $valid = PageService::checkIsDuplicateTitleByMenu($data);
        if (empty($valid['success'])) {
            return response()->json($valid, 200);
        }

        try {
            $page = $this->pageService->wrapCreate($data);
        } catch (\Exception $e) {
            Log::error('page add ex: '.$e->getMessage().' line: '.$e->getLine().'  file: '.$e->getFile()); // .' for: '.var_export($data, true )

            return response()->json(['success' => false, 'error' => 'Add page problem, details in the log file.'], 200); // .$e->getMessage()
        }

        return response()->json(['success' => true, 'data' => ['pageId' => $page->id, 'data' => $data]]);
    }

    public function update(Request $request, $id)
    {
        $page = Page::find($id);

        if (empty($page)) {
            return response()->json(['success' => false, 'error' => 'Page not find'], 200);
        }

        $data = $request->only('title', 'short_title', 'description', 'published', 'commented', 'after_login', 'type', 'content', 'menu_id', 'page_id', 'images'); // 'position',
        $validator = Validator::make($data, $this->validationRules);
        if ($validator->fails()) {
            return response()->json(['success' => false, 'error' => $validator->messages()], 200);
        }

        // check unique
        $valid = PageService::checkIsDuplicateTitleByMenu($data, $page->id);
        if (empty($valid['success'])) {
            return response()->json($valid, 200);
        }

        try {
            $data = PageService::validateMainPage($data, false);
            if (empty($data['published'])) {
                $this->pageService->unpublishedChildren($page);
            }
            $res = $this->pageService->wrapUpdate($page, $data);
            if (! empty($data['images']) && is_array($data['images'])) {
                ImageService::createImagesAndUpdateAlt($data['images'], 'page', $page->id);
                ImageService::updatePositionImages($data['images']);
            }
        } catch (\Exception $e) {
            Log::error('page update ex: '.$e->getMessage().' line: '.$e->getLine().'  file: '.$e->getFile().' for: '.var_export($e, true));

            return response()->json(['success' => false, 'error' => 'Update page problem - exception'], 200);
        }

        if (empty($res)) {
            return response()->json(['success' => false, 'error' => 'Update page problem'], 200);
        }

        return response()->json(['success' => true], 200);
    }

    public function delete(Request $request, $id)
    {
        $page = Page::find($id);

        if (empty($page)) {
            return response()->json(['success' => false, 'error' => 'Page not find'], 200);
        }

        $res = $this->pageService->deletePageOrProductWithImgs($page);
        if (empty($res)) {
            return response()->json(['success' => false, 'error' => 'Page delete problem'], 200);
        }

        return response()->json(['success' => true], 200);
    }
}
