<?php

use App\Http\Controllers;

use Illuminate\Support\Facades\Route;

// redirect: guest
Route::redirect('/', '/login')->middleware(['guest']);

Route::middleware(['auth'])->group(function ()
{

  // redirect: logged user
  Route::redirect('/', '/cards');

  // Route::resource
  //// index
  ////// /posts -> posts/Index.vue
  //// show
  ////// /posts/{id} -> posts/Show.vue
  //// create
  ////// /posts/create -> posts/Create.vue
  //// store
  ////// POST -> MySQL
  //// edit
  ////// /posts/{id}/edit -> posts/Edit.vue
  //// update
  ////// PATCH -> MySQL
  //// destroy
  ////// DELETE -> MySQL

  Route::resource('cards', Controllers\CardController::class);
});

require __DIR__ . '/settings.php';
