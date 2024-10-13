<?php

namespace App\Services\Cmsrs\Helpers;

use Carbon\Carbon;

class CacheService
{
    public static function setTime()
    {
        return Carbon::now()->addYears(2);
    }
}
