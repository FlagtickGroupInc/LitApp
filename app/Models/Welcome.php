<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Welcome extends Model
{
    protected $fillable = ['title', 'description'];

    public static function fetchData()
    {
        return [
            'title' => 'Welcome to Laravel + Lit Framework',
            'description' => 'This application demonstrates how to use Laravel with Lit components.',
        ];
    }
}
