import './globals.css';
import React, { ReactNode } from 'react';
import { Poppins } from 'next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-poppins',
});

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt" className={poppins.variable}>
      <head>
        <title>SEM FOLEGO FC</title>
        <meta name="description" content="SEM FOLEGO FC" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>{children}</body>
    </html>
  );
}
