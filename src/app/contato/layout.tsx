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
  },
};

export default function ContatoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
