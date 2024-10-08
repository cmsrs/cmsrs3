<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Artisan;

class Config extends Model
{
    const PAGE_TYPES_STR_DEFAULT = 'cms,gallery,shop,contact,main_page,privacy_policy,login,projects,clear,checkout,register,home,shoppingsuccess,search,forgot,inner,slider_main'; //default values
    const LANG_DEFAULT = 'en,pl';
    const PAGINATION_DEFAULT = 10; 
    
    const SORT_ASC = 'asc';
    const SORT_DESC = 'desc';

    const CURRENCY_DEFAULT = 'USD';
    const CACHE_ENABLE_FILE_DEFAULT = 'app/cache_enable.txt';

    private $langs;
    private $cacheEnableFile;
    private $filePath;

    public function __construct()
    {
        $this->langs =  env('LANGS', Config::LANG_DEFAULT ); //empty(env('LANGS')) ? Config::LANG_DEFAULT : env('LANGS');
        $this->cacheEnableFile = env('CACHE_ENABLE_FILE', Config::CACHE_ENABLE_FILE_DEFAULT );
        $this->filePath = $this->getCacheEnableFilePath();
    }

    public function getCacheFilePath()
    {
        return $this->filePath;
    }

    public static function getAvailableSortingDirection()
    {
        return [
            Config::SORT_ASC,
            Config::SORT_DESC
        ];
    }

    public function getIsShop()
    {
        return env('IS_SHOP', true);
    }

    public function getDemoStatus()
    {
        return env('DEMO_STATUS', false);
    }

    public function getCurrency()
    {
        return env('CURRENCY', Config::CURRENCY_DEFAULT);
    }

    public function getCacheEnableFilePath()
    {
        return storage_path($this->cacheEnableFile);
    }
    
    public function isExistCacheFileEnable()
    {
        return File::exists($this->filePath);
    }

    public function deleteFileCacheEnableIfExist()
    {
        if (File::exists($this->filePath)) {
            File::delete($this->filePath);
            return true;
        }
        return false;
    }    

    public function createFileCacheEnableIfNotExist()
    {
        if (!File::exists($this->filePath)) {
            File::put($this->filePath, '');
            return true;
        }        
        return false;
    }

    public function clearCache()
    {
        Artisan::call('cache:clear');        
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
        return env('PAGINATION', Config::PAGINATION_DEFAULT);
    }

    public static function getPageTypes()
    {
        // $pageTypes = '';
        // if (env('PAGE_TYPES')) {
        //     $pageTypes = env('PAGE_TYPES');
        // } else {
        //     $pageTypes = Config::PAGE_TYPES_STR_DEFAULT;
        // }

        return env('PAGE_TYPES', Config::PAGE_TYPES_STR_DEFAULT);
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
        $langs = explode(',', env('LANGS', Config::LANG_DEFAULT));
        return $langs;
    }

    public static function getDefaultLang()
    {
        $langs = Config::arrGetLangsEnv();
        if(empty($langs) || empty($langs[0]) ){
            $langs = []; 
            $langs[0] = Config::LANG_DEFAULT;            
            //throw new \Exception("You must set at least one language in the .env file (default lang)");
        }
        return $langs[0];
    }

    public static function saveLangToSession($lang)
    {
        if( request()->hasSession() ){ //it don't session in tests
            request()->session()->put('lang', $lang);
        }
    }

    /**
     * this function not working properly - for example i homeController
     */
    public static function getLangFromSession()
    {        
        $lang = null;
        if( request()->hasSession() ){ //it don't session in tests
            $lang = request()->session()->get('lang');
        }
        if( empty($lang) ){
            $lang = Config::getDefaultLang();
        }
        return $lang;
    }

    public function getConfigCacheEnable()
    {
        return env('CACHE_ENABLE', false);
    }

    public function isCacheEnable()
    {        
        $formEnv = $this->getConfigCacheEnable();
        $isFileExist = $this->isExistCacheFileEnable();
        return $formEnv && $isFileExist;
    }

    
}
