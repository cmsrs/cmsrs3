<?php

namespace App\Http\Controllers\Cmsrs;

use App\Http\Controllers\Controller;


use App\Services\Cmsrs\ConfigService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Artisan;
use Illuminate\Support\Facades\Log;

class ConfigController extends Controller
{
    public function index()
    {
        $objConfig = new ConfigService;
        try {
            $config = [];
            $config['page_types'] = ConfigService::arrGetPageTypes();
            $config['langs'] = $objConfig->arrGetLangs();
            $config['cache_enable'] = env('CACHE_ENABLE', false);
            $config['is_cache_enable'] = $objConfig->isCacheEnable();
            $config['default_lang'] = $objConfig->getDefaultLang();
            $config['currency'] = $objConfig->getCurrency();
            $config['demo_status'] = $objConfig->getDemoStatus();
            $config['is_shop'] = $objConfig->getIsShop();
        } catch (\Exception $e) {
            Log::error('config ex: '.$e->getMessage().' line: '.$e->getLine().'  file: '.$e->getFile());

            return response()->json(['success' => false, 'error' => $e->getMessage().' Details in the log file.'], 200);
        }

        return response()->json(['success' => true, 'data' => $config], 200);
    }

    public function clearCache()
    {
        $objConfig = new ConfigService;
        if (! $objConfig->getConfigCacheEnable()) {
            return response()->json(['success' => false, 'error' => ['clear_cache' => "don't allowed, because cache_enable is false"]]);
        }

        try {
            $objConfig->clearCache();
            //Artisan::call('cache:clear');
        } catch (\Exception $e) {
            Log::error('config ex: '.$e->getMessage().' line: '.$e->getLine().'  file: '.$e->getFile());

            return response()->json(['success' => false, 'error' => $e->getMessage().' Details in the log file.'], 200);
        }

        return response()->json(['success' => true], 200);
    }

    public function createSiteMap()
    {
        try {
            Artisan::call('command:create-site-map');
        } catch (\Exception $e) {
            Log::error('config ex: '.$e->getMessage().' line: '.$e->getLine().'  file: '.$e->getFile());

            return response()->json(['success' => false, 'error' => $e->getMessage().' Details in the log file.'], 200);
        }

        return response()->json(['success' => true], 200);
    }

    public function toggleCacheEnableFile(Request $request)
    {
        $action = $request->input('action', null);
        $objConfig = new ConfigService;
        if (! $objConfig->getConfigCacheEnable()) {
            return response()->json(['success' => false, 'error' => ['toggle_cache_enable_file' => "don't allowed, because cache_enable is false"]]);
        }

        if ($action == 'enable') {
            if ($objConfig->createFileCacheEnableIfNotExist()) {
                $objConfig->clearCache();

                return response()->json(['success' => true, 'data' => ['value' => true, 'message' => 'Cache enabled']]);
            }

            return response()->json(['success' => false, 'error' => ['toggle_cache_enable_file' => 'Cache was already enabled']]);
        } elseif ($action == 'disable') {
            if ($objConfig->deleteFileCacheEnableIfExist()) {
                $objConfig->clearCache();

                return response()->json(['success' => true, 'data' => ['value' => false, 'message' => 'Cache disabled']]);
            }

            return response()->json(['success' => false, 'error' => ['toggle_cache_enable_file' => 'Cache was already disabled']]);
        } else {
            return response()->json(['success' => false, 'error' => ['toggle_cache_enable_file' => 'Invalid action']], 400);
        }
    }

    public function isCacheEnable()
    {
        try {
            $ret = (new ConfigService)->isCacheEnable();
        } catch (\Exception $e) {
            Log::error('is cache enable ex: '.$e->getMessage().' line: '.$e->getLine().'  file: '.$e->getFile());

            return response()->json(['success' => false, 'error' => 'is cache enable problem, details in the log file.'], 200);
        }

        return response()->json(['success' => true, 'data' => ['is_cache_enable' => $ret]], 200);
    }
}
