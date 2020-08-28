@extends('layouts.default')
@section('content')

  <h1 class="mb-4 mt-3">{{$page->title}}</h1>

  <div id="app">
  <div id="page_id" data-page-id="{{$page->id}}"></div>  
  @if ( $page->type  === 'cms')

      @if( $page->images)
        @foreach($page->images as $image)
            <img class="m-3" src="{{$image->getHtmlImage()}}" alt="{{$image->name}}" />
        @endforeach
      @endif

      <div class="mt-2">{!! $page->content !!}</div>

  @elseif($page->type  === 'gallery')

      @if( $page->images)
        @foreach($page->images as $image)
            <img class="m-3" src="{{$image->getHtmlImage()}}" alt="{{$image->name}}" />
        @endforeach
      @endif


  @elseif($page->type  === 'shop')

      <div class="container">
        <div class="row">
          <div class="col-8">
            @foreach($products as $product)
            <div class="container">
              <div class="row">
                <div class="col">
                @if( !empty($product['images']) &&  !empty($product['images'][0]) )
                  <img class="m-3" src="{{$product['images'][0]->getHtmlImage()}}" alt="{{$product['images'][0]->name}}" />
                @endif
                </div>
                <div class="col">
                  <ul class="list-unstyled">
                    <li>Name: {{$product['name']}}</li>
                    <li>Sku: {{$product['sku']}}</li>
                    <li>Price: {{$product['price']}}</li>
                    <li>{{$product['description']}}</li>
                  </ul>
                  <?php
                    $id =  $product['id'];
                    $name = $product['name'];
                    $price = $product['price'];
                  ?>

                  <button v-on:click="addToCart({ id: {{$id}}, name: '{{$name}}', price: {{$price}} })" class="add-to-cart btn">Add to Cart</button>
                </div>
              </div>
            </div>
            <br><br>
            @endforeach

          </div>
          <div class="col-4">
            SHOPPING CART:
            <ul>
              <li v-for="item in cart" v-bind:key="item.id">
                <div>@{{ item.title }}</div>
                <span>@{{ item.price  }} x @{{ item.qty }}</span>
                <button class="btn" v-on:click="increment(item)">+</button>
                <button class="btn" v-on:click="decrement(item)">-</button>
              </li>
            </ul>

            <div v-if="cart.length">
              <div class="cart-total">Total: @{{ total }}</div>
              <br/><br/>
              <button class="btn" v-on:click="pay()">Pay</button>
            </div>

          </div>

        </div>
      </div>


  @endif

  @if ( $page->commented )
    <h5 class="mb-2 mt-3">Comments: </h5>
    <li v-for="item in comments" :key="item.content"  style="list-style: none;" class="ml-3 mb-2 mt-2">
      @{{ item.content }}
    </li>
    <h5 class="mb-2 mt-3">Add comment: </h5>
    <form  method="get">
      <textarea v-model="comment" placeholder="add comment" rows="4" cols="60"></textarea>
      <p>
      <button v-on:click="addComment( $event )" class="add-to-cart btn">Add comment</button>
    </form>
  @endif
  </div> <!-- div app -->  
  
  <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/axios/0.19.2/axios.js"></script>      
  <script src="/js/cmsrs.js"></script>
@stop
