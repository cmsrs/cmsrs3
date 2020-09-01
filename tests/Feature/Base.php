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




}
