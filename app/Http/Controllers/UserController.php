<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;
use App\Config;

class UserController extends Controller
{
    public function getClients()
    {
        $clients = User::query()->where('role', User::$role['client'])->orderBy('id', 'asc')->get(['id', 'name', 'email', 'created_at', 'updated_at'])->toArray();

        return response()->json(['success' => true, 'data'=> $clients], 200);
    }

    public function getClientsPaginateAndSort($column, $direction)
    {
        $objUser = new User;

        if ( !in_array( $column, $objUser->columnsAllowedToSort ) ) {
            return response()->json([
                'success'=> false, 
                'error'=> 'available columns to sort clients: '.implode( ',', $objUser->columnsAllowedToSort)
            ], 404);
        }

        ;
        if ( !in_array( $direction, Config::getAvailableSortingDirection() ) ) {
            return response()->json([
                'success'=> false, 
                'error'=> 'available direction to sort: '.implode( ',', Config::getAvailableSortingDirection())
            ], 404);
        }

        $paginationPerPage = Config::getPagination();
        $clients = $objUser->where('role', User::$role['client'])->orderBy($column, $direction)->simplePaginate($paginationPerPage);

        return response()->json(['success' => true, 'data'=> $clients], 200);
    }

}
