@extends('layouts.index')
@section('content')

@if( $page->translatesByColumnAndLang( 'content', $lang ) )
  @if( $is_new_orders )
    <script>
      //alert('new order');
      localStorage.clear();
    </script>

    <div class="container">
      <div class="alert alert-success text-center" role="alert">
      {{ __('Thank you for purchasing products in our store.') }}

      @if (Auth::check())
      <br>
        <?php $pHome = App\Page::getFirstPageByType('home');  ?>
        {{ __('Your:') }} <a class="nav-link" href="{{ $pHome->getUrl($lang) }}">{{ __('Orders') }}</a>
      @endif
      </div>
    </div>
  @endif  
  {!! $page->translatesByColumnAndLang( 'content', $lang ) !!}
@endif



@stop
