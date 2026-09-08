# Solamente Cree — versión preparada para GitHub + Vercel

## Qué contiene
- Sitio responsive multipágina: Inicio, Servicios, Proyectos, Sobre nosotros y Contacto.
- SEO por página: title, description, canonical y Open Graph.
- sitemap.xml y robots.txt generados con el dominio real mediante `SITE_URL`.
- Datos estructurados Organization.
- Formulario conectado a `/api/contact`, preparado para reenviar a un webhook mediante `CONTACT_WEBHOOK_URL`.
- Sin dependencia de Google Stitch para editar o desplegar el código.

## Antes de publicar
1. En Vercel crea `SITE_URL` con el dominio definitivo, por ejemplo `https://www.tudominio.es`.
2. Si quieres activar el formulario, configura `CONTACT_WEBHOOK_URL` con el endpoint de tu proveedor de formularios/automatización.
3. Sustituye la política de privacidad de plantilla por el texto legal real.
4. Recomendado: descargar las 4 imágenes remotas y guardarlas localmente en `/src/assets/` para evitar depender de URLs externas de Google.

## GitHub
Crea un repositorio vacío y desde esta carpeta ejecuta:

```bash
git init
git add .
git commit -m "Primera versión web"
git branch -M main
git remote add origin https://github.com/TU-USUARIO/TU-REPO.git
git push -u origin main
```

## Vercel
1. New Project → Import Git Repository.
2. Selecciona este repositorio.
3. Framework Preset: Other.
4. Build Command: `npm run build`.
5. Output Directory: `dist`.
6. Añade la variable `SITE_URL`.
7. Deploy.

## Dominio
En Vercel: Project → Settings → Domains → Add Domain. Después aplica exactamente los DNS que Vercel muestre en el proveedor del dominio.

## Google
Tras publicar el dominio: verifica la propiedad en Google Search Console, envía `/sitemap.xml` y usa Inspección de URLs para solicitar indexación de las páginas principales.
