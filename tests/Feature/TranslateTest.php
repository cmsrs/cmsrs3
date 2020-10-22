<?php

namespace Tests\Feature;

use App\Page;
use App\Menu;
use App\Image;
use App\Translate;
use App\Content;


//use App\User;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Str;
//use Tests\TestCase;

class TranslateTest extends Base
{
    //use DatabaseMigrations;
    use RefreshDatabase;


    public function setUp(): void
    {
        putenv('LANGS="en,pl"');
        parent::setUp();

        $this->createUser();
    }

    protected function tearDown(): void
    {
        parent::tearDown();
    }

    /*********************/
    /****general *********/
    /*********************/

    /** @test */
    public function  get_arr_langs()
    {
        $translate = new Translate;
        $arrLangs = $translate->getArrLangs();
        $this->assertTrue(is_array($arrLangs));
        $this->assertEquals(2, count($arrLangs));

        $arrLangTest = ['en'];
        $translate->setArrLangs($arrLangTest);
        $arrLangs2 = $translate->getArrLangs();        
        $this->assertSame($arrLangTest, $arrLangs2);
    }

    /*******************/
    /******* Menu ******/
    /*******************/    

    /** @test */
    public function menu_wrap_create()
    {
        $m = (new Menu)->wrapCreate(['name' => ['en' => 'About cmsRS', 'pl' => 'O cmsRS' ] ]);
        $this->assertNotEmpty( $m->id );        
    }

    /*
    public function menu_translate_wrap_create_ok_1()
    {
        $data = ['name' => ['en' => 'About cmsRS', 'pl' => 'O cmsRS', 'es' => 'Fake' ] ];
        //wrapCreate($data, $objTranslate = null ) 


        $menu = Menu::CreateMenu($data);
        $this->assertNotEmpty( $menu->id );

        $translate = new Translate;
        $ret = $translate->wrapCreate( [ 'menu_id' => $menu->id, 'data' => $data ] );
        $this->assertTrue( $ret );

        $countItem = Translate::query()->where('menu_id', $menu->id )->where('column', 'name' )->count();
        $this->assertEquals(2, $countItem);
    }
    */

    /** @test */
    public function menu_translate_wrap_create_ok_1b()
    {
        $data = ['name' => ['en' => 'About cmsRS', 'pl' => 'O cmsRS', 'es' => 'Fake' ] ];
        //wrapCreate($data, $objTranslate = null ) 


        $menu = (new Menu)->wrapCreate($data);

        // $this->assertNotEmpty( $menu->id );
        // $translate = new Translate;
        // $ret = $translate->wrapCreate( [ 'menu_id' => $menu->id, 'data' => $data ] );
        // $this->assertTrue( $ret );

        $countItem = Translate::query()->where('menu_id', $menu->id )->where('column', 'name' )->count();
        $this->assertEquals(2, $countItem);
    }

    /*
    public function menu_translate_wrap_create_ok_2()
    {
        $data = ['name' => ['pl' => 'O cmsRS', 'en' => 'fake' ] ];
        $menu = Menu::CreateMenu($data);
        $this->assertNotEmpty( $menu->id );

        $translate = new Translate;
        $translate->setArrLangs(['pl']);
        $ret = $translate->wrapCreate( [ 'menu_id' => $menu->id, 'data' => $data ] );
        $this->assertTrue( $ret );

        $countItem = Translate::query()->where('menu_id', $menu->id )->where('column', 'name' )->count();
        $this->assertEquals(1, $countItem);
    }
    */

    /** @test */
    public function menu_translate_wrap_create_ok_2b()
    {
        $data = ['name' => ['pl' => 'O cmsRS', 'en' => 'fake' ] ];

        $translate = new Translate;
        $translate->setArrLangs(['pl']);

        $objMenu = new Menu;
        $objMenu->setTranslate( $translate );

        $menu = $objMenu->wrapCreate($data);
        //$this->assertNotEmpty( $menu->id );

        //$ret = $translate->wrapCreate( [ 'menu_id' => $menu->id, 'data' => $data ] );
        //$this->assertTrue( $ret );

        $countItem = Translate::query()->where('menu_id', $menu->id )->where('column', 'name' )->count();
        $this->assertEquals(1, $countItem);
    }


    /** @test */
    public function menu_translate_wrap_create_wrong_1()
    {
        $data = ['name' => ['en' => 'About cmsRS' ] ];

        $this->expectException(\Exception::class);
        $menu = (new Menu)->wrapCreate($data);
        // $menu = Menu::CreateMenu($data);
        // $this->assertNotEmpty( $menu->id );

        // $this->expectException(\Exception::class);
        // $translate = new Translate;
        // $ret = $translate->wrapCreate( [ 'menu_id' => $menu->id, 'data' => $data ] );

        // $countItem = Translate::query()->where('menu_id', $menu->id )->where('column', 'name' )->count();
        // $this->assertEquals(0, $countItem);
        
    }

    /** @test */
    public function menu_translate_wrap_create_wrong_2()
    {
        $data = ['name' => ['en' => 'About cmsRS', 'ppllll' => 'O cmsrs' ] ];

        $this->expectException(\Exception::class);
        $menu = (new Menu)->wrapCreate($data);

        // $menu = Menu::CreateMenu($data);
        // $this->assertNotEmpty( $menu->id );

        // $this->expectException(\Exception::class);
        // $translate = new Translate;
        // $ret = $translate->wrapCreate( [ 'menu_id' => $menu->id, 'data' => $data ] );

        // $countItem = Translate::query()->where('menu_id', $menu->id )->where('column', 'name' )->count();
        // $this->assertEquals(0, $countItem);
    }

    /** @test */
    public function menu_translate_wrap_create_wrong_3()
    {
        $data = ['nameFake' => ['en' => 'About cmsRS', 'pl' => 'O cmsrs' ] ];

        $this->expectException(\Exception::class);
        $menu = (new Menu)->wrapCreate($data);

        // $menu = Menu::CreateMenu($data);
        // $this->assertNotEmpty( $menu->id );

        // $this->expectException(\Exception::class);
        // $translate = new Translate;
        // $ret = $translate->wrapCreate( [ 'menu_id' => $menu->id, 'data' => $data ] );

        // $countItem = Translate::query()->where('menu_id', $menu->id )->where('column', 'name' )->count();
        // $this->assertEquals(0, $countItem);        
    }

    /*******************/
    /**Page & Images****/
    /*******************/    
    
    /** @test */
    public function page_translate_string_data()
    {
        $m = (new Menu)->wrapCreate(['name' => ['en' => 'About cmsRS', 'pl' => 'O cmsRS' ] ]);
        $this->assertNotEmpty( $m->id );        

        $data1p = [
            'title'     =>  "['en' => 'About me', 'pl' => 'O mnie', 'es' => 'Fake' ],//require",
            'short_title' => "['en' =>'About me', 'pl' => 'O mnie', 'es' => 'Fake'],//require",
            'description' => "['en' =>'Description... Needed for google', 'pplll' => 'Opis... potrzebne dla googla', 'es' => 'Fake'],//not require",
            'published' => 1,
            'commented' => 0,
            'type' => 'cms',
            'content' => 'test1234',
            'menu_id' => $m->id,
            'images' => [
                ['name' => 'phpunittest1.jpg', 'data' => $this->getFixtureBase64('phpunittest1.jpg') ],
                ['name' => 'phpunittest2.jpg', 'data' => $this->getFixtureBase64('phpunittest2.jpg'), 'alt' => ['pl' => 'jakis opis', 'es' => 'Fake' ] ]
              ]
          ];

          $this->expectException(\Exception::class);
          $p = (new Page)->wrapCreate($data1p);
    }
    


    /** @test */
    public function page_translate_wrap_create_ok_1()
    {
        //putenv('LANGS="en,pl"');
        //parent::setUp();
        $data1p = $this->getPageTestData();
        $p = (new Page)->wrapCreate($data1p);
        $this->assertNotEmpty( $p->id );

        $this->assertEquals( 2, Translate::query()->where('page_id', $p->id )->where('column', 'title' )->count() );
        $this->assertEquals( 2, Translate::query()->where('page_id', $p->id )->where('column', 'short_title' )->count() );
        $this->assertEquals( 1, Translate::query()->where('page_id', $p->id )->where('column', 'description' )->count() );
        $this->assertEquals( 2, Content::query()->where('page_id', $p->id )->count() );        


        $this->assertEquals( 1, Translate::query()->whereNotNull('image_id')->where('column', 'alt' )->count());
    }

    /** @test */
    public function page_translate_wrap_create_ok_2()
    {
        $data = $this->getPageTestData();
        unset($data['description']);
        $data['images'] =[
            ['name' => 'phpunittest1.jpg', 'data' => $this->getFixtureBase64('phpunittest1.jpg'), 'alt' => [ 'en' => 'some desc', 'pl' => 'jakis opis', 'es' => 'Fake' ] ],
            ['name' => 'phpunittest2.jpg', 'data' => $this->getFixtureBase64('phpunittest2.jpg'), 'alt' => [ 'en' => 'some desc', 'pl' => 'jakis opis', 'es' => 'Fake' ] ],
            ['name' => 'phpunittest2.jpg', 'data' => $this->getFixtureBase64('phpunittest2.jpg'), 'alt' => [ 'en' => 'some desc2', 'pl' => 'jakis opis2', 'es' => 'Fake2' ] ]            
        ];

        //$page = Page::CreatePage($data);

        $translate = new Translate;
        $translate->setArrLangs(['pl']);

        $objPage = new Page;
        $objPage->setTranslate($translate);

        $page = $objPage->wrapCreate($data, $translate);

        // $translate->wrapCreate( [ 'page_id' => $page->id, 'data' => $data ] );      
  
        // if( !empty($data['images']) && is_array($data['images']) ){
        //   Image::createImages($data['images'], 'page', $page->id);
        // }
  
        $this->assertEquals( 1, Translate::query()->where('page_id', $page->id )->where('column', 'title' )->count() );
        $this->assertEquals( 1, Translate::query()->where('page_id', $page->id )->where('column', 'short_title' )->where('lang', 'pl')->count() );        
        $this->assertEquals( 0, Translate::query()->where('page_id', $page->id )->where('column', 'description' )->count() );                        
        $this->assertEquals( 2, Content::query()->where('page_id', $page->id )->count() ); //not set DI, therefore is 2

        $this->assertEquals( 3, Translate::query()->whereNotNull('image_id')->where('column', 'alt' )->count());        
    }

    /** @test */
    public function page_translate_wrap_create_wrong_1()
    {
        $data1p = $this->getPageTestData();
        unset($data1p['title']);

        $this->expectException(\Exception::class);
        $p = (new Page)->wrapCreate($data1p);

        // $this->assertNotEmpty( $p->id );
        // $this->assertEquals( 0, Translate::query()->where('page_id', $p->id )->where('column', 'title' )->count() );
        // $this->assertEquals( 0, Translate::query()->where('page_id', $p->id )->where('column', 'short_title' )->count() );        
        // $this->assertEquals( 0, Translate::query()->where('page_id', $p->id )->where('column', 'description' )->count() );                        
    }

    /** @test */
    public function page_translate_wrap_create_wrong_2()
    {
        $data1p = $this->getPageTestData();
        $data1p['title'] = ['pl' => 'polska'];

        $this->expectException(\Exception::class);
        $p = (new Page)->wrapCreate($data1p);

        //this is not important because before is exeption
        // $this->assertNotEmpty( $p->id );
        // $this->assertEquals( 10, Translate::query()->where('page_id', $p->id )->where('column', 'title' )->count() );
        // $this->assertEquals( 10, Translate::query()->where('page_id', $p->id )->where('column', 'short_title' )->count() );        
        // $this->assertEquals( 10, Translate::query()->where('page_id', $p->id )->where('column', 'description' )->count() );                        
    }
   
}