<!doctype html>
<html>
<head>
   @include('includes.head')
   @includeIf('includes.mysite')   
   <script>
      var slider_images = <?php echo json_encode( !empty($slider_images) ? $slider_images->toArray() : []) ?>;
   </script>

</head>
<body>

   <div id="appall" >

      @include('includes.header')

      <main role="main" class="pt-5 mb-5">
      @yield('content')

      <?php

         $box1 = $pageService->getPageDataByShortTitleCache( 'main_page_box1', 'content', $lang );
         $box2 = $pageService->getPageDataByShortTitleCache( 'main_page_box2', 'content', $lang );
         $box3 = $pageService->getPageDataByShortTitleCache( 'main_page_box3', 'content', $lang );
      ?>
      <?php  if( $box1 && $box2 && $box3 ){ ?>
      <div class="mt-5 container">
         <div class='row'>
              <div class='col-md-4'>
                <h3><?php echo $pageService->getPageDataByShortTitleCache( 'main_page_box1', 'title', $lang ); ?></h3>
                <p>
                  <?php echo $box1 ?>
                </p>
              </div>
              <div class='col-md-4'>
                <h3><?php echo $pageService->getPageDataByShortTitleCache( 'main_page_box2', 'title', $lang ); ?></h3>
                <p>
                  <?php echo $box2 ?>
                </p>
              </div>
              <div class='col-md-4'>
                <h3><?php echo $pageService->getPageDataByShortTitleCache( 'main_page_box3', 'title', $lang ); ?></h3>
                <p>
                  <?php echo $box3 ?>
                </p>
              </div>
         </div>
      </div>    
      <?php }  ?>  

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
