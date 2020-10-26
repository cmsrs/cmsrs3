<?php

namespace Tests\Feature;

use Tests\TestCase;
use Illuminate\Foundation\Testing\RefreshDatabase;

use App\Page;
use App\Menu;
use App\Data\Demo;
use Illuminate\Support\Str;


class FrontTest extends Base
{
    use RefreshDatabase;

    private $testData;
    private $testDataMenu;
    private $menuId;
    private $menuObj;    


    public function setUp(): void
    {
        putenv('LANGS="en"');      
        parent::setUp();
        $this->createUser();


        $this->testDataMenu =
        [
             'name'     =>  ['en' => 'test men7 zółć'],
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
            'title' =>  ['en' => 'page 1 test test slug'],
            'short_title' =>  ['en' => 'page1'],
            'published' => 1,
            'position' => 7,
            'type' => 'cms',
            'content' =>  ['en' => 'content test133445'],
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

        //ini_set('memory_limit', '1028M');
        $objDemoData = new Demo;
        $p = $objDemoData->pagesAndMenu( true );

        $lang = 'en';

        /*
        foreach($p as $page){
            $title = $page->translatesByColumnAndLang( 'title', $lang );
            dump($title);
            $u = $page->getUrl($lang);
            dump($u);
        }
        */


        //dump(count($p));


        $url = $this->getAllCmsUrl( 'en' );
        //dump($url);
        //dd('');

        foreach( $url as $u){
            $response = $this->get($u);
            //dump($u);
            $response->assertStatus(200);          
        }

        //independent
        $url2 = Page::getFirstPageByType('privacy_policy' )->getUrl($lang);
        $response2 = $this->get($url2);
        $response2->assertStatus(200);          
        
        //$urlLogin = route('login');
        //$response3 = $this->get($urlLogin);
        //$response3->assertStatus(200);          

    }



    /** @test */
    public function it_will_check_set_up()
    {
      $this->setTestData();
      $response = $this->get('api/pages?token='.$this->token );
      $res = $response->getData();
      $this->assertTrue( $res->success );
      $this->assertEquals( count($res->data), 1);
    }

    /** @test */
    public function it_will_get_main_page()
    {
        //$this->assertTrue( true );
        $response = $this->get('/');
        $response->assertStatus(404);

        $testData2 =
        [
            'title'     =>  ['en' =>'cmsRS'],
            'short_title' =>  ['en' =>'cmsRS'],
            'description' =>  ['en' =>'cmsRS'],
            'published' => 1,
            'commented' => 0,
            'after_login' => 1,
            //'position' => 3,
            'type' => 'main_page',
            'content' =>  ['en' =>'main page'],
            'menu_id' => null,
            'page_id' => null
            //'images' => []
        ];
  
        $response = $this->post('api/pages?token='.$this->token, $testData2);
  
        $res = $response->getData();
        $this->assertTrue( $res->success );      

        $response = $this->get('/');
        $response->assertStatus(200);          
    }


    /** @test */
    public function it_will_get_cms_page0()
    {
        $this->setTestData();
        $title = $this->testData['title']['en'];
        $pageSlug = Str::slug($title);

        $menuName = $this->testDataMenu['name']['en'];
        $menuSlug = Str::slug($menuName);

        $p0 = Page::query()->where('menu_id', $this->menuId)->get()->first();
        $this->assertNotEmpty($p0);
        //$this->assertEquals(1, $p0->count());

        //$url = $p0->getUrl();
        $url =  $p0->getUrl('en');

        //$response = $this->get('/c/'.$menuSlug.'/'.$pageSlug);
        //$response->assertStatus(404);
        
        $response1 = $this->get($url);
        $response1->assertStatus(200);
    }

    /** @test */
    public function it_will_get_cms_page()
    {
        $this->setTestData();      
        $title = $this->testData['title']['en'];
        $pageSlug = Str::slug($title);

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
            'title'     =>  ['en' =>'cmsRS'],
            'short_title' =>  ['en' =>'cmsRS'],
            'description' =>  ['en' =>'cmsRS'],
            'published' => 1,
            'commented' => 0,
            'after_login' => 1,
            //'position' => 3,
            'type' => 'cms',
            'content' =>  ['en' =>'main page'],
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
}