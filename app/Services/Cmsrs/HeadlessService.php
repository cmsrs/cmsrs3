<?php

declare(strict_types=1);

namespace App\Services\Cmsrs;

use App\Models\Cmsrs\Menu;
use App\Models\Cmsrs\Page;
use App\Services\Cmsrs\Helpers\LangHelperService;

class HeadlessService extends BaseService
{
    public function __construct(private ConfigService $configService, private PageService $pageService, private MenuService $menuService, private ImageService $imageService) {}

    /**
     * @return array<string, string>
     */
    public function translatePageColumn(Page $page, string $column): array
    {
        $langs = $this->configService->arrGetLangs();

        $out = [];

        foreach ($langs as $lang) {
            $out[$lang] = $this->pageService->translatesByColumnAndLang($page, $column, $lang) ?? '';
        }

        return $out;
    }

    /**
     * @return array<string, string>
     */
    public function translateMenuColumn(Menu $menu, string $column): array
    {
        $langs = $this->configService->arrGetLangs();

        $out = [];

        foreach ($langs as $lang) {
            $out[$lang] = $this->menuService->translatesByColumnAndLang($menu, $column, $lang) ?? '';
        }

        return $out;
    }

    /**
     * @return array<int, array<string, mixed>>
     */
    public function getPagesByShortTitleWithImages(string $shortTitle): array
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
            ->get(Page::FIELDS)
            ->toArray();

        $i = 0;
        $out = [];
        foreach ($pages as $page) {
            $out[$i] = $this->pageService->getPageDataFormat($page);
            $out[$i]['images'] = $this->imageService->getImagesAndThumbsByTypeAndRefId('page', $page['id']);
            $i++;
        }

        return $out;
    }

    /**
     * @return array<int, array<string, mixed>>
     */
    public function getAllPagesWithImages(string $type): array
    {
        if (! in_array($type, ConfigService::arrGetPageTypes())) {
            throw new \Exception('Wrong type : '.$type);
        }

        $pages = Page::with(['translates', 'contents'])->where('type', $type)->where('published', true)->where('after_login', false)->orderBy('position', 'asc')->get(Page::FIELDS)->toArray();

        $i = 0;
        $out = [];
        foreach ($pages as $page) {
            $out[$i] = $this->pageService->getPageDataFormat($page);
            $out[$i]['images'] = $this->imageService->getImagesAndThumbsByTypeAndRefId('page', $page['id']);
            $i++;
        }

        return $out;
    }

    /**
     * TODO - uwspolnic do innej funkcji !!
     * it is very similar to resources/views/includes/header.blade.php
     * it is very similar to getAllUrlRelatedToMenus too
     * and in tests (the same name)
     * it is always not auth - it is different
     */

    /**
     * @return array<int, array<string, mixed>>
     */
    public function getAllUrlRelatedToMenus()
    {
        // cms link
        // see in: resources/views/includes/header.blade.php

        $urlInMenu = [];
        $menus = Menu::orderBy('position', 'asc')->get();
        $j = 0;
        foreach ($menus as $menu) {
            $pagesPublishedAndAccess = $this->pagesPublishedAndAccessNotAuth($menu)->get(); // !! it is different getAllUrlRelatedToMenus in tests

            $urlInMenu[$j] = [
                'menu_name' => null,
                'url' => null,
                'short_title' => null,
                'page_id' => null,
                'pages' => [],
            ];
            if ($pagesPublishedAndAccess->count() == 1) {
                $pageFirst = $pagesPublishedAndAccess->first();
                if (! $pageFirst instanceof Page) {  // to avoid phpstan error, but it should not happen
                    continue;
                }
                $urlInMenu[$j]['menu_name'] = $this->translatePageColumn($pageFirst, 'short_title'); // to nie jest blad
                $urlInMenu[$j]['url'] = $this->pageService->getUrls($pageFirst);
                $urlInMenu[$j]['page_id'] = $pageFirst->getId(); // phpstan error, but it should not happen
                $urlInMenu[$j]['pages'] = [];
            } else {
                $urlInMenu[$j]['menu_name'] = $this->translateMenuColumn($menu, 'name');
                $i = 0;
                foreach ($this->menuService->pagesPublishedTree($pagesPublishedAndAccess) as $pageMenu) {
                    $urlInMenu[$j]['pages'][$i] = $this->getPageData($pageMenu);
                    if (! empty($pageMenu['children']) && ! empty($pageMenu->published)) {
                        $ii = 0;
                        foreach ($pageMenu['children'] as $p) {
                            $urlInMenu[$j]['pages'][$i]['children'][$ii] = $this->getPageData($p);
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

    /**
     * @return array<string, mixed>
     */
    private function getPageData(Page $page)
    {
        $PageData = [];
        $PageData['url'] = $this->pageService->getUrls($page);
        $PageData['short_title'] = $this->translatePageColumn($page, 'short_title');
        $PageData['page_id'] = $page->id;

        return $PageData;
    }

    /**
     * @param  array<string, mixed>  $page
     * @return array<string, mixed>
     */
    public function getPageDataFormatByLang(array $page, string $lang): array
    {
        $data = $this->pageService->getPageDataFormat($page);

        return LangHelperService::removeKeyLangInArr($data, $lang);
    }

    /**
     * @return array<string, mixed>
     */
    public function getAllPagesWithImagesOneItemByLang(Page $mPage, string $lang): array
    {
        /*
        $pageModel = (new Page)->where('id', $mPage->id)->with(['translates', 'contents'])->orderBy('position', 'asc')->first();

        $page = [];
        if ($pageModel) {
            $page = $pageModel->toArray();
        }
            */
        $pageModel = Page::with(['translates', 'contents'])->find($mPage->id);
        $page = $pageModel?->toArray() ?? [];

        $formatPage = $this->getPageDataFormatByLang($page, $lang);
        $formatPage['images'] = $this->imageService->getImagesAndThumbsByTypeAndRefId('page', $page['id'], $lang);

        return $formatPage;
    }
}
