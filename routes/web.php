<?php

use App\Http\Controllers\Cmsrs\FrontController;
use App\Http\Controllers\Cmsrs\HomeController;
use App\Models\Cmsrs\Page;
use App\Services\Cmsrs\ConfigService;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
$demoStatus = env('DEMO_STATUS', false);
$isShop = env('IS_SHOP', true);
$isLogin = env('IS_LOGIN', true);
$langs = ConfigService::arrGetLangsEnv();
$langRegex = '[a-z]{2}';

Route::get('/{lang?}', [FrontController::class, 'index'])->where('lang', $langRegex);
if ($isLogin) {
    Route::get('/home', [HomeController::class, 'index'])->name('home');
}
if ($isShop) {
    Route::post('/post/checkout', [FrontController::class, 'postCheckout']);
}

if (empty($langs) || (count($langs) == 1)) {
    if ($isShop) {
        Route::get('/shoppingsuccess', [FrontController::class, 'shoppingsuccess'])->name('shoppingsuccess');
        Route::get('/search', [FrontController::class, 'search'])->name('search');
        Route::get('/checkout', [FrontController::class, 'checkout'])->name('checkout');
    }

    Route::get('/'.Page::PREFIX_CMS_ONE_PAGE_IN_MENU_URL.'/{menuSlug}', [FrontController::class, 'getPage'])->where('lang', $langRegex);
    Route::get('/'.Page::PREFIX_CMS_URL.'/{menuSlug}/{pageSlug}/{productSlug?}', [FrontController::class,  'getPage'])->where('lang', $langRegex);
    Route::get('/'.Page::PREFIX_IN_URL.'/{pageSlug}', [FrontController::class,  'getSeparatePage'])->where('lang', $langRegex);
} else {
    if ($isShop) {
        Route::get('/{lang}/shoppingsuccess', [FrontController::class, 'shoppingsuccess'])->where('lang', $langRegex)->name('shoppingsuccess');
        Route::get('/{lang}/search', [FrontController::class, 'search'])->where('lang', $langRegex)->name('search');
        Route::get('/{lang}/checkout', [FrontController::class, 'checkout'])->where('lang', $langRegex)->name('checkout');
    }

    Route::get('/{lang}/'.Page::PREFIX_CMS_ONE_PAGE_IN_MENU_URL.'/{menuSlug}', [FrontController::class, 'getPageLangs'])->where('lang', $langRegex);
    Route::get('/{lang}/'.Page::PREFIX_CMS_URL.'/{menuSlug}/{pageSlug}/{productSlug?}', [FrontController::class, 'getPageLangs'])->where('lang', $langRegex);
    Route::get('/{lang}/'.Page::PREFIX_IN_URL.'/{pageSlug}', [FrontController::class, 'getSeparatePageLangs'])->where('lang', $langRegex);
}
