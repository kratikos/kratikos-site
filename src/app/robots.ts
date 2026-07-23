import { MetadataRoute } from 'next'
 
export default function robots(): MetadataRoute.Robots {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://kratikos.com.br'

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      // Exemplo de como desabilitar pastas privadas caso existam no futuro:
      // disallow: '/private/',
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}
