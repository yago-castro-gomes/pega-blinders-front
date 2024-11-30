// PlayerDetails.js

import React from 'react';

export function PlayerDetails({ player, updatePlayer }) {
  const positions = ['SB', 'BB', 'UTG', 'UTG+1', 'MP', 'HJ', 'CO', 'BTN'];
  const actions = ['FOLD', 'CHECK', 'CALL', 'RAISE'];

  const handlePositionChange = (e) => {
    const newPosition = e.target.value;
    updatePlayer({ ...player, position: newPosition });
  };

  const handleBBChange = (e) => {
    const newBB = e.target.value;
    updatePlayer({ ...player, bb: newBB });
  };

  const handleActionChange = (e) => {
    const newAction = e.target.value;
    if (newAction !== 'RAISE') {
      updatePlayer({ ...player, action: newAction, raiseAmount: null });
    } else {
      updatePlayer({ ...player, action: newAction });
    }
  };

  const handleRaiseAmountChange = (e) => {
    const newRaiseAmount = e.target.value;
    updatePlayer({ ...player, raiseAmount: newRaiseAmount });
  };

  // Lista de jogadores (pode ser substituída por dados reais)
  const playersList = ['Jogador 1', 'Jogador 2', 'Jogador 3'];

  const handlePlayerNameChange = (e) => {
    const newName = e.target.value;
    updatePlayer({ ...player, name: newName });
  };

  return (
    <div className="p-4">
      <h2 className="text-lg font-bold mb-4">Detalhes do Jogador</h2>

      {/* Nome do Jogador */}
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Nome do Jogador</label>
        <select
          value={player.name || ''}
          onChange={handlePlayerNameChange}
          className="w-full p-2 border rounded"
        >
          <option value="">Selecione um jogador</option>
          {playersList.map((name) => (
            <option key={name} value={name}>
              {name}
            </option>
          ))}
        </select>
      </div>

      {/* Posição */}
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Posição</label>
        <select
          value={player.position}
          onChange={handlePositionChange}
          className="w-full p-2 border rounded"
        >
          {positions.map((pos) => (
            <option key={pos} value={pos}>
              {pos}
            </option>
          ))}
        </select>
      </div>

      {/* BB */}
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">BB</label>
        <input
          type="number"
          value={player.bb}
          onChange={handleBBChange}
          className="w-full p-2 border rounded"
          min="0"
        />
      </div>

      {/* Ação */}
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Ação</label>
        <select
          value={player.action}
          onChange={handleActionChange}
          className="w-full p-2 border rounded"
        >
          {actions.map((action) => (
            <option key={action} value={action}>
              {action}
            </option>
          ))}
        </select>
      </div>

      {/* Valor do RAISE */}
      {player.action === 'RAISE' && (
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Valor do Raise</label>
          <input
            type="number"
            value={player.raiseAmount || ''}
            onChange={handleRaiseAmountChange}
            className="w-full p-2 border rounded"
            min="0"
            placeholder="Valor"
          />
        </div>
      )}

      {/* Exibição de estatísticas (exemplo) */}
      {player.name && (
        <div className="mt-4">
          <h3 className="text-sm font-bold mb-1">Estatísticas</h3>
          <p>VPIP: 25%</p>
          <p>PFR: 20%</p>
          {/* Você pode adicionar estatísticas reais aqui */}
        </div>
      )}
    </div>
  );
}
