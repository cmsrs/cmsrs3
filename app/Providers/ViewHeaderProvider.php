<?php

namespace App\Providers;

use App\Services\Cmsrs\ConfigService;
use App\Services\Cmsrs\MenuService;
use App\Services\Cmsrs\PageService;
use Illuminate\Support\Facades\View;
use Illuminate\Support\ServiceProvider;

class ViewHeaderProvider extends ServiceProvider
{
    /**
     * Register services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap services.
     */
    public function boot(): void
    {
        View::composer('includes.header', function ($view) {

            return app()->call(function (
                ConfigService $configService,
                PageService $pageService,
                MenuService $menuService
            ) use ($view) {

                $lang = $configService->getLangFromRequest();
                $langs = $configService->arrGetLangs();
                $manyLangs = $configService->isManyLangs();

                $mainPage = $pageService->getFirstPageByType('main_page');
                $urlMainPage = $mainPage
                    ? $pageService->getUrl($mainPage, $lang)
                    : '/';

                $view->with([
                    'lang' => $lang,
                    'langs' => $langs,
                    'manyLangs' => $manyLangs,

                    'currency' => $configService->getCurrency(),
                    'bg' => config('cmsrs.demo') ? 'bg-dark' : 'bg-secondary',
                    'pLogin' => config('cmsrs.features.login'),
                    'pRegister' => config('cmsrs.features.register'),
                    'isShop' => config('cmsrs.features.shop'),
                    'isDemo' => config('cmsrs.demo'),

                    'urlMainPage' => $urlMainPage,

                    // 'pageId' => $page->id,
                    // 'commented' => $page->commented ?? null,

                    // 'productNameSlug' => $product_name_slug ?? null,
                ]);
            });
        });
    }
} // END OF CLASS
