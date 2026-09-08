
import fs from 'node:fs'; import path from 'node:path';
const root=process.cwd(), src=path.join(root,'src'), dist=path.join(root,'dist');
const site=(process.env.SITE_URL||'https://example.com').replace(/\/$/,'');
fs.rmSync(dist,{recursive:true,force:true}); fs.mkdirSync(dist,{recursive:true});
function cpDir(a,b){fs.mkdirSync(b,{recursive:true});for(const e of fs.readdirSync(a,{withFileTypes:true})){const x=path.join(a,e.name),y=path.join(b,e.name);e.isDirectory()?cpDir(x,y):fs.copyFileSync(x,y)}}
cpDir(path.join(src,'assets'),path.join(dist,'assets'));
for(const f of ['favicon.svg','robots.txt','sitemap.xml']){let s=fs.readFileSync(path.join(src,f),'utf8').replaceAll('{{SITE_URL}}',site);fs.writeFileSync(path.join(dist,f),s)}
const pages=[['index.html',''],['servicios.html','servicios'],['proyectos.html','proyectos'],['sobre-nosotros.html','sobre-nosotros'],['contacto.html','contacto'],['privacidad.html','privacidad']];
for(const [file,route] of pages){let s=fs.readFileSync(path.join(src,file),'utf8').replaceAll('{{SITE_URL}}',site);const out=route?path.join(dist,route,'index.html'):path.join(dist,'index.html');fs.mkdirSync(path.dirname(out),{recursive:true});fs.writeFileSync(out,s)}
console.log(`Built ${pages.length} pages for ${site}`);
