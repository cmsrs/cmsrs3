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
        parent::setUp();
        $this->createUser();
    }

    /** @test */
    public function it_will_get_config_docs()
    {
        $response = $this->get('api/config?token='.$this->token);

        $res = $response->getData();

        //dd($res);


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
        /*******cache **/
        /***************/
        $this->assertEquals(false, $res->data->cache_enable);
    }

    /** @test */
    public function it_will_get_exeption_no_langs()
    {
        $config = (new Config);

        // $langs = $config->getLangs();        
        // $this->assertEquals("en", $langs);

        $langs = $config->getLangsFromEnv();
        $this->assertEquals("en", $langs);

        $config->setLangs("");
        $this->expectException(\Exception::class);        
        $langs = $config->getLangsFromEnv();
    }

    /** @test */
    public function it_will_clear_cache()    
    {
        $response = $this->get('api/config/clearcache?token='.$this->token);
        $res = $response->getData();
        $this->assertTrue($res->success);
    }


    /** @test */
    public function it_will_create_sitemap()    
    {
        $response = $this->get('api/config/createsitemap?token='.$this->token);
        $res = $response->getData();
        $this->assertTrue($res->success);        
    }
    
}
