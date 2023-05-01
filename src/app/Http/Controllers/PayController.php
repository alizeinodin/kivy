<?php

namespace App\Http\Controllers;

use App\Models\Course;
use App\Models\Pay;
use App\Models\Student;
use Illuminate\Http\JsonResponse;
use Shetabit\Multipay\Invoice;
use Shetabit\Payment\Facade\Payment;
use Symfony\Component\HttpFoundation\Response;

class PayController extends Controller
{
    protected string $callbackRoute = '';

    // TODO delete price and calculate it for a course

    public function pay(Student $student, int $price, string $detail = null)
    {
        // invoice
        $invoice = new Invoice();
        $invoice->amount($price);
        $invoice->detail([
            'description' => $detail,
        ]);

        // add pay to db
        $pay = new Pay();
        $pay->amount = $price;

        $payment = Payment::callbackUrl($this->callbackRoute)->purchase(
            $invoice,
            function ($driver, $transactionId) use ($student, $price, $pay) {
                $pay->trans_id = $transactionId;

                $student->pays()->save($pay);
            }
        )->pay()->toJson;

        $response = [
            'details' => $pay,
            'payment' => $payment,
        ];

        return response($response, Response::HTTP_CREATED);
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
