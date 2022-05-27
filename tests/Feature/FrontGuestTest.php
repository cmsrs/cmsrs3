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
        putenv('API_SECRET=""');
        parent::setUp();
    }

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
        $page = Page::getFirstPageByType('login');
        $pageTitle = $page->translatesByColumnAndLang('title', $lang);
        $pageShortTitle = $page->translatesByColumnAndLang('short_title', $lang);
        $this->assertNotEmpty($pageTitle);
        $this->assertNotEmpty($pageShortTitle);

        $urlLogin = $page->getUrl($lang);
        $response = $this->get($urlLogin);
        $response->assertStatus(200);
        
        $pos = strpos($response->getContent(), $pageTitle);
        $this->assertNotEmpty($pos, $pageTitle);
    }

    /** @test */
    public function it_will_redirect_to_login()
    {
        $response1 = $this->get('/home');
        $response1->assertStatus(302);
        $response1->assertRedirect('/login');

        //$response2 = $this->get('home/orders');
        //$response2->assertStatus(302);        
        //$response2->assertRedirect('/login');

        //$response3 = $this->get('home/basket');
        //$response3->assertStatus(302);        
        //$response3->assertRedirect('/login');


        $response3b = $this->get('home/basketbb');
        $response3b->assertStatus(404);        
    }


    /** @test */
    public function it_will_get_as_guest_forbiden()
    {
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
            'type' => 'main_page',
            'content' => 'main page',
            'menu_id' => null,
            'page_id' => null
        ];
        (new Page)->wrapCreate($testData2);

        $response = $this->get('/');
        $response->assertStatus(401);
    }


    /** @test */
    public function it_will_get_main_page_as_guest_normal()
    {
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
            'type' => 'main_page',
            'content' =>['en' => 'main page'],
            'menu_id' => null,
            'page_id' => null
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
            'type' => 'main_page',
            'content' =>  ['en' =>'main page'],
            'menu_id' => null,
            'page_id' => null
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


        $footerPages = Page::getFooterPages('en');

        $this->assertNotEmpty($footerPages['policyUrl']);
        $this->assertNotEmpty($footerPages['policyTitle']);
        $this->assertNotEmpty($footerPages['contactUrl']);
        $this->assertNotEmpty($footerPages['contactTitle']);


        $response = $this->get($footerPages['policyUrl']);
        $response->assertStatus(200);

        $response2 = $this->get($footerPages['contactUrl']);
        $response2->assertStatus(200);
    }



    /** @test */
    public function it_will_link_0()
    {
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

        $url1 = $p1->getUrl('en');

        $this->assertSame('/'.Page::PREFIX_CMS_URL.'/'.$m1->getSlugByLang('en').'/'.$page1Slug, $url1);

        $response1 = $this->get($url1);
        $response1->assertStatus(200);

        $url2 = $p2->getUrl('en');
        $this->assertSame('/'.Page::PREFIX_CMS_URL.'/'.$m1->getSlugByLang('en').'/'.$page2Slug, $url2);
        $response2 = $this->get($url2);
        $response2->assertStatus(200);
    }


    /** @test */
    public function it_will_link_forbid()
    {
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


        $response1 = $this->get($p1->getUrl('en'));
        $response1->assertStatus(401);
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

        $response1 = $this->get($p1->getUrl('en')) ;
        $response1->assertStatus(401);

        $url2 = $p2->getUrl('en');
        $response1 = $this->get($p2->getUrl('en'));
        $response1->assertStatus(404);
        //$response1->assertStatus(401); //moze powinno byc 
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


        $response1 = $this->get($p1->getUrl('en'));
        $response1->assertStatus(200);

        $response2 = $this->get($p2->getUrl('en'));
        $response2->assertStatus(200);
    }
}
