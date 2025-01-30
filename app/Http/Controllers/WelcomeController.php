<?php

namespace App\Http\Controllers;

use App\Models\Welcome;

class WelcomeController extends Controller
{
    public function index()
    {
        $data = Welcome::fetchData();
        return view('welcome', ['data' => $data]);
    }
}
