# Auditoría de migración a producción

## Corregido respecto al HTML de origen

- Eliminado Tailwind cargado por CDN.
- Eliminada la configuración Tailwind incrustada en el HTML.
- Sustituido el H1 provisional `prueba` por un H1 descriptivo.
- Eliminado el ALT incorrecto del fondo del hero, que describía un perro aunque el recurso se utiliza únicamente como fondo decorativo.
- Convertida la navegación por anclas de una única página en rutas reales y limpias.
- Separadas Home, Servicios, Proyectos, Sobre Nosotros y Contacto.
- Reorganizado el contenido en componentes de plantilla estática reutilizables.
- Metadatos SEO únicos por ruta.
- Canonical y Open Graph absolutos.
- Schema.org por tipo de página.
- Generación de `sitemap.xml` y `robots.txt`.
- Favicon y OG image locales.
- Navegación móvil accesible.
- Formulario con validación, honeypot y API serverless preparada para Resend.
- Preparación para GA4 y GTM mediante variables de entorno de build.
- Headers de seguridad y caché para Vercel.
- Cero dependencias npm de producción.

## Comprobaciones automáticas

`scripts/check.mjs` valida:

- presencia de las 5 páginas;
- titles y descriptions no duplicados;
- canonical;
- Open Graph;
- JSON-LD;
- landmarks semánticos;
- H1;
- ALT y dimensiones en `<img>`;
- ausencia de `href="#"`;
- ausencia de Tailwind CDN/Stitch en el HTML generado;
- presencia de sitemap, robots, favicon, manifest, CSS, JS y OG image.
