<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;

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
        return view('basket');        
    }

    public function orders()
    {
        return view('orders');
    }

    public function tobank(Request $request)
    {
        User::checkApiClientByToken($request->token);

        $data = $request->only('cart');

        dump($data);
        
        dd('_____tobank_______'.$request->token);
        //return view('orders');
    }


}
