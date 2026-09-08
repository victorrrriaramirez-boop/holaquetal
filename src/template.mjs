import { absolute, escapeHtml, images, routes, site } from './site.mjs';

const icon = (name, cls = '') => {
  const common = `class="icon ${cls}" aria-hidden="true" viewBox="0 0 24 24" focusable="false"`;
  const paths = {
    menu: `<path d="M4 7h16M4 12h16M4 17h16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>`,
    close: `<path d="M6 6l12 12M18 6L6 18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>`,
    arrow: `<path d="M5 12h14M13 6l6 6-6 6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>`,
    pin: `<path d="M12 22s7-6.2 7-13a7 7 0 10-14 0c0 6.8 7 13 7 13z" fill="none" stroke="currentColor" stroke-width="1.8"/><circle cx="12" cy="9" r="2.5" fill="currentColor"/>`,
    clock: `<circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" stroke-width="1.8"/><path d="M12 7v5l3.5 2" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>`,
    train: `<rect x="5" y="3" width="14" height="15" rx="3" fill="none" stroke="currentColor" stroke-width="1.8"/><path d="M8 7h8M8 12h8M8 21l2-3m6 3l-2-3" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>`,
    phone: `<path d="M7.3 3.5l2.2 4-2.1 1.8c1.1 2.5 2.9 4.3 5.4 5.4l1.8-2.1 4 2.2-.7 3.5c-.2 1-1.1 1.7-2.1 1.7C9.2 20 4 14.8 4 8.2c0-1 .7-1.9 1.7-2.1l1.6-.3z" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/>`,
    mail: `<rect x="3" y="5" width="18" height="14" rx="2" fill="none" stroke="currentColor" stroke-width="1.8"/><path d="M4 7l8 6 8-6" fill="none" stroke="currentColor" stroke-width="1.8"/>`,
    play: `<circle cx="12" cy="12" r="10" fill="currentColor" opacity=".16"/><path d="M10 8l6 4-6 4z" fill="currentColor"/>`,
    chevron: `<path d="M7 9l5 5 5-5" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>`,
    heart: `<path d="M20.8 5.7a5.5 5.5 0 00-7.8 0L12 6.8l-1.1-1.1a5.5 5.5 0 00-7.8 7.8l1.1 1.1L12 22l7.8-7.4 1.1-1.1a5.5 5.5 0 00-.1-7.8z" fill="none" stroke="currentColor" stroke-width="1.7"/>`,
    message: `<path d="M21 12a8 8 0 01-8 8H7l-4 2 1.3-4.4A8 8 0 1121 12z" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"/>`,
  };
  return `<svg ${common}>${paths[name] || paths.arrow}</svg>`;
};

export const whatsappIcon = () => `<svg class="icon whatsapp-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path fill="currentColor" d="M.057 24l1.687-6.163A11.86 11.86 0 01.157 11.89C.16 5.335 5.495 0 12.05 0c3.181.001 6.167 1.24 8.413 3.488a11.82 11.82 0 013.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892-1.99 0-3.951-.5-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>`;

function analyticsHead() {
  const gtm = process.env.GTM_ID || process.env.NEXT_PUBLIC_GTM_ID || '';
  const ga = process.env.GA_MEASUREMENT_ID || process.env.NEXT_PUBLIC_GA_ID || '';
  let out = '';
  if (gtm) {
    out += `<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${escapeHtml(gtm)}');</script>`;
  }
  if (ga) {
    out += `<script async src="https://www.googletagmanager.com/gtag/js?id=${escapeHtml(ga)}"></script><script>window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag('js',new Date());gtag('config','${escapeHtml(ga)}');</script>`;
  }
  return out;
}

function analyticsNoScript() {
  const gtm = process.env.GTM_ID || process.env.NEXT_PUBLIC_GTM_ID || '';
  return gtm ? `<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=${escapeHtml(gtm)}" height="0" width="0" style="display:none;visibility:hidden" title="Google Tag Manager"></iframe></noscript>` : '';
}

function nav(currentPath) {
  const links = routes.map(route => {
    const active = route.path === currentPath;
    return `<a href="${route.path}"${active ? ' aria-current="page" class="active"' : ''}>${route.label}</a>`;
  }).join('');
  return `<header class="site-header" data-header>
    <div class="container header-inner">
      <a class="brand" href="/" aria-label="Ir a la página de inicio de Solamente Cree">
        <span class="brand-mark" aria-hidden="true"><img src="${images.logo}" alt="" width="52" height="52" decoding="async" referrerpolicy="no-referrer"></span>
        <span class="brand-copy"><strong>Solamente Cree</strong><small>Centro Evangelístico</small></span>
      </a>
      <nav class="desktop-nav" aria-label="Navegación principal">${links}</nav>
      <a class="button whatsapp header-cta" href="${site.whatsapp}?text=Hola,%20quisiera%20recibir%20información%20del%20Centro%20Evangelístico%20Solamente%20Cree" target="_blank" rel="noopener noreferrer">${whatsappIcon()}<span>Escríbenos</span></a>
      <button class="menu-button" type="button" aria-expanded="false" aria-controls="mobile-menu" data-menu-button><span class="sr-only">Abrir menú</span>${icon('menu','menu-open')}${icon('close','menu-close')}</button>
    </div>
    <nav id="mobile-menu" class="mobile-nav" aria-label="Navegación móvil" data-mobile-menu hidden>${links}<a class="button whatsapp" href="${site.whatsapp}" target="_blank" rel="noopener noreferrer">${whatsappIcon()}WhatsApp</a></nav>
  </header>`;
}

function footer() {
  return `<footer class="site-footer">
    <div class="container footer-grid">
      <div class="footer-brand-col">
        <div class="brand footer-brand"><span class="brand-mark" aria-hidden="true"><img src="${images.logo}" alt="" width="54" height="54" loading="lazy" decoding="async" referrerpolicy="no-referrer"></span><span class="brand-copy"><strong>Solamente Cree</strong><small>Centro Evangelístico Madrid</small></span></div>
        <p>Comunidad de fe, adoración y avivamiento en Madrid bajo el liderazgo del Apóstol Manuel Ramírez de Arellano y Toñy.</p>
      </div>
      <div><h2>Encuentro semanal</h2><p><strong>Domingos · 11:00h</strong><br>C.C. Las Rosas, CINESA (Sala 7)<br>Av. de Guadalajara, 2, 28032 Madrid<br>Metro Alsacia (Línea 2)</p></div>
      <div><h2>Conéctate</h2><ul class="footer-links"><li><a href="${site.socials.facebook}" target="_blank" rel="noopener noreferrer">Facebook · Manuel y Toñy</a></li><li><a href="${site.socials.youtube}" target="_blank" rel="noopener noreferrer">YouTube · Dejan2huella</a></li><li><a href="${site.socials.tiktok}" target="_blank" rel="noopener noreferrer">TikTok · @manuelytony</a></li><li><a href="${site.whatsapp}" target="_blank" rel="noopener noreferrer">WhatsApp · ${site.phoneDisplay}</a></li></ul></div>
      <div><h2>Enlaces</h2><ul class="footer-links"><li><a href="/servicios">Servicios</a></li><li><a href="/proyectos">Proyectos</a></li><li><a href="/sobre-nosotros">Sobre Nosotros</a></li><li><a href="/contacto">Contacto</a></li><li><a href="/sitemap.xml">Sitemap XML</a></li></ul></div>
    </div>
    <div class="container footer-bottom"><p>© ${new Date().getFullYear()} Centro Evangelístico Solamente Cree · Manuel y Toñy · Dejan2huella Producciones.</p><p>Madrid, España · «Nada es difícil para Dios»</p></div>
  </footer>`;
}

function baseSchemas() {
  return [
    {
      '@type': ['Church', 'Organization'],
      '@id': absolute('/#church'),
      name: site.name,
      alternateName: ['Iglesia Cristiana Solamente Cree', 'Dejan2huella Producciones'],
      url: site.domain,
      logo: images.logo,
      image: absolute('/assets/social/og-image.png'),
      telephone: site.phone,
      email: site.email,
      founder: [
        { '@type': 'Person', name: 'Apóstol Manuel Ramírez de Arellano' },
        { '@type': 'Person', name: 'Toñy' },
      ],
      address: {
        '@type': 'PostalAddress',
        streetAddress: site.address.street,
        addressLocality: site.address.locality,
        postalCode: site.address.postalCode,
        addressRegion: site.address.region,
        addressCountry: site.address.country,
      },
      geo: { '@type': 'GeoCoordinates', latitude: site.geo.latitude, longitude: site.geo.longitude },
      openingHoursSpecification: [{ '@type': 'OpeningHoursSpecification', dayOfWeek: 'Sunday', opens: '11:00', closes: '13:30' }],
      sameAs: [site.socials.youtube, site.socials.facebook, site.socials.tiktok],
    },
    {
      '@type': 'WebSite',
      '@id': absolute('/#website'),
      url: site.domain,
      name: site.name,
      inLanguage: 'es-ES',
      publisher: { '@id': absolute('/#church') },
    },
  ];
}

export function pageTemplate({ path, title, description, body, schemas = [], ogTitle = title, ogDescription = description }) {
  const canonical = absolute(path);
  const graph = { '@context': 'https://schema.org', '@graph': [...baseSchemas(), ...schemas] };
  const fullTitle = title.includes('Solamente Cree') ? title : `${title} | Solamente Cree`;
  return `<!doctype html>
<html lang="es">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${escapeHtml(fullTitle)}</title>
  <meta name="description" content="${escapeHtml(description)}">
  <meta name="robots" content="index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1">
  <link rel="canonical" href="${canonical}">
  <link rel="icon" href="/favicon.svg" type="image/svg+xml">
  <link rel="manifest" href="/site.webmanifest">
  <meta name="theme-color" content="#0f1c2c">
  <meta property="og:type" content="website">
  <meta property="og:locale" content="es_ES">
  <meta property="og:site_name" content="${escapeHtml(site.name)}">
  <meta property="og:url" content="${canonical}">
  <meta property="og:title" content="${escapeHtml(ogTitle)}">
  <meta property="og:description" content="${escapeHtml(ogDescription)}">
  <meta property="og:image" content="${absolute('/assets/social/og-image.png')}">
  <meta property="og:image:width" content="1200">
  <meta property="og:image:height" content="630">
  <meta property="og:image:alt" content="Centro Evangelístico Solamente Cree en Madrid">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="${escapeHtml(ogTitle)}">
  <meta name="twitter:description" content="${escapeHtml(ogDescription)}">
  <meta name="twitter:image" content="${absolute('/assets/social/og-image.png')}">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link rel="preconnect" href="https://lh3.googleusercontent.com">
  <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400;1,600&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="/assets/css/styles.css">
  <script type="application/ld+json">${JSON.stringify(graph).replaceAll('<', '\\u003c')}</script>
  ${analyticsHead()}
</head>
<body>
  ${analyticsNoScript()}
  <a class="skip-link" href="#contenido">Saltar al contenido</a>
  ${nav(path)}
  <main id="contenido">${body}</main>
  ${footer()}
  <a class="whatsapp-float" href="${site.whatsapp}?text=Hola,%20quisiera%20recibir%20atención%20pastoral" target="_blank" rel="noopener noreferrer" aria-label="Contactar por WhatsApp">${whatsappIcon()}</a>
  <script src="/assets/js/site.js" defer></script>
</body>
</html>`;
}

export function pageHero({ eyebrow, title, text, cta = true }) {
  return `<section class="page-hero"><div class="gold-sheen"></div><div class="container page-hero-inner"><span class="eyebrow light">${eyebrow}</span><h1>${title}</h1>${text ? `<p>${text}</p>` : ''}${cta ? `<div class="actions"><a class="button whatsapp" href="${site.whatsapp}" target="_blank" rel="noopener noreferrer">${whatsappIcon()}Escríbenos</a><a class="button ghost" href="/contacto">Contacto${icon('arrow')}</a></div>` : ''}</div></section>`;
}

export { icon };
