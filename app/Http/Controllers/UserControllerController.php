<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Models\UserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\URL;
use Inertia\Inertia;

class UserControllerController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Inertia::render('User', [
            'users' => User::all()->map(function ($user) {
                return [
                    'name' => $user->name,
                    'email' => $user->email,
                    'id' => $user->id,
                ];
            }),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {   
        $request->validate([
            'name' => ['required', 'unique:users', 'max:25'],
            'email' => ['required', 'email', 'unique:users'],
            'password' => ['required', 'min:6'],
        ]);
        $user = new User();

         $user->name = $request->name;
         $user->email = $request->email;
         $user->password = Hash::make($request->password);
         $user->save();
         return redirect()->back()->with('success','Success add user');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\UserController  $userController
     * @return \Illuminate\Http\Response
     */
    public function show(UserController $userController)
    {
        // return view('user.profile', [
        //     'user' => User::findOrFail()
        // ]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\UserController  $userController
     * @return \Illuminate\Http\Response
     */
    public function edit(User $userController, Request $request)
    {
      return Inertia::render('user/Edit', [
        'myUser' => $userController->find($request->id) 
      ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\UserController  $userController
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, UserController $userController)
    {
        User::where('id', auth()->user()->id)->update([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password) ,
        ]);
        return to_route('/dashboard/user/{id}')-> with('message', 'Update user success');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\UserController  $userController
     * @return \Illuminate\Http\Response
     */
    public function destroy(Request $request)
    {
        $user = User::find($request->id);
        $user->delete();
        return redirect()->back()->with('message', 'Delete user success');
    }
}
