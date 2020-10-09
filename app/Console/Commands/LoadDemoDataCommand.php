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
        $appUrl = env('APP_URL');

        $mainPage =
        [
            'title'     => 'cmsrs demo site',
            'short_title' => 'cmsrs demo site',
            'description' => 'cmsrs demo site',
            'published' => 1,
            'commented' => 0,
            'after_login' => 0,
            'type' => 'main_page',
            'content' => "<h1>cmsRS demo version</h1>
            <div>
                <p class='lead'>The demo version was created for demonstration purposes.<p>
                    <div class='alert alert-danger' role='alert'>Saving, updating, deleting a single record has been disabled.</div>
                    <br><br>
                    <p class='lead'>
                    Login to the admin panel: <a href=\"$appUrl/admin\">$appUrl/admin</a>
                    <br>
                    and customer zone: <a href=\"$appUrl/login\">$appUrl/login</a>
                    <br>
                    <br>
                    user: adm@cmsrs.pl
                    <br>
                    pass: cmsrs123
                    <br>
                    <br>
                    More information: <a title='cmsRS' href='http://www.cmsrs.pl' >http://www.cmsrs.pl</a>
                </p>
            </div>
            ",
            'menu_id' => null,
            'page_id' => null,
            //'images' => []
        ];

        Page::wrapCreate($mainPage);

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
                ['name' => 'me.jpg', 'data' => $this->getTestPhoto( 'about_me/me.jpg' ), 'alt' => 'about me']
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

        $data22pSecret = [
            'title'     =>  'Secret info',
            'short_title' =>  'Secret info',
            'description' => 'Description... Needed for google',            
            'published' => 1,
            'commented' => 0,
            'after_login' => 1,
            'type' => 'cms',
            'content' => 'Secret information after logging in',
            'menu_id' => $m1->id
        ];


        Page::wrapCreate($data1p);
        $p2 = Page::wrapCreate($data2p);
        Page::wrapCreate($data22pSecret);

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
                ['name' => 'img1.jpg', 'data' => $this->getTestPhoto( 'gallery/img1.jpg'), 'alt' => 'description img1'  ],
                ['name' => 'img2.jpg', 'data' => $this->getTestPhoto( 'gallery/img2.jpg'), 'alt' => 'description img2'  ],
                ['name' => 'img3.jpg', 'data' => $this->getTestPhoto( 'gallery/img3.jpg'), 'alt' => 'description img3'  ],
                ['name' => 'img4.jpg', 'data' => $this->getTestPhoto( 'gallery/img4.jpg'), 'alt' => 'description img4'  ],
                ['name' => 'imgb1.jpg', 'data' => $this->getTestPhoto( 'gallery/imgb1.jpg' ), 'alt' => 'description imgb1'  ],
                ['name' => 'imgb2.jpg', 'data' => $this->getTestPhoto( 'gallery/imgb2.jpg' ), 'alt' => 'description imgb2'  ],
                ['name' => 'imgb3.jpg', 'data' => $this->getTestPhoto( 'gallery/imgb3.jpg' ), 'alt' => 'description imgb3'  ],
                ['name' => 'imgb4.jpg', 'data' => $this->getTestPhoto( 'gallery/imgb4.jpg' ), 'alt' => 'description imgb4'  ],

                ['name' => 'imgc1.jpg', 'data' => $this->getTestPhoto( 'gallery/imgc1.jpg' ), 'alt' => 'description imgc1'  ],                
                ['name' => 'imgc2.jpg', 'data' => $this->getTestPhoto( 'gallery/imgc2.jpg' ), 'alt' => 'description imgc2'  ],                
                ['name' => 'imgc3.jpg', 'data' => $this->getTestPhoto( 'gallery/imgc3.jpg' ), 'alt' => 'description imgc3'  ],                
                ['name' => 'imgc4.jpg', 'data' => $this->getTestPhoto( 'gallery/imgc4.jpg' ), 'alt' => 'description imgc4'  ],                
                ['name' => 'imgc5.jpg', 'data' => $this->getTestPhoto( 'gallery/imgc5.jpg' ), 'alt' => 'description imgc5'  ],                
                ['name' => 'imgc6.jpg', 'data' => $this->getTestPhoto( 'gallery/imgc6.jpg' ), 'alt' => 'description imgc6'  ],                
                ['name' => 'imgc7.jpg', 'data' => $this->getTestPhoto( 'gallery/imgc7.jpg' ), 'alt' => 'description imgc7'  ],                
                ['name' => 'imgc8.jpg', 'data' => $this->getTestPhoto( 'gallery/imgc8.jpg' ), 'alt' => 'description imgc8'  ],                
                ['name' => 'imgc9.jpg', 'data' => $this->getTestPhoto( 'gallery/imgc9.jpg' ), 'alt' => 'description imgc9'  ],                
                ['name' => 'imgc10.jpg', 'data' => $this->getTestPhoto( 'gallery/imgc10.jpg' ), 'alt' => 'description imgc10'  ],                
                ['name' => 'imgc11.jpg', 'data' => $this->getTestPhoto( 'gallery/imgc11.jpg' ), 'alt' => 'description imgc11'  ],                
                ['name' => 'imgc12.jpg', 'data' => $this->getTestPhoto( 'gallery/imgc12.jpg' ), 'alt' => 'description imgc12'  ], 
            ]
        ];        
        Page::wrapCreate($data3p);

        $data4p = [
            'title'     => 'Greece',
            'short_title' => 'Greece',
            'description' => 'Description...  needed for google',            
            'published' => 1,
            'commented' => 0,
            'type' => 'gallery',
            'content' => '',
            'menu_id' => $m2->id,
            'images' => [
                ['name' => 'imggreece1.jpg', 'data' => $this->getTestPhoto( 'gallery/greece/imggreece1.jpg'), 'alt' => 'description imggreece1'  ],
                ['name' => 'imggreece2.jpg', 'data' => $this->getTestPhoto( 'gallery/greece/imggreece2.jpg'), 'alt' => 'description imggreece2'  ]
            ]
        ];        
        Page::wrapCreate($data4p);



        $m3 = Menu::wrapCreate(['name' => 'Shop']);
        $data4p = [
            'title'     => 'IT books',
            'short_title' => 'IT books',
            'description' => 'Description... Needed for google',            
            'published' => 1,
            'commented' => 0,
            'type' => 'cms',
            'content' => $this->getDummyTest(),
            'menu_id' => $m3->id
        ];
        $p4 = Page::wrapCreate($data4p);

        $data5p = [
            'title'     => 'PHP books',
            'short_title' => 'PHP books',
            'description' => 'Description... Needed for google',            
            'published' => 1,
            'commented' => 0,
            'type' => 'shop',
            'content' => '',
            'page_id' => $p4->id,
            'menu_id' => $m3->id
        ];
        $p5 = Page::wrapCreate($data5p);

        $data6p = [
            'title'     => 'Java books',
            'short_title' => 'Java books',
            'description' => 'Description... Needed for google',            
            'published' => 1,
            'commented' => 0,
            'type' => 'shop',
            'content' => '',
            'page_id' => $p4->id,            
            'menu_id' => $m3->id
        ];
        $p6 = Page::wrapCreate($data6p);

        $data7p = [
            'title'     => 'English books',
            'short_title' => 'English books',
            'description' => 'Description... Needed for google',            
            'published' => 1,
            'commented' => 0,
            'type' => 'shop',
            'content' => '',
            'menu_id' => $m3->id
        ];
        $p7 = Page::wrapCreate($data7p);

        $products1 = [
            'name' => 'PHP3',
            'sku' => '1/23/4',
            'price' => 11,
            'description' => 'Php book',
            'page_id' => $p5->id,
            'images' =>   [
                ['name' => 'php.jpg', 'data' => $this->getTestPhoto( 'books/php3.jpg' ), 'alt' => 'php3 front' ]                
            ]
        ];
        $products2 = [
            'name' => 'PHP5',
            'sku' => '1/234/4',
            'price' => 30,
            'description' => 'Php5 book',
            'page_id' => $p5->id,
            'images' =>   [
                ['name' => 'php5.jpg', 'data' => $this->getTestPhoto( 'books/php5.jpg' ), 'alt' => 'php5 front' ],
                ['name' => 'php5_back.jpg', 'data' => $this->getTestPhoto( 'books/php5_back.jpg' ), 'alt' => 'php5 back' ],
            ]
        ];
        $products3 = [            
            'name' => 'Java',
            'sku' => '3/13/4',
            'price' => 23,
            'description' => 'Java book',
            'page_id' => $p6->id,
            'images' =>   [
                ['name' => 'java.jpg', 'data' => $this->getTestPhoto( 'books/java.jpg' ), 'alt' => 'java front'  ],
                ['name' => 'java_back.jpg', 'data' => $this->getTestPhoto( 'books/java_back.jpg' ), 'alt' => 'java back'  ],
            ]
        ];
        $products4 = [            
            'name' => 'English',
            'sku' => 'A/3/3/4',
            'price' => 28,
            'description' => 'English book',
            'page_id' => $p7->id,
            'images' =>   [
                ['name' => 'english.jpg', 'data' => $this->getTestPhoto( 'books/english.jpg' ), 'alt' => 'english front' ],
                ['name' => 'english_back.jpg', 'data' => $this->getTestPhoto( 'books/english_back.jpg' ), 'alt' => 'english back' ],
            ]
        ];    

        Product::wrapCreate($products1);
        Product::wrapCreate($products2);        
        Product::wrapCreate($products3);
        Product::wrapCreate($products4);           
           
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
