<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use App\Page;

class CreateSiteMap extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'command:create-site-map';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Command create site map (the script creates a sitempe in txt format)';

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
        $appUrl = env('APP_URL');
        $langs = (new Page)->getArrLangs();
        $pages = Page::where('after_login', '=', 0)->where( 'published', '=', 1 )->get();

        $strUrls = '';
        foreach($langs as $lang){
            foreach($pages as $page){
                $strUrls .= $appUrl.$page->getUrl($lang)."\n";
            }    
        }

        $siteMapPath = public_path().'/sitemap.txt';
        file_put_contents($siteMapPath,  $strUrls);
    }
}
