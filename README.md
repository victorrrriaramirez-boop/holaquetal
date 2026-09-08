# Solamente Cree — Next.js production build

Conversión del diseño de Google Stitch a una aplicación Next.js independiente y preparada para Vercel.

## Desarrollo

```bash
npm install
npm run dev
```

## Producción

```bash
npm run build
npm start
```

## Variables de entorno

Copia `.env.example` a `.env.local` y configura:

- `NEXT_PUBLIC_SITE_URL`: dominio canónico.
- `NEXT_PUBLIC_GA_ID`: Google Analytics 4 (opcional).
- `NEXT_PUBLIC_GTM_ID`: Google Tag Manager (opcional).
- `RESEND_API_KEY`, `CONTACT_TO_EMAIL`, `CONTACT_FROM_EMAIL`: envío real del formulario mediante Resend.

Si Resend no está configurado, el formulario muestra un aviso de configuración pendiente y permanece listo para conectarse en Vercel.

## SEO técnico incluido

- Metadatos únicos por página.
- Canonical por ruta.
- Open Graph/Twitter Cards.
- `sitemap.xml` generado por Next.js.
- `robots.txt` generado por Next.js.
- Schema.org `Church`, `LocalBusiness`, `WebSite` y FAQ.
- HTML semántico y textos ALT.
- Favicon local.
- URLs limpias: `/servicios`, `/proyectos`, `/sobre-nosotros`, `/contacto`.

## Notas sobre imágenes

El HTML original de Stitch referenciaba imágenes alojadas en `lh3.googleusercontent.com`. Se han conservado esas URLs como contenido visual de origen, pero la aplicación no depende del runtime, scripts ni estilos de Google Stitch. Para independencia total de hosting de imágenes, sustituye esas URLs por archivos locales en `public/images` cuando dispongas de los originales en alta resolución.

Los archivos originales se conservan en `/reference` únicamente como referencia de diseño y no se cargan en producción.
