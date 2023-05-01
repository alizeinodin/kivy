<?php

use App\Http\Controllers\DiscountCodeController;
use App\Http\Controllers\PayController;
use App\Http\Controllers\StudentController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::controller(PayController::class)->group(function () {
    Route::prefix('/payment')->group(function () {
        Route::name('payment')->group(function () {
            Route::get('/{student}/{price}/{detail?}', 'pay')
                ->name('pay')
                ->where([
                    'student' => '[0-9]+',
                    'price' => '[0-9]+',
                ]);
        });
    });
});

Route::resource('students', StudentController::class)
    ->only([
        'store',
    ]);

Route::controller(DiscountCodeController::class)->group(function () {
    Route::prefix('discountCode')->group(function () {
        Route::name('discountCode')->group(function () {
            Route::get('/add/{discountCode}/{pay}', 'addDiscount');
        });
    });
});
