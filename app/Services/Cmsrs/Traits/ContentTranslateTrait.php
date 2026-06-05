<?php

declare(strict_types=1);

namespace App\Services\Cmsrs\Traits;

use App\Models\Cmsrs\Content;
use App\Models\Cmsrs\Translate;

trait ContentTranslateTrait
{
    /**
     * @param  array<string, mixed>  $d
     * @param  array<string, bool>  $columns
     *
     * @throws \Exception
     */
    public function genericCreateTranslate(array $d, string $refName, array $columns, bool $create = true): bool
    {
        $refId = $d[$refName];
        $data = $d['data'];
        foreach ($columns as $column => $require) {
            if ($require && empty($data[$column])) {
                throw new \Exception("Translation problem, require column: $column, var= ".var_export($data, true));
            } else {
                $col = ! empty($data[$column]) ? $data[$column] : [];
                foreach ($this->getArrLangs() as $lang) {
                    $value = ! empty($col[$lang]) ? $col[$lang] : null;

                    if ($require && ! $value) {
                        throw new \Exception("Translation problem, require lang: $lang for column: $column, var= ".var_export($data, true));
                    }

                    $row = [$refName => $refId, 'column' => $column, 'lang' => $lang, 'value' => $value];
                    if ($create) {
                        $this->createRow($row);
                    } else {
                        $this->updateRow($row);
                    }
                }
            }
        }

        return true;
    }

    /**
     * @param  array<string, mixed>  $row
     */
    protected function wrapTranslateUpdate(Translate|Content|null $obj, array $row): void
    {
        if ($obj === null) {
            $this->createRow($row);

            return;
        }

        $obj->update([
            'value' => $row['value'],
        ]);
    }
}
