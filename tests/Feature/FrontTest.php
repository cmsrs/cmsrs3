<?php

namespace Tests\Feature;

use Tests\TestCase;
use Illuminate\Foundation\Testing\RefreshDatabase;

use App\Page;
use App\Menu;
use Illuminate\Support\Str;


class FrontTest extends Base
{

    //use DatabaseMigrations;
    use RefreshDatabase;

    //private $token;
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
        $response->assertStatus(200);
    }



    /** @test */
    public function it_will_get_cms_page()
    {
        $title = $this->testData['title'];
        $pageSlug = Str::slug($title);
        //print_r($slugTitle);

        $menuName = $this->testDataMenu['name'];
        $menuSlug = Str::slug($menuName);


        $response = $this->get('/c/'.$menuSlug.'/'.$pageSlug);

        //var_dump($response);
        //die('===');
        $response->assertStatus(200);
    }



}
