import type { APIContext } from 'astro';
import { site } from '@data/site';
import { base } from '@utils/base';

export function GET(context: APIContext) {
  const sitemapUrl = new URL(
    `${base}sitemap-index.xml`,
    context.site ?? site.url
  ).href;
  const body = `User-agent: *
Allow: /

Sitemap: ${sitemapUrl}
`;
  return new Response(body, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
}
