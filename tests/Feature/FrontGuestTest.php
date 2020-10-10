<?php

namespace Tests\Feature;

use Tests\TestCase;
use Illuminate\Foundation\Testing\RefreshDatabase;

use App\Page;
use App\Menu;
use Illuminate\Support\Str;


class FrontGuestTest extends TestCase
{

    //use DatabaseMigrations;
    use RefreshDatabase;

    /** @test */
    public function it_will_get_as_guest_forbiden()
    {
        //$this->assertTrue( true );
        $response = $this->get('/pl/cms/test/dsas');
        $response->assertStatus(404);

        $response = $this->get('/pl');
        $response->assertStatus(404);

        $response = $this->get('/pll');
        $response->assertStatus(404);

    }

    /** @test */
    public function it_will_get_main_page_as_guest_forbiden()
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
        Page::wrapCreate($testData2);

        $response = $this->get('/');
        $response->assertStatus(401);        
    }


    /** @test */
    public function it_will_get_main_page_as_guest_normal()
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
        Page::wrapCreate($testData2);

        $response = $this->get('/');
        $response->assertStatus(200);        
    }

    /** @test */
    public function it_will_link(){
        $testDataMenu = ['name' => 'About'];
        $m1 = Menu::wrapCreate($testDataMenu);
        
        $data1p = [
            'title'     => 'About me',
            'short_title' => 'About me',
            'description' => 'Description... Needed for google',
            'published' => 1,
            'commented' => 0,
            'type' => 'cms',
            'content' => 'testt44',
            'menu_id' => $m1->id,
            'images' => [
            ]
        ];

        $p1 = Page::wrapCreate($data1p);

        $pageSlug = Str::slug($data1p['title']);

        $menuName = $testDataMenu['name'];
        $menuSlug = Str::slug($menuName);


        $response = $this->get('/c/'.$menuSlug.'/'.$pageSlug);

        $response->assertStatus(200);            
    }


    /** @test */
    public function it_will_link_forbid(){
        $testDataMenu = ['name' => 'About'];
        $m1 = Menu::wrapCreate($testDataMenu);
        
        $data1p = [
            'title'     => 'About me',
            'short_title' => 'About me',
            'description' => 'Description... Needed for google',
            'published' => 1,
            'commented' => 0,
            'after_login' => 1,
            'type' => 'cms',
            'content' => 'testt44',
            'menu_id' => $m1->id,
            'images' => [
            ]
        ];

        $p1 = Page::wrapCreate($data1p);

        $pageSlug = Str::slug($data1p['title']);

        $menuName = $testDataMenu['name'];
        $menuSlug = Str::slug($menuName);


        $response = $this->get('/c/'.$menuSlug.'/'.$pageSlug);

        $response->assertStatus(401);            
    }


    

}
