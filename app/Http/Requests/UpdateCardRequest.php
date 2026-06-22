<?php

namespace App\Http\Requests;

use Illuminate\Validation\Rule;
use Illuminate\Contracts\Validation\ValidationRule;
use Illuminate\Foundation\Http\FormRequest;

class UpdateCardRequest extends FormRequest
{
  /**
   * Determine if the user is authorized to make this request.
   */
  public function authorize(): bool
  {
    return auth() != null;
  }

  /**
   * Get the validation rules that apply to the request.
   *
   * @return array<string, ValidationRule|array<mixed>|string>
   */
  public function rules(): array
  {
    return [

      // card_number unique: not when updating
      'card_number' => ['required', 'string', 'size:20'],

      'pin' => ['required', 'string', 'size:4'],
      'activation_date' => ['required', Rule::date()->format('Y-m-d H:i:s')],
      'expiration_date' => ['required', Rule::date()->format('Y-m-d')],
      'balance' => ['required', 'int']

    ];
  }
}
