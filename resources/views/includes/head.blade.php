<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
<link rel="icon" href="../../../../favicon.ico">

<title>{{ $page_title ?? '' }}</title>
<meta name="author" content="Robert Szczepanski - cmsRS">
<meta name="description" content="{{ $seo_description ?? '' }}">
<!-- Bootstrap core CSS -->
<link href="/css/lib/bootstrap.min.css" rel="stylesheet">

<!-- Custom styles for this template -->
<link href="/css/front.css" rel="stylesheet">
<script>
    var lang = '{{ !empty($lang) ? $lang : '' }}';
</script>

<?php if(  env('IS_SHOP', false) ){ ?>
    <?php //it is only use for display basket - maybe it is not worth to use this big library to one task - todo ?>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
<?php } ?>