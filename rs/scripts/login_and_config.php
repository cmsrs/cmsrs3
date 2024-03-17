<?php

//$envFile  = '../../.env';
$envFile  = '.env';
if( !file_exists( $envFile  )  ){
    die( 'cant find env file'  );
}

$env = parse_ini_file(  $envFile  );
$login =  $env["ADM_EMAIL"] ?? die('probem with login');
$pass =  $env["ADM_PASS"] ?? die('probem with pass');

//var_dump( $env );
//die('__________');

$cmdLogin = 'curl  -H "Accept:application/json" -H "Content-Type:application/json" -XPOST  "http://127.0.0.1:8000/api/login" -d \'{ 
    "email": "'.$login.'", 
    "password": "'.$pass.'"
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

