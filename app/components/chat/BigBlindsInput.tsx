// BigBlindsInput.js

import React from 'react';

export function BigBlindsInput({ bigBlinds, setBigBlinds }) {
  return (
    <div>
      <label htmlFor="bigBlinds">Big Blinds:</label>
      <input
        type="number"
        id="bigBlinds"
        value={bigBlinds}
        onChange={(e) => setBigBlinds(e.target.value)}
        min="0"
      />
    </div>
  );
}
