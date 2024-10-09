<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Foundation\Auth\VerifiesEmails;


use App\Models\Cmsrs\Menu;
use App\Models\Cmsrs\User;


use App\Services\Cmsrs\MenuService;
use App\Services\Cmsrs\PageService;
use App\Services\Cmsrs\ConfigService;


class VerificationController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Email Verification Controller
    |--------------------------------------------------------------------------
    |
    | This controller is responsible for handling email verification for any
    | user that recently registered with the application. Emails may also
    | be re-sent if the user didn't receive the original email message.
    |
    */

    use VerifiesEmails;

    /**
     * Where to redirect users after verification.
     *
     * @var string
     */
    protected $redirectTo = '/en/home';

    protected $lang;    
    protected $langs;        
    protected $menus;        

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $demoStatus = env('DEMO_STATUS', false);
        if($demoStatus){
            echo "Not permission";
            die();
        }

        $this->middleware('auth');
        $this->middleware('signed')->only('verify');
        $this->middleware('throttle:6,1')->only('verify', 'resend');

        $this->langs = (new ConfigService)->arrGetLangs();
        $pHome = PageService::getFirstPageByType('home');
        if( $pHome ){
            $this->redirectTo = $pHome->getUrl($this->langs[0]);
        }

    }
}
