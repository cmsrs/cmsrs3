<?php

namespace Tests\Feature\Services\Cmsrs;

use App\Models\User;
use App\Services\Cmsrs\ConfigService;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Facades\Hash;

class UserTest extends Base
{
    use RefreshDatabase;

    private $pagination;

    protected function setUp(): void
    {
        putenv('LANGS="en"');
        putenv('API_SECRET=""');
        putenv('CURRENCY="USD"');
        putenv('CACHE_ENABLE=false');
        putenv('CACHE_ENABLE_FILE="app/cache_enable_test.txt"');
        putenv('DEMO_STATUS=false');
        putenv('IS_SHOP=true');
        putenv('IS_LOGIN=true');
        putenv('IS_REGISTER=true');
        putenv('IS_HEADLESS=false');

        parent::setUp();
        $this->createUser();
        $this->createClient();
        $users = User::all()->toArray();
        $this->assertEquals(2, count($users)); // 2 users - one admin, second client

        $this->pagination = ConfigService::getPagination(); // 10 - change .env.testing
        $this->assertEquals(10, $this->pagination);
    }

    protected function tearDown(): void
    {
        parent::tearDown();
    }

    private function createManyClients($count)
    {
        for ($i = 1; $i <= $count; $i++) {
            $this->createClient($i);
        }
    }

    private function getTestClient($prefix = '')
    {
        return [
            'name' => 'Robert Test'.$prefix,
            'email' => 'rob'.$prefix.'@unittest.com',
            'password' => 'unittest123',
            'role' => User::$role_dict['client'],
        ];
    }

    private function createClient($prefix = '')
    {
        $data = $this->getTestClient($prefix);
        $password = Hash::make($data['password']);

        User::create([
            'name' => $data['name'],
            'email' => $data['email'],
            'password' => Hash::make($data['password']),
            'role' => $data['role'],
        ]);

    }

    public function test_it_will_get_all_user_clients_docs()
    {
        $response = $this->get('api/users/clients?token='.$this->token);
        $res = $response->getData();
        $this->assertTrue($res->success);
        $this->assertEquals(count($res->data), 1);
        $data = (array) $res->data[0];

        $testClient = $this->getTestClient();
        $this->assertSame($data['name'], $testClient['name']);
        $this->assertSame($data['email'], $testClient['email']);
        $this->assertNotEmpty($data['id']);
        $this->assertNotEmpty($data['created_at']);
        $this->assertNotEmpty($data['updated_at']);
    }

    public function test_it_will_get_many_clients_with_pagination()
    {
        $numbersOfClients = 99;
        $this->createManyClients($numbersOfClients);
        $users = User::all()->toArray();
        $this->assertEquals(2 + $numbersOfClients, count($users)); // 2 users - one admin, second client

        $response = $this->get('api/clients/id/asc?token='.$this->token);
        $res = $response->getData();
        $this->assertTrue($res->success);

        $firstClient = $this->getTestClient();

        $firstId = $res->data->data[0]->id;
        $this->assertNotEmpty($firstId);
        $this->assertNotEmpty($res->data->data[0]->id);
        $this->assertEquals($firstClient['name'], $res->data->data[0]->name);
        $this->assertEquals($firstClient['email'], $res->data->data[0]->email);
        $this->assertNotEmpty($res->data->data[0]->created_at);
        $this->assertNotEmpty($res->data->data[0]->updated_at);

        // $this->assertEquals(1 + $numbersOfClients ,$res->data->total);  //without admin - it is 100, in simplePaginate it is not occur
        $this->assertEquals($this->pagination, $res->data->per_page);

        $this->assertEquals(1, $res->data->current_page);
        $this->assertTrue(str_contains($res->data->first_page_url, 'api/clients/id/asc?page=1'));
        $this->assertEquals(null, $res->data->prev_page_url);
        $this->assertTrue(str_contains($res->data->next_page_url, 'api/clients/id/asc?page=2'));

        // get last page
        $lastPage = ($numbersOfClients + 1) / $res->data->per_page;
        if ($numbersOfClients == 99) {
            $this->assertEquals(10, $lastPage);
        }
        $response2 = $this->get('api/clients/id/asc?page='.$lastPage.'&token='.$this->token);
        $res2 = $response2->getData();
        $this->assertTrue($res2->success);
        // dd($res2->data);

        $this->assertEquals($lastPage, $res2->data->current_page);
        $this->assertTrue(str_contains($res2->data->first_page_url, 'api/clients/id/asc?page=1'));
        $this->assertTrue(str_contains($res2->data->prev_page_url, 'api/clients/id/asc?page='.($lastPage - 1))); // 9
        $this->assertEquals(null, $res2->data->next_page_url);

        $lastClient = $this->getTestClient($numbersOfClients);
        $lastId = $res->data->data[9]->id;
        $this->assertNotEmpty($lastId);
        $this->assertEquals($lastClient['email'], $res2->data->data[9]->email);

        $this->assertTrue($firstId < $lastId);
    }

    public function test_it_will_get_many_clients_with_pagination_and_sort()
    {
        $numbersOfClients = 99;
        $this->createManyClients($numbersOfClients);
        $users = User::where('role', User::$role_dict['client'])->orderBy('id', 'asc')->get()->toArray();

        $response = $this->get('api/clients/id/desc?token='.$this->token);
        $res = $response->getData();
        $this->assertTrue($res->success);

        $lastPage = ($numbersOfClients + 1) / $res->data->per_page;
        $response2 = $this->get('api/clients/id/desc?page='.$lastPage.'&token='.$this->token);
        $res2 = $response2->getData();
        $this->assertTrue($res2->success);

        $firstClient = $users[0];
        $lastClient = $users[count($users) - 1];

        $lastId = $res->data->data[0]->id;
        $firstId = $res2->data->data[9]->id;

        $this->assertEquals($lastId, $lastClient['id']);
        $this->assertEquals($firstId, $firstClient['id']);
    }

    public function test_restrict_columns_to_specific_names()
    {
        $response = $this->get('api/clients/fake/desc?token='.$this->token);
        $objUser = new User;

        $this->assertEquals(404, $response->status());
        $response->assertJson([
            'success' => false,
            'error' => 'available columns to sort clients: '.implode(',', $objUser->columnsAllowedToSort),
        ]);

    }

    public function test_restrict_direction_to_specific_names()
    {
        $response = $this->get('api/clients/id/fake?token='.$this->token);

        $this->assertEquals(404, $response->status());
        $response->assertJson([
            'success' => false,
            'error' => 'available direction to sort: '.implode(',', ConfigService::getAvailableSortingDirection()),
        ]);

    }

    public function test_sort_by_all_columns()
    {
        $numbersOfClients = 99;
        $this->createManyClients($numbersOfClients);

        $objUser = new User;
        $this->assertNotEmpty(count($objUser->columnsAllowedToSort));
        foreach ($objUser->columnsAllowedToSort as $columnName) {
            $users = User::where('role', User::$role_dict['client'])->orderBy($columnName, 'desc')->get()->toArray();
            $firstClient = $users[0];

            $response = $this->get("api/clients/$columnName/desc?token=".$this->token);
            $res = $response->getData();
            $this->assertTrue($res->success);

            $firstName = $res->data->data[0]->{$columnName};

            $this->assertEquals($firstName, $firstClient[$columnName]);

        }
    }

    public function test_add_client_docs()
    {
        $pass = 'secretPass123$';
        $testClient =
        [
            'name' => 'test client',
            'email' => 'test_client_uniq@cmsrs.pl',
            // 'role' => User::$role['client'],
            'password' => $pass,
            'password_confirmation' => $pass,
        ];

        $response = $this->post('api/clients?token='.$this->token, $testClient);
        $this->assertTrue($response->getData()->success);
    }

    public function test_validate_add_client_error_docs()
    {
        $users = User::all()->toArray();
        $someExistingEmail = $users[0]['email'];
        $this->assertNotEmpty($someExistingEmail);

        $pass = 's';
        $testClient =
        [
            // 'name' => 't',
            'email' => $someExistingEmail,
            'password' => '1',
            'password_confirmation' => 'q',
        ];

        $response = $this->post('api/clients?token='.$this->token, $testClient);
        $res = $response->getData();
        $this->assertFalse($res->success);

        $this->assertTrue(is_array($res->error->name) && ! empty($res->error->name));
        $this->assertTrue(is_array($res->error->email) && ! empty($res->error->email));
        $this->assertTrue(is_array($res->error->password) && ! empty($res->error->password));
    }

    public function test_update_admin()
    {
        $index = 0;
        $users = User::all()->toArray();
        $emailAdmin = $users[0]['email'];
        $this->assertEquals(User::$role_dict['admin'], $users[$index]['role']);

        $userId = $users[$index]['id'];
        $this->assertNotEmpty($userId);

        $newPass = 'secretPass123$_new';
        $testClient =
        [
            'name' => 'test client new',
            'email' => $emailAdmin, // email is not changeable!
            'password' => $newPass,
            'password_confirmation' => $newPass,
        ];

        $response = $this->put("api/clients/$userId?token=".$this->token, $testClient);
        $this->assertEquals(403, $response->status());
        $response->assertJson([
            'success' => false,
            'error' => 'update admin is prohibited',
        ]);
    }

    public function test_update_client_docs()
    {
        $index = 1;
        $users = User::all()->toArray();
        $emailAdmin = $users[0]['email'];
        $this->assertEquals(User::$role_dict['client'], $users[$index]['role']);

        $userId = $users[$index]['id'];
        $this->assertNotEmpty($userId);

        $newPass = 'secretPass123$_new';
        $testClient =
        [
            'name' => 'test client new',
            'email' => $emailAdmin, // email is not changeable!
            'password' => $newPass,
            'password_confirmation' => $newPass,
        ];

        $response = $this->put("api/clients/$userId?token=".$this->token, $testClient);
        $res = $response->getData();

        $this->assertTrue($res->success);
        $this->assertEquals($userId, $res->data->userId);

        $usersAfter = User::all()->toArray();

        $this->assertEquals($userId, $usersAfter[$index]['id']);
        $this->assertEquals(User::$role_dict['client'], $usersAfter[$index]['role']);
        $this->assertEquals($testClient['name'], $usersAfter[$index]['name']);
        $this->assertEquals($users[$index]['email'], $usersAfter[$index]['email']); // email is not changeable!
        $this->assertNotEquals($emailAdmin, $usersAfter[$index]['email']); // email is not changeable!
    }

    public function test_delete_client_docs()
    {
        $index = 1;
        $users = User::all()->toArray();
        $usersCount = count($users);
        $this->assertNotEmpty($usersCount);

        $this->assertEquals(User::$role_dict['client'], $users[$index]['role']);
        $userId = $users[$index]['id'];
        $this->assertNotEmpty($userId);

        $response = $this->delete("api/clients/$userId?token=".$this->token);
        $res = $response->getData();

        $this->assertTrue($res->success);

        $usersAfter = User::all()->toArray();
        $this->assertEquals($usersCount - 1, count($usersAfter));
    }

    public function test_delete_admin_prohibited()
    {
        $index = 0;
        $users = User::all()->toArray();
        $usersCount = count($users);
        $this->assertNotEmpty($usersCount);

        $this->assertEquals(User::$role_dict['admin'], $users[$index]['role']);
        $userId = $users[$index]['id'];
        $this->assertNotEmpty($userId);

        $response = $this->delete("api/clients/$userId?token=".$this->token);
        $res = $response->getData();

        $this->assertEquals(403, $response->status());
        $response->assertJson([
            'success' => false,
            'error' => 'delete admin is prohibited',
        ]);
    }

    public function test_search_client_by_name_or_email_docs()
    {
        $name1 = 'First Abc Kowalski';
        $name2 = 'Fake Kowalski';
        User::create([
            'name' => $name1,
            'email' => 'fake@example.com',
            'password' => Hash::make('password'),
            'role' => User::$role_dict['client'],
        ]);

        User::create([
            'name' => $name2,
            'email' => 'sth@abc-example.com',
            'password' => Hash::make('password'),
            'role' => User::$role_dict['client'],
        ]);

        $response = $this->get('api/clients/id/desc?token='.$this->token.'&search=aBC');
        $res = $response->getData();

        $this->assertTrue($res->success);

        $this->assertEquals(2, count($res->data->data));
        $this->assertEquals($name2, $res->data->data[0]->name);
        $this->assertEquals($name1, $res->data->data[1]->name);
    }

    public function test_get_client_by_given_id_docs() // it can't be admin.
    {
        $users = User::all()->toArray();
        $index = 1;
        $userId = $users[$index]['id'];
        $this->assertTrue(! empty($userId));
        $this->assertEquals(User::$role_dict['client'], $users[$index]['role']);

        $response = $this->get("api/clients/$userId?token=".$this->token);
        $this->assertEquals(200, $response->status());

        $res = $response->getData();
        $this->assertTrue($res->success);

        $this->assertNotEmpty($res->data->name);
        $this->assertNotEmpty($res->data->email);
        $this->assertEquals($userId, $res->data->id);
        $this->assertEquals(User::$role_dict['client'], $res->data->role);
    }

    public function test_get_admin_by_given_id()
    {
        $users = User::all()->toArray();
        $index = 0;
        $userId = $users[$index]['id'];
        $this->assertTrue(! empty($userId));
        $this->assertEquals(User::$role_dict['admin'], $users[$index]['role']);

        $response = $this->get("api/clients/$userId?token=".$this->token);
        $this->assertEquals(404, $response->status());
    }

    /**
     * config test, here because we assume that CACHE_ENABLE="false"
     */
    public function test_check_is_cache_enable_for_cache_enable_false()
    {
        (new ConfigService)->deleteFileCacheEnableIfExist();
        $isCache = (new ConfigService)->isCacheEnable();
        $this->assertFalse($isCache);
    }

    public function test_check_is_cache_enable_when_file_exists_and_for_cache_enable_false()
    {
        (new ConfigService)->deleteFileCacheEnableIfExist();
        $createFile = (new ConfigService)->createFileCacheEnableIfNotExist();
        $this->assertTrue((new ConfigService)->isExistCacheFileEnable());
        $this->assertTrue($createFile);

        $isCache = (new ConfigService)->isCacheEnable();
        $this->assertFalse($isCache);
    }
}
