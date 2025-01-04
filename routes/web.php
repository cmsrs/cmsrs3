<?php

// use App\Http\Controllers\Auth\ForgotPasswordController;
// use App\Http\Controllers\Auth\LoginController;
// use App\Http\Controllers\Auth\RegisterController;
use App\Http\Controllers\Cmsrs\FrontController;
use App\Http\Controllers\Cmsrs\HomeController;
use App\Models\Cmsrs\Page;
use App\Services\Cmsrs\ConfigService;
// use Illuminate\Support\Facades\Auth;
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
// if ($demoStatus) {
//     Auth::routes(['register' => false, 'reset' => false]);
// } else {
//     Auth::routes(['register' => true, 'reset' => true]);
// }

$langs = ConfigService::arrGetLangsEnv();

Route::get('/home', [HomeController::class, 'index'])->name('home');
// Route::get('/home/basket', 'HomeController@basket')->name('basket');
// Route::get('/home/orders', 'HomeController@orders')->name('orders');

if ($isShop) {
    Route::post('/post/checkout', [FrontController::class, 'postCheckout']);
}

Route::get('/changelang/{lang}/{pageIdoRRouterName}/{productSlug?}', [FrontController::class, 'changeLang'])->name('changelang');

Route::get('/', [FrontController::class, 'index']);
if (empty($langs) || (count($langs) == 1)) {
    if ($isShop) {
        Route::get('/shoppingsuccess', [FrontController::class, 'shoppingsuccess']);
        Route::get('/search', [FrontController::class, 'search']);
        Route::get('/checkout', [FrontController::class, 'checkout'])->name('checkout');
    }

    Route::get('/home', [HomeController::class, 'index'])->name('home');
    // Route::get('/login', [LoginController::class, 'showLoginForm'])->name('login');
    // Route::get('/register', [RegisterController::class, 'showRegistrationForm'])->name('register');
    // Route::get('/forgot', [ForgotPasswordController::class, 'showLinkRequestForm'])->name('forgot');

    Route::get('/'.Page::PREFIX_CMS_ONE_PAGE_IN_MENU_URL.'/{menuSlug}', [FrontController::class, 'getPage']);
    Route::get('/'.Page::PREFIX_CMS_URL.'/{menuSlug}/{pageSlug}/{productSlug?}', [FrontController::class,  'getPage']);
    Route::get('/'.Page::PREFIX_IN_URL.'/{pageSlug}', [FrontController::class,  'getSeparatePage']);
} else {
    if ($isShop) {
        Route::get('/{lang}/shoppingsuccess', [FrontController::class, 'shoppingsuccess']);
        Route::get('/{lang}/search', [FrontController::class, 'search']);
        Route::get('/{lang}/checkout', [FrontController::class, 'checkout']);
    }

    //Route::get('/{lang}/home', [HomeController::class, 'index']);
    Route::get('/{lang}', [FrontController::class, 'index']);
    // Route::get('/{lang}/login', [LoginController::class, 'showLoginForm']); //->name('login');
    // Route::get('/{lang}/register', [RegisterController::class, 'showRegistrationForm']); // ->name('register');
    // Route::get('/{lang}/forgot', [ForgotPasswordController::class, 'showLinkRequestForm']);

    Route::get('/{lang}/'.Page::PREFIX_CMS_ONE_PAGE_IN_MENU_URL.'/{menuSlug}', [FrontController::class, 'getPageLangs']);
    Route::get('/{lang}/'.Page::PREFIX_CMS_URL.'/{menuSlug}/{pageSlug}/{productSlug?}', [FrontController::class, 'getPageLangs']);
    Route::get('/{lang}/'.Page::PREFIX_IN_URL.'/{pageSlug}', [FrontController::class, 'getSeparatePageLangs']);
}
