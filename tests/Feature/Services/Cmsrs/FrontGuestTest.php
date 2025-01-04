<?php

namespace Tests\Feature\Services\Cmsrs;

use App\Models\Cmsrs\Page;
use App\Services\Cmsrs\MenuService;
use App\Services\Cmsrs\PageService;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Str;

class FrontGuestTest extends Base
{
    const SHORT_TITLE1 = 'About me short_x123';

    const SHORT_TITLE2 = 'About page short_x123';

    protected function setUp(): void
    {
        putenv('LANGS="en"');
        putenv('API_SECRET=""');
        putenv('CURRENCY="USD"');
        putenv('CACHE_ENABLE=false');
        putenv('CACHE_ENABLE_FILE="app/cache_enable_test.txt"');
        putenv('DEMO_STATUS=false');
        putenv('IS_SHOP=true');
        putenv('IS_LOGIN=true');
        putenv('IS_REGISTER=true');

        parent::setUp();
    }

    use RefreshDatabase;

    public function test_it_will_get_login_page()
    {
        $this->markTestSkipped('login page is not cms page, now it is base on laravel/fortify');

        $pLogin = [
            'title' => ['en' => 'login', 'pl' => 'login'],
            'short_title' => ['en' => 'login', 'pl' => 'login'],
            'description' => ['en' => 'Description... Needed for google', 'pl' => 'Opis..... Potrzebne dla googla'],
            'published' => 1,
            'commented' => 0,
            'type' => 'login',
            'images' => [
            ],
        ];
        $p = (new PageService)->wrapCreate($pLogin);
        $this->assertNotEmpty($p->id);

        $lang = 'en';
        $page = PageService::getFirstPageByType('login');
        $pageTitle = (new PageService)->translatesByColumnAndLang($page, 'title', $lang);
        $pageShortTitle = (new PageService)->translatesByColumnAndLang($page, 'short_title', $lang);
        $this->assertNotEmpty($pageTitle);
        $this->assertNotEmpty($pageShortTitle);

        $urlLogin = (new PageService)->getUrl($page, $lang);
        $response = $this->get($urlLogin);
        $response->assertStatus(200);

        $pos = strpos($response->getContent(), $pageTitle);
        $this->assertNotEmpty($pos, $pageTitle);
    }

    public function test_it_will_redirect_to_login()
    {
        $response1 = $this->get('/home');
        $response1->assertStatus(302);
        $response1->assertRedirect('/login');

        // $response2 = $this->get('home/orders');
        // $response2->assertStatus(302);
        // $response2->assertRedirect('/login');

        // $response3 = $this->get('home/basket');
        // $response3->assertStatus(302);
        // $response3->assertRedirect('/login');

        $response3b = $this->get('home/basketbb');
        $response3b->assertStatus(404);
    }

    public function test_it_will_get_as_guest_forbidden()
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

    public function test_it_will_get_main_page_as_guest_forbidden()
    {
        $response = $this->get('/');
        $response->assertStatus(404);

        $testData2 =
        [
            'title' => ['en' => 'cmsRS'],
            'short_title' => ['en' => 'cmsRS'],
            'description' => ['en' => 'cmsRS'],
            'published' => 1,
            'commented' => 0,
            'after_login' => 1,
            'type' => 'main_page',
            'content' => 'main page',
            'menu_id' => null,
            'page_id' => null,
        ];
        (new PageService)->wrapCreate($testData2);

        $response = $this->get('/');
        $response->assertStatus(401);
    }

    public function test_it_will_get_main_page_as_guest_normal()
    {
        $response = $this->get('/');
        $response->assertStatus(404);

        $testData2 =
        [
            'title' => ['en' => 'cmsRS'],
            'short_title' => ['en' => 'cmsRS'],
            'description' => ['en' => 'cmsRS'],
            'published' => 1,
            'commented' => 0,
            'after_login' => 0,
            'type' => 'main_page',
            'content' => ['en' => 'main page'],
            'menu_id' => null,
            'page_id' => null,
        ];
        (new PageService)->wrapCreate($testData2);

        $response = $this->get('/');
        $response->assertStatus(200);
    }

    public function test_get_footer_links_2()
    {
        $testData2 =
        [
            'title' => ['en' => 'cmsRS'],
            'short_title' => ['en' => 'cmsRS'],
            'description' => ['en' => 'cmsRS'],
            'published' => 1,
            'commented' => 0,
            'after_login' => 0,
            'type' => 'main_page',
            'content' => ['en' => 'main page'],
            'menu_id' => null,
            'page_id' => null,
        ];

        $pPrivacy = [
            'title' => ['en' => 'Privacy policy'],
            'short_title' => ['en' => 'Privacy policy'],
            'description' => ['en' => 'Description... Needed for google'],
            'published' => 1,
            'commented' => 0,
            'type' => 'privacy_policy',
            'content' => ['en' => 'jakies belkot prawniczy'],
            'images' => [
            ],
        ];

        $mContact = (new MenuService)->wrapCreate(['name' => ['en' => 'Contact']]);
        $pContact = [
            'title' => ['en' => 'Contact form'],
            'short_title' => ['en' => 'Contact'],
            'description' => ['en' => 'Description... Needed for google'],
            'published' => 1,
            'commented' => 0,
            'type' => 'contact',
            'content' => '',
            'menu_id' => $mContact->id,
            'images' => [
            ],
        ];

        (new PageService)->wrapCreate($testData2);
        (new PageService)->wrapCreate($pPrivacy);
        (new PageService)->wrapCreate($pContact);

        $footerPages = (new PageService)->getFooterPages('en');

        $this->assertNotEmpty($footerPages['policyUrl']);
        $this->assertNotEmpty($footerPages['policyTitle']);
        $this->assertNotEmpty($footerPages['contactUrl']);
        $this->assertNotEmpty($footerPages['contactTitle']);

        $response = $this->get($footerPages['policyUrl']);
        $response->assertStatus(200);

        $response2 = $this->get($footerPages['contactUrl']);
        $response2->assertStatus(200);
    }

    public function test_it_will_link_0()
    {
        $testDataMenu = ['name' => ['en' => 'About']];
        $m1 = (new MenuService)->wrapCreate($testDataMenu);

        $short1 = self::SHORT_TITLE1;
        $data1p = [
            'title' => ['en' => 'About me'],
            'short_title' => ['en' => $short1],
            'description' => ['en' => 'Description... Needed for google'],
            'published' => 1,
            'commented' => 0,
            'type' => 'cms',
            'content' => ['en' => 'testt44'],
            'menu_id' => $m1->id,
            'images' => [
            ],
        ];

        $short2 = self::SHORT_TITLE2;
        $data2p = [
            'title' => ['en' => 'About page'],
            'short_title' => ['en' => $short2],
            'description' => ['en' => 'Description... Needed for google'],
            'published' => 1,
            'commented' => 0,
            'type' => 'cms',
            'content' => ['en' => 'testt66'],
            'menu_id' => $m1->id,
            'images' => [
            ],
        ];

        $p1 = (new PageService)->wrapCreate($data1p);
        $p2 = (new PageService)->wrapCreate($data2p);

        $page1Slug = (new PageService)->getSlugByLang($p1, 'en'); // Str::slug($data1p['title']['en']);
        $page2Slug = (new PageService)->getSlugByLang($p2, 'en'); // Str::slug($data2p['title']['en']);

        $url1 = (new PageService)->getUrl($p1, 'en');

        $this->assertSame('/'.Page::PREFIX_CMS_URL.'/'.(new MenuService)->getSlugByLang($m1, 'en').'/'.$page1Slug, $url1);

        $response1 = $this->get($url1);
        $response1->assertStatus(200);

        $url2 = (new PageService)->getUrl($p2, 'en');
        $this->assertSame('/'.Page::PREFIX_CMS_URL.'/'.(new MenuService)->getSlugByLang($m1, 'en').'/'.$page2Slug, $url2);
        $response2 = $this->get($url2);
        $response2->assertStatus(200);

        $content = $response2->getContent();
        $this->assertStringContainsString($short1, $content, "String doesn't contain text=$short1");
        $this->assertStringContainsString($short2, $content, "String doesn't contain text=$short2");

    }

    public function test_it_will_link_forbid()
    {
        $testDataMenu = ['name' => ['en' => 'About']];
        $m1 = (new MenuService)->wrapCreate($testDataMenu);

        $data1p = [
            'title' => ['en' => 'About me'],
            'short_title' => ['en' => 'About me'],
            'description' => ['en' => 'Description... Needed for google'],
            'published' => 1,
            'commented' => 0,
            'after_login' => 1,
            'type' => 'cms',
            'content' => ['en' => 'testt44'],
            'menu_id' => $m1->id,
            'images' => [
            ],
        ];

        $data2p = [
            'title' => ['en' => 'About page'],
            'short_title' => ['en' => 'About page'],
            'description' => ['en' => 'Description... Needed for google'],
            'published' => 1,
            'commented' => 0,
            'after_login' => 1,
            'type' => 'cms',
            'content' => ['en' => 'testt66'],
            'menu_id' => $m1->id,
            'images' => [
            ],
        ];

        $p1 = (new PageService)->wrapCreate($data1p);
        $p2 = (new PageService)->wrapCreate($data2p);

        $response1 = $this->get((new PageService)->getUrl($p1, 'en'));
        $response1->assertStatus(401);
        $response2 = $this->get((new PageService)->getUrl($p2, 'en'));
        $response2->assertStatus(401);

        $content = $response2->getContent();
        $short1 = self::SHORT_TITLE1;
        $short2 = self::SHORT_TITLE2;
        $this->assertStringNotContainsString($short1, $content, "String does contain text=$short1 in menu - header");
        $this->assertStringNotContainsString($short2, $content, "String does contain text=$short2 in menu - header");
    }

    public function test_it_will_one_link_in_menu_forbid()
    {
        $testDataMenu = ['name' => ['en' => 'Contact']];
        $m1 = (new MenuService)->wrapCreate($testDataMenu);

        $data1p = [
            'title' => ['en' => 'Contact me'],
            'short_title' => ['en' => 'Contact me'],
            'description' => ['en' => 'Description... Needed for google'],
            'published' => 1,
            'commented' => 0,
            'after_login' => 1,
            'type' => 'cms',
            'content' => ['en' => 'testt44'],
            'menu_id' => $m1->id,
            'images' => [
            ],
        ];

        $data2p = [
            'title' => ['en' => 'test unpublished'],
            'short_title' => ['en' => 'test unpublished'],
            'description' => ['en' => 'Description... Needed for google'],
            'published' => 0,
            'commented' => 0,
            'after_login' => 1,
            'type' => 'cms',
            'content' => ['en' => 'testt66'],
            'menu_id' => $m1->id,
            'images' => [
            ],
        ];

        $menuName = $testDataMenu['name']['en'];
        $menuSlug = Str::slug($menuName);

        $p1 = (new PageService)->wrapCreate($data1p);
        $p2 = (new PageService)->wrapCreate($data2p);

        $page1Slug = Str::slug($data1p['title']['en']);
        $page2Slug = Str::slug($data2p['title']['en']);

        $response1 = $this->get((new PageService)->getUrl($p1, 'en'));
        $response1->assertStatus(401);

        $url2 = (new PageService)->getUrl($p2, 'en');
        $response1 = $this->get($url2);
        $response1->assertStatus(404);
        // $response1->assertStatus(401); // This might need to be checked, possibly should be different
    }

    public function test_it_will_one_link_in_menu_normal()
    {
        $testDataMenu = ['name' => ['en' => 'Contact']];
        $m1 = (new MenuService)->wrapCreate($testDataMenu);

        $short1 = 'Contact me short1xyz';
        $data1p = [
            'title' => ['en' => 'Contact me'],
            'short_title' => ['en' => $short1],
            'description' => ['en' => 'Description... Needed for google'],
            'published' => 1,
            'commented' => 0,
            'after_login' => 0,
            'type' => 'cms',
            'content' => ['en' => 'testt44'],
            'menu_id' => $m1->id,
            'images' => [
            ],
        ];

        $data2p = [
            'title' => ['en' => 'test unpublished'],
            'short_title' => ['en' => 'test unpublished'],
            'description' => ['en' => 'Description... Needed for google'],
            'published' => 0,
            'commented' => 0,
            'after_login' => 1,
            'type' => 'cms',
            'content' => ['en' => 'testt66'],
            'menu_id' => $m1->id,
            'images' => [
            ],
        ];

        $menuName = $testDataMenu['name']['en'];
        $menuSlug = Str::slug($menuName);

        $p1 = (new PageService)->wrapCreate($data1p);
        $p2 = (new PageService)->wrapCreate($data2p);

        $page1Slug = Str::slug($data1p['title']['en']);
        $page2Slug = Str::slug($data2p['title']['en']);

        $response1 = $this->get((new PageService)->getUrl($p1, 'en'));
        $response1->assertStatus(200);

        $response2 = $this->get((new PageService)->getUrl($p2, 'en'));
        $response2->assertStatus(200);

        $content = $response2->getContent();
        $this->assertStringContainsString($short1, $content, "String doesn't contain text=$short1");
    }

    public function test_it_launches_login_page_200()
    {
        $response = $this->get('/login');
        $response->assertStatus(200);

    }

    public function test_it_will_change_lang_home_page()
    {
        $response1 = $this->get('/home');
        //dd($response1);
        $response1->assertStatus(302);      

        $redirectUrl = $response1->headers->get('Location');
        $this->assertEquals('http://localhost/login', $redirectUrl);        
    }


    public function test_it_launches_login_one_lang_200()
    {
        $response3 = $this->get('/login?lang=en');
        $response3->assertStatus(200);

        $response2 = $this->get('/login?lang=pl');
        $response2->assertStatus(200);
    }


    public function test_it_launches_register_page_200()
    {
        $response = $this->get('/register');
        $response->assertStatus(200);
    }

    public function test_it_launches_register_one_lang_404()
    {
        $response2 = $this->get('/register?lang=pl');
        $response2->assertStatus(200);

        $response3 = $this->get('/register?lang=en');
        $response3->assertStatus(200);
    }

    public function test_it_launches_post_login_page_302()
    {
        $this->createClientUser();
        $data = [
            '_token' => 'ZmfOpggMnFoJbhqCKYADeTrYcEGlYIHFyLWa89wP',
            'email' => 'client@email.com',
            'password' => 'client1234',
        ];

        $response = $this->post('/login', $data);
        $response->assertStatus(302);

        $redirectUrl = $response->headers->get('Location');
        $this->assertEquals('http://localhost/home', $redirectUrl);
    }

    public function test_it_launches_post_register_page_302()
    {
        $data = [
            '_token' => 'ZmfOpggMnFoJbhqCKYADeTrYcEGlYIHFyLWa89wP',
            'name' => 'rob',
            'email' => 'test@example.com',
            'password' => 'qwerty123',
            'password_confirmation' => 'qwerty123',
        ];

        $response = $this->post('/register', $data);
        $response->assertStatus(302);

        $redirectUrl = $response->headers->get('Location');
        $this->assertEquals('http://localhost/home', $redirectUrl);
    }
}
