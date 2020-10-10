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
            'after_login' => 0,
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
    public function it_will_get_cms_page()
    {
        $title = $this->testData['title'];
        $pageSlug = Str::slug($title);

        $menuName = $this->testDataMenu['name'];
        $menuSlug = Str::slug($menuName);


        $response = $this->get('/c/'.$menuSlug.'/'.$pageSlug);

        $response->assertStatus(200);
    }
}