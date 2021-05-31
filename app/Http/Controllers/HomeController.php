<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;
use App\Menu;
use App\Page;
use App\Product;
use App\Basket;
use App\Order;
use App\Base;
use App\Config;
use App\Integration\Payu;
use Illuminate\Support\Facades\Log;
//use App;
use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\Auth;
//use Illuminate\Support\Facades\Log;

class HomeController extends Controller
{
    private $menus;
    private $langs;

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        //$lang = Config::getLangFromSession();  //not workking proper
        //App::setLocale($lang);

        $this->middleware('auth');
        $this->menus =  Menu::getMenu(); //$menus;
        $this->langs = (new Config)->arrGetLangs();
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function index($lang = null)
    {
        $page = Page::getFirstPageByType('home');
        if(!$page){
            Log::error('if you want this page you have to add page in type home');
            abort(404);
        }

        if(empty($lang)){
            $lang = $this->langs[0];
        }
        App::setLocale($lang);

        $token = User::getTokenForClient();

        /*
        $data = [
            'token' => $token,            
            'menus' => $this->menus,
            'page' => $page,
            'h1' => $page->translatesByColumnAndLang( 'title', $lang ),
            'page_title' => $page->translatesByColumnAndLang( 'title', $lang ) ?? config('app.name', 'cmsRS'),
            'seo_description' =>  $page->translatesByColumnAndLang( 'description', $lang ) ?? config('app.name', 'cmsRS'),
            'lang' => $lang,
            'langs' => $this->langs,
            'view' => $page->getViewNameByType()
        ];
        */

        $data = $page->getDataToView( [
            'token' => $token,
            'lang' => $lang,
            'langs' => $this->langs,
            'menus' => $this->menus
        ]);
        

        return view('home', $data);
    }

    /*
    public function basket()
    {
        $token = User::getTokenForClient();

        return view('basket', [
            'token' => $token,
            //'tab' => 'basket'
        ]);
    }

    public function orders()
    {
        $user = Auth::user();    
        $arrOrders = Order::inOrdersByUserId($user->id)->toArray();        
        $orders = [];
        if( !empty($arrOrders) ){
            $arrOrdersReindex = Base::reIndexArr($arrOrders, 'product_id');
            $baskets = false;
            Product::getDataToPayment( $arrOrdersReindex, $baskets, $orders);    
        }

        //$orders = [];

        return view('orders', [
            'orders' => $orders,
            //'tab' => 'order'
        ]);
    }
    */

    public function tobank(Request $request)
    {
        User::checkApiClientByToken($request->token);

        $data = $request->only('cart');

        if( empty($data['cart']) || !is_array($data['cart']) ){
            throw new \Exception("Wrong data from post");            
        }

        $demoStatus = env('DEMO_STATUS', false);
        if( $demoStatus ){
            return response()->json(['success'=> false, 'error'=> 'No access (set DEMO_STATUS on false)'], 200); 
        }


        $arrCart = Base::reIndexArr($data['cart']);        

        $baskets = [];
        $productsDataAndTotalAmount = Product::getDataToPayment( $arrCart, $baskets );

        $user = Auth::user();    
        Basket::deleteBasketAndAddNewData($user->id, $baskets);        

        $payu = new Payu;
        $data = $payu->dataToSend( $productsDataAndTotalAmount );  

        Log::debug(' data sended to payu: '.var_export($data, true ) );        

        $redirectUri = $payu->getOrder($data);
        if( empty($redirectUri) ){
            //throw new \Exception("Somthing wrong with payu - i cant obtain the redirectUri");
            Log::debug("Somthing wrong with payu - i cant obtain the redirectUri");            
            return response()->json(['success'=> false, 'error'=> 'Somthing wrong with payu - try later.'], 200); 
        }
        Log::debug('payu redirect url: '.$redirectUri );
        return response()->json(['success' => true, 'data'=> $redirectUri], 200);
        //return redirect($redirectUri);
    }

}