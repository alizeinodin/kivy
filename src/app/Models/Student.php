<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Student extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'stn',
        'phone',
        'gender'
    ];

    public function pays(): HasMany
    {
        return $this->hasMany(Pay::class);
    }
}
