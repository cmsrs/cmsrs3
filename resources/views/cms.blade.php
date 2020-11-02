@extends('layouts.default')
@section('content')

  <h1 class="mb-4 mt-3">{{$page->translatesByColumnAndLang( 'title', $lang )}}</h1>

  <div id="app">

  <div id="page_id" data-page-id="{{$page->id}}"></div>  
  <div id="lang" data-lang="{{$lang}}"></div>    
  @if ( $page->type  === 'cms')

      @if( $page->images)
        @foreach($page->images as $image)
            <img class="m-3" src="{{$image->getHtmlImage()}}" alt="{{$image->translatesByColumnAndLang( 'alt', $lang ) }}" />
        @endforeach
      @endif

      <div class="mt-2">{!! $page->translatesByColumnAndLang( 'content', $lang ) !!}</div>

  @elseif($page->type  === 'gallery')

    @if( $page->images)
      <span v-for="image in images"  v-bind:key="image.id">    
            <img  @click="clickImg(image.id, image.org, image.altlang)" class="m-3 myImgs" :src="image.medium" :alt="image.altlang"  />
      </span>
    @endif

  @elseif($page->type  === 'contact')

    <div v-if="messageInfo"  class="alert alert-success" role="alert">
      @{{ messageInfo }}
    </div>
    <form>
      <div class="form-group">
        <label for="email">{{ __('Email address') }}</label>
        <input type="text" class="form-control" id="email" v-model="email"  @click="clearMessageInfo()">
        <div  v-if="emailErr"  class="invalid-feedback" style="display:block">
          @{{ emailErr }}
        </div>        
      </div>
      <div class="form-group">
        <label for="message">{{ __('Message') }}</label>
        <textarea class="form-control" id="message" rows="10" v-model="message"  @click="clearMessageInfo()"></textarea>
        <div  v-if="messageErr"  class="invalid-feedback" style="display:block">
          @{{ messageErr }}
        </div>        
      </div>
      <button type="submit" class="btn btn-primary" v-on:click="contact( $event )">{{ __('Submit') }}</button>
    </form>

  @elseif($page->type  === 'shop')

      <div class="container">
        <div class="row">
          <div class="col">
            @foreach($products as $product)
            <div class="container">
              <div class="row">
                <div class="col">
                @if( !empty($product['images']) &&  !empty($product['images'][0]) )
                  <img class="m-3" src="{{$product['images'][0]->getHtmlImage()}}" alt="{{$product['images'][0]->alt[$lang]}}" />
                @endif
                </div>
                <div class="col">
                  <ul class="list-unstyled">
                    <li>{{ __('Name') }}: {{$product['name']}}</li>
                    <li>Sku: {{$product['sku']}}</li>
                    <li>{{ __('Price') }}: ${{$product['price']}}</li>
                  <!--  <li>{{$product['description']}}</li> -->
                  </ul>
                  <?php
                    $id =  $product['id'];
                    $name = $product['name'];
                    $price = $product['price'];
                  ?>

                  <button v-on:click="addToCart({ id: {{$id}}, name: '{{$name}}', price: {{$price}} })" class="add-to-cart btn">{{ __('Add to Cart') }}</button>
                </div>
              </div>
            </div>
            <br><br>
            @endforeach

          </div>
          <div class="col">
            &nbsp;
          </div>            
          <div class="col mp-3">
          {{ __('SHOPPING CART') }}:
            <ul>
              <li class="mt-2" v-for="item in cart" v-bind:key="item.id">              
                <div>@{{ item.name }}</div>
                <span>$@{{ item.price  }} x @{{ item.qty }}</span>
                <button class="btn" v-on:click="increment(item)">+</button>
                <button class="btn" v-on:click="decrement(item)">-</button>
              </li>
            </ul>

            <div v-if="cart.length">
              <div class="cart-total">{{ __('Total') }}: $@{{ total }}</div>
              <br/><br/>
              <button class="btn" v-on:click="pay()">{{ __('Pay') }}</button>
            </div>

          </div>

        </div>
      </div>
  @else
      <!-- type == privacy-policy -->
      <div class="mt-2">{!! $page->translatesByColumnAndLang( 'content', $lang ) !!}</div>
  @endif

  @if ( $page->commented )
    <h5 class="mb-2 mt-3">Add comment: </h5>
    <form  method="get">
      <textarea v-model="comment" placeholder="add comment" rows="4" cols="60"></textarea>
      <p>
      <button v-on:click="addComment( $event )" class="add-to-cart btn">Add comment</button>
    </form>
    <h5 class="mb-2 mt-3">Comments: </h5>
    <li v-for="item in comments" :key="item.content"  style="list-style: none;" class="ml-3 mb-2 mt-2">
      @{{ item.content }}
    </li>
  @endif      
  </div> <!-- div app -->  

      <!-- The Modal -->
      <div id="myModal" class="modal">


        <!-- Modal Content (The Image) -->
        <img class="modal-content" id="img01">

        <!-- The Close Button -->
        <span class="close">&times;</span>

        <!-- Next and previous buttons -->
        <a class="prev" onclick="plusSlides(-1)">&#10094;</a>
        <a class="next" onclick="plusSlides(1)">&#10095;</a>

        <!-- Modal Caption (Image Text) -->
        <div id="caption"></div>
      </div>      


<?php
//dd($lang);
//dd($page->arrImages($lang));
?>
  <script>
    var imagesGlobal = JSON.parse('<?php echo json_encode($page->arrImages($lang)) ?>');
    console.log(images);
  </script>
  
  <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/axios/0.19.2/axios.js"></script>      
  <script src="/js/cmsrs.js"></script>

@stop
