<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\NewsController;
use App\Http\Controllers\EmailController;

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

// Route::get('/', [App\Http\Controllers\NewsController::class, 'index']);

Route::post('vote', [NewsController::class, 'vote']);
Route::post('count/{id}', [NewsController::class, 'count']);
Route::post('view', [NewsController::class, 'stats']);

Route::get('image/{imagename}', [NewsController::class, 'image']);

Route::post('email/send', [EmailController::class, 'send']);

Route::get('{reactRoutes}', function () {
    return view('test'); // your start view
})->where('reactRoutes', '^((?!api).)*$'); // except 'api' word

// Route::view('/{path?}', 'test');
// Route::get('/', function () {
//     return view('test');
// });

// Route::get('/tailwind', function () {
//     return view('tailwind');
// });

// Route::get('/shees', function () {
//     return view('welcome');
// });

