<?php

namespace App\Services\Cmsrs;

use App\Models\Cmsrs\Menu;
use App\Models\Cmsrs\Page;
use App\Models\Cmsrs\Translate;

class TranslateService extends BaseService
{
    public function __construct(private ConfigService $configService) {}

    /**
     * @return array<int, string>
     *                            use in tests
     */
    public function getArrLangs(): array
    {
        return $this->configService->arrGetLangs();
    }

    /**
     * @param  array<string, mixed>  $d
     * @param  array<string, bool>  $columns
     *
     * @throws \Exception
     *                    DRY!!: ContentService.php and TranslateService.php, in Base service I don't want use ConfigService (because of tests - new instance problem in tests, and phpstan)
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
     *                                     DRY!!: ContentService.php and TranslateService.php
     */
    protected function createRow($row): void
    {
        $translate = Translate::create($row);
        if (empty($translate->id)) {
            throw new \Exception('problem with save into translate table');
        }
    }

    /**
     * @param  array<string, mixed>  $data
     */
    public function wrapCreate(array $data, bool $create = true): bool
    {
        if (! empty($data['menu_id'])) {
            $requiredColumn = (new Menu)->requiredColumn;
            $columns = ['name' => in_array('name', $requiredColumn) ? true : false];
            $this->genericCreateTranslate($data, 'menu_id', $columns, $create);
        } elseif (! empty($data['page_id'])) {
            $requiredColumn = (new Page)->requiredColumn;
            $columns = [
                'title' => in_array('title', $requiredColumn) ? true : false,
                'short_title' => in_array('short_title', $requiredColumn) ? true : false,
                'description' => in_array('description', $requiredColumn) ? true : false,
            ];
            $this->genericCreateTranslate($data, 'page_id', $columns, $create);
        } elseif (! empty($data['image_id'])) {
            $columns = ['alt' => false];
            $this->genericCreateTranslate($data, 'image_id', $columns, $create);
        } elseif (! empty($data['product_id'])) {
            $columns = [
                'product_name' => true,
            ];
            $this->genericCreateTranslate($data, 'product_id', $columns, $create);
        }

        return true;
    }

    /**
     * @param  array<string, mixed>  $row
     */
    public function updateRow(array $row): bool
    {
        $query = Translate::query()
            ->where('column', $row['column'])
            ->where('lang', $row['lang']);

        if (! empty($row['menu_id'])) {
            $query->where('menu_id', $row['menu_id']);
        } elseif (! empty($row['page_id'])) {
            $query->where('page_id', $row['page_id']);
        } elseif (! empty($row['image_id'])) {
            $query->where('image_id', $row['image_id']);
        } elseif (! empty($row['product_id'])) {
            $query->where('product_id', $row['product_id']);
        }

        $obj = $query->first();

        $this->wrapTranslateUpdate($obj, $row);

        return true;
    }

    /**
     * @param  array<string, mixed>  $row
     *                                     DRY!!: ContentService.php and TranslateService.php
     */
    protected function wrapTranslateUpdate(?Translate $obj, array $row): void
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
