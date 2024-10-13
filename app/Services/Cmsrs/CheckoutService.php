<?php

namespace App\Services\Cmsrs;

use App\Models\Cmsrs\Checkout;
use App\Models\Cmsrs\Product;
use Illuminate\Support\Facades\Auth;

class CheckoutService extends BaseService
{
    public static function findActiveOrder()
    {
        $orders = self::findActiveOrders();

        return $orders->first();

        // $user = Auth::user();
        // $sessionId = session()->getId();
        // if(empty($user)){
        //     //where('session_id', '=', $sessionId)->
        //     //return Checkout::where( 'is_pay', '=', 0)->first();
        //     return false;
        // }
        // //where('session_id', '=', $sessionId)->
        // return Checkout::where('user_id', '=', $user->id)->where( 'is_pay', '=', 0)->first();
    }

    public static function findActiveOrders()
    {
        $user = Auth::user();
        if (empty($user)) {
            return false;
        }

        //where('session_id', '=', $sessionId)->
        return Checkout::where('user_id', '=', $user->id)->where('is_pay', '=', 0);
    }

    public function getPaginationItems($lang, $column, $direction, $search)
    {

        $search = trim($search);

        $objCheckouts = Checkout::when($search, function ($query, $search) {
            return $query->where('email', 'like', '%'.$search.'%');
        })->orderBy($column, $direction)->get();

        // if($search){
        //     $search = '%'.$search.'%';
        //     $objCheckouts = Checkout::where('email', 'like', $search)->orderBy($column, $direction)->get();
        // }else{
        //     $objCheckouts = Checkout::orderBy($column, $direction)->get();
        // }

        $checkouts = CheckoutService::printCheckouts($objCheckouts, $lang);

        return $this->getPaginationFromCollection(collect($checkouts));

    }

    public static function printCheckouts($checkouts, $lang)
    {
        $out = [];
        $i = 0;
        foreach ($checkouts as $checkout) {
            $out[$i] = self::getCheckoutItems($checkout);
            $out[$i]['baskets'] = self::getBasketItems($checkout->baskets, $lang);
            $i++;
        }

        return $out;
    }

    private static function getCheckoutItems($checkout)
    {
        $out = [];
        $out['id'] = $checkout->id;
        $out['price_total'] = self::formatCurrency($checkout->price_total);
        $out['price_deliver'] = self::formatCurrency($checkout->price_deliver);
        $out['price_total_add_deliver'] = self::formatCurrency($checkout->price_total_add_deliver);
        $out['user_id'] = $checkout->user_id;
        $out['email'] = $checkout->email;
        $out['first_name'] = $checkout->first_name;
        $out['last_name'] = $checkout->last_name;
        $out['address'] = $checkout->address;
        $out['country'] = $checkout->country;
        $out['city'] = $checkout->city;
        $out['telephone'] = $checkout->telephone;
        $out['postcode'] = $checkout->postcode;
        $out['is_pay'] = $checkout->is_pay;
        $out['created_at'] = $checkout->created_at;

        return $out;
    }

    private static function getBasketItems($baskets, $lang)
    {
        $out = [];
        $j = 0;

        //to optimization purpose
        $pIds = [];
        foreach ($baskets as $basket) {
            $pIds[$basket['product_id']] = $basket['product_id'];
        }

        $pIdsValues = array_values($pIds);
        $products = (new Product)->whereIn('id', $pIdsValues)->with(['translates'])->get()->pluck(null, 'id')->all();

        foreach ($baskets as $basket) {
            //$product = Product::with(['translates'])->where('id', $basket['product_id'])->first(); //i don't want sql in foreach
            if (empty($product = $products[$basket['product_id']])) {
                throw new \Exception("can't find product id =".$basket['product_id']);
            }

            $productName = ProductService::getDefaultProductName($product->translates, $lang);
            $out[$j]['qty'] = $basket->qty;
            $out[$j]['price'] = self::formatCurrency($basket->price);
            $out[$j]['product_id'] = $basket['product_id'];
            $out[$j]['product_name'] = $productName;
            $out[$j]['product_url'] = (new ProductService)->getProductUrl($product, $lang, $productName); //zmiana_1007
            $j++;
        }

        return $out;
    }
}
