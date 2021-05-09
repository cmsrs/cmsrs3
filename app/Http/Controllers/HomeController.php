<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;
use App\Product;
use App\Base;
use App\Integration\Payu;
use Illuminate\Support\Facades\Log;

class HomeController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth');
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function index()
    {
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
            throw new \Exception("Somthing wrong with payu - i cant obtain the redirectUri");
        }
        //dd($redirectUri);
        return redirect($redirectUri);
    }

}
