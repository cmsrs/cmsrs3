<?php

namespace App\Services\Cmsrs;

use App\Models\Cmsrs\Content;
use App\Models\Cmsrs\Menu;
use App\Models\Cmsrs\Page;
use App\Models\Cmsrs\Product;
use App\Models\Cmsrs\Translate;
use App\Services\Cmsrs\Interfaces\TranslateInterface;
use App\Services\Cmsrs\Interfaces\TranslateValueInterface;

// use Illuminate\Support\Number;

abstract class BaseService
{
    private $arrLangs;

    public $pageFields = [
        'id',
        'published',
        'commented',
        'after_login',
        'position',
        'type',
        'menu_id',
        'page_id',
    ];

    public function getArrLangs()
    {
        if ($this->arrLangs) {
            return $this->arrLangs;
        }

        return (new ConfigService)->arrGetLangs();
    }

    public function setArrLangs($arrLangs)
    {
        $this->arrLangs = $arrLangs;
    }

    protected function getPageDataFormat($page)
    {
        $out = [];
        foreach ($this->pageFields as $field) {
            $out[$field] = $page[$field];
        }
        foreach ($page['translates'] as $translate) {
            $out[$translate['column']][$translate['lang']] = $translate['value'];
        }
        foreach ($page['contents'] as $translate) {
            $out[$translate['column']][$translate['lang']] = $translate['value'];
        }

        return $out;
    }

    protected function pagesPublishedAndAccessNotAuth(Menu $mMenu)
    {
        return $mMenu->pages()->where('published', '=', 1)->where('after_login', '=', 0)->orderBy('position', 'asc');
    }

    public function pagesPublishedTree($pagesByMenu)
    {
        $tree = [];
        foreach ($pagesByMenu as $page) {
            if (empty($page->page_id)) {
                $tree[$page->id] = $page;
            }
        }

        foreach ($pagesByMenu as $page) {
            if (! empty($page->page_id)) {
                $children = empty($tree[$page->page_id]['children']) ? [] : $tree[$page->page_id]['children'];
                array_push($children, $page);
                if (! empty($tree[$page->page_id])) {
                    $tree[$page->page_id]->setAttribute('children', $children);
                }
            }
        }

        return $tree;
    }

    public function genericCreateTranslate($d, $refName, $columns, $create = true)
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
                        if ($this instanceof TranslateValueInterface) {
                            $this->updateRow($row); // from child
                        }
                    }
                }
            }
        }

        return true;
    }

    public function getAllTranslateByColumn($model)
    {
        $out = [];

        if ($this instanceof TranslateInterface) {
            $data = $this->getAllTranslate($model); // from child

            foreach ($data as $d) {
                $out[$d['column']][$d['lang']] = $d['value'];
            }
        }

        return $out;
    }

    public function translatesByColumnAndLang($model, $column, $lang)
    {
        $data = $this->getAllTranslateByColumn($model);

        $value = '';
        if (isset($data[$column]) && isset($data[$column][$lang])) {
            $value = $data[$column][$lang];
        }

        return $value;
    }

    protected function wrapTranslateUpdate(Translate|Content|false $obj, $row)
    {
        if ($obj) {
            $obj->update(['value' => $row['value']]);
        } else {
            $this->createRow($row);
        }
    }

    protected function createRow($row)
    {
        $translate = Translate::create($row);
        if (empty($translate->id)) {
            throw new \Exception('problem with save into translate table');
        }
    }

    public static function reIndexArr($arr, $key = 'id')
    {
        $out = [];
        foreach ($arr as $item) {
            $arrItem = (array) $item;
            if (empty($arrItem[$key])) {
                throw new \Exception('not found key id in arr');
            }

            $out[$arrItem[$key]] = $arrItem;
        }

        return $out;
    }

    protected function getPaginationFromCollection($collection)
    {
        $perPage = ConfigService::getPagination();
        $page = \Illuminate\Pagination\Paginator::resolveCurrentPage() ?: 1;

        return new \Illuminate\Pagination\LengthAwarePaginator(
            $collection->forPage($page, $perPage)->values(),
            $collection->count(),
            $perPage,
            $page,
            ['path' => request()->url()]
        );
    }

    // see: App\Services\Cmsrs\Helpers\PriceHelperService
    // protected static function formatCurrency($number)
    // {
    //     $currency = (new ConfigService)->getCurrency();

    //     return Number::currency(($number / 100), $currency); //100 - cents
    // }

    /**
     * images in fs - start
     */

    /**
     * this function is useful only in tests
     */
    public function deleteImagesFs(Page|Product $mObj)
    {
        $imageService = new ImageService;
        foreach ($mObj->images()->get() as $img) {
            if (! $img instanceof \App\Models\Cmsrs\Image) {
                throw new \Exception('image is not instance of \\App\\Models\\Cmsrs\\Image - case deleteImagesFs');
            }
            $imageService->deleteImg($img);
        }
    }

    public function getImagesFsFiles(Page|Product $mObj)
    {
        $imageService = new ImageService;
        $files = [];
        $dirsImgs = [];
        foreach ($mObj->images()->get() as $img) {
            if (! $img instanceof \App\Models\Cmsrs\Image) {
                throw new \Exception('image is not instance of \\App\\Models\\Cmsrs\\Image - case getImagesFsFiles');
            }
            $images = $imageService->getAllImage($img);

            if (is_array($images) && ! empty($images)) {
                $dirsImgs[] = ImageService::getImgDir($img);
                $files = array_merge($files, array_values($images));
            }
        }

        return ['files' => $files, 'dirs_imgs' => array_unique($dirsImgs)];
    }

    public function deletePageOrProductWithImgs(Page|Product $mObj)
    {
        $allImg = $this->getImagesFsFiles($mObj);

        $ret = $mObj->delete();
        if (! $ret) {
            return false;  // if sth wrong with delete model we don't delete images from fs
        }

        ImageService::deleteImagesFromFs($allImg['files']);

        foreach ($allImg['dirs_imgs'] as $dirImgs) {
            ImageService::removeTwoDirectoryIfEmpty($dirImgs); // Catalogs are left after deleting the images.
        }

        return $ret;
    }
    /**
     * images in fs - stop
     */
}
