<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Config extends Model
{
    const PAGE_TYPES_STR_DEFAULT = 'cms,gallery,shop,contact,main_page,privacy_policy,login,projects,clear,checkout,register,home,shoppingsuccess,search,forgot,inner'; //default values
    const LANG_DEFAULT = 'en';
    const PAGINATION_DEFAULT = 10; 
    
    const SORT_ASC = 'asc';
    const SORT_DESC = 'desc';

    const CACHE_ENABLE_FILE_DEFAULT = 'app/cache_enable.txt';

    private $langs;
    private $cacheEnableFile;

    public function __construct()
    {
        $this->langs = empty(env('LANGS')) ? '' : env('LANGS');
        //dump($this->langs);
        //dd('____sss_____');
        $this->cacheEnableFile = env('CACHE_ENABLE_FILE', Config::CACHE_ENABLE_FILE_DEFAULT );
    }

    public static function getAvailableSortingDirection()
    {
        return [
            Config::SORT_ASC,
            Config::SORT_DESC
        ];
    }

    public function getCacheFilePath()
    {
        return storage_path($this->cacheEnableFile);
    }
    
    public function setLangs($langs)
    {
        $this->langs = $langs;
    }

    public function getLangs()
    {
        return $this->langs;
    }

    public static function getPagination()
    {
        $pagination = '';
        if (env('PAGINATION')) {
            $pagination = env('PAGINATION');
        } else {
            $pagination = Config::PAGINATION_DEFAULT;
        }

        return $pagination;
    }

    public static function getPageTypes()
    {
        $pageTypes = '';
        if (env('PAGE_TYPES')) {
            $pageTypes = env('PAGE_TYPES');
        } else {
            $pageTypes = Config::PAGE_TYPES_STR_DEFAULT;
        }

        return $pageTypes;
    }

    public static function arrGetPageTypes()
    {
        $strPageTypes = Config::getPageTypes();
        return explode(',', $strPageTypes);
    }

    public function getLangsFromEnv()
    {
        $langs = '';
        if ($this->getLangs()) {
            $langs = $this->getLangs();
        } else {
            $langs = Config::LANG_DEFAULT;
            //throw new \Exception("You must set at least one language in the .env file");
        }
        return $langs;
    }

    public function arrGetLangs()
    {
        $strLangs = Config::getLangsFromEnv();
        return explode(',', $strLangs);
    }

    public static function arrGetLangsEnv()
    {
        $langs = explode(',', env('LANGS', ''));
        //dd($langs);
        return $langs;
    }

    public static function getDefaultLang()
    {
        $langs = Config::arrGetLangsEnv();
        if(empty($langs) || empty($langs[0]) ){
            $langs = []; 
            $langs[0] = LANG_DEFAULT;            
            //throw new \Exception("You must set at least one language in the .env file (deflang)");
        }
        return $langs[0];
    }

    public static function saveLangToSession($lang)
    {
        if( request()->hasSession() ){ //it dont session in tests
            //dd('_____change_lanfg____');
            request()->session()->put('lang', $lang);
        }
    }

    /**
     * this function not wokking properly - for example i homeController
     */
    public static function getLangFromSession()
    {        
        $lang = null;
        //$ss = request()->session();
        //dd($ss);        
        if( request()->hasSession() ){ //it dont session in tests

            //dd('____________opk___');
            $lang = request()->session()->get('lang');
        }
        if( empty($lang) ){
            //dd('____________wrong___');            
            $lang = Config::getDefaultLang();
        }
        return $lang;
    }

    public static function isCacheEnable()
    {        
        return env('CACHE_ENABLE', false);
    }

    
}
