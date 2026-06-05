<?php

declare(strict_types=1);

namespace App\Services\Cmsrs\Helpers;

class ArrObjHelperService
{
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
}
