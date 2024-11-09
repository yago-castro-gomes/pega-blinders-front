'use client';

import { useState } from 'react';
import { Chat } from '@/app/components/custom/chat';
import { generateUUID } from '@/lib/utils';
import { Input } from '@/app/components/ui/input';
import { TextGenerateEffect } from '@/app/components/ui/TextGenerateEffect';
import MagicButton from '@/app/components/MagicButton';
import SearchInput from '@/app/components/custom/SearchInput';

export default function Page() {
  const [selectedPlayer, setSelectedPlayer] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  const id = generateUUID();

  const players = ['Player1', 'Player2', 'Player3', 'Player4'];

  const handleSelectPlayer = (player: any) => {
    setSelectedPlayer(player);
  };

  const filteredPlayers = players.filter(player =>
    player.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      {!selectedPlayer && (
        <div className="flex flex-col items-center justify-center">
          <p className="uppercase tracking-widest text-xs text-center text-secondary">
            PB IA Analysis
          </p>
          <TextGenerateEffect
            words="Welcome to the chat"
            className="text-center text-[40px] md:text-5xl lg:text-6xl"
          />

          <p className="text-white text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
            Search for a player to chat with
          </p>
          <div>
            <SearchInput
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
      )}

      {selectedPlayer && (
        <Chat
          key={id}
          id={id}
          initialMessages={[]}
          selectedModelId={''}
        />
      )}
    </div>
  );
}
