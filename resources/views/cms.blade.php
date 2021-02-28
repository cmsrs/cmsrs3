@extends('layouts.default')
@section('content')

  <h1 class="mb-4 mt-3">{{$h1}}</h1>

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

  @endif

  @if ( $page->commented )
    <h5 class="mb-2 mt-3">{{ __('Add comment') }}: </h5>
    <form  method="get">
      <textarea v-model="comment" placeholder="{{ __('add comment') }}" rows="4" cols="60"></textarea>
      <p>
      <button v-on:click="addComment( $event )" class="add-to-cart btn">{{ __('Add comment') }}</button>
    </form>
    <h5 class="mb-2 mt-3">{{ __('Comments') }}: </h5>
    <li v-for="item in comments" :key="item.content"  style="list-style: none;" class="ml-3 mb-2 mt-2">
      @{{ item.content }}
    </li>
  @endif      
  </div> <!-- div app -->  
  
  <!--
  <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/axios/0.19.2/axios.js"></script>      
  -->

  
  <script src="/js/lib/vue.js"></script>
  <script src="/js/lib/axios.js"></script>
  <script src="/js/cmsrs.js"></script>

  @if( ($page->type == 'contact') &&  $re_public )
    <script src="https://www.google.com/recaptcha/api.js?render={{ $re_public }}"></script>
    <script>
        var rePublic = '{{ $re_public }}';
    </script>
  @endif      
  
@stop