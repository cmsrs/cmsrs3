<?php

namespace App\Dto\Cmsrs;

/**
 * dont use this class - maybe in the future, but currently we just use array to pass data to service
 *
 * @property string $name
 * @property string $data
 * @property array<string, string>|null $alt
 */
final class ImageUploadDto
{
    /**
     * @param  array<string, string>|null  $alt
     */
    public function __construct(
        public string $name,
        public string $data,
        public ?array $alt = null,
    ) {}
}
