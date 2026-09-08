import { faqs, images, ministries, site, testimonials, values, absolute } from './site.mjs';
import { icon, pageHero, pageTemplate, whatsappIcon } from './template.mjs';

const img = ({ src, alt, cls = '', eager = false, width = 1200, height = 800 }) => `<img class="${cls}" src="${src}" alt="${alt}" width="${width}" height="${height}" ${eager ? 'fetchpriority="high"' : 'loading="lazy"'} decoding="async" referrerpolicy="no-referrer">`;

const sectionHead = (eyebrow, title, text = '') => `<div class="section-head"><span class="eyebrow">${eyebrow}</span><h2>${title}</h2>${text ? `<p>${text}</p>` : ''}</div>`;

const valuesCards = () => `<div class="cards three values-grid">${values.map(value => `<article class="card value-card"><div class="icon-badge" aria-hidden="true">${value.icon}</div><h3>${value.title}</h3><p>${value.text}</p><blockquote>${value.quote}</blockquote></article>`).join('')}</div>`;

const testimonialsCards = () => `<div class="cards three testimonial-grid">${testimonials.map(item => `<article class="card testimonial-card"><span class="eyebrow tiny">Testimonio compartido</span><h3>${item.title}</h3><blockquote>${item.quote}</blockquote><footer><strong>${item.person}</strong><span>${item.location}</span></footer></article>`).join('')}</div>`;

const faqMarkup = () => `<div class="faq-list">${faqs.map((item, index) => `<details class="faq-item"${index === 1 ? ' open' : ''}><summary><span>${item.question}</span>${icon('chevron')}</summary><div class="faq-answer"><p>${item.answer}</p></div></details>`).join('')}</div>`;

const contactCard = () => `<div class="contact-highlight"><div class="contact-highlight-copy"><span class="contact-icon">${whatsappIcon()}</span><div><h3>Atención Pastoral Inmediata y Oración por WhatsApp</h3><p>${site.phoneDisplay} · Canal directo de contacto pastoral</p></div></div><a class="button whatsapp" href="${site.whatsapp}?text=Hola,%20quisiera%20recibir%20atención%20pastoral" target="_blank" rel="noopener noreferrer">Iniciar chat${icon('arrow')}</a></div>`;

function home() {
  const faqSchema = {
    '@type': 'FAQPage',
    '@id': absolute('/#faq'),
    mainEntity: faqs.map(item => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })),
  };
  const pageSchema = { '@type': 'WebPage', '@id': absolute('/#webpage'), url: absolute('/'), name: 'Centro Evangelístico Solamente Cree', isPartOf: { '@id': absolute('/#website') }, about: { '@id': absolute('/#church') }, inLanguage: 'es-ES' };

  const body = `
  <section class="hero">
    <div class="hero-media" aria-hidden="true">${img({ src: images.hero, alt: '', cls: 'hero-image', eager: true, width: 1600, height: 1000 })}<div class="hero-overlay"></div></div>
    <div class="gold-sheen"></div>
    <div class="container hero-inner">
      <div class="hero-badge"><span class="pulse-dot"></span>Bienvenidos a Casa · Iglesia Cristiana en Madrid</div>
      <h1>Centro Evangelístico <span>Solamente Cree</span></h1>
      <p class="hero-lead">Ven y descubre un lugar donde tu <em>fe cobra vida</em></p>
      <p class="scripture">«Nada es difícil para Dios» · Lucas 1:37</p>
      <div class="service-callout"><span class="callout-label">${icon('heart')}<strong>Culto Principal:</strong></span><span><strong>Domingos 11:00h</strong> · C.C. Las Rosas (CINESA Sala 7), Madrid · Metro Alsacia (Línea 2)</span></div>
      <div class="actions"><a class="button whatsapp" href="${site.whatsapp}?text=Hola,%20deseo%20asistir%20al%20culto%20del%20domingo%20en%20el%20Centro%20Evangelístico%20Solamente%20Cree" target="_blank" rel="noopener noreferrer">${whatsappIcon()}Únete por WhatsApp</a><a class="button ghost" href="#horarios-y-ubicacion">${icon('pin')}Ver Horarios y Ubicación</a></div>
    </div>
  </section>

  <section class="section" id="quienes-somos"><div class="container">
    <div class="intro-layout">
      <div class="intro-copy"><span class="eyebrow">Nuestra Comunidad de Fe</span><h2>Quiénes Somos — Tu Iglesia Evangélica y Centro de Fe en Madrid</h2><p class="lead">El <strong>Centro Evangelístico Solamente Cree</strong> es una vibrante <strong>iglesia evangélica en Madrid</strong> nacida con el propósito de anunciar el Evangelio de Jesucristo con poder, amor y esperanza.</p><p>Creemos que la Iglesia no es un edificio inmóvil, sino una familia de fe activa donde cada persona encuentra aceptación, acompañamiento y comunión fraternal. En nuestras reuniones dominicales en San Blas-Canillejas fomentamos una atmósfera de adoración y enseñanza bíblica.</p><div class="inline-links"><a href="/sobre-nosotros">Conoce nuestra historia${icon('arrow')}</a><a href="/contacto">Solicita atención pastoral${icon('arrow')}</a></div></div>
      <aside class="founders-panel" aria-label="Pastores fundadores"><div class="founders-line"></div><span class="founders-kicker">Pastores Fundadores</span><h3>Apóstol Manuel Ramírez de Arellano y Toñy</h3><p>Centro Evangelístico Solamente Cree · Madrid</p></aside>
    </div>
    ${valuesCards()}
  </div></section>

  <section class="section alt" id="manuel-y-tony"><div class="container leadership-grid">
    <div class="leadership-copy"><span class="eyebrow">Liderazgo &amp; Trayectoria Apostólica</span><h2>Manuel y Toñy / Dejan2huella Producciones — Ministerio Apostólico y Alabanza</h2><p>El <strong>Apóstol Manuel Ramírez de Arellano</strong> y su esposa <strong>Toñy</strong> cuentan con décadas de trayectoria ministerial en España, Europa y América Latina. Juntos han desarrollado el ministerio musical <strong>«Manuel y Toñy»</strong> y la productora cristiana <strong>«Dejan2huella Producciones»</strong>.</p><p>En la actualidad pastorean el <strong>Centro Evangelístico Solamente Cree en Madrid</strong>, combinando predicación bíblica, alabanza y atención pastoral.</p><blockquote class="quote-card">«Nuestra pasión es dejar la huella del amor de Jesús en cada corazón.»<cite>— Apóstol Manuel Ramírez de Arellano y Toñy</cite></blockquote><a class="text-link" href="/sobre-nosotros">Leer más sobre el ministerio${icon('arrow')}</a></div>
    <div class="mosaic" aria-label="Galería del ministerio">${img({ src: images.worship1, alt: 'Culto dominical del Centro Evangelístico Solamente Cree en Madrid', cls: 'mosaic-a' })}${img({ src: images.preaching, alt: 'Manuel y Toñy durante una predicación en el Centro Evangelístico Solamente Cree', cls: 'mosaic-b' })}${img({ src: images.worship2, alt: 'Alabanza y adoración del ministerio Manuel y Toñy', cls: 'mosaic-c' })}${img({ src: images.community, alt: 'Comunidad de fe reunida en el Centro Evangelístico Solamente Cree', cls: 'mosaic-d' })}</div>
  </div></section>

  <section class="section" id="horarios-y-ubicacion"><div class="container">
    ${sectionHead('Te Esperamos Cada Domingo', 'Horarios y Ubicación en Madrid — Culto Dominical en Las Rosas', 'Un punto de encuentro accesible y cómodo para toda la familia en el Este de Madrid.')}
    <div class="location-grid">
      <div class="info-stack">
        <article class="info-card"><span class="info-icon">${icon('clock')}</span><div><h3>Culto Dominical Principal</h3><p class="gold-text"><strong>Domingos a las 11:00h</strong></p><p>Recepción, bienvenida y apertura de sala desde las 10:30h.</p></div></article>
        <article class="info-card"><span class="info-icon">${icon('pin')}</span><div><h3>C.C. Las Rosas · CINESA Sala 7</h3><p><strong>Acceso por la zona de Cinesa</strong></p><p>Av. de Guadalajara, 2, 28032 Madrid (San Blas-Canillejas).</p></div></article>
        <article class="info-card"><span class="info-icon">${icon('train')}</span><div><h3>Transporte Público y Parking</h3><p><strong>Metro:</strong> Alsacia (Línea 2). <strong>Autobuses:</strong> 70, 106, 140, E2 y N7. <strong>En coche:</strong> parking cubierto del C.C. Las Rosas.</p></div></article>
        <a class="button whatsapp full-width" href="${site.whatsapp}?text=Hola,%20quisiera%20saber%20cómo%20llegar%20al%20culto%20dominical" target="_blank" rel="noopener noreferrer">${whatsappIcon()}Preguntar cómo llegar</a>
      </div>
      <aside class="location-panel"><span class="eyebrow light">Centro Comercial Las Rosas</span><h3>Un santuario acogedor en el corazón de San Blas-Canillejas</h3><p>Instalaciones amplias con cómodas butacas de cine, climatización y sonido profesional para las reuniones dominicales.</p><div class="location-meta"><span>${icon('pin')}Av. de Guadalajara, 2</span><a href="${site.maps}" target="_blank" rel="noopener noreferrer">Abrir en Google Maps${icon('arrow')}</a></div><div class="location-photo">${img({ src: images.location, alt: 'Fachada exterior del Centro Comercial Las Rosas, sede del culto de Solamente Cree en Madrid', width: 1400, height: 900 })}</div></aside>
    </div>
  </div></section>

  <section class="section alt" id="milagros-y-testimonios"><div class="container">
    ${sectionHead('Dios Sigue Obrando Hoy', 'Milagros y Testimonios de Fe y Sanidad', 'Relatos de fe compartidos por personas vinculadas al ministerio y recogidos en el diseño original.')}
    ${testimonialsCards()}
    <div class="prayer-cta"><div><h3>¿Tienes una petición de oración o un testimonio que contar?</h3><p>Envíanos tu petición por WhatsApp. El equipo pastoral recibe cada mensaje de forma directa.</p></div><a class="button whatsapp" href="${site.whatsapp}?text=Hola,%20quisiera%20compartir%20una%20petición%20de%20oración" target="_blank" rel="noopener noreferrer">${whatsappIcon()}Enviar petición</a></div>
  </div></section>

  <section class="section" id="multimedia"><div class="container">
    ${sectionHead('Producciones & Mensajes', 'Alabanza, Adoración y Mensajes Multimedia', 'Música y mensajes del ministerio Manuel y Toñy y contenidos producidos por Dejan2huella.')}
    <div class="media-layout">
      <article class="media-feature"><div class="media-image">${img({ src: images.media, alt: 'Noche de alabanza y mensajes del ministerio Manuel y Toñy', width: 1400, height: 900 })}<a class="play-button" href="${site.socials.youtube}" target="_blank" rel="noopener noreferrer" aria-label="Abrir canal de YouTube">${icon('play')}</a><div class="media-caption"><span>Noche de Alabanza y Milagros</span><strong>Dejan2huella Producciones</strong></div></div></article>
      <div class="media-list"><a href="${site.socials.youtube}" target="_blank" rel="noopener noreferrer"><span class="number">01</span><span><strong>Solamente Cree (Álbum Oficial)</strong><small>Manuel y Toñy · Alabanza y Adoración</small></span>${icon('arrow')}</a><a href="${site.socials.youtube}" target="_blank" rel="noopener noreferrer"><span class="number">02</span><span><strong>El Poder de la Fe sin Límites</strong><small>Apóstol Manuel Ramírez de Arellano · Mensaje Dominical</small></span>${icon('arrow')}</a><a href="${site.socials.youtube}" target="_blank" rel="noopener noreferrer"><span class="number">03</span><span><strong>Sanando Corazones Quebrantados</strong><small>Toñy · Reflexión Pastoral</small></span>${icon('arrow')}</a><a class="button dark full-width" href="${site.socials.youtube}" target="_blank" rel="noopener noreferrer">Visitar canal de YouTube${icon('arrow')}</a></div>
    </div>
  </div></section>

  <section class="section faq-section" id="faq"><div class="container narrow">
    ${sectionHead('Respuestas Claras', 'Preguntas Frecuentes (FAQ) — Centro Evangelístico Solamente Cree', 'Todo lo que necesitas conocer antes de visitarnos o ponerte en contacto con el equipo pastoral.')}
    ${faqMarkup()}
    <div class="faq-cta"><div><h3>¿Tienes otra pregunta sobre la iglesia?</h3><p>Estamos a un mensaje de distancia para resolver cualquier duda.</p></div><a class="button whatsapp" href="${site.whatsapp}" target="_blank" rel="noopener noreferrer">${whatsappIcon()}Preguntar por WhatsApp</a></div>
  </div></section>

  <section class="section alt" id="contacto"><div class="container">
    ${sectionHead('Atención y Escucha', 'Contacto y Atención Pastoral Inmediata', 'Ponemos a tu disposición nuestros canales de contacto para escucharte, orar contigo y resolver tus dudas.')}
    ${contactCard()}
    <div class="home-contact-grid"><div class="direct-contact"><h3>Datos de Contacto Directo</h3><ul class="contact-list"><li><span>${icon('phone')}</span><div><small>Teléfono y WhatsApp Pastoral</small><a href="tel:${site.phone}">${site.phoneDisplay}</a></div></li><li><span>${icon('mail')}</span><div><small>Correo electrónico</small><a href="mailto:${site.email}">${site.email}</a></div></li><li><span>${icon('pin')}</span><div><small>Sede de cultos en Madrid</small><p>C.C. Las Rosas, CINESA Sala 7, Av. de Guadalajara 2, 28032 Madrid</p></div></li></ul></div><div class="mini-contact"><h3>¿Prefieres escribirnos desde la web?</h3><p>La página de contacto incluye un formulario preparado para enviar mensajes mediante una función serverless en Vercel.</p><a class="button dark" href="/contacto">Ir al formulario${icon('arrow')}</a></div></div>
  </div></section>`;

  return pageTemplate({
    path: '/',
    title: 'Centro Evangelístico Solamente Cree | Iglesia Evangélica en Madrid',
    description: 'Centro Evangelístico Solamente Cree en Madrid. Culto dominical los domingos a las 11:00h en C.C. Las Rosas, con oración, alabanza y atención pastoral.',
    ogTitle: 'Centro Evangelístico Solamente Cree · Madrid',
    ogDescription: 'Culto dominical, alabanza, oración y comunidad de fe en Madrid con Manuel y Toñy.',
    body,
    schemas: [pageSchema, faqSchema],
  });
}

function services() {
  const servicesData = [
    ['Culto dominical en Madrid', 'Reunión principal de la comunidad con alabanza, predicación y oración. Domingos a las 11:00h en C.C. Las Rosas, CINESA Sala 7.', 'clock'],
    ['Oración y atención pastoral', 'Canal directo por WhatsApp y teléfono para peticiones de oración, acompañamiento y consultas relacionadas con la congregación.', 'heart'],
    ['Alabanza y adoración', 'Música y contenidos de alabanza vinculados al ministerio Manuel y Toñy y a Dejan2huella Producciones.', 'play'],
    ['Consejería pastoral', 'Espacio de escucha y orientación pastoral mediante los canales de contacto indicados por la congregación.', 'message'],
    ['Multimedia y mensajes', 'Acceso a mensajes y producciones audiovisuales a través del canal oficial de Dejan2huella en YouTube.', 'play'],
    ['Información para visitantes', 'Indicaciones de horarios, transporte público, acceso y ubicación para preparar tu primera visita.', 'pin'],
  ];
  const schemas = [{ '@type': 'CollectionPage', '@id': absolute('/servicios#webpage'), url: absolute('/servicios'), name: 'Servicios de Solamente Cree', isPartOf: { '@id': absolute('/#website') }, about: { '@id': absolute('/#church') }, inLanguage: 'es-ES' }, { '@type': 'ItemList', itemListElement: servicesData.map((s, i) => ({ '@type': 'ListItem', position: i + 1, item: { '@type': 'Service', name: s[0], description: s[1], provider: { '@id': absolute('/#church') } } })) }];
  const body = `${pageHero({ eyebrow: 'Iglesia & Atención Pastoral', title: 'Servicios y Vida de Comunidad', text: 'Culto dominical, oración, atención pastoral, alabanza y contenidos del Centro Evangelístico Solamente Cree en Madrid.' })}
  <section class="section"><div class="container"><div class="cards three service-grid">${servicesData.map(s => `<article class="card service-card"><span class="service-icon">${icon(s[2])}</span><h2>${s[0]}</h2><p>${s[1]}</p></article>`).join('')}</div></div></section>
  <section class="section alt"><div class="container service-detail-grid"><div><span class="eyebrow">Tu primera visita</span><h2>Todo preparado para recibirte el domingo</h2><p class="lead">El culto principal se celebra los domingos a las 11:00h, con apertura de puertas a las 10:30h.</p><p>La sede está en el C.C. Las Rosas, CINESA Sala 7, en Avenida de Guadalajara, 2, Madrid. Puedes llegar por Metro Alsacia (Línea 2) o mediante las líneas de autobús 70, 106, 140, E2 y N7.</p><div class="actions left"><a class="button dark" href="/contacto#ubicacion">Ver ubicación${icon('arrow')}</a><a class="button whatsapp" href="${site.whatsapp}" target="_blank" rel="noopener noreferrer">${whatsappIcon()}Consultar por WhatsApp</a></div></div><aside class="image-card">${img({ src: images.location, alt: 'Centro Comercial Las Rosas, lugar de reunión del Centro Evangelístico Solamente Cree', width: 1400, height: 900 })}<div><span>Domingos · 11:00h</span><strong>C.C. Las Rosas · CINESA Sala 7</strong></div></aside></div></section>
  <section class="section"><div class="container cta-panel"><span class="eyebrow light">Contacto pastoral</span><h2>¿Necesitas oración o quieres resolver una duda?</h2><p>Escríbenos directamente por WhatsApp o utiliza el formulario de contacto.</p><div class="actions"><a class="button whatsapp" href="${site.whatsapp}" target="_blank" rel="noopener noreferrer">${whatsappIcon()}WhatsApp</a><a class="button ghost" href="/contacto">Formulario de contacto${icon('arrow')}</a></div></div></section>`;
  return pageTemplate({ path: '/servicios', title: 'Culto, Oración y Atención Pastoral | Servicios', description: 'Conoce los servicios y la vida de comunidad de Solamente Cree en Madrid: culto dominical, oración, atención pastoral, alabanza y multimedia.', body, schemas });
}

function projects() {
  const schemas = [{ '@type': 'CollectionPage', '@id': absolute('/proyectos#webpage'), url: absolute('/proyectos'), name: 'Proyectos del ministerio Solamente Cree', isPartOf: { '@id': absolute('/#website') }, inLanguage: 'es-ES' }, { '@type': 'ItemList', itemListElement: ministries.map((m, i) => ({ '@type': 'ListItem', position: i + 1, item: { '@type': 'CreativeWork', name: m.name, description: m.description } })) }];
  const body = `${pageHero({ eyebrow: 'Ministerio & Producción', title: 'Proyectos del Ministerio', text: 'Una visión conjunta de la comunidad Solamente Cree, el ministerio Manuel y Toñy y Dejan2huella Producciones.' })}
  <section class="section"><div class="container project-list">${ministries.map((m, index) => `<article class="project-card ${index % 2 ? 'reverse' : ''}"><div class="project-image">${img({ src: m.image, alt: m.alt, width: 1400, height: 900 })}</div><div class="project-copy"><span class="eyebrow">${m.type}</span><h2>${m.name}</h2><p>${m.description}</p>${index === 0 ? '<a class="text-link" href="/servicios">Conocer la vida de comunidad' + icon('arrow') + '</a>' : `<a class="text-link" href="${site.socials.youtube}" target="_blank" rel="noopener noreferrer">Ver contenidos en YouTube${icon('arrow')}</a>`}</div></article>`).join('')}</div></section>
  <section class="section alt"><div class="container">${sectionHead('Producciones & Mensajes', 'Alabanza, Adoración y Contenido Multimedia', 'El diseño original presenta piezas de alabanza y mensajes vinculados al ministerio.')}
  <div class="media-layout compact"><article class="media-feature"><div class="media-image">${img({ src: images.media, alt: 'Noche de alabanza y mensajes de Manuel y Toñy', width: 1400, height: 900 })}<a class="play-button" href="${site.socials.youtube}" target="_blank" rel="noopener noreferrer" aria-label="Abrir canal de YouTube">${icon('play')}</a></div></article><div class="media-list"><div class="static-row"><span class="number">01</span><span><strong>Solamente Cree (Álbum Oficial)</strong><small>Manuel y Toñy · Alabanza y Adoración</small></span></div><div class="static-row"><span class="number">02</span><span><strong>El Poder de la Fe sin Límites</strong><small>Mensaje dominical</small></span></div><div class="static-row"><span class="number">03</span><span><strong>Sanando Corazones Quebrantados</strong><small>Reflexión pastoral</small></span></div><a class="button dark full-width" href="${site.socials.youtube}" target="_blank" rel="noopener noreferrer">Abrir YouTube${icon('arrow')}</a></div></div></div></section>`;
  return pageTemplate({ path: '/proyectos', title: 'Proyectos de Ministerio y Multimedia', description: 'Conoce los proyectos vinculados a Solamente Cree: la comunidad, el ministerio de alabanza Manuel y Toñy y Dejan2huella Producciones.', body, schemas });
}

function about() {
  const schemas = [{ '@type': 'AboutPage', '@id': absolute('/sobre-nosotros#webpage'), url: absolute('/sobre-nosotros'), name: 'Sobre Nosotros', isPartOf: { '@id': absolute('/#website') }, about: { '@id': absolute('/#church') }, inLanguage: 'es-ES' }, { '@type': 'Person', name: 'Apóstol Manuel Ramírez de Arellano', worksFor: { '@id': absolute('/#church') } }, { '@type': 'Person', name: 'Toñy', worksFor: { '@id': absolute('/#church') } }];
  const body = `${pageHero({ eyebrow: 'Historia & Liderazgo', title: 'Sobre Nosotros', text: 'Conoce la comunidad Centro Evangelístico Solamente Cree y el ministerio desarrollado por Manuel Ramírez de Arellano y Toñy.' })}
  <section class="section"><div class="container intro-layout about-intro"><div class="intro-copy"><span class="eyebrow">Nuestra Comunidad de Fe</span><h2>Una iglesia evangélica y centro de fe en Madrid</h2><p class="lead">El Centro Evangelístico Solamente Cree nació con el propósito de anunciar el Evangelio de Jesucristo y construir una comunidad de fe activa.</p><p>Según el contenido original del proyecto, la congregación se reúne en Madrid y busca ofrecer un entorno de adoración, enseñanza bíblica, oración y acompañamiento pastoral a familias, jóvenes y visitantes.</p></div><aside class="about-stat"><span class="eyebrow light">Encuentro semanal</span><strong>Domingos<br>11:00h</strong><p>C.C. Las Rosas · CINESA Sala 7<br>Madrid</p></aside></div>${valuesCards()}</div></section>
  <section class="section alt"><div class="container leadership-grid"><div class="leadership-copy"><span class="eyebrow">Liderazgo & Trayectoria Apostólica</span><h2>Manuel Ramírez de Arellano y Toñy</h2><p>El <strong>Apóstol Manuel Ramírez de Arellano</strong> y su esposa <strong>Toñy</strong> representan una trayectoria de servicio ministerial que abarca varias décadas en España, Europa y América Latina. Su labor reúne evangelismo, predicación y alabanza.</p><p>Juntos han desarrollado el ministerio musical <strong>«Manuel y Toñy»</strong> y la productora cristiana <strong>«Dejan2huella Producciones»</strong>. En la actualidad pastorean el <strong>Centro Evangelístico Solamente Cree en Madrid</strong>.</p><blockquote class="quote-card">«Nuestra pasión es dejar la huella del amor de Jesús en cada corazón.»<cite>— Manuel Ramírez de Arellano y Toñy</cite></blockquote></div><div class="mosaic">${img({ src: images.worship1, alt: 'Reunión del Centro Evangelístico Solamente Cree', cls: 'mosaic-a' })}${img({ src: images.preaching, alt: 'Manuel y Toñy durante una predicación', cls: 'mosaic-b' })}${img({ src: images.worship2, alt: 'Ministerio de alabanza Manuel y Toñy', cls: 'mosaic-c' })}${img({ src: images.community, alt: 'Comunidad de fe Solamente Cree en Madrid', cls: 'mosaic-d' })}</div></div></section>
  <section class="section"><div class="container cta-panel"><span class="eyebrow light">Ven a conocernos</span><h2>Tu primera visita puede comenzar aquí</h2><p>Consulta horarios y ubicación o ponte en contacto directamente con la congregación.</p><div class="actions"><a class="button whatsapp" href="${site.whatsapp}" target="_blank" rel="noopener noreferrer">${whatsappIcon()}WhatsApp</a><a class="button ghost" href="/contacto">Contacto y ubicación${icon('arrow')}</a></div></div></section>`;
  return pageTemplate({ path: '/sobre-nosotros', title: 'Sobre Nosotros | Manuel y Toñy y Solamente Cree', description: 'Conoce el Centro Evangelístico Solamente Cree, su comunidad en Madrid y la trayectoria ministerial de Manuel Ramírez de Arellano y Toñy.', body, schemas });
}

function contact() {
  const schemas = [{ '@type': 'ContactPage', '@id': absolute('/contacto#webpage'), url: absolute('/contacto'), name: 'Contacto Solamente Cree', isPartOf: { '@id': absolute('/#website') }, about: { '@id': absolute('/#church') }, inLanguage: 'es-ES' }];
  const body = `${pageHero({ eyebrow: 'Atención y Escucha', title: 'Contacto y Atención Pastoral', text: 'Escríbenos para resolver dudas sobre los cultos, compartir una petición de oración o contactar con la congregación.', cta: false })}
  <section class="section"><div class="container">${contactCard()}<div class="contact-layout"><div class="contact-details"><span class="eyebrow">Contacto directo</span><h2>Datos de contacto y ubicación</h2><p>Puedes comunicarte por teléfono, WhatsApp, correo electrónico o mediante el formulario web.</p><ul class="contact-list"><li><span>${icon('phone')}</span><div><small>Teléfono y WhatsApp Pastoral</small><a href="tel:${site.phone}">${site.phoneDisplay}</a></div></li><li><span>${icon('mail')}</span><div><small>Correo Electrónico Oficial</small><a href="mailto:${site.email}">${site.email}</a></div></li><li><span>${icon('pin')}</span><div><small>Sede de Cultos en Madrid</small><p>C.C. Las Rosas, CINESA Sala 7<br>Av. de Guadalajara, 2, 28032 Madrid</p></div></li><li><span>${icon('clock')}</span><div><small>Culto Principal</small><p>Domingos a las 11:00h<br>Apertura desde las 10:30h</p></div></li></ul></div><div class="form-card"><h2>Envíanos un mensaje</h2><p>El formulario está preparado para funcionar en Vercel mediante la función <code>/api/contact</code>.</p><form class="contact-form" action="/api/contact" method="post" data-contact-form novalidate><div class="form-grid"><label>Nombre completo *<input type="text" name="name" required maxlength="100" autocomplete="name" placeholder="Tu nombre y apellidos"></label><label>Correo electrónico *<input type="email" name="email" required maxlength="160" autocomplete="email" placeholder="ejemplo@correo.com"></label></div><div class="form-grid"><label>Teléfono / WhatsApp<input type="tel" name="phone" maxlength="40" autocomplete="tel" placeholder="+34 600 000 000"></label><label>Motivo del contacto<select name="reason"><option>Petición de oración</option><option>Información de cultos en Madrid</option><option>Consejería pastoral</option><option>Compartir un testimonio de fe</option><option>Invitaciones y eventos ministeriales</option></select></label></div><label>Tu mensaje o petición *<textarea name="message" required maxlength="5000" rows="6" placeholder="Cuéntanos en qué podemos ayudarte..."></textarea></label><label class="hp" aria-hidden="true">No rellenar<input type="text" name="website" tabindex="-1" autocomplete="off"></label><button class="button dark full-width" type="submit" data-submit>Enviar mensaje</button><p class="form-status" role="status" aria-live="polite" data-form-status hidden></p></form></div></div></div></section>
  <section class="section alt" id="ubicacion"><div class="container"><div class="section-head"><span class="eyebrow">Horarios y Ubicación</span><h2>Culto Dominical en Las Rosas</h2><p>Domingos a las 11:00h, con apertura de puertas desde las 10:30h.</p></div><div class="location-grid"><div class="info-stack"><article class="info-card"><span class="info-icon">${icon('train')}</span><div><h3>Metro y autobuses</h3><p>Metro Alsacia (Línea 2). Autobuses 70, 106, 140, E2 y N7.</p></div></article><article class="info-card"><span class="info-icon">${icon('pin')}</span><div><h3>Dirección</h3><p>C.C. Las Rosas, CINESA Sala 7, Avenida de Guadalajara, 2, 28032 Madrid.</p></div></article><a class="button dark full-width" href="${site.maps}" target="_blank" rel="noopener noreferrer">Abrir en Google Maps${icon('arrow')}</a></div><div class="location-photo standalone">${img({ src: images.location, alt: 'Fachada del Centro Comercial Las Rosas en Madrid', width: 1400, height: 900 })}</div></div></div></section>`;
  return pageTemplate({ path: '/contacto', title: 'Contacto y Horarios | Solamente Cree Madrid', description: 'Contacta con el Centro Evangelístico Solamente Cree en Madrid. WhatsApp, teléfono, correo, formulario, horarios del culto y ubicación en C.C. Las Rosas.', body, schemas });
}

export const pages = [
  { path: '/', file: 'index.html', html: home() },
  { path: '/servicios', file: 'servicios.html', html: services() },
  { path: '/proyectos', file: 'proyectos.html', html: projects() },
  { path: '/sobre-nosotros', file: 'sobre-nosotros.html', html: about() },
  { path: '/contacto', file: 'contacto.html', html: contact() },
];
