/* ==========================================================
   a11y.js — Acessibilidade (ARIA labels, roles, focus)
   ========================================================== */
(function (global) {
  'use strict';

  function labelFromText(btn) {
    const lbl = btn.querySelector('.nav-label');
    if (lbl && lbl.textContent.trim()) return lbl.textContent.trim();
    return btn.textContent.trim().replace(/\s+/g, ' ').slice(0, 50) || btn.dataset.page || 'Botão';
  }

  function setupNavA11y() {
    document.querySelectorAll('.nav-btn').forEach(btn => {
      if (!btn.getAttribute('aria-label')) {
        btn.setAttribute('aria-label', 'Ir para ' + labelFromText(btn));
      }
    });
  }

  function setupModalA11y(modal) {
    if (!modal || modal.getAttribute('role') === 'dialog') return;
    modal.setAttribute('role', 'dialog');
    modal.setAttribute('aria-modal', 'true');
    const head = modal.querySelector('.modal-head h3, h3');
    if (head && !head.id) {
      head.id = 'modal-title-' + Date.now();
      modal.setAttribute('aria-labelledby', head.id);
    }
    const closeBtn = modal.querySelector('[data-close], .modal-close');
    if (closeBtn && !closeBtn.getAttribute('aria-label')) {
      closeBtn.setAttribute('aria-label', 'Fechar');
    }
    const focusable = modal.querySelectorAll('input, select, textarea, button:not([data-close]):not(.modal-close), [tabindex]:not([tabindex="-1"])');
    if (focusable.length) {
      setTimeout(() => { try { focusable[0].focus({ preventScroll: true }); } catch (e) {} }, 30);
    }
  }

  function watchModals() {
    const obs = new MutationObserver(records => {
      records.forEach(r => {
        r.addedNodes.forEach(n => {
          if (!(n instanceof HTMLElement)) return;
          if (n.classList && (n.classList.contains('modal-overlay') || n.classList.contains('video-lightbox'))) {
            setupModalA11y(n);
          }
          if (n.querySelectorAll) {
            n.querySelectorAll('.modal-overlay, .video-lightbox').forEach(setupModalA11y);
          }
        });
      });
    });
    obs.observe(document.body, { childList: true, subtree: true });
  }

  function init() {
    setupNavA11y();
    watchModals();
    document.querySelectorAll('.modal-overlay, .video-lightbox').forEach(setupModalA11y);
  }

  global.A11y = { init, setupModalA11y };
})(window);
