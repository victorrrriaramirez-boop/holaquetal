import PageHero from '@/components/PageHero';
import { images, site } from '@/lib/site';

export const metadata = {
  title: 'Proyectos y Multimedia',
  description: 'Proyectos de Manuel y Toñy y Dejan2huella Producciones: alabanza, mensajes, noches de adoración y contenido audiovisual cristiano.',
  alternates: { canonical: '/proyectos' },
  openGraph: { title: 'Proyectos y Multimedia | Solamente Cree', description: 'Alabanza, mensajes y producciones audiovisuales del ministerio.', url: '/proyectos' }
};

const projects=[
  {title:'Manuel y Toñy',text:'Ministerio musical y de alabanza desarrollado durante décadas junto a su labor evangelística.',img:images.worship2,alt:'Alabanza y adoración de Manuel y Toñy'},
  {title:'Dejan2huella Producciones',text:'Sello y proyecto audiovisual cristiano desde el que se publican contenidos de alabanza y ministerio.',img:images.media,alt:'Producción audiovisual cristiana Dejan2huella Producciones'},
  {title:'Noches de Adoración y Milagros',text:'Encuentros y contenidos centrados en adoración, predicación y testimonios de fe.',img:images.community,alt:'Comunidad reunida en una noche de adoración y fe'}
];

export default function Proyectos(){return <><PageHero eyebrow="Alabanza · Mensajes · Producción" title="Proyectos y Multimedia" text="La vertiente musical y audiovisual del ministerio de Manuel y Toñy y Dejan2huella Producciones."/>
<section className="section"><div className="container project-grid">{projects.map(p=><article className="project-card" key={p.title}><img src={p.img} alt={p.alt}/><div><span className="eyebrow">Proyecto ministerial</span><h2>{p.title}</h2><p>{p.text}</p></div></article>)}</div></section>
<section className="section alt"><div className="container cta"><span className="eyebrow">Contenido oficial</span><h2>Visita el canal de Dejan2huella</h2><p>Accede a vídeos, alabanza y mensajes del ministerio.</p><a className="button dark" href={site.socials.youtube} target="_blank" rel="noreferrer">Ver YouTube</a></div></section></>}
