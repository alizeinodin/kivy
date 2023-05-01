<?php

namespace App\Http\Controllers;

use App\Models\Course;
use App\Models\Pay;
use App\Models\Student;
use Illuminate\Http\JsonResponse;
use Shetabit\Multipay\Invoice;
use Shetabit\Payment\Facade\Payment;
use Symfony\Component\HttpFoundation\Response as ResponseHttp;

class PayController extends Controller
{
    protected string $callbackRoute = '';

    public function pay(Student $student, Pay $pay, string $detail = null): JsonResponse
    {
        // invoice
        $invoice = new Invoice();
        $invoice->amount($pay->amount);
        $invoice->detail([
            'description' => $detail,
        ]);

        $payment = Payment::callbackUrl($this->callbackRoute)->purchase(
            $invoice,
            function ($driver, $transactionId) use ($student, $pay) {
                $pay->trans_id = $transactionId;
            }
        )->pay()->toJson;

        $response = [
            'details' => $pay,
            'payment' => $payment,
        ];

        return response()->json($response, ResponseHttp::HTTP_CREATED);
    }

    /**
     * @param Student $student
     * @param Course $course
     *
     * @return JsonResponse
     */
    public function buy(Student $student, Course $course): JsonResponse
    {
        $pay = new Pay();
        $pay->amount = $course->amount;
        $student->pays()->save($pay);

        return \response()
            ->json($pay);
    }
}
