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

    public function baskets()
    {
        return $this->hasMany('App\Basket');
    } 
    
    static public function findActiveOrder()
    {
        $user = Auth::user();            
        $sessionId = session()->getId();        
        if(empty($user)){
            //where('session_id', '=', $sessionId)->
            //return Checkout::where( 'is_pay', '=', 0)->first();
            return false;
        }
        //where('session_id', '=', $sessionId)->
        return Checkout::where('user_id', '=', $user->id)->where( 'is_pay', '=', 0)->first();
    }
    
}