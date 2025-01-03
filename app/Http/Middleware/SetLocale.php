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
        // if (! in_array($lang, $configService->arrGetLangs())) {
        //     abort(404);
        // }

        App::setLocale($lang);

        return $next($request);
    }
}
