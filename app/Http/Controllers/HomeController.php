<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;
use App\Product;
use App\Base;
use App\Config;
use App\Integration\Payu;
use Illuminate\Support\Facades\Log;
//use App;
use Illuminate\Support\Facades\App;

class HomeController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $lang = Config::getLangFromSession();  //not workking proper
        App::setLocale($lang);

        $this->middleware('auth');
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function index()
    {
        //App::setLocale('pl');   

        return view('home');
    }

    public function basket()
    {
        $token = User::getTokenForClient();

        return view('basket', [
            'token' => $token
        ]);
    }

    public function orders()
    {
        return view('orders');
    }

    public function tobank(Request $request)
    {
        User::checkApiClientByToken($request->token);

        $data = $request->only('cart');

        if( empty($data['cart']) || !is_array($data['cart']) ){
            throw new \Exception("Wrong data from post");            
        }

        $arrCart = Base::reIndexArr($data['cart']);        

        $productsDataAndTotalAmount = Product::getDataToPayment( $arrCart );

        $payu = new Payu;
        $data = $payu->dataToSend( $productsDataAndTotalAmount );  

        Log::debug(' data sended to payu: '.var_export($data, true ) );        
        //dd($data);

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
