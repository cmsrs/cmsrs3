@extends('layouts.default')
@section('content')
<div class="starter-template">

  @if( env('DEMO_STATUS') )
    <h1>Demo version</h1>
  @else
    <h1>cmsRS</h1>
  @endif
  <div>
    @if( env('DEMO_STATUS') )
      <p class="lead">The demo version was created for demonstration purposes.<p>
      <div class="alert alert-danger" role="alert">Saving, updating, deleting a single record has been disabled.</div>
      <br><br>
    @endif    
    <p class="lead">    
    Login to the admin panel: <a href="{{ config('app.url') }}/admin">{{ config('app.url') }}/admin</a>
    <!--    
    <br>    
    And customer zone: <a href="{{ config('app.url') }}/login">{{ config('app.url') }}/login</a>
    -->

    <br>
    <br>    
    user: adm@cmsrs.pl
    <br>    
    pass: cmsrs123 

    <br>
    <br>    
    More information: <a title="cmsRS" href="http://www.cmsrs.pl" >http://www.cmsrs.pl</a>
    
    </p>

  </div>  
</div>
@stop
