<?php

namespace App\Integration;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Log;
use GuzzleHttp\Psr7\Request;

class Payu extends Model
{
    private $client;

    public function __construct(array $attributes = array())
    {
        parent::__construct($attributes);

        $this->client = new \GuzzleHttp\Client([
            'base_uri' => env('PAYU_URL'),
            'allow_redirects' => false,                
            'form_params' => [
                'grant_type' => 'client_credentials',
                'client_id' => env('PAYU_CLIENT_ID'),
                'client_secret' => env('PAYU_CLIENT_SECRET')
            ]
        ]);
    }

    public function getAccessToken()
    {
        try{
            $response = $this->client->post('/pl/standard/user/oauth/authorize');
            $token = (object) json_decode($response->getBody(), true);    
        } catch (\Exception $e) {
            $strErr = 'Caught exception: '.  $e->getMessage();
            Log::error($strErr);
            return false;
        }

        return $token->access_token; 
    }

    public function getOrder()
    {
        $accessToken = $this->getAccessToken();

        $redirectUri = null;

        try{            
            $response = $this->client->post('/api/v2_1/orders/', [
                'headers' => [
                    'Authorization' => 'Bearer '.$accessToken
                ],
                'json' => [
                    "notifyUrl" => "https://your.eshop.com/notify",
                    'customerIp' =>  '127.0.0.1', //$_SERVER['REMOTE_ADDR'],
                    'currencyCode' => 'PLN',
                    'description' => 'RTV market',
                    'merchantPosId' => env('PAYU_POS_ID'),
                    'totalAmount' => '21000',
                    'buyer' => [
                        "email"=> "john.doe@example.com",
                        //"phone"=> "654111654",
                        //"firstName"=> "John",
                        //"lastName"=> "Doe",
                        "language"=> "pl"
                    ],
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
                    ]
                ]
            ]); 
            
            $contents = (object) json_decode($response->getBody()->getContents(), true);
            if ( 'SUCCESS' ==  $contents->status['statusCode'] ){
                $redirectUri = $contents->redirectUri ;
            }

        } catch (\Exception $e) {
            $strErr = 'Caught exception: '.  $e->getMessage();
            Log::error($strErr);
            return false;
        }

        return $redirectUri;        
    }

}