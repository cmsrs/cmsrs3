<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Basket extends Model
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

    static public function inBasketByUserId($userId)
    {
        return Basket::where('user_id', '=', $userId)->get(); //->toArray();
    }

    static public function deleteBasketByObjBaskets($objBaskets)
    {
        foreach($objBaskets as $objBasket){
            $objBasket->delete();
        }
    }

    static public function saveBaskets($baskets)
    {
        foreach($baskets as $basket){
            Basket::create($basket);
        }
    }

    static public function deleteBasketAndAddNewData($userId, $baskets)
    {
        $objBaskets = Basket::inBasketByUserId($userId);
        Basket::deleteBasketByObjBaskets($objBaskets);

        Basket::saveBaskets($baskets);

    }

    
}
