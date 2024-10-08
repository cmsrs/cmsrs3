<?php
namespace App\Models\Cmsrs;
use Illuminate\Database\Eloquent\Model;

class Translate extends Model
{
    protected $fillable = [
        'lang',
        'column',
        'value',
        'page_id',
        'menu_id',
        'image_id',
        'product_id'
    ];

    protected $casts = [
        'page_id' => 'integer',
        'menu_id' => 'integer',
        'image_id' => 'integer',
        'product_id' => 'integer',        
    ];

    public function page()
    {
        return $this->hasOne('App\Page', 'id', 'page_id');
    }
    

    /*
    public function wrapCreate($data, $create = true)
    {
        if (!empty($data['menu_id'])) {
            $requiredColumn = (new Menu)->requiredColumn;
            $columns = ['name' => in_array('name', $requiredColumn) ? true : false ];
            $this->genericCreateTranslate($data, 'menu_id', $columns, $create);
        } elseif (!empty($data['page_id'])) {
            $requiredColumn = (new Page)->requiredColumn;
            $columns = [
                'title' => in_array('title', $requiredColumn) ? true : false,
                'short_title' => in_array('short_title', $requiredColumn) ? true : false,
                'description' => in_array('description', $requiredColumn) ? true : false
            ];
            $this->genericCreateTranslate($data, 'page_id', $columns, $create);
        } elseif (!empty($data['image_id'])) {
            $columns = ['alt' => false];
            $this->genericCreateTranslate($data, 'image_id', $columns, $create);
        } elseif (!empty($data['product_id'])) {
            $columns = [
                'product_name' => true                
            ];
            $this->genericCreateTranslate($data, 'product_id', $columns, $create);
        }

        return true;
    }

    public function updateRow($row)
    {
        if (!empty($row['menu_id'])) {
            $obj = Translate::where('menu_id', $row['menu_id'])->where('column', $row['column'])->where('lang', $row['lang'])->first();
        } elseif (!empty($row['page_id'])) {
            $obj = Translate::where('page_id', $row['page_id'])->where('column', $row['column'])->where('lang', $row['lang'])->first();
        } elseif (!empty($row['image_id'])) {
            $obj = Translate::where('image_id', $row['image_id'])->where('column', $row['column'])->where('lang', $row['lang'])->first();
        } elseif (!empty($row['product_id'])) {
            $obj = Translate::where('product_id', $row['product_id'])->where('column', $row['column'])->where('lang', $row['lang'])->first();
        }

        $this->wrapTranslateUpdate($obj, $row);

        return true;
    }
    */
}
