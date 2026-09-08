import Link from 'next/link';
import { site, images } from '@/lib/site';

export const metadata = {
  title: 'Iglesia Evangélica en Madrid',
  description: 'Únete al culto dominical del Centro Evangelístico Solamente Cree en Madrid con Manuel y Toñy. Domingos a las 11:00h en C.C. Las Rosas.',
  alternates: { canonical: '/' },
  openGraph: { title: 'Iglesia Evangélica en Madrid | Solamente Cree', description: 'Culto dominical, adoración, milagros y comunidad de fe en Madrid.', url: '/' }
};

const values=[
  ['✦','Fe Viva e Inquebrantable','Creemos firmemente en las promesas bíblicas sin dudar ni vacilar. Cuando descansamos en la fidelidad del Señor Jesús, lo sobrenatural se convierte en testimonio vivo para cada familia creyente.','«Al que cree, todo le es posible» · Marcos 9:23'],
  ['♡','Amor y Comunidad Genuina','Una congregación con los brazos abiertos y corazón pastoral. No importa de dónde provengas ni cuál haya sido tu sendero: en Cristo Jesús siempre aguarda un nuevo amanecer y restauración.','«En esto conocerán todos que sois mis discípulos» · Juan 13:35'],
  ['♨','Poder y Avivamiento Continuo','Experimentamos la gloria y el poder sanador del Espíritu Santo a través de la predicación, la alabanza y constantes testimonios de fe.','«Con señales y prodigios, y milagros por el Espíritu» · Rom. 15:19']
];

export default function Home(){
  return <>
    <section className="hero">
      <div className="hero-glow"></div><div className="container hero-inner">
        <span className="eyebrow light">Bienvenidos a Casa · Iglesia Cristiana en Madrid</span>
        <h1>Centro Evangelístico <span>Solamente Cree</span></h1>
        <p className="hero-lead">Ven y descubre un lugar donde tu <em>fe cobra vida</em></p>
        <p className="scripture">«Nada es difícil para Dios» · Lucas 1:37</p>
        <div className="service-callout"><strong>Culto Principal:</strong> Domingos 11:00h · C.C. Las Rosas (CINESA Sala 7), Madrid · Metro Alsacia (Línea 2)</div>
        <div className="actions"><a className="button whatsapp" href={`${site.whatsapp}?text=Hola,%20deseo%20asistir%20al%20culto%20del%20domingo`} target="_blank" rel="noreferrer">Únete por WhatsApp</a><Link className="button ghost" href="/contacto#ubicacion">Ver Horarios y Ubicación</Link></div>
      </div>
    </section>

    <section className="section"><div className="container"><div className="split intro-grid">
      <div><span className="eyebrow">Nuestra Comunidad de Fe</span><h2>Quiénes Somos — Tu Iglesia Evangélica y Centro de Fe en Madrid</h2><p className="lead">El <strong>Centro Evangelístico Solamente Cree</strong> es una iglesia evangélica en Madrid nacida con el propósito de anunciar el Evangelio de Jesucristo con poder, amor y milagros palpables.</p><p>Creemos que la Iglesia no es un edificio inmóvil, sino una familia de fe activa donde cada persona encuentra aceptación, sanidad interior y comunión fraternal.</p><Link className="text-link" href="/sobre-nosotros">Conoce nuestra historia →</Link></div>
      <div className="portrait-card"><img src={images.worship1} alt="Culto dominical del Centro Evangelístico Solamente Cree en Madrid"/><div><span>Pastores Fundadores</span><h3>Apóstol Manuel Ramírez de Arellano y Toñy</h3><p>Centro Evangelístico Solamente Cree · Madrid</p></div></div>
    </div>
    <div className="cards three">{values.map(v=><article className="card value-card" key={v[1]}><div className="icon-badge">{v[0]}</div><h3>{v[1]}</h3><p>{v[2]}</p><blockquote>{v[3]}</blockquote></article>)}</div>
    </div></section>

    <section className="section alt"><div className="container split"><div><span className="eyebrow">Liderazgo & Trayectoria Apostólica</span><h2>Manuel y Toñy / Dejan2huella Producciones</h2><p>El Apóstol Manuel Ramírez de Arellano y su esposa Toñy cuentan con décadas de trayectoria evangelística en España, Europa y América Latina. Juntos han desarrollado el ministerio musical «Manuel y Toñy» y «Dejan2huella Producciones».</p><p>En la actualidad pastorean el Centro Evangelístico Solamente Cree en Madrid, uniendo predicación bíblica, alabanza y atención pastoral.</p><Link className="button dark" href="/sobre-nosotros">Sobre Nosotros</Link></div><div className="mosaic"><img src={images.worship1} alt="Culto dominical en Solamente Cree"/><img src={images.preaching} alt="Manuel y Toñy predicando en Madrid"/><img src={images.worship2} alt="Alabanza y adoración de Manuel y Toñy"/><img src={images.community} alt="Comunidad de fe del Centro Evangelístico Solamente Cree"/></div></div></section>

    <section className="section"><div className="container"><div className="section-head"><span className="eyebrow">Te Esperamos Cada Domingo</span><h2>Horarios y Ubicación en Madrid</h2><p>Un punto de encuentro accesible, cómodo y con facilidades para toda la familia.</p></div><div className="location-grid"><div className="cards one"><article className="card"><h3>Culto Dominical Principal</h3><p><strong>Domingos a las 11:00h</strong><br/>Recepción y apertura de sala desde las 10:30h.</p></article><article className="card"><h3>C.C. Las Rosas · CINESA Sala 7</h3><p>Av. de Guadalajara, 2, 28032 Madrid (San Blas-Canillejas).</p></article><article className="card"><h3>Transporte Público y Parking</h3><p>Metro Alsacia (Línea 2), autobuses EMT 70, 106, 140, E2 y N7. Parking cubierto del centro comercial.</p></article></div><div className="dark-panel"><span className="eyebrow light">Centro Comercial Las Rosas</span><h3>Un santuario acogedor en el corazón de San Blas-Canillejas</h3><p>Instalaciones amplias con cómodas butacas de cine, climatización y sonido profesional.</p><img src={images.location} alt="Fachada exterior del Centro Comercial Las Rosas, sede de culto en Madrid"/><a className="button gold" href={site.maps} target="_blank" rel="noreferrer">Abrir en Google Maps</a></div></div></div></section>

    <section className="section alt"><div className="container"><div className="section-head"><span className="eyebrow">Alabanza, adoración y mensajes</span><h2>Multimedia y Proyectos del Ministerio</h2><p>Contenidos y producciones de Manuel y Toñy y Dejan2huella Producciones.</p></div><div className="media-feature"><img src={images.media} alt="Noches de adoración y milagros con Manuel y Toñy"/><div><h3>Noches de Adoración y Milagros</h3><p>Accede a mensajes, alabanza y contenidos audiovisuales del ministerio.</p><a className="button dark" href={site.socials.youtube} target="_blank" rel="noreferrer">Ver canal de YouTube</a></div></div><div className="center"><Link className="text-link" href="/proyectos">Ver proyectos y multimedia →</Link></div></div></section>

    <section className="section"><div className="container cta"><span className="eyebrow">Contacto y Atención Pastoral</span><h2>¿Necesitas oración o quieres visitarnos?</h2><p>Escríbenos por WhatsApp o utiliza nuestro formulario de contacto.</p><div className="actions"><a className="button whatsapp" href={site.whatsapp} target="_blank" rel="noreferrer">Hablar por WhatsApp</a><Link className="button dark" href="/contacto">Contacto</Link></div></div></section>
  </>;
}
