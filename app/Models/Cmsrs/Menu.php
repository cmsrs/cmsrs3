<?php
namespace App\Models\Cmsrs;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Auth;
use Carbon\Carbon;

class Menu extends Model
{
    private $translate;

    protected $fillable = [
        'position'
    ];

    protected $casts = [
        'position' => 'integer',
    ];

    public $requiredColumn = [
        'name'
    ];

    public function pages()
    {
        return $this->hasMany('App\Models\Cmsrs\Page');
    }

    public function translates()
    {
        return $this->hasMany('App\Models\Cmsrs\Translate');
    }

    

    /*
    public function __construct(array $attributes = array())
    {
        parent::__construct($attributes);

        $this->translate = new Translate;
    }


    public function setTranslate($objTranslate)
    {
        if (!empty($objTranslate)) {
            $this->translate = $objTranslate;
        }
    }

    public static function getMenu()
    {
        $isCache = (new Config)->isCacheEnable();
        if ($isCache) {
            $menus = cache()->remember('menus', Carbon::now()->addYear(1), function () {
                return Menu::all()->sortBy('position');
            });
        } else {
            $menus = Menu::all()->sortBy('position');
        }

        return $menus;
    }


    private function getMenuObj()
    {
        $menuObj = new Menu;
        $menuObj->setTranslate($this->translate);
        return $menuObj;
    }
    

    public static function CreateMenu($data)
    {
        $data['position'] = Menu::getNextPosition();

        $menu = Menu::create($data);
        if (empty($menu->id)) {
            throw new \Exception("I cant get menu id");
        }

        return $menu;
    }

    public function wrapUpdate($data)
    {
        $this->update($data);
        $this->translate->wrapCreate([ 'menu_id' => $this->id, 'data' => $data ], false);
        return true;
    }


    
    // * use also in script to load demo (test) data
    // * php artisan command:load-demo-data
    public function wrapCreate($data)
    {
        $menu = Menu::CreateMenu($data);
        $this->translate->wrapCreate([ 'menu_id' => $menu->id, 'data' => $data ], true);

        return $menu;
    }
    
    public function getSlugByLang($lang)
    {
        $column = 'name';
        $name = $this->translatesByColumnAndLang($column, $lang);

        return Str::slug($name, "-");
    }

    public function getAllTranslate()
    {
        $menuId = $this->id;
        $isCache = (new Config)->isCacheEnable();
        if ($isCache) {
            $ret = cache()->remember('menutranslatemenuid_'.$menuId, Carbon::now()->addYear(1), function () use ($menuId) {
                return  $this->translates()->where('menu_id', $menuId)->get(['lang', 'column', 'value'])->toArray();
            });
        } else {
            $ret = $this->translates()->where('menu_id', $menuId)->get(['lang', 'column', 'value'])->toArray();
        }
        return $ret;
    }

    public function pagesPublished()
    {
        $pages = $this->pages()->where('published', '=', 1)->orderBy('position', 'asc');
        return $pages;
    }

    public function pagesPublishedAndAccess()
    {
        if (Auth::check()) {
            $pages = $this->pages()->where('published', '=', 1)->orderBy('position', 'asc');
        } else {
            $pages =  $this->pages()->where('published', '=', 1)->where('after_login', '=', 0)->orderBy('position', 'asc');
        }

        return $pages;
    }

    public function pagesPublishedTree($pagesByMenu)
    {
        $tree = array();
        foreach ($pagesByMenu as $page) {
            if (empty($page->page_id)) {
                $tree[$page->id] = $page;
            }
        }


        foreach ($pagesByMenu as $page) {
            if (!empty($page->page_id)) {
                $children = empty($tree[$page->page_id]['children']) ? [] : $tree[$page->page_id]['children'];
                array_push($children, $page);
                if (!empty($tree[$page->page_id])) {
                    $tree[$page->page_id]->setAttribute('children', $children);
                }
            }
        }

        return $tree;
    }

    public static function getAllMenus()
    {
        $menus =  Menu::with('translates')->orderBy('position', 'asc')->get()->toArray();

        $out = [];
        $i = 0;
        foreach ($menus as $menu) {
            $out[$i]['id'] = $menu['id'];
            $out[$i]['position'] = $menu['position'];
            foreach ($menu['translates'] as $translate) {
                $out[$i][$translate['column']][$translate['lang']] = $translate['value'];
            }
            $i++;
        }

        return $out;
    }

    public static function checkIsDuplicateName($data, $id = '')
    {
        $out = ['success' => true ];
        $menus = Menu::getAllMenus();
        foreach ($menus as $menu) {
            if ($menu['id']  == $id) {
                continue;
            }
            foreach ($menu['name'] as $lang => $name) {
                if (empty($data['name']) || empty($data['name'][$lang])) {
                    throw new \Exception("menu name is empty - but is require");
                }
                $nameIn = Str::slug($data['name'][$lang], "-");
                $n = Str::slug($name, "-");
                if ($nameIn == $n) {
                    $out['success'] = false;
                    $out['error'] = "Duplicate menu: $name ($lang)";
                    break;
                }
            }
        }
        return $out;
    }

    public static function getNextPosition()
    {
        $menu = Menu::query()
                ->orderBy('position', 'desc')
                ->first()
                ;

        if (!$menu) {
            return 1;
        }
        return  $menu->position+1;
    }

    public static function swapPosition($direction, $id)
    {
        $menus = Menu::query()
                ->orderBy('position', 'asc')
                ->get()
                ;

        $countMenus = count($menus);
        if ($countMenus < 2) {
            return false;
        }

        foreach ($menus as $key => $menu) {
            if (($menu->id == $id)) {
                if ($direction === "up") {
                    $swapKey = ($key === 0) ?  $countMenus - 1 : $key - 1;
                }

                if ($direction === "down") {
                    $swapKey = ($key === ($countMenus - 1)) ? 0 : $key + 1;
                }

                $positionKey = $menu->position;
                $menu->position = $menus[$swapKey]->position;
                $menu->save();
                $menus[$swapKey]->position = $positionKey;
                $menus[$swapKey]->save();
            }
        }
        return true;
    }
    */
}
