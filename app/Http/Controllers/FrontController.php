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

  public function index()
  {
    $page = Page::getMainPage();
    if(empty($page)){
      abort(404);
    }

    if(!$page->checkAuth()){
      abort(401);        
    }

    return view('index', [ 'menus' => $this->menus, 'page' => $page ] );
  }

  public function cms($menuSlug, $pageSlug)
  {
    $pageOut = null;
    $products = null;
    $find = false;
    foreach ($this->menus as $menu) {
      if( $menuSlug == $menu->slug ){
        foreach ($menu->pagesPublished  as $page){
          if( $pageSlug == $page->slug ){
            $find = true;
            $pageOut = $page;
            if(!$page->checkAuth()){
              abort(401);        
            }
            if( 'shop' === $page->type){
              $products = Product::getProductsWithImagesByPage($page->id);
            }
          }
        }
      }
    }
    if(!$find){
      abort(404);
    }

    return view('cms', [ 'menus' => $this->menus,  'page' => $pageOut, 'products' => $products ]);
  }


}
