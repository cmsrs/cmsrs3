<?php

namespace App;
use Illuminate\Support\Facades\Auth;
use Illuminate\Database\Eloquent\Model;

class Checkout extends Model
{
    protected $fillable = [
        'email',
        'user_id',
        'first_name',
        'last_name',
        'address',
        'country',
        'city',
        'telephone',
        'postcode',
        'is_pay',
        'session_id',
        'price_total',
        'price_deliver',
        'price_total_add_deliver'
    ];

    protected $casts = [
        'is_pay' => 'boolean'
    ];
    

    public function baskets()
    {
        return $this->hasMany('App\Basket');
    } 
    

    static public function findActiveOrder()
    {
        $orders = self::findActiveOrders();
        return $orders->first();

        // $user = Auth::user();            
        // $sessionId = session()->getId();        
        // if(empty($user)){
        //     //where('session_id', '=', $sessionId)->
        //     //return Checkout::where( 'is_pay', '=', 0)->first();
        //     return false;
        // }
        // //where('session_id', '=', $sessionId)->
        // return Checkout::where('user_id', '=', $user->id)->where( 'is_pay', '=', 0)->first();
    }

    static public function findActiveOrders()
    {
        $user = Auth::user();            
        if(empty($user)){
            return false;
        }
        //where('session_id', '=', $sessionId)->
        return Checkout::where('user_id', '=', $user->id)->where( 'is_pay', '=', 0);
    }


    static public function printCheckouts( $checkouts, $lang )
    {
        $out = [];
        $i = 0;
        foreach($checkouts as $checkout){

            $out[$i]['id'] = $checkout->id;
            $out[$i]['price_total'] = $checkout->price_total /100;
            $out[$i]['price_deliver'] = $checkout->price_deliver /100;
            $out[$i]['price_total_add_deliver'] = $checkout->price_total_add_deliver / 100;

            $out[$i]['user_id'] =  $checkout->user_id;
            $out[$i]['email'] =  $checkout->email;
            $out[$i]['first_name'] =  $checkout->first_name;
            $out[$i]['last_name'] =  $checkout->last_name;
            $out[$i]['address'] =  $checkout->address;
            $out[$i]['country'] =  $checkout->country;
            $out[$i]['city'] =  $checkout->city;
            $out[$i]['telephone'] =  $checkout->telephone;
            $out[$i]['postcode'] =  $checkout->postcode;
            $out[$i]['is_pay'] =  $checkout->is_pay;
            $out[$i]['created_at'] =  $checkout->created_at;

            $j = 0;
            foreach($checkout->baskets as $basket){
                //todo - sql in foreach :(
                $product = Product::with(['translates'])->where('id', $basket['product_id'])->first();
                $productName = Product::getDefaultProductName( $product->translates, $lang );
                $out[$i]['baskets'][$j]['qty'] = $basket->qty;
                $out[$i]['baskets'][$j]['price'] = $basket->price /100;
                $out[$i]['baskets'][$j]['product_id'] = $basket['product_id'];
                $out[$i]['baskets'][$j]['product_name'] = $productName;
                $out[$i]['baskets'][$j]['product_url'] = $product->getProductUrl($lang, $productName);
                $j++;
            }
            $i++;
        }
        return $out;
    }
}