<?php

namespace Tests\Feature\Services\Cmsrs;

use App\Models\Cmsrs\Content;
use App\Models\Cmsrs\Translate;
use App\Services\Cmsrs\ConfigService;
use App\Services\Cmsrs\ContentService;
use App\Services\Cmsrs\ImageService;
use App\Services\Cmsrs\MenuService;
use App\Services\Cmsrs\PageService;
use App\Services\Cmsrs\TranslateService;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Mockery;

class ContentTest extends Base
{
    use RefreshDatabase;

    public $numOfLangs;

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
        putenv('IS_SSR=true');

        parent::setUp();

        $this->createUser();

        $numOfLangs = app(ConfigService::class)->arrGetLangs();
        $numOfLangsContent = app(ContentService::class)->getArrLangs();
        $this->assertSame($numOfLangs, $numOfLangsContent);
        $this->assertEquals(2, count($numOfLangs));
        $this->numOfLangs = count($numOfLangs);
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
        $content = app(ContentService::class);
        $arrLangs = $content->getArrLangs();
        $this->assertTrue(is_array($arrLangs));
        $this->assertEquals(2, count($arrLangs));

        $configMock = Mockery::mock(ConfigService::class);
        $arrLangTest = ['en'];
        $configMock->shouldReceive('arrGetLangs')->andReturn($arrLangTest);
        $content2 = new ContentService($configMock);
        $arrLangs2 = $content2->getArrLangs();
        $this->assertSame($arrLangTest, $arrLangs2);
    }

    /***********************/
    /**Content on the Page**/
    /***********************/

    public function test_page_content_wrap_create_ok_1()
    {
        $data1p = $this->getPageTestData();
        $p = (app(PageService::class))->wrapCreate($data1p);
        $this->assertNotEmpty($p->id);

        $this->assertEquals(2, Content::query()->where('page_id', $p->id)->count());
    }

    public function test_page_content_wrap_create_ok_2_mock()
    {
        $data = $this->getPageTestData();

        $configMock = Mockery::mock(ConfigService::class);
        $arrLangTest = ['pl'];
        $configMock->shouldReceive('arrGetLangs')->andReturn($arrLangTest);
        $translate = new TranslateService($configMock);
        $content = new ContentService($configMock);

        // konstruktor: public function __construct(private ConfigService $configService, private MenuService $menuService, private TranslateService $translateService, private ContentService $contentService, private ImageService $imageService)
        // $objPage = app(PageService::class); //jak wstrzyknac te zaleznosci - pyt do AI
        // $objPage->setTranslate($translate);
        // $objPage->setContent($content);

        $imageServiceMock = Mockery::mock(ImageService::class);
        $imageServiceMock
            ->shouldReceive('createImages')
            ->once()
            ->andReturn([]);

        $objPage = new PageService(
            $configMock,
            Mockery::mock(MenuService::class),
            $translate,
            $content,
            $imageServiceMock
        );

        $page = $objPage->wrapCreate($data, $translate, $content); // linia 107
        $this->assertNotEmpty($page->id);

        $this->assertEquals(1, Content::query()->where('page_id', $page->id)->count());
    }

    public function test_page_content_wrap_create_empty_1()
    {
        $data1p = $this->getPageTestData();
        unset($data1p['content']);

        $p = (app(PageService::class))->wrapCreate($data1p);
        $this->assertEquals($this->numOfLangs, Content::query()->where('page_id', $p->id)->count());
    }

    public function test_page_content_wrap_create_empty_2()
    {
        $data1p = $this->getPageTestData();
        $data1p['content'] = [];

        $p = (app(PageService::class))->wrapCreate($data1p);
        $this->assertEquals($this->numOfLangs, Content::query()->where('page_id', $p->id)->count());
    }

    public function test_page_content_wrap_create_empty_3()
    {
        $data1p = $this->getPageTestData();
        $data1p['content'] = ['es' => 'fake'];

        $p = (app(PageService::class))->wrapCreate($data1p);
        $this->assertEquals($this->numOfLangs, Content::query()->where('page_id', $p->id)->where('column', 'content')->whereNull('value')->count());
    }

    public function test_page_content_wrap_create_wrong()
    {
        $data1p = $this->getPageTestData();

        $data1p['content'] = 'str fake';
        $data1p['description'] = 'strereer';

        // $this->expectException(\Exception::class);
        $p = (app(PageService::class))->wrapCreate($data1p);
        $this->assertEquals($this->numOfLangs, Content::query()->where('page_id', $p->id)->where('column', 'content')->whereNull('value')->count());
        $this->assertEquals($this->numOfLangs, Translate::query()->where('page_id', $p->id)->where('column', 'description')->whereNull('value')->count());
    }
}
