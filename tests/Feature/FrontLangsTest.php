<?php

namespace Tests\Feature;

use Tests\TestCase;
use Illuminate\Foundation\Testing\RefreshDatabase;

use App\Page;
use App\Menu;
use App\Config;
use App\Data\Demo;
use Illuminate\Support\Str;


class FrontLangsTest extends Base
{
    use RefreshDatabase;

    private $testData;
    private $testDataMenu;
    private $menuId;
    private $menuObj;    
    private $titleEn = 'eeeeeeeeeeeeeeeennnnnnnnnnnnnnnnn';
    private $titlePl = 'pppppppppppppppplllllllllllllllll';
    private $langs;



    public function setUp(): void
    {
        putenv('LANGS="pl,en"');      
        parent::setUp();
        $this->createUser();
        $this->langs = (new Config)->arrGetLangs();



        $this->testDataMenu =
        [
             'name'     =>  ['pl' => 'test men7 zółć',  'en' => 'menu test' ],
             //'position' => 1
        ];
    }

    protected function tearDown(): void
    {
        parent::tearDown();
    }

    private  function setTestData()
    {
        $menu = (new Menu)->wrapCreate($this->testDataMenu);

        $this->menuObj = $menu;
        $this->menuId = $menu->id;        
        $this->assertNotEmpty($this->menuId);

        $this->testData =
        [
            'title' =>  ['en' => 'page 1 test test slug', 'pl' => 'strona testowa' ],
            'short_title' =>  ['en' => 'page1', 'pl' => 'strona testowa' ],
            'published' => 1,
            'position' => 7,
            'type' => 'cms',
            'content' =>  ['en' => 'content test133445', 'pl' => 'strona testowa' ],
            'menu_id' => $this->menuId
        ];

        (new Page)->wrapCreate($this->testData);
    }
    


    /**
     * maybe it will be usefull for sitemap
     * links without: home, login, logout
     */
    /** @test */
    public function it_will_get_all_pages_status()
    {
        ini_set('memory_limit', '1028M');

        $p = (new Demo)->pagesAndMenu( true );

        $this->checkAllPagesByLang($p, 'pl' );        
        $this->checkAllPagesByLang($p, 'en' );

    }



    /** @test */
    public function it_will_check_set_up()
    {
      $this->setTestData();
      $response = $this->get('api/pages?token='.$this->token );
      $res = $response->getData();
      $this->assertTrue( $res->success );
      $this->assertEquals( count($res->data), 1);

      $this->assertEquals(2, count($this->langs));
      $this->assertEquals('pl', $this->langs[0]);
      $this->assertEquals('en', $this->langs[1]);

    }

    /** @test */
    public function it_will_get_main_page()
    {
        //$this->assertTrue( true );
        $response = $this->get('/');
        $response->assertStatus(404);

        $testData2 =
        [
            'title'     =>  ['en' => $this->titleEn, 'pl' => $this->titlePl],
            'short_title' =>  ['en' =>'cmsRS', 'pl' =>'cmsRS'],
            'description' =>  ['en' =>'cmsRS', 'pl' =>'cmsRS'],
            'published' => 1,
            'commented' => 0,
            'after_login' => 1,
            //'position' => 3,
            'type' => 'main_page',
            'content' =>  ['en' =>'main page', 'pl' =>'cmsRS'],
            'menu_id' => null,
            'page_id' => null
            //'images' => []
        ];
  
        $response = $this->post('api/pages?token='.$this->token, $testData2);
  
        $res = $response->getData();
        $this->assertTrue( $res->success );      

        $response1 = $this->get('/');
        $response1->assertStatus(200);          
        $this->assertNotEmpty( strpos( $response1->getContent() ,  $this->titlePl ));

        $response2 = $this->get('/en');
        $response2->assertStatus(200);          
        $this->assertNotEmpty( strpos( $response2->getContent() ,  $this->titleEn ));        
        $this->assertEmpty( strpos( $response2->getContent() ,  $this->titlePl ));                

        $response3 = $this->get('/pl');
        $response3->assertStatus(404);          
        $this->assertEmpty( strpos( $response3->getContent() ,  $this->titlePl ));        
    }


    /** @test */
    public function it_will_get_cms_page0()
    {
        $this->setTestData();

        // $title = $this->testData['title']['en'];
        // $pageSlug = Str::slug($title);
        // $menuName = $this->testDataMenu['name']['en'];
        // $menuSlug = Str::slug($menuName);

        $p0 = Page::query()->where('menu_id', $this->menuId)->get()->first();
        $this->assertNotEmpty($p0);

        //$this->assertEquals(1, $p0->count());
        //$url = $p0->getUrl();

        foreach($this->langs as $lang){
            $url =  $p0->getUrl($lang); 
            //dump($url);
            $this->assertNotEmpty($url);
            $response1 = $this->get($url);
            $response1->assertStatus(200);    
        }
    }

    /** @test */
    public function it_will_get_cms_page()
    {
        $this->setTestData();      
        //$title = $this->testData['title']['en'];
        //$pageSlug = Str::slug($title);

        $menuName = $this->testDataMenu['name']['en'];
        $menuSlug = Str::slug($menuName);

        $p0 = Page::query()->where('menu_id', $this->menuId)->get(); //->toArray();
        $this->assertEquals(1, $p0->count());

        //not working - see this it_will_get_cms_page0 (this work)
        // $response = $this->get('/c/'.$menuSlug.'/'.$pageSlug);
        // $response->assertStatus(404);
        
        // $response1 = $this->get('/'.$menuSlug);
        // $response1->assertStatus(200);


        $testData2 =
        [
            'title'     =>  ['en' =>'cmsRS', 'pl' =>'cmsRS'],
            'short_title' =>  ['en' =>'cmsRS', 'pl' =>'cmsRS'],
            'description' =>  ['en' =>'cmsRS', 'pl' =>'cmsRS'],
            'published' => 1,
            'commented' => 0,
            'after_login' => 1,
            //'position' => 3,
            'type' => 'cms',
            'content' =>  ['en' =>'main page', 'pl' =>'str gl'],
            'menu_id' => $this->menuId,
            'page_id' => null
            //'images' => []
        ];
  
        $response = $this->post('api/pages?token='.$this->token, $testData2);
  
        $res = $response->getData();
        $this->assertTrue( $res->success );      

        $p = Page::query()->where('menu_id', $this->menuId)->get(); //->toArray();
        $this->assertEquals(2, $p->count()  );

        //dd($this->menuObj->slug);
        $i = 0;
        foreach( $p as $pp){
            //$url0 = $pp->getUrl($this->menuObj->slug);
            $url0 = $pp->getUrl('en');            
            $response = $this->get($url0);
            $response->assertStatus(200);
            $i++;
        }
        $this->assertEquals(2, $i );        

        
        $responseB = $this->get('/'.$menuSlug);
        $responseB->assertStatus(404);

    }

    /** @test */
    public function it_will_get_in_page()
    {
        $pPrivacy = [
            'title'     => [ "en" =>'Privacy policy', "pl" => 'polityka prywatnosci' ],
            'short_title' => [ "en" =>'Privacy policy', "pl" => 'polityka prywatnosci'],
            'description' => [ "en" =>'Description... Needed for google', "pl" => 'polityka prywatnosci'],
            'published' => 1,
            'commented' => 0,
            'type' => 'privacy_policy',
            'content' => [ "en" => 'politics ....', "pl" => 'polityka prywatnosci'],
            'images' => [
            ]
        ];

        $p = (new Page)->wrapCreate($pPrivacy);
        $this->assertNotEmpty($p->id );

        foreach($this->langs as $lang){
            $url =  $p->getUrl($lang); 
            //dump($url);
            $this->assertNotEmpty($url);
            $response1 = $this->get($url);
            $response1->assertStatus(200);    
        }
   }





}