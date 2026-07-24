import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Recursos',
  description: 'Descubra os recursos do Kratikos: sistema de votação transparente, posts geolocalizados, rankings em tempo real e moderação inteligente.',
  alternates: {
    canonical: '/recursos',
  },
  openGraph: {
    title: 'Recursos | Kratikos',
    description: 'Descubra os recursos do Kratikos: votação transparente, geolocalização e mais.',
    url: '/recursos',
    siteName: 'Kratikos',
    images: [
      {
        url: '/seo/ogimage.webp',
        width: 1200,
        height: 630,
        alt: 'Recursos - Kratikos',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Recursos | Kratikos',
    description: 'Descubra os recursos do Kratikos: votação transparente, geolocalização e mais.',
    images: ['/seo/ogimage.webp'],
  },
};

export default function RecursosLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
