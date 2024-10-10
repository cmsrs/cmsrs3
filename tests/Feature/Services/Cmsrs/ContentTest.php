<?php

namespace Tests\Feature\Services\Cmsrs;

use App\Services\Cmsrs\PageService;
use App\Menu;
use App\Image;

use App\Models\Cmsrs\Translate;
use App\Services\Cmsrs\TranslateService;

use App\Models\Cmsrs\Content;
use App\Services\Cmsrs\ContentService;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Str;

class ContentTest extends Base
{
    use RefreshDatabase;
    public $numOfLangs;


    public function setUp(): void
    {
        putenv('LANGS="en,pl"');
        putenv('API_SECRET=""');
        putenv('CURRENCY="USD"');        
        putenv('CACHE_ENABLE=false');
        putenv('CACHE_ENABLE_FILE="app/cache_enable_test.txt"');   
        putenv('DEMO_STATUS=false');          
        putenv('IS_SHOP=true');

        parent::setUp();

        $this->createUser();

        $numOfLangs = count((new TranslateService)->getArrLangs());
        $this->assertEquals(2, $numOfLangs);
        $this->numOfLangs = $numOfLangs;
    }

    protected function tearDown(): void
    {
        parent::tearDown();
    }

    /*********************/
    /****general *********/
    /*********************/

    public function test_get_arr_langs()
    {
        $content = new ContentService;
        $arrLangs = $content->getArrLangs();
        $this->assertTrue(is_array($arrLangs));
        $this->assertEquals(2, count($arrLangs));

        $arrLangTest = ['en'];
        $content->setArrLangs($arrLangTest);
        $arrLangs2 = $content->getArrLangs();
        $this->assertSame($arrLangTest, $arrLangs2);
    }


    /***********************/
    /**Content on the Page**/
    /***********************/

    public function test_page_content_wrap_create_ok_1()
    {
        $data1p = $this->getPageTestData();
        $p = (new PageService)->wrapCreate($data1p);
        $this->assertNotEmpty($p->id);

        $this->assertEquals(2, Content::query()->where('page_id', $p->id)->count());
    }

    public function test_page_content_wrap_create_ok_2()
    {
        $data = $this->getPageTestData();


        $translate = new TranslateService;
        $translate->setArrLangs(['pl']);
        $content = new ContentService;
        $content->setArrLangs(['pl']);

        $objPage = new PageService();
        $objPage->setTranslate($translate);
        $objPage->setContent($content);



        $page = $objPage->wrapCreate($data, $translate, $content);
        $this->assertNotEmpty($page->id);

        $this->assertEquals(1, Content::query()->where('page_id', $page->id)->count());
    }

    public function test_page_content_wrap_create_empty_1()
    {
        $data1p = $this->getPageTestData();
        unset($data1p['content']);

        $p = (new PageService())->wrapCreate($data1p);
        $this->assertEquals($this->numOfLangs, Content::query()->where('page_id', $p->id)->count());
    }

    public function test_page_content_wrap_create_empty_2()
    {
        $data1p = $this->getPageTestData();
        $data1p['content'] = [];

        $p = (new PageService())->wrapCreate($data1p);
        $this->assertEquals($this->numOfLangs, Content::query()->where('page_id', $p->id)->count());
    }

    public function test_page_content_wrap_create_empty_3()
    {
        $data1p = $this->getPageTestData();
        $data1p['content'] = ['es' => 'fake'];

        $p = (new PageService)->wrapCreate($data1p);
        $this->assertEquals($this->numOfLangs, Content::query()->where('page_id', $p->id)->where('column', 'content')->whereNull('value')->count());
    }

    public function test_page_content_wrap_create_wrong()
    {
        $data1p = $this->getPageTestData();
        
        $data1p['content'] = 'str fake';
        $data1p['description'] = 'strereer';
 
        //$this->expectException(\Exception::class);
        $p = (new PageService())->wrapCreate($data1p);
        $this->assertEquals($this->numOfLangs, Content::query()->where('page_id', $p->id)->where('column', 'content')->whereNull('value')->count());
        $this->assertEquals($this->numOfLangs, Translate::query()->where('page_id', $p->id)->where('column', 'description')->whereNull('value')->count());
    }
}
