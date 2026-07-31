import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Política de Privacidade',
  description: 'Política de privacidade e proteção de dados LGPD da plataforma Kratikos.',
  alternates: {
    canonical: '/privacidade',
  },
  openGraph: {
    title: 'Política de Privacidade',
    description: 'Política de privacidade e proteção de dados LGPD da plataforma Kratikos.',
    url: '/privacidade',
    siteName: 'Kratikos',
    images: [
      {
        url: '/seo/ogimage.webp',
        width: 1200,
        height: 630,
        alt: 'Política de Privacidade - Kratikos',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Política de Privacidade',
    description: 'Política de privacidade e proteção de dados LGPD da plataforma Kratikos.',
    images: ['/seo/ogimage.webp'],
  },
};

export default function PrivacyPage() {
  return (
    <main className="pt-32 pb-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
      <h1 className="text-4xl font-bold mb-6">Política de Privacidade e Proteção de Dados (LGPD)</h1>
      <p className="text-gray-400 mb-8 leading-relaxed">
        Em conformidade com a LGPD (Lei Geral de Proteção de Dados - Lei nº 13.709/2018).
      </p>

      <div className="space-y-8 text-gray-300 leading-relaxed">
        <section>
          <h2 className="text-2xl font-semibold text-white mb-3">1. Coleta Mínima de Dados</h2>
          <p>
            Coletamos apenas as informações necessárias para autenticação segura e funcionamento dos recursos
            regionalizados. Seus dados pessoais jamais são vendidos a terceiros.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-white mb-3">2. Transparência e Controle</h2>
          <p>
            Você tem total direito de solicitar a exportação ou exclusão definitiva de seus dados a qualquer momento
            através de nosso suporte ou aplicativo.
          </p>
        </section>
      </div>
    </main>
  );
}
