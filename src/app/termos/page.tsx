import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Termos de Uso - Kratikos',
  description: 'Termos e condições de uso da plataforma Kratikos.',
  alternates: {
    canonical: '/termos',
  },
  openGraph: {
    title: 'Termos de Uso | Kratikos',
    description: 'Termos e condições de uso da plataforma Kratikos.',
    url: '/termos',
    siteName: 'Kratikos',
    images: [
      {
        url: '/seo/ogimage.webp',
        width: 1200,
        height: 630,
        alt: 'Termos de Uso - Kratikos',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Termos de Uso | Kratikos',
    description: 'Termos e condições de uso da plataforma Kratikos.',
    images: ['/seo/ogimage.webp'],
  },
};

export default function TermsPage() {
  return (
    <main className="pt-32 pb-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
      <h1 className="text-4xl font-bold mb-6">Termos e Condições de Uso da Plataforma</h1>
      <p className="text-gray-400 mb-8 leading-relaxed">
        Última atualização: {new Date().toLocaleDateString('pt-BR')}
      </p>

      <div className="space-y-8 text-gray-300 leading-relaxed">
        <section>
          <h2 className="text-2xl font-semibold text-white mb-3">1. Aceitação dos Termos</h2>
          <p>
            Ao utilizar o Kratikos, você concorda expressamente em cumprir estes Termos de Uso.
            Nossa plataforma é dedicada ao engajamento democrático e debate cívico respeitoso.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-white mb-3">2. Conduta e Moderação</h2>
          <p>
            É proibido discurso de ódio, assédio, desinformação deliberada e spam. Conteúdos violadores
            serão moderados automaticamente e por nossa equipe, sujeitos a suspensão de conta.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-white mb-3">3. Integridade de Votações</h2>
          <p>
            Utilizamos mecanismos para garantir que cada cidadão tenha apenas um voto por enquete.
            Qualquer tentativa de manipulação automatizada acarretará banimento imediato.
          </p>
        </section>
      </div>
    </main>
  );
}
