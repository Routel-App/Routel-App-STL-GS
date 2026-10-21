/**
 * Shared form submission. If <body data-endpoint> is set (site.integrations.formEndpoint)
 * the form is POSTed there as multipart/form-data (works with Formspree, Getform,
 * or your own API). Otherwise a pre-filled email to the company inbox is opened.
 */
export async function submitForm(form: HTMLFormElement, extra: Record<string, string> = {}) {
  const endpoint = document.body.dataset.endpoint || '';
  const data = new FormData(form);
  data.append('_form', form.dataset.form || 'form');
  data.append('_lang', document.documentElement.lang);
  data.append('_page', location.href);
  for (const [k, v] of Object.entries(extra)) data.append(k, v);
  if (!endpoint) {
    // No form service configured: open a pre-filled email to the company inbox
    const to = document.body.dataset.email || '';
    const ar = document.documentElement.lang === 'ar';
    const subjects: Record<string, [string, string]> = {
      quote: ['طلب عرض سعر', 'Quote request'],
      contact: ['رسالة من الموقع', 'Website message'],
      careers: ['طلب توظيف', 'Job application'],
      newsletter: ['اشتراك في النشرة البريدية', 'Newsletter subscription'],
    };
    const [sa, se] = subjects[form.dataset.form || ''] || ['رسالة من الموقع', 'Website message'];
    const lines: string[] = [];
    for (const [k, v] of data.entries()) {
      if (k.startsWith('_') || v instanceof File || !String(v).trim()) continue;
      const label = form.querySelector(`[name="${k}"]`)?.closest('.field')?.querySelector('label, .label')?.textContent?.trim() || k;
      lines.push(`${label}: ${v}`);
    }
    if (extra.reference) lines.unshift(`${ar ? 'رقم الطلب' : 'Reference'}: ${extra.reference}`);
    if (form.querySelector('input[type=file]')) lines.push('', ar ? '(يرجى إرفاق الملفات في هذه الرسالة)' : '(Please attach your files to this email)');
    const subject = `${ar ? sa : se}${extra.reference ? ` — ${extra.reference}` : ''}`;
    window.location.href = `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(lines.join('\n'))}`;
    return true;
  }
  const res = await fetch(endpoint, { method: 'POST', body: data, headers: { Accept: 'application/json' } });
  return res.ok;
}

/** Generic handler for simple forms marked with data-form and a sibling [data-msg] */
export function bindSimpleForms() {
  document.querySelectorAll<HTMLFormElement>('form[data-form]:not([data-custom])').forEach((form) => {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      if (!form.reportValidity()) return;
      const btn = form.querySelector<HTMLButtonElement>('[type=submit]');
      const msg = form.parentElement?.querySelector<HTMLElement>('[data-msg]');
      const label = btn?.textContent;
      if (btn) { btn.disabled = true; btn.textContent = document.body.dataset.sending || '...'; }
      try {
        const ok = await submitForm(form);
        if (!ok) throw new Error('bad status');
        if (msg) { msg.textContent = form.dataset.success || ''; msg.className = msg.className.replace(/alert-error/, '') + ' ok'; msg.hidden = false; }
        form.reset();
      } catch {
        if (msg) { msg.textContent = document.body.dataset.formError || 'Error'; msg.hidden = false; msg.classList.add('alert-error'); }
      } finally {
        if (btn) { btn.disabled = false; btn.textContent = label ?? ''; }
      }
    });
  });
}
