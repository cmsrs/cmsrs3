<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Config extends Model
{
    const PAGE_TYPES_STR_DEFAULT = 'cms,gallery,shop,contact,main_page,privacy_policy'; //default values

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
    
}
