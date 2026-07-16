import type { APIContext } from 'astro';
import { site } from '@data/site';

export function GET(context: APIContext) {
  const sitemapUrl = new URL('sitemap-index.xml', context.site ?? site.url).href;
  const body = `User-agent: *
Allow: /

Sitemap: ${sitemapUrl}
`;
  return new Response(body, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
}
