/* ==========================================================
   api/ai-page.js — Página dedicada "Tutor IA"
   ========================================================== */
(function (global) {
  'use strict';

  function esc(s) {
    return String(s)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;').replace(/'/g, '&#39;');
  }
  function md(s) {
    let out = esc(s);
    out = out.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
    out = out.replace(/\*(.+?)\*/g, '<em>$1</em>');
    out = out.replace(/`(.+?)`/g, '<code>$1</code>');
    out = out.replace(/\n{2,}/g, '</p><p>');
    out = out.replace(/\n- (.+)/g, '</p><ul><li>$1</li></ul>');
    out = out.replace(/\n(\d+)\. (.+)/g, '</p><ol><li>$2</li></ol>');
    out = out.replace(/\n/g, '<br>');
    return '<p>' + out + '</p>';
  }

  let contexto = { tipo: 'geral', vars: {} };
  let isSending = false;

  function init() {
    const page = document.getElementById('page-tutor-ia');
    if (!page) return;
    page.innerHTML = `
      <div class="page-head">
        <div>
          <h2>&#10024; Tutor IA</h2>
          <p>Seu professor pessoal de INSS 2026, disponível 24h</p>
        </div>
        <div class="page-head-actions">
          <button class="btn-mini" id="ai-page-config" title="Configurar">&#9881;</button>
        </div>
      </div>

      <div class="ai-page-grid">
        <div class="ai-page-chat glass-card">
          <div class="ai-context" id="ai-page-context">
            <span class="ai-context-tag" id="ai-page-context-tag">Contexto: geral</span>
            <button class="ai-context-clear hidden" id="ai-page-context-clear">limpar</button>
          </div>
          <div class="ai-messages" id="ai-page-messages"></div>
          <div class="ai-quick" id="ai-page-quick"></div>
          <div class="ai-input-wrap">
            <textarea id="ai-page-input" rows="2" placeholder="Pergunte algo... (Enter envia, Shift+Enter quebra linha)"></textarea>
            <button id="ai-page-send" class="ai-send-btn" title="Enviar">&#10148;</button>
          </div>
        </div>

        <div class="ai-page-side">
          <div class="glass-card">
            <h4>&#127919; Ações rápidas</h4>
            <button class="ai-side-btn" data-action="plano">&#128197; Plano de 7 dias</button>
            <button class="ai-side-btn" data-action="resumo-geral">&#128221; Resumo do edital</button>
            <button class="ai-side-btn" data-action="dicas">&#129504; Dicas de estudo</button>
            <button class="ai-side-btn" data-action="simulado">&#127942; Montar simulado personalizado</button>
            <button class="ai-side-btn" data-action="revisao">&#128260; Revisão espaçada</button>
          </div>
          <div class="glass-card">
            <h4>&#128218; Matérias do edital</h4>
            <div id="ai-page-materias" class="ai-materias-mini"></div>
          </div>
          <div class="glass-card">
            <h4>&#128200; Progresso atual</h4>
            <div id="ai-page-progress"></div>
          </div>
        </div>
      </div>
    `;

    /* eventos */
    document.getElementById('ai-page-config').addEventListener('click', () => {
      if (global.AIConfig) global.AIConfig.openModal();
    });
    document.getElementById('ai-page-send').addEventListener('click', send);
    const ta = document.getElementById('ai-page-input');
    ta.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        send();
      }
    });
    ta.addEventListener('input', () => {
      ta.style.height = 'auto';
      ta.style.height = Math.min(200, ta.scrollHeight) + 'px';
    });
    document.getElementById('ai-page-context-clear').addEventListener('click', () => setContext('geral', {}));

    document.querySelectorAll('[data-action]').forEach(b => {
      b.addEventListener('click', () => runAction(b.dataset.action));
    });

    renderMaterias();
    renderProgress();
    setContext('geral', {});
    renderMessages();
  }

  function runAction(action) {
    const prompts = {
      plano: 'Monte um plano de estudos realista de 7 dias para o concurso do INSS (CEBRASPE, 15/03/2026), priorizando matérias com menor progresso e considerando 2-3h de estudo por dia.',
      'resumo-geral': 'Faça um resumo geral do edital do INSS 2026, listando as 9 matérias e o que cai em cada uma, com foco no que é mais cobrado pelo CEBRASPE.',
      dicas: 'Quais são as 10 melhores técnicas e dicas de estudo para concursos do CEBRASPE? Seja prático e direto.',
      simulado: 'Me sugira uma estratégia para montar um simulado personalizado: quantas questões por matéria, quais temas priorizar e como analisar erros.',
      revisao: 'Explique como aplicar revisão espaçada (curva do esquecimento) para o conteúdo do INSS. Dê um cronograma prático.'
    };
    if (prompts[action]) {
      send(prompts[action]);
    }
  }

  function setContext(tipo, vars) {
    contexto = { tipo, vars: vars || {} };
    const tag = document.getElementById('ai-page-context-tag');
    const clr = document.getElementById('ai-page-context-clear');
    let label = 'geral';
    if (tipo === 'materia' && vars.materia) label = `Matéria: ${vars.materia}`;
    else if (tipo === 'topico' && vars.topico) label = `Tópico: ${vars.topico}`;
    else if (tipo === 'questao') label = 'Questão de simulado';
    if (tag) tag.textContent = `Contexto: ${label}`;
    if (clr) clr.classList.toggle('hidden', tipo === 'geral');
    renderQuick();
  }

  function renderMaterias() {
    const el = document.getElementById('ai-page-materias');
    if (!el || !global.INSS_DATA) return;
    el.innerHTML = global.INSS_DATA.CONTEUDO.map(m =>
      `<button class="ai-mat-mini" data-mat="${m.id}">${m.icon || '📘'} ${m.nome}</button>`
    ).join('');
    el.querySelectorAll('[data-mat]').forEach(b => {
      b.addEventListener('click', () => {
        const mat = global.INSS_DATA.CONTEUDO.find(m => m.id === b.dataset.mat);
        if (mat) setContext('materia', { materia: mat.nome });
      });
    });
  }

  function renderProgress() {
    const el = document.getElementById('ai-page-progress');
    if (!el || !global.INSS_DATA) return;
    const KEY = 'inss2026_galactica_v2';
    let state = null;
    try { state = JSON.parse(localStorage.getItem(KEY) || 'null'); } catch (_) {}
    const topicos = state && state.topicos ? state.topicos : {};
    const linhas = global.INSS_DATA.CONTEUDO.map(m => {
      const t = topicos[m.id] || {};
      const done = Object.values(t).filter(Boolean).length;
      const total = m.topicos.length;
      const pct = total ? Math.round(done / total * 100) : 0;
      return `<div class="ai-prog-row">
        <span>${m.icon || '📘'} ${m.nome}</span>
        <span><b>${pct}%</b></span>
      </div>`;
    }).join('');
    el.innerHTML = linhas || '<p class="muted">Nenhum progresso salvo ainda.</p>';
  }

  function renderQuick() {
    const el = document.getElementById('ai-page-quick');
    if (!el) return;
    const map = {
      geral: [
        { label: '🎯 Plano de 7 dias', action: 'plano' },
        { label: '📚 Resumo do edital', action: 'resumo-geral' },
        { label: '🧠 Dicas de estudo', action: 'dicas' }
      ],
      materia: [
        { label: '📝 Resumo', prompt: `Faça um resumo estruturado em bullets dos pontos mais importantes da matéria "${contexto.vars.materia}" para o CEBRASPE.` },
        { label: '⚠️ Pegadinhas', prompt: `Quais as pegadinhas mais comuns do CEBRASPE em "${contexto.vars.materia}"? Dê exemplos.` },
        { label: '❓ Quiz rápido', prompt: `Crie 3 questões no estilo CEBRASPE sobre "${contexto.vars.materia}", com gabarito comentado.` }
      ],
      topico: [
        { label: '📖 Explicar', prompt: `Explique o tópico "${contexto.vars.topico}" de forma didática, com exemplos práticos e base legal quando aplicável.` },
        { label: '📝 Resumir', prompt: `Resuma "${contexto.vars.topico}" em até 8 bullets com o que mais cai em prova.` }
      ]
    };
    const list = map[contexto.tipo] || map.geral;
    el.innerHTML = list.map((a, i) =>
      `<button class="ai-quick-btn" data-idx="${i}">${a.label}</button>`
    ).join('');
    el.querySelectorAll('.ai-quick-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const idx = parseInt(btn.dataset.idx, 10);
        const action = list[idx];
        if (action.action) runAction(action.action);
        else if (action.prompt) send(action.prompt);
      });
    });
  }

  function renderMessages() {
    const el = document.getElementById('ai-page-messages');
    if (!el) return;
    const cfg = global.AICore.load();
    const history = cfg.history || [];
    if (history.length === 0) {
      el.innerHTML = `<div class="ai-welcome">
        <div class="ai-welcome-icon">&#10024;</div>
        <h3>Bem-vindo ao Tutor IA</h3>
        <p>Estou pronto para te ajudar com qualquer matéria do edital. Configure sua API key no Dashboard se ainda não fez isso.</p>
        <p>Use as <b>ações rápidas</b> ao lado ou clique numa <b>matéria</b> para focar o contexto.</p>
      </div>`;
      return;
    }
    el.innerHTML = history.map(m =>
      `<div class="ai-msg ${m.role === 'user' ? 'user' : 'model'}">
        <div class="ai-msg-bubble">${m.role === 'user' ? esc(m.content) : md(m.content)}</div>
      </div>`
    ).join('');
    el.scrollTop = el.scrollHeight;
  }

  function append(role, content) {
    const el = document.getElementById('ai-page-messages');
    if (!el) return;
    const welcome = el.querySelector('.ai-welcome');
    if (welcome) welcome.remove();
    const div = document.createElement('div');
    div.className = 'ai-msg ' + role;
    div.innerHTML = `<div class="ai-msg-bubble">${role === 'user' ? esc(content) : md(content)}</div>`;
    el.appendChild(div);
    el.scrollTop = el.scrollHeight;
  }

  function appendTyping() {
    const el = document.getElementById('ai-page-messages');
    if (!el) return null;
    const d = document.createElement('div');
    d.className = 'ai-msg model typing';
    d.innerHTML = `<div class="ai-msg-bubble"><span class="ai-dot"></span><span class="ai-dot"></span><span class="ai-dot"></span></div>`;
    el.appendChild(d);
    el.scrollTop = el.scrollHeight;
    return d;
  }

  async function send(text) {
    if (isSending) return;
    const input = document.getElementById('ai-page-input');
    const message = text || (input ? input.value.trim() : '');
    if (!message) return;

    const cfg = global.AICore.load();
    if (!global.AICore.isConfigured(cfg)) {
      append('model', '⚠️ Configure sua chave de API no Dashboard antes de conversar comigo. <a href="#" data-ai-goto-dash>Ir para Dashboard</a>');
      document.querySelector('[data-ai-goto-dash]')?.addEventListener('click', (e) => {
        e.preventDefault();
        if (global.AIPages) global.AIPages.show('dashboard');
      });
      return;
    }

    isSending = true;
    if (input) { input.value = ''; input.style.height = 'auto'; }
    const sb = document.getElementById('ai-page-send');
    if (sb) sb.disabled = true;

    append('user', message);
    global.AICore.pushHistory(cfg, 'user', message);
    const typing = appendTyping();

    try {
      const system = global.AIPrompts.systemFor(contexto.tipo, contexto.vars);
      const result = await global.AICore.send(cfg, message, system);
      typing.remove();
      const reply = result.text || '(sem resposta)';
      append('model', reply);
      global.AICore.pushHistory(cfg, 'model', reply);
    } catch (e) {
      typing.remove();
      append('model', '❌ Erro: ' + e.message);
    } finally {
      isSending = false;
      if (sb) sb.disabled = false;
    }
  }

  function open() {
    if (global.AIPages) global.AIPages.show('tutor-ia');
  }

  function refresh() {
    renderMessages();
    renderProgress();
  }

  global.AIChatPage = { init, open, send, setContext, refresh };
})(window);
