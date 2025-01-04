<?php

namespace App\Http\Controllers\Auth;

use App\Services\Cmsrs\ConfigService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\App;
use Laravel\Fortify\Contracts\LoginViewResponse;
use Laravel\Fortify\Http\Controllers\AuthenticatedSessionController;
use Laravel\Fortify\Http\Requests\LoginRequest;
use Laravel\Fortify\Contracts\LogoutResponse;

class CustomAuthenticatedSessionController extends AuthenticatedSessionController
{

    /*
    public function destroy(Request $request): LogoutResponse
    {
        if (! env('IS_LOGIN', true)) {
            abort(404);
        }
        return parent::destroy($request);
    }
    */


    public function create(Request $request): LoginViewResponse
    {
        if (! env('IS_LOGIN', true)) {
            abort(404);
        }

        $lang = (new ConfigService)->getLangFromRequest();

        //cookie()->queue(cookie('lang', $lang, 60));
        $request->session()->put('lang', $lang);
        App::setLocale($lang);

        return parent::create($request);
    }

    public function store(LoginRequest $request)
    {
        if (! env('IS_LOGIN', true)) {
            abort(404);
        }

        $lang = $request->session()->get('lang');
        //$lang = $request->cookie('lang');
        $configService = new ConfigService;

        if ($lang && (! in_array($lang, $configService->arrGetLangs()))) {
            abort(404);
        }

        if (empty($lang)) {
            $lang = $configService->getDefaultLang();
        }

        App::setLocale($lang);

        $response = parent::store($request);

        return redirect()->route('home', ['lang' => $lang]);
    }
}
