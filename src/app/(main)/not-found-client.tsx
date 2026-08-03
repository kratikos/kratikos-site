'use client';

import { usePathname } from 'next/navigation';
import Button from '@/components/button';
import { Home, ArrowRight, AlertTriangle } from 'lucide-react';
import { useEffect, useState } from 'react';
import { trackEvent } from '@/lib/gtm';

const validRoutes = [
  { path: '/', name: 'Início' },
  { path: '/como-funciona', name: 'Como Funciona' },
  { path: '/recursos', name: 'Recursos' },
  { path: '/sobre', name: 'Sobre' },
  { path: '/ajuda', name: 'Ajuda' },
  { path: '/contato', name: 'Contato' },
];

function levenshteinDistance(a: string, b: string) {
  if (a.length === 0) return b.length;
  if (b.length === 0) return a.length;
  
  const matrix = [];
  
  for (let i = 0; i <= b.length; i++) {
    matrix[i] = [i];
  }
  
  for (let j = 0; j <= a.length; j++) {
    matrix[0][j] = j;
  }
  
  for (let i = 1; i <= b.length; i++) {
    for (let j = 1; j <= a.length; j++) {
      if (b.charAt(i - 1) === a.charAt(j - 1)) {
        matrix[i][j] = matrix[i - 1][j - 1];
      } else {
        matrix[i][j] = Math.min(
          matrix[i - 1][j - 1] + 1, // substitution
          Math.min(
            matrix[i][j - 1] + 1, // insertion
            matrix[i - 1][j] + 1 // deletion
          )
        );
      }
    }
  }
  return matrix[b.length][a.length];
}

function getSimilarity(s1: string, s2: string) {
  const distance = levenshteinDistance(s1, s2);
  const maxLength = Math.max(s1.length, s2.length);
  if (maxLength === 0) return 1.0;
  return 1 - (distance / maxLength);
}

export default function NotFoundClient() {
  const pathname = usePathname();
  const [suggestedRoute, setSuggestedRoute] = useState<{ path: string; name: string } | null>(null);
  
  useEffect(() => {
    if (pathname) {
      trackEvent('view_404_error', { path: pathname });

      let bestMatch = null;
      let highestSimilarity = 0;

      for (const route of validRoutes) {
        if (route.path === '/') continue;
        
        const similarity = getSimilarity(pathname, route.path);
        if (similarity >= 0.7 && similarity > highestSimilarity) {
          highestSimilarity = similarity;
          bestMatch = route;
        }
      }

      setSuggestedRoute(bestMatch);
    }
  }, [pathname]);

  return (
    <main className="min-h-screen flex items-center justify-center">
      <div className="container mx-auto px-4 py-16 flex flex-col items-center text-center">
        <div className="w-24 h-24 bg-white/10 rounded-full flex items-center justify-center mb-8">
          <AlertTriangle className="w-12 h-12 text-white" />
        </div>
        
        <h1 className="text-4xl md:text-6xl font-bold text-zinc-100 mb-4 tracking-tight">
          Página não encontrada
        </h1>
        <p className="text-xl text-zinc-400 mb-10 max-w-lg">
          {suggestedRoute 
            ? `Você quis dizer "${suggestedRoute.name}"? Não encontramos a página exata que você digitou. Ela pode ter sido movida ou não existir.` 
            : 'Desculpe, não conseguimos encontrar a página que você está procurando. Ela pode ter sido movida ou não existir.'}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 items-center">
          <Button
            href="/"
            variant="primary"
            size="lg"
            onClick={() => trackEvent('click_404_back_home')}
            icon={<Home className="w-5 h-5" />}
            iconPosition="left"
          >
            Voltar ao Início
          </Button>
          
          {suggestedRoute && (
            <Button 
              href={suggestedRoute.path} 
              variant="outline" 
              size="lg"
              onClick={() => trackEvent('click_404_suggestion', { destination: suggestedRoute.path })}
              icon={<ArrowRight className="w-5 h-5" />}
              iconPosition="right"
            >
              Ir para {suggestedRoute.name}
            </Button>
          )}
        </div>
      </div>
    </main>
  );
}
