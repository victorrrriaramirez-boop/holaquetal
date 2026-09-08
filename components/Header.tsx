import Image from "next/image";
import Link from "next/link";
import { images, nav, site } from "@/lib/site";

export function Header() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link href="/" className="brand" aria-label="Inicio - Centro Evangelístico Solamente Cree">
          <Image src={images.logo} alt="Logotipo Centro Evangelístico Solamente Cree" width={52} height={52} className="brand-logo" priority />
          <span className="brand-copy"><strong>Solamente Cree</strong><small>Centro Evangelístico</small></span>
        </Link>
        <nav className="desktop-nav" aria-label="Menú principal">
          {nav.map((item) => <Link key={item.href} href={item.href}>{item.label}</Link>)}
        </nav>
        <a className="btn btn-whatsapp header-cta" href={`${site.whatsapp}?text=Hola,%20quisiera%20recibir%20información%20del%20Centro%20Evangelístico%20Solamente%20Cree`} target="_blank" rel="noreferrer">Escríbenos</a>
        <details className="mobile-menu">
          <summary aria-label="Abrir menú">Menú</summary>
          <nav aria-label="Menú móvil">
            {nav.map((item) => <Link key={item.href} href={item.href}>{item.label}</Link>)}
          </nav>
        </details>
      </div>
    </header>
  );
}
