<?php

namespace App\Http\Controllers\Auth;

use App\Config;
use App\Http\Controllers\Controller;
use App\Models\Cmsrs\Menu;
use App\Services\Cmsrs\ConfigService;
//use App\Menu;
//use App;
use App\Services\Cmsrs\PageService;
use Illuminate\Foundation\Auth\AuthenticatesUsers;
use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\Log;

class LoginController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Login Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles authenticating users for the application and
    | redirecting them to your home screen. The controller uses a trait
    | to conveniently provide its functionality to your applications.
    |
    */

    use AuthenticatesUsers;

    /**
     * Where to redirect users after login.
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
        $this->middleware('guest')->except('logout');
        //$this->langs = (new Config)->arrGetLangs();
        $this->menus = Menu::all()->sortBy('position'); //TODO cached

        //$locale = App::getLocale();
        //dd($locale);
        //dump('____________________'.$this->lang);
        $this->langs = (new ConfigService)->arrGetLangs();

        $pHome = PageService::getFirstPageByType('home');
        if ($pHome) {
            $this->redirectTo = (new PageService)->getUrl($pHome, $this->langs[0]);
        }
    }

    public function showLoginForm($lang = null)
    {
        $page = PageService::getFirstPageByType('login');
        if (! $page) {
            Log::error('if you want this page you have to add page in type login');
            abort(404);
        }

        if (empty($lang)) {
            $lang = $this->langs[0];
        }
        App::setLocale($lang);

        $pForgot = PageService::getFirstPageByType('forgot');

        $data = (new PageService)->getDataToView($page, [
            'view' => 'login',
            'pforgot' => $pForgot,
            'lang' => $lang,
            'langs' => $this->langs,
            'menus' => $this->menus,
        ]);

        return view('auth.login', $data);
    }
}
