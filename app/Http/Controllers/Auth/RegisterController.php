<?php

namespace App\Http\Controllers\Auth;

use App\User;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Illuminate\Foundation\Auth\RegistersUsers;
use App\Page;
use App\Config;
use App\Menu;
use App;


class RegisterController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Register Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles the registration of new users as well as their
    | validation and creation. By default this controller uses a trait to
    | provide this functionality without requiring any additional code.
    |
    */

    use RegistersUsers;

    /**
     * Where to redirect users after registration.
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
        //abort(404); //TODO 
        $this->middleware('guest');
        $this->langs = (new Config)->arrGetLangs();
        $this->menus = Menu::all()->sortBy('position'); //TODO cached
    }

    /**
     * Get a validator for an incoming registration request.
     *
     * @param  array  $data
     * @return \Illuminate\Contracts\Validation\Validator
     */
    protected function validator(array $data)
    {
        return Validator::make($data, [
            'name' => ['required', 'string', 'max:255'],
            'email' => ['required', 'string', 'email', 'max:255', 'unique:users'],
            'password' => ['required', 'string', 'min:8', 'confirmed'],
        ]);
    }

    /**
     * Create a new user instance after a valid registration.
     *
     * @param  array  $data
     * @return \App\User
     */
    protected function create(array $data)
    {
        $demoStatus = env('DEMO_STATUS', false);
        if($demoStatus){
            abort(404);            
            exit;
        }

        return User::create([
            'name' => $data['name'],
            'email' => $data['email'],
            'role' => User::$role['client'],
            'password' => $data['password']   //Hash::make($data['password']),
        ]);

    }

    /**
     * Show the application registration form.
     *
     * @return \Illuminate\View\View
     */
    public function showRegistrationForm($lang = null)
    {
        $page = Page::getFirstPageByType('register');
        if(!$page){
            die('if you want this page you have to add page in type login');
        }

        if(empty($lang)){
            $lang = $this->langs[0];
        }

        App::setLocale($lang);      

        $data = [ 
            'view' => 'register',
            'menus' => $this->menus,  
            'page' => $page, 
            'lang' => $lang, 
            'langs' => $this->langs,
            'page_title' => $page->translatesByColumnAndLang( 'title', $lang ) ?? config('app.name', 'cmsRS'),
            'seo_description' =>  $page->translatesByColumnAndLang( 'description', $lang ) ?? config('app.name', 'cmsRS')
        ];      

        return view('auth.register', $data);
    }

}
