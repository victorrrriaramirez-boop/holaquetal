import { access, mkdir, cp } from 'node:fs/promises';
await access('public/index.html');
await mkdir('dist',{recursive:true});
await cp('public','dist',{recursive:true});
console.log('Build OK: sitio estático listo en dist/');
