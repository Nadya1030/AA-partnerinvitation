import type { Metadata } from 'next';
import { Playfair_Display, Alex_Brush, Jost } from 'next/font/google';
import './globals.css';

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-serif',
});

const alexBrush = Alex_Brush({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-script',
});

const jost = Jost({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-body',
});

export const metadata: Metadata = {
  title: '13th Aktjaya Anniversary',
  description: 'Undangan digital 13th Aktjaya Anniversary',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" className={`${playfair.variable} ${alexBrush.variable} ${jost.variable}`}>
      <body className="font-body bg-[#F3F4F7] text-brown">{children}</body>
    </html>
  );
}