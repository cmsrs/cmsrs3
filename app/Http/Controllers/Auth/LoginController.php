<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Foundation\Auth\AuthenticatesUsers;
use Illuminate\Support\Facades\Log;
use App\Page;
use App\Config;
use App\Menu;
use App;

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
        $this->langs = (new Config)->arrGetLangs();

        $pHome = App\Page::getFirstPageByType('home');
        if( $pHome ){
            $this->redirectTo = $pHome->getUrl($this->langs[0]);
        }
    }
    
    public function showLoginForm($lang = null)
    {
        $page = Page::getFirstPageByType('login');
        if(!$page){
            Log::error('if you want this page you have to add page in type login');
            abort(404);
        }

        if(empty($lang)){
            $lang = $this->langs[0];
        }
        App::setLocale($lang);

        $pForgot = Page::getFirstPageByType('forgot');
      
        $data = $page->getDataToView( [
            'view' => 'login',
            'pforgot' => $pForgot,
            'lang' => $lang,
            'langs' => $this->langs,
            'menus' => $this->menus
        ]);
        
        return view('auth.login', $data);
    }

}