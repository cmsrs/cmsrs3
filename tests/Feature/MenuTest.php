<?php

namespace Tests\Feature;

use App\Menu;
use App\Page;
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
        //putenv("LANGS=en,pl");      
        
        $this->createUser();

        
        $this->testData =
        [
             'name'     => ['en' => 'test menu1']
             //'position' => 4
        ];

        
        // $menu = new Menu($this->testData);
        // $menu->save();
        // $this->objMenu = $menu;
        
    }  

    protected function tearDown(): void
    {
        parent::tearDown();
    }

    private  function  setTestData()
    {
        $this->objMenu = (new Menu)->wrapCreate($this->testData);
    }

    /** @test */
    public function it_will_get_tree_by_menu()
    {
      $this->setTestData();
      $parentId = $this->dateToTestParent( $this->objMenu->id );
      //dd(Page::all()->toArray());

      $publishedAndAccess = $this->objMenu->pagesPublishedAndAccess()->get(); //->toArray();
      $tree = $this->objMenu->pagesPublishedTree($publishedAndAccess);
      $this->assertEquals(3, count($tree));
      $this->assertEquals(2, count($tree[$parentId]['children']));
      
      $this->assertEquals(PageTest::STR_CHILD_ONE, Page::find($tree[$parentId]['children'][0]->id)->translatesByColumnAndLang( 'title', 'en' ));
      $this->assertEquals(PageTest::STR_CHILD_TWO, Page::find($tree[$parentId]['children'][1]->id)->translatesByColumnAndLang( 'title', 'en' ));
    }


    /** @test */
    public function it_will_change_position_menus()
    {
      $this->setTestData();

      //add to test menu
      $testData2 =
      [
           'name'     => ['en' => 'test menu2'],
           //'position' => 2
      ];
      $response2 = $this->post('api/menus?token='.$this->token, $testData2);
      //dd($response2);
      $this->assertTrue( $response2->getData()->success );        

      $testData3 =
      [
           'name'     => ['en' => 'test menu3'],
           //'position' => 3
      ];
      $response3 = $this->post('api/menus?token='.$this->token, $testData3);
      $this->assertTrue( $response3->getData()->success );        
      //test if 3 $menus
      $response = $this->get('api/menus?token='.$this->token );
      $res = $response->getData();
      $this->assertTrue( $res->success );      
      $this->assertEquals( count($res->data), 3);

      //dd($res->data);
      $this->assertEquals( $res->data[0]->position, 1 );      
      $this->assertEquals( $res->data[1]->position, 2 );      
      $this->assertEquals( $res->data[2]->position, 3 );

      $name = Menu::find( $res->data[2]->id )->translatesByColumnAndLang( 'name', 'en' );
      $this->assertNotEmpty($name);
      //$name = $res->data[2]->name;
      $this->assertEquals( $name, $testData3['name']['en'] );

      $res = $this->get('api/menus/position/up/'.$res->data[2]->id.'?token='.$this->token );
      $res22a = $res->getData();
      $this->assertTrue( $res22a->success );


      $response = $this->get('api/menus?token='.$this->token );
      $res1 = $response->getData();
      //dd($res1->data);

      $name2 = Menu::find( $res1->data[2]->id )->translatesByColumnAndLang( 'name', 'en' );      
      $this->assertEquals( $name2, $testData2['name']['en'] );
      $this->assertNotEquals( $name2, $name );


      $name1 = Menu::find( $res1->data[2]->id )->translatesByColumnAndLang( 'name', 'en' );
      $resDown = $this->get('api/menus/position/down/'.$res1->data[2]->id.'?token='.$this->token );
      $res22a1 = $resDown->getData();
      $this->assertTrue( $res22a1->success );


      $response = $this->get('api/menus?token='.$this->token );
      $res2 = $response->getData();

      $this->assertNotEquals(  Menu::find($res2->data[2]->id)->translatesByColumnAndLang( 'name', 'en' ), $name1 );
      //dd($res2->data);
      
      $this->assertEquals(  Menu::find($res2->data[0]->id)->translatesByColumnAndLang( 'name', 'en' ), $name1);
      $this->assertEquals(  Menu::find($res2->data[0]->id)->translatesByColumnAndLang( 'name', 'en' ), 'test menu2');
      $this->assertEquals( $res2->data[0]->position, 1);      
      //var_dump($res0); die('--');
    }


    /** @test */
    public function it_will_show_all_menus()
    {
      $this->setTestData();

      $response = $this->get('api/menus?token='.$this->token );
      $res = $response->getData();
      $this->assertTrue( $res->success );
      $this->assertEquals( count($res->data), 1);

      //dd($res->data);
      $data = (array)$res->data[0];
      //var_dump($data); dd('--');
      //$this->testData['id'] = 1;

      $this->assertEquals(Menu::find($data['id'])->translatesByColumnAndLang( 'name', 'en' ), $data['name']->en);
      $this->assertSame(Menu::find($data['id'])->translatesByColumnAndLang( 'name', 'en' ), $this->testData['name']['en']);
      $this->assertSame($data['position'], 1/*$this->testData['position']*/);

      $this->assertIsInt($data['position']);
      $this->assertIsInt($data['id']);      

      $this->assertNotEmpty($data['id']);
    }

    /** @test */
    public function it_will_add_menus()
    {
      $this->setTestData();
      $testData2 =
      [
           'name'     => ['en' =>  'test menu2'],
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

      $data = (array)$res2->data[0];
      //unset($data['id']);
      $this->assertSame( Menu::find( $data['id'])->translatesByColumnAndLang( 'name', 'en' ) , $data['name']->en );
      $this->assertSame( Menu::find( $data['id'])->translatesByColumnAndLang( 'name', 'en' ) , $this->testData['name']['en']);
      $data2 = (array)$res2->data[1];

      //unset($data2['id']);
      $testData2['position'] = $data['position'] + 1;

      //print_r($data2);
      //print_r($testData2);

      $this->assertSame($data2['position'], $testData2['position']);

      //wrond data
      $testData22 =
      [
           'name'     => ['en' => 'test menu2'],
           'position' => '3a12',
           'fake' => 234
      ];

      $response22 = $this->post('api/menus?token='.$this->token, $testData22);

      //var_dump($response22); die('========');


      $res22 = $response22->getData();
      $this->assertTrue( $res22->success );


      //wrong lang
      $testData44 =
      [
           'namefake'     => ['en' => 'test menu2'],
           'position' => '3a12',
           'fake' => 234
      ];

      $response44 = $this->post('api/menus?token='.$this->token, $testData44);   
      $this->assertFalse($response44->getData()->success );
      $this->assertNotEmpty($response44->getData()->error );      


      //wrong lang
      $testData55 =
      [
           'name'     => ['fr' => 'test menu2'],
           'position' => '3a12',
           'fake' => 234
      ];

      $response55 = $this->post('api/menus?token='.$this->token, $testData55);   
      $this->assertFalse($response55->getData()->success );
      $this->assertNotEmpty($response55->getData()->error );      

    }

    /** @test */
    public function it_will_update_menu()
    {
      $this->setTestData();
      //dd('00000000000');
      $responseAll = $this->get('api/menus?token='.$this->token );
      $resAll = $responseAll->getData();
      $id = $resAll->data[0]->id;

      //print_r($resAll->data[0]);
      //$id = 1;

      //$this->testData

      $slug = Menu::find($id)->getSlugByLang('en');
      //dd($slug);
      $this->assertEquals($slug,  Str::slug($this->testData['name']['en'], "-")    );


      $testData3 =
      [
            'id' => $id,
            'name' =>  ['en' => 'test menu3  żółta żółć'],
            //'position' => $resAll->data[0]->position //? - is it pass postition by edit menu ?? TODO
      ];

      //dd('++++++++++++11+++');
      $response0 = $this->put('api/menus/'.$id.'?token='.$this->token, $testData3);
      //dd($response0);
      $this->assertTrue( $response0->getData()->success ); 
      //$response0 = $this->put('api/menus/1?token='.$this->token, $testData3);

      $slugAfter = Menu::find($id)->getSlugByLang('en');
      $this->assertNotEquals($slug, $slugAfter);
      $this->assertEquals($slugAfter,  Str::slug($testData3['name']['en'], "-")  );



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

      //dd($testData3);
      //dd($data);

      $this->assertSame($data['id'], $testData3['id']);
      $this->assertSame($data['name']->en, $testData3['name']['en']);      
      $this->assertNotEmpty($data['position']);
      //$this->assertEmpty($testData3['position']);   
      $this->assertFalse(isSet($testData3['position']));

      //wrond data
      $testData33 =
      [
            'id' => $id,
            'name' => ['fr' => 'test menu3'],
            'position' => '3d33'
      ];
      $response33 = $this->put('api/menus/'.$id.'?token='.$this->token, $testData33);
      //dd($response33);
      $res33 = $response33->getData();
      $this->assertFalse( $res33->success );
      //$this->assertEmpty( $res33->error );


    }

    /** @test */
    public function it_will_delete_menu()
    {
      $this->setTestData();
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
      $this->setTestData();
      //fake id - obluga bledow
      $responseFake = $this->delete('api/menus/rs_I_eW23423fsd?token='.$this->token);
      //var_dump($responseFake);
      $resFake = $responseFake->getData();
      $this->assertFalse( $resFake->success );
      $this->assertNotEmpty( $resFake->error );


    }


}
