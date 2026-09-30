// SeaStar Concrete Coatings — restrained motion + interactions
(function () {
  'use strict';

  // Year
  var y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();

  // Header solid state after hero
  var header = document.querySelector('.site-header');
  var onScroll = function () {
    if (window.scrollY > window.innerHeight * 0.75) header.classList.add('solid');
    else header.classList.remove('solid');
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // Reveal-on-scroll + line mask reveals
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) {
        e.target.classList.add('in');
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.18 });
  document.querySelectorAll('.rv, .display, .display-sm').forEach(function (el) { io.observe(el); });

  // Material library viewer
  var finishes = {
    obsidian: 'radial-gradient(circle at 30% 30%, #4b504e, #1d201f 70%)',
    graphite: 'radial-gradient(circle at 30% 30%, #a9a59c, #5d5a53 70%)',
    quartz: 'radial-gradient(circle at 30% 30%, #f4f1ea, #c9c4b8 70%)',
    ash: 'linear-gradient(135deg, #b3aea4, #8e897f)',
    sand: 'linear-gradient(135deg, #d9cdb8, #b7a98f)',
    stone: 'radial-gradient(circle at 25% 30%, #4a4d49 0 2px, transparent 2px), radial-gradient(circle at 65% 60%, #4a4d49 0 1.6px, transparent 1.6px), radial-gradient(circle at 80% 25%, #6e6a62 0 1.6px, transparent 1.6px), radial-gradient(circle at 45% 75%, #4a4d49 0 2px, transparent 2px), #b9b4a9'
  };
  var surface = document.getElementById('viewerSurface');
  var nameEl = document.getElementById('viewerName');
  document.querySelectorAll('.swatch').forEach(function (btn) {
    btn.addEventListener('click', function () {
      document.querySelectorAll('.swatch').forEach(function (b) { b.classList.remove('on'); });
      btn.classList.add('on');
      var key = btn.getAttribute('data-finish');
      surface.style.background = finishes[key];
      nameEl.textContent = btn.querySelector('.sw-name').textContent;
    });
  });
  var first = document.querySelector('.swatch');
  if (first) first.classList.add('on');
})();
