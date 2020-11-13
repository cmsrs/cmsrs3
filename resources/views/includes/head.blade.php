<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
<link rel="icon" href="../../../../favicon.ico">

<title>{{ $page->translatesByColumnAndLang( 'title', $lang ) ?? config('app.name', 'cmsRS') }}</title>
<meta name="author" content="Robert Szczepanski - cmsRS">
<meta name="description" content="{{  $page->translatesByColumnAndLang( 'description', $lang ) ?? config('app.name', 'cmsRS') }}">
<!-- Bootstrap core CSS -->
<link href="/css/lib/bootstrap.min.css" rel="stylesheet">

<!-- Custom styles for this template -->
<link href="/css/front.css" rel="stylesheet">
<script>
    var lang = '{{ !empty($lang) ? $lang : '' }}';
</script>
