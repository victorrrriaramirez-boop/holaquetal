import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { StructuredData } from "@/components/StructuredData";
import { images, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Iglesia evangélica en Madrid · Manuel y Toñy",
  description: "Únete al Centro Evangelístico Solamente Cree en Madrid con Manuel Ramírez de Arellano y Toñy. Culto dominical, oración, alabanza y comunidad de fe.",
  alternates: { canonical: "/" },
  openGraph: { title: "Solamente Cree · Iglesia evangélica en Madrid", description: "Culto dominical, oración, alabanza y comunidad de fe en Madrid.", url: "/" }
};

const faq = [
  ["¿Dónde está ubicado el Centro Evangelístico Solamente Cree?", "En el Centro Comercial Las Rosas, Sala 7 de CINESA, Avenida de Guadalajara 2, 28032 Madrid, junto a Metro Alsacia."],
  ["¿A qué hora es el culto dominical?", "Todos los domingos a las 11:00h, con recepción de visitantes desde las 10:30h."],
  ["¿Puedo solicitar oración?", "Sí. Puedes enviar tu petición de oración por WhatsApp o mediante el formulario de contacto."]
];

export default function Home() {
  return <main>
    <StructuredData data={{"@context":"https://schema.org","@type":"FAQPage",mainEntity:faq.map(([q,a])=>({"@type":"Question",name:q,acceptedAnswer:{"@type":"Answer",text:a}}))}} />
    <section className="hero"><div className="hero-glow"/><div className="container hero-content"><span className="eyebrow light">Bienvenidos a Casa · Iglesia Cristiana en Madrid</span><h1>Manuel y Toñy - Solamente Cree <span>Ministerio & Alabanza · Dejan2huella</span></h1><p className="hero-lead">Ven y descubre un lugar donde tu <em>fe cobra vida</em></p><blockquote>«Nada es difícil para Dios» · Lucas 1:37</blockquote><div className="service-banner"><strong>Domingos 11:00h</strong><span>C.C. Las Rosas · CINESA Sala 7 · Madrid · Metro Alsacia</span></div><div className="hero-actions"><a className="btn btn-whatsapp" href={`${site.whatsapp}?text=Hola,%20deseo%20asistir%20al%20culto%20del%20domingo`} target="_blank" rel="noreferrer">Únete por WhatsApp</a><Link className="btn btn-ghost-light" href="/contacto">Horarios y ubicación</Link></div></div></section>

    <section className="section"><div className="container split"><div><span className="eyebrow">Nuestra comunidad de fe</span><h2>Tu Iglesia Evangélica y Centro de Fe en Madrid</h2><p>El <strong>Centro Evangelístico Solamente Cree</strong> nace con el propósito de anunciar el Evangelio de Jesucristo con poder, amor y una comunidad abierta. Entendemos la Iglesia como una familia de fe activa donde cada persona puede encontrar acogida, acompañamiento y crecimiento espiritual.</p><p>Nuestras reuniones combinan adoración, enseñanza bíblica y atención pastoral. Si buscas una comunidad cristiana en Madrid, puedes conocer nuestros servicios o escribir directamente al equipo pastoral.</p><div className="inline-actions"><Link className="text-link" href="/sobre-nosotros">Conócenos mejor →</Link><Link className="text-link" href="/servicios">Ver servicios →</Link></div></div><div className="image-frame portrait"><Image src={images.pastors} alt="Apóstol Manuel Ramírez de Arellano y Toñy, pastores de Solamente Cree" fill sizes="(max-width: 900px) 100vw, 40vw" /></div></div></section>

    <section className="section section-soft"><div className="container"><div className="section-heading"><span className="eyebrow">Lo que encontrarás</span><h2>Fe, comunidad y atención pastoral</h2></div><div className="cards three"><article className="card"><span className="card-icon">✦</span><h3>Culto Dominical</h3><p>Alabanza, predicación y un espacio para toda la familia cada domingo a las 11:00h.</p></article><article className="card"><span className="card-icon">♡</span><h3>Oración y Consejería</h3><p>Atención pastoral directa para peticiones de oración, acompañamiento y orientación espiritual.</p></article><article className="card"><span className="card-icon">♪</span><h3>Alabanza y Multimedia</h3><p>Mensajes, música y contenidos del ministerio Manuel y Toñy y Dejan2huella Producciones.</p></article></div></div></section>

    <section className="section"><div className="container split reverse-mobile"><div className="media-stack"><div className="image-frame landscape"><Image src={images.worship} alt="Culto dominical del Centro Evangelístico Solamente Cree en Madrid" fill sizes="(max-width: 900px) 100vw, 48vw" /></div><div className="image-frame landscape small"><Image src={images.production} alt="Alabanza y adoración de Manuel y Toñy" fill sizes="(max-width: 900px) 100vw, 48vw" /></div></div><div><span className="eyebrow">Ministerio y producción</span><h2>Manuel y Toñy · Dejan2huella</h2><p>El Apóstol Manuel Ramírez de Arellano y su esposa Toñy desarrollan desde hace décadas una labor evangelística, pastoral y musical en España y fuera de ella. Su trayectoria une predicación, alabanza y producción audiovisual cristiana.</p><p>En la actualidad pastorean el Centro Evangelístico Solamente Cree en Madrid y continúan compartiendo mensajes y música a través de Dejan2huella Producciones.</p><Link className="btn btn-primary" href="/proyectos">Ver proyectos y multimedia</Link></div></div></section>

    <section className="section section-dark"><div className="container cta-center"><span className="eyebrow light">Te esperamos</span><h2>Un lugar para creer, crecer y caminar acompañado</h2><p>Domingos a las 11:00h en C.C. Las Rosas, CINESA Sala 7, Madrid.</p><div className="hero-actions"><Link className="btn btn-gold" href="/contacto">Cómo llegar y contactar</Link><a className="btn btn-whatsapp" href={site.whatsapp} target="_blank" rel="noreferrer">Escribir por WhatsApp</a></div></div></section>
  </main>;
}
