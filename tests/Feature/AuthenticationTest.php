<?php

namespace Tests\Feature;

use App\User;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class AuthenticationTest extends TestCase
{
    //use DatabaseMigrations;
    use RefreshDatabase;



    public function setUp(): void
    {
        parent::setUp();

        $user = new User([
             'email'    => 'test@email.com',
             'name'     => 'test testowy',
             'password' => 'cmsrs'
         ]);

        $user->save();
    }

    private function privilege_action( $token ){

        $response = $this->get('api/test?token='.$token );
        //print_r( $response->getData()  );
        return $response;
    }
    

    private function logout_action( $token )
    {
        $response = $this->get('api/logout?token='.$token ); //->getData();

        //$this->assertTrue( $response->success  );
        //print_r( $response  );
        return $response;

    }


    /** @test */
    public function it_will_register_a_user()
    {
        $response = $this->post('api/register', [
            'email'    => 'test2@email.com',
//            'name'     => 'iii',
            'password' => 'cmsrs'
        ]);

        //var_dump( $response  );


        $response = $response->getData();

        $this->assertStringStartsWith(  'eyJ0eXA',   $response->data->token );
        $this->assertTrue( $response->success  );

        
        $privilege =   $this->privilege_action( $response->data->token );
        $this->assertNotEmpty( $privilege->getData()->testrs );
        $logout =   $this->logout_action( $response->data->token  );
        $this->assertTrue( $logout->getData()->success );
        $privilegeAfterLogout =    $this->privilege_action( $response->data->token );
        //var_dump($privilegeAfterLogout);


/*
        $response->assertJsonStructure([
            'access_token',
            'token_type',
            'expires_in'
        ]);
        */
    }

    /** @test */
    public function it_will_log_a_user_in()
    {
        $response = $this->post('api/login', [
            'email'    => 'test@email.com',
            'password' => 'cmsrs'
        ])->getData();

        $this->assertStringStartsWith(  'eyJ0eXA',   $response->data->token );
        $this->assertTrue( $response->success  );

        $privilege =   $this->privilege_action( $response->data->token );
        $this->assertNotEmpty( $privilege->getData()->testrs );
        $logout =   $this->logout_action( $response->data->token  );
        $this->assertTrue( $logout->getData()->success );
        $privilegeAfterLogout =    $this->privilege_action( $response->data->token );
        //var_dump($privilegeAfterLogout);




/*
        $response->assertJsonStructure([
            'access_token',
            'token_type',
            'expires_in'
        ]);
        */
    }

    /** @test */
    public function it_will_not_log_an_invalid_user_in()
    {
        $response = $this->post('api/login', [
            'email'    => 'test@email.com',
            'password' => 'wrongpass'
        ])->getData();

        $this->assertNotEmpty(  $response->error );

/*
        $response->assertJsonStructure([
            'error',
        ]);
        */
    }
}    
