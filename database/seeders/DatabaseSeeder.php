<?php

namespace Database\Seeders;

use App\Models\Card;
use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
  use WithoutModelEvents;

  /**
   * Seed the application's database.
   */
  public function run(): void
  {
    Card::factory(40)->create();

    User::factory()->create([
      'name' => 'admin',
      'email' => 'admin@localhost',

      // hash is performed internally
      'password' => 'phplaravel'
    ]);

    User::factory(10)->create();
  }
}
