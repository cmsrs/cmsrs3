<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
//use JWTAuth;

use App\Page;
use App\Menu;
//use Validator;


class FronController extends Controller
{
  private $menus;

  public function __construct()
  {
    $this->menus = Menu::all(); //TODO cached
  }

  public function index()
  {
    return view('index', [ 'menus' => $this->menus  ] );
  }

  public function cms($menuSlug, $pageSlug)
  {
    $pageOut = null;
    foreach ($this->menus as $menu) {
      if( $menuSlug == $menu->slug ){
        foreach ($menu->pagesPublished  as $page) {
          if( $pageSlug == $page->slug ){
            $pageOut = $page;
          }
        }
      }
    }

    return view('cms', [ 'menus' => $this->menus,  'page' => $pageOut  ] );
  }


}
