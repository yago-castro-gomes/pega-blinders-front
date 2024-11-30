// FlopCardsSelector.js

import React, { useState } from 'react';

export function FlopCardsSelector({ selectedFlopCards, setSelectedFlopCards }) {
  const suits = ['♠', '♥', '♦', '♣'];
  const ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

  const cards = suits.flatMap((suit) => ranks.map((rank) => `${rank}${suit}`));

  const handleCardSelect = (card) => {
    setSelectedFlopCards((prevCards) =>
      prevCards.includes(card)
        ? prevCards.filter((c) => c !== card)
        : prevCards.length < 5
        ? [...prevCards, card]
        : prevCards
    );
  };

  return (
    <div>
      <label>Flop Cards:</label>
      <div className="grid grid-cols-13 gap-1 max-w-md">
        {cards.map((card) => (
          <button
            key={card}
            className={`p-1 border ${
              selectedFlopCards.includes(card) ? 'bg-blue-500 text-white' : 'bg-white'
            }`}
            onClick={() => handleCardSelect(card)}
            type="button"
          >
            {card}
          </button>
        ))}
      </div>
    </div>
  );
}
