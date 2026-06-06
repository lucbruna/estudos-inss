/* ==========================================================
   INSS 2026 — DASHBOARD GALÁCTICA (script.js)
   Aplicação completa com todos os módulos
   ========================================================== */

(function() {
  'use strict';

  const { CONTEUDO, TOP_ASSUNTOS, QUESTOES, CRONO_PADRAO, CONQUISTAS } = window.INSS_DATA;

  // =====================================================
  // ESTADO E PERSISTÊNCIA
  // =====================================================
  const KEY = 'inss2026_galactica_v2';
  const THEME_KEY = 'inss2026_theme';
  let state = {};
  let settings = {
    theme: localStorage.getItem(THEME_KEY) || 'dark',
    countdownTarget: '2026-03-15'
  };

  function estadoPadrao() {
    const topicos = {};
    CONTEUDO.forEach(m => {
      topicos[m.id] = {};
      m.topicos.forEach(t => { topicos[m.id][t] = false; });
    });
    return {
      cronograma: JSON.parse(JSON.stringify(CRONO_PADRAO)),
      topicos: topicos,
      checklists: {},
      simulados: [],
      simuladosCompletos: [],
      calendario: {},
      notas: [],
      pomodoro: { count: 0, tempo: 0, data: new Date().toDateString() },
      activity: {},
      lastAccess: new Date().toDateString()
    };
  }

  function carregar() {
    try {
      const raw = localStorage.getItem(KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        // Migração: garantir estrutura completa
        if (!parsed.cronograma) parsed.cronograma = JSON.parse(JSON.stringify(CRONO_PADRAO));
        if (!parsed.topicos) {
          parsed.topicos = {};
          CONTEUDO.forEach(m => {
            parsed.topicos[m.id] = {};
            m.topicos.forEach(t => { parsed.topicos[m.id][t] = false; });
          });
        }
        if (!parsed.checklists) parsed.checklists = {};
        if (!parsed.simulados) parsed.simulados = [];
        if (!parsed.simuladosCompletos) parsed.simuladosCompletos = [];
        if (!parsed.calendario) parsed.calendario = {};
        if (!parsed.notas) parsed.notas = [];
        if (!parsed.pomodoro) parsed.pomodoro = { count: 0, tempo: 0, data: new Date().toDateString() };
        if (!parsed.activity) parsed.activity = {};
        state = parsed;
        return;
      }
    } catch (e) { console.error('Erro ao carregar:', e); }
    state = estadoPadrao();
  }

  function salvar() {
    try { localStorage.setItem(KEY, JSON.stringify(state)); }
    catch (e) { console.error('Erro ao salvar:', e); }
  }

  function salvarRender() {
    salvar();
    renderizar();
  }

  // =====================================================
  // UTILITÁRIOS
  // =====================================================
  function chaveData(d) {
    const dt = new Date(d);
    return `${dt.getFullYear()}-${String(dt.getMonth()+1).padStart(2,'0')}-${String(dt.getDate()).padStart(2,'0')}`;
  }

  function hojeKey() { return chaveData(new Date()); }

  function formatarBR(s) {
    if (!s) return '';
    const [y, m, d] = s.split('-');
    return `${d}/${m}/${y}`;
  }

  function nomeMes(m) {
    return ['Janeiro','Fevereiro','Março','Abril','Maio','Junho','Julho','Agosto','Setembro','Outubro','Novembro','Dezembro'][m];
  }

  function semanaRef(data, offset) {
    const d = new Date(data);
    d.setDate(d.getDate() + offset * 7);
    const dia = d.getDay();
    d.setDate(d.getDate() - dia + (dia === 0 ? -6 : 1));
    const semana = [];
    for (let i = 0; i < 7; i++) {
      const dt = new Date(d);
      dt.setDate(dt.getDate() + i);
      semana.push(chaveData(dt));
    }
    return semana;
  }

  function $(id) { return document.getElementById(id); }
  function $$(sel) { return document.querySelectorAll(sel); }

  function toast(msg, tipo = '') {
    const container = $('toast-container');
    const div = document.createElement('div');
    div.className = 'toast ' + tipo;
    const icon = tipo === 'success' ? '✓' : tipo === 'error' ? '✕' : tipo === 'warning' ? '⚠' : 'ℹ';
    div.innerHTML = `<span>${icon}</span><span>${msg}</span>`;
    container.appendChild(div);
    setTimeout(() => div.remove(), 3000);
  }

  // =====================================================
  // TEMA
  // =====================================================
  function aplicarTema() {
    document.documentElement.setAttribute('data-theme', settings.theme);
    const icon = $('.theme-icon');
    if (icon) icon.textContent = settings.theme === 'dark' ? '☼' : '☾';
  }

  function initTema() {
    aplicarTema();
    $('theme-toggle').addEventListener('click', () => {
      settings.theme = settings.theme === 'dark' ? 'light' : 'dark';
      localStorage.setItem(THEME_KEY, settings.theme);
      aplicarTema();
    });
  }

  // =====================================================
  // CÁLCULOS DE ESTATÍSTICAS
  // =====================================================
  function calcularStats() {
    let totalTopicos = 0, feitosTopicos = 0;
    const topicosPorMateria = {};
    CONTEUDO.forEach(m => {
      const tops = state.topicos[m.id] || {};
      const vals = Object.values(tops);
      const feitos = vals.filter(v => v).length;
      topicosPorMateria[m.id] = { feitos, total: vals.length, pct: vals.length ? Math.round(feitos / vals.length * 100) : 0 };
      totalTopicos += vals.length;
      feitosTopicos += feitos;
    });
    const concluidas = Object.values(topicosPorMateria).filter(x => x.total > 0 && x.pct === 100).length;
    const pctGeral = totalTopicos > 0 ? Math.round(feitosTopicos / totalTopicos * 100) : 0;
    const totalSimulados = state.simuladosCompletos.length;
    const mediaSim = totalSimulados > 0
      ? Math.round(state.simuladosCompletos.reduce((a, s) => a + (s.acertos / s.total * 100), 0) / totalSimulados)
      : 0;
    const melhorNota = totalSimulados > 0
      ? Math.max(...state.simuladosCompletos.map(s => Math.round(s.acertos / s.total * 100)))
      : 0;
    const totalHoras = state.simuladosCompletos.reduce((acc, s) => {
      if (!s.tempo) return acc;
      const [h, m, s2] = s.tempo.split(':').map(Number);
      return acc + h + m / 60 + s2 / 3600;
    }, 0);
    return {
      totalTopicos, feitosTopicos, topicosPorMateria, concluidas, pctGeral,
      totalSimulados, mediaSim, melhorNota, totalHoras: Math.round(totalHoras),
      totalNotas: state.notas.length,
      pomoHoje: state.pomodoro.data === new Date().toDateString() ? state.pomodoro.count : 0
    };
  }

  function calcularStreak() {
    let streak = 0;
    const hoje = new Date();
    for (let i = 0; i < 365; i++) {
      const d = new Date(hoje);
      d.setDate(d.getDate() - i);
      const key = chaveData(d);
      const checklist = state.checklists[key] || [];
      const hasChecklist = checklist.some(x => x.done);
      const hasActivity = state.activity[key] && state.activity[key] > 0;
      if (hasChecklist || hasActivity) {
        streak++;
      } else if (i === 0) {
        continue;
      } else {
        break;
      }
    }
    return streak;
  }

  // =====================================================
  // NAVEGAÇÃO
  // =====================================================
  function navegarPara(pageId, opts = {}) {
    $$('.page').forEach(x => x.classList.remove('active'));
    $$('.nav-btn').forEach(x => x.classList.remove('active'));
    const page = $('page-' + pageId);
    if (page) page.classList.add('active');
    const navBtn = document.querySelector(`.nav-btn[data-page="${pageId}"]`);
    if (navBtn) navBtn.classList.add('active');
    if (opts.tab) {
      setTimeout(() => {
        const tabBtn = document.querySelector(`.tab-btn[data-tab="${opts.tab}"]`);
        if (tabBtn) tabBtn.click();
      }, 0);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
    renderizar();
  }

  function initNav() {
    $$('.nav-btn').forEach(b => {
      b.addEventListener('click', () => navegarPara(b.dataset.page));
    });
    $$('.see-all').forEach(b => {
      b.addEventListener('click', () => {
        navegarPara(b.dataset.page, { tab: b.dataset.tab });
      });
    });
  }

  // =====================================================
  // DASHBOARD
  // =====================================================
  function renderDashboard() {
    const h = new Date().getHours();
    const saudacao = h < 5 ? 'Boa madrugada' : h < 12 ? 'Bom dia' : h < 18 ? 'Boa tarde' : 'Boa noite';
    $('greeting').textContent = `${saudacao}, Concurseiro!`;
    $('hero-sub').textContent = 'Cada minuto de estudo é um passo em direção à aprovação.';

    $('dash-today-date').textContent =
      new Date().toLocaleDateString('pt-BR', { weekday: 'long', day: 'numeric', month: 'long' });

    const stats = calcularStats();
    // KPIs
    $('kpi-progresso').textContent = stats.pctGeral + '%';
    $('kpi-progresso-bar').style.width = stats.pctGeral + '%';
    $('kpi-concluidas').textContent = `${stats.concluidas}/${CONTEUDO.length}`;
    $('kpi-simulados').textContent = stats.totalSimulados;
    $('kpi-topicos').textContent = `${stats.feitosTopicos}/${stats.totalTopicos}`;

    // Anel
    const circ = 2 * Math.PI * 70;
    $('ring-fill-dash').style.strokeDashoffset = circ - (circ * stats.pctGeral / 100);
    $('ring-pct').textContent = stats.pctGeral + '%';
    $('meta-topicos').textContent = stats.feitosTopicos;
    $('meta-topicos-total').textContent = stats.totalTopicos;
    $('meta-horas').textContent = stats.totalHoras + 'h';
    $('meta-media').textContent = stats.mediaSim + '%';

    // Streak
    const streak = calcularStreak();
    $('streak-count').textContent = streak;
    $('dash-mission-tag').textContent =
      stats.pctGeral >= 80 ? 'Cadete' :
      stats.pctGeral >= 50 ? 'Soldado' :
      stats.pctGeral >= 25 ? 'Recruta' : 'Iniciante';

    // Estudo de hoje
    const diaSemana = new Date().getDay();
    const mapa = ['dom','seg','ter','qua','qui','sex','sab'];
    const keyHoje = mapa[diaSemana];
    const materiasHoje = state.cronograma[keyHoje] || [];
    const container = $('dash-hoje');
    container.innerHTML = '';
    if (materiasHoje.length === 0) {
      container.innerHTML = '<div class="empty-state">Nenhuma mat&eacute;ria programada para hoje</div>';
    } else {
      materiasHoje.forEach(m => {
        const mat = typeof m === 'string' ? { nome: m } : m;
        const materia = CONTEUDO.find(c => c.nome === mat.nome);
        const div = document.createElement('div');
        div.className = 'study-item';
        const cor = document.createElement('div');
        cor.className = 'study-color';
        cor.style.background = materia ? materia.cor : '#64748b';
        const info = document.createElement('div');
        info.className = 'study-info';
        const horas = mat.horas ? ` &middot; ${mat.horas}h` : '';
        info.innerHTML = `<div class="study-name">${mat.nome}</div><div class="study-desc">Toque para estudar${horas}</div>`;
        const arrow = document.createElement('div');
        arrow.className = 'study-arrow';
        arrow.innerHTML = '&#8250;';
        div.appendChild(cor);
        div.appendChild(info);
        div.appendChild(arrow);
        div.addEventListener('click', () => {
          if (materia) navegarPara('materias');
        });
        container.appendChild(div);
      });
    }

    // Top Assuntos (Top 5)
    const topContainer = $('dash-topassuntos');
    topContainer.innerHTML = '';
    const top5 = getTopAssuntosAll().slice(0, 5);
    if (top5.length === 0) {
      topContainer.innerHTML = '<div class="empty-state">Nenhum top assunto dispon&iacute;vel</div>';
    } else {
      top5.forEach(t => {
        const div = document.createElement('div');
        div.className = 'hot-topic';
        const freqClass = t.freq >= 90 ? 'very-high' : t.freq >= 75 ? 'high' : t.freq >= 60 ? 'medium' : 'low';
        div.innerHTML = `
          <div class="hot-freq ${freqClass}">${t.freq}%</div>
          <div class="hot-info">
            <div class="hot-title">${t.topico}</div>
            <div class="hot-meta">${t.materia} &middot; ${t.edicao}</div>
          </div>`;
        topContainer.appendChild(div);
      });
    }

    // Últimos simulados
    const simContainer = $('dash-simulados');
    simContainer.innerHTML = '';
    const recentes = [...state.simuladosCompletos].reverse().slice(0, 3);
    if (recentes.length === 0) {
      simContainer.innerHTML = '<div class="empty-state">Nenhum simulado realizado. Toque em "Simulados" para come&ccedil;ar.</div>';
    } else {
      recentes.forEach(s => {
        const pct = Math.round(s.acertos / s.total * 100);
        const div = document.createElement('div');
        div.className = 'sim-item';
        const minutos = s.tempo ? Math.floor((() => { const [h, m] = s.tempo.split(':').map(Number); return h * 60 + m; })()) : 0;
        div.innerHTML = `
          <div class="sim-info">
            <div class="sim-materia">${s.materia}</div>
            <div class="sim-meta">${s.acertos}/${s.total} acertos &middot; ${formatarBR(s.data)}${minutos ? ' &middot; '+minutos+'min' : ''}</div>
          </div>
          <div class="sim-nota ${pct>=70?'good':pct>=40?'med':'bad'}">${pct}%</div>`;
        simContainer.appendChild(div);
      });
    }

    // Countdown
    updateCountdown();
  }

  function getTopAssuntosAll() {
    const arr = [];
    Object.entries(TOP_ASSUNTOS).forEach(([matId, list]) => {
      const mat = CONTEUDO.find(m => m.id === matId);
      list.forEach(t => arr.push({ ...t, materia: mat ? mat.nome : matId }));
    });
    return arr.sort((a, b) => b.freq - a.freq);
  }

  // =====================================================
  // COUNTDOWN
  // =====================================================
  function updateCountdown() {
    const target = new Date(settings.countdownTarget + 'T08:00:00');
    const now = new Date();
    let diff = target - now;
    if (diff < 0) diff = 0;
    const days = Math.floor(diff / 86400000);
    const hours = Math.floor((diff % 86400000) / 3600000);
    const mins = Math.floor((diff % 3600000) / 60000);
    const secs = Math.floor((diff % 60000) / 1000);
    $('countdown-days').textContent = days;
    $('countdown-hours').textContent = String(hours).padStart(2, '0');
    $('countdown-mins').textContent = String(mins).padStart(2, '0');
    $('countdown-secs').textContent = String(secs).padStart(2, '0');
    $('countdown-target').textContent = formatarBR(settings.countdownTarget);
  }

  // =====================================================
  // MATÉRIAS
  // =====================================================
  let materiaAtiva = null;

  function renderMaterias() {
    if (materiaAtiva) {
      renderMateriaDetalhe(materiaAtiva);
      return;
    }
    $('materia-detail').classList.add('hidden');
    $('materias-lista').classList.remove('hidden');

    const busca = ($('search-materia').value || '').toLowerCase();
    const stats = calcularStats();
    const lista = $('materias-lista');
    lista.innerHTML = '';

    const filtradas = CONTEUDO.filter(m => {
      if (!busca) return true;
      if (m.nome.toLowerCase().includes(busca)) return true;
      if (m.topicos.some(t => t.toLowerCase().includes(busca))) return true;
      return false;
    });

    if (filtradas.length === 0) {
      lista.innerHTML = '<div class="empty-state">Nenhuma mat&eacute;ria encontrada</div>';
      return;
    }

    filtradas.forEach(m => {
      const info = stats.topicosPorMateria[m.id] || { feitos: 0, total: 0, pct: 0 };
      const card = document.createElement('div');
      card.className = 'materia-card';
      card.style.setProperty('--materia-cor', m.cor);
      card.innerHTML = `
        <div class="materia-icon" style="background:${m.cor}25;color:${m.cor}">${m.icon}</div>
        <div class="materia-content">
          <div class="materia-name">${m.nome}</div>
          <div class="materia-meta">
            <span>${info.feitos}/${info.total} t&oacute;picos</span>
            <div class="materia-mini-bar"><div style="width:${info.pct}%;background:${m.cor}"></div></div>
          </div>
        </div>
        <div class="materia-pct" style="color:${m.cor}">${info.pct}%</div>`;
      card.addEventListener('click', () => abrirMateria(m.id));
      lista.appendChild(card);
    });
  }

  function abrirMateria(id) {
    materiaAtiva = id;
    $('materias-lista').classList.add('hidden');
    $('materia-detail').classList.remove('hidden');
    renderMateriaDetalhe(id);
  }

  function renderMateriaDetalhe(id) {
    const materia = CONTEUDO.find(m => m.id === id);
    if (!materia) return;

    $('materia-detail-title').textContent = materia.nome;
    $('detail-icon').textContent = materia.icon;
    $('detail-icon').style.background = materia.cor + '25';
    $('detail-icon').style.color = materia.cor;
    $('materia-detail-sub').textContent = materia.grupo === 'conhecimentos-basicos' ? 'Conhecimentos B&aacute;sicos' : 'Conhecimentos Espec&iacute;ficos';

    const tops = state.topicos[id] || {};
    const vals = Object.values(tops);
    const feitos = vals.filter(v => v).length;
    const total = vals.length;
    const pct = total > 0 ? Math.round(feitos / total * 100) : 0;

    $('materia-detail-pct').textContent = pct + '%';
    $('materia-detail-bar').style.width = pct + '%';
    $('materia-detail-count').textContent = `${feitos}/${total}`;

    // Tab: Tópicos
    const topicosContainer = $('detail-content-topicos');
    topicosContainer.innerHTML = '';
    materia.topicos.forEach(t => {
      const done = tops[t] || false;
      const div = document.createElement('div');
      div.className = 'topic-item' + (done ? ' done' : '');
      // Frequência do tópico (do top assuntos)
      const topInfo = (TOP_ASSUNTOS[id] || []).find(x => x.topico === t);
      let freqHtml = '';
      if (topInfo) {
        const cls = topInfo.freq >= 85 ? '' : topInfo.freq >= 70 ? 'med' : 'low';
        freqHtml = `<span class="topic-freq ${cls}">${topInfo.freq}%</span>`;
      }
      div.innerHTML = `
        <div class="topic-check">${done ? '\u2713' : ''}</div>
        <span class="topic-text">${t}</span>
        ${freqHtml}`;
      div.addEventListener('click', () => {
        state.topicos[id][t] = !state.topicos[id][t];
        // Marcar atividade do dia
        const k = hojeKey();
        state.activity[k] = (state.activity[k] || 0) + 1;
        salvarRender();
      });
      topicosContainer.appendChild(div);
    });

    // Tab: + Cobrados
    const quentesContainer = $('detail-content-quentes');
    quentesContainer.innerHTML = '';
    const quentes = TOP_ASSUNTOS[id] || [];
    if (quentes.length === 0) {
      quentesContainer.innerHTML = '<div class="empty-state">Nenhum dado dispon&iacute;vel</div>';
    } else {
      quentes.forEach(t => {
        const div = document.createElement('div');
        div.className = 'hot-topic';
        const cls = t.freq >= 90 ? 'very-high' : t.freq >= 75 ? 'high' : t.freq >= 60 ? 'medium' : 'low';
        div.innerHTML = `
          <div class="hot-freq ${cls}">${t.freq}%</div>
          <div class="hot-info">
            <div class="hot-title">${t.topico}</div>
            <div class="hot-meta">${t.edicao}</div>
          </div>`;
        quentesContainer.appendChild(div);
      });
    }

    // Tab: Resumo
    const resumoContainer = $('detail-content-resumo');
    if (materia.resumo) {
      let html = `<div class="resumo-content"><h4>${materia.resumo.titulo}</h4>`;
      materia.resumo.secoes.forEach(s => {
        html += `<h4>${s.h}</h4><ul>`;
        s.ul.forEach(item => { html += `<li>${item}</li>`; });
        html += '</ul>';
      });
      html += '</div>';
      resumoContainer.innerHTML = html;
    } else {
      resumoContainer.innerHTML = '<div class="empty-state">Resumo em breve</div>';
    }

    // Tab: Matéria (Conteúdo Completo)
    const materiaContainer = $('detail-content-materia');
    if (materia.materia) {
      let html = '<div class="materia-completa">';
      if (materia.materia.introducao) {
        html += `<div class="materia-intro">${materia.materia.introducao}</div>`;
      }
      if (materia.materia.capitulos) {
        materia.materia.capitulos.forEach((cap, i) => {
          html += `<div class="materia-capitulo">`;
          const tituloCap = cap.h.replace(/^\d+\.\s*/, '');
          html += `<h3 class="cap-titulo"><span class="cap-num">${i+1}</span> ${tituloCap}</h3>`;
          if (cap.p) html += `<div class="cap-paragrafo">${cap.p}</div>`;
          if (cap.ul) {
            html += '<ul class="cap-lista">';
            cap.ul.forEach(item => { html += `<li>${item}</li>`; });
            html += '</ul>';
          }
          if (cap.p2) html += `<div class="cap-paragrafo">${cap.p2}</div>`;
          if (cap.ul2) {
            html += '<ul class="cap-lista">';
            cap.ul2.forEach(item => { html += `<li>${item}</li>`; });
            html += '</ul>';
          }
          if (cap.p3) html += `<div class="cap-paragrafo">${cap.p3}</div>`;
          if (cap.ul3) {
            html += '<ul class="cap-lista">';
            cap.ul3.forEach(item => { html += `<li>${item}</li>`; });
            html += '</ul>';
          }
          html += `<div class="cap-ai-actions">
            <button class="btn-mini ai-cap-btn" data-cap-acao="explicar" data-cap-idx="${i}">&#10024; Explicar com IA</button>
            <button class="btn-mini ai-cap-btn" data-cap-acao="resumir" data-cap-idx="${i}">&#128221; Resumir</button>
            <button class="btn-mini ai-cap-btn" data-cap-acao="quiz" data-cap-idx="${i}">&#127942; Gerar quiz</button>
          </div>`;
          html += '</div>';
        });
      }
      html += '</div>';
      materiaContainer.innerHTML = html;
    } else {
      materiaContainer.innerHTML = '<div class="empty-state">Conte&uacute;do completo em breve.</div>';
    }
  }

  function initMaterias() {
    $('back-materias').addEventListener('click', () => {
      materiaAtiva = null;
      $('materia-detail').classList.add('hidden');
      $('materias-lista').classList.remove('hidden');
      renderMaterias();
    });
    $('search-materia').addEventListener('input', () => renderMaterias());
    // Tabs internas
    $$('.detail-tab').forEach(tab => {
      tab.addEventListener('click', () => {
        $$('.detail-tab').forEach(t => t.classList.remove('active'));
        $$('.detail-content').forEach(c => c.classList.remove('active'));
        tab.classList.add('active');
        $('detail-content-' + tab.dataset.dtab).classList.add('active');
      });
    });

    // Botões "Explicar com IA / Resumir / Gerar quiz" em cada capítulo
    document.addEventListener('click', (e) => {
      const btn = e.target.closest('.ai-cap-btn');
      if (!btn) return;
      const acao = btn.dataset.capAcao;
      const idx = parseInt(btn.dataset.capIdx, 10);
      if (!materiaAtiva) return;
      const mat = CONTEUDO.find(m => m.id === materiaAtiva);
      if (!mat || !mat.materia || !mat.materia.capitulos) return;
      const cap = mat.materia.capitulos[idx];
      if (!cap) return;
      const tituloCap = (cap.h || '').replace(/^\d+\.\s*/, '').replace(/<[^>]+>/g, '');

      if (!window.AIWidget || !window.AICore) return;
      const cfg = AICore.load();
      if (!AICore.isConfigured(cfg)) {
        if (window.toast) window.toast('Configure a IA no Dashboard primeiro', 'err');
        else alert('Configure a IA no Dashboard primeiro');
        return;
      }

      let contexto, prompt;
      if (acao === 'explicar') {
        contexto = 'topico';
        prompt = `Explique o tópico "${tituloCap}" da matéria "${mat.nome}" de forma didática, com exemplos práticos e base legal (lei/artigo) quando aplicável para o concurso do INSS/CEBRASPE.`;
      } else if (acao === 'resumir') {
        contexto = 'resumo';
        prompt = `Faça um resumo em até 8 bullets do tópico "${tituloCap}" (matéria: ${mat.nome}) com os pontos mais cobrados pelo CEBRASPE.`;
      } else if (acao === 'quiz') {
        contexto = 'quiz';
        prompt = `Crie 3 questões no estilo CEBRASPE sobre "${tituloCap}" (matéria: ${mat.nome}), com gabarito comentado em 1 linha.`;
      } else {
        return;
      }
      AIWidget.setContext(contexto, { materia: mat.nome, topico: tituloCap });
      AIWidget.openPanel();
      AIWidget.sendMessage(prompt);
    });
  }

  // =====================================================
  // TOP ASSUNTOS
  // =====================================================
  let topFiltro = 'todas';
  function renderTopAssuntos() {
    const lista = $('topassuntos-lista');
    lista.innerHTML = '';
    let items = getTopAssuntosAll();
    if (topFiltro !== 'todas') {
      items = items.filter(i => {
        const m = CONTEUDO.find(c => c.nome === i.materia);
        return m && m.grupo === topFiltro;
      });
    }
    if (items.length === 0) {
      lista.innerHTML = '<div class="empty-state">Nenhum assunto encontrado</div>';
      return;
    }
    items.forEach(t => {
      const div = document.createElement('div');
      div.className = 'hot-topic';
      const cls = t.freq >= 90 ? 'very-high' : t.freq >= 75 ? 'high' : t.freq >= 60 ? 'medium' : 'low';
      div.innerHTML = `
        <div class="hot-freq ${cls}">${t.freq}%</div>
        <div class="hot-info">
          <div class="hot-title">${t.topico}</div>
          <div class="hot-meta">${t.materia} &middot; ${t.edicao}</div>
        </div>`;
      lista.appendChild(div);
    });
  }

  function initTopAssuntos() {
    $$('#topassuntos-filtros .chip').forEach(chip => {
      chip.addEventListener('click', () => {
        $$('#topassuntos-filtros .chip').forEach(c => c.classList.remove('active'));
        chip.classList.add('active');
        topFiltro = chip.dataset.filter;
        renderTopAssuntos();
      });
    });
  }

  // =====================================================
  // SIMULADOS
  // =====================================================
  let simuladoAtual = null;
  let simuladoConfig = { materia: 'todas', qty: 10, mode: 'treino' };
  let simuladoQuestoes = [];
  let simuladoRespostas = {};
  let simuladoIdx = 0;
  let simuladoTimer = null;
  let simuladoSegundos = 0;

  function initSimulados() {
    const simConfig = document.querySelector('.simulado-config');
    // Popula select de matérias
    const sel = $('sim-materia-select');
    sel.innerHTML = '<option value="todas">Todas as mat&eacute;rias (misto)</option>';
    CONTEUDO.forEach(m => {
      const opt = document.createElement('option');
      opt.value = m.id;
      opt.textContent = m.nome;
      sel.appendChild(opt);
    });
    sel.addEventListener('change', () => { simuladoConfig.materia = sel.value; });

    simConfig.querySelectorAll('.qty-btn[data-qty]').forEach(b => {
      b.addEventListener('click', () => {
        simConfig.querySelectorAll('.qty-btn[data-qty]').forEach(x => x.classList.remove('active'));
        b.classList.add('active');
        simuladoConfig.qty = parseInt(b.dataset.qty);
      });
    });
    simConfig.querySelectorAll('.mode-btn[data-mode]').forEach(b => {
      b.addEventListener('click', () => {
        simConfig.querySelectorAll('.mode-btn[data-mode]').forEach(x => x.classList.remove('active'));
        b.classList.add('active');
        simuladoConfig.mode = b.dataset.mode;
      });
    });

    $('iniciar-simulado').addEventListener('click', iniciarSimulado);
    $('sim-questao-anterior').addEventListener('click', () => navegarQuestao(-1));
    $('sim-questao-proxima').addEventListener('click', () => navegarQuestao(1));
    $('sim-finalizar').addEventListener('click', finalizarSimulado);
    $('resultado-novo').addEventListener('click', voltarParaConfig);
    $('resultado-voltar').addEventListener('click', voltarParaConfig);
  }

  function iniciarSimulado() {
    const matId = simuladoConfig.materia;
    let pool = [];
    if (matId === 'todas') {
      Object.entries(QUESTOES).forEach(([id, qs]) => {
        const m = CONTEUDO.find(c => c.id === id);
        qs.forEach(q => pool.push({ ...q, matId: id, matNome: m ? m.nome : id }));
      });
    } else {
      const qs = QUESTOES[matId] || [];
      const m = CONTEUDO.find(c => c.id === matId);
      qs.forEach(q => pool.push({ ...q, matId, matNome: m ? m.nome : matId }));
    }
    if (pool.length === 0) {
      toast('Nenhuma quest&atilde;o dispon&iacute;vel para esta mat&eacute;ria.', 'error');
      return;
    }
    // Embaralhar
    pool = pool.sort(() => Math.random() - 0.5);
    const qty = simuladoConfig.qty === 0 ? pool.length : Math.min(simuladoConfig.qty, pool.length);
    simuladoQuestoes = pool.slice(0, qty);
    simuladoRespostas = {};
    simuladoIdx = 0;
    simuladoSegundos = 0;

    showSimTab('sim-ativo');
    $('sim-materia-nome').textContent = matId === 'todas' ? 'Simulado Geral' : (CONTEUDO.find(c => c.id === matId) || {}).nome;
    $('sim-total-q').textContent = qty;

    if (simuladoConfig.mode === 'real') {
      simuladoTimer = setInterval(() => {
        simuladoSegundos++;
        const m = Math.floor(simuladoSegundos / 60);
        const s = simuladoSegundos % 60;
        $('sim-timer').textContent = `${String(m).padStart(2,'0')}:${String(s).padStart(2,'0')}`;
      }, 1000);
    } else {
      $('sim-timer').textContent = '00:00';
    }

    renderQuestao();
  }

  function renderQuestao() {
    if (simuladoIdx < 0 || simuladoIdx >= simuladoQuestoes.length) return;
    const q = simuladoQuestoes[simuladoIdx];
    const container = $('sim-questao-container');
    const resp = simuladoRespostas[simuladoIdx];
    const isModoTreino = simuladoConfig.mode === 'treino';

    $('sim-current').textContent = simuladoIdx + 1;
    $('sim-progress-fill').style.width = ((simuladoIdx + 1) / simuladoQuestoes.length * 100) + '%';

    let opcoesHtml = '';
    q.opcoes.forEach((op, i) => {
      let cls = '';
      if (resp !== undefined) {
        if (i === q.correta) cls = 'correct';
        else if (i === resp) cls = 'wrong';
      } else if (resp === i) {
        cls = 'selected';
      }
      opcoesHtml += `<div class="questao-opcao ${cls}" data-idx="${i}">
        <div class="opcao-letra">${String.fromCharCode(65 + i)}</div>
        <span>${op}</span>
      </div>`;
    });

    let feedbackHtml = '';
    if (resp !== undefined && isModoTreino) {
      feedbackHtml = `<div class="questao-feedback"><strong>${resp === q.correta ? '✓ Correto!' : '✗ Incorreto'}</strong> &middot; <strong>Gabarito:</strong> letra ${String.fromCharCode(65 + q.correta)}. ${q.explicacao}</div>`;
    }

    const explicarBtn = `<button class="btn-mini ai-explain-btn" data-action="explicar" title="Pedir explicação detalhada à IA">&#10024; Explicar com IA</button>`;

    container.innerHTML = `
      <div class="questao-num">QUEST&Atilde;O ${simuladoIdx + 1} de ${simuladoQuestoes.length} &middot; ${q.matNome}</div>
      <div class="questao-texto">${q.enunciado}</div>
      <div class="questao-opcoes">${opcoesHtml}</div>
      <div class="questao-explain-row">${explicarBtn}</div>
      ${feedbackHtml}
    `;

    container.querySelectorAll('.questao-opcao').forEach(el => {
      el.addEventListener('click', () => {
        if (simuladoRespostas[simuladoIdx] !== undefined) return;
        const i = parseInt(el.dataset.idx);
        simuladoRespostas[simuladoIdx] = i;
        renderQuestao();
      });
    });

    const explainBtn = container.querySelector('.ai-explain-btn');
    if (explainBtn) {
      explainBtn.addEventListener('click', () => {
        if (!window.AIWidget || !window.AICore) return;
        const cfg = AICore.load();
        if (!AICore.isConfigured(cfg)) {
          if (window.toast) window.toast('Configure a IA no Dashboard primeiro', 'err');
          else alert('Configure a IA no Dashboard primeiro');
          return;
        }
        const alternativasTxt = q.opcoes.map((a, i) => `${String.fromCharCode(65 + i)}) ${a}`).join('\n');
        const tpl = window.AIPrompts.PROMPTS.questao;
        const message = window.AIPrompts.render(tpl, {
          enunciado: q.enunciado,
          alternativas: alternativasTxt,
          materia: q.matNome || '',
          topico: q.topico || ''
        });
        // Define contexto e abre widget com a mensagem já enviada
        AIWidget.setContext('questao', {
          enunciado: q.enunciado,
          alternativas: q.opcoes,
          materia: q.matNome || '',
          topico: q.topico || ''
        });
        AIWidget.openPanel();
        AIWidget.sendMessage(message);
      });
    }
  }

  function navegarQuestao(dir) {
    const novo = simuladoIdx + dir;
    if (novo >= 0 && novo < simuladoQuestoes.length) {
      simuladoIdx = novo;
      renderQuestao();
    } else if (dir === 1 && novo === simuladoQuestoes.length) {
      finalizarSimulado();
    }
  }

  function finalizarSimulado() {
    if (simuladoTimer) { clearInterval(simuladoTimer); simuladoTimer = null; }
    const respondidas = Object.keys(simuladoRespostas).length;
    if (respondidas < simuladoQuestoes.length) {
      const ok = confirm(`Voc&ecirc; respondeu ${respondidas}/${simuladoQuestoes.length} quest&otilde;es. Deseja finalizar mesmo assim?`);
      if (!ok) {
        // Reinicia timer
        if (simuladoConfig.mode === 'real') {
          simuladoTimer = setInterval(() => {
            simuladoSegundos++;
            const m = Math.floor(simuladoSegundos / 60);
            const s = simuladoSegundos % 60;
            $('sim-timer').textContent = `${String(m).padStart(2,'0')}:${String(s).padStart(2,'0')}`;
          }, 1000);
        }
        return;
      }
    }
    const acertos = simuladoQuestoes.reduce((acc, q, i) => acc + (simuladoRespostas[i] === q.correta ? 1 : 0), 0);
    const total = simuladoQuestoes.length;
    const pct = Math.round(acertos / total * 100);
    const m = Math.floor(simuladoSegundos / 60);
    const s = simuladoSegundos % 60;
    const tempo = `${String(m).padStart(2,'0')}:${String(s).padStart(2,'0')}`;

    state.simuladosCompletos.push({
      materia: $('sim-materia-nome').textContent,
      matId: simuladoConfig.materia,
      acertos,
      total,
      respostas: { ...simuladoRespostas },
      data: hojeKey(),
      tempo
    });
    state.activity[hojeKey()] = (state.activity[hojeKey()] || 0) + 1;
    salvar();

    showSimTab('sim-resultado');
    $('resultado-pct').textContent = pct + '%';
    $('resultado-acertos').textContent = acertos;
    $('resultado-erros').textContent = total - acertos;
    $('resultado-tempo').textContent = tempo;
    $('resultado-titulo').textContent = pct >= 70 ? 'Mandou bem! 🎉' : pct >= 50 ? 'Continue firme! 💪' : 'Vamos com mais foco! 📚';
    $('resultado-sub').textContent = `${acertos} acertos de ${total} quest&otilde;es em ${tempo}`;

    // Lista de questões
    let questoesHtml = '<h4>Revis&atilde;o das Quest&otilde;es</h4>';
    simuladoQuestoes.forEach((q, i) => {
      const resp = simuladoRespostas[i];
      const cls = resp === q.correta ? 'correct' : 'wrong';
      const letraResp = resp !== undefined ? String.fromCharCode(65 + resp) : '?';
      const letraCerta = String.fromCharCode(65 + q.correta);
      questoesHtml += `<div class="resultado-q ${cls}">
        <div class="resultado-q-header">
          <span>Q${i + 1} &middot; ${q.matNome}</span>
          <span>${resp === q.correta ? '✓' : '✗ ' + letraCerta}</span>
        </div>
        <div class="resultado-q-text">${q.enunciado}</div>
        <div style="font-size:.75rem;color:var(--text-muted)">Sua resposta: <b>${letraResp}</b> &middot; Gabarito: <b>${letraCerta}</b></div>
      </div>`;
    });
    $('resultado-questoes').innerHTML = questoesHtml;

    // Atualizar lista de simulados
    renderSimuladosHistorico();
    drawChart();
  }

  function voltarParaConfig() {
    showSimTab('sim-novo');
  }

  function showSimTab(tabId) {
    const ids = ['sim-novo', 'sim-ativo', 'sim-resultado', 'sim-lista', 'sim-questoes'];
    ids.forEach(id => {
      const el = $(id);
      if (el) el.classList.remove('active');
    });
    if ($(tabId)) $(tabId).classList.add('active');
    // Atualiza tab-btn
    const tabBar = document.querySelector('#page-simulados .tab-bar');
    if (tabBar) {
      tabBar.querySelectorAll('.tab-btn').forEach(b => {
        b.classList.toggle('active', b.dataset.tab === tabId);
      });
    }
  }

  function renderSimuladosHistorico() {
    const lista = $('simulados-lista');
    lista.innerHTML = '';
    const sorted = [...state.simuladosCompletos].reverse();
    if (sorted.length === 0) {
      lista.innerHTML = '<div class="empty-state">Nenhum simulado realizado</div>';
      return;
    }
    sorted.forEach((s, idx) => {
      const realIdx = state.simuladosCompletos.length - 1 - idx;
      const pct = Math.round(s.acertos / s.total * 100);
      const div = document.createElement('div');
      div.className = 'sim-item';
      div.innerHTML = `
        <div class="sim-info">
          <div class="sim-materia">${s.materia}</div>
          <div class="sim-meta">${s.acertos}/${s.total} &middot; ${formatarBR(s.data)} &middot; ${s.tempo}</div>
        </div>
        <div class="sim-nota ${pct>=70?'good':pct>=40?'med':'bad'}">${pct}%</div>
        <button class="sim-del" data-idx="${realIdx}">&times;</button>`;
      div.querySelector('.sim-del').addEventListener('click', () => {
        state.simuladosCompletos.splice(realIdx, 1);
        salvarRender();
      });
      lista.appendChild(div);
    });
  }

  function renderBancoQuestoes() {
    const container = $('banco-questoes');
    container.innerHTML = '';
    const qtdPorMateria = 2;
    Object.entries(QUESTOES).forEach(([matId, qs]) => {
      const mat = CONTEUDO.find(m => m.id === matId);
      if (!mat) return;
      qs.slice(0, qtdPorMateria).forEach((q, i) => {
        const div = document.createElement('div');
        div.className = 'banco-q';
        let opcoesHtml = '';
        q.opcoes.forEach((op, j) => {
          const cls = j === q.correta ? 'correct' : '';
          opcoesHtml += `<div class="banco-q-opcao ${cls}"><b>${String.fromCharCode(65+j)})</b> ${op}</div>`;
        });
        div.innerHTML = `
          <span class="banco-q-num">${mat.icon} ${mat.nome}</span>
          <div class="banco-q-texto"><b>${i + 1}.</b> ${q.enunciado}</div>
          <div class="banco-q-opcoes">${opcoesHtml}</div>
          <div class="banco-q-resp">✓ Gabarito: ${String.fromCharCode(65 + q.correta)} &middot; ${q.explicacao}</div>
        `;
        container.appendChild(div);
      });
    });
  }

  function drawChart() {
    const canvas = $('simulado-chart');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const dpr = window.devicePixelRatio || 1;
    const rect = canvas.getBoundingClientRect();
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    ctx.scale(dpr, dpr);
    const w = rect.width, h = rect.height;
    ctx.clearRect(0, 0, w, h);
    const recent = state.simuladosCompletos.slice(-10);
    if (recent.length < 1) {
      ctx.fillStyle = '#94a3b8'; ctx.font = '12px Inter'; ctx.textAlign = 'center';
      ctx.fillText('Fa&ccedil;a um simulado para ver o gr&aacute;fico', w/2, h/2);
      return;
    }
    const values = recent.map(s => Math.round(s.acertos / s.total * 100));
    const barW = Math.max(10, (w - 24) / values.length - 6);
    const pad = 12;
    const maxH = h - 40;
    ctx.font = '600 9px Inter'; ctx.textAlign = 'center';
    // Grid line
    ctx.strokeStyle = 'rgba(124,58,237,0.1)';
    ctx.lineWidth = 1;
    [0, 25, 50, 75, 100].forEach(v => {
      const y = maxH - (v / 100) * maxH + 10;
      ctx.beginPath();
      ctx.moveTo(pad, y);
      ctx.lineTo(w - pad, y);
      ctx.stroke();
    });
    values.forEach((v, i) => {
      const x = pad + i * (barW + 6);
      const barH = (v / 100) * maxH;
      const y = maxH + 10 - barH;
      const grad = ctx.createLinearGradient(0, y, 0, y + barH);
      grad.addColorStop(0, v >= 70 ? '#10b981' : v >= 40 ? '#f59e0b' : '#ef4444');
      grad.addColorStop(1, v >= 70 ? '#059669' : v >= 40 ? '#d97706' : '#dc2626');
      ctx.fillStyle = grad;
      // Rounded bar
      const r = Math.min(4, barW / 2);
      ctx.beginPath();
      ctx.moveTo(x + r, y);
      ctx.lineTo(x + barW - r, y);
      ctx.quadraticCurveTo(x + barW, y, x + barW, y + r);
      ctx.lineTo(x + barW, y + barH);
      ctx.lineTo(x, y + barH);
      ctx.lineTo(x, y + r);
      ctx.quadraticCurveTo(x, y, x + r, y);
      ctx.closePath();
      ctx.fill();
      ctx.fillStyle = '#e8eaff';
      ctx.fillText(v + '%', x + barW/2, y - 4);
    });
  }

  // =====================================================
  // PROGRESSO
  // =====================================================
  function renderProgresso() {
    const stats = calcularStats();
    $('stat-dias').textContent = Object.keys(state.activity).filter(k => state.activity[k] > 0).length;
    $('stat-tempo').textContent = stats.totalHoras + 'h';
    $('stat-media').textContent = stats.mediaSim + '%';
    $('stat-streak').textContent = calcularStreak();

    // Lista de matérias
    const lista = $('progresso-lista');
    lista.innerHTML = '';
    CONTEUDO.forEach(m => {
      const info = stats.topicosPorMateria[m.id] || { feitos: 0, total: 0, pct: 0 };
      const cor = m.cor;
      const div = document.createElement('div');
      div.className = 'prog-row';
      div.innerHTML = `
        <div class="prog-row-head">
          <span class="prog-row-name">${m.icon} ${m.nome}</span>
          <span class="prog-row-pct" style="color:${cor}">${info.pct}%</span>
        </div>
        <div class="prog-bar"><div class="prog-bar-fill" style="width:${info.pct}%;background:linear-gradient(90deg,${cor},${cor}aa)"></div></div>
      `;
      lista.appendChild(div);
    });

    renderHeatmap();
    renderAchievements(stats);
  }

  function renderHeatmap() {
    const container = $('heatmap');
    container.innerHTML = '';
    const hoje = new Date();
    for (let i = 89; i >= 0; i--) {
      const d = new Date(hoje);
      d.setDate(d.getDate() - i);
      const k = chaveData(d);
      const v = state.activity[k] || 0;
      let cls = '';
      if (v > 0) cls = v >= 10 ? 'l4' : v >= 5 ? 'l3' : v >= 2 ? 'l2' : 'l1';
      const cell = document.createElement('div');
      cell.className = 'heat-cell ' + cls;
      cell.title = `${formatarBR(k)}: ${v} a&ccedil;&otilde;es`;
      container.appendChild(cell);
    }
    // Legend
    const legend = document.createElement('div');
    legend.className = 'heat-legend';
    legend.innerHTML = '<span>Menos</span><div class="heat-cell"></div><div class="heat-cell l1"></div><div class="heat-cell l2"></div><div class="heat-cell l3"></div><div class="heat-cell l4"></div><span>Mais</span>';
    container.appendChild(legend);
  }

  function renderAchievements(stats) {
    const container = $('achievements');
    container.innerHTML = '';
    const streak = calcularStreak();
    const ctx = { ...stats, streak };
    CONQUISTAS.forEach(a => {
      const unlocked = a.check(ctx);
      const div = document.createElement('div');
      div.className = 'ach' + (unlocked ? ' unlocked' : '');
      div.innerHTML = `<div class="ach-icon">${a.icon}</div><div class="ach-name">${a.nome}</div>`;
      div.title = a.desc;
      container.appendChild(div);
    });
  }

  // =====================================================
  // CALCULADORA
  // =====================================================
  let calcExpr = '';
  let calcResult = '0';
  let calcHistory = [];
  let calcMem = 0;
  let calcMode = 'deg';

  function initCalc() {
    $$('.calc-modes .mode-btn').forEach(b => {
      b.addEventListener('click', () => {
        $$('.calc-modes .mode-btn').forEach(x => x.classList.remove('active'));
        b.classList.add('active');
        calcMode = b.dataset.mode;
        toast(`Modo ${calcMode.toUpperCase()} ativado`);
      });
    });

    $$('.key[data-num]').forEach(k => {
      k.addEventListener('click', () => {
        if (calcResult === '0' && calcExpr === '') {
          calcResult = k.dataset.num;
        } else if (calcExpr.endsWith('=')) {
          calcExpr = '';
          calcResult = k.dataset.num;
        } else {
          calcResult += k.dataset.num;
        }
        updateCalcDisplay();
      });
    });

    $$('.key[data-fn]').forEach(k => {
      k.addEventListener('click', () => handleCalcFn(k.dataset.fn));
    });

    $('clear-history').addEventListener('click', () => {
      calcHistory = [];
      $('calc-history-list').innerHTML = '';
    });
  }

  function handleCalcFn(fn) {
    try {
      switch (fn) {
        case 'ac':
          calcExpr = '';
          calcResult = '0';
          $('calc-history').textContent = '';
          break;
        case 'back':
          calcResult = calcResult.slice(0, -1) || '0';
          break;
        case 'add': calcResult += '+'; break;
        case 'sub': calcResult += '-'; break;
        case 'mul': calcResult += '\u00d7'; break;
        case 'div': calcResult += '\u00f7'; break;
        case 'pct': calcResult += '%'; break;
        case 'pow': calcResult += '^'; break;
        case 'sq': {
          const r = evalExpr(calcResult);
          $('calc-history').textContent = `sq(${r})`;
          calcResult = String(Math.pow(r, 2));
          break;
        }
        case 'cube': {
          const r = evalExpr(calcResult);
          $('calc-history').textContent = `cube(${r})`;
          calcResult = String(Math.pow(r, 3));
          break;
        }
        case 'sqrt': {
          const r = evalExpr(calcResult);
          $('calc-history').textContent = `\u221a(${r})`;
          calcResult = String(Math.sqrt(r));
          break;
        }
        case 'pi': calcResult = String(Math.PI); break;
        case 'e': calcResult = String(Math.E); break;
        case 'fact': {
          const r = evalExpr(calcResult);
          $('calc-history').textContent = `${r}!`;
          calcResult = String(factorial(r));
          break;
        }
        case 'lparen': calcResult += '('; break;
        case 'rparen': calcResult += ')'; break;
        case 'neg': {
          const r = evalExpr(calcResult);
          calcResult = String(-r);
          break;
        }
        case 'abs': {
          const r = evalExpr(calcResult);
          calcResult = String(Math.abs(r));
          $('calc-history').textContent = `|${r}|`;
          break;
        }
        case 'sin': case 'cos': case 'tan':
        case 'asin': case 'acos': case 'atan': {
          const r = evalExpr(calcResult);
          const rad = calcMode === 'rad' ? r : r * Math.PI / 180;
          const inv = calcMode === 'hyp' || ['asin','acos','atan'].includes(fn);
          let val;
          if (fn === 'sin') val = Math.sin(rad);
          else if (fn === 'cos') val = Math.cos(rad);
          else if (fn === 'tan') val = Math.tan(rad);
          else if (fn === 'asin') val = calcMode === 'rad' ? Math.asin(r) : Math.asin(r) * 180 / Math.PI;
          else if (fn === 'acos') val = calcMode === 'rad' ? Math.acos(r) : Math.acos(r) * 180 / Math.PI;
          else val = calcMode === 'rad' ? Math.atan(r) : Math.atan(r) * 180 / Math.PI;
          $('calc-history').textContent = `${fn}(${r})`;
          calcResult = String(Math.round(val * 1e10) / 1e10);
          break;
        }
        case 'log': {
          const r = evalExpr(calcResult);
          $('calc-history').textContent = `log(${r})`;
          calcResult = String(Math.log10(r));
          break;
        }
        case 'ln': {
          const r = evalExpr(calcResult);
          $('calc-history').textContent = `ln(${r})`;
          calcResult = String(Math.log(r));
          break;
        }
        case 'mc': calcMem = 0; updateMemDisplay(); toast('Memória limpa'); break;
        case 'mr': calcResult = String(calcMem); break;
        case 'mplus': calcMem += evalExpr(calcResult); updateMemDisplay(); toast('M+'); break;
        case 'mminus': calcMem -= evalExpr(calcResult); updateMemDisplay(); toast('M-'); break;
        case 'ms': calcMem = evalExpr(calcResult); updateMemDisplay(); toast('MS'); break;
        case 'eq': {
          const r = evalExpr(calcResult);
          if (r === Infinity || isNaN(r)) {
            toast('Expressão inválida', 'error');
            return;
          }
          $('calc-history').textContent = calcResult + ' =';
          calcHistory.unshift({ expr: calcResult, result: r });
          if (calcHistory.length > 20) calcHistory.pop();
          renderCalcHistory();
          calcExpr = calcResult + ' =';
          calcResult = String(Math.round(r * 1e10) / 1e10);
          break;
        }
      }
      updateCalcDisplay();
    } catch (e) {
      toast('Erro no cálculo', 'error');
    }
  }

  function evalExpr(expr) {
    if (!expr) return 0;
    let s = expr
      .replace(/\u00d7/g, '*')
      .replace(/\u00f7/g, '/')
      .replace(/\^/g, '**')
      .replace(/%/g, '/100');
    s = s.replace(/(\d+(?:\.\d+)?)\(/g, '$1*(');
    // Segurança: só números e ops
    if (!/^[\d+\-*/().\s^%eE]*$/.test(s.replace(/\*\*/g, '^'))) {
      throw new Error('Expressão inválida');
    }
    return Function('"use strict"; return (' + s + ')')();
  }

  function factorial(n) {
    if (n < 0 || !Number.isInteger(n)) throw new Error('Factorial inválido');
    if (n > 170) return Infinity;
    let r = 1;
    for (let i = 2; i <= n; i++) r *= i;
    return r;
  }

  function updateCalcDisplay() {
    $('calc-expr').textContent = calcResult;
  }

  function updateMemDisplay() {
    if (calcMem !== 0) {
      $('calc-mem-display').style.display = 'block';
      $('calc-mem-value').textContent = calcMem;
    } else {
      $('calc-mem-display').style.display = 'none';
    }
  }

  function renderCalcHistory() {
    const ul = $('calc-history-list');
    ul.innerHTML = '';
    calcHistory.forEach(h => {
      const li = document.createElement('li');
      li.innerHTML = `${h.expr} = <b>${h.result}</b>`;
      li.addEventListener('click', () => {
        calcResult = String(h.result);
        updateCalcDisplay();
      });
      ul.appendChild(li);
    });
  }

  // =====================================================
  // ANOTAÇÕES
  // =====================================================
  let editandoNotaId = null;

  function initNotes() {
    const matSel = $('note-materia');
    const matSelBalloon = $('balloon-materia');
    const filterSel = $('note-filter-materia');
    const opts = '<option value="">Geral</option>' + CONTEUDO.map(m => `<option value="${m.id}">${m.nome}</option>`).join('');
    matSel.innerHTML = opts;
    matSelBalloon.innerHTML = opts;
    filterSel.innerHTML = '<option value="">Todas mat&eacute;rias</option>' + CONTEUDO.map(m => `<option value="${m.id}">${m.nome}</option>`).join('');

    $('note-data').value = hojeKey();
    $('balloon-data').value = hojeKey();

    $('note-salvar').addEventListener('click', salvarNota);
    $('note-cancelar').addEventListener('click', limparFormNota);
    $('note-search').addEventListener('input', renderNotes);
    $('note-filter-materia').addEventListener('change', renderNotes);
  }

  function salvarNota() {
    const titulo = $('note-titulo').value.trim();
    const materia = $('note-materia').value;
    const data = $('note-data').value;
    const conteudo = $('note-conteudo').value.trim();
    if (!titulo || !conteudo) {
      toast('Preencha t&iacute;tulo e conte&uacute;do', 'error');
      return;
    }
    if (editandoNotaId) {
      const n = state.notas.find(x => x.id === editandoNotaId);
      if (n) { n.titulo = titulo; n.materia = materia; n.data = data; n.conteudo = conteudo; n.atualizadaEm = new Date().toISOString(); }
      editandoNotaId = null;
    } else {
      state.notas.unshift({
        id: Date.now().toString(36),
        titulo, materia, data, conteudo,
        pinned: false,
        criadaEm: new Date().toISOString()
      });
    }
    salvar();
    limparFormNota();
    renderNotes();
    renderBalloonList();
    toast('Anota&ccedil;&atilde;o salva!', 'success');
  }

  function limparFormNota() {
    $('note-titulo').value = '';
    $('note-conteudo').value = '';
    $('note-materia').value = '';
    $('note-data').value = hojeKey();
    editandoNotaId = null;
  }

  function renderNotes() {
    const container = $('notes-lista');
    container.innerHTML = '';
    const busca = ($('note-search').value || '').toLowerCase();
    const filtro = $('note-filter-materia').value;
    let notas = [...state.notas].sort((a, b) => {
      if (a.pinned !== b.pinned) return b.pinned ? 1 : -1;
      return new Date(b.criadaEm) - new Date(a.criadaEm);
    });
    notas = notas.filter(n => {
      if (filtro && n.materia !== filtro) return false;
      if (busca && !(`${n.titulo} ${n.conteudo}`.toLowerCase().includes(busca))) return false;
      return true;
    });
    if (notas.length === 0) {
      container.innerHTML = '<div class="empty-state">Nenhuma anota&ccedil;&atilde;o ainda. Crie uma acima!</div>';
      return;
    }
    notas.forEach(n => container.appendChild(criarCardNota(n)));
  }

  function criarCardNota(n) {
    const mat = CONTEUDO.find(m => m.id === n.materia);
    const div = document.createElement('div');
    div.className = 'note-card' + (n.pinned ? ' pinned' : '');
    const matTag = mat ? `<span class="note-tag" style="background:${mat.cor}20;color:${mat.cor}">${mat.nome}</span>` : '<span class="note-tag">Geral</span>';
    div.innerHTML = `
      <div class="note-card-head">
        <div class="note-card-title">${n.titulo}</div>
        ${n.pinned ? '<span class="note-card-pin">\u{1F4CC}</span>' : ''}
      </div>
      <div class="note-card-meta">
        ${matTag}
        <span>${formatarBR(n.data)}</span>
      </div>
      <div class="note-card-text">${n.conteudo}</div>
      <div class="note-card-actions">
        <button class="btn-mini" data-act="pin">${n.pinned ? 'Desfixar' : 'Fixar'}</button>
        <button class="btn-mini" data-act="edit">Editar</button>
        <button class="btn-mini" data-act="del">Excluir</button>
      </div>
    `;
    div.querySelector('[data-act="pin"]').addEventListener('click', () => {
      n.pinned = !n.pinned;
      salvar();
      renderNotes();
      renderBalloonList();
    });
    div.querySelector('[data-act="edit"]').addEventListener('click', () => {
      editandoNotaId = n.id;
      $('note-titulo').value = n.titulo;
      $('note-materia').value = n.materia;
      $('note-data').value = n.data;
      $('note-conteudo').value = n.conteudo;
      $('note-titulo').focus();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
    div.querySelector('[data-act="del"]').addEventListener('click', () => {
      if (confirm('Excluir esta anota&ccedil;&atilde;o?')) {
        state.notas = state.notas.filter(x => x.id !== n.id);
        salvar();
        renderNotes();
        renderBalloonList();
        toast('Anota&ccedil;&atilde;o exclu&iacute;da', 'success');
      }
    });
    return div;
  }

  // =====================================================
  // BALÃO LATERAL DE ANOTAÇÕES
  // =====================================================
  function initBalloon() {
    $('notes-fab').addEventListener('click', () => {
      $('notes-balloon').classList.add('open');
      $('balloon-date').textContent = new Date().toLocaleDateString('pt-BR', { weekday: 'long', day: 'numeric', month: 'long' });
      renderBalloonList();
    });
    $('balloon-close').addEventListener('click', () => {
      $('notes-balloon').classList.remove('open');
    });
    $('balloon-save').addEventListener('click', () => {
      const titulo = $('balloon-titulo').value.trim();
      const materia = $('balloon-materia').value;
      const data = $('balloon-data').value || hojeKey();
      const texto = $('balloon-texto').value.trim();
      if (!titulo || !texto) {
        toast('Preencha t&iacute;tulo e texto', 'error');
        return;
      }
      state.notas.unshift({
        id: Date.now().toString(36),
        titulo, materia, data, conteudo: texto, pinned: false,
        criadaEm: new Date().toISOString()
      });
      salvar();
      $('balloon-titulo').value = '';
      $('balloon-texto').value = '';
      $('balloon-data').value = hojeKey();
      renderBalloonList();
      renderNotes();
      toast('Anota&ccedil;&atilde;o salva!', 'success');
    });
  }

  function renderBalloonList() {
    const list = $('balloon-list');
    list.innerHTML = '';
    const notas = state.notas.slice(0, 5);
    if (notas.length === 0) {
      list.innerHTML = '<div class="empty-state" style="padding:12px;font-size:.8rem">Nenhuma anota&ccedil;&atilde;o</div>';
      return;
    }
    notas.forEach(n => list.appendChild(criarCardNota(n)));
  }

  // =====================================================
  // POMODORO
  // =====================================================
  let pomoInterval = null;
  let pomoRemaining = 25 * 60;
  let pomoTotal = 25 * 60;
  let pomoMode = 'focus';
  let pomoRunning = false;

  function initPomodoro() {
    $$('.pomodoro-mode .mode-btn').forEach(b => {
      b.addEventListener('click', () => {
        $$('.pomodoro-mode .mode-btn').forEach(x => x.classList.remove('active'));
        b.classList.add('active');
        pomoMode = b.dataset.pmode;
        pomoTotal = pomoMode === 'focus' ? 25 * 60 : pomoMode === 'short' ? 5 * 60 : 15 * 60;
        pomoRemaining = pomoTotal;
        updatePomoDisplay();
      });
    });
    $('pomo-start').addEventListener('click', startPomo);
    $('pomo-pause').addEventListener('click', pausePomo);
    $('pomo-reset').addEventListener('click', resetPomo);
    updatePomoDisplay();
  }

  function startPomo() {
    if (pomoRunning) return;
    pomoRunning = true;
    $('pomo-start').style.display = 'none';
    $('pomo-pause').style.display = '';
    pomoInterval = setInterval(() => {
      pomoRemaining--;
      if (pomoRemaining <= 0) {
        pomoComplete();
      } else {
        updatePomoDisplay();
      }
    }, 1000);
  }

  function pausePomo() {
    pomoRunning = false;
    clearInterval(pomoInterval);
    $('pomo-start').style.display = '';
    $('pomo-pause').style.display = 'none';
  }

  function resetPomo() {
    pausePomo();
    pomoRemaining = pomoTotal;
    updatePomoDisplay();
  }

  function pomoComplete() {
    pausePomo();
    if (pomoMode === 'focus') {
      if (state.pomodoro.data !== new Date().toDateString()) {
        state.pomodoro = { count: 0, tempo: 0, data: new Date().toDateString() };
      }
      state.pomodoro.count++;
      state.pomodoro.tempo += 25;
      state.activity[hojeKey()] = (state.activity[hojeKey()] || 0) + 1;
      salvar();
      toast('Ciclo de foco conclu&iacute;do! Hora da pausa.', 'success');
    } else {
      toast('Pausa conclu&iacute;da! Vamos voltar aos estudos.', 'success');
    }
    pomoRemaining = pomoTotal;
    updatePomoDisplay();
    $('pomo-count').textContent = state.pomodoro.data === new Date().toDateString() ? state.pomodoro.count : 0;
    $('pomo-tempo').textContent = state.pomodoro.data === new Date().toDateString() ? state.pomodoro.tempo : 0;
  }

  function updatePomoDisplay() {
    const m = Math.floor(pomoRemaining / 60);
    const s = pomoRemaining % 60;
    $('pomo-time').textContent = `${String(m).padStart(2,'0')}:${String(s).padStart(2,'0')}`;
    $('pomo-label').textContent = pomoMode === 'focus' ? 'Foco' : pomoMode === 'short' ? 'Pausa Curta' : 'Pausa Longa';
    const circ = 2 * Math.PI * 100;
    const pct = 1 - pomoRemaining / pomoTotal;
    $('pomo-fill').style.strokeDashoffset = circ - (circ * pct);
    if (state.pomodoro.data === new Date().toDateString()) {
      $('pomo-count').textContent = state.pomodoro.count;
      $('pomo-tempo').textContent = state.pomodoro.tempo;
    }
  }

  // =====================================================
  // CRONOGRAMA
  // =====================================================
  let cronoOffset = 0;

  function renderCronograma() {
    const hoje = new Date();
    const ref = new Date(hoje);
    ref.setDate(ref.getDate() + cronoOffset * 7);
    const semana = semanaRef(ref, 0);
    const seg = new Date(semana[1]);
    const sab = new Date(semana[6]);
    $('week-label').textContent =
      `${seg.getDate()}/${seg.getMonth()+1} a ${sab.getDate()}/${sab.getMonth()+1}`;

    const grid = $('cronograma-grid');
    grid.innerHTML = '';
    const mapa = ['dom','seg','ter','qua','qui','sex','sab'];
    const DIAS = ['Dom','Seg','Ter','Qua','Qui','Sex','Sáb'];

    for (let i = 1; i <= 6; i++) {
      const key = mapa[i];
      const dataStr = semana[i];
      const materias = state.cronograma[key] || [];
      const checklist = state.checklists[dataStr] || [];

      const day = document.createElement('div');
      day.className = 'crono-day';
      const hdr = document.createElement('div');
      hdr.className = `crono-day-header day-color-${key}`;
      hdr.innerHTML = `${DIAS[i]} <span class="crono-day-date">${formatarBR(dataStr)}</span>`;
      day.appendChild(hdr);

      const body = document.createElement('div');
      body.className = 'crono-day-body';
      if (materias.length === 0) {
        body.innerHTML = '<div class="crono-empty">Dia livre</div>';
      } else {
        materias.forEach(m => {
          const mat = typeof m === 'string' ? m : m.nome;
          const item = document.createElement('div');
          item.className = 'crono-subject';
          const done = checklist.some(x => x.text === mat);
          if (done) item.classList.add('done');
          const cb = document.createElement('div');
          cb.className = 'crono-cb' + (done ? ' checked' : '');
          cb.textContent = done ? '\u2713' : '';
          cb.addEventListener('click', () => {
            if (!state.checklists[dataStr]) state.checklists[dataStr] = [];
            const idx = state.checklists[dataStr].findIndex(x => x.text === mat);
            if (idx >= 0) state.checklists[dataStr].splice(idx, 1);
            else state.checklists[dataStr].push({ text: mat, done: true });
            state.activity[dataStr] = (state.activity[dataStr] || 0) + 1;
            salvarRender();
          });
          const nome = document.createElement('span');
          nome.className = 'crono-name';
          nome.textContent = mat;
          item.appendChild(cb);
          item.appendChild(nome);
          body.appendChild(item);
        });
      }
      day.appendChild(body);
      grid.appendChild(day);
    }
  }

  function initCrono() {
    $('prev-week').addEventListener('click', () => { cronoOffset--; renderCronograma(); });
    $('next-week').addEventListener('click', () => { cronoOffset++; renderCronograma(); });
  }

  // =====================================================
  // CALENDÁRIO
  // =====================================================
  let calMes = new Date().getMonth();
  let calAno = new Date().getFullYear();
  let calDiaSel = null;

  function renderCalendario() {
    $('cal-month-label').textContent = nomeMes(calMes) + ' ' + calAno;
    const grid = $('cal-days');
    grid.innerHTML = '';
    const primeiro = new Date(calAno, calMes, 1).getDay();
    const diasNoMes = new Date(calAno, calMes + 1, 0).getDate();
    const diasPrev = new Date(calAno, calMes, 0).getDate();
    const hoje = hojeKey();

    for (let i = primeiro - 1; i >= 0; i--) {
      const dia = diasPrev - i;
      const d = new Date(calAno, calMes - 1, dia);
      grid.appendChild(criarDiaCal(dia, chaveData(d), true, hoje));
    }
    for (let d = 1; d <= diasNoMes; d++) {
      const dt = new Date(calAno, calMes, d);
      grid.appendChild(criarDiaCal(d, chaveData(dt), false, hoje));
    }
    const total = primeiro + diasNoMes;
    const rest = (7 - total % 7) % 7;
    for (let d = 1; d <= rest; d++) {
      const dt = new Date(calAno, calMes + 1, d);
      grid.appendChild(criarDiaCal(d, chaveData(dt), true, hoje));
    }
    if (calDiaSel) mostrarDetalheCal(calDiaSel);
  }

  function criarDiaCal(num, key, other, hoje) {
    const div = document.createElement('div');
    div.className = 'cal-day';
    if (other) div.classList.add('other-month');
    if (key === hoje) div.classList.add('today');
    if (state.calendario[key] && state.calendario[key].trim()) div.classList.add('has-goal');
    if (key === calDiaSel) div.classList.add('selected');
    div.textContent = num;
    div.addEventListener('click', () => {
      calDiaSel = key;
      $$('.cal-day').forEach(d => d.classList.remove('selected'));
      div.classList.add('selected');
      mostrarDetalheCal(key);
    });
    return div;
  }

  function mostrarDetalheCal(key) {
    $('cal-day-detail').classList.remove('hidden');
    const d = new Date(key);
    $('cal-day-title').textContent =
      d.toLocaleDateString('pt-BR', { weekday: 'long', day: 'numeric', month: 'long' });
    $('cal-goal-input').value = state.calendario[key] || '';
    renderCalChecklist(key);
  }

  function renderCalChecklist(key) {
    const ul = $('cal-checklist-items');
    ul.innerHTML = '';
    (state.checklists[key] || []).forEach((item, idx) => {
      const li = document.createElement('li');
      li.className = 'cal-checklist-item' + (item.done ? ' done' : '');
      const cb = document.createElement('input');
      cb.type = 'checkbox';
      cb.checked = item.done;
      cb.addEventListener('change', () => {
        state.checklists[key][idx].done = !state.checklists[key][idx].done;
        state.activity[key] = (state.activity[key] || 0) + (state.checklists[key][idx].done ? 1 : -1);
        salvarRender();
      });
      const span = document.createElement('span');
      span.textContent = item.text;
      const del = document.createElement('button');
      del.className = 'del-task';
      del.textContent = '\u2715';
      del.addEventListener('click', () => {
        state.checklists[key].splice(idx, 1);
        salvarRender();
      });
      li.appendChild(cb);
      li.appendChild(span);
      li.appendChild(del);
      ul.appendChild(li);
    });
  }

  function initCal() {
    $('prev-month').addEventListener('click', () => {
      calMes--; if (calMes < 0) { calMes = 11; calAno--; }
      calDiaSel = null; $('cal-day-detail').classList.add('hidden');
      renderCalendario();
    });
    $('next-month').addEventListener('click', () => {
      calMes++; if (calMes > 11) { calMes = 0; calAno++; }
      calDiaSel = null; $('cal-day-detail').classList.add('hidden');
      renderCalendario();
    });
    $('save-cal-goal').addEventListener('click', () => {
      if (calDiaSel) {
        const goal = $('cal-goal-input').value.trim();
        if (goal) state.calendario[calDiaSel] = goal;
        else delete state.calendario[calDiaSel];
        salvarRender();
        toast('Meta salva!', 'success');
      }
    });
    $('cal-add-task').addEventListener('click', () => {
      if (!calDiaSel) return;
      const text = prompt('Nova tarefa:');
      if (text && text.trim()) {
        if (!state.checklists[calDiaSel]) state.checklists[calDiaSel] = [];
        state.checklists[calDiaSel].push({ text: text.trim(), done: false });
        salvarRender();
      }
    });
  }

  // =====================================================
  // FERRAMENTAS (sub-rotas)
  // =====================================================
  function initFerramentas() {
    $$('.tool-card').forEach(card => {
      card.addEventListener('click', () => {
        const tool = card.dataset.tool;
        if (tool === 'cronograma') navegarPara('cronograma');
        else if (tool === 'calendario') navegarPara('calendario');
        else if (tool === 'calc') { navegarPara('calc'); updateCalcDisplay(); }
        else if (tool === 'notes') { navegarPara('notes'); renderNotes(); }
        else if (tool === 'pomodoro') { navegarPara('pomodoro'); updatePomoDisplay(); }
        else if (tool === 'dados') navegarPara('dados');
      });
    });
    // Voltar
    $$('.back-tool').forEach(b => {
      b.addEventListener('click', () => navegarPara('ferramentas'));
    });
  }

  // =====================================================
  // DADOS / BACKUP
  // =====================================================
  function initDados() {
    $('export-data').addEventListener('click', () => {
      const blob = new Blob([JSON.stringify(state, null, 2)], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `inss2026-backup-${hojeKey()}.json`;
      a.click();
      URL.revokeObjectURL(url);
      toast('Backup exportado!', 'success');
    });
    $('import-data').addEventListener('click', () => $('import-file').click());
    $('import-file').addEventListener('change', e => {
      const file = e.target.files[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = ev => {
        try {
          const data = JSON.parse(ev.target.result);
          if (confirm('Substituir todos os dados atuais pelos do arquivo?')) {
            state = data;
            salvar();
            renderizar();
            toast('Dados importados!', 'success');
          }
        } catch (err) {
          toast('Arquivo inv&aacute;lido', 'error');
        }
      };
      reader.readAsText(file);
    });
    $('reset-data').addEventListener('click', () => {
      if (confirm('ATENÇÃO: Isso apagar&aacute; TODO o seu progresso. Continuar?')) {
        if (confirm('Tem certeza absoluta? Esta a&ccedil;&atilde;o n&atilde;o pode ser desfeita.')) {
          localStorage.removeItem(KEY);
          state = estadoPadrao();
          salvar();
          renderizar();
          toast('Dados resetados', 'warning');
        }
      }
    });
  }

  // =====================================================
  // TABS GERAIS
  // =====================================================
  function initTabs() {
    $$('.tab-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const container = btn.closest('.tab-bar').parentElement;
        container.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
        container.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
        btn.classList.add('active');
        const tab = $('sim-' + btn.dataset.tab.split('-')[1]);
        if (tab) tab.classList.add('active');
        if (btn.dataset.tab === 'sim-lista') {
          renderSimuladosHistorico();
          drawChart();
        } else if (btn.dataset.tab === 'sim-questoes') {
          renderBancoQuestoes();
        }
      });
    });
  }

  // =====================================================
  // RENDER GERAL
  // =====================================================
  function renderizar() {
    $$('.streak-pill').forEach(el => {
      el.querySelector('#streak-count').textContent = calcularStreak();
    });
    const active = document.querySelector('.page.active');
    if (!active) return;
    const id = active.id.replace('page-', '');
    switch (id) {
      case 'dashboard': renderDashboard(); break;
      case 'materias': renderMaterias(); break;
      case 'topassuntos': renderTopAssuntos(); break;
      case 'simulados':
        renderSimuladosHistorico();
        if ($('sim-lista').classList.contains('active')) drawChart();
        if ($('sim-questoes').classList.contains('active')) renderBancoQuestoes();
        break;
      case 'progresso': renderProgresso(); break;
      case 'cronograma': renderCronograma(); break;
      case 'calendario': renderCalendario(); break;
      case 'notes': renderNotes(); break;
      case 'calc': updateCalcDisplay(); break;
      case 'pomodoro': updatePomoDisplay(); break;
      case 'tutor-ia': if (window.AIChatPage) AIChatPage.refresh(); break;
    }
  }

  // =====================================================
  // INIT
  // =====================================================
  function init() {
    carregar();
    initTema();
    initNav();
    initMaterias();
    initTopAssuntos();
    initSimulados();
    initTabs();
    initCrono();
    initCal();
    initFerramentas();
    initNotes();
    initBalloon();
    initPomodoro();
    initDados();

    // IA: inicializar widget flutuante, página dedicada e card no Dashboard
    if (window.AIWidget) AIWidget.init({ onConfigChange: () => {} });
    if (window.AIChatPage) AIChatPage.init();
    if (window.AIConfig) AIConfig.renderCard('ai-config-host');

    // First render
    renderizar();

    // Countdown tick
    setInterval(updateCountdown, 1000);

    // Resize
    let rt;
    window.addEventListener('resize', () => {
      clearTimeout(rt);
      rt = setTimeout(() => {
        if ($('sim-lista') && $('sim-lista').classList.contains('active')) drawChart();
      }, 200);
    });
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
