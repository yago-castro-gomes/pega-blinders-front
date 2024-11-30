// FlopSelector.js

import React, { useState } from 'react';

export function FlopSelector({ flopCards, setFlopCards }) {
  const [isSelecting, setIsSelecting] = useState(false);

  const suits = ['♠', '♥', '♦', '♣'];
  const ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

  const cards = suits.flatMap((suit) => ranks.map((rank) => `${rank}${suit}`));

  const handleCardSelect = (index, card) => {
    setFlopCards((prevCards) => {
      const newCards = [...prevCards];
      newCards[index] = card;
      return newCards;
    });
    setIsSelecting(false);
  };

  return (
    <div className="relative">
      <div className="p-2 border rounded cursor-pointer" onClick={() => setIsSelecting(!isSelecting)}>
        FLOP {flopCards.filter(Boolean).join('-')}
      </div>
      {isSelecting && (
        <div className="absolute z-10 bg-white border p-2 mt-1">
          <div className="grid grid-cols-4 gap-1">
            {cards.map((card) => (
              <button
                key={card}
                className="p-1 border rounded hover:bg-gray-200"
                onClick={() => handleCardSelect(flopCards.findIndex((c) => !c), card)}
                type="button"
              >
                {card}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
