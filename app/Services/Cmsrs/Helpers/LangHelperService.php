<?php

declare(strict_types=1);

namespace App\Services\Cmsrs\Helpers;

class LangHelperService
{
    /**
     * @param  array<string, mixed>  $arr
     * @return array<string, mixed>
     */
    public static function removeKeyLangInArr(array $arr, string $lang): array
    {
        foreach ($arr as $key => $value) {
            if (is_array($value)) {
                $arr[$key] = isset($value[$lang]) ? $value[$lang] : null;
            }
        }

        return $arr;
    }

}
