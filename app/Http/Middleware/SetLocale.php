<?php

namespace App\Http\Middleware;

use App\Services\Cmsrs\ConfigService;
use Closure;
use Illuminate\Support\Facades\App;

class SetLocale
{
    public function handle($request, Closure $next)
    {
        $configService = new ConfigService;

        $lang = $configService->getLangFromRequest();
        App::setLocale($lang);
        if($configService->isManyLangs()){
            cookie()->queue(cookie('lang', $lang, 60)); //60 minutes
        }

        return $next($request);
    }
}
