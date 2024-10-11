<?php

namespace App\Services\Cmsrs;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Auth;
use Carbon\Carbon;

use App\Models\Cmsrs\Translate;
use App\Models\Cmsrs\Content;
use App\Models\Cmsrs\Product;
use App\Models\Cmsrs\Page;
use App\Models\Cmsrs\Basket;
use App\Models\Cmsrs\Image;
use Namshi\JOSE\Base64\Base64UrlSafeEncoder;

class PageService extends BaseService
{
    //const PREFIX_CMS_URL = 'cms';
    //const PREFIX_CMS_ONE_PAGE_IN_MENU_URL = 'o';    
    //const PREFIX_IN_URL = 'in'; //(in) independent

    private $translate;
    private $content;
    public $pageFields;
    private $langs;

    /*
    protected $fillable = [
        'published',
        'commented',
        'after_login',
        'position',
        'type',
        'menu_id',
        'page_id'
    ];

    public $requiredColumn = [
        'title',
        'short_title'
    ];

    protected $casts = [
        'published' => 'integer',
        'commented' => 'integer',
        'after_login' => 'integer',
        'position' => 'integer',
        'menu_id' => 'integer',
        'page_id' => 'integer'
    ];
    */

    public function __construct(array $attributes = array())
    {
        //parent::__construct($attributes);

        $this->pageFields = [
          'id',
          'published',
          'commented',
          'after_login',
          'position',
          'type',
          'menu_id',
          'page_id'
      ];
  
        $this->translate = new TranslateService;
        $this->content = new ContentService;
        $this->langs = $this->getArrLangs();
    }

    // public function menu()
    // {
    //     return $this->hasOne('App\Menu', 'id', 'menu_id');
    // }

    // public function translates()
    // {
    //     return $this->hasMany('App\Translate');
    // }


    // public function contents()
    // {
    //     return $this->hasMany('App\Content');
    // }

    // public function images()
    // {
    //     return $this->hasMany('App\Image')->orderBy('position');
    // }

    public function getPageDataByShortTitleCache( $shortTitle, $data = 'content',  $lang = null )
    {
        if( empty($lang) ){
            $lang = ConfigService::getDefaultLang();
        }
        $isCache = (new ConfigService)->isCacheEnable();
        if ($isCache) {
            $ret = cache()->remember('page_by_short_title_'.$data.'_'.Str::slug($shortTitle, "_").'_'.$lang, Carbon::now()->addYear(1), function () use ($shortTitle, $data, $lang) {
                return $this->getPageDataByShortTitle( $shortTitle, $data, $lang );
            });
        } else {
            $ret = $this->getPageDataByShortTitle( $shortTitle, $data, $lang );
        }

        return $ret;
    }

    public function getPageDataByShortTitle( $shortTitle, $data = 'content',  $lang = null )
    {
        if( !in_array( $data, ['content', 'title', 'images', 'url'] ) ){
            throw new \Exception("second param is content or title allowed, now is: ".$data);
        }

        if( empty($lang) ){
            $lang = ConfigService::getDefaultLang();
        }

        $page = $this->getPageByShortTitle($shortTitle);

	if( empty($page) ){
	    return false;
	}

        if( 'url' == $data ){
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
        $translate = Translate::where('value', '=', $shortTitle)->where('column', '=', 'short_title' )->first();  //where('lang', '=', $defaultLang )->first();
        if( empty($translate) ){
            return false;
        }

        //->where('type', '=', 'inner') //todo why is this condition ? 'published', '=', 1 - is it make sense (see inner page post:/api/pages)? see test: it_will_get_data_page_by_short_title
        $page = $translate->page()->where('published', '=', 1)->first(); 
        if( empty($page) ){
            return false;
        }
        return $page;
    }

    public function getContentInnerPageByIdCache( $pageId, $lang = null )
    {
        if( empty($lang) ){
            $lang = ConfigService::getDefaultLang();
        }

        $isCache = (new ConfigService)->isCacheEnable();
        if ($isCache) {
            $ret = cache()->remember('pageinner_by_pageid_'.$pageId.'_'.$lang, Carbon::now()->addYear(1), function () use ($pageId, $lang) {
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
        
        $contents = $page->contents->pluck('value', 'lang')->toArray() ;

        return  empty($contents[$lang]) ? '' : $contents[$lang];
    }

    public function setTranslate($objTranslate)
    {
        if (!empty($objTranslate)) {
            $this->translate = $objTranslate;
        }
    }

    public function setContent($objContent)
    {
        if (!empty($objContent)) {
            $this->content = $objContent;
        }
    }

    public function getDataToView(Page $mPage, $dataIn )   //($pageOut, $lang)
    {
        $lang = $dataIn['lang'];
        if( empty($lang) ){
            throw new \Exception("Now lang in dataIn");
        }

        $products = null;        
        if ('shop' === $mPage->type) {
            $products = (new ProductService)->getProductsWithImagesByPage($mPage->id);
        }

        $data = [
            'pageService' => (new PageService),
            'menus' =>  isSet($dataIn['menus']) ? $dataIn['menus'] : null,
            'page' => $mPage,
            'h1' => $this->translatesByColumnAndLang($mPage, 'title', $lang ),
            'page_title' => $this->translatesByColumnAndLang($mPage, 'title', $lang ) ?? config('app.name', 'cmsRS'),
            'seo_description' =>  $this->translatesByColumnAndLang($mPage, 'description', $lang ) ?? config('app.name', 'cmsRS'),
            'products' => $products,
            'lang' => $lang,
            'langs' => $dataIn['langs'],
            're_public' => env('GOOGLE_RECAPTCHA_PUBLIC', ''),
            'view' => $this->getViewNameByType( $mPage )
        ];

        return  array_merge($data, $dataIn);
    }



    public static function getPageBySlug($menus, $menuSlug, $pageSlug, $lang) //todo - change static
    {
        $menuService = new MenuService; //todo
        $pageService = new MenuService;//todo
        $pageOut = null;
        foreach ($menus as $menu) {
            if ($menuSlug == $pageService->getSlugByLang($menu, $lang)) {
                $objPagesPublishedAndAccess = $menuService->pagesPublishedAndAccess($menu);
                if(1 == $objPagesPublishedAndAccess->count()){ //it is the case for pageSlug = null, 1 page in menu
                    $pageOut =  $objPagesPublishedAndAccess->first();
                    break;
                }
                foreach ($menuService->pagesPublished($menu)  as $page) {
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

        $out = ['success' => true ];
        $pages = (new PageService())->getAllPagesWithImages();
        foreach ($pages as $page) {
            $mId = empty($page['menu_id']) ? 0 : $page['menu_id'];
            if ($page['id']  == $id) {
                continue;
            }
            if ($mId !=  $menuId) {
                continue;
            }

            foreach ($page['title'] as $lang => $title) {
                if (empty($data['title']) || empty($data['title'][$lang])) {
                    throw new \Exception("page title is empty - but is require");
                }
                $titleIn = Str::slug($data['title'][$lang], "-");
                $t = Str::slug($title, "-");
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

        return Str::slug($name, "-");
    }

    public function getAllTranslate(Page $mPage)
    {
        $pageId =$mPage->id;

        $isCache =  (new ConfigService)->isCacheEnable();
        if ($isCache) {
            $ret = cache()->remember('pagetranslatepageid_'.$pageId, Carbon::now()->addYear(1), function () use ($mPage, $pageId) {
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
        $translates = $mPage->translates()->where('page_id', $pageId)->get(['lang', 'column', 'value'])->toArray();//zmiana 1007
        $contents = $mPage->contents()->where('page_id', $pageId)->get(['lang', 'column', 'value'])->toArray();//zmiana 1007
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
            throw new \Exception("I cant get page id");
        }
        return $page;
    }

    /**
     * use also in script to load demo (test) data
     * php artisan command:load-demo-data
     */
    public function wrapCreate($data)
    {
        $page = PageService::CreatePage($data);
        $this->createTranslate([ 'page_id' => $page->id, 'data' => $data ]);

        if (!empty($data['images']) && is_array($data['images'])) {
            $objImage = new ImageService();
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

    public function wrapUpdate(Page $mPage, $data) //zmiana_1007
    {
        $mPage->update($data);
        $this->createTranslate([ 'page_id' => $mPage->id, 'data' => $data ], false);
        return true;
    }
    
    public function getFooterPages($lang)
    {
        $privacyPolicy = PageService::getFirstPageByType('privacy_policy');
        $contact = PageService::getFirstPageByType('contact');

        $out = [];
        $policyUrl = null;
        $policyTitle = null;
        if (!empty($privacyPolicy)) {
            $policyUrl = $this->getUrl($privacyPolicy, $lang);
            $policyTitle =  $this->translatesByColumnAndLang($privacyPolicy, 'title', $lang);
        }

        $contactUrl = null;
        $contactTitle = null;
        if (!empty($contact)) {

            //dd($contact);
            $contactUrl = $this->getUrl($contact, $lang);
            $contactTitle = $this->translatesByColumnAndLang($contact, 'title', $lang);
        }

        $out['policyUrl'] = $policyUrl;
        $out['policyTitle'] =  $policyTitle;
        $out['contactUrl'] =  $contactUrl;
        $out['contactTitle'] =  $contactTitle;
    
        return $out;
    }


    

    public function getViewNameByType( $mPage )
    {
        $type = $mPage->type;
        if ($type == 'projects') {
            $view = 'projects';
        } elseif ($type == 'clear') {
            $view = 'clear';
        } elseif ($type == 'privacy_policy') {
            $view = 'in';
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
        if( 'inner' == $type ){
            return false;
        }elseif ('main_page' == $type) {
            return $this->getMainUrl($lang);
        } elseif ( ('login' == $type) || ('checkout' == $type) || ('register' == $type) || ('home' == $type) || ($type == 'shoppingsuccess') ||  ($type == 'search') ||  ($type == 'forgot')  ) {
            return $this->getTypeUrl($type, $lang);
        } 
        //elseif ('privacy_policy' == $this->type) {
        //    return $this->getIndependentUrl($lang);
        //}
        return $this->getCmsUrl($mPage, $lang, $urlParam);
    }

    private function getTypeUrl($type, $lang)
    {
        $url = "/".$type;
        $langs = ConfigService::arrGetLangsEnv();
        if (1 < count($langs)) {
            $url = "/".$lang.$url;
        }

        return $url;
    }

    private function getMenuSlugByLang(Page $mPage, $lang)
    {
        $menu = $mPage->menu()->get()->first();

        if( empty($menu) ){
            return null;
        }
        return  (new MenuService)->getSlugByLang($menu, $lang);    
    }

    public function getNumPagesBelongsToThisMenu(Page $mPage)
    {
        $menu = $mPage->menu()->get()->first();
        if( empty($menu) ){
            return null;
        }
        //return $menu->pagesPublished->count();
        return  (new MenuService)->pagesPublishedAndAccess($menu)->count();        
    }

    public function getNumPagesBelongsToThisMenuCache(Page $mPage)
    {
        $pageId = $mPage->id;
        $isCache = (new ConfigService)->isCacheEnable();
        if ($isCache) {
            $countPages = cache()->remember('countpagesinthismenu_'.$pageId, Carbon::now()->addYear(1), function ()  use ($mPage) { 
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
        $isCache =  (new ConfigService)->isCacheEnable();
        if ($isCache) {
            $menuSlug = cache()->remember('menusluglang_'.$lang.'_'.$pageId, Carbon::now()->addYear(1), function () use ($mPage, $lang) {
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

        //dd($menuSlug);
        if(empty($menuSlug)){
            return $this->getIndependentUrl($mPage, $lang);
        }

        $countPages = $this->getNumPagesBelongsToThisMenuCache($mPage);
        if( (1 == $countPages) &&  ('shop' != $mPage->type  )  ){
            $url = "/".Page::PREFIX_CMS_ONE_PAGE_IN_MENU_URL."/".$menuSlug;
        }else{
            $url = "/".Page::PREFIX_CMS_URL."/".$menuSlug."/".$this->getSlugByLang($mPage, $lang);
        }
        if($urlParam){
            //$url = $url."/".Str::slug($urlParam, '-');
            $url = $url."/".$urlParam;            
        }
        $langs = ConfigService::arrGetLangsEnv();
        if (1 < count($langs)) {
            $url = "/".$lang.$url;
        }

        return $url;
    }

    private function getMainUrl($lang)
    {
        $langs = ConfigService::arrGetLangsEnv();
        array_shift($langs); //after this langs will be changed. It has rest of langs without first one.

        if (empty($langs)) {
            $url = "/";
        } else {
            $url = in_array($lang, $langs) ? "/".$lang : "/";
        }
        return $url;
    }

    private function getIndependentUrl(Page $mPage, $lang)
    {
        $url = "/".Page::PREFIX_IN_URL."/".$this->getSlugByLang($mPage, $lang);
        $langs = ConfigService::arrGetLangsEnv();
        if (1 < count($langs)) {
            $url = "/".$lang.$url;
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
        if ($mPage->after_login && !(Auth::check())) {
            return false;
        }
        return true;
    }
    
    public static function getFirstPageByType($type)
    {
        $isCache =  (new ConfigService)->isCacheEnable();
        if ($isCache) {
            $ret = cache()->remember('pagebytype_'.$type, Carbon::now()->addYear(1), function () use ($type) {
                return  Page::where('type', '=', $type)->where('published', '=', 1)->get()->first();
            });
        } else {
            $ret = Page::where('type', '=', $type)->where('published', '=', 1)->get()->first();
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
                    throw new \Exception("Two main page not allowed");
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
        if (!empty($data['page_id'])) {
            $p = Page::findOrFail($data['page_id']);
            if (0 == $p->published) {
                $data['published'] = 0;
            }
        }
        return $data;
    }
    

    
    public function arrImages(Page $mPage,  $lang)
    {
        $out = [];
        $imageService = new ImageService();
        foreach ($mPage->images as $image) {
            $item = $imageService->getAllImage($image, false);
            $item['id'] = $image->id;
            $item['alt'] = $imageService->getAltImg($image);
            $item['altlang'] = !empty($item['alt'][$lang]) ? $item['alt'][$lang] : ''; //it neeeds to javascript - to modal window in gallery
            $out[] = $item;
        }
        return $out;
    }

    public function getPageWithImages(Page $mPage, $lang)
    {
        $langs = $this->getArrLangs();

        if (!in_array($lang, $langs)) {
            throw new \Exception("Problem with langs - lang: $lang no exist");
        }

        $p['id'] =$mPage->id;
        $p['type'] =$mPage->type;
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
        //$page = ( new  )->where('id', $this->id)->with(['translates', 'contents'])->orderBy('position', 'asc')->get($this->pageFields)->first()->toArray();
        $page = $mPage->with(['translates', 'contents'])->orderBy('position', 'asc')->get($this->pageFields)->first()->toArray();        
        $formatPage = $this->getPageDataFormat($page);
        if(!$simple){
            $formatPage['images'] = ImageService::getImagesAndThumbsByTypeAndRefId('page', $page['id']);
        }
        

        return $formatPage;
    }


    /*
    public function getPageWithImagesByIdCache($pageId)
    {
        $isCache =  (new Config)->isCacheEnable();
        if ($isCache) {
            $ret = cache()->remember('page_with_images_page_id_'.$pageId, Carbon::now()->addYear(1), function () use ($pageId) {
                return  (new Page)->getPageWithImagesById($pageId);
            });
        } else {
            $ret = (new Page)->getPageWithImagesById($pageId);
        }

        return $ret;
    }

    public function getPageWithImagesById($pageId)
    {                
        $page = Page::with(['translates', 'contents'])->where('id', $pageId)->where('published', true)->where('after_login', false)->orderBy('position', 'asc')->get($this->pageFields)->first(); //->toSql(); ///toArray();

        $out = [];
        if($page){
            $page = $page->toArray();
            $out = $this->getPageDataFormat($page);
            $out['images'] = Image::getImagesAndThumbsByTypeAndRefId('page', $page['id']);    
        }

        return $out;
    } 
    */   


    /**
     * todo
     * gdzie to jest wykorzystywane do skasowania??
     */
    public function getFirstPageWithImagesForGuestCache($type)
    {        
        $isCache =  (new ConfigService)->isCacheEnable();
        if ($isCache) {
            $ret = cache()->remember('page_with_images_by_type_'.$type, Carbon::now()->addYear(1), function () use ($type) {
                return  (new PageService()  )->getFirstPageWithImagesForGuest($type);
            });
        } else {
            $ret = (new PageService()  )->getFirstPageWithImagesForGuest($type);
        }

        return $ret;
    }

    public function getFirstPageWithImagesForGuest($type)
    {        
        if ( !in_array( $type, ConfigService::arrGetPageTypes() )  ) {
            throw new \Exception("Wrong type : ".$type);
        }
        
        $page = Page::with(['translates', 'contents'])->where('type', $type)->where('published', true)->where('after_login', false)->orderBy('position', 'asc')->get($this->pageFields)->first(); //->toSql(); ///toArray();

        $out = [];
        if($page){
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
     * 
     * old method: getPageDataByShortTitleCache
     * 
     * 
     * this method is writeln by new manner, and gets many pages, not one (but i use getPageDataByShortTitleCache this method instead)
     * don't use this method
     */
    public function getAllPagesWithImagesByShortTitleForDefaultLang($shortTitle)
    {
        $lang = ConfigService::getDefaultLang();

        $pages = Page::with(['translates', 'contents'])
            ->where('published', true)
            ->where('after_login', false)
            ->whereHas('translates', function($query) use ($shortTitle, $lang) {
                $query->where('lang', $lang)
                    ->where('column', 'short_title')
                    ->where('value', $shortTitle);
            })
            ->orderBy('position', 'asc')
            ->get($this->pageFields)
            ->toArray()
            ;

        $i = 0;
        $out = [];
        foreach ($pages as $page) {
            $out[$i] = $this->getPageDataFormat($page);
            $out[$i]['images'] = ImageService::getImagesAndThumbsByTypeAndRefId('page', $page['id']);
            $i++;
        }

        return $out;
    }

    public function delete(Page $mPage)
    {
        foreach ($mPage->images()->get() as $img) {
            $img->delete();
        }

        return $mPage->delete();  // parent::delete();
    }


    public static function getNextPositionByMenuId($menuId)
    {
        if (empty($menuId)) {
            $page = Page::query()
                  ->whereNull('menu_id')
                  ->orderBy('position', 'desc')
                  ->first()
                  ;
        } else {
            $page = Page::query()
                  ->where('menu_id', '=', $menuId)
                  ->orderBy('position', 'desc')
                  ->first()
                  ;
        }

        if (!$page) {
            return 1;
        }
        return  $page->position+1;
    }

    public static function getPagesByMenuId($menuId, $pageId)
    {
        $page = [];
        if (empty($menuId)) {
            $page = Page::query()
                  ->whereNull('menu_id')
                  ->orderBy('position', 'asc')
                  ->get()
                  ;
        } elseif (!empty($menuId) && empty($pageId)) {
            $page = Page::query()
                  ->where('menu_id', '=', $menuId)
                  ->whereNull('page_id')
                  ->orderBy('position', 'asc')
                  ->get()
                  ;
        } elseif (!empty($menuId) && !empty($pageId)) {
            $page = Page::query()
                  ->where('menu_id', '=', $menuId)
                  ->where('page_id', '=', $pageId)
                  ->orderBy('position', 'asc')
                  ->get()
                  ;
        }
        return $page;
    }


    public static function swapPosition($direction, $id)
    {
        $page = Page::find($id);
        if (!$page) {
            return false;
        }
        $menuId = $page->menu_id;
        $pageId = $page->page_id;
        $pages = PageService::getPagesByMenuId($menuId, $pageId);


        $countPages = count($pages);
        if ($countPages < 2) {
            return false;
        }

        foreach ($pages as $key => $p) {
            if (($p->id == $id)) {
                if ($direction === "up") {
                    $swapKey = ($key === 0) ?  $countPages - 1 : $key - 1;
                }

                if ($direction === "down") {
                    $swapKey = ($key === ($countPages - 1)) ? 0 : $key + 1;
                }

                $positionKey = $p->position;

                Page::where('id', $p->id)->update([ 'position' => $pages[$swapKey]->position ]);

                Page::where('id', $pages[$swapKey]->id)->update(['position' => $positionKey ]);
                //$obj2 = Page::find($pages[$swapKey]->id);
                //$obj2->position = 44;  //$positionKey;
                //$obj2->save();
            }
        }
        return true;
    }
}
