<?php

namespace App\Models\Cmsrs;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasOne;

class Product extends Model
{
    /**
     * phpstan - need it, see: test_search_products_by_many_columns_pagination_docs
     * it is additional data (not related with db)
     */
    public ?string $product_name = null;

    /**
     * it is additional data (not related with db)
     */
    public ?string $page_short_title = null;

    /**
     * This is not from the database; it is calculated on the fly based on the 'price' value.
     */
    public ?string $price_description = null;

    /**
     * @var array<string>
     */
    public array $productFields = [];

    /**
     * @var array<string>
     */
    public array $columnsAllowedToSort = [
        'id',
        'published',
        'product_name', // from translate
        'page_short_title', // from translate - derive from page_id
        'sku',
        'price',
        'created_at',
        'updated_at',
    ];

    /**
     * @var array<string>
     */
    protected $fillable = [
        'sku',
        'price',
        'published',
        'page_id',
    ];

    /**
     * @var array<string, string>
     */
    protected $casts = [
        'published' => 'integer',
        'price' => 'integer',
        'page_id' => 'integer',
    ];

    /**
     * @return HasOne<Page>
     */
    public function page(): HasOne
    {
        return $this->hasOne('App\Models\Cmsrs\Page', 'id', 'page_id');
    }

    /**
     * @return HasMany<Image>
     */
    public function images(): HasMany
    {
        return $this->hasMany('App\Models\Cmsrs\Image');
    }

    /**
     * @return HasMany<Translate>
     */
    public function translates(): HasMany
    {
        return $this->hasMany('App\Models\Cmsrs\Translate'); // it should be work without params , 'product_id', 'id' - phpstan
    }

    /**
     * @return HasMany<Translate>
     */
    public function translatesPage(): HasMany
    {
        return $this->hasMany('App\Models\Cmsrs\Translate', 'page_id', 'page_id');
    }

    /**
     * @return HasMany<Content>
     */
    public function contents(): HasMany
    {
        return $this->hasMany('App\Models\Cmsrs\Content');
    }
}
