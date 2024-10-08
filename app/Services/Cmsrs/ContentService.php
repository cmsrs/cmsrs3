<?php

namespace App\Services\Cmsrs;

use App\Models\Cmsrs\Content;

class ContentService extends BaseService
{
    protected $fillable = [
        'lang',
        'column',
        'value',
        'page_id',
        'product_id'
    ];

    protected $casts = [
        'page_id' => 'integer',
        'product_id' => 'integer'
    ];

    public function wrapCreate($data, $create = true)
    {
        if (!empty($data['page_id'])) {
            $columns = [
                'content' => false
            ];
            $this->genericCreateTranslate($data, 'page_id', $columns, $create);
        }elseif (!empty($data['product_id'])) {
            $columns = [
                'product_description' => false
            ];
            $this->genericCreateTranslate($data, 'product_id', $columns, $create);
        }


        return true;
    }

    public function updateRow($row)
    {
        if (!empty($row['page_id'])) {
            $obj = Content::where('page_id', $row['page_id'])->where('column', $row['column'])->where('lang', $row['lang'])->first();
        }elseif (!empty($row['product_id'])) {
            $obj = Content::where('product_id', $row['product_id'])->where('column', $row['column'])->where('lang', $row['lang'])->first();
        }


        $this->wrapTranslateUpdate($obj, $row);
        return true;
    }
}
