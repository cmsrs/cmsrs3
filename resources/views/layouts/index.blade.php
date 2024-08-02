<!doctype html>
<html>
<head>
   @include('includes.head')
   @includeIf('includes.mysite')   
   <script>
      var slider_images = {!! !empty($slider_images) ? json_encode($slider_images->toArray()) : '' !!};
   </script>

</head>
<body>

   <div id="appall" >

      @include('includes.header')

      <main role="main" class="pt-5 mb-5">
      @yield('content')
      </main><!-- /.container -->
   </div>

<?php if( !empty($slider_images) ){ ?>
   <script type="application/javascript" src="/js/slider.js"></script>  
<?php } ?>
<script type="application/javascript" src="/js/lib/vue.js"></script>
<script type="application/javascript" src="/js/lib/axios.js"></script>
<script type="application/javascript" src="/js/cmsrs.js"></script>  


@include('includes.footer')
@includeIf('includes.mysitefooter')
</body>
</html>
