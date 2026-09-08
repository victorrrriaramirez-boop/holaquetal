import http from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import { extname, join, normalize, resolve, sep } from 'node:path';
import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, '..', 'dist');
const port = Number(process.env.PORT || 3000);
const mime = {
  '.html': 'text/html; charset=utf-8', '.css': 'text/css; charset=utf-8', '.js': 'text/javascript; charset=utf-8',
  '.svg': 'image/svg+xml', '.png': 'image/png', '.xml': 'application/xml; charset=utf-8', '.txt': 'text/plain; charset=utf-8', '.webmanifest': 'application/manifest+json; charset=utf-8'
};

function safePath(urlPath) {
  const clean = decodeURIComponent(urlPath.split('?')[0]);
  let candidate = clean === '/' ? '/index.html' : clean;
  if (!extname(candidate)) candidate += '.html';
  const resolved = normalize(join(root, candidate));
  if (!resolved.startsWith(root + sep) && resolved !== join(root, 'index.html')) return null;
  return resolved;
}

const server = http.createServer(async (req, res) => {
  const file = safePath(req.url || '/');
  if (!file) { res.writeHead(400); return res.end('Bad request'); }
  try {
    const info = await stat(file);
    if (!info.isFile()) throw new Error('not file');
    const data = await readFile(file);
    res.writeHead(200, { 'Content-Type': mime[extname(file)] || 'application/octet-stream' });
    res.end(data);
  } catch {
    res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
    res.end('Not found');
  }
});

server.listen(port, '127.0.0.1', () => console.log(`Local preview: http://127.0.0.1:${port}`));
