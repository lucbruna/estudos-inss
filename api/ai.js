/* ==========================================================
   api/ai.js — Estado, storage e roteamento de IA
   ========================================================== */
(function (global) {
  'use strict';

  const STORAGE_KEY = 'inss2026_ai_config';

  const DEFAULTS = {
    provider: 'gemini',
    geminiKey: '',
    qwenKey: '',
    geminiModel: 'gemini-1.5-flash',
    qwenModel: 'qwen-turbo',
    temperature: 0.7,
    maxOutputTokens: 1024,
    history: [],          // {role, content, ts, provider}
    pinned: []            // mensagens fixadas
  };

  function load() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) return Object.assign({}, DEFAULTS, JSON.parse(raw));
    } catch (e) { console.error('AI load:', e); }
    return Object.assign({}, DEFAULTS);
  }

  function save(cfg) {
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(cfg)); }
    catch (e) { console.error('AI save:', e); }
  }

  function getKey(cfg) {
    return cfg.provider === 'qwen' ? cfg.qwenKey : cfg.geminiKey;
  }

  function getModel(cfg) {
    return cfg.provider === 'qwen' ? cfg.qwenModel : cfg.geminiModel;
  }

  async function send(cfg, message, systemPrompt) {
    const key = getKey(cfg);
    if (!key) throw new Error('Nenhuma chave configurada para ' + cfg.provider);
    const model = getModel(cfg);
    const history = (cfg.history || []).slice(-10);

    if (cfg.provider === 'qwen') {
      return global.AIQwen.chat({
        apiKey: key,
        model,
        message,
        system: systemPrompt,
        temperature: cfg.temperature,
        maxTokens: cfg.maxOutputTokens,
        history: history.map(m => ({ role: m.role, content: m.content }))
      });
    }
    return global.AIGemini.chat({
      apiKey: key,
      model,
      message,
      system: systemPrompt,
      temperature: cfg.temperature,
      maxOutputTokens: cfg.maxOutputTokens,
      history: history.map(m => ({ role: m.role, parts: [{ text: m.content }] }))
    });
  }

  function pushHistory(cfg, role, content) {
    cfg.history = cfg.history || [];
    cfg.history.push({ role, content, ts: Date.now() });
    if (cfg.history.length > 30) cfg.history = cfg.history.slice(-30);
    save(cfg);
  }

  function clearHistory(cfg) {
    cfg.history = [];
    save(cfg);
  }

  function hasAnyKey(cfg) {
    cfg = cfg || load();
    return !!(cfg.geminiKey || cfg.qwenKey);
  }

  function isConfigured(cfg) {
    cfg = cfg || load();
    return !!getKey(cfg);
  }

  global.AICore = {
    DEFAULTS, load, save, send, pushHistory, clearHistory,
    hasAnyKey, isConfigured, getKey, getModel
  };
})(window);
