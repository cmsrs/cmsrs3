<?php

namespace Tests\Feature;

use App\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Foundation\Testing\RefreshDatabase;

class UserTest extends Base
{
    use RefreshDatabase;
    //protected $testData;

    public function setUp(): void
    {
        putenv('LANGS="en"');
        putenv('API_SECRET=""');
        parent::setUp();
        $this->createUser();
        $this->it_will_create_user_client();
        $users = User::all()->toArray();
        $this->assertEquals(2, count($users)); //2 users - one admin, second client
    }

    protected function tearDown(): void
    {
        parent::tearDown();
    }

    private function createManyClients( $count )
    {
        for($i=0; $i<$count; $i++){
            $this->it_will_create_user_client( $i );
        }
    }

    private function getTestCleint($prefix = '')
    { 
        return [
            'name' => 'Robert Test'.$prefix,
            'email' => 'rob'.$prefix.'@unittest.com',
            'password' => 'unittest123',
            'role' => User::$role['client']
        ];
    }

    private function it_will_create_user_client( $prefix = '' )
    {
        $data =  $this->getTestCleint($prefix);
        $this->assertTrue(true);
        $password = Hash::make($data['password']);

        $return = User::create([
            'name' => $data['name'],
            'email' => $data['email'],
            'password' => Hash::make($data['password']),
            'role' => $data['role']
        ]);

    }

    /** @test */
    public function it_will_get_all_user_clients_docs()
    {
        $response = $this->get('api/users/clients?token='.$this->token);
        $res = $response->getData();
        $this->assertTrue($res->success);
        $this->assertEquals(count($res->data), 1);
        $data = (array)$res->data[0];

        $testClient =  $this->getTestCleint();
        $this->assertSame($data['name'], $testClient['name']);
        $this->assertSame($data['email'], $testClient['email']);
        $this->assertNotEmpty($data['id']);
        $this->assertNotEmpty($data['created_at']);
        $this->assertNotEmpty($data['updated_at']);
    }


    /** @test */
    public function it_will_get_many_clients()
    {
        $numbersOfClients = 100;
        $this->createManyClients( $numbersOfClients );
        $users = User::all()->toArray();
        $this->assertEquals(2 + $numbersOfClients , count($users)); //2 users - one admin, second client


        // $response = $this->get('api/users/clients?token='.$this->token);
        // $res = $response->getData();
        // $this->assertTrue($res->success);
        // $this->assertEquals(count($res->data), 1);
        // $data = (array)$res->data[0];

        // $testClient =  $this->getTestCleint();
        // $this->assertSame($data['name'], $testClient['name']);
        // $this->assertSame($data['email'], $testClient['email']);
        // $this->assertNotEmpty($data['id']);
        // $this->assertNotEmpty($data['created_at']);
        // $this->assertNotEmpty($data['updated_at']);
    }

}
