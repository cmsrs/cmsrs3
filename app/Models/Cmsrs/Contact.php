<?php

namespace App\Models\Cmsrs;

use Illuminate\Database\Eloquent\Model;

class Contact extends Model
{
    protected $fillable = [
        'email',
        'message',
    ];

    public $columnsAllowedToSort = [
        'id',
        'email',
        'message',
        'created_at',
        'updated_at',
    ];
}
