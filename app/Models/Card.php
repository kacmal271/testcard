<?php

namespace App\Models;

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
    'Card_number' => 'string',
    'PIN' => 'string',
    'Activation_date' => 'datetime',
    'Expiration_date' => 'datetime'
  ];

  /**
   * fillable
   *
   * @var array
   */
  protected $fillable = [
    'Card_number',
    'PIN',
    'Activation_date',
    'Expiration_date'
  ];
}
