import { AuthProvider } from '@/context/AuthContext';
import type { Metadata } from 'next';
import './globals.css';

export const viewport = { width: 'device-width', initialScale: 1 };

export const metadata: Metadata = {
  title: 'MATZON',
  description: 'A nova era da competição',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <html lang="pt" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
