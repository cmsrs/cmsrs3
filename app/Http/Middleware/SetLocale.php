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

        return $next($request);
    }
}
