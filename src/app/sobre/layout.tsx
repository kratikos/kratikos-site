import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sobre Nós',
  description: 'Conheça o Kratikos e nossa missão de democratizar o acesso ao debate público e empoderar cidadãos em todas as regiões.',
  alternates: {
    canonical: '/sobre',
  },
  openGraph: {
    title: 'Sobre Nós | Kratikos',
    description: 'Conheça o Kratikos e nossa missão de democratizar o acesso ao debate público.',
    url: '/sobre',
  },
};

export default function SobreLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
