<?php

namespace App\Http\Controllers;

use App\Http\Requests\Student\StoreRequest;
use App\Models\Student;
use Illuminate\Http\JsonResponse;

class StudentController extends Controller
{
    public function store(StoreRequest $request): JsonResponse
    {
        $validatedData = $request->validated();

        // get student
        $student = Student::where(['phone' => $validatedData['phone']])
            ->latest()
            ->first();


        if (empty($student)) {
            $student = Student::create([
                'name' => $validatedData['name'],
                'stn' => $validatedData['stn'] ?? null,
                'phone' => $validatedData['phone'],
                'gender' => $validatedData['gender']
            ]);
        }

        return response()->json($student);
    }
}
