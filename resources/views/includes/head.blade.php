<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

<link rel="icon" type="image/png" href="/favicon-96x96.png" sizes="96x96" />
<link rel="icon" type="image/svg+xml" href="/favicon.svg" />
<link rel="shortcut icon" href="/favicon.ico" />
<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
<link rel="manifest" href="/site.webmanifest" />

<title>{{ $page_title ?? '' }}</title>
<meta name="author" content="Robert Szczepanski - cmsRS">
<meta name="description" content="{{ $seo_description ?? '' }}">
<!-- Bootstrap core CSS -->
<link href="/css/lib/bootstrap.min.css" rel="stylesheet">

<?php if(  env('IS_SHOP', true) ){ ?>
    <?php //it is only use for display basket - maybe it is not worth to use this big library to one task - todo ?>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
<?php } ?>

<!-- Custom styles for this template -->
<link href="/css/front.css" rel="stylesheet">
<script>
    var lang = '{{ !empty($lang) ? $lang : "" }}';
</script>

