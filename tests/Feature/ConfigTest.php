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
        parent::setUp();
        $this->createUser();
    }

    /** @test */
    public function it_will_get_config()
    {
        $response = $this->get('api/config?token='.$this->token );
        //dd($response);        

        $res = $response->getData();

        $this->assertTrue($res->success);

        //dd($res->data);
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
                'title'     => $page_type,
                'short_title' => $page_type,
                'description' => 'Description... Needed for google',            
                'published' => 1,
                'commented' => 1,
                'type' => $page_type,
                'content' => 'test',
                'menu_id' => null
            ];
            Page::wrapCreate($data);    
            $in = true;
        }
        $this->assertTrue($in);
        $pagesNum = Page::all()->count();
        $this->assertEquals($pagesNum, count($res->data->page_types) );

        /***************/
        /*******langs **/
        /***************/        
        $this->assertTrue( is_array($res->data->langs) );        
        $this->assertEquals(2,  count($res->data->langs) );                
        $this->assertEquals( 'en',  ($res->data->langs[0]) );                
        $this->assertEquals( 'pl',  ($res->data->langs[1]) );                                


    }

}
