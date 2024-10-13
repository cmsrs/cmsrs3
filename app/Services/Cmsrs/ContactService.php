<?php

namespace App\Services\Cmsrs;

use App\Models\Cmsrs\Contact;

class ContactService extends BaseService
{
    protected $fillable = [
        'email',
        'message'
    ];

    public $columnsAllowedToSort = [
        'id',        
        'email',
        'message',
        'created_at',
        'updated_at'
    ];

    public function getAllData()
    {
        $out = [];
        $contacts = Contact::All();
        foreach ($contacts as $contact) {
            $item = [];
            $item['id'] = $contact->id;
            $item['email'] = $contact->email;
            $item['message'] = $contact->message;
            $item['created_at_format'] = $contact->created_at->format('Y-m-d H:i:s');
            $out[] = $item;
        }
        return $out;
    }

    /**
     * only for demo purpose
     */
    public function wrapCreate($data)
    {
        return Contact::create($data);
    }
}
