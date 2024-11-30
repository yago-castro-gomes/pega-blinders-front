// PokerPositionSelector.js

import React from 'react';

export function PokerPositionSelector({ selectedPosition, setSelectedPosition }) {
  const positions = ['Dealer', 'Small Blind', 'Big Blind', 'UTG', 'MP', 'CO'];

  return (
    <div>
      <label htmlFor="position">Position:</label>
      <select
        id="position"
        value={selectedPosition}
        onChange={(e) => setSelectedPosition(e.target.value)}
      >
        <option value="">Select Position</option>
        {positions.map((position) => (
          <option key={position} value={position}>
            {position}
          </option>
        ))}
      </select>
    </div>
  );
}
