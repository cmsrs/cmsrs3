<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Config extends Model
{
    const PAGE_TYPES_STR_DEFAULT = 'cms,gallery,shop,contact,main_page,privacy_policy,login,projects,clear'; //default values

    private $langs;

    function __construct() {
      $this->langs = empty(env('LANGS')) ? '' : env('LANGS');
    }
    
    public function setLangs( $langs )
    {
      $this->langs = $langs;
    }

    public function getLangs()
    {
      return $this->langs;
    }

    static public function getPageTypes()
    {
      $pageTypes = '';
      if( env('PAGE_TYPES') ){
        $pageTypes = env('PAGE_TYPES');
      }else{
        $pageTypes = Config::PAGE_TYPES_STR_DEFAULT;
      }

      return $pageTypes;
    }

    static public function arrGetPageTypes()
    {
      $strPageTypes = Config::getPageTypes();
      return explode(',',$strPageTypes);
    }

    public function getLangsFromEnv()
    {
      $langs = '';
      if( $this->getLangs() ){
        $langs = $this->getLangs();
      }else{
        throw new \Exception("You must set at least one language in the .env file");
      }
      return $langs;
    }

    public function arrGetLangs()
    {
      $strLangs = Config::getLangsFromEnv();
      return explode(',',$strLangs);
    }

    static public function arrGetLangsEnv()
    {
      return explode(',',env('LANGS', '') );
    }
    
}
