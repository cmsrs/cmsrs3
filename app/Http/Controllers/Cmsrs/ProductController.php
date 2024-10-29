<?php

namespace App\Http\Controllers\Cmsrs;

use App\Http\Controllers\Controller;
use App\Models\Cmsrs\Product;
use App\Services\Cmsrs\ConfigService;
use App\Services\Cmsrs\ImageService;
use App\Services\Cmsrs\ProductService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Validator;

class ProductController extends Controller
{
    private $validationRules = [
        //'name' => 'max:255|required',
        'sku' => 'max:128|required|unique:products',
        'price' => 'integer|required',
        //'description' => 'max:1280'
    ];

    public function __construct(
        protected ConfigService $configService,
        //protected ImageService $imageService,
        protected ProductService $productService,
    ) {
        $this->validationRules['type'] = 'in:'.ConfigService::getPageTypes();
        $this->validationRules['published'] = 'boolean';

        $langs = $this->configService->arrGetLangs();
        foreach ($langs as $lang) {
            $this->validationRules['product_name.'.$lang] = 'max:255|required';  //|unique:translates
            $this->validationRules['product_description.'.$lang] = 'max:1280';
        }
    }

    public function getItem(Request $request, $id)
    {
        $product = Product::find($id);
        if (empty($product)) {
            return response()->json(['success' => false, 'error' => 'Product no found'], 404);
        }

        $data = $this->productService->getProductWithTranslatesContentsAndImages($product);

        return response()->json(['success' => true, 'data' => $data], 200);
    }

    public function getItemsWithPaginateAndSort(Request $request, $lang, $column, $direction)
    {
        $search = $request->input('search', null);

        $objProduct = new Product;

        if (! in_array($lang, $this->configService->arrGetLangs())) {
            return response()->json([
                'success' => false,
                'error' => 'wrong lang in url',
            ], 404);
        }

        if (! in_array($column, $objProduct->columnsAllowedToSort)) {
            return response()->json([
                'success' => false,
                'error' => 'available columns to sort products: '.implode(',', $objProduct->columnsAllowedToSort),
            ], 404);
        }

        if (! in_array($direction, ConfigService::getAvailableSortingDirection())) {
            return response()->json([
                'success' => false,
                'error' => 'available direction to sort: '.implode(',', ConfigService::getAvailableSortingDirection()),
            ], 404);
        }

        $products = $this->productService->getPaginationItems($lang, $column, $direction, $search);

        return response()->json(['success' => true, 'data' => $products], 200);
    }

    public function index()
    {
        $products = $this->productService->getAllProductsWithImages();

        return response()->json(['success' => true, 'data' => $products], 200);
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
            return response()->json(['success' => false, 'error' => $validator->messages()], 200);
        }

        //check unique
        $valid = $this->productService->checkIsDuplicateName($data);
        if (empty($valid['success'])) {
            return response()->json($valid, 200);
        }

        try {
            $product = $this->productService->wrapCreate($data);
        } catch (\Exception $e) {

            Log::error('product add ex: '.$e->getMessage().' line: '.$e->getLine().'  file: '.$e->getFile()); //.' for: '.var_export($data, true )

            return response()->json(['success' => false, 'error' => 'Add product problem, details in the log file.'], 200); //.$e->getMessage()
        }

        return response()->json(['success' => true, 'data' => ['productId' => $product->id, 'data' => $data]]);
    }

    public function update(Request $request, $id)
    {
        $product = Product::find($id);

        if (empty($product)) {
            return response()->json(['success' => false, 'error' => 'Product not find'], 200);
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

        $this->validationRules['sku'] = $this->validationRules['sku'].',sku,'.$id; //sku przy update - ma byc unikatowe dla produkctId
        $validator = Validator::make($data, $this->validationRules);
        if ($validator->fails()) {
            return response()->json(['success' => false, 'error' => $validator->messages()], 200);
        }

        //check unique
        $valid = $this->productService->checkIsDuplicateName($data, $product->id);
        if (empty($valid['success'])) {
            return response()->json($valid, 200);
        }

        try {
            $res = $this->productService->wrapUpdate($product, $data);
            if (! empty($data['images']) && is_array($data['images'])) {
                ImageService::createImagesAndUpdateAlt($data['images'], 'product', $product->id);
                ImageService::updatePositionImages($data['images']);
            }
        } catch (\Exception $e) {
            Log::error('product update ex: '.$e->getMessage().' line: '.$e->getLine().'  file: '.$e->getFile().' for: '.var_export($e, true)); //var_export($data, true )

            return response()->json(['success' => false, 'error' => 'Update product problem - exception'], 200);
        }

        if (empty($res)) {
            return response()->json(['success' => false, 'error' => 'Update product problem'], 200);
        }

        return response()->json(['success' => true], 200);
    }

    public function delete(Request $request, $id)
    {
        $product = Product::find($id);

        if (empty($product)) {
            return response()->json(['success' => false, 'error' => 'Product not find'], 200);
        }

        $res = $this->productService->delete($product);
        if (empty($res)) {
            return response()->json(['success' => false, 'error' => 'product delete problem'], 200);
        }

        return response()->json(['success' => true], 200);
    }

    public function getNameAndPrice(Request $request, $lang = '')
    {
        if (empty($lang)) {
            $lang = ConfigService::getDefaultLang();
        }

        $products = $this->productService->getAllProductsWithImagesByLangCache($lang);

        return response()->json(['success' => true, 'data' => $products]);
    }
}
