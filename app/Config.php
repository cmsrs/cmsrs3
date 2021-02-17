<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Config extends Model
{
    const PAGE_TYPES_STR_DEFAULT = 'cms,gallery,shop,contact,main_page,privacy_policy,login,projects,clear'; //default values

    private $langs;

    public function __construct()
    {
        $this->langs = empty(env('LANGS')) ? '' : env('LANGS');
    }
    
    public function setLangs($langs)
    {
        $this->langs = $langs;
    }

    public function getLangs()
    {
        return $this->langs;
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
            throw new \Exception("You must set at least one language in the .env file");
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
        return explode(',', env('LANGS', ''));
    }

    public static function getDefaultLang()
    {
        $langs = Config::arrGetLangsEnv();
        if(empty($langs) || empty($langs[0]) ){
            throw new \Exception("You must set at least one language in the .env file (deflang)");
        }
        return $langs[0];
    }

    public static function saveLangToSession($lang)
    {
        if( request()->hasSession() ){ //it dont session in tests
            request()->session()->put('lang', $lang);
        }
    }

    public static function getLangFromSession()
    {
        $lang = Config::getDefaultLang();
        if( request()->hasSession() ){ //it dont session in tests
            $lang = request()->session()->get('lang');
        }
        return $lang;
    }
    
}
