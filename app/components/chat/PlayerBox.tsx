
import React from 'react';
import { Tooltip, TooltipContent, TooltipTrigger } from '../ui/tooltip';

export function PlayerBox({ player, index, removePlayer, onClick, isSelected }) {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <div
          onClick={onClick}
          className={`
            flex items-center border rounded p-1 cursor-pointer 
            transition-all duration-300 ease-in-out
            ${isSelected 
              ? 'border-yellow-500 shadow-[0_0_10px_2px_rgba(251,191,36,0.5)]' 
              : 'border-gray-600'} 
            bg-gray-700 
            hover:border-yellow-400 hover:shadow-[0_0_10px_2px_rgba(251,191,36,0.5)] hover:scale-105
          `}
        >
          <div className="flex items-center gap-1 text-white  mr-4">
            <div className="text-xs font-semibold w-10 truncate overflow-hidden whitespace-nowrap">
              {player.position}
            </div>
            <div className="text-xs text-gray-300 w-10 text-right truncate overflow-hidden whitespace-nowrap">
              {player.bb} BB
            </div>
          </div>

          <div className="flex-grow flex items-center justify-center text-white">
            <div className="text-xs font-bold truncate overflow-hidden whitespace-nowrap">
              {player.action}
              {player.action === 'Raise' && player.raiseAmount ? ` ${player.raiseAmount}` : ''}
            </div>
          </div>

          {index >= 2 && (
            <div className="ml-1">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  removePlayer(index);
                }}
                className="text-red-500 font-bold hover:text-red-700 transition"
                title="Remover jogador"
              >
                ×
              </button>
            </div>
          )}
        </div>
      </TooltipTrigger>
      <TooltipContent>Ver detalhes do jogador</TooltipContent>
    </Tooltip>
  );
}
