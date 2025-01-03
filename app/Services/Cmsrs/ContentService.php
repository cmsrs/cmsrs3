<?php

namespace App\Services\Cmsrs;

use App\Models\Cmsrs\Content;
use App\Services\Cmsrs\Interfaces\TranslateValueInterface;

class ContentService extends BaseService implements TranslateValueInterface
{
    protected $fillable = [
        'lang',
        'column',
        'value',
        'page_id',
        'product_id',
    ];

    protected $casts = [
        'page_id' => 'integer',
        'product_id' => 'integer',
    ];

    public function wrapCreate($data, $create = true)
    {
        if (! empty($data['page_id'])) {
            $columns = [
                'content' => false,
            ];
            $this->genericCreateTranslate($data, 'page_id', $columns, $create);
        } elseif (! empty($data['product_id'])) {
            $columns = [
                'product_description' => false,
            ];
            $this->genericCreateTranslate($data, 'product_id', $columns, $create);
        }

        return true;
    }

    public function updateRow(array $row)
    {
        $obj = false;
        if (! empty($row['page_id'])) {
            $obj = Content::where('page_id', $row['page_id'])->where('column', $row['column'])->where('lang', $row['lang'])->first();
        } elseif (! empty($row['product_id'])) {
            $obj = Content::where('product_id', $row['product_id'])->where('column', $row['column'])->where('lang', $row['lang'])->first();
        }

        $this->wrapTranslateUpdate($obj, $row);

        return true;
    }

    public function createRow($row)
    {
        $objContent = new Content;
        $content = $objContent->create($row);
        if (empty($content->id)) {
            throw new \Exception('problem with save into content table');
        }
    }
}
