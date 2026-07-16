/**
 * Progressive enhancements that run after load:
 *  - scroll-reveal via IntersectionObserver
 *  - top scroll-progress bar
 *  - theme toggle wiring
 *  - copy-email buttons
 *  - back-to-top visibility
 *  - animated counters
 *
 * Written to survive Astro view transitions by re-binding on `astro:page-load`.
 */

function setupReveal() {
  const els = document.querySelectorAll<HTMLElement>('[data-reveal]:not(.is-visible)');
  if (!('IntersectionObserver' in window)) {
    els.forEach((el) => el.classList.add('is-visible'));
    return;
  }
  const io = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const el = entry.target as HTMLElement;
          const delay = el.dataset.revealDelay;
          if (delay) el.style.transitionDelay = `${delay}ms`;
          el.classList.add('is-visible');
          obs.unobserve(el);
        }
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
  );
  els.forEach((el) => io.observe(el));
}

function setupScrollProgress() {
  const bar = document.getElementById('scroll-progress');
  if (!bar) return;
  let ticking = false;
  const update = () => {
    const h = document.documentElement;
    const max = h.scrollHeight - h.clientHeight;
    const pct = max > 0 ? (h.scrollTop / max) * 100 : 0;
    bar.style.transform = `scaleX(${pct / 100})`;
    ticking = false;
  };
  const onScroll = () => {
    if (!ticking) {
      ticking = true;
      requestAnimationFrame(update);
    }
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  update();
}

function setupThemeToggle() {
  const toggles = document.querySelectorAll<HTMLButtonElement>('[data-theme-toggle]');
  const apply = (theme: string) => {
    document.documentElement.setAttribute('data-theme', theme);
    try {
      localStorage.setItem('theme', theme);
    } catch {
      /* ignore */
    }
  };
  toggles.forEach((btn) => {
    if (btn.dataset.wired) return;
    btn.dataset.wired = '1';
    btn.addEventListener('click', () => {
      const current = document.documentElement.getAttribute('data-theme');
      apply(current === 'dark' ? 'light' : 'dark');
    });
  });
}

let toastTimer: number | undefined;
function showToast(message: string) {
  let toast = document.getElementById('toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'toast';
    toast.setAttribute('role', 'status');
    toast.setAttribute('aria-live', 'polite');
    document.body.appendChild(toast);
  }
  toast.textContent = message;
  // force reflow so re-triggering restarts the transition
  void toast.offsetWidth;
  toast.classList.add('is-shown');
  window.clearTimeout(toastTimer);
  toastTimer = window.setTimeout(() => toast?.classList.remove('is-shown'), 2400);
}

function setupCopyButtons() {
  document.querySelectorAll<HTMLButtonElement>('[data-copy]').forEach((btn) => {
    if (btn.dataset.wired) return;
    btn.dataset.wired = '1';
    btn.addEventListener('click', async () => {
      const value = btn.dataset.copy ?? '';
      try {
        await navigator.clipboard.writeText(value);
        btn.classList.add('copied');
        const label = btn.querySelector('[data-copy-label]');
        const prev = label?.textContent;
        if (label) label.textContent = 'Copied!';
        showToast(`Copied ${value} to clipboard`);
        window.setTimeout(() => {
          btn.classList.remove('copied');
          if (label && prev) label.textContent = prev;
        }, 1600);
      } catch {
        /* clipboard unavailable */
      }
    });
  });
}

function setupBackToTop() {
  const btn = document.getElementById('back-to-top');
  if (!btn) return;
  const onScroll = () => {
    btn.classList.toggle('is-shown', window.scrollY > 600);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  btn.addEventListener('click', () =>
    window.scrollTo({ top: 0, behavior: 'smooth' })
  );
  onScroll();
}

function setupCounters() {
  const counters = document.querySelectorAll<HTMLElement>('[data-counter]');
  if (!counters.length) return;
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const run = (el: HTMLElement) => {
    const target = parseFloat(el.dataset.counter ?? '0');
    const suffix = el.dataset.counterSuffix ?? '';
    const decimals = (el.dataset.counter ?? '').includes('.') ? 1 : 0;
    if (reduce) {
      el.textContent = target.toFixed(decimals) + suffix;
      return;
    }
    const duration = 1400;
    let start: number | null = null;
    const step = (ts: number) => {
      if (start === null) start = ts;
      const p = Math.min((ts - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      el.textContent = (target * eased).toFixed(decimals) + suffix;
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  };
  const io = new IntersectionObserver((entries, obs) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        run(e.target as HTMLElement);
        obs.unobserve(e.target);
      }
    });
  });
  counters.forEach((c) => io.observe(c));
}

function setupHeroFade() {
  const hero = document.querySelector<HTMLElement>('[data-hero]');
  if (!hero) return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  let ticking = false;
  const update = () => {
    const y = window.scrollY;
    // fade + gentle lift over the first ~70% of the viewport height
    const range = window.innerHeight * 0.7;
    const p = Math.min(Math.max(y / range, 0), 1);
    hero.style.opacity = String(1 - p * 0.9);
    hero.style.transform = `translateY(${p * -24}px)`;
    ticking = false;
  };
  window.addEventListener(
    'scroll',
    () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    },
    { passive: true }
  );
  update();
}

function init() {
  setupReveal();
  setupScrollProgress();
  setupThemeToggle();
  setupCopyButtons();
  setupBackToTop();
  setupCounters();
  setupHeroFade();
}

document.addEventListener('astro:page-load', init);
// Fallback for the very first load if view transitions are off.
if (document.readyState !== 'loading') {
  init();
} else {
  document.addEventListener('DOMContentLoaded', init);
}
