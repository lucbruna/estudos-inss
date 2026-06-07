/* ==========================================================
   api/ollama.js — Cliente Ollama local (OpenAI-compat)
   Requer Ollama rodando localmente (http://localhost:11434)
   Nao precisa de chave de API.
   ========================================================== */
(function (global) {
  'use strict';

  const DEFAULT_BASE = 'http://localhost:11434';
  const DEFAULT_MODEL = 'qwen2.5-coder:7b';

  function normalizeBase(url) {
    const u = (url || DEFAULT_BASE).replace(/\/+$/, '');
    return u.endsWith('/v1') ? u : u + '/v1';
  }

  function apiBase(url) {
    return (url || DEFAULT_BASE).replace(/\/+$/, '').replace(/\/v1$/, '');
  }

  /**
   * Envia mensagem ao Ollama via endpoint OpenAI-compat /v1/chat/completions.
   * @param {Object} cfg
   * @param {string} [cfg.baseURL='http://localhost:11434']
   * @param {string} [cfg.model='qwen2.5-coder:7b']
   * @param {string} cfg.system
   * @param {Array}  cfg.history  [{role, content}]
   * @param {string} cfg.message
   * @param {number} [cfg.temperature=0.7]
   * @param {number} [cfg.maxTokens=1024]
   */
  async function chatOllama(cfg) {
    if (!cfg || !cfg.message) throw new Error('Ollama: message ausente');

    const baseURL = normalizeBase(cfg.baseURL);
    const model = cfg.model || DEFAULT_MODEL;

    const messages = [];
    if (cfg.system) messages.push({ role: 'system', content: cfg.system });
    if (Array.isArray(cfg.history)) {
      cfg.history.forEach(m => {
        if (m && m.content) messages.push({ role: m.role === 'model' ? 'assistant' : 'user', content: m.content });
      });
    }
    messages.push({ role: 'user', content: cfg.message });

    const body = {
      model,
      messages,
      temperature: typeof cfg.temperature === 'number' ? cfg.temperature : 0.7,
      max_tokens: cfg.maxTokens || 1024,
      stream: false
    };

    let resp;
    try {
      resp = await fetch(baseURL + '/chat/completions', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
      });
    } catch (e) {
      throw new Error('Ollama inacessivel em ' + baseURL + '. O servidor local esta rodando?');
    }

    if (!resp.ok) {
      let errMsg = 'HTTP ' + resp.status;
      try {
        const e = await resp.json();
        errMsg = e.error?.message || e.message || JSON.stringify(e);
      } catch (_) {}
      throw new Error('Ollama: ' + errMsg);
    }

    const data = await resp.json();
    const text = (data.choices && data.choices[0] && data.choices[0].message
      && data.choices[0].message.content) || '';
    return { text: text.trim(), usage: data.usage || {} };
  }

  /** Lista modelos instalados no Ollama (usa API nativa /api/tags). */
  async function listModels(baseURL) {
    const base = apiBase(baseURL);
    const resp = await fetch(base + '/api/tags');
    if (!resp.ok) throw new Error('Ollama: HTTP ' + resp.status);
    const data = await resp.json();
    return (data.models || []).map(m => m.name);
  }

  /** Testa conexao e retorna modelos disponiveis. */
  async function testConfig(baseURL) {
    try {
      const models = await listModels(baseURL);
      return { ok: true, models };
    } catch (e) {
      return { ok: false, error: e.message };
    }
  }

  global.AIOllama = { chat: chatOllama, listModels, testConfig, DEFAULT_BASE, DEFAULT_MODEL };
})(window);
