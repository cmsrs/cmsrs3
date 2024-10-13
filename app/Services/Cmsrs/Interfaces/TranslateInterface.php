<?php

namespace App\Services\Cmsrs\Interfaces;

use App\Models\Cmsrs\Image;
use App\Models\Cmsrs\Menu;
use App\Models\Cmsrs\Page;

interface TranslateInterface
{
    public function getAllTranslate(Page|Image|Menu $model);
}
