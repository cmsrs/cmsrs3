<?php

namespace Tests\Feature;

use App\User;
use Illuminate\Support\Facades\Hash;

class UserTest extends Base
{
    protected $testData;

    public function setUp(): void
    {
        putenv('LANGS="en"');
        putenv('API_SECRET=""');
        parent::setUp();
        $this->createUser();

        $this->testData =
            [
                'name' => 'Robert Test',
                'email' => 'rob@unittest.com',
                'password' => 'unittest123',
                'role' => User::$role['client']
            ];

        $this->it_will_create_user_client();
    }

    private function it_will_create_user_client()
    {
        $data =  $this->testData;
        $this->assertTrue(true);
        $password = Hash::make($data['password']);

        User::where('email', $data['email'])->delete();

        $return = User::create([
            'name' => $data['name'],
            'email' => $data['email'],
            'password' => Hash::make($data['password']),
            'role' => $data['role']
        ]);

        $users = User::all()->toArray();

        $this->assertEquals(2, count($users)); //2 users - one admin, second client
    }

    /** @test */
    public function it_will_get_all_user_clients_docs()
    {
        $response = $this->get('api/users/clients?token='.$this->token);
        $res = $response->getData();
        $this->assertTrue($res->success);
        $this->assertEquals(count($res->data), 1);
        $data = (array)$res->data[0];
        $this->assertSame($data['name'], $this->testData['name']);
        $this->assertSame($data['email'], $this->testData['email']);
        $this->assertNotEmpty($data['id']);
        $this->assertNotEmpty($data['created_at']);
        $this->assertNotEmpty($data['updated_at']);
    }

    protected function tearDown(): void
    {
        parent::tearDown();
    }
}
