import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contato',
  description: 'Entre em contato com a equipe do Kratikos. Dúvidas, sugestões ou parcerias? Ficaremos felizes em ouvir você.',
  alternates: {
    canonical: '/contato',
  },
  openGraph: {
    title: 'Contato | Kratikos',
    description: 'Entre em contato com a equipe do Kratikos. Dúvidas, sugestões ou parcerias? Ficaremos felizes em ouvir você.',
    url: '/contato',
    siteName: 'Kratikos',
    images: [
      {
        url: '/opengraph-image',
        width: 1200,
        height: 630,
        alt: 'Contato - Kratikos',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contato | Kratikos',
    description: 'Entre em contato com a equipe do Kratikos. Dúvidas, sugestões ou parcerias? Ficaremos felizes em ouvir você.',
    images: ['/twitter-image'],
  },
};

export default function ContatoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
