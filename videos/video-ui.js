/* ==========================================================
   videos/video-ui.js — UI de Vídeos (lista, add, player, anotações)
   Depende de: VideoStorage, VideoAI, AICore, INSS_DATA
   ========================================================== */
(function (global) {
  'use strict';

  const PAGE_ID = 'page-videos';
  let state = {
    filter: { subject: 'all', tag: '', q: '' },
    selectedVideoId: null
  };

  function $(id) { return document.getElementById(id); }
  function $$(sel, root) { return Array.from((root || document).querySelectorAll(sel)); }

  function subjects() {
    const arr = (global.INSS_DATA && global.INSS_DATA.CONTEUDO) || [];
    return [{ id: 'all', nome: 'Todas as matérias' }].concat(arr.map(m => ({ id: m.id, nome: m.nome })));
  }

  function escapeHtml(s) {
    return String(s == null ? '' : s)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;').replace(/'/g, '&#39;');
  }

  function ensurePage() {
    let page = $(PAGE_ID);
    if (page) return page;
    page = document.createElement('section');
    page.id = PAGE_ID;
    page.className = 'page';
    page.style.display = 'none';
    document.body.appendChild(page);
    return page;
  }

  async function render() {
    const page = ensurePage();
    page.innerHTML = '';
    page.appendChild(renderToolbar());
    const list = await global.VideoStorage.getAllVideos();
    const filtered = filterVideos(list);
    page.appendChild(renderGrid(filtered, list));
  }

  function renderToolbar() {
    const wrap = document.createElement('div');
    wrap.className = 'video-toolbar';
    const subjOpts = subjects().map(s =>
      `<option value="${s.id}" ${state.filter.subject === s.id ? 'selected' : ''}>${escapeHtml(s.nome)}</option>`
    ).join('');
    wrap.innerHTML = `
      <div class="vt-row">
        <h2 class="vt-title">🎬 Vídeos de Estudo</h2>
        <button class="btn btn-primary" id="video-add-btn">+ Adicionar vídeo</button>
      </div>
      <div class="vt-row vt-filters">
        <select class="input" id="video-filter-subject">${subjOpts}</select>
        <input class="input" type="search" id="video-filter-q" placeholder="Buscar título, tag..." value="${escapeHtml(state.filter.q)}" />
        <button class="btn btn-secondary" id="video-ai-btn">✨ Sugerir com IA</button>
      </div>
      <div class="vt-row" id="video-ai-suggestions"></div>
    `;
    wrap.addEventListener('click', onToolbarClick);
    wrap.addEventListener('change', onToolbarChange);
    wrap.addEventListener('input', onToolbarInput);
    return wrap;
  }

  function onToolbarClick(e) {
    if (e.target.id === 'video-add-btn') openAddModal();
    if (e.target.id === 'video-ai-btn') openAISuggestModal();
  }

  function onToolbarChange(e) {
    if (e.target.id === 'video-filter-subject') {
      state.filter.subject = e.target.value;
      render();
    }
  }

  function onToolbarInput(e) {
    if (e.target.id === 'video-filter-q') {
      state.filter.q = e.target.value;
      render();
    }
  }

  function filterVideos(list) {
    const q = state.filter.q.toLowerCase().trim();
    return list.filter(v => {
      if (state.filter.subject !== 'all' && v.subject !== state.filter.subject) return false;
      if (q) {
        const hay = ((v.title || '') + ' ' + (v.tags || []).join(' ') + ' ' + (v.subject || '')).toLowerCase();
        if (hay.indexOf(q) === -1) return false;
      }
      return true;
    });
  }

  function renderGrid(videos, allVideos) {
    const wrap = document.createElement('div');
    wrap.className = 'video-grid-wrap';
    if (!videos.length) {
      wrap.innerHTML = `<div class="empty-state">Nenhum vídeo ainda. Clique em <strong>+ Adicionar vídeo</strong> ou <strong>✨ Sugerir com IA</strong>.</div>`;
      return wrap;
    }
    const groups = {};
    videos.forEach(v => {
      const k = v.subject || 'geral';
      (groups[k] = groups[k] || []).push(v);
    });
    const sorted = Object.keys(groups).sort();
    sorted.forEach(subjId => {
      const subj = (global.INSS_DATA.CONTEUDO.find(m => m.id === subjId) || { nome: subjId });
      const head = document.createElement('div');
      head.className = 'video-section-head';
      head.innerHTML = `<span class="dot" style="background:${subj.cor || '#888'}"></span> ${escapeHtml(subj.nome)} <small>(${groups[subjId].length})</small>`;
      wrap.appendChild(head);
      const grid = document.createElement('div');
      grid.className = 'video-grid';
      groups[subjId].forEach(v => grid.appendChild(videoCard(v)));
      wrap.appendChild(grid);
    });
    return wrap;
  }

  function videoCard(v) {
    const card = document.createElement('div');
    card.className = 'video-card';
    const thumb = v.thumbnail || (v.source === 'youtube' ? global.VideoStorage.youtubeThumb(v.url) : '');
    const isYT = v.source === 'youtube';
    card.innerHTML = `
      <div class="video-thumb">
        ${thumb ? `<img src="${escapeHtml(thumb)}" alt="" loading="lazy" />` : '<div class="video-thumb-fallback">🎬</div>'}
        ${isYT ? '<span class="video-badge">YouTube</span>' : '<span class="video-badge">Local</span>'}
      </div>
      <div class="video-meta">
        <div class="video-title">${escapeHtml(v.title)}</div>
        <div class="video-subject">${escapeHtml(subjectName(v.subject))}</div>
        ${(v.tags && v.tags.length) ? `<div class="video-tags">${v.tags.map(t => `<span class="tag">${escapeHtml(t)}</span>`).join('')}</div>` : ''}
      </div>
    `;
    card.addEventListener('click', () => openPlayer(v));
    return card;
  }

  function subjectName(id) {
    const s = (global.INSS_DATA && global.INSS_DATA.CONTEUDO.find(m => m.id === id));
    return s ? s.nome : (id || 'Geral');
  }

  /* ---------- ADD MODAL ---------- */

  function openAddModal() {
    const subjOpts = subjects().filter(s => s.id !== 'all').map(s =>
      `<option value="${s.id}">${escapeHtml(s.nome)}</option>`
    ).join('');
    const html = `
      <div class="modal-overlay" id="video-add-modal">
        <div class="modal">
          <div class="modal-head">
            <h3>Adicionar vídeo</h3>
            <button class="modal-close" data-close>×</button>
          </div>
          <div class="modal-body">
            <label class="field">
              <span>Tipo</span>
              <select id="vam-type" class="input">
                <option value="youtube">YouTube (URL)</option>
                <option value="file">Arquivo local (mp4/webm)</option>
              </select>
            </label>
            <label class="field" id="vam-url-field">
              <span>URL do YouTube</span>
              <input class="input" type="url" id="vam-url" placeholder="https://www.youtube.com/watch?v=..." />
            </label>
            <label class="field" id="vam-file-field" style="display:none">
              <span>Arquivo (mp4/webm)</span>
              <input class="input" type="file" id="vam-file" accept="video/mp4,video/webm" />
            </label>
            <label class="field">
              <span>Título</span>
              <input class="input" type="text" id="vam-title" placeholder="Ex: Aula de Direito Constitucional" />
            </label>
            <label class="field">
              <span>Matéria</span>
              <select id="vam-subject" class="input">${subjOpts}</select>
            </label>
            <label class="field">
              <span>Tags (separe por vírgula)</span>
              <input class="input" type="text" id="vam-tags" placeholder="aula, concurso, cefbraspe" />
            </label>
          </div>
          <div class="modal-foot">
            <button class="btn btn-ghost" data-close>Cancelar</button>
            <button class="btn btn-primary" id="vam-save">Salvar</button>
          </div>
        </div>
      </div>
    `;
    document.body.insertAdjacentHTML('beforeend', html);
    const modal = $('video-add-modal');
    modal.addEventListener('click', e => {
      if (e.target === modal || e.target.dataset.close !== undefined) closeModal(modal);
    });
    $('vam-type').addEventListener('change', e => {
      const isYT = e.target.value === 'youtube';
      $('vam-url-field').style.display = isYT ? '' : 'none';
      $('vam-file-field').style.display = isYT ? 'none' : '';
    });
    $('vam-save').addEventListener('click', async () => {
      const type = $('vam-type').value;
      const title = $('vam-title').value.trim() || 'Sem título';
      const subject = $('vam-subject').value;
      const tags = $('vam-tags').value.split(',').map(s => s.trim()).filter(Boolean);
      let video = { title, subject, tags, source: type };
      if (type === 'youtube') {
        const url = $('vam-url').value.trim();
        if (!url) return alert('Cole a URL do YouTube.');
        const ytId = global.VideoStorage.parseYouTubeId(url);
        if (!ytId) return alert('URL do YouTube inválida.');
        video.url = url;
        video.thumbnail = global.VideoStorage.youtubeThumb(url);
      } else {
        const f = $('vam-file').files[0];
        if (!f) return alert('Selecione um arquivo.');
        if (f.size > 200 * 1024 * 1024) {
          if (!confirm('Arquivo > 200 MB. Deseja continuar?')) return;
        }
        video.blob = f;
        video.title = title;
      }
      try {
        await global.VideoStorage.addVideo(video);
        closeModal(modal);
        render();
      } catch (e) {
        alert('Erro ao salvar: ' + e.message);
      }
    });
  }

  function closeModal(modal) {
    if (modal && modal.parentNode) modal.parentNode.removeChild(modal);
  }

  /* ---------- AI SUGGEST MODAL ---------- */

  function openAISuggestModal() {
    const subjOpts = subjects().filter(s => s.id !== 'all').map(s =>
      `<option value="${s.id}">${escapeHtml(s.nome)}</option>`
    ).join('');
    const html = `
      <div class="modal-overlay" id="video-ai-modal">
        <div class="modal">
          <div class="modal-head">
            <h3>✨ Sugerir vídeos com IA</h3>
            <button class="modal-close" data-close>×</button>
          </div>
          <div class="modal-body">
            <p class="muted">A IA vai sugerir 5 vídeos do YouTube (em pt-BR) sobre o tema escolhido.</p>
            <label class="field">
              <span>Matéria</span>
              <select id="vaim-subject" class="input">${subjOpts}</select>
            </label>
            <label class="field">
              <span>Tópico (opcional)</span>
              <input class="input" type="text" id="vaim-topico" placeholder="Ex: bens públicos, licitações, IRPF" />
            </label>
            <div id="vaim-status" class="muted"></div>
            <div id="vaim-results" class="vaim-results"></div>
          </div>
          <div class="modal-foot">
            <button class="btn btn-ghost" data-close>Fechar</button>
            <button class="btn btn-primary" id="vaim-run">Gerar sugestões</button>
          </div>
        </div>
      </div>
    `;
    document.body.insertAdjacentHTML('beforeend', html);
    const modal = $('video-ai-modal');
    modal.addEventListener('click', e => {
      if (e.target === modal || e.target.dataset.close !== undefined) closeModal(modal);
    });
    $('vaim-run').addEventListener('click', runAISuggest);
    bindAISuggestActions();
  }

  async function runAISuggest() {
    const subject = $('vaim-subject').value;
    const topico = $('vaim-topico').value.trim();
    const status = $('vaim-status');
    const results = $('vaim-results');
    const runBtn = $('vaim-run');
    const isReady = (global.AICore && (
      (typeof global.AICore.hasAnyKey === 'function' && global.AICore.hasAnyKey()) ||
      (typeof global.AICore.isConfigured === 'function' && global.AICore.isConfigured())
    ));
    if (!isReady) {
      status.innerHTML = '<span class="warn">⚠️ Configure a IA no Dashboard primeiro.</span>';
      return;
    }
    runBtn.disabled = true;
    status.textContent = 'Consultando IA...';
    results.innerHTML = '';
    try {
      const list = await global.VideoAI.recommend(subject, topico, ev => {
        if (ev.stage === 'start') status.textContent = 'Iniciando...';
        if (ev.stage === 'calling') status.textContent = 'Consultando IA (pode levar 10-30s)...';
        if (ev.stage === 'cache') status.textContent = '✓ Sugestões do cache';
        if (ev.stage === 'done') status.textContent = '✓ Pronto';
        if (ev.stage === 'error') status.textContent = '✗ ' + (ev.error || 'Erro');
      });
      results.innerHTML = list.length ? renderAISuggestions(list, subject) : '<div class="muted">Nenhuma sugestão retornada.</div>';
    } catch (e) {
      status.innerHTML = '<span class="warn">Erro: ' + escapeHtml(e.message) + '</span>';
    } finally {
      runBtn.disabled = false;
    }
  }

  function renderAISuggestions(list, subject) {
    return list.map(v => {
      const ytId = global.VideoStorage.parseYouTubeId(v.url);
      const thumb = ytId ? `https://i.ytimg.com/vi/${ytId}/hqdefault.jpg` : '';
      return `
        <div class="vaim-item" data-url="${escapeHtml(v.url)}">
          <div class="vaim-thumb">${thumb ? `<img src="${escapeHtml(thumb)}" alt="" />` : '🎬'}</div>
          <div class="vaim-body">
            <div class="vaim-title">${escapeHtml(v.titulo)}</div>
            <div class="vaim-meta">${escapeHtml(v.canal || '')} ${v.duracao ? '· ' + escapeHtml(v.duracao) : ''}</div>
            <div class="vaim-motivo">${escapeHtml(v.motivo || '')}</div>
          </div>
          <div class="vaim-actions">
            <button class="btn-mini vaim-save" title="Salvar na minha lista">+ Salvar</button>
            <a class="btn-mini" href="${escapeHtml(v.url)}" target="_blank" rel="noopener">Abrir ↗</a>
          </div>
        </div>
      `;
    }).join('');
  }

  function bindAISuggestActions() {
    const results = $('vaim-results');
    if (!results) return;
    results.addEventListener('click', async e => {
      const btn = e.target.closest('.vaim-save');
      if (!btn) return;
      const item = btn.closest('.vaim-item');
      const subject = $('vaim-subject').value;
      const titleEl = item.querySelector('.vaim-title');
      const title = titleEl ? titleEl.textContent : 'Vídeo';
      await global.VideoStorage.addVideo({
        title: title,
        url: item.dataset.url,
        source: 'youtube',
        subject: subject,
        tags: ['ia-sugerido'],
        thumbnail: ''
      });
      btn.textContent = '✓ Salvo';
      btn.disabled = true;
    });
  }

  /* ---------- LIGHTBOX PLAYER ---------- */

  function openPlayer(video) {
    state.selectedVideoId = video.id;
    const overlay = document.createElement('div');
    overlay.className = 'modal-overlay video-lightbox';
    overlay.id = 'video-player-modal';
    const isYT = video.source === 'youtube';
    const embed = isYT ? global.VideoStorage.youtubeEmbedUrl(video.url) : null;
    overlay.innerHTML = `
      <div class="lightbox">
        <div class="lightbox-head">
          <h3>${escapeHtml(video.title)}</h3>
          <button class="modal-close" data-close>×</button>
        </div>
        <div class="lightbox-body">
          <div class="lightbox-player">
            ${isYT
              ? `<iframe id="vl-frame" src="${escapeHtml(embed)}" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>`
              : `<video id="vl-video" controls src="${escapeHtml(video.url)}"></video>`
            }
            <div class="lightbox-toolbar">
              <button class="btn-mini" id="vl-add-anno">+ Anotar este momento</button>
              <button class="btn-mini btn-danger" id="vl-del">Excluir vídeo</button>
            </div>
          </div>
          <aside class="lightbox-annotations">
            <h4>Anotações</h4>
            <div class="vl-annos" id="vl-annos"></div>
          </aside>
        </div>
      </div>
    `;
    document.body.appendChild(overlay);
    overlay.addEventListener('click', e => {
      if (e.target === overlay || e.target.dataset.close !== undefined) closePlayer();
    });
    $('vl-add-anno').addEventListener('click', () => addAnnotationAt(video));
    $('vl-del').addEventListener('click', async () => {
      if (!confirm('Excluir este vídeo e suas anotações?')) return;
      await global.VideoStorage.deleteVideo(video.id);
      closePlayer();
      render();
    });
    loadAnnotations(video.id);
  }

  function closePlayer() {
    const m = $('video-player-modal');
    if (m) m.parentNode.removeChild(m);
    state.selectedVideoId = null;
  }

  async function loadAnnotations(videoId) {
    const list = await global.VideoStorage.getAnnotationsByVideo(videoId);
    const container = $('vl-annos');
    if (!container) return;
    if (!list.length) {
      container.innerHTML = '<div class="muted small">Nenhuma anotação. Use o player para criar.</div>';
      return;
    }
    container.innerHTML = list.map(a => `
      <div class="anno" data-id="${a.id}">
        <div class="anno-head">
          <button class="anno-time" data-time="${a.time}">${global.VideoStorage.formatTime(a.time)}</button>
          <button class="anno-del" data-id="${a.id}" title="Excluir">×</button>
        </div>
        <div class="anno-label">${escapeHtml(a.label)}</div>
        ${a.notes ? `<div class="anno-notes">${escapeHtml(a.notes)}</div>` : ''}
      </div>
    `).join('');
    container.addEventListener('click', async e => {
      const tBtn = e.target.closest('.anno-time');
      const dBtn = e.target.closest('.anno-del');
      if (tBtn) {
        const sec = Number(tBtn.dataset.time);
        if (!isNaN(sec)) seekVideo(sec);
        return;
      }
      if (dBtn) {
        await global.VideoStorage.deleteAnnotation(dBtn.dataset.id);
        loadAnnotations(videoId);
      }
    });
  }

  function seekVideo(seconds) {
    const yt = $('vl-frame');
    const v = $('vl-video');
    if (v) {
      v.currentTime = seconds;
      v.play();
    } else if (yt) {
      yt.src = yt.src.split('?')[0] + '?autoplay=1&start=' + Math.floor(seconds);
    }
  }

  function getCurrentTime() {
    const v = $('vl-video');
    if (v) return v.currentTime || 0;
    return 0;
  }

  function addAnnotationAt(video) {
    const t = getCurrentTime();
    const label = prompt('Rótulo (ex: "Art. 5º", "Exceção"):', '');
    if (label == null) return;
    const notes = prompt('Notas (opcional):', '');
    global.VideoStorage.addAnnotation({
      videoId: video.id,
      time: t,
      label: label.trim() || 'Sem rótulo',
      notes: (notes || '').trim()
    }).then(() => loadAnnotations(video.id));
  }

  /* ---------- INIT ---------- */

  async function init() {
    ensurePage();
    if (state.selectedVideoId == null) await render();
  }

  function open() {
    ensurePage();
    state.selectedVideoId = null;
    render();
  }

  global.VideoUI = { init, open, render, openAddModal, openAISuggestModal, bindAISuggestActions };
})(window);
