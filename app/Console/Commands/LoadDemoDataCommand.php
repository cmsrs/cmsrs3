<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use App\Page;
use App\Menu;
use App\User;
use App\Comment;
use App\Product;
use App\Translate;
use App\Content;
use App\Data\Demo;

class LoadDemoDataCommand extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'command:load-demo-data';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Load Demo Data';


    private $langs;
    private $translate;
    private $content;

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();

        $this->langs = ['en'];
        $this->translate = new Translate;
        $this->translate->setArrLangs($this->langs);
        $this->content = new Content;
        $this->content->setArrLangs($this->langs);

    }


    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {
        ini_set('memory_limit', '1028M');
        $objDemoData = new Demo;

        /*---------------------*/
        /*--- pages an menu ---*/
        /*---------------------*/

        $p = $objDemoData->pagesAndMenu();

        /*---------------------*/
        /*--- comments --------*/
        /*---------------------*/
        Comment::create( ['page_id' => $p['p2']->id,  'content' => 'First test comment - test1' ] );
        Comment::create( ['page_id' => $p['p2']->id,  'content' => 'Second test comment - test2' ] );


        /*---------------------*/
        /*--- products --------*/
        /*---------------------*/        

        $objDemoData->product($p);
           
        /*---------------------*/
        /* ---users -----------*/
        /*---------------------*/

        //It,s created by the 'seed'
        // $user = new User([
        //     'email'    => 'adm@cmsrs.pl',
        //     'name'     => 'adm',
        //     'role' => User::$role['admin']
        // ]);
        // $user->password = 'cmsrs123';      
        // $user->save();

        $user2 = new User([
            'email'    => 'client@cmsrs.pl',
            'name'     => 'client',
            'role' => User::$role['client']
        ]);
        $user2->password = 'cmsrs456';      
        $user2->save();        
    }

}
