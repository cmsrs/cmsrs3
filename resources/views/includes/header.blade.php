<nav class="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
  <a class="navbar-brand" href="#">cmsRS</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarsExampleDefault">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" href="/">Home <span class="sr-only">(current)</span></a>
      </li>

      <?php foreach ($menus as $menu) { ?>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="dropdown{{ $menu->id }}" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">{{ $menu->name }}</a>
          <?php if( count($menu->pagesPublished) ){ ?>
            <div class="dropdown-menu" aria-labelledby="dropdown{{ $menu->id }}">
            <?php foreach ($menu->pagesPublished as $page) { ?>
              <a class="dropdown-item" href="/c/{{$menu->slug}}/{{$page->slug}}">{{ $page->title }}</a>
            <?php } ?>
            </div>
          <?php } ?>
        </li>
      <?php } ?>
    </ul>
  </div>
</nav>
