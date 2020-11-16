<?php

namespace Tests\Feature;

use App\Contact;
//use Illuminate\Foundation\Testing\DatabaseMigrations;
use Illuminate\Foundation\Testing\RefreshDatabase;

class ContactTest extends Base
{
    use RefreshDatabase;
    public $content1;
    public $content2;    

    public function setUp(): void
    {
        putenv('LANGS="en"');
        putenv('API_SECRET=""');
        parent::setUp();
        $this->createUser();

        $this->content1 = array(
            'email' => 'test@example.com',
            'message' => 'test message - test1'
        );
        $this->content2 = array(
            'email' => 'ja@cmsrs.pl',
            'message' => 'test2'
        );

    }

    protected function tearDown(): void
    {
        parent::tearDown();
        $this->content1 = null;
        $this->content2 = null;

    }

    public  function setTestData()
    {

        $response1 = $this->post('api/contact/en', $this->content1);
        //dd($response1);
        $this->assertTrue($response1->getData()->success);

        $response2 = $this->post('api/contact/en', $this->content2);
        $this->assertTrue($response2->getData()->success);

        $this->assertEquals(2, Contact::All()->count() );
    }

    /** @test */
    public function it_will_get_contact_data()
    {
        $this->setTestData();
        
        $response = $this->get('api/contacts?token='.$this->token );
        $res = $response->getData();
        $this->assertTrue( $res->success );
        $this->assertEquals(2, count($res->data));   

        
        $this->assertEquals($this->content1['email'], $res->data[0]->email);
        $this->assertEquals($this->content2['email'], $res->data[1]->email); 
        
        $this->assertNotEmpty($res->data[0]->created_at_format);
        $this->assertNotEmpty($res->data[1]->created_at_format);        

        $this->assertNotEmpty($res->data[0]->id);        
        $this->assertNotEmpty($res->data[1]->id);
    }

    /** @test */
    public function it_will_delete_contact_data()
    {
        $this->setTestData();
        
        $response = $this->get('api/contacts?token='.$this->token );
        $res = $response->getData();
        $this->assertTrue( $res->success );
        $this->assertEquals(2, count($res->data));        

        $id = $res->data[0]->id;
        $this->assertNotEmpty($res->data[0]->id);

        $response0 = $this->delete('api/contacts/'.$id.'?token='.$this->token);
        $res0 = $response0->getData();
        $this->assertTrue( $res0->success );
  
        $this->assertEquals(1, Contact::All()->count() );
    }

    /** @test */
    public function it_will_create_contact_by_wrap_create()
    {
        $ret = (new Contact)->wrapCreate($this->content1);
        $this->assertEquals(1, Contact::All()->count() );

        $d = Contact::All()->first()->toArray();
        $this->assertEquals($d['email'], $this->content1['email'] );        
    }



}