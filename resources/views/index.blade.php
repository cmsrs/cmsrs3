@extends('layouts.index')
@section('content')

@if( $page->translatesByColumnAndLang( 'content', $lang ) )
  {!! $page->translatesByColumnAndLang( 'content', $lang ) !!}
@endif

@stop
