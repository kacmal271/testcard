<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Card extends Model
{
  /** @use HasFactory<\Database\Factories\CardFactory> */
  use HasFactory;

  /**
   * The attributes that should be cast to native types.
   *
   * @var array
   */

  protected $casts = [
    'card_number' => 'string',
    'pin' => 'string',
    'activation_date' => 'datetime',
    'expiration_date' => 'datetime',
    'balance' => 'int'
  ];

  /**
   * fillable
   *
   * @var array
   */
  protected $fillable = [
    'card_number',
    'pin',
    'activation_date',
    'expiration_date',
    'balance'
  ];

  //*****************************************************************************

  /**
   * Balance is stored as the lowest currency unit (as int)
   *
   * @return Attribute
   */
  protected function balance(): Attribute
  {
    return Attribute::make(
      get: fn($value) => (float) $value / 100,
      set: fn($value) => (int) ($value * 100)
    );
  }
}
