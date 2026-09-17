/**
 * Homepage motion: scroll reveal, hero settle, and photo parallax.
 *
 * Three rules this file keeps to:
 *   1. Content is visible by default. The CSS only hides `.reveal` elements
 *      once this script adds `.reveal-ready`, so a broken or blocked script
 *      leaves a fully readable page.
 *   2. Nothing here is a prerequisite for reading anything. Every effect is
 *      decorative and is skipped entirely under `prefers-reduced-motion`.
 *   3. Background tabs don't run rAF, so the reveal has timer and
 *      `visibilitychange` fallbacks — no element is left hidden.
 */
(function () {
  'use strict';

  var reduceMotion =
    window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  var hero = document.querySelector('.hp-hero');

  /* --- Hero image settle: 1.08 -> 1, once, on load. --------------------- */
  if (hero && !reduceMotion) {
    requestAnimationFrame(function () {
      requestAnimationFrame(function () {
        hero.classList.add('is-settled');
      });
    });
  }

  /* --- Scroll reveal ----------------------------------------------------- */
  var revealEls = [].slice.call(document.querySelectorAll('.reveal, .reveal-media'));

  if (revealEls.length && !reduceMotion && 'IntersectionObserver' in window) {
    document.documentElement.classList.add('reveal-ready');

    var show = function (el) {
      el.classList.add('is-in');
    };

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            show(entry.target);
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.05 }
    );

    revealEls.forEach(function (el) {
      observer.observe(el);
    });

    // Anything already on screen shouldn't wait for the observer to settle.
    var showInView = function () {
      revealEls.forEach(function (el) {
        if (el.classList.contains('is-in')) return;
        if (el.getBoundingClientRect().top < window.innerHeight) show(el);
      });
    };

    setTimeout(showInView, 80);
    document.addEventListener('visibilitychange', showInView);
    window.addEventListener('load', showInView);
  }

  /* --- Nav: transparent while the hero photograph is at the top ---------- */
  var nav = document.getElementById('main-navbar');

  if (nav && hero) {
    var syncNav = function () {
      nav.classList.toggle('is-top', window.scrollY < 24);
    };

    syncNav();
    window.addEventListener('scroll', syncNav, { passive: true });
  }

  /* --- Cover types: the sticky photo follows whichever item is centred ---- */
  var story = document.querySelector('.hp-story');

  if (story) {
    var items = [].slice.call(story.querySelectorAll('.hp-story__item'));
    var frames = [].slice.call(story.querySelectorAll('.hp-story__media img'));
    var current = -1;

    var activate = function (index) {
      if (index === current) return;
      current = index;
      items.forEach(function (el, i) { el.classList.toggle('is-active', i === index); });
      frames.forEach(function (el, i) { el.classList.toggle('is-active', i === index); });
    };

    // Whichever item's centre is nearest the middle of the viewport is current.
    // Measured on every scroll frame (not via IntersectionObserver) so a fast
    // jump — keyboard End, a dragged scrollbar — can't leave the photo stale.
    var pick = function () {
      var box = story.getBoundingClientRect();
      if (box.bottom < 0 || box.top > window.innerHeight) return;

      var mid = window.innerHeight / 2;
      var best = 0;
      var bestDistance = Infinity;

      items.forEach(function (el, i) {
        var rect = el.getBoundingClientRect();
        var distance = Math.abs(rect.top + rect.height / 2 - mid);
        if (distance < bestDistance) { bestDistance = distance; best = i; }
      });

      activate(best);
    };

    var storyTicking = false;
    var onStoryScroll = function () {
      if (storyTicking) return;
      storyTicking = true;
      requestAnimationFrame(function () { pick(); storyTicking = false; });
    };

    activate(0);
    pick();
    window.addEventListener('scroll', onStoryScroll, { passive: true });
    window.addEventListener('resize', onStoryScroll);
  }

  /* --- Parallax on the full-bleed photographs ---------------------------- */
  var layers = [].slice.call(document.querySelectorAll('[data-parallax]'));

  if (layers.length && !reduceMotion) {
    var ticking = false;

    var place = function () {
      var viewport = window.innerHeight;

      layers.forEach(function (layer) {
        var box = layer.parentNode.getBoundingClientRect();
        if (box.bottom < -200 || box.top > viewport + 200) return;

        // -1 when the frame sits below the viewport, +1 when it is above it.
        var progress = (viewport / 2 - (box.top + box.height / 2)) / (viewport / 2 + box.height / 2);
        var travel = parseFloat(layer.getAttribute('data-parallax')) || 0;

        layer.style.transform = 'translate3d(0,' + (progress * travel).toFixed(2) + 'px,0)';
      });

      ticking = false;
    };

    var onScroll = function () {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(place);
    };

    place();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
  }
})();
