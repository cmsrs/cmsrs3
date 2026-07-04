<?php

declare(strict_types=1);

namespace App\Services\Cmsrs\Translation;

use App\Models\Cmsrs\Interfaces\ContentTranslatableInterface;
use App\Models\Cmsrs\Interfaces\TranslatableInterface;
use App\Services\Cmsrs\Helpers\CacheManagerService;

class TranslationReader
{
    public function __construct(private CacheManagerService $cacheManagerService) {}

    public function translatesByColumnAndLang(TranslatableInterface $model, string $column, string $lang): ?string
    {
        $id = (string) $model->getId(); // for $model->id phpstan complains because of interface, so we need to use method

        $key = $this->cacheManagerService->key(
            strtolower(class_basename($model)).'_translate',
            $column.'_'.$id,
            $lang
        );

        return $this->cacheManagerService->remember(
            $key,
            fn () => $this->translatesByColumnAndLangWithoutCache($model, $column, $lang)
        );
    }

    private function translatesByColumnAndLangWithoutCache(TranslatableInterface $model, string $column, string $lang): ?string
    {
        $data = $this->getAllTranslateByColumn($model);

        $value = null;
        if (isset($data[$column]) && isset($data[$column][$lang])) {
            $value = $data[$column][$lang];
        }

        return $value;
    }

    /**
     * @return array<string, array<string, string>>
     */
    private function getAllTranslateByColumn(TranslatableInterface $model): array
    {
        $out = [];

        $data = $this->getAllTranslate($model); // from service

        foreach ($data as $d) {
            $out[$d['column']][$d['lang']] = $d['value'];
        }

        return $out;
    }

    /**
     * Get all translations for a given translatable model - for menu and image
     *
     * @return array<string, array<string, string>>
     */
    private function getAllTranslate(TranslatableInterface|ContentTranslatableInterface $model): array
    {
        $translates = $model->translates()
            ->get(['lang', 'column', 'value'])
            ->toArray();

        $contents = [];
        if ($model instanceof ContentTranslatableInterface) {
            $contents = $model->contents()
                ->get(['lang', 'column', 'value'])
                ->toArray();
        }

        return array_merge($translates, $contents);

    }
}
