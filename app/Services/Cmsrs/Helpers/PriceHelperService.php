<?php

namespace App\Services\Cmsrs\Helpers;

use App\Services\Cmsrs\ConfigService;
use NumberFormatter;

class PriceHelperService
{
    public static function getPriceDescriptionWrap(int $price): string
    {
        $currency = (new ConfigService)->getCurrency();

        return self::getPriceDescription($price, $currency);
    }

    public static function getPriceDescription(int $price, string $currency, ?string $locale = null): string
    {
        $locale = $locale ?? config('app.locale', 'en');

        $formatter = new NumberFormatter($locale, NumberFormatter::CURRENCY);

        $priceInUnits = $price / 100;

        return $formatter->formatCurrency($priceInUnits, $currency);
    }
}
