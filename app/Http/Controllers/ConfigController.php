<?php

namespace App\Http\Controllers;

use App\Config;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Artisan;

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

}
