(() => {
  const cfg = window.SITE_CONFIG || {};
  if (cfg.GTM_ID) {
    const s = document.createElement('script'); s.async = true;
    s.src = `https://www.googletagmanager.com/gtm.js?id=${encodeURIComponent(cfg.GTM_ID)}`;
    document.head.appendChild(s);
  } else if (cfg.GA_MEASUREMENT_ID) {
    const s = document.createElement('script'); s.async = true;
    s.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(cfg.GA_MEASUREMENT_ID)}`;
    document.head.appendChild(s);
    window.dataLayer = window.dataLayer || [];
    window.gtag = function(){dataLayer.push(arguments)};
    gtag('js', new Date()); gtag('config', cfg.GA_MEASUREMENT_ID);
  }
  document.querySelectorAll('form[data-contact-form]').forEach(form => {
    form.addEventListener('submit', async e => {
      e.preventDefault();
      const data = Object.fromEntries(new FormData(form).entries());
      if (cfg.CONTACT_ENDPOINT) {
        const r = await fetch(cfg.CONTACT_ENDPOINT,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(data)});
        if(!r.ok) throw new Error('No se pudo enviar el formulario');
        alert('Mensaje enviado correctamente.'); form.reset(); return;
      }
      const body = `Nombre: ${data.nombre||''}\nEmail: ${data.email||''}\nTeléfono: ${data.telefono||''}\nMotivo: ${data.motivo||''}\n\n${data.mensaje||''}`;
      window.location.href = `mailto:dejan2huella@gmail.com?subject=${encodeURIComponent('Contacto web Solamente Cree')}&body=${encodeURIComponent(body)}`;
    });
  });
})();