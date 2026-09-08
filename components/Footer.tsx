import Image from "next/image";
import Link from "next/link";
import { images, nav, site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <div className="brand footer-brand"><Image src={images.logo} alt="Logotipo Solamente Cree" width={56} height={56} className="brand-logo" /><span className="brand-copy"><strong>Solamente Cree</strong><small>Centro Evangelístico Madrid</small></span></div>
          <p>Comunidad de fe, adoración y avivamiento en Madrid bajo la cobertura apostólica del Apóstol Manuel Ramírez de Arellano y Toñy.</p>
        </div>
        <div><h3>Encuentro semanal</h3><p><strong>Domingos · 11:00h</strong><br />C.C. Las Rosas, CINESA (Sala 7)<br />Av. de Guadalajara, 2, 28032 Madrid<br />Metro Alsacia (Línea 2)</p></div>
        <div><h3>Conéctate</h3><ul><li><a href={site.social.facebook} target="_blank" rel="noreferrer">Facebook</a></li><li><a href={site.social.youtube} target="_blank" rel="noreferrer">YouTube</a></li><li><a href={site.social.tiktok} target="_blank" rel="noreferrer">TikTok</a></li><li><a href={site.whatsapp} target="_blank" rel="noreferrer">WhatsApp</a></li></ul></div>
        <div><h3>Web</h3><ul>{nav.map((item)=><li key={item.href}><Link href={item.href}>{item.label}</Link></li>)}</ul></div>
      </div>
      <div className="container footer-bottom"><span>© {new Date().getFullYear()} Centro Evangelístico Solamente Cree · Manuel y Toñy · Dejan2huella Producciones.</span><span>Madrid, España · «Nada es difícil para Dios»</span></div>
    </footer>
  );
}
