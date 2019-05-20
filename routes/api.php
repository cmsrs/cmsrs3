<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/


Route::post('register', 'AuthController@register');
Route::post('login', 'AuthController@login');
Route::post('recover', 'AuthController@recover');

Route::group(['middleware' => ['jwt.auth']], function() {
    Route::get('logout', 'AuthController@logout');
    Route::get('test', function(){
        return response()->json(['testrs'=>'ok']);
    });
    Route::get('menus', 'MenuController@index');
    Route::post('menus', 'MenuController@create');
    Route::put('menus/{id}', 'MenuController@update');
    Route::delete('menus/{id}', 'MenuController@delete');

    Route::get('pages', 'PageController@index');
    Route::post('pages', 'PageController@create');
    Route::put('pages/{id}', 'PageController@update');
    Route::delete('pages/{id}', 'PageController@delete');

});
