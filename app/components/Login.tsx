'use client';

import React from 'react';
import Image from 'next/image';
import logo from '../../public/assets/logo.png';
import { DataUsageOutlined, QueryStatsOutlined, PushPinOutlined } from '@mui/icons-material';
import MagicButton from './MagicButton';
import { useTranslations } from 'next-intl';
import { Input, TextField } from '@mui/material';

const LoginPage = () => {
  const t = useTranslations('LoginPage');

  return (
    <div className="flex h-screen bg-black-300 text-gray-500">
      <div className="w-2/5 flex flex-col justify-center items-start p-12 bg-black-100 text-left">
        <h1 className="text-3xl font-bold mb-4 text-white">{t('title2')}</h1>
        <h2 className="text-2xl text-secondary font-bold mb-6">{t('title3')}</h2>
        <ul className="space-y-4">
          <li className="flex items-center space-x-2">
            <DataUsageOutlined />
            <p className='font-semibold'>{t('item1')}</p>
          </li>
          <li className="flex items-center space-x-2">
            <QueryStatsOutlined />
            <p className='font-semibold'>{t('item2')}</p>
          </li>
          <li className="flex items-center space-x-2">
            <PushPinOutlined />
            <p className='font-semibold'>{t('item3')}</p>
          </li>
        </ul>
      </div>

      {/* Seção de Login */}
      <div className="w-3/5 flex flex-col justify-center items-center p-12 bg-black-200">
        <div className="flex flex-col items-center mb-8">
          <Image src={logo} alt="Logo" width={100} height={100} className="mb-4" />
          <h1 className="text-3xl font-bold mb-4 text-white">{t('title')}</h1>
        </div>

        {/* Formulário de Login */}
        <div className="space-y-6 w-full max-w-sm">
          <div className="flex flex-col">
            <TextField
              variant="standard"
              id="username"
              type="text"
              placeholder={t('email')}
            />
          </div>
          <div className="flex flex-col">
            <TextField
              variant="standard"
              id="password"
              type="password"
              placeholder={t('password')}
            />
          </div>
          <MagicButton title={t('login')} position="center" />
        </div>

        {/* Link para Homepage */}
        <div className="mt-8 text-sm text-gray-400">
          <a href="/" className="hover:underline">{t('back')}</a>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
