<?php

namespace App\Models\Cmsrs;
use Illuminate\Database\Eloquent\Model;


class Image extends Model
{
    private $translate;

    const IMAGE_DIR = 'images';

    const IMAGE_ORG = 'org';
    const IMAGE_THUMB_TYPE_SMALL = 'small';
    const IMAGE_THUMB_TYPE_MEDIUM = 'medium';

    public static $thumbs = [
      self::IMAGE_THUMB_TYPE_SMALL => [
        'x' => 100,
        'y' => 100
      ],
      self::IMAGE_THUMB_TYPE_MEDIUM => [
        'x' => 300,
        'y' => 300
      ]
    ];

    protected $fillable = [
        'name',
        'position',
        'page_id',
        'product_id'
    ];

    public static $type = [
        'page' => 'page_id',
        'product' => 'product_id'
    ];

    protected $casts = [
      'page_id' => 'integer',
      'product_id' => 'integer',
      'position' => 'integer'
    ];

    public function translates()
    {
        return $this->hasMany('App\Models\Cmsrs\Translate');
    }    

}
