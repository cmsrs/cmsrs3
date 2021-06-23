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

    static public function copyDataFromBasketToOrderForUser($checkout)
    {
        // $checkout = Checkout::findActiveOrder();
        // if(empty($checkout)){
        //     return false;
        // }

        //$checkout->is_pay = 1;
        //$checkout->save();        

        $user = Auth::user();            
        if(empty($user)){
            return true;
        }

        /**
        * copy basket to orders form login users
        */
        $objBaskets =  $checkout->baskets;
        $objOrders = Order::where('user_id', '=', $user->id)->get();  //->toArray();

        if($objBaskets->count()){
            foreach($objBaskets as $objBasket){
                $arrBasket = $objBasket->toArray();
                $arrBasket['user_id'] = $user->id;

                unset($arrBasket['created_at']);
                unset($arrBasket['updated_at']);
                $productId = $arrBasket['product_id'];

                //find order by product_id
                $objOrderByProductId = null;
                foreach($objOrders as $objOrder){
                    if($objOrder->product_id ==  $productId){
                        $objOrderByProductId = $objOrder;
                        break;
                    }
                }

                if( empty($objOrderByProductId) ){
                    Order::create($arrBasket);
                }else{
                    $objOrderByProductId->qty = $objOrderByProductId->qty + $arrBasket['qty'];
                    $objOrderByProductId->save();
                }
            }
        }

        return true;

/*
        $orders = [];
        if($objBaskets->count()){
            foreach($objBaskets as $objBasket){
                $arrBasket = $objBasket->toArray();
                $arrBasket['user_id'] = $user->id;

                unset($arrBasket['created_at']);
                unset($arrBasket['updated_at']);
                $productId = $arrBasket['product_id'];

                if( empty($orders[$productId]) ){
                    $orders[$productId] = $arrBasket;
                }else{
                    $orders[$productId]['qty'] += $arrBasket['qty'];
                }
            }
            Order::where('user_id', '=', $user->id)->delete();
            foreach($orders as $order){
                Order::create($order);
            }
        }    
*/
        
    }   

    static public function inOrdersByUserId($userId)
    {
            return Order::where('user_id', '=', $userId)->get(); //->toArray();
    }
    
    
}