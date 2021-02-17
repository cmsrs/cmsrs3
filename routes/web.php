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

$langs = (new Config)->arrGetLangs();

Route::get('/home', 'HomeController@index')->name('home');
Route::get('/home/basket', 'HomeController@basket')->name('basket');
Route::get('/home/orders', 'HomeController@orders')->name('orders');

Route::get('/', 'FrontController@index');
if(1 == count($langs)){    
    Route::get('/login', 'Auth\LoginController@showLoginForm')->name('login');    
    Route::get('/'.Page::PREFIX_CMS_URL.'/{menuSlug}/{pageSlug}/{productSlug?}', 'FrontController@getPage');
    Route::get('/'.Page::PREFIX_IN_URL.'/{pageSlug}', 'FrontController@getSeparatePage');    
}else{
    Route::get('/{lang}', 'FrontController@index');
    Route::get('/{lang}/login', 'Auth\LoginController@showLoginForm')->name('login');    
    Route::get('/{lang}/'.Page::PREFIX_CMS_URL.'/{menuSlug}/{pageSlug}/{productSlug?}', 'FrontController@getPageLangs');
    Route::get('/{lang}/'.Page::PREFIX_IN_URL.'/{pageSlug}', 'FrontController@getSeparatePageLangs');
}

Auth::routes(['register' => false, 'reset' => false]);


