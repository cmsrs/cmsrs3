<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;

class Page extends Model
{
    protected $fillable = [
        'title', 'short_title', 'description', 'published', 'commented', 'after_login', 'position', 'type', 'content', 'menu_id', 'page_id'
    ];

    protected $casts = [
          'published' => 'integer',
          'commented' => 'integer',
          'after_login' => 'integer',          
          'position' => 'integer',
          'menu_id' => 'integer', 
          'page_id' => 'integer'
    ];

    public function setTitleAttribute($value)
    {
        $this->attributes['title'] = $value;
        $this->attributes['slug'] = Str::slug($value, "-");
    }

    public function images()
    {
      return $this->hasMany('App\Image')->orderBy('position');
    }

    /**
     * use also in script to load demo (test) data
     * php artisan command:load-demo-data
     */
    static public function wrapCreate($data)
    {
      $menuId = empty($data['menu_id']) ? null : $data['menu_id'];
      $data['position'] = Page::getNextPositionByMenuId($menuId);  

      $page = Page::create( $data );
      if( empty($page->id)){
        throw new \Exception("I cant get page id");
      }

      if( !empty($data['images']) && is_array($data['images']) ){
        Image::createImages($data['images'], 'page', $page->id);
      }

      return $page;
    }

    public function arrImages()
    {
      $out = [];
      foreach($this->images as $image){
        $item = Image::getAllImage($image, false);        
        $item['id'] = $image->id;
        $item['alt'] = $image->alt;        
        $out[] = $item;
      }
      return $out;
    }

    public function getPageWithImages()
    {
      $p['id'] =$this->id; 
      $p['type'] =$this->type;
      //$p['title'] =$this->title; 
      $p['images'] = $this->arrImages();
      return $p;
    }


    static public function getAllPagesWithImages( $type = null )
    {

      if( $type ){
          $pages = Page::query()->where('type', $type )->orderBy('position', 'asc' )->get(['id', 'title', 'short_title', 'published', 'commented', 'after_login', 'position', 'type', 'content', 'menu_id', 'page_id'])->toArray();
      }else{
          $pages = Page::query()->orderBy('position', 'asc' )->get(['id', 'title', 'short_title', 'description', 'published', 'commented', 'after_login', 'position', 'type', 'content', 'menu_id', 'page_id'])->toArray();
      }


      foreach ($pages as $key => $page) {
        $pages[$key]['images'] = Image::getImagesAndThumbsByTypeAndRefId( 'page', $page['id']);
      }

      return $pages;
    }

    public function delete()
    {

        foreach($this->images()->get() as $img ){
          $img->delete();
        }

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

    static public function getPagesByMenuId($menuId, $pageId)
    {
      $page = [];
      if( empty($menuId) ){
        $page = Page::query()
                  ->whereNull( 'menu_id'  )
                  ->orderBy('position', 'asc')
                  ->get()
                  ;
      }elseif( !empty($menuId) && empty($pageId) ) {
        $page = Page::query()
                  ->where( 'menu_id', '=', $menuId )
                  ->whereNull( 'page_id'  )                  
                  ->orderBy('position', 'asc')
                  ->get()
                  ;
      }elseif(!empty($menuId) && !empty($pageId)){
        $page = Page::query()
                  ->where( 'menu_id', '=', $menuId )
                  ->where( 'page_id', '=', $pageId )                  
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
      $pageId = $page->page_id;
      $pages = Page::getPagesByMenuId($menuId, $pageId);


      $countPages = count($pages);
      if($countPages < 2){
        return false;
      }

      //print_r($pages->toArray());

      //dump($pages[1]->position, $direction, $id);

      foreach ($pages as $key => $p) {

        if( ($p->id == $id)  ){
          if( $direction === "up" ){
            $swapKey = ( $key === 0 ) ?  $countPages - 1 : $key - 1;
          }

          if( $direction === "down" ){
            $swapKey = ( $key === ($countPages - 1) ) ? 0 : $key + 1;
          }

          $positionKey = $p->position;


          //echo "-----".$p->id.'+++++++++'.$pages[$swapKey]->id."\n";
          Page::where( 'id', $p->id)->update([ 'position' => $pages[$swapKey]->position ]);
          //$obj1->position = 88; //$pages[$swapKey]->position;
          //$obj1->save();

          Page::where( 'id', $pages[$swapKey]->id )->update( ['position' => $positionKey ]  );
          //$obj2 = Page::find($pages[$swapKey]->id);          
          //$obj2->position = 44;  //$positionKey;
          //$obj2->save();
        }
      }
      //$pages->fresh();      
      //dd(Page::all());
      //$out =  Page::getPagesByMenuId($menuId, $pageId);
      //print_r($out->toArray());


      //dump($pages[1]->position);
      //dd('==');
      return true;
    }
}
