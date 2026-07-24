import type { Metadata } from 'next';
import { League_Spartan } from 'next/font/google';
import './globals.css';
import { Header, Footer } from '@/components';

export const metadata: Metadata = {
  metadataBase: new URL('https://kratikos.com.br'),
  title: {
    default: 'Kratikos - Engajamento Democrático',
    template: '%s | Kratikos',
  },
  description: 'Plataforma de engajamento democrático. Participe de discussões políticas e sociais em nível internacional, nacional e regional.',
  keywords: 'democracia, engajamento cívico, política, discussões, votação, cidadania',
  authors: [{ name: 'Kratikos' }],
  openGraph: {
    title: 'Kratikos - Engajamento Democrático',
    description: 'Plataforma de engajamento democrático. Participe de discussões políticas e sociais.',
    type: 'website',
    locale: 'pt_BR',
    siteName: 'Kratikos',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kratikos - Engajamento Democrático',
    description: 'Plataforma de engajamento democrático. Participe de discussões políticas e sociais.',
  },
  icons: {
    icon: '/favicon.svg',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Kratikos',
  url: 'https://kratikos.com.br/',
  description: 'Plataforma de engajamento democrático para discussões políticas e sociais.',
  potentialAction: {
    '@type': 'SearchAction',
    target: 'https://kratikos.com.br/search?q={search_term_string}',
    'query-input': 'required name=search_term_string'
  }
};

const leagueSpartan = League_Spartan({
  subsets: ['latin'],
  variable: '--font-league-spartan',
  display: 'swap',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" data-scroll-behavior="smooth" className={leagueSpartan.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
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
