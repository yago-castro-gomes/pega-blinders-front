// Chat.tsx

'use client';

import * as React from 'react';
import { Canvas, UICanvas } from './canvas';
import { CanvasStreamHandler } from './canvas-stream-handler';
import { MultimodalInput } from './multimodal-input';
import { Overview } from './overview';
import { AnimatePresence } from 'framer-motion';
import { PreviewMessage, ThinkingMessage } from './message';
import { useState } from 'react';
import { useScrollToBottom } from './use-scroll-to-bottom';
import { Message, useChat } from 'ai/react';
import { FlopSelector } from '../chat/FlopSelector';
import { PlayerAutocomplete } from '../chat/PlayerAutocomplete';
import { PlayerBox } from '../chat/PlayerBox';
import { SidebarContent, SidebarHeader, SidebarProvider, SidebarTrigger, Sidebar } from '../ui/sidebar';
import { PlayerDetails } from '../chat/PlayerDetail';

interface Player {
  position: string;
  bb: number;
  action: string;
  raiseAmount: number | null;
  name: string | null;
}

interface ChatProps {
  id: string;
  initialMessages?: Message[];
  selectedModelId?: string;
}

export function Chat({ id, initialMessages = [], selectedModelId }: ChatProps) {
  const {
    messages,
    setMessages,
    handleSubmit,
    input,
    setInput,
    append,
    isLoading,
    stop,
    data: streamingData,
  } = useChat({
    body: { id, modelId: selectedModelId },
    initialMessages,
  });

  const [canvas, setCanvas] = useState<UICanvas>({
    documentId: 'init',
    content: '',
    title: '',
    status: 'idle',
    isVisible: false,
    boundingBox: {
      width: 250,
      height: 50,
      top: 0,
      left: 0,
    },
    votes: 0, // Adicione esta propriedade se necessário
  });

  const [messagesContainerRef, messagesEndRef] = useScrollToBottom<HTMLDivElement>();

  const [attachments, setAttachments] = useState<any[]>([]); // Defina o tipo correto para attachments

  // Iniciar apenas com Small Blind e Big Blind
  const initialPositions: Player[] = [
    { position: 'SB', bb: 100, action: 'FOLD', raiseAmount: null, name: null },
    { position: 'BB', bb: 100, action: 'FOLD', raiseAmount: null, name: null },
  ];
  const [positions, setPositions] = useState<Player[]>(initialPositions);

  // Estado para as cartas do flop
  const [flopCards, setFlopCards] = useState<string[]>(['', '', '']);

  // Estado para o jogador selecionado no autocomplete (se aplicável)
  const [selectedPlayer, setSelectedPlayer] = useState<any>(null); // Defina o tipo correto se necessário

  // Estado para o índice do jogador selecionado
  const [selectedPlayerIndex, setSelectedPlayerIndex] = useState<number | null>(null);

  // Função para atualizar os dados de um jogador
  const updatePlayer = (index: number, newPlayerData: Player) => {
    setPositions((prevPositions) => {
      const newPositions = [...prevPositions];
      newPositions[index] = newPlayerData;
      return newPositions;
    });
  };

  // Função para remover um jogador
  const removePlayer = (index: number) => {
    setPositions((prevPositions) => prevPositions.filter((_, i) => i !== index));

    // Atualizar selectedPlayerIndex
    setSelectedPlayerIndex((prevIndex) => {
      if (prevIndex === null) return null;
      if (prevIndex === index) return null; // O jogador removido era o selecionado
      if (prevIndex > index) return prevIndex - 1; // Ajustar o índice
      return prevIndex; // Sem mudança
    });
  };

  // Função para adicionar um novo jogador
  const addPlayer = () => {
    // Defina as posições possíveis
    const possiblePositions = ['UTG', 'UTG+1', 'MP', 'HJ', 'CO', 'BTN'];

    // Obtenha as posições já em uso
    const usedPositions = positions.map((p) => p.position);

    // Encontre a próxima posição disponível
    const nextPosition = possiblePositions.find((pos) => !usedPositions.includes(pos));

    if (nextPosition) {
      setPositions((prevPositions) => [
        ...prevPositions,
        { position: nextPosition, bb: 100, action: 'FOLD', raiseAmount: null, name: null },
      ]);
    } else {
      alert('Todas as posições foram adicionadas.');
    }
  };

  return (
    <SidebarProvider>
      <div className="flex h-dvh bg-background overflow-y-hidden">
        {/* Sidebar */}
        <Sidebar>
          <SidebarHeader>
            <h2 className="text-lg font-bold p-4">Detalhes do Jogador</h2>
          </SidebarHeader>
          <SidebarContent>
            {selectedPlayerIndex !== null && positions[selectedPlayerIndex] ? (
              <PlayerDetails
                player={positions[selectedPlayerIndex]}
                updatePlayer={(newData: Player) => updatePlayer(selectedPlayerIndex!, newData)}
              />
            ) : (
              <div className="text-secondary text-sm p-4">
                Selecione um jogador para ver os detalhes
              </div>
            )}
          </SidebarContent>
        </Sidebar>

        {/* Seção principal */}
        <div className="flex flex-col">
          {/* Botão para alternar a sidebar */}
          <div className="p-2">
            <SidebarTrigger />
          </div>

          {/* Seção com as posições da mesa */}
          <div className="flex items-center gap-2 p-4">
            {positions.map((player, index) => (
              <PlayerBox
                key={index}
                player={player}
                index={index}
                removePlayer={removePlayer}
                // Ao clicar no PlayerBox, define o jogador selecionado
                onClick={() => setSelectedPlayerIndex(index)}
                isSelected={index === selectedPlayerIndex}
              />
            ))}
            <button onClick={addPlayer} className="p-2 border rounded text-secondary text-sm">
              Adicionar Jogador
            </button>
            {/* Exibir as cartas do flop */}
            <FlopSelector flopCards={flopCards} setFlopCards={setFlopCards} />
            {/* Autocomplete para selecionar um jogador */}
          </div>

          {/* Conteúdo principal (mensagens e entrada) */}
          <div
            ref={messagesContainerRef}
            className="flex flex-col gap-6 overflow-y-hidden pt-4"
          >
            {messages.length === 0 && <Overview />}

            {messages.map((message: Message, index: number) => (
              <PreviewMessage
                key={message.id}
                chatId={id}
                message={message}
                canvas={canvas}
                setCanvas={setCanvas}
                isLoading={isLoading && messages.length - 1 === index}
              />
            ))}

            {isLoading &&
              messages.length > 0 &&
              messages[messages.length - 1].role === 'user' && <ThinkingMessage />}

            <div ref={messagesEndRef} className="shrink-0 min-w-[24px] min-h-[24px]" />
          </div>
          <form className="flex mx-auto px-4 bg-background pb-4 md:pb-6 gap-2 w-full md:max-w-3xl">
            <MultimodalInput
              chatId={id}
              input={input}
              setInput={setInput}
              handleSubmit={handleSubmit}
              isLoading={isLoading}
              stop={stop}
              attachments={attachments}
              setAttachments={setAttachments}
              messages={messages}
              setMessages={setMessages}
              append={append}
              // Passar informações adicionais se necessário
              positions={positions}
              flopCards={flopCards}
              selectedPlayer={selectedPlayer}
            />
          </form>
        </div>
      </div>

      <AnimatePresence>
        {canvas && canvas.isVisible && (
          <Canvas
            chatId={id}
            input={input}
            setInput={setInput}
            handleSubmit={handleSubmit}
            isLoading={isLoading}
            stop={stop}
            attachments={attachments}
            setAttachments={setAttachments}
            append={append}
            canvas={canvas}
            setCanvas={setCanvas}
            messages={messages}
            setMessages={setMessages}
          />
        )}
      </AnimatePresence>

      <CanvasStreamHandler streamingData={streamingData} setCanvas={setCanvas} />
    </SidebarProvider>
  );
}
