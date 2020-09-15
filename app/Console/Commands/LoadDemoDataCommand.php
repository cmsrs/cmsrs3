<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use App\Page;
use App\Menu;
use App\User;
use App\Comment;
use App\Product;

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
        $m1 = Menu::wrapCreate(['name' => 'About']);
        
        $data1p = [
            'title'     => 'About me',
            'short_title' => 'About me',
            'description' => 'Description... Needed for google',
            'published' => 1,
            'commented' => 0,
            'type' => 'cms',
            'content' => $this->getDummyTest(),
            'menu_id' => $m1->id,
            'images' => [
                ['name' => 'me.jpg', 'data' => $this->getTestPhoto( 'about_me/me.jpg' ), 'alt'=>'About me image' ]
            ]
        ];

        $data2p = [
            'title'     => 'About page',
            'short_title' => 'About page',
            'description' => 'Description... Needed for google',            
            'published' => 1,
            'commented' => 1,
            'type' => 'cms',
            'content' => $this->getDummyTest(),
            'menu_id' => $m1->id
        ];

        Page::wrapCreate($data1p);
        $p2 = Page::wrapCreate($data2p);

        Comment::create( ['page_id' => $p2->id,  'content' => 'First test comment - test1' ] );
        Comment::create( ['page_id' => $p2->id,  'content' => 'Second test comment - test2' ] );

        $m2 = Menu::wrapCreate(['name' => 'Gallery']);
        $data3p = [
            'title'     => 'Poland',
            'short_title' => 'Poland',
            'description' => 'Description...  needed for google',            
            'published' => 1,
            'commented' => 0,
            'type' => 'gallery',
            'content' => '',
            'menu_id' => $m2->id,
            'images' => [
                ['name' => 'img1.jpg', 'data' => $this->getTestPhoto( 'gallery/img1.jpg' ), 'alt'=>'gallery image 1' ],
                ['name' => 'img2.jpg', 'data' => $this->getTestPhoto( 'gallery/img2.jpg' ), 'alt'=>'gallery image 2' ],
                ['name' => 'img3.jpg', 'data' => $this->getTestPhoto( 'gallery/img3.jpg' ), 'alt'=>'gallery image 3' ],
                ['name' => 'img4.jpg', 'data' => $this->getTestPhoto( 'gallery/img4.jpg' ), 'alt'=>'gallery image 4' ],                                                
            ]
        ];
        Page::wrapCreate($data3p);

        $m3 = Menu::wrapCreate(['name' => 'Shop']);
        $data4p = [
            'title'     => 'IT books',
            'short_title' => 'IT books',
            'description' => 'Description... Needed for google',            
            'published' => 1,
            'commented' => 0,
            'type' => 'shop',
            'content' => '',
            'menu_id' => $m3->id
        ];
        $p4 = Page::wrapCreate($data4p);

        $products1 = [
            'name' => 'PHP',
            'sku' => '1/23/4',
            'price' => 11,
            'description' => 'Php book',
            'page_id' => $p4->id,
            'images' =>   [
                ['name' => 'php.jpg', 'data' => $this->getTestPhoto( 'books/php.jpg' ), 'alt'=>'php book image' ]
            ]
        ];
        $products2 = [
            'name' => 'Java',
            'sku' => '3/13/4',
            'price' => 23,
            'description' => 'Java book',
            'page_id' => $p4->id,
            'images' =>   [
                ['name' => 'java.jpg', 'data' => $this->getTestPhoto( 'books/java.jpg' ), 'alt'=>'java book image' ]
            ]
        ];
        
        Product::wrapCreate($products1);
        Product::wrapCreate($products2);   
           
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

    private function getTestPhoto( $imgPath )
    {
        $base = base_path().'/rs/demo_data/img/';
        $img = $base.$imgPath;
        if(!file_exists($img)){
            die('no file: '.$img);
        }

        $type = pathinfo($img, PATHINFO_EXTENSION);
        $data = file_get_contents($img);
        $base64 = 'data:image/' . $type . ';base64,' . base64_encode($data);
    
        return $base64;
    }

    private function getDummyTest()
    {    
        return "<b>Lorem Ipsum</b> is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";
    }

}
