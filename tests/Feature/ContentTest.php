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

class ContentTest extends Base
{
    use RefreshDatabase;
    public $numOfLangs;


    public function setUp(): void
    {
        putenv('LANGS="en,pl"');
        putenv('API_SECRET=""');
        parent::setUp();

        $this->createUser();

        $numOfLangs = count((new Translate)->getArrLangs());
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

    /** @test */
    public function get_arr_langs()
    {
        $content = new Content;
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

    /** @test */
    public function page_content_wrap_create_ok_1()
    {
        $data1p = $this->getPageTestData();
        $p = (new Page)->wrapCreate($data1p);
        $this->assertNotEmpty($p->id);

        $this->assertEquals(2, Content::query()->where('page_id', $p->id)->count());
    }

    /** @test */
    public function page_content_wrap_create_ok_2()
    {
        $data = $this->getPageTestData();


        $translate = new Translate;
        $translate->setArrLangs(['pl']);
        $content = new Content;
        $content->setArrLangs(['pl']);

        $objPage = new Page;
        $objPage->setTranslate($translate);
        $objPage->setContent($content);



        $page = $objPage->wrapCreate($data, $translate, $content);
        $this->assertNotEmpty($page->id);

        $this->assertEquals(1, Content::query()->where('page_id', $page->id)->count());
    }

    /** @test */
    public function page_content_wrap_create_empty_1()
    {
        $data1p = $this->getPageTestData();
        unset($data1p['content']);

        $p = (new Page)->wrapCreate($data1p);
        $this->assertEquals($this->numOfLangs, Content::query()->where('page_id', $p->id)->count());
    }

    /** @test */
    public function page_content_wrap_create_empty_2()
    {
        $data1p = $this->getPageTestData();
        $data1p['content'] = [];

        $p = (new Page)->wrapCreate($data1p);
        $this->assertEquals($this->numOfLangs, Content::query()->where('page_id', $p->id)->count());
    }

    /** @test */
    public function page_content_wrap_create_empty_3()
    {
        $data1p = $this->getPageTestData();
        $data1p['content'] = ['es' => 'fake'];

        $p = (new Page)->wrapCreate($data1p);
        $this->assertEquals($this->numOfLangs, Content::query()->where('page_id', $p->id)->where('column', 'content')->whereNull('value')->count());
    }

    /** @test */
    public function page_content_wrap_create_wrong()
    {
        $data1p = $this->getPageTestData();
        
        $data1p['content'] = 'str fake';
        $data1p['description'] = 'strereer';
 
        //$this->expectException(\Exception::class);
        $p = (new Page)->wrapCreate($data1p);
        $this->assertEquals($this->numOfLangs, Content::query()->where('page_id', $p->id)->where('column', 'content')->whereNull('value')->count());
        $this->assertEquals($this->numOfLangs, Translate::query()->where('page_id', $p->id)->where('column', 'description')->whereNull('value')->count());
    }
}
