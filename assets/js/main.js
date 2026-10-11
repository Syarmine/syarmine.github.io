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

  // ---- Case study pop-ups ----
  // Cards open a <dialog>; Esc, the close button or a click on the backdrop
  // closes it and returns focus to the card.
  var opener = null;
  Array.prototype.forEach.call(document.querySelectorAll('[data-case-open]'), function (btn) {
    btn.addEventListener('click', function () {
      var dlg = document.getElementById(btn.getAttribute('data-case-open'));
      if (!dlg || typeof dlg.showModal !== 'function') return;
      opener = btn;
      dlg.showModal();
      document.documentElement.style.overflow = 'hidden';
    });
  });
  Array.prototype.forEach.call(document.querySelectorAll('dialog.case'), function (dlg) {
    dlg.addEventListener('click', function (e) {
      if (e.target === dlg || e.target.closest('[data-case-close]')) dlg.close();
    });
    dlg.addEventListener('close', function () {
      document.documentElement.style.overflow = '';
      if (opener) opener.focus();
    });
  });

  // ---- Career timeline ----
  // The line fills as the timeline scrolls through the middle of the screen,
  // and each role lights up once the line reaches it.
  var timeline = document.querySelector('[data-timeline]');
  if (timeline) {
    var fill = timeline.querySelector('[data-timeline-fill]');
    var tItems = timeline.querySelectorAll('[data-timeline-item]');
    var tTicking = false;
    var updateTimeline = function () {
      tTicking = false;
      var rect = timeline.getBoundingClientRect();
      var anchor = window.innerHeight * 0.6;
      var progress = Math.min(1, Math.max(0, (anchor - rect.top) / rect.height));
      if (fill) fill.style.setProperty('--progress', (progress * 100).toFixed(1) + '%');
      Array.prototype.forEach.call(tItems, function (item) {
        var top = item.getBoundingClientRect().top + 22;
        item.classList.toggle('is-reached', top <= anchor);
      });
    };
    var scheduleTimeline = function () {
      if (!tTicking) { tTicking = true; window.requestAnimationFrame(updateTimeline); }
    };
    window.addEventListener('scroll', scheduleTimeline, { passive: true });
    window.addEventListener('resize', scheduleTimeline);
    // Expanding a role or showing earlier roles changes the timeline's height.
    timeline.addEventListener('toggle', scheduleTimeline, true);
    var moreBtn = timeline.querySelector('[data-timeline-toggle]');
    if (moreBtn) {
      moreBtn.addEventListener('click', function () {
        var open = timeline.classList.toggle('show-all');
        moreBtn.setAttribute('aria-expanded', String(open));
        scheduleTimeline();
      });
    }
    updateTimeline();
  }

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
