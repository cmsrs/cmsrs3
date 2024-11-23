@extends('layouts.default')
@section('content')

  <h1 class="mb-4 mt-3">{{$h1}}</h1>

  <div id="app">

  @if ( $page->type  === 'cms')

      @if( $page->images)
        @foreach($page->images as $image)
            <img class="m-3" src="{{ (new App\Services\Cmsrs\ImageService)->getHtmlImage($image)}}" alt="{{ (new App\Services\Cmsrs\ImageService)->translatesByColumnAndLang($image, 'alt', $lang ) }}" />
        @endforeach
      @endif

      <div class="mt-2">{!!  $pageService->translatesByColumnAndLang($page, 'content', $lang ) !!}</div>

  @elseif($page->type  === 'gallery')

    @if( $page->images)
      <span v-for="image in images"  v-bind:key="image.id">    
            <img  @click="clickImg(image.id, image.org, image.altlang)" class="m-3 myImgs" :src="image.medium" :alt="image.altlang"  />
      </span>
    @endif

  @elseif($page->type  === 'contact')

  <?php 
      $companyData = $pageService->getPageDataByShortTitleCache( 'company_data', 'content', $lang );
      $classCompany1 = !empty($companyData) ? "col-xl-9" : "col";
  ?>

  <div class="container">
    <div class="row">

      <div class="<?php echo $classCompany1;?>">

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

      </div><!-- col -->

      <?php if( !empty($companyData ) ){ ?>
      <div class="col-xl-3">
        <div class="mt-3">
            <?php 
                echo $companyData;
            ?>
        </div>
      </div>
      <?php } ?>

    </div>
  </div>

  @endif

  @if ( $page->commented )
    <h5 class="mb-2 mt-3">{{ __('Add comment') }}: </h5>
    <form  method="get">
      <textarea v-model="comment" placeholder="{{ __('add comment') }}" rows="4" cols="60"></textarea>
      <p>
      <button v-on:click="addComment( $event )" class="add-to-cart btn">{{ __('Add comment') }}</button>
    </form>
    <h5 class="mb-2 mt-3">{{ __('Comments') }}: </h5>
    <li v-for="item in comments" :key="item.content"  style="list-style: none;" class="ms-3 mb-2 mt-2">
      @{{ item.content }}
    </li>
  @endif      
  </div> <!-- div app -->  
    
@stop