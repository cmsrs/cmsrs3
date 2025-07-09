<?php

namespace App\Http\Middleware;

use App\Services\Cmsrs\ConfigService;
use Closure;
use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\Cookie;

class SetLocale
{
    public function handle($request, Closure $next)
    {
        $configService = new ConfigService;

        $lang = $configService->getLangFromRequest();

        if (! in_array($lang, $configService->arrGetLangs())) {
            \Illuminate\Support\Facades\Log::info('all langs: '.json_encode($configService->arrGetLangs()).'Invalid language detected: '.$lang.' | Action: abort(404) | URL: '.$request->fullUrl().' | Request: '.json_encode($request->all()));
            abort(404);
        }

        App::setLocale($lang);
        // env('IS_LOGIN', true)
        if ($configService->isManyLangs() && config('cmsrs.features.login')) {
            Cookie::queue(Cookie::make(ConfigService::COOKIE_FRONT_LOGIN_LANG_NAME, $lang, 60)); // 60 minutes
        }

        return $next($request);
    }
}
