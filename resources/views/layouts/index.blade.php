<!doctype html>
<html>
<head>
   @include('includes.head')
   @includeIf('includes.mysite')
</head>
<body>
@include('includes.header')


<main role="main">
@yield('content')
</main><!-- /.container -->


@include('includes.footer')
</body>
</html>
