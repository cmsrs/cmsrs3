<?php

namespace App\Services\Cmsrs;

use App\Models\Cmsrs\Image;
use App\Models\Cmsrs\Menu;
use App\Models\Cmsrs\Page;
use App\Services\Cmsrs\Helpers\CacheService;
use App\Services\Cmsrs\Interfaces\TranslateInterface;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Str;

class MenuService extends BaseService implements TranslateInterface
{
    private $translate;

    private $pageService;

    public function __construct()
    {
        $this->translate = new TranslateService;
        $this->pageService = new PageService;
    }

    public function setTranslate($objTranslate)
    {
        if (! empty($objTranslate)) {
            $this->translate = $objTranslate;
        }
    }

    public static function getMenu()
    {
        $isCache = (new ConfigService)->isCacheEnable();
        if ($isCache) {
            $menus = cache()->remember('menus', CacheService::setTime(), function () {
                return Menu::all()->sortBy('position');
            });
        } else {
            $menus = Menu::all()->sortBy('position');
        }

        return $menus;
    }

    public static function CreateMenu($data)
    {
        $data['position'] = MenuService::getNextPosition();

        $menu = Menu::create($data);
        if (empty($menu->id)) {
            throw new \Exception('I cant get menu id');
        }

        return $menu;
    }

    public function wrapUpdate(Menu $mMenu, $data)
    {
        $mMenu->update($data);
        $this->translate->wrapCreate(['menu_id' => $mMenu->id, 'data' => $data], false);

        return true;
    }

    /**
     * use also in script to load demo (test) data
     * php artisan cmsrs:load-demo-data
     */
    public function wrapCreate($data)
    {
        $menu = MenuService::CreateMenu($data);
        $this->translate->wrapCreate(['menu_id' => $menu->id, 'data' => $data], true);

        return $menu;
    }

    public function getSlugByLang(Menu $model, $lang)
    {
        $column = 'name';
        $name = $this->translatesByColumnAndLang($model, $column, $lang);

        return Str::slug($name, '-');
    }

    public function getAllTranslate(Image|Page|Menu $mMenu)
    {
        $menuId = $mMenu->id;
        $isCache = (new ConfigService)->isCacheEnable();
        if ($isCache) {
            $ret = cache()->remember('menutranslatemenuid_'.$menuId, CacheService::setTime(), function () use ($mMenu, $menuId) {
                return $mMenu->translates()->where('menu_id', $menuId)->get(['lang', 'column', 'value'])->toArray();
            });
        } else {
            $ret = $mMenu->translates()->where('menu_id', $menuId)->get(['lang', 'column', 'value'])->toArray();
        }

        return $ret;
    }

    public function pagesPublished(Menu $mMenu)
    {
        $pages = $mMenu->pages()->where('published', '=', 1)->orderBy('position', 'asc')->get();

        return $pages;
    }

    public function pagesPublishedAndAccess(Menu $mMenu)
    {
        if (Auth::check()) {
            $pages = $mMenu->pages()->where('published', '=', 1)->orderBy('position', 'asc');
        } else {
            $pages = $this->pagesPublishedAndAccessNotAuth($mMenu);
        }

        return $pages;
    }

    public static function getAllMenus()
    {
        $menus = Menu::with('translates')->orderBy('position', 'asc')->get()->toArray();

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
        $out = ['success' => true];
        $menus = MenuService::getAllMenus();
        foreach ($menus as $menu) {
            if ($menu['id'] == $id) {
                continue;
            }
            foreach ($menu['name'] as $lang => $name) {
                if (empty($data['name']) || empty($data['name'][$lang])) {
                    throw new \Exception('menu name is empty - but is require');
                }
                $nameIn = Str::slug($data['name'][$lang], '-');
                $n = Str::slug($name, '-');
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
            ->first();

        if (! $menu) {
            return 1;
        }

        return $menu->position + 1;
    }

    public static function swapPosition($direction, $id)
    {
        if (! in_array($direction, ['up', 'down'])) {
            throw new \Exception('Wrong direction (Menu). It can be up or down direction = '.$direction);
        }

        $menus = Menu::query()
            ->orderBy('position', 'asc')
            ->get();

        $countMenus = count($menus);
        if ($countMenus < 2) {
            return false;
        }

        foreach ($menus as $key => $menu) {
            if (($menu->id == $id)) {
                $swapKey = null;

                if ($direction === 'up') {
                    $swapKey = ($key === 0) ? $countMenus - 1 : $key - 1;
                }

                if ($direction === 'down') {
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
}
