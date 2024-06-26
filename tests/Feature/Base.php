<?php


namespace Tests\Feature;

use Tests\TestCase;
use App\User;
use App\Page;
use App\Menu;
use App\Product;

use App\Translate;
use App\Content;
use Illuminate\Support\Facades\Auth;

class Base extends TestCase
{
    protected $token;


    public function createUser()
    {
        $user = new User([
            'email'    => 'test@email.com',
            'name'     => 'test testowy',
            'role' => User::$role['admin']
       ]);

        $user->password = 'cmsrs';

        User::where('email', 'test@email.com')->delete();
        $user->save();


        $this->token = $this->getTestToken();
    }

    public function createClientUser()
    {
        $user = new User([
            'email'    => 'client@email.com',
            'name'     => 'client testowy',
            'role' => User::$role['client']
       ]);

        $user->password = 'client1234';

        User::where('email', 'client@email.com')->delete();
        $user->save();

        Auth::login($user);
        $this->assertTrue(Auth::check());
        $this->assertAuthenticated();

        return $user;
    }


    public function setUp(): void
    {
        parent::setUp();
    }

    protected function tearDown(): void
    {
        parent::tearDown();
    }


    public function getAllUrlRelatedToMenus($lang)
    {
        //cms link
        //see in: resources/views/includes/header.blade.php
        //this function only use in tests - maybe it will use in code in the future
        $url = [];
        $menus = Menu::All();
        $f0 = false;
        $f1 = false;
        $f2 = false;
        //print_r($menus->toArray());
        foreach ($menus as $menu) {
            $pagesPublishedAndAccess = $menu->pagesPublishedAndAccess()->get();
            //dump($pagesPublishedAndAccess->published);
            if (1 == $pagesPublishedAndAccess->count()) {
                $f0 = true;
                $url[] = $pagesPublishedAndAccess->first()->getUrl($lang);
            } else {
                foreach ($menu->pagesPublishedTree($pagesPublishedAndAccess) as $page) {
                    //dump($page->published);
                    $url[] = $page->getUrl($lang);
                    $f1 = true;
                    if (!empty($page['children']) && !empty($page->published)) {
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

    public function checkProductsPagesByLang($products, $lang)
    {
        $productsDb = (new Product)->getAllProductsWithImages();
        //dd($countProducts);
        $this->assertNotEmpty( count($productsDb));
        $this->assertEquals(count($productsDb), count($products));

        foreach($productsDb as $product ){
            $productName = $product['product_name'][$lang];

            $objProduct = Product::find($product['id']);
            $url = $objProduct->getProductUrl( $lang, $productName);
            $response = $this->get($url);
            $response->assertStatus( empty($objProduct->published) ? 404 : 200);
        }
    }

    public function checkAllPagesByLang($p, $lang, $onlyOneLang = false)
    {
        $urlIn = [];
        $numOfInPages = 0;
        $numOfInAfterLoginPages = 0;
        foreach ($p as $page) {
            $pageTitle = $page->translatesByColumnAndLang('title', $lang);
            $pageShortTitle = $page->translatesByColumnAndLang('short_title', $lang);
            $this->assertNotEmpty($pageTitle);
            $this->assertNotEmpty($pageShortTitle);

            $itemUrlIn = $page->getUrl($lang);

            if($page->after_login){
                $numOfInAfterLoginPages++;
            }
            
            if($page->type == 'inner'){
                $this->assertEmpty($itemUrlIn);
                continue;
            }
            

            $response = $this->get($itemUrlIn);

            if (('login' ==  $page->type) ||  ('register' ==  $page->type) ||  ('forgot' ==  $page->type)  ) { //todo why register and forgot ??
                $response->assertStatus(302);   //redirect to home page, because user is log in
                $pos = strpos($response->getContent(), 'home');
                $this->assertNotEmpty($pos, $pageTitle);
            }elseif ('shoppingsuccess' ==  $page->type){
                $response->assertStatus(404);
            }elseif ( !$page->published){
                $response->assertStatus(404);
                continue; //we don't need $numOfInPages - because this page has 404
            } else {
                $response->assertStatus(200);
                $pos = strpos($response->getContent(), $pageTitle);
                $this->assertNotEmpty($pos, $pageTitle);
            }
            $urlIn[] = $itemUrlIn;
            $numOfInPages++;
        }

        //dd('________________');
        
        //All Url Related To Menus
        $url = $this->getAllUrlRelatedToMenus($lang);
        foreach ($url as $u) {
            $response = $this->get($u);
            $response->assertStatus(200);
        }

        //independent
        $urlPolicy = Page::getFirstPageByType('privacy_policy')->getUrl($lang);
        $response2 = $this->get($urlPolicy);
        $response2->assertStatus(200);
        $url[] = $urlPolicy;

        //main page
        $urlMainPage = Page::getFirstPageByType('main_page')->getUrl($lang);
        $response3 = $this->get($urlMainPage);
        $response3->assertStatus(200);
        $url[] = $urlMainPage;

        //login
        $urlLogin = Page::getFirstPageByType('login')->getUrl($lang);
        $response3 = $this->get($urlLogin);
        $response3->assertStatus(302);
        $url[] = $urlLogin;

        //register
        $urlRegister = Page::getFirstPageByType('register')->getUrl($lang);
        $response3 = $this->get($urlRegister);
        $response3->assertStatus(302); // why 302 ??
        $url[] = $urlRegister;

        //checkout
        $urlCheckout = Page::getFirstPageByType('checkout')->getUrl($lang);
        $response3 = $this->get($urlCheckout);
        $response3->assertStatus(200);
        $url[] = $urlCheckout;

        //home
        $urlHome = Page::getFirstPageByType('home')->getUrl($lang);
        $response3 = $this->get($urlHome);
        $response3->assertStatus(200);
        $url[] = $urlHome;

        //pShoppingSuccess
        $urlShoppingSuccess = Page::getFirstPageByType('shoppingsuccess')->getUrl($lang);
        $response3 = $this->get($urlShoppingSuccess);
        $response3->assertStatus(404); //because there is no checkout_id in session
        $url[] = $urlShoppingSuccess;

        //pSearch
        $urlSearch = Page::getFirstPageByType('search')->getUrl($lang);
        $response3 = $this->get($urlSearch);
        $response3->assertStatus(200);
        $url[] = $urlSearch;
        
        //pForgot
        $urlForgot = Page::getFirstPageByType('forgot')->getUrl($lang);
        $response3 = $this->get($urlForgot);
        $response3->assertStatus(302); // why 302 ??
        $url[] = $urlForgot;


        $this->assertEquals($numOfInPages, count($url));

        foreach ($url as $uu) {
            $isInTable = in_array($uu, $urlIn);
            $this->assertTrue($isInTable);
        }

        //I am lazy so i test sitemap for one lang
        if($onlyOneLang){
            $sitemapFile = public_path('/sitemap.txt');

            if (file_exists($sitemapFile)) {
                unlink($sitemapFile);
            }
            $this->assertFileDoesNotExist($sitemapFile);
    
            $this->artisan('command:create-site-map');
            $this->assertFileExists($sitemapFile);
    
            $fileContent = file($sitemapFile);
    
            $this->assertEquals($numOfInPages - $numOfInAfterLoginPages, count($fileContent));
        }
    }



    public function getTestToken()
    {
        $response = $this->post('api/login', [
            'email'    => 'test@email.com',
            'password' => 'cmsrs'
        ])->getData();

        return $response->data->token;
    }

    public function getFixturePath($file)
    {
        $path = getcwd().'/tests/Feature/fixture/';
        $path = $path.$file;
        $this->assertFileExists($path);

        return $path;
    }
    public function getFixtureBase64($file)
    {
        $path = $this->getFixturePath($file);
        $type = pathinfo($path, PATHINFO_EXTENSION);
        $data = file_get_contents($path);
        $base64 = 'data:image/' . $type . ';base64,' . base64_encode($data);
        return $base64;
    }


    protected function dateToTestParent($menuId)
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
        $this->assertTrue($response1->getData()->success);

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
        $this->assertTrue($response2->getData()->success);

        //check pages:
        $res = $this->get('api/pages?token='.$this->token);
        $r = $res->getData();
        $this->assertTrue($r->success);

        //find parenent page
        $parentId = null;
        $pages = Page::all();
        foreach ($pages as $p) {
            $title = Page::find($p->id)->translatesByColumnAndLang('title', 'en');
            if (PageTest::STR_PARENT_TWO == $title) {
                $parentId = $p->id;
            }
        }

        $this->assertNotEmpty($parentId);
    
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
        $this->assertTrue($response3->getData()->success);

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
        $this->assertTrue($response4->getData()->success);

        $testData5 =
        [
            'title'     => ["en" => PageTest::STR_PARENT_TREE ], // 'p5',
            'short_title' => ["en" =>'p55'],
            'published' => 1,
            'type' => 'cms',
            'content' => ["en" =>'pppppppp5'],
            'menu_id' =>  $menuId
        ];
        $response5 = $this->post('api/pages?token='.$this->token, $testData5);
        $this->assertTrue($response5->getData()->success);

        return $parentId;
    }


    protected function getPageTestData()
    {
        $m = (new Menu)->wrapCreate(['name' => ['en' => 'About cmsRS', 'pl' => 'O cmsRS' ] ]);
        $this->assertNotEmpty($m->id);

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
