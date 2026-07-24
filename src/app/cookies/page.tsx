import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Política de Cookies - Kratikos',
  description: 'Informações sobre como utilizaremos cookies no Kratikos.',
  alternates: {
    canonical: '/cookies',
  },
  openGraph: {
    title: 'Política de Cookies | Kratikos',
    description: 'Informações sobre como utilizaremos cookies no Kratikos.',
    url: '/cookies',
  },
};

export default function CookiesPage() {
  return (
    <main className="pt-32 pb-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
      <h1 className="text-4xl font-bold mb-6">Política de Cookies</h1>
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
