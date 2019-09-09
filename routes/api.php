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
    Route::get('menus/position/{direction}/{id}', 'MenuController@position');

    Route::get('pages', 'PageController@index');
    Route::post('pages', 'PageController@create');
    Route::put('pages/{id}', 'PageController@update');
    Route::delete('pages/{id}', 'PageController@delete');
    Route::get('pages/position/{direction}/{id}', 'PageController@position');
    Route::get('pages/type/{type}', 'PageController@getPagesByType');

    Route::get('images/{pageId}', 'ImageController@getItemByPageId');
    Route::delete('images/{id}',  'ImageController@delete');
    Route::get('images/position/{direction}/{id}', 'ImageController@position');

    Route::get('users/clients', 'UserController@getClients');


    Route::get('products', 'ProductController@index');
    Route::post('products', 'ProductController@create');
    Route::put('products/{id}', 'ProductController@update');
    Route::delete('products/{id}', 'ProductController@delete');

});
