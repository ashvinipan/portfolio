/**
 * Accessible command palette (⌘K / Ctrl-K).
 * Actions are read from `[data-cmd-item]` elements rendered server-side,
 * so the palette works as plain links even before this hydrates.
 */

interface PaletteRefs {
  root: HTMLElement;
  input: HTMLInputElement;
  list: HTMLElement;
  items: HTMLElement[];
  empty: HTMLElement;
}

function getRefs(): PaletteRefs | null {
  const root = document.getElementById('command-palette');
  const input = document.getElementById('cmd-input') as HTMLInputElement | null;
  const list = document.getElementById('cmd-list');
  const empty = document.getElementById('cmd-empty');
  if (!root || !input || !list || !empty) return null;
  const items = Array.from(list.querySelectorAll<HTMLElement>('[data-cmd-item]'));
  return { root, input, list, items, empty };
}

function setupCommandPalette() {
  const refs = getRefs();
  if (!refs) return;
  const { root, input, items, empty } = refs;

  let open = false;
  let activeIndex = 0;
  let lastFocused: HTMLElement | null = null;

  const visibleItems = () =>
    items.filter((i) => !i.hasAttribute('hidden'));

  const setActive = (idx: number) => {
    const vis = visibleItems();
    if (!vis.length) return;
    activeIndex = (idx + vis.length) % vis.length;
    vis.forEach((el, i) => {
      const on = i === activeIndex;
      el.classList.toggle('is-active', on);
      if (on) el.scrollIntoView({ block: 'nearest' });
    });
  };

  const filter = () => {
    const q = input.value.trim().toLowerCase();
    let count = 0;
    items.forEach((el) => {
      const kw = (el.dataset.keywords ?? el.textContent ?? '').toLowerCase();
      const match = !q || kw.includes(q);
      el.toggleAttribute('hidden', !match);
      if (match) count++;
    });
    empty.toggleAttribute('hidden', count > 0);
    activeIndex = 0;
    setActive(0);
  };

  const openPalette = () => {
    if (open) return;
    open = true;
    lastFocused = document.activeElement as HTMLElement;
    root.removeAttribute('hidden');
    document.body.style.overflow = 'hidden';
    requestAnimationFrame(() => {
      root.classList.add('is-open');
      input.value = '';
      filter();
      input.focus();
    });
  };

  const closePalette = () => {
    if (!open) return;
    open = false;
    root.classList.remove('is-open');
    document.body.style.overflow = '';
    window.setTimeout(() => root.setAttribute('hidden', ''), 180);
    lastFocused?.focus();
  };

  const runItem = (el: HTMLElement) => {
    const action = el.dataset.action;
    const href = el.dataset.href;
    closePalette();
    if (action === 'toggle-theme') {
      const current = document.documentElement.getAttribute('data-theme');
      const next = current === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', next);
      try {
        localStorage.setItem('theme', next);
      } catch {
        /* ignore */
      }
      return;
    }
    if (href) {
      if (href.startsWith('http')) window.open(href, '_blank', 'noopener');
      else window.location.assign(href);
    }
  };

  // global open shortcut
  document.addEventListener('keydown', (e) => {
    if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
      e.preventDefault();
      open ? closePalette() : openPalette();
    }
    if (e.key === '/' && !open && !/input|textarea/i.test((e.target as HTMLElement)?.tagName)) {
      e.preventDefault();
      openPalette();
    }
  });

  // triggers rendered in the UI
  document.querySelectorAll('[data-cmd-open]').forEach((btn) =>
    btn.addEventListener('click', openPalette)
  );

  root.addEventListener('click', (e) => {
    if (e.target === root || (e.target as HTMLElement).dataset.cmdBackdrop !== undefined) {
      closePalette();
    }
  });

  input.addEventListener('input', filter);

  root.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      e.preventDefault();
      closePalette();
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      setActive(activeIndex + 1);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setActive(activeIndex - 1);
    } else if (e.key === 'Enter') {
      e.preventDefault();
      const vis = visibleItems();
      if (vis[activeIndex]) runItem(vis[activeIndex]);
    }
  });

  items.forEach((el) => {
    el.addEventListener('click', (e) => {
      e.preventDefault();
      runItem(el);
    });
    el.addEventListener('mousemove', () => {
      const idx = visibleItems().indexOf(el);
      if (idx >= 0) setActive(idx);
    });
  });
}

document.addEventListener('astro:page-load', setupCommandPalette);
if (document.readyState !== 'loading') setupCommandPalette();
else document.addEventListener('DOMContentLoaded', setupCommandPalette);
