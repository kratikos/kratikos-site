import type { Metadata } from 'next';
import './globals.css';
import { Header, Footer } from '@/components';

export const metadata: Metadata = {
  title: 'Kratikos - Engajamento Democrático',
  description: 'Plataforma de engajamento democrático. Participe de discussões políticas e sociais em nível internacional, nacional e regional.',
  keywords: 'democracia, engajamento cívico, política, discussões, votação, cidadania',
  authors: [{ name: 'Kratikos' }],
  openGraph: {
    title: 'Kratikos - Engajamento Democrático',
    description: 'Plataforma de engajamento democrático. Participe de discussões políticas e sociais.',
    type: 'website',
    locale: 'pt_BR',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kratikos - Engajamento Democrático',
    description: 'Plataforma de engajamento democrático. Participe de discussões políticas e sociais.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" data-scroll-behavior="smooth">
      <body className="min-h-screen bg-black flex flex-col">
        <Header />
        <div className="flex-1">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
