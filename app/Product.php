<?php
namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Auth;
use Carbon\Carbon;

class Product extends Base
{
    private $translate;
    private $content;

    public $productFields;

    protected $fillable = [
        'sku',
        'price',
        'published',
        'page_id'
    ];

    protected $casts = [
        'published' => 'integer',
        'price' => 'integer',
        'page_id' => 'integer'
    ];

    public $columnsAllowedToSort = [
        'id',
        'published',
        'product_name', //from translate
        'page_short_title', //from translate - derive from page_id
        'sku',
        'price',
        'created_at',
        'updated_at'
    ];

    public function page()
    {
        return $this->hasOne('App\Page', 'id', 'page_id');
    }

    public function images()
    {
        return $this->hasMany('App\Image');
    }

    public function translates()
    {
        return $this->hasMany('App\Translate');
    } 

    public function translatesPage()
    {
        return $this->hasMany('App\Translate', 'page_id', 'page_id');
    }

    public function contents()
    {
        return $this->hasMany('App\Content');
    }        

    public function __construct(array $attributes = array())
    {
        parent::__construct($attributes);

        $this->translate = new Translate;
        $this->content = new Content;

        $this->productFields = [
            'id',
            'published',
            'sku',
            'price',
            'page_id'
        ];  
    }

    public function saveCheckout($data, $userId, $sessionId)
    {
        if(empty($data['products']) || !is_array($data['products']) ){
            throw new \Exception('No products in post - checkout');
        }
        $payment = Payment::getPayment( $data['payment'] );        
        if( empty($payment) ){
            throw new \Exception('Payment problem - checkout');
        }

        $deliver = Deliver::getDeliver( $data['deliver'] );
        if( empty($deliver) ){
            throw new \Exception('Deliver problem - checkout');
        }

        $reindexBaskets = Base::reIndexArr($data['products']);
        $baskets = [];
        $productsDataAndTotalAmount = Product::getDataToPayment( $reindexBaskets, $baskets );
        if( empty($baskets) ){
            throw new \Exception('No data in basket (not found data in db)');
        }

        unset($data['products']);
        $checkout = $data;
        $checkout['user_id'] = $userId; //Auth::check() ? Auth::user()->id : null;
        $checkout['session_id'] = $sessionId; //session()->getId();
        $checkout['price_total'] =  $productsDataAndTotalAmount['totalAmount'];
        $checkout['price_deliver'] = $deliver['price'];
        $checkout['price_total_add_deliver'] = $checkout['price_total'] + $checkout['price_deliver'];

        
        //without transaction
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
                throw new \Exception("I cant get objCheckout id - problem with save checkout");
            }  

            foreach($baskets as $basket){
                $basket['checkout_id'] = $objCheckout->id;
                Basket::create($basket);
                //Log::debug(' create basket: '.var_export( $basket , true ) );
            }
            DB::commit();
        } catch (\Exception $e) {
            Log::debug(' transaction problem: '.var_export( $e->getMessage() , true ) );
            DB::rollback();
            //throw $e;
        }

        return [ 
            'productsDataAndTotalAmount' =>  $productsDataAndTotalAmount,
            'checkout' => $checkout,
            'objCheckout' =>  $objCheckout
        ];
    }

    public function  getPaginationItems($lang, $column, $direction, $search)
    {        
        $products = $this->with(['translates' => function ($query) use ($lang) {
            $query->where('lang', $lang)->where('column', 'product_name');
        }])->with(['translatesPage'  => function ($query) use ($lang) {
            $query->where('lang', $lang)->where('column', 'short_title');                
        }])
        ->get();

        $products->each(function ($product) {
            $firstTranslation = $product->translates->first();
            unset($product["translates"]);
            $product->product_name = $firstTranslation ? $firstTranslation->value : null;
        
            $firstTranslationPage = $product->translatesPage->first();
            unset($product["translatesPage"]);
            $product->page_short_title = $firstTranslationPage ? $firstTranslationPage->value : null;        
            //$product->images = Image::getImagesAndThumbsByTypeAndRefId('product', $product->id);
        });
        
        if($search){
            $search = trim($search);
            $products = $products->filter(function ($product) use ($search) {
                $productNameContainsSearch = str_contains(trim($product->product_name), $search);
                $skuContainsSearch = str_contains(trim($product->sku), $search);
        
                return $productNameContainsSearch || $skuContainsSearch;
            });
            $products = $products->values();//reset keys - start from 0
        }
    
        $products =  ($direction == 'desc') ? $products->sortByDesc($column) : $products->sortBy($column);
        $productsPagination =  $this->getPaginationFromCollection($products->values()); //values() - reset keys

        //For optimization purposes, we only retrieve images for products on the given page.    
        $productsPagination->each(function ($product) {
            $product->images = Image::getImagesAndThumbsByTypeAndRefId('product', $product->id);
        });        
        
        return $productsPagination;
    }


    static public function searchProducts( $lang, $key)
    {
        return DB::select("select distinct product_id from translates where (`product_id` is not null) and (`lang` = :lang) and (`column` = 'product_name') and (`value` like  :key )", ['lang' => $lang, 'key' => '%'.$key.'%' ]);
    }

    static public function objToArray( $obj )
    {
        $out = [];
        foreach( $obj as $o ){
            $out[] = $o->product_id;
        }

        return $out;
    }

    public function wrapSearchProducts( $lang, $key)
    {
        $objProducts = Product::searchProducts( $lang, $key);
        $arrProducts = Product::objToArray( $objProducts );
        return $this->getProductsWithImagesByIds($arrProducts);
    }

    static public function getDefaultProductName($productTranslates, $lang)
    {
        $defaultProductName = '';

        foreach ($productTranslates as $translate) {
            if( ('product_name' == $translate['column']) && ($translate['lang']  == $lang) ){
                $defaultProductName = $translate['value'];
                break;
            }            
        }
        return $defaultProductName;
    }


    /**
     * this function is similar to: getDataToPayment
     * 
     */
    /*
    static public function getDataToOrders( $arrCart )
    {
        $user = Auth::user();
        if( empty($user) ){
            throw new \Exception("User not auth - this exception is impossible");
        }

        $ids = array_keys($arrCart);
        $arrProducts = Product::with(['translates'])->whereIn('id', $ids)->orderBy('id', 'asc')->get()->toArray();
    
        $out = [];
        $totalAmount = 0;
        foreach($arrProducts as $arrProduct){

            $itemIn = $arrCart[$arrProduct['id']];
            $out["products"][] = [
                "name" => Product::getDefaultProductName($arrProduct['translates']),
                "unitPrice" => $arrProduct['price'],
                "quantity" => $itemIn['qty']
            ];
            $baskets[] = [
                "qty" => $itemIn['qty'],                
                "user_id" => $user->id,
                "product_id" => $arrProduct['id']
            ];

            $totalAmount += $arrProduct['price'] * $itemIn['qty'];
        }
        $out['totalAmount'] =  $totalAmount;

        return  $out;
    }
    */


    static public function getDataToPayment( $arrCart, &$baskets, &$orders = false )
    {
        /*
        $user = Auth::user();
        if( empty($user) ){
            throw new \Exception("User not auth - this exception is impossible");
        }
        */

        $ids = array_keys($arrCart);
        $arrProducts = Product::with(['translates'])->whereIn('id', $ids)->orderBy('id', 'asc')->get(); //->toArray();
    
        $out = [];
        $totalAmount = 0;
        $lang = Config::getDefaultLang();
        foreach($arrProducts as $product){

            $itemIn = $arrCart[$product->id];
            if( empty($itemIn['qty']) ){
                throw new \Exception("qty empty - something wrong");
            }

            $productName = Product::getDefaultProductName( $product->translates, $lang );
            $qty = $itemIn['qty'];            

            $out["products"][] = [
                "name" =>  $productName,
                "unitPrice" => $product->price,
                "quantity" => $qty
            ];

            if( is_array($baskets) ){
                $baskets[] = [
                    "qty" => $qty,
                    //"user_id" => $user->id,
                    "price" => $product->price,
                    "product_id" => $product->id,
                    //"checkout_id" => $checkoutId
                ];
            }
            
            if( is_array($orders) ){
                $productImage = Image::getImagesAndThumbsByTypeAndRefId('product', $product->id)->toArray();
                $orders[] = [
                    "name" =>  $productName,
                    "unitPrice" => $product->price,
                    "qty" => $qty,
                    "product_id" => $product->id,
                    "product_url" => $product->getProductUrl($lang, $productName),
                    "product_img" =>  empty($productImage[0]) ? '' : $productImage[0]['fs']['small']
                ];
            }
            
            $totalAmount += $product->price * $qty;
        }
        $out['totalAmount'] =  $totalAmount;

        return  $out;
    }

    public function checkIsDuplicateName($data, $id = '')
    {
        $out = ['success' => true ];
        $products = $this->getAllProductsWithImages();
        foreach ($products as $product) {
            if ($product['id']  == $id) {
                continue;
            }
            foreach ($product['product_name'] as $lang => $name) {
                if (empty($data['product_name']) || empty($data['product_name'][$lang])) {
                    throw new \Exception("product_name is empty - but is require");
                }
                $nameIn = Str::slug($data['product_name'][$lang], "-");
                $n = Str::slug($name, "-");

                if ($nameIn == $n) {
                    $out['success'] = false;
                    $out['error']['product_name'] = "Duplicate product name: $name ($lang)";
                    break;
                }
            }
        }
        return $out;
    }



    // public function setTranslate($objTranslate)
    // {
    //     if (!empty($objTranslate)) {
    //         $this->translate = $objTranslate;
    //     }
    // }

    /**
     * use also in script to load demo (test) data
     * php artisan command:load-demo-data
     */
    public function wrapCreate($data)
    {
        $product = Product::create($data);

        if (empty($product->id)) {
            throw new \Exception("I cant get product id");
        }
        $this->createTranslate([ 'product_id' => $product->id, 'data' => $data ]);
  
        if (!empty($data['images']) && is_array($data['images'])) {
            $objImage = new Image;
            $objImage->setTranslate($this->translate);
            $objImage->createImages($data['images'], 'product', $product->id);
        }
        return $product;
    }


    public function createTranslate($dd, $create = true)
    {
        $this->translate->wrapCreate($dd, $create);
        $this->content->wrapCreate($dd, $create);        
    }

    public function wrapUpdate($data)
    {
        $res = $this->update($data);
        $this->createTranslate([ 'product_id' => $this->id, 'data' => $data ], false);
        return $res;
    }

    private function getProductDataFormat($product)
    {
        $out = [];
        foreach ($this->productFields as $field) {
            $out[$field] = $product[$field];
        }
        foreach ($product['translates'] as $translate) {
            $out[$translate['column']][$translate['lang']] = $translate['value'];
            if( 'product_name' == $translate['column']){
                $out['product_name_slug'][$translate['lang']] = Str::slug($translate['value'], '-');
            }
        }
        foreach ($product['contents'] as $translate) {
            $out[$translate['column']][$translate['lang']] = $translate['value'];
        }
        return $out;
    }


    public function getProductBySlug($productSlug, $lang)
    {
        $productOut = null;
        $products = $this->getAllProductsWithTranslates();
        foreach($products as $product){
            $arrProduct = $this->getProductDataFormat($product);
            if($productSlug ==  Str::slug($arrProduct['product_name'][$lang], '-')){
                $productOut = $product;
                break;
            }
        }

        return $productOut;
    }

    public function getCategoryUrl($lang)
    {
        return $this->page()->get()->first()->getUrl($lang);
    }

    public function getProductUrl($lang, $productName)
    {
        return $this->page()->get()->first()->getUrl($lang, Str::slug($productName, '-') );
    }    

    public function getProductUrls($productWithTranslate)
    {
        $out = array();
        //$arrProduct = $this->toArray();
        $arrProduct = $this->getProductDataFormat($productWithTranslate);
        $langs = Config::arrGetLangsEnv();

        foreach($langs as $lang){
            $out['url_category'][$lang] = $this->getCategoryUrl($lang);
            $out['url_product'][$lang] = $this->getProductUrl($lang, $arrProduct['product_name'][$lang]);
        }
        return $out;
    }

    private function getProductNameDefaultLang($arrProductFormat)
    {
        $lang = Config::getDefaultLang();
        return $arrProductFormat['product_name'][$lang];
    }

    public function getProductDataByProductArr( $product )
    {
        $arrProduct = $product->toArray();

        $out = [];
        $out = $this->getProductDataFormat($arrProduct);
        $out['product_name_default_lang'] = $this->getProductNameDefaultLang($out);

        $out['images'] = Image::getImagesAndThumbsByTypeAndRefId('product', $arrProduct['id']);
        return $out;
    }

    public function getProductWithTranslatesContentsAndImages()
    {
        $productOut = Product::with(['translates', 'contents'])->find($this->id);

        return $this->getProductDataByProductArr( $productOut );
    }

    private function getAllProductsWithTranslates()
    {
        return Product::with(['translates', 'contents'])->orderBy('id', 'asc')->get();
    }

    public function getAllProductsWithImages( $withUrls = false )
    {
        $products = $this->getAllProductsWithTranslates();
        return $this->getAllProductsWithImagesArr($products, $withUrls);
    }

    public function getAllProductsWithImagesArr($products, $withUrls = false)
    {
        $i = 0;
        $out = [];
        foreach ($products as $product) {
            $out[$i] = $this->getProductDataByProductArr( $product );

            if($withUrls){
                $urls = $product->getProductUrls($product);
                $out[$i] = array_merge($out[$i], $urls);    
            }
            $i++;
        }
        return $out;
    }
    

    /**
     * function use on the frontend
     * it should be cached
     */
    public function getAllProductsWithImagesByLang($lang)
    {
        $products = $this->getAllProductsWithImages( true );

        $out = [];
        foreach($products as $product){
            if( !empty($product['published']) ){
                $productId = $product["id"];
                //$out[$productId]["product_id"] = $productId;
                $out[$productId]["price"] = $product["price"];
                $out[$productId]["name"] = $product["product_name"][$lang];
                $out[$productId]["url_product"] = $product["url_product"][$lang];
                if( !empty($product["images"]) && !empty($img = $product["images"]->first()) ){
                    $out[$productId]["url_image"] =  $img->fs["small"];
                }
            }
        }
        return $out;
    }

    public function getAllProductsWithImagesByLangCache($lang)
    {
        $isCache = (new Config)->isCacheEnable();
        if ($isCache) {
            $products = cache()->remember('products_name_price_'.$lang , Carbon::now()->addYear(1), function () use ($lang)  {
                return (new Product)->getAllProductsWithImagesByLang($lang);
            });
        } else {
            $products = (new Product)->getAllProductsWithImagesByLang($lang);
        }

        return $products;    
    }

    /*
    //dont use
    public function getProductDataByProductId( $productId )
    {
        $product = Product::with(['translates', 'contents'])->where('id', $productId)->orderBy('id', 'asc')->get()->first();
        $out = $this->getProductDataByProductArr( $product );

        return $out;
    }
    */

    /**
     * It is needed for sitemap
     */
    public function getProductsUrl()
    {
        $urls = [];
        $products = Product::with(['translates', 'contents', 'page' ])->where('published', '=', 1)->orderBy('id', 'asc')->get();
        $i = 0;
        foreach ($products as $key => $product) {
            if($product['page']->published && $product->published){
                $arrProduct = $this->getProductDataFormat($product);
                $langs = Config::arrGetLangsEnv();        
                foreach($langs as $lang){
                    $urls[$i][$lang] = $product->getProductUrl($lang, $arrProduct['product_name'][$lang]);
                }
                $i++;
            }
        }        
        return $urls;
    }

    /**
     * it is needed to search
     */
    public function getProductsWithImagesByIds($ids)
    {
        $products = Product::with(['translates', 'contents'])->whereIn('id', $ids)->orderBy('id', 'asc')->where('published', '=', 1)->get(); 
        return $this->dataToRender($products);
    }


    public function getProductsWithImagesByPage($pageId)
    {
        $products = Product::with(['translates', 'contents'])->where('page_id', $pageId)->orderBy('id', 'asc')->where('published', '=', 1)->get(); //->toArray();
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

    private function dataToRender($products)
    {
        $i = 0;
        $out = [];
        foreach ($products as $key => $product) {
            $urls =  $product->getProductUrls($product);
            $out[$i] =  array_merge( $this->getProductDataByProductArr( $product ), $urls);
            $i++;
        }
        return $out;
    }

    public function delete()
    {
        foreach ($this->images()->get() as $img) {
            $img->delete();
        }
        return parent::delete();
    }
}
