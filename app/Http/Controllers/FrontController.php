<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

use App\Page;
use App\User;
use App\Product;
use App\Menu;
use App\Config;
use App\Order;
use Carbon\Carbon;
use App;

class FrontController extends Controller
{
    private $menus;
    private $langs;

    public function __construct()
    {    
        $this->menus =  Menu::getMenu(); //$menus;
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


    public function checkout( $lang = null )
    {
        if (empty($lang)) {
            $lang = $this->langs[0];
        }
        if (!in_array($lang, $this->langs)) {
            abort(404);
        }
        App::setLocale($lang);

        $page = Page::getFirstPageByType('checkout');
        if(!$page){
            Log::error('if you want this page you have to add page in type checkout');            
            abort(404);
        }

        $token =  '123todo'; // User::getTokenForClient(); //todo - when user not auth

        $data = $page->getDataToView( [
            'token' => $token,
            'lang' => $lang,
            'langs' => $this->langs,
            'menus' => $this->menus
        ] );

        return view('checkout', $data);
    }

    public function changeLang($lang, $pageId, $productSlug = null)
    {
        $page = Page::find($pageId);
        if( empty($page) ){
            abort(404);
        }
        $url = $page->getUrl($lang, $productSlug );
        Config::saveLangToSession($lang);
        return redirect($url);
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

        //todo - http_reffer - i dont know how to obtain this value - it should be from payu
        $isNewOrders = Order::moveDataFromBasketToOrderForUser();

        $page = Page::getMainPage();
        $this->validatePage($page);


        $data = $page->getDataToView( [
            'view' => 'index',
            'is_new_orders' => $isNewOrders,
            'lang' => $lang,
            'langs' => $this->langs,
            'menus' => $this->menus
        ] );

        return view('index', $data);
    }

    public function getPageLangs($lang, $menuSlug, $pageSlug, $productSlug = null)
    {
        $data = $this->getPage($menuSlug, $pageSlug, $productSlug, $lang);
        return view($data['view'], $data);
    }

    public function getPage($menuSlug, $pageSlug, $productSlug = null, $lang = null)
    {
        if (empty($lang)) {
            $manyLangs = false;
            $lang = $this->langs[0];
        } else {
            $manyLangs = true;
        }
        App::setLocale($lang);

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

        //$data = $this->getData($pageOut, $lang);
        $data = $pageOut->getDataToView( [
            'lang' => $lang,
            'langs' => $this->langs,
            'menus' => $this->menus
        ]);


        if($productSlug){ //product page
            $objProduct = new Product;
            $product = $objProduct->getProductBySlug($productSlug, $lang);
            if(empty($product)){
                abort(404);
            }
            if(empty($product->published)){
                abort(404);
            }

            $urls = $product->getProductUrls($product);        
            $data['url_category'] = $urls['url_category'];
            //$data['url_product'] = $urls['url_product'];
            $product = $objProduct->getProductDataByProductArr( $product );
            $data['product'] = $product;
            $data['h1'] = $product['product_name'][$lang];
            $data['product_name'] = $product['product_name'];
            $data['product_name_slug'] = $product['product_name_slug'];
            $data['page_title'] = $product['product_name'][$lang] ?? config('app.name', 'cmsRS');
            $data['seo_description'] =  $product['product_description'][$lang] ?? config('app.name', 'cmsRS');
        }

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

        $pageOut = null;
        $pages = Page::all();
        foreach ($pages as $page) {
            if ($page->getSlugByLang($lang) == $pageSlug) {
                $pageOut = $page;
                break;
            }
        }
        $this->validatePage($pageOut);

        //$data = $this->getData($pageOut, $lang);

        $data = $pageOut->getDataToView( [
            'lang' => $lang,
            'langs' => $this->langs,
            'menus' => $this->menus
        ] );


        if ($manyLangs) {
            return $data;
        }
    
        return view($data['view'], $data);
    }

}
