<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Contact;
use App\Config;
use App\Mail\OrderShipped;
use Validator;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Log;
use App;


class ContactController extends Controller
{
  

  private $validationRules = [
      'email'=> 'required|regex:/^[a-zA-Z0-9\.\-_]+\@[a-zA-Z0-9\.\-_]+\.[a-z]{2,4}$/D',

      //'token' => 'required',
      'message' => 'max:500|required'
  ];

  public function create(Request $request, $lang)
  {

    $langs = (new Config)->arrGetLangs();
    if( !in_array($lang, $langs) ){
        abort(404); 
    }
    App::setLocale($lang);    

    $token = $request->get('token');

    $data = $request->only(
        'email',
        'message'
    );

    
    $validator = Validator::make($data, $this->validationRules);

    if($validator->fails()) {
        return response()->json(['success'=> false, 'error'=> $validator->messages()], 200);
    }

    $rePriv = env('GOOGLE_RECAPTCHA_PRIV', '');
    $rePublic = env('GOOGLE_RECAPTCHA_PUBLIC', '');
    //google recaptcvha
    if( !empty($rePriv) && !empty($rePublic) ){
        $googleAns =  empty( $token) ? '0' :  $token; 
        $secret = "6LdbZ8kZAAAAAOIcLLZy3fL0TMxbHjARHv6Fi47f";
        $ch = curl_init();

        curl_setopt($ch, CURLOPT_URL,"https://www.google.com/recaptcha/api/siteverify");
        curl_setopt($ch, CURLOPT_POST, 1);
        curl_setopt($ch, CURLOPT_POSTFIELDS,
                    "secret=$secret&response=$googleAns");

        // Receive server response ...
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

        $server_output = curl_exec($ch);

        curl_close ($ch);

        $googleReposnse = json_decode(  $server_output  );
        if(empty($googleReposnse->success)){
                return response()->json(['success'=> false, 'error'=> 'Wrong reCatchap'], 200);
        }
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

    return response()->json(['success'=> true, 'message' => __('Thank you for using the contact form') ]);
  }

}
