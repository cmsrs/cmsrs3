@extends('layouts.default')
@section('content')

  <h1 class="mb-4 mt-3">{{$h1}}</h1>

  <div id="app">


      <div class="container">
        <div class="row">
          <div class="col">
            @if( !empty($product) )
              <div class="container">
                <div class="row">
                  <div class="col">
                  {{ __('Category') }}: <a href="{{ $pageService->getUrl($page, $lang)}}">{{ $pageService->translatesByColumnAndLang( $page, 'title', $lang )}}</a>
                  <br>
                  @if( !empty($product['images']) &&  !empty($product['images'][0]) )
                      <img class="m-3" src="{{  (new App\Services\Cmsrs\ImageService) ->getHtmlImage( $product['images'][0] )}}" alt="{{$product['images'][0]->alt[$lang]}}" />
                  @endif
<!--                  </div>
                  <div class="col">-->
                    <ul class="ms-3  ist-unstyled">
                      <li>{{ __('Name') }}: {{$product['product_name'][$lang] }}</li>
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

              <!--product basket - start -->
              <div class="col">
                  &nbsp;
                </div>            
                <div class="col mp-3">
                  {{ __('SHOPPING CART') }}:
                  <ul>
                    <li class="mt-2" v-for="item in cart" v-bind:key="item.id">              
                      <div>@{{ item.name }}</div>
                      <span>@{{ item.price /100 }} zł x @{{ item.qty }}</span>
                      <div class="button-group">
                      <button class="btn" v-on:click="increment(item)">+</button>
                      <button class="btn" v-on:click="decrement(item)">-</button>
                      </div>
                    </li>
                  </ul>

                  <div v-if="cart.length">
                    <div class="cart-total">{{ __('Total') }}: @{{ total_sanit }} zł</div>
                    <br/><br/>
                    <button class="btn" v-on:click="pay()">{{ __('Pay') }}</button>
                  </div>

                </div>
              <!--product basket - stop -->


                </div>
              </div>


            @else
              
              <div class="container">
                <?php $i = 0; ?>
                @foreach($products as $product)
                <?php  $ifRow = !($i%2); ?>
                <?php if($ifRow){ ?>
                  <div class="row mb-5">
                <?php } ?>
                  <div class="col">
                  @if( !empty($product['images']) &&  !empty($product['images'][0]) )
                    <a href="{{$product['url_product'][$lang] }}">
                      <img class="m-3" src="{{  (new App\Services\Cmsrs\ImageService)->getHtmlImage($product['images'][0])}}" alt="{{$product['images'][0]->alt[$lang]}}" />
                    </a>
                  @endif
<!--                  </div>
                  <div class="col">-->
                    <ul class="ms-3 list-unstyled">
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
              </div>
              
              <br><br>
            @endif

          </div>






        </div>
      </div>

  </div> <!-- div app -->  
  
@stop
