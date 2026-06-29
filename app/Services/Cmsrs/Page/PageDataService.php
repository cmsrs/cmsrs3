<?php

declare(strict_types=1);

namespace App\Services\Cmsrs\Page;

use App\Models\Cmsrs\Image;
use App\Models\Cmsrs\Menu;
use App\Models\Cmsrs\Page;
use App\Models\Cmsrs\Translate;
use App\Services\Cmsrs\ConfigService;
use App\Services\Cmsrs\ContentService;
use App\Services\Cmsrs\Helpers\CacheManagerService;
use App\Services\Cmsrs\Helpers\CacheService;
use App\Services\Cmsrs\ImageService;
use App\Services\Cmsrs\MenuService;
use App\Services\Cmsrs\Traits\TranslationsTrait;
use App\Services\Cmsrs\TranslateService;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Str;

class PageDataService
{
    /**
     * @use TranslationsTrait<Page>
     */
    use TranslationsTrait;

    public function __construct(private ConfigService $configService, private MenuService $menuService, private TranslateService $translateService, private ContentService $contentService, private ImageService $imageService, private CacheManagerService $cacheManagerService, private PageService $pageService) {}

    public function getPageDataByShortTitleCache(string $shortTitle, string $data = 'content', ?string $lang = null): ?string
    {
        if (empty($lang)) {
            $lang = $this->configService->getDefaultLang();
        }

        $key = $this->cacheManagerService->key(
            'page_by_short_title_'.$data,
            $shortTitle,
            $lang
        );

        return $this->cacheManagerService->remember(
            $key,
            fn () => $this->getPageDataByShortTitle($shortTitle, $data, $lang)
        );
    }

    /**
     * @return Collection<int, Image>
     */
    public function getPageDataImagesByShortTitleCache(string $shortTitle): Collection
    {
        if (! $this->configService->isCacheEnable()) {
            return $this->getPageDataImagesByShortTitle($shortTitle);
        }

        $key = 'page_by_short_title_images_'.Str::slug($shortTitle, '_');

        return cache()->remember(
            $key,
            CacheService::setTime(),
            fn () => $this->getPageDataImagesByShortTitle($shortTitle)
        );
    }

    /**
     * @param  Collection<int, Menu>  $menus
     */
    public function getPageBySlugCache(Collection $menus, string $menuSlug, ?string $pageSlug, string $lang): ?Page
    {
        $isCache = $this->configService->isCacheEnable();
        if ($isCache) {
            $pageOut = cache()->remember('page_'.$menuSlug.'_'.$pageSlug.'_'.$lang, CacheService::setTime(), function () use ($menus, $menuSlug, $pageSlug, $lang) {
                return $this->getPageBySlug($menus, $menuSlug, $pageSlug, $lang);
            });
        } else {
            $pageOut = $this->getPageBySlug($menus, $menuSlug, $pageSlug, $lang);
        }

        return $pageOut;
    }

    /**
     * TODO - it is not use right now. - to remove...
     */
    public function getContentInnerPageByIdCache(int $pageId, ?string $lang = null): string
    {
        if (empty($lang)) {
            $lang = ConfigService::getDefaultLang();
        }

        $isCache = $this->configService->isCacheEnable();
        if ($isCache) {
            $ret = cache()->remember('pageinner_by_pageid_'.$pageId.'_'.$lang, CacheService::setTime(), function () use ($pageId, $lang) {
                return $this->getContentInnerPageByPageIdAndLang($pageId, $lang);
            });
        } else {
            $ret = $this->getContentInnerPageByPageIdAndLang($pageId, $lang);
        }

        return $ret;
    }

    /**
     * @return Collection<int, Image>
     */
    private function getPageDataImagesByShortTitle(string $shortTitle): Collection
    {
        $page = $this->getPageByShortTitle($shortTitle);

        if ($page === null) {
            return new Collection;
        }

        return $this->imageService->getImagesAndThumbsByTypeAndRefId('page', $page->id);
    }

    private function getPageDataByShortTitle(string $shortTitle, string $data = 'content', ?string $lang = null): ?string
    {
        if (! in_array($data, ['content', 'title', 'images', 'url'])) {
            throw new \Exception('second param is: content title images and url allowed, but now is: '.$data);
        }

        if ($lang === null) {
            $lang = ConfigService::getDefaultLang();
        }

        $page = $this->getPageByShortTitle($shortTitle);

        if ($page === null) {
            return null;
        }

        if ($data == 'url') {
            return $this->pageService->getUrl($page, $lang);
        }

        $pageData = $this->pageService->getAllPagesWithImagesOneItem($page);

        $dataByLang = empty($pageData[$data]) ? '' : $pageData[$data];

        return empty($dataByLang[$lang]) ? '' : $dataByLang[$lang];
    }

    private function getContentInnerPageByPageIdAndLang(int $pageId, string $lang): string
    {
        $page = Page::findOrFail($pageId);

        $contents = $page->contents->pluck('value', 'lang')->toArray();

        return empty($contents[$lang]) ? '' : $contents[$lang];
    }

    /**
     * @param  Collection<int, Menu>  $menus
     */
    private function getPageBySlug(Collection $menus, string $menuSlug, ?string $pageSlug, string $lang): ?Page
    {
        $pageOut = null;
        foreach ($menus as $menu) {
            if ($menuSlug == $this->menuService->getSlugByLang($menu, $lang)) {
                $objPagesPublishedAndAccess = $this->menuService->pagesPublishedAndAccess($menu, Auth::check());
                if ($objPagesPublishedAndAccess->count() == 1) { // it is the case for pageSlug = null, 1 page in menu
                    $pageOut = $objPagesPublishedAndAccess->first();
                    break;
                }

                $pagesPublished = $this->menuService->pagesPublished($menu);
                foreach ($pagesPublished as $page) {
                    if ($pageSlug == $this->pageService->getSlugByLang($page, $lang)) {
                        $pageOut = $page;
                        break;
                    }
                }
            }
        }

        return $pageOut;
    }

    private function getPageByShortTitle(string $shortTitle): ?Page
    {
        $translate = Translate::where('value', '=', $shortTitle)->where('column', '=', 'short_title')->first();  // where('lang', '=', $defaultLang )->first();
        if (empty($translate)) {
            return null;
        }

        // ->where('type', '=', 'inner') //todo why is this condition ? 'published', '=', 1 - is it make sense (see inner page post:/api/pages)? see test: it_will_get_data_page_by_short_title
        $page = $translate->page()->where('published', '=', 1)->first();
        if (empty($page)) {
            return null;
        }

        return $page;
    }
}
