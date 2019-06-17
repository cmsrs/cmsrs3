@extends('layouts.default')
@section('content')

  <h1 class="mb-4 mt-3">{{$page->title}}</h1>

  @if ( $page->type  === 'cms')

      @if( $page->images)
        @foreach($page->images as $image)
            <img class="m-3" src="{{$image->getHtmlImage()}}" alt="{{$image->name}}" />
        @endforeach
      @endif

      <div class="mt-2">{{$page->content}}</div>

  @elseif($page->type  === 'gallery')

      @if( $page->images)
        @foreach($page->images as $image)
            <img class="m-3" src="{{$image->getHtmlImage()}}" alt="{{$image->name}}" />
        @endforeach
      @endif

  @endif
@stop
