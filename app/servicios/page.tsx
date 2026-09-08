import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { StructuredData } from "@/components/StructuredData";
import { images, site } from "@/lib/site";

export const metadata: Metadata = { title: "Servicios · Cultos, oración y consejería", description: "Servicios del Centro Evangelístico Solamente Cree en Madrid: culto dominical, oración, consejería pastoral, alabanza y producción multimedia cristiana.", alternates:{canonical:"/servicios"}, openGraph:{title:"Servicios | Solamente Cree",description:"Cultos, oración, consejería y ministerio multimedia en Madrid.",url:"/servicios"} };
const services = [
  {title:"Culto Dominical",text:"Encuentro principal de alabanza, predicación y oración todos los domingos a las 11:00h. Apertura y bienvenida desde las 10:30h.",icon:"✦"},
  {title:"Oración",text:"Recepción de peticiones de oración y acompañamiento espiritual a través del equipo pastoral y del canal directo de WhatsApp.",icon:"♡"},
  {title:"Consejería Pastoral",text:"Un espacio de escucha y orientación cristiana para personas y familias que desean hablar con el equipo pastoral.",icon:"◎"},
  {title:"Alabanza y Adoración",text:"Música y adoración vinculadas al ministerio Manuel y Toñy, integradas en la vida congregacional y los contenidos digitales.",icon:"♪"},
  {title:"Mensajes y Enseñanza",text:"Predicación bíblica y contenidos de fe destinados al crecimiento espiritual de la comunidad.",icon:"▣"},
  {title:"Producción Multimedia",text:"Contenido audiovisual cristiano desarrollado bajo Dejan2huella Producciones: música, mensajes y piezas para difusión digital.",icon:"▶"}
];
export default function Servicios(){return <main><PageHero eyebrow="Vida de iglesia" title="Servicios del Centro Evangelístico Solamente Cree" text="Una comunidad enfocada en la fe, la adoración, el acompañamiento pastoral y la difusión del mensaje cristiano." />
<StructuredData data={services.map(s=>({"@context":"https://schema.org","@type":"Service",name:s.title,provider:{"@type":"Church",name:site.name,url:site.url},areaServed:"Madrid, España",description:s.text}))}/>
<section className="section"><div className="container cards three">{services.map(s=><article className="card service-card" key={s.title}><span className="card-icon">{s.icon}</span><h2>{s.title}</h2><p>{s.text}</p></article>)}</div></section>
<section className="section section-soft"><div className="container split"><div><span className="eyebrow">Culto dominical en Madrid</span><h2>Domingos a las 11:00h en Las Rosas</h2><p>Nos reunimos en el Centro Comercial Las Rosas, dentro de CINESA Sala 7, en Avenida de Guadalajara 2, Madrid. El acceso es cómodo mediante Metro Alsacia (Línea 2) y el centro comercial dispone de aparcamiento.</p><div className="inline-actions"><Link className="btn btn-primary" href="/contacto">Ver ubicación</Link><a className="btn btn-whatsapp" href={`${site.whatsapp}?text=Hola,%20quisiera%20información%20sobre%20el%20culto%20dominical`} target="_blank" rel="noreferrer">Consultar por WhatsApp</a></div></div><div className="image-frame landscape"><Image src={images.location} alt="Centro Comercial Las Rosas, lugar de reunión de Solamente Cree en Madrid" fill sizes="(max-width:900px) 100vw, 48vw"/></div></div></section></main>}
