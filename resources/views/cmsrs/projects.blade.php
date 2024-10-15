@extends('layouts.default')
@section('content')

<h1 class="mb-4 mt-3">{{$pageService->translatesByColumnAndLang($page, 'title', $lang )}}</h1>

<div class="mt-2">{!! $pageService->translatesByColumnAndLang($page, 'content', $langs[0] ) !!}</div>

@stop