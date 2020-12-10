<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

use App\Page;
use App\Product;
use App\Menu;
use App\Config;
use Carbon\Carbon;
use App;

class FrontController extends Controller
{
    private $menus;
    private $langs;

    public function __construct()
    {
        $isCache = env('CACHE_ENABLE', false);
        if ($isCache) {
            $menus = cache()->remember('menus', Carbon::now()->addYear(1), function () {
                return Menu::all()->sortBy('position');
            });
        } else {
            $menus = Menu::all()->sortBy('position');
        }
    

        $this->menus = $menus;
        $this->langs = (new Config)->arrGetLangs();
    }

    private function validatePage($page)
    {
        if (empty($page)) {
            abort(404);
        }

        if (!$page->checkAuth()) {
            abort(401);
        }
    }


    public function index($lang = null)
    {
        if ((count($this->langs) > 1) && $lang == $this->langs[0]) {
            abort(404);
        }
        if (empty($lang)) {
            $lang = $this->langs[0];
        }
        if (!in_array($lang, $this->langs)) {
            abort(404);
        }
        App::setLocale($lang);

        $page = Page::getMainPage();
        $this->validatePage($page);


        return view('index', [
            'menus' => $this->menus,
            'page' => $page,
            'lang' => $lang,
            'langs' => $this->langs
    ]);
    }

    public function getPageLangs($lang, $menuSlug, $pageSlug)
    {
        $data = $this->getPage($menuSlug, $pageSlug, $lang);
        return view($data['view'], $data);
    }

    public function getPage($menuSlug, $pageSlug, $lang = null)
    {
        if (empty($lang)) {
            $manyLangs = false;
            $lang = $this->langs[0];
        } else {
            $manyLangs = true;
        }
        App::setLocale($lang);


        $products = null;
        $menus = $this->menus;

        $isCache = env('CACHE_ENABLE', false);
        if ($isCache) {
            $pageOut = cache()->remember('page_'.$menuSlug.'_'.$pageSlug.'_'.$lang, Carbon::now()->addYear(1), function () use ($menus, $menuSlug, $pageSlug, $lang) {
                return Page::getPageBySlug($menus, $menuSlug, $pageSlug, $lang);
            });
        } else {
            $pageOut = Page::getPageBySlug($menus, $menuSlug, $pageSlug, $lang);
        }

        
        $this->validatePage($pageOut);

        if ('shop' === $pageOut->type) {
            $products = Product::getProductsWithImagesByPage($pageOut->id);
        }
    
        $data = [
            'menus' => $this->menus,
            'page' => $pageOut,
            'products' => $products,
            'lang' => $lang,
            'langs' => $this->langs,
            're_public' => env('GOOGLE_RECAPTCHA_PUBLIC', ''),
            'view' => $pageOut->getViewNameByType()
        ];

        if ($manyLangs) {
            return $data;
        }

        return view($data['view'], $data);
    }

    public function getSeparatePageLangs($lang, $pageSlug)
    {
        $data = $this->getSeparatePage($pageSlug, $lang);
        return view($data['view'], $data);
    }

    public function getSeparatePage($pageSlug, $lang = null)
    {
        if (empty($lang)) {
            $manyLangs = false;
            $lang = $this->langs[0];
        } else {
            $manyLangs = true;
        }
        App::setLocale($lang);
    
        $products = null;
        $pageOut = null;
        $pages = Page::all();
        foreach ($pages as $page) {
            if ($page->getSlugByLang($lang) == $pageSlug) {
                $pageOut = $page;
                break;
            }
        }
        $this->validatePage($pageOut);

        if ('shop' === $pageOut->type) {
            $products = Product::getProductsWithImagesByPage($pageOut->id);
        }

        $data = [
            'menus' => $this->menus,
            'page' => $pageOut,
            'products' => $products,
            'lang' => $lang,
            'langs' => $this->langs,
            're_public' => env('GOOGLE_RECAPTCHA_PUBLIC', ''),
            'view' => $pageOut->getViewNameByType()
        ];

        //dd( $data['view'] );

        if ($manyLangs) {
            return $data;
        }
    
        return view($data['view'], $data);
    }
}
