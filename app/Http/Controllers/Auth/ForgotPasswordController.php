<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Foundation\Auth\SendsPasswordResetEmails;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Log;
use App\Page;
use App\Config;
use App\Menu;
use App;


class ForgotPasswordController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Password Reset Controller
    |--------------------------------------------------------------------------
    |
    | This controller is responsible for handling password reset emails and
    | includes a trait which assists in sending these notifications from
    | your application to your users. Feel free to explore this trait.
    |
    */

    use SendsPasswordResetEmails;    
    /*
    use SendsPasswordResetEmails{
        sendResetLinkEmail as traitSendResetLinkEmail;
    }
    */
    

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $demoStatus = env('DEMO_STATUS', false);
        if($demoStatus){
            echo "Not permission";
            die();
        }

        $this->menus = Menu::all()->sortBy('position'); //TODO cached
        $this->langs = (new Config)->arrGetLangs();
        

        $this->middleware('guest');
    }

    /**
     * helper function
     */
    /*
    public function mailTestRs()
    {
        $to_name = 'R S';
        $to_email = 'test@yahoo.com';
        $data = array('name'=>"Sam Jose", "body" => "Test mail");
        Mail::send('emails', $data, function($message) use ($to_name, $to_email) {
            $message->to($to_email, $to_name)->subject('Artisans Web Testing Mail');
            $message->from('test@gmail.com','Artisans Web');
        });
    } 
    */   

    public function showLinkRequestForm($lang = null)
    {
        $page = Page::getFirstPageByType('forgot');
        if(!$page){
            Log::error('if you want this page you have to add page in type forgot');
            abort(404);
        }

        if(empty($lang)){
            $lang = $this->langs[0];
        }
        App::setLocale($lang);
        
        $data = $page->getDataToView( [
            'view' => 'forgot',
            'lang' => $lang,
            'langs' => $this->langs,
            'menus' => $this->menus
        ]);
        
        return view('auth.passwords.email', $data);
    }
    


}
