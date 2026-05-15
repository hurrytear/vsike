/* ─── Custom Cursor ──────────────────────────────────────────────── */
(function () {
  const el = document.querySelector('.cursor');
  if (!el || !window.matchMedia('(hover: hover)').matches) return;

  let mx = window.innerWidth / 2, my = window.innerHeight / 2;
  let cx = mx, cy = my;

  document.addEventListener('mousemove', e => { mx = e.clientX; my = e.clientY; });
  document.addEventListener('mousedown', () => el.classList.add('click'));
  document.addEventListener('mouseup',   () => el.classList.remove('click'));
  document.addEventListener('mouseleave', () => { el.style.opacity = '0'; });
  document.addEventListener('mouseenter', () => { el.style.opacity = '1'; });

  const hoverTargets = 'a, button, .quicknav-item, .work-card, .idea-item, .pillar, .nav-grid-item';
  document.querySelectorAll(hoverTargets).forEach(t => {
    t.addEventListener('mouseenter', () => el.classList.add('hover'));
    t.addEventListener('mouseleave', () => el.classList.remove('hover'));
  });

  (function tick() {
    cx += (mx - cx) * 0.16;
    cy += (my - cy) * 0.16;
    el.style.left = cx + 'px';
    el.style.top  = cy + 'px';
    requestAnimationFrame(tick);
  })();
})();

/* ─── Navigation Scroll State ────────────────────────────────────── */
(function () {
  const nav = document.querySelector('.nav');
  if (!nav) return;
  const update = () => nav.classList.toggle('scrolled', window.scrollY > 40);
  update();
  window.addEventListener('scroll', update, { passive: true });
})();

/* ─── Mobile Nav ─────────────────────────────────────────────────── */
(function () {
  const toggle = document.querySelector('.nav-toggle');
  const mobile = document.querySelector('.nav-mobile');
  if (!toggle || !mobile) return;

  toggle.addEventListener('click', () => {
    const open = toggle.classList.toggle('open');
    mobile.classList.toggle('open', open);
    document.body.style.overflow = open ? 'hidden' : '';
  });

  mobile.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      toggle.classList.remove('open');
      mobile.classList.remove('open');
      document.body.style.overflow = '';
    });
  });
})();

/* ─── Active Nav Link ─────────────────────────────────────────────── */
(function () {
  const page = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(a => {
    if (a.getAttribute('href') === page) a.classList.add('active');
  });
})();

/* ─── Page Transition ─────────────────────────────────────────────── */
(function () {
  const curtain = document.querySelector('.page-transition');
  if (!curtain) return;

  curtain.classList.add('entering');
  curtain.addEventListener('animationend', () => {
    curtain.classList.remove('entering');
    curtain.style.transform = 'translateY(-100%)';
    triggerAboveFold();
  }, { once: true });

  document.addEventListener('click', e => {
    const link = e.target.closest('a[href]');
    if (!link) return;
    const href = link.getAttribute('href');
    if (!href || href.startsWith('#') || href.startsWith('mailto:') || href.startsWith('tel:') || href.startsWith('http')) return;
    e.preventDefault();
    curtain.style.transform = '';
    curtain.classList.add('leaving');
    curtain.addEventListener('animationend', () => {
      window.location = href;
    }, { once: true });
  });
})();

/* ─── Scroll Reveal ───────────────────────────────────────────────── */
(function () {
  const items = document.querySelectorAll('.reveal');
  if (!items.length) return;

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

  items.forEach(el => observer.observe(el));
})();

/* Trigger above-the-fold reveals after curtain clears */
function triggerAboveFold() {
  const aboveFold = document.querySelectorAll('.hero .reveal, .page-hero .reveal');
  aboveFold.forEach((el, i) => {
    setTimeout(() => el.classList.add('visible'), i * 140);
  });
}

/* ─── Contact Form (no-op submit) ────────────────────────────────── */
(function () {
  const form = document.querySelector('.contact-form');
  if (!form) return;
  form.addEventListener('submit', e => {
    e.preventDefault();
    const btn = form.querySelector('button[type=submit]');
    if (!btn) return;
    const original = btn.textContent;
    btn.textContent = 'Message sent →';
    btn.disabled = true;
    setTimeout(() => { btn.textContent = original; btn.disabled = false; }, 3000);
  });
})();
