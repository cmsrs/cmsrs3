<?php

namespace App\Services\Cmsrs;

use App\Models\Cmsrs\Menu;
use App\Models\Cmsrs\Page;

class HeadlessService extends BaseService
{
    private $pageService;

    private $menuService;

    public function __construct()
    {
        $this->pageService = new PageService;
        $this->menuService = new MenuService;
    }

    public function getPagesByShortTitleWithImages($shortTitle)
    {
        $defaultLang = ConfigService::getDefaultLang();

        $pages = Page::with(['translates', 'contents'])
            ->where('published', true)
            ->where('after_login', false)
            ->whereHas('translates', function ($query) use ($shortTitle, $defaultLang) {
                $query->where('lang', $defaultLang)
                    ->where('column', 'short_title')
                    ->where('value', 'like', "%$shortTitle%");
            })
            ->orderBy('position', 'asc')
            ->get($this->pageFields)
            ->toArray();

        $i = 0;
        $out = [];
        foreach ($pages as $page) {
            $out[$i] = $this->getPageDataFormat($page);
            $out[$i]['images'] = ImageService::getImagesAndThumbsByTypeAndRefId('page', $page['id']);
            $i++;
        }

        return $out;
    }

    public function getAllPagesWithImages($type)
    {
        if (! in_array($type, ConfigService::arrGetPageTypes())) {
            throw new \Exception('Wrong type : '.$type);
        }

        $pages = Page::with(['translates', 'contents'])->where('type', $type)->where('published', true)->where('after_login', false)->orderBy('position', 'asc')->get($this->pageFields)->toArray();

        $i = 0;
        $out = [];
        foreach ($pages as $page) {
            $out[$i] = $this->getPageDataFormat($page);
            $out[$i]['images'] = ImageService::getImagesAndThumbsByTypeAndRefId('page', $page['id']);
            $i++;
        }

        return $out;
    }

    /**
     * it is very similar to resources/views/includes/header.blade.php
     * it is very similar to getAllUrlRelatedToMenus too
     * and in tests (the same name)
     * it is always not auth - it is different
     */
    public function getAllUrlRelatedToMenusByLang($lang)
    {
        // cms link
        // see in: resources/views/includes/header.blade.php

        $urlInMenu = [];
        $menus = Menu::orderBy('position', 'asc')->get();
        $j = 0;
        foreach ($menus as $menu) {
            $pagesPublishedAndAccess = $this->pagesPublishedAndAccessNotAuth($menu)->get(); // !! it is different getAllUrlRelatedToMenus in tests
            if ($pagesPublishedAndAccess->count() == 1) {
                $urlInMenu[$j]['menu_name'] = $this->pageService->translatesByColumnAndLang($pagesPublishedAndAccess->first(), 'short_title', $lang); // to nie jest blad
                $urlInMenu[$j]['url'] = $this->pageService->getUrl($pagesPublishedAndAccess->first(), $lang);
                $urlInMenu[$j]['page_id'] = $pagesPublishedAndAccess->first()->id;
                $urlInMenu[$j]['pages'] = [];
            } else {
                $urlInMenu[$j]['menu_name'] = $this->menuService->translatesByColumnAndLang($menu, 'name', $lang);
                $i = 0;
                foreach ($this->pagesPublishedTree($pagesPublishedAndAccess) as $pageMenu) {
                    $urlInMenu[$j]['pages'][$i] = $this->getPageData($pageMenu, $lang);
                    if (! empty($pageMenu['children']) && ! empty($pageMenu->published)) {
                        $ii = 0;
                        foreach ($pageMenu['children'] as $p) {
                            $urlInMenu[$j]['pages'][$i]['children'][$ii] = $this->getPageData($p, $lang);
                            $ii++;
                        }
                    }
                    $i++;
                }
            }
            $j++;
        }

        return $urlInMenu;
    }

    private function getPageData($page, $lang)
    {
        $PageData = [];
        $PageData['url'] = $this->pageService->getUrl($page, $lang);
        $PageData['short_title'] = $this->pageService->translatesByColumnAndLang($page, 'short_title', $lang);
        $PageData['page_id'] = $page->id;

        return $PageData;
    }

    public function getAllPagesWithImagesOneItemByLang(Page $mPage, $lang)
    {
        $page = (new Page)->where('id', $mPage->id)->with(['translates', 'contents'])->orderBy('position', 'asc')->first()->toArray();

        $formatPage = $this->getPageDataFormat($page);
        $formatPage['images'] = ImageService::getImagesAndThumbsByTypeAndRefId('page', $page['id']);

        return $formatPage;
    }
}
