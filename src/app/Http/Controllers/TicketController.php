<?php

namespace App\Http\Controllers;

use App\Models\Course;
use App\Models\Student;
use Illuminate\Http\JsonResponse;
use SimpleSoftwareIO\QrCode\Facades\QrCode;
use Symfony\Component\HttpFoundation\Response;

class TicketController extends Controller
{
    private string $verifyRoute = 'api.ticket.verify';

    public function get(Student $student, Course $course): JsonResponse
    {

        $path = public_path('images/qrcode/' . mt_rand() . '.png');

        $qrcode = Qrcode::format('png')
            ->generate(route($this->verifyRoute, [
                'student' => $student->id,
                'course' => $course->id,
            ]), $path);

        $response = [
            'student_name' => $student->name,
            'course_name' => $course->title,
            'qrcode' => $path,
        ];

        return response()
            ->json($response, Response::HTTP_OK);
    }
}
