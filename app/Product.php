<?php

namespace App;

use Illuminate\Database\Eloquent\Model;


class Product extends Model
{
    protected $fillable = [
        'name',
        'sku',
        'price',
        'description',
        'photo',
        'page_id'
    ];

}
