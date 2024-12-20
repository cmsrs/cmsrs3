<?php $manyLangs = (count($langs) > 1); ?>
<?php $bg = env('DEMO_STATUS', false) ? 'bg-dark' : 'bg-secondary'; ?>
<?php //$bg = 'bg-secondary';?>
<?php $pLogin = $pageService::getFirstPageByType('login'); ?>
<?php $pRegister = $pageService::getFirstPageByType('register'); ?>
<?php $pHome = $pageService::getFirstPageByType('home'); ?>
<?php
$mainPage = $pageService::getFirstPageByType('main_page');
$urlMainPage = '/';
if ($mainPage) {
    $urlMainPage = $pageService->getUrl($mainPage, $lang);
}
?>
<?php $productNameSlug = ! empty($product_name_slug) ? $product_name_slug : null ?>

<div id="page_id" data-page-id="{{$page ? $page->id : ''}}"></div>  
<div id="lang" data-lang="{{$lang ?  $lang : ''}}"></div>    
<div id="is_shop" data-is-shop="{{ env('IS_SHOP', true) }}"></div>          
<div id="is_demo" data-is-demo="{{ env('DEMO_STATUS', false) }}"></div>          
<div id="commented" data-commented="{{ $page ? $page->commented : '' }}"></div>          



<nav class="navbar navbar-expand-lg navbar-dark  {{ $bg }} fixed-top lead">
    <a class="navbar-brand" href="{{ url($urlMainPage) }}">
        @php
            $path = public_path('images/mysite/logo.png');
            $isExists = file_exists($path);
        @endphp

        @if ($isExists)    
        <img id="logo_cmsrs" src="/images/mysite/logo.png" alt="{{ config('app.name', 'cmsRS') }}" />
        @else
        <img id="logo_cmsrs" src="/images/cms/logo_cmsrs.png" alt="{{ config('app.name', 'cmsRS') }}" />
        @endif
    </a>
  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarsExampleDefault">
      <ul class="nav-main-rs  navbar-nav me-auto">
          @foreach ($menus as $menu)
            @php 
                $pagesPublishedAndAccess = (new App\Services\Cmsrs\MenuService)->pagesPublishedAndAccess($menu)->get(); 
            @endphp
            <li class="nav-item dropdown">
            @if ($pagesPublishedAndAccess->count() == 1)
              <a class=" ms-3 nav-link" href="{{ $pageService->getUrl($pagesPublishedAndAccess->first(),  $lang)}}">
                {{$pageService->translatesByColumnAndLang(  $pagesPublishedAndAccess->first(), 'short_title', $lang ) }}
              </a>
            @else
              <a class="nav-link dropdown-toggle ms-3" href="#" id="dropdown{{ $menu->id }}" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                {{ (new App\Services\Cmsrs\MenuService)->translatesByColumnAndLang($menu, 'name', $lang ) }}
              </a>
              <div class="dropdown-menu" aria-labelledby="dropdown{{ $menu->id }}">
                @foreach ((new App\Services\Cmsrs\MenuService)->pagesPublishedTree($pagesPublishedAndAccess) as $pageMenu)
                    <a class="dropdown-item" href="{{ $pageService->getUrl($pageMenu, $lang)}}">
                      {{  $pageService->translatesByColumnAndLang($pageMenu, 'short_title', $lang ) }}
                    </a>
                    @if (! empty($pageMenu['children']) && ! empty($pageMenu->published))
                        @foreach ($pageMenu['children'] as $p)
                            <a class="dropdown-item ms-3" href="{{ $pageService->getUrl($p, $lang)}}">
                                {{ $pageService->translatesByColumnAndLang($p, 'short_title', $lang ) }}
                            </a>
                        @endforeach
                    @endif
                @endforeach
                </div>
            @endif
            </li>
            @endforeach
      </ul>
  </div>
    <ul class="list-unstyled  m-0 p-0">
      @if (env('IS_SHOP', true))
        <li class="nav-item ms-1  me-4 cursor-pointer" v-on:click="toglebasket()">
          <i style="font-size:40px;color:#ff5050" class="fa">&#xf07a;</i>
          <span style="color:#ff5050">@{{ cart_length ? cart_length : '' }}</span>
        </li>        
        <div class="p-4 me-3" id="appbasket" style="display: none" >
          <div v-if="cart_length === 0" >{{ __('There are no products in the cart') }}</div>
          <div v-if="cart_length !== 0" >{{ __('SHOPPING CART') }}</div>          
          <ul>
            <li class="mt-2" v-for="item in cart" v-bind:key="item.id">              
              <div>@{{ item.name }}</div>
              <span>@{{ item.price /100 }} zł x @{{ item.qty }}</span>
              <div class="button-group">
                <button class="btn" v-on:click="increment(item)">+</button>
                <button class="btn" v-on:click="decrement(item)">-</button>
              </div>
            </li>
          </ul>
          <div v-if="cart.length">
            <div class="ms-4 cart-total">{{ __('Total') }}: @{{ total_sanit }} zł</div>
            <button class="ms-4 btn" v-on:click="pay()">{{ __('Pay') }}</button>
          </div>      
        </div>          
    @endif
    </ul>
    <ul class="nav navbar-nav ms-auto" >
      <!-- Authentication Links -->
      @if ($pLogin && ! env('DEMO_STATUS', false))
        @php 
            $loginStyle = $manyLangs ? 'me-4' : '';
        @endphp
        @guest            
              <li class="nav-item {{$loginStyle}}">
                  <a class="nav-link" href="{{ $pageService->getUrl($pLogin, $lang) }}">
                    {{ $pageService->translatesByColumnAndLang($pLogin, 'short_title', $lang ) }}
                  </a>
              </li>
              @if (Route::has('register') && $pRegister )
                  <li class="nav-item  {{$loginStyle}}">
                      <a class="nav-link" href="{{ $pageService->getUrl($pRegister, $lang) }}">
                        {{ $pageService->translatesByColumnAndLang($pRegister, 'short_title', $lang ) }}
                      </a>
                  </li>
              @endif
        @else
              @if ( $pHome )
              <li class="nav-item active {{$loginStyle}}">
                    <a class="nav-link" href="{{ $pageService->getUrl($pHome, $lang) }}">
                      {{ $pageService->translatesByColumnAndLang($pHome, 'short_title', $lang ) }}
                    </a>
              </li>
              @endif
              <form id="logout-form" action="{{ route('logout') }}" method="POST" >
                                        @csrf
                                        <input type="submit" value="{{ __('Log out') }}"  class="nav-link" style="background:none; border-width:0px; cursor: pointer;" />
              </form>
        @endguest
      @endif
      @if ($manyLangs)
        <li class="d-flex flex-row">
        @foreach ($langs as $ll)
            @php  
                $classActive = ($ll == $lang) ? 'active' : '';
            @endphp
            <div class="ms-2  nav-item">
              <a class="changelang nav-link  {{ $classActive }}" href="{{ route('changelang', ['lang' => $ll, 'pageId' => $page->id, 'productSlug' => ($productNameSlug ? $productNameSlug[$ll]  : null)] ) }}">
                <img src="/images/cms/{{ $ll }}.png" alt="{{ $ll }}" /> {{ strtoupper($ll) }}
              </a>
            </div>
          @endforeach
        </li>
       @endif
     </ul>
</nav>