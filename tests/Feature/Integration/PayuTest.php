<?php

namespace Tests\Feature\Integration;

use Tests\TestCase;
use App\Integration\Payu;
// use App\User;
// use App\Page;
// use App\Menu;
// use App\Product;
// use App\Translate;
// use App\Content;

class PayuTest extends TestCase
{
    private $payu;

    public function setUp(): void
    {
        parent::setUp();
        $this->payu = new Payu;
    }

    protected function tearDown(): void
    {
        parent::tearDown();
    }

    /** @test */
    public function it_will_get_access_token_from_payu()
    {
        $accessToken = $this->payu->getAccessToken();
        $this->assertNotEmpty($accessToken);
        $this->assertEquals(36, strlen($accessToken) );        
    }

    /** @test */
    public function it_will_get_order_from_payu()
    {
        $redirectUri = $this->payu->getOrder();
        
        $this->assertNotEmpty($redirectUri);
        $urlHost = parse_url($redirectUri, PHP_URL_HOST);
        $this->assertNotEmpty($urlHost);
        $this->assertEquals(parse_url(env('PAYU_URL'), PHP_URL_HOST), $urlHost );        
    }

}