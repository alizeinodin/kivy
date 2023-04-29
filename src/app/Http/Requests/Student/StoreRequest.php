<?php

namespace App\Http\Requests\Student;

use App\Rules\PhoneNumber;
use Illuminate\Foundation\Http\FormRequest;

class StoreRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */
    public function rules()
    {
        return [
            'name' => 'required|string|max:100',
            'stn' => 'integer',
            'phone' => ['required', 'max:20', new PhoneNumber()],
            'gender' => 'required|in:male,female',
        ];
    }
}
