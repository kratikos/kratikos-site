import { getPopularPolls } from '../lib/api';
import HomeClient from './page-client';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Kratikos - A sua voz na política',
  description: 'Descubra os principais debates políticos em nível internacional, nacional e regional na plataforma Kratikos.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Kratikos - A sua voz na política',
    description: 'Descubra os principais debates políticos em nível internacional, nacional e regional.',
    url: '/',
    siteName: 'Kratikos',
    images: [
      {
        url: '/seo/ogimage.webp',
        width: 1200,
        height: 630,
        alt: 'Kratikos - A sua voz na política',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kratikos - A sua voz na política',
    description: 'Descubra os principais debates políticos em nível internacional, nacional e regional.',
    images: ['/seo/ogimage.webp'],
  },
};

export default async function Home() {
  const [internacional, nacional, regional] = await Promise.all([
    getPopularPolls('internacional', 3).catch(() => undefined),
    getPopularPolls('nacional', 3).catch(() => undefined),
    getPopularPolls('regional', 3).catch(() => undefined),
  ]);
  
  const prefetchedPolls = {
    internacional,
    nacional,
    regional,
  };
  
  return <HomeClient prefetchedPolls={prefetchedPolls} />;
}
