import { MetadataRoute } from 'next'
 
export default function robots(): MetadataRoute.Robots {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://kratikos.com.br'

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/embed/', '/api/', '/home', '/post', '/profile'],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}
