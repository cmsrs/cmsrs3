<?php

namespace Tests\Feature\Services\Cmsrs;

use App\Models\Cmsrs\Content;
use App\Models\Cmsrs\Menu;
use App\Models\Cmsrs\Page;
use App\Models\Cmsrs\Translate;
use App\Services\Cmsrs\MenuService;
use App\Services\Cmsrs\PageService;
use App\Services\Cmsrs\TranslateService;
use Illuminate\Foundation\Testing\RefreshDatabase;

class TranslateTest extends Base
{
    use RefreshDatabase;

    protected function setUp(): void
    {
        putenv('LANGS="en,pl"');
        putenv('API_SECRET=""');
        putenv('CURRENCY="USD"');
        putenv('CACHE_ENABLE=false');
        putenv('CACHE_ENABLE_FILE="app/cache_enable_test.txt"');
        putenv('DEMO_STATUS=false');
        putenv('IS_SHOP=true');
        putenv('IS_LOGIN=true');
        putenv('IS_REGISTER=true');
        putenv('IS_HEADLESS=false');

        parent::setUp();

        $this->createUser();
    }

    protected function tearDown(): void
    {
        putenv('LANGS="en,pl"');
        parent::tearDown();
    }

    /*********************/
    /****general *********/
    /*********************/

    public function test_get_arr_langs()
    {
        $translate = new TranslateService;
        $translate->setArrLangs(['en', 'pl']);
        $arrLangs = $translate->getArrLangs();

        $this->assertTrue(is_array($arrLangs));
        $this->assertEquals(2, count($arrLangs));

        $arrLangTest = ['en'];
        $translate->setArrLangs($arrLangTest);
        $arrLangs2 = $translate->getArrLangs();
        $this->assertSame($arrLangTest, $arrLangs2);
    }

    /*******************/
    /******* Menu ******/
    /*******************/

    public function test_menu_wrap_create()
    {
        $m = (new MenuService)->wrapCreate(['name' => ['en' => 'About cmsRS', 'pl' => 'O cmsRS']]);
        $this->assertNotEmpty($m->id);
    }

    public function test_menu_translate_wrap_create_ok_1b()
    {
        $data = ['name' => ['en' => 'About cmsRS', 'pl' => 'O cmsRS', 'es' => 'Fake']];

        $menu = (new MenuService)->wrapCreate($data);

        $translate = new TranslateService;
        $translate->setArrLangs(['en', 'pl']);
        $countItem = Translate::query()->where('menu_id', $menu->id)->where('column', 'name')->count();
        $this->assertEquals(2, $countItem);
    }

    public function test_menu_translate_wrap_create_ok_2b()
    {
        $data = ['name' => ['pl' => 'O cmsRS', 'en' => 'fake']];

        $translate = new TranslateService;
        $translate->setArrLangs(['pl']);

        $objMenu = new MenuService;
        $objMenu->setTranslate($translate);

        $menu = $objMenu->wrapCreate($data);

        $countItem = Translate::query()->where('menu_id', $menu->id)->where('column', 'name')->count();
        $this->assertEquals(1, $countItem);
    }

    public function test_menu_translate_wrap_create_wrong_1()
    {
        $data = ['name' => ['en' => 'About cmsRS']];

        $this->expectException(\Exception::class);
        $menu = (new MenuService)->wrapCreate($data);
    }

    public function test_menu_translate_wrap_create_wrong_2()
    {
        $data = ['name' => ['en' => 'About cmsRS', 'ppllll' => 'O cmsrs']];

        $this->expectException(\Exception::class);
        $menu = (new MenuService)->wrapCreate($data);
    }

    public function test_menu_translate_wrap_create_wrong_3()
    {
        $data = ['nameFake' => ['en' => 'About cmsRS', 'pl' => 'O cmsrs']];

        $this->expectException(\Exception::class);
        $menu = (new MenuService)->wrapCreate($data);
    }

    /*******************/
    /**Page & Images****/
    /*******************/

    public function test_page_translate_string_data()
    {
        $m = (new MenuService)->wrapCreate(['name' => ['en' => 'About cmsRS', 'pl' => 'O cmsRS']]);
        $this->assertNotEmpty($m->id);

        $data1p = [
            'title' => "['en' => 'About me', 'pl' => 'O mnie', 'es' => 'Fake' ],//require",
            'short_title' => "['en' =>'About me', 'pl' => 'O mnie', 'es' => 'Fake'],//require",
            'description' => "['en' =>'Description... Needed for google', 'pplll' => 'Opis... potrzebne dla googla', 'es' => 'Fake'],//not require",
            'published' => 1,
            'commented' => 0,
            'type' => 'cms',
            'content' => 'test1234',
            'menu_id' => $m->id,
            'images' => [
                ['name' => 'phpunittest1.jpg', 'data' => $this->getFixtureBase64('phpunittest1.jpg')],
                ['name' => 'phpunittest2.jpg', 'data' => $this->getFixtureBase64('phpunittest2.jpg'), 'alt' => ['pl' => 'jakis opis', 'es' => 'Fake']],
            ],
        ];

        $this->expectException(\Exception::class);
        $p = (new PageService)->wrapCreate($data1p);
    }

    public function test_page_translate_wrap_create_ok_1()
    {
        $data1p = $this->getPageTestData();
        $numOfLangs = (new TranslateService)->getArrLangs();
        $this->assertEquals(2, count($numOfLangs));

        $p = (new PageService)->wrapCreate($data1p);
        $this->assertNotEmpty($p->id);

        $this->assertEquals(2, Translate::query()->where('page_id', $p->id)->where('column', 'title')->count());
        $this->assertEquals(2, Translate::query()->where('page_id', $p->id)->where('column', 'short_title')->count());
        $this->assertEquals(2, Translate::query()->where('page_id', $p->id)->where('column', 'description')->count());

        $d = Translate::query()->where('page_id', $p->id)->where('column', 'description')->get()->toArray();
        $this->assertEquals(2, count($d));

        $this->assertEquals(1, Translate::query()->where('page_id', $p->id)->where('column', 'description')->whereNotNull('value')->count());
        $this->assertEquals(1, Translate::query()->where('page_id', $p->id)->where('column', 'description')->whereNull('value')->count());
        $this->assertEquals(2, Content::query()->where('page_id', $p->id)->count());

        $this->assertEquals(4, Translate::query()->whereNotNull('image_id')->where('column', 'alt')->count());
    }

    public function test_page_translate_wrap_create_ok_2()
    {
        $data = $this->getPageTestData();
        unset($data['description']);
        $data['images'] = [
            ['name' => 'phpunittest1.jpg', 'data' => $this->getFixtureBase64('phpunittest1.jpg'), 'alt' => ['en' => 'some desc', 'pl' => 'jakis opis', 'es' => 'Fake']],
            ['name' => 'phpunittest2.jpg', 'data' => $this->getFixtureBase64('phpunittest2.jpg'), 'alt' => ['en' => 'some desc', 'pl' => 'jakis opis', 'es' => 'Fake']],
            ['name' => 'phpunittest2.jpg', 'data' => $this->getFixtureBase64('phpunittest2.jpg'), 'alt' => ['en' => 'some desc2', 'pl' => 'jakis opis2', 'es' => 'Fake2']],
        ];

        $translate = new TranslateService;
        $translate->setArrLangs(['pl']);

        $objPage = new PageService;
        $objPage->setTranslate($translate);

        $page = $objPage->wrapCreate($data, $translate);

        $this->assertEquals(1, Translate::query()->where('page_id', $page->id)->where('column', 'title')->count());
        $this->assertEquals(1, Translate::query()->where('page_id', $page->id)->where('column', 'short_title')->where('lang', 'pl')->count());
        $this->assertEquals(1, Translate::query()->where('page_id', $page->id)->where('column', 'description')->count());
        $this->assertEquals(2, Content::query()->where('page_id', $page->id)->count()); // not set DI, therefore is 2

        $this->assertEquals(3, Translate::query()->whereNotNull('image_id')->where('column', 'alt')->count());
    }

    public function test_page_translate_wrap_create_null_val()
    {
        $numOfLangs = count((new TranslateService)->getArrLangs());
        $this->assertEquals(2, $numOfLangs);

        $data = $this->getPageTestData();
        unset($data['description']);
        unset($data['content']);
        $data['images'] = [
            ['name' => 'phpunittest1.jpg', 'data' => $this->getFixtureBase64('phpunittest1.jpg'), 'alt' => ['en' => '', 'pl' => '', 'es' => 'Fake']],
            ['name' => 'phpunittest2.jpg', 'data' => $this->getFixtureBase64('phpunittest2.jpg')],
            ['name' => 'phpunittest2.jpg', 'data' => $this->getFixtureBase64('phpunittest2.jpg'), 'alt' => ['en' => null, 'pl' => null, 'es' => 'Fake2']],
        ];
        $p = (new PageService)->wrapCreate($data);
        $this->assertNotEmpty($p->id);

        $this->assertEquals($numOfLangs, Translate::query()->where('page_id', $p->id)->where('column', 'title')->count());
        $this->assertEquals($numOfLangs, Translate::query()->where('page_id', $p->id)->where('column', 'short_title')->count());

        $d = Translate::query()->where('page_id', $p->id)->get()->toArray();

        $this->assertEquals($numOfLangs, Translate::query()->where('page_id', $p->id)->where('column', 'description')->whereNull('value')->count());
        $this->assertEquals($numOfLangs, Content::query()->where('page_id', $p->id)->where('column', 'content')->whereNull('value')->count());

        $this->assertEquals(3 * $numOfLangs, Translate::query()->whereNotNull('image_id')->where('column', 'alt')->whereNull('value')->count());
    }

    public function test_page_translate_wrap_create_wrong_1()
    {
        $data1p = $this->getPageTestData();
        unset($data1p['title']);

        $this->expectException(\Exception::class);
        $p = (new PageService)->wrapCreate($data1p);
    }

    public function test_page_translate_wrap_create_wrong_2()
    {
        $data1p = $this->getPageTestData();
        $data1p['title'] = ['pl' => 'Polska'];

        $this->expectException(\Exception::class);
        $p = (new PageService)->wrapCreate($data1p);
    }
}
