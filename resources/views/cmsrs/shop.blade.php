@extends('layouts.default')
@section('content')

  <h1 class="mb-4 mt-3">{{$h1_title}}</h1>

  <div id="app">

      <div class="container">
        <div class="row">
          <div class="col">
            @if( !empty($product) )
              <div class="container">
                <div class="row">
                  <div class="col">
                  {{ __('Category') }}: <a href="{{ $page_url }}">{{ $h1_title}}</a>
                  <br>
                  @if( !empty($product['images']) &&  !empty($product['images'][0]) )
                      <x-show-image :image="$product['images'][0]" :lang="$lang"  />
                  @endif

<!--                  </div>
                  <div class="col">-->
                    <ul class="ms-3 list-unstyled">
                      @if( config('cmsrs.demo') )
                      <li class="product-test">{{ __('Test Product') }}</li>
                      @endif
                      <li>{{ __('Name') }}: {{$product['product_name'][$lang] }}</li>
                      <li>Sku: {{$product['sku']}}</li>
                      <li>{{ __('Price') }}: {{$product['price_description'] }} </li>
                      <li>{{$product['product_description'][$lang] }}</li>
                    </ul>
                    @php
                      $id =  $product['id'];
                      $name = $product['product_name'][$lang];
                      $price = $product['price'];
                    @endphp
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
                      <span>@{{ item.price_description }}  x @{{ item.qty }}</span>
                      <div class="button-group">
                      <button class="btn" v-on:click="increment(item)">+</button>
                      <button class="btn" v-on:click="decrement(item)">-</button>
                      </div>
                    </li>
                  </ul>

                  <div v-if="cart.length">
                    <div class="cart-total">{{ __('Total') }}: @{{ total_sanit }} </div>
                    <br/><br/>
                    <button class="btn" v-on:click="pay()">{{ __('Pay') }}</button>
                  </div>

                </div>
              <!--product basket - stop -->


                </div>
              </div>


            @else
              
              <div class="container">
                @php $i = 0; @endphp
                @foreach($products as $product)
                @php  $ifRow = !($i%2); @endphp
                @if($ifRow)
                  <div class="row mb-5">
                @endif
                  <div class="col">
                  @if( !empty($product['images']) &&  !empty($product['images'][0]) )
                    <a href="{{$product['url_product'][$lang] }}">
                      <x-show-image :image="$product['images'][0]" :lang="$lang"  class="m-3"/>
                    </a>
                  @endif
<!--                  </div>
                  <div class="col">-->
                    <ul class="ms-3 list-unstyled">
                      @if( config('cmsrs.demo') )                      
                      <li class="product-test">{{ __('Test Product') }}</li>
                      @endif
                      <li>{{ __('Name') }}: <a href="{{$product['url_product'][$lang] }}">{{$product['product_name'][$lang] }}</a></li>
                      <li>Sku: {{$product['sku']}}</li>
                      <li>{{ __('Price') }}: {{$product['price_description'] }} </li>
                      <li>{{$product['product_description'][$lang] }}</li>
                    </ul>
                    @php
                      $id =  $product['id'];
                      $name = $product['product_name'][$lang];
                      $price = $product['price'];
                    @endphp
                    <button v-on:click="addToCart({ id: {{$id}}, name: '{{$name}}', price: {{$price}} })" class="add-to-cart btn">{{ __('Add to Cart') }}</button>
                  </div>

                @if(!$ifRow)
                </div>
                @endif

                @php $i++; @endphp
                @endforeach
              </div>
              
              <br><br>
            @endif

          </div>






        </div>
      </div>

  </div> <!-- div app -->  
  
@stop
