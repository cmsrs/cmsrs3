<?php

declare(strict_types=1);

namespace App\Services\Cmsrs\Helpers;

use App\Services\Cmsrs\ConfigService;
use Carbon\Carbon;
use Closure;
use Illuminate\Support\Str;

class CacheManagerService
{
    public function __construct(
        private ConfigService $configService
    ) {}

    /**
     * @template T
     *
     * @param  Closure(): T  $callback
     * @return T
     */
    public function remember(string $key, Closure $callback)
    {
        if (! $this->configService->isCacheEnable()) {
            return $callback();
        }

        return cache()->remember(
            $key,
            $this->setTime(),
            $callback
        );
    }

    public function key(string $prefix, string $value): string
    {
        return $prefix.'_'.Str::slug($value, '_');
    }

    public function setTime(): Carbon
    {
        return Carbon::now()->addYears(2);
    }
}
