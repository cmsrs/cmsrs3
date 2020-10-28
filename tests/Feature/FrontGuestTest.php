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
    public function it_will_get_login_page()
    {
        $pLogin = [
            'title'     => [ "en" =>'login', "pl" => "login" ],
            'short_title' => [ "en" =>'login', "pl" => "login"],
            'description' => [ "en" =>'Description... Needed for google', "pl" => 'Opis..... Potrzebne dla googla'  ],
            'published' => 1,
            'commented' => 0,
            'type' => 'login',
            'images' => [
            ]
        ];
        $p = (new Page)->wrapCreate($pLogin);
        $this->assertNotEmpty($p->id);

        $lang = 'en';
		$page = Page::getFirstPageByType('login' );
        $pageTitle = $page->translatesByColumnAndLang( 'title', $lang );
        $pageShortTitle = $page->translatesByColumnAndLang( 'short_title', $lang );
        $this->assertNotEmpty($pageTitle);
        $this->assertNotEmpty($pageShortTitle);                        

		$urlLogin = $page->getUrl($lang);
		$response = $this->get($urlLogin);
		$response->assertStatus(200);            
		
        $pos = strpos( $response->getContent(), $pageTitle );
        $this->assertNotEmpty($pos, $pageTitle);

    }


    /** @test */
    public function it_will_get_as_guest_forbiden()
    {
        //$this->assertTrue( true );
        $response = $this->get('/pl/cms/test/dsas');
        $response->assertStatus(404);

        $response = $this->get('/en');
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
            'title'     =>  ['en' => 'cmsRS'],
            'short_title' =>  ['en' => 'cmsRS'],
            'description' =>  ['en' => 'cmsRS'],
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
        (new Page)->wrapCreate($testData2);

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
            'title'     => ['en' =>'cmsRS'],
            'short_title' => ['en' =>'cmsRS'],
            'description' => ['en' =>'cmsRS'],
            'published' => 1,
            'commented' => 0,
            'after_login' => 0,
            //'position' => 3,
            'type' => 'main_page',
            'content' =>['en' => 'main page'],
            'menu_id' => null,
            'page_id' => null
            //'images' => []
        ];
        (new Page)->wrapCreate($testData2);

        $response = $this->get('/');
        $response->assertStatus(200);        
    }

    /** @test */    
    public function get_footer_links_2()
    {
        $testData2 =
        [
            'title'     =>  ['en' =>'cmsRS'],
            'short_title' =>  ['en' =>'cmsRS'],
            'description' =>  ['en' =>'cmsRS'],
            'published' => 1,
            'commented' => 0,
            'after_login' => 0,
            //'position' => 3,
            'type' => 'main_page',
            'content' =>  ['en' =>'main page'],
            'menu_id' => null,
            'page_id' => null
            //'images' => []
        ];


        
        $pPrivacy = [
            'title'     =>  ['en' =>'Privacy policy'],
            'short_title' =>  ['en' =>'Privacy policy'],
            'description' =>  ['en' =>'Description... Needed for google'],
            'published' => 1,
            'commented' => 0,
            'type' => 'privacy_policy',
            'content' =>  ['en' =>'jakies belkot prawniczy'],
            'images' => [
            ]
        ];


        $mContact = (new Menu)->wrapCreate(['name' =>  ['en' =>'Contact']]);        
        $pContact = [
            'title'     =>  ['en' =>'Contact form'],
            'short_title' =>  ['en' =>'Contact'],
            'description' =>  ['en' =>'Description... Needed for google'],
            'published' => 1,
            'commented' => 0,
            'type' => 'contact',
            'content' => '',
            'menu_id' => $mContact->id,
            'images' => [
            ]
        ];
        
        (new Page)->wrapCreate($testData2);
        (new Page)->wrapCreate($pPrivacy);                
        (new Page)->wrapCreate($pContact);

        //$pArr = Page::all()->toArray();
        //dump($pArr);
        //die('ggg');

        $footerPages = Page::getFooterPages('en');
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
        //dd($footerPages['policyUrl'] );        

        $response2 = $this->get( $footerPages['contactUrl'] );
        //dd($footerPages['contactUrl']);


        $response2->assertStatus(200);

    }



    /** @test */
    public function it_will_link_0(){
        $testDataMenu = ['name' =>  ['en' => 'About']];
        $m1 = (new Menu)->wrapCreate($testDataMenu);
        
        $data1p = [
            'title'     =>  ['en' => 'About me'],
            'short_title' =>  ['en' => 'About me'],
            'description' =>   ['en' => 'Description... Needed for google'],
            'published' => 1,
            'commented' => 0,
            'type' => 'cms',
            'content' =>  ['en' => 'testt44'],
            'menu_id' => $m1->id,
            'images' => [
            ]
        ];

        $data2p = [
            'title'     =>  ['en' => 'About page'],
            'short_title' =>   ['en' => 'About page'],
            'description' =>    ['en' => 'Description... Needed for google'],
            'published' => 1,
            'commented' => 0,
            'type' => 'cms',
            'content' =>  ['en' => 'testt66'],
            'menu_id' => $m1->id,
            'images' => [
            ]
        ];

        
        $p1 = (new Page)->wrapCreate($data1p);
        $p2 = (new Page)->wrapCreate($data2p);        

        $page1Slug = $p1->getSlugByLang('en'); //Str::slug($data1p['title']['en']);
        $page2Slug = $p2->getSlugByLang('en'); //Str::slug($data2p['title']['en']);        

        // $menuName = $testDataMenu['name'];
        // $menuSlug = Str::slug($menuName);
        //$url1 = $p1->getUrl($m1->slug);
        $url1 = $p1->getUrl('en');        

        $this->assertSame('/'.Page::PREFIX_CMS_URL.'/'.$m1->getSlugByLang('en').'/'.$page1Slug, $url1);    

        //$response1 = $this->get('/c/'.$menuSlug.'/'.$page1Slug);
        //dump($url1);
        $response1 = $this->get($url1 );
        //dd($response1);
        $response1->assertStatus(200);            

        //$response2 = $this->get('/c/'.$menuSlug.'/'.$page2Slug);
        //$url2 = $p2->getUrl($m1->slug);
        $url2 = $p2->getUrl('en');        
        $this->assertSame('/'.Page::PREFIX_CMS_URL.'/'.$m1->getSlugByLang('en').'/'.$page2Slug, $url2);    
        $response2 = $this->get($url2);
        $response2->assertStatus(200);            

    }


    /** @test */
    public function it_will_link_forbid(){
        $testDataMenu = ['name' =>  ['en' => 'About']];
        $m1 = (new Menu)->wrapCreate($testDataMenu);
        
        $data1p = [
            'title'     =>  ['en' => 'About me'],
            'short_title' =>  ['en' => 'About me'],
            'description' =>  ['en' => 'Description... Needed for google'],
            'published' => 1,
            'commented' => 0,
            'after_login' => 1,
            'type' => 'cms',
            'content' =>   ['en' => 'testt44'],
            'menu_id' => $m1->id,
            'images' => [
            ]
        ];

        $data2p = [
            'title'     =>  ['en' =>  'About page'],
            'short_title' =>   ['en' =>  'About page'],
            'description' =>   ['en' =>  'Description... Needed for google'],
            'published' => 1,
            'commented' => 0,
            'after_login' => 1,
            'type' => 'cms',
            'content' =>  ['en' =>  'testt66'],
            'menu_id' => $m1->id,
            'images' => [
            ]
        ];


        $p1 = (new Page)->wrapCreate($data1p);
        $p2 = (new Page)->wrapCreate($data2p);


        // $page1Slug = Str::slug($data1p['title']);
        // $page2Slug = Str::slug($data2p['title']);        

        // $menuName = $testDataMenu['name'];
        // $menuSlug = Str::slug($menuName);


        //$response1 = $this->get($p1->getUrl($m1->slug));
        $response1 = $this->get($p1->getUrl('en'));        
        $response1->assertStatus(401);            
        //$response2 = $this->get($p2->getUrl($m1->slug));
        $response2 = $this->get($p2->getUrl('en'));        
        $response2->assertStatus(401);            
    }

    /** @test */
    public function it_will_one_link_in_menu_forbid()
    {
        $testDataMenu = ['name' =>   ['en' =>'Contact']];
        $m1 = (new Menu)->wrapCreate($testDataMenu);
        
        $data1p = [
            'title'     =>  ['en' => 'Contact me'],
            'short_title' =>  ['en' =>'Contact me'],
            'description' =>  ['en' =>'Description... Needed for google'],
            'published' => 1,
            'commented' => 0,
            'after_login' => 1,
            'type' => 'cms',
            'content' =>  ['en' =>'testt44'],
            'menu_id' => $m1->id,
            'images' => [
            ]
        ];

        $data2p = [
            'title'     =>  ['en' =>  'test unpublished'],
            'short_title' =>   ['en' =>  'test unpublished'],
            'description' =>   ['en' =>  'Description... Needed for google'],
            'published' => 0,
            'commented' => 0,
            'after_login' => 1,
            'type' => 'cms',
            'content' =>   ['en' =>  'testt66'],
            'menu_id' => $m1->id,
            'images' => [
            ]
        ];

        $menuName = $testDataMenu['name']['en'];
        $menuSlug = Str::slug($menuName);

        $p1 = (new Page)->wrapCreate($data1p);
        $p2 = (new Page)->wrapCreate($data2p);

        $page1Slug = Str::slug($data1p['title']['en']);
        $page2Slug = Str::slug($data2p['title']['en']);        


        //$response1 = $this->get($m1->getUrl()  ) ;
        $response1 = $this->get($p1->getUrl('en')  ) ;        
        $response1->assertStatus(401);      

        $response1 = $this->get($p2->getUrl('en')  ) ;        
        $response1->assertStatus(404);      


        //$response11 = $this->get('/c/'.$menuSlug.'/'.$page1Slug);
        //$response11->assertStatus(404);            

        //$response2 = $this->get('/c/'.$menuSlug.'/'.$page2Slug);
        //$response2->assertStatus(404);            
    }

    /** @test */
    public function it_will_one_link_in_menu_normal()
    {
        $testDataMenu = ['name' => ['en' => 'Contact']];
        $m1 = (new Menu)->wrapCreate($testDataMenu);
        
        $data1p = [
            'title'     =>   ['en' =>  'Contact me'],
            'short_title' =>   ['en' =>  'Contact me'],
            'description' =>   ['en' =>  'Description... Needed for google'],
            'published' => 1,
            'commented' => 0,
            'after_login' => 0,
            'type' => 'cms',
            'content' =>  ['en' =>  'testt44'],
            'menu_id' => $m1->id,
            'images' => [
            ]
        ];

        $data2p = [
            'title'     =>   ['en' =>  'test unpublished'],
            'short_title' =>   ['en' =>   'test unpublished'],
            'description' =>   ['en' =>  'Description... Needed for google'],
            'published' => 0,
            'commented' => 0,
            'after_login' => 1,
            'type' => 'cms',
            'content' =>   ['en' =>  'testt66'],
            'menu_id' => $m1->id,
            'images' => [
            ]
        ];

        $menuName = $testDataMenu['name']['en'];
        $menuSlug = Str::slug($menuName);

        $p1 = (new Page)->wrapCreate($data1p);
        $p2 = (new Page)->wrapCreate($data2p);

        $page1Slug = Str::slug($data1p['title']['en']);
        $page2Slug = Str::slug($data2p['title']['en']);        


        //$response1 = $this->get($m1->getUrl());
        $response1 = $this->get($p1->getUrl('en'));        
        $response1->assertStatus(200);

        $response2 = $this->get($p2->getUrl('en'));        
        $response2->assertStatus(404);

        //$//response11 = $this->get('/c/'.$menuSlug.'/'.$page1Slug);
        //$response11->assertStatus(404);            

        //$response2 = $this->get('/c/'.$menuSlug.'/'.$page2Slug);
        //$response2->assertStatus(404);            
        
    }    
}
