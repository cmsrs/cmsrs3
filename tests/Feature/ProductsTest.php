<?php

namespace Tests\Feature;

use App\Page;
use App\Menu;
//use App\User;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use Illuminate\Foundation\Testing\RefreshDatabase;
//use Tests\TestCase;

class ProductsTest extends Base
{
    //use DatabaseMigrations;
    use RefreshDatabase;

    private $testData;
    private $testPage;
    private $testMenu;
    private $menuId;
    //private $menuObj;

    private $pageId;

    public function setUp(): void
    {
        parent::setUp();

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

        $this->testData = [
            'name' =>  'php3 aplikacje bazodanowe',
            'sku' => 'AN/34534',
            'price' => 123,
            'description' => 'opis ksiazki',
            'photo' => null,
            'page_id' => $this->pageId
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

        $response = $this->post('api/products?token=' . $this->token, $this->testData);

        $res = $response->getData();
        $this->assertTrue($res->success);

        $this->assertNotEmpty($res->data->productId);

        $response = $this->post('api/products?token=' . $this->token, $this->testData);

        $res = $response->getData();

        $this->assertFalse($res->success);
        $this->assertNotEmpty($res->error);
        $this->assertNotEmpty($res->error->sku);
    }

    /** @test */
    public function it_will_read_product()
    {
        $this->post('api/products?token=' . $this->token, $this->testData);

        $response22 = $this->get('api/products?token='.$this->token );
        //var_dump($response22); die('===');

        $res22 = $response22->getData();

        $this->assertTrue( $res22->success );
        $this->assertEquals( count($res22->data), 1);
        $this->assertEquals( $res22->data[0]->sku, $this->testData['sku']);
        $this->assertNotEmpty( $res22->data[0]->id);
    }

    /** @test */
    public function it_will_update_product()
    {
        $this->post('api/products?token=' . $this->token, $this->testData);
        $response22 = $this->get('api/products?token='.$this->token );
        $res22 = $response22->getData();
        $productId = $res22->data[0]->id;

        $this->assertEquals( $res22->data[0]->name, $this->testData['name']);

        $newName = 'PHP7';
        $this->testData['name'] = $newName;


        $response33 = $this->put('api/products/'.$productId.'?token='.$this->token, $this->testData);
        //var_dump($response33); die('===========');
        $res33 = $response33->getData();
        $this->assertTrue( $res33->success );

        $response222 = $this->get('api/products?token='.$this->token );
        $res222 = $response222->getData();
        $productId2 = $res222->data[0]->id;

        $this->assertEquals( $productId2,  $productId );
        $this->assertEquals( $res222->data[0]->name, $newName);
    }

    /** @test */
    public function it_will_delete_product()
    {
        $this->post('api/products?token=' . $this->token, $this->testData);
        $response22 = $this->get('api/products?token='.$this->token );
        $res22 = $response22->getData();
        $productId = $res22->data[0]->id;

        $this->assertEquals(count($res22->data), 1);

        $response33 = $this->delete('api/products/'.$productId.'?token='.$this->token);
        $res33 = $response33->getData();
        $this->assertTrue( $res33->success );

        $response222 = $this->get('api/products?token='.$this->token );
        $res222 = $response222->getData();

        $this->assertEmpty(count($res222->data));

    }


}
