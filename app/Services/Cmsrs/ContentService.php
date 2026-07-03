<?php

declare(strict_types=1);

namespace App\Services\Cmsrs;

use App\Models\Cmsrs\Content;
use App\Services\Cmsrs\Translation\TranslationWriter;

class ContentService
{
    public function __construct(
        private TranslationWriter $translationWriter,
    ) {}

    /**
     * @var array<int, string>
     */
    protected $fillable = [
        'lang',
        'column',
        'value',
        'page_id',
        'product_id',
    ];

    /**
     * @var array<string, string>
     */
    protected $casts = [
        'page_id' => 'integer',
        'product_id' => 'integer',
    ];

    /**
     * @param  array<string, mixed>  $data
     */
    public function wrapCreate(array $data, bool $create = true): bool
    {
        if (! empty($data['page_id'])) {
            $columns = [
                'content' => false,
            ];
            $this->translationWriter->genericCreateTranslate($data, 'page_id', $columns, Content::class, $create);
        } elseif (! empty($data['product_id'])) {
            $columns = [
                'product_description' => false,
            ];
            $this->translationWriter->genericCreateTranslate($data, 'product_id', $columns, Content::class, $create);
        }

        return true;
    }

    /**
     * @param  array<string, mixed>  $row
     */
    /*
    public function updateRow(array $row): bool
    {
        $query = Content::query()
            ->where('column', $row['column'])
            ->where('lang', $row['lang']);

        if (! empty($row['page_id'])) {
            $query->where('page_id', $row['page_id']);
        } elseif (! empty($row['product_id'])) {
            $query->where('product_id', $row['product_id']);
        }

        $obj = $query->first();

        $this->wrapTranslateUpdate($obj, $row);

        return true;
    }
        */

    /**
     * @param  array<string, mixed>  $row
     *                                     DRY!!: ContentService.php and TranslateService.php
     */
    /*
    public function createRow(array $row): void
    {
        $objContent = new Content;
        $content = $objContent->create($row);
        if (empty($content->id)) {
            throw new \Exception('problem with save into content table');
        }
    }
        */
}
