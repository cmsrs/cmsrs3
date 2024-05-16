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


$demoStatus = env('DEMO_STATUS', false);  //todo move to midelware - no if

Route::get('productsGetNameAndPrice/{lang?}', 'ProductController@getNameAndPrice');

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

        Route::get($apiSecret.'pages', 'PageController@index');
        Route::get($apiSecret.'pages/{id}/{simple?}', 'PageController@oneItemAdmin')->where('id', '[0-9]+');        
        Route::get($apiSecret.'pages/type/{type}', 'PageController@getPagesByType');

        Route::get($apiSecret.'images/{type}/{pageId}', 'ImageController@getItemByTypeAndRefId'); //getItemByPageId
        //Route::get('images/position/{direction}/{id}', 'ImageController@position'); //this get change db! - only for type page or product is working

        Route::get($apiSecret.'users/clients', 'UserController@getClients');
        Route::get($apiSecret.'clients/{column}/{direction}', 'UserController@getClientsPaginateAndSort');
        //Route::post($apiSecret.'clients', 'UserController@createClient');
        //Route::put($apiSecret.'clients/{id}', 'UserController@updateClient');        
        //Route::delete($apiSecret.'clients/{id}', 'UserController@deleteClient');
        Route::get($apiSecret.'clients/{id}', 'UserController@getClient');
        
        Route::get($apiSecret.'config', 'ConfigController@index');

        Route::get($apiSecret.'products', 'ProductController@index');
        Route::get($apiSecret.'products/{id}', 'ProductController@getItem');
        Route::get($apiSecret.'products/pagination/{lang}/{column}/{direction}', 'ProductController@getItemsWithPaginateAndSort');

        Route::get($apiSecret.'contacts', 'ContactController@index');            
        Route::get($apiSecret.'checkouts', 'CheckoutController@index');                
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

        Route::get($apiSecret.'pages', 'PageController@index');
        Route::get($apiSecret.'pages/{id}/{simple?}', 'PageController@oneItemAdmin')->where('id', '[0-9]+');        
        Route::post($apiSecret.'pages', 'PageController@create');
        Route::put($apiSecret.'pages/{id}', 'PageController@update');
        Route::delete($apiSecret.'pages/{id}', 'PageController@delete');
        Route::get($apiSecret.'pages/position/{direction}/{id}', 'PageController@position');
        Route::get($apiSecret.'pages/type/{type}', 'PageController@getPagesByType');

        Route::get($apiSecret.'images/{type}/{pageId}', 'ImageController@getItemByTypeAndRefId'); //getItemByPageId
        Route::post($apiSecret.'image/{type}/{pageId}', 'ImageController@uploadImageByTypeAndRefId');
        Route::delete($apiSecret.'images/{id}',  'ImageController@delete');
        Route::get($apiSecret.'images/position/{direction}/{id}', 'ImageController@position'); //only for type page and product is working

        Route::get($apiSecret.'users/clients', 'UserController@getClients');
        Route::get($apiSecret.'clients/{column}/{direction}', 'UserController@getClientsPaginateAndSort');
        Route::post($apiSecret.'clients', 'UserController@createClient'); 
        Route::put($apiSecret.'clients/{id}', 'UserController@updateClient');
        Route::delete($apiSecret.'clients/{id}', 'UserController@deleteClient');
        Route::get($apiSecret.'clients/{id}', 'UserController@getClient');
        
        Route::get($apiSecret.'menus', 'MenuController@index');
        Route::post($apiSecret.'menus', 'MenuController@create');
        Route::put($apiSecret.'menus/{id}', 'MenuController@update');
        Route::delete($apiSecret.'menus/{id}', 'MenuController@delete');
        Route::get($apiSecret.'menus/position/{direction}/{id}', 'MenuController@position');

        Route::get($apiSecret.'products', 'ProductController@index');
        Route::post($apiSecret.'products', 'ProductController@create');
        Route::get($apiSecret.'products/{id}', 'ProductController@getItem');
        Route::get($apiSecret.'products/pagination/{lang}/{column}/{direction}', 'ProductController@getItemsWithPaginateAndSort');
        Route::put($apiSecret.'products/{id}', 'ProductController@update');
        Route::delete($apiSecret.'products/{id}', 'ProductController@delete');

        Route::get($apiSecret.'contacts', 'ContactController@index');    
        Route::delete($apiSecret.'contacts/{id}', 'ContactController@delete');            

        Route::get($apiSecret.'config', 'ConfigController@index');
        Route::get($apiSecret.'config/clearcache', 'ConfigController@clearCache');
        Route::get($apiSecret.'config/createsitemap', 'ConfigController@createSiteMap');                

        Route::get($apiSecret.'checkouts', 'CheckoutController@index');        
        Route::put($apiSecret.'checkouts/{id}', 'CheckoutController@update');        
    });
}
