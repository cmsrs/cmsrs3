<?php

namespace App;


use Illuminate\Support\Str;

use Illuminate\Database\Eloquent\Model;


class Menu extends Model
{
    protected $fillable = [
        'name', 'position'
    ];

    public function setNameAttribute($value)
    {
        $this->attributes['name'] = $value;
        $this->attributes['slug'] = Str::slug($value, "-");
    }

    public function pages()
    {
      return $this->hasMany('App\Page');
    }

    public function pagesPublished()
    {
      return $this->pages()->where( 'published', '=', 1 );
    }


    static public function getAllMenus()
    {
      $menus = Menu::query()->orderBy('position', 'asc')->get(['id',  'name', 'position'])->toArray();
      return $menus;
    }

    static public function getNextPosition()
    {
      $menu = Menu::query()
                ->orderBy('position', 'desc')
                ->first()
                ;

      if( !$menu ){
        return 1;
      }
      return  $menu->position+1;
    }

    static public function swapPosition($direction, $id)
    {
      $menus = Menu::query()
                ->orderBy('position', 'asc')
                ->get()
                ;

      $countMenus = count($menus);
      if($countMenus < 2){
        return false;
      }

      foreach ($menus as $key => $menu) {
        //dump($menu->id);
        if( ($menu->id == $id)  ){

          if( $direction === "up" ){
            $swapKey = ( $key === 0 ) ?  $countMenus - 1 : $key - 1;
          }

          if( $direction === "down" ){
            $swapKey = ( $key === ($countMenus - 1) ) ? 0 : $key + 1;
          }

          $positionKey = $menu->position;
          $menu->position = $menus[$swapKey]->position;
          $menu->save();
          $menus[$swapKey]->position = $positionKey;
          $menus[$swapKey]->save();
        }
      }
      return true;
    }

}
