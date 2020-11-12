@extends('layouts.default')
@section('content')

<h1 class="mb-4 mt-3">{{$page->translatesByColumnAndLang( 'title', $lang )}}</h1>

<div class="mt-2">{!! $page->translatesByColumnAndLang( 'content', $lang ) !!}</div>

@stop