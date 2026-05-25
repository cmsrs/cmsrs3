<?php

namespace App\Enums\Cmsrs;

enum SortDirection: string
{
    case ASC = 'asc';
    case DESC = 'desc';

    /**
     * @return list<string>
     */
    public static function values(): array
    {
        return array_column(self::cases(), 'value');
    }
}
