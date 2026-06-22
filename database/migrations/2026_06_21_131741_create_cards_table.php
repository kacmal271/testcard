<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
  /**
   * Run the migrations.
   */
  public function up(): void
  {
    Schema::create('cards', function (Blueprint $table) {
      $table->id();
      $table->timestamps();
      $table->string('Card_number', length: 20)->nullable(false)->unique();
      $table->string('PIN', length: 4)->nullable(false);
      $table->dateTimeTz('Activation_date')->nullable(false);
      $table->dateTimeTz('Expiration_date')->nullable(false);
    });
  }

  /**
   * Reverse the migrations.
   */
  public function down(): void
  {
    Schema::dropIfExists('cards');
  }
};
