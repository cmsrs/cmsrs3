<?php

namespace Tests\Feature\Services\Cmsrs\Helpers;

use App\Services\Cmsrs\Helpers\PriceHelperService;
use Tests\TestCase;

class PriceHelperServiceTest extends TestCase
{
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
        putenv('IS_HEADLESS=false');

        parent::setUp();
    }

    protected function tearDown(): void
    {
        parent::tearDown();
    }

    public function test_get_price_description_wrap_t1()
    {
        $price = 123;
        // $currency = 'USD'; //get it from env file
        $priceDescription = PriceHelperService::getPriceDescriptionWrap($price);
        $this->assertEquals('$1.23', $priceDescription);
    }

    public function test_get_price_description_t1()
    {
        $price = 123;
        $currency = 'USD';
        $priceDescription = PriceHelperService::getPriceDescription($price, $currency);
        $this->assertEquals('$1.23', $priceDescription);
    }

    public function test_get_price_description_t2()
    {
        $price = 12312312;
        $currency = 'EUR';
        $priceDescription = PriceHelperService::getPriceDescription($price, $currency);
        $this->assertEquals('€123,123.12', $priceDescription);
    }

    public function test_get_price_description_t2b()
    {
        $price = 12312312;
        $currency = 'PLN';
        $priceDescription = PriceHelperService::getPriceDescription($price, $currency);
        $this->assertEquals('123,123.12 zł', $priceDescription);
    }

    public function test_get_price_description_t3()
    {
        $price = 12312312;
        $currency = 'EUR';
        $priceDescription = PriceHelperService::getPriceDescription($price, $currency);
        $this->assertEquals('€123,123.12', $priceDescription);
    }

    public function test_get_price_description_t4()
    {
        $price = 12312312;
        $currency = 'PLN';
        $priceDescription = PriceHelperService::getPriceDescription($price, $currency);
        $this->assertEquals('123,123.12 zł', $priceDescription);
    }
}
