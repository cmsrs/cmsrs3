<?php

namespace App\Models\Cmsrs;
use Illuminate\Database\Eloquent\Model;

class Content extends Model
{
    protected $fillable = [
        'lang',
        'column',
        'value',
        'page_id',
        'product_id'
    ];

    protected $casts = [
        'page_id' => 'integer',
        'product_id' => 'integer'
    ];

}
