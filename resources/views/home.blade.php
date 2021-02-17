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

                    <a class="nav-link" href="{{ route('basket') }}">{{ __('Basket') }}<span class="sr-only">(current)</span></a>
                    <a class="nav-link" href="{{ route('orders') }}">{{ __('Orders') }}<span class="sr-only">(current)</span></a>                    

                </div>
            </div>
        </div>
    </div>
</div>
@endsection
