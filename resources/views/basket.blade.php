@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card">
                <div class="card-header">
                    <a href="{{ route('home') }}">{{ __('Home') }}<span class="sr-only">Dashboard</span></a>
                </div>

                <div class="card-body">
                    @if (session('status'))
                        <div class="alert alert-success" role="alert">
                            {{ session('status') }}
                        </div>
                    @endif
                    <div id="app">

                        <div id="token" data-token="{{$token}}"></div>
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
                                <button class="btn" v-on:click="tobank()">{{ __('Go to bank') }}</button>
                            </div>
                        </div>

                    </div>


                </div>
            </div>
        </div>
    </div>
</div>


<script type="application/javascript" src="/js/lib/vue.js"></script>
<script type="application/javascript" src="/js/lib/axios.js"></script>
<script type="application/javascript" src="/js/shop.js"></script>
@endsection
