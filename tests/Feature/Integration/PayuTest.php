<?php

namespace Tests\Feature\Integration;

//use Tests\TestCase;
use Tests\Feature\Base;
use App\Integration\Payu;
// use App\User;
// use App\Page;
// use App\Menu;
// use App\Product;
// use App\Translate;
// use App\Content;

class PayuTest extends  Base //TestCase
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
        $this->createClientUser();

        $additionalData = [
            /*
            "notifyUrl" => "https://your.eshop.com/notify",
            'customerIp' =>  '127.0.0.1', //$_SERVER['REMOTE_ADDR'],
            'currencyCode' => 'PLN',
            'description' => 'RTV market',
            'merchantPosId' => env('PAYU_POS_ID'),            
            'buyer' => [
                "email"=> "john.doe@example.com",
                //"phone"=> "654111654",
                //"firstName"=> "John",
                //"lastName"=> "Doe",
                "language"=> "pl"
            ],
            */
            "products" => [
                [
                    "name"=> "Wireless Mouse for Laptop",
                    "unitPrice"=> "15000",
                    "quantity"=> "1"
                ],
                [
                    "name"=> "HDMI cable",
                    "unitPrice"=> "6000",
                    "quantity"=> "1"
                ]
            ],
            'totalAmount' => '21000'
        ];


        $data = $this->payu->dataToSend( $additionalData );
        //dd($data);                
                
        $redirectUri = $this->payu->getOrder($data);
        
        $this->assertNotEmpty($redirectUri);
        $urlHost = parse_url($redirectUri, PHP_URL_HOST);
        $this->assertNotEmpty($urlHost);
        $this->assertEquals(parse_url(env('PAYU_URL'), PHP_URL_HOST), $urlHost );        
    }

}