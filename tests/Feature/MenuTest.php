<?php

namespace Tests\Feature;

use App\Menu;
//use App\Page;
//use App\User;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Str;
//use Tests\TestCase;

class MenuTest extends Base
{
    //use DatabaseMigrations;
    use RefreshDatabase;

    //private $token;
    private $testData;

    private $objMenu;

    public function setUp(): void
    {
        parent::setUp();
        $this->createUser();

        $this->testData =
        [
             'name'     => 'test menu1',
             'position' => 4
        ];

        $menu = new Menu($this->testData);

        $menu->save();
        $this->objMenu = $menu;
        //$this->menuId = $this->objMenu->id;
    }

    protected function tearDown(): void
    {
        parent::tearDown();
    }

    /** @test */
    public function it_will_get_tree_by_menu()
    {
      $parentId = $this->dateToTestParent( $this->objMenu->id );

      $publishedAndAccess = $this->objMenu->pagesPublishedAndAccess()->get(); //->toArray();
      $tree = $this->objMenu->pagesPublishedTree($publishedAndAccess);
      $this->assertEquals(3, count($tree));
      $this->assertEquals(2, count($tree[$parentId]['children']));

      $this->assertEquals(PageTest::STR_CHILD_ONE, $tree[$parentId]['children'][0]['title']);
      $this->assertEquals(PageTest::STR_CHILD_TWO, $tree[$parentId]['children'][1]['title']);
    }


    /** @test */
    public function it_will_change_position_menus()
    {
      //add to test menu
      $testData2 =
      [
           'name'     => 'test menu2',
           //'position' => 2
      ];
      $response2 = $this->post('api/menus?token='.$this->token, $testData2);

      $testData3 =
      [
           'name'     => 'test menu3',
           //'position' => 3
      ];
      $response3 = $this->post('api/menus?token='.$this->token, $testData3);
      //test if 3 $menus
      $response = $this->get('api/menus?token='.$this->token );
      $res = $response->getData();
      $this->assertTrue( $res->success );      
      $this->assertEquals( count($res->data), 3);

      //dump($res->data);
      $this->assertEquals( $res->data[0]->position, 4 );      
      $this->assertEquals( $res->data[1]->position, 5 );      
      $this->assertEquals( $res->data[2]->position, 6 );

      $name = $res->data[2]->name;
      $this->assertEquals( $name, $testData3['name'] );

      $res = $this->get('api/menus/position/up/'.$res->data[2]->id.'?token='.$this->token );

      $res22a = $res->getData();


      $this->assertTrue( $res22a->success );


      $response = $this->get('api/menus?token='.$this->token );
      $res1 = $response->getData();
      //dump($res1->data);

      $this->assertEquals( $res1->data[2]->name, $testData2['name'] );
      $this->assertNotEquals( $res1->data[2]->name, $name );


      $name1 = $res1->data[2]->name;
      $resDown = $this->get('api/menus/position/down/'.$res1->data[2]->id.'?token='.$this->token );
      $res22a1 = $resDown->getData();
      $this->assertTrue( $res22a1->success );


      $response = $this->get('api/menus?token='.$this->token );
      $res2 = $response->getData();

      $this->assertNotEquals( $res2->data[2]->name, $name1 );
      //dd($res2->data);
      
      $this->assertEquals( $res2->data[0]->name, $name1);
      $this->assertEquals( $res2->data[0]->name, 'test menu2');
      $this->assertEquals( $res2->data[0]->position, 4);      
      //var_dump($res0); die('--');
    }



    /** @test */
    public function it_will_show_all_menus()
    {
      $response = $this->get('api/menus?token='.$this->token );
      $res = $response->getData();
      $this->assertTrue( $res->success );
      $this->assertEquals( count($res->data), 1);
      $data = (array)$res->data[0];
      //var_dump($data);
      //$this->testData['id'] = 1;

      $this->assertSame($data['name'], $this->testData['name']);
      $this->assertSame($data['position'], $this->testData['position']);

      $this->assertIsInt($data['position']);
      $this->assertIsInt($data['id']);      

      $this->assertNotEmpty($data['id']);
    }

    /** @test */
    public function it_will_add_menus()
    {

      $testData2 =
      [
           'name'     => 'test menu2',
           //'position' => 3
      ];

      $response = $this->post('api/menus?token='.$this->token, $testData2);

      //var_dump($response); die('----');

      $res = $response->getData();
      $this->assertTrue( $res->success );


      //sprawdzamy rekordy w db
      $response2 = $this->get('api/menus?token='.$this->token );

      $res2 = $response2->getData();

      $this->assertTrue( $res2->success );
      $this->assertEquals( count($res2->data), 2);
      //print_r((array)$res2->data);

      $data = (array)$res2->data[0];
      unset($data['id']);
      $this->assertSame($data, $this->testData);
      $data2 = (array)$res2->data[1];

      unset($data2['id']);
      $testData2['position'] = $data['position'] + 1;

      //print_r($data2);
      //print_r($testData2);

      $this->assertSame($data2, $testData2);

      //wrond data
      $testData22 =
      [
           'name'     => 'test menu2',
           'position' => '3a12'
      ];

      $response22 = $this->post('api/menus?token='.$this->token, $testData22);

      //var_dump($response22); die('========');


      $res22 = $response22->getData();
      $this->assertTrue( $res22->success );
      //$this->assertEmpty( $res22->error );

      //var_dump($response2);
    }

    /** @test */
    public function it_will_update_menu()
    {

      $responseAll = $this->get('api/menus?token='.$this->token );
      $resAll = $responseAll->getData();
      $id = $resAll->data[0]->id;

      //print_r($resAll->data[0]);
      //$id = 1;

      //$this->testData

      $slug = Menu::find($id)->slug;
      $this->assertEquals($slug,  Str::slug($this->testData['name'], "-")    );


      $testData3 =
      [
            'id' => $id,
            'name' => 'test menu3  żółta żółć',
            'position' => $resAll->data[0]->position
      ];

      $response0 = $this->put('api/menus/'.$id.'?token='.$this->token, $testData3);
      //$response0 = $this->put('api/menus/1?token='.$this->token, $testData3);

      $slugAfter = Menu::find($id)->slug;
      $this->assertNotEquals($slug, $slugAfter);
      $this->assertEquals($slugAfter,  Str::slug($testData3['name'], "-")  );



      //die('==');
      //var_dump($response0);

      $res0 = $response0->getData();
      $this->assertTrue( $res0->success );

      //pobieramy $menus
      $response = $this->get('api/menus?token='.$this->token );
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
            'name' => 'test menu3',
            'position' => '3d33'
      ];
      $response33 = $this->put('api/menus/'.$id.'?token='.$this->token, $testData33);
      //var_dump($response33);
      $res33 = $response33->getData();
      $this->assertTrue( $res33->success );
      //$this->assertEmpty( $res33->error );


    }

    /** @test */
    public function it_will_delete_menu()
    {
      $responseAll = $this->get('api/menus?token='.$this->token );
      $resAll = $responseAll->getData();
      $this->assertNotEmpty($resAll->data);
      $id = $resAll->data[0]->id;
      $this->assertNotEmpty($id);

      $response0 = $this->delete('api/menus/'.$id.'?token='.$this->token);
      $res0 = $response0->getData();
      $this->assertTrue( $res0->success );

      $responseAllAfter = $this->get('api/menus?token='.$this->token );
      $resAllAfter = $responseAllAfter->getData();
      //var_dump($resAllAfter);
      $this->assertEmpty($resAllAfter->data);


    }
    /** @test */
    public function it_will_delete_menu_fake(){
      //fake id - obluga bledow
      $responseFake = $this->delete('api/menus/rs_I_eW23423fsd?token='.$this->token);
      //var_dump($responseFake);
      $resFake = $responseFake->getData();
      $this->assertFalse( $resFake->success );
      $this->assertNotEmpty( $resFake->error );


    }


}
