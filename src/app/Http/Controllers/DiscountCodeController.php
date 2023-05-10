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
        $courseId = $pay->course->id;

        $discountCode = DiscountCode::whereHas('courses', function ($query) use ($courseId) {
            $query->where('id', $courseId);
        })
            ->where(['code' => $validatedData['code']])
            ->first();
        if ($discountCode and $discountCode->canBeUsed() and !$discountCode->hasExpired()) {
            $pay->amount = ceil($pay->amount * ($discountCode->amount / 100));

            $response = [
                'message' => 'The discount code add to your pay',
                'pay' => $pay,
            ];

            return response()->json($response, Response::HTTP_OK);
        }

        $response = [
            'message' => 'Your discount code expired',
        ];

        return response()->json($response, Response::HTTP_FORBIDDEN);
    }
}
