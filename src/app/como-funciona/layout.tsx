import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Como Funciona',
  description: 'Entenda como o Kratikos funciona. Baixe o app, crie sua conta e participe de discussões geolocalizadas em minutos.',
  alternates: {
    canonical: '/como-funciona',
  },
  openGraph: {
    title: 'Como Funciona | Kratikos',
    description: 'Entenda como o Kratikos funciona. Baixe o app e participe de discussões.',
    url: '/como-funciona',
  },
};

export default function ComoFuncionaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
