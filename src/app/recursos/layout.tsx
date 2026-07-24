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
  },
};

export default function RecursosLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
