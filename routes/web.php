<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

//Route::middleware(['auth', 'verified'])->group(function () {
//    Route::get('dashboard', function () {
//        return Inertia::render('dashboard');
//    })->name('dashboard');
//});

Route::get('/', function () {
    return Inertia::render('aboutme');
})->name('aboutme');

Route::get('education', function () {
    return Inertia::render('education');
})->name('education');

Route::get('skills', function () {
    return Inertia::render('skills');
})->name('skills');

Route::get('portfolio', function () {
    return Inertia::render('portfolio');
})->name('portfolio');

Route::get('blog', function () {
    return Inertia::render('blog');
})->name('blog');

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
