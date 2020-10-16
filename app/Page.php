<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Auth;

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

    public function menu()
    {
      return $this->hasOne('App\Menu', 'id', 'menu_id');
    }
    

    static public function getFooterPages()
    {


      //$privacyPolicy = Page::getFirstPageByType('privacy_policy' );

      $privacyPolicy = Page::getFirstPageByType('privacy_policy' );
      $contact = Page::getFirstPageByType('contact' );    

      $out = [];
      $policyUrl = null;
      $policyTitle = null;
      if(!empty($privacyPolicy)){
          //this 'if' is needed to phpunit
          //$policyUrl = $footerPages['privacy_policy']->getSeparateUrl();
          //see AppServiceProvider
          $policyUrl = $privacyPolicy->getUrl();    
          $policyTitle = $privacyPolicy->title;
      }

      $contactUrl = null;
      $contactTitle = null;
      if(!empty($contact)){
        //this 'if' is needed to phpunit
        //$policyUrl = $footerPages['privacy_policy']->getSeparateUrl();
        //see AppServiceProvider
        $contactUrl = $contact->getUrl();    
        $contactTitle = $contact->title;
      }

      $out['policyUrl'] = $policyUrl;
      $out['policyTitle'] =  $policyTitle;
      $out['contactUrl'] =  $contactUrl;
      $out['contactTitle'] =  $contactTitle;
    
      return $out;
  }

    /*
    static public function getPageToPrivacyPolicy()
    {
      $page = Page::getFirstPageByType('privacy_policy' );
      return $page; //->getSeparateUrl();  
    }
    */

    public function getUrl()
    {
      // if(  'contact' == $this->type ){ //it was wrong if many pages will be on that menu
      //   return $this->getCmsMenuUrl();
      if( 'privacy_policy' == $this->type ){
        return $this->getSeparateUrl();
      }
      return $this->getCmsUrl();
    }
    
    // private function getCmsMenuUrl()
    // {
    //   //$menuSlug = $this->menu()->get()->first()->slug;      
    //   return "/c/".$this->slug;
    // }    

    private function getCmsUrl()
    {   
      $menuSlug = $this->menu()->get()->first()->slug;      
      return "/c/".$menuSlug."/".$this->slug;
    }

    private function getSeparateUrl()
    {
      return "/in/".$this->slug;
    }

    public function unpublishedChildren()
    {
      $pages = Page::where('page_id', '=', $this->id)->get();
      foreach($pages as $page){
        $page->published = 0;
        $page->update();
      }
    }

    public function images()
    {
      return $this->hasMany('App\Image')->orderBy('position');
    }

    //test this function - in frontGuestTest
    public function checkAuth(){
      if($this->after_login && !(Auth::check())){
        return false;
      }
      return true;
    }  
    
    static public function getFirstPageByType($type)
    {
      //echo $type."------";
      //$tmp = Page::all();// ->toArray();
      ///dd($tmp);
      $ret =  Page::where('type', '=', $type)->where( 'published', '=', 1 )->get()->first();
      //dd($ret);

      return $ret;

      // if( !isSet($p[0]) ) {
      //   return false;
      // }
      // return $p[0];
    }

    static public function getMainPage()
    {
      return Page::getFirstPageByType('main_page');
    }

    static public function validateMainPage( $data, $create = true )
    {
      if( isSet($data['type']) && ($data['type'] == 'main_page') ){
        if($create){
          $p = Page::getMainPage();
          if($p){
            throw new \Exception("Two main page not allowed");  
          }  
        }

        $data['menu_id'] = null;
        $data['page_id'] = null;
      }
      return $data;
    }

    /**
     * if parent page.published == 0 then child this page.published = 0
     */
    static public function validateParentPublished($data)
    {
      if( !empty($data['page_id']) ){
        $p = Page::findOrFail($data['page_id']);
        if(0 == $p->published){
          $data['published'] = 0;
        }
      }
      return $data;
    }
    
    /**
     * use also in script to load demo (test) data
     * php artisan command:load-demo-data
     */
    static public function wrapCreate($data)
    {
      $menuId = empty($data['menu_id']) ? null : $data['menu_id'];
      $data['position'] = Page::getNextPositionByMenuId($menuId);  
      $data = Page::validateMainPage($data);
      $data = Page::validateParentPublished($data);

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
