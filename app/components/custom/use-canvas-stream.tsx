import { JSONValue } from 'ai';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { useSWRConfig } from 'swr';

import { UICanvas } from './canvas';

type StreamingDelta = {
  type: 'text-delta' | 'title' | 'id' | 'suggestion' | 'clear' | 'finish';
  content: string;
};

export function useCanvasStream({
  streamingData,
  setCanvas,
}: {
  streamingData: JSONValue[] | undefined;
  setCanvas: Dispatch<SetStateAction<UICanvas>>;
}) {
  const { mutate } = useSWRConfig();
  const [optimisticSuggestions, setOptimisticSuggestions] = useState<
    Array<string>
  >([]);


  useEffect(() => {
    const mostRecentDelta = streamingData?.at(-1);
    if (!mostRecentDelta) return;

    const delta = mostRecentDelta as StreamingDelta;

    setCanvas((draftCanvas) => {
      switch (delta.type) {
        case 'id':
          return {
            ...draftCanvas,
            documentId: delta.content as string,
          };

        case 'title':
          return {
            ...draftCanvas,
            title: delta.content as string,
          };

        case 'text-delta':
          return {
            ...draftCanvas,
            content: draftCanvas.content + (delta.content as string),
            isVisible:
              draftCanvas.status === 'streaming' &&
              draftCanvas.content.length > 200 &&
              draftCanvas.content.length < 250
                ? true
                : draftCanvas.isVisible,
            status: 'streaming',
          };

        case 'suggestion':
          setTimeout(() => {
            setOptimisticSuggestions((currentSuggestions) => [
              ...currentSuggestions,
              delta.content,
            ]);
          }, 0);

          return draftCanvas;

        case 'clear':
          return {
            ...draftCanvas,
            content: '',
            status: 'streaming',
          };

        case 'finish':
          return {
            ...draftCanvas,
            status: 'idle',
          };

        default:
          return draftCanvas;
      }
    });
  }, [streamingData, setCanvas]);
}
