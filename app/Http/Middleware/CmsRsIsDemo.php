<?php

declare(strict_types=1);

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;

class CmsRsIsDemo
{
    /**
     * Handle an incoming request.
     *
     * @param  string|null  $guard
     * @return mixed
     */
    public function handle(Request $request, Closure $next, $guard = null)
    {
        $isDemo = config('cmsrs.demo');  // env('DEMO_STATUS', false);

        // dump($isDemo);
        // dump($request->getMethod())

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
