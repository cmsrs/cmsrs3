<?php

namespace App;
use Illuminate\Support\Facades\Auth;
use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    protected $fillable = [
        'qty',
        'user_id',
        'product_id'
    ];

    protected $casts = [
        'user_id' => 'integer',
        'product_id' => 'integer'
    ];

    static public function moveDataFromBasketToOrderForUser()
    {
        $user = Auth::user();            

        if(empty($user)){
            return false;
        }

        $objBaskets = Basket::inBasketByUserId($user->id);

        if($objBaskets->count()){
            foreach($objBaskets as $objBasket){
                $objOrder = Order::where('user_id', '=', $objBasket->user_id)->where('product_id', '=', $objBasket->product_id)->first();

                if( empty($objOrder) ){
                    $objOrder = new Order;
                    $objOrder->qty = $objBasket->qty;
                    $objOrder->user_id = $objBasket->user_id;
                    $objOrder->product_id = $objBasket->product_id;        
                }else{
                    $objOrder->qty = $objOrder->qty + $objBasket->qty;
                }

                $objOrder->save();                
                $objBasket->delete();
            }
            return true;
        }
    
        return false;
    }

    static public function inOrdersByUserId($userId)
    {
        return Order::where('user_id', '=', $userId)->get(); //->toArray();
    }
    
    
}