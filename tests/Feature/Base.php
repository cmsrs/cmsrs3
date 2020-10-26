<?php


namespace Tests\Feature;

use Tests\TestCase;
use App\User;
use App\Page;
use App\Menu;

use App\Translate;
use App\Content;

class Base extends TestCase
{

  protected $token;


  public function createUser()
  {

      $user = new User([
           'email'    => 'test@email.com',
           'name'     => 'test testowy',
           //'password' => 'cmsrs'
          'role' => User::$role['admin']
       ]);

      $user->password = 'cmsrs';

      User::where('email',  'test@email.com')->delete();
      $user->save();


      $this->token = $this->getTestToken();
  }



  public function setUp(): void
  {
      parent::setUp();


  }

    protected function tearDown(): void
    {
        parent::tearDown();

        //echo "ddddddddd";
        //$u = User::where('email',  'test@email.com')->delete();
    }


    public function getAllCmsUrl( $lang )
    {
      //cms link
      //see in: resources/views/includes/header.blade.php
      //this function only use in tests - maybe it will use in code in future
      $url = [];
      $menus = Menu::All();
      $f0 = false;
      $f1 = false;      
      $f2 = false;            
      //print_r($menus->toArray());
      foreach ($menus as $menu) { 
        $pagesPublishedAndAccess = $menu->pagesPublishedAndAccess()->get();
        if( 1 == $pagesPublishedAndAccess->count() ){ 
          $f0 = true;
          $url[] = $pagesPublishedAndAccess->first()->getUrl($lang);
        }else{
          foreach ($menu->pagesPublishedTree($pagesPublishedAndAccess) as $page) {
                $url[] = $page->getUrl($lang);
                $f1 = true;
                if( !empty($page['children']) && !empty($page->published) ){
                    foreach ($page['children'] as $p) {
                        $f2 = true;                      
                        $url[] = $p->getUrl($lang);
                    }
                }
          }
        }
      }
      $this->assertTrue($f0);
      $this->assertTrue($f1);
      $this->assertTrue($f2);

      return $url;
    }



  public function getTestToken()
  {
    $response = $this->post('api/login', [
        'email'    => 'test@email.com',
        'password' => 'cmsrs'
    ])->getData();

    return $response->data->token;
  }

  public function getFixturePath($file){
    $path = getcwd().'/tests/Feature/fixture/';
    //if($file){
    $path = $path.$file;
    $this->assertFileExists($path);
    //}

    return $path;
  }
  public function getFixtureBase64($file){
    $path = $this->getFixturePath($file);
    $type = pathinfo($path, PATHINFO_EXTENSION);
    $data = file_get_contents($path);
    $base64 = 'data:image/' . $type . ';base64,' . base64_encode($data);
    return $base64;
  }


  protected function dateToTestParent( $menuId )
  {
    $this->assertNotEmpty($menuId);
    $testData1 =
    [
         'title'     => ["en" => 'test p1'],
         'short_title' => ["en" => 'p11'],
         'published' => 1,
         'type' => 'cms',
         'content' => ["en" => 'ppp1'],
         'menu_id' =>  $menuId
    ];
    $response1 = $this->post('api/pages?token='.$this->token, $testData1);
    $this->assertTrue( $response1->getData()->success );

    $testData2 =
    [
         'title' =>  ["en" =>PageTest::STR_PARENT_TWO],
         'short_title' => ["en" =>'p22'],
         'published' => 1,
         'type' => 'cms',
         'content' => ["en" =>'parent page ppp2'],
         'menu_id' =>  $menuId
    ];
    $response2 = $this->post('api/pages?token='.$this->token, $testData2);
    $this->assertTrue( $response2->getData()->success );    

    //check pages:
    $res = $this->get('api/pages?token='.$this->token );
    $r = $res->getData();
    $this->assertTrue( $r->success );

    //find parenent page    
    $parentId = null;
    $pages = Page::all();
    foreach($pages as $p){
        $title = Page::find($p->id)->translatesByColumnAndLang( 'title', 'en' );
        if(PageTest::STR_PARENT_TWO == $title){
            $parentId = $p->id;
        }
    }

    $this->assertNotEmpty($parentId);
    
    // $parentId = $r->data[2]->id;
    // $this->assertEquals( PageTest::STR_PARENT_TWO, Page::find($parentId)->translatesByColumnAndLang( 'title', 'en' ) );
    // $this->assertNotEmpty($parentId);

    $testData3 =
    [
         'title'     => ["en" => PageTest::STR_CHILD_ONE],
         'short_title' => ["en" =>'p33'],
         'published' => 1,
         'type' => 'cms',
         'content' => ["en" =>'child page ppp1'],
         'page_id' => $parentId,
         'menu_id' =>  $menuId
    ];
    $response3 = $this->post('api/pages?token='.$this->token, $testData3);
    $this->assertTrue( $response3->getData()->success );        

    $testData4 =
    [
         'title'     => ["en" =>PageTest::STR_CHILD_TWO],
         'short_title' => ["en" =>'p44'],
         'published' => 1,
         'type' => 'cms',
         'content' => ["en" => 'child page ppp2'],
         'page_id' => $parentId,
         'menu_id' =>  $menuId
    ];
    $response4 = $this->post('api/pages?token='.$this->token, $testData4);
    $this->assertTrue( $response4->getData()->success );        

    $testData5 =
    [
         'title'     => ["en" => PageTest::STR_PARENT_TREE ], // 'p5',
         'short_title' => ["en" =>'p55'],
         'published' => 1,
         'type' => 'cms',
         'content' => ["en" =>'pppppppp5'],
         //'page_id' => $parentId,
         'menu_id' =>  $menuId
    ];
    $response5 = $this->post('api/pages?token='.$this->token, $testData5);
    $this->assertTrue( $response5->getData()->success );            

    return $parentId;
  }

/*
  public function setDemoDataMenusAndPages()
  {
      $p = [];
      $appUrl = env('APP_URL');

      $f1 = $this->getFixtureBase64('phpunittest1.jpg');


      $mainPage =
      [
          'title'     => 'cmsRS demo site - title',
          'short_title' => 'cmsRS short title',
          'description' => 'cmsRS demo site - description',
          'published' => 1,
          'commented' => 0,
          'after_login' => 0,
          'type' => 'main_page', //!!
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
          'content' => '$this->getDummyTest()',
          'menu_id' => $m1->id,
          'images' => [
              ['name' => 'me.jpg', 'data' => $f1, 'alt' => 'about me']
          ]
      ];

      $data2p = [
          'title'     => 'About page',
          'short_title' => 'About page',
          'description' => 'Description... Needed for google',            
          'published' => 1,
          'commented' => 1,
          'type' => 'cms',
          'content' => '$this->getDummyTest()',
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

      //Comment::create( ['page_id' => $p2->id,  'content' => 'First test comment - test1' ] );
      //Comment::create( ['page_id' => $p2->id,  'content' => 'Second test comment - test2' ] );

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
              ['name' => 'img1.jpg', 'data' => $f1, 'alt' => 'description img1'  ],
              ['name' => 'img2.jpg', 'data' => $f1, 'alt' => 'description img2'  ],
              ['name' => 'imgc12.jpg', 'data' => $f1, 'alt' => 'description imgc12'  ], 
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
              ['name' => 'imggreece1.jpg', 'data' => $f1, 'alt' => 'description imggreece1'  ],
              ['name' => 'imggreece2.jpg', 'data' => $f1, 'alt' => 'description imggreece2'  ]
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
          'content' => '$this->getDummyTest()',
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
      $p['p5'] = Page::wrapCreate($data5p);

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
      $p['p6'] = Page::wrapCreate($data6p);

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
      $p['p7'] = Page::wrapCreate($data7p);

      $mContact = Menu::wrapCreate(['name' => 'Contact']);        
      $pContact = [
          'title'     => 'Contact form',
          'short_title' => 'Contact',
          'description' => 'Description... Needed for google',
          'published' => 1,
          'commented' => 0,
          'type' => 'contact',
          'content' => '',
          'menu_id' => $mContact->id,
          'images' => [
          ]
      ];
      Page::wrapCreate($pContact);

      $pPrivacy = [
        'title'     => 'Privacy policy',
        'short_title' => 'Privacy policy',
        'description' => 'Description... Needed for google',
        'published' => 1,
        'commented' => 0,
        'type' => 'privacy_policy',
        'content' => 'qwertuyuio qwweertt',
        'images' => [
        ]
    ];
    Page::wrapCreate($pPrivacy);
  }
*/

  protected function getPageTestData()
  {
      $m = (new Menu)->wrapCreate(['name' => ['en' => 'About cmsRS', 'pl' => 'O cmsRS' ] ]);
      $this->assertNotEmpty( $m->id );        

      $data1p = [
          'title'     =>  ['en' => 'About me', 'pl' => 'O mnie', 'es' => 'Fake' ],//require
          'short_title' => ['en' =>'About me', 'pl' => 'O mnie', 'es' => 'Fake'],//require
          'description' => ['en' =>'Description... Needed for google', 'pplll' => 'Opis... potrzebne dla googla', 'es' => 'Fake'],//not require
          'published' => 1,
          'commented' => 0,
          'type' => 'cms',
          'content' => ['en' => 'Content about me', 'pl' => 'Zawartosc o mnie', 'es' => 'Fake' ],//not require
          'menu_id' => $m->id,
          'images' => [
              ['name' => 'phpunittest1.jpg', 'data' => $this->getFixtureBase64('phpunittest1.jpg') ],
              ['name' => 'phpunittest2.jpg', 'data' => $this->getFixtureBase64('phpunittest2.jpg'), 'alt' => ['pl' => 'jakis opis', 'es' => 'Fake' ] ]
            ]
        ];
        return  $data1p;
  }

}
