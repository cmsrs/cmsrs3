<?php

namespace Tests\Feature;

use App\User;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class AuthenticationTest extends TestCase
{
    use RefreshDatabase;



    public function setUp(): void
    {
        putenv('LANGS="en"');
        putenv('API_SECRET=""');
        putenv('CACHE_ENABLE=false');
        putenv('CACHE_ENABLE_FILE="app/cache_enable_test.txt"');        

        parent::setUp();


        $user = new User([
             'email'    => 'test@email.com',
             'name'     => 'test testowy',
             'role' => User::$role['admin']
         ]);

        $user->password = 'cmsrs';

        $user->save();
    }

    private function privilege_action($token)
    {
        $response = $this->get('api/menus?token='.$token);
        return $response;
    }


    private function logout_action($token)
    {
        $response = $this->get('api/logout?token='.$token); //->getData();

        return $response;
    }


    public function test_it_will_register_a_user()
    {
        $this->markTestSkipped("Now we don't use registration functionality - it is blocked");

        if (empty($_ENV['RS_SECRET'])) {
            return true;
        }

        $secret = $_ENV['RS_SECRET'];

        $response = $this->post('api/register', [
            'secret' => $secret,
            'email'    => 'test2@email.com',
            'name'     => 'iii',
            'password' => 'cmsrs'
        ]);


        $response = $response->getData();


        $this->assertStringStartsWith('eyJ0eXA', $response->data->token);
        $this->assertTrue($response->success);


        $privilege =   $this->privilege_action($response->data->token);
        $this->assertNotEmpty($privilege->getData()->testrs);
        $logout =   $this->logout_action($response->data->token);
        $this->assertTrue($logout->getData()->success);
        $privilegeAfterLogout =    $this->privilege_action($response->data->token);
    }

    public function test_it_will_log_a_user_in_docs()
    {
        $d  = [
            'email'    => 'test@email.com',
            'password' => 'cmsrs'
        ];


        $response = $this->post('api/login', $d); //->getData();

        $response = $response->getData();

        $this->assertStringStartsWith('eyJ0eXA', $response->data->token);
        $this->assertTrue($response->success);

        $privilege =   $this->privilege_action($response->data->token);
        $this->assertTrue($privilege->getData()->success);

        $logout =   $this->logout_action($response->data->token);

        $this->assertTrue($logout->getData()->success);
        $privilegeAfterLogout =    $this->privilege_action($response->data->token);
    }

    public function test_it_will_log_client_in()
    {
        $user = new User([
            'email'    => 'client@email.com',
            'name'     => 'client test',
            'role' => User::$role['client']
        ]);
    
        $user->password = 'cmsrs456';
        $user->save();

        $response = $this->post('api/login', [
        'email'    => 'client@email.com',
        'password' => 'cmsrs456'
        ])->getData();

        $this->assertFalse($response->success);
    }

    public function test_it_will_not_log_an_invalid_user_in_error_docs()
    {
        $response = $this->post('api/login', [
            'email'    => 'test_wrong@email.com',
            'password' => 'wrongpass'
        ]); //->getData();
        $this->assertEquals(200, $response->status());
        $res = $response->getData();


        $this->assertFalse($res->success);
        $this->assertNotEmpty($res->error);
    }

    public function test_it_will_not_log_an_invalid_user_in_good_email_the_same_err_as_below()
    {
        $d  = [
            'email'    => 'test@email.com',
            'password' => 'wrong_pass'
        ];
        $response = $this->post('api/login', $d );
        $res = $response->getData();
        //print_r($res);

        $this->assertFalse($res->success);
        $this->assertNotEmpty($res->error);
    }

}
