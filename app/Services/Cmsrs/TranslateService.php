<?php

declare(strict_types=1);

namespace App\Services\Cmsrs;

use App\Models\Cmsrs\Menu;
use App\Models\Cmsrs\Page;
use App\Models\Cmsrs\Translate;
use App\Services\Cmsrs\Traits\ContentTranslateTrait;

class TranslateService
{
    use ContentTranslateTrait;

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
    protected function createRow($row): void
    {
        $translate = Translate::create($row);
        if (empty($translate->id)) {
            throw new \Exception('problem with save into translate table');
        }
    }
}
