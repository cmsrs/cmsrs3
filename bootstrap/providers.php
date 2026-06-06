<?php

use App\Providers\AppServiceProvider;
use App\Providers\FortifyServiceProvider;
use App\Providers\ViewHeaderProvider;

return [
    AppServiceProvider::class,
    FortifyServiceProvider::class,
    ViewHeaderProvider::class,
];
