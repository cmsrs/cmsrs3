<?php $pageService = new App\Services\Cmsrs\PageService; ?>
<?php $lang = 'en'; ?>
<?php $footerPages = $pageService->getFooterPages($lang);      ?>
<div   id="fixed-bottom" class="navbar fixed-bottom">
    <span class="pull-left">
        <a style="color:grey;"  href="{{ $footerPages['policyUrl'] }}">{{ $footerPages['policyTitle'] }}</a>
    </span>
</div>

<script type="application/javascript" src="/js/lib/bootstrap.bundle.min.js"></script>
