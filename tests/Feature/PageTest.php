<?php

namespace Tests\Feature;

use App\Page;
use App\Menu;
//use App\User;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use Illuminate\Foundation\Testing\RefreshDatabase;
//use Tests\TestCase;

class PageTest extends Base
{
    //use DatabaseMigrations;
    use RefreshDatabase;

    //private $token;
    private $testData;
    private $testDataMenu;
    private $menuId;

    public function setUp(): void
    {
        parent::setUp();

        $this->testData =
        [
            'title' => 'page 1 test',
            'short_title' => 'page1',
            'published' => 1,
            'position' => 1,
            'type' => 'cms',
            'menu_id' => null
        ];

        $page = new Page($this->testData);

        $page->save();


        $this->testDataMenu =
        [
             'name'     => 'test men7',
             'position' => 7
        ];

        $menu = new Menu($this->testDataMenu);
        $save = $menu->save();
        $this->assertTrue($save);

        $this->menuId = $menu->all()->first()->id;
        //var_dump($rec);
        //Menu
    }


    /** @test */
    public function it_will_show_all_pages()
    {
      $response = $this->get('api/pages?token='.$this->token );
      $res = $response->getData();
      $this->assertTrue( $res->success );
      $this->assertEquals( count($res->data), 1);
      $data = (array)$res->data[0];
      //var_dump($data);
      //$this->testData['id'] = 1;

      $this->assertSame($data['title'], $this->testData['title']);
      $this->assertSame($data['position'], $this->testData['position']);
      $this->assertNotEmpty($data['id']);
    }

    /** @test */
    public function it_will_add_pages()
    {

      $testData2 =
      [
           'title'     => 'test p2',
           'short_title' => 'p22',
           'published' => 0,
           'position' => 3,
           'type' => 'cms',
           'menu_id' => null
      ];

      $response = $this->post('api/pages?token='.$this->token, $testData2);

      //var_dump($response); die('=========');

      $res = $response->getData();
      $this->assertTrue( $res->success );


      //sprawdzamy rekordy w db
      $response2 = $this->get('api/pages?token='.$this->token );

      $res2 = $response2->getData();

      $this->assertTrue( $res2->success );
      $this->assertEquals( count($res2->data), 2);
      $data = (array)$res2->data[0];
      unset($data['id']);
      $this->assertSame($data, $this->testData);


      $data2 = (array)$res2->data[1];
      unset($data2['id']);


      $this->assertSame($data2, $testData2);

      //wrong data
      $testData22 =
      [
           'title'     => 'test p2',
           'position' => '3a12'
      ];

      $response22 = $this->post('api/pages?token='.$this->token, $testData22);

      $res22 = $response22->getData();
      $this->assertFalse( $res22->success );
      $this->assertNotEmpty( $res22->error );

      //var_dump($response2);
    }

    /** @test */
    public function it_will_add2_with_menu_pages()
    {
      $testData2 =
      [
           'title'     => 'test p2',
           'short_title' => 'p22',
           'published' => 0,
           'position' => 3,
           'type' => 'cms',
           'menu_id' =>  2354 //$this->menuId
      ];

      $responseFake = $this->post('api/pages?token='.$this->token, $testData2);

      $resFake = $responseFake->getData();
      $this->assertFalse( $resFake->success );
      $this->assertNotEmpty( $resFake->error );

      $testData2['menu_id'] = $this->menuId;


      $response = $this->post('api/pages?token='.$this->token, $testData2);

      //var_dump($response); die('=========');

      $res = $response->getData();
      $this->assertTrue( $res->success );


      //sprawdzamy rekordy w db
      $response2 = $this->get('api/pages?token='.$this->token );

      $res2 = $response2->getData();

      $this->assertTrue( $res2->success );
      $this->assertEquals( count($res2->data), 2);
      $data = (array)$res2->data[0];
      unset($data['id']);
      $this->assertSame($data, $this->testData);


      $data2 = (array)$res2->data[1];
      unset($data2['id']);


      $this->assertSame($data2, $testData2);




    }




    /** @test */
    public function it_will_update_page()
    {

      $responseAll = $this->get('api/pages?token='.$this->token );
      $resAll = $responseAll->getData();
      $id = $resAll->data[0]->id;

      $this->assertNotEmpty($id);
      //$id = 1;

      $testData3 =
      [
            'id' => $id,
            'title' => 'test p3',
            'short_title' => 'p3',
            'published' => 1,
            'position' => 3,
            'type' => 'cms',
            //'menu_id' => null
            'menu_id' => null

      ];

      $response0 = $this->put('api/pages/'.$id.'?token='.$this->token, $testData3);
      //$response0 = $this->put('api/menus/1?token='.$this->token, $testData3);

      //
      //var_dump($response0);die('==');

      $res0 = $response0->getData();
      $this->assertTrue( $res0->success );

      //pobieramy $menus
      $response = $this->get('api/pages?token='.$this->token );
      $res = $response->getData();
      $this->assertTrue( $res->success );
      $this->assertEquals( count($res->data), 1);
      $data = (array)$res->data[0];
      //unset($data['id']);
      //var_dump($data);

      $this->assertSame($data, $testData3);

      //wrond data
      $testData33 =
      [
            'id' => $id,
            'title' => 'test p3',
            'position' => '3d33'
      ];
      $response33 = $this->put('api/pages/'.$id.'?token='.$this->token, $testData33);
      //var_dump($response33);
      $res33 = $response33->getData();
      $this->assertFalse( $res33->success );
      $this->assertNotEmpty( $res33->error );


    }

    /** @test **/
    public function it_will_update2_page_with_menu()
    {
      $responseAll = $this->get('api/pages?token='.$this->token );
      $resAll = $responseAll->getData();
      $id = $resAll->data[0]->id;

      $this->assertNotEmpty($id);
      //$id = 1;

      $testData3 =
      [
            'id' => $id,
            'title' => 'test p3',
            'short_title' => 'p3',
            'published' => 1,
            'position' => 3,
            'type' => 'cms',
            //'menu_id' => null
            'menu_id' => 9123

      ];

      $responseFake = $this->put('api/pages/'.$id.'?token='.$this->token, $testData3);
      //$response0 = $this->put('api/menus/1?token='.$this->token, $testData3);
      //
      //var_dump($response0);die('==');

      $resFake = $responseFake->getData();
      $this->assertFalse( $resFake->success );
      $this->assertNotEmpty( $resFake->error );


      $testData3['menu_id'] = $this->menuId;
      $response0 = $this->put('api/pages/'.$id.'?token='.$this->token, $testData3);

      $res0 = $response0->getData();
      $this->assertTrue( $res0->success );

      //pobieramy $menus
      $response = $this->get('api/pages?token='.$this->token );
      $res = $response->getData();
      $this->assertTrue( $res->success );
      $this->assertEquals( count($res->data), 1);
      $data = (array)$res->data[0];
      //unset($data['id']);
      //var_dump($data);

      $this->assertSame($data, $testData3);
    }


    /** @test */
    public function it_will_delete_page()
    {
      $responseAll = $this->get('api/pages?token='.$this->token );
      $resAll = $responseAll->getData();
      //var_dump($resAll);
      $this->assertNotEmpty($resAll->data);
      $id = $resAll->data[0]->id;
      $this->assertNotEmpty($id);

      $response0 = $this->delete('api/pages/'.$id.'?token='.$this->token);
      $res0 = $response0->getData();
      $this->assertTrue( $res0->success );

      $responseAllAfter = $this->get('api/pages?token='.$this->token );
      $resAllAfter = $responseAllAfter->getData();
      //var_dump($resAllAfter);
      $this->assertEmpty($resAllAfter->data);


    }
    /** @test */
    public function it_will_delete_page_fake(){
      //fake id - obluga bledow
      $responseFake = $this->delete('api/pages/rs_I_eW23423fsd?token='.$this->token);
      //var_dump($responseFake);
      $resFake = $responseFake->getData();
      $this->assertFalse( $resFake->success );
      $this->assertNotEmpty( $resFake->error );
    }
}
