<?php

// change  /app/Http/Middleware/VerifyCsrfToken.php
// disable-csrf-token-in-laravel
// https://stackoverflow.com/questions/37806762/how-to-disable-csrf-token-in-laravel-and-why-we-have-to-disable-it

$id1 = 1;
$qty0a = 12;

$id2 = 2;
$qty1a = 24;

$data =

[
    // '_token' => 'gTXqPBuPTbTz1yKecuMiaX8j5ynB1LiO4ul01PwZ',
    '_token' => 'QZu4Otv3ecTWdCpgaEgRozpYNSpi8zm4LvqzEmPY',
    'products' => [
        0 => [
            'id' => $id1,
            'qty' => $qty0a,
        ],

        1 => [
            'id' => $id2,
            'qty' => $qty1a,
        ],
    ],

    'lang' => 'en',
    'email' => 'client@cmsrs.pl',
    'first_name' => 'Jan',
    'last_name' => 'Kowalski',
    'address' => 'kolejowa 1 m 2',
    'country' => 'Polska',
    'city' => 'Warszawa',
    'telephone' => '1234567123',
    'postcode' => '03-456',
    'deliver' => 'dpd_courier',
    'payment' => 'cash',
];

function httpPost($url, $data)
{
    $curl = curl_init($url);
    curl_setopt($curl, CURLOPT_POST, true);
    curl_setopt($curl, CURLOPT_POSTFIELDS, http_build_query($data));
    curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
    $response = curl_exec($curl);
    curl_close($curl);

    return $response;
}
$ret = httpPost('http://127.0.0.1:8000/post/checkout', $data);
print_r($ret);
