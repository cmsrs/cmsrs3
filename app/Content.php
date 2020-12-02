<?php

namespace App;

class Content extends Base
{

    protected $fillable = [
        'lang',
        'column',
        'value',
        'page_id'
    ];

    protected $casts = [
        'page_id' => 'integer'
    ];

    public function wrapCreate( $data, $create = true)
    {
        if( !empty($data['page_id'])  ){
            $columns = [
                'content' => false 
            ];
            $this->genericCreateTranslate( $data, 'page_id', $columns, $create);
        }

        return true;
    }

    public function updateRow($row)
    {
        if( !empty($row['page_id'])  ){
            $obj = Content::where( 'page_id', $row['page_id'] )->where( 'column', $row['column'] )->where('lang', $row['lang'] )->first();
        }

        $this->wrapTranslateUpdate( $obj, $row );
        return true;
    }
    
    
}
