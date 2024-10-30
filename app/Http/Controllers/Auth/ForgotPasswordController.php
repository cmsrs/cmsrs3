<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\Cmsrs\Menu;
use App\Services\Cmsrs\ConfigService;
use App\Services\Cmsrs\PageService;
use Illuminate\Foundation\Auth\SendsPasswordResetEmails;
use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\Log;

//use Illuminate\Support\Facades\Mail;

class ForgotPasswordController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Password Reset Controller
    |--------------------------------------------------------------------------
    |
    | This controller is responsible for handling password reset emails and
    | includes a trait which assists in sending these notifications from
    | your application to your users. Feel free to explore this trait.
    |
    */

    use SendsPasswordResetEmails;
    /*
    use SendsPasswordResetEmails{
        sendResetLinkEmail as traitSendResetLinkEmail;
    }
    */

    private $menus;

    private $langs;

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

        $this->menus = Menu::all()->sortBy('position'); //TODO cached
        $this->langs = $this->configService->arrGetLangs();

        $this->middleware('guest');
    }

    /**
     * helper function
     */
    /*
    public function mailTestRs()
    {
        $to_name = 'R S';
        $to_email = 'test@yahoo.com';
        $data = array('name'=>"Sam Jose", "body" => "Test mail");
        Mail::send('emails', $data, function($message) use ($to_name, $to_email) {
            $message->to($to_email, $to_name)->subject('Artisans Web Testing Mail');
            $message->from('test@gmail.com','Artisans Web');
        });
    }
    */

    public function showLinkRequestForm($lang = null)
    {
        $page = PageService::getFirstPageByType('forgot');
        if (! $page) {
            Log::error('if you want this page you have to add page in type forgot');
            abort(404);
        }

        if (empty($lang)) {
            $lang = $this->langs[0];
        }
        App::setLocale($lang);

        $data = $this->pageService->getDataToView($page, [
            'view' => 'forgot',
            'lang' => $lang,
            'langs' => $this->langs,
            'menus' => $this->menus,
        ]);

        return view('auth.passwords.email', $data);
    }
}
