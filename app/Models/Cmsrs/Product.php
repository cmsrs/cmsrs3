<?php
namespace App\Models\Cmsrs;

use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    private $translate;
    private $content;

    public $productFields;

    protected $fillable = [
        'sku',
        'price',
        'published',
        'page_id'
    ];

    protected $casts = [
        'published' => 'integer',
        'price' => 'integer',
        'page_id' => 'integer'
    ];

    public $columnsAllowedToSort = [
        'id',
        'published',
        'product_name', //from translate
        'page_short_title', //from translate - derive from page_id
        'sku',
        'price',
        'created_at',
        'updated_at'
    ];

    public function page()
    {
        return $this->hasOne('App\Models\Cmsrs\Page', 'id', 'page_id');
    }

    public function images()
    {
        return $this->hasMany('App\Models\Cmsrs\Image');
    }

    public function translates()
    {
        return $this->hasMany('App\Models\Cmsrs\Translate');
    } 

    public function translatesPage()
    {
        return $this->hasMany('App\Models\Cmsrs\Translate', 'page_id', 'page_id');
    }

    public function contents()
    {
        return $this->hasMany('App\Models\Cmsrs\Content');
    }        

}
