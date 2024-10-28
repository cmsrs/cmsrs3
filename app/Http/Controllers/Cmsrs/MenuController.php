<?php

namespace App\Http\Controllers\Cmsrs;

use App\Http\Controllers\Controller;
use App\Models\Cmsrs\Menu;
use App\Services\Cmsrs\ConfigService;
use App\Services\Cmsrs\MenuService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Validator;

class MenuController extends Controller
{
    public function __construct()
    {
        $langs = (new ConfigService)->arrGetLangs();
        foreach ($langs as $lang) {
            $this->validationRules['name.'.$lang] = 'max:255|required'; //|unique:App\Translate,value,null,menu_id';
        }
    }

    private $validationRules = [
        'position' => 'numeric',
    ];

    public function index()
    {
        $menus = MenuService::getAllMenus();

        return response()->json(['success' => true, 'data' => $menus], 200);
    }

    public function position(Request $request, $direction, $id)
    {
        $ret = MenuService::swapPosition($direction, $id);

        return response()->json(['success' => $ret]);
    }

    public function create(Request $request)
    {
        $data = $request->only('name');

        $validator = Validator::make($data, $this->validationRules);
        if ($validator->fails()) {
            return response()->json(['success' => false, 'error' => $validator->messages()], 200);
        }

        //check unique
        $valid = MenuService::checkIsDuplicateName($data);
        if (empty($valid['success'])) {
            return response()->json($valid, 200);
        }

        try {
            (new MenuService)->wrapCreate($data);
        } catch (\Exception $e) {
            Log::error('menu add ex: '.$e->getMessage());

            return response()->json(['success' => false, 'error' => 'Add menu problem - exception'], 200);
        }

        return response()->json(['success' => true]);
    }

    public function update(Request $request, $id)
    {
        $menu = Menu::find($id);

        if (empty($menu)) {
            return response()->json(['success' => false, 'error' => 'Menu not find'], 200);
        }

        $data = $request->only('name');

        $validator = Validator::make($data, $this->validationRules);
        if ($validator->fails()) {
            return response()->json(['success' => false, 'error' => $validator->messages()], 200);
        }

        //check unique
        $valid = MenuService::checkIsDuplicateName($data, $menu->id);
        if (empty($valid['success'])) {
            return response()->json($valid, 200);
        }

        try {
            $res = (new MenuService)->wrapUpdate($menu, $data);
        } catch (\Exception $e) {
            Log::error('menu update ex: '.$e->getMessage().' for: '.var_export($e, true));

            return response()->json(['success' => false, 'error' => 'Update menu problem - exeption'], 200);
        }

        if (empty($res)) {
            return response()->json(['success' => false, 'error' => 'Update menu problem'], 200);
        }

        return response()->json(['success' => true], 200);
    }

    public function delete(Request $request, $id)
    {
        $menu = Menu::find($id);

        if (empty($menu)) {
            return response()->json(['success' => false, 'error' => 'Menu not find'], 200);
        }

        $res = $menu->delete();
        if (empty($res)) {
            return response()->json(['success' => false, 'error' => 'Update delete problem'], 200);
        }

        return response()->json(['success' => true], 200);
    }
}
