<?php

namespace App\Services\Cmsrs\Helpers;

use Illuminate\Support\Str;

class StrHelperService
{
    public static function filterFileName(string $basename, string $extension): string
    {
        $delimiter = '-';

        $filteredName = Str::slug($basename, $delimiter);

        return $filteredName.'.'.strtolower(trim($extension));
    }
}
