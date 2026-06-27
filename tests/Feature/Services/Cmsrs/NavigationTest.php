<?php

namespace Tests\Feature\Services\Cmsrs;

use App\Data\Demo;
use App\Services\Cmsrs\Page\NavigationService;
use Illuminate\Foundation\Testing\RefreshDatabase;

class NavigationTest extends Base
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
        putenv('IS_SSR=false');

        parent::setUp();

        $this->createUser();
    }

    protected function tearDown(): void
    {
        parent::tearDown();
    }

    public function test_it_will_get_all_menus_from_service()
    {
        (new Demo)->pagesAndMenu(true);

        $menuUrls = app(NavigationService::class)->getNavigationTree();

        // dd($menuUrls);

        $this->assertHelper($menuUrls);
    }

    private function assertHelper($menuUrls)
    {
        $this->assertEquals(5, count($menuUrls));
        $tt = false;
        foreach ($menuUrls as $menuUrl) {
            $this->assertNotEmpty($menuUrl['menu_name']);
            $this->assertNotEmpty($menuUrl['menu_name']['en']);
            $this->assertNotEmpty($menuUrl['id']);
            if (isset($menuUrl['url'])) {
                $this->assertNotEmpty($menuUrl['url']);
                $this->assertNotEmpty($menuUrl['url']['en']);
                $this->assertNotEmpty($menuUrl['page_id']);
                $this->assertEmpty($menuUrl['pages']); // !!
            } else {
                $this->assertNull($menuUrl['url']);
                // $this->assertEmpty($menuUrl['url']['en']);
                $this->assertNull($menuUrl['page_id']);
                $this->assertNotEmpty($menuUrl['pages']); // !!
            }
            if (isset($menuUrl['pages'])) {
                foreach ($menuUrl['pages'] as $page) {
                    $this->assertNotEmpty($page['short_title']);
                    $this->assertNotEmpty($page['short_title']['en']);
                    $this->assertNotEmpty($page['url']);
                    $this->assertNotEmpty($page['page_id']);
                    if (isset($page['children'])) {
                        foreach ($page['children'] as $child) {
                            $this->assertNotEmpty($child['short_title']);
                            $this->assertNotEmpty($child['short_title']['en']);
                            $this->assertNotEmpty($child['url']);
                            $this->assertNotEmpty($child['url']['en']);
                            $this->assertNotEmpty($child['page_id']);
                            $tt = true;
                        }
                    }
                }
            }
        }

        $this->assertTrue($tt);
        $this->assertEquals(2, count($menuUrls[0]['pages'])); // one is secret

        $this->assertNotEmpty($menuUrls[4]['url']);
        $this->assertNotEmpty($menuUrls[4]['page_id']);
        $this->assertNotEmpty($menuUrls[4]['menu_name']);
        $this->assertNotEmpty($menuUrls[4]['id']); // menu->id
        $this->assertEmpty($menuUrls[4]['pages']);    // menu is connected with page, so pages is empty
    }
} // class
