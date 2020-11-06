@extends('layouts.default')
@section('content')

<h1 class="mb-4 mt-3">{{$page->translatesByColumnAndLang( 'title', $lang )}}</h1>

<div class="mt-2">{!! $page->translatesByColumnAndLang( 'content', $langs[0] ) !!}</div>

@stop
<script>
    var lang = '{{ $lang }}';
</script>
