<?php

namespace Tests\Feature;

use Tests\TestCase;
use Illuminate\Foundation\Testing\RefreshDatabase;

use App\Page;
use App\Menu;
use Illuminate\Support\Str;


class FrontTest extends Base
{
    use RefreshDatabase;

    private $testData;
    private $testDataMenu;
    private $menuId;
    private $menuObj;    


    public function setUp(): void
    {
        putenv('LANGS="en"');      
        parent::setUp();
        $this->createUser();


        $this->testDataMenu =
        [
             'name'     => 'test men7 zółć',
             'position' => 1
        ];

        $menu = new Menu($this->testDataMenu);

        
        $save = $menu->save();
        $this->menuObj =$menu;
        $this->assertTrue($save);

        $this->menuId = $menu->all()->first()->id;


        $this->testData =
        [
            'title' => 'page 1 test test slug',
            'short_title' => 'page1',
            'published' => 1,
            'position' => 7,
            'type' => 'cms',
            'content' => 'content test133445',
            'menu_id' => $this->menuId
        ];

        $page = new Page($this->testData);

        $page->save();
    }

    protected function tearDown(): void
    {
        parent::tearDown();
    }


    /**
     * maybe it will be usefull for sitemap
     * links without: home, login, logout
     */
    /** @test */
    public function it_will_get_all_pages_status()
    {
      //$parentId = $this->dateToTestParent( $this->objMenu->id );
      $this->setDemoDataMenusAndPages();


      //cms link
      //see in: resources/views/includes/header.blade.php
      //maybe this logic - move to another file
      $url = [];
      $menus = Menu::All();
      $f0 = false;
      $f1 = false;      
      $f2 = false;            
      //print_r($menus->toArray());
      foreach ($menus as $menu) { 
        $pagesPublishedAndAccess = $menu->pagesPublishedAndAccess()->get();
        if( 1 == $pagesPublishedAndAccess->count() ){ 
          $f0 = true;
          $url[] = $pagesPublishedAndAccess->first()->getUrl();
        }else{
          foreach ($menu->pagesPublishedTree($pagesPublishedAndAccess) as $page) {
                $url[] = $page->getUrl();
                $f1 = true;
                if( !empty($page['children']) && !empty($page->published) ){
                    foreach ($page['children'] as $p) {
                        $f2 = true;                      
                        $url[] = $p->getUrl();
                    }
                }
          }
        }
      }
      $this->assertTrue($f0);
      $this->assertTrue($f1);
      $this->assertTrue($f2);

      foreach( $url as $u){
        $response = $this->get($u);
        //dump($u);
        $response->assertStatus(200);          
      }

      //independent
      $url2 = Page::getFirstPageByType('privacy_policy' )->getUrl();
      $response2 = $this->get($url2);
      $response2->assertStatus(200);          
      
      //$urlLogin = route('login');
      //$response3 = $this->get($urlLogin);
      //$response3->assertStatus(200);          

    }



    /** @test */
    public function it_will_check_set_up()
    {
      $response = $this->get('api/pages?token='.$this->token );
      $res = $response->getData();
      $this->assertTrue( $res->success );
      $this->assertEquals( count($res->data), 1);
    }

    /** @test */
    public function it_will_get_main_page()
    {
        //$this->assertTrue( true );
        $response = $this->get('/');
        $response->assertStatus(404);

        $testData2 =
        [
            'title'     => 'cmsRS',
            'short_title' => 'cmsRS',
            'description' => 'cmsRS',
            'published' => 1,
            'commented' => 0,
            'after_login' => 1,
            //'position' => 3,
            'type' => 'main_page',
            'content' => 'main page',
            'menu_id' => null,
            'page_id' => null
            //'images' => []
        ];
  
        $response = $this->post('api/pages?token='.$this->token, $testData2);
  
        $res = $response->getData();
        $this->assertTrue( $res->success );      

        $response = $this->get('/');
        $response->assertStatus(200);          
    }


    /** @test */
    public function it_will_get_cms_page0()
    {
        $title = $this->testData['title'];
        $pageSlug = Str::slug($title);

        $menuName = $this->testDataMenu['name'];
        $menuSlug = Str::slug($menuName);

        $p0 = Page::query()->where('menu_id', $this->menuId)->get()->first();
        $this->assertNotEmpty($p0);
        //$this->assertEquals(1, $p0->count());

        //$url = $p0->getUrl();
        $url =  $p0->getUrl();

        //$response = $this->get('/c/'.$menuSlug.'/'.$pageSlug);
        //$response->assertStatus(404);
        
        $response1 = $this->get($url);
        $response1->assertStatus(200);
    }

    /** @test */
    public function it_will_get_cms_page()
    {
        $title = $this->testData['title'];
        $pageSlug = Str::slug($title);

        $menuName = $this->testDataMenu['name'];
        $menuSlug = Str::slug($menuName);

        $p0 = Page::query()->where('menu_id', $this->menuId)->get(); //->toArray();
        $this->assertEquals(1, $p0->count());

        //not working - see this it_will_get_cms_page0 (this work)
        // $response = $this->get('/c/'.$menuSlug.'/'.$pageSlug);
        // $response->assertStatus(404);
        
        // $response1 = $this->get('/'.$menuSlug);
        // $response1->assertStatus(200);


        $testData2 =
        [
            'title'     => 'cmsRS',
            'short_title' => 'cmsRS',
            'description' => 'cmsRS',
            'published' => 1,
            'commented' => 0,
            'after_login' => 1,
            //'position' => 3,
            'type' => 'cms',
            'content' => 'main page',
            'menu_id' => $this->menuId,
            'page_id' => null
            //'images' => []
        ];
  
        $response = $this->post('api/pages?token='.$this->token, $testData2);
  
        $res = $response->getData();
        $this->assertTrue( $res->success );      

        $p = Page::query()->where('menu_id', $this->menuId)->get(); //->toArray();
        $this->assertEquals(2, $p->count()  );

        //dd($this->menuObj->slug);
        $i = 0;
        foreach( $p as $pp){
            //$url0 = $pp->getUrl($this->menuObj->slug);
            $url0 = $pp->getUrl();            
            $response = $this->get($url0);
            $response->assertStatus(200);
            $i++;
        }
        $this->assertEquals(2, $i );        

        
        $responseB = $this->get('/'.$menuSlug);
        $responseB->assertStatus(404);

    }
}