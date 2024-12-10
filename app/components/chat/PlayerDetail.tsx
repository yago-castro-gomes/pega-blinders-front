// PlayerDetails.js

import React from 'react';

export function PlayerDetails({ player, updatePlayer }) {
  const positions = ['SB', 'BB', 'UTG', 'UTG+1', 'MP', 'HJ', 'CO', 'BTN'];
  const actions = ['Fold', 'Check', 'Call', 'Raise'];

  const handlePositionChange = (e) => {
    updatePlayer({ ...player, position: e.target.value });
  };

  const handleBBChange = (e) => {
    updatePlayer({ ...player, bb: e.target.value });
  };

  const handleActionChange = (e) => {
    updatePlayer({ 
      ...player, 
      action: e.target.value, 
      raiseAmount: e.target.value === 'Raise' ? player.raiseAmount : null 
    });
  };

  const handleRaiseAmountChange = (e) => {
    updatePlayer({ ...player, raiseAmount: e.target.value });
  };

  const playersList = ['Jogador 1', 'Jogador 2', 'Jogador 3'];

  const handlePlayerNameChange = (e) => {
    updatePlayer({ ...player, name: e.target.value });
  };

  return (
    <div className="p-4 text-white text-sm rounded space-y-4">
      <div>
        <label className="block text-xs font-medium mb-1">Nome do Jogador</label>
        <select
          value={player.name || ''}
          onChange={handlePlayerNameChange}
          className="w-full p-1 bg-gray-800 border border-gray-700 rounded text-white text-xs"
        >
          <option value="">Selecione um jogador</option>
          {playersList.map((name) => (
            <option key={name} value={name}>
              {name}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className="block text-xs font-medium mb-1">Posição</label>
        <div className="grid grid-cols-4 gap-1">
          {positions.map((pos) => (
            <label
              key={pos}
              className={`
                flex items-center justify-center p-1 border rounded cursor-pointer text-xs 
                transition-all duration-300 ease-in-out
                ${player.position === pos 
                  ? 'border-yellow-500 bg-gray-800 shadow-[0_0_10px_2px_rgba(251,191,36,0.5)]' 
                  : 'border-gray-600 bg-gray-700'}
                hover:border-yellow-400 hover:shadow-[0_0_10px_2px_rgba(251,191,36,0.5)] hover:scale-105
              `}
            >
              <input
                type="radio"
                value={pos}
                checked={player.position === pos}
                onChange={handlePositionChange}
                className="hidden"
              />
              {pos}
            </label>
          ))}
        </div>
      </div>

      <div>
        <label className="block text-xs font-medium mb-1">BB</label>
        <input
          type="number"
          value={player.bb}
          onChange={handleBBChange}
          className="w-full p-1 bg-gray-800 border border-gray-600 rounded text-white text-xs"
          min="0"
        />
      </div>

      <div>
        <label className="block text-xs font-medium mb-1">Ação</label>
        <div className="grid grid-cols-4 gap-1">
          {actions.map((action) => (
            <label
              key={action}
              className={`
                flex items-center justify-center p-1 border rounded cursor-pointer text-xs
                transition-all duration-300 ease-in-out
                ${player.action === action 
                  ? 'border-yellow-500 bg-gray-800 shadow-[0_0_10px_2px_rgba(251,191,36,0.5)]' 
                  : 'border-gray-600 bg-gray-700'}
                hover:border-yellow-400 hover:shadow-[0_0_10px_2px_rgba(251,191,36,0.5)] hover:scale-105
              `}
            >
              <input
                type="radio"
                value={action}
                checked={player.action === action}
                onChange={handleActionChange}
                className="hidden"
              />
              {action}
            </label>
          ))}
        </div>
      </div>

      {player.action === 'Raise' && (
        <div>
          <label className="block text-xs font-medium mb-1">Valor do Raise</label>
          <input
            type="number"
            value={player.raiseAmount || ''}
            onChange={handleRaiseAmountChange}
            className="w-full p-1 bg-gray-800 border border-gray-600 rounded text-white text-xs"
            min="0"
            placeholder="Valor"
          />
        </div>
      )}

      {player.name && (
        <div className="mt-4">
          <h3 className="text-xs font-bold mb-1">Estatísticas</h3>
          <p className="text-xs">VPIP: 25%</p>
          <p className="text-xs">PFR: 20%</p>
        </div>
      )}
    </div>
  );
}
