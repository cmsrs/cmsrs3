@extends('layouts.default')
@section('content')
  @if ( $page->type  === 'cms')

      @if ( $page->images)
        <?php foreach ($page->images as $image) {?>
          <img class="m-2" src="{{$image->getHtmlImage()}}" alt="{{$image->name}}" />
        <?php }?>
      @endif
      <div class="mt-2">{{$page->content}}</div>

  @elseif ($page->type  === 'gallery')

    @if ( $page->images)
      <?php foreach ($page->images as $image) {?>
        <img class="m-2" src="<?php echo  $image->getHtmlImage(); ?>" />
      <?php }?>
    @endif

  @endif
@stop
