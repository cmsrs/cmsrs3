<?php

namespace App\Console\Commands;

use App\Models\Cmsrs\Page;
use App\Services\Cmsrs\PageService;
use App\Services\Cmsrs\ProductService;
use Illuminate\Console\Command;

class CreateSiteMap extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'cmsrs:create-site-map';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Command create site map (the script creates a sitemap in txt format)';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {
        $pageService = new PageService;
        $appUrl = env('APP_URL');
        $langs = $pageService->getArrLangs();
        $pages = Page::where('after_login', '=', 0)->where('published', '=', 1)->where('type', '!=', 'inner')->get();
        $prodUrls = (new ProductService)->getProductsUrl();

        $strUrls = '';
        foreach ($langs as $lang) {
            foreach ($pages as $page) {
                $strUrls .= $appUrl.$pageService->getUrl($page, $lang)."\n";
            }
            foreach ($prodUrls as $prodUrl) {
                $strUrls .= $appUrl.$prodUrl[$lang]."\n";
            }
        }

        $siteMapPath = public_path().'/sitemap.txt';
        file_put_contents($siteMapPath, $strUrls);
    }
}
