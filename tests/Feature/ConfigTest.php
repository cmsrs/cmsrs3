<?php

namespace Tests\Feature;

use App\Page;
use App\Menu;
use App\Config;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use Illuminate\Foundation\Testing\RefreshDatabase;

//use Tests\TestCase;

class ConfigTest extends Base
{
    use RefreshDatabase;

    public function setUp(): void
    {
        putenv('LANGS="en"');
        putenv('API_SECRET=""');
        putenv('CACHE_ENABLE_FILE="app/cache_enable_test.txt"');
        parent::setUp();
        $this->createUser();
        //(new Config)->deleteFileCacheEnableIfExist();
    }


    public function test_it_will_get_config_docs()
    {
        $response = $this->get('api/config?token='.$this->token);
        $res = $response->getData();
        //print_r($res);

        $this->assertTrue($res->success);
        $this->assertNotEmpty($res->data);

        /***************/
        /**page_types **/
        /***************/
        $this->assertNotEmpty($res->data->page_types);
        $this->assertTrue(is_array($res->data->page_types));
        $this->assertEquals('privacy_policy', $res->data->page_types[5]);

        $in = false;
        foreach ($res->data->page_types as $page_type) {
            $data = [
                'title'     => ['en' => $page_type],
                'short_title' => ['en' =>$page_type],
                'description' => ['en' =>'Description... Needed for google'],
                'published' => 1,
                'commented' => 1,
                'type' => $page_type,
                'content' => ['en' =>'test'],
                'menu_id' => null
            ];
            $p = (new Page)->wrapCreate($data);
            $in = true;

            $url = $p->getUrl('en');
            //dump($url);
            $response = $this->get($url);

            $status = ( ('login' === $page_type) ||  ('register' === $page_type ) ||  ('forgot' === $page_type )  ) ? 302 : 200; //I don't understand - todo (why register and forgot??)
            if ('shoppingsuccess' ==  $page_type){
                $status = 404;
            }

            //dump($page_type);
            $response->assertStatus($status);
        }
        $this->assertTrue($in);
        $pagesNum = Page::all()->count();
        $this->assertEquals($pagesNum, count($res->data->page_types));

        /***************/
        /*******langs **/
        /***************/
        $this->assertTrue(is_array($res->data->langs));
        $this->assertEquals(1, count($res->data->langs));
        $this->assertEquals('en', ($res->data->langs[0]));

        /***************/
        /**default_lang*/
        /***************/
        $this->assertEquals('en', $res->data->default_lang);

        /***************/
        /*******cache **/
        /***************/
        $this->assertEquals(false, $res->data->cache_enable);
    }

    public function test_it_will_get_exception_no_langs()
    {
        $config = (new Config);

        // $langs = $config->getLangs();        
        // $this->assertEquals("en", $langs);

        $langs = $config->getLangsFromEnv();
        $this->assertEquals("en", $langs);

        $config->setLangs("");
        //$this->expectException(\Exception::class);        
        $langs = $config->getLangsFromEnv();
        $this->assertEquals( Config::LANG_DEFAULT, $langs);        
    }

    public function test_it_will_clear_cache()    
    {
        $response = $this->get('api/config/clearcache?token='.$this->token);
        $res = $response->getData();
        $this->assertTrue($res->success);
    }


    public function test_it_will_create_sitemap()    
    {
        $response = $this->get('api/config/createsitemap?token='.$this->token);
        $res = $response->getData();
        $this->assertTrue($res->success);        
    }

    public function test_check_is_cache_enable()
    {
        $isCache = (new Config)->isCacheEnable();
        $this->assertFalse($isCache);
    }

    public function test_get_test_cache_enable_file()
    {
        $filePath = (new Config)->getCacheFilePath();
        $expectedSuffix = "storage/app/cache_enable_test.txt";
        $this->assertStringEndsWith($expectedSuffix, $filePath);
    }

    public function test_get_test_create_cache_enable_file_and_delete()
    {
        $createFile = (new Config)->createFileCacheEnableIfNotExist();
        $this->assertFalse($createFile);
        $deleteFile = (new Config)->deleteFileCacheEnableIfExist();    
        $this->assertFalse($deleteFile);
    }

}
