import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import { GoogleAnalytics } from '@next/third-parties/google';

import { Toaster } from '@/components/ui/sonner';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

export const metadata: Metadata = {
  title: 'IIIT Dharwad Conclave 2024',
  description: 'The official website for IIIT Dharwad Conclave 2024',
  icons: ['/Brandlogo.png'],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <head>
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1.0, maximum-scale=1.0'
        />
      </head>
      <body className={` font-grotesk antialiased`}>
        {children}
        <Toaster />
      </body>
      <GoogleAnalytics gaId='G-0519KY429Z' />
    </html>
  );
}
