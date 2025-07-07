<?php

namespace App\Services\Cmsrs;

use Illuminate\Support\Facades\Artisan;
use Illuminate\Support\Facades\File;

class ConfigService
{
    const PAGE_TYPES_STR_DEFAULT = 'cms,gallery,shop,contact,main_page,privacy_policy,projects,clear,inner'; // default values

    const LANG_DEFAULT = 'en,pl';

    const PAGINATION_DEFAULT = 10;

    const SORT_ASC = 'asc';

    const SORT_DESC = 'desc';

    const CURRENCY_DEFAULT = 'USD';

    const CACHE_ENABLE_FILE_DEFAULT = 'app/cache_enable.txt';

    const ALLOWED_UPLOAD_FILE_EXT_DEFAULT = 'jpg,jpeg,png,gif';

    const COOKIE_FRONT_LOGIN_LANG_NAME = 'front_login_lang';

    private $langs;

    private $cacheEnableFile;

    private $filePath;

    public function __construct()
    {
        $this->langs = env('LANGS', ConfigService::LANG_DEFAULT); // empty(env('LANGS')) ? Config::LANG_DEFAULT : env('LANGS');
        $this->cacheEnableFile = env('CACHE_ENABLE_FILE', ConfigService::CACHE_ENABLE_FILE_DEFAULT);
        $this->filePath = $this->getCacheEnableFilePath();
    }

    public function arrAllowedUploadFileExt()
    {
        return explode(',', $this->allowedUploadFileExt());
    }

    private function allowedUploadFileExt()
    {
        return env('ALLOWED_UPLOAD_EXTENSIONS', ConfigService::ALLOWED_UPLOAD_FILE_EXT_DEFAULT);
    }

    public function getCacheFilePath()
    {
        return $this->filePath;
    }

    public static function getAvailableSortingDirection()
    {
        return [
            ConfigService::SORT_ASC,
            ConfigService::SORT_DESC,
        ];
    }

    public function getIsShop()
    {
        return env('IS_SHOP', true);
    }

    public function getDemoStatus()
    {
        return env('DEMO_STATUS', false);
    }

    public function getCurrency()
    {
        return env('CURRENCY', ConfigService::CURRENCY_DEFAULT);
    }

    public function getCacheEnableFilePath()
    {
        return storage_path($this->cacheEnableFile);
    }

    public function isExistCacheFileEnable()
    {
        return File::exists($this->filePath);
    }

    public function deleteFileCacheEnableIfExist()
    {
        if (File::exists($this->filePath)) {
            File::delete($this->filePath);

            return true;
        }

        return false;
    }

    public function createFileCacheEnableIfNotExist()
    {
        if (! File::exists($this->filePath)) {
            File::put($this->filePath, '');

            return true;
        }

        return false;
    }

    public function clearCache()
    {
        Artisan::call('cache:clear');
    }

    public function setLangs($langs)
    {
        $this->langs = $langs;
    }

    public function getLangs()
    {
        return $this->langs;
    }

    public static function getPagination()
    {
        return env('PAGINATION', ConfigService::PAGINATION_DEFAULT);
    }

    public static function getPageTypes()
    {
        return env('PAGE_TYPES', ConfigService::PAGE_TYPES_STR_DEFAULT);
    }

    public static function arrGetPageTypes()
    {
        $strPageTypes = ConfigService::getPageTypes();

        return explode(',', $strPageTypes);
    }

    public function getLangsFromEnv()
    {
        $langs = '';
        if ($this->getLangs()) {
            $langs = $this->getLangs();
        } else {
            $langs = ConfigService::LANG_DEFAULT;
            // throw new \Exception("You must set at least one language in the .env file");
        }

        return $langs;
    }

    public function arrGetLangs()
    {
        $strLangs = ConfigService::getLangsFromEnv();

        return explode(',', $strLangs);
    }

    public function isManyLangs()
    {
        return count($this->arrGetLangs()) > 1;
    }

    public static function arrGetLangsEnv()
    {
        $langs = explode(',', env('LANGS', ConfigService::LANG_DEFAULT));

        return $langs;
    }

    public static function getDefaultLang()
    {
        $langs = ConfigService::arrGetLangsEnv();
        if (empty($langs) || empty($langs[0])) {
            // $langs = [];
            // $langs[0] =  'en';//ConfigService::LANG_DEFAULT;
            throw new \Exception('You must set at least one language in the .env file (default lang)');
        }

        return $langs[0];
    }

    public function getConfigCacheEnable()
    {
        return env('CACHE_ENABLE', false);
    }

    public function isCacheEnable()
    {
        $formEnv = $this->getConfigCacheEnable();
        $isFileExist = $this->isExistCacheFileEnable();

        return $formEnv && $isFileExist;
    }

    public function getLangFromRequest()
    {
        // \Illuminate\Support\Facades\Log::info('1='  .  request()->route('lang') .' 2='. request('lang') );
        $lang = request()->route('lang') ?? request('lang') ?? $this->getDefaultLang();
        if (! in_array($lang, $this->arrGetLangs())) {
            abort(404);
        }

        return $lang;
    }

    public function getLangFromCookie()
    {
        $lang = request()->cookie(ConfigService::COOKIE_FRONT_LOGIN_LANG_NAME);

        if ($lang && (! in_array($lang, $this->arrGetLangs()))) {
            abort(404);
        }
        if (empty($lang)) {
            $lang = $this->getDefaultLang();
        }

        return $lang;
    }
}
