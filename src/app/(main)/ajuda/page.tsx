import type { Metadata } from 'next';
import AjudaClient from './ajuda-client';

export const revalidate = 600;

export const metadata: Metadata = {
  title: 'Central de Ajuda e Perguntas Frequentes (FAQ)',
  description: 'Tire suas dúvidas sobre o Kratikos: cadastro, privacidade, segurança, exclusão de conta, moderação e funcionamento da plataforma.',
  alternates: {
    canonical: '/ajuda',
  },
  openGraph: {
    title: 'Central de Ajuda - Kratikos',
    description: 'Encontre respostas para todas as suas dúvidas sobre o aplicativo Kratikos.',
    url: '/ajuda',
    siteName: 'Kratikos',
    locale: 'pt_BR',
    images: [
      {
        url: '/opengraph-image',
        width: 1200,
        height: 630,
        alt: 'Central de Ajuda Kratikos',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Central de Ajuda - Kratikos',
    description: 'Tire suas dúvidas sobre o Kratikos.',
    images: ['/twitter-image'],
  },
};

export default function AjudaPage() {
  return <AjudaClient />;
}
