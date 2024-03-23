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

    public function getClientsPaginateAndSort()
    {
        $paginationPerPage = Config::getPagination();
        $clients = User::where('role', User::$role['client'])->orderBy('id', 'asc')->simplePaginate($paginationPerPage);

        return response()->json(['success' => true, 'data'=> $clients], 200);
    }

}
