<?php

declare(strict_types=1);

namespace App\Providers;

use App\Services\Cmsrs\ConfigService;
use App\Services\Cmsrs\NavigationService;
use App\Services\Cmsrs\PageService;
use Illuminate\Support\Facades\Auth;
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
                NavigationService $navigationService,
            ) use ($view) {
                $lang = $configService->getLangFromRequest();
                $langs = $configService->arrGetLangs();
                $manyLangs = $configService->isManyLangs();

                $mainPage = $pageService->getFirstPageByType('main_page');
                $urlMainPage = $mainPage
                    ? $pageService->getUrl($mainPage, $lang)
                    : '/';

                $data = $view->getData();
                $page = $data['page'] ?? null;   //
                $productNameSlug = $data['product_name_slug'] ?? null;
                $routeName = request()->route()?->getName(); //

                $allUrlsByPageOrRouteName = $pageService->getAllUrlsByPageOrRouteName($page, $productNameSlug, $routeName);

                $view->with([
                    'treeMenu' => $navigationService->getNavigationTree(Auth::check()),
                    'lang' => $lang,
                    'langs' => $langs,
                    'manyLangs' => $manyLangs,

                    'currency' => $configService->getCurrency(),
                    'urlMainPage' => $urlMainPage,
                    'allUrlsByPageOrRouteName' => $allUrlsByPageOrRouteName,

                ]);
            });
        });

        View::composer('includes.footer', function ($view) {

            return app()->call(function (
                ConfigService $configService,
                PageService $pageService,
            ) use ($view) {
                $lang = $configService->getLangFromRequest();
                $footerPages = $pageService->getFooterPages($lang);

                $view->with([
                    'footerPages' => $footerPages,
                ]);
            });
        });

        View::composer('layouts.default', function ($view) {
            return app()->call(function (
                ConfigService $configService,
                PageService $pageService,
            ) use ($view) {
                $lang = $configService->getLangFromRequest();
                $data = $view->getData();
                $page = $data['page'] ?? null;   //

                $imagesGlobal = [];
                if ($page && $page->type === 'gallery') {
                    $imagesGlobal = $pageService->arrImages($page, $lang);
                }

                $view->with('imagesGlobal', $imagesGlobal);
            });
        });

    }
} // END OF CLASS
