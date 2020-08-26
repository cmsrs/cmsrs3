<div>
    <h5>Links:</h5>
    <ul class="nav">
        <?php foreach ($menus as $menu) { ?>
        <li>
            <div>{{ $menu->name }}</div>
            <?php if( count($menu->pagesPublished) ){ ?>
            <div>
                <?php foreach ($menu->pagesPublished as $page) { ?>
                <a class="nav-link"   href="/c/{{$menu->slug}}/{{$page->slug}}">{{ $page->title }}</a>
                <?php } ?>
            </div>
            <?php } ?>
        </li>
        <?php } ?>
    </ul>
</div>