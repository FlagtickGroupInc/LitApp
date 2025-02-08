<?php

use Core\FlagtickGroupBuilder\FlagtickGroupBuilder;
use Illuminate\Support\Facades\Route;

// php artisan route:list
// php artisan config:clear
// php artisan cache:clear
// php artisan optimize

Route::get('/admin/test-builder', function () {
    return FlagtickGroupBuilder::getSettings();
});
