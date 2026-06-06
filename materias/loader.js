/* ==========================================================
   materias/loader.js — Carregador dinâmico de conteúdo
   Exposto em window.MATERIAS_EXT (mapa id→array de lições)
   ========================================================== */
(function (global) {
  'use strict';

  const FILES = [
    'materias/portugues.js',
    'materias/rju.js',
    'materias/etica.js',
    'materias/informatica.js',
    'materias/administrativo.js',
    'materias/constitucional.js',
    'materias/previdenciario.js',
    'materias/legislacao.js',
    'materias/logica.js'
  ];

  const cache = {};
  let loading = null;

  /**
   * Carrega um arquivo via <script> e resolve com o objeto exportado.
   */
  function loadScript(src) {
    return new Promise((resolve, reject) => {
      const existing = document.querySelector('script[data-materia-src="' + src + '"]');
      if (existing) {
        if (existing.dataset.loaded === '1') return resolve();
        existing.addEventListener('load', () => resolve());
        existing.addEventListener('error', () => reject(new Error('Falha ao carregar ' + src)));
        return;
      }
      const s = document.createElement('script');
      s.src = src;
      s.async = false;
      s.dataset.materiaSrc = src;
      s.addEventListener('load', () => { s.dataset.loaded = '1'; resolve(); });
      s.addEventListener('error', () => reject(new Error('Falha ao carregar ' + src)));
      document.head.appendChild(s);
    });
  }

  async function ensureAll() {
    if (loading) return loading;
    loading = (async () => {
      for (const f of FILES) {
        await loadScript(f);
        const id = f.replace('materias/', '').replace('.js', '');
        cache[id] = global.MATERIAS_EXT && global.MATERIAS_EXT[id] ? global.MATERIAS_EXT[id] : [];
      }
      return cache;
    })();
    return loading;
  }

  function get(materiaId) {
    return cache[materiaId] || (global.MATERIAS_EXT && global.MATERIAS_EXT[materiaId]) || [];
  }

  /**
   * Retorna a lição cujo 'topico' (slug) bate com o topicoId.
   */
  function getByTopico(materiaId, topicoId) {
    const all = get(materiaId);
    const slug = String(topicoId || '').toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9\-]/g, '');
    return all.find(l => l.topico === topicoId)
        || all.find(l => (l.topico || '').toLowerCase() === String(topicoId).toLowerCase())
        || all.find(l => l.slug === slug)
        || null;
  }

  global.MateriasLoader = { ensureAll, get, getByTopico };
})(window);
