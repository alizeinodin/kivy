<?php

namespace App\Http\Controllers;

use App\Models\Course;
use App\Models\Student;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Storage;
use SimpleSoftwareIO\QrCode\Facades\QrCode;
use Symfony\Component\HttpFoundation\Response;

class TicketController extends Controller
{
    private string $verifyRoute = 'ticket.verify';

    public function get(Student $student, Course $course): JsonResponse
    {
        $qrcode = Qrcode::format('png')
            ->generate($this->verifyRoute, [
                'student' => $student->id,
                'course' => $course->id,
            ]);
        $file = 'images/qrcode/' . mt_rand() . '.png';
        Storage::disk('local')->put($file, $qrcode);

        $response = [
            'student_name' => $student->name,
            'course_name' => $course->title,
            'qrcode' => $file,
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
