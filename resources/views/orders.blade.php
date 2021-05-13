@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card">
                <!-- const -->
                <div class="card-header">
                    <!--
                    <a href="{{ route('home') }}">{{ __('Home') }}<span class="sr-only">Dashboard</span></a>
                    -->
                    <ul   class="nav nav-tabs">
                        <li class="nav-item"><a class="nav-link" href="{{ route('basket') }}">{{ __('Basket') }}</a></li>
                        <li class="nav-item"><a class="nav-link active" href="{{ route('orders') }}">{{ __('Orders') }}</a></li>
                    </ul>
                </div>

                <div class="card-body">
                    @if (session('status'))
                        <div class="alert alert-success" role="alert">
                            {{ session('status') }}
                        </div>
                    @endif

                    {{ __('ORDERS') }}:
                    <div class="m-3">
                        <?php if( empty($orders) ){ ?>
                            {{ __('No orders') }}
                        <?php }else{ ?>
                            <ul  class="mt-3 list-group">
                            <?php foreach($orders as $order){ ?>
                                <li class="list-group-item"><a href="{{$order['product_url']}}" ><img src="{{$order['product_img']}}"  alt="{{$order['name']}}" ></a><span class="ml-3"> <a href="{{$order['product_url']}}" > {{$order['name']}} </a> <span class="ml-3">{{$order['unitPrice'] / 100 }} zł x {{$order['qty'] }}</span> </span> </li>
                            <?php } ?>
                            </ul>
                        <?php } ?>
                    </div>

                </div>
            </div>
        </div>
    </div>
</div>
@endsection
