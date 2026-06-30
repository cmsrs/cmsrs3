<?php

declare(strict_types=1);

namespace App\Services\Cmsrs\Page;

use App\Models\Cmsrs\Page;
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

class PageService
{
    /**
     * @use TranslationsTrait<Page>
     */
    use TranslationsTrait;

    public function __construct(private ConfigService $configService, private MenuService $menuService, private TranslateService $translateService, private ContentService $contentService, private ImageService $imageService, private CacheManagerService $cacheManagerService) {}

    private function getMenuSlugByLangCache(Page $mPage, string $lang): ?string
    {
        $key = $this->cacheManagerService->key(
            'menusluglang',
            (string) $mPage->id,
            $lang
        );

        return $this->cacheManagerService->remember(
            $key,
            fn () => $this->getMenuSlugByLang($mPage, $lang)
        );
    }

    private function getMenuSlugByLang(Page $mPage, string $lang): ?string
    {
        $menu = $mPage->menu()->first();

        if (empty($menu)) {
            return null;
        }

        return $this->menuService->getSlugByLang($menu, $lang);
    }

    /**
     * @param  array<string, mixed>  $data
     * @return array{success: bool, error?: string}
     */
    public function checkIsDuplicateTitleByMenu(array $data, ?int $id = null): array
    {
        $menuId = empty($data['menu_id']) ? 0 : $data['menu_id'];

        $out = ['success' => true];
        $pages = $this->getAllPagesWithImages();
        foreach ($pages as $page) {
            $mId = empty($page['menu_id']) ? 0 : $page['menu_id'];
            if ($page['id'] == $id) {
                continue;
            }
            if ($mId != $menuId) {
                continue;
            }

            foreach ($page['title'] as $lang => $title) {
                if (empty($data['title']) || empty($data['title'][$lang])) {
                    throw new \Exception('page title is empty - but is require');
                }
                $titleIn = Str::slug($data['title'][$lang], '-');
                $t = Str::slug($title, '-');
                if ($titleIn == $t) {
                    $out['success'] = false;
                    $out['error'] = "Duplicate title: $title ($lang)";
                    break;
                }
            }
        }

        return $out;
    }

    public function getSlugByLang(Page $model, string $lang): ?string
    {
        $column = 'title';
        $name = $this->translatesByColumnAndLang($model, $column, $lang);

        if ($name === null || $name === '') {
            throw new \RuntimeException("I cant create slug for page column: $column for lang: $lang, because value is empty");
        }

        return Str::slug($name, '-');
    }

    /**
     * @param  array<string, mixed>  $data
     */
    public function createPage(array $data): Page
    {
        $menuId = empty($data['menu_id']) ? null : $data['menu_id'];
        $data['position'] = $this->getNextPositionByMenuId($menuId);
        $data = $this->validateMainPage($data);
        $data = $this->validateParentPublished($data);

        $page = Page::create($data);
        if (empty($page->id)) {
            throw new \Exception('I cant get page id');
        }

        return $page;
    }

    /**
     * use also in script to load demo (test) data
     * php artisan cmsrs:load-demo-data
     *
     * @param  array<string, mixed>  $data
     */
    public function wrapCreate(array $data): Page
    {
        $page = $this->createPage($data);
        $this->createTranslate(['page_id' => $page->id, 'data' => $data]);

        if (! empty($data['images']) && is_array($data['images'])) {
            // $this->imageService->setTranslate($this->translateService);
            $this->imageService->createImages($data['images'], 'page', $page->id);
        }

        return $page;
    }

    /**
     * @param  array{page_id: int, data: array<string, mixed>}  $dd
     */
    public function createTranslate(array $dd, bool $create = true): void
    {
        $this->translateService->wrapCreate($dd, $create);
        $this->contentService->wrapCreate($dd, $create);
    }

    /**
     * @param  array<string, mixed>  $data
     */
    public function wrapUpdate(Page $mPage, array $data): bool
    {
        $mPage->update($data);
        $this->createTranslate(['page_id' => $mPage->id, 'data' => $data], false);

        return true;
    }

    /**
     * @return array{policyUrl: ?string, policyTitle: ?string, contactUrl: ?string, contactTitle: ?string}
     */
    public function getFooterPages(string $lang): array
    {
        $privacyPolicy = $this->getFirstPageByType('privacy_policy');
        $contact = $this->getFirstPageByType('contact');

        $out = [];
        $policyUrl = null;
        $policyTitle = null;
        if (! empty($privacyPolicy)) {
            $policyUrl = $this->getUrl($privacyPolicy, $lang);
            $policyTitle = $this->translatesByColumnAndLang($privacyPolicy, 'title', $lang);
        }

        $contactUrl = null;
        $contactTitle = null;
        if (! empty($contact)) {
            $contactUrl = $this->getUrl($contact, $lang);
            $contactTitle = $this->translatesByColumnAndLang($contact, 'title', $lang);
        }

        $out['policyUrl'] = $policyUrl;
        $out['policyTitle'] = $policyTitle;
        $out['contactUrl'] = $contactUrl;
        $out['contactTitle'] = $contactTitle;

        return $out;
    }

    /**
     * use in headless
     *
     * @return array<string, string>
     */
    public function getUrls(Page $mPage, ?string $urlParam = null): array
    {
        $urls = [];
        $langs = $this->configService->arrGetLangs();
        foreach ($langs as $l) {
            $urls[$l] = $this->getUrl($mPage, $l, $urlParam) ?? '';
        }

        return $urls;
    }

    public function getUrl(Page $mPage, string $lang, ?string $urlParam = null): ?string
    {
        $type = $mPage->type;
        if ($type == 'inner') {
            return null;
        } elseif ($type == 'main_page') {
            return $this->getMainUrl($lang);

            // TODO!!! - it should be removed
            // } elseif (($type == 'login') || ($type == 'checkout') || ($type == 'register') || ($type == 'home') || ($type == 'shoppingsuccess') || ($type == 'search') || ($type == 'forgot')) {
            //    return $this->getTypeUrl($type, $lang);
        }

        // elseif ('privacy_policy' == $this->type) {
        //    return $this->getIndependentUrl($lang);
        // }
        return $this->getCmsUrl($mPage, $lang, $urlParam);
    }

    public function getUrlByPageOrRouteName(?Page $mPage, string $lang, ?string $productSlug = null, ?string $routeName = null): string
    {
        // return (! empty($mPage)) ? $this->getUrl($mPage, $lang, $productSlug) : route($routeName, ['lang' => $lang]);
        if ($mPage !== null) {
            return $this->getUrl($mPage, $lang, $productSlug) ?? '';
        }

        if ($routeName === null) {
            throw new \InvalidArgumentException('routeName cannot be null when page is null');
        }

        return route($routeName, ['lang' => $lang]);

    }

    /**
     * Get all URLs for a given page or route name across all supported languages.
     *
     * @param  array<string, string>|null  $productSlug
     * @return array<string, string> An associative array where keys are language codes and values are URLs.
     */
    public function getAllUrlsByPageOrRouteName(?Page $mPage, ?array $productSlug = null, ?string $routeName = null): array
    {

        if ($routeName == 'shoppingsuccess') { // TODO - manual tests
            return [];
        }

        $urls = [];
        $langs = $this->configService->arrGetLangs();
        foreach ($langs as $l) {
            $productSlugForLang = $productSlug[$l] ?? null;
            $urls[$l] = $this->getUrlByPageOrRouteName($mPage, $l, $productSlugForLang, $routeName);
        }

        return $urls;
    }

    private function getNumPagesBelongsToThisMenu(Page $mPage): ?int
    {
        $menu = $mPage->menu()->first();
        if (empty($menu)) {
            return null;
        }

        return $this->menuService->pagesPublishedAndAccess($menu, Auth::check())->count();
    }

    private function getNumPagesBelongsToThisMenuCache(Page $mPage): ?int
    {
        $key = $this->cacheManagerService->key(
            'countpagesinthismenu',
            (string) $mPage->id
        );

        return $this->cacheManagerService->remember(
            $key,
            fn () => $this->getNumPagesBelongsToThisMenu($mPage)
        );
    }

    private function getCmsUrl(Page $mPage, string $lang, ?string $urlParam = null): string
    {
        $menuSlug = $this->getMenuSlugByLangCache($mPage, $lang);

        if (empty($menuSlug)) {
            return $this->getIndependentUrl($mPage, $lang);
        }

        $countPages = $this->getNumPagesBelongsToThisMenuCache($mPage);
        if (($countPages == 1) && ($mPage->type != 'shop')) {
            $url = '/'.Page::PREFIX_CMS_ONE_PAGE_IN_MENU_URL.'/'.$menuSlug;
        } else {
            $url = '/'.Page::PREFIX_CMS_URL.'/'.$menuSlug.'/'.$this->getSlugByLang($mPage, $lang);
        }
        if ($urlParam) {
            // $url = $url."/".Str::slug($urlParam, '-');
            $url = $url.'/'.$urlParam;
        }
        $langs = ConfigService::arrGetLangsEnv();
        if (count($langs) > 1) {
            $url = '/'.$lang.$url;
        }

        return $url;
    }

    private function getMainUrl(string $lang): string
    {
        $langs = ConfigService::arrGetLangsEnv();
        array_shift($langs); // after this langs will be changed. It has rest of langs without first one.

        if (empty($langs)) {
            $url = '/';
        } else {
            $url = in_array($lang, $langs) ? '/'.$lang : '/';
        }

        return $url;
    }

    private function getIndependentUrl(Page $mPage, string $lang): string
    {
        $url = '/'.Page::PREFIX_IN_URL.'/'.$this->getSlugByLang($mPage, $lang);
        $langs = ConfigService::arrGetLangsEnv();
        if (count($langs) > 1) {
            $url = '/'.$lang.$url;
        }

        return $url;
    }

    public function unpublishedChildren(Page $mPage): void
    {
        $pages = Page::where('page_id', '=', $mPage->id)->get();
        foreach ($pages as $page) {
            $page->published = 0;
            $page->update();
        }
    }

    public function checkAuth(Page $mPage): bool
    {
        if ($mPage->after_login && ! (Auth::check())) {
            return false;
        }

        return true;
    }

    public function getFirstPageByType(string $type): ?Page
    {
        $isCache = $this->configService->isCacheEnable();
        if ($isCache) {
            $ret = cache()->remember('pagebytype_'.$type, CacheService::setTime(), function () use ($type) {
                return Page::where('type', '=', $type)->where('published', '=', 1)->first();
            });
        } else {
            $ret = Page::where('type', '=', $type)->where('published', '=', 1)->first();
        }

        return $ret;
    }

    /**
     * @return Page|null
     */
    public function getMainPage()
    {
        return $this->getFirstPageByType('main_page');
    }

    /**
     * @param  array<string, mixed>  $data
     * @return array<string, mixed>
     */
    public function validateMainPage(array $data, ?bool $create = true): array
    {
        if (isset($data['type']) && ($data['type'] == 'main_page')) {
            if ($create) {
                $p = PageService::getMainPage();
                if ($p) {
                    throw new \Exception('Two main page not allowed');
                }
            }

            $data['menu_id'] = null;
            $data['page_id'] = null;
        }

        return $data;
    }

    /**
     * if parent page.published == 0 then child this page.published = 0
     *
     * @param  array<string, mixed>  $data
     * @return array<string, mixed>
     */
    public function validateParentPublished(array $data): array
    {
        if (! empty($data['page_id'])) {
            /** @var Page $p */
            $p = Page::findOrFail($data['page_id']);
            if ($p->published == 0) {
                $data['published'] = 0;
            }
        }

        return $data;
    }

    /**
     * @return array<int, array<string, mixed>>
     */
    public function arrImages(Page $mPage, string $lang): array
    {
        $out = [];
        foreach ($mPage->images as $image) {

            $item = $this->imageService->getAllImage($image, false);
            if (! $item) {
                continue;
            }
            $item['id'] = $image->id;
            $item['alt'] = $this->imageService->getAltImg($image);
            $item['altlang'] = ! empty($item['alt'][$lang]) ? $item['alt'][$lang] : ''; // it neeeds to javascript - to modal window in gallery
            $out[] = $item;
        }

        return $out;
    }

    /**
     * @return array<string, mixed>
     */
    public function getAllPagesWithImagesOneItem(Page $mPage): array
    {

        // $page = (new Page)->where('id', $mPage->id)->with(['translates', 'contents'])->orderBy('position', 'asc')->first()->toArray();
        $pageModel = (new Page)
            ->where('id', $mPage->id)
            ->with(['translates', 'contents'])
            ->orderBy('position', 'asc')
            ->first();

        if ($pageModel === null) {
            return [];
        }

        $page = $pageModel->toArray();

        $formatPage = $this->getPageDataFormat($page);
        $formatPage['images'] = $this->imageService->getImagesAndThumbsByTypeAndRefId('page', $page['id']);

        return $formatPage;
    }

    /**
     * @return array<int, array<string, mixed>>
     */
    public function getAllPagesWithImages(?string $type = null): array
    {
        if ($type) {
            $pages = Page::with(['translates', 'contents'])->where('type', $type)->orderBy('position', 'asc')->get(Page::FIELDS)->toArray();
        } else {
            $pages = Page::with(['translates', 'contents'])->orderBy('position', 'asc')->get(Page::FIELDS)->toArray();
        }

        $i = 0;
        $out = [];
        foreach ($pages as $page) {
            $out[$i] = $this->getPageDataFormat($page);
            $out[$i]['images'] = $this->imageService->getImagesAndThumbsByTypeAndRefId('page', $page['id']);
            $i++;
        }

        return $out;
    }

    /**
     * TODO - cached
     * We can delete this method
     * old method: getPageDataByShortTitleCache
     *
     * this method is tested
     * this method is writeln by new manner, and gets many pages, not one (but i use getPageDataByShortTitleCache this method instead)
     * don't use this method
     * maybe in the future i will use it
     *
     * @return array<int, array<string, mixed>>
     */
    public function getAllPagesWithImagesByShortTitleForDefaultLang(string $shortTitle): array
    {
        $lang = ConfigService::getDefaultLang();

        $pages = Page::with(['translates', 'contents'])
            ->where('published', true)
            ->where('after_login', false)
            ->whereHas('translates', function ($query) use ($shortTitle, $lang) {
                $query->where('lang', $lang)
                    ->where('column', 'short_title')
                    ->where('value', $shortTitle);
            })
            ->orderBy('position', 'asc')
            ->get(Page::FIELDS)
            ->toArray();

        $i = 0;
        $out = [];
        foreach ($pages as $page) {
            $out[$i] = $this->getPageDataFormat($page);
            $out[$i]['images'] = $this->imageService->getImagesAndThumbsByTypeAndRefId('page', $page['id']);
            $i++;
        }

        return $out;
    }

    public function getNextPositionByMenuId(?int $menuId): int
    {
        if (empty($menuId)) {
            $page = Page::query()
                ->whereNull('menu_id')
                ->orderBy('position', 'desc')
                ->first();
        } else {
            $page = Page::query()
                ->where('menu_id', '=', $menuId)
                ->orderBy('position', 'desc')
                ->first();
        }

        if (! $page) {
            return 1;
        }

        return $page->position + 1;
    }

    /**
     * @return Collection<int, Page>
     */
    public function getPagesByMenuId(?int $menuId, ?int $pageId): Collection
    {
        $page = collect([]);
        if ($menuId === null) {
            $page = Page::query()
                ->whereNull('menu_id')
                ->orderBy('position', 'asc')
                ->get();
        } elseif ($pageId === null) {
            $page = Page::query()
                ->where('menu_id', '=', $menuId)
                ->whereNull('page_id')
                ->orderBy('position', 'asc')
                ->get();
        } elseif ($pageId !== null) {
            $page = Page::query()
                ->where('menu_id', '=', $menuId)
                ->where('page_id', '=', $pageId)
                ->orderBy('position', 'asc')
                ->get();
        }

        return $page;
    }

    public function swapPosition(string $direction, int $id): bool
    {
        if (! in_array($direction, ['up', 'down'])) {
            throw new \Exception('Wrong direction (Page). It can be up or down direction = '.$direction);
        }

        $page = Page::find($id);
        if (! $page) {
            return false;
        }
        $menuId = empty($page->menu_id) ? null : $page->menu_id;
        $pageId = empty($page->page_id) ? null : $page->page_id;
        $pages = $this->getPagesByMenuId($menuId, $pageId);

        $countPages = count($pages);
        if ($countPages < 2) {
            return false;
        }

        foreach ($pages as $key => $p) {
            if (($p->id == $id)) {
                $swapKey = null;

                if ($direction === 'up') {
                    $swapKey = ($key === 0) ? $countPages - 1 : $key - 1;
                }

                if ($direction === 'down') {
                    $swapKey = ($key === ($countPages - 1)) ? 0 : $key + 1;
                }

                $swapPage = $pages[$swapKey] ?? null;

                if (! $swapPage) {
                    continue;
                }

                $positionKey = $p->position;

                Page::where('id', $p->id)->update(['position' => $swapPage->position]);

                Page::where('id', $swapPage->id)->update(['position' => $positionKey]);
            }
        }

        return true;
    }

    /**
     * @param  array<string, mixed>  $page
     * @return array<string, mixed>
     */
    public function getPageDataFormat(array $page): array
    {
        $out = [];
        foreach (Page::FIELDS as $field) {
            $out[$field] = $page[$field];
        }
        foreach ($page['translates'] ?? [] as $translate) {
            $out[$translate['column']][$translate['lang']] = $translate['value'];
        }
        foreach ($page['contents'] ?? [] as $translate) {
            $out[$translate['column']][$translate['lang']] = $translate['value'];
        }

        return $out;
    }

    public function getSeparatePageBySlug(string $pageSlug, string $lang): ?Page
    {
        $pageOut = null;
        $pages = Page::all();
        foreach ($pages as $page) {
            if ($this->getSlugByLang($page, $lang) == $pageSlug) {
                $pageOut = $page;
                break;
            }
        }

        return $pageOut;
    }
}
