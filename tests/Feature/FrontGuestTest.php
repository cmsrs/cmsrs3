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

        $data2p = [
            'title'     => 'About page',
            'short_title' => 'About page',
            'description' => 'Description... Needed for google',
            'published' => 1,
            'commented' => 0,
            'type' => 'cms',
            'content' => 'testt66',
            'menu_id' => $m1->id,
            'images' => [
            ]
        ];

        
        $p1 = Page::wrapCreate($data1p);
        $p2 = Page::wrapCreate($data2p);        

        $page1Slug = Str::slug($data1p['title']);
        $page2Slug = Str::slug($data2p['title']);        

        $menuName = $testDataMenu['name'];
        $menuSlug = Str::slug($menuName);


        $response1 = $this->get('/c/'.$menuSlug.'/'.$page1Slug);
        $response1->assertStatus(200);            

        $response2 = $this->get('/c/'.$menuSlug.'/'.$page2Slug);
        $response2->assertStatus(200);            

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

        $data2p = [
            'title'     => 'About page',
            'short_title' => 'About page',
            'description' => 'Description... Needed for google',
            'published' => 1,
            'commented' => 0,
            'after_login' => 1,
            'type' => 'cms',
            'content' => 'testt66',
            'menu_id' => $m1->id,
            'images' => [
            ]
        ];


        $p1 = Page::wrapCreate($data1p);
        $p2 = Page::wrapCreate($data2p);


        $page1Slug = Str::slug($data1p['title']);
        $page2Slug = Str::slug($data2p['title']);        

        $menuName = $testDataMenu['name'];
        $menuSlug = Str::slug($menuName);


        $response1 = $this->get('/c/'.$menuSlug.'/'.$page1Slug);
        $response1->assertStatus(401);            
        $response2 = $this->get('/c/'.$menuSlug.'/'.$page2Slug);
        $response2->assertStatus(401);            
    }

    /** @test */
    public function it_will_one_link_in_menu_forbid()
    {
        $testDataMenu = ['name' => 'Contact'];
        $m1 = Menu::wrapCreate($testDataMenu);
        
        $data1p = [
            'title'     => 'Contact me',
            'short_title' => 'Contact me',
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

        $data2p = [
            'title'     => 'test unpublished',
            'short_title' => 'test unpublished',
            'description' => 'Description... Needed for google',
            'published' => 0,
            'commented' => 0,
            'after_login' => 1,
            'type' => 'cms',
            'content' => 'testt66',
            'menu_id' => $m1->id,
            'images' => [
            ]
        ];

        $menuName = $testDataMenu['name'];
        $menuSlug = Str::slug($menuName);

        $p1 = Page::wrapCreate($data1p);
        $p2 = Page::wrapCreate($data2p);

        $page1Slug = Str::slug($data1p['title']);
        $page2Slug = Str::slug($data2p['title']);        


        $response1 = $this->get('/'.$menuSlug);
        $response1->assertStatus(401);            

        $response11 = $this->get('/c/'.$menuSlug.'/'.$page1Slug);
        $response11->assertStatus(404);            

        $response2 = $this->get('/c/'.$menuSlug.'/'.$page2Slug);
        $response2->assertStatus(404);            
    }

    /** @test */
    public function it_will_one_link_in_menu_normal()
    {
        $testDataMenu = ['name' => 'Contact'];
        $m1 = Menu::wrapCreate($testDataMenu);
        
        $data1p = [
            'title'     => 'Contact me',
            'short_title' => 'Contact me',
            'description' => 'Description... Needed for google',
            'published' => 1,
            'commented' => 0,
            'after_login' => 0,
            'type' => 'cms',
            'content' => 'testt44',
            'menu_id' => $m1->id,
            'images' => [
            ]
        ];

        $data2p = [
            'title'     => 'test unpublished',
            'short_title' => 'test unpublished',
            'description' => 'Description... Needed for google',
            'published' => 0,
            'commented' => 0,
            'after_login' => 1,
            'type' => 'cms',
            'content' => 'testt66',
            'menu_id' => $m1->id,
            'images' => [
            ]
        ];

        $menuName = $testDataMenu['name'];
        $menuSlug = Str::slug($menuName);

        $p1 = Page::wrapCreate($data1p);
        $p2 = Page::wrapCreate($data2p);

        $page1Slug = Str::slug($data1p['title']);
        $page2Slug = Str::slug($data2p['title']);        


        $response1 = $this->get('/'.$menuSlug);
        $response1->assertStatus(200);

        $response11 = $this->get('/c/'.$menuSlug.'/'.$page1Slug);
        $response11->assertStatus(404);            

        $response2 = $this->get('/c/'.$menuSlug.'/'.$page2Slug);
        $response2->assertStatus(404);            
        

    }
    

}
