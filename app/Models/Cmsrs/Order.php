<?php

namespace App\Models\Cmsrs;
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
   
}