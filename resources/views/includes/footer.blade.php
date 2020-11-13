<?php $footerPages = App\Page::getFooterPages($lang);      ?>
<div class="navbar fixed-bottom">
    <span class="pull-left">
        <a style="color:grey;"  href="{{ $footerPages['policyUrl'] }}">{{ $footerPages['policyTitle'] }}</a>
    </span>
    <span class="pull-right">
        <a style="color:grey;"  href="{{ $footerPages['contactUrl'] }}">{{ $footerPages['contactTitle'] }}</a>
    </span>
</div>


<script src="/js/lib/jquery-3.3.1.slim.min.js"></script>
<script src="/js/lib/bootstrap.min.js"></script>
