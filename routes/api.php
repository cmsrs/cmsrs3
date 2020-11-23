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
    Route::get('page/{id}/{lang}', 'PageController@oneItem');

    Route::group(['middleware' => ['jwt.auth']], function() {
        $apiSecret = env('API_SECRET', '' );
        if($apiSecret){
            $apiSecret = $apiSecret.'/';
        }        
        
        Route::get($apiSecret.'logout', 'AuthController@logout');
        Route::get($apiSecret.'menus', 'MenuController@index');
        //Route::get('menus/position/{direction}/{id}', 'MenuController@position');

        Route::get($apiSecret.'pages', 'PageController@index');
        //Route::get('pages/position/{direction}/{id}', 'PageController@position');
        Route::get($apiSecret.'pages/type/{type}', 'PageController@getPagesByType');

        Route::get($apiSecret.'images/{type}/{pageId}', 'ImageController@getItemByTypeAndRefId'); //getItemByPageId
        //Route::get('images/position/{direction}/{id}', 'ImageController@position'); //only for type page is working

        Route::get($apiSecret.'users/clients', 'UserController@getClients');
        Route::get($apiSecret.'config', 'ConfigController@index');

        Route::get($apiSecret.'products', 'ProductController@index');

        Route::get($apiSecret.'contacts', 'ContactController@index');            
    });
}else{
    #Route::post('register', 'AuthController@register');
    Route::post('login', 'AuthController@login');
    //Route::post('recover', 'AuthController@recover');

    Route::get('comments/{pageId}', 'CommentController@index');
    Route::post('comments/{pageId}', 'CommentController@create');
    Route::post('contact/{lang}', 'ContactController@create');    

    Route::get('page/{id}/{lang}', 'PageController@oneItem');

    Route::group(['middleware' => ['jwt.auth']], function() {
        $apiSecret = env('API_SECRET', '' );
        if($apiSecret){
            $apiSecret = $apiSecret.'/';
        }
        
        Route::get($apiSecret.'logout', 'AuthController@logout');
        
        Route::get($apiSecret.'menus', 'MenuController@index');
        Route::post($apiSecret.'menus', 'MenuController@create');
        Route::put($apiSecret.'menus/{id}', 'MenuController@update');
        Route::delete($apiSecret.'menus/{id}', 'MenuController@delete');
        Route::get($apiSecret.'menus/position/{direction}/{id}', 'MenuController@position');

        Route::get($apiSecret.'contacts', 'ContactController@index');    
        Route::delete($apiSecret.'contacts/{id}', 'ContactController@delete');            

        Route::get($apiSecret.'pages', 'PageController@index');
        Route::post($apiSecret.'pages', 'PageController@create');
        Route::put($apiSecret.'pages/{id}', 'PageController@update');
        Route::delete($apiSecret.'pages/{id}', 'PageController@delete');
        Route::get($apiSecret.'pages/position/{direction}/{id}', 'PageController@position');
        Route::get($apiSecret.'pages/type/{type}', 'PageController@getPagesByType');

        Route::get($apiSecret.'images/{type}/{pageId}', 'ImageController@getItemByTypeAndRefId'); //getItemByPageId
        Route::delete($apiSecret.'images/{id}',  'ImageController@delete');
        Route::get($apiSecret.'images/position/{direction}/{id}', 'ImageController@position'); //only for type page is working

        Route::get($apiSecret.'users/clients', 'UserController@getClients');

        Route::get($apiSecret.'config', 'ConfigController@index');

        Route::get($apiSecret.'products', 'ProductController@index');
        Route::post($apiSecret.'products', 'ProductController@create');
        Route::put($apiSecret.'products/{id}', 'ProductController@update');
        Route::delete($apiSecret.'products/{id}', 'ProductController@delete');

    });
}