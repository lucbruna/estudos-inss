/* ==========================================================
   api/ai-ui.js — Interface: widget flutuante + chat
   ========================================================== */
(function (global) {
  'use strict';

  let cfg = null;
  let onConfigChange = null;
  let contextoAtual = { tipo: 'geral', vars: {} };
  let isOpen = false;
  let isSending = false;

  /* --------- helpers --------- */
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

  function status() {
    const c = cfg || global.AICore.load();
    const has = global.AICore.isConfigured(c);
    const el = document.getElementById('ai-status-dot');
    if (!el) return;
    el.className = 'ai-status ' + (has ? 'on' : 'off');
    el.title = has ? 'IA ativa (' + c.provider + ')' : 'IA não configurada';
  }

  /* --------- widget --------- */
  function ensureWidget() {
    if (document.getElementById('ai-widget')) return;

    const wrap = document.createElement('div');
    wrap.id = 'ai-widget';
    wrap.className = 'ai-widget';
    wrap.innerHTML = `
      <button class="ai-fab" id="ai-fab" title="Tutor IA">
        <span class="ai-fab-icon">&#10024;</span>
        <span class="ai-status" id="ai-status-dot"></span>
      </button>
      <div class="ai-panel hidden" id="ai-panel">
        <div class="ai-head">
          <div>
            <span class="ai-title">&#10024; Tutor IA</span>
            <span class="ai-sub" id="ai-provider-label">—</span>
          </div>
          <div class="ai-head-actions">
            <button class="ai-icon" id="ai-clear" title="Limpar conversa">&#128465;</button>
            <button class="ai-icon" id="ai-open-page" title="Abrir página completa">&#11013;</button>
            <button class="ai-icon" id="ai-close" title="Fechar">&times;</button>
          </div>
        </div>
        <div class="ai-context" id="ai-context">
          <span class="ai-context-tag" id="ai-context-tag">Contexto: geral</span>
          <button class="ai-context-clear hidden" id="ai-context-clear" title="Limpar contexto">×</button>
        </div>
        <div class="ai-messages" id="ai-messages"></div>
        <div class="ai-quick" id="ai-quick"></div>
        <div class="ai-input-wrap">
          <textarea id="ai-input" rows="1" placeholder="Pergunte algo... (Shift+Enter quebra linha)"></textarea>
          <button id="ai-send" class="ai-send-btn" title="Enviar">
            <span>&#10148;</span>
          </button>
        </div>
      </div>
    `;
    document.body.appendChild(wrap);

    /* eventos */
    document.getElementById('ai-fab').addEventListener('click', togglePanel);
    document.getElementById('ai-close').addEventListener('click', closePanel);
    document.getElementById('ai-open-page').addEventListener('click', () => {
      if (global.AIChatPage && global.AIChatPage.open) {
        global.AIChatPage.open();
        closePanel();
      }
    });
    document.getElementById('ai-clear').addEventListener('click', () => {
      if (!confirm('Limpar todo o histórico de conversas?')) return;
      global.AICore.clearHistory(cfg);
      renderMessages();
    });
    document.getElementById('ai-context-clear').addEventListener('click', () => {
      setContext('geral', {});
    });
    document.getElementById('ai-send').addEventListener('click', sendMessage);
    const ta = document.getElementById('ai-input');
    ta.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        sendMessage();
      }
    });
    ta.addEventListener('input', () => {
      ta.style.height = 'auto';
      ta.style.height = Math.min(120, ta.scrollHeight) + 'px';
    });
  }

  function setContext(tipo, vars) {
    contextoAtual = { tipo, vars: vars || {} };
    const tag = document.getElementById('ai-context-tag');
    const clr = document.getElementById('ai-context-clear');
    if (tag) {
      let label = tipo;
      if (tipo === 'materia' && vars.materia) label = `Matéria: ${vars.materia}`;
      else if (tipo === 'topico' && vars.topico) label = `Tópico: ${vars.topico}`;
      else if (tipo === 'resumo' && vars.topico) label = `Resumo: ${vars.topico}`;
      else if (tipo === 'quiz' && vars.topico) label = `Quiz: ${vars.topico}`;
      else if (tipo === 'questao') label = 'Questão de simulado';
      else if (tipo === 'plano') label = 'Plano de estudo';
      tag.textContent = `Contexto: ${label}`;
    }
    if (clr) clr.classList.toggle('hidden', tipo === 'geral');
    renderQuickActions();
  }

  function renderQuickActions() {
    const el = document.getElementById('ai-quick');
    if (!el) return;
    const map = {
      geral: [
        { label: '🎯 Plano de estudo', prompt: 'Monte um plano de estudos realista para os próximos 7 dias, considerando que o concurso do INSS será em 15/03/2026 e meu progresso atual está salvo no app.' },
        { label: '📊 Analisar progresso', prompt: 'Analise o que devo priorizar: me dê 3 matérias e tópicos específicos que merecem mais atenção.' }
      ],
      materia: [
        { label: '📝 Resumo rápido', prompt: 'Faça um resumo estruturado em bullets dos pontos mais importantes desta matéria para o CEBRASPE.' },
        { label: '🧠 Mapa mental', prompt: 'Crie um mapa mental em formato de tópicos hierárquicos com os conceitos-chave desta matéria.' },
        { label: '⚠️ Pegadinhas', prompt: 'Quais são as pegadinhas mais comuns do CEBRASPE nesta matéria? Liste com exemplos.' }
      ],
      topico: [
        { label: '📖 Explicar', prompt: 'Explique este tópico de forma didática, com exemplos práticos e base legal quando aplicável.' },
        { label: '📝 Resumir', prompt: 'Resuma este tópico em até 8 bullets com os pontos mais cobrados.' },
        { label: '❓ Gerar quiz', prompt: 'Crie 3 questões no estilo CEBRASPE sobre este tópico, com gabarito comentado.' }
      ],
      questao: [
        { label: '✅ Resolver questão', prompt: '__USAR_QUESTAO__' },
        { label: '💡 Dica', prompt: 'Dê uma dica curta de como identificar a resposta certa em questões deste tema.' }
      ]
    };
    const list = map[contextoAtual.tipo] || map.geral;
    el.innerHTML = list.map((a, i) =>
      `<button class="ai-quick-btn" data-idx="${i}">${a.label}</button>`
    ).join('');
    el.querySelectorAll('.ai-quick-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const idx = parseInt(btn.dataset.idx, 10);
        const action = list[idx];
        if (action.prompt === '__USAR_QUESTAO__') {
          sendMessage('Analise esta questão:', true);
        } else {
          sendMessage(action.prompt);
        }
      });
    });
  }

  function renderMessages() {
    const el = document.getElementById('ai-messages');
    if (!el) return;
    const history = cfg.history || [];
    if (history.length === 0) {
      el.innerHTML = `<div class="ai-welcome">
        <div class="ai-welcome-icon">&#10024;</div>
        <h3>Olá! Sou seu Tutor INSS 2026</h3>
        <p>Posso explicar matérias, gerar resumos, criar quizzes, analisar questões e montar planos de estudo.</p>
        <p class="muted">Configure sua API key no <a href="#" data-ai-open-config>Dashboard</a> para começar.</p>
      </div>`;
      el.querySelector('[data-ai-open-config]')?.addEventListener('click', (e) => {
        e.preventDefault();
        if (global.AIConfig) global.AIConfig.openModal();
      });
      return;
    }
    el.innerHTML = history.map(m => {
      const cls = m.role === 'user' ? 'user' : 'model';
      return `<div class="ai-msg ${cls}"><div class="ai-msg-bubble">${md(m.content)}</div></div>`;
    }).join('');
    el.scrollTop = el.scrollHeight;
  }

  function appendMessage(role, content) {
    const el = document.getElementById('ai-messages');
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
    const el = document.getElementById('ai-messages');
    if (!el) return null;
    const div = document.createElement('div');
    div.className = 'ai-msg model typing';
    div.innerHTML = `<div class="ai-msg-bubble"><span class="ai-dot"></span><span class="ai-dot"></span><span class="ai-dot"></span></div>`;
    el.appendChild(div);
    el.scrollTop = el.scrollHeight;
    return div;
  }

  async function sendMessage(text, isContextual) {
    if (isSending) return;
    const input = document.getElementById('ai-input');
    const message = text || (input ? input.value.trim() : '');
    if (!message) return;

    cfg = global.AICore.load();
    if (!global.AICore.isConfigured(cfg)) {
      appendMessage('model', '⚠️ Configure sua chave de API no Dashboard antes de conversar comigo. Clique no ícone ✨ e depois em "Configurar".');
      return;
    }

    isSending = true;
    if (input) { input.value = ''; input.style.height = 'auto'; }
    const sendBtn = document.getElementById('ai-send');
    if (sendBtn) sendBtn.disabled = true;

    let fullMessage = message;
    if (isContextual && contextoAtual.tipo === 'questao' && contextoAtual.vars) {
      const v = contextoAtual.vars;
      const altTxt = v.alternativas.map((a, i) => `${String.fromCharCode(65 + i)}) ${a}`).join('\n');
      const template = global.AIPrompts.PROMPTS.questao;
      fullMessage = global.AIPrompts.render(template, {
        enunciado: v.enunciado,
        alternativas: altTxt,
        materia: v.materia,
        topico: v.topico
      });
    }

    appendMessage('user', message);
    global.AICore.pushHistory(cfg, 'user', message);
    const typing = appendTyping();

    try {
      const system = global.AIPrompts.systemFor(contextoAtual.tipo, contextoAtual.vars);
      const result = await global.AICore.send(cfg, fullMessage, system);
      typing.remove();
      const reply = result.text || '(sem resposta)';
      appendMessage('model', reply);
      global.AICore.pushHistory(cfg, 'model', reply);
    } catch (e) {
      typing.remove();
      appendMessage('model', '❌ Erro: ' + e.message);
    } finally {
      isSending = false;
      if (sendBtn) sendBtn.disabled = false;
    }
  }

  function openPanel() {
    isOpen = true;
    const p = document.getElementById('ai-panel');
    if (p) p.classList.remove('hidden');
    setTimeout(() => document.getElementById('ai-input')?.focus(), 50);
    renderMessages();
  }
  function closePanel() {
    isOpen = false;
    const p = document.getElementById('ai-panel');
    if (p) p.classList.add('hidden');
  }
  function togglePanel() { isOpen ? closePanel() : openPanel(); }

  function updateProviderLabel() {
    const el = document.getElementById('ai-provider-label');
    if (!el) return;
    if (global.AICore.isConfigured(cfg)) {
      el.textContent = cfg.provider === 'qwen' ? 'Qwen' : 'Gemini';
    } else {
      el.textContent = 'não configurado';
    }
  }

  function init(opts) {
    cfg = global.AICore.load();
    onConfigChange = opts?.onConfigChange;
    ensureWidget();
    status();
    updateProviderLabel();
    renderQuickActions();
    renderMessages();
    if (onConfigChange) onConfigChange(cfg);
  }

  function refresh() {
    cfg = global.AICore.load();
    status();
    updateProviderLabel();
  }

  global.AIWidget = { init, refresh, openPanel, closePanel, setContext, sendMessage };
})(window);
