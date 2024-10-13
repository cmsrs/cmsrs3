<?php

namespace App\Http\Controllers;

use App\Models\Cmsrs\Checkout;
use App\Services\Cmsrs\CheckoutService;
use App\Services\Cmsrs\ConfigService;
use App\Services\Cmsrs\OrderService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Validator;

class CheckoutController extends Controller
{
    private $validationRules = [
        'is_pay' => 'boolean',
    ];

    public function index()
    {
        $lang = ConfigService::getDefaultLang();
        $objCheckouts = Checkout::All();
        $checkouts = CheckoutService::printCheckouts($objCheckouts, $lang);

        return response()->json(['success' => true, 'data' => $checkouts], 200);
    }

    public function getItemsWithPaginateAndSort(Request $request, $lang, $column, $direction)
    {
        $search = $request->input('search', null);

        $objCheckout = new CheckoutService;

        if (! in_array($lang, (new ConfigService)->arrGetLangs())) {
            return response()->json([
                'success' => false,
                'error' => 'wrong lang in url',
            ], 404);
        }

        $columnsAllowedToSort = (new Checkout)->columnsAllowedToSort;
        if (! in_array($column, $columnsAllowedToSort)) {
            return response()->json([
                'success' => false,
                'error' => 'available columns to sort checkouts: '.implode(',', $columnsAllowedToSort),
            ], 404);
        }

        if (! in_array($direction, ConfigService::getAvailableSortingDirection())) {
            return response()->json([
                'success' => false,
                'error' => 'available direction to sort: '.implode(',', ConfigService::getAvailableSortingDirection()),
            ], 404);
        }

        $checkouts = $objCheckout->getPaginationItems($lang, $column, $direction, $search);

        return response()->json(['success' => true, 'data' => $checkouts], 200);
    }

    public function update(Request $request, $id)
    {
        $checkout = Checkout::find($id);

        if (empty($checkout)) {
            return response()->json(['success' => false, 'error' => 'Checkout not find'], 200);
        }

        $data = $request->only('is_pay');

        $validator = Validator::make($data, $this->validationRules);
        if ($validator->fails()) {
            return response()->json(['success' => false, 'error' => $validator->messages()], 200);
        }
        $beforeIsPay = $checkout->is_pay;

        try {
            $res = $checkout->update($data);
        } catch (\Exception $e) {
            Log::error('checkout update ex: '.$e->getMessage());

            return response()->json(['success' => false, 'error' => 'Update checkout problem - exception'], 200);
        }

        if (empty($res)) {
            return response()->json(['success' => false, 'error' => 'Update checkout problem'], 200);
        }

        if (empty($beforeIsPay) && ! empty($data['is_pay'])) {
            OrderService::copyDataFromBasketToOrderForUser($checkout);
        }

        return response()->json(['success' => true], 200);
    }
}
