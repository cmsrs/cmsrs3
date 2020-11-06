<?php
//$conf = parse_ini_file("../../.env");
//die('_____sss____'  );
//
//var_dump(   );


$cmdLogin = 'curl  -H "Accept:application/json" -H "Content-Type:application/json" -XPOST  "http://127.0.0.1:8000/api/login" -d \'{ 
    "email": "adm@cmsrs.pl", 
    "password": "cmsrs123"
}\'';

$out = [];
exec( $cmdLogin, $out  );

//print_r($out );

$res1 = json_decode($out[0]);

if( $res1->success  ){
    $token = $res1->data->token; 
}else{
    die( 'something wrong with login'  );
}

//print_r($token );


$cmdGetConfig = "curl  -H 'Accept:application/json' -H 'Content-Type:application/json' -XGET  'http://127.0.0.1:8000/api/config?token=$token'"; 


$out2 = [];
exec( $cmdGetConfig, $out2  );

print_r( $out2 );

