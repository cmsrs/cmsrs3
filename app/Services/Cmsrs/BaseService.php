<?php

declare(strict_types=1);

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
     * @return HasMany<Page, Menu>
     */
    protected function pagesPublishedAndAccessNotAuth(Menu $mMenu): HasMany
    {
        return $mMenu->pages()->where('published', '=', 1)->where('after_login', '=', 0)->orderBy('position', 'asc');
    }

    // protected function createRow($row)
    // {
    //     $translate = Translate::create($row);
    //     if (empty($translate->id)) {
    //         throw new \Exception('problem with save into translate table');
    //     }
    // }

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
