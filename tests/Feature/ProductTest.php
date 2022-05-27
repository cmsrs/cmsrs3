<?php

namespace Tests\Feature;

//use App\Base;
use App\Page;
use App\Deliver;
use App\Payment;
use App\Checkout;
use App\Basket;
use App\Order;
use App\User;
use App\Menu;
use App\Image;
use App\Product;
use App\Translate;
use App\Content;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Auth;

class ProductTest extends Base
{
    use RefreshDatabase;

    private $name1;
    private $name2;

    private $testData;
    private $testData2;
    private $testPage;
    private $testMenu;
    private $menuId;

    private $pageId;

    const STR_DESC_IMG1 = 'description img1 - product image';
    const STR_PRODUCT_DESCRIPION_EN = 'book desc';
    const STR_PRODUCT_NAME_EN = 'php3 db app';    

    const STR_PRODUCT_NAME_EN_1 = 'name11';

    public function setUp(): void
    {
        putenv('LANGS="en"');
        putenv('API_SECRET=""');

        parent::setUp();
        $this->createUser();

        $this->testMenu =
            [
                'name'     => ['en' => 'books'],
            ];


        $this->name1 = 'phpunittest1.jpg';

        $this->name2 = 'phpunittest2.jpg';
    }

    protected function tearDown(): void
    {
        parent::tearDown();
    }

    private function setTestData()
    {
        $menu = (new Menu)->wrapCreate($this->testMenu);

        $this->menuObj = $menu; //$menu->all()->first();
        $this->menuId = $menu->id;  // $this->menuObj->id;
        $this->assertNotEmpty($this->menuId);

        $this->testPage =
        [
            'title' => ['en' => 'programmer' ],
            'short_title' => ['en' => 'page1' ],
            'published' => 1,
            'position' => 7,
            'type' => 'shop',
            'content' => ['en' => 'content test133445' ],
            'menu_id' => $this->menuId
        ];
        
        $p = (new Page)->wrapCreate($this->testPage);
        $this->assertNotEmpty($p->id);

        $type = 'shop';
        $res = $this->get('api/pages/type/' . $type . '?token=' . $this->token);

        $data = $res->getData();
        $this->assertTrue($data->success);

        $this->pageId = $data->data[0]->id;
        $this->assertNotEmpty($this->pageId);
        $this->assertEquals($p->id, $this->pageId);

        $this->testData = [
            'product_name' => [ 'en' =>  self::STR_PRODUCT_NAME_EN ],
            'sku' => 'AN/34534',
            'price' => 123,
            'product_description' =>  [ 'en'  =>  self::STR_PRODUCT_DESCRIPION_EN ] ,
            'page_id' => $this->pageId,
            'published' => 1,
            'images' => [
                ['name' => $this->name1, 'data' => $this->getFixtureBase64($this->name1),  'alt' => ['en' =>  self::STR_DESC_IMG1 ] ],
                ['name' => $this->name2, 'data' => $this->getFixtureBase64($this->name2)]
            ]
        ];
    }

    /**
     * the same menu as setTestData
     */
    private function setTestData2()
    {
        //$menu = (new Menu)->wrapCreate($this->testMenu);

        //$this->menuObj = $menu; //$menu->all()->first();
        //$this->menuId = $menu->id;  // $this->menuObj->id;
        //$this->assertNotEmpty($this->menuId);

        $testPage =
        [
            'title' => ['en' => 'programmer2' ],
            'short_title' => ['en' => 'page2' ],
            'published' => 1,
            'position' => 7,
            'type' => 'shop',
            'content' => ['en' => 'content test13344522' ],
            'menu_id' => $this->menuId
        ];
        
        $p = (new Page)->wrapCreate($testPage);
        $this->assertNotEmpty($p->id);

        $type = 'shop';
        $res = $this->get('api/pages/type/' . $type . '?token=' . $this->token);

        $data = $res->getData();

        
        $this->assertTrue($data->success);
        $pageId = null;
        foreach($data->data as $item){
            if($item->title->en == $testPage['title']['en']){
                $pageId  = $item->id;
                break;
            }
        }
        $this->assertNotEmpty($pageId);

        //$data->data[1]
        //$pageId = $data->data[1]->id; //!!



        //$this->assertNotEmpty($this->pageId);
        //$this->assertEquals($p->id, $this->pageId);

        $this->testData2 = [
            'product_name' => [ 'en' =>  self::STR_PRODUCT_NAME_EN.' 2' ],
            'sku' => 'AN/34534_22',
            'price' => 123,
            'product_description' =>  [ 'en'  =>  self::STR_PRODUCT_DESCRIPION_EN.' 2' ] ,
            'page_id' => $pageId,
            'published' => 1,
            'images' => [
                ['name' => $this->name1, 'data' => $this->getFixtureBase64($this->name1),  'alt' => ['en' =>  self::STR_DESC_IMG1 ] ],
                ['name' => $this->name2, 'data' => $this->getFixtureBase64($this->name2)]
            ]
        ];
    }




    /** @test */
    public function it_will_search_products()
    {
        $price1 = 11200; 
        $price2 = 32100;
        $ids = $this->setAddTwoProducts($price1, $price2);

        $key = self::STR_PRODUCT_NAME_EN_1;
        $lang = 'en';

        $objProducts = Product::searchProducts( $lang, $key);
        $arrProducts = Product::objToArray( $objProducts );

        $this->assertEquals(1, count($arrProducts));
        $this->assertNotEmpty($arrProducts[0]);

        $products = (new Product)->wrapSearchProducts( $lang, $key);
        $this->assertEquals(1,count($products));
        //dd($products);
    }

    /**
     * api admin
     * it should be 2 tests - todo - get and update
     */
    /** @test */
    public function it_will_get_and_update_checkouts_docs()
    {
        /*** set data - fixture */

        $price1 = 11200; 
        $price2 = 32100;
        $ids = $this->setAddTwoProducts($price1, $price2);
        $id1 = $ids['id1'];
        $id2 = $ids['id2'];        

        $qty0a = 2;
        $qty1a = 5;
        $firstName = 'Jan';
        $data =
        Array
        (
            '_token' => 'gTXqPBuPTbTz1yKecuMiaX8j5ynB1LiO4ul01PwZ',
            'products' => Array
                (
                    0 => Array
                        (
                            'id' => $id1,
                            'qty' => $qty0a
                        ),
        
                    1 => Array
                        (
                            'id' => $id2,
                            'qty' => $qty1a
                        ),
                    2 => Array //fake
                        (
                            'id' => 10003,
                            'qty' => 44
                        )
                ),
        
            'lang' => 'en',
            'email' => 'client@cmsrs.pl',
            'first_name' => $firstName,
            'last_name' => 'Kowalski',
            'address' => 'kolejowa 1 m 2',
            'country' => 'Polska',
            'city' => 'Warszawa',
            'telephone' => '1234567123',
            'postcode' => '03-456',
            'deliver' => Deliver::KEY_DPD_COURIER,
            'payment' => Payment::KEY_CASH
        );

        $pCheckout = [
            'title'     => [ "en" =>'Checkout', "pl" => "Kasa" ],
            'short_title' => [ "en" =>'Checkout', "pl" => "Kasa"],
            'description' => [ "en" =>'Description... Needed for google', "pl" => 'Opis..... Potrzebne dla googla'  ],
            'published' => 1,
            'commented' => 0,
            'type' => 'checkout',
            //'content' => [ "en" => $this->getPrivacyPolicy(), "pl" => $this->getPrivacyPolicy() ],
            'images' => [
            ]
        ];

        $pShoppingsuccess = [
            'title'     => [ "en" =>'CheckoutSS', "pl" => "KasaSS" ],
            'short_title' => [ "en" =>'CheckoutSS', "pl" => "KasaSS"],
            'description' => [ "en" =>'Description... Needed for google', "pl" => 'Opis..... Potrzebne dla googla'  ],
            'published' => 1,
            'commented' => 0,
            'type' => 'shoppingsuccess',
            //'content' => [ "en" => $this->getPrivacyPolicy(), "pl" => $this->getPrivacyPolicy() ],
            'images' => [
            ]
        ];
        

        $p = (new Page)->wrapCreate($pCheckout);
        $this->assertNotEmpty($p->id);

        $p2 = (new Page)->wrapCreate($pShoppingsuccess);
        $this->assertNotEmpty($p2->id);        

        $response0 = $this->post('/post/checkout', $data);
        //dd($response0);
        $response0->assertStatus(302);  

        $c1 = Checkout::all()->count();
        $this->assertEquals(1, $c1);


        $ch = Checkout::first();
        $this->assertEquals(0, $ch->is_pay);
        $this->assertNotEmpty($ch->id);        

        /*** start testing */

        $response = $this->get('api/checkouts?token='.$this->token);
        //dd($response);

        $res = $response->getData();
        $this->assertTrue($res->success);        
        $this->assertEquals($c1, count($res->data));


        $this->assertEquals( $ch->id, $res->data[0]->id );
        $this->assertEquals( Auth::user()->id, $res->data[0]->user_id );
        $this->assertNotEmpty( $res->data[0]->email );
        $this->assertNotEmpty($res->data[0]->first_name  );
        $this->assertNotEmpty($res->data[0]->last_name  );
        $this->assertNotEmpty($res->data[0]->address  );
        $this->assertNotEmpty($res->data[0]->country  );
        $this->assertNotEmpty($res->data[0]->city  );
        $this->assertNotEmpty($res->data[0]->telephone  );
        $this->assertNotEmpty($res->data[0]->postcode  );
        $this->assertEquals(0,  $res->data[0]->is_pay  );
        $this->assertNotEmpty($res->data[0]->created_at  );

        $this->assertNotEmpty($res->data[0]->baskets  );
        $this->assertTrue(  is_array( $res->data[0]->baskets ) );


        $orders = Order::all()->toArray();
        $this->assertEmpty($orders);

        $dataUpdate = [
            'is_pay' => 1
        ];


        $response2 = $this->put('api/checkouts/'.$ch->id.'?token='.$this->token, $dataUpdate);
        //dd($response2);
        $res2 = $response2->getData();

        $this->assertTrue($res2->success);


        $orders = Order::all()->toArray();
        $this->assertNotEmpty($orders);

        $this->assertEquals(2,  count($orders) );


        //the same !!!
        foreach($orders as $o){

            $this->assertTrue( in_array( $o['product_id'], $ids ) ); 
            if( $o['product_id'] == $ids['id1'] ){
                $this->assertEquals($qty0a, $o['qty']);
            }elseif( $o['product_id'] == $ids['id2'] ){
                $this->assertEquals($qty1a, $o['qty']);
            }else{
                $this->assertTrue(false); //this case is imposible
            }
        }


        //second time update
        $response2b = $this->put('api/checkouts/'.$ch->id.'?token='.$this->token, $dataUpdate);
        //dd($response2);
        $res2b = $response2b->getData();
        $this->assertTrue($res2b->success);


        $orders = Order::all()->toArray();
        $this->assertNotEmpty($orders);

        $this->assertEquals(2,  count($orders) );

        //the same !!!
        foreach($orders as $o){

            $this->assertTrue( in_array( $o['product_id'], $ids ) ); 
            if( $o['product_id'] == $ids['id1'] ){
                $this->assertEquals($qty0a, $o['qty']);
            }elseif( $o['product_id'] == $ids['id2'] ){
                $this->assertEquals($qty1a, $o['qty']);
            }else{
                $this->assertTrue(false); //this case is imposible
            }
        }



        $response3= $this->get('api/checkouts?token='.$this->token);
        $res3 = $response3->getData();
        $this->assertTrue($res3->success);        
        $this->assertEquals($c1, count($res3->data));

        $this->assertEquals($ch->id, $res3->data[0]->id);
        $this->assertEquals( $dataUpdate['is_pay'],  $res3->data[0]->is_pay );


        $response0Next = $this->post('/post/checkout', $data);
        $response0->assertStatus(302);  

        $c2 = Checkout::all()->count();
        $this->assertEquals(2, $c2);
        $chLast = Checkout::all()->reverse()->first();

        $this->assertNotEquals($ch->id, $chLast->id);
        //dd($chLast);

        $response2c = $this->put('api/checkouts/'.$chLast->id.'?token='.$this->token, $dataUpdate);
        //dd($response2);
        $res2c = $response2c->getData();
        $this->assertTrue($res2c->success);


        $orders = Order::all()->toArray();
        $this->assertNotEmpty($orders);

        $this->assertEquals(2,  count($orders) );

        //NOT the same !!!
        foreach($orders as $o){

            $this->assertTrue( in_array( $o['product_id'], $ids ) ); 
            if( $o['product_id'] == $ids['id1'] ){
                $this->assertEquals( 2 * $qty0a, $o['qty']); //2x
            }elseif( $o['product_id'] == $ids['id2'] ){
                $this->assertEquals( 2 * $qty1a, $o['qty']); //2x
            }else{
                $this->assertTrue(false); //this case is imposible
            }
        }

    }

    /**
     * it is not test admin
     * proccess of buying productcs
    */
    /** @test */
    public function it_will_save_checkout()
    {
        $price1 = 11200; 
        $price2 = 32100;
        $ids = $this->setAddTwoProducts($price1, $price2);
        $id1 = $ids['id1'];
        $id2 = $ids['id2'];        

        $user = Auth::user();    
        $this->assertNotEmpty($user->id);

        $pShoppingSuccess = [
            'title'     => [ "en" =>'Shopping Success', "pl" => "Twoje zakupy" ],
            'short_title' => [ "en" =>'Shopping Success', "pl" => "Twoje zakupy"],
            'description' => [ "en" =>'Description... Needed for google', "pl" => 'Opis..... Potrzebne dla googla'  ],
            'published' => 1,
            'commented' => 0,
            'type' => 'shoppingsuccess',
            //'content' => [ "en" => $this->getPrivacyPolicy(), "pl" => $this->getPrivacyPolicy() ],
            'images' => [
            ]
        ];
        (new Page)->wrapCreate($pShoppingSuccess);

        $qty0a = 2;
        $qty1a = 5;
        $firstName = 'Jan';
        $data =
        Array
        (
            '_token' => 'gTXqPBuPTbTz1yKecuMiaX8j5ynB1LiO4ul01PwZ',
            'products' => Array
                (
                    0 => Array
                        (
                            'id' => $id1,
                            'qty' => $qty0a
                        ),
        
                    1 => Array
                        (
                            'id' => $id2,
                            'qty' => $qty1a
                        ),
                    2 => Array //fake
                        (
                            'id' => 10003,
                            'qty' => 44
                        )
                ),
        
            'lang' => 'en',
            'email' => 'client@cmsrs.pl',
            'first_name' => $firstName,
            'last_name' => 'Kowalski',
            'address' => 'kolejowa 1 m 2',
            'country' => 'Polska',
            'city' => 'Warszawa',
            'telephone' => '1234567123',
            'postcode' => '03-456',
            'deliver' => Deliver::KEY_DPD_COURIER,
            'payment' => Payment::KEY_CASH
        );

        $pCheckout = [
            'title'     => [ "en" =>'Checkout', "pl" => "Kasa" ],
            'short_title' => [ "en" =>'Checkout', "pl" => "Kasa"],
            'description' => [ "en" =>'Description... Needed for google', "pl" => 'Opis..... Potrzebne dla googla'  ],
            'published' => 1,
            'commented' => 0,
            'type' => 'checkout',
            //'content' => [ "en" => $this->getPrivacyPolicy(), "pl" => $this->getPrivacyPolicy() ],
            'images' => [
            ]
        ];

        $pShoppingsuccess = [
            'title'     => [ "en" =>'CheckoutSS', "pl" => "KasaSS" ],
            'short_title' => [ "en" =>'CheckoutSS', "pl" => "KasaSS"],
            'description' => [ "en" =>'Description... Needed for google', "pl" => 'Opis..... Potrzebne dla googla'  ],
            'published' => 1,
            'commented' => 0,
            'type' => 'shoppingsuccess',
            //'content' => [ "en" => $this->getPrivacyPolicy(), "pl" => $this->getPrivacyPolicy() ],
            'images' => [
            ]
        ];


        $c0 = Checkout::all()->count();
        $this->assertEquals(0, $c0);

        $p = (new Page)->wrapCreate($pCheckout);
        $this->assertNotEmpty($p->id);
        $p2 = (new Page)->wrapCreate($pShoppingsuccess);
        $this->assertNotEmpty($p2->id);

        $c100 = Checkout::all()->count();
        $this->assertEquals(0, $c100);

        
        $response0 = $this->post('/post/checkout', $data);
        //dd($response0);
        $response0->assertStatus(302);  


        $c1 = Checkout::all()->count();
        $this->assertEquals(1, $c1);

        $ch = Checkout::first(); //->toArray();

        $this->assertEquals(0, $ch->is_pay);
        $this->assertEquals($user->id, $ch->user_id);
        $this->assertEquals($firstName, $ch->first_name);


        $this->assertNotEmpty($ch->price_total);
        $this->assertNotEmpty($ch->price_deliver);
        $this->assertNotEmpty($ch->price_total_add_deliver);
        $this->assertEquals($ch->price_total + $ch->price_deliver, $ch->price_total_add_deliver);


        $this->assertNotEmpty($ch->session_id);
        $sessionId = session()->getId();
        $this->assertEquals($sessionId, $ch->session_id);

        $this->assertEquals(2, $ch->baskets->count() );
        foreach($ch->baskets as $basket){
            $b =  $basket->toArray();
            $this->assertTrue( in_array( $b['product_id'], $ids ) ); 
            if( $b['product_id'] == $ids['id1'] ){
                $this->assertEquals($price1, $b['price']);
            }
            if( $b['product_id'] == $ids['id2'] ){
                $this->assertEquals($price2, $b['price']);
            }

        }

        /*
        $o0 = Order::all()->count();
        $this->assertEquals(0, $o0);
        $isCopy0 =  Order::copyDataFromBasketToOrderForUser($ch);
        $this->assertTrue($isCopy0);


        $o1count = Order::all()->count();
        $this->assertEquals(2, $o1count);
        */        

        //print_r(Order::all()->toArray());

        $ch1 = Checkout::first(); //->toArray();
        $this->assertEquals(0, $ch1->is_pay);        

        /**
         * second process payment
         */
        $qty1b = 32;
        $data['products'] = [
            [
                'id' => $id2,
                'qty' => $qty1b
            ]
        ];
        $response1 = $this->post('/post/checkout', $data);
        $response1->assertStatus(302);          
        $this->assertEquals(2, Checkout::all()->count());

        
        $ch = Checkout::findActiveOrder();
        $this->assertNotEmpty($ch);
        $this->assertEquals(0, $ch->is_pay);

        
        //pShoppingSuccess
        $pSuc = Page::getFirstPageByType('shoppingsuccess');
        $this->assertNotEmpty($pSuc);
        $urlShoppingSuccess = $pSuc->getUrl('en');
        $response3 = $this->get($urlShoppingSuccess);
        $response3->assertStatus(200); //because there is checkout_id in session therefore is 200 status


        /*
        $ret1 =  Order::copyDataFromBasketToOrderForUser();
        $this->assertTrue($ret1);
        $ch2 = Checkout::findActiveOrder();
        $this->assertEmpty($ch2);

        $ret1b = Order::copyDataFromBasketToOrderForUser();
        $this->assertFalse($ret1b);        

        $o2count = Order::all()->count();
        $this->assertEquals($o2count, $o1count);
        
        $arrOrders = Order::all()->toArray();
        $this->assertEquals($o2count, count($arrOrders) );

        //print_r($arrOrders);
        foreach($arrOrders as $o){
            $this->assertTrue( in_array( $o['product_id'], $ids ) ); 
            if( $o['product_id'] == $ids['id1'] ){
                $this->assertEquals($qty0a, $o['qty']);
            }
            if( $o['product_id'] == $ids['id2'] ){
                $this->assertEquals( ($qty1a + $qty1b), $o['qty'] );
            }
        }
        */
    }

    /**
     * it is not test admin
     * this api is use in backet (it is usefull when name and price will be changing)
     */
    /** @test */
    public function it_will_get_name_and_price_by_lang()
    {
        /* prepare data - start */
        $this->setTestData();        
        $response0 = $this->post('api/products?token=' . $this->token, $this->testData);
        $res0 = $response0->getData();
        $this->assertTrue($res0->success);        

        $this->testData['sku'] = 'uniq2';
        $this->testData['published'] = 1;
        $this->testData['product_name']['en'] = 'product name uniq en2';
        $response1 = $this->post('api/products?token=' . $this->token, $this->testData);
        //dd($response1 );
        $res1 = $response1->getData();
        $this->assertTrue($res1->success);

        $countProd = Product::all()->count();
        $this->assertEquals(2, $countProd);

        $productArr = Product::all()->toArray();
        //dd($productArr);

        $pId1 = $productArr[0]['id'];
        $pId2 = $productArr[1]['id'];        
        $arrIds = [$pId1, $pId2];
        /* prepare data - stop */

        $lang = 'en';
        $response = $this->get('api/productsGetNameAndPrice/'.$lang);

        //dd($response);
        $data = $response->getData();
        $this->assertTrue($data->success);

        $dd = (array)$data->data;
        $this->assertEquals( count($arrIds) , count( $dd )  );

        foreach($arrIds as $pId){
            $this->assertNotEmpty($data->data->$pId->price);
            $this->assertNotEmpty($data->data->$pId->name);
            $this->assertNotEmpty($data->data->$pId->url_product);
            $this->assertNotEmpty($data->data->$pId->url_image);
            //$this->assertNotEmpty($data->data->$pId->product_id);            
            //$this->assertEquals($data->data->$pId->product_id, $pId);
        }

        $lang = '';
        $response = $this->get('api/productsGetNameAndPrice/'.$lang);        
        $data2 = $response->getData();
        $this->assertTrue($data2->success);
        $this->assertEquals($data, $data2 );

        //dd($response);
    }



    /**
     * it is not test admin
     */
    /** @test */
    /*
    public function it_will_save_to_basket()
    {
        $ids = $this->setAddTwoProducts();
        $id1 = $ids['id1'];
        $id2 = $ids['id2'];        

        $user = Auth::user();    

        $baskets = [
            0 => [
              "qty" => 10,
              "user_id" => $user->id,
              "product_id" => $id1
            ],
            1 => [
              "qty" => 5,
              "user_id" => $user->id,
              "product_id" => $id2
            ]
        ];

        $objBaskets = Basket::inBasketByUserId($user->id);
        $this->assertEmpty($objBaskets);

        Basket::deleteBasketByObjBaskets($objBaskets);

        Basket::saveBaskets($baskets);
        $objBaskets2 = Basket::inBasketByUserId($user->id);
        $this->assertNotEmpty($objBaskets2);

        Basket::deleteBasketByObjBaskets($objBaskets2);

        $objBaskets3 = Basket::inBasketByUserId($user->id);        
        $this->assertEmpty($objBaskets3);        

        $isNewOrders = Order::moveDataFromBasketToOrderForUser();
        $this->assertFalse($isNewOrders);        
        $objOrders = Order::inOrdersByUserId($user->id);
        $this->assertEmpty($objOrders);        
        //dd($basket);
    }
    */

    /**
     * it is not test admin
     */
    /** @test */
    /*
    public function it_will_save_to_order()
    {
        $ids = $this->setAddTwoProducts();
        $id1 = $ids['id1'];
        $id2 = $ids['id2'];        

        $user = Auth::user();    

        $baskets = [
            0 => [
              "qty" => 10,
              "user_id" => $user->id,
              "product_id" => $id1
            ],
            1 => [
              "qty" => 5,
              "user_id" => $user->id,
              "product_id" => $id2
            ]
        ];

        Basket::deleteBasketAndAddNewData($user->id, $baskets);        
        $objBaskets4 = Basket::inBasketByUserId($user->id);
        $this->assertNotEmpty($objBaskets4);

        $isNewOrders2 = Order::moveDataFromBasketToOrderForUser();
        $this->assertTrue($isNewOrders2);        

        $objBaskets5 = Basket::inBasketByUserId($user->id);
        $this->assertEmpty($objBaskets5);

        $objOrders2 = Order::inOrdersByUserId($user->id);
        $this->assertNotEmpty($objOrders2);

        $b = $objBaskets4->toArray();
        $o = $objOrders2->toArray();

        $count = 2;
        $this->assertEquals($count, count($b));
        $this->assertEquals($count, count($o));

        for($i =0; $i<$count; $i++){
            $this->assertEquals($b[$i]["qty"], $o[$i]["qty"]);
            $this->assertEquals($b[$i]["user_id"], $o[$i]["user_id"]);
            $this->assertEquals($b[$i]["product_id"], $o[$i]["product_id"]);        
        }
    }
    */



    /**
     * it is not test admin
     */
    /** @test */
    /*
    public function it_will_save_two_times_to_order()
    {
        $ids = $this->setAddTwoProducts();
        $id1 = $ids['id1'];
        $id2 = $ids['id2'];        

        $user = Auth::user();    

        $qty0a = 10;
        $baskets = [
            0 => [
              "qty" => $qty0a,
              "user_id" => $user->id,
              "product_id" => $id1
            ],
            // 1 => [
            //   "qty" => 5,
            //   "user_id" => $user->id,
            //   "product_id" => $id2
            // ]
        ];

        //first time
        Basket::deleteBasketAndAddNewData($user->id, $baskets);        
        $objBaskets4 = Basket::inBasketByUserId($user->id);
        $this->assertNotEmpty($objBaskets4);

        $isNewOrders2 = Order::moveDataFromBasketToOrderForUser();
        $this->assertTrue($isNewOrders2);        

        $objBaskets5 = Basket::inBasketByUserId($user->id);
        $this->assertEmpty($objBaskets5);

        $objOrders2 = Order::inOrdersByUserId($user->id);
        $this->assertNotEmpty($objOrders2);

        $b = $objBaskets4->toArray();
        $o = $objOrders2->toArray();

        $count = 1;
        $this->assertEquals($count, count($b));
        $this->assertEquals($count, count($o));

        for($i =0; $i<$count; $i++){
            $this->assertEquals($b[$i]["qty"], $o[$i]["qty"]);
            $this->assertEquals($b[$i]["user_id"], $o[$i]["user_id"]);
            $this->assertEquals($b[$i]["product_id"], $o[$i]["product_id"]);        
        }

        //second time
        $qty0b = 22;        
        $qty1 = 7;
        $baskets[0]['qty'] = $qty0b;
        $baskets[1] = [
              "qty" => $qty1,
              "user_id" => $user->id,
              "product_id" => $id2
        ];

        Basket::deleteBasketAndAddNewData($user->id, $baskets);        
        $objBaskets4 = Basket::inBasketByUserId($user->id);
        $this->assertNotEmpty($objBaskets4);

        $isNewOrders2 = Order::moveDataFromBasketToOrderForUser();
        $this->assertTrue($isNewOrders2);        

        $objBaskets5 = Basket::inBasketByUserId($user->id);
        $this->assertEmpty($objBaskets5);

        $objOrders2 = Order::inOrdersByUserId($user->id);
        $this->assertNotEmpty($objOrders2);

        $b2 = $objBaskets4->toArray();
        $o2 = $objOrders2->toArray();

        $count = 2;
        $this->assertEquals($count, count($b2));
        $this->assertEquals($count, count($o2));

        $this->assertEquals($qty0a + $qty0b, $o2[0]["qty"]);
        $this->assertEquals($user->id, $o2[0]["user_id"]);
        $this->assertEquals($id1, $o2[0]["product_id"]);        

        $this->assertEquals($qty1, $o2[1]["qty"]);
        $this->assertEquals($user->id, $o2[1]["user_id"]);
        $this->assertEquals($id2, $o2[1]["product_id"]);        
    }
    */

    private function setAddTwoProducts($price1 = 11200, $price2 = 32100)
    {

        $this->setTestData();
        //it must be 2 product in this test!!!
        $testData1 = $this->testData;
        $testData2 = $this->testData;        

        $testData1['sku'] = '11';
        $testData1['price'] = $price1;
        $testData1['product_name']['en'] =  self::STR_PRODUCT_NAME_EN_1;  // 'name11';        
        $r0 = $this->post('api/products?token=' . $this->token, $testData1);
        $this->assertTrue($r0->getData()->success);
        $testData2['sku'] = '22';
        $testData2['price'] = $price2;
        $testData2['product_name']['en'] = 'name22';                
        $r1 = $this->post('api/products?token=' . $this->token, $testData2);
        $this->assertTrue($r1->getData()->success);

        $products = Product::all()->toArray();
        $this->assertEquals( 2, count($products));


        $id1 = $products[0]['id'];
        $id2 = $products[1]['id'];        

        return ['id1' =>$id1, 'id2' =>$id2 ];
    }
      


    /**
     * it is not test admin
     * it tests home/api/tobank
     */
    /** @test */
    public function it_will_get_products_and_total_amount()
    {
        //dd($products);

        $price1 = 11200;
        $price2 = 32100;        

        $qty1 = 10;
        $qty2 = 5;        

                
        $ids = $this->setAddTwoProducts($price1, $price2);
        $id1 = $ids['id1'];
        $id2 = $ids['id2'];        



        /*
        name and price is not important in this post
        */        
        $json = 
        '{
            "cart": [
                {
                    "id": '.$id1.',
                    "name": "PHP3 aplikacje bazodanowe - xxxxxxxxxxxxxxxxxxxxxxxyyyyyyyyyyyyyy",
                    "price": 119999999999999999999,
                    "qty": '.$qty1.'
                },
                {
                    "id": '.$id2.',
                    "name": "PHP5 nott imporstentttttttttttt",
                    "price": 30999999999999,
                    "qty": '.$qty2.'
                }
            ]
        }';

        $obj = json_decode($json);
        $this->assertEquals(2, count($obj->cart));

        $arrCart = \App\Base::reIndexArr($obj->cart);        

        //dd($arrCart);
        //dd('________ffff_____');        

        $baskets = [];
        $orders = '';
        $data  = Product::getDataToPayment( $arrCart, $baskets, $orders );
        $this->assertEquals(2, count($baskets));        
        $this->assertEmpty( $orders );


        $this->assertEquals(2, count($data['products']));
        $this->assertEquals(  ($price1 * $qty1 + $price2 * $qty2) , $data['totalAmount']);


        $this->assertNotEmpty( $data['products'][0]['name'] );
        $this->assertEquals( self::STR_PRODUCT_NAME_EN_1, $data['products'][0]['name'] );
        $this->assertEquals( $qty1, $data['products'][0]['quantity'] );        
        $this->assertEquals( $price1, $data['products'][0]['unitPrice'] );                

        $this->assertNotEmpty( $data['products'][1]['name'] );
        $this->assertEquals( $qty2, $data['products'][1]['quantity'] );        
        $this->assertEquals( $price2, $data['products'][1]['unitPrice'] );                

        $baskets2 = false;
        $orders2 = [];
        Product::getDataToPayment( $arrCart, $baskets2, $orders2);
        $this->assertEmpty( $baskets2 );
        $this->assertEquals(2, count($orders2));
        foreach($orders2 as $order2){
            $this->assertNotEmpty( $order2['product_url'] );
            $this->assertNotEmpty( $order2['product_img'] );
        }
    }


    /**
     * it is not test admin
     * it tests home/api/tobank
     */
    /** @test */
    /*
    public function it_will_post_to_bank()
    {
        //dd($products);

        $ids = $this->setAddTwoProducts();
        $id1 = $ids['id1'];
        $id2 = $ids['id2'];        

        
        //name and price is not important in this post                
        $json = 
        '{
            "cart": [
                {
                    "id": '.$id1.',
                    "name": "PHP3 aplikacje bazodanowe - xxxxxxxxxxxxxxxxxxxxxxxyyyyyyyyyyyyyy",
                    "price": 119999999999999999999,
                    "qty": 10
                },
                {
                    "id": '.$id2.',
                    "name": "PHP5 nott imporstentttttttttttt",
                    "price": 30999999999999,
                    "qty": 5
                }
            ]
        }';

        $obj = json_decode($json);
        $this->assertEquals(2, count($obj->cart));


        $this->assertAuthenticated();
        $token = User::getTokenForClient();
        $this->assertNotEmpty($token);

        $user = Auth::user();    
        $this->assertTrue(Auth::check()); //I dont understand why becayse we dont use this: //Auth::login($user);
        
        $response = $this->post('home/api/tobank?token='.$token, ["cart" => $obj->cart] );
        $response->assertStatus(200);
        //dd( $response->getData() );

        $res1 = $response->getData();
        $this->assertTrue($res1->success);        
        $this->assertNotEmpty($res1->data);                
        //dd($res1->data);                        

        $user = Auth::user();            
        $objBaskets4 = Basket::inBasketByUserId($user->id);
        $this->assertNotEmpty($objBaskets4);

        $baskets4 = $objBaskets4->toArray();

        //dump($baskets4);
        //dump($obj->cart);
        //dd('____00__');

        $i = 0;
        foreach($obj->cart as $cart ){
            $this->assertEquals($baskets4[$i]['product_id'], $cart->id  );
            $this->assertEquals($baskets4[$i]['qty'], $cart->qty  );            
            $i++;
        }

    }
    */


    /** @test */
    public function it_will_create_product_with_images_by_page()
    {
        $this->setTestData();

        $response0 = $this->post('api/products?token=' . $this->token, $this->testData);
        $res0 = $response0->getData();
        $this->assertTrue($res0->success);        

        $this->testData['sku'] = 'uniq2';
        $this->testData['published'] = 0;
        $this->testData['product_name']['en'] = 'product name uniq en2';
        $response1 = $this->post('api/products?token=' . $this->token, $this->testData);
        $res1 = $response1->getData();
        $this->assertTrue($res1->success);

        $countProd = Product::all()->count();
        $this->assertEquals(2, $countProd);
        
        $products = (new Product)->getProductsWithImagesByPage($this->pageId);
        $this->assertEquals(1, count($products));
        $this->assertEquals($this->pageId, $products[0]['page_id']);
        $this->assertEquals(1, $products[0]['published']);
        $this->assertEquals(self::STR_PRODUCT_NAME_EN, $products[0]['product_name']['en']);

        // $urls = (new Product)->getProductsUrl();
        // $this->assertEquals(1, count($urls));
        // $this->assertNotEmpty($urls[0]['en']);
        // $response = $this->get($urls[0]['en']);
        // $response->assertStatus(200);
    }


    /** @test */
    public function it_will_unpublish_one_page_in_menu_product()
    {
        $this->setTestData();
        //$this->setTestData2();

        $response0 = $this->post('api/products?token=' . $this->token, $this->testData);

        $res0 = $response0->getData();

        $this->assertTrue($res0->success);        

        $urls = (new Product)->getProductsUrl();

        //dd($urls);
        $this->assertEquals(1, count($urls));
        $prodUrl = $urls[0]['en'];
        $this->assertNotEmpty($prodUrl);
        $response = $this->get($prodUrl);
        $response->assertStatus(200);

        $response22 = $this->get('api/products?token='.$this->token);
        $res22 = $response22->getData();
        $productId = $res22->data[0]->id;


        $this->testData['published'] = 0;
        $response2 = $this->put('api/products/'.$productId.'?token='.$this->token, $this->testData);    
        $res2 = $response2->getData();
        $this->assertTrue($res2->success);

        $products = Product::all()->toArray();
        $this->assertEquals(0, $products[0]['published']);
        $urls2 = (new Product)->getProductsUrl();
        $this->assertEmpty($urls2);
        //dd($urls);

        $response2 = $this->get($prodUrl);
        $response2->assertStatus(404);
    }



    /** @test */
    public function it_will_unpublish_product()
    {
        $this->setTestData();
        $this->setTestData2();

        $response0 = $this->post('api/products?token=' . $this->token, $this->testData);

        $res0 = $response0->getData();

        $this->assertTrue($res0->success);        

        $urls = (new Product)->getProductsUrl();

        //dd($urls);
        $this->assertEquals(1, count($urls));
        $prodUrl = $urls[0]['en'];
        $this->assertNotEmpty($prodUrl);
        $response = $this->get($prodUrl);
        $response->assertStatus(200);

        $response22 = $this->get('api/products?token='.$this->token);
        $res22 = $response22->getData();
        $productId = $res22->data[0]->id;


        $this->testData['published'] = 0;
        $response2 = $this->put('api/products/'.$productId.'?token='.$this->token, $this->testData);    
        $res2 = $response2->getData();
        $this->assertTrue($res2->success);

        $products = Product::all()->toArray();
        $this->assertEquals(0, $products[0]['published']);
        $urls2 = (new Product)->getProductsUrl();
        $this->assertEmpty($urls2);
        //dd($urls);

        $response2 = $this->get($prodUrl);
        $response2->assertStatus(404);
    }

    /** @test */
    public function it_will_unpublish_page()
    {
        $this->setTestData();

        $response0 = $this->post('api/products?token=' . $this->token, $this->testData);

        $res0 = $response0->getData();

        $this->assertTrue($res0->success);        

        $urls = (new Product)->getProductsUrl();
        $this->assertEquals(1, count($urls));
        $prodUrl = $urls[0]['en'];        
        $this->assertNotEmpty($prodUrl);

        // $response = $this->get($prodUrl);
        // $response->assertStatus(200);

        $page = Page::all()->first();
        $page->published = 0;
        $page->save();

        //$page2 = Page::all()->toArray();
        //dd($page2);

        $response2 = $this->get($prodUrl);
        $response2->assertStatus(404);
    }


    /** @test */
    /*
    public function it_will_get_product_data_by_product_id()
    {
        $this->setTestData();

        $response0 = $this->post('api/products?token=' . $this->token, $this->testData);

        $res0 = $response0->getData();
        $this->assertTrue($res0->success);        

        $productId = $res0->data->productId;
        $this->assertNotEmpty($productId);

        $data = (new Product)->getProductDataByProductId( $productId );
        $this->assertEquals($productId, $data['id']);
        $this->assertEquals(self::STR_PRODUCT_NAME_EN, $data['product_name']['en']);

        $urlCategory = $data['url_category']['en'];
        $urlProduct = $data['url_product']['en'];

        $response = $this->get($urlCategory);
        $response->assertStatus(200);
        
        $response = $this->get($urlProduct);
        $response->assertStatus(200);

        //$pos = strpos($response->getContent(), $pageTitle);
        //$this->assertNotEmpty($pos, $pageTitle);


        $this->testData['product_name']['en'] = 'test uniq';
        $this->testData['sku'] = 'AN/34534_qwe';
        $this->testData['page_id'] = strval($this->testData['page_id']);

        var_dump($this->testData['page_id']);
        $response1 = $this->post('api/products?token=' . $this->token, $this->testData);
        $res1 = $response1->getData();
        $this->assertTrue($res1->success);        
    }
    */


    /**
     * similar function to: it_will_get_product_by_slug
     * except one page belongs to menu
     */
    /** @test */    
    public function it_will_get_one_product_in_menu_by_slug()
    {
        $this->setTestData();
        //$this->setTestData2();        

        $response0 = $this->post('api/products?token=' . $this->token, $this->testData);
        //dd($response0);

        $res0 = $response0->getData();
        $this->assertTrue($res0->success);        

        $productId = $res0->data->productId;
        $this->assertNotEmpty($productId);

        $lang = 'en';
        $slugProductName = Str::slug(self::STR_PRODUCT_NAME_EN, '-');
        //dump($slugProductName);
        $product = (new Product)->getProductBySlug($slugProductName, $lang);

        $this->assertNotEmpty($product);

        $this->assertEquals($productId, $product['id']);

        $urls = $product->getProductUrls($product);  

        //dump($urls);
        $this->assertNotEmpty($urls);

        $urlCategory = $urls['url_category']['en'];
        $urlProduct = $urls['url_product']['en'];

        $response = $this->get($urlCategory);
        $response->assertStatus(200);
        
        $response = $this->get($urlProduct);
        $response->assertStatus(200);        

        $product2 = (new Product)->getProductBySlug('fake', $lang);
        $this->assertEquals(null, $product2);
    }

    /** @test */    
    public function it_will_get_product_by_slug()
    {
        $this->setTestData();
        $this->setTestData2();        

        $response0 = $this->post('api/products?token=' . $this->token, $this->testData);
        //dd($response0);

        $res0 = $response0->getData();
        $this->assertTrue($res0->success);        

        $productId = $res0->data->productId;
        $this->assertNotEmpty($productId);

        $lang = 'en';
        $slugProductName = Str::slug(self::STR_PRODUCT_NAME_EN, '-');
        //dump($slugProductName);
        $product = (new Product)->getProductBySlug($slugProductName, $lang);

        $this->assertNotEmpty($product);

        $this->assertEquals($productId, $product['id']);

        $urls = $product->getProductUrls($product);  
        $this->assertNotEmpty($urls);

        $urlCategory = $urls['url_category']['en'];
        $urlProduct = $urls['url_product']['en'];

        $response = $this->get($urlCategory);
        $response->assertStatus(200);
        
        $response = $this->get($urlProduct);
        $response->assertStatus(200);        

        $product2 = (new Product)->getProductBySlug('fake', $lang);
        $this->assertEquals(null, $product2);
    }


    /** @test */
    public function it_will_check_fixtures_get_pages_by_type()
    {
        $this->setTestData();
        $type = 'shop';
        $res = $this->get('api/pages/type/' . $type . '?token=' . $this->token);

        $data = $res->getData();
        $this->assertEquals($data->data[0]->title->en, $this->testPage['title']['en']);
    }

    /** @test */
    public function it_will_check_uniq_product_name_add_action()
    {
        $this->setTestData();
        $response0 = $this->post('api/products?token=' . $this->token, $this->testData);

        $res0 = $response0->getData();
        $this->assertTrue($res0->success);        

        $this->testData['sku'] = 'uniq2';
        $response1 = $this->post('api/products?token=' . $this->token, $this->testData);

        $res1 = $response1->getData();

        $this->assertFalse($res1->success);
        $this->assertNotEmpty($res1->error);      
        $this->assertTrue(strpos($res1->error, 'Duplicate product name') === 0);
    }    

    /** @test */
    public function it_will_check_uniq_product_name_update_action()
    {
        $this->setTestData();
        $response0 = $this->post('api/products?token=' . $this->token, $this->testData);

        $res0 = $response0->getData();
        $this->assertTrue($res0->success);        

        $this->testData['sku'] = 'uniq1';
        $this->testData['product_name']['en'] = 'product name uniq en';
        $response1 = $this->post('api/products?token=' . $this->token, $this->testData);

        $res1 = $response1->getData();
        $this->assertTrue($res1->success);

        $productId = $res1->data->productId;
        $this->assertNotEmpty($productId);

        $this->testData['sku'] = 'uniq2';
        $this->testData['product_name']['en'] = self::STR_PRODUCT_NAME_EN;
        $response2 = $this->put('api/products/'.$productId.'?token='.$this->token, $this->testData);    

        $res2 = $response2->getData();

        $this->assertFalse($res2->success);
        $this->assertNotEmpty($res2->error);      
        $this->assertTrue(strpos($res2->error, 'Duplicate product name') === 0);
    }    


    /** @test */
    public function it_will_create_product_docs()
    {
        $this->setTestData();

        $this->testData['published'] = 0;
        $response0 = $this->post('api/products?token=' . $this->token, $this->testData);

        $res0 = $response0->getData();
        //dd($res0);

        $this->assertTrue($res0->success);        
        $this->assertNotEmpty($res0->data->productId);

        $products = Product::all()->toArray();
        $this->assertEquals(count($products), 1);
        $this->assertEquals( $products[0]['id'] , $res0->data->productId);
        //dd($products);
        $this->assertEquals( 0, $products[0]['published']); 
        $this->assertEquals( 0,  $res0->data->data->published);
        $this->assertEquals(    $products[0]['published'] , $res0->data->data->published);


        //Translate::query()->where('page_id', $p->id)->get()->toArray();
        $trans = Content::query()->where('product_id', $res0->data->productId)->get()->toArray();
        $this->assertEquals(count($trans), 1);        

        $this->assertNotEmpty($this->testData['product_description']['en']);
        $this->assertEquals( self::STR_PRODUCT_DESCRIPION_EN, $this->testData['product_description']['en']);                

        $this->assertEquals('en', $trans[0]['lang']);
        $this->assertEquals('product_description', $trans[0]['column']);        
        $this->assertEquals($res0->data->productId, $trans[0]['product_id']);                
        $this->assertEquals(self::STR_PRODUCT_DESCRIPION_EN, $trans[0]['value']);                

        $trans2 = Translate::query()->where('product_id', $res0->data->productId)->get()->toArray();
        $this->assertEquals(count($trans2), 1);        

        $this->assertNotEmpty($this->testData['product_name']['en']);
        $this->assertEquals(self::STR_PRODUCT_NAME_EN, $this->testData['product_name']['en']);

        //$this->assertEquals( self::STR_PRODUCT_DESCRIPION_EN, $this->testData['product_description']['en']);                

        $this->assertEquals('en', $trans2[0]['lang']);
        $this->assertEquals('product_name', $trans2[0]['column']);        
        $this->assertEquals($res0->data->productId, $trans2[0]['product_id']);                
        $this->assertEquals($this->testData['product_name']['en'], $trans2[0]['value']);                


        $response = $this->post('api/products?token=' . $this->token, $this->testData);

        $res = $response->getData();

        $this->assertFalse($res->success);
        $this->assertNotEmpty($res->error);
        $this->assertNotEmpty($res->error->sku);

        $this->clear_imgs($res0->data->productId);
    }

    /** @test */
    public function it_will_read_product_docs()
    {
        $this->setTestData();
        $res0 = $this->post('api/products?token=' . $this->token, $this->testData);
        //dd($res0);
        $res = $res0->getData();
        

        $this->assertTrue($res->success);


        $response22 = $this->get('api/products?token='.$this->token);
        //dd($response22);

        $res22 = $response22->getData();

        $this->assertTrue($res22->success);
        $this->assertEquals(count($res22->data), 1);

        $this->assertTrue(  isSet($res22->data[0]->product_description));
        $this->assertEquals( self::STR_PRODUCT_DESCRIPION_EN, $res22->data[0]->product_description->en );

        $this->assertEquals( 1, $res22->data[0]->published );        

        $this->assertTrue(  isSet($res22->data[0]->product_name));        
        $this->assertEquals( self::STR_PRODUCT_NAME_EN, $res22->data[0]->product_name->en );        

        $this->assertEquals( self::STR_PRODUCT_NAME_EN, $res22->data[0]->product_name_default_lang );

        $this->assertEquals($res->data->productId, $res22->data[0]->id);

        $products = Product::all()->toArray();
        $this->assertEquals(1, count($products));

        $this->assertEquals($res22->data[0]->sku, $this->testData['sku']);
        $this->assertNotEmpty($res22->data[0]->id);

        $this->assertEquals(count($res22->data[0]->images), 2);
        $this->assertEquals($res22->data[0]->images[0]->name, $this->name1);
        $this->assertEquals($res22->data[0]->images[1]->name, $this->name2);

        $this->assertFileExists(public_path().'/'.$res22->data[0]->images[1]->fs->medium);

        $this->assertIsInt($res22->data[0]->id);
        $this->assertIsInt($res22->data[0]->price);
        $this->assertIsInt($res22->data[0]->page_id);
        $this->assertIsInt($res22->data[0]->images[0]->position);
        $this->assertIsInt($res22->data[0]->images[0]->product_id);

        $this->assertEquals(self::STR_DESC_IMG1, $res22->data[0]->images[0]->alt->en);

        $this->assertEquals(null, $res22->data[0]->images[1]->alt->en);

        $this->clear_imgs($res->data->productId);
    }

    /** @test */
    public function it_will_update_product_docs()
    {
        $this->setTestData();

        $res0 = $this->post('api/products?token=' . $this->token, $this->testData);
        $res = $res0->getData();

        $response22 = $this->get('api/products?token='.$this->token);
        $res22 = $response22->getData();
        $productId = $res22->data[0]->id;
        $oldImages = $res22->data[0]->images;
        $this->assertEquals(count($oldImages), 2);

        $arrOldImage = [];
        $i = 1;
        foreach ($oldImages  as $img) {
            $arrImg =  (array)$img;
            $arrImg['alt'] = ['en' => 'alt'.$i];
            $arrOldImage[] = $arrImg;
            $i++;
        }

        $this->assertEquals($res22->data[0]->product_name->en, $this->testData['product_name']['en']);

        $newName = 'PHP7';
        $this->testData['product_name']['en'] = $newName;
        $newDesc = 'PHP7 - desc';
        $this->testData['product_description']['en'] = $newDesc;


        $imagesNew = $this->testData['images'][1];

        $imagesTab = array_merge($arrOldImage, [$imagesNew]);

        $this->testData['images'] = $imagesTab;

        $response33 = $this->put('api/products/'.$productId.'?token='.$this->token, $this->testData);
        $res33 = $response33->getData();

        $this->assertTrue($res33->success);

        $response222 = $this->get('api/products?token='.$this->token);
        $res222 = $response222->getData();
        $productId2 = $res222->data[0]->id;

        $this->assertEquals(count($res222->data), 1);
        $this->assertEquals($productId2, $productId);
        $this->assertEquals($res222->data[0]->product_name->en, $newName);
        $this->assertEquals($res222->data[0]->product_description->en, $newDesc);        

        $this->assertEquals(count($res222->data[0]->images), 3);

        $this->assertEquals($res222->data[0]->images[0]->alt->en, 'alt1');
        $this->assertEquals($res222->data[0]->images[1]->alt->en, 'alt2');
        $this->assertEquals($res222->data[0]->images[2]->alt->en, null);

        $this->clear_imgs($res->data->productId);
    }

    /** @test */
    public function it_will_delete_product_docs()
    {
        $this->setTestData();

        $res0 = $this->post('api/products?token=' . $this->token, $this->testData);
        $res = $res0->getData();

        $response22 = $this->get('api/products?token='.$this->token);
        $res22 = $response22->getData();
        $productId = $res22->data[0]->id;

        $this->assertEquals(1, Content::query()->where('product_id', $productId)->count() );
        $this->assertEquals(1, Translate::query()->where('product_id', $productId)->count() );

        $testFile = public_path($res22->data[0]->images[0]->fs->medium);
        $this->assertFileExists($testFile);

        $this->assertEquals(count($res22->data), 1);
        

        $translateBefore = Translate::query()->whereNotNull('image_id')->where('column', 'alt')->get()->toArray();
        $this->assertEquals(2, count($translateBefore));
        $this->assertEquals(self::STR_DESC_IMG1, $translateBefore[0]['value']);
        $this->assertEquals(null, $translateBefore[1]['value']);
  
  
        $response33 = $this->delete('api/products/'.$productId.'?token='.$this->token);
        $res33 = $response33->getData();

        $this->assertTrue($res33->success);

        $this->assertEquals(0, Content::query()->where('product_id', $productId)->count() );
        $this->assertEquals(0, Translate::query()->where('product_id', $productId)->count() );

        $translateAfter = Translate::query()->whereNotNull('image_id')->where('column', 'alt')->get()->toArray();
        $this->assertEmpty($translateAfter);


        $response222 = $this->get('api/products?token='.$this->token);
        $res222 = $response222->getData();

        $this->assertEmpty(count($res222->data));

        $testFileDirname = pathinfo($testFile, PATHINFO_DIRNAME);
        $this->assertFileExists($testFileDirname);
        //$this->assertFileNotExists($testFile);
        $this->assertFileDoesNotExist($testFile);
    }

    private function clear_imgs($productId)
    {
        $obj = Product::find($productId);
        if ($obj) {  //delete img from fs.
            $obj->delete();
        }
    }

    /** @test */
    public function it_will_get_change_position_product_images()
    {
        $this->setTestData();
        $response0 = $this->post('api/products?token=' . $this->token, $this->testData);

        $res0 = $response0->getData();
        $this->assertTrue($res0->success);

        $productId = $res0->data->productId;
        $this->assertNotEmpty($productId);
        
        $resprod = $this->get('api/products?token=' . $this->token);
        $res2prod = $resprod->getData();
        $this->assertEquals($res2prod->data[0]->images[0]->name, 'phpunittest1.jpg');

        $response2 = $this->get('api/images/product/'.$productId.'?token='.$this->token);
        $res2 = $response2->getData();
        $this->assertTrue($res2->success);
        
        $this->assertEquals($res2->data[0]->name, 'phpunittest1.jpg');
        $this->assertEquals($res2->data[0]->position, 1);
  
        $resSwap = $this->get('api/images/position/up/'.$res2->data[0]->id.'?token='.$this->token);
  
        $response2Swap = $this->get('api/images/product/'.$productId.'?token='.$this->token);
        $res2Swap = $response2Swap->getData();
        $this->assertTrue($res2Swap->success);
        $this->assertEquals(count($res2Swap->data), 2);
  
        $this->assertEquals($res2Swap->data[0]->name, 'phpunittest2.jpg');
        $this->assertEquals($res2Swap->data[0]->position, 1);


        $resprod3 = $this->get('api/products?token=' . $this->token);
        $res3prod = $resprod3->getData();
        $this->assertEquals($res3prod->data[0]->images[0]->name, 'phpunittest2.jpg');

        $resSwap2 = $this->get('api/images/position/up/'.$res2->data[0]->id.'?token='.$this->token);
  
        $response3Swap = $this->get('api/images/product/'.$productId.'?token='.$this->token);
        $res3Swap = $response3Swap->getData();
        $this->assertTrue($res3Swap->success);
        $this->assertEquals(count($res3Swap->data), 2);
  
        $this->assertEquals($res3Swap->data[0]->name, 'phpunittest1.jpg');
        $this->assertEquals($res3Swap->data[0]->position, 1);


        $resprod4 = $this->get('api/products?token=' . $this->token);
        $res4prod = $resprod4->getData();
        $this->assertEquals($res4prod->data[0]->images[0]->name, 'phpunittest1.jpg');

        //clear images!
        $this->clear_imgs($productId);
    }


    /**
     * I found bug in the change position image in product, therefore I create lots of tests data
     */
    /** @test */
    public function it_will_get_change_position_product_images_for_lots_of_items()
    {
        $this->setTestData();

        //it must be 2 product in this test!!!
        $this->testData['sku'] = '11';
        $this->testData['product_name']['en'] = 'name11';        
        $r0 = $this->post('api/products?token=' . $this->token, $this->testData);
        $this->assertTrue($r0->getData()->success);
        $this->testData['sku'] = '22';
        $this->testData['product_name']['en'] = 'name22';                
        $r1 = $this->post('api/products?token=' . $this->token, $this->testData);
        $this->assertTrue($r1->getData()->success);
        $this->testData['sku'] = '33';
        $this->testData['product_name']['en'] = 'name33';                
        $r1 = $this->post('api/products?token=' . $this->token, $this->testData);
        $this->assertTrue($r1->getData()->success);

        $testPage =
        [
             'title'     =>  ['en' => 'test unpublished'],
             'short_title' =>  ['en' =>'unpuplish'],
             'published' => 0,
             'type' => 'cms',
             'content' =>  ['en' =>'pppppppp'],
             'menu_id' => null
        ];
        $p = (new Page)->wrapCreate($testPage);
        $testPage['title']['en'] = 'uniq1';
        $p = (new Page)->wrapCreate($testPage);
        $testPage['title']['en'] = 'uniq2';
        $p = (new Page)->wrapCreate($testPage);
        $testPage['title']['en'] = 'uniq3';
        $testPage['menu_id'] = $this->menuId;
        $p = (new Page)->wrapCreate($testPage);


        $altEnLastImage = 'last image';
        $testData = [
            'product_name' =>  ['en' => 'php3 aplikacje bazodanowe'],
            'sku' => 'AN/34534_xx',
            'price' => 123,
            'product_description' => ['en' =>'opis ksiazki'],
            //'photo' => null,
            'page_id' => $this->pageId,
            'images' => [
                ['name' => $this->name1, 'data' => $this->getFixtureBase64($this->name1),  'alt' => ['en' =>  self::STR_DESC_IMG1 ] ],
                ['name' => $this->name1, 'data' => $this->getFixtureBase64($this->name1)],
                ['name' => $this->name1, 'data' => $this->getFixtureBase64($this->name1),  'alt' => ['en' =>  self::STR_DESC_IMG1 ] ],
                ['name' => $this->name1, 'data' => $this->getFixtureBase64($this->name1)],
                ['name' => $this->name1, 'data' => $this->getFixtureBase64($this->name1),  'alt' => ['en' =>  self::STR_DESC_IMG1 ] ],
                ['name' => $this->name1, 'data' => $this->getFixtureBase64($this->name1)],
                ['name' => $this->name1, 'data' => $this->getFixtureBase64($this->name1),  'alt' => ['en' =>  self::STR_DESC_IMG1 ] ],
                ['name' => $this->name1, 'data' => $this->getFixtureBase64($this->name1)],
                ['name' => $this->name1, 'data' => $this->getFixtureBase64($this->name1),  'alt' => ['en' =>  self::STR_DESC_IMG1 ] ],
                ['name' => $this->name2, 'data' => $this->getFixtureBase64($this->name2),  'alt' => ['en' =>  $altEnLastImage ] ],
            ]
        ];

        
        $response0 = $this->post('api/products?token=' . $this->token, $testData);

        $res0 = $response0->getData();
        $this->assertTrue($res0->success);

        $this->assertNotEmpty($res0->data->productId);

        $countImgs = count($testData['images']);
        $this->assertNotEmpty($countImgs);

        $countAllImages = Image::count();
        $allImgsBefore = Image::where('product_id', $res0->data->productId)->get()->toArray();

        $this->assertEquals($countImgs, count($allImgsBefore));

        $lastImage = $allImgsBefore[$countImgs-1];

        $this->assertEquals($this->name2, $lastImage['name']);
        $this->assertEquals($countImgs, $lastImage['position']);
        $this->assertEquals($res0->data->productId, $lastImage['product_id']);
        $this->assertEquals(null, $lastImage['page_id']);

        //for($i = 0; $i < count($allImgsBefore)-1; $i++){
        $resSwap = $this->get('api/images/position/up/'.$lastImage['id'].'?token='.$this->token);
        $res = $resSwap->getData();
        $this->assertTrue($res->success);

        $resSwap = $this->get('api/images/position/up/'.$lastImage['id'].'?token='.$this->token);
        $res = $resSwap->getData();
        $this->assertTrue($res->success);

        $resSwap = $this->get('api/images/position/up/'.$lastImage['id'].'?token='.$this->token);
        $res = $resSwap->getData();
        $this->assertTrue($res->success);

        $resSwap = $this->get('api/images/position/down/'.$lastImage['id'].'?token='.$this->token);
        $res = $resSwap->getData();
        $this->assertTrue($res->success);

        $resSwap = $this->get('api/images/position/down/'.$lastImage['id'].'?token='.$this->token);
        $res = $resSwap->getData();
        $this->assertTrue($res->success);

        $resSwap = $this->get('api/images/position/down/'.$lastImage['id'].'?token='.$this->token);
        $res = $resSwap->getData();
        $this->assertTrue($res->success);
        //}

        $allImgsAfter = Image::where('product_id', $res0->data->productId)->orderBy('position')->get()->toArray();
        

        $ImageAfter = $allImgsAfter[$countImgs-1];
        $this->assertEquals($this->name2, $ImageAfter['name']);
        $this->assertEquals($countImgs, $ImageAfter['position']);
        $this->assertEquals($res0->data->productId, $ImageAfter['product_id']);
        $this->assertEquals(null, $ImageAfter['page_id']);

        $resGet = $this->get('api/products?token=' . $this->token);
        $resG = $resGet->getData();
        $this->assertTrue($resG->success);

        foreach ($resG->data as $product) {
            $this->clear_imgs($res0->data->productId);
        }
    }
}
