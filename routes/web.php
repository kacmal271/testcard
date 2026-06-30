<?php

use App\Http\Controllers;

use Illuminate\Support\Facades\Route;

Route::middleware(['guest'])->group(function () {

    Route::redirect('/', '/login');

});

Route::middleware(['auth'])->group(function ()
{

  // redirect: logged user
  Route::get('/', function () {
    return redirect()->route('cards.index');
	});

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
