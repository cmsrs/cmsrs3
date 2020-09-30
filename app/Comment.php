<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Comment extends Model
{
    protected $fillable = [
        'content',
        'page_id'
    ];

    protected $casts = [
        'page_id' => 'integer',
    ];
    

}
