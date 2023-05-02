<?php

namespace App\Http\Controllers;

use App\Http\Requests\DiscountCode\AddDiscountRequest;
use App\Models\DiscountCode;
use App\Models\Pay;
use Illuminate\Http\JsonResponse;
use Symfony\Component\HttpFoundation\Response;

class DiscountCodeController extends Controller
{
    /**
     * @param AddDiscountRequest $request
     * @param Pay $pay
     *
     * @return JsonResponse
     */
    public function addDiscount(AddDiscountRequest $request, Pay $pay): JsonResponse
    {
        $validatedData = $request->validated();

        $discountCode = DiscountCode::where(['code' => $validatedData['code']])
            ->first();

        $pay->amount = ceil($pay->amount * $discountCode->amount);

        $response = [
            'message' => 'The discount code add to your pay',
            'pay' => $pay,
        ];

        return response()->json($response, Response::HTTP_OK);
    }
}
