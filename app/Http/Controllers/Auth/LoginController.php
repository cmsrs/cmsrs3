<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Foundation\Auth\AuthenticatesUsers;
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
    protected $redirectTo = '/home';

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
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
        App::setLocale($lang);
      
        //$footerPages = Page::getFooterPages($lang);

        $data = [ 
            'view' => 'login',
            'menus' => $this->menus,  
            'page' => $page, 
            'lang' => $lang, 
            'langs' => $this->langs,
            'page_title' => $page->translatesByColumnAndLang( 'title', $lang ) ?? config('app.name', 'cmsRS'),
            'seo_description' =>  $page->translatesByColumnAndLang( 'description', $lang ) ?? config('app.name', 'cmsRS')
        ];      

        return view('auth.login', $data);
    }

}
