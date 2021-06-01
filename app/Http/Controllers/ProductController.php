<?php
namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Product;
use App\Image;
use App\Config;
use Validator;
use Illuminate\Support\Facades\Log;

class ProductController extends Controller
{
    private $validationRules = [
        //'name' => 'max:255|required',
        'sku' => 'max:128|required|unique:products',
        'price' => 'integer|required'
        //'description' => 'max:1280'
    ];

    public function __construct()
    {
        $this->validationRules['type'] = 'in:'.Config::getPageTypes();
        $this->validationRules['published'] = 'boolean';

        $langs = (new Config)->arrGetLangs();
        foreach ($langs as $lang) {
            $this->validationRules['product_name.'.$lang] = 'max:255|required';  //|unique:translates
            $this->validationRules['product_description.'.$lang] = 'max:1280';
        }
    }

    public function index()
    {
        $products = (new Product)->getAllProductsWithImages();

        return response()->json(['success' => true, 'data'=> $products], 200);
    }

    public function create(Request $request)
    {
        $data = $request->only(
            'product_name',
            'published',
            'sku',
            'price',
            'product_description',
            'page_id',
            'images'
        );

        $validator = Validator::make($data, $this->validationRules);
        if ($validator->fails()) {
            return response()->json(['success'=> false, 'error'=> $validator->messages()], 200);
        }

        //check unique
        $valid = (new Product)->checkIsDuplicateName($data);
        if (empty($valid['success'])) {
            return response()->json($valid, 200);
        }        

        try {
            $product = (new Product)->wrapCreate($data);
        } catch (\Exception $e) {

            Log::error('product add ex: '.$e->getMessage().' line: '.$e->getLine().'  file: '.$e->getFile()); //.' for: '.var_export($data, true )
            return response()->json(['success'=> false, 'error'=> 'Add product problem, details in the log file.'], 200); //.$e->getMessage()
        }

        return response()->json(['success'=> true, 'data' => ['productId' => $product->id, 'data' => $data] ]);
    }

    public function update(Request $request, $id)
    {
        $product = Product::findOrFail($id);

        if (empty($product)) {
            return response()->json(['success'=> false, 'error'=> 'Product not find'], 200);
        }

        $data = $request->only(
            'product_name',
            'published',
            'sku',
            'price',
            'product_description',
            'page_id',
            'images'
        );

        $this->validationRules['sku'] = $this->validationRules['sku'] . ',sku,' . $id; //sku przy update - ma byc unikatowe dla produkctId
        $validator = Validator::make($data, $this->validationRules);
        if ($validator->fails()) {
            return response()->json(['success'=> false, 'error'=> $validator->messages()], 200);
        }

        //check unique
        $valid = (new Product)->checkIsDuplicateName($data, $product->id);
        if (empty($valid['success'])) {
            return response()->json($valid, 200);
        }        

        try {
            $res = $product->wrapUpdate($data);
            if (!empty($data['images']) && is_array($data['images'])) {
                Image::createImagesAndUpdateAlt($data['images'], 'product', $product->id);
            }
        } catch (\Exception $e) {
            Log::error('product update ex: '.$e->getMessage().' line: '.$e->getLine().'  file: '.$e->getFile()); //.' for: '.var_export($data, true )
            return response()->json(['success'=> false, 'error'=> 'Update product problem - exeption'], 200);
        }

        if (empty($res)) {
            return response()->json(['success'=> false, 'error'=> 'Update product problem'], 200);
        }

        return response()->json(['success'=> true], 200);
    }

    public function delete(Request $request, $id)
    {
        $product = Product::find($id);

        if (empty($product)) {
            return response()->json(['success'=> false, 'error'=> 'Product not find'], 200);
        }

        $res = $product->delete();
        if (empty($res)) {
            return response()->json(['success'=> false, 'error'=> 'product delete problem'], 200);
        }

        return response()->json(['success'=> true], 200);
    }

    public function getNameAndPrice(Request $request, $lang = '')
    {
        if( empty($lang) ){
            $lang = Config::getDefaultLang();
        }

        $products = (new Product)->getAllProductsWithImagesByLangCache($lang);
        return response()->json(['success'=> true, 'data' => $products]);
    }

}
