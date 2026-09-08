import Link from 'next/link';
import { site, images } from '@/lib/site';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <div className="brand footer-brand"><img src={images.logo} width="54" height="54" alt="Logotipo Solamente Cree" className="brand-logo" /><span className="brand-copy"><strong>{site.shortName}</strong><small>Centro Evangelístico Madrid</small></span></div>
          <p>Comunidad de fe, adoración y avivamiento en Madrid bajo la cobertura apostólica del Apóstol Manuel Ramírez de Arellano y Toñy.</p>
        </div>
        <div><h2>Encuentro semanal</h2><p><strong>Domingos · 11:00h</strong><br/>C.C. Las Rosas, CINESA (Sala 7)<br/>Av. de Guadalajara, 2, 28032 Madrid<br/>Metro Alsacia (Línea 2)</p></div>
        <div><h2>Conéctate</h2><p><a href={site.socials.facebook} target="_blank" rel="noreferrer">Facebook</a><br/><a href={site.socials.youtube} target="_blank" rel="noreferrer">YouTube</a><br/><a href={site.socials.tiktok} target="_blank" rel="noreferrer">TikTok</a><br/><a href={site.whatsapp} target="_blank" rel="noreferrer">WhatsApp {site.phoneDisplay}</a></p></div>
        <div><h2>Enlaces</h2><p><Link href="/servicios">Servicios</Link><br/><Link href="/proyectos">Proyectos</Link><br/><Link href="/sobre-nosotros">Sobre Nosotros</Link><br/><Link href="/contacto">Contacto</Link><br/><a href="/sitemap.xml">Sitemap</a></p></div>
      </div>
      <div className="container footer-bottom"><span>© {new Date().getFullYear()} Centro Evangelístico Solamente Cree · Manuel y Toñy · Dejan2huella Producciones.</span><span>Madrid, España · «Nada es difícil para Dios»</span></div>
    </footer>
  );
}
