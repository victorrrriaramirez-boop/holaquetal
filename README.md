# Solamente Cree — producción Vercel

Versión de producción reconstruida a partir del HTML y del sistema visual exportados desde Google Stitch.

## Decisión técnica

Este proyecto no usa Next.js deliberadamente. La web es un sitio institucional de cinco páginas con contenido esencialmente estático; no necesita SSR, ISR ni un runtime de React para cumplir los requisitos. Para evitar el error de instalación/build de la versión anterior, se ha convertido en una arquitectura estática de **cero dependencias npm** con un build propio en Node.js y una función serverless de Vercel para el formulario.

Ventajas de esta solución:

- `npm run build` no necesita descargar paquetes.
- Menos JavaScript en el navegador.
- Despliegue directo y rápido en Vercel.
- URLs limpias con `cleanUrls`.
- SEO completo por página.
- El código final no usa Tailwind CDN ni Google Stitch.

## Comandos

```bash
npm run build
npm run check
npm run dev
```

`npm run build` genera `dist/` y ejecuta automáticamente las comprobaciones de producción.

## Páginas

- `/`
- `/servicios`
- `/proyectos`
- `/sobre-nosotros`
- `/contacto`

## SEO incluido

Cada página tiene:

- `<title>` único
- meta description única
- canonical absoluto
- Open Graph
- Twitter Card
- Schema.org JSON-LD
- un único H1
- HTML semántico
- ALT en imágenes

Además se generan automáticamente:

- `/sitemap.xml`
- `/robots.txt`
- `/favicon.svg`
- `/site.webmanifest`
- `/assets/social/og-image.png`

## Google Analytics y Google Tag Manager

Configura las variables en Vercel y vuelve a desplegar:

```env
GTM_ID=GTM-XXXXXXX
GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

Puedes usar solo GTM, solo GA4 o ambos si tu estrategia de medición lo requiere. Si GA4 ya está cargado mediante GTM, no configures también `GA_MEASUREMENT_ID` para evitar duplicar pageviews.

## Formulario de contacto

La página `/contacto` envía a `/api/contact`. La función está preparada para usar Resend sin instalar ninguna librería adicional; usa `fetch` nativo de Node/Vercel.

Configura:

```env
RESEND_API_KEY=re_xxxxxxxxx
CONTACT_TO_EMAIL=dejan2huella@gmail.com
CONTACT_FROM_EMAIL=Solamente Cree <web@tu-dominio-verificado.com>
```

Hasta que estas variables existan, el formulario responderá de forma explícita indicando que el canal de correo todavía no está configurado; no mostrará un falso mensaje de envío correcto.

## Vercel

1. Sube esta carpeta a GitHub.
2. Importa el repositorio en Vercel.
3. Vercel leerá `vercel.json` y ejecutará `npm run build`.
4. Configura las variables de entorno necesarias.
5. Asocia el dominio final.

El directorio publicado es `dist/`.

## Imágenes originales

El HTML de Stitch referenciaba varias fotografías mediante URLs de `lh3.googleusercontent.com`. Se han conservado esas URLs porque son los únicos originales disponibles en los archivos entregados y permiten mantener la fidelidad visual. Ya no existe dependencia de Stitch, Tailwind CDN ni scripts de Stitch. Para hacer también los recursos gráficos 100% locales, sustituye esas URLs en `src/site.mjs` por los archivos fotográficos originales cuando estén disponibles.

El favicon y la imagen Open Graph sí son locales y forman parte del proyecto.
