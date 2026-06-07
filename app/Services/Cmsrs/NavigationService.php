<?php

declare(strict_types=1);

namespace App\Services\Cmsrs;

use App\Models\Cmsrs\Menu;
use App\Models\Cmsrs\Page;

class NavigationService
{
    public function __construct(
        private MenuService $menuService,
        private PageService $pageService,
        private ConfigService $configService,
    ) {}

    /**
     * it is very similar to resources/views/includes/header.blade.php
     * it is very similar to getAllUrlRelatedToMenus too
     * and in tests (the same name)
     * it is always not auth - it is different
     */

    /**
     * @return array<int, array{
     *     menu_name: array<string, string>,
     *     url: null|array<string, string>,
     *     page_id: int|null,
     *     id: int,
     *     pages: array<int, array{
     *          url: array<string,string>,
     *          short_title: array<string, string>,
     *          page_id: int,
     *          children?: array<int, array{
     *               url: array<string,string>,
     *               short_title: array<string,string>,
     *               page_id: int
     *          }>     
     *     }>
     * }>
     */    
    public function getNavigationTree(bool $isAuth = false): array
    {
        $urlInMenu = [];
        $menus = Menu::orderBy('position', 'asc')->get();
        $j = 0;
        foreach ($menus as $menu) {
            $pagesPublishedAndAccess = $this->menuService->pagesPublishedAndAccess($menu, $isAuth); // !! it is different getAllUrlRelatedToMenus in tests

            $urlInMenu[$j] = [ // default values for menu
                'menu_name' => [],
                'url' => null,
                'page_id' => null,
                'id' => $menu->id, //tu zawsze bedzie int - to mam incjowac 0?
                'pages' => [], //a tu moze byc pusta tablica albo to co zwraca funcja  getPageData
            ];
            if ($pagesPublishedAndAccess->count() == 1) {
                $pageFirst = $pagesPublishedAndAccess->first();
                if (! $pageFirst instanceof Page) {  // to avoid phpstan error, but it should not happen
                    continue;
                }
                $urlInMenu[$j]['menu_name'] = $this->translatePageColumn($pageFirst, 'short_title'); // it is not mistake!
                $urlInMenu[$j]['url'] = $this->pageService->getUrls($pageFirst);
                $urlInMenu[$j]['page_id'] = $pageFirst->getId(); // phpstan error, but it should not happen
                $urlInMenu[$j]['pages'] = [];
            } else {
                $urlInMenu[$j]['menu_name'] = $this->translateMenuColumn($menu, 'name');
                $i = 0;
                foreach ($this->menuService->pagesPublishedTree($pagesPublishedAndAccess) as $pageMenu) {
                    $urlInMenu[$j]['pages'][$i] = $this->getPageData($pageMenu);  //
                    if (! empty($pageMenu->children) && ! empty($pageMenu->published)) {
                        $urlInMenu[$j]['pages'][$i]['children'] = [];
                        foreach ($pageMenu->children as $p) {
                            $urlInMenu[$j]['pages'][$i]['children'][] = $this->getPageData($p);
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
     * pages in menu
     * children, but it is optional, because it is not always needed (second level of page is not needed)
     *
     * @return array{
     *         url: array<string,string>,
     *         short_title: array<string, string>,
     *         page_id: int,
     * }
     */
    private function getPageData(Page $page)
    {
        return [
            'url' => $this->pageService->getUrls($page),
            'short_title' => $this->translatePageColumn($page, 'short_title'),
            'page_id' => $page->id
        ];
    }

    /**
     * @return array<string, string>
     */
    private function translatePageColumn(Page $page, string $column): array
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
    private function translateMenuColumn(Menu $menu, string $column): array
    {
        $langs = $this->configService->arrGetLangs();

        $out = [];

        foreach ($langs as $lang) {
            $out[$lang] = $this->menuService->translatesByColumnAndLang($menu, $column, $lang) ?? '';
        }

        return $out;
    }
}
