@extends('layouts.default')

@section('content')
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8">


                @if (session('status'))
                    <div class="alert alert-success" role="alert">
                        {{ session('status') }}
                    </div>
                @endif

            <div class="border mt-3 p-3 mb-4">
                    {{ __('ORDERS') }}:
                    <div class="m-3 ">
                        <?php if( empty($orders) ){ ?>
                            {{ __('No orders') }}
                        <?php }else{ ?>
                            <ul  class="mt-3 list-group">
                            <?php foreach($orders as $order){ ?>
                                <li class="list-group-item"><a href="{{$order['product_url']}}" ><img src="{{$order['product_img']}}"  alt="{{$order['name']}}" ></a><span class="ms-3"> <a href="{{$order['product_url']}}" > {{$order['name']}} </a> <span class="ms-3">{{$order['unitPrice'] / 100 }} zł x {{$order['qty'] }}</span> </span> </li>
                            <?php } ?>
                            </ul>
                        <?php } ?>
                    </div>
            </div>    

            <div class="border mt-3 p-3 mb-4">
                {{ __('TO PAY') }}:            
                <ul  class="mt-3 list-group">
                    <?php foreach($checkouts as $checkout){ ?>
                        <li class="ms-4" >{{  __('Order number') }} : {{ $checkout['id'] }}. {{  __('Amount to pay') }}  <strong> {{ $checkout['price_total_add_deliver'] }} zł</strong>  = {{ $checkout['price_total']  }} zł + {{  __('deliver') }} : {{ $checkout['price_deliver'] }} zł</li>
                        <ul>
                        <?php foreach($checkout['baskets'] as $basket){ ?>
                            <li class="ms-4" ><a href="{{ $basket['product_url'] }}"> {{ $basket['product_name'] }}</a> {{ $basket['qty'] }} x {{ $basket['price'] }} zł </li>
                        <?php } ?>
                        </ul>
                    <?php } ?>
                </ul>
            </div>

            <div class="border mt-3 p-3">                
                {{ __('SHOPPING CART') }}:            
                <div class="col">

                    <ul>
                    <li class="mt-2" v-for="item in cart" v-bind:key="item.id">              
                        <div>@{{ item.name }}</div>
                        <span>@{{ item.price / 100 }} zł x @{{ item.qty }}</span>
                        <button class="btn" v-on:click="increment(item)">+</button>
                        <button class="btn" v-on:click="decrement(item)">-</button>
                    </li>
                    </ul>

                    <div v-if="cart.length">
                        <div class="cart-total">{{ __('Total') }}: @{{ total_sanit }} zł</div>
                        <br/><br/>
                        <button class="ms-4 btn" v-on:click="pay()">{{ __('Pay') }}</button>
                    </div>
                </div>

            </div>

        </div>
    </div>
</div>
@endsection
