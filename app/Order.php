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
                $objOrder = new Order;
                $objOrder->qty = $objBasket->qty;
                $objOrder->user_id = $objBasket->user_id;
                $objOrder->product_id = $objBasket->product_id;    
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