import type { Metadata } from 'next';
import TermosClient from './termos-client';

export const revalidate = 600;

export const metadata: Metadata = {
  title: 'Termos de Uso e Políticas da Comunidade',
  description: 'Termos de uso, diretrizes de moderação, proteção de direitos autorais e política de proteção à mulher no ambiente digital da plataforma Kratikos.',
  alternates: {
    canonical: '/termos',
  },
  openGraph: {
    title: 'Termos de Uso e Diretrizes - Kratikos',
    description: 'Leia os termos de uso, regras de moderação e regramento de proteção à mulher na plataforma Kratikos.',
    url: '/termos',
    siteName: 'Kratikos',
    locale: 'pt_BR',
    images: [
      {
        url: '/opengraph-image',
        width: 1200,
        height: 630,
        alt: 'Termos de Uso - Kratikos',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Termos de Uso - Kratikos',
    description: 'Leia as diretrizes comunitárias e os termos de uso do Kratikos.',
    images: ['/twitter-image'],
  },
};

export default function TermsPage() {
  return <TermosClient />;
}
