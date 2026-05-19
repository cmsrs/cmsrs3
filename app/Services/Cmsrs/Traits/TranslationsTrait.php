<?php

namespace App\Services\Cmsrs\Traits;

use App\Models\Cmsrs\Interfaces\ContentTranslatableInterface;
use App\Models\Cmsrs\Interfaces\TranslatableInterface;
use App\Services\Cmsrs\Helpers\CacheService;

/**
 * @template TModel of \Illuminate\Database\Eloquent\Model&TranslatableInterface
 */
trait TranslationsTrait
{
    /**
     * @param  TModel  $model
     * @return array<string, array<string, string>>
     */
    public function getAllTranslate(TranslatableInterface $model): array
    {
        $id = $model->getId(); // for $model->id phpstan complains because of interface, so we need to use method

        $cacheKey = strtolower(class_basename($model)).'_translate_'.$id;

        $fetch = function () use ($model) {
            return $this->getAllTranslateWithoutCache($model);
        };

        if ($this->configService->isCacheEnable()) {
            return cache()->remember($cacheKey, CacheService::setTime(), $fetch);
        }

        return $fetch();
    }

    /**
     * Get all translations for a given translatable model - for menu and image
     *
     * @return array<string, array<string, string>>
     */
    public function getAllTranslateWithoutCache(TranslatableInterface|ContentTranslatableInterface $model): array
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

    /**
     * @param  TModel  $model
     * @return array<string, array<string, string>>
     */
    public function getAllTranslateByColumn(TranslatableInterface $model): array
    {
        $out = [];

        $data = $this->getAllTranslate($model); // from service

        foreach ($data as $d) {
            $out[$d['column']][$d['lang']] = $d['value'];
        }

        return $out;
    }

    /**
     * @param  TModel  $model
     */
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
