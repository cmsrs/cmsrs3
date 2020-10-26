<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
//use JWTAuth;

use App\Page;
use App\Product;
use App\Menu;
use App\Config;


//use Validator;


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

  public function index($lang = null)
  {
    if( (count($this->langs) > 1) && $lang == $this->langs[0]  ){
      abort(404);
    }
    if(empty($lang)){
      $lang = $this->langs[0];
    }

    $page = Page::getMainPage();
    $this->validatePage($page);
    $footerPages = Page::getFooterPages($lang);    


    return view('index', [ 
      'menus' => $this->menus, 
      'page' => $page, 
      'lang' => $lang, 
      'footerPages' => $footerPages  
    ] );
  }

  // public function getPageForMenu($pageSlug ){
  //   $this->getPage(null, $pageSlug );
  // }

  public function getPageLangs($lang, $menuSlug, $pageSlug )
  {
    $this->getPage($menuSlug, $pageSlug, $lang );
  }

  //pagesPublishedAndAccess()
  public function getPage($menuSlug, $pageSlug, $lang = null )
  {
    //dd('________________jestem1111___'.$lang);        
    if(empty($lang)){
      $lang = $this->langs[0];
    }

    //dd($lang);

    $footerPages = Page::getFooterPages($lang);        

    $pageOut = null;
    $products = null;
    foreach ($this->menus as $menu) {
      //echo $menuSlug.'==';      
      //echo $pageSlug.'==';

      // echo "______jestem0_________";
      // echo $menu->slug.'______';
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

    return view('cms', [ 
      'menus' => $this->menus,  
      'page' => $pageOut, 
      'products' => $products, 
      'lang' => $lang, 
      'footerPages' => $footerPages
    ]);
  }

  public function  getSeparatePageLangs($lang, $pageSlug)
  {
    $this->getSeparatePage($pageSlug, $lang);
  }

  public function getSeparatePage($pageSlug, $lang = null)
  {
    if(empty($lang)){
      $lang = $this->langs[0];
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

    $footerPages = Page::getFooterPages($lang);
    $this->validatePage($pageOut);

    return view('cms', [ 
      'menus' => $this->menus,  
      'page' => $pageOut, 
      'products' => $products, 
      'lang' => $lang, 
      'footerPages' => $footerPages
    ]);
  }



  /*
  public function onePage($menuSlug)
  {
    $pageOut = null;
    $products = null;
    foreach ($this->menus as $menu) {
      if( ($menuSlug == $menu->slug) && (1 === count($menu->pagesPublished)) ){
        $page = $menu->pagesPublished->first();
        $pageOut = $page;
        break;
      }
    }
    if(!$find){
      abort(404);
    }
    if(!$pageOut->checkAuth()){
      abort(401);        
    }
    if( 'shop' === $pageOut->type){
      $products = Product::getProductsWithImagesByPage($pageOut->id);
    }

    return view('cms', [ 'menus' => $this->menus,  'page' => $pageOut, 'products' => $products ]);
  }
  */

}
