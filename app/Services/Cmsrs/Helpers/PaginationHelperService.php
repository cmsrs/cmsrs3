<?php

declare(strict_types=1);

namespace App\Services\Cmsrs\Helpers;

use Illuminate\Pagination\LengthAwarePaginator;
use Illuminate\Pagination\Paginator;
use Illuminate\Support\Collection;
use App\Services\Cmsrs\ConfigService;


class PaginationHelperService
{
    /**
     * @param  Collection<int, mixed>  $collection
     * @return LengthAwarePaginator<int, mixed>
     */
    public static function getPaginationFromCollection(Collection $collection) : LengthAwarePaginator
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
}
