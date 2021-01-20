<?php
namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;

class Product extends Model
{
    private $translate;
    private $content;

    public $productFields;

    protected $fillable = [
        //'name',
        'sku',
        'price',
        //'description',
        'page_id'
    ];

    protected $casts = [
        'price' => 'integer',
        'page_id' => 'integer'
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
            //'name',
            'sku',
            'price',
            'page_id'
        ];  
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
                    $out['error'] = "Duplicate product name: $name ($lang)";
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
        }
        foreach ($product['contents'] as $translate) {
            $out[$translate['column']][$translate['lang']] = $translate['value'];
        }
        return $out;
    }


    public function getProductBySlug($productSlug, $lang)
    {
        $productOut = null;
        $products = $this->getAllProductsWithImages();
        foreach($products as $product){
            if($productSlug ==  Str::slug($product['product_name'][$lang], '-')){
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
        return $this->page()->get()->first()->getUrl($lang, $productName);
    }    

    public function getProductDataByProductArr( $product )
    {
        $arrProduct = $product->toArray();

        $out = [];
        $out = $this->getProductDataFormat($arrProduct);

        $langs = Config::arrGetLangsEnv();
        foreach($langs as $lang){
            $out['url_category'][$lang] = $product->getCategoryUrl($lang);
            $out['url_product'][$lang] = $product->getProductUrl($lang, $out['product_name'][$lang]);
        }

        $out['images'] = Image::getImagesAndThumbsByTypeAndRefId('product', $arrProduct['id']);
        return $out;
    }

    public function getAllProductsWithImages()
    {
        $products = Product::with(['translates', 'contents'])->orderBy('id', 'asc')->get();  //->toArray();

        $i = 0;
        $out = [];
        foreach ($products as $product) {
            $out[$i] = $this->getProductDataByProductArr( $product );
            $i++;
        }
        return $out;
    }

    public function getProductDataByProductId( $productId )
    {
        $product = Product::with(['translates', 'contents'])->where('id', $productId)->orderBy('id', 'asc')->get()->first();
        $out = $this->getProductDataByProductArr( $product );

        return $out;
    }

    public function getProductsWithImagesByPage($pageId)
    {
        $products = Product::with(['translates', 'contents'])->where('page_id', $pageId)->orderBy('id', 'asc')->get(); //->toArray();

        $i = 0;
        $out = [];
        foreach ($products as $key => $product) {
            $out[$i] = $this->getProductDataByProductArr( $product );
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
