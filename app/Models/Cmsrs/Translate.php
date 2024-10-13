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
        return $this->hasOne('App\Models\Cmsrs\Page', 'id', 'page_id');
    }
    
}
