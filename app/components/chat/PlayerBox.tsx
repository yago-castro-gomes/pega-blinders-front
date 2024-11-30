// PlayerBox.js

import React from 'react';
import { Tooltip, TooltipContent, TooltipTrigger } from '../ui/tooltip';

export function PlayerBox({ player, index, removePlayer, onClick, isSelected }) {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <div
          onClick={onClick}
          className={`p-2 border rounded flex items-center gap-1 text-secondary text-xs cursor-pointer ${
            isSelected ? 'bg-gray-200' : ''
          }`}
        >
          <span>{player.position}</span>
          <span>{player.bb}</span>
          <span>
            {player.action}
            {player.action === 'RAISE' && player.raiseAmount ? ` ${player.raiseAmount}` : ''}
          </span>
          {/* Botão de remover (apenas se não for um dos dois iniciais) */}
          {index >= 2 && (
            <button
              onClick={(e) => {
                e.stopPropagation(); // Impede que o evento de clique propague para o contêiner
                removePlayer(index);
              }}
              className="ml-2 text-red-500"
              title="Remover jogador"
            >
              ×
            </button>
          )}
        </div>
      </TooltipTrigger>
      <TooltipContent>Ver detalhes do jogador</TooltipContent>
    </Tooltip>
  );
}
