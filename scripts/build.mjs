import { cp, mkdir, rm, writeFile } from 'node:fs/promises';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { pages } from '../src/pages.mjs';
import { routes, site } from '../src/site.mjs';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, '..');
const dist = resolve(root, 'dist');

await rm(dist, { recursive: true, force: true });
await mkdir(dist, { recursive: true });
await cp(resolve(root, 'public'), dist, { recursive: true });

for (const page of pages) {
  await writeFile(resolve(dist, page.file), page.html, 'utf8');
}

const base = site.domain.replace(/\/$/, '');
const urls = routes.map(route => `${base}${route.path === '/' ? '/' : route.path}`);
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.map(url => `  <url><loc>${url}</loc><changefreq>monthly</changefreq><priority>${url === `${base}/` ? '1.0' : '0.8'}</priority></url>`).join('\n')}\n</urlset>\n`;
await writeFile(resolve(dist, 'sitemap.xml'), sitemap, 'utf8');

const robots = `User-agent: *\nAllow: /\nDisallow: /api/\n\nSitemap: ${base}/sitemap.xml\n`;
await writeFile(resolve(dist, 'robots.txt'), robots, 'utf8');

console.log(`Built ${pages.length} HTML pages into ${dist}`);
console.log(`Canonical base: ${base}`);

await import('./check.mjs');
