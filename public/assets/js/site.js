(() => {
  const button = document.querySelector('[data-menu-button]');
  const menu = document.querySelector('[data-mobile-menu]');
  if (button && menu) {
    const closeMenu = () => {
      button.setAttribute('aria-expanded', 'false');
      menu.hidden = true;
      document.body.classList.remove('menu-open');
    };
    button.addEventListener('click', () => {
      const open = button.getAttribute('aria-expanded') === 'true';
      button.setAttribute('aria-expanded', String(!open));
      menu.hidden = open;
      document.body.classList.toggle('menu-open', !open);
    });
    menu.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
    window.addEventListener('resize', () => {
      if (window.innerWidth > 900) closeMenu();
    });
  }

  const form = document.querySelector('[data-contact-form]');
  if (form) {
    const status = form.querySelector('[data-form-status]');
    const submit = form.querySelector('[data-submit]');
    form.addEventListener('submit', async event => {
      event.preventDefault();
      status.hidden = true;
      status.className = 'form-status';
      if (!form.reportValidity()) return;

      submit.disabled = true;
      const original = submit.textContent;
      submit.textContent = 'Enviando…';
      try {
        const data = Object.fromEntries(new FormData(form).entries());
        const response = await fetch('/api/contact', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
          body: JSON.stringify(data),
        });
        const payload = await response.json().catch(() => ({}));
        if (!response.ok) throw new Error(payload.message || 'No se pudo enviar el mensaje.');
        form.reset();
        status.textContent = payload.message || 'Mensaje enviado correctamente.';
        status.classList.add('success');
      } catch (error) {
        status.textContent = error.message || 'No se pudo enviar el mensaje. Puedes contactar por WhatsApp.';
      } finally {
        status.hidden = false;
        submit.disabled = false;
        submit.textContent = original;
      }
    });
  }
})();
