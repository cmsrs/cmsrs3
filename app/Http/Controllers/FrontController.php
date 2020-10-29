<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

use App\Page;
use App\Product;
use App\Menu;
use App\Config;

class FrontController extends Controller
{
  private $menus;
  private $langs;  

  public function __construct()
  {
    $this->menus = Menu::all()->sortBy('position'); //TODO cached
    $this->langs = (new Config)->arrGetLangs();
  }

  private function validatePage($page)
  {
    if(empty($page)){
      abort(404);
    }

    if(!$page->checkAuth()){
      abort(401);        
    }
  }

  // public function showLoginForm()
  // {
  //     die('__ddddddddddddd___');
  //     //dd('_xxxx_sdss__');
  //     return view('auth.login');
  // }


  public function index($lang = null)
  {
    if( (count($this->langs) > 1) && $lang == $this->langs[0]  ){
      abort(404);
    }
    if(empty($lang)){
      $lang = $this->langs[0];
    }
    if( !in_array($lang, $this->langs) ){
      abort(404);
    }

    $page = Page::getMainPage();
    $this->validatePage($page);
    //$footerPages = Page::getFooterPages($lang);    


    return view('index', [ 
      'menus' => $this->menus, 
      'page' => $page, 
      'lang' => $lang, 
      'langs' => $this->langs,
      //'footerPages' => $footerPages  
    ] );
  }

  public function getPageLangs($lang, $menuSlug, $pageSlug )
  {
    $data = $this->getPage($menuSlug, $pageSlug, $lang );
    return view('cms', $data);
  }

  public function getPage($menuSlug, $pageSlug, $lang = null )
  {
    
    if(empty($lang)){
      $manyLangs = false;
      $lang = $this->langs[0];
    }else{
      $manyLangs = true;
    }

    //$footerPages = Page::getFooterPages($lang);        

    $pageOut = null;
    $products = null;
    foreach ($this->menus as $menu) {
      if(  (1 === count($menu->pagesPublished)) &&  ($pageSlug == $menu->pagesPublished()->first()->getSlugByLang($lang) ) ){
        $page = $menu->pagesPublished->first();
        $pageOut = $page;
        break;
      }elseif( ($menuSlug == $menu->getSlugByLang($lang))  &&  (1 < count($menu->pagesPublished)) ){
        foreach ($menu->pagesPublished  as $page){
          if( $pageSlug == $page->getSlugByLang($lang) ){
            $pageOut = $page;
            break;
          }
        }
      }
    }
    $this->validatePage($pageOut);

    if( 'shop' === $pageOut->type){
      $products = Product::getProductsWithImagesByPage($pageOut->id);
    }

    $data = [ 
      'menus' => $this->menus,  
      'page' => $pageOut, 
      'products' => $products, 
      'lang' => $lang, 
      'langs' => $this->langs,
      //'footerPages' => $footerPages
    ];

    if($manyLangs){
      return $data;
    }

    return view('cms', $data);
  }

  public function  getSeparatePageLangs($lang, $pageSlug)
  {
    $data = $this->getSeparatePage($pageSlug, $lang);
    return view('cms', $data);
  }

  public function getSeparatePage($pageSlug, $lang = null)
  {
    if(empty($lang)){
      $manyLangs = false;
      $lang = $this->langs[0];
    }else{
      $manyLangs = true;
    }
    
    $products = null;
    $pageOut = null;
    $pages = Page::all();
    foreach($pages as $page){
      if($page->getSlugByLang($lang) == $pageSlug){
        $pageOut = $page;
        break;
      }
    }

    //$footerPages = Page::getFooterPages($lang);
    $this->validatePage($pageOut);

    $data = [ 
      'menus' => $this->menus,  
      'page' => $pageOut, 
      'products' => $products, 
      'lang' => $lang, 
      'langs' => $this->langs,
      //'footerPages' => $footerPages
    ];

    if($manyLangs){
      return $data;
    }
    
    return view('cms', $data);
  }

}
