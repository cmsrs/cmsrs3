<?php

namespace App\Http\Controllers;

use App;
use App\Models\Cmsrs\Contact;
use App\Services\Cmsrs\ConfigService;
use App\Services\Cmsrs\ContactService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Mail;
use Validator;

class ContactController extends Controller
{
    private $validationRules = [
        'email' => 'required|regex:/^[a-zA-Z0-9\.\-_]+\@[a-zA-Z0-9\.\-_]+\.[a-z]{2,4}$/D',
        'message' => 'max:500|required',
    ];

    public function create(Request $request, $lang)
    {
        $langs = (new ConfigService)->arrGetLangs();
        if (! in_array($lang, $langs)) {
            abort(404);
        }
        App::setLocale($lang);

        $token = $request->get('token');

        $data = $request->only(
            'email',
            'message'
        );

        $validator = Validator::make($data, $this->validationRules);

        if ($validator->fails()) {
            return response()->json(['success' => false, 'error' => $validator->messages()], 200);
        }

        $rePriv = env('GOOGLE_RECAPTCHA_PRIV', '');
        $rePublic = env('GOOGLE_RECAPTCHA_PUBLIC', '');
        //google recaptcvha
        if (! empty($rePriv) && ! empty($rePublic)) {
            $googleAns = empty($token) ? '0' : $token;
            $secret = $rePriv;
            $ch = curl_init();

            curl_setopt($ch, CURLOPT_URL, 'https://www.google.com/recaptcha/api/siteverify');
            curl_setopt($ch, CURLOPT_POST, 1);
            curl_setopt(
                $ch,
                CURLOPT_POSTFIELDS,
                "secret=$secret&response=$googleAns"
            );

            // Receive server response ...
            curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

            $server_output = curl_exec($ch);

            curl_close($ch);

            $googleReposnse = json_decode($server_output);
            if (empty($googleReposnse->success)) {
                return response()->json(['success' => false, 'error' => 'Wrong reCatchap'], 200);
            }
        }

        try {
            $contact = Contact::create($data);
            if (empty($contact->id)) {
                throw new \Exception('I cant get contact id');
            }
        } catch (\Exception $e) {
            Log::error('contact add ex: '.$e->getMessage().' line: '.$e->getLine().'  file: '.$e->getFile());

            return response()->json(['success' => false, 'error' => 'Add contact problem, details in the log file.'], 200);
        }

        try {
            $contactEmail = env('CONTACT_EMAIL', '');
            if (! empty($contactEmail)) {

                //UWAGA!! - specjalnie zaczyna ten string od lewej!!!!
                $bodyMsg = 'email: '.$data['email'].'
message: '.$data['message'];

                Mail::raw($bodyMsg, function ($message) use ($contactEmail) {
                    $message->to($contactEmail)
                        ->subject('Message form contact form');
                });
            }
        } catch (\Exception $e) {
            //if mail not send nothing happen - only log
            Log::error('contact add (send email) ex: '.$e->getMessage().' line: '.$e->getLine().'  file: '.$e->getFile());
        }

        return response()->json(['success' => true, 'message' => __('Thank you for using the contact form')]);
    }

    public function index()
    {
        $contact = (new ContactService)->getAllData();

        return response()->json(['success' => true, 'data' => $contact], 200);
    }

    public function getItemsWithPaginateAndSort(Request $request, $column, $direction)
    {
        $search = $request->input('search', null);
        if ($search) {
            $search = '%'.trim($search).'%';
        }

        $objContact = new Contact;

        if (! in_array($column, $objContact->columnsAllowedToSort)) {
            return response()->json([
                'success' => false,
                'error' => 'available columns to sort contact message: '.implode(',', $objContact->columnsAllowedToSort),
            ], 404);
        }

        if (! in_array($direction, ConfigService::getAvailableSortingDirection())) {
            return response()->json([
                'success' => false,
                'error' => 'available direction to sort: '.implode(',', ConfigService::getAvailableSortingDirection()),
            ], 404);
        }

        $paginationPerPage = ConfigService::getPagination();
        $contacts = $objContact
            ->when($search, function ($query) use ($search) {
                return $query->where(function ($query) use ($search) {
                    $query->where('email', 'like', $search)
                        ->orWhere('message', 'like', $search);
                });
            })
            ->orderBy($column, $direction)
            ->paginate($paginationPerPage);

        return response()->json(['success' => true, 'data' => $contacts], 200);
    }

    public function delete(Request $request, $id)
    {
        $contact = Contact::find($id);

        if (empty($contact)) {
            return response()->json(['success' => false, 'error' => 'Contact not find'], 200);
        }

        $res = $contact->delete();

        if (empty($res)) {
            return response()->json(['success' => false, 'error' => 'Contact delete problem'], 200);
        }

        return response()->json(['success' => true], 200);
    }
}
