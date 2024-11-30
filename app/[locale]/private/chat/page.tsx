'use client';

import { useEffect, useState } from 'react';
import { Autocomplete, TextField } from '@mui/material';
import { Chat } from '@/app/components/custom/chat';
import { generateUUID } from '@/lib/utils';
import { TextGenerateEffect } from '@/app/components/ui/TextGenerateEffect';
import { searchUser } from '@/api/player-endpoint.service';
import { debounce } from 'lodash';
import MagicButton from '@/app/components/MagicButton';
import { useRouter } from 'next/navigation';

export default function Page() {
  const [selectedPlayer, setSelectedPlayer] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [suggestedPlayers, setSuggestedPlayers] = useState<string[]>([]);
  const router = useRouter();

  const searchPlayer = async (text: string) => {
    try {
      const response = await searchUser(text);
      if (response.data.values && Array.isArray(response.data.values)) {
        setSuggestedPlayers(response.data.values);
      }
    } catch (error) {
      console.error(error);
      throw new Error('Unexpected error while searching for player.');
    }
  };

  const debouncedSearch = debounce((query: string) => {
    searchPlayer(query);
  }, 300);

  useEffect(() => {
    if (searchQuery) {
      debouncedSearch(searchQuery);
    } else {
      setSuggestedPlayers([]);
    }
  }, [searchQuery]);

  useEffect(() => {
    return () => {
      debouncedSearch.cancel();
    };
  }, []);

  const id = generateUUID();

  return (
    <div className="relative">
      {!selectedPlayer && (
        <div className="flex flex-col items-center min-h-screen">
          <p className="uppercase tracking-widest text-xs text-center text-secondary">
            PB IA Analysis
          </p>
          <TextGenerateEffect
            words="Welcome to the chat"
            className="text-center text-[40px] md:text-5xl lg:text-6xl"
          />
          <span>
         <MagicButton
              title="Start Chat"
              icon={''}
              position="right"
              handleClick={() => { router.push('chat/123') }}
            />
            </span>
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
