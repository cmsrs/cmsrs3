<?php

namespace Tests\Feature;

use Tests\TestCase;
use Illuminate\Foundation\Testing\RefreshDatabase;

use App\Page;
use App\User;
use App\Menu;
use App\Config;
use App\Data\Demo;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Auth;

class HomeTest extends Base
{
    use RefreshDatabase;

    private $testData;
    private $testDataMenu;
    private $menuId;
    private $menuObj;
    private $titleEn = 'eeeeeeeeeeeeeeeennnnnnnnnnnnnnnnn';
    private $titlePl = 'pppppppppppppppplllllllllllllllll';
    private $langs;



    public function setUp(): void
    {
        putenv('LANGS="pl,en"');
        putenv('API_SECRET=""');
        parent::setUp();
        //$this->createUser();
        $this->createClientUser();
    }

    protected function tearDown(): void
    {
        parent::tearDown();
    }

    /** @test */
    public function it_will_api_home_token()
    {
        $this->assertAuthenticated();
        $token = User::getTokenForClient();
        $this->assertNotEmpty($token);

        $user = Auth::user();
        $check = $user->checkClientByToken($token);
        $this->assertTrue($check);

        $staticCheck = User::checkApiClientByToken($token);
        $this->assertTrue($staticCheck);
    }

}