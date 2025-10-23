// js/main.js
// Mobile nav toggle, form validation (client-side demo), and reveal on scroll.
// Keep this file small and dependency-free (production: split into modules if larger).

(function () {
  'use strict';

  // NAV TOGGLE: supports multiple page variations (nav, navAbout, etc.)
  function initNav(toggleId, navId) {
    var btn = document.getElementById(toggleId);
    var nav = document.getElementById(navId);
    if (!btn || !nav) return;

    btn.addEventListener('click', function () {
      var isOpen = nav.classList.toggle('open');
      btn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });
  }

  // Initialize toggles used on pages
  initNav('navToggle', 'nav');
  initNav('navToggleAbout', 'navAbout');
  initNav('navToggleProjects', 'navProjects');
  initNav('navToggleContact', 'navContact');

  // FORM VALIDATION + DEMO SUBMIT
  var form = document.getElementById('contactForm');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();

      var name = document.getElementById('name');
      var email = document.getElementById('email');
      var message = document.getElementById('message');
      var feedback = document.getElementById('formFeedback');

      // Basic checks
      if (!name.value || name.value.trim().length < 3) {
        feedback.textContent = 'Please enter your full name (at least 3 characters).';
        name.focus();
        return;
      }

      var emailRegex = /.+@.+\..+/;
      if (!email.value || !emailRegex.test(email.value)) {
        feedback.textContent = 'Please enter a valid email address.';
        email.focus();
        return;
      }

      if (!message.value || message.value.trim().length < 10) {
        feedback.textContent = 'Message should be at least 10 characters.';
        message.focus();
        return;
      }

      feedback.textContent = 'Sending message...';

      // Demo: simulate a server call. Replace this with a real endpoint (Netlify Forms, Formspree, serverless API).
      setTimeout(function () {
        feedback.textContent = 'Thanks! Your message was sent (demo). I will reply within a few days.';
        form.reset();
      }, 800);
    });
  }

  // REVEAL ON SCROLL
  var reveals = Array.prototype.slice.call(document.querySelectorAll('.reveal'));
  if (reveals.length) {
    function onScrollReveal() {
      var height = window.innerHeight;
      reveals.forEach(function (el) {
        var rect = el.getBoundingClientRect();
        if (rect.top < height - 60) el.classList.add('revealed');
      });
    }
    window.addEventListener('scroll', onScrollReveal);
    window.addEventListener('load', onScrollReveal);
  }
})();