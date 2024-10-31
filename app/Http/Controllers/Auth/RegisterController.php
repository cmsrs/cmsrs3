<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\Cmsrs\Menu;
use App\Models\Cmsrs\User;
use App\Services\Cmsrs\ConfigService;
use App\Services\Cmsrs\PageService;
use Illuminate\Foundation\Auth\RegistersUsers;
use Illuminate\Routing\Controllers\HasMiddleware;
use Illuminate\Routing\Controllers\Middleware;
use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\Log;

class RegisterController extends Controller implements HasMiddleware
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
    public function __construct(
        protected ConfigService $configService,
        protected PageService $pageService,
    ) {
        //abort(404); //TODO
        //$this->middleware('guest');
        $this->langs = $this->configService->arrGetLangs();
        $this->menus = Menu::all()->sortBy('position'); //TODO cached

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
            new Middleware('guest'),
        ];
    }

    /**
     * Get a validator for an incoming registration request.
     */
    protected function validator(array $data)
    {
        return User::clientValidator($data);
    }

    /**
     * Create a new user instance after a valid registration.
     *
     * @return \App\Models\Cmsrs\User
     */
    protected function create(array $data)
    {
        $demoStatus = env('DEMO_STATUS', false);
        if ($demoStatus) {
            abort(404);
        }

        return User::createClient($data);
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

        $data = $this->pageService->getDataToView($page, [
            'view' => 'register',
            'lang' => $lang,
            'langs' => $this->langs,
            'menus' => $this->menus,
        ]);

        return view('auth.register', $data);
    }
}
