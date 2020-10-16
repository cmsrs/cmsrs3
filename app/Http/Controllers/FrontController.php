<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
//use JWTAuth;

use App\Page;
use App\Product;
use App\Menu;
//use Validator;


class FrontController extends Controller
{
  private $menus;

  public function __construct()
  {
    $this->menus = Menu::all()->sortBy('position'); //TODO cached
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

  public function index()
  {
    $page = Page::getMainPage();
    $this->validatePage($page);

    return view('index', [ 'menus' => $this->menus, 'page' => $page ] );
  }

  // public function getPageForMenu($pageSlug ){
  //   $this->getPage(null, $pageSlug );
  // }

  //pagesPublishedAndAccess()
  public function getPage($menuSlug, $pageSlug )
  {
    $pageOut = null;
    $products = null;
    foreach ($this->menus as $menu) {
      //echo $menuSlug.'==';      
      //echo $pageSlug.'==';

      // echo "______jestem0_________";
      // echo $menu->slug.'______';
      if(  (1 === count($menu->pagesPublished)) &&  ($pageSlug == $menu->pagesPublished()->first()->slug ) ){
        $page = $menu->pagesPublished->first();
        $pageOut = $page;
        break;
      }elseif( ($menuSlug == $menu->slug)  &&  (1 < count($menu->pagesPublished)) ){
        foreach ($menu->pagesPublished  as $page){
          if( $pageSlug == $page->slug ){
            //echo "______jestem_________";
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

    return view('cms', [ 'menus' => $this->menus,  'page' => $pageOut, 'products' => $products ]);
  }

  public function getSeparatePage($pageSlug)
  {
    $products = null;
    $pageOut = null;
    $pages = Page::all();
    foreach($pages as $page){
      if($page->slug == $pageSlug){
        $pageOut = $page;
        break;
      }
    }
    $this->validatePage($pageOut);

    return view('cms', [ 'menus' => $this->menus,  'page' => $pageOut, 'products' => $products ]);
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
