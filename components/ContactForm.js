'use client';
import { useState } from 'react';

export default function ContactForm(){
  const [state,setState]=useState({loading:false,message:'',ok:false});
  async function submit(e){
    e.preventDefault(); setState({loading:true,message:'',ok:false});
    const form = new FormData(e.currentTarget);
    const body = Object.fromEntries(form.entries());
    try {
      const res = await fetch('/api/contact',{method:'POST',headers:{'content-type':'application/json'},body:JSON.stringify(body)});
      const data = await res.json();
      if(!res.ok) throw new Error(data.message || 'No se pudo enviar el mensaje.');
      e.currentTarget.reset();
      setState({loading:false,message:data.message || 'Mensaje enviado correctamente.',ok:true});
    } catch(err){ setState({loading:false,message:err.message,ok:false}); }
  }
  return <form className="contact-form" onSubmit={submit}>
    <div className="form-grid"><label>Nombre completo *<input name="name" required autoComplete="name" placeholder="Tu nombre y apellidos"/></label><label>Correo electrónico *<input name="email" type="email" required autoComplete="email" placeholder="ejemplo@correo.com"/></label></div>
    <div className="form-grid"><label>Teléfono / WhatsApp *<input name="phone" type="tel" required autoComplete="tel" placeholder="+34 600 000 000"/></label><label>Motivo del contacto<select name="reason" defaultValue="Petición de oración"><option>Petición de oración</option><option>Información de cultos en Madrid</option><option>Consejería pastoral</option><option>Compartir un testimonio de fe</option><option>Invitaciones y eventos ministeriales</option></select></label></div>
    <label>Tu mensaje o petición *<textarea name="message" required rows="6" placeholder="Cuéntanos en qué podemos orar o ayudarte..."/></label>
    <input className="hp" type="text" name="website" tabIndex="-1" autoComplete="off" aria-hidden="true" />
    <button className="button dark full" disabled={state.loading}>{state.loading ? 'Enviando…' : 'Enviar mensaje a la congregación'}</button>
    {state.message && <p className={state.ok?'form-status ok':'form-status'} role="status">{state.message}</p>}
  </form>;
}
