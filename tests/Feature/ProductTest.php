<?php

namespace Tests\Feature;

use App\Page;
use App\Menu;
use App\Image;
use App\Product;
//use App\User;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use Illuminate\Foundation\Testing\RefreshDatabase;
//use Tests\TestCase;

class ProductTest extends Base
{
    use RefreshDatabase;

    private $name1;
    private $name2;

    private $testData;
    private $testPage;
    private $testMenu;
    private $menuId;
    //private $menuObj;

    private $pageId;

    public function setUp(): void
    {

        parent::setUp();
        $this->createUser();

        $this->testMenu =
            [
                'name'     => 'books',
                'position' => 77
            ];

        $menu = new Menu($this->testMenu);
        $save = $menu->save();
        $this->assertTrue($save);


        $menuObj = $menu->all()->first();

        $this->menuId = $menuObj->id;


        $this->testPage =
        [
            'title' => 'programmer',
            'short_title' => 'page1',
            'published' => 1,
            'position' => 7,
            'type' => 'shop',
            'content' => 'content test133445',
            'menu_id' => $this->menuId
        ];

        $page = new Page($this->testPage);

        $page->save();

        $type = 'shop';
        $res = $this->get('api/pages/type/' . $type . '?token=' . $this->token);

        $data = $res->getData();
        $this->pageId = $data->data[0]->id;
        $this->assertNotEmpty($this->pageId);


        $this->name1 = 'phpunittest1.jpg';
        $file1 = $this->getFixtureBase64($this->name1);

        $this->name2 = 'phpunittest2.jpg';
        $file2 = $this->getFixtureBase64($this->name2);


        $this->testData = [
            'name' =>  'php3 aplikacje bazodanowe',
            'sku' => 'AN/34534',
            'price' => 123,
            'description' => 'opis ksiazki',
            //'photo' => null,
            'page_id' => $this->pageId,
            'images' => [
                ['name' => $this->name1, 'data' => $file1],
                ['name' => $this->name2, 'data' => $file2]
            ]
        ];
    }

    protected function tearDown(): void
    {
        parent::tearDown();
    }




    /** @test */
    public function it_will_check_fixtures_get_pages_by_type()
    {
        $type = 'shop';
        $res = $this->get('api/pages/type/' . $type . '?token=' . $this->token);

        $data = $res->getData();
        $this->assertEquals($data->data[0]->title,$this->testPage['title']);
    }

    /** @test */
    public function it_will_create_product()
    {

        $response0 = $this->post('api/products?token=' . $this->token, $this->testData);

        $res0 = $response0->getData();
        $this->assertTrue($res0->success);

        $this->assertNotEmpty($res0->data->productId);

        $response = $this->post('api/products?token=' . $this->token, $this->testData);

        $res = $response->getData();

        $this->assertFalse($res->success);
        $this->assertNotEmpty($res->error);
        $this->assertNotEmpty($res->error->sku);

        $this->clear_imgs($res0->data->productId);        
    }

    /** @test */
    public function it_will_read_product()
    {
        $res0 = $this->post('api/products?token=' . $this->token, $this->testData);
        $res = $res0->getData();
        $this->assertTrue($res->success);

        //dump($res0);   die('88888888888888888');

        $response22 = $this->get('api/products?token='.$this->token );
        //var_dump($response22); die('===');

        $res22 = $response22->getData();

        //dump($res->data->productId);

        $this->assertTrue( $res22->success );
        $this->assertEquals( count($res22->data), 1);
        $this->assertEquals($res->data->productId, $res22->data[0]->id);

        $this->assertEquals( $res22->data[0]->sku, $this->testData['sku']);
        $this->assertNotEmpty( $res22->data[0]->id);

        $this->assertEquals( count($res22->data[0]->images), 2);
        $this->assertEquals( $res22->data[0]->images[0]->name,  $this->name1 );
        $this->assertEquals( $res22->data[0]->images[1]->name,  $this->name2 );

        $this->assertFileExists( public_path().'/'.$res22->data[0]->images[1]->fs->medium);

        $this->assertIsInt($res22->data[0]->id);        
        $this->assertIsInt($res22->data[0]->price);
        $this->assertIsInt($res22->data[0]->page_id);
        $this->assertIsInt($res22->data[0]->images[0]->position);
        $this->assertIsInt($res22->data[0]->images[0]->product_id);

        //$this->removeImgDir($res->data->productId, 'product' );//remove file
        $this->clear_imgs($res->data->productId);
    }

    /** @test */
    public function it_will_update_product()
    {
        $res0 = $this->post('api/products?token=' . $this->token, $this->testData);
        $res = $res0->getData();

        $response22 = $this->get('api/products?token='.$this->token );
        $res22 = $response22->getData();
        $productId = $res22->data[0]->id;
        $oldImages = $res22->data[0]->images;
        $this->assertEquals(count($oldImages), 2);

        $arrOldImage = [];
        $i = 1;
        foreach($oldImages  as $img){
            $arrImg =  (array)$img;
            $arrImg['alt'] = 'alt'.$i;
            $arrOldImage[] = $arrImg;
            $i++;
        }

        $this->assertEquals( $res22->data[0]->name, $this->testData['name']);

        $newName = 'PHP7';
        $this->testData['name'] = $newName;

        $imagesNew = $this->testData['images'][1];

        $imagesTab = array_merge($arrOldImage, [$imagesNew]);

        //array_shift($images);
        $this->testData['images'] = $imagesTab;

        //var_dump($this->testData); die('++');

        $response33 = $this->put('api/products/'.$productId.'?token='.$this->token, $this->testData);
        //var_dump($response33); die('===========');
        $res33 = $response33->getData();
        $this->assertTrue( $res33->success );

        $response222 = $this->get('api/products?token='.$this->token );
        $res222 = $response222->getData();
        $productId2 = $res222->data[0]->id;

        $this->assertEquals(count($res222->data), 1);
        $this->assertEquals( $productId2,  $productId );
        $this->assertEquals( $res222->data[0]->name, $newName);

        $this->assertEquals(count($res222->data[0]->images), 3);

        $this->assertEquals($res222->data[0]->images[0]->alt, 'alt1');
        $this->assertEquals($res222->data[0]->images[1]->alt, 'alt2');        
        $this->assertEquals($res222->data[0]->images[2]->alt, null);                

        //$this->removeImgDir($res->data->productId, 'product' ); //remove file
        $this->clear_imgs($res->data->productId);
    }

    /** @test */
    public function it_will_delete_product()
    {
        $res0 = $this->post('api/products?token=' . $this->token, $this->testData);
        $res = $res0->getData();

        $response22 = $this->get('api/products?token='.$this->token );
        $res22 = $response22->getData();
        $productId = $res22->data[0]->id;

        $testFile = public_path($res22->data[0]->images[0]->fs->medium);
        $this->assertFileExists($testFile);

        $this->assertEquals(count($res22->data), 1);
        
        $response33 = $this->delete('api/products/'.$productId.'?token='.$this->token);

        //dd($response33);
        $res33 = $response33->getData();


        $this->assertTrue( $res33->success );

        $response222 = $this->get('api/products?token='.$this->token );
        $res222 = $response222->getData();

        $this->assertEmpty(count($res222->data));

        $testFileDirname = pathinfo($testFile, PATHINFO_DIRNAME);
        $this->assertFileExists($testFileDirname);
        $this->assertFileNotExists($testFile);

        //$imgDir = Image::getAbsRefDir( $res->data->productId, 'product' ).'/1/';
        //$this->assertFileExists($imgDir);
        //$this->assertTrue($this->is_dir_empty($imgDir));
        //dd($imgDir);

        //$this->removeImgDir($res->data->productId, 'product' ); //remove file
    }

    private function clear_imgs($productId){
        $obj = Product::find($productId);
        if($obj){  //delete img from fs.
          $obj->delete();
        }    
    }

    /** @test */
    public function it_will_get_change_position_product_images()
    {
        $response0 = $this->post('api/products?token=' . $this->token, $this->testData);

        $res0 = $response0->getData();
        $this->assertTrue($res0->success);

        $productId = $res0->data->productId;
        $this->assertNotEmpty($productId);
        
        $resprod = $this->get('api/products?token=' . $this->token);
        $res2prod = $resprod->getData();
        //dd($res2prod->data);
        $this->assertEquals($res2prod->data[0]->images[0]->name,'phpunittest1.jpg');

        $response2 = $this->get('api/images/product/'.$productId.'?token='.$this->token);
        $res2 = $response2->getData();
        $this->assertTrue( $res2->success );    
        
        $this->assertEquals($res2->data[0]->name, 'phpunittest1.jpg' );
        $this->assertEquals($res2->data[0]->position, 1 );        
  
        $resSwap = $this->get('api/images/position/up/'.$res2->data[0]->id.'?token='.$this->token);
  
        $response2Swap = $this->get('api/images/product/'.$productId.'?token='.$this->token);
        $res2Swap = $response2Swap->getData();
        $this->assertTrue( $res2Swap->success );
        $this->assertEquals( count($res2Swap->data), 2);
  
        $this->assertEquals($res2Swap->data[0]->name, 'phpunittest2.jpg');
        $this->assertEquals($res2Swap->data[0]->position, 1 );                


        $resprod3 = $this->get('api/products?token=' . $this->token);
        $res3prod = $resprod3->getData();
        $this->assertEquals($res3prod->data[0]->images[0]->name,'phpunittest2.jpg');

        $resSwap2 = $this->get('api/images/position/up/'.$res2->data[0]->id.'?token='.$this->token);
  
        $response3Swap = $this->get('api/images/product/'.$productId.'?token='.$this->token);
        $res3Swap = $response3Swap->getData();
        $this->assertTrue( $res3Swap->success );
        $this->assertEquals( count($res3Swap->data), 2);
  
        $this->assertEquals($res3Swap->data[0]->name, 'phpunittest1.jpg');
        $this->assertEquals($res3Swap->data[0]->position, 1 );                


        $resprod4 = $this->get('api/products?token=' . $this->token);
        $res4prod = $resprod4->getData();
        $this->assertEquals($res4prod->data[0]->images[0]->name,'phpunittest1.jpg');

        //clear images!
        $this->clear_imgs($productId);
    }    

}
