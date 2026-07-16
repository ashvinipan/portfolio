/* No-flash theme bootstrap. Runs render-blocking before first paint. */
(function () {
  try {
    var stored = localStorage.getItem('theme');
    var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    var theme = stored || (prefersDark ? 'dark' : 'light');
    document.documentElement.setAttribute('data-theme', theme);
  } catch (e) {
    document.documentElement.setAttribute('data-theme', 'light');
  }
  document.documentElement.classList.remove('js-off');
  document.documentElement.classList.add('js-on');
})();
