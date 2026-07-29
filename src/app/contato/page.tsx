import type { Metadata } from 'next';
import ContactClient from './contato-client';

export const metadata: Metadata = {
  title: 'Contato',
  description: 'Entre em contato com a equipe Kratikos. Tire dúvidas, envie sugestões ou solicite suporte sobre a plataforma de engajamento cívico.',
  alternates: {
    canonical: '/contato',
  },
  openGraph: {
    title: 'Fale Conosco - Equipe Kratikos',
    description: 'Entre em contato com a equipe Kratikos para dúvidas, sugestões ou suporte.',
    url: '/contato',
    siteName: 'Kratikos',
    locale: 'pt_BR',
    images: [
      {
        url: '/seo/ogimage.webp',
        width: 1200,
        height: 630,
        alt: 'Contato Kratikos',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contato',
    description: 'Fale com a equipe do Kratikos.',
    images: ['/seo/ogimage.webp'],
  },
};

export default function ContactPage() {
  return <ContactClient />;
}
