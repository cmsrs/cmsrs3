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
        putenv('CACHE_ENABLE=true');
        putenv('CACHE_ENABLE_FILE="app/cache_enable_test.txt"');
        parent::setUp();        
        $this->createUser();
        (new Config)->deleteFileCacheEnableIfExist();        
    }

    protected function tearDown(): void
    {
        parent::tearDown();
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
        $this->assertEquals(true, $res->data->cache_enable);
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

    public function test_it_will_clear_cache_docs()    
    {
        $response = $this->get('api/config/clearcache?token='.$this->token);
        $res = $response->getData();
        $this->assertTrue($res->success);
        //print_r($res);
    }


    public function test_it_will_create_sitemap_docs()    
    {
        $response = $this->get('api/config/createsitemap?token='.$this->token);
        $res = $response->getData();
        $this->assertTrue($res->success);        
        //print_r($res);
    }

    public function test_get_test_cache_enable_file()
    {
        $filePath = (new Config)->getCacheEnableFilePath();
        $expectedSuffix = "storage/app/cache_enable_test.txt";
        $this->assertStringEndsWith($expectedSuffix, $filePath);
    }

    public function test_it_will_create_cache_enable_file()
    {
        $createFile = (new Config)->createFileCacheEnableIfNotExist();
        $this->assertTrue($createFile);
    }

    public function test_api_it_will_create_cache_enable_file_two_times_docs()    
    {
        $post = ['action' => 'enable'];
        //print_r($post);
        $response = $this->post('api/config/toggle-cache-enable-file?token='.$this->token, $post);
        $response->assertStatus(200);
        $res = $response->getData();
        $this->assertTrue($res->success);           
        $this->assertTrue((new Config)->isExistCacheFileEnable());
        $this->assertEquals('Cache enabled', $res->message);   
        //print_r($res);

        $response2 = $this->post('api/config/toggle-cache-enable-file?token='.$this->token, $post);
        $res2 = $response2->getData();
        //print_r($res2);
        $this->assertFalse($res2->success);       
        $this->assertTrue((new Config)->isExistCacheFileEnable());
        $this->assertEquals('Cache was already enabled', $res2->error->toggle_cache_enable_file);   
    }
    
    public function test_it_will_create_cache_enable_file_and_delete()
    {
        $createFile = (new Config)->createFileCacheEnableIfNotExist();
        $this->assertTrue((new Config)->isExistCacheFileEnable());
        $this->assertTrue($createFile);

        $deleteFile = (new Config)->deleteFileCacheEnableIfExist();    
        $this->assertTrue($deleteFile);
        $this->assertTrue(!(new Config)->isExistCacheFileEnable());
    }

    public function test_api_it_will_create_cache_enable_file_and_delete_two_times_docs()    
    {
        $post = ['action' => 'enable'];
        $response = $this->post('api/config/toggle-cache-enable-file?token='.$this->token, $post);
        //dd($response);
        $res = $response->getData();
        $this->assertTrue($res->success);           
        $this->assertTrue((new Config)->isExistCacheFileEnable());
        $this->assertEquals('Cache enabled', $res->message);   

        $post2 = ['action' => 'disable'];
        $response2 = $this->post('api/config/toggle-cache-enable-file?token='.$this->token, $post2);
        $response2->assertStatus(200);
        $res2 = $response2->getData();
        $this->assertTrue($res2->success);           
        $this->assertTrue(!(new Config)->isExistCacheFileEnable());
        $this->assertEquals('Cache disabled', $res2->message);
        //print_r($res2);

        $post3 = ['action' => 'disable'];
        $response3 = $this->post('api/config/toggle-cache-enable-file?token='.$this->token, $post3);
        $res3 = $response3->getData();
        $this->assertFalse($res3->success);   
        $this->assertTrue(!(new Config)->isExistCacheFileEnable());        
        $this->assertEquals('Cache was already disabled', $res3->error->toggle_cache_enable_file);
        //print_r($res3);
    }

    public function test_api_toggle_cache_enable_file_with_fake_param()    
    {
        $post = ['action' => 'fake'];
        $response = $this->post('api/config/toggle-cache-enable-file?token='.$this->token, $post);
        $response->assertStatus(400);
        $res = $response->getData();
        $this->assertEquals('Invalid action', $res->error->toggle_cache_enable_file);        
    }

    public function test_api_toggle_cache_enable_file_with_wrong_post()    
    {
        $post = ['test' => 'fake'];
        $response = $this->post('api/config/toggle-cache-enable-file?token='.$this->token, $post);
        $response->assertStatus(400);
        $res = $response->getData();
        $this->assertEquals('Invalid action', $res->error->toggle_cache_enable_file);        
    }

    /**
     * see UserTest the test is the same, but result is different because here is CACHE_ENABLE="true"
     */
    public function test_check_is_cache_enable_for_cache_enable_true()
    {
        $this->assertFalse((new Config)->isExistCacheFileEnable()); //see setup
        $isCache = (new Config)->isCacheEnable();
        $this->assertFalse($isCache);
    }
    
    /**
     * CACHE_ENABLE=true
     */
    public function test_is_cache_enable_it_is_only_one_case_when_cache_is_enable()    
    {
        $this->assertFalse((new Config)->isExistCacheFileEnable()); //see setup
        $post = ['action' => 'enable'];
        $response = $this->post('api/config/toggle-cache-enable-file?token='.$this->token, $post);
        $response->assertStatus(200);
        $res = $response->getData();
        $this->assertTrue($res->success);           
        $this->assertTrue((new Config)->isExistCacheFileEnable());

        $isCache = (new Config)->isCacheEnable();
        $this->assertTrue($isCache);
    }

    public function test_api_is_cache_enable_false_docs()    
    {
        $this->assertFalse((new Config)->isExistCacheFileEnable()); //see setup
        $response = $this->get('api/config/is-cache-enable?token='.$this->token);
        $response->assertStatus(200);
        $res = $response->getData();
        //print_r($res);
        $this->assertTrue($res->success);           
        $this->assertFalse($res->data->cache_enable);
    }

    public function test_api_is_cache_enable_true()    
    {
        $post = ['action' => 'enable'];
        $response = $this->post('api/config/toggle-cache-enable-file?token='.$this->token, $post);
        $response->assertStatus(200);
        $this->assertTrue((new Config)->isExistCacheFileEnable());

        $response = $this->get('api/config/is-cache-enable?token='.$this->token);
        $response->assertStatus(200);
        $res = $response->getData();
        $this->assertTrue($res->success);           
        $this->assertTrue($res->data->cache_enable);
    }

}
