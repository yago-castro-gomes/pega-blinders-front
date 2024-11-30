// PlayerAutocomplete.js

import React, { useState } from 'react';

export function PlayerAutocomplete({ selectedPlayer, setSelectedPlayer }) {
  const [inputValue, setInputValue] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  const players = ['Jogador1', 'Jogador2', 'Jogador3', 'Jogador4']; // Substitua pela sua lista de jogadores

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
    setSuggestions(
      players.filter((player) =>
        player.toLowerCase().includes(value.toLowerCase())
      )
    );
  };

  const handleSuggestionClick = (player) => {
    setInputValue(player);
    setSelectedPlayer(player);
    setSuggestions([]);
  };

  return (
    <div className="relative">
      <input
        type="text"
        placeholder="Selecionar jogador"
        value={inputValue}
        onChange={handleInputChange}
        className="p-2 border rounded"
      />
      {suggestions.length > 0 && (
        <ul className="absolute bg-white border mt-1 w-full max-h-40 overflow-auto z-10">
          {suggestions.map((player) => (
            <li
              key={player}
              onClick={() => handleSuggestionClick(player)}
              className="p-2 hover:bg-gray-200 cursor-pointer"
            >
              {player}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
