<?php

namespace Tests\Feature\Services\Cmsrs;

use App\Data\Demo;
//use App\Page;
use App\Models\Cmsrs\Page;
use App\Services\Cmsrs\ConfigService;
use App\Services\Cmsrs\MenuService;
use App\Services\Cmsrs\PageService;
//use App\Menu;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Str;

class FrontLangsTest extends Base
{
    use RefreshDatabase;

    private $testData;

    private $testDataMenu;

    private $menuId;

    private $menuObj;

    private $titleEn = 'eeeeeeeeeeeeeeeennnnnnnnnnnnnnnnn';

    private $titlePl = 'pppppppppppppppplllllllllllllllll';

    private $langs;

    public function setUp(): void
    {
        putenv('LANGS="pl,en"');
        putenv('API_SECRET=""');
        putenv('CURRENCY="USD"');
        putenv('CACHE_ENABLE=false');
        putenv('CACHE_ENABLE_FILE="app/cache_enable_test.txt"');
        putenv('DEMO_STATUS=false');
        putenv('IS_SHOP=true');

        parent::setUp();
        $this->createUser();
        $this->langs = (new ConfigService)->arrGetLangs();

        $this->testDataMenu =
        [
            'name' => ['pl' => 'test men7 zółć',  'en' => 'menu test'],
        ];
    }

    protected function tearDown(): void
    {
        parent::tearDown();
    }

    private function setTestData($pageType = 'cms')
    {
        $menu = (new MenuService)->wrapCreate($this->testDataMenu);

        $this->menuObj = $menu;
        $this->menuId = $menu->id;
        $this->assertNotEmpty($this->menuId);

        $this->testData =
        [
            'title' => ['en' => 'page 1 test test slug', 'pl' => 'strona testowa'],
            'short_title' => ['en' => 'page1', 'pl' => 'strona testowa'],
            'published' => 1,
            'position' => 7,
            'type' => $pageType,
            'content' => ['en' => 'content test133445', 'pl' => 'strona testowa'],
            'menu_id' => $this->menuId,
        ];

        (new PageService)->wrapCreate($this->testData);
    }

    /**
     * this function need $this->menuId so before excecute this function run for ex. setTestData
     */
    private function setTestData2($menu, $pageType = 'cms')
    {
        $this->testData =
        [
            'title' => ['en' => 'page 2 test test slug', 'pl' => 'strona 2 testowa'],
            'short_title' => ['en' => 'page2', 'pl' => 'strona 2 testowa'],
            'published' => 1,
            'position' => 7,
            'type' => $pageType,
            'content' => ['en' => 'content test133445 2', 'pl' => 'strona testowa 2'],
            'menu_id' => $this->menuId,
        ];

        (new PageService)->wrapCreate($this->testData);
    }

    public function test_it_will_change_lang_0()
    {
        $this->setTestData('shop');
        $this->setTestData2('shop');
        $pages = Page::all()->toArray();

        $this->assertEquals(2, count($pages));

        $this->assertNotEmpty($pages[0]['id']);
        $pageId = $pages[0]['id'];

        $response1 = $this->get('/changelang/en/'.$pageId);
        $response1->assertStatus(302);
        $response1->assertRedirect('/en/cms/menu-test/page-1-test-test-slug');

        $response2 = $this->get('/changelang/pl/'.$pageId);
        $response2->assertStatus(302);
        $response2->assertRedirect('/pl/cms/test-men7-zolc/strona-testowa');

        $productTestData = [
            'product_name' => ['en' => 'STR_PRODUCT_NAME_EN', 'pl' => 'STR_PRODUCT_NAME_PL'],
            'sku' => 'AN/34534',
            'price' => 123,
            'product_description' => ['en' => 'STR_PRODUCT_DESCRIPTION_EN',  'pl' => 'STR_PRODUCT_DESCRIPTION_PL'],
            'page_id' => $pageId,
            'published' => 1,
        ];

        $response0 = $this->post('api/products?token='.$this->token, $productTestData);
        $res0 = $response0->getData();
        $this->assertTrue($res0->success);

        $productNameSlug = Str::slug($productTestData['product_name']['en'], '-');

        $response11 = $this->get('/changelang/en/'.$pageId.'/'.$productNameSlug);
        $response11->assertStatus(302);
        $response11->assertRedirect('/en/cms/menu-test/page-1-test-test-slug/'.$productNameSlug);

        $productNameSlugPl = Str::slug($productTestData['product_name']['pl'], '-');
        $response22 = $this->get('/changelang/pl/'.$pageId.'/'.$productNameSlugPl);
        $response22->assertStatus(302);
        $response22->assertRedirect('/pl/cms/test-men7-zolc/strona-testowa/'.$productNameSlugPl);
    }

    public function test_it_will_change_lang_and_get_lang_from_session()
    {
        $this->setTestData('shop');
        $this->setTestData2('shop');
        $pages = Page::all()->toArray();

        $this->assertEquals(2, count($pages));

        $this->assertNotEmpty($pages[0]['id']);
        $pageId = $pages[0]['id'];

        $langIn = 'en';
        $response1 = $this->get("/changelang/$langIn/".$pageId);
        $response1->assertStatus(302);

        $langOut = ConfigService::getLangFromSession();
        $this->assertEquals($langIn, $langOut);
    }

    /**
     * maybe it will be useful for sitemap
     * links without: home, login, logout
     */
    public function test_it_will_get_all_pages_status()
    {
        ini_set('memory_limit', '1028M');

        $objDemo = new Demo;
        $p = $objDemo->pagesAndMenu(true);

        $this->checkAllPagesByLang($p, 'pl');
        $this->checkAllPagesByLang($p, 'en');

        $products = $objDemo->product($p, true);

        $this->checkProductsPagesByLang($products, 'en');
        $this->checkProductsPagesByLang($products, 'pl');
    }

    public function test_it_will_check_set_up()
    {
        $this->setTestData();
        $response = $this->get('api/pages?token='.$this->token);
        $res = $response->getData();
        $this->assertTrue($res->success);
        $this->assertEquals(count($res->data), 1);

        $this->assertEquals(2, count($this->langs));
        $this->assertEquals('pl', $this->langs[0]);
        $this->assertEquals('en', $this->langs[1]);
    }

    public function test_it_will_get_main_page_langs()
    {
        $response = $this->get('/');
        $response->assertStatus(404);

        $testData2 =
        [
            'title' => ['en' => $this->titleEn, 'pl' => $this->titlePl],
            'short_title' => ['en' => 'cmsRS', 'pl' => 'cmsRS'],
            'description' => ['en' => 'cmsRS', 'pl' => 'cmsRS'],
            'published' => 1,
            'commented' => 0,
            'after_login' => 1,
            //'position' => 3,
            'type' => 'main_page',
            'content' => ['en' => 'main page', 'pl' => 'cmsRS'],
            'menu_id' => null,
            'page_id' => null,
            //'images' => []
        ];

        $response = $this->post('api/pages?token='.$this->token, $testData2);

        $res = $response->getData();
        $this->assertTrue($res->success);

        $response1 = $this->get('/');
        $response1->assertStatus(200);

        //dd($response1->getContent());
        $this->assertNotEmpty(strpos($response1->getContent(), $this->titlePl));

        $response2 = $this->get('/en');
        $response2->assertStatus(200);
        $this->assertNotEmpty(strpos($response2->getContent(), $this->titleEn));
        $this->assertEmpty(strpos($response2->getContent(), $this->titlePl));

        $response3 = $this->get('/pl');
        $response3->assertStatus(404);
        $this->assertEmpty(strpos($response3->getContent(), $this->titlePl));
    }

    public function test_it_will_get_cms_page0()
    {
        $this->setTestData();

        $p0 = Page::query()->where('menu_id', $this->menuId)->get()->first();
        $this->assertNotEmpty($p0);

        foreach ($this->langs as $lang) {
            $url = (new PageService)->getUrl($p0, $lang);
            $this->assertNotEmpty($url);
            $response1 = $this->get($url);
            $response1->assertStatus(200);
        }
    }

    public function test_it_will_get_cms_page()
    {
        $this->setTestData();

        $menuName = $this->testDataMenu['name']['en'];
        $menuSlug = Str::slug($menuName);

        $p0 = Page::query()->where('menu_id', $this->menuId)->get(); //->toArray();
        $this->assertEquals(1, $p0->count());

        //not working - see this it_will_get_cms_page0 (this work)
        // $response = $this->get('/c/'.$menuSlug.'/'.$pageSlug);
        // $response->assertStatus(404);

        $testData2 =
        [
            'title' => ['en' => 'cmsRS', 'pl' => 'cmsRS'],
            'short_title' => ['en' => 'cmsRS', 'pl' => 'cmsRS'],
            'description' => ['en' => 'cmsRS', 'pl' => 'cmsRS'],
            'published' => 1,
            'commented' => 0,
            'after_login' => 1,
            'type' => 'cms',
            'content' => ['en' => 'main page', 'pl' => 'str gl'],
            'menu_id' => $this->menuId,
            'page_id' => null,
        ];

        $response = $this->post('api/pages?token='.$this->token, $testData2);

        $res = $response->getData();
        $this->assertTrue($res->success);

        $p = Page::query()->where('menu_id', $this->menuId)->get(); //->toArray();
        $this->assertEquals(2, $p->count());

        $i = 0;
        foreach ($p as $pp) {
            $url0 = (new PageService)->getUrl($pp, 'en');
            $response = $this->get($url0);
            $response->assertStatus(200);
            $i++;
        }
        $this->assertEquals(2, $i);

        $responseB = $this->get('/'.$menuSlug);
        $responseB->assertStatus(404);
    }

    public function test_it_will_get_in_page()
    {
        $pPrivacy = [
            'title' => ['en' => 'Privacy policy', 'pl' => 'polityka prywatnosci'],
            'short_title' => ['en' => 'Privacy policy', 'pl' => 'polityka prywatnosci'],
            'description' => ['en' => 'Description... Needed for google', 'pl' => 'polityka prywatnosci'],
            'published' => 1,
            'commented' => 0,
            'type' => 'privacy_policy',
            'content' => ['en' => 'politics ....', 'pl' => 'polityka prywatnosci'],
            'images' => [
            ],
        ];

        $p = (new PageService)->wrapCreate($pPrivacy);
        $this->assertNotEmpty($p->id);

        foreach ($this->langs as $lang) {
            $url = (new PageService)->getUrl($p, $lang);
            $this->assertNotEmpty($url);
            $response1 = $this->get($url);
            $response1->assertStatus(200);
        }
    }

    public function test_it_will_get_all_pages_by_type()
    {
        $menu = (new MenuService)->wrapCreate($this->testDataMenu);
        $this->assertNotEmpty($menu->id);
        $langs = ConfigService::arrGetLangsEnv();
        $this->assertEquals(2, count($langs));

        $pageTypes = ConfigService::arrGetPageTypes();
        $this->assertTrue(count($pageTypes) >= 9);
        foreach ($pageTypes as $page_type) {
            $data = [
                'title' => ['en' => 'titile '.$page_type.' en',  'pl' => 'titile '.$page_type.' pl'],
                'short_title' => ['en' => $page_type.' en',  'pl' => $page_type.' pl'],
                'description' => ['en' => 'Description... Needed for google en',  'pl' => $page_type.' pl'],
                'published' => 1,
                'commented' => 1,
                'type' => $page_type,
                'content' => ['en' => 'test en',  'pl' => $page_type.' pl'],
                'menu_id' => null,
            ];

            $p = (new PageService)->wrapCreate($data);

            $data['menu_id'] = $menu->id;
            if ($page_type !== 'main_page') {
                $p = (new PageService)->wrapCreate($data);
            }

        }

        $pages = Page::All();

        foreach ($pages as $page) {

            foreach ($langs as $lang) {
                $url = (new PageService)->getUrl($page, $lang);
                $response = $this->get($url);

                $status = (($page->type === 'login') || ($page->type === 'register') || ($page->type === 'forgot')) ? 302 : 200;
                if ($page->type == 'shoppingsuccess') {
                    $status = 404;
                }

                //echo " url=".$url." s=".$response->status()."\n";
                $response->assertStatus($status);
            }

        }

    }
}
