@extends('layouts.default')
@section('content')
<div class="starter-template">

@if( $page->content )
  {!! $page->content !!}
@endif

</div>
@stop
