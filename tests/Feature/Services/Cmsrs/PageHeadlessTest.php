<?php

namespace Tests\Feature\Services\Cmsrs;

use App\Models\Cmsrs\Page;
use App\Services\Cmsrs\MenuService;
use App\Services\Cmsrs\PageService;
use App\Data\Demo;
use Illuminate\Foundation\Testing\RefreshDatabase;

class PageHeadlessTest extends Base
{
    use RefreshDatabase;

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
        putenv('IS_HEADLESS=true');

        parent::setUp();

        $this->createUser();
    }

    protected function tearDown(): void
    {
        parent::tearDown();
    }

    public function test_it_will_get_first_page_by_short_title_without_auth_docs()
    {
        $type = 'inner';
        $shortTitle = 'main_page_box';
        $predefinedShortTitle = [$shortTitle.'1', $shortTitle.'2', $shortTitle.'3', 'company_data', 'main_page_slider'];
        $this->prepareTestDataForGetByType($type, $predefinedShortTitle);

        $res = $this->get('api/headless/pages-short-title/'.$shortTitle);
        $data = $res->getData();
        $this->assertTrue($data->success);

        $this->assertEquals($shortTitle.'1', $data->data[0]->short_title->en);
        $this->assertEquals($shortTitle.'2', $data->data[1]->short_title->en);
        $this->assertEquals($shortTitle.'3', $data->data[2]->short_title->en);
        $this->assertEquals(3, count($data->data));
    }

    public function test_it_will_get_all_pages_by_type_without_auth_docs()
    {
        $type = 'inner';
        $predefinedShortTitle = ['main_page_box1', 'main_page_box2', 'main_page_box3', 'company_data', 'main_page_slider'];
        $this->prepareTestDataForGetByType($type, $predefinedShortTitle);

        $resType = $this->get('api/headless/pages-type/'.$type);
        $data = $resType->getData();
        $this->assertTrue($data->success);

        $this->assertEquals(count($predefinedShortTitle), count($data->data));
        $this->assertEquals($predefinedShortTitle[0], $data->data[0]->short_title->en);
    }

    public function test_it_will_get_one_page_without_auth_docs()
    {
        $testData =
        [
            'title' => ['en' => 'inner title'],
            'short_title' => ['en' => 'inner short_title'],
            'published' => 1,
            'type' => 'inner',
            'content' => ['en' => 'content test4333 inner'],
        ];

        $objPage = (new PageService)->wrapCreate($testData);
        $this->assertNotEmpty($objPage->id);
        $res = $this->get('api/headless/page/'.$objPage->id);
        // dd($res->getContent());
        $data = $res->getData();
        $this->assertTrue($data->success);
        $this->assertEquals($testData['title']['en'], $data->data->title->en);
        $this->assertEquals($testData['content']['en'], $data->data->content->en);
    }

    public function test_it_will_get_main_page_2_headless()
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
            'content' => ['en' => 'main page'],
            'menu_id' => null,
            'page_id' => null,
        ];

        $response = $this->post('api/pages?token='.$this->token, $testData2);

        $pages = Page::All()->toArray();
        $this->assertEquals(1, count($pages));

        $res = $response->getData();
        $this->assertTrue($res->success);

        // because it is headless.
        $response = $this->get('/');
        $response->assertStatus(404);
    }

    public function test_it_will_get_all_menus_without_auth_docs()
    {
        $res = $this->get('api/headless/menus');
        $data = $res->getData();
        // $this->assertTrue($data->success);
        $this->assertFalse($data->success); // todo
    }

    public function test_it_will_get_all_menus_from_service()
    {
        $objDemo = new Demo;
        $p = $objDemo->pagesAndMenu(true);

        $lang = 'en';
        $menuUrls =  (new MenuService)->getAllUrlRelatedToMenus($lang);

        $this->assertEquals(5, count($menuUrls));

        $tt = false;
        foreach ($menuUrls as $menuUrl) {
            $this->assertNotEmpty($menuUrl['menu_name']);
            if (isset($menuUrl['url'])) {
                $this->assertNotEmpty($menuUrl['url']);
                $this->assertNotEmpty($menuUrl['page_id']);
                $this->assertEmpty($menuUrl['pages']); //!!
            }
            if (isset($menuUrl['pages'])) {
                foreach ($menuUrl['pages'] as $page) {
                    $this->assertNotEmpty($page['short_title']);
                    $this->assertNotEmpty($page['url']);
                    $this->assertNotEmpty($page['page_id']);
                    if (isset($page['children'])) {
                        foreach ($page['children'] as $child) {
                            $this->assertNotEmpty($child['short_title']);
                            $this->assertNotEmpty($child['url']);
                            $this->assertNotEmpty($child['page_id']);
                            $tt = true;
                        }
                    }
                }
            }
        }

        $this->assertTrue($tt);
        $this->assertEquals(2, count($menuUrls[0]['pages'])); //one is secret

        $this->assertNotEmpty($menuUrls[4]['url']);
        $this->assertNotEmpty($menuUrls[4]['page_id']);
        $this->assertNotEmpty($menuUrls[4]['menu_name']);        
        $this->assertEmpty($menuUrls[4]['pages']);    //menu is connected with page, so pages is empty    
    }
}
