<?php

namespace App\Http\Controllers;

use App\Models\Course;
use App\Models\Pay;
use App\Models\Student;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Shetabit\Multipay\Exceptions\InvalidPaymentException;
use Shetabit\Multipay\Invoice;
use Shetabit\Payment\Facade\Payment;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Response as ResponseHttp;

class PayController extends Controller
{
    protected string $callbackRoute = 'api.payment.callback';

    /**
     * @param Student $student
     * @param Pay $pay
     * @param string|null $detail
     *
     * @return mixed
     * @throws \Exception
     */
    public function pay(Student $student, Pay $pay, string $detail = null): mixed
    {
        // invoice
        $invoice = new Invoice();
        $invoice->amount($pay->amount);
        $invoice->detail([
            'description' => $detail,
        ]);

        return Payment::purchase(
            $invoice,
            function ($driver, $transactionId) use ($student, $pay) {
                $pay->trans_id = $transactionId;
            }
        )->pay()->toJson();
    }

    public function callback(Request $request): JsonResponse
    {
        $pay = Pay::where([
            'trans_id' => $request->input('trans_id'),
            'amount' => $request->input('amount'),
        ])
            ->latest()
            ->first();

        try {
            // Verify the payment using NextPay gateway
            $payment = Payment::transactionId($pay['trans_id'])
                ->amount($pay['amount'])
                ->verify();

            $pay->status = 'validated';
            $pay->Shaparak_Ref_Id = $payment->getReferenceId();
            $pay->save();

            $response = [
                'message' => 'Payment successful',
                'course_name' => $pay->course->title,
                'student_name' => $pay->student->name,
            ];

            return \response()
                ->json($response, ResponseHttp::HTTP_OK);


        } catch (InvalidPaymentException $exception) {

            $response = ['message' => 'Payment verification failed'];

            return response()
                ->json($response, Response::HTTP_BAD_REQUEST);
        }

    }

    /**
     * @param Student $student
     * @param Course $course
     *
     * @return JsonResponse
     */
    public
    function buy(Student $student, Course $course): JsonResponse
    {
        $pay = new Pay();
        $pay->amount = $course->price;

        $pay->student()->associate($student);
        $pay->course()->associate($course);

        $pay->save();

        return \response()
            ->json($pay);
    }
}
