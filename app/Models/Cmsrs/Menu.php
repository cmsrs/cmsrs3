<?php

namespace App\Models\Cmsrs;

use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Support\Carbon;

/**
 * @property int $id
 * @property int|null $position
 * @property Carbon|null $created_at
 * @property Carbon|null $updated_at
 * @property-read Collection<int, Page> $pages
 * @property-read int|null $pages_count
 * @property-read Collection<int, Translate> $translates
 * @property-read int|null $translates_count
 *
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Menu newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Menu newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Menu query()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Menu whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Menu whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Menu wherePosition($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Menu whereUpdatedAt($value)
 *
 * @mixin \Eloquent
 */
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
