<?php

namespace App\Services\Cmsrs;

use App\Models\Cmsrs\Basket;
use App\Models\Cmsrs\Checkout;
use App\Models\Cmsrs\Page;
// use App\Models\Cmsrs\Translate;
use App\Models\Cmsrs\Product;
use App\Models\Cmsrs\Translate;
use App\Services\Cmsrs\Helpers\CacheService;
use App\Services\Cmsrs\Helpers\PriceHelperService;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Pagination\LengthAwarePaginator;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Str;

class ProductService extends BaseService
{
    private TranslateService $translate;

    private ContentService $content;

    /** @var array<int, string> */
    public array $productFields;

    public function __construct()
    {
        $this->translate = new TranslateService;
        $this->content = new ContentService;

        $this->productFields = [
            'id',
            'published',
            'sku',
            'price',
            'page_id',
        ];
    }

    /**
     * @param  array<string, mixed>  $data
     * @return array<string, mixed>
     */
    public function saveCheckout(array $data, string|int|null $userId, ?string $sessionId): array
    {
        if (empty($data['products']) || ! is_array($data['products'])) {
            throw new \Exception('No products in post - checkout');
        }
        $payment = PaymentService::getPayment($data['payment']);
        if (empty($payment)) {
            throw new \Exception('Payment problem - checkout');
        }

        $deliver = DeliverService::getDeliver($data['deliver']);
        if (empty($deliver)) {
            throw new \Exception('Deliver problem - checkout');
        }

        $reindexBaskets = BaseService::reIndexArr($data['products']);
        $baskets = [];
        $productsDataAndTotalAmount = ProductService::getDataToPayment($reindexBaskets, $baskets);
        if (empty($baskets)) {
            throw new \Exception('No data in basket (not found data in db)');
        }

        unset($data['products']);
        $checkout = $data;
        $checkout['user_id'] = $userId; // Auth::check() ? Auth::user()->id : null;
        $checkout['session_id'] = $sessionId; // session()->getId();
        $checkout['price_total'] = $productsDataAndTotalAmount['totalAmount'];
        $checkout['price_deliver'] = $deliver['price'];
        $checkout['price_total_add_deliver'] = $checkout['price_total'] + $checkout['price_deliver'];

        // without transaction
        // $objCheckout = Checkout::create($checkout);
        // if (empty($objCheckout->id)) {
        //     throw new \Exception("I cant get objCheckout id - problem with save checkout");
        // }

        // foreach($baskets as $basket){
        //     $basket['checkout_id'] = $objCheckout->id;
        //     Basket::create($basket);
        //     Log::debug(' create basket: '.var_export( $basket , true ) );
        // }

        DB::beginTransaction();
        try {
            $objCheckout = Checkout::create($checkout);
            if (empty($objCheckout->id)) {
                throw new \Exception('I cant get objCheckout id - problem with save checkout');
            }

            foreach ($baskets as $basket) {
                $basket['checkout_id'] = $objCheckout->id;
                Basket::create($basket);
                // Log::debug(' create basket: '.var_export( $basket , true ) );
            }
            DB::commit();
        } catch (\Exception $e) {
            Log::debug(' transaction problem: '.var_export($e->getMessage(), true));
            DB::rollback();
            // throw $e;
        }

        return [
            'productsDataAndTotalAmount' => $productsDataAndTotalAmount,
            'checkout' => $checkout,
            'objCheckout' => $objCheckout,
        ];
    }

    /**
     * @return LengthAwarePaginator<int, array<string, mixed>>
     */
    public function getPaginationItems(string $lang, string $column, string $direction, ?string $search): LengthAwarePaginator
    {
        $products = (new Product)->with(['translates' => function ($query) use ($lang) {
            $query->where('lang', $lang)->where('column', 'product_name');
        }])->with(['translatesPage' => function ($query) use ($lang) {
            $query->where('lang', $lang)->where('column', 'short_title');
        }])
            ->get();

        $products->each(function ($product) {
            $firstTranslation = $product->translates->first();
            $productName = $firstTranslation instanceof Translate ? $firstTranslation->value : null;
            $product->setAttribute('product_name', $productName);
            unset($product['translates']);

            $firstTranslationPage = $product->translatesPage->first();
            $pageShortTitle = $firstTranslationPage instanceof Translate ? $firstTranslationPage->value : null;
            $product->setAttribute('page_short_title', $pageShortTitle);
            unset($product['translatesPage']);

            $priceDescription = PriceHelperService::getPriceDescriptionWrap($product->price);
            $product->setAttribute('price_description', $priceDescription);
        });

        if ($search) {
            $search = trim($search);
            $products = $products->filter(function ($product) use ($search) {
                $productName = $product->getAttribute('product_name');
                $productNameContainsSearch = $productName !== null && str_contains(trim($productName), $search);
                $skuContainsSearch = str_contains(trim($product->sku), $search);

                return $productNameContainsSearch || $skuContainsSearch;
            });
            $products = $products->values(); // reset keys - start from 0
        }

        $products = ($direction == 'desc') ? $products->sortByDesc($column) : $products->sortBy($column);
        $productsPagination = $this->getPaginationFromCollection($products->values()); // values() - reset keys

        // For optimization purposes, we only retrieve images for products on the given page.
        $productsPagination->each(function ($product) {
            $product->images = ImageService::getImagesAndThumbsByTypeAndRefId('product', $product->id);
        });

        return $productsPagination;
    }

    /**
     * @return array<int, mixed>
     */
    public static function searchProducts(string $lang, string $key): array
    {
        return DB::select("select distinct product_id from translates where (`product_id` is not null) and (`lang` = :lang) and (`column` = 'product_name') and (`value` like  :key )", ['lang' => $lang, 'key' => '%'.$key.'%']);
    }

    /**
     * @param  array<int, mixed>  $obj
     * @return array<int, mixed>
     */
    public static function objToArray(array $obj): array
    {
        $out = [];
        foreach ($obj as $o) {
            $out[] = $o->product_id;
        }

        return $out;
    }

    /**
     * @return array<int, mixed>
     */
    public function wrapSearchProducts(string $lang, string $key): array
    {
        $objProducts = ProductService::searchProducts($lang, $key);
        $arrProducts = ProductService::objToArray($objProducts);

        return $this->getProductsWithImagesByIds($arrProducts);
    }

    /**
     * @param  Collection<int, Translate>|array<int, array<string, mixed>>  $productTranslates
     */
    public static function getDefaultProductName(Collection|array $productTranslates, string $lang): string
    {
        $defaultProductName = '';

        foreach ($productTranslates as $translate) {
            // Obsługuje zarówno Translate object jak i array
            $column = $translate instanceof Translate ? $translate->column : $translate['column'];
            $langVal = $translate instanceof Translate ? $translate->lang : $translate['lang'];
            $value = $translate instanceof Translate ? $translate->value : $translate['value'];

            if (($column == 'product_name') && ($langVal == $lang)) {
                $defaultProductName = $value;
                break;
            }
        }

        return $defaultProductName;
    }

    /**
     * @param  array<int, mixed>  $arrCart
     * @param  array<int, array<string, mixed>>|false  $baskets
     * @param  array<int, array<string, mixed>>|false|string  $orders
     * @return array<string, mixed>
     */
    public static function getDataToPayment(array $arrCart, array|false &$baskets, array|false|string &$orders = false): array
    {
        // $user = Auth::user();
        // if( empty($user) ){
        //     throw new \Exception("User not auth - this exception is impossible");
        // }

        $ids = array_keys($arrCart);
        $arrProducts = Product::with(['translates'])->whereIn('id', $ids)->orderBy('id', 'asc')->get(); // ->toArray();

        $out = [];
        $totalAmount = 0;
        $lang = ConfigService::getDefaultLang();
        foreach ($arrProducts as $product) {

            $itemIn = $arrCart[$product->id];
            if (empty($itemIn['qty'])) {
                throw new \Exception('qty empty - something wrong');
            }

            $productName = ProductService::getDefaultProductName($product->translates, $lang);
            $qty = $itemIn['qty'];

            $out['products'][] = [
                'name' => $productName,
                'unitPrice' => $product->price,
                'quantity' => $qty,
            ];

            if (is_array($baskets)) {
                $baskets[] = [
                    'qty' => $qty,
                    // "user_id" => $user->id,
                    'price' => $product->price,
                    'product_id' => $product->id,
                    // "checkout_id" => $checkoutId
                ];
            }

            if (is_array($orders)) {
                $productImage = ImageService::getImagesAndThumbsByTypeAndRefId('product', $product->id)->toArray();
                $orders[] = [
                    'name' => $productName,
                    'unitPrice' => $product->price,
                    'qty' => $qty,
                    'product_id' => $product->id,
                    'product_url' => (new ProductService)->getProductUrl($product, $lang, $productName),
                    'product_img' => empty($productImage[0]) ? '' : $productImage[0]['fs']['small'],
                ];
            }

            $totalAmount += $product->price * $qty;
        }
        $out['totalAmount'] = $totalAmount;

        return $out;
    }

    /**
     * @param  array<string, mixed>  $data
     * @return array<string, mixed>
     */
    public function checkIsDuplicateName(array $data, string|int $id = ''): array
    {
        $out = ['success' => true];
        $products = $this->getAllProductsWithImages();
        foreach ($products as $product) {
            if ($product['id'] == $id) {
                continue;
            }
            foreach ($product['product_name'] as $lang => $name) {
                if (empty($data['product_name']) || empty($data['product_name'][$lang])) {
                    throw new \Exception('product_name is empty - but is require');
                }
                $nameIn = Str::slug($data['product_name'][$lang], '-');
                $n = Str::slug($name, '-');

                if ($nameIn == $n) {
                    $out['success'] = false;
                    $out['error']['product_name'] = "Duplicate product name: $name ($lang)";
                    break;
                }
            }
        }

        return $out;
    }

    /**
     * use also in script to load demo (test) data
     * php artisan cmsrs:load-demo-data
     *
     * @param  array<string, mixed>  $data
     */
    public function wrapCreate(array $data): Product
    {
        $product = Product::create($data);

        if (empty($product->id)) {
            throw new \Exception('I cant get product id');
        }
        $this->createTranslate(['product_id' => $product->id, 'data' => $data]);

        if (! empty($data['images']) && is_array($data['images'])) {
            $objImage = new ImageService;
            $objImage->setTranslate($this->translate);
            $objImage->createImages($data['images'], 'product', $product->id);
        }

        return $product;
    }

    /**
     * @param  array<string, mixed>  $dd
     */
    public function createTranslate(array $dd, bool $create = true): void
    {
        $this->translate->wrapCreate($dd, $create);
        $this->content->wrapCreate($dd, $create);
    }

    /**
     * @param  array<string, mixed>  $data
     */
    public function wrapUpdate(Product $mProduct, array $data): bool
    {
        $res = $mProduct->update($data);
        $this->createTranslate(['product_id' => $mProduct->id, 'data' => $data], false);

        return $res;
    }

    /**
     * @param  Product|array<string, mixed>  $product
     * @return array<string, mixed>
     */
    private function getProductDataFormat(Product|array $product): array
    {

        $out = [];
        foreach ($this->productFields as $field) {
            $out[$field] = $product[$field];
        }
        $price = ! empty($product['price']) ? $product['price'] : 0;
        $out['price_description'] = PriceHelperService::getPriceDescriptionWrap($price);
        foreach ($product['translates'] as $translate) {
            $out[$translate['column']][$translate['lang']] = $translate['value'];
            if ($translate['column'] == 'product_name') {
                $out['product_name_slug'][$translate['lang']] = Str::slug($translate['value'], '-');
            }
        }
        foreach ($product['contents'] as $translate) {
            $out[$translate['column']][$translate['lang']] = $translate['value'];
        }

        return $out;
    }

    public function getProductBySlug(string $productSlug, string $lang): ?Product
    {
        $productOut = null;
        $products = $this->getAllProductsWithTranslates();
        foreach ($products as $product) {
            $arrProduct = $this->getProductDataFormat($product);
            if ($productSlug == Str::slug($arrProduct['product_name'][$lang], '-')) {
                $productOut = $product;
                break;
            }
        }

        return $productOut;
    }

    public function getCategoryUrl(Product $mProduct, string $lang): ?string
    {
        $mPage = $mProduct->page()->first();

        if ($mPage instanceof Page) { // phpstan fix
            return (new PageService)->getUrl($mPage, $lang);
        }

        return null; // todo - handle this case properly, maybe throw an exception or return a default URL
    }

    public function getProductUrl(Product $mProduct, string $lang, string $productName): ?string
    {
        $mPage = $mProduct->page()->first();

        if ($mPage instanceof Page) { // phpstan fix
            return (new PageService)->getUrl($mPage, $lang, Str::slug($productName, '-'));
        }

        return null; // todo - handle this case properly, maybe throw an exception or return a default URL
    }

    /**
     * @return array<string, array<string, string|null>>
     */
    public function getProductUrls(Product $productWithTranslate): array
    {
        $out = [];
        $arrProduct = $this->getProductDataFormat($productWithTranslate);
        $langs = ConfigService::arrGetLangsEnv();

        foreach ($langs as $lang) {
            $out['url_category'][$lang] = $this->getCategoryUrl($productWithTranslate, $lang);
            $out['url_product'][$lang] = $this->getProductUrl($productWithTranslate, $lang, $arrProduct['product_name'][$lang]);
        }

        return $out;
    }

    /**
     * @param  array<string, mixed>  $arrProductFormat
     */
    private function getProductNameDefaultLang(array $arrProductFormat): string
    {
        $lang = ConfigService::getDefaultLang();

        return $arrProductFormat['product_name'][$lang];
    }

    /**
     * @return array<string, mixed>
     */
    public function getProductDataByProductArr(Product $product, ?string $lang = null): array
    {
        $arrProduct = $product->toArray();

        $out = [];
        $out = $this->getProductDataFormat($arrProduct);
        $out['product_name_default_lang'] = $this->getProductNameDefaultLang($out);
        if ($lang) {
            $out = $this->removeKeyLangInArr($out, $lang);
        }

        $out['images'] = ImageService::getImagesAndThumbsByTypeAndRefId('product', $arrProduct['id'], $lang);

        return $out;
    }

    /**
     * @return array<string, mixed>
     */
    public function getProductWithTranslatesContentsAndImages(Product $mProduct): array
    {
        $productOut = Product::with(['translates', 'contents'])->find($mProduct->id);

        return $this->getProductDataByProductArr($productOut);
    }

    /**
     * @return Collection<int, Product>
     */
    private function getAllProductsWithTranslates(): Collection
    {
        return Product::with(['translates', 'contents'])->orderBy('id', 'asc')->get();
    }

    /**
     * @return array<int, mixed>
     */
    public function getGivenProductsWithImagesByPageId(int $pageId, bool $withUrls = false, ?string $lang = null): array
    {
        $products = $this->getDataProductsWithImagesByPage($pageId);

        return $this->getAllProductsWithImagesArr($products, $withUrls, $lang);
    }

    /**
     * @return array<int, mixed>
     */
    public function getAllProductsWithImages(bool $withUrls = false): array
    {
        $products = $this->getAllProductsWithTranslates();

        return $this->getAllProductsWithImagesArr($products, $withUrls);
    }

    /**
     * @param  Collection<int, Product>|array<int, Product>  $products
     * @return array<int, array<string, mixed>>
     */
    public function getAllProductsWithImagesArr(Collection|array $products, bool $withUrls = false, ?string $lang = null): array
    {
        $i = 0;
        $out = [];
        foreach ($products as $product) {
            $out[$i] = $this->getProductDataByProductArr($product, $lang);

            if ($withUrls) {
                $urls = $this->getProductUrls($product);
                $out[$i] = array_merge($out[$i], $urls);
            }
            $i++;
        }

        return $out;
    }

    /**
     * function use on the frontend
     * it should be cached
     *
     * @return array<int, array<string, mixed>>
     */
    public function getAllProductsWithImagesByLang(string $lang): array
    {
        $products = $this->getAllProductsWithImages(true);

        $out = [];
        foreach ($products as $product) {
            if (! empty($product['published'])) {
                $productId = $product['id'];
                // $out[$productId]["product_id"] = $productId;
                $out[$productId]['price'] = $product['price'];
                $out[$productId]['price_description'] = PriceHelperService::getPriceDescriptionWrap($product['price']);
                $out[$productId]['name'] = $product['product_name'][$lang];
                $out[$productId]['url_product'] = $product['url_product'][$lang];
                if (! empty($product['images']) && ! empty($img = $product['images']->first())) {
                    $out[$productId]['url_image'] = $img->fs['small'];
                }
            }
        }

        return $out;
    }

    /**
     * @return array<int, array<string, mixed>>
     */
    public function getAllProductsWithImagesByLangCache(string $lang): array
    {
        $isCache = (new ConfigService)->isCacheEnable();
        if ($isCache) {
            $products = cache()->remember('products_name_price_'.$lang, CacheService::setTime(), function () use ($lang) {
                return (new ProductService)->getAllProductsWithImagesByLang($lang);
            });
        } else {
            $products = (new ProductService)->getAllProductsWithImagesByLang($lang);
        }

        return $products;
    }

    /**
     * It is needed for sitemap
     *
     * @return array<int, array<string, string|null>>
     */
    public function getProductsUrl(): array
    {
        $urls = [];
        $products = Product::with(['translates', 'contents', 'page'])->where('published', '=', 1)->orderBy('id', 'asc')->get();
        $i = 0;
        foreach ($products as $key => $product) {
            if ($product['page']->published && $product->published) {
                $arrProduct = $this->getProductDataFormat($product);
                $langs = ConfigService::arrGetLangsEnv();
                foreach ($langs as $lang) {
                    $urls[$i][$lang] = $this->getProductUrl($product, $lang, $arrProduct['product_name'][$lang]);
                }
                $i++;
            }
        }

        return $urls;
    }

    /**
     * it is needed to search
     *
     * @param  array<int, int>  $ids
     * @return array<int, mixed>
     */
    public function getProductsWithImagesByIds(array $ids): array
    {
        $products = Product::with(['translates', 'contents'])->whereIn('id', $ids)->orderBy('id', 'asc')->where('published', '=', 1)->get();

        return $this->dataToRender($products);
    }

    /**
     * @return Collection<int, Product>
     */
    private function getDataProductsWithImagesByPage(int $pageId): Collection
    {
        return Product::with(['translates', 'contents'])->where('page_id', $pageId)->orderBy('id', 'asc')->where('published', '=', 1)->get(); // ->toArray();
    }

    /**
     * @return array<int, mixed>
     */
    public function getProductsWithImagesByPage(int $pageId): array
    {
        $products = $this->getDataProductsWithImagesByPage($pageId);

        return $this->dataToRender($products);
        // $i = 0;
        // $out = [];
        // foreach ($products as $key => $product) {
        //     $urls =  $product->getProductUrls($product);
        //     $out[$i] =  array_merge( $this->getProductDataByProductArr( $product ), $urls);
        //     $i++;
        // }
        // return $out;
    }

    /**
     * @param  Collection<int, Product>|array<int, Product>  $products
     * @return array<int, array<string, mixed>>
     */
    private function dataToRender(Collection|array $products): array
    {
        $i = 0;
        $out = [];

        foreach ($products as $key => $product) {
            $urls = $this->getProductUrls($product);
            $out[$i] = array_merge($this->getProductDataByProductArr($product), $urls);
            $i++;
        }

        return $out;
    }
}
