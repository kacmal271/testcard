<?php

namespace Database\Factories;

use App\Models\Card;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends Factory<Card>
 */
class CardFactory extends Factory
{
  //*****************************************************************************

  /**
   * Define the model's default state.
   *
   * @return array<string, mixed>
   */
  public function definition(): array
  {
    return [
      'card_number' => $this->generateUnique(),
      'pin' => fake()->regexify('[0-9]{4}'),
      'activation_date' => fake()->dateTimeBetween(now(), now()->addWeek()),
      'expiration_date' => fake()->dateTimeBetween(now()->addWeek(), now()->addMonth()),
      'balance' => rand(0, 99999)
    ];
  }

  //*****************************************************************************

  private function generateUnique(): string
  {
    $cards = Card::all();

    $randomNumber = fake()->regexify('[0-9]{20}');

    // https://laravel.com/docs/13.x/collections#method-contains
    while ($cards->contains(function (Card $card, int $key) use ($randomNumber)
    {
      return $card->card_number == $randomNumber;
    }))
    {
      $randomNumber = fake()->regexify('[0-9]{20}');
    }


    return $randomNumber;
  }
}
