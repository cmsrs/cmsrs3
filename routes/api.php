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

Route::get('productsGetNameAndPrice/{lang?}', 'ProductController@getNameAndPrice');

Route::post('login', 'AuthController@login');
Route::get('comments/{pageId}', 'CommentController@index');
Route::post('comments/{pageId}', 'CommentController@create');
Route::post('contact/{lang}', 'ContactController@create');    

Route::get('page/{id}/{lang}', 'PageController@oneItem');
//Route::get('page-type/{type}', 'PageController@getFirstPageByTypeForGuest'); - i do not use this api - see skip test that use this api

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
    Route::patch($apiSecret.'pages/position/{direction}/{id}', 'PageController@position');
    Route::get($apiSecret.'pages/type/{type}', 'PageController@getPagesByType');

    Route::get($apiSecret.'images/{type}/{pageId}', 'ImageController@getItemByTypeAndRefId'); //getItemByPageId, it can be pageId or productId
    Route::post($apiSecret.'image/{type}/{pageId}', 'ImageController@uploadImageByTypeAndRefId'); //it can be pageId or productId
    Route::delete($apiSecret.'images/{id}',  'ImageController@delete');
    Route::patch($apiSecret.'images/position/{direction}/{id}', 'ImageController@position'); //only for type page and product is working

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
    Route::patch($apiSecret.'menus/position/{direction}/{id}', 'MenuController@position');

    Route::get($apiSecret.'contacts', 'ContactController@index');    
    Route::get($apiSecret.'contacts/pagination/{column}/{direction}', 'ContactController@getItemsWithPaginateAndSort');        
    Route::delete($apiSecret.'contacts/{id}', 'ContactController@delete');            

    Route::get($apiSecret.'config', 'ConfigController@index');
    Route::put($apiSecret.'config/clearcache', 'ConfigController@clearCache');
    Route::put($apiSecret.'config/createsitemap', 'ConfigController@createSiteMap');                
    Route::post($apiSecret.'config/toggle-cache-enable-file', 'ConfigController@toggleCacheEnableFile');      
    Route::get($apiSecret.'config/is-cache-enable', 'ConfigController@isCacheEnable');

    /* shop start */
    if(env('IS_SHOP', true )){
        Route::get($apiSecret.'products', 'ProductController@index');
        Route::post($apiSecret.'products', 'ProductController@create');
        Route::get($apiSecret.'products/{id}', 'ProductController@getItem');
        Route::get($apiSecret.'products/pagination/{lang}/{column}/{direction}', 'ProductController@getItemsWithPaginateAndSort');
        Route::put($apiSecret.'products/{id}', 'ProductController@update');
        Route::delete($apiSecret.'products/{id}', 'ProductController@delete');
    
        Route::get($apiSecret.'checkouts', 'CheckoutController@index');  
        Route::get($apiSecret.'checkouts/pagination/{lang}/{column}/{direction}', 'CheckoutController@getItemsWithPaginateAndSort');              
        Route::patch($apiSecret.'checkouts/{id}', 'CheckoutController@update');            
    }
    /* shop stop */
});