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
        'session_id'
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
            return Checkout::where('session_id', '=', $sessionId)->where( 'is_pay', '=', 0)->first();
        }
        return Checkout::where('user_id', '=', $user->id)->where('session_id', '=', $sessionId)->where( 'is_pay', '=', 0)->first();
    }
    
}