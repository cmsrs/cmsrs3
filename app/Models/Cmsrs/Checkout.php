<?php

namespace App\Models\Cmsrs;
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

    public $columnsAllowedToSort = [
        'id',
        'price_total_add_deliver',
        'created_at',
        'updated_at'
    ];        

    public function baskets()
    {
        return $this->hasMany('App\Models\Cmsrs\Basket');
    } 
    
}