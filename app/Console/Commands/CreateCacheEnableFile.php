<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use App\Config;

class CreateCacheEnableFile extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'command:create-cache-enable-file';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Create Cache Enable File';

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
        $cacheFilePath = (new Config)->getCacheFilePath();
        if (!file_exists($cacheFilePath)){
            touch($cacheFilePath);
        }

        return 0;        
    }
}
