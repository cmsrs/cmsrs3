<?php

namespace App\Http\Middleware;

use Closure;

class CmsRsIsDemo
{
    public function handle($request, Closure $next, $guard = null)
    {
        $isDemo = env('DEMO_STATUS', false);

        //dump($isDemo);
        //dump($request->getMethod())

        if ($isDemo) {
            $requestUri = $request->getRequestUri();
            if ($requestUri == '/api/login') {
                return $next($request);
            }

            if ($request->getMethod() != 'GET') {
                return response()->json([
                    'success' => false,
                    'error' => "We're sorry, but this action is not available in the demo version.",
                ], 403);
            }
        }

        return $next($request);
    }
}
