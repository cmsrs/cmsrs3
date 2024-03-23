<?php

namespace Tests\Feature;

use App\User;
use App\Config;
use Illuminate\Support\Facades\Hash;
use Illuminate\Foundation\Testing\RefreshDatabase;

class UserTest extends Base
{
    use RefreshDatabase;

    private $pagination;

    public function setUp(): void
    {
        putenv('LANGS="en"');
        putenv('API_SECRET=""');        
        
        parent::setUp();
        $this->createUser();
        $this->createClient();
        $users = User::all()->toArray();        
        $this->assertEquals(2, count($users)); //2 users - one admin, second client

        $this->pagination = Config::getPagination(); //10;
        $this->assertEquals(10,$this->pagination);
    }

    protected function tearDown(): void
    {
        parent::tearDown();
    }

    private function createManyClients( $count )
    {
        for($i=1; $i<=$count; $i++){
            $this->createClient( $i );
        }
    }

    private function getTestClient($prefix = '')
    { 
        return [
            'name' => 'Robert Test'.$prefix,
            'email' => 'rob'.$prefix.'@unittest.com',
            'password' => 'unittest123',
            'role' => User::$role['client']
        ];
    }

    private function createClient( $prefix = '' )
    {
        $data =  $this->getTestClient($prefix);
        $password = Hash::make($data['password']);

        User::create([
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
    public function it_will_get_many_clients_docs()
    {
        $numbersOfClients = 99;
        $this->createManyClients( $numbersOfClients );
        $users = User::all()->toArray();
        $this->assertEquals(2 + $numbersOfClients , count($users)); //2 users - one admin, second client


        $response = $this->get('api/clients?token='.$this->token);
        $res = $response->getData();
        $this->assertTrue($res->success);

        $firstClient = $this->getTestClient();

        $this->assertEquals( $firstClient['email'],  $res->data->data[0]->email);

        $this->assertEquals(1 + $numbersOfClients ,$res->data->total);  //without admin - czyli 100
        $this->assertEquals($this->pagination ,$res->data->per_page);

        $this->assertEquals(1 ,$res->data->current_page);

        $this->assertTrue(str_contains($res->data->next_page_url, 'api/clients?page=2'));

        //get last page
        $lastPage = ($numbersOfClients + 1) / $res->data->per_page;
        if($numbersOfClients == 99){
            $this->assertEquals(10,  $lastPage);
        }

        $response2 = $this->get('api/clients?page='.$lastPage.'&token='.$this->token);
        $res2 = $response2->getData();
        $this->assertTrue($res2->success);

        $lastClient = $this->getTestClient($numbersOfClients);
        $this->assertEquals($lastClient['email'],  $res2->data->data[9]->email );
    }

}
