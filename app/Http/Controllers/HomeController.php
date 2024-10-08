<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Cmsrs\User;
use App\Services\Cmsrs\MenuService;
use App\Services\Cmsrs\PageService;
use App\Services\Cmsrs\Product;
use App\Services\Cmsrs\Basket;
use App\Services\Cmsrs\Checkout;
use App\Services\Cmsrs\Order;
use App\Services\Cmsrs\Base;
use App\Services\Cmsrs\Config;
use App\Integration\Payu;

use App\Services\Cmsrs\BaseService;
use App\Services\Cmsrs\CheckoutService;
use App\Services\Cmsrs\ConfigService;
use App\Services\Cmsrs\OrderService;
use App\Services\Cmsrs\ProductService;
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
        $this->menus =  MenuService::getMenu(); //$menus;
        $this->langs = (new ConfigService)->arrGetLangs();
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function index($lang = null)
    {
        $page = PageService::getFirstPageByType('home');
        if(!$page){
            Log::error('if you want this page you have to add page in type home');
            abort(404);
        }

        if(empty($lang)){
            $lang = $this->langs[0];
        }
        App::setLocale($lang);

        $user = Auth::user();    
        $arrOrders = OrderService::inOrdersByUserId($user->id)->toArray();        
        $orders = [];
        if( !empty($arrOrders) ){
            $arrOrdersReindex = BaseService::reIndexArr($arrOrders, 'product_id');
            $baskets = false;
            ProductService::getDataToPayment( $arrOrdersReindex, $baskets, $orders);    
        }

        $objCheckouts = CheckoutService::findActiveOrders()->get();
        $checkouts = CheckoutService::printCheckouts( $objCheckouts, $lang );

        $data =  (new PageService)->getDataToView( $page, [
            'checkouts' => $checkouts,
            'orders' => $orders,            
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

    /*
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
    */

}