<?php

namespace App\Http\Controllers;

use App\Models\Pay;
use App\Models\Student;
use Shetabit\Multipay\Invoice;
use Shetabit\Payment\Facade\Payment;

class PayController extends Controller
{
    protected string $callbackRoute = '';

    public function pay(Student $student, int $price, string $detail = null)
    {
        // invoice
        $invoice = new Invoice();
        $invoice->amount($price);
        $invoice->detail([
            'description' => $detail,
        ]);

        return Payment::callbackUrl($this->callbackRoute)->purchase(
            $invoice,
            function ($driver, $transactionId) use ($student, $price) {
                // add pay to db
                $pay = new Pay();
                $pay->amount = $price;
                $pay->trans_id = $transactionId;

                $student->pays()->save($pay);
            }
        )->pay()->toJson;

    }
}
