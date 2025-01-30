<?php

use App\Http\Controllers\EditorController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\WelcomeController;

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
    return view('welcome');
});

Route::get('/welcome', [WelcomeController::class, 'index']);

Route::get('/editor.html/{page}', [EditorController::class, 'edit'])->name('editor.edit');
Route::post('/api/save-page', [EditorController::class, 'save'])->name('editor.save');
