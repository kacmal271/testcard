<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreCardRequest;
use App\Http\Requests\UpdateCardRequest;
use App\Models\Card;

use Inertia\Inertia;

class CardController extends Controller
{
  /**
   * Display a listing of the resource.
   */
  public function index()
  {
    $cards = Card::paginate(15);

    return Inertia::render('cards/Index', [
      'cards' => $cards
    ]);
  }

  /**
   * Display the specified resource.
   */
  public function show(Card $card)
  {
    return Inertia::render('cards/Show', [
      'card' => $card
    ]);
  }

  /**
   * Show the form for creating a new resource.
   */
  public function create()
  {
    return Inertia::render('cards/Create');
  }

  /**
   * Store a newly created resource in storage.
   */
  public function store(StoreCardRequest $request)
  {
    // request validated

    $validated = $request->validated();

    Card::create($validated);

    return redirect()->route('cards.index')->with('success', 'A New Card has been added.');
  }

  /**
   * Show the form for editing the specified resource.
   */
  public function edit(Card $card)
  {
    return Inertia::render('cards/Edit', [
      'card' => $card
    ]);
  }

  /**
   * Update the specified resource in storage.
   */
  public function update(UpdateCardRequest $request, Card $card)
  {
    // request validated

    $validated = $request->validated();

    $card->update([
      'Card_number' => $validated['Card_number'],
      'PIN' => $validated['PIN'],
      'Activation_date' => $validated['Activation_date'],
      'Expiration_date' => $validated['Expiration_date'],
      'Balance' => $validated['Balance']
    ]);

    dd($card->getAttributes());

    // argument: Model | id (either is good)
    return redirect()->route('cards.show', ['card' => $card])
      ->with('success', "The Card has been Updated.");
  }

  /**
   * Remove the specified resource from storage.
   */
  public function destroy(Card $card)
  {
    $card->delete();

    return redirect()->route('cards.index')->with('success', 'The Card has been Deleted');
  }
}
