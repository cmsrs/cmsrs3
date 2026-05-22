<?php

namespace App\Services\Cmsrs;

use App\Models\Cmsrs\Menu;
use App\Models\Cmsrs\Page;
use App\Models\Cmsrs\Translate;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Pagination\LengthAwarePaginator;
use Illuminate\Pagination\Paginator;
use Illuminate\Support\Collection;

abstract class BaseService
{
    /**
     * @var array<int, string>
     */
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

    /**
     * @param  array<string, mixed>  $arr
     * @return array<string, mixed>
     */
    public function removeKeyLangInArr(array $arr, string $lang): array
    {
        foreach ($arr as $key => $value) {
            if (is_array($value)) {
                $arr[$key] = isset($value[$lang]) ? $value[$lang] : null;
            }
        }

        return $arr;
    }

    /**
     * @return HasMany<Page, Menu>
     */
    protected function pagesPublishedAndAccessNotAuth(Menu $mMenu): HasMany
    {
        return $mMenu->pages()->where('published', '=', 1)->where('after_login', '=', 0)->orderBy('position', 'asc');
    }

    /**
     * @param Collection<int, Page> $pagesByMenu
     * @return array<int, Page>
     */
    public function pagesPublishedTree(Collection $pagesByMenu)
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

    // protected function createRow($row)
    // {
    //     $translate = Translate::create($row);
    //     if (empty($translate->id)) {
    //         throw new \Exception('problem with save into translate table');
    //     }
    // }

    /**
     * @param  array<array-key, array<string, mixed>>  $arr
     * @return array<array-key, array<string, mixed>>
     */
    public static function reIndexArr(array $arr, string $key = 'id'): array
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
     * @param  Collection<int, mixed>  $collection
     * @return LengthAwarePaginator<int, mixed>
     */
    protected function getPaginationFromCollection(Collection $collection)
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
