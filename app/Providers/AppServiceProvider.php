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
        $footerPages = Page::getFooterPages();

        //dd($footerPages);

        view()->share('footerPages', $footerPages);
    }
}
