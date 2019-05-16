<?php

namespace Tests\Feature;

use App\Menu;
use App\User;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use Illuminate\Foundation\Testing\RefreshDatabase;
//use Tests\TestCase;

class MenuTest extends Base
{
    //use DatabaseMigrations;
    use RefreshDatabase;

    //private $token;
    private $testData;

    public function setUp(): void
    {
        parent::setUp();

        $this->testData =
        [
             'name'     => 'test menu1',
             'position' => 2
        ];

        $menu = new Menu($this->testData);

        $menu->save();
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
      $this->assertNotEmpty($data['id']);
    }

    /** @test */
    public function it_will_add_menus()
    {

      $testData2 =
      [
           'name'     => 'test menu2',
           'position' => 3
      ];

      $response = $this->post('api/menus?token='.$this->token, $testData2);

      //var_dump($response);

      $res = $response->getData();
      $this->assertTrue( $res->success );


      //sprawdzamy rekordy w db
      $response2 = $this->get('api/menus?token='.$this->token );

      $res2 = $response2->getData();

      $this->assertTrue( $res2->success );
      $this->assertEquals( count($res2->data), 2);
      $data = (array)$res2->data[0];
      unset($data['id']);
      $this->assertSame($data, $this->testData);


      $data2 = (array)$res2->data[1];
      unset($data2['id']);
      $this->assertSame($data2, $testData2);

      //wrond data
      $testData22 =
      [
           'name'     => 'test menu2',
           'position' => '3a12'
      ];

      $response22 = $this->post('api/menus?token='.$this->token, $testData22);

      $res22 = $response22->getData();
      $this->assertFalse( $res22->success );
      $this->assertNotEmpty( $res22->error );

      //var_dump($response2);


    }

    /** @test */
    public function it_will_update_menu()
    {

      $responseAll = $this->get('api/menus?token='.$this->token );
      $resAll = $responseAll->getData();
      $id = $resAll->data[0]->id;
      //$id = 1;

      $testData3 =
      [
            'id' => $id,
            'name' => 'test menu3',
            'position' => 3
      ];

      $response0 = $this->put('api/menus/'.$id.'?token='.$this->token, $testData3);
      //$response0 = $this->put('api/menus/1?token='.$this->token, $testData3);

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
      $this->assertFalse( $res33->success );
      $this->assertNotEmpty( $res33->error );


    }

    /** @test */
    public function it_will_delete_menu()
    {
      $responseAll = $this->get('api/menus?token='.$this->token );
      $resAll = $responseAll->getData();
      //var_dump($resAll);
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
