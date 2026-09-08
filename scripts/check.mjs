import { readFile, stat } from 'node:fs/promises';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { routes } from '../src/site.mjs';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, '..');
const dist = resolve(root, 'dist');

const errors = [];
const titles = new Set();
const descriptions = new Set();

async function mustExist(path) {
  try { await stat(path); } catch { errors.push(`Missing required file: ${path.replace(root + '/', '')}`); }
}

for (const file of ['sitemap.xml', 'robots.txt', 'favicon.svg', 'site.webmanifest', 'assets/css/styles.css', 'assets/js/site.js', 'assets/social/og-image.png']) {
  await mustExist(resolve(dist, file));
}

for (const route of routes) {
  const file = resolve(dist, route.file);
  await mustExist(file);
  let html = '';
  try { html = await readFile(file, 'utf8'); } catch { continue; }

  const title = html.match(/<title>([^<]+)<\/title>/i)?.[1]?.trim();
  const description = html.match(/<meta\s+name="description"\s+content="([^"]+)"/i)?.[1]?.trim();
  const canonical = html.match(/<link\s+rel="canonical"\s+href="([^"]+)"/i)?.[1];

  if (!title) errors.push(`${route.file}: missing title`);
  if (!description) errors.push(`${route.file}: missing meta description`);
  if (!canonical) errors.push(`${route.file}: missing canonical`);
  if (!/property="og:title"/i.test(html) || !/property="og:description"/i.test(html) || !/property="og:image"/i.test(html)) errors.push(`${route.file}: incomplete Open Graph metadata`);
  if (!/application\/ld\+json/i.test(html)) errors.push(`${route.file}: missing Schema.org JSON-LD`);
  if (!/<main\b/i.test(html) || !/<header\b/i.test(html) || !/<footer\b/i.test(html) || !/<nav\b/i.test(html)) errors.push(`${route.file}: semantic landmarks incomplete`);
  if (!/<h1\b/i.test(html)) errors.push(`${route.file}: missing h1`);
  if (/href="#"/i.test(html)) errors.push(`${route.file}: placeholder href="#" found`);
  if (/cdn\.tailwindcss\.com|tailwind\.config|google stitch/i.test(html)) errors.push(`${route.file}: production HTML still depends on Stitch/Tailwind CDN`);

  const images = [...html.matchAll(/<img\b[^>]*>/gi)].map(m => m[0]);
  for (const tag of images) {
    if (!/\balt="[^"]*"/i.test(tag)) errors.push(`${route.file}: image without alt attribute`);
    if (!/\bwidth="\d+"/i.test(tag) || !/\bheight="\d+"/i.test(tag)) errors.push(`${route.file}: image without width/height`);
  }

  if (title) {
    if (titles.has(title)) errors.push(`${route.file}: duplicate title: ${title}`);
    titles.add(title);
  }
  if (description) {
    if (descriptions.has(description)) errors.push(`${route.file}: duplicate meta description`);
    descriptions.add(description);
  }
}

const sitemap = await readFile(resolve(dist, 'sitemap.xml'), 'utf8').catch(() => '');
for (const route of routes) {
  const expected = route.path === '/' ? 'https://solamentecree.com/' : `https://solamentecree.com${route.path}`;
  if ((process.env.SITE_URL || 'https://solamentecree.com') === 'https://solamentecree.com' && !sitemap.includes(expected)) errors.push(`sitemap.xml: missing ${expected}`);
}

if (errors.length) {
  console.error('\nProduction checks failed:');
  for (const error of errors) console.error(` - ${error}`);
  process.exitCode = 1;
} else {
  console.log('Production checks passed: SEO, semantics, images, clean links and required assets verified.');
}
