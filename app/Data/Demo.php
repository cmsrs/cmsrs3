<?php

namespace App\Data;

use App\Page;
use App\Menu;
use App\Product;
use App\Comment;

class Demo
{
    private function getPageObj()
    {
        $pageObj = new Page;
        // $pageObj->setTranslate($this->translate);
        // $pageObj->setContent($this->content);
        return $pageObj;
    }

    private function getMenuObj()
    {
        $menuObj = new Menu;
        // $menuObj->setTranslate($this->translate);
        return $menuObj;
    }

    private function getProductObj()
    {
        $productObj = new Product;
        // $productObj->setTranslate($this->translate);
        return $productObj;
    }

    private function imgUnit1()
    {
        $images = [
            ['name' => 'phpunittest1.jpg', 'data' => $this->getTestPhoto('test/phpunittest1.jpg'), 'alt' => [ "en" =>'phpunittest1', "pl" =>'phpunittest1'  ]]
        ];
        return $images;
    }

    private function imgUnit2()
    {
        $images = [
            ['name' => 'phpunittest1.jpg', 'data' => $this->getTestPhoto('test/phpunittest1.jpg'), 'alt' => [ "en" =>'phpunittest1', "pl" =>'phpunittest1'  ]],
            ['name' => 'phpunittest2.jpg', 'data' => $this->getTestPhoto('test/phpunittest2.jpg'), 'alt' => [ "en" =>'phpunittest2', "pl" =>'phpunittest1'  ]]
        ];
        return $images;
    }

    private function getTestImg($unitTest)
    {
        if (!$unitTest) {
            $img = [
                ['name' => 'me.jpg', 'data' => $this->getTestPhoto('about_me/me.jpg'), 'alt' => [ "en" =>'about me', "pl" =>'o mnie'  ]]
            ];
            $images = [
                ['name' => 'img1.jpg', 'data' => $this->getTestPhoto('gallery/img1.jpg'), 'alt' => [ "en" =>'description img1', "pl" =>'opis img1'  ]],
                ['name' => 'img2.jpg', 'data' => $this->getTestPhoto('gallery/img2.jpg'), 'alt' => [ "en" =>'description img2', "pl" =>'opis img2'  ]],
                ['name' => 'img3.jpg', 'data' => $this->getTestPhoto('gallery/img3.jpg'), 'alt' => [ "en" =>'description img3', "pl" =>'opis img3'  ]],
                ['name' => 'img4.jpg', 'data' => $this->getTestPhoto('gallery/img4.jpg'), 'alt' => [ "en" =>'description img4', "pl" =>'opis img4'  ]],
                ['name' => 'imgb1.jpg', 'data' => $this->getTestPhoto('gallery/imgb1.jpg'), 'alt' => [ "en" =>'description imgb1', "pl" =>'opis imgb1' ]],
                ['name' => 'imgb2.jpg', 'data' => $this->getTestPhoto('gallery/imgb2.jpg'), 'alt' => [ "en" =>'description imgb2', "pl" =>'opis imgb2'  ]],
                ['name' => 'imgb3.jpg', 'data' => $this->getTestPhoto('gallery/imgb3.jpg'), 'alt' => [ "en" =>'description imgb3', "pl" =>'opis imgb3'  ]],
                ['name' => 'imgb4.jpg', 'data' => $this->getTestPhoto('gallery/imgb4.jpg'), 'alt' => [ "en" =>'description imgb4', "pl" =>'opis imgb4'  ]],
                ['name' => 'imgc1.jpg', 'data' => $this->getTestPhoto('gallery/imgc1.jpg'), 'alt' => [ "en" =>'description imgc1', "pl" =>'opis imgc1'  ]],
                ['name' => 'imgc2.jpg', 'data' => $this->getTestPhoto('gallery/imgc2.jpg'), 'alt' => [ "en" =>'description imgc2', "pl" =>'opis imgc2'  ]],
                ['name' => 'imgc3.jpg', 'data' => $this->getTestPhoto('gallery/imgc3.jpg'), 'alt' => [ "en" =>'description imgc3', "pl" =>'opis imgc3'  ]],
                ['name' => 'imgc4.jpg', 'data' => $this->getTestPhoto('gallery/imgc4.jpg'), 'alt' => [ "en" =>'description imgc4', "pl" =>'opis imgc4'  ]],
                ['name' => 'imgc5.jpg', 'data' => $this->getTestPhoto('gallery/imgc5.jpg'), 'alt' => [ "en" =>'description imgc5', "pl" =>'opis imgc5'  ]],
                ['name' => 'imgc6.jpg', 'data' => $this->getTestPhoto('gallery/imgc6.jpg'), 'alt' => [ "en" =>'description imgc6', "pl" =>'opis imgc6'  ]],
                ['name' => 'imgc7.jpg', 'data' => $this->getTestPhoto('gallery/imgc7.jpg'), 'alt' => [ "en" =>'description imgc7', "pl" =>'opis imgc7'  ]],
                ['name' => 'imgc8.jpg', 'data' => $this->getTestPhoto('gallery/imgc8.jpg'), 'alt' => [ "en" =>'description imgc8', "pl" =>'opis imgc8'  ]],
                ['name' => 'imgc9.jpg', 'data' => $this->getTestPhoto('gallery/imgc9.jpg'), 'alt' => [ "en" =>'description imgc9', "pl" =>'opis imgc9'  ]],
                ['name' => 'imgc10.jpg', 'data' => $this->getTestPhoto('gallery/imgc10.jpg'), 'alt' => [ "en" =>'description imgc10', "pl" =>'opis imgc10'  ]],
                ['name' => 'imgc11.jpg', 'data' => $this->getTestPhoto('gallery/imgc11.jpg'), 'alt' => [ "en" =>'description imgc11', "pl" =>'opis imgc11'  ]],
                ['name' => 'imgc12.jpg', 'data' => $this->getTestPhoto('gallery/imgc12.jpg'), 'alt' => [ "en" =>'description imgc12', "pl" =>'opis imgc12'  ]],
            ];

            $imagesGrec = [
                ['name' => 'imggreece1.jpg', 'data' => $this->getTestPhoto('gallery/greece/imggreece1.jpg'), 'alt' => [ "en" =>'description imggreece1', "pl" =>'opis imggreece1'  ]],
                ['name' => 'imggreece2.jpg', 'data' => $this->getTestPhoto('gallery/greece/imggreece2.jpg'), 'alt' => [ "en" =>'description imggreece2', "pl" =>'opis imggreece2'  ]]
            ];
        } else {
            $img = $this->imgUnit1();
            $images = $this->imgUnit2();
            $imagesGrec = $images;
        }

        return ['about_me' => $img, 'poland' => $images, 'greece' => $imagesGrec  ];
    }

    private function getProductImg($unitTest)
    {
        $out = [];
        if (!$unitTest) {
            $out = [
                'product1' =>   [
                    ['name' => 'php.jpg', 'data' => $this->getTestPhoto('books/php3.jpg'), 'alt' => [ "en" =>'php3 front', "pl" =>'php3 front' ]]
                ],
                'product2' =>   [
                    ['name' => 'php5.jpg', 'data' => $this->getTestPhoto('books/php5.jpg'), 'alt' => [ "en" =>'php5 front', "pl" =>'php5 front' ]],
                    ['name' => 'php5_back.jpg', 'data' => $this->getTestPhoto('books/php5_back.jpg'), 'alt' => [ "en" =>'php5 back', "pl" =>'php5 back' ]],
                ],
                'product3' =>   [
                    ['name' => 'java.jpg', 'data' => $this->getTestPhoto('books/java.jpg'), 'alt' => [ "en" =>'java front',"pl" =>'java front'  ]],
                    ['name' => 'java_back.jpg', 'data' => $this->getTestPhoto('books/java_back.jpg'), 'alt' => [ "en" =>'java back', "pl" => 'java back' ]],
                ],
                'product4' =>   [
                    ['name' => 'english.jpg', 'data' => $this->getTestPhoto('books/english.jpg'), 'alt' => [ "en" =>'english front', "pl" =>'english front' ]],
                    ['name' => 'english_back.jpg', 'data' => $this->getTestPhoto('books/english_back.jpg'), 'alt' => [ "en" =>'english back', "pl" =>'english back' ]]
                ]
            ];
        } else {
            $out = [
                'product1' =>   $this->imgUnit1(),
                'product2' =>   $this->imgUnit2(),
                'product3' =>   $this->imgUnit2(),
                'product4' =>   $this->imgUnit2()
            ];
        }            

        return $out;
    }


    public function pagesAndMenu($unitTest = false)
    {
        $images = $this->getTestImg($unitTest);

        $p = [];
        $appUrl = env('APP_URL');
        $admUrl = (strpos($appUrl, 'demo.cmsrs.pl') !== false) ? $appUrl.'/admin-demo' : $appUrl.'/admin/';


        $mainPage =
        [
            'title'     =>[ "en" =>  'cmsRS demo site', "pl" =>  'cmsRS wersja demo'],
            'short_title' =>[ "en" =>  'cmsRS demo', "pl" =>  'cmsRS demo'],
            'description' =>[ "en" =>  'cmsRS demo site - description', "pl" =>  'cmsRS wersja demo' ],
            'published' => 1,
            'commented' => 0,
            'after_login' => 0,
            'type' => 'main_page', //!!
            'content' => [ "en" => "
            <div class='container pt-5 starter-template  mt-4 mb-4'>
                <h1>cmsRS demo version</h1>
                <p class='lead'>The demo version was created for demonstration purposes.<p>
                    <div class='alert alert-danger' role='alert'>Saving, updating, deleting a single record has been disabled.</div>
                    <br><br>
                    <p class='lead'>
                    Login to the admin panel: <a href=\"$admUrl\">$admUrl</a>
                    <br>
                    <br>
                    user: adm@cmsrs.pl
                    <br>
                    pass: cmsrs123
                    <br>
                    <br>
                    More information: <a title='cmsRS' href='http://www.cmsrs.pl' >http://www.cmsrs.pl</a>
                </p>
            </div>
            ", "pl" => "
            <div class='container pt-5 starter-template  mt-4 mb-4'>
                <h1>cmsRS wersja demo</h1>
                <p class='lead'>Wersja demo została stworzona tylko dla celów demonstarcyjnych.<p>
                    <div class='alert alert-danger' role='alert'>Zapisywanie, aktualizacja i kasowanie rekordu zostały zabronione.</div>
                    <br><br>
                    <p class='lead'>
                    Login do panelu administracyjnego: <a href=\"$admUrl\">$admUrl</a>
                    <br>
                    <br>
                    użytkownik: adm@cmsrs.pl
                    <br>
                    hasło: cmsrs123
                    <br>
                    <br>
                    Więcej informacji: <a title='cmsRS' href='http://www.cmsrs.pl' >http://www.cmsrs.pl</a>
                </p>
            </div>
            " ],
            'menu_id' => null,
            'page_id' => null,
            //'images' => []
        ];

        $p['p1'] = $this->getPageObj()->wrapCreate($mainPage);
        //Page::wrapCreate($mainPage);

        $m1 = $this->getMenuObj()->wrapCreate(['name' => [ "en" => 'About', "pl" => 'O mnie']]);
        
        $data1p = [
            'title'     => [ "en" => 'About me', "pl" => 'O mnie'],
            'short_title' => [ "en" => 'About me', "pl" => 'O mnie'],
            'description' => [ "en" => 'Description... Needed for google', "pl" => 'Opis..... Potrzebne dla googla'],
            'published' => 1,
            'commented' => 0,
            'type' => 'cms',
            'content' => [ "en" => $this->getDummyTest(), "pl" => $this->getDummyTestPl()],
            'menu_id' => $m1->id,
            'images' => $images['about_me']
        ];

        $data2p = [
            'title'     => [ "en" =>'About page', "pl" =>'O stronie'],
            'short_title' => [ "en" =>'About page', "pl" =>'O stronie'],
            'description' => [ "en" =>'Description... Needed for google', "pl" => 'Opis..... Potrzebne dla googla'],
            'published' => 1,
            'commented' => 1,
            'type' => 'cms',
            'content' => [ "en" =>$this->getDummyTest(), "pl" => $this->getDummyTestPl()],
            'menu_id' => $m1->id
        ];

        $data22pSecret = [
            'title'     =>  [ "en" =>'Secret info', "pl" =>'Tajna informacja' ],
            'short_title' =>  [ "en" =>'Secret info', "pl" =>'Tajna informacja'],
            'description' => [ "en" =>'Description... Needed for google', "pl" => 'Opis..... Potrzebne dla googla' ],
            'published' => 1,
            'commented' => 0,
            'after_login' => 1,
            'type' => 'cms',
            'content' => [ "en" =>'Message avaliable after log in.', "pl" => "Widomość dostępna tylko po zalogowaniu." ],
            'menu_id' => $m1->id
        ];


        $p['p222'] =  $this->getPageObj()->wrapCreate($data1p);
        $p['p2'] = $this->getPageObj()->wrapCreate($data2p);
        $p['p22'] = $this->getPageObj()->wrapCreate($data22pSecret);

        $m2 = $this->getMenuObj()->wrapCreate(['name' => ["en" => 'Gallery', "pl" => "Galeria" ] ]);
        $data3p = [
            'title'     => [ "en" =>'Poland', "pl" =>'Polska'],
            'short_title' => [ "en" =>'Poland', "pl" =>'Polska'],
            'description' => [ "en" =>'Description...  needed for google', "pl" => 'Opis..... Potrzebne dla googla'  ],
            'published' => 1,
            'commented' => 0,
            'type' => 'gallery',
            'content' => '',
            'menu_id' => $m2->id,
            'images' => $images['poland']
        ];
        $p['p3']  = $this->getPageObj()->wrapCreate($data3p);

        $data44p = [
            'title'     => [ "en" =>'Greece', "pl" => "Grecja"],
            'short_title' => [ "en" =>'Greece', "pl" => "Grecja"],
            'description' => [ "en" =>'Description...  needed for google', "pl" => 'Opis..... Potrzebne dla googla'  ],
            'published' => 1,
            'commented' => 0,
            'type' => 'gallery',
            'content' => '',
            'menu_id' => $m2->id,
            'images' => $images['greece']
        ];
        $p['p44'] = $this->getPageObj()->wrapCreate($data44p);

        $m3 = $this->getMenuObj()->wrapCreate(['name' => ["en" => 'Shop', "pl" => "Sklep" ] ]);
        $data4p = [
            'title'     => [ "en" =>'IT books', "pl" => "Książki IT" ],
            'short_title' => [ "en" =>'IT books', "pl" => "Książki IT" ],
            'description' => [ "en" =>'Description... Needed for google', "pl" => 'Opis..... Potrzebne dla googla' ],
            'published' => 1,
            'commented' => 0,
            'type' => 'cms',
            'content' => [ "en" =>$this->getDummyTest(),  "pl" =>$this->getDummyTestPl()],
            'menu_id' => $m3->id
        ];
        $p['p4'] = $this->getPageObj()->wrapCreate($data4p);

        $data5p = [
            'title'     => [ "en" =>'PHP', "pl" =>'PHP' ],
            'short_title' => [ "en" =>'PHP',  "pl" =>'PHP' ],
            'description' => [ "en" =>'Description... Needed for google', "pl" => 'Opis..... Potrzebne dla googla' ],
            'published' => 1,
            'commented' => 0,
            'type' => 'shop',
            'content' => '',
            'page_id' => $p['p4']->id,
            'menu_id' => $m3->id
        ];
        $p['p5'] = $this->getPageObj()->wrapCreate($data5p);

        $data6p = [
            'title'     => [ "en" =>'Java', "pl" =>'Java' ],
            'short_title' => [ "en" =>'Java', "pl" =>'Java'   ],
            'description' => [ "en" =>'Description... Needed for google', "pl" => 'Opis..... Potrzebne dla googla' ],
            'published' => 1,
            'commented' => 0,
            'type' => 'shop',
            'content' => '',
            'page_id' => $p['p4']->id,
            'menu_id' => $m3->id
        ];
        $p['p6'] = $this->getPageObj()->wrapCreate($data6p);

        $data7p = [
            'title'     => [ "en" =>'English', "pl" =>'Angielski' ],
            'short_title' => [ "en" =>'English', "pl" =>'Angielski'   ],
            'description' => [ "en" =>'Description... Needed for google', "pl" => 'Opis..... Potrzebne dla googla' ],
            'published' => 1,
            'commented' => 0,
            'type' => 'shop',
            'content' => '',
            'menu_id' => $m3->id
        ];
        $p['p7'] = $this->getPageObj()->wrapCreate($data7p);


        $mContact = $this->getMenuObj()->wrapCreate(['name' => ["en"  => 'Contact me', "pl"=> "Kontakt"] ]);

        $pContact = [
            'title'     => [ "en" =>'Contact', "pl" =>'Kontakt'],
            'short_title' => [ "en" =>'Contact', "pl" =>'Kontakt'],
            'description' => [ "en" =>'Description... Needed for google', "pl" => 'Opis..... Potrzebne dla googla' ],
            'published' => 1,
            'commented' => 0,
            'type' => 'contact',
            'content' => '',
            'menu_id' => $mContact->id,
            'images' => [
            ]
        ];
        $p['p8'] =  $this->getPageObj()->wrapCreate($pContact);


        $pPrivacy = [
            'title'     => [ "en" =>'Privacy policy', "pl" => "Polityka prywatności" ],
            'short_title' => [ "en" =>'Privacy policy', "pl" => "Polityka prywatności"],
            'description' => [ "en" =>'Description... Needed for google', "pl" => 'Opis..... Potrzebne dla googla'  ],
            'published' => 1,
            'commented' => 0,
            'type' => 'privacy_policy',
            'content' => [ "en" => $this->getPrivacyPolicy(), "pl" => $this->getPrivacyPolicy() ],
            'images' => [
            ]
        ];
        $p['p9'] = $this->getPageObj()->wrapCreate($pPrivacy);

        $pLogin = [
            'title'     => [ "en" =>'login', "pl" => "logowanie" ],
            'short_title' => [ "en" =>'login', "pl" => "logowanie"],
            'description' => [ "en" =>'Description... Needed for google', "pl" => 'Opis..... Potrzebne dla googla'  ],
            'published' => 1,
            'commented' => 0,
            'type' => 'login',
            //'content' => [ "en" => $this->getPrivacyPolicy(), "pl" => $this->getPrivacyPolicy() ],
            'images' => [
            ]
        ];
        $p['p10'] = $this->getPageObj()->wrapCreate($pLogin);
        
        return $p;
    }

    public function product($p, $unitTest = false)
    {
        $images = $this->getProductImg($unitTest);

        $products = [];
        $products['product1'] = [
            'product_name' => [ 'en' => 'PHP3 db app', 'pl' => 'PHP3 aplikacje bazodanowe' ] ,
            'sku' => '1/23/4',
            'price' => 11,
            'product_description' => ['en' =>  'Php3 book description',   'pl' => 'Php3 opis ksiazki' ],
            'page_id' => $p['p5']->id,
            'images' =>  $images['product1']
        ];
        $products['product2'] = [
            'product_name' => [ 'en' => 'PHP5','pl' => 'PHP5' ],
            'sku' => '1/234/4',
            'price' => 30,
            'product_description' =>  [ 'en' => 'Php5 book', 'pl' =>  'Ksiazka o PHP5' ],
            'page_id' => $p['p5']->id,
            'images' =>  $images['product2']
        ];
        $products['product3'] = [
            'product_name' => [ 'en' =>  'Java db app', 'pl' => 'Java aplikacje bazodanowe' ],
            'sku' => '3/13/4',
            'price' => 23,
            'product_description' =>  [ 'en' => 'Java book','pl' => 'Książka o Javie' ],
            'page_id' => $p['p6']->id,
            'images' =>   $images['product3']
        ];
        $products['product4'] = [
            'product_name' => [  'en' => 'English',  'pl' => 'Angielski'] ,
            'sku' => 'A/3/3/4',
            'price' => 28,
            'product_description' => [  'en' => 'English book', 'pl' => 'Ksiązka do nauki angielskiego' ],
            'page_id' => $p['p7']->id,
            'images' =>  $images['product4']
        ];

        $this->getProductObj()->wrapCreate($products['product1']);
        $this->getProductObj()->wrapCreate($products['product2']);
        $this->getProductObj()->wrapCreate($products['product3']);
        $this->getProductObj()->wrapCreate($products['product4']);

        return $products;
    }

    private function getTestPhoto($imgPath)
    {
        $base = base_path().'/rs/demo_data/img/';
        $img = $base.$imgPath;
        if (!file_exists($img)) {
            die('no file: '.$img);
        }

        $type = pathinfo($img, PATHINFO_EXTENSION);
        $data = file_get_contents($img);
        $base64 = 'data:image/' . $type . ';base64,' . base64_encode($data);
    
        return $base64;
    }

    private function getDummyTest()
    {
        return "<b>Lorem Ipsum</b> is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";
    }

    private function getDummyTestPl()
    {
        return "<b>Lorem Ipsum</b> jest tekstem stosowanym jako przykładowy wypełniacz w przemyśle poligraficznym. Został po raz pierwszy użyty w XV w. przez nieznanego drukarza do wypełnienia tekstem próbnej książki. Pięć wieków później zaczął być używany przemyśle elektronicznym, pozostając praktycznie niezmienionym. Spopularyzował się w latach 60. XX w. wraz z publikacją arkuszy Letrasetu, zawierających fragmenty Lorem Ipsum, a ostatnio z zawierającym różne wersje Lorem Ipsum oprogramowaniem przeznaczonym do realizacji druków na komputerach osobistych, jak Aldus PageMaker";
    }

    private function getPrivacyPolicy()
    {
        return '<p>POLITYKA COOKIES<br /> <br />Zgodnie z wymaganiami dotyczącymi serwisów internetowych, informuje Państwa, że dla zapewnienia lepszego działania serwisu używam mechanizmu plików cookies.<br /><br />1. Pliki cookies (tzw. "ciasteczka”) stanowią dane informatyczne, w szczególności pliki tekstowe, które są zapisywane i przechowywane w urządzeniu końcowym Użytkownika Serwisu ( na komputerze, smartfonie, tablecie itp.) i przeznaczone są do korzystania ze stron internetowych Serwisu. Cookies zazwyczaj zawierają nazwę strony internetowej, z której pochodzą, czas przechowywania plików cookies na urządzeniu końcowym oraz unikalny numer, służący do identyfikacji przeglądarki, z jakiej następuje połączenie ze stroną internetową.<br /> <br />2.Pliki cookies wykorzystywane są w celu:<br /><br />a) dostosowania zawartości stron internetowych Serwisu do preferencji Użytkownika oraz optymalizacji korzystania ze stron internetowych; w szczególności pliki te pozwalają rozpoznać urządzenie końcowe Użytkownika Serwisu i odpowiednio wyświetlić stronę internetową, dostosowaną do jego indywidualnych potrzeb;<br /><br />b) tworzenia statystyk, które pomagają zrozumieć, w jaki sposób Użytkownicy Serwisu korzystają ze stron internetowych, co umożliwia ulepszanie ich struktury i zawartości;<br /> <br />c) utrzymanie sesji Użytkownika Serwisu (po zalogowaniu), dzięki której Użytkownik nie musi na każdej podstronie Serwisu ponownie wpisywać loginu i hasła (o ile funkcja logowań ie jest dostępna w Serwisie).<br />  <br />3. W ramach Serwisu stosowane są dwa zasadnicze rodzaje plików cookies:<br /> <br />a) "sesyjne" (session cookies), które są plikami tymczasowymi, które przechowywane są w urządzeniu końcowym Użytkownika do czasu wylogowania, opuszczenia strony internetowej lub wyłączenia oprogramowania (przeglądarki internetowej) i które są niezbędne do działania Serwisu oraz korzystania z usług dostępnych w ramach Serwisu;<br /> <br />b) "stałe" (persistent cookies),które przechowywane są w urządzeniu końcowym Użytkownika przez czas określony w parametrach plików cookies lub do czasu ich usunięcia przez Użytkownika.<br /> <br />4. W ramach Serwisu pliki cookies mogą być wykorzystywane w celu:<br /> <br />a) zbierania informacji o sposobie korzystania przez Użytkownika ze stron internetowych Serwisu (np.: informacji na temat obszarów, które odwiedza Użytkownik, czasu jaki na nich spędza oraz problemów jakie na nich napotyka), co pozwala poprawiać działanie stron internetowych Serwisu,<br /> <br />b) zapamiętania wybranych przez Użytkownika ustawień by zapewnić personalizację interfejsu Użytkownika (np. w zakresie wybranego języka lub regionu, z którego pochodzi Użytkownik, rozmiaru czcionki, wyglądu strony internetowej) oraz by dostarczyć Użytkownikowi bardziej spersonalizowane treści i usługi;<br /> <br />5. W wielu przypadkach przeglądark i internetowe domyślnie dopuszczają przechowywanie plików cookies w urządzeniu końcowym Użytkownika. Użytkownicy Serwisu mogą dokonać w każdym czasie zmiany ustawień dotyczących plików cookies w swoich przeglądarkach internetowych. Zmiana ustawień może w szczególności polegać na blokowaniu automatycznej obsługi plików cookies bądź na informowaniu o każdorazowym zamieszczeniu plików cookies w urządzeniu końcowym Użytkownika Serwisu. Szczegółowe informacje o możliwości i sposobach obsługi plików cookies dostępne są w ustawieniach przeglądarki internetowej.<br /> <br />6. Informuje, że ograniczenia stosowania plików cookies mogą wpłynąć na niektóre funkcjonalności dostępne na stronach internetowych Serwisu, co może negatywnie wpłynąć na wygodę korzystania z Serwisu lub doprowadzić do zablokowania niektórych funkcjonalności.</p>';
    }
}
