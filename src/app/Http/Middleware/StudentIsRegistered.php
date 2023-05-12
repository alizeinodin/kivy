<?php

namespace App\Http\Middleware;

use App\Models\Student;
use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class StudentIsRegistered
{
    /**
     * Handle an incoming request.
     *
     * @param \Illuminate\Http\Request $request
     * @param \Closure(\Illuminate\Http\Request): (\Illuminate\Http\Response|\Illuminate\Http\RedirectResponse)  $next
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function handle(Request $request, Closure $next)
    {
        $student = $request->route()->parameter('student')->id;
        $course = $request->route()->parameter('course')->id;

        $accepted = Student::whereHas('courses', function ($query) use ($course) {
            $query->where([
                'courses.id' => $course,
                'pays.status' => 'accepted'
            ]);
        })
            ->where(['id' => $student])
            ->first();

        if (!$accepted) {
            $response = [
                'message' => 'The student not registered!',
            ];

            return response()->json($response, Response::HTTP_UNAUTHORIZED);
        }
        return $next($request);
    }
}
