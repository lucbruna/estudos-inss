/* ==========================================================
   api/gemini.js — Cliente Google Gemini 1.5 Flash (REST)
   ========================================================== */
(function (global) {
  'use strict';

  const ENDPOINT = 'https://generativelanguage.googleapis.com/v1beta/models';

  /**
   * Envia uma requisição ao Gemini 1.5 Flash.
   * @param {Object} cfg
   * @param {string} cfg.apiKey
   * @param {string} cfg.system   Instrução de sistema
   * @param {Array}  cfg.history  [{role:'user'|'model', parts:[{text}]}]
   * @param {string} cfg.message  Mensagem atual do usuário
   * @param {number} [cfg.temperature=0.7]
   * @param {number} [cfg.maxOutputTokens=1024]
   * @returns {Promise<{text:string, usage:Object}>}
   */
  async function chatGemini(cfg) {
    if (!cfg || !cfg.apiKey) throw new Error('Gemini: apiKey ausente');
    if (!cfg.message) throw new Error('Gemini: message ausente');

    const contents = [];
    if (Array.isArray(cfg.history)) {
      cfg.history.forEach(m => {
        if (m && m.parts && m.parts.length) {
          contents.push({ role: m.role === 'model' ? 'model' : 'user', parts: m.parts });
        }
      });
    }
    contents.push({ role: 'user', parts: [{ text: cfg.message }] });

    const body = {
      contents,
      generationConfig: {
        temperature: typeof cfg.temperature === 'number' ? cfg.temperature : 0.7,
        maxOutputTokens: cfg.maxOutputTokens || 1024,
        topP: 0.95
      }
    };
    if (cfg.system) {
      body.systemInstruction = { role: 'system', parts: [{ text: cfg.system }] };
    }

    const model = cfg.model || 'gemini-1.5-flash';
    const url = `${ENDPOINT}/${model}:generateContent?key=${encodeURIComponent(cfg.apiKey)}`;

    const resp = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body)
    });

    if (!resp.ok) {
      let errMsg = `HTTP ${resp.status}`;
      try {
        const e = await resp.json();
        errMsg = e.error?.message || JSON.stringify(e);
      } catch (_) {}
      throw new Error('Gemini: ' + errMsg);
    }

    const data = await resp.json();
    const text = (data.candidates && data.candidates[0] && data.candidates[0].content
      && data.candidates[0].content.parts
      && data.candidates[0].content.parts.map(p => p.text || '').join('')) || '';

    return { text, usage: data.usageMetadata || {} };
  }

  /**
   * Testa a chave com uma requisição mínima.
   */
  async function testKey(apiKey) {
    if (!apiKey || apiKey.length < 10) return { ok: false, error: 'Chave muito curta' };
    try {
      const r = await chatGemini({
        apiKey,
        message: 'Responda apenas: OK',
        temperature: 0,
        maxOutputTokens: 16
      });
      return { ok: true, text: r.text.trim() };
    } catch (e) {
      return { ok: false, error: e.message };
    }
  }

  global.AIGemini = { chat: chatGemini, testKey };
})(window);
