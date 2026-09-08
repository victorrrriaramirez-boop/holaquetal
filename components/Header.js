'use client';

import Link from 'next/link';
import { useState } from 'react';
import { site, images } from '@/lib/site';

const links = [
  ['/', 'Inicio'],
  ['/servicios', 'Servicios'],
  ['/proyectos', 'Proyectos'],
  ['/sobre-nosotros', 'Sobre Nosotros'],
  ['/contacto', 'Contacto'],
];

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="site-header">
      <div className="container nav-wrap">
        <Link href="/" className="brand" aria-label="Inicio Solamente Cree" onClick={() => setOpen(false)}>
          <img src={images.logo} width="48" height="48" alt="Logotipo Centro Evangelístico Solamente Cree" className="brand-logo" />
          <span className="brand-copy"><strong>{site.shortName}</strong><small>Centro Evangelístico</small></span>
        </Link>
        <button className="menu-toggle" type="button" aria-expanded={open} aria-controls="main-nav" onClick={() => setOpen(!open)}>
          <span className="sr-only">Abrir menú</span>
          <span></span><span></span><span></span>
        </button>
        <nav id="main-nav" aria-label="Menú principal" className={open ? 'main-nav open' : 'main-nav'}>
          {links.map(([href, label]) => <Link key={href} href={href} onClick={() => setOpen(false)}>{label}</Link>)}
          <a className="button whatsapp nav-cta" href={`${site.whatsapp}?text=Hola,%20quisiera%20recibir%20información%20del%20Centro%20Evangelístico%20Solamente%20Cree`} target="_blank" rel="noreferrer">Escríbenos</a>
        </nav>
      </div>
    </header>
  );
}
