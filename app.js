/* =========================================================
   CONFIGURACIÓN — editá solo esto
   ========================================================= */
const CONFIG = {
  whatsapp: '5492302354724',            // sin + ni espacios
  pagos: {
    basico: '#',                        // pegá acá el link de Mercado Pago
    battle: '#',
    pro:    '#'
  },
  transferencia: {
    cvu: '0000003100052400042959',
    alias: 'fox.cross.fun',
    titular: 'Romina Garino'
  }
};

/* =========================================================
   TEXTOS (ES / EN)
   ========================================================= */
const I18N = {
  es: {
    navPlans: 'Planes', navAbout: 'Sobre Romi', navTesti: 'Testimonios', navCta: 'Comprar plan',
    heroEyebrow: 'Entrenamiento online · Rutinas por WhatsApp y email',
    heroTitle1: 'Entrená donde', heroTitle2: 'estés.',
    heroSub: 'Tres planes de entrenamiento diseñados por Romi Garino.',
    heroCta: 'Ver planes', heroCta2: 'Conocé a Romi',
    plansTitle: 'Elegí tu plan',
    plansSub: 'El precio varía según el material: entrená con lo que tenés, sumate al programa online o recibí todo el equipamiento en casa.',
    perMonth: '/ mes', buy: 'Suscribirme', mpNote: 'Pago seguro vía Mercado Pago',
    deliveryNote: 'Todas las rutinas se envían por WhatsApp o email dentro de las 24 h de la compra.',
    transferTitle: 'Transferencia bancaria',
    transferSub: '¿Preferís transferir? Usá estos datos y avisanos por WhatsApp para coordinar tu plan.',
    transferCvuLabel: 'CVU', transferAliasLabel: 'Alias', transferTitularLabel: 'Titular',
    transferCopy: 'Copiar', transferCopied: 'Copiado ✓',
    aboutEyebrow: 'La marca', statYears: 'Años entrenando', statAthletes: 'Alumnos', statPlans: 'Planes online',
    aboutP1: 'Coach de cross training y fitness funcional. Romi diseña cada rutina para que progreses con el material que tengas a mano, sin excusas y sin gimnasio.',
    testiTitle: 'Lo que dicen',
    footTitle: '¿Dudas antes de empezar?',
    footSub: 'Escribinos por WhatsApp y te ayudamos a elegir el plan según tu material y tu nivel.',
    ticker: 'Sin excusas · Entrená hoy · Home Básico $40.000 · Battle Fox $50.000 · Home Pro $60.000 · ',
    badgePopular: 'Más elegido',
    planes: [
      { id: 'basico', name: 'Home Básico', price: 40000, desc: 'Entrená con lo que ya tenés en tu casa.',
        features: ['Rutinas semanales por WhatsApp / email', 'Sin equipamiento obligatorio', 'Lista de material sugerido (bandas, colchoneta, soga) — lo comprás aparte', 'Ajustes según tu progreso'] },
      { id: 'battle', name: 'Battle Fox Online', price: 50000, desc: 'El programa online con comunidad y desafíos.', badge: 'popular',
        features: ['Entrenamiento online 3 días', 'Ranking online', 'Comunidad', 'Seguimos tus objetivos'] },
      { id: 'pro', name: 'Home Pro', price: 60000, desc: 'El nivel más alto de acompañamiento, 100% online.', dark: true,
        features: ['Seguimiento personalizado', 'Chat personal prioritario', 'Entrenamiento premium online'] }
    ],
    testimonios: [
      { name: 'Virginia', plan: 'Home Pro', text: 'Los cambios se notan mucho más rápido.' },
      { name: 'Mauro', plan: 'Battle Fox Online', text: 'Encontré la manera de entrenar en casa y no perder el ritmo.' },
      { name: 'Marian', plan: 'Home Básico', text: 'Empecé desde cero y hoy entreno 4 veces por semana. Romi responde siempre.' }
    ]
  },
  en: {
    navPlans: 'Plans', navAbout: 'About Romi', navTesti: 'Testimonials', navCta: 'Buy a plan',
    heroEyebrow: 'Online training · Routines via WhatsApp & email',
    heroTitle1: 'Train wherever', heroTitle2: 'you are.',
    heroSub: 'Three training plans designed by Romi Garino.',
    heroCta: 'See plans', heroCta2: 'Meet Romi',
    plansTitle: 'Pick your plan',
    plansSub: 'Pricing varies by equipment: train with what you have, join the online program, or get all the gear delivered home.',
    perMonth: '/ mo', buy: 'Subscribe', mpNote: 'Secure checkout via Mercado Pago',
    deliveryNote: 'All routines are delivered via WhatsApp or email within 24 h of purchase.',
    transferTitle: 'Bank transfer',
    transferSub: 'Prefer to transfer? Use these details and message us on WhatsApp to confirm your plan.',
    transferCvuLabel: 'CVU', transferAliasLabel: 'Alias', transferTitularLabel: 'Account holder',
    transferCopy: 'Copy', transferCopied: 'Copied ✓',
    aboutEyebrow: 'The brand', statYears: 'Years coaching', statAthletes: 'Athletes', statPlans: 'Online plans',
    aboutP1: 'Cross-training and functional fitness coach. Romi designs every routine so you progress with whatever gear you have — no excuses, no gym required.',
    testiTitle: 'What they say',
    footTitle: 'Questions before starting?',
    footSub: 'Message us on WhatsApp and we’ll help you pick a plan based on your gear and level.',
    ticker: 'No excuses · Train today · Home Básico $40.000 · Battle Fox $50.000 · Home Pro $60.000 · ',
    badgePopular: 'Most popular',
    planes: [
      { id: 'basico', name: 'Home Básico', price: 40000, desc: 'Train with what you already have at home.',
        features: ['Weekly routines via WhatsApp / email', 'No mandatory equipment', 'Suggested gear list (bands, mat, rope) — purchased separately', 'Adjustments as you progress'] },
      { id: 'battle', name: 'Battle Fox Online', price: 50000, desc: 'The online program with community and challenges.', badge: 'popular',
        features: ['Online training, 3 days a week', 'Online ranking', 'Community', 'We track your goals'] },
      { id: 'pro', name: 'Home Pro', price: 60000, desc: 'Our highest level of coaching, fully online.', dark: true,
        features: ['Personalized follow-up', 'Priority personal chat', 'Premium online training'] }
    ],
    testimonios: [
      { name: 'Virginia', plan: 'Home Pro', text: 'The results show up so much faster.' },
      { name: 'Mauro', plan: 'Battle Fox Online', text: 'I found a way to train at home without losing momentum.' },
      { name: 'Marian', plan: 'Home Básico', text: 'I started from zero and now train 4 times a week. Romi always answers.' }
    ]
  }
};

/* =========================================================
   RENDER
   ========================================================= */
let lang = 'es';

function render() {
  const t = I18N[lang];
  document.documentElement.lang = lang;

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (t[key]) el.textContent = t[key];
  });

  document.querySelectorAll('.ticker-text').forEach(el => { el.textContent = t.ticker.repeat(3); });
  document.getElementById('lang-toggle').textContent = lang === 'en' ? 'ES' : 'EN';

  const wa = 'https://wa.me/' + CONFIG.whatsapp;
  document.querySelectorAll('[data-wa]').forEach(a => { a.href = wa; });

  document.getElementById('plans').innerHTML = t.planes.map(p => {
    const badge = p.badge === 'popular' ? t.badgePopular : '';
    return `
    <article class="plan${p.dark ? ' dark' : ''}">
      <span class="plan-badge${badge ? '' : ' empty'}">${badge || '—'}</span>
      <h3 class="plan-name">${p.name}</h3>
      <p class="plan-desc">${p.desc}</p>
      <div class="plan-price"><strong>$${p.price.toLocaleString('es-AR')}</strong><span>ARS ${t.perMonth}</span></div>
      <ul class="plan-features">${p.features.map(f => `<li>${f}</li>`).join('')}</ul>
      <a class="plan-cta" href="${CONFIG.pagos[p.id]}" target="_blank" rel="noopener">${t.buy}</a>
      <p class="plan-mp">${t.mpNote}</p>
    </article>`;
  }).join('');

  document.getElementById('testimonials').innerHTML = t.testimonios.map(q => `
    <figure class="testimonial">
      <blockquote>“${q.text}”</blockquote>
      <figcaption>
        <span class="avatar">${q.name.charAt(0)}</span>
        <span class="who"><strong>${q.name}</strong><span>${q.plan}</span></span>
      </figcaption>
    </figure>`).join('');
}

document.getElementById('lang-toggle').addEventListener('click', () => {
  lang = lang === 'en' ? 'es' : 'en';
  render();
});

document.getElementById('transfer-cvu').textContent = CONFIG.transferencia.cvu;
document.getElementById('transfer-alias').textContent = CONFIG.transferencia.alias;
document.getElementById('transfer-titular').textContent = CONFIG.transferencia.titular;

document.querySelectorAll('.transfer-copy').forEach(btn => {
  btn.addEventListener('click', () => {
    const text = document.getElementById(btn.dataset.copyTarget).textContent;
    navigator.clipboard.writeText(text).then(() => {
      const original = btn.textContent;
      btn.textContent = I18N[lang].transferCopied;
      setTimeout(() => { btn.textContent = original; }, 1500);
    });
  });
});

render();
