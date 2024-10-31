<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Services\Cmsrs\ConfigService;
use App\Services\Cmsrs\PageService;
use Illuminate\Foundation\Auth\VerifiesEmails;
use Illuminate\Routing\Controllers\HasMiddleware;
use Illuminate\Routing\Controllers\Middleware;

class VerificationController extends Controller implements HasMiddleware
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
    public function __construct(
        protected ConfigService $configService,
        protected PageService $pageService,
    ) {
        $demoStatus = env('DEMO_STATUS', false);
        if ($demoStatus) {
            echo 'Not permission';
            exit();
        }

        $this->langs = $this->configService->arrGetLangs();
        $pHome = PageService::getFirstPageByType('home');
        if ($pHome) {
            $this->redirectTo = $this->pageService->getUrl($pHome, $this->langs[0]);
        }

    }

    /**
     * Get the middleware that should be assigned to the controller.
     */
    public static function middleware(): array
    {
        return [
            new Middleware('auth'),
            new Middleware('signed', only: ['verify']),
            new Middleware('throttle:6,1', except: ['verify', 'resend']),
        ];
    }
}
