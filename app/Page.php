<?php

namespace App;

use Illuminate\Database\Eloquent\Model;


class Page extends Model
{
    protected $fillable = [
        'title', 'short_title', 'published', 'position', 'type', 'content', 'menu_id'
    ];

    public function images()
    {
      return $this->hasMany('App\Image');
    }

    public function delete()
    {

        foreach($this->images()->get() as $img ){
          $img->delete();
        }

        //echo "+++++lllllll";

        //$this->images()->delete();
        // as suggested by Dirk in comment,
        // it's an uglier alternative, but faster
        // Photo::where("user_id", $this->id)->delete()

        // delete the user
        return parent::delete();
    }


    static public function getNextPositionByMenuId( $menuId )
    {

      if( empty($menuId) ){
        $page = Page::query()
                  ->whereNull( 'menu_id'  )
                  ->orderBy('position', 'desc')
                  ->first()
                  ;
      }else{
        $page = Page::query()
                  ->where( 'menu_id', '=', $menuId )
                  ->orderBy('position', 'desc')
                  ->first()
                  ;
      }

      if( !$page ){
        return 1;
      }
      return  $page->position+1;
    }

    static public function getPagesByMenuId($menuId)
    {
      if( empty($menuId) ){
        $page = Page::query()
                  ->whereNull( 'menu_id'  )
                  ->orderBy('position', 'asc')
                  ->get()
                  ;
      }else{
        $page = Page::query()
                  ->where( 'menu_id', '=', $menuId )
                  ->orderBy('position', 'asc')
                  ->get()
                  ;
      }
      return $page;
    }


    static public function swapPosition($direction, $id)
    {

      $page = Page::find($id);
      if( !$page ){
          return false;
      }
      $menuId = $page->menu_id;
      $pages = Page::getPagesByMenuId($menuId);

      $countPages = count($pages);
      if($countPages < 2){
        return false;
      }

      foreach ($pages as $key => $p) {

        if( ($p->id == $id)  ){
          if( $direction === "up" ){
            $swapKey = ( $key === 0 ) ?  $countPages - 1 : $key - 1;
          }

          if( $direction === "down" ){
            $swapKey = ( $key === ($countPages - 1) ) ? 0 : $key + 1;
          }

          $positionKey = $p->position;
          $p->position = $pages[$swapKey]->position;
          $p->save();
          $pages[$swapKey]->position = $positionKey;
          $pages[$swapKey]->save();
        }
      }
      return true;
    }


}
