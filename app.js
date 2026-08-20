/* =========================================================
   CONFIGURACIÓN — editá solo esto
   ========================================================= */
const CONFIG = {
  whatsapp: '5492302354724',            // sin + ni espacios
  // Fotos del slider del header. Agregá o sacá las que quieras.
  // "pos" (opcional) es el object-position del recorte, por si una foto
  // necesita mostrar más de un costado (ej: la cara queda a un lado).
  fotos: [
    { src: 'assets/hero-2.jpg', alt: 'Romina entrenando' },
    { src: 'assets/hero-3.jpg', alt: 'Romina entrenando', pos: '78% center' },
    { src: 'assets/hero-4.jpg', alt: 'Romina entrenando' },
    { src: 'assets/hero-5.jpg', alt: 'Romina entrenando' }
  ],
  slideSegundos: 4,                     // cada cuánto cambia la foto
  pagos: {
    basico: 'https://mpago.la/2PDgEeE',
    battle: 'https://mpago.la/28miEBH',   // se muestra como "Home Pro"
    pro:    'https://mpago.la/2D7r1RD'    // se muestra como "Battle Fox Online"
  }
};

/* =========================================================
   TEXTOS (ES / EN)
   ========================================================= */
const I18N = {
  es: {
    navPlans: 'Planes', navAbout: 'Sobre Romina', navTesti: 'Testimonios', navCta: 'Comprar plan',
    heroEyebrow: 'Entrenamiento online · Rutinas por WhatsApp y email',
    heroTitle1: 'Entrená donde', heroTitle2: 'estés.',
    heroSub: 'Tres planes de entrenamiento diseñados por Romina Garino.',
    heroCta: 'Ver planes', heroCta2: 'Conocé a Romina',
    plansTitle: 'Elegí tu plan',
    perMonth: '/ mes', buy: 'Suscribirme', mpNote: 'Pago seguro vía Mercado Pago',
    deliveryNote: 'Todas las rutinas se envían por WhatsApp o email dentro de las 24 h de la compra.',
    aboutEyebrow: 'La marca', statYears: 'Años entrenando', statAthletes: 'Alumnos', statPlans: 'Planes online',
    aboutP1: 'Coach de crossfit, crosstraining y fitness funcional. Romina diseña cada rutina para que progreses con el material que tengas a mano, sin excusas. Más de 10 años de experiencia como entrenadora.',
    aboutOwnerOf: 'dueña de', aboutAnd: 'y',
    testiTitle: 'Lo que dicen',
    footTitle: '¿Dudas antes de empezar?',
    footSub: 'Escribinos por WhatsApp y te ayudamos a elegir el plan según tu material y tu nivel.',
    badgePopular: 'Más elegido',
    planes: [
      { id: 'basico', name: 'Home Básico', price: 40000, desc: 'Entrená con lo que ya tenés en tu casa.',
        features: ['Rutinas semanales por WhatsApp / email', 'Sin equipamiento obligatorio', 'Lista de material sugerido (bandas, colchoneta, soga) — lo comprás aparte', 'Ajustes según tu progreso'] },
      { id: 'battle', name: 'Home Pro', price: 50000, desc: 'El programa online con comunidad y desafíos.', badge: 'popular',
        features: ['Entrenamiento online 3 días', 'Ranking online', 'Comunidad', 'Seguimos tus objetivos'] },
      { id: 'pro', name: 'Battle Fox Online', price: 60000, desc: 'El nivel más alto de acompañamiento, 100% online.', dark: true,
        features: ['Seguimiento personalizado', 'Chat personal prioritario', 'Entrenamiento premium online'] }
    ],
    testimonios: [
      { name: 'Virginia', plan: 'Home Pro', text: 'Los cambios se notan mucho más rápido.' },
      { name: 'Mauro', plan: 'Battle Fox Online', text: 'Empecé desde cero y hoy entreno 4 veces por semana. Romina responde siempre.' },
      { name: 'Marian', plan: 'Home Básico', text: 'Encontré la manera de entrenar en casa y no perder el ritmo.' }
    ]
  },
  en: {
    navPlans: 'Plans', navAbout: 'About Romina', navTesti: 'Testimonials', navCta: 'Buy a plan',
    heroEyebrow: 'Online training · Routines via WhatsApp & email',
    heroTitle1: 'Train wherever', heroTitle2: 'you are.',
    heroSub: 'Three training plans designed by Romina Garino.',
    heroCta: 'See plans', heroCta2: 'Meet Romina',
    plansTitle: 'Pick your plan',
    perMonth: '/ mo', buy: 'Subscribe', mpNote: 'Secure checkout via Mercado Pago',
    deliveryNote: 'All routines are delivered via WhatsApp or email within 24 h of purchase.',
    aboutEyebrow: 'The brand', statYears: 'Years coaching', statAthletes: 'Athletes', statPlans: 'Online plans',
    aboutP1: 'CrossFit, cross-training, and functional fitness coach. Romina designs every routine so you can progress with whatever gear you have — no excuses. Over 10 years of experience as a trainer.',
    aboutOwnerOf: 'owner of', aboutAnd: 'and',
    testiTitle: 'What they say',
    footTitle: 'Questions before starting?',
    footSub: 'Message us on WhatsApp and we’ll help you pick a plan based on your gear and level.',
    badgePopular: 'Most popular',
    planes: [
      { id: 'basico', name: 'Home Básico', price: 40000, desc: 'Train with what you already have at home.',
        features: ['Weekly routines via WhatsApp / email', 'No mandatory equipment', 'Suggested gear list (bands, mat, rope) — purchased separately', 'Adjustments as you progress'] },
      { id: 'battle', name: 'Home Pro', price: 50000, desc: 'The online program with community and challenges.', badge: 'popular',
        features: ['Online training, 3 days a week', 'Online ranking', 'Community', 'We track your goals'] },
      { id: 'pro', name: 'Battle Fox Online', price: 60000, desc: 'Our highest level of coaching, fully online.', dark: true,
        features: ['Personalized follow-up', 'Priority personal chat', 'Premium online training'] }
    ],
    testimonios: [
      { name: 'Virginia', plan: 'Home Pro', text: 'The results show up so much faster.' },
      { name: 'Mauro', plan: 'Battle Fox Online', text: 'I started from zero and now train 4 times a week. Romina always answers.' },
      { name: 'Marian', plan: 'Home Básico', text: 'I found a way to train at home without losing momentum.' }
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

/* =========================================================
   SLIDER DEL HEADER
   ========================================================= */
(function slider() {
  const frame = document.getElementById('slider-frame');
  const dots  = document.getElementById('slider-dots');
  const fotos = CONFIG.fotos;
  if (!frame || !fotos.length) return;

  fotos.forEach((f, i) => {
    const img = document.createElement('img');
    img.src = f.src;
    img.alt = f.alt || '';
    if (f.pos) img.style.objectPosition = f.pos;
    if (i === 0) img.className = 'is-active';
    frame.appendChild(img);

    const dot = document.createElement('button');
    dot.type = 'button';
    dot.setAttribute('aria-label', 'Foto ' + (i + 1));
    if (i === 0) dot.className = 'is-active';
    dot.addEventListener('click', () => go(i));
    dots.appendChild(dot);
  });

  const imgs = frame.querySelectorAll('img');
  let index = 0, timer;

  function paint() {
    imgs.forEach((el, i) => el.classList.toggle('is-active', i === index));
    dots.querySelectorAll('button').forEach((el, i) => el.classList.toggle('is-active', i === index));
  }
  function go(i) { index = (i + fotos.length) % fotos.length; paint(); start(); }
  function start() { clearInterval(timer); timer = setInterval(() => go(index + 1), CONFIG.slideSegundos * 1000); }

  document.getElementById('slider-prev').addEventListener('click', () => go(index - 1));
  document.getElementById('slider-next').addEventListener('click', () => go(index + 1));
  start();
})();

document.getElementById('lang-toggle').addEventListener('click', () => {
  lang = lang === 'en' ? 'es' : 'en';
  render();
});

render();
