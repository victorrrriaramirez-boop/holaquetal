export async function POST(request) {
  try {
    const body = await request.json();
    if (body.website) return Response.json({ message: 'Mensaje recibido.' });
    const required = ['name','email','phone','message'];
    if (required.some((key) => !String(body[key] || '').trim())) return Response.json({ message: 'Completa todos los campos obligatorios.' }, { status: 400 });
    if (!/^\S+@\S+\.\S+$/.test(body.email)) return Response.json({ message: 'Introduce un correo electrónico válido.' }, { status: 400 });

    const apiKey = process.env.RESEND_API_KEY;
    const to = process.env.CONTACT_TO_EMAIL;
    const from = process.env.CONTACT_FROM_EMAIL;
    if (!apiKey || !to || !from) {
      return Response.json({ message: 'El formulario está preparado, pero falta configurar el servicio de envío en Vercel.' }, { status: 503 });
    }

    const safe = (v='') => String(v).replace(/[<>]/g,'');
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: { Authorization: `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        from, to: [to], reply_to: body.email,
        subject: `Nuevo contacto web: ${safe(body.reason || 'Consulta')}`,
        html: `<h2>Nuevo mensaje desde solamentecree.com</h2><p><strong>Nombre:</strong> ${safe(body.name)}</p><p><strong>Email:</strong> ${safe(body.email)}</p><p><strong>Teléfono:</strong> ${safe(body.phone)}</p><p><strong>Motivo:</strong> ${safe(body.reason)}</p><p><strong>Mensaje:</strong><br>${safe(body.message).replace(/\n/g,'<br>')}</p>`
      })
    });
    if (!res.ok) return Response.json({ message: 'No se pudo enviar el mensaje. Inténtalo de nuevo o escríbenos por WhatsApp.' }, { status: 502 });
    return Response.json({ message: 'Gracias. Hemos recibido tu mensaje correctamente.' });
  } catch {
    return Response.json({ message: 'No se pudo procesar el formulario.' }, { status: 400 });
  }
}
