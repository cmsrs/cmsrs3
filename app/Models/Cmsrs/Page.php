<?php

namespace App\Models\Cmsrs;

use App\Models\Cmsrs\Interfaces\ContentTranslatableInterface;
use App\Models\Cmsrs\Traits\HasTranslationsTrait;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasOne;
use Illuminate\Support\Carbon;

/**
 * @property int $id
 * @property int $published
 * @property int $commented
 * @property int $after_login
 * @property int|null $position
 * @property string $type
 * @property int|null $page_id
 * @property int|null $menu_id
 * @property Carbon|null $created_at
 * @property Carbon|null $updated_at
 * @property-read Collection<int, Content> $contents
 * @property-read int|null $contents_count
 * @property-read Collection<int, Image> $images
 * @property-read int|null $images_count
 * @property-read Menu|null $menu
 * @property-read Collection<int, Translate> $translates
 * @property-read int|null $translates_count
 *
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Page newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Page newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Page query()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Page whereAfterLogin($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Page whereCommented($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Page whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Page whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Page whereMenuId($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Page wherePageId($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Page wherePosition($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Page wherePublished($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Page whereType($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Page whereUpdatedAt($value)
 *
 * @mixin \Eloquent
 */
class Page extends Model implements ContentTranslatableInterface
{
    use HasTranslationsTrait;

    const PREFIX_CMS_URL = 'cms';

    const PREFIX_CMS_ONE_PAGE_IN_MENU_URL = 'o';

    // const PREFIX_SHOP_URL = 'shop';
    const PREFIX_IN_URL = 'in'; // (in) independent

    /*
     * @var array<string>
     */
    public array $pageFields = [];
    // private $langs;

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

    public function menu(): HasOne
    {
        return $this->hasOne('App\Models\Cmsrs\Menu', 'id', 'menu_id');
    }

    public function translates(): HasMany
    {
        return $this->hasMany('App\Models\Cmsrs\Translate');
    }

    public function contents(): HasMany
    {
        return $this->hasMany('App\Models\Cmsrs\Content');
    }

    public function images(): HasMany
    {
        return $this->hasMany('App\Models\Cmsrs\Image')->orderBy('position');
    }

    public function getId(): int
    {
        return $this->id;
    }    

}
