@if( $class )
<img src="{{ $image->fs['medium'] }}" alt="{{ $image->alt[$lang] ?? '' }}" class="{{ $class }}" />
@else
<img src="{{ $image->fs['medium'] }}" alt="{{ $image->alt[$lang] ?? '' }}" />
@endif
