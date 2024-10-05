<?php

namespace App\Models\Cmsrs;

use Illuminate\Database\Eloquent\Model;

class Basket extends Model
{
    protected $fillable = [
        'qty',
        'price',        
        'checkout_id',
        'product_id'
    ];

    protected $casts = [
        'price' => 'integer',
        'checkout_id' => 'integer',
        'product_id' => 'integer'
    ];
    
}
