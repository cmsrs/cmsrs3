<?php

namespace Tests\Feature;

use App\Contact;
use Illuminate\Foundation\Testing\RefreshDatabase;

use Tests\TestCase;

class ContactTest  extends TestCase
{
    use RefreshDatabase;

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
        
        $this->assertEquals(1, Contact::all()->count());
        $item =  Contact::all()->first();
        $this->assertEquals($content['email'], $item->email);
        $this->assertEquals($content['message'], $item->message);            
    }

}
