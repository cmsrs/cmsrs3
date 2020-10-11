<?php


namespace Tests\Feature;

use Tests\TestCase;
use App\User;

class Base extends TestCase
{

  protected $token;


  public function createUser()
  {

      $user = new User([
           'email'    => 'test@email.com',
           'name'     => 'test testowy',
           //'password' => 'cmsrs'
          'role' => User::$role['admin']
       ]);

      $user->password = 'cmsrs';

      User::where('email',  'test@email.com')->delete();
      $user->save();


      $this->token = $this->getTestToken();
  }



  public function setUp(): void
  {
      parent::setUp();


  }

    protected function tearDown(): void
    {
        parent::tearDown();

        //echo "ddddddddd";
        //$u = User::where('email',  'test@email.com')->delete();
    }


  public function getTestToken()
  {
    $response = $this->post('api/login', [
        'email'    => 'test@email.com',
        'password' => 'cmsrs'
    ])->getData();

    return $response->data->token;
  }

  public function getFixturePath($file){
    $path = getcwd().'/tests/Feature/fixture/';
    //if($file){
    $path = $path.$file;
    $this->assertFileExists($path);
    //}

    return $path;
  }
  public function getFixtureBase64($file){
    $path = $this->getFixturePath($file);
    $type = pathinfo($path, PATHINFO_EXTENSION);
    $data = file_get_contents($path);
    $base64 = 'data:image/' . $type . ';base64,' . base64_encode($data);
    return $base64;
  }


  protected function dateToTestParent( $menuId )
  {
    $testData1 =
    [
         'title'     => 'test p1',
         'short_title' => 'p11',
         'published' => 1,
         'type' => 'cms',
         'content' => 'ppp1',
         'menu_id' =>  $menuId
    ];
    $response1 = $this->post('api/pages?token='.$this->token, $testData1);

    $testData2 =
    [
         'title' =>  PageTest::STR_PARENT_TWO,
         'short_title' => 'p22',
         'published' => 1,
         'type' => 'cms',
         'content' => 'parent page ppp2',
         'menu_id' =>  $menuId
    ];
    $response2 = $this->post('api/pages?token='.$this->token, $testData2);

    //check pages:
    $res = $this->get('api/pages?token='.$this->token );
    $r = $res->getData();
    $this->assertTrue( $r->success );

    $parentId = $r->data[1]->id;
    $this->assertEquals( PageTest::STR_PARENT_TWO, $r->data[1]->title );
    $this->assertNotEmpty($parentId);

    $testData3 =
    [
         'title'     =>  PageTest::STR_CHILD_ONE,
         'short_title' => 'p33',
         'published' => 1,
         'type' => 'cms',
         'content' => 'child page ppp1',
         'page_id' => $parentId,
         'menu_id' =>  $menuId
    ];
    $response3 = $this->post('api/pages?token='.$this->token, $testData3);

    $testData4 =
    [
         'title'     => PageTest::STR_CHILD_TWO,
         'short_title' => 'p44',
         'published' => 1,
         'type' => 'cms',
         'content' => 'child page ppp2',
         'page_id' => $parentId,
         'menu_id' =>  $menuId
    ];
    $response4 = $this->post('api/pages?token='.$this->token, $testData4);

    $testData5 =
    [
         'title'     =>  PageTest::STR_PARENT_TREE , // 'p5',
         'short_title' => 'p55',
         'published' => 1,
         'type' => 'cms',
         'content' => 'pppppppp5',
         //'page_id' => $parentId,
         'menu_id' =>  $menuId
    ];
    $response5 = $this->post('api/pages?token='.$this->token, $testData5);

    return $parentId;
  }




}
