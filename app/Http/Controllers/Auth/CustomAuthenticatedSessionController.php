<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Laravel\Fortify\Http\Requests\LoginRequest;
use Laravel\Fortify\Http\Controllers\AuthenticatedSessionController;
use Laravel\Fortify\Contracts\LoginViewResponse;
use App\Services\Cmsrs\ConfigService;
use Illuminate\Support\Facades\App;


class CustomAuthenticatedSessionController extends AuthenticatedSessionController
{    
    public function create(Request $request): LoginViewResponse
    {
        if (! env('IS_LOGIN', true)) {
            abort(404);
        }

        $lang =  (new ConfigService)->getLangFromRequest();

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
        $configService = new ConfigService;

        if ( $lang && (! in_array($lang, $configService->arrGetLangs()))  ) {
            abort(404);
        }
        
        if(empty($lang) ){
            $lang = $configService->getDefaultLang();
        }

        App::setLocale($lang);

        $response = parent::store($request);
        return redirect()->route('home', ['lang' => $lang]);
    }
}