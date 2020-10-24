<?php

namespace Tests\Feature;

use Tests\TestCase;
use Illuminate\Foundation\Testing\RefreshDatabase;

use App\Page;
use App\Menu;
use Illuminate\Support\Str;


class FrontGuestTest extends TestCase
{

    public function setUp(): void
    {
        putenv('LANGS="en"');
        parent::setUp();
    }


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
    public function get_footer_links_2()
    {
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


        
        $pPrivacy = [
            'title'     => 'Privacy policy',
            'short_title' => 'Privacy policy',
            'description' => 'Description... Needed for google',
            'published' => 1,
            'commented' => 0,
            'type' => 'privacy_policy',
            'content' => 'jakies belkot prawniczy',
            'images' => [
            ]
        ];


        $mContact = Menu::wrapCreate(['name' => 'Contact']);        
        $pContact = [
            'title'     => 'Contact form',
            'short_title' => 'Contact',
            'description' => 'Description... Needed for google',
            'published' => 1,
            'commented' => 0,
            'type' => 'contact',
            'content' => '',
            'menu_id' => $mContact->id,
            'images' => [
            ]
        ];
        
        Page::wrapCreate($testData2);
        Page::wrapCreate($pPrivacy);                
        Page::wrapCreate($pContact);

        //$pArr = Page::all()->toArray();
        //dump($pArr);
        //die('ggg');

        $footerPages = Page::getFooterPages();
        //dd($footerPages);
        
        //$p = $footerPages['privacy_policy'];
        //$url = $p->getSeparateUrl();
        //$url = $p->getUrl();        
        //dd($url);
        //$url2 = $footerPages['privacy_policy']->getUrl();

        $this->assertNotEmpty($footerPages['policyUrl']);
        $this->assertNotEmpty($footerPages['policyTitle']);        
        $this->assertNotEmpty($footerPages['contactUrl']);
        $this->assertNotEmpty($footerPages['contactTitle']);        

        //$this->assertSame($url, $url2);
        //dd($footerPages);

        $response = $this->get( $footerPages['policyUrl'] );
        //dd($response);        
        $response->assertStatus(200);

        $response2 = $this->get( $footerPages['contactUrl'] );
        //dd($response2);

        $response2->assertStatus(200);

    }



    /** @test */
    public function it_will_link_0(){
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

        // $menuName = $testDataMenu['name'];
        // $menuSlug = Str::slug($menuName);
        //$url1 = $p1->getUrl($m1->slug);
        $url1 = $p1->getUrl();        
        $this->assertSame('/c/'.$m1->slug.'/'.$page1Slug, $url1);    

        //$response1 = $this->get('/c/'.$menuSlug.'/'.$page1Slug);
        //dump($url1);
        $response1 = $this->get($url1 );
        //dd($response1);
        $response1->assertStatus(200);            

        //$response2 = $this->get('/c/'.$menuSlug.'/'.$page2Slug);
        //$url2 = $p2->getUrl($m1->slug);
        $url2 = $p2->getUrl();        
        $this->assertSame('/c/'.$m1->slug.'/'.$page2Slug, $url2);    
        $response2 = $this->get($url2);
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


        // $page1Slug = Str::slug($data1p['title']);
        // $page2Slug = Str::slug($data2p['title']);        

        // $menuName = $testDataMenu['name'];
        // $menuSlug = Str::slug($menuName);


        //$response1 = $this->get($p1->getUrl($m1->slug));
        $response1 = $this->get($p1->getUrl());        
        $response1->assertStatus(401);            
        //$response2 = $this->get($p2->getUrl($m1->slug));
        $response2 = $this->get($p2->getUrl());        
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


        //$response1 = $this->get($m1->getUrl()  ) ;
        $response1 = $this->get($p1->getUrl()  ) ;        
        $response1->assertStatus(401);      

        $response1 = $this->get($p2->getUrl()  ) ;        
        $response1->assertStatus(404);      


        //$response11 = $this->get('/c/'.$menuSlug.'/'.$page1Slug);
        //$response11->assertStatus(404);            

        //$response2 = $this->get('/c/'.$menuSlug.'/'.$page2Slug);
        //$response2->assertStatus(404);            
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


        //$response1 = $this->get($m1->getUrl());
        $response1 = $this->get($p1->getUrl());        
        $response1->assertStatus(200);

        $response2 = $this->get($p2->getUrl());        
        $response2->assertStatus(404);

        //$//response11 = $this->get('/c/'.$menuSlug.'/'.$page1Slug);
        //$response11->assertStatus(404);            

        //$response2 = $this->get('/c/'.$menuSlug.'/'.$page2Slug);
        //$response2->assertStatus(404);            
        

    }
    

}
