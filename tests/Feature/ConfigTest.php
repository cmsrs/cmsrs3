<?php

namespace Tests\Feature;

use App\Page;
use App\Menu;
//use App\User;
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
        $response = $this->get('api/config?token='.$this->token );

        $res = $response->getData();

        $this->assertTrue($res->success);

        $this->assertNotEmpty($res->data);

        /***************/
        /**page_types **/
        /***************/        
        $this->assertNotEmpty($res->data->page_types);
        $this->assertTrue( is_array($res->data->page_types) );
        $this->assertEquals('privacy_policy', $res->data->page_types[5] );        

        $in = false;
        foreach($res->data->page_types as $page_type ){
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
            (new Page)->wrapCreate($data);    
            $in = true;
        }
        $this->assertTrue($in);
        $pagesNum = Page::all()->count();
        $this->assertEquals($pagesNum, count($res->data->page_types) );

        /***************/
        /*******langs **/
        /***************/        
        $this->assertTrue( is_array($res->data->langs) );        
        $this->assertEquals(1,  count($res->data->langs) );                
        $this->assertEquals( 'en',  ($res->data->langs[0]) );                

        /***************/
        /*******cache **/
        /***************/        
        $this->assertEquals( false, $res->data->cache_enable );

    }

}
