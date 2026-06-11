<!doctype html>
<html>
<head>
   @include('includes.head')
   @includeIf('includes.mysite')
</head>
<body>

   <div id="appall" v-cloak>
      

      @include('includes.header')

      <main role="main" class="container pt-5 mb-5">
      @yield('content')
      </main><!-- /.container front -->
   </div>
   <style>
      [v-cloak] {
         display: none !important;
      }
   </style>   


   <script type="application/javascript" src="/js/lib/vue.global.min.js"></script>
   <script type="application/javascript" src="/js/lib/axios.min.js"></script>
   <script type="application/javascript" src="/js/cmsrs.js"></script>  

   @php $view = empty($view) ? '' : $view; @endphp
   @if( 'cmsrs.gallery' == $view )
      <script type="application/javascript">
         var imagesGlobal = @json($imagesGlobal ?? []);
      </script>
      <script type="application/javascript" src="/js/gallery.js"></script>  
   @endif


   @if( 'cmsrs.cms' == $view )
      @if( ($page->type == 'contact') &&  $re_public )
         <script src="https://www.google.com/recaptcha/api.js?render={{ $re_public }}"></script>
         <script>
            var rePublic = '{{ $re_public }}';
         </script>
      @endif      
   @endif

   @if( 'cmsrs.shoppingsuccess' == $view )
      <script>
         localStorage.removeItem('cart');
         //localStorage.clear();
      </script>
   @endif


   @include('includes.footer')
   @includeIf('includes.mysitefooter')   
</body>
</html>
