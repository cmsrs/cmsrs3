<?php

use App\Http\Controllers\Cmsrs\Api\AuthController;
use App\Http\Controllers\Cmsrs\Api\CheckoutController;
use App\Http\Controllers\Cmsrs\Api\CommentController;
use App\Http\Controllers\Cmsrs\Api\ConfigController;
use App\Http\Controllers\Cmsrs\Api\ContactController;
use App\Http\Controllers\Cmsrs\Api\ImageController;
use App\Http\Controllers\Cmsrs\Api\MenuController;
use App\Http\Controllers\Cmsrs\Api\PageController;
use App\Http\Controllers\Cmsrs\Api\ProductController;
use App\Http\Controllers\Cmsrs\Api\UserController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your Application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

if (config('cmsrs.features.shop')) {
    Route::get('productsGetNameAndPrice/{lang?}', [ProductController::class, 'getNameAndPrice']);
}

Route::post('login', [AuthController::class, 'login']);
Route::get('comments/{pageId}', [CommentController::class,  'index']);
Route::post('comments/{pageId}', [CommentController::class, 'create']);
Route::post('contact/{lang}', [ContactController::class, 'create']);

// Route::get('page/{id}/{lang}', [PageController::class, 'oneItem']); //(not remove this comment see: https://www.cmsrs.pl/pl/cms/cmsrs/rest-api). This API is not used in the project - uncomment if you want to use it
// Route::get('page-type/{type}', [PageController::class, 'getFirstPageByTypeForGuest']); - i do not use this api - see skip test that use this api

Route::group(['middleware' => ['jwt.auth']], function () {
    $apiSecret = config('cmsrs.api_secret');
    if ($apiSecret) {
        $apiSecret = $apiSecret.'/';
    }

    Route::get($apiSecret.'logout', [AuthController::class, 'logout']);

    Route::get($apiSecret.'pages', [PageController::class, 'index']);
    Route::get($apiSecret.'pages/{id}/{simple?}', [PageController::class, 'oneItemAdmin'])->where('id', '[0-9]+');
    Route::post($apiSecret.'pages', [PageController::class, 'create']);
    Route::put($apiSecret.'pages/{id}', [PageController::class, 'update']);
    Route::delete($apiSecret.'pages/{id}', [PageController::class, 'delete']);
    Route::patch($apiSecret.'pages/position/{direction}/{id}', [PageController::class, 'position']);
    Route::get($apiSecret.'pages/type/{type}', [PageController::class, 'getPagesByType']);

    Route::get($apiSecret.'images/{type}/{pageId}', [ImageController::class, 'getItemByTypeAndRefId']); // getItemByPageId, it can be pageId or productId
    Route::post($apiSecret.'image/{type}/{pageId}', [ImageController::class, 'uploadImageByTypeAndRefId']); // it can be pageId or productId
    Route::delete($apiSecret.'images/{id}', [ImageController::class, 'delete']);
    Route::patch($apiSecret.'images/position/{direction}/{id}', [ImageController::class, 'position']); // only for type page and product is working

    Route::get($apiSecret.'users/clients', [UserController::class, 'getClients']);
    Route::get($apiSecret.'clients/{column}/{direction}', [UserController::class, 'getClientsPaginateAndSort']);
    Route::post($apiSecret.'clients', [UserController::class, 'createClient']);
    Route::put($apiSecret.'clients/{id}', [UserController::class, 'updateClient']);
    Route::delete($apiSecret.'clients/{id}', [UserController::class, 'deleteClient']);
    Route::get($apiSecret.'clients/{id}', [UserController::class, 'getClient']);

    Route::get($apiSecret.'menus', [MenuController::class, 'index']);
    Route::post($apiSecret.'menus', [MenuController::class, 'create']);
    Route::put($apiSecret.'menus/{id}', [MenuController::class, 'update']);
    Route::delete($apiSecret.'menus/{id}', [MenuController::class, 'delete']);
    Route::patch($apiSecret.'menus/position/{direction}/{id}', [MenuController::class, 'position']);

    Route::get($apiSecret.'contacts', [ContactController::class, 'index']);
    Route::get($apiSecret.'contacts/pagination/{column}/{direction}', [ContactController::class, 'getItemsWithPaginateAndSort']);
    Route::delete($apiSecret.'contacts/{id}', [ContactController::class, 'delete']);

    Route::get($apiSecret.'config', [ConfigController::class, 'index']);
    Route::put($apiSecret.'config/clearcache', [ConfigController::class, 'clearCache']);
    Route::put($apiSecret.'config/createsitemap', [ConfigController::class, 'createSiteMap']);
    Route::post($apiSecret.'config/toggle-cache-enable-file', [ConfigController::class, 'toggleCacheEnableFile']);
    Route::get($apiSecret.'config/is-cache-enable', [ConfigController::class, 'isCacheEnable']);

    /* shop start */
    if (config('cmsrs.features.shop')) {
        Route::get($apiSecret.'products', [ProductController::class, 'index']);
        Route::post($apiSecret.'products', [ProductController::class, 'create']);
        Route::get($apiSecret.'products/{id}', [ProductController::class, 'getItem']);
        Route::get($apiSecret.'products/pagination/{lang}/{column}/{direction}', [ProductController::class, 'getItemsWithPaginateAndSort']);
        Route::put($apiSecret.'products/{id}', [ProductController::class, 'update']);
        Route::delete($apiSecret.'products/{id}', [ProductController::class, 'delete']);

        Route::get($apiSecret.'checkouts', [CheckoutController::class, 'index']);
        Route::get($apiSecret.'checkouts/pagination/{lang}/{column}/{direction}', [CheckoutController::class, 'getItemsWithPaginateAndSort']);
        Route::patch($apiSecret.'checkouts/{id}', [CheckoutController::class, 'update']);
    }
    /* shop stop */
});
