@extends('layouts.default')
@section('content')
<?php
    $priceHelperService = app(\App\Services\Cmsrs\Helpers\PriceHelperService::class);
?>


<h1 class="mb-4 mt-3">{{  __('Shopping Success') }}</h1>

<div class="content">
  <div class="alert alert-success">
    <strong>{{  __('Thank you for purchasing products from our store')  }}</strong>
  </div>
  <ul>
    <li>{{  __('Order number') }} : {{ $checkout->id }}</li>
    <li>{{  __('Amount to pay') }} : {{ $priceHelperService->getPriceDescriptionWrap($checkout->price_total_add_deliver) }}</li> 
  <ul>
</div>


<div class="alert alert-info">
  {{  __('Bank account number')  }} 
  12 1234 1234 1234 1234 1234 1234 1234
</div>


@stop