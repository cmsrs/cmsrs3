<?php

namespace App\Data;

use App\Page;
use App\Menu;
use App\Product;
use App\Comment;


Class Demo{

    private function  getPageObj()
    {
        $pageObj = new Page;        
        // $pageObj->setTranslate($this->translate);
        // $pageObj->setContent($this->content);
        return $pageObj;
    }

    private function  getMenuObj()
    {
        $menuObj = new Menu;
        // $menuObj->setTranslate($this->translate);
        return $menuObj;
    }

    private function  getProductObj()
    {
        $productObj = new Product;
        // $productObj->setTranslate($this->translate);
        return $productObj;
    }

    private function imgUnit1()
    {
        $images = [
            ['name' => 'phpunittest1.jpg', 'data' => $this->getTestPhoto( 'test/phpunittest1.jpg'), 'alt' => [ "en" =>'phpunittest1'  ]]
        ];
        return $images;
    }

    private function imgUnit2()
    {
        $images = [
            ['name' => 'phpunittest1.jpg', 'data' => $this->getTestPhoto( 'test/phpunittest1.jpg'), 'alt' => [ "en" =>'phpunittest1'  ]],
            ['name' => 'phpunittest2.jpg', 'data' => $this->getTestPhoto( 'test/phpunittest2.jpg'), 'alt' => [ "en" =>'phpunittest2'  ]]            
        ];
        return $images;
    }

    private function getTestImg($unitTest)
    {
        if(!$unitTest){
            $img = [
                ['name' => 'me.jpg', 'data' => $this->getTestPhoto( 'about_me/me.jpg' ), 'alt' => [ "en" =>'about me']]
            ];
            $images = [
                ['name' => 'img1.jpg', 'data' => $this->getTestPhoto( 'gallery/img1.jpg'), 'alt' => [ "en" =>'description img1'  ]],
                ['name' => 'img2.jpg', 'data' => $this->getTestPhoto( 'gallery/img2.jpg'), 'alt' => [ "en" =>'description img2'  ]],
                ['name' => 'img3.jpg', 'data' => $this->getTestPhoto( 'gallery/img3.jpg'), 'alt' => [ "en" =>'description img3'  ]],
                ['name' => 'img4.jpg', 'data' => $this->getTestPhoto( 'gallery/img4.jpg'), 'alt' => [ "en" =>'description img4'  ]],
                ['name' => 'imgb1.jpg', 'data' => $this->getTestPhoto( 'gallery/imgb1.jpg' ), 'alt' => [ "en" =>'description imgb1'  ]],
                ['name' => 'imgb2.jpg', 'data' => $this->getTestPhoto( 'gallery/imgb2.jpg' ), 'alt' => [ "en" =>'description imgb2'  ]],
                ['name' => 'imgb3.jpg', 'data' => $this->getTestPhoto( 'gallery/imgb3.jpg' ), 'alt' => [ "en" =>'description imgb3'  ]],
                ['name' => 'imgb4.jpg', 'data' => $this->getTestPhoto( 'gallery/imgb4.jpg' ), 'alt' => [ "en" =>'description imgb4'  ]],
                ['name' => 'imgc1.jpg', 'data' => $this->getTestPhoto( 'gallery/imgc1.jpg' ), 'alt' => [ "en" =>'description imgc1'  ]],                
                ['name' => 'imgc2.jpg', 'data' => $this->getTestPhoto( 'gallery/imgc2.jpg' ), 'alt' => [ "en" =>'description imgc2'  ]],                
                ['name' => 'imgc3.jpg', 'data' => $this->getTestPhoto( 'gallery/imgc3.jpg' ), 'alt' => [ "en" =>'description imgc3'  ]],                
                ['name' => 'imgc4.jpg', 'data' => $this->getTestPhoto( 'gallery/imgc4.jpg' ), 'alt' => [ "en" =>'description imgc4'  ]],                
                ['name' => 'imgc5.jpg', 'data' => $this->getTestPhoto( 'gallery/imgc5.jpg' ), 'alt' => [ "en" =>'description imgc5'  ]],                
                ['name' => 'imgc6.jpg', 'data' => $this->getTestPhoto( 'gallery/imgc6.jpg' ), 'alt' => [ "en" =>'description imgc6'  ]],                
                ['name' => 'imgc7.jpg', 'data' => $this->getTestPhoto( 'gallery/imgc7.jpg' ), 'alt' => [ "en" =>'description imgc7'  ]],                
                ['name' => 'imgc8.jpg', 'data' => $this->getTestPhoto( 'gallery/imgc8.jpg' ), 'alt' => [ "en" =>'description imgc8'  ]],                
                ['name' => 'imgc9.jpg', 'data' => $this->getTestPhoto( 'gallery/imgc9.jpg' ), 'alt' => [ "en" =>'description imgc9'  ]],                
                ['name' => 'imgc10.jpg', 'data' => $this->getTestPhoto( 'gallery/imgc10.jpg' ), 'alt' => [ "en" =>'description imgc10'  ]],                
                ['name' => 'imgc11.jpg', 'data' => $this->getTestPhoto( 'gallery/imgc11.jpg' ), 'alt' => [ "en" =>'description imgc11'  ]],                
                ['name' => 'imgc12.jpg', 'data' => $this->getTestPhoto( 'gallery/imgc12.jpg' ), 'alt' => [ "en" =>'description imgc12'  ]], 
            ];

            $imagesGrec = [
                ['name' => 'imggreece1.jpg', 'data' => $this->getTestPhoto( 'gallery/greece/imggreece1.jpg'), 'alt' => [ "en" =>'description imggreece1'  ]],
                ['name' => 'imggreece2.jpg', 'data' => $this->getTestPhoto( 'gallery/greece/imggreece2.jpg'), 'alt' => [ "en" =>'description imggreece2'  ]]
            ];              
        }else{
            $img = $this->imgUnit1();
            $images = $this->imgUnit2();
            $imagesGrec = $images;
        }

        return ['about_me' => $img, 'poland' => $images, 'greece' => $imagesGrec  ];

    }

    public function pagesAndMenu( $unitTest = false )
    {
        $images = $this->getTestImg($unitTest);

        $p = [];
        $appUrl = env('APP_URL');


        $mainPage =
        [
            'title'     =>[ "en" =>  'cmsRS demo site - title' ],
            'short_title' =>[ "en" =>  'cmsRS short title' ],
            'description' =>[ "en" =>  'cmsRS demo site - description' ],
            'published' => 1,
            'commented' => 0,
            'after_login' => 0,
            'type' => 'main_page', //!!
            'content' => [ "en" => "<h1>cmsRS demo version</h1>
            <div>
                <p class='lead'>The demo version was created for demonstration purposes.<p>
                    <div class='alert alert-danger' role='alert'>Saving, updating, deleting a single record has been disabled.</div>
                    <br><br>
                    <p class='lead'>
                    Login to the admin panel: <a href=\"$appUrl/admin\">$appUrl/admin</a>
                    <br>
                    and customer zone: <a href=\"$appUrl/login\">$appUrl/login</a>
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
            " ],
            'menu_id' => null,
            'page_id' => null,
            //'images' => []
        ];

        $p['p1'] = $this->getPageObj()->wrapCreate($mainPage);
        //Page::wrapCreate($mainPage);

        $m1 = $this->getMenuObj()->wrapCreate(['name' => [ "en" => 'About']]);
        
        $data1p = [
            'title'     => [ "en" => 'About me'],
            'short_title' => [ "en" => 'About me'],
            'description' => [ "en" => 'Description... Needed for google'],
            'published' => 1,
            'commented' => 0,
            'type' => 'cms',
            'content' => [ "en" => $this->getDummyTest()],
            'menu_id' => $m1->id,
            'images' => $images['about_me']
        ];

        $data2p = [
            'title'     => [ "en" =>'About page'],
            'short_title' => [ "en" =>'About page'],
            'description' => [ "en" =>'Description... Needed for google'],            
            'published' => 1,
            'commented' => 1,
            'type' => 'cms',
            'content' => [ "en" =>$this->getDummyTest()],
            'menu_id' => $m1->id
        ];

        $data22pSecret = [
            'title'     =>  [ "en" =>'Secret info'],
            'short_title' =>  [ "en" =>'Secret info'],
            'description' => [ "en" =>'Description... Needed for google'],            
            'published' => 1,
            'commented' => 0,
            'after_login' => 1,
            'type' => 'cms',
            'content' => [ "en" =>'Secret information after logging in'],
            'menu_id' => $m1->id
        ];


        $this->getPageObj()->wrapCreate($data1p);
        $p['p2'] = $this->getPageObj()->wrapCreate($data2p);
        $p['p22'] = $this->getPageObj()->wrapCreate($data22pSecret);

        $m2 = $this->getMenuObj()->wrapCreate(['name' => ["en" => 'Gallery' ] ]);
        $data3p = [
            'title'     => [ "en" =>'Poland'],
            'short_title' => [ "en" =>'Poland'],
            'description' => [ "en" =>'Description...  needed for google'],            
            'published' => 1,
            'commented' => 0,
            'type' => 'gallery',
            'content' => '',
            'menu_id' => $m2->id,
            'images' => $images['poland']
        ];        
        $p['p3']  = $this->getPageObj()->wrapCreate($data3p);

        $data44p = [
            'title'     => [ "en" =>'Greece'],
            'short_title' => [ "en" =>'Greece'],
            'description' => [ "en" =>'Description...  needed for google'],            
            'published' => 1,
            'commented' => 0,
            'type' => 'gallery',
            'content' => '',
            'menu_id' => $m2->id,
            'images' => $images['greece']
        ];        
        $p['p44'] = $this->getPageObj()->wrapCreate($data44p);

        $m3 = $this->getMenuObj()->wrapCreate(['name' => ["en" => 'Shop'] ]);
        $data4p = [
            'title'     => [ "en" =>'IT books'],
            'short_title' => [ "en" =>'IT books'],
            'description' => [ "en" =>'Description... Needed for google'],            
            'published' => 1,
            'commented' => 0,
            'type' => 'cms',
            'content' => [ "en" =>$this->getDummyTest()],
            'menu_id' => $m3->id
        ];
        $p['p4'] = $this->getPageObj()->wrapCreate($data4p);

        $data5p = [
            'title'     => [ "en" =>'PHP books'],
            'short_title' => [ "en" =>'PHP books'],
            'description' => [ "en" =>'Description... Needed for google'],            
            'published' => 1,
            'commented' => 0,
            'type' => 'shop',
            'content' => '',
            'page_id' => $p['p4']->id,
            'menu_id' => $m3->id
        ];
        $p['p5'] = $this->getPageObj()->wrapCreate($data5p);

        $data6p = [
            'title'     => [ "en" =>'Java books'],
            'short_title' => [ "en" =>'Java books'],
            'description' => [ "en" =>'Description... Needed for google'],            
            'published' => 1,
            'commented' => 0,
            'type' => 'shop',
            'content' => '',
            'page_id' => $p['p4']->id,            
            'menu_id' => $m3->id
        ];
        $p['p6'] = $this->getPageObj()->wrapCreate($data6p);

        $data7p = [
            'title'     => [ "en" =>'English books'],
            'short_title' => [ "en" =>'English books'],
            'description' => [ "en" =>'Description... Needed for google'],            
            'published' => 1,
            'commented' => 0,
            'type' => 'shop',
            'content' => '',
            'menu_id' => $m3->id
        ];
        $p['p7'] = $this->getPageObj()->wrapCreate($data7p);


        $mContact = $this->getMenuObj()->wrapCreate( ['name' => ["en"  => 'Contact me'] ] );

        $pContact = [
            'title'     => [ "en" =>'Contact'],
            'short_title' => [ "en" =>'Contact'],
            'description' => [ "en" =>'Description... Needed for google'],
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
            'title'     => [ "en" =>'Privacy policy'],
            'short_title' => [ "en" =>'Privacy policy'],
            'description' => [ "en" =>'Description... Needed for google'],
            'published' => 1,
            'commented' => 0,
            'type' => 'privacy_policy',
            'content' => [ "en" => $this->getPrivacyPolicy()],
            'images' => [
            ]
        ];
        $p['p9'] = $this->getPageObj()->wrapCreate($pPrivacy);
        
        return $p;
    }

    public function product($p)
    {

        $products1 = [
            'name' => 'PHP3',
            'sku' => '1/23/4',
            'price' => 11,
            'description' => 'Php book',
            'page_id' => $p['p5']->id,
            'images' =>   [
                ['name' => 'php.jpg', 'data' => $this->getTestPhoto( 'books/php3.jpg' ), 'alt' => [ "en" =>'php3 front' ]]                
            ]
        ];
        $products2 = [
            'name' => 'PHP5',
            'sku' => '1/234/4',
            'price' => 30,
            'description' => 'Php5 book',
            'page_id' => $p['p5']->id,
            'images' =>   [
                ['name' => 'php5.jpg', 'data' => $this->getTestPhoto( 'books/php5.jpg' ), 'alt' => [ "en" =>'php5 front' ]],
                ['name' => 'php5_back.jpg', 'data' => $this->getTestPhoto( 'books/php5_back.jpg' ), 'alt' => [ "en" =>'php5 back' ]],
            ]
        ];
        $products3 = [            
            'name' => 'Java',
            'sku' => '3/13/4',
            'price' => 23,
            'description' => 'Java book',
            'page_id' => $p['p6']->id,
            'images' =>   [
                ['name' => 'java.jpg', 'data' => $this->getTestPhoto( 'books/java.jpg' ), 'alt' => [ "en" =>'java front'  ]],
                ['name' => 'java_back.jpg', 'data' => $this->getTestPhoto( 'books/java_back.jpg' ), 'alt' => [ "en" =>'java back'  ]],
            ]
        ];
        $products4 = [            
            'name' => 'English',
            'sku' => 'A/3/3/4',
            'price' => 28,
            'description' => 'English book',
            'page_id' => $p['p7']->id,
            'images' =>   [
                ['name' => 'english.jpg', 'data' => $this->getTestPhoto( 'books/english.jpg' ), 'alt' => [ "en" =>'english front' ]],
                ['name' => 'english_back.jpg', 'data' => $this->getTestPhoto( 'books/english_back.jpg' ), 'alt' => [ "en" =>'english back' ]],
            ]
        ];    

        $this->getProductObj()->wrapCreate($products1);
        $this->getProductObj()->wrapCreate($products2);        
        $this->getProductObj()->wrapCreate($products3);
        $this->getProductObj()->wrapCreate($products4);           
        
    }

/*
    public function getFixturePath($file){
        $path = getcwd().'/tests/Feature/fixture/';
        //if($file){
        $path = $path.$file;
        $this->assertFileExists($path);
        //}
    
        return $path;
      }
      public function getFixtureBase64($file){
        $path = $this->getFixturePath($file);
        $type = pathinfo($path, PATHINFO_EXTENSION);
        $data = file_get_contents($path);
        $base64 = 'data:image/' . $type . ';base64,' . base64_encode($data);
        return $base64;
      }
*/      
    

    private function getTestPhoto( $imgPath )
    {
        $base = base_path().'/rs/demo_data/img/';
        $img = $base.$imgPath;
        if(!file_exists($img)){
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

    private function getPrivacyPolicy()
    {    
        return '<p>POLITYKA COOKIES<br /> <br />Zgodnie z wymaganiami dotyczącymi serwisów internetowych, informuje Państwa, że dla zapewnienia lepszego działania serwisu używam mechanizmu plików cookies.<br /><br />1. Pliki cookies (tzw. "ciasteczka”) stanowią dane informatyczne, w szczególności pliki tekstowe, które są zapisywane i przechowywane w urządzeniu końcowym Użytkownika Serwisu ( na komputerze, smartfonie, tablecie itp.) i przeznaczone są do korzystania ze stron internetowych Serwisu. Cookies zazwyczaj zawierają nazwę strony internetowej, z której pochodzą, czas przechowywania plików cookies na urządzeniu końcowym oraz unikalny numer, służący do identyfikacji przeglądarki, z jakiej następuje połączenie ze stroną internetową.<br /> <br />2.Pliki cookies wykorzystywane są w celu:<br /><br />a) dostosowania zawartości stron internetowych Serwisu do preferencji Użytkownika oraz optymalizacji korzystania ze stron internetowych; w szczególności pliki te pozwalają rozpoznać urządzenie końcowe Użytkownika Serwisu i odpowiednio wyświetlić stronę internetową, dostosowaną do jego indywidualnych potrzeb;<br /><br />b) tworzenia statystyk, które pomagają zrozumieć, w jaki sposób Użytkownicy Serwisu korzystają ze stron internetowych, co umożliwia ulepszanie ich struktury i zawartości;<br /> <br />c) utrzymanie sesji Użytkownika Serwisu (po zalogowaniu), dzięki której Użytkownik nie musi na każdej podstronie Serwisu ponownie wpisywać loginu i hasła (o ile funkcja logowań ie jest dostępna w Serwisie).<br />  <br />3. W ramach Serwisu stosowane są dwa zasadnicze rodzaje plików cookies:<br /> <br />a) "sesyjne" (session cookies), które są plikami tymczasowymi, które przechowywane są w urządzeniu końcowym Użytkownika do czasu wylogowania, opuszczenia strony internetowej lub wyłączenia oprogramowania (przeglądarki internetowej) i które są niezbędne do działania Serwisu oraz korzystania z usług dostępnych w ramach Serwisu;<br /> <br />b) "stałe" (persistent cookies),które przechowywane są w urządzeniu końcowym Użytkownika przez czas określony w parametrach plików cookies lub do czasu ich usunięcia przez Użytkownika.<br /> <br />4. W ramach Serwisu pliki cookies mogą być wykorzystywane w celu:<br /> <br />a) zbierania informacji o sposobie korzystania przez Użytkownika ze stron internetowych Serwisu (np.: informacji na temat obszarów, które odwiedza Użytkownik, czasu jaki na nich spędza oraz problemów jakie na nich napotyka), co pozwala poprawiać działanie stron internetowych Serwisu,<br /> <br />b) zapamiętania wybranych przez Użytkownika ustawień by zapewnić personalizację interfejsu Użytkownika (np. w zakresie wybranego języka lub regionu, z którego pochodzi Użytkownik, rozmiaru czcionki, wyglądu strony internetowej) oraz by dostarczyć Użytkownikowi bardziej spersonalizowane treści i usługi;<br /> <br />5. W wielu przypadkach przeglądark i internetowe domyślnie dopuszczają przechowywanie plików cookies w urządzeniu końcowym Użytkownika. Użytkownicy Serwisu mogą dokonać w każdym czasie zmiany ustawień dotyczących plików cookies w swoich przeglądarkach internetowych. Zmiana ustawień może w szczególności polegać na blokowaniu automatycznej obsługi plików cookies bądź na informowaniu o każdorazowym zamieszczeniu plików cookies w urządzeniu końcowym Użytkownika Serwisu. Szczegółowe informacje o możliwości i sposobach obsługi plików cookies dostępne są w ustawieniach przeglądarki internetowej.<br /> <br />6. Informuje, że ograniczenia stosowania plików cookies mogą wpłynąć na niektóre funkcjonalności dostępne na stronach internetowych Serwisu, co może negatywnie wpłynąć na wygodę korzystania z Serwisu lub doprowadzić do zablokowania niektórych funkcjonalności.</p>';
    }


}