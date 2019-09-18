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

    static public function getAllProductsWithImages()
    {
        $products = Product::query()->orderBy('id', 'asc' )->get()->toArray();

        foreach ($products as $key => $product) {
  
            $products[$key]['images'] = Image::getImagesAndThumbsByTypeAndRefId( 'product', $product['id']);
  
        }  
        return $products;
    }

}
