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
    private $menuObj;

    public function setUp(): void
    {
        parent::setUp();

        $this->testData =
        [
            'title' => 'page 1 test',
            'short_title' => 'page1',
            'published' => 1,
            'position' => 7,
            'type' => 'cms',
            'content' => 'content test133445',
            'menu_id' => null
        ];

        $page = new Page($this->testData);

        $page->save();


        $this->testDataMenu =
        [
             'name'     => 'test men7',
             'position' => 77
        ];

        $menu = new Menu($this->testDataMenu);
        $save = $menu->save();
        $this->assertTrue($save);


        $this->menuObj = $menu->all()->first();

        $this->menuId = $this->menuObj->id;
        //var_dump($rec);
        //Menu
    }

    protected function tearDown(): void
    {
        parent::tearDown();
    }


    /** @test */
    public function it_will_add3a_with_menu_pages()
    {

      $testData3 =
      [
           'title'     => 'test p3',
           'short_title' => 'p33',
           'published' => 0,
           //'position' => 3,
           'type' => 'cms',
           'content' => 'sdafsfsdaf asdfasdf',
           'menu_id' =>  $this->menuId
      ];

      $response = $this->post('api/pages?token='.$this->token, $testData3);

      $this->assertEquals(1, count($this->menuObj->pages));
      $this->assertEquals(0, count($this->menuObj->pagesPublished) );
    }

    /** @test */
    public function it_will_add3_with_menu_pages()
    {

      $testData3 =
      [
           'title'     => 'test p3',
           'short_title' => 'p33',
           'published' => 0,
           //'position' => 3,
           'type' => 'cms',
           'content' => 'sdafsfsdaf asdfasdf',
           'menu_id' =>  $this->menuId
      ];

      $response = $this->post('api/pages?token='.$this->token, $testData3);


      $testData2 =
      [
           'title'     => 'test p2222',
           'short_title' => 'p22222',
           'published' => 1,
           //'position' => 3,
           'type' => 'cms',
           'content' => 'sdafsfsdaf asdfasdf',
           'menu_id' =>  $this->menuId
      ];

      $response2 = $this->post('api/pages?token='.$this->token, $testData2);





      $response2 = $this->get('api/pages?token='.$this->token );
      $res2 = $response2->getData();
      $this->assertTrue( $res2->success );
      $this->assertEquals( count($res2->data), 3);

      //var_dump($this->menuObj);

      $this->assertEquals(2, count($this->menuObj->pages));
      $this->assertEquals(1, count($this->menuObj->pagesPublished));  //tylko jedno jest z published ===1 dla 'menu_id' =>  $this->menuId
      $this->assertEquals( $this->menuObj->pagesPublished[0]->title, $testData2['title'] );
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
    public function it_will_add_pages_to_check_possition()
    {
      $testData2 =
      [
           'title'     => 'test p2',
           'short_title' => 'p22',
           'published' => 0,
           //'position' => 3,
           'type' => 'cms',
           //'content' => null
           'menu_id' => null
      ];

      $response = $this->post('api/pages?token='.$this->token, $testData2);
      //var_dump($response);

      $res = $response->getData();
      $this->assertTrue( $res->success );

      $response2 = $this->get('api/pages?token='.$this->token );

      $res2 = $response2->getData();


      $this->assertTrue( $res2->success );
      $this->assertEquals( count($res2->data), 2);
      $data = (array)$res2->data;
      $this->assertEquals(  $res2->data[1]->position, 8);

      //print_r($data);


      // menu_id is defined
      $testDataWithMenu =
      [
           'title'     => 'test p2',
           'short_title' => 'p22',
           'published' => 0,
           //'position' => 3,
           'type' => 'cms',
           'menu_id' => $this->menuId
      ];


      $testDataWithMenuB =
      [
           'title'     => 'BB',
           'short_title' => 'BB p22',
           'published' => 0,
           //'position' => 3,
           'type' => 'cms',
           'menu_id' => $this->menuId
      ];


      $response3 = $this->post('api/pages?token='.$this->token, $testDataWithMenu);
      $res3 = $response3->getData();
      $this->assertTrue( $res3->success );
      $response3b = $this->post('api/pages?token='.$this->token, $testDataWithMenuB);
      $res3b = $response3b->getData();
      $this->assertTrue( $res3b->success );


      $response22 = $this->get('api/pages?token='.$this->token );
      $res22 = $response22->getData();


      $this->assertTrue( $res22->success );
      $this->assertEquals( count($res22->data), 4);
      $data22 = (array)$res22->data;


      $tmpArr = [];
      foreach ($data22 as $key => $page) {
        if( $page->menu_id == $this->menuId ){
          $tmpArr[] = $page;
        }
      }


      $this->assertEquals(count($tmpArr), 2);

      $this->assertEquals($tmpArr[0]->title, $testDataWithMenu['title']);
      $this->assertEquals($tmpArr[1]->title, $testDataWithMenuB['title']);

      //2x change position - and result should be the same.
      $res1a = $this->get('api/pages/position/down/'.$tmpArr[1]->id.'?token='.$this->token );
      $res22a = $res1a->getData();
      $this->assertTrue( $res22a->success );

      $res2b = $this->get('api/pages/position/down/'.$tmpArr[0]->id.'?token='.$this->token );
      $res22b = $res2b->getData();
      $this->assertTrue( $res22b->success );


      $response22c = $this->get('api/pages?token='.$this->token );
      $res22c = $response22c->getData();


      $this->assertTrue( $res22c->success );
      $this->assertEquals( count($res22c->data), 4);
      $data22c = (array)$res22c->data;


      $tmpArr2 = [];
      foreach ($data22c as $key => $pageC) {
        if( $pageC->menu_id == $this->menuId ){
          $tmpArr2[] = $page;
        }
      }

      $this->assertSame($tmpArr[0]->title, $tmpArr2[0]->title);
    }


    /** @test */
    public function it_will_add_pages()
    {

      $testData2 =
      [
           'title'     => 'test p2',
           'short_title' => 'p22',
           'published' => 0,
           //'position' => 3,
           'type' => 'shop',
           'content' => 'aaa ffdfds',
           'menu_id' => null,
           //'images' => []
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
      unset($data['images']);

      //dump($data); die('==');

      foreach( $data as $k => $v  ){
        $this->assertEquals( $v, $this->testData[$k]);
      }


      //$this->assertSame($data, $this->testData);

      $data2 = (array)$res2->data[1];
      unset($data2['id']);
      unset($data2['images']);

      $testData2['position'] = $this->testData['position'] + 1;

      foreach( $data2 as $k => $v  ){
        $this->assertEquals( $v, $testData2[$k]);
      }


      //$this->assertSame($data2, $testData2); //wrong order

      //wrong data
      $testData22 =
      [
           'title'     => 'test p2',
           'position' => '3a12'
      ];

      $response22 = $this->post('api/pages?token='.$this->token, $testData22);

      //var_dump($response22); die('==11===');


      $res22 = $response22->getData();
      $this->assertTrue( $res22->success );
      //$this->assertNotEmpty( $res22->error );

      //var_dump($response2);
    }

    /** @test */
    public function it_will_get_pages_by_type()
    {

        $testData2 =
            [
                'title' => 'test p2',
                'short_title' => 'p22',
                'published' => 0,
                //'position' => 3,
                'type' => 'shop',
                'content' => 'aaa ffdfds',
                'menu_id' => null,
                //'images' => []
            ];

        $response = $this->post('api/pages?token=' . $this->token, $testData2);

        //var_dump($response); die('=========');

        $res = $response->getData();
        $this->assertTrue($res->success);


        $type = 'shop';
        $res = $this->get('api/pages/type/'.$type.'?token=' . $this->token);

        $data =  $res->getData();

        $this->assertTrue($data->success);
        //dd(count($data->data));
        //dd($data->data[0]->type);

        $this->assertEquals(1,count($data->data));
        $this->assertEquals( $type, $data->data[0]->type );



        $typeErr = 'sasdasd';
        $res = $this->get('api/pages/type/'.$typeErr.'?token=' . $this->token);
        $data =  $res->getData();
        $this->assertTrue($data->success);
        $this->assertEmpty(count($data->data));
        //dd($data);

    }


    /** @test */
    public function it_will_add2_with_menu_pages()
    {
      $testData2 =
      [
           'title'     => 'test p2',
           'short_title' => 'p22',
           'published' => 0,
           //'position' => 3,
           'type' => 'cms',
           'content' => 'sdafsfsdaf asdfasdf',
           'menu_id' =>  2354 //$this->menuId
      ];

      $responseFake = $this->post('api/pages?token='.$this->token, $testData2);

      $resFake = $responseFake->getData();
      $this->assertFalse( $resFake->success );
      $this->assertNotEmpty( $resFake->error );

      $testData2['menu_id'] = $this->menuId;


      $response = $this->post('api/pages?token='.$this->token, $testData2);



      $res = $response->getData();
      $this->assertTrue( $res->success );


      //sprawdzamy rekordy w db
      $response2 = $this->get('api/pages?token='.$this->token );

      $res2 = $response2->getData();
      //var_dump($res2); die('===1==1==1==');

      $this->assertTrue( $res2->success );
      $this->assertEquals( count($res2->data), 2);
      $data = (array)$res2->data[1];
      unset($data['id']);
      unset($data['images']);


      // dump($data);
      // dump($this->testData);
      // die('=00==');

      $this->assertSame($data, $this->testData);


      $data2 = (array)$res2->data[0];
      unset($data2['id']);
      unset($data2['images']);


      // dump($data2);
      // dump($testData2);

      //var_dump($testData2);
      $testData2['position'] = Page::getNextPositionByMenuId( $testData2['menu_id'] ) - 1; //bo to jest pierwsza strona dodane w danym menu - chcemy obecne position menu  a nie nastepne

      //die('======'.$testData2['position']);

      foreach ($data2 as $key => $val) {
          $this->assertEquals( $val, $testData2[$key]  );
      }


    }




    /** @test */
    public function it_will_update_page()
    {

      $responseAll = $this->get('api/pages?token='.$this->token );
      $resAll = $responseAll->getData();
      $id = $resAll->data[0]->id;

      $this->assertNotEmpty($id);

      $slug = Page::find($id)->slug;
      //str_slug($value, "-");
      $this->assertEquals($slug,  str_slug($this->testData['title'], "-")    );


      //$id = 1;

      $testData3 =
      [
            'id' => $id,
            'title' => 'test p3 żółta żółć',
            'short_title' => 'p3',
            'published' => 1,
            //'position' => 3,
            'type' => 'cms',
            //'menu_id' => null
            'content' => 'gg',
            'menu_id' => null,
            'images' => []
      ];

      $response0 = $this->put('api/pages/'.$id.'?token='.$this->token, $testData3);
      //$response0 = $this->put('api/menus/1?token='.$this->token, $testData3);



      $slugAfter = Page::find($id)->slug;
      $this->assertNotEquals($slug, $slugAfter);
      $this->assertEquals($slugAfter,  str_slug($testData3['title'], "-")  );
      //var_dump($slugAfter);


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

      $testData3['position'] = $data['position'];

      foreach ($data as $key => $v) {
        $this->assertEquals( $v,  $testData3[$key] );
      }

      //$this->assertSame($data, $testData3);

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
      $this->assertTrue( $res33->success );
      //$this->assertNotEmpty( $res33->error );


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
            //'position' => 3,
            'content' => null,
            'type' => 'cms',
            //'menu_id' => null
            'menu_id' => 9123,
            'images' => []

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

      $testData3['position'] = $data['position'];

      foreach ($data as $key => $value) {
        $this->assertEquals( $value,  $testData3[$key] );
      }

      //$this->assertSame($data, $testData3);
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
