<?php

declare(strict_types=1);

namespace App\Services\Cmsrs\Helpers;

use App\Services\Cmsrs\ConfigService;

class RequestService
{
    public function __construct(private ConfigService $configService) {}

    public function getLangFromRequest(): string
    {
        // \Illuminate\Support\Facades\Log::info('1='  .  request()->route('lang') .' 2='. request('lang') );
        $lang = request()->route('lang') ?? request('lang') ?? $this->configService->getDefaultLang();
        if (! in_array($lang, $this->configService->arrGetLangs())) {
            abort(404);
        }

        return $lang;
    }

    public function getLangFromCookie(): string
    {
        $lang = request()->cookie(ConfigService::COOKIE_FRONT_LOGIN_LANG_NAME);

        // Normalize array, string (cookie can sometimes be array)
        if (is_array($lang)) {
            $lang = $lang[0] ?? null;
        }

        if ($lang && ! in_array($lang, $this->configService->arrGetLangs(), true)) {
            abort(404);
        }

        if (empty($lang)) {
            $lang = $this->configService->getDefaultLang();
        }

        return (string) $lang;
    }
}
