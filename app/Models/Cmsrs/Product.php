<?php

namespace App\Models\Cmsrs;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasOne;

/**
 * @property int $id
 * @property string|null $sku
 * @property int|null $price
 * @property int $published
 * @property int|null $page_id
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property-read \Illuminate\Database\Eloquent\Collection<int, \App\Models\Cmsrs\Content> $contents
 * @property-read int|null $contents_count
 * @property-read \Illuminate\Database\Eloquent\Collection<int, \App\Models\Cmsrs\Image> $images
 * @property-read int|null $images_count
 * @property-read \App\Models\Cmsrs\Page|null $page
 * @property-read \Illuminate\Database\Eloquent\Collection<int, \App\Models\Cmsrs\Translate> $translates
 * @property-read int|null $translates_count
 * @property-read \Illuminate\Database\Eloquent\Collection<int, \App\Models\Cmsrs\Translate> $translatesPage
 * @property-read int|null $translates_page_count
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Product newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Product newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Product query()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Product whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Product whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Product wherePageId($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Product wherePrice($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Product wherePublished($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Product whereSku($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Product whereUpdatedAt($value)
 * @mixin \Eloquent
 */
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
