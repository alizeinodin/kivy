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

    public function verify(Student $student, Course $course): JsonResponse
    {
        $courseId = $course->id;

        $student = Student::whereHas('courses', function ($query) use ($courseId) {
            $query->where('id', $courseId);
        })
            ->where(['id' => $student->id])
            ->first();

        if (!$student) {
            $response = [
                'message' => 'this student not registered!'
            ];

            return response()
                ->json($response, Response::HTTP_NOT_FOUND);
        }

        $response = [
            'course' => $course->title,
            'student' => $student->name,
        ];

        return response()
            ->json($response, Response::HTTP_OK);
    }
}
