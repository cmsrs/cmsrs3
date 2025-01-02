<?php

namespace App\Services\Cmsrs;

use App\Services\Cmsrs\Helpers\PriceHelperService;

class DeliverService
{
    const KEY_PICKUP_IN_PERSON = 'pickup_in_person';

    const PRICE_PICKUP_IN_PERSON = 0;

    const KEY_DPD_COURIER = 'dpd_courier';

    const PRICE_DPD_COURIER = 1400;

    const KEY_PARCEL_LOCKERS = 'parcel_lockers';

    const PRICE_PARCEL_LOCKERS = 1100;

    public static function getDeliver($key = null)
    {
        $Delivers = [
            self::KEY_PICKUP_IN_PERSON => [
                'name' => 'Pickup in person',
                'price' => self::PRICE_PICKUP_IN_PERSON,
                'price_description' => PriceHelperService::getPriceDescriptionWrap(self::PRICE_PICKUP_IN_PERSON),
            ],
            self::KEY_DPD_COURIER => [
                'name' => 'DPD courier',
                'price' => self::PRICE_DPD_COURIER, // 1400,
                'price_description' => PriceHelperService::getPriceDescriptionWrap(self::PRICE_DPD_COURIER),
            ],
            self::KEY_PARCEL_LOCKERS => [
                'name' => 'Parcel lockers',
                'price' => self::PRICE_PARCEL_LOCKERS, // 1100,
                'price_description' => PriceHelperService::getPriceDescriptionWrap(self::PRICE_PARCEL_LOCKERS),
            ],
        ];

        if (empty($key)) {
            return $Delivers;
        }

        if (empty($Delivers[$key])) {
            throw new \Exception('I cant get Deliver where key= '.$key);
        }

        return $Delivers[$key];
    }
}
