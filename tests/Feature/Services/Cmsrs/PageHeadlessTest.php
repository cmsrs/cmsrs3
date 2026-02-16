<?php

namespace Tests\Feature\Services\Cmsrs;

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

        $res = $this->get('api/pages-short-title/'.$shortTitle);
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

        $resType = $this->get('api/pages-type/'.$type);
        $data = $resType->getData();
        $this->assertTrue($data->success);

        $this->assertEquals(count($predefinedShortTitle), count($data->data));
        $this->assertEquals($predefinedShortTitle[0], $data->data[0]->short_title->en);
    }
}
