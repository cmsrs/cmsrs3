<?php

namespace App\Models\Cmsrs;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Menu extends Model
{
    protected $fillable = [
        'position',
    ];

    protected $casts = [
        'position' => 'integer',
    ];

    public $requiredColumn = [
        'name',
    ];

    public function pages()
    {
        return $this->hasMany('App\Models\Cmsrs\Page');
    }

    public function translates(): HasMany
    {
        return $this->hasMany('App\Models\Cmsrs\Translate', 'menu_id', 'id'); // it should be work without params - phpstan
    }
}
