@extends('layouts.default')
@section('content')

  <h1 class="mb-4 mt-3">{{$h1}}</h1>

  <form  class='mt-4 mb-4' action='{{  $url_search }}' method='get' >
                    <div class='mt-4 mb-4 input-group'>
                        <input type='search' name='key' value='{{ $key }}' class='form-control rounded' placeholder='{{ __("Search products") }}' aria-label='{{ __("Search") }}'
                        aria-describedby='search-addon' />
                        <button type='submit' class='btn btn-outline-primary'>Search</button>
                    </div>                
  </form>


  <div id="app">

      <?php //reaped code - dry - todo ?>
      <div class="container">
        <div class="row">
          <div class="col">
              
              <div class="container">
                @if( empty($products) )
                <div class="alert alert-info" role="alert">
                  {{ __('Not products found') }}
                </div>
                @else
                <?php $i = 0; ?>
                @foreach($products as $product)
                <?php  $ifRow = !($i%2); ?>
                <?php if($ifRow){ ?>
                  <div class="row mb-5">
                <?php } ?>
                  <div class="col">
                  @if( !empty($product['images']) &&  !empty($product['images'][0]) )
                    <a href="{{$product['url_product'][$lang] }}">
                      <img class="m-3" src="{{ (new App\Services\Cmsrs\ImageService)->getHtmlImage($product['images'][0])}}" alt="{{$product['images'][0]->alt[$lang]}}" />
                    </a>
                  @endif
<!--                  </div>
                  <div class="col">-->
                    <ul class="ml-3 list-unstyled">
                      <li>{{ __('Name') }}: <a href="{{$product['url_product'][$lang] }}">{{$product['product_name'][$lang] }}</a></li>
                      <li>Sku: {{$product['sku']}}</li>
                      <li>{{ __('Price') }}: {{$product['price'] / 100}} zł</li>
                      <li>{{$product['product_description'][$lang] }}</li>
                    </ul>
                    <?php
                      $id =  $product['id'];
                      $name = $product['product_name'][$lang];
                      $price = $product['price'];
                    ?>
                    <button v-on:click="addToCart({ id: {{$id}}, name: '{{$name}}', price: {{$price}} })" class="add-to-cart btn">{{ __('Add to Cart') }}</button>
                  </div>

                <?php if(!$ifRow){ ?>
                </div>
                <?php } ?>

                <?php $i++; ?>
                @endforeach
                @endif
              </div>
              
              <br><br>

          </div>






        </div>
      </div>

  </div> <!-- div app -->  
  
<!--  
  <script src="/js/lib/vue.js"></script>
  <script src="/js/lib/axios.js"></script>
  <script src="/js/shop.js"></script>  
-->  


@stop
