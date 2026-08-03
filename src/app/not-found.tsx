import type { Metadata } from 'next';
import NotFoundClient from './(main)/not-found-client';
import { Header, Footer } from '@/components';

export const metadata: Metadata = {
  title: 'Página Não Encontrada',
  robots: {
    index: false,
    follow: true,
  },
};

export default function NotFound() {
  return (
    <>
      <Header />
      <div className="flex-1">
        <NotFoundClient />
      </div>
      <Footer />
    </>
  );
}
