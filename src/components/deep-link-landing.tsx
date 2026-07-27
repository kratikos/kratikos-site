'use client';

import { ArrowRight, ExternalLink, Smartphone } from 'lucide-react';

interface DeepLinkLandingProps {
  deepLink: string;
  eyebrow?: string;
  title: string;
  description: string;
  content?: string | null;
  author?: string | null;
}

export default function DeepLinkLanding({
  deepLink,
  eyebrow = 'Conteúdo compartilhado',
  title,
  description,
  content,
  author,
}: DeepLinkLandingProps) {
  return (
    <main className="relative isolate min-h-[72vh] overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_15%,rgba(255,255,255,0.12),transparent_34%)]" />
      <div className="mx-auto flex max-w-4xl flex-col items-center px-6 py-20 text-center sm:py-28">
        <div className="mb-7 flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-white/5">
          <Smartphone className="h-8 w-8 text-white" aria-hidden="true" />
        </div>
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-zinc-400">
          {eyebrow}
        </p>
        <h1 className="max-w-3xl text-balance text-4xl font-bold tracking-tight text-white sm:text-6xl">
          {title}
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
          {description}
        </p>

        {content ? (
          <article className="mt-10 w-full max-w-2xl rounded-3xl border border-white/10 bg-zinc-950/80 p-7 text-left shadow-2xl shadow-black/40">
            <p className="whitespace-pre-line text-lg leading-8 text-zinc-100">
              {content}
            </p>
            {author ? (
              <p className="mt-5 text-sm font-semibold text-zinc-500">
                Publicado por {author}
              </p>
            ) : null}
          </article>
        ) : null}

        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <a
            href={deepLink}
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-white px-7 py-3 font-semibold text-black transition hover:bg-zinc-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black"
          >
            Abrir no app
            <ArrowRight className="h-5 w-5" aria-hidden="true" />
          </a>
          <a
            href="https://kratikos.com.br"
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/15 px-7 py-3 font-semibold text-white transition hover:bg-white/5 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black"
          >
            Conhecer o Kratikos
            <ExternalLink className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
        <p className="mt-5 text-sm text-zinc-600">
          Se o app estiver instalado, o conteúdo será aberto diretamente.
        </p>
      </div>
    </main>
  );
}
