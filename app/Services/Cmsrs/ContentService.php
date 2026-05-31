<?php

declare(strict_types=1);

namespace App\Services\Cmsrs;

use App\Models\Cmsrs\Content;

class ContentService extends BaseService
{
    /**
     * @var array<int, string>
     */
    protected $fillable = [
        'lang',
        'column',
        'value',
        'page_id',
        'product_id',
    ];

    /**
     * @var array<string, string>
     */
    protected $casts = [
        'page_id' => 'integer',
        'product_id' => 'integer',
    ];

    public function __construct(private ConfigService $configService) {}

    /**
     * @return array<int, string>
     *                            use in tests
     */
    public function getArrLangs()
    {
        return $this->configService->arrGetLangs();
    }

    /**
     * @param  array<string, mixed>  $d
     * @param  array<string, bool>  $columns
     *
     * @throws \Exception
     *                    DRY!!: ContentService.php and TranslateService.php, in Base service I don't want use ConfigService (because of tests - new instance problem in tests, and phpstan)
     */
    public function genericCreateTranslate(array $d, string $refName, array $columns, bool $create = true): bool
    {
        $refId = $d[$refName];
        $data = $d['data'];
        foreach ($columns as $column => $require) {
            if ($require && empty($data[$column])) {
                throw new \Exception("Translation problem, require column: $column, var= ".var_export($data, true));
            } else {
                $col = ! empty($data[$column]) ? $data[$column] : [];
                foreach ($this->getArrLangs() as $lang) {
                    $value = ! empty($col[$lang]) ? $col[$lang] : null;

                    if ($require && ! $value) {
                        throw new \Exception("Translation problem, require lang: $lang for column: $column, var= ".var_export($data, true));
                    }

                    $row = [$refName => $refId, 'column' => $column, 'lang' => $lang, 'value' => $value];
                    if ($create) {
                        $this->createRow($row);
                    } else {
                        $this->updateRow($row);
                    }
                }
            }
        }

        return true;
    }

    /**
     * @param  array<string, mixed>  $data
     */
    public function wrapCreate(array $data, bool $create = true): bool
    {
        if (! empty($data['page_id'])) {
            $columns = [
                'content' => false,
            ];
            $this->genericCreateTranslate($data, 'page_id', $columns, $create);
        } elseif (! empty($data['product_id'])) {
            $columns = [
                'product_description' => false,
            ];
            $this->genericCreateTranslate($data, 'product_id', $columns, $create);
        }

        return true;
    }

    /**
     * @param  array<string, mixed>  $row
     */
    public function updateRow(array $row): bool
    {
        $query = Content::query()
            ->where('column', $row['column'])
            ->where('lang', $row['lang']);

        if (! empty($row['page_id'])) {
            $query->where('page_id', $row['page_id']);
        } elseif (! empty($row['product_id'])) {
            $query->where('product_id', $row['product_id']);
        }

        $obj = $query->first();

        $this->wrapTranslateUpdate($obj, $row);

        return true;
    }

    /**
     * @param  array<string, mixed>  $row
     *                                     DRY!!: ContentService.php and TranslateService.php
     */
    public function createRow(array $row): void
    {
        $objContent = new Content;
        $content = $objContent->create($row);
        if (empty($content->id)) {
            throw new \Exception('problem with save into content table');
        }
    }

    /**
     * @param  array<string, mixed>  $row
     *                                     DRY!!: ContentService.php and TranslateService.php
     */
    protected function wrapTranslateUpdate(?Content $obj, array $row): void
    {
        if ($obj === null) {
            $this->createRow($row);

            return;
        }

        $obj->update([
            'value' => $row['value'],
        ]);
    }
}
