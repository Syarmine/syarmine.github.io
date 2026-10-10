(function () {
  var root = document.documentElement;

  // ---- Theme toggle ----
  var toggle = document.querySelector('[data-theme-toggle]');

  function currentTheme() {
    return root.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
  }

  if (toggle) {
    toggle.addEventListener('click', function () {
      var next = currentTheme() === 'dark' ? 'light' : 'dark';
      if (next === 'dark') root.setAttribute('data-theme', 'dark');
      else root.removeAttribute('data-theme');
      try { localStorage.setItem('theme', next); } catch (e) {}
    });
  }

  // ---- Mobile menu ----
  var menuBtn = document.querySelector('[data-menu-toggle]');
  var menu = document.getElementById('mobile-nav');
  if (menuBtn && menu) {
    menuBtn.addEventListener('click', function () {
      var open = menu.hasAttribute('hidden');
      menu.toggleAttribute('hidden', !open);
      menuBtn.setAttribute('aria-expanded', String(open));
    });
    menu.addEventListener('click', function (e) {
      if (e.target.tagName === 'A') {
        menu.setAttribute('hidden', '');
        menuBtn.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // ---- Carousels ----
  // Prev/next buttons scroll one card at a time and disable at either end.
  function setupCarousel(track) {
    var prev = document.querySelector('[data-carousel-prev="' + track.id + '"]');
    var next = document.querySelector('[data-carousel-next="' + track.id + '"]');
    function step() {
      var card = track.firstElementChild;
      if (!card) return track.clientWidth;
      var gap = parseFloat(getComputedStyle(track).columnGap) || 0;
      return card.getBoundingClientRect().width + gap;
    }
    function update() {
      var max = track.scrollWidth - track.clientWidth - 2;
      if (prev) prev.disabled = track.scrollLeft <= 2;
      if (next) next.disabled = track.scrollLeft >= max;
    }
    if (prev) prev.addEventListener('click', function () { track.scrollBy({ left: -step(), behavior: 'smooth' }); });
    if (next) next.addEventListener('click', function () { track.scrollBy({ left: step(), behavior: 'smooth' }); });
    track.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    update();
  }
  Array.prototype.forEach.call(document.querySelectorAll('.carousel[id]'), setupCarousel);

  // ---- Reveal on scroll ----
  // Reveal anything that has entered (or already passed) the viewport, so
  // fast jumps via anchor links never leave content hidden above the fold.
  var pending = Array.prototype.slice.call(document.querySelectorAll('.reveal'));
  pending.forEach(function (el, i) { el.style.transitionDelay = (i % 4) * 60 + 'ms'; });
  var ticking = false;

  function reveal() {
    ticking = false;
    var limit = window.innerHeight * 0.92;
    pending = pending.filter(function (el) {
      if (el.getBoundingClientRect().top < limit) {
        el.classList.add('is-visible');
        return false;
      }
      return true;
    });
    if (!pending.length) {
      window.removeEventListener('scroll', schedule);
      window.removeEventListener('resize', schedule);
    }
  }
  function schedule() {
    if (!ticking) { ticking = true; window.requestAnimationFrame(reveal); }
  }
  window.addEventListener('scroll', schedule, { passive: true });
  window.addEventListener('resize', schedule);
  reveal();
})();
