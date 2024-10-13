<?php

namespace App\Integration;

use App\Services\Cmsrs\ConfigService;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Log;

class Payu extends Model
{
    private $client;

    public function __construct(array $attributes = [])
    {
        parent::__construct($attributes);

        $this->client = new \GuzzleHttp\Client([
            'base_uri' => env('PAYU_URL'),
            'allow_redirects' => false,
            'form_params' => [
                'grant_type' => 'client_credentials',
                'client_id' => env('PAYU_CLIENT_ID'),
                'client_secret' => env('PAYU_CLIENT_SECRET'),
            ],
        ]);
    }

    public function getAccessToken()
    {
        try {
            //$response = $this->client->post(env('PAYU_URL').'/pl/standard/user/oauth/authorize');
            $response = $this->client->post('/pl/standard/user/oauth/authorize');
            $token = (object) json_decode($response->getBody(), true);
        } catch (\Exception $e) {
            $strErr = 'Caught exception --payu auth--: '.$e->getMessage();
            Log::error($strErr);

            return false;
        }

        return $token->access_token;
    }

    public function dataToSend($additionalData, $checkoutData)
    {
        //dd( $objCheckout->toArray()  );

        $user = Auth::user();
        // if( empty($user) ){
        //     throw new \Exception('no user auth' );
        // }
        $lang = ConfigService::getDefaultLang();

        $data = [
            //"notifyUrl" =>  "http://demo.cmsrs.pl/home/orders", //"https://your.eshop.com/notify",
            'notifyUrl' => env('NOTIFY_URL'),  //"http://demo.cmsrs.pl/home", //"https://your.eshop.com/notify",
            'customerIp' => env('CUSTOMER_IP'), //  '127.0.0.1', //$_SERVER['REMOTE_ADDR'],
            'currencyCode' => 'PLN',
            'description' => env('APP_NAME'),
            'merchantPosId' => env('PAYU_POS_ID'),
            'buyer' => [
                'email' => ! empty($user) ? $user->email : $checkoutData['email'], //"john.doe@example.com",
                'phone' => $checkoutData['telephone'],
                'firstName' => $checkoutData['first_name'],
                'lastName' => $checkoutData['last_name'],

                'language' => 'pl', //$lang
            ],
            /*
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
            */
        ];

        return array_merge($data, $additionalData);
    }

    public function getOrder($data)
    {
        $accessToken = $this->getAccessToken();

        $redirectUri = null;

        try {
            //$response = $this->client->post(env('PAYU_URL').'/api/v2_1/orders/', [
            $response = $this->client->post('/api/v2_1/orders/', [
                'headers' => [
                    'Authorization' => 'Bearer '.$accessToken,
                ],
                'json' => $data,
                /*
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
                */
            ]);

            $contents = (object) json_decode($response->getBody()->getContents(), true);
            if ($contents->status['statusCode'] == 'SUCCESS') {
                $redirectUri = $contents->redirectUri;
            }

        } catch (\Exception $e) {
            $strErr = 'Caught exception: --payu order--'.$e->getMessage();
            Log::error($strErr);

            return false;
        }

        return $redirectUri;
    }
}
