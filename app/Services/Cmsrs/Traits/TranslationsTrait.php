<?php

namespace App\Services\Cmsrs\Traits;

use App\Models\Cmsrs\Interfaces\ContentTranslatableInterface;
use App\Models\Cmsrs\Interfaces\TranslatableInterface;
use App\Services\Cmsrs\Helpers\CacheService;

trait TranslationsTrait
{
    /**
     * ___return array<int, array{lang: string, column: string, value: mixed}>
     */
    // public function getAllTranslate(TranslatableInterface $model): array
    // {
    // $id = $model->id;

    // $cacheKey = strtolower(class_basename($model)).'_translate_'.$id;

    // $fetch = function () use ($model) {
    //     return $model->translates()
    //         ->get(['lang', 'column', 'value'])
    //         ->toArray();
    // };

    // TODO Cache
    // if ($configService->isCacheEnable()) {
    //    return cache()->remember($cacheKey, CacheService::setTime(), $fetch);
    // }

    // return $fetch();
    // }

    /**
     * Get all translations for a given translatable model - for menu and image
     *
     * @return array<string, array<string, string>>
     */
    public function getAllTranslate(TranslatableInterface $model): array
    {
        $translates = $model->translates()
            ->get(['lang', 'column', 'value'])
            ->toArray();

        if ($model instanceof ContentTranslatableInterface) {
            $contents = $model->contents()
                ->get(['lang', 'column', 'value'])
                ->toArray();
        } else {
            $contents = [];
        }

        return array_merge($translates, $contents);

    }

    /**
     * @return array<string, array<string, string>>
     */
    public function getAllTranslateByColumn(TranslatableInterface $model): array
    {
        $out = [];

        // if ($this instanceof TranslateInterface) {
        $data = $this->getAllTranslate($model); // from child

        foreach ($data as $d) {
            $out[$d['column']][$d['lang']] = $d['value'];
        }
        // }

        return $out;
    }

    public function translatesByColumnAndLang(TranslatableInterface $model, string $column, string $lang): string
    {
        $data = $this->getAllTranslateByColumn($model);

        $value = '';
        if (isset($data[$column]) && isset($data[$column][$lang])) {
            $value = $data[$column][$lang];
        }

        return $value;
    }
}
