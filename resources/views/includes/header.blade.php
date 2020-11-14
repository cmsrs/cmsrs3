<?php $manyLangs = ( 1 < count($langs)); ?>
<?php $bg = env('DEMO_STATUS') ?  'bg-dark' : 'bg-secondary'; ?>
<?php //$bg = 'bg-secondary'; ?>
<?php $pLogin = App\Page::getFirstPageByType('login');  ?>
<?php 
  $mainPage = App\Page::getFirstPageByType('main_page');  
  $urlMainPage = '/';
  if($mainPage){
    $urlMainPage = $mainPage->getUrl($lang);  
  }
?>


<nav class="navbar navbar-expand-md navbar-dark  {{ $bg }} fixed-top lead">
    <a class="navbar-brand" href="{{ url($urlMainPage) }}">
        <img src="/images/cms/logo_cmsrs.png" alt="{{ config('app.name', 'cmsRS') }}" />        
    </a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarsExampleDefault">

      <ul class="navbar-nav mr-auto">
          <?php foreach ($menus as $menu) { ?>
            <?php $pagesPublishedAndAccess = $menu->pagesPublishedAndAccess()->get(); ?>    
            <li class="nav-item dropdown">
            <?php if( 1 == $pagesPublishedAndAccess->count() ){  ?>
              <a class=" ml-3 nav-link" href="{{$pagesPublishedAndAccess->first()->getUrl($lang)}}">{{ $pagesPublishedAndAccess->first()->translatesByColumnAndLang( 'short_title', $lang ) }}</a>
            <?php }else{ ?>
              <a class="nav-link dropdown-toggle ml-3" href="#" id="dropdown{{ $menu->id }}" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">{{ $menu->translatesByColumnAndLang( 'name', $lang ) }}</a>
              <div class="dropdown-menu" aria-labelledby="dropdown{{ $menu->id }}">
                  <?php foreach ($menu->pagesPublishedTree($pagesPublishedAndAccess) as $pageMenu) { ?>                                
                    <a class="dropdown-item" href="{{$pageMenu->getUrl($lang)}}">{{ $pageMenu->translatesByColumnAndLang( 'short_title', $lang ) }}</a>
                    <?php if( !empty($pageMenu['children']) && !empty($pageMenu->published) ){ ?>
                        <?php foreach ($pageMenu['children'] as $p) { ?>                    
                            <a class="dropdown-item ml-3" href="{{$p->getUrl($lang)}}">{{ $p->translatesByColumnAndLang( 'short_title', $lang ) }}</a>
                        <?php } ?>
                    <?php } ?>                  
                  <?php } ?>
                </div>
            <?php } ?>    
            </li>
          <?php } ?>
      </ul>
          
      <ul class="nav navbar-nav ml-auto" >
      <!-- Authentication Links -->
      <?php if($pLogin){ ?>
        <?php $loginStyle = $manyLangs ? 'mr-4' : ''; ?>          
        @guest            
              <li class="nav-item {{$loginStyle}}">
                  <a class="nav-link" href="{{ $pLogin->getUrl($lang) }}">{{ $pLogin->translatesByColumnAndLang( 'short_title', $lang ) }}</a>
              </li>
              @if (Route::has('register'))
                  <li class="nav-item">
                      <a class="nav-link" href="{{ route('register') }}">{{ __('Register') }}</a>
                  </li>
              @endif
        @else
              <li class="nav-item active {{$loginStyle}}">
                  <a class="nav-link" href="{{ route('home') }}">{{ __('Home') }}<span class="sr-only">(current)</span></a>
              </li>
        @endguest
      <?php } ?>
          <?php if( $manyLangs ) { ?>
            <?php foreach($langs as $ll){  ?>
              <?php $classActive = ($ll == $lang) ? 'active' : ''; ?>
              <li class="nav-item {{ $classActive }}">
                  <a class="nav-link" href="{{ $page->getUrl($ll) }}"><img src="/images/cms/{{ $ll }}.png" alt="{{ $ll }}" /> {{ strtoupper($ll) }}</a>
              </li>
            <?php } ?>
          <?php } ?>          
       </ul>

  </div>
</nav>
