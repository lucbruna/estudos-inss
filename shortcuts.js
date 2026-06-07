/* ==========================================================
   shortcuts.js — Atalhos de teclado
   - 1..6: navegar entre páginas (na ordem da bottom nav)
   - Esc: fechar modal
   - Ctrl/Cmd + K: abrir Tutor IA
   - ?: mostrar/ocultar modal de ajuda
   ========================================================== */
(function (global) {
  'use strict';

  const NAV_PAGES = ['dashboard', 'materias', 'videos', 'simulados', 'tutor-ia', 'progresso'];
  let modalOpen = null;

  function navegar(pageId) {
    if (typeof window.navegarPara === 'function') {
      window.navegarPara(pageId);
    } else {
      const btn = document.querySelector('.nav-btn[data-page="' + pageId + '"]');
      if (btn) btn.click();
    }
  }

  function onKey(e) {
    const t = e.target;
    const inField = t && (t.tagName === 'INPUT' || t.tagName === 'TEXTAREA' || t.isContentEditable);
    const mod = e.ctrlKey || e.metaKey;

    if (e.key === 'Escape') {
      if (modalOpen) { modalOpen.remove(); modalOpen = null; e.preventDefault(); return; }
      document.querySelectorAll('.modal-overlay, .video-lightbox').forEach(m => {
        const closeBtn = m.querySelector('[data-close]');
        if (closeBtn) closeBtn.click();
        else m.remove();
      });
      return;
    }

    if (mod && (e.key === 'k' || e.key === 'K')) {
      e.preventDefault();
      navegar('tutor-ia');
      return;
    }

    if (inField) return;

    if (e.key === '?') {
      e.preventDefault();
      toggleHelp();
      return;
    }

    if (/^[1-6]$/.test(e.key)) {
      const idx = parseInt(e.key, 10) - 1;
      if (idx < NAV_PAGES.length) {
        e.preventDefault();
        navegar(NAV_PAGES[idx]);
      }
    }
  }

  function toggleHelp() {
    if (modalOpen) { modalOpen.remove(); modalOpen = null; return; }
    const rows = [
      ['1', 'Dashboard'],
      ['2', 'Matérias'],
      ['3', 'Vídeos'],
      ['4', 'Simulados'],
      ['5', 'Tutor IA'],
      ['6', 'Progresso'],
      ['Ctrl/⌘ + K', 'Abrir Tutor IA'],
      ['Esc', 'Fechar modal'],
      ['?', 'Mostrar/ocultar esta ajuda']
    ];
    const html = `
      <div class="modal-overlay" id="shortcuts-help">
        <div class="modal" style="max-width: 440px;">
          <div class="modal-head">
            <h3>⌨️ Atalhos de teclado</h3>
            <button class="modal-close" data-close>×</button>
          </div>
          <div class="modal-body">
            <table class="shortcuts-table">
              ${rows.map(([k, v]) => `<tr><td><kbd>${k}</kbd></td><td>${v}</td></tr>`).join('')}
            </table>
          </div>
          <div class="modal-foot">
            <button class="btn btn-primary" data-close>Fechar</button>
          </div>
        </div>
      </div>
    `;
    document.body.insertAdjacentHTML('beforeend', html);
    modalOpen = document.getElementById('shortcuts-help');
    modalOpen.addEventListener('click', e => {
      if (e.target === modalOpen || e.target.dataset.close !== undefined) {
        modalOpen.remove(); modalOpen = null;
      }
    });
  }

  function init() {
    document.addEventListener('keydown', onKey);
  }

  global.Shortcuts = { init, NAV_PAGES };
})(window);
