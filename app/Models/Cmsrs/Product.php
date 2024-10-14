<?php

namespace App\Models\Cmsrs;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasOne;

class Product extends Model
{

    /**
     * it is additional data (not related with db)
     * 
     * @var string|null
     */
    //public $product_name;

    /**
     * it is additional data (not related with db)
     * 
     * @var string|null
     */
    //public $page_short_title;

    public $productFields;

    protected $fillable = [
        'sku',
        'price',
        'published',
        'page_id',
    ];

    protected $casts = [
        'published' => 'integer',
        'price' => 'integer',
        'page_id' => 'integer',
    ];

    public $columnsAllowedToSort = [
        'id',
        'published',
        'product_name', //from translate
        'page_short_title', //from translate - derive from page_id
        'sku',
        'price',
        'created_at',
        'updated_at',
    ];

    public function page(): HasOne
    {
        return $this->hasOne('App\Models\Cmsrs\Page', 'id', 'page_id');
    }

    public function images(): HasMany
    {
        return $this->hasMany('App\Models\Cmsrs\Image');
    }

    public function translates(): HasMany
    {
        return $this->hasMany('App\Models\Cmsrs\Translate'); //it should be work without params , 'product_id', 'id' - phpstan
    }

    public function translatesPage(): HasMany
    {
        return $this->hasMany('App\Models\Cmsrs\Translate', 'page_id', 'page_id');
    }

    public function contents(): HasMany
    {
        return $this->hasMany('App\Models\Cmsrs\Content');
    }
}
