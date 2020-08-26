<!doctype html>
<html>
<head>
   @include('includes.head')
</head>
<body>
@include('includes.header')


<main role="main" class="container">
@yield('content')
@include('includes.links')
</main><!-- /.container -->

@include('includes.footer')
</body>
</html>
