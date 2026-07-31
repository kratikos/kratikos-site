import type { Metadata } from 'next';
import DeepLinkLanding from '@/components/deep-link-landing';

export const metadata: Metadata = {
  title: 'Abrir início',
  robots: { index: false, follow: false },
};

export default async function DeepLinkHomePage({
  searchParams,
}: {
  searchParams: Promise<{ data?: string }>;
}) {
  const { data } = await searchParams;
  const deepLink = data
    ? `kratikos://home?data=${encodeURIComponent(data)}`
    : 'kratikos://home';

  return (
    <DeepLinkLanding
      deepLink={deepLink}
      eyebrow="Kratikos"
      title="Continue no app"
      description="Abra o início do Kratikos para acompanhar discussões, enquetes e publicações."
    />
  );
}
