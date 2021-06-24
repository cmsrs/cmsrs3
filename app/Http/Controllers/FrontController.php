<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

use App\Page;
use App\Basket;
use App\Base;
use App\Checkout;
use App\User;
use App\Product;
use App\Menu;
use App\Config;
use App\Order;
use App\Deliver;
use App\Payment;
use Carbon\Carbon;
use App;
use Illuminate\Support\Facades\Auth;
use App\Integration\Payu;

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

    public function search(Request $request, $lang = null )
    {

        if (empty($lang)) {
            $lang = $this->langs[0];
        }
        if (!in_array($lang, $this->langs)) {
            abort(404);
        }
        App::setLocale($lang);

        $page = Page::getFirstPageByType('search');
        if(!$page){
            Log::error('if you want this page you have to add page in type search');
            abort(404);
        }
        $urlSearch = $page->getUrl($lang);
        //dd($urlSearch);

        $key = $request->input('key');
        $products = (new Product)->wrapSearchProducts( $lang, $key);        

        $data = $page->getDataToView( [
            'key' => $key,
            'url_search' =>  $urlSearch,
            'products' => $products,
            'lang' => $lang,
            'langs' => $this->langs,
            'menus' => $this->menus
        ]);        

        return view('search', $data);        
    }

    public function shoppingsuccess(Request $request, $lang = null )
    {
        if (empty($lang)) {
            $lang = $this->langs[0];
        }
        if (!in_array($lang, $this->langs)) {
            abort(404);
        }
        App::setLocale($lang);

        $page = Page::getFirstPageByType('shoppingsuccess');
        if(!$page){
            Log::error('if you want this page you have to add page in type shoppingsuccess');
            abort(404);
        }

        if( $request->session()->has('checkout_id')){
            $checkoutId = $request->session()->get('checkout_id');
            $objCheckout = Checkout::find($checkoutId);
            $request->session()->forget('checkout_id');
            //$request->session()->flush();    
        }
        if( empty($objCheckout) ){
            abort(404);
        }

        $data = $page->getDataToView( [
            'checkout' => $objCheckout,
            'lang' => $lang,
            'langs' => $this->langs,
            'menus' => $this->menus
        ]);

        return view('shoppingsuccess', $data);
    }


    public function checkout(Request $request, $lang = null )
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

        $payments = Payment::getPayment();
        $delivers = Deliver::getDeliver();        

        //$token =  '123todo'; // User::getTokenForClient(); //todo - when user not auth

        $data = $page->getDataToView( [
            //'token' => $token,
            'payments' => $payments,
            'delivers' => $delivers,
            'lang' => $lang,
            'langs' => $this->langs,
            'menus' => $this->menus
        ] );

        return view('checkout', $data);
    }

    public function postCheckout(Request $request)
    {
        $lang = $request->input('lang');
        if (!in_array($lang, $this->langs)) {
            abort(404);
        }
        App::setLocale($lang);

        $request->validate([
            'products' => 'required',
            'email' => 'required|email',
            'first_name' => 'required',
            'last_name' => 'required',
            'address' => 'required',
            'country' => 'required',
            'city' => 'required',
            'telephone' => 'required',
            'postcode' => 'required',
            'deliver' => 'required',
            'payment' => 'required',
        ]);     

        $data = $request->only(
            'products',
            'email',
            'first_name',
            'last_name',
            'address',
            'country',
            'city',
            'telephone',
            'postcode',
            'deliver',
            'payment'
        );
        if(empty($data['products']) || !is_array($data['products']) ){
            //abort(500);            
            throw new \Exception('No products in post - checkout');
        }
        $payment = Payment::getPayment( $data['payment'] );        
        if( empty($payment) ){
            throw new \Exception('Payment problem - checkout');
        }

        $deliver = Deliver::getDeliver( $data['deliver'] );
        if( empty($deliver) ){
            throw new \Exception('Deliver problem - checkout');
        }


        $baskets = $data['products'];
        $reindexBaskets = Base::reIndexArr($baskets);
        $baskets = [];
        $productsDataAndTotalAmount = Product::getDataToPayment( $reindexBaskets, $baskets );
        if( empty($baskets) ){
            //abort(500);            
            throw new \Exception('No data in basket (not found data in db)');
        }

        unset($data['products']);
        $checkout = $data;
        $checkout['user_id'] = Auth::check() ? Auth::user()->id : null;
        $checkout['session_id'] = session()->getId();
        $checkout['price_total'] =  $productsDataAndTotalAmount['totalAmount'];
        $checkout['price_deliver'] = $deliver['price'];
        $checkout['price_total_add_deliver'] = $checkout['price_total'] + $checkout['price_deliver'];


        $objCheckout = Checkout::create($checkout);
        if (empty($objCheckout->id)) {
            throw new \Exception("I cant get objCheckout id - problem with save chcekout");
        }  
        
        foreach($baskets as $basket){
            $basket['checkout_id'] = $objCheckout->id;
            Basket::create($basket);
        }

        
        if( Payment::KEY_PAYU  == $data['payment'] ){
            //redirect to payU
            $payu = new Payu;

            //dd($checkout);
            $data = $payu->dataToSend( $productsDataAndTotalAmount, $checkout );  

            Log::debug(' data sended to payu: '.var_export($data, true ) );        

            $redirectUri = $payu->getOrder($data);
            if( empty($redirectUri) ){
                //throw new \Exception("Somthing wrong with payu - i cant obtain the redirectUri");
                Log::debug("Somthing wrong with payu - i cant obtain the redirectUri");            
                return response()->json(['success'=> false, 'error'=> 'Somthing wrong with payu - try later.'], 200); 
            }
            Log::debug('payu redirect url: '.$redirectUri );
            return redirect($redirectUri);

        }else{
            $pShoppingSuccess = Page::getFirstPageByType('shoppingsuccess'); 
            if( empty($pShoppingSuccess) ){
                throw new \Exception("you should add page type = shoppingsuccess");
            }

            $urlShoppingSuccess = $pShoppingSuccess->getUrl($lang);       
            //$request->session()->flash('status', 'Task was successful!');            
            //$request->session()->keep(['checkout_id' => $objCheckout->id]);            
            $request->session()->flash('checkout_id', $objCheckout->id);            
            return redirect($urlShoppingSuccess);
        }

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
        //it make sance only for payU - it my opinion
        $isNewOrders = false; //Order::copyDataFromBasketToOrderForUser();  

        $page = Page::getMainPage();
        $this->validatePage($page);

        // $pSearch = App\Page::getFirstPageByType('search');
        // $urlSearch = null;
        // if($pSearch){
        //     $urlSearch = $pSearch->getUrl($lang);
        // }

        $data = $page->getDataToView( [
            //'url_search' =>  $urlSearch,
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
