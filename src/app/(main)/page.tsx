import { getPopularPolls, getPlatformStats } from '@/lib/api';
import HomeClient from './page-client';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Kratikos: sua voz digital',
  description: 'A rede social de opinião onde você vota, comenta e descobre o que a sociedade pensa sobre política, economia, esportes e mais.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Kratikos: sua voz digital',
    description: 'A rede social de opinião onde você vota, comenta e descobre o que a sociedade pensa sobre política, economia, esportes e mais.',
    url: '/',
    siteName: 'Kratikos',
    images: [
      {
        url: '/seo/ogimage.webp',
        width: 1200,
        height: 630,
        alt: 'Kratikos: sua voz digital',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kratikos: sua voz digital',
    description: 'A rede social de opinião onde você vota, comenta e descobre o que a sociedade pensa sobre política, economia, esportes e mais.',
    images: ['/seo/ogimage.webp'],
  },
};

export default async function Home() {
  const [internacional, nacional, regional, stats] = await Promise.all([
    getPopularPolls('internacional', 3).catch(() => undefined),
    getPopularPolls('nacional', 3).catch(() => undefined),
    getPopularPolls('regional', 3).catch(() => undefined),
    getPlatformStats().catch(() => undefined),
  ]);
  
  const prefetchedPolls = {
    internacional,
    nacional,
    regional,
  };
  
  return <HomeClient prefetchedPolls={prefetchedPolls} stats={stats} />;
}
