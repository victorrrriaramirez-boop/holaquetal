# Solamente Cree — web de producción

Proyecto Next.js (App Router) reconstruido desde el HTML exportado por Google Stitch.

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

Copia `.env.example` a `.env.local`.

- `NEXT_PUBLIC_SITE_URL`: dominio canónico.
- `NEXT_PUBLIC_GA_ID`: ID opcional de Google Analytics 4.
- `NEXT_PUBLIC_GTM_ID`: ID opcional de Google Tag Manager.
- `CONTACT_WEBHOOK_URL`: webhook opcional para procesar formularios (Make, Zapier, endpoint propio, etc.).

Si `CONTACT_WEBHOOK_URL` no está configurado, el formulario informa al visitante de que debe usar WhatsApp o email; no simula un envío inexistente.

## Assets

El HTML de Stitch solo incluía URLs remotas de Google para las fotografías. Se centralizaron en `lib/site.ts`. Sustitúyelas por archivos locales en `public/images` cuando dispongas de los originales para eliminar también esa dependencia externa.
