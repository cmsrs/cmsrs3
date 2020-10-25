@extends('layouts.default')
@section('content')
<div class="starter-template">

@if( $page->translatesByColumnAndLang( 'content', $lang ) )
  {!! $page->translatesByColumnAndLang( 'content', $lang ) !!}
@endif

</div>
@stop
