<?php

namespace App\Models\Cmsrs;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

/**
 * @property int $id
 * @property string|null $name
 * @property int|null $position
 * @property int|null $page_id
 * @property int|null $product_id
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property-read \Illuminate\Database\Eloquent\Collection<int, \App\Models\Cmsrs\Translate> $translates
 * @property-read int|null $translates_count
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Image newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Image newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Image query()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Image whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Image whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Image whereName($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Image wherePageId($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Image wherePosition($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Image whereProductId($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Image whereUpdatedAt($value)
 * @mixin \Eloquent
 */
class Image extends Model
{
    const IMAGE_DIR = 'images';

    const IMAGE_ORG = 'org';

    const IMAGE_THUMB_TYPE_SMALL = 'small';

    const IMAGE_THUMB_TYPE_MEDIUM = 'medium';

    public static $thumbs = [
        self::IMAGE_THUMB_TYPE_SMALL => [
            'x' => 100,
            'y' => 100,
        ],
        self::IMAGE_THUMB_TYPE_MEDIUM => [
            'x' => 300,
            'y' => 300,
        ],
    ];

    protected $fillable = [
        'name',
        'position',
        'page_id',
        'product_id',
    ];

    public static $type = [
        'page' => 'page_id',
        'product' => 'product_id',
    ];

    protected $casts = [
        'page_id' => 'integer',
        'product_id' => 'integer',
        'position' => 'integer',
    ];

    public function translates(): HasMany
    {
        return $this->hasMany('App\Models\Cmsrs\Translate', 'image_id', 'id'); // it should be work without params - phpstan
    }
}
