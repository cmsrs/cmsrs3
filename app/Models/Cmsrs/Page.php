<?php

namespace App\Models\Cmsrs;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Page extends Model
{
    const PREFIX_CMS_URL = 'cms';

    const PREFIX_CMS_ONE_PAGE_IN_MENU_URL = 'o';

    //const PREFIX_SHOP_URL = 'shop';
    const PREFIX_IN_URL = 'in'; //(in) independent

    //private $translate;
    //private $content;
    public $pageFields;
    //private $langs;

    protected $fillable = [
        'published',
        'commented',
        'after_login',
        'position',
        'type',
        'menu_id',
        'page_id',
    ];

    public $requiredColumn = [
        'title',
        'short_title',
    ];

    protected $casts = [
        'published' => 'integer',
        'commented' => 'integer',
        'after_login' => 'integer',
        'position' => 'integer',
        'menu_id' => 'integer',
        'page_id' => 'integer',
    ];

    public function menu()
    {
        return $this->hasOne('App\Models\Cmsrs\Menu', 'id', 'menu_id');
    }

    public function translates() : HasMany
    {
        return $this->hasMany('App\Models\Cmsrs\Translate');
    }

    public function contents() : HasMany
    {
        return $this->hasMany('App\Models\Cmsrs\Content');
    }

    public function images() : HasMany
    {
        return $this->hasMany('App\Models\Cmsrs\Image')->orderBy('position');
    }
}
