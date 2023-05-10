<?php

use App\Http\Controllers\DiscountCodeController;
use App\Http\Controllers\PayController;
use App\Http\Controllers\StudentController;
use App\Http\Controllers\TicketController;
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
        Route::name('payment.')->group(function () {
            Route::get('/{student}/{pay}/{detail?}', 'pay')
                ->name('pay')
                ->where([
                    'student' => '[0-9]+',
                    'pay' => '[0-9]+',
                ]);
            Route::get('/buy/{student}/{course}', 'buy')
                ->name('buy')
                ->where([
                    'student' => '[0-9]+',
                    'course' => '[0-9]+',
                ]);

            Route::get('/callback', 'callback')
                ->name('callback');
        });
    });
});

Route::resource('students', StudentController::class)
    ->only([
        'store',
    ]);

Route::controller(DiscountCodeController::class)->group(function () {
    Route::prefix('/discountCode')->group(function () {
        Route::name('discountCode.')->group(function () {
            Route::post('/add/{pay}', 'addDiscount')
                ->name('add');
        });
    });
});

Route::controller(TicketController::class)->group(function () {
    Route::prefix('/ticket')->group(function () {
        Route::name('ticket.')->group(function () {
            Route::get('/{student}/{course}')
                ->name('get')
                ->middleware([
                    'student.registered',
                ]);
            Route::get('/{student}/{course}/verify')
                ->name('verify')
                ->middleware([
                    'student.registered',
                ]);
        });
    });
});
