<?php

namespace App\Services\Cmsrs;

use App\Models\Cmsrs\Image;
use App\Models\Cmsrs\Page;
use App\Models\Cmsrs\Product;
use App\Services\Cmsrs\Helpers\ImageHelperService;
use App\Services\Cmsrs\Helpers\StrHelperService;
use App\Services\Cmsrs\Traits\TranslationsTrait;
use Illuminate\Database\Eloquent\Collection;

class ImageService extends BaseService
{
    /**
     * @use TranslationsTrait<Image>
     */
    use TranslationsTrait;

    public function __construct(private ConfigService $configService, private TranslateService $translateService) {}

    private static function deleteDirectoryIfEmpty(string $dirPath): bool
    {
        if (is_dir($dirPath)) {
            $files = scandir($dirPath);

            $files = array_diff($files, ['.', '..']);

            if (empty($files)) {
                if (rmdir($dirPath)) {
                    return true;
                }
            }
        }

        return false;
    }

    public function delete(Image $mImage): ?bool
    {
        $this->deleteImg($mImage);

        return $mImage->delete(); // parent::delete();
    }

    /**
     * @param  null|array<string, string>  $allImg
     */
    public static function deleteImagesFromFs(?array $allImg): void
    {
        foreach ($allImg as $path) {
            if (file_exists($path)) {
                unlink($path);
            }
        }
    }

    public function deleteImg(Image $mImage): void
    {
        $allImg = $this->getAllImage($mImage);

        self::deleteImagesFromFs($allImg);

        $dirImgs = $this->getImgDir($mImage);
        self::removeTwoDirectoryIfEmpty($dirImgs);
    }

    public static function removeTwoDirectoryIfEmpty(string $dirImgs): void
    {
        self::deleteDirectoryIfEmpty($dirImgs);
        $higherDirectory = dirname($dirImgs);
        self::deleteDirectoryIfEmpty($higherDirectory);
    }

    public function getHtmlImage(Image $mImage, string $type = Image::IMAGE_THUMB_TYPE_MEDIUM): string
    {
        $img = $this->getAllImage($mImage, false);

        return $img[$type];
    }

    public function getRefId(Image $mImage): ?int
    {
        if ($mImage->page_id) {
            return $mImage->page_id;
        }
        if ($mImage->product_id) {
            return $mImage->product_id;
        }

        return null;
    }

    public function getRefType(Image $mImage): ?string
    {
        if ($mImage->page_id) {
            return 'page';
        }
        if ($mImage->product_id) {
            return 'product';
        }

        return null;
    }

    public function getImgDir(Image $objImg, bool $isAbs = true): string
    {
        return $this->getImageDir($this->getRefType($objImg), $this->getRefId($objImg), $objImg->id, $isAbs);
    }

    /**
     * TODO DTO
     *
     * @return array<string, string>|null
     *                                    return all thumbs and main img
     */
    public function getAllImage(?object $img, bool $isAbs = true): ?array
    {
        $out = [];

        if (! $img || ! isset($img->id)) {
            return null;
        }

        /** @var Image|null $objImg */
        $objImg = Image::find($img->id);
        if ($objImg === null) {
            return null;
        }
        $imgDir = self::getImgDir($objImg, $isAbs);
        $fileName = pathinfo($img->name, PATHINFO_FILENAME);
        $fileExt = pathinfo($img->name, PATHINFO_EXTENSION);

        $out[Image::IMAGE_ORG] = $imgDir.'/'.$img->name;
        foreach (array_keys(Image::$thumbs) as $imgName) {
            $out[$imgName] = $imgDir.'/'.$fileName.'-'.$imgName.'.'.$fileExt;
        }

        return $out;
    }

    public function getImageDir(string $type, int $refId, int $imageId, bool $isAbs = true): string
    {
        if (empty(Image::$type[$type])) {
            throw new \Exception("I can't get image type");
        }

        $url = Image::IMAGE_DIR.'/'.$type.'/'.$refId.'/'.$imageId;

        if ($isAbs) {
            return public_path($url);
        }

        return '/'.$url;
    }

    /**
     * @param  array<int, array{id?: int, name?: string, alt?: string, data?: mixed}>  $images
     */
    public function createImagesAndUpdateAlt(array $images, string $type, int $refId): bool
    {
        $imagesCreate = [];
        $imagesUpdate = [];

        foreach ($images as $image) {
            if (! empty($image['id'])) {
                $imagesUpdate[] = $image;
            } else {
                $imagesCreate[] = $image;
            }
        }

        // the order is important - first update then create
        if ($imagesUpdate) {
            $this->updateImages($imagesUpdate);
        }
        if ($imagesCreate) {
            $this->createImages($imagesCreate, $type, $refId);
        }

        return true;
    }

    /**
     * @param  array<int, array{id: int, alt?: string, position?: int}>  $images
     */
    public function updateImages(array $images): void
    {
        foreach ($images as $image) {
            $this->translateService->wrapCreate(['image_id' => $image['id'], 'data' => $image], false);
        }
    }

    /**
     * @param  array<int, array{id: int, position: int}>  $images
     */
    public function updatePositionImages(array $images): void
    {
        foreach ($images as $image) {
            if (empty($image['id'])) {
                continue;
            }
            if (empty($image['position'])) {
                continue;
            }
            $imageObj = Image::find($image['id']);
            if (! $imageObj) {
                continue;
            }

            $imageObj->position = $image['position'];
            $imageObj->save();
        }
    }

    /**
     * @param  array<int, array{name: string, alt?: string}>  $images
     * @return array<int, string>
     */
    private function sanitizeNameImages(array $images): array
    {
        $sanitizeNameImages = [];
        $allowedExtensions = $this->configService->arrAllowedUploadFileExt();  // ['jpg', 'jpeg', 'png', 'gif']; //, 'bmp', 'svg', 'webp'];
        foreach ($images as $key => $image) {
            $basename = pathinfo($image['name'], PATHINFO_FILENAME);
            $extension = strtolower(trim(pathinfo($image['name'], PATHINFO_EXTENSION)));

            if (empty($basename)) {
                throw new \Exception('Wrong file name ='.$basename);
            }

            if (! in_array($extension, $allowedExtensions)) {
                throw new \Exception('File is not an image: '.$image['name'].', allowed extension are: '.implode(', ', $allowedExtensions));
            }

            $sanitizeNameImages[$key] = StrHelperService::filterFileName($basename, $extension);
        }

        return $sanitizeNameImages;
    }

    /**
     * @param  array<int, array{name: string, data: mixed, alt?: string}>  $images
     * @return array<int, Image>
     */
    public function createImages(array $images, string $type, int $refId): array
    {
        $out = [];

        $sanitizeNameImages = $this->sanitizeNameImages($images);
        foreach ($images as $key => $image) {
            if (empty($name = $sanitizeNameImages[$key])) {
                throw new \Exception('Sth wrong with sanitizeNameImages');
            }
            $alt = ! empty($image['alt']) ? $image['alt'] : null;

            $data = $image['data'];

            if (empty($strRefId = Image::$type[$type])) {
                throw new \Exception("I can't get image type in createImages");
            }

            $dbData = [
                'name' => $name,
                'position' => $this->getNextPositionByTypeAndRefId($type, $refId),
                $strRefId => $refId,
            ];
            $image = Image::create($dbData);

            if (empty($image->id)) {
                throw new \Exception("I can't get image id");
            }

            $this->translateService->wrapCreate(['image_id' => $image->id, 'data' => ['alt' => $alt]]);

            $out[$key] = $image;

            $dirImg = $this->getImageDir($type, $refId, $image->id);
            if (! file_exists($dirImg)) {
                mkdir($dirImg, 0777, true);
            }

            ImageHelperService::saveImageAndThumbs($data, $dirImg, $name);
        }

        return $out;
    }

    public function getNextPositionByTypeAndRefId(string $type, ?int $refId): int
    {
        if (empty($strRefId = Image::$type[$type])) {
            throw new \Exception("I can't get image type in getNextPositionByTypeAndRefId");
        }

        if (empty($refId)) {
            throw new \Exception('Image (next pos): refId must be defined');
            // $image = Image::query()
            //       ->whereNull($strRefId)
            //       ->orderBy('position', 'desc')
            //       ->first()
            //       ;
        }
        $image = Image::query()
            ->where($strRefId, '=', $refId)
            ->orderBy('position', 'desc')
            ->first();

        if (! $image) {
            return 1;
        }

        return $image->position + 1;
    }

    /**
     * @return Collection<int, Image>
     */
    public function getImagesAndThumbsByTypeAndRefId(string $type, ?int $refId = null, ?string $lang = null): Collection
    {
        $images = $this->getImagesByTypeAndRefId($type, $refId);

        foreach ($images as $k => $img) {
            $alts = $this->getAltImg($img);
            $images[$k]['alt'] = $lang !== null
                ? ($alts[$lang] ?? null)
                : $alts;
            $images[$k]['fs'] = $this->getAllImage($img, false);
            unset($img['translates']); // to na kopi nie jest potrzebne ?
        }

        return $images;
    }

    /**
     * @return array<string, string>
     */
    public function getAltImg(object $objImg): array
    {
        $out = [];
        $translates = $objImg->translates->toArray();
        foreach ($translates as $translate) {
            if ($translate['column'] == 'alt') {
                $out[$translate['lang']] = $translate['value'];
            }
        }

        return $out;
    }

    /**
     * @return Collection<int, Image>
     */
    public function getImagesByTypeAndRefId(string $type, ?int $refId = null): Collection
    {
        if (empty($strRefId = Image::$type[$type])) {
            throw new \Exception("I can't get image type in getImagesByTypeAndRefId");
        }

        if (empty($refId)) {
            throw new \Exception('Image: refId must be defined');
            // $image = Image::with(['translates'])
            //       ->whereNull($strRefId)
            //       ->orderBy('position', 'asc')
            //       ->get()
            //       ;
        }

        return Image::with(['translates'])
            ->where($strRefId, '=', $refId)
            ->orderBy('position', 'asc')
            ->get();
    }

    public function swapPosition(string $direction, int $id): bool
    {
        if (! in_array($direction, ['up', 'down'])) {
            throw new \Exception('Wrong direction (Image). It can be up or down direction = '.$direction);
        }

        $image = Image::findOrFail($id);

        $t = 'page';
        $refId = null;
        foreach (Image::$type as $type => $key) {
            if (! empty($image->{$key})) {
                $t = $type;
                $refId = $image->{$key};
            }
        }

        $images = $this->getImagesByTypeAndRefId($t, $refId);

        $countImages = count($images);
        if ($countImages < 2) {
            return false;
        }

        /** @var Image $img */
        foreach ($images as $key => $img) {
            if (($img->id == $id)) {
                $swapKey = null;

                if ($direction === 'up') {
                    $swapKey = ($key === 0) ? $countImages - 1 : $key - 1;
                }

                if ($direction === 'down') {
                    $swapKey = ($key === ($countImages - 1)) ? 0 : $key + 1;
                }

                $positionKey = $img->position;
                $img->position = $images[$swapKey]->position;
                $img->save();
                $images[$swapKey]->position = $positionKey;
                $images[$swapKey]->save();
            }
        }

        return true;
    }

    /**
     * this function is useful only in tests
     */
    public function deleteImagesFs(Page|Product $mObj): void
    {
        foreach ($mObj->images()->get() as $img) {
            $this->deleteImg($img);
        }
    }

    /**
     * @return array{files: array<string, string>, dirs_imgs: array<int, string>}
     */
    public function getImagesFsFiles(Page|Product $mObj): array
    {
        $files = [];
        $dirsImgs = [];
        foreach ($mObj->images()->get() as $img) {
            $images = $this->getAllImage($img);

            if (is_array($images) && ! empty($images)) {
                $dirsImgs[] = ImageService::getImgDir($img);
                $files = array_merge($files, array_values($images));
            }
        }

        return ['files' => $files, 'dirs_imgs' => array_unique($dirsImgs)];
    }

    public function deletePageOrProductWithImgs(Page|Product $mObj): bool
    {
        $allImg = $this->getImagesFsFiles($mObj);

        $ret = $mObj->delete();
        if (! $ret) {
            return false;  // if sth wrong with delete model we don't delete images from fs
        }

        ImageService::deleteImagesFromFs($allImg['files']);

        foreach ($allImg['dirs_imgs'] as $dirImgs) {
            ImageService::removeTwoDirectoryIfEmpty($dirImgs); // Catalogs are left after deleting the images.
        }

        return $ret;
    }
    /**
     * images in fs - stop
     */
}
