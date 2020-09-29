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


$demoStatus = env('DEMO_STATUS', false);

if($demoStatus){
    Route::post('login', 'AuthController@login');
    Route::get('comments/{pageId}', 'CommentController@index');

    Route::group(['middleware' => ['jwt.auth']], function() {
        Route::get('logout', 'AuthController@logout');
        Route::get('test', function(){
            return response()->json(['testrs'=>'ok']);
        });
        Route::get('menus', 'MenuController@index');
        //Route::get('menus/position/{direction}/{id}', 'MenuController@position');

        Route::get('pages', 'PageController@index');
        //Route::get('pages/position/{direction}/{id}', 'PageController@position');
        Route::get('pages/type/{type}', 'PageController@getPagesByType');

        Route::get('images/{type}/{pageId}', 'ImageController@getItemByTypeAndRefId'); //getItemByPageId
        //Route::get('images/position/{direction}/{id}', 'ImageController@position'); //only for type page is working

        Route::get('users/clients', 'UserController@getClients');

        Route::get('products', 'ProductController@index');
    });
}else{
    #Route::post('register', 'AuthController@register');
    Route::post('login', 'AuthController@login');
    Route::post('recover', 'AuthController@recover');

    Route::get('comments/{pageId}', 'CommentController@index');
    Route::post('comments/{pageId}', 'CommentController@create');

    Route::group(['middleware' => ['jwt.auth']], function() {
        Route::get('logout', 'AuthController@logout');
        // Route::get('test', function(){
        //     return response()->json(['testrs'=>'ok']);
        // });
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

        Route::get('images/{type}/{pageId}', 'ImageController@getItemByTypeAndRefId'); //getItemByPageId
        Route::delete('images/{id}',  'ImageController@delete');
        Route::get('images/position/{direction}/{id}', 'ImageController@position'); //only for type page is working

        Route::get('users/clients', 'UserController@getClients');


        Route::get('products', 'ProductController@index');
        Route::post('products', 'ProductController@create');
        Route::put('products/{id}', 'ProductController@update');
        Route::delete('products/{id}', 'ProductController@delete');

    });
}