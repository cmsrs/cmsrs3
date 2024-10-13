<?php

namespace App\Services\Cmsrs;

class DeliverService
{
    const KEY_PICKUP_IN_PERSON = 'pickup_in_person';

    const KEY_DPD_COURIER = 'dpd_courier';

    const KEY_PARCEL_LOCKERS = 'parcel_lockers';

    public static function getDeliver($key = null)
    {
        $Delivers = [
            self::KEY_PICKUP_IN_PERSON => [
                'name' => 'Pickup in person',
                'price' => 0,
            ],
            self::KEY_DPD_COURIER => [
                'name' => 'DPD courier',
                'price' => 1400,
            ],
            self::KEY_PARCEL_LOCKERS => [
                'name' => 'Parcel lockers',
                'price' => 1100,
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
