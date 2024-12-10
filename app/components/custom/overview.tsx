import { motion } from 'framer-motion';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

import { MessageIcon, VercelIcon } from './icons';
import { CardGiftcardOutlined } from '@mui/icons-material';

export const Overview = () => {
  const t = useTranslations('PokerChat'); 

  return (
    <motion.div
      key="overview"
      className="max-w-3xl mx-auto md:mt-4"
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.98 }}
      transition={{ delay: 0.5 }}
    >
      <div className="rounded-xl p-6 flex flex-col gap-8 leading-relaxed text-center max-w-xl">
        <p className="flex flex-row justify-center gap-4 items-center">
          <CardGiftcardOutlined />
          <span style={{ color: 'white' }}>+</span>
          <MessageIcon size={32} />
        </p>
        <p style={{ color: 'white' }}>
          {t('description')}{' '}
        </p>
        <p style={{ color: 'white' }}>
          {t('learnMore')}{' '}
          <Link
            className="font-medium underline underline-offset-4"
            href="https://sdk.vercel.ai/docs"
            target="_blank"
          >
            {t('docs')}
          </Link>
          .
        </p>
      </div>
    </motion.div>
  );
};
