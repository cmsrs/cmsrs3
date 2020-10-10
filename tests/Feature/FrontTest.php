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


    public function setUp(): void
    {
        parent::setUp();
        $this->createUser();


        $this->testDataMenu =
        [
             'name'     => 'test men7 zółć',
             'position' => 1
        ];

        $menu = new Menu($this->testDataMenu);
        $save = $menu->save();
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

        $p0 = Page::query()->where('menu_id', $this->menuId)->get()->toArray();
        $this->assertEquals(1, count($p0));


        $response = $this->get('/c/'.$menuSlug.'/'.$pageSlug);
        $response->assertStatus(404);
        
        $response1 = $this->get('/'.$menuSlug);
        $response1->assertStatus(200);
    }

    /** @test */
    public function it_will_get_cms_page()
    {
        $title = $this->testData['title'];
        $pageSlug = Str::slug($title);

        $menuName = $this->testDataMenu['name'];
        $menuSlug = Str::slug($menuName);

        $p0 = Page::query()->where('menu_id', $this->menuId)->get()->toArray();
        $this->assertEquals(1, count($p0));

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

        $p = Page::query()->where('menu_id', $this->menuId)->get()->toArray();
        $this->assertEquals(2, count($p));

        $responseA = $this->get('/c/'.$menuSlug.'/'.$pageSlug);
        $responseA->assertStatus(200);
        
        $responseB = $this->get('/'.$menuSlug);
        $responseB->assertStatus(404);


        $page2Slug = Str::slug($testData2['title']);
        $responseC = $this->get('/c/'.$menuSlug.'/'.$page2Slug);
        $responseC->assertStatus(200);




        // $response2 = $this->get('api/pages?token='.$this->token );
        // $res2 = $response2->getData();
        // $this->assertTrue( $res2->success );
        // dd($res2);

  
        // $response = $this->get('/c/'.$menuSlug.'/'.$pageSlug);
        // $response->assertStatus(200);

        // $response2 = $this->get('/'.$menuSlug);
        // $response2->assertStatus(404);
 
        /*
        $testData3 =
        [
            'title'     => 'cmsRS',
            'short_title' => 'cmsRS',
            'description' => 'cmsRS',
            'published' => 1,
            'commented' => 0,
            'after_login' => 0,
            //'position' => 3,
            'type' => 'main_page',
            'content' => 'main page',
            'menu_id' => $this->menuId,
            'page_id' => null
            //'images' => []
        ];
  
        $response3 = $this->post('api/pages?token='.$this->token, $testData3);
        dd($response3);
  
        $res3 = $response3->getData();
        $this->assertTrue( $res3->success );      

        $p3 = Page::query()->where('menu_id', $this->menuId)->get()->toArray();
        $this->assertEquals(2, count($p3));
        */

    }
}