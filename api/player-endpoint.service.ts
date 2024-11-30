'use server';

import { api } from "./api";
import axios, { AxiosResponse } from 'axios';

  export const searchUser = async (text: string): Promise<AxiosResponse<any>> => { 
      try {
            const response: AxiosResponse<any> = await api.get<string>('/player/auto-complete', { params: { text } });
          return response.data;
      } catch (error: any) {
        if (axios.isAxiosError(error)) {
            const message = error.response?.data || 'Erro inesperado ao buscar jogador.';
            throw new Error(message);
        } else {
            throw new Error('Erro inesperado ao buscar jogador.');
        }
    }
}
