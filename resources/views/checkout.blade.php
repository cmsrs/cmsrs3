@extends('layouts.default')
@section('content')

  <h1 class="mb-4 mt-3">{{$h1}}</h1>


  <div class="container">
      <div class="col">
          <div class="alert alert-secondary" role="alert">
          {{ __('SHOPPING CART') }}:
          </div>
          <div id="token" data-token="{{$token}}"></div>          
          <ul class="list-unstyled">
            <li class="mt-2" v-for="item in cart" v-bind:key="item.id">              
            <div class="container">
                <div class="row">
                  <div class="col"> 
                    <a v-bind:href="item.url_product" ><img v-bind:src="item.url_image"  v-bind:alt="item.name" ></a>                                
                  </div>
                  <div class="col"> 
                    <div><a v-bind:href="item.url_product" >@{{ item.name }}</a></div>                    
                  </div>            
                  <div class="col"> 
                    <span>@{{ item.price / 100 }} zł x @{{ item.qty }}</span>
                    <button class="btn" v-on:click="increment(item)">+</button>
                    <button class="btn" v-on:click="decrement(item)">-</button>
                  </div>
                </div>
              </div>
            </li>
          </ul>
          <div v-if="cart.length">
              <div class="cart-total">{{ __('Total') }}: @{{ total_sanit }} zł</div>
              <br/><br/>
              <button class="btn" v-on:click="tobank()">{{ __('Go to bank') }}</button>
          </div>
      </div>

  </div> <!-- div container -->    
  
@stop