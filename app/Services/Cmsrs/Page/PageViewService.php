<?php

declare(strict_types=1);

namespace App\Services\Cmsrs\Page;

use App\Models\Cmsrs\Page;
use App\Services\Cmsrs\ImageService;
use App\Services\Cmsrs\ProductService;

class PageViewService
{
    public function __construct(
        private PageService $pageService,
        private ProductService $productService,
        private ImageService $imageService,
    ) {}

    /**
     * @param  array<string, mixed>  $dataIn
     * @return array<string, mixed>
     */
    public function getDataToView(Page $mPage, array $dataIn): array
    {
        if (empty($dataIn['lang'])) {
            throw new \Exception('Now lang in dataIn');
        }
        $lang = $dataIn['lang'];

        $products = null;
        if ($mPage->type === 'shop') {
            $products = $this->productService->getProductsWithImagesByPage($mPage->id);
        }
        $langs = $dataIn['langs'];

        $data = [
            'page' => $mPage,
            'menus' => isset($dataIn['menus']) ? $dataIn['menus'] : null,
            'images' => $this->imageService->getImagesAndThumbsByTypeAndRefId('page', $mPage->id),
            'h1_title' => $this->pageService->translatesByColumnAndLang($mPage, 'title', $lang) ?? config('app.name', 'cmsRS'),
            'content' => $this->pageService->translatesByColumnAndLang($mPage, 'content', $lang),
            'content_default_lang' => $this->pageService->translatesByColumnAndLang($mPage, 'content', $langs[0]), // only in project view - mayby refactor this
            'seo_description' => $this->pageService->translatesByColumnAndLang($mPage, 'description', $lang) ?? config('app.name', 'cmsRS'),
            'products' => $products,
            'lang' => $lang,
            'langs' => $langs,
            're_public' => config('cmsrs.recaptcha.public'),  // env('GOOGLE_RECAPTCHA_PUBLIC', ''),
            'view' => 'cmsrs.'.$this->pageService->getViewNameByType($mPage),
            'companyData' => $this->pageService->getPageDataByShortTitleCache('company_data', 'content', $lang),
            'page_url' => $this->pageService->getUrl($mPage, $lang), // only useful in shop view - mayby refactor this
        ];

        return array_merge($data, $dataIn);
    }
}
