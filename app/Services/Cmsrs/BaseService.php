<?php

namespace App\Services\Cmsrs;

use App\Models\Cmsrs\Content;
use App\Models\Cmsrs\Menu;
use App\Models\Cmsrs\Translate;
use App\Services\Cmsrs\Interfaces\TranslateInterface;
use Illuminate\Pagination\LengthAwarePaginator;
use Illuminate\Pagination\Paginator;

abstract class BaseService
{
    public $pageFields = [
        'id',
        'published',
        'commented',
        'after_login',
        'position',
        'type',
        'menu_id',
        'page_id',
    ];

    protected function getPageDataFormat(array $page, ?string $lang = null)
    {
        $out = [];
        foreach ($this->pageFields as $field) {
            $out[$field] = $page[$field];
        }
        foreach ($page['translates'] ?? [] as $translate) {
            $out[$translate['column']][$translate['lang']] = $translate['value'];
        }
        foreach ($page['contents'] ?? [] as $translate) {
            $out[$translate['column']][$translate['lang']] = $translate['value'];
        }
        if ($lang) {
            return $this->removeKeyLangInArr($out, $lang);
        }

        return $out;
    }

    public function removeKeyLangInArr(array $arr, string $lang): array
    {
        foreach ($arr as $key => $value) {
            if (is_array($value)) {
                $arr[$key] = isset($value[$lang]) ? $value[$lang] : null;
            }
        }

        return $arr;
    }

    protected function pagesPublishedAndAccessNotAuth(Menu $mMenu)
    {
        return $mMenu->pages()->where('published', '=', 1)->where('after_login', '=', 0)->orderBy('position', 'asc');
    }

    public function pagesPublishedTree($pagesByMenu)
    {
        $tree = [];
        foreach ($pagesByMenu as $page) {
            if (empty($page->page_id)) {
                $tree[$page->id] = $page;
            }
        }

        foreach ($pagesByMenu as $page) {
            if (! empty($page->page_id)) {
                $children = empty($tree[$page->page_id]['children']) ? [] : $tree[$page->page_id]['children'];
                array_push($children, $page);
                if (! empty($tree[$page->page_id])) {
                    $tree[$page->page_id]->setAttribute('children', $children);
                }
            }
        }

        return $tree;
    }

    public function getAllTranslateByColumn($model)
    {
        $out = [];

        if ($this instanceof TranslateInterface) {
            $data = $this->getAllTranslate($model); // from child

            foreach ($data as $d) {
                $out[$d['column']][$d['lang']] = $d['value'];
            }
        }

        return $out;
    }

    public function translatesByColumnAndLang($model, $column, $lang)
    {
        $data = $this->getAllTranslateByColumn($model);

        $value = '';
        if (isset($data[$column]) && isset($data[$column][$lang])) {
            $value = $data[$column][$lang];
        }

        return $value;
    }

    protected function wrapTranslateUpdate(Translate|Content|false $obj, $row)
    {
        if ($obj) {
            $obj->update(['value' => $row['value']]);
        } else {
            $this->createRow($row);
        }
    }

    protected function createRow($row)
    {
        $translate = Translate::create($row);
        if (empty($translate->id)) {
            throw new \Exception('problem with save into translate table');
        }
    }

    public static function reIndexArr($arr, $key = 'id')
    {
        $out = [];
        foreach ($arr as $item) {
            $arrItem = (array) $item;
            if (empty($arrItem[$key])) {
                throw new \Exception('not found key id in arr');
            }

            $out[$arrItem[$key]] = $arrItem;
        }

        return $out;
    }

    /**
     * @return LengthAwarePaginator
     */
    protected function getPaginationFromCollection($collection)
    {
        $perPage = ConfigService::getPagination();
        $page = Paginator::resolveCurrentPage() ?: 1;

        return new LengthAwarePaginator(
            $collection->forPage($page, $perPage)->values(),
            $collection->count(),
            $perPage,
            $page,
            ['path' => request()->url()]
        );
    }

    // see: App\Services\Cmsrs\Helpers\PriceHelperService
    // protected static function formatCurrency($number)
    // {
    //     $currency = (new ConfigService)->getCurrency();

    //     return Number::currency(($number / 100), $currency); //100 - cents
    // }

}
