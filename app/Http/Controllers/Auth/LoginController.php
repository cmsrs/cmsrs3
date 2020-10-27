<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Foundation\Auth\AuthenticatesUsers;
use App\Page;
use App\Config;
use App\Menu;

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
    protected $redirectTo = '/home';

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        //dd('___');
        $this->middleware('guest')->except('logout');
        $this->langs = (new Config)->arrGetLangs();
        $this->menus = Menu::all()->sortBy('position'); //TODO cached
    }
    
    public function showLoginForm($lang = null)
    {
        $page = Page::getFirstPageByType('login');
        if(!$page){
            die('if you want this page you have to add page in type login');
        }

        if(empty($lang)){
            $lang = $this->langs[0];
        }
      
        $footerPages = Page::getFooterPages($lang);

        $data = [ 
            'menus' => $this->menus,  
            'page' => $page, 
            'lang' => $lang, 
            'langs' => $this->langs,
            'footerPages' => $footerPages
        ];      

        return view('auth.login', $data);
    }

}
