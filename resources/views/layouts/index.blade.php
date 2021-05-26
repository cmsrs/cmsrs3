<!doctype html>
<html>
<head>
   @include('includes.head')
   @includeIf('includes.mysite')
</head>
<body>

   <div id="appall" >
      <div id="page_id" data-page-id="{{$page->id}}"></div>  
      <div id="lang" data-lang="{{$lang}}"></div>    

      @include('includes.header')

      <main role="main" class="pt-5 mb-5">
      @yield('content')
      </main><!-- /.container -->
   </div>

<script type="application/javascript" src="/js/lib/vue.js"></script>
<script type="application/javascript" src="/js/lib/axios.js"></script>
<script type="application/javascript" src="/js/cmsrs.js"></script>  


@include('includes.footer')
</body>
</html>
