<?php

namespace Tests\Feature;

use App\Page;
use App\Menu;
use App\Image;
use App\Translate;
use App\Content;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Str;

class TranslateTest extends Base
{
    use RefreshDatabase;

    public function setUp(): void
    {
        putenv('LANGS="en,pl"');
        putenv('API_SECRET=""');
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

    /** @test */
    public function get_arr_langs()
    {
        $translate = new Translate;
        $translate->setArrLangs(['en','pl']);
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

    /** @test */
    public function menu_wrap_create()
    {
        $m = (new Menu)->wrapCreate(['name' => ['en' => 'About cmsRS', 'pl' => 'O cmsRS' ] ]);
        $this->assertNotEmpty($m->id);
    }

    /** @test */
    public function menu_translate_wrap_create_ok_1b()
    {
        $data = ['name' => ['en' => 'About cmsRS', 'pl' => 'O cmsRS', 'es' => 'Fake' ] ];

        $menu = (new Menu)->wrapCreate($data);

        $translate = new Translate;
        $translate->setArrLangs(['en','pl']);
        $countItem = $translate->query()->where('menu_id', $menu->id)->where('column', 'name')->count();
        $this->assertEquals(2, $countItem);
    }

    /** @test */
    public function menu_translate_wrap_create_ok_2b()
    {
        $data = ['name' => ['pl' => 'O cmsRS', 'en' => 'fake' ] ];

        $translate = new Translate;
        $translate->setArrLangs(['pl']);

        $objMenu = new Menu;
        $objMenu->setTranslate($translate);

        $menu = $objMenu->wrapCreate($data);

        $countItem = Translate::query()->where('menu_id', $menu->id)->where('column', 'name')->count();
        $this->assertEquals(1, $countItem);
    }


    /** @test */
    public function menu_translate_wrap_create_wrong_1()
    {
        $data = ['name' => ['en' => 'About cmsRS' ] ];

        $this->expectException(\Exception::class);
        $menu = (new Menu)->wrapCreate($data);
    }

    /** @test */
    public function menu_translate_wrap_create_wrong_2()
    {
        $data = ['name' => ['en' => 'About cmsRS', 'ppllll' => 'O cmsrs' ] ];

        $this->expectException(\Exception::class);
        $menu = (new Menu)->wrapCreate($data);
    }

    /** @test */
    public function menu_translate_wrap_create_wrong_3()
    {
        $data = ['nameFake' => ['en' => 'About cmsRS', 'pl' => 'O cmsrs' ] ];

        $this->expectException(\Exception::class);
        $menu = (new Menu)->wrapCreate($data);
    }

    /*******************/
    /**Page & Images****/
    /*******************/
    
    /** @test */
    public function page_translate_string_data()
    {
        $m = (new Menu)->wrapCreate(['name' => ['en' => 'About cmsRS', 'pl' => 'O cmsRS' ] ]);
        $this->assertNotEmpty($m->id);

        $data1p = [
            'title'     =>  "['en' => 'About me', 'pl' => 'O mnie', 'es' => 'Fake' ],//require",
            'short_title' => "['en' =>'About me', 'pl' => 'O mnie', 'es' => 'Fake'],//require",
            'description' => "['en' =>'Description... Needed for google', 'pplll' => 'Opis... potrzebne dla googla', 'es' => 'Fake'],//not require",
            'published' => 1,
            'commented' => 0,
            'type' => 'cms',
            'content' => 'test1234',
            'menu_id' => $m->id,
            'images' => [
                ['name' => 'phpunittest1.jpg', 'data' => $this->getFixtureBase64('phpunittest1.jpg') ],
                ['name' => 'phpunittest2.jpg', 'data' => $this->getFixtureBase64('phpunittest2.jpg'), 'alt' => ['pl' => 'jakis opis', 'es' => 'Fake' ] ]
              ]
          ];

        $this->expectException(\Exception::class);
        $p = (new Page)->wrapCreate($data1p);
    }
    


    /** @test */
    public function page_translate_wrap_create_ok_1()
    {
        $data1p = $this->getPageTestData();
        $numOfLangs = (new Translate)->getArrLangs();
        $this->assertEquals(2, count($numOfLangs));

        //dump($data1p);
        $p = (new Page)->wrapCreate($data1p);
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

    /** @test */
    public function page_translate_wrap_create_ok_2()
    {
        $data = $this->getPageTestData();
        unset($data['description']);
        $data['images'] =[
            ['name' => 'phpunittest1.jpg', 'data' => $this->getFixtureBase64('phpunittest1.jpg'), 'alt' => [ 'en' => 'some desc', 'pl' => 'jakis opis', 'es' => 'Fake' ] ],
            ['name' => 'phpunittest2.jpg', 'data' => $this->getFixtureBase64('phpunittest2.jpg'), 'alt' => [ 'en' => 'some desc', 'pl' => 'jakis opis', 'es' => 'Fake' ] ],
            ['name' => 'phpunittest2.jpg', 'data' => $this->getFixtureBase64('phpunittest2.jpg'), 'alt' => [ 'en' => 'some desc2', 'pl' => 'jakis opis2', 'es' => 'Fake2' ] ]
        ];


        $translate = new Translate;
        $translate->setArrLangs(['pl']);

        $objPage = new Page;
        $objPage->setTranslate($translate);

        $page = $objPage->wrapCreate($data, $translate);
  
        $this->assertEquals(1, Translate::query()->where('page_id', $page->id)->where('column', 'title')->count());
        $this->assertEquals(1, Translate::query()->where('page_id', $page->id)->where('column', 'short_title')->where('lang', 'pl')->count());
        $this->assertEquals(1, Translate::query()->where('page_id', $page->id)->where('column', 'description')->count());
        $this->assertEquals(2, Content::query()->where('page_id', $page->id)->count()); //not set DI, therefore is 2

        $this->assertEquals(3, Translate::query()->whereNotNull('image_id')->where('column', 'alt')->count());
    }

    /** @test */
    public function page_translate_wrap_create_null_val()
    {
        $numOfLangs = count((new Translate)->getArrLangs());
        $this->assertEquals(2, $numOfLangs);

        $data = $this->getPageTestData();
        unset($data['description']);
        unset($data['content']);
        $data['images'] =[
            ['name' => 'phpunittest1.jpg', 'data' => $this->getFixtureBase64('phpunittest1.jpg'), 'alt' => [ 'en' => '', 'pl' => '', 'es' => 'Fake' ] ],
            ['name' => 'phpunittest2.jpg', 'data' => $this->getFixtureBase64('phpunittest2.jpg')  ],
            ['name' => 'phpunittest2.jpg', 'data' => $this->getFixtureBase64('phpunittest2.jpg'), 'alt' => [ 'en' => null, 'pl' => null, 'es' => 'Fake2' ] ]
        ];
        $p = (new Page)->wrapCreate($data);
        $this->assertNotEmpty($p->id);

        $this->assertEquals($numOfLangs, Translate::query()->where('page_id', $p->id)->where('column', 'title')->count());
        $this->assertEquals($numOfLangs, Translate::query()->where('page_id', $p->id)->where('column', 'short_title')->count());

        $d = Translate::query()->where('page_id', $p->id)->get()->toArray();

        $this->assertEquals($numOfLangs, Translate::query()->where('page_id', $p->id)->where('column', 'description')->whereNull('value')->count());
        $this->assertEquals($numOfLangs, Content::query()->where('page_id', $p->id)->where('column', 'content')->whereNull('value')->count());

        $this->assertEquals(3*$numOfLangs, Translate::query()->whereNotNull('image_id')->where('column', 'alt')->whereNull('value')->count());
    }

    /** @test */
    public function page_translate_wrap_create_wrong_1()
    {
        $data1p = $this->getPageTestData();
        unset($data1p['title']);

        $this->expectException(\Exception::class);
        $p = (new Page)->wrapCreate($data1p);
    }

    /** @test */
    public function page_translate_wrap_create_wrong_2()
    {
        $data1p = $this->getPageTestData();
        $data1p['title'] = ['pl' => 'polska'];

        $this->expectException(\Exception::class);
        $p = (new Page)->wrapCreate($data1p);
    }
}
