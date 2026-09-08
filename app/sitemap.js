import { site } from '@/lib/site';
export default function sitemap(){
  return ['','/servicios','/proyectos','/sobre-nosotros','/contacto'].map((path)=>({url:`${site.url}${path}`,lastModified:new Date(),changeFrequency:path?'monthly':'weekly',priority:path?0.8:1}));
}
