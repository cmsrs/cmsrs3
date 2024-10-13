<?php

namespace App\Http\Controllers\Auth;

//use App\User;
use App\Http\Controllers\Controller;
use App\Models\Cmsrs\Menu;
//use Illuminate\Support\Facades\Validator;
use App\Models\Cmsrs\User;
use App\Services\Cmsrs\ConfigService;
//use App\Page;
//use App\Config;
//use App\Menu;
//use App;

use App\Services\Cmsrs\PageService;
use Illuminate\Foundation\Auth\RegistersUsers;
use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Log;

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
        //abort(404); //TODO
        $this->middleware('guest');
        $this->langs = (new ConfigService)->arrGetLangs();
        $this->menus = Menu::all()->sortBy('position'); //TODO cached

        //$this->langs = (new Config)->arrGetLangs();

        $pHome = PageService::getFirstPageByType('home');
        if ($pHome) {
            $this->redirectTo = (new PageService)->getUrl($pHome, $this->langs[0]);
        }

    }

    /**
     * Get a validator for an incoming registration request.
     */
    protected function validator(array $data)
    {
        return User::clientValidator($data);
        // return Validator::make($data, [
        //     'name' => ['required', 'string', 'max:255'],
        //     'email' => ['required', 'string', 'email', 'max:255', 'unique:users'],
        //     'password' => ['required', 'string', 'min:8', 'confirmed'],
        // ]);
    }

    /**
     * Create a new user instance after a valid registration.
     *
     * @return \App\User
     */
    protected function create(array $data)
    {
        $demoStatus = env('DEMO_STATUS', false);
        if ($demoStatus) {
            abort(404);
            exit;
        }

        return User::createClient($data);
        // return User::create([
        //     'name' => $data['name'],
        //     'email' => $data['email'],
        //     'role' => User::$role['client'],
        //     'password' => $data['password']   //Hash::make($data['password']),
        // ]);

    }

    /**
     * Show the application registration form.
     *
     * @return \Illuminate\View\View
     */
    public function showRegistrationForm($lang = null)
    {
        $page = PageService::getFirstPageByType('register');
        if (! $page) {
            Log::error('if you want this page you have to add page in type login');
            abort(404);
        }

        if (empty($lang)) {
            $lang = $this->langs[0];
        }

        App::setLocale($lang);

        /*
        $data = [
            'view' => 'register',
            'menus' => $this->menus,
            'page' => $page,
            'lang' => $lang,
            'langs' => $this->langs,
            'page_title' => $page->translatesByColumnAndLang( 'title', $lang ) ?? config('app.name', 'cmsRS'),
            'seo_description' =>  $page->translatesByColumnAndLang( 'description', $lang ) ?? config('app.name', 'cmsRS')
        ];
        */

        $data = $page->getDataToView($page, [
            'view' => 'register',
            'lang' => $lang,
            'langs' => $this->langs,
            'menus' => $this->menus,
        ]);

        return view('auth.register', $data);
    }
}
