<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Config;
use App\Checkout;
use App\Order;
use Illuminate\Support\Facades\Log;
use Validator;

class CheckoutController extends Controller
{
    private $validationRules = [
        'is_pay' => 'boolean'
    ];

    public function index()
    {
        $lang = Config::getDefaultLang();
        $objCheckouts = Checkout::All();
        $checkouts = Checkout::printCheckouts( $objCheckouts, $lang );
        return response()->json(['success' => true, 'data'=> $checkouts], 200);
    }

    public function getItemsWithPaginateAndSort(Request $request, $lang, $column, $direction) 
    {
        $search = $request->input('search', null);

        $objCheckout = new Checkout;

        if (!in_array($lang, (new Config)->arrGetLangs())) {
            return response()->json([
                'success'=> false, 
                'error'=> 'wrong lang in url'
            ], 404);
        }

        if ( !in_array( $column, $objCheckout->columnsAllowedToSort ) ) {
            return response()->json([
                'success'=> false, 
                'error'=> 'available columns to sort checkouts: '.implode( ',', $objCheckout->columnsAllowedToSort)
            ], 404);
        }

        if ( !in_array( $direction, Config::getAvailableSortingDirection() ) ) {
            return response()->json([
                'success'=> false, 
                'error'=> 'available direction to sort: '.implode( ',', Config::getAvailableSortingDirection())
            ], 404);
        }

        $checkouts = $objCheckout->getPaginationItems($lang, $column, $direction, $search);

        return response()->json(['success' => true, 'data'=> $checkouts], 200);
    }

    public function update(Request $request, $id)
    {
        $checkout = Checkout::find($id);

        if (empty($checkout)) {
            return response()->json(['success'=> false, 'error'=> 'Checkout not find'], 200);
        }

        $data = $request->only('is_pay');

        $validator = Validator::make($data, $this->validationRules);
        if ($validator->fails()) {
            return response()->json(['success'=> false, 'error'=> $validator->messages()], 200);
        }
        $beforeIsPay = $checkout->is_pay;

        try {
            $res = $checkout->update($data);            
        } catch (\Exception $e) {
            Log::error('checkout update ex: '.$e->getMessage());
            return response()->json(['success'=> false, 'error'=> 'Update checkout problem - exception'], 200);
        }

        if (empty($res)) {
            return response()->json(['success'=> false, 'error'=> 'Update checkout problem'], 200);
        }

        if( empty($beforeIsPay) && !empty($data['is_pay']) ){
            Order::copyDataFromBasketToOrderForUser($checkout);
        }

        return response()->json(['success'=> true], 200);
    }

}