<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class StudentTest extends TestCase
{
    use WithFaker;

    private function fakePhoneNumber(): string
    {
        return "0933" . mt_rand(1000000, 9999999);
    }

    /**
     * Student Store
     *
     * @return void
     */
    public function test_store_student()
    {
        $request = [
            'name' => $this->faker->name,
            'stn' => $this->faker->buildingNumber,
            'phone' => $this->fakePhoneNumber(),
            'gender' => 'male'
        ];

        $response = $this->postJson(route('students.store', $request));
        $response->assertOk();
    }
}
