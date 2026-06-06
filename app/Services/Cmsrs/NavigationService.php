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
     * @return array<int, array<string, mixed>>
     */
    public function getNavigationTree(): array
    {
        // cms link
        // see in: resources/views/includes/header.blade.php

        $urlInMenu = [];
        $menus = Menu::orderBy('position', 'asc')->get();
        $j = 0;
        foreach ($menus as $menu) {
            $pagesPublishedAndAccess = $this->menuService->pagesPublishedAndAccessNotAuth($menu)->get(); // !! it is different getAllUrlRelatedToMenus in tests

            $urlInMenu[$j] = [ // default values for menu
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
     * pages in menu
     * children, but it is optional, because it is not always needed (second level of page is not needed)
     *
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
}
