"use client";

import { FormEvent, useState } from "react";

export function ContactForm() {
  const [status, setStatus] = useState<"idle"|"sending"|"success"|"unconfigured"|"error">("idle");
  const [message, setMessage] = useState("");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    setMessage("");
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    try {
      const response = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) });
      const result = await response.json();
      if (response.ok && result.sent) { setStatus("success"); setMessage("Mensaje enviado correctamente. Gracias por escribirnos."); form.reset(); }
      else if (result.configured === false) { setStatus("unconfigured"); setMessage("El formulario está preparado, pero el envío aún no está activado. Puedes escribirnos por WhatsApp o email."); }
      else { throw new Error(); }
    } catch { setStatus("error"); setMessage("No se ha podido enviar el mensaje. Escríbenos por WhatsApp o email."); }
  }

  return <form className="contact-form" onSubmit={onSubmit}>
    <div className="form-row"><label>Nombre *<input name="name" required autoComplete="name" /></label><label>Email *<input type="email" name="email" required autoComplete="email" /></label></div>
    <div className="form-row"><label>Teléfono<input type="tel" name="phone" autoComplete="tel" /></label><label>Motivo<select name="subject" defaultValue="Petición de oración"><option>Petición de oración</option><option>Información de cultos en Madrid</option><option>Consejería pastoral</option><option>Compartir un testimonio de fe</option><option>Invitaciones y eventos ministeriales</option></select></label></div>
    <label>Tu mensaje o petición *<textarea name="message" required rows={5} /></label>
    <label className="consent"><input type="checkbox" required name="consent" value="accepted" /> <span>Acepto que mis datos se utilicen para responder a esta consulta.</span></label>
    <button className="btn btn-primary full" disabled={status === "sending"} type="submit">{status === "sending" ? "Enviando…" : "Enviar mensaje"}</button>
    {message && <p className={`form-status ${status}`} role="status">{message}</p>}
  </form>;
}
