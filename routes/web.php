<?php

use Illuminate\Support\Facades\Auth;

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


Route::get('/', 'FrontController@index');
//Route::get('/c/{pageSlug}', 'FrontController@getPageForMenu');
Route::get('/c/{menuSlug}/{pageSlug}', 'FrontController@getPage');
Route::get('/in/{pageSlug}', 'FrontController@getSeparatePage');


//Auth::routes();
Auth::routes(['register' => false, 'reset' => false]);

Route::get('/home', 'HomeController@index')->name('home');
