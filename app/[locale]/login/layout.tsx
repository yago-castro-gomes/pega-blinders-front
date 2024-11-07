'use client'

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Importa o CSS do AOS

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Inicializa o AOS
  useEffect(() => {
    AOS.init({
      duration: 1000, // Define a duração da animação
      once: true, // As animações acontecem apenas uma vez
    });
  }, []);

  return (
    <html lang="en">
      <body className='w-full h-full'
      >
        {children}
      </body>
    </html>
  );  
}
