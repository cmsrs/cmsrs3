<?php
namespace App\Models\Cmsrs;

use Illuminate\Database\Eloquent\Model;

class Menu extends Model
{
    protected $fillable = [
        'position'
    ];

    protected $casts = [
        'position' => 'integer',
    ];

    public $requiredColumn = [
        'name'
    ];

    public function pages()
    {
        return $this->hasMany('App\Models\Cmsrs\Page');
    }

    public function translates()
    {
        return $this->hasMany('App\Models\Cmsrs\Translate');
    }

}
