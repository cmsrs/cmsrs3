<?php

namespace Tests\Feature\Services\Cmsrs;

use Illuminate\Foundation\Testing\RefreshDatabase;

class ProductNotShopTest extends Base
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
        putenv('IS_SHOP=false'); // !!!!!
        putenv('IS_LOGIN=true');
        putenv('IS_REGISTER=true');
        putenv('IS_HEADLESS=false');

        parent::setUp();
        $this->createUser();
    }

    protected function tearDown(): void
    {
        parent::tearDown();
    }

    public function test_not_shop_search_products_by_many_columns_pagination()
    {
        $lang = 'en';
        $column = 'sku';
        $direction = 'asc';
        $search = 'app_1';

        $url = 'api/products/pagination/'.$lang.'/'.$column.'/'.$direction.'?token='.$this->token.'&search='.$search;
        $response = $this->get($url);
        $this->assertEquals(404, $response->status());
    }

    public function test_not_shop_search_and_sort_checkout_by_total_price()
    {
        $lang = 'en';
        $column = 'price_total_add_deliver';
        $direction = 'asc';
        $search = 'client3';

        $url = 'api/checkouts/pagination/'.$lang.'/'.$column.'/'.$direction.'?token='.$this->token.'&search='.$search;
        $response = $this->get($url);
        $this->assertEquals(404, $response->status());
    }
}
