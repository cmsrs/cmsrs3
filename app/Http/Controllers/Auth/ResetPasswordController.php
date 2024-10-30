<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Services\Cmsrs\ConfigService;
use App\Services\Cmsrs\PageService;
use Illuminate\Foundation\Auth\ResetsPasswords;

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

    protected $lang;

    protected $langs;

    protected $menus;

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
    public function __construct(
        protected PageService $pageService,
    ) {
        $demoStatus = env('DEMO_STATUS', false);
        if ($demoStatus) {
            echo 'Not permission';
            exit();
        }

        $this->middleware('guest');

        $this->langs = (new ConfigService)->arrGetLangs();
        $pHome = PageService::getFirstPageByType('home');
        if ($pHome) {
            $this->redirectTo = $this->pageService->getUrl($pHome, $this->langs[0]);
        }

    }
}
