<?php

namespace App\Http\Middleware;

use App\Services\Cmsrs\ConfigService;
use Closure;
use Illuminate\Support\Facades\App;

/**
dont use now!!
 */
class SetLocale
{
    public function handle($request, Closure $next)
    {
        $defaultLang = ConfigService::getDefaultLang();

        $lang = $request->get('lang', $defaultLang);

        // App::setLocale($locale);
        // dd('__________test__SetLocale__'.$lang);
        return $next($request);
    }
}
