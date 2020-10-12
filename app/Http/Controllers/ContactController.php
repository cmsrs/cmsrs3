<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Contact;
use App\Mail\OrderShipped;
use Validator;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Log;


class ContactController extends Controller
{

  private $validationRules = [
      //'email' => 'email|required',
      'email'=> 'required|regex:/^[a-zA-Z0-9\.\-_]+\@[a-zA-Z0-9\.\-_]+\.[a-z]{2,4}$/D',
      //'email'=> 'required|regex:/(.+)@(.+)\.(.+)/i',
      'message' => 'max:500|required'
  ];

  public function create(Request $request)
  {

    $data = $request->only(
        'email',
        'message'
    );

    $validator = Validator::make($data, $this->validationRules);


    if($validator->fails()) {
        return response()->json(['success'=> false, 'error'=> $validator->messages()], 200);
    }

    try{
      $contact = Contact::create( $data );
      if( empty($contact->id)){
        throw new \Exception("I cant get contact id");
      }

    } catch (\Exception $e) {
      Log::error('contact add ex: '.$e->getMessage().' line: '.$e->getLine().'  file: '.$e->getFile() ); 
      return response()->json(['success'=> false, 'error'=> 'Add contact problem, details in the log file.'], 200); 
    }

    return response()->json(['success'=> true, 'message' => 'Thank you for using the contact form'  ]);
  }

}