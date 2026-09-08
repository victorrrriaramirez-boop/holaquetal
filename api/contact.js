const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function clean(value, max = 1000) {
  return String(value || '').trim().slice(0, max);
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

module.exports = async function handler(req, res) {
  res.setHeader('Cache-Control', 'no-store');
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ message: 'Método no permitido.' });
  }

  const body = typeof req.body === 'string' ? JSON.parse(req.body || '{}') : (req.body || {});
  if (clean(body.website, 120)) return res.status(200).json({ message: 'Mensaje recibido.' });

  const name = clean(body.name, 100);
  const email = clean(body.email, 160).toLowerCase();
  const phone = clean(body.phone, 40);
  const reason = clean(body.reason, 120) || 'Consulta web';
  const message = clean(body.message, 5000);

  if (!name || !email || !message) return res.status(400).json({ message: 'Completa los campos obligatorios.' });
  if (!EMAIL_RE.test(email)) return res.status(400).json({ message: 'Introduce un correo electrónico válido.' });

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  const from = process.env.CONTACT_FROM_EMAIL;
  if (!apiKey || !to || !from) {
    return res.status(503).json({
      message: 'El formulario está preparado, pero falta configurar RESEND_API_KEY, CONTACT_TO_EMAIL y CONTACT_FROM_EMAIL en Vercel.',
    });
  }

  const html = `
    <h2>Nuevo mensaje desde solamentecree.com</h2>
    <p><strong>Nombre:</strong> ${escapeHtml(name)}</p>
    <p><strong>Email:</strong> ${escapeHtml(email)}</p>
    <p><strong>Teléfono:</strong> ${escapeHtml(phone || 'No indicado')}</p>
    <p><strong>Motivo:</strong> ${escapeHtml(reason)}</p>
    <p><strong>Mensaje:</strong><br>${escapeHtml(message).replace(/\n/g, '<br>')}</p>`;

  try {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: { Authorization: `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: email,
        subject: `Nuevo contacto web: ${reason}`.slice(0, 180),
        html,
      }),
    });
    if (!response.ok) {
      const details = await response.text().catch(() => '');
      console.error('Resend error', response.status, details.slice(0, 500));
      return res.status(502).json({ message: 'No se pudo enviar el mensaje. Inténtalo de nuevo o contacta por WhatsApp.' });
    }
    return res.status(200).json({ message: 'Gracias. Hemos recibido tu mensaje correctamente.' });
  } catch (error) {
    console.error('Contact API error', error);
    return res.status(502).json({ message: 'No se pudo enviar el mensaje. Inténtalo de nuevo o contacta por WhatsApp.' });
  }
};
