<?php


namespace Tests\Feature;

use Tests\TestCase;
use App\User;

class Base extends TestCase
{

  protected $token;

  public function setUp(): void
  {
      parent::setUp();

      $user = new User([
           'email'    => 'test@email.com',
           'name'     => 'test testowy',
           'password' => 'cmsrs'
       ]);
      $user->save();

      $this->token = $this->getTestToken();
  }

  public function getTestToken()
  {
    $response = $this->post('api/login', [
        'email'    => 'test@email.com',
        'password' => 'cmsrs'
    ])->getData();

    return $response->data->token;
  }

}
