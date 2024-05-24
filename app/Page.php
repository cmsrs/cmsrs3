<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Auth;
use Carbon\Carbon;

class Page extends Base
{
    const PREFIX_CMS_URL = 'cms';
    const PREFIX_CMS_ONE_PAGE_IN_MENU_URL = 'o';    
    //const PREFIX_SHOP_URL = 'shop';    
    const PREFIX_IN_URL = 'in'; //(in) independent

    private $translate;
    private $content;
    public $pageFields;
    private $langs;

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

    public function __construct(array $attributes = array())
    {
        parent::__construct($attributes);

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
  
        $this->translate = new Translate;
        $this->content = new Content;
        $this->langs = $this->getArrLangs();
    }

    public function menu()
    {
        return $this->hasOne('App\Menu', 'id', 'menu_id');
    }

    public function translates()
    {
        return $this->hasMany('App\Translate');
    }


    public function contents()
    {
        return $this->hasMany('App\Content');
    }

    public function images()
    {
        return $this->hasMany('App\Image')->orderBy('position');
    }

    public function getPageDataByShortTitleCache( $shortTitle, $data = 'content',  $lang = null )
    {
        if( empty($lang) ){
            $lang = Config::getDefaultLang();
        }
        $isCache = Config::isCacheEnable();
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
        if( !in_array( $data, ['content', 'title', 'url'] ) ){
            throw new \Exception("second param is content or title allowed, now is: ".$data);
        }

        if( empty($lang) ){
            $lang = Config::getDefaultLang();
        }

        $page = $this->getPageByShortTitle($shortTitle);

	if( empty($page) ){
	    return false;
	}

        if( 'url' == $data ){
            return $page->getUrl($lang);
        }
        
        $pageData = $page->getAllPagesWithImagesOneItem();

        $dataByLang = empty($pageData[$data]) ? '' : $pageData[$data];
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
            $lang = Config::getDefaultLang();
        }

        $isCache = Config::isCacheEnable();
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

    public function getDataToView( $dataIn )   //($pageOut, $lang)
    {
        $lang = $dataIn['lang'];
        if( empty($lang) ){
            throw new \Exception("Now lang in dataIn");
        }

        $products = null;        
        if ('shop' === $this->type) {
            $products = (new Product)->getProductsWithImagesByPage($this->id);
        }

        $data = [
            'menus' =>  isSet($dataIn['menus']) ? $dataIn['menus'] : null,
            'page' => $this,
            'h1' => $this->translatesByColumnAndLang( 'title', $lang ),
            'page_title' => $this->translatesByColumnAndLang( 'title', $lang ) ?? config('app.name', 'cmsRS'),
            'seo_description' =>  $this->translatesByColumnAndLang( 'description', $lang ) ?? config('app.name', 'cmsRS'),
            'products' => $products,
            'lang' => $lang,
            'langs' => $dataIn['langs'],
            're_public' => env('GOOGLE_RECAPTCHA_PUBLIC', ''),
            'view' => $this->getViewNameByType()
        ];

        return  array_merge($data, $dataIn);
    }



    public static function getPageBySlug($menus, $menuSlug, $pageSlug, $lang)
    {
        $pageOut = null;
        foreach ($menus as $menu) {
            if ($menuSlug == $menu->getSlugByLang($lang)) {
                if(1 == $menu->pagesPublishedAndAccess->count()){ //it is the case for pageSlug = null, 1 page in menu
                    $pageOut =  $menu->pagesPublishedAndAccess->first();
                    break;
                }
                foreach ($menu->pagesPublished  as $page) {
                    if ($pageSlug == $page->getSlugByLang($lang)) {
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
        $pages = (new Page)->getAllPagesWithImages();
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
  


    public function getSlugByLang($lang)
    {
        $column = 'title';
        $name = $this->translatesByColumnAndLang($column, $lang);

        // if( empty($name) ){
        //   throw new \Exception("I cant create slug for page column: $column for lang: $lang, because value is empty");
        // }

        return Str::slug($name, "-");
    }

    public function getAllTranslate()
    {
        $pageId =$this->id;

        $isCache =  Config::isCacheEnable();
        if ($isCache) {
            $ret = cache()->remember('pagetranslatepageid_'.$pageId, Carbon::now()->addYear(1), function () use ($pageId) {
                return $this->getTranslateMerge($pageId);
            });
        } else {
            $ret = $this->getTranslateMerge($pageId);
        }

        return $ret;
    }
    
    public function getTranslateMerge($pageId)
    {
        $translates = $this->translates()->where('page_id', $pageId)->get(['lang', 'column', 'value'])->toArray();
        $contents = $this->contents()->where('page_id', $pageId)->get(['lang', 'column', 'value'])->toArray();
        $ret = array_merge($translates, $contents);
        return $ret;
    }


    public static function CreatePage($data)
    {
        $menuId = empty($data['menu_id']) ? null : $data['menu_id'];
        $data['position'] = Page::getNextPositionByMenuId($menuId);
        $data = Page::validateMainPage($data);
        $data = Page::validateParentPublished($data);

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
        $page = Page::CreatePage($data);
        $this->createTranslate([ 'page_id' => $page->id, 'data' => $data ]);

        if (!empty($data['images']) && is_array($data['images'])) {
            $objImage = new Image;
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

    public function wrapUpdate($data)
    {
        $this->update($data);
        $this->createTranslate([ 'page_id' => $this->id, 'data' => $data ], false);
        return true;
    }
    
    public static function getFooterPages($lang)
    {
        $privacyPolicy = Page::getFirstPageByType('privacy_policy');
        $contact = Page::getFirstPageByType('contact');

        $out = [];
        $policyUrl = null;
        $policyTitle = null;
        if (!empty($privacyPolicy)) {
            $policyUrl = $privacyPolicy->getUrl($lang);
            $policyTitle = $privacyPolicy->translatesByColumnAndLang('title', $lang);
        }

        $contactUrl = null;
        $contactTitle = null;
        if (!empty($contact)) {
            $contactUrl = $contact->getUrl($lang);
            $contactTitle = $contact->translatesByColumnAndLang('title', $lang);
        }

        $out['policyUrl'] = $policyUrl;
        $out['policyTitle'] =  $policyTitle;
        $out['contactUrl'] =  $contactUrl;
        $out['contactTitle'] =  $contactTitle;
    
        return $out;
    }


    

    public function getViewNameByType()
    {
        if ($this->type == 'projects') {
            $view = 'projects';
        } elseif ($this->type == 'clear') {
            $view = 'clear';
        } elseif ($this->type == 'privacy_policy') {
            $view = 'in';
        } elseif ($this->type == 'gallery') {
            $view = 'gallery';
        } elseif ($this->type == 'shop') {
            $view = 'shop';
        } elseif ($this->type == 'checkout') {
            $view = 'checkout';
        } elseif ($this->type == 'register') {
            $view = 'register';
        } elseif ($this->type == 'home') {
            $view = 'home';
        } elseif ($this->type == 'shoppingsuccess') {
            $view = 'shoppingsuccess';
        } elseif ($this->type == 'search') {
            $view = 'search';
        } elseif ($this->type == 'forgot') {
            $view = 'forgot';
        } else {
            $view = 'cms';
        }
        return $view;
    }

    public function getUrl($lang, $urlParam = null)
    {
        if( 'inner' == $this->type ){
            return false;
        }elseif ('main_page' == $this->type) {
            return $this->getMainUrl($lang);
        } elseif ( ('login' == $this->type) || ('checkout' == $this->type) || ('register' == $this->type) || ('home' == $this->type) || ($this->type == 'shoppingsuccess') ||  ($this->type == 'search') ||  ($this->type == 'forgot')  ) {
            return $this->getTypeUrl($lang);
        } 
        //elseif ('privacy_policy' == $this->type) {
        //    return $this->getIndependentUrl($lang);
        //}
        return $this->getCmsUrl($lang, $urlParam);
    }

    private function getTypeUrl($lang)
    {
        $url = "/".$this->type;
        $langs = Config::arrGetLangsEnv();
        if (1 < count($langs)) {
            $url = "/".$lang.$url;
        }

        return $url;
    }

    private function getMenuSlugByLang($lang)
    {
        $menu = $this->menu()->get()->first();
        if( empty($menu) ){
            return null;
        }
        return $menu->getSlugByLang($lang);    
    }

    public function getNumPagesBelongsToThisMenu()
    {
        $menu = $this->menu()->get()->first();
        if( empty($menu) ){
            return null;
        }
        //return $menu->pagesPublished->count();
        return $menu->pagesPublishedAndAccess->count();        
    }

    public function getNumPagesBelongsToThisMenuCache()
    {
        $pageId = $this->id;
        $isCache = Config::isCacheEnable();
        if ($isCache) {
            $countPages = cache()->remember('countpagesinthismenu_'.$pageId, Carbon::now()->addYear(1), function (){
                return $this->getNumPagesBelongsToThisMenu();
            });
        } else {
            $countPages = $this->getNumPagesBelongsToThisMenu();
        }
        return $countPages;
    }
    
    private function getMenuSlugByLangCache($lang)
    {
        $pageId = $this->id;
        $isCache =  Config::isCacheEnable();
        if ($isCache) {
            $menuSlug = cache()->remember('menusluglang_'.$lang.'_'.$pageId, Carbon::now()->addYear(1), function () use ($lang) {
                return $this->getMenuSlugByLang($lang);
            });
        } else {
            $menuSlug = $this->getMenuSlugByLang($lang);
        }
        return $menuSlug;
    }
    
    private function getCmsUrl($lang, $urlParam = null)
    {
        $menuSlug = $this->getMenuSlugByLangCache($lang);
        if(empty($menuSlug)){
            return $this->getIndependentUrl($lang);
        }

        $countPages = $this->getNumPagesBelongsToThisMenuCache();
        if( (1 == $countPages) &&   ('shop' != $this->type  )  ){
            $url = "/".Page::PREFIX_CMS_ONE_PAGE_IN_MENU_URL."/".$menuSlug;
        }else{
            $url = "/".Page::PREFIX_CMS_URL."/".$menuSlug."/".$this->getSlugByLang($lang);
        }
        if($urlParam){
            //$url = $url."/".Str::slug($urlParam, '-');
            $url = $url."/".$urlParam;            
        }
        $langs = Config::arrGetLangsEnv();
        if (1 < count($langs)) {
            $url = "/".$lang.$url;
        }

        return $url;
    }

    private function getMainUrl($lang)
    {
        $langs = Config::arrGetLangsEnv();
        array_shift($langs); //after this langs will be changed. It has rest of langs without first one.

        if (empty($langs)) {
            $url = "/";
        } else {
            $url = in_array($lang, $langs) ? "/".$lang : "/";
        }
        return $url;
    }

    private function getIndependentUrl($lang)
    {
        $url = "/".Page::PREFIX_IN_URL."/".$this->getSlugByLang($lang);
        $langs = Config::arrGetLangsEnv();
        if (1 < count($langs)) {
            $url = "/".$lang.$url;
        }

        return $url;
    }

    public function unpublishedChildren()
    {
        $pages = Page::where('page_id', '=', $this->id)->get();
        foreach ($pages as $page) {
            $page->published = 0;
            $page->update();
        }
    }

    public function checkAuth()
    {
        if ($this->after_login && !(Auth::check())) {
            return false;
        }
        return true;
    }
    
    public static function getFirstPageByType($type)
    {
        $isCache =  Config::isCacheEnable();
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
        return Page::getFirstPageByType('main_page');
    }

    public static function validateMainPage($data, $create = true)
    {
        if (isset($data['type']) && ($data['type'] == 'main_page')) {
            if ($create) {
                $p = Page::getMainPage();
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
    

    
    public function arrImages($lang)
    {
        $out = [];
        foreach ($this->images as $image) {
            $item = Image::getAllImage($image, false);
            $item['id'] = $image->id;
            $item['alt'] = Image::getAltImg($image);
            $item['altlang'] = !empty($item['alt'][$lang]) ? $item['alt'][$lang] : ''; //it neeeds to javascript - to modal window in gallery
            $out[] = $item;
        }
        return $out;
    }

    public function getPageWithImages($lang)
    {
        $langs = $this->getArrLangs();

        if (!in_array($lang, $langs)) {
            throw new \Exception("Problem with langs - lang: $lang no exist");
        }

        $p['id'] =$this->id;
        $p['type'] =$this->type;
        $p['images'] = $this->arrImages($lang);
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


    public function getAllPagesWithImagesOneItem(?string $simple = null)
    {
        $page = $this->where('id', $this->id)->with(['translates', 'contents'])->orderBy('position', 'asc')->get($this->pageFields)->first()->toArray();
        $formatPage = $this->getPageDataFormat($page);
        if(!$simple){
            $formatPage['images'] = Image::getImagesAndThumbsByTypeAndRefId('page', $page['id']);
        }
        

        return $formatPage;
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
            $out[$i]['images'] = Image::getImagesAndThumbsByTypeAndRefId('page', $page['id']);
            $i++;
        }

        return $out;
    }

    public function delete()
    {
        foreach ($this->images()->get() as $img) {
            $img->delete();
        }

        return parent::delete();
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
        $pages = Page::getPagesByMenuId($menuId, $pageId);


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
