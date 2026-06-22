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
    Schema::create('cards', function (Blueprint $table)
    {
      $table->id();
      $table->timestamps();
      $table->string('card_number', length: 20)->nullable(false)->unique();
      $table->string('pin', length: 4)->nullable(false);
      $table->dateTimeTz('activation_date')->nullable(false);
      $table->dateTimeTz('expiration_date')->nullable(false);
      $table->bigInteger('balance')->nullable(false);
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
