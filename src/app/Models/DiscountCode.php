<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;

class DiscountCode extends Model
{
    use HasFactory;

    public function hasExpired(): bool
    {
        return $this->expires_at && now()->gt($this->expires_at);
    }

    public function canBeUsed(): bool
    {
        return is_null($this->uses) || $this->uses > 0;
    }

    public function courses(): BelongsToMany
    {
        return $this->belongsToMany(Course::class);
    }

    public function pays(): HasMany
    {
        return $this->hasMany(Pay::class);
    }
}
