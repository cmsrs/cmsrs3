<!doctype html>
<html>
<head>
   @include('includes.head')
   @includeIf('includes.mysite')   
   <script>
      var slider_images = {!! !empty($slider_images) ? json_encode($slider_images->toArray()) : json_encode('') !!};
   </script>

</head>
<body>

   <div id="appall" >

      @include('includes.header')

      <main role="main" class="pt-5 mb-5">
      @yield('content')

      <?php
         $box1 = (new \app\Page)->getPageDataByShortTitleCache( 'main_page_box1', 'content' );
         $box2 = (new \app\Page)->getPageDataByShortTitleCache( 'main_page_box2', 'content' );
         $box3 = (new \app\Page)->getPageDataByShortTitleCache( 'main_page_box3', 'content' );
      ?>
      <?php  if( $box1 && $box2 && $box3 ){ ?>
      <div class="mt-5 container">
         <div class='row'>
              <div class='col-md-4'>
                <h3><?php echo (new \app\Page)->getPageDataByShortTitleCache( 'main_page_box1', 'title' ) ?></h3>
                <p>
                  <?php echo $box1 ?>
                </p>
              </div>
              <div class='col-md-4'>
                <h3><?php echo (new \app\Page)->getPageDataByShortTitleCache( 'main_page_box2', 'title'  ) ?></h3>
                <p>
                  <?php echo $box2 ?>
                </p>
              </div>
              <div class='col-md-4'>
                <h3><?php echo (new \app\Page)->getPageDataByShortTitleCache( 'main_page_box3', 'title'  ) ?></h3>
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
