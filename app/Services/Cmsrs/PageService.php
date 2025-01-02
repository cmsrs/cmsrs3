<?php

namespace App\Services\Cmsrs;

use App\Models\Cmsrs\Image;
use App\Models\Cmsrs\Menu;
use App\Models\Cmsrs\Page;
use App\Models\Cmsrs\Translate;
use App\Services\Cmsrs\Helpers\CacheService;
use App\Services\Cmsrs\Interfaces\TranslateInterface;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Str;

class PageService extends BaseService implements TranslateInterface
{
    private $translate;

    private $content;

    public $pageFields;

    public function __construct()
    {
        $this->pageFields = [
            'id',
            'published',
            'commented',
            'after_login',
            'position',
            'type',
            'menu_id',
            'page_id',
        ];

        $this->translate = new TranslateService;
        $this->content = new ContentService;
    }

    public function getPageDataByShortTitleCache($shortTitle, $data = 'content', $lang = null)
    {
        if (empty($lang)) {
            $lang = ConfigService::getDefaultLang();
        }
        $isCache = (new ConfigService)->isCacheEnable();
        if ($isCache) {
            $ret = cache()->remember('page_by_short_title_'.$data.'_'.Str::slug($shortTitle, '_').'_'.$lang, CacheService::setTime(), function () use ($shortTitle, $data, $lang) {
                return $this->getPageDataByShortTitle($shortTitle, $data, $lang);
            });
        } else {
            $ret = $this->getPageDataByShortTitle($shortTitle, $data, $lang);
        }

        return $ret;
    }

    public function getPageDataByShortTitle($shortTitle, $data = 'content', $lang = null)
    {
        if (! in_array($data, ['content', 'title', 'images', 'url'])) {
            throw new \Exception('second param is: content title images and url allowed, but now is: '.$data);
        }

        if (empty($lang)) {
            $lang = ConfigService::getDefaultLang();
        }

        $page = $this->getPageByShortTitle($shortTitle);

        if (empty($page)) {
            return false;
        }

        if ($data == 'url') {
            return $this->getUrl($page, $lang);
        }

        $pageData = $this->getAllPagesWithImagesOneItem($page);

        $dataByLang = empty($pageData[$data]) ? '' : $pageData[$data];
        if ($data == 'images') {
            return $dataByLang;
        }

        return empty($dataByLang[$lang]) ? '' : $dataByLang[$lang];
    }

    private function getPageByShortTitle($shortTitle)
    {
        $translate = Translate::where('value', '=', $shortTitle)->where('column', '=', 'short_title')->first();  // where('lang', '=', $defaultLang )->first();
        if (empty($translate)) {
            return false;
        }

        // ->where('type', '=', 'inner') //todo why is this condition ? 'published', '=', 1 - is it make sense (see inner page post:/api/pages)? see test: it_will_get_data_page_by_short_title
        $page = $translate->page()->where('published', '=', 1)->first();
        if (empty($page)) {
            return false;
        }

        return $page;
    }

    public function getContentInnerPageByIdCache($pageId, $lang = null)
    {
        if (empty($lang)) {
            $lang = ConfigService::getDefaultLang();
        }

        $isCache = (new ConfigService)->isCacheEnable();
        if ($isCache) {
            $ret = cache()->remember('pageinner_by_pageid_'.$pageId.'_'.$lang, CacheService::setTime(), function () use ($pageId, $lang) {
                return $this->getContentInnerPageByPageIdAndLang($pageId, $lang);
            });
        } else {
            $ret = $this->getContentInnerPageByPageIdAndLang($pageId, $lang);
        }

        return $ret;
    }

    private function getContentInnerPageByPageIdAndLang($pageId, $lang)
    {
        $page = Page::findOrFail($pageId);

        $contents = $page->contents->pluck('value', 'lang')->toArray();

        return empty($contents[$lang]) ? '' : $contents[$lang];
    }

    public function setTranslate($objTranslate)
    {
        if (! empty($objTranslate)) {
            $this->translate = $objTranslate;
        }
    }

    public function setContent($objContent)
    {
        if (! empty($objContent)) {
            $this->content = $objContent;
        }
    }

    public function getDataToView(Page $mPage, $dataIn)   // ($pageOut, $lang)
    {
        $lang = $dataIn['lang'];
        if (empty($lang)) {
            throw new \Exception('Now lang in dataIn');
        }

        $products = null;
        if ($mPage->type === 'shop') {
            $products = (new ProductService)->getProductsWithImagesByPage($mPage->id);
        }

        $data = [
            'pageService' => (new PageService),
            'menus' => isset($dataIn['menus']) ? $dataIn['menus'] : null,
            'page' => $mPage,
            'h1' => $this->translatesByColumnAndLang($mPage, 'title', $lang),
            'page_title' => $this->translatesByColumnAndLang($mPage, 'title', $lang) ?? config('app.name', 'cmsRS'),
            'seo_description' => $this->translatesByColumnAndLang($mPage, 'description', $lang) ?? config('app.name', 'cmsRS'),
            'products' => $products,
            'lang' => $lang,
            'langs' => $dataIn['langs'],
            're_public' => env('GOOGLE_RECAPTCHA_PUBLIC', ''),
            'view' => 'cmsrs.'.$this->getViewNameByType($mPage),
        ];

        return array_merge($data, $dataIn);
    }

    public static function getPageBySlug($menus, $menuSlug, $pageSlug, $lang) // todo - change static
    {
        $menuService = new MenuService;
        $pageService = new PageService;
        $pageOut = null;
        foreach ($menus as $menu) {
            if ($menuSlug == $menuService->getSlugByLang($menu, $lang)) {
                $objPagesPublishedAndAccess = $menuService->pagesPublishedAndAccess($menu);
                if ($objPagesPublishedAndAccess->count() == 1) { // it is the case for pageSlug = null, 1 page in menu
                    $pageOut = $objPagesPublishedAndAccess->first();
                    break;
                }

                $pagesPublished = $menuService->pagesPublished($menu);
                foreach ($pagesPublished as $page) {
                    if ($pageSlug == $pageService->getSlugByLang($page, $lang)) {
                        $pageOut = $page;
                        break;
                    }
                }
            }
        }

        return $pageOut;
    }

    public static function checkIsDuplicateTitleByMenu($data, $id = '')
    {
        $menuId = empty($data['menu_id']) ? 0 : $data['menu_id'];

        $out = ['success' => true];
        $pages = (new PageService)->getAllPagesWithImages();
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

    public function getSlugByLang(Page $model, $lang)
    {
        $column = 'title';
        $name = $this->translatesByColumnAndLang($model, $column, $lang);

        // if( empty($name) ){
        //   throw new \Exception("I cant create slug for page column: $column for lang: $lang, because value is empty");
        // }

        return Str::slug($name, '-');
    }

    public function getAllTranslate(Page|Image|Menu $mPage)
    {
        $pageId = $mPage->id;

        $isCache = (new ConfigService)->isCacheEnable();
        if ($isCache) {
            $ret = cache()->remember('pagetranslatepageid_'.$pageId, CacheService::setTime(), function () use ($mPage, $pageId) {
                return $this->getTranslateMerge($mPage, $pageId);
            });
        } else {
            $ret = $this->getTranslateMerge($mPage, $pageId);
        }

        return $ret;
    }

    /**
     * todo refactor
     */
    public function getTranslateMerge(Page $mPage, $pageId)
    {
        $translates = $mPage->translates()->where('page_id', $pageId)->get(['lang', 'column', 'value'])->toArray();
        $contents = $mPage->contents()->where('page_id', $pageId)->get(['lang', 'column', 'value'])->toArray();
        $ret = array_merge($translates, $contents);

        return $ret;
    }

    public static function CreatePage($data)
    {
        $menuId = empty($data['menu_id']) ? null : $data['menu_id'];
        $data['position'] = PageService::getNextPositionByMenuId($menuId);
        $data = PageService::validateMainPage($data);
        $data = PageService::validateParentPublished($data);

        $page = Page::create($data);
        if (empty($page->id)) {
            throw new \Exception('I cant get page id');
        }

        return $page;
    }

    /**
     * use also in script to load demo (test) data
     * php artisan cmsrs:load-demo-data
     */
    public function wrapCreate($data)
    {
        $page = PageService::CreatePage($data);
        $this->createTranslate(['page_id' => $page->id, 'data' => $data]);

        if (! empty($data['images']) && is_array($data['images'])) {
            $objImage = new ImageService;
            $objImage->setTranslate($this->translate);
            $objImage->createImages($data['images'], 'page', $page->id);
        }

        return $page;
    }

    public function createTranslate($dd, $create = true)
    {
        $this->translate->wrapCreate($dd, $create);
        $this->content->wrapCreate($dd, $create);
    }

    public function wrapUpdate(Page $mPage, $data) // zmiana_1007
    {
        $mPage->update($data);
        $this->createTranslate(['page_id' => $mPage->id, 'data' => $data], false);

        return true;
    }

    public function getFooterPages($lang)
    {
        $privacyPolicy = PageService::getFirstPageByType('privacy_policy');
        $contact = PageService::getFirstPageByType('contact');

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

    public function getViewNameByType($mPage)
    {
        $type = $mPage->type;
        if ($type == 'projects') {
            $view = 'projects';
        } elseif ($type == 'clear') {
            $view = 'clear';
        } elseif ($type == 'privacy_policy') { // it is used in footer, not related in menu
            $view = 'in'; // (before: 'in' ) it can be cms (each language have got own language, not one language in each pages)
        } elseif ($type == 'gallery') {
            $view = 'gallery';
        } elseif ($type == 'shop') {
            $view = 'shop';
        } elseif ($type == 'checkout') {
            $view = 'checkout';
        } elseif ($type == 'register') {
            $view = 'register';
        } elseif ($type == 'home') {
            $view = 'home';
        } elseif ($type == 'shoppingsuccess') {
            $view = 'shoppingsuccess';
        } elseif ($type == 'search') {
            $view = 'search';
        } elseif ($type == 'forgot') {
            $view = 'forgot';
        } else {
            $view = 'cms';
        }

        return $view;
    }

    public function getUrl(Page $mPage, $lang, $urlParam = null)
    {
        $type = $mPage->type;
        if ($type == 'inner') {
            return false;
        } elseif ($type == 'main_page') {
            return $this->getMainUrl($lang);
        } elseif (($type == 'login') || ($type == 'checkout') || ($type == 'register') || ($type == 'home') || ($type == 'shoppingsuccess') || ($type == 'search') || ($type == 'forgot')) {
            return $this->getTypeUrl($type, $lang);
        }

        // elseif ('privacy_policy' == $this->type) {
        //    return $this->getIndependentUrl($lang);
        // }
        return $this->getCmsUrl($mPage, $lang, $urlParam);
    }

    private function getTypeUrl($type, $lang)
    {
        $url = '/'.$type;
        $langs = ConfigService::arrGetLangsEnv();
        if (count($langs) > 1) {
            $url = '/'.$lang.$url;
        }

        return $url;
    }

    private function getMenuSlugByLang(Page $mPage, $lang)
    {
        $menu = $mPage->menu()->get()->first();

        if (empty($menu)) {
            return null;
        }

        return (new MenuService)->getSlugByLang($menu, $lang);
    }

    public function getNumPagesBelongsToThisMenu(Page $mPage)
    {
        $menu = $mPage->menu()->get()->first();
        if (empty($menu)) {
            return null;
        }

        return (new MenuService)->pagesPublishedAndAccess($menu)->count();
    }

    public function getNumPagesBelongsToThisMenuCache(Page $mPage)
    {
        $pageId = $mPage->id;
        $isCache = (new ConfigService)->isCacheEnable();
        if ($isCache) {
            $countPages = cache()->remember('countpagesinthismenu_'.$pageId, CacheService::setTime(), function () use ($mPage) {
                return $this->getNumPagesBelongsToThisMenu($mPage);
            });
        } else {
            $countPages = $this->getNumPagesBelongsToThisMenu($mPage);
        }

        return $countPages;
    }

    private function getMenuSlugByLangCache(Page $mPage, $lang)
    {
        $pageId = $mPage->id;
        $isCache = (new ConfigService)->isCacheEnable();
        if ($isCache) {
            $menuSlug = cache()->remember('menusluglang_'.$lang.'_'.$pageId, CacheService::setTime(), function () use ($mPage, $lang) {
                return $this->getMenuSlugByLang($mPage, $lang);
            });
        } else {
            $menuSlug = $this->getMenuSlugByLang($mPage, $lang);
        }

        return $menuSlug;
    }

    private function getCmsUrl(Page $mPage, $lang, $urlParam = null)
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

    private function getMainUrl($lang)
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

    private function getIndependentUrl(Page $mPage, $lang)
    {
        $url = '/'.Page::PREFIX_IN_URL.'/'.$this->getSlugByLang($mPage, $lang);
        $langs = ConfigService::arrGetLangsEnv();
        if (count($langs) > 1) {
            $url = '/'.$lang.$url;
        }

        return $url;
    }

    public function unpublishedChildren(Page $mPage)
    {
        $pages = Page::where('page_id', '=', $mPage->id)->get();
        foreach ($pages as $page) {
            $page->published = 0;
            $page->update();
        }
    }

    public function checkAuth(Page $mPage)
    {
        if ($mPage->after_login && ! (Auth::check())) {
            return false;
        }

        return true;
    }

    public static function getFirstPageByType($type)
    {
        $isCache = (new ConfigService)->isCacheEnable();
        if ($isCache) {
            $ret = cache()->remember('pagebytype_'.$type, CacheService::setTime(), function () use ($type) {
                return Page::where('type', '=', $type)->where('published', '=', 1)->first();
            });
        } else {
            $ret = Page::where('type', '=', $type)->where('published', '=', 1)->first();
        }

        return $ret;
    }

    public static function getMainPage()
    {
        return PageService::getFirstPageByType('main_page');
    }

    public static function validateMainPage($data, $create = true)
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
     */
    public static function validateParentPublished($data)
    {
        if (! empty($data['page_id'])) {
            $p = Page::findOrFail($data['page_id']);
            if ($p->published == 0) {
                $data['published'] = 0;
            }
        }

        return $data;
    }

    public function arrImages(Page $mPage, $lang)
    {
        $out = [];
        $imageService = new ImageService;
        foreach ($mPage->images as $image) {
            $item = $imageService->getAllImage($image, false);
            $item['id'] = $image->id;
            $item['alt'] = $imageService->getAltImg($image);
            $item['altlang'] = ! empty($item['alt'][$lang]) ? $item['alt'][$lang] : ''; // it neeeds to javascript - to modal window in gallery
            $out[] = $item;
        }

        return $out;
    }

    public function getPageWithImages(Page $mPage, $lang)
    {
        $langs = $this->getArrLangs();

        if (! in_array($lang, $langs)) {
            throw new \Exception("Problem with langs - lang: $lang no exist");
        }

        $p['id'] = $mPage->id;
        $p['type'] = $mPage->type;
        $p['images'] = $this->arrImages($mPage, $lang);

        return $p;
    }

    private function getPageDataFormat($page)
    {
        $out = [];
        foreach ($this->pageFields as $field) {
            $out[$field] = $page[$field];
        }
        foreach ($page['translates'] as $translate) {
            $out[$translate['column']][$translate['lang']] = $translate['value'];
        }
        foreach ($page['contents'] as $translate) {
            $out[$translate['column']][$translate['lang']] = $translate['value'];
        }

        return $out;
    }

    public function getAllPagesWithImagesOneItem(Page $mPage, ?string $simple = null)
    {
        $page = (new Page)->where('id', $mPage->id)->with(['translates', 'contents'])->orderBy('position', 'asc')->first()->toArray();
        // $page = (new Page)->where('id', $mPage->id)->with(['translates', 'contents'])->orderBy('position', 'asc')->get($this->pageFields)->first()->toArray(); //phpstan fix

        $formatPage = $this->getPageDataFormat($page);
        if (! $simple) {
            $formatPage['images'] = ImageService::getImagesAndThumbsByTypeAndRefId('page', $page['id']);
        }

        return $formatPage;
    }

    public function getFirstPageWithImagesForGuest($type)
    {
        if (! in_array($type, ConfigService::arrGetPageTypes())) {
            throw new \Exception('Wrong type : '.$type);
        }

        // $page = Page::with(['translates', 'contents'])->where('type', $type)->where('published', true)->where('after_login', false)->orderBy('position', 'asc')->get($this->pageFields)->first(); //->toSql(); ///toArray();
        $page = Page::with(['translates', 'contents'])->where('type', $type)->where('published', true)->where('after_login', false)->orderBy('position', 'asc')->first(); // ->toSql(); ///toArray();

        $out = [];
        if ($page) {
            $page = $page->toArray();
            $out = $this->getPageDataFormat($page);
            $out['images'] = ImageService::getImagesAndThumbsByTypeAndRefId('page', $page['id']);
        }

        return $out;
    }

    public function getAllPagesWithImages($type = null)
    {
        if ($type) {
            $pages = Page::with(['translates', 'contents'])->where('type', $type)->orderBy('position', 'asc')->get($this->pageFields)->toArray();
        } else {
            $pages = Page::with(['translates', 'contents'])->orderBy('position', 'asc')->get($this->pageFields)->toArray();
        }

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
     * We can delete this method
     * old method: getPageDataByShortTitleCache
     *
     * this method is tested
     * this method is writeln by new manner, and gets many pages, not one (but i use getPageDataByShortTitleCache this method instead)
     * don't use this method
     * maybe in the future i will use it
     */
    public function getAllPagesWithImagesByShortTitleForDefaultLang($shortTitle)
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

    public static function getNextPositionByMenuId($menuId)
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

    public static function getPagesByMenuId($menuId, $pageId)
    {
        $page = [];
        if ($menuId === null) {
            $page = Page::query()
                ->whereNull('menu_id')
                ->orderBy('position', 'asc')
                ->get();
        } elseif (($menuId !== null) && ($pageId === null)) {
            $page = Page::query()
                ->where('menu_id', '=', $menuId)
                ->whereNull('page_id')
                ->orderBy('position', 'asc')
                ->get();
        } elseif (($menuId !== null) && ($pageId !== null)) {
            $page = Page::query()
                ->where('menu_id', '=', $menuId)
                ->where('page_id', '=', $pageId)
                ->orderBy('position', 'asc')
                ->get();
        }

        return $page;
    }

    public static function swapPosition($direction, $id)
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
        $pages = PageService::getPagesByMenuId($menuId, $pageId);

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

                $positionKey = $p->position;

                Page::where('id', $p->id)->update(['position' => $pages[$swapKey]->position]);

                Page::where('id', $pages[$swapKey]->id)->update(['position' => $positionKey]);
                // $obj2 = Page::find($pages[$swapKey]->id);
                // $obj2->position = 44;  //$positionKey;
                // $obj2->save();
            }
        }

        return true;
    }
}
