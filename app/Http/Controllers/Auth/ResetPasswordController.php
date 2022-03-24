<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Foundation\Auth\ResetsPasswords;
use App\Config;


class ResetPasswordController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Password Reset Controller
    |--------------------------------------------------------------------------
    |
    | This controller is responsible for handling password reset requests
    | and uses a simple trait to include this behavior. You're free to
    | explore this trait and override any methods you wish to tweak.
    |
    */

    use ResetsPasswords;

    /**
     * Where to redirect users after resetting their password.
     *
     * @var string
     */
    protected $redirectTo = '/en/home';

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

        $this->middleware('guest');

        $this->langs = (new Config)->arrGetLangs();
        $pHome = \App\Page::getFirstPageByType('home');
        if( $pHome ){
            $this->redirectTo = $pHome->getUrl($this->langs[0]);
        }

    }
}
