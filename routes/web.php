<?php

use App\Http\Controllers\UserControllerController;
use App\Models\UserController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Ods', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});


Route::middleware(['auth', 'verified'])->group(function (){
    Route::get('/dashboard', function(){
        return Inertia::render('Dashboard');
    });
    Route::get('/dashboard/user', [UserControllerController::class, 'index']);
    Route::post('/dashboard/user', [UserControllerController::class, 'store']);
    Route::get('/dashboard/user/edit', [UserControllerController::class, 'edit'])->name('edit.user');
    Route::post('/dashboard/user/delete', [UserControllerController::class, 'destroy'])->name('destroy.user');
    Route::post('/dashboard/user/update', [UserControllerController::class, 'update']);
});

require __DIR__.'/auth.php';