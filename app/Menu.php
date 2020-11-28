<?php

namespace App;


use Illuminate\Support\Str;
use Illuminate\Support\Facades\Auth;
//use Illuminate\Database\Eloquent\Model;
use Carbon\Carbon;


class Menu extends Base
{
    private $translate;

    protected $fillable = [
        //'name', 
        'position'
    ];

    protected $casts = [
        'position' => 'integer',
    ];

    public $requiredColumn = [
      'name'
    ];
    

    public function __construct(array $attributes = array())
    {
        parent::__construct($attributes);

        $this->translate = new Translate;  
    }


    public function setTranslate( $objTranslate )
    {
        if( !empty($objTranslate) ){
            $this->translate = $objTranslate;
        }
    }


    private function  getMenuObj()
    {

        $menuObj = new Menu;
        $menuObj->setTranslate($this->translate);
        return $menuObj;
    }
    

    // public function  getMenuObj()
    // {
    //     $this->setTranslate($this->translate);
    // }
    

    static public function CreateMenu($data)
    {

      $data['position'] = Menu::getNextPosition();

      $menu = Menu::create( $data );
      if( empty($menu->id)){
        throw new \Exception("I cant get menu id");
      }

      return $menu;
    }

    public function wrapUpdate($data) 
    {
      //dd('_______');
      $this->update($data); 
      //dd('________jestem____');
      $this->translate->wrapCreate( [ 'menu_id' => $this->id, 'data' => $data ], false );
      //dd('---t111-');
      return true;
    }    


    /**
     * use also in script to load demo (test) data
     * php artisan command:load-demo-data
     */
    public function wrapCreate($data) 
    {
      $menu = Menu::CreateMenu($data);

      //, $objTranslate = null 
      //$translate = $objTranslate ?? (new Translate);
      //dd();

      $this->translate->wrapCreate( [ 'menu_id' => $menu->id, 'data' => $data ], true );

      return $menu;
    }
    
    public function getSlugByLang($lang)
    {
        $column = 'name';
        $name = $this->translatesByColumnAndLang( $column, $lang );

        // if( empty($name) ){
        //   throw new \Exception("I cant create slug for menu, column $column for lang: $lang, because value is empty");
        // }

        return Str::slug($name, "-");
    }

    public function getAllTranslate()
    {
        $menuId = $this->id;
        $isCache = env( 'CACHE_ENABLE', false );
        if($isCache){        
          $ret = cache()->remember( 'menutranslatemenuid_'.$menuId  , Carbon::now()->addYear(1), function() use($menuId) {
            return  $this->translates()->where('menu_id', $menuId )->get(['lang', 'column', 'value'])->toArray();
          });
        }else{
          $ret = $this->translates()->where('menu_id', $menuId )->get(['lang', 'column', 'value'])->toArray();
        }
        return $ret;
    }

    /**
     * use in admin area
     */
    // public function getAllTranslateMenus()
    // {
    //   return  $this->translates()->get();
    // }



    /*
    public function setNameAttribute($value)
    {
        $this->attributes['name'] = $value;
        $this->attributes['slug'] = Str::slug($value, "-");
    }
    */
    /*
    public function getSlug()
    {
      return $this->slug;
    }

    public function getUrl()
    {
      return '/c/'.$this->slug;
    }
    */

    public function pages()
    {
      return $this->hasMany('App\Page');
    }

    public function translates()
    {
      return $this->hasMany('App\Translate');
    }

    public function pagesPublished()
    {
      $pages = $this->pages()->where( 'published', '=', 1 )->orderBy('position', 'asc');
      return $pages;
    }

    public function pagesPublishedAndAccess()
    {
      if (Auth::check()) {
        $pages = $this->pages()->where( 'published', '=', 1 )->orderBy('position', 'asc');
      }else{
        $pages =  $this->pages()->where( 'published', '=', 1 )->where( 'after_login', '=', 0 )->orderBy('position', 'asc');
      }

      return $pages;
    }

    //in: $arrPagesPublishedAndAccess
    public function pagesPublishedTree($pagesByMenu)
    {
      $tree = array();
      //$pagesByMenu = $this->pagesPublishedAndAccess()->get()->toArray();
      foreach($pagesByMenu as $page){
        if(empty($page->page_id)){
          //dump($page->page_id);
          $tree[$page->id] = $page;
        }
      }

      //dd('--');


      foreach($pagesByMenu as $page){
        if(!empty($page->page_id)){
          $children = empty($tree[$page->page_id]['children']) ? [] : $tree[$page->page_id]['children'];
          array_push($children, $page);
          //dd($tree[$page->page_id]);
          if( !empty($tree[$page->page_id]) ){
            $tree[$page->page_id]->setAttribute('children', $children);
          }

        }
      }

      //dd('--');

      return $tree;
    }

    static public function getAllMenus()
    {

      $menus =  Menu::with('translates')->orderBy('position', 'asc')->get()->toArray();

      $out = [];
      $i = 0;
      foreach($menus as $menu){
        $out[$i]['id'] = $menu['id'];
        $out[$i]['position'] = $menu['position'];
        foreach($menu['translates'] as $translate){
          $out[$i][$translate['column']][$translate['lang']] = $translate['value'];
        }
        $i++;
      }

      return $out;
    }

    static public function checkIsDuplicateName($data, $id = '')
    {
      $out = ['success' => true ];
      $menus = Menu::getAllMenus();
      foreach($menus as $menu){
        if($menu['id']  == $id ){
          continue;
        }
        foreach($menu['name'] as $lang => $name ){
          if( empty($data['name']) || empty($data['name'][$lang])){
            throw new \Exception("menu name is empty - but is require");
          }
          $nameIn = Str::slug($data['name'][$lang], "-");
          $n = Str::slug($name, "-");
          if($nameIn == $n ){
            $out['success'] = false;
            $out['error'] = "Duplicate menu: $name ($lang)";
            break;
          }
        }
      }
      return $out;
    }

    static public function getNextPosition()
    {
      $menu = Menu::query()
                ->orderBy('position', 'desc')
                ->first()
                ;

      if( !$menu ){
        return 1;
      }
      return  $menu->position+1;
    }

    static public function swapPosition($direction, $id)
    {
      $menus = Menu::query()
                ->orderBy('position', 'asc')
                ->get()
                ;

      $countMenus = count($menus);
      if($countMenus < 2){
        return false;
      }

      foreach ($menus as $key => $menu) {
        //dump($menu->id);
        if( ($menu->id == $id)  ){

          if( $direction === "up" ){
            $swapKey = ( $key === 0 ) ?  $countMenus - 1 : $key - 1;
          }

          if( $direction === "down" ){
            $swapKey = ( $key === ($countMenus - 1) ) ? 0 : $key + 1;
          }

          $positionKey = $menu->position;
          $menu->position = $menus[$swapKey]->position;
          $menu->save();
          $menus[$swapKey]->position = $positionKey;
          $menus[$swapKey]->save();
        }
      }
      return true;
    }

}
