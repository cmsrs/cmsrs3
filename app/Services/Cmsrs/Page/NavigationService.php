<?php

declare(strict_types=1);

namespace App\Services\Cmsrs\Page;

use App\Models\Cmsrs\Menu;
use App\Models\Cmsrs\Page;
use App\Services\Cmsrs\ConfigService;
use App\Services\Cmsrs\MenuService;

class NavigationService
{
    public function __construct(
        private MenuService $menuService,
        private PageService $pageService,
        private ConfigService $configService,
        private UrlService $urlService,
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

            $menuData = [ // default values for menu
                'menu_name' => [],
                'url' => null,
                'page_id' => null,
                'id' => $menu->id,
                'pages' => [],
            ];
            if ($pagesPublishedAndAccess->count() == 1) {
                $pageFirst = $pagesPublishedAndAccess->first();
                if (! $pageFirst instanceof Page) {  // to avoid phpstan error, but it should not happen
                    continue;
                }
                $menuData['menu_name'] = $this->translatePageColumn($pageFirst, 'short_title'); // it is not mistake!
                $menuData['url'] = $this->urlService->getUrls($pageFirst);
                $menuData['page_id'] = $pageFirst->getId(); // phpstan error, but it should not happen
                $menuData['pages'] = [];
            } else {
                $menuData['menu_name'] = $this->translateMenuColumn($menu, 'name');
                $i = 0;
                $pages = [];
                foreach ($this->menuService->pagesPublishedTree($pagesPublishedAndAccess) as $pageMenu) {
                    $pageData = $this->getPageData($pageMenu);  //
                    if (! empty($pageMenu->children) && ! empty($pageMenu->published)) {
                        $pageData['children'] = [];
                        foreach ($pageMenu->children as $p) {
                            $pageData['children'][] = $this->getPageData($p);
                        }
                    }
                    $pages[$i] = $pageData;
                    $i++;
                }
                $menuData['pages'] = $pages;
            }
            $urlInMenu[$j] = $menuData;
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
            'url' => $this->urlService->getUrls($page),
            'short_title' => $this->translatePageColumn($page, 'short_title'),
            'page_id' => $page->id,
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
