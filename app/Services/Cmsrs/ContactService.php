<?php

namespace App\Services\Cmsrs;

use App\Models\Cmsrs\Contact;

class ContactService extends BaseService
{
    /** @var array<int, string> */
    protected $fillable = [
        'email',
        'message',
    ];

    /** @var array<int, string> */
    public $columnsAllowedToSort = [
        'id',
        'email',
        'message',
        'created_at',
        'updated_at',
    ];

    /**
     * @return array<int, array<string, mixed>>
     */
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
     * @param  array<string, string>  $data
     *                                       only for demo purpose
     */
    public function wrapCreate(array $data): Contact
    {
        return Contact::create($data);
    }
}
