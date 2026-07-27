import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone();
  const host = request.headers.get('host') || '';

  // Identifica se é o subdomínio dedicado de deeplinks (app.kratikos.com.br ou app.localhost:3000 em ambiente dev)
  const isAppSubdomain =
    host.startsWith('app.kratikos.com.br') ||
    host.startsWith('app.localhost') ||
    host.split(':')[0] === 'app.kratikos.com.br';

  const pathname = url.pathname;

  // 1. Bypass direto para arquivos de verificação de deeplinks (.well-known)
  if (
    pathname === '/apple-app-site-association' ||
    pathname === '/.well-known/apple-app-site-association' ||
    pathname === '/.well-known/assetlinks.json'
  ) {
    const response = NextResponse.next();
    response.headers.set('x-is-deeplink-config', 'true');
    return response;
  }

  // 2. Tráfego do subdomínio app.kratikos.com.br
  if (isAppSubdomain) {
    const response = NextResponse.next();
    response.headers.set('x-subdomain', 'app');
    response.headers.set('x-is-deeplink', 'true');
    return response;
  }

  // 3. Redirecionamento seguro de www.kratikos.com.br para kratikos.com.br (apenas para o site principal)
  if (host.startsWith('www.kratikos.com.br')) {
    url.host = 'kratikos.com.br';
    return NextResponse.redirect(url, 301);
  }

  // 4. Tráfego do site principal (kratikos.com.br)
  const response = NextResponse.next();
  response.headers.set('x-subdomain', 'main');
  return response;
}

export const config = {
  matcher: [
    /*
     * Intercepta todas as requisições exceto arquivos estáticos, assets, favicon, etc.
     */
    '/((?!_next/static|_next/image|favicon.ico|site.webmanifest|icons/|visual-identity/|stores/|seo/|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico|woff|woff2|ttf|otf)).*)',
  ],
};
