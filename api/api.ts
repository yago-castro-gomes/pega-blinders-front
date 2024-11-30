import axios from 'axios';
import { cookies } from "next/headers";

export const api = axios.create({
  baseURL: 'https://5787-186-250-206-86.ngrok-free.app',
});

api.interceptors.request.use(config => {
    const token = cookies().get('ibtrust-token');
    if (token) {
      config.headers['X-Auth-Token'] = `${token.value}`;
    }
  return config;
}, error => {
  ;
  return Promise.reject(error);
});

api.interceptors.response.use(response => response, error => {
  if (error.message.includes('Failed to fetch') || error.message.includes('Network Error')) {
    cookies().delete('ibtrust-token');
    return Promise.reject({ message: 'networkError', detail: 'Erro de rede. Você será deslogado.' });
  } else if (error.message.includes('ECONNREFUSED') && error.config.url !== '/login') {
    cookies().delete('ibtrust-token');
  } else if (error.response && error.response.data.message === 'Acesso negado') {
    cookies().delete('ibtrust-token');
    return Promise.reject({ message: 'sessionExpired', detail: 'Sua sessão expirou. Você será deslogado.' });
  }
  return Promise.reject(error);
});