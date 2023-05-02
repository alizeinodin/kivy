<?php

namespace App\Http\Controllers;

use App\Http\Requests\Pay\CallbackRequest;
use App\Models\Course;
use App\Models\Pay;
use App\Models\Student;
use Illuminate\Http\JsonResponse;
use Shetabit\Multipay\Invoice;
use Shetabit\Payment\Facade\Payment;
use Symfony\Component\HttpFoundation\Response;
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

    public function callback(CallbackRequest $request): JsonResponse
    {
        $validatedData = $request->validated();

        // Verify the payment using NextPay gateway
        $payment = Payment::callbackUrl(route('payment.callback'))
            ->driver('nextpay')
            ->transactionId($validatedData['id'])
            ->amount($validatedData['amount'])
            ->verify();

        if ($payment->isVerified()) {
            // TODO: implement set a course for an student
            $pay = Pay::where(['trans_id' => $validatedData['id']])->first();
            $pay->status = 'validated';
            $pay->save();

            $student = $pay->student();
        }

        $response = [
            'message' => 'Payment verification failed'
        ];

        return response()
            ->json($response, Response::HTTP_BAD_REQUEST);
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
