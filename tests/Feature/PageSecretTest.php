<?php

namespace Tests\Feature;

use App\Page;
use App\Menu;
use App\User;

//use App\User;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Str;
//use Tests\TestCase;

class PageSecretTest extends Base
{
    //use DatabaseMigrations;
    use RefreshDatabase;


    private $testData;
    private $testDataMenu;
    private $menuId;
    private $menuObj;
    private $objPage;

    private $apiSecret;

    public function setUp(): void
    {
        $this->apiSecret = 'v2345';
        //$this->apiSecret = '';        
        //putenv('LANGS="en"');      
        putenv('API_SECRET="'.$this->apiSecret.'"');      
        parent::setUp();

        $this->createUser();

        $this->testData =
        [
            'title' =>  ['en' => 'page 1 test'],
            'short_title' =>  ['en' =>'page1'],
            'description' =>  ['en' =>'this page: test desc ...'],
            'published' => 1,
            'commented' => 1,
            'after_login' => 0,
            //'position' => 7,
            'type' => 'cms',
            'content' =>  ['en' => 'content test133445'],
            'menu_id' => null,
            'page_id' => null            
        ];

        $this->testDataMenu =
        [
             'name'     => ['en' => 'test men7'],
             //'position' => 77
        ];

    }

    protected function tearDown(): void
    {
        parent::tearDown();
    }
    
    private  function  setTestData()
    {
      $this->objPage = (new Page)->wrapCreate($this->testData);

      $menu = (new Menu)->wrapCreate($this->testDataMenu);
      //$save = $menu->save();
      //$this->assertTrue($save);


      $this->menuObj = $menu->all()->first();
      $this->menuId = $this->menuObj->id;
    }  



    /** @test */
    public function it_will_add_main_page()
    {
      //$this->setTestData();
      //$parentId = $this->dateToTestParent( $this->menuId );
      $testData2 =
      [
          'title'     =>  ['en' =>'test p2xx'],
          'short_title' =>  ['en' =>'p22'],
          'description' =>  ['en' =>'test1234'],
          'published' => 1,
          'commented' => 0,
          'after_login' => 1,
          //'position' => 3,
          'type' => 'main_page',
          'content' =>  ['en' =>'aaa ffdfds'],
          'menu_id' => null, //it must be null for type main_page
          'page_id' => null, //it must be null for type main_page
          //'images' => []
      ];

      $this->assertNotEmpty($this->apiSecret);
      $response = $this->post('api/'.$this->apiSecret.'/pages?token='.$this->token, $testData2);
      //dd($response);

      $res = $response->getData();
      $this->assertTrue( $res->success );   
      
      $pages =  Page::all()->toArray();
      $this->assertEquals(1, count($pages));
      $this->assertEquals('main_page',$pages[0]['type']);
      //dd($pages);
    }


    /** @test */
    public function it_will_delete_page()
    {
      $this->assertNotEmpty($this->apiSecret);
      $this->setTestData();
      $responseAll = $this->get('api/'.$this->apiSecret.'/pages?token='.$this->token );
      $resAll = $responseAll->getData();
      //var_dump($resAll);
      $this->assertNotEmpty($resAll->data);
      $id = $resAll->data[0]->id;
      $this->assertNotEmpty($id);

      $response0 = $this->delete('api/'.$this->apiSecret.'/pages/'.$id.'?token='.$this->token);
      $res0 = $response0->getData();
      $this->assertTrue( $res0->success );

      $responseAllAfter = $this->get('api/'.$this->apiSecret.'/pages?token='.$this->token );
      $resAllAfter = $responseAllAfter->getData();
      //var_dump($resAllAfter);
      $this->assertEmpty($resAllAfter->data);


    }
}
