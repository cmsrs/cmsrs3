<?php

$domain = 'http://demo-headless.cmsrs.pl';

// get default_lang
$config = "curl -s  -H 'Accept:application/json' -H 'Content-Type:application/json' $domain/api/headless/config";

$out = [];
exec($config, $out);

// print_r($out );
$res1 = json_decode($out[0]);

if ($res1->success) {
    $default_lang = $res1->data->default_lang;
} else {
    exit('something wrong with default_lang');
}

// get menus
$menus = "curl -s -H 'Accept:application/json' -H 'Content-Type:application/json' $domain/api/headless/menus/$default_lang";

$out = [];
exec($menus, $out);

// print_r($out );
$res2 = json_decode($out[0]);

if ($res2->success) {
    $menus_data = $res2->data;
} else {
    exit('something wrong with menus');
}

// get data to main page
$main_page = "curl -s -H 'Accept:application/json' -H 'Content-Type:application/json' $domain/api/headless/pages-type/inner";

$out = [];
exec($main_page, $out);

$res3 = json_decode($out[0]);
if ($res3->success) {
    $main_page_data = $res3->data;
} else {
    exit('something wrong with main page data');
}

// get example page data
$example_page_id = $menus_data[0]->pages[0]->page_id;
$example_page = "curl -s -H 'Accept:application/json' -H 'Content-Type:application/json' $domain/api/headless/page/$example_page_id/$default_lang";

$out = [];
exec($example_page, $out);

print_r($out);
exit;

$res4 = json_decode($out[0]);
if ($res4->success) {
    $example_page_data = $res4->data;
} else {
    exit('something wrong with example page data');
}

print_r('default_lang: '.$default_lang."\n");
print_r("menus: \n");
print_r($menus_data);

print_r("main_page_data: \n");
print_r($main_page_data);

print_r("example_page_data: \n");
print_r($example_page_data);
