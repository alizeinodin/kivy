<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class StudentTest extends TestCase
{
    use WithFaker;

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
            'phone' => $this->faker->phoneNumber,
            'gender' => 'male'
        ];

        $response = $this->postJson(route('students.store', $request));
        $response->assertOk();
    }
}
