import PageHero from '@/components/PageHero';
import ContactForm from '@/components/ContactForm';
import { site, images, absolute } from '@/lib/site';

export const metadata = {
  title: 'Contacto',
  description: 'Contacta con el Centro Evangelístico Solamente Cree en Madrid. WhatsApp, email, ubicación y formulario para oración, cultos y atención pastoral.',
  alternates: { canonical: '/contacto' },
  openGraph: { title: 'Contacto | Solamente Cree', description: 'WhatsApp, email, ubicación y formulario de contacto del Centro Evangelístico Solamente Cree.', url: '/contacto' }
};

const faq=[
  ['¿Dónde está ubicado el Centro Evangelístico Solamente Cree en Madrid?','Nos reunimos en el Centro Comercial Las Rosas, dentro de CINESA Sala 7, Avenida de Guadalajara, 2, 28032 Madrid, frente a Metro Alsacia.'],
  ['¿A qué hora son las reuniones y cultos dominicales?','El culto principal se celebra todos los domingos a las 11:00h. La recepción abre desde las 10:30h.'],
  ['¿Puedo solicitar una oración o hablar con los pastores por WhatsApp?','Sí. Puedes escribir a la línea pastoral directa de WhatsApp para enviar una petición de oración, pedir atención pastoral o resolver dudas sobre los encuentros.']
];
const schema={'@context':'https://schema.org','@type':'FAQPage',mainEntity:faq.map(([q,a])=>({'@type':'Question',name:q,acceptedAnswer:{'@type':'Answer',text:a}}))};

export default function Contacto(){return <><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(schema)}}/><PageHero eyebrow="Contacto y atención pastoral" title="Hablemos" text="Escríbenos para peticiones de oración, información sobre los cultos, consejería o invitaciones ministeriales."/>
<section className="section" id="ubicacion"><div className="container location-grid"><div><span className="eyebrow">Datos de contacto</span><h2>Centro Evangelístico Solamente Cree</h2><div className="cards one"><article className="card"><h3>WhatsApp</h3><p><a className="text-link" href={site.whatsapp} target="_blank" rel="noreferrer">{site.phoneDisplay}</a></p></article><article className="card"><h3>Correo electrónico</h3><p><a className="text-link" href={`mailto:${site.email}`}>{site.email}</a></p></article><article className="card"><h3>Sede de cultos</h3><p>{site.address}</p><a className="text-link" href={site.maps} target="_blank" rel="noreferrer">Abrir en Google Maps →</a></article></div></div><div className="dark-panel"><img src={images.location} alt="Centro Comercial Las Rosas, ubicación del culto de Solamente Cree"/><h2>Domingos a las 11:00h</h2><p>Recepción desde las 10:30h. Metro Alsacia (Línea 2).</p><a className="button whatsapp" href={site.whatsapp} target="_blank" rel="noreferrer">Hablar por WhatsApp</a></div></div></section>
<section className="section alt"><div className="container contact-layout"><div><span className="eyebrow">Envíanos un mensaje</span><h2>Formulario de contacto</h2><p>El formulario está listo para funcionar con Resend al configurar las variables de entorno indicadas en <code>.env.example</code>.</p></div><div className="form-card"><ContactForm/></div></div></section>
<section className="section"><div className="container narrow"><div className="section-head"><span className="eyebrow">Preguntas frecuentes</span><h2>Antes de venir</h2></div><div className="faq">{faq.map(([q,a])=><details key={q}><summary>{q}</summary><p>{a}</p></details>)}</div></div></section></>}
