@extends('layouts.index')
@section('content')

@if( $content )
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
        @php $pHome = $pageService->getFirstPageByType('home');  @endphp
        {{ __('Your:') }} <a class="nav-link" href="{{ $pageService->getUrl($pHome, $lang) }}">{{ __('Orders') }}</a>
      @endif
      </div>
    </div>
  @endif  
  {!! $content !!}
@endif



@stop
