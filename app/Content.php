<?php

namespace App;

//use Illuminate\Database\Eloquent\Model;

class Content extends Base
{

    protected $fillable = [
        'lang',
        //'column',
        'value',
        'page_id'
    ];

    protected $casts = [
        'page_id' => 'integer'
    ];

    public function wrapCreate( $data)
    {
        if( !empty($data['page_id'])  ){
            $columns = [
                'content' => false 
            ];
            $this->genericCreateTranslate( $data, 'page_id', $columns);
        }

        return true;
    }

    public function updateRow($row)
    {
        if( !empty($row['page_id'])  ){
            $obj = Content::where( 'page_id', $row['page_id'] )->where('lang', $row['lang'] )->first();
        }

        if($obj){
            $obj->update([ 'value' => $row['value']] );
        }else{
            $this->createRow( $row );
        }

        return true;
    }
    
    
}
