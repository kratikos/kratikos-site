import type { Metadata } from 'next';
import DeepLinkLanding from '@/components/deep-link-landing';

export const metadata: Metadata = {
  title: 'Criar publicação',
  robots: { index: false, follow: false },
};

export default function DeepLinkCreatePostPage() {
  return (
    <DeepLinkLanding
      deepLink="kratikos://post/create"
      eyebrow="Participe"
      title="Crie no Kratikos"
      description="Abra o app para criar uma publicação ou enquete e participar da conversa."
    />
  );
}
