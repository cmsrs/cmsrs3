<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use App\Page;
use App\Order;
use App\Menu;
use App\User;
use App\Comment;
use App\Product;
use App\Translate;
use App\Content;
use App\Contact;
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
        Comment::create(['page_id' => $p['p2']->id,  'content' => 'First test comment - test1' ]);
        Comment::create(['page_id' => $p['p2']->id,  'content' => 'Second test comment - test2' ]);


        /*---------------------*/
        /*--- products --------*/
        /*---------------------*/

        $products = $objDemoData->product($p);

        /*---------------------*/
        /*--- contacts --------*/
        /*---------------------*/
        for($ii=1; $ii<=32; $ii++){
            (new Contact)->wrapCreate(["email" => "tt$ii@cmsrs.pl", "message" => "test contact message$ii" ]);
        }
           
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

        /**
         * remove to seeder
         */
        /*
        $emailClient = 'client@cmsrs.pl';
        $user2 = new User([
            'email'    => $emailClient,
            'name'     => 'client',
            'role' => User::$role['client']
        ]);
        $user2->password = 'cmsrs456';
        $user2->save();
         */

        for($i=1; $i<=32; $i++){
            $name = 'client'.$i;
            $emailClient = $name.'@cmsrs.pl';
            $user32 = new User([
                'name' => $name,                
                'email' => $emailClient,
                'role' => User::$role['client']
            ]);
            $user32->password = 'cmsrs456';
            $user32->save();
        }

        /*---------------------*/
        /* ---orders-----------*/
        /*---------------------*/
        /*
        $uu =  User::where('email', '=', $emailClient)->first();
        $order1 = [
            'qty' => 2,
            'user_id' => $uu->id, 
            'product_id' =>  $products[0]->id
        ];

        $order2 = [
            'qty' => 7,
            'user_id' => $uu->id, 
            'product_id' =>  $products[2]->id
        ];

        Order::create($order1);
        Order::create($order2);
        */
    }
}
