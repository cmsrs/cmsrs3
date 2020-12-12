@extends('layouts.default')
@section('content')

<h1 class="mb-4 mt-3">{{$page->translatesByColumnAndLang( 'title', $lang )}}</h1>

<div id="gallery">
</div>


<!-- The Modal -->
<div id="myModal" class="modal">

    <!-- Modal Content (The Image) -->
    <img class="modal-content" id="img01">

    <!-- The Close Button -->
    <span class="close">&times;</span>

    <!-- Next and previous buttons -->
    <a class="prev" onclick="plusSlides(-1)">&#10094;</a>
    <a class="next" onclick="plusSlides(1)">&#10095;</a>

    <!-- Modal Caption (Image Text) -->
    <div id="caption"></div>
</div>      


<script>
    var imagesGlobal = JSON.parse('<?php echo json_encode($page->arrImages($lang)) ?>');    
</script>
<script src="/js/gallery.js"></script>


@stop