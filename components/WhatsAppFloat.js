import { site } from '@/lib/site';
export default function WhatsAppFloat(){
  return <a className="whatsapp-float" aria-label="Abrir WhatsApp Solamente Cree" href={`${site.whatsapp}?text=Hola,%20quisiera%20recibir%20oración%20y%20atención%20pastoral`} target="_blank" rel="noreferrer">WA</a>;
}
