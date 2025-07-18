<?php

namespace App\Http\Controllers\Cmsrs\Api;

use App\Http\Controllers\Controller;
use App\Models\User;
use App\Services\Cmsrs\ConfigService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class UserController extends Controller
{
    public function getClients()
    {
        $clients = User::query()->where('role', User::$role_dict['client'])->orderBy('id', 'asc')->get(['id', 'name', 'email', 'created_at', 'updated_at'])->toArray();

        return response()->json(['success' => true, 'data' => $clients], 200);
    }

    public function getClient(Request $request, $id)
    {
        $client = User::query()->where('role', User::$role_dict['client'])->where('id', $id)->first();
        if (empty($client)) {
            return response()->json(['error' => 'Client not found'], 404);
        }

        return response()->json(['success' => true, 'data' => $client->toArray()], 200);
    }

    public function getClientsPaginateAndSort(Request $request, $column, $direction)
    {
        $search = $request->input('search', null);
        if ($search) {
            $search = '%'.trim($search).'%';
        }

        $objUser = new User;

        if (! in_array($column, $objUser->columnsAllowedToSort)) {
            return response()->json([
                'success' => false,
                'error' => 'available columns to sort clients: '.implode(',', $objUser->columnsAllowedToSort),
            ], 404);
        }

        if (! in_array($direction, ConfigService::getAvailableSortingDirection())) {
            return response()->json([
                'success' => false,
                'error' => 'available direction to sort: '.implode(',', ConfigService::getAvailableSortingDirection()),
            ], 404);
        }

        $paginationPerPage = ConfigService::getPagination();
        $clients = $objUser
            ->where('role', User::$role_dict['client'])
            ->when($search, function ($query) use ($search) {
                return $query->where(function ($query) use ($search) {
                    $query->where('name', 'like', $search)
                        ->orWhere('email', 'like', $search);
                    // ->orWhere('created_at', 'like', $search) //todo - show only date without time and 'T' or 'Z'
                });
            })
            // ->where(function($query) use ($search) {
            //     if($search){
            //         $query->where('name', 'like', $search)
            //         ->orWhere('email', 'like', $search);
            //     }
            // })
            ->orderBy($column, $direction)
            // ->simplePaginate($paginationPerPage)
            ->paginate($paginationPerPage);

        return response()->json(['success' => true, 'data' => $clients], 200);
    }

    public function createClient(Request $request)
    {
        $data = $request->only(
            'name',
            'email',
            'password',
            'password_confirmation'
        );
        $validator = User::clientValidator($data);
        if ($validator->fails()) {
            return response()->json(['success' => false, 'error' => $validator->messages()], 200);
        }

        try {
            $user = User::createClient($data);
        } catch (\Exception $e) {
            Log::error('client add ex: '.$e->getMessage().' line: '.$e->getLine().'  file: '.$e->getFile());

            return response()->json(['success' => false, 'error' => 'Add client problem, details in the log file.'], 200);
        }

        return response()->json(['success' => true, 'data' => ['userId' => $user->id]]);
    }

    public function updateClient(Request $request, $id)
    {
        $user = User::find($id);

        if (empty($user)) {
            return response()->json(['success' => false, 'error' => 'User no found'], 404);
        }

        if (User::$role_dict['admin'] == $user->role) {
            return response()->json(['success' => false, 'error' => 'update admin is prohibited'], 403);
        }

        $data = $request->only(
            'name',
            // 'email',
            'password',
            'password_confirmation'
        );

        $data['id'] = $user->id;
        $data['email'] = $user->email;

        $validator = User::clientValidator($data);
        if ($validator->fails()) {
            return response()->json(['success' => false, 'error' => $validator->messages()], 200);
        }

        try {
            $user->update($data);
        } catch (\Exception $e) {
            Log::error('client update ex: '.$e->getMessage().' line: '.$e->getLine().'  file: '.$e->getFile());

            return response()->json(['success' => false, 'error' => 'Update client problem, details in the log file.'], 200);
        }

        return response()->json(['success' => true, 'data' => ['userId' => $user->id]]);
    }

    public function deleteClient(Request $request, $id)
    {
        $user = User::find($id);

        if (empty($user)) {
            return response()->json(['success' => false, 'error' => 'User no found'], 404);
        }

        if (User::$role_dict['admin'] == $user->role) {
            return response()->json(['success' => false, 'error' => 'delete admin is prohibited'], 403);
        }

        try {
            $user->delete();
        } catch (\Exception $e) {
            Log::error('client delete ex: '.$e->getMessage().' line: '.$e->getLine().'  file: '.$e->getFile());

            return response()->json(['success' => false, 'error' => 'Delete client problem, details in the log file.'], 200);
        }

        return response()->json(['success' => true]);
    }
}
