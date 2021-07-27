<?php

//use Illuminate\Support\Facades\Auth;
use App\Config;
use App\Page;

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
if($demoStatus){
    Auth::routes(['register' => false, 'reset' => false]);
}else{
    Auth::routes(['register' => true, 'reset' => true]);
}


$langs = Config::arrGetLangsEnv();
//dd( count($langs));
//$langs = (new Config)->arrGetLangs();

//Route::group(['middleware' => ['web']], function () {
    Route::get('/home', 'HomeController@index')->name('home');
    //Route::get('/home/basket', 'HomeController@basket')->name('basket');
    //Route::get('/home/orders', 'HomeController@orders')->name('orders');

    //depreciate - /home/api/tobank!
    //Route::post('/home/api/tobank', 'HomeController@tobank')->name('tobank');
    Route::post('/post/checkout', 'FrontController@postCheckout');

    Route::get('/changelang/{lang}/{pageId}/{productSlug?}', 'FrontController@changeLang')->name('changelang');
//});



    Route::get('/', 'FrontController@index');
    if( empty($langs)  || (1 == count($langs)) ){    
        Route::get('/shoppingsuccess', 'FrontController@shoppingsuccess');        
        Route::get('/search', 'FrontController@search');                
        Route::get('/checkout', 'FrontController@checkout')->name('checkout');
        Route::get('/home', 'HomeController@index')->name('home');
        Route::get('/login', 'Auth\LoginController@showLoginForm')->name('login');    
        Route::get('/register', 'Auth\RegisterController@showRegistrationForm')->name('register');            
        Route::get('/forgot', 'Auth\ForgotPasswordController@showLinkRequestForm')->name('forgot');

        Route::get('/'.Page::PREFIX_CMS_URL.'/{menuSlug}/{pageSlug}/{productSlug?}', 'FrontController@getPage');
        Route::get('/'.Page::PREFIX_IN_URL.'/{pageSlug}', 'FrontController@getSeparatePage');    
    }else{
        Route::get('/{lang}/shoppingsuccess', 'FrontController@shoppingsuccess');
        Route::get('/{lang}/search', 'FrontController@search');
        Route::get('/{lang}/checkout', 'FrontController@checkout');
        Route::get('/{lang}/home', 'HomeController@index');        
        Route::get('/{lang}', 'FrontController@index');
        Route::get('/{lang}/login', 'Auth\LoginController@showLoginForm'); //->name('login');    
        Route::get('/{lang}/register', 'Auth\RegisterController@showRegistrationForm'); // ->name('register');                    
        Route::get('/{lang}/forgot', 'Auth\ForgotPasswordController@showLinkRequestForm');

        Route::get('/{lang}/'.Page::PREFIX_CMS_URL.'/{menuSlug}/{pageSlug}/{productSlug?}', 'FrontController@getPageLangs');
        Route::get('/{lang}/'.Page::PREFIX_IN_URL.'/{pageSlug}', 'FrontController@getSeparatePageLangs');
    }
