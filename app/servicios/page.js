import Link from 'next/link';
import PageHero from '@/components/PageHero';
import { site } from '@/lib/site';

export const metadata = {
  title: 'Servicios y Ministerio',
  description: 'Culto dominical, oración, consejería pastoral, alabanza y producción audiovisual del Centro Evangelístico Solamente Cree en Madrid.',
  alternates: { canonical: '/servicios' },
  openGraph: { title: 'Servicios y Ministerio | Solamente Cree', description: 'Culto, oración, atención pastoral y producción audiovisual en Madrid.', url: '/servicios' }
};

const services=[
  ['Culto dominical en Madrid','Cada domingo a las 11:00h nos reunimos en C.C. Las Rosas, CINESA Sala 7, para un tiempo de alabanza, predicación y comunión.'],
  ['Oración y atención pastoral','Disponemos de contacto directo por WhatsApp para peticiones de oración, dudas sobre los encuentros y atención pastoral.'],
  ['Consejería pastoral','Un espacio de acompañamiento y escucha para quienes desean hablar con el equipo pastoral.'],
  ['Alabanza y adoración','La música y la adoración forman parte esencial de nuestros encuentros y de la trayectoria ministerial de Manuel y Toñy.'],
  ['Dejan2huella Producciones','Producción musical y audiovisual cristiana vinculada al ministerio Manuel y Toñy, con contenidos de alabanza y mensajes.'],
  ['Invitaciones y eventos ministeriales','Canal de contacto para invitaciones y encuentros ministeriales relacionados con Manuel y Toñy y Dejan2huella Producciones.']
];

export default function Servicios(){
 return <><PageHero eyebrow="Ministerio y atención" title="Servicios del Centro Evangelístico Solamente Cree" text="Una comunidad de fe con culto dominical, oración, atención pastoral, alabanza y producción audiovisual."/>
 <section className="section"><div className="container cards three">{services.map(([t,p])=><article className="card service-card" key={t}><span className="icon-badge">✦</span><h2>{t}</h2><p>{p}</p></article>)}</div></section>
 <section className="section alt"><div className="container cta"><span className="eyebrow">Contacto directo</span><h2>¿En qué podemos ayudarte?</h2><p>Cuéntanos si quieres asistir al culto, enviar una petición de oración o contactar con el ministerio.</p><div className="actions"><a className="button whatsapp" href={site.whatsapp} target="_blank" rel="noreferrer">Escribir por WhatsApp</a><Link className="button dark" href="/contacto">Formulario de contacto</Link></div></div></section></>;
}
