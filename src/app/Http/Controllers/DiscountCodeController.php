<?php

namespace App\Http\Controllers;

use App\Models\DiscountCode;
use App\Models\Pay;
use Illuminate\Http\JsonResponse;
use Symfony\Component\HttpFoundation\Response;

class DiscountCodeController extends Controller
{
    // TODO checking for existence and date of discount code
    public function addDiscount(Pay $pay, DiscountCode $discountCode): JsonResponse
    {
        $pay->amount = ceil($pay->amount * $discountCode->amount);

        $response = [
            'message' => 'The discount code add to your pay',
            'pay' => $pay,
        ];

        return response()->json($response, Response::HTTP_OK);
    }
}
