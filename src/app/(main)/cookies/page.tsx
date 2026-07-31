import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Política de Cookies',
  description: 'Informações sobre como utilizaremos cookies no Kratikos.',
  alternates: {
    canonical: '/cookies',
  },
  openGraph: {
    title: 'Política de Cookies',
    description: 'Informações sobre a utilização de cookies na plataforma Kratikos.',
    url: '/cookies',
    siteName: 'Kratikos',
    images: [
      {
        url: '/opengraph-image',
        width: 1200,
        height: 630,
        alt: 'Política de Cookies - Kratikos',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Política de Cookies - Kratikos',
    description: 'Saiba como o Kratikos utiliza cookies.',
    images: ['/twitter-image'],
  },
};

export default function CookiesPage() {
  return (
    <main className="pt-32 pb-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
      <h1 className="text-4xl font-bold mb-6">Política de Cookies e Preferências de Sessão</h1>
      <p className="text-gray-400 mb-8 leading-relaxed">
        Uso de cookies estritamente necessários para o funcionamento e preferências de sessão.
      </p>

      <div className="space-y-8 text-gray-300 leading-relaxed">
        <section>
          <h2 className="text-2xl font-semibold text-white mb-3">1. Cookies Essenciais</h2>
          <p>
            Utilizamos apenas cookies essenciais para manter sua sessão ativa e salvar preferências
            básicas de navegação de forma anônima e segura.
          </p>
        </section>
      </div>
    </main>
  );
}
