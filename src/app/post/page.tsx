import type { Metadata } from 'next';
import DeepLinkLanding from '@/components/deep-link-landing';
import { getSharedPost } from '@/lib/api';

const DEEP_LINK_ORIGIN = process.env.NEXT_PUBLIC_DEEPLINK_URL || 'https://app.kratikos.com.br';

function excerpt(value: string | null | undefined, maxLength = 180) {
  const normalized = value?.replace(/\s+/g, ' ').trim() ?? '';
  if (normalized.length <= maxLength) return normalized;
  return `${normalized.slice(0, maxLength - 1).trimEnd()}…`;
}

function postPresentation(
  post: Awaited<ReturnType<typeof getSharedPost>>,
) {
  const pollQuestion = post?.poll?.question?.trim();
  const postText = post?.content?.trim() || post?.title?.trim();
  const isPoll = Boolean(post?.poll);
  const rawImage = post?.imageUrl || post?.image_url || null;
  return {
    eyebrow: isPoll ? 'Enquete compartilhada' : 'Publicação compartilhada',
    title:
      pollQuestion ||
      excerpt(postText, 90) ||
      'Conteúdo compartilhado no Kratikos',
    description:
      excerpt(post?.poll?.description || postText) ||
      'Abra o Kratikos para visualizar e participar deste conteúdo.',
    content: pollQuestion ? postText : null,
    author: post?.author?.name || post?.author?.nickname || null,
    image:
      rawImage?.startsWith('https://') || rawImage?.startsWith('http://')
        ? rawImage
        : null,
  };
}

export async function generateMetadata({
  searchParams,
}: {
  searchParams: Promise<{ data?: string }>;
}): Promise<Metadata> {
  const { data } = await searchParams;
  const post = data ? await getSharedPost(data) : null;
  const presentation = postPresentation(post);
  const canonical = data
    ? `${DEEP_LINK_ORIGIN}/post?data=${encodeURIComponent(data)}`
    : `${DEEP_LINK_ORIGIN}/post`;
  const images = presentation.image ? [presentation.image] : undefined;

  return {
    title: presentation.title,
    description: presentation.description,
    alternates: { canonical },
    robots: { index: false, follow: false },
    openGraph: {
      title: presentation.title,
      description: presentation.description,
      type: 'article',
      url: canonical,
      siteName: 'Kratikos',
      locale: 'pt_BR',
      images,
    },
    twitter: {
      card: images ? 'summary_large_image' : 'summary',
      title: presentation.title,
      description: presentation.description,
      images,
    },
  };
}

export default async function SharedPostPage({
  searchParams,
}: {
  searchParams: Promise<{ data?: string }>;
}) {
  const { data } = await searchParams;
  const post = data ? await getSharedPost(data) : null;
  const presentation = postPresentation(post);
  const canonical = data
    ? `${DEEP_LINK_ORIGIN}/post?data=${encodeURIComponent(data)}`
    : `${DEEP_LINK_ORIGIN}/post`;

  const jsonLd = post
    ? {
        '@context': 'https://schema.org',
        '@type': 'SocialMediaPosting',
        headline: presentation.title,
        articleBody: presentation.description,
        author: presentation.author
          ? {
              '@type': 'Person',
              name: presentation.author,
            }
          : undefined,
        image: presentation.image || undefined,
        url: canonical,
        publisher: {
          '@type': 'Organization',
          name: 'Kratikos',
          url: 'https://kratikos.com.br',
        },
      }
    : null;

  if (!data) {
    return (
      <DeepLinkLanding
        deepLink="kratikos://home"
        eyebrow="Link incompleto"
        title="Conteúdo não identificado"
        description="Este link não possui o identificador necessário. Abra o Kratikos para continuar."
      />
    );
  }

  return (
    <>
      {jsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      )}
      <DeepLinkLanding
        deepLink={`kratikos://post?data=${encodeURIComponent(data)}`}
        eyebrow={presentation.eyebrow}
        title={presentation.title}
        description={presentation.description}
        content={presentation.content}
        author={presentation.author}
      />
    </>
  );
}
