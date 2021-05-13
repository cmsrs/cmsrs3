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
                        <li class="nav-item"><a class="nav-link" href="{{ route('orders') }}">{{ __('Orders') }}</a></li>
                    </ul>
                </div>

                <div class="card-body">
                    @if (session('status'))
                        <div class="alert alert-success" role="alert">
                            {{ session('status') }}
                        </div>
                    @endif

                    <ul>
                        <li class="m-3"><a href="{{ route('basket') }}">{{ __('Basket') }}</a> - {{ __('Your basket') }}</li>
                        <li class="m-3"><a href="{{ route('orders') }}">{{ __('Orders') }}</a> - {{ __('Your completed orders') }}</li>
                    </ul>

                </div>
            </div>
        </div>
    </div>
</div>
@endsection
