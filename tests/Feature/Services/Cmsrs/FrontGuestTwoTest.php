<?php

namespace Tests\Feature\Services\Cmsrs;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class FrontGuestTwoTest extends TestCase
{
    protected function setUp(): void
    {
        putenv('LANGS="en"');
        putenv('API_SECRET=""');
        putenv('CURRENCY="USD"');
        putenv('CACHE_ENABLE=false');
        putenv('CACHE_ENABLE_FILE="app/cache_enable_test.txt"');
        putenv('DEMO_STATUS=false');
        putenv('IS_SHOP=true');
        putenv('IS_LOGIN=false'); //!!
        putenv('IS_REGISTER=false');//!!

        parent::setUp();
    }

    use RefreshDatabase;

    public function test_it_launches_login_page_404()
    {
        $response = $this->get('/login');
        $response->assertStatus(404);

        $response2 = $this->get('/login?lang=pl');
        $response2->assertStatus(404);

        $response3 = $this->get('/login?lang=en');
        $response3->assertStatus(404);
    }

    public function test_it_launches_register_page_404()
    {
        $response = $this->get('/register');
        $response->assertStatus(404);

        $response2 = $this->get('/register?lang=pl');
        $response2->assertStatus(404);

        $response3 = $this->get('/register?lang=en');
        $response3->assertStatus(404);
    }

    public function test_it_launches_post_login_page_302()
    {
        $data = [
            '_token' => 'ZmfOpggMnFoJbhqCKYADeTrYcEGlYIHFyLWa89wP',
            'email' => 'test@example.com',
            'password' => 'dfsdfsdferterter',
        ];

        $response = $this->post('/login', $data);
        $response->assertStatus(404);        
    }

    public function test_it_launches_post_register_page_404()
    {
        $data = [
            '_token' => 'ZmfOpggMnFoJbhqCKYADeTrYcEGlYIHFyLWa89wP',
            'name' => 'rob',
            'email' => 'test@example.com',
            'password' => 'qwerty123',
            'password_confirmation' => 'qwerty123',
        ];

        $response = $this->post('/register', $data);
        $response->assertStatus(404);
    }
}
