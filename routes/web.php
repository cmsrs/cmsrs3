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
Route::get('/c/{menuSlug}/{pageSlug}', 'FrontController@cms');

// Route::get('/', function () {
//     return view('welcome');
// });


// Route::get('user/verify/{verification_code}', 'AuthController@verifyUser');
// Route::get('password/reset/{token}', 'Auth\ResetPasswordController@showResetForm')->name('password.request');
// Route::post('password/reset', 'Auth\ResetPasswordController@postReset')->name('password.reset');

//Auth::routes();
Auth::routes(['register' => false]);
//Route::post('/register', 'AuthController@register');
//Route::post('/login', 'AuthController@login');
//Route::post('/logout', 'AuthController@logout');

Route::get('/home', 'HomeController@index')->name('home');
