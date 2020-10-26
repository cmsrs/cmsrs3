<?php

use Illuminate\Support\Facades\Auth;
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

Route::get('/', 'FrontController@index');
if(1 == count($langs)){    
    //Route::get('/c/{pageSlug}', 'FrontController@getPageForMenu');
    Route::get('/'.Page::PREFIX_CMS_URL.'/{menuSlug}/{pageSlug}', 'FrontController@getPage');
    Route::get('/'.Page::PREFIX_IN_URL.'/{pageSlug}', 'FrontController@getSeparatePage');    
}else{
    Route::get('/{lang}', 'FrontController@index');
    Route::get('/{lang}/'.Page::PREFIX_CMS_URL.'/{menuSlug}/{pageSlug}', 'FrontController@getPageLangs');
    Route::get('/{lang}/'.Page::PREFIX_IN_URL.'/{pageSlug}', 'FrontController@getSeparatePageLangs');
}

//Auth::routes();
Auth::routes(['register' => false, 'reset' => false]);

Route::get('/home', 'HomeController@index')->name('home');
