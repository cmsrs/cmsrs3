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
        //tu napisac ze moze byc tylko okreslone: $column, $direction
        $paginationPerPage = Config::getPagination();
        $clients = User::where('role', User::$role['client'])->orderBy($column, $direction)->simplePaginate($paginationPerPage);

        return response()->json(['success' => true, 'data'=> $clients], 200);
    }

}
