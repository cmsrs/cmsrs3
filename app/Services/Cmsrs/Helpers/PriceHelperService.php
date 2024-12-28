<?php

namespace App\Services\Cmsrs\Helpers;

use App\Services\Cmsrs\ConfigService;

class PriceHelperService
{
    /**
     * this function are used converted in javascript too
     */
    public static function getPriceDescriptionWrap(int $price): string
    {
        $currency = (new ConfigService)->getCurrency();

        return self::getPriceDescription($price, $currency);
    }

    /**
     * this function are used converted in javascript too
     */
    public static function getPriceDescription(int $price, string $currency): string
    {
        $priceInUnits = $price / 100;
        $formattedPrice = number_format($priceInUnits, 2, '.', ',');

        $currencySymbols = [
            'USD' => '$',
            'EUR' => '€',
            'GBP' => '£',
            'PLN' => 'zł',
            // Add more currencies as needed
        ];

        if (array_key_exists($currency, $currencySymbols)) {
            $symbol = $currencySymbols[$currency];
        } else {
            $symbol = $currency;
        }

        if ($currency === 'USD') {
            return $symbol.$formattedPrice;
        } elseif ($currency === 'PLN') {
            return $formattedPrice.' '.$symbol;
        } else {
            return $symbol.$formattedPrice;
        }
    }
}
