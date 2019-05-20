<?php

namespace App;

use Illuminate\Database\Eloquent\Model;


class Page extends Model
{
    protected $fillable = [
        'title', 'short_title', 'published', 'position', 'type', 'menu_id'
    ];
}
