<?php

namespace App\Http\Middleware;

use App\Models\DiscountCode;
use Closure;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Symfony\Component\HttpFoundation\Response as ResponseHttp;

class DiscountCodeIsExists
{
    /**
     * Handle an incoming request.
     *
     * @param Request $request
     * @param Closure(\Illuminate\Http\Request): (\Illuminate\Http\Response|\Illuminate\Http\RedirectResponse)  $next
     *
     * @return Response|RedirectResponse
     */
    public function handle(Request $request, Closure $next)
    {
        $id = $request->route()->parameter('discountCode');
        $discountCode = DiscountCode::find($id);

        if ($discountCode && $discountCode->canBeUsed() && !$discountCode->hasExpired()) {
            return $next($request);
        }

        $response = [
            'message' => 'Your discount code not found!'
        ];
        return \response($response, ResponseHttp::HTTP_NOT_FOUND);
    }
}
