<?php

namespace Tests\Feature;

use App\Contact;
use Illuminate\Foundation\Testing\RefreshDatabase;

use Tests\TestCase;

class ContactGuestTest  extends TestCase
{
    use RefreshDatabase;

    public function setUp(): void
    {
        putenv('LANGS="en"');
        parent::setUp();
    }

    /** @test */
    public function it_will_create_contact()
    {

        $content = array(
            'email' => 'test@example.com',
            'message' => 'test message - test123'
        );

        $response = $this->post('api/contact', $content);
        $res = $response->getData();
        $this->assertTrue($res->success);
        $this->assertNotEmpty($res->message);
        
        $this->assertEquals(1, Contact::all()->count());
        $item =  Contact::all()->first();
        $this->assertEquals($content['email'], $item->email);
        $this->assertEquals($content['message'], $item->message);            
    }

    /** @test */
    public function it_will_create_contact_wrong_email()
    {

        $content = array(
            'email' => 'test@examplecom1',
            'message' => 'test message - test123'
        );

        $response = $this->post('api/contact', $content);

        //dd($response);
        $res = $response->getData();
        $this->assertFalse($res->success);                
        $this->assertNotEmpty($res->error);                        
    }

    /** @test */
    public function it_will_create_contact_wrong_email_empty()
    {

        $content = array(
            'email' => '',
            'message' => 'test message - test123'
        );

        $response = $this->post('api/contact', $content);

        //dd($response);
        $res = $response->getData();
        $this->assertFalse($res->success);                
        $this->assertNotEmpty($res->error);                        
    }

    /** @test */
    public function it_will_create_contact_wrong_message()
    {

        $content = array(
            'email' => 'test@example.com',
            'message' => str_repeat("5", 501)
        );

        $response = $this->post('api/contact', $content);

        //dd($response);
        $res = $response->getData();
        $this->assertFalse($res->success);        
        $this->assertNotEmpty($res->error);                
    }
    /** @test */
    public function it_will_create_contact_wrong_message_empty()
    {

        $content = array(
            'email' => 'test@example.com',
            'message' => ''
        );

        $response = $this->post('api/contact', $content);

        //dd($response);
        $res = $response->getData();
        $this->assertFalse($res->success);        
        $this->assertNotEmpty($res->error);                        
    }


}
