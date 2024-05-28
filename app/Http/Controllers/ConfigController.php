<?php

namespace App\Http\Controllers;

use App\Config;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Artisan;
use Illuminate\Http\Request;

class ConfigController extends Controller
{
    public function index()
    {
        $objConfig = new Config();
        try {
            $config = [];
            $config['page_types'] = Config::arrGetPageTypes();
            $config['langs'] =  $objConfig->arrGetLangs();
            $config['cache_enable'] = env('CACHE_ENABLE', false);
            $config['is_cache_enable'] = $objConfig->isCacheEnable();
            $config['default_lang'] =  $objConfig->getDefaultLang();
        } catch (\Exception $e) {
            Log::error('config ex: '.$e->getMessage().' line: '.$e->getLine().'  file: '.$e->getFile());
            return response()->json(['success'=> false, 'error'=>  $e->getMessage().' Details in the log file.'], 200);
        }
  
        return response()->json(['success' => true, 'data'=> $config], 200);
    }

    public function clearCache()
    {
        $objConfig = new Config();
        if(!$objConfig->getConfigCacheEnable()){
            return response()->json(['success'=> false, 'error' => ['clear_cache'  => "don't allowed, because cache_enable is false"] ]);
        }

        try {
            $objConfig->clearCache();
            //Artisan::call('cache:clear');  
        } catch (\Exception $e) {
            Log::error('config ex: '.$e->getMessage().' line: '.$e->getLine().'  file: '.$e->getFile());
            return response()->json(['success'=> false, 'error'=>  $e->getMessage().' Details in the log file.'], 200);
        }


        return response()->json(['success' => true], 200);
    }

    public function createSiteMap()
    {
        try {
            Artisan::call('command:create-site-map');  
        } catch (\Exception $e) {
            Log::error('config ex: '.$e->getMessage().' line: '.$e->getLine().'  file: '.$e->getFile());
            return response()->json(['success'=> false, 'error'=>  $e->getMessage().' Details in the log file.'], 200);
        }

        return response()->json(['success' => true], 200);
    }
    
    public function toggleCacheEnableFile(Request $request)
    {
        $action = $request->input('action', null);
        $objConfig = new Config;
        if(!$objConfig->getConfigCacheEnable()){
            return response()->json(['success'=> false, 'error' => ['toggle_cache_enable_file'  => "don't allowed, because cache_enable is false"] ]);
        }
    
        if ($action == 'enable') {
            if( $objConfig->createFileCacheEnableIfNotExist() ){
                $objConfig->clearCache();
                return response()->json(['success'=> true, 'data' => [ 'value' => true, 'message' => 'Cache enabled']]);
            }
            return response()->json(['success'=> false, 'error' => [ 'toggle_cache_enable_file'  => 'Cache was already enabled'] ]);
        } elseif ($action == 'disable') {
            if( $objConfig->deleteFileCacheEnableIfExist() ){
                $objConfig->clearCache();
                return response()->json(['success'=> true, 'data' => [ 'value' => false, 'message' => 'Cache disabled']]);
            }
            return response()->json(['success'=> false, 'error' => [ 'toggle_cache_enable_file'  => 'Cache was already disabled'] ]);
        } else {
            return response()->json(['success'=> false, 'error' => [ 'toggle_cache_enable_file'  => 'Invalid action'] ], 400);
        }
    } 

    public function isCacheEnable()
    {
        try {
            $ret = (new Config)->isCacheEnable();
        } catch (\Exception $e) {
            Log::error('is cache enable ex: '.$e->getMessage().' line: '.$e->getLine().'  file: '.$e->getFile()); 
            return response()->json(['success'=> false, 'error'=> 'is cache enable problem, details in the log file.'], 200);
        }
        return response()->json(['success' => true, 'data'=> ['cache_enable' => $ret]], 200);
    } 

}
