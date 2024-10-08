<?php

namespace App\Http\Middleware;

use Illuminate\Auth\Middleware\Authenticate as Middleware;
use App\Services\Cmsrs\ConfigService;

class Authenticate extends Middleware
{
    /**
     * Get the path the user should be redirected to when they are not authenticated.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return string
     */
    protected function redirectTo($request)
    {
        $langs = (new ConfigService)->arrGetLangs();
        $lang = ConfigService::getLangFromSession();
        if (! $request->expectsJson()) {
            $appUrl = env('APP_URL');
            $urlRedirect = (1 === count($langs)) ?  $appUrl.'/login' :   $appUrl.'/'.$lang.'/login';   //route('login');
            return $urlRedirect;
        }
    }
}
