<?php

namespace App\Http\Controllers\Api;

use App\Models\User;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class UserController extends Controller
{
    public function index()
    {

        $users = User::all();
        return response()->json($users);

    }

    public function store(Request $request)
    {

        User::create($request->all());

        return response()->json('success');
    }

    public function show($id)
    {

        $userObj = User::findOrFail($id);

        return response()->json($userObj);
    }

    public function update($id, Request $request)
    {
        $userObj = User::find($id);
        $userObj->name = $request->get('name');
        $userObj->email = $request->get('email');

        $userObj->update();
        return response()->json($userObj);


    }

    public function destroy($id)
    {
        $user = User::find($id);
        $user->delete();
        return response()->json('user deleted');
    }
}
