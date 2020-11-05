<?php

namespace App\Console\Commands;

use DB;

use Illuminate\Console\Command;

use App\Page;
use App\Menu;


class Migration extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'command:migration';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Exemple of migration (migration my old web site)';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    private $imgOldPath = "/var/www/cmsrsloc/public/images/gallery/";

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {
        $this->mainPage();        
        $this->privacyPage();
        $this->loginPage();
        $menus = $this->getOldMenuData();
        //dump($menus);
        foreach($menus as $oldMenuId => $m){
            //dump($oldMenuId);
            $newMenu = (new Menu)->wrapCreate(['name' => $m]);            
            $pages = $this->getOldPagesByMenuId($oldMenuId);
            foreach($pages as $oldPageId => $p){
              $newPage = $this->createPagesForMenu( $newMenu->id, $p, $oldPageId );
            }
        }

        

        //dd($menus);


        //die('_______test12334_______');
        //
    }

    private function getOldImagesByPageId($oldPageId)
    {
        $sql = "
          select i.id,  i.name, t.lang, t.key, t.value \n 
          from core_images as i \n 
          left join core_translates as t on (t.image_id = i.id ) \n 
          where i.page_id = $oldPageId \n 
          order by i.no;
        ";
        $images = DB::connection('mysql2')->select($sql);

        $out = [];
        foreach($images as $img){
            $out[$img->id]['alt'][$img->lang] = $img->value;
            $out[$img->id]['name'] = $img->name;

            $imgPath = $this->imgOldPath.$oldPageId."/".$img->name;
            if( !file_exists($imgPath) ){
              die("obrazek: $imgPath nie istnieje");
            }
            $out[$img->id]['data'] = $this->getImgData($imgPath); //wrog for performance
        } 

        return $out;
    }

    private function getImgData($img)
    {
      $type = pathinfo($img, PATHINFO_EXTENSION);
      $data = file_get_contents($img);
      $base64 = 'data:image/' . $type . ';base64,' . base64_encode($data);
  
      return $base64;
    }

    private function createPagesForMenu( $newMenuId, $oldData, $oldPageId )
    {
        $dataP = [
            'title'     => $oldData['page_title'],
            'short_title' => $oldData['label'],
            'description' => $oldData['html_desc'],
            'published' => 1,
            'commented' => 0,
            'type' => 'cms',
            'content' => $oldData['content'],
            'menu_id' => $newMenuId,
            'images' => $this->getOldImagesByPageId($oldPageId)
        ];
        //$images = $this->getOldImagesByPageId($oldPageId);
        //dump($images);

        return (new Page)->wrapCreate($dataP);    
    } 

    

    private function getOldPagesByMenuId($menuId)
    {
        $sql = "
            select p.id , t.lang, t.type, t.key, t.value, c.content, c.lang as c_lang  \n
            from core_pages as p  \n
            left join core_translates as t on (t.page_id = p.id )  \n
            left join core_contents as c on (c.page_id = p.id )  \n  
            where (p.menu_id = $menuId) and  (p.published = 1) \n
            order by p.position"
            ;

        $pages = DB::connection('mysql2')->select($sql);

        $out = [];
        foreach($pages as $p){
            $out[$p->id][$p->key][$p->lang] = $p->value;
        } 
        foreach($pages as $pp){
            $out[$pp->id]['content'][$pp->c_lang] = $pp->content;
        }
        
        return $out;


    }


    private function getOldMenuData()
    {
        $menus = DB::connection('mysql2')->select("select m.id, t.lang, t.value  from core_menus as m  left join core_translates as t on (t.menu_id = m.id )   where m.published = 1 and t.key = 'label' order by m.position;");

        $out = [];
        foreach($menus as $m){
            $out[$m->id][$m->lang] = $m->value;
        }      
        return $out;
    }
    

    private function mainPage()
    {
        $mainPage =
        [
            'title'     =>[ 
                "en" =>  'Multilingual CMS system with online store module, Laravel and React Redux, checkers online, tic-tac-toe online game, ball line online game, Robert  Szczepanski - home page - cmsRS', 
                "pl" =>  'Wielojęzyczny CMS z modułem sklepu internetowego, Laravel i React Redux, gra w warcaby, gra w kółko i krzyżyk, gra w kulki, Robert Szczepański - strona prywatna - cmsRS'
            ],
            'short_title' =>[ 
                "en" =>  'cmsRS main page', 
                "pl" =>  'cmsRS strona glowna'
            ],
            'description' =>[ 
                "en" =>  'download multilingual cms with online store module, base on Laravel and React Redux, tic-tac-toe game, checkers online,  ball lines game. Home page of Robert Szczepanski', 
                "pl" =>  'pobierz wilojęzyczny cms z modulem sklepu internetowego oparty o Laravel i React Redux, gra w kółko i krzyżyk, warcaby, gra w kulki. Prywatna strona Roberta Szczepańskiego' 
            ],
            'published' => 1,
            'commented' => 0,
            'after_login' => 0,
            'type' => 'main_page', //!!
            'content' => [ 
                'en' => '
            <main role="main">

            <div class="jumbotron">
              <div class="container">
                <h1>cmsRS is open source software you can use to create a website, gallery or even online shopping cart</h1>
                <p class="mt-4">
                    <a class="btn btn-primary btn-lg" href="https://github.com/cmsrs/cmsrs3"  target="_blank" role="button">Download</a>
                    <a class="btn btn-secondary btn-lg" href="http://demo.cmsrs.pl/en" role="button">Demo</a>                    
                </p>                
              </div>
            </div>
          
            <div class="container mt-5 mb-5 text-left">
              <div class="row">
                <div class="col-md-4">
                  <h2>FEATURE:</h2>
                  <ul>
                    <li>Multilingual content management system - CMS</li>
                    <li>Photo gallery</li>
                    <li>Contact form</li>
                    <li>Login</li> 
                    <li>Article comments</li>
                    <li>Online shopping cart</li>                    
                  </ul>
                </div>
                <div class="col-md-4">
                  <h2>TECHNOLOGY:</h2>
                  <ul>
                    <li>Laravel</li>
                    <li>React and Redux (admin)</li>
                    <li>Vue.js (front)</li>
                    <li>Bootstrap</li>
                    <li>MySQL</li>
                  </ul>
                  <p><a class="btn btn-secondary" href="/en/cms/cmsrs/about-cmsrs" role="button">View details &raquo;</a></p>                  
                </div>
                <div class="col-md-4">
                  <h2>ADVANTAGES:</h2>
                  <ul>
                    <li>Open source</li>
                    <li>SEO friendly</li>
                    <li>Simple database structure</li>
                    <li>Easy development</li>
                    <li><b>Unit tests</b></li>
                    <li>New technologies</li>
                  </ul>                
                </div>
              </div>
          
              <hr>
          
            </div> <!-- /container -->
          
            </main>',

          'pl' => '          
            <main role="main">

            <div class="jumbotron">
              <div class="container">
                <h1>cmsRS jest otwartym oprogramowaniem, z którym stworzysz stronę www, galerię, a nawet koszyk sklepu internetowego</h1>
                <p class="mt-4">
                    <a class="btn btn-primary btn-lg" href="https://github.com/cmsrs/cmsrs3" target="_blank" role="button">Pobierz</a>
                    <a class="btn btn-secondary btn-lg" href="http://demo.cmsrs.pl" role="button">Demo</a>                    
                </p>                
              </div>
            </div>
          
            <div class="container mt-5 mb-5  text-left">
              <div class="row">
                <div class="col-md-4">
                  <h2>MOŻLIWOŚCI:</h2>
                  <ul>
                    <li>Wielojęzyczny system zarządzania treścią - CMS</li>
                    <li>Galeria zdjęć</li>
                    <li>Formularz kontaktowy</li>
                    <li>Logowanie</li>
                    <li>Komentowanie artykułów</li>
                    <li>Koszyk sklepu internetowego</li>                    
                  </ul>                
                </div>
                <div class="col-md-4">
                  <h2>TECHNOLOGIA:</h2>
                  <ul>
                    <li>Laravel</li>
                    <li>React i Redux (admin)</li>
                    <li>Vue.js (front)</li>
                    <li>Bootstrap</li>
                    <li>MySQL</li>
                  </ul>
                  <p><a class="btn btn-secondary" href="/pl/cms/cmsrs/o-cmsrs" role="button">Czytaj więcej &raquo;</a></p>                              
                </div>
                <div class="col-md-4">
                  <h2>ZALETY:</h2>
                  <ul>
                    <li>Otwarte źródła</li>
                    <li>System przyjazny wyszukiwarkom internetowym - SEO</li>
                    <li>Prosta struktura bazy danych</li>
                    <li>Łatwość rozbudowy</li>
                    <li><b>Testy jednostkowe</b></li>
                    <li>Nowe technologie</li>
                  </ul>              
                </div>
              </div>        
              <hr>        
            </div> <!-- /container -->
          
            </main>'          
        
        
        ],
            'menu_id' => null,
            'page_id' => null,
            //'images' => []
        ];
        (new Page)->wrapCreate($mainPage);
    }

    private function privacyPage()
    {
        $pPrivacy = [
            'title'     => [ "en" =>'Privacy policy', "pl" => "Polityka prywatności" ],
            'short_title' => [ "en" =>'Privacy policy', "pl" => "Polityka prywatności"],
            'description' => [ 
                "en" =>'Polityka prywatności, Polityka cookies, Polityka użycia plików cookies w naszym serwisie oraz opis zarządzania ustawieniami cookies w przeglądarce', 
                "pl" => 'Polityka prywatności, Polityka cookies, Polityka użycia plików cookies w naszym serwisie oraz opis zarządzania ustawieniami cookies w przeglądarce'
            ],
            'published' => 1,
            'commented' => 0,
            'type' => 'privacy_policy',
            'content' => [ "en" => $this->getPrivacyPolicy(), "pl" => $this->getPrivacyPolicy() ],
            'images' => [
            ]
        ];
        (new Page)->wrapCreate($pPrivacy);    
    }   

    private function getPrivacyPolicy()
    {    
        return '<p>POLITYKA COOKIES<br /> <br />Zgodnie z wymaganiami dotyczącymi serwisów internetowych, informuje Państwa, że dla zapewnienia lepszego działania serwisu używam mechanizmu plików cookies.<br /><br />1. Pliki cookies (tzw. "ciasteczka”) stanowią dane informatyczne, w szczególności pliki tekstowe, które są zapisywane i przechowywane w urządzeniu końcowym Użytkownika Serwisu ( na komputerze, smartfonie, tablecie itp.) i przeznaczone są do korzystania ze stron internetowych Serwisu. Cookies zazwyczaj zawierają nazwę strony internetowej, z której pochodzą, czas przechowywania plików cookies na urządzeniu końcowym oraz unikalny numer, służący do identyfikacji przeglądarki, z jakiej następuje połączenie ze stroną internetową.<br /> <br />2.Pliki cookies wykorzystywane są w celu:<br /><br />a) dostosowania zawartości stron internetowych Serwisu do preferencji Użytkownika oraz optymalizacji korzystania ze stron internetowych; w szczególności pliki te pozwalają rozpoznać urządzenie końcowe Użytkownika Serwisu i odpowiednio wyświetlić stronę internetową, dostosowaną do jego indywidualnych potrzeb;<br /><br />b) tworzenia statystyk, które pomagają zrozumieć, w jaki sposób Użytkownicy Serwisu korzystają ze stron internetowych, co umożliwia ulepszanie ich struktury i zawartości;<br /> <br />c) utrzymanie sesji Użytkownika Serwisu (po zalogowaniu), dzięki której Użytkownik nie musi na każdej podstronie Serwisu ponownie wpisywać loginu i hasła (o ile funkcja logowań ie jest dostępna w Serwisie).<br />  <br />3. W ramach Serwisu stosowane są dwa zasadnicze rodzaje plików cookies:<br /> <br />a) "sesyjne" (session cookies), które są plikami tymczasowymi, które przechowywane są w urządzeniu końcowym Użytkownika do czasu wylogowania, opuszczenia strony internetowej lub wyłączenia oprogramowania (przeglądarki internetowej) i które są niezbędne do działania Serwisu oraz korzystania z usług dostępnych w ramach Serwisu;<br /> <br />b) "stałe" (persistent cookies),które przechowywane są w urządzeniu końcowym Użytkownika przez czas określony w parametrach plików cookies lub do czasu ich usunięcia przez Użytkownika.<br /> <br />4. W ramach Serwisu pliki cookies mogą być wykorzystywane w celu:<br /> <br />a) zbierania informacji o sposobie korzystania przez Użytkownika ze stron internetowych Serwisu (np.: informacji na temat obszarów, które odwiedza Użytkownik, czasu jaki na nich spędza oraz problemów jakie na nich napotyka), co pozwala poprawiać działanie stron internetowych Serwisu,<br /> <br />b) zapamiętania wybranych przez Użytkownika ustawień by zapewnić personalizację interfejsu Użytkownika (np. w zakresie wybranego języka lub regionu, z którego pochodzi Użytkownik, rozmiaru czcionki, wyglądu strony internetowej) oraz by dostarczyć Użytkownikowi bardziej spersonalizowane treści i usługi;<br /> <br />5. W wielu przypadkach przeglądark i internetowe domyślnie dopuszczają przechowywanie plików cookies w urządzeniu końcowym Użytkownika. Użytkownicy Serwisu mogą dokonać w każdym czasie zmiany ustawień dotyczących plików cookies w swoich przeglądarkach internetowych. Zmiana ustawień może w szczególności polegać na blokowaniu automatycznej obsługi plików cookies bądź na informowaniu o każdorazowym zamieszczeniu plików cookies w urządzeniu końcowym Użytkownika Serwisu. Szczegółowe informacje o możliwości i sposobach obsługi plików cookies dostępne są w ustawieniach przeglądarki internetowej.<br /> <br />6. Informuje, że ograniczenia stosowania plików cookies mogą wpłynąć na niektóre funkcjonalności dostępne na stronach internetowych Serwisu, co może negatywnie wpłynąć na wygodę korzystania z Serwisu lub doprowadzić do zablokowania niektórych funkcjonalności.</p>';
    }


    private function loginPage()
    {    
        $pLogin = [
            'title'     => [ "en" =>'Log into cmsRS system', "pl" => "Logowanie do systemu cmsRS" ],
            'short_title' => [ "en" =>'Login', "pl" => "Logowanie"],
            'description' => [ "en" =>'Description... Needed for google', "pl" => 'Opis..... Potrzebne dla googla'  ],
            'published' => 1,
            'commented' => 0,
            'type' => 'login',
            'images' => [
            ]
        ];
        (new Page)->wrapCreate($pLogin);
    }




}
