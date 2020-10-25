<?php

namespace App\Providers;

use App\Page;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        //
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        //$footerPages = true;

        //to tests:
        // $footerPages['policyUrl'] = 'a';
        // $footerPages['policyTitle'] = 'b';
        // $footerPages['contactUrl']  = 'c';
        // $footerPages['contactTitle']  = 'd';

        //$footerPages = Page::getFooterPages('en');
        //dd($footerPages);

        //view()->share('footerPages', $footerPages);
    }
}
