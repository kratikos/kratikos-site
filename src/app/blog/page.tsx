import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog & Atualizações - Kratikos',
  description: 'Novidades, artigos sobre engajamento cívico e atualizações da plataforma Kratikos.',
  alternates: {
    canonical: '/blog',
  },
  openGraph: {
    title: 'Blog & Atualizações | Kratikos',
    description: 'Novidades, artigos sobre engajamento cívico e atualizações da plataforma Kratikos.',
    url: '/blog',
    siteName: 'Kratikos',
    images: [
      {
        url: '/seo/ogimage.webp',
        width: 1200,
        height: 630,
        alt: 'Blog & Atualizações - Kratikos',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blog & Atualizações | Kratikos',
    description: 'Novidades, artigos sobre engajamento cívico e atualizações da plataforma Kratikos.',
    images: ['/seo/ogimage.webp'],
  },
};

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Início',
      item: 'https://kratikos.com.br/',
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Blog',
      item: 'https://kratikos.com.br/blog',
    },
  ],
};

export default function BlogPage() {
  return (
    <main className="pt-32 pb-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <h1 className="text-4xl font-bold mb-6">Blog & Atualizações</h1>
      <p className="text-gray-400 mb-8 leading-relaxed">
        Fique por dentro das últimas notícias sobre a plataforma e artigos sobre tecnologia e democracia.
      </p>

      <div className="p-8 rounded-2xl bg-white/[0.02] border border-white/10 text-center">
        <p className="text-gray-300 text-lg">Em breve publicaremos nossos primeiros artigos e boletins cívicos!</p>
      </div>
    </main>
  );
}
