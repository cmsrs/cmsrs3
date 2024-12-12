<?php $footerPages = $pageService->getFooterPages($lang);      ?>
<div   id="fixed-bottom" class="navbar fixed-bottom">
    <span class="pull-left">
        <a style="color:grey;"  href="{{ $footerPages['policyUrl'] }}">{{ $footerPages['policyTitle'] }}</a>
    </span>
    <span class="pull-right">
        <a style="color:grey;"  href="{{ $footerPages['contactUrl'] }}">{{ $footerPages['contactTitle'] }}</a>
    </span>
</div>

<script type="application/javascript" src="/js/lib/bootstrap.bundle.min.js"></script>
