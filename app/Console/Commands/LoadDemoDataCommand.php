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
use App\Deliver;
use App\Payment;

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

        $numberOfFakeUsers = 32;
        for($i=1; $i<=$numberOfFakeUsers; $i++){
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
        /* ---checkout---------*/        
        /*---------------------*/
        function wrapSaveCheckout($products, $i ){
            $prod0 =  empty($products[0]) ? die( "can't find product0 to checkout" ) : $products[0];
            $prod1 =  empty($products[1]) ? die( "can't find product1 to checkout" ) : $products[1];
            $prod2 =  empty($products[2]) ? die( "can't find product2 to checkout" ) : $products[2];
            $prod3 =  empty($products[3]) ? die( "can't find product3 to checkout" ) : $products[3];

            if( empty($prod0->id) ||empty($prod1->id) ||empty($prod2->id) ||empty($prod3->id) ){
                die("product id not occur");
            }

            $name = 'client'.$i;
            $emailClient = $name.'@cmsrs.pl';

            $data =
            Array
            (
                'products' => Array
                    (
                        0 => Array
                            (
                                'id' => $prod0->id,
                                'qty' => (($i+1) % 4) + 1 //we don't  want 0, therefore we add 1 at the end
                            ),
            
                        1 => Array
                            (
                                'id' => $prod1->id,
                                'qty' => (($i+2) % 4) + 1
                            ),
                        2 => Array 
                            (
                                'id' => $prod2->id,
                                'qty' => (($i+3) % 4) + 1
                            ),
                        3 => Array
                            (
                                'id' => $prod3->id,
                                'qty' => (($i+4) % 4) + 1
                            )

                    ),        
                'lang' => 'en',
                'email' => $emailClient,
                'first_name' => $name,
                'last_name' => 'Kowalski',
                'address' => "ul. Kolejowa $i m 2",
                'country' => 'Polska',
                'city' => 'Warszawa',
                'telephone' => 123456788 + $i,
                'postcode' => '03-456',
                'deliver' => Deliver::KEY_DPD_COURIER,
                'payment' => Payment::KEY_CASH
            );
        }
        for($i=1; $i<=$numberOfFakeUsers; $i++){
            wrapSaveCheckout($products, $i );
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
