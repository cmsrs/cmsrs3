<?php

namespace Tests\Feature;

use App\Page;
use App\Menu;
use App\Image;
use App\Product;
use App\Translate;
use App\Content;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Str;

class ProductTest extends Base
{
    use RefreshDatabase;

    private $name1;
    private $name2;

    private $testData;
    private $testPage;
    private $testMenu;
    private $menuId;

    private $pageId;

    const STR_DESC_IMG1 = 'description img1 - product image';
    const STR_PRODUCT_DESCRIPION_EN = 'book desc';
    const STR_PRODUCT_NAME_EN = 'php3 db app';    

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
    public function it_will_unpublish_product()
    {
        $this->setTestData();

        $response0 = $this->post('api/products?token=' . $this->token, $this->testData);

        $res0 = $response0->getData();

        $this->assertTrue($res0->success);        

        $urls = (new Product)->getProductsUrl();
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

    /** @test */    
    public function it_will_get_product_by_slug()
    {
        $this->setTestData();

        $response0 = $this->post('api/products?token=' . $this->token, $this->testData);
        //dd($response0);

        $res0 = $response0->getData();
        $this->assertTrue($res0->success);        

        $productId = $res0->data->productId;
        $this->assertNotEmpty($productId);

        $lang = 'en';
        $slugProductName = Str::slug(self::STR_PRODUCT_NAME_EN, '-');
        $product = (new Product)->getProductBySlug($slugProductName, $lang);
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
