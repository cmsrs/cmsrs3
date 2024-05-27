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
            $config['default_lang'] =  $objConfig->getDefaultLang();
        } catch (\Exception $e) {
            Log::error('config ex: '.$e->getMessage().' line: '.$e->getLine().'  file: '.$e->getFile());
            return response()->json(['success'=> false, 'error'=>  $e->getMessage().' Details in the log file.'], 200);
        }
  
        return response()->json(['success' => true, 'data'=> $config], 200);
    }

    public function clearCache()
    {
        try {
            Artisan::call('cache:clear');  
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
    
        if ($action == 'enable') {
            if( $objConfig->createFileCacheEnableIfNotExist() ){
                return response()->json(['success'=> true, 'message' => 'Cache enabled']);
            }
            return response()->json(['success'=> false, 'error' => [ 'toggle_cache_enable_file'  => 'Cache was already enabled'] ]);
        } elseif ($action == 'disable') {
            if( $objConfig->deleteFileCacheEnableIfExist() ){
                return response()->json(['success'=> true, 'message' => 'Cache disabled']);
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
