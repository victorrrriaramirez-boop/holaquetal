# Notas de migración

## Qué se ha cambiado

- Conversión del HTML único exportado por Google Stitch a Next.js App Router.
- Separación en Home, Servicios, Proyectos, Sobre Nosotros y Contacto.
- CSS propio: se elimina Tailwind CDN y la configuración embebida de Stitch.
- Componentes reutilizables para cabecera, pie, hero, datos estructurados y formulario.
- Metadatos independientes por página, canonical y Open Graph.
- `sitemap.xml` y `robots.txt` generados por Next.js.
- Schema.org para Church, Service, FAQPage y ContactPage.
- Favicon SVG propio.
- Google Analytics y Google Tag Manager activables por variables de entorno.
- Formulario preparado para un webhook mediante `CONTACT_WEBHOOK_URL`.

## Imágenes

El archivo recibido no contenía los binarios de las fotografías, solo URLs `lh3.googleusercontent.com`. Por esa razón se centralizaron todas las URLs en `lib/site.ts` y se usan con `next/image`.

Para eliminar también esta última dependencia externa, añade los originales a `public/images/` y sustituye los valores del objeto `images` en `lib/site.ts` por rutas como `/images/pastors.webp`.

## Build

En el entorno de conversión no fue posible instalar dependencias desde npm por falta de acceso de red. El intento de `npm run build` termina en `next: not found` porque `node_modules` no pudo instalarse.

En un entorno con acceso a npm:

```bash
npm install
npm run build
```
