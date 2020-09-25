<?php

namespace App;

use Illuminate\Database\Eloquent\Model;



class Product extends Model
{
    protected $fillable = [
        'name',
        'sku',
        'price',
        'description',
        'page_id'
    ];

    public function images()
    {
      return $this->hasMany('App\Image');
    }    

    /**
     * use also in script to load demo (test) data
     * php artisan command:load-demo-data
     */
    static public function wrapCreate($data)
    {
        $product = Product::create( $data );
        if( empty($product->id)){
          throw new \Exception("I cant get product id");
        }
  
        if( !empty($data['images']) && is_array($data['images']) ){
          Image::createImages($data['images'], 'product',  $product->id);
        }
        return $product;
    }

    static public function getAllProductsWithImages()
    {
        $products = Product::query()->orderBy('id', 'asc' )->get()->toArray();

        foreach ($products as $key => $product) {
            $products[$key]['images'] = Image::getImagesAndThumbsByTypeAndRefId( 'product', $product['id']);
        }  
        return $products;
    }

    static public function getProductsWithImagesByPage($pageId)
    {      
        $products = Product::query()->where('page_id', $pageId)->orderBy('id', 'asc' )->get()->toArray();

        foreach ($products as $key => $product) {
            $products[$key]['images'] = Image::getImagesAndThumbsByTypeAndRefId( 'product', $product['id']);
        }  
        return $products;
    }

    public function delete()
    {
        foreach($this->images()->get() as $img){
          $img->delete();
        }

        return parent::delete();
    }
    

}