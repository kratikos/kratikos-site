import type { Metadata } from 'next';
import FeaturesClient from './recursos-client';

export const metadata: Metadata = {
  title: 'Recursos e Funcionalidades',
  description: 'Conheça os recursos do Kratikos: votações transparentes, discussões geolocalizadas em três níveis, rankings em tempo real e moderação robusta.',
  alternates: {
    canonical: '/recursos',
  },
  openGraph: {
    title: 'Recursos e Funcionalidades do Kratikos',
    description: 'Sistema de votação transparente, geolocalização por escopo e rankings em tempo real para o engajamento democrático.',
    url: '/recursos',
    siteName: 'Kratikos',
    locale: 'pt_BR',
    images: [
      {
        url: '/seo/ogimage.webp',
        width: 1200,
        height: 630,
        alt: 'Recursos do Kratikos',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Recursos e Funcionalidades do Kratikos',
    description: 'Ferramentas pensadas para potencializar o engajamento cívico.',
    images: ['/seo/ogimage.webp'],
  },
};

export default function FeaturesPage() {
  return <FeaturesClient />;
}
