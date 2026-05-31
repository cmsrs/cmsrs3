<?php

declare(strict_types=1);

namespace App\Services\Cmsrs\Helpers;

use Carbon\Carbon;

class CacheService
{
    public static function setTime(): Carbon
    {
        return Carbon::now()->addYears(2);
    }
}
