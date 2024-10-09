<?php $footerPages = $pageService->getFooterPages($lang);      ?>
<div   id="fixed-bottom" class="navbar fixed-bottom" style="z-index:-1;">
    <span class="pull-left">
        <a style="color:grey;"  href="{{ $footerPages['policyUrl'] }}">{{ $footerPages['policyTitle'] }}</a>
    </span>
    <span class="pull-right">
        <a style="color:grey;"  href="{{ $footerPages['contactUrl'] }}">{{ $footerPages['contactTitle'] }}</a>
    </span>
</div>


<script src="/js/lib/jquery-3.3.1.slim.min.js"></script>
<script src="/js/lib/bootstrap.min.js"></script>
