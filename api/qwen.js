/* ==========================================================
   api/qwen.js — Cliente Qwen / DashScope (REST)
   ========================================================== */
(function (global) {
  'use strict';

  const ENDPOINT = 'https://dashscope.aliyuncs.com/api/v1/services/aigc/text-generation/generation';
  const COMPAT = 'https://dashscope.aliyuncs.com/compatible-mode/v1/chat/completions';

  /**
   * Envia mensagem ao Qwen via endpoint OpenAI-compatible.
   * @param {Object} cfg
   * @param {string} cfg.apiKey
   * @param {string} cfg.system
   * @param {Array}  cfg.history  [{role, content}]
   * @param {string} cfg.message
   * @param {string} [cfg.model='qwen-turbo']
   * @param {number} [cfg.temperature=0.7]
   * @param {number} [cfg.maxTokens=1024]
   */
  async function chatQwen(cfg) {
    if (!cfg || !cfg.apiKey) throw new Error('Qwen: apiKey ausente');
    if (!cfg.message) throw new Error('Qwen: message ausente');

    const messages = [];
    if (cfg.system) messages.push({ role: 'system', content: cfg.system });
    if (Array.isArray(cfg.history)) {
      cfg.history.forEach(m => {
        if (m && m.content) messages.push({ role: m.role === 'model' ? 'assistant' : 'user', content: m.content });
      });
    }
    messages.push({ role: 'user', content: cfg.message });

    const body = {
      model: cfg.model || 'qwen-turbo',
      messages,
      temperature: typeof cfg.temperature === 'number' ? cfg.temperature : 0.7,
      max_tokens: cfg.maxTokens || 1024,
      top_p: 0.95,
      result_format: 'message'
    };

    const resp = await fetch(COMPAT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + cfg.apiKey
      },
      body: JSON.stringify(body)
    });

    if (!resp.ok) {
      let errMsg = `HTTP ${resp.status}`;
      try {
        const e = await resp.json();
        errMsg = e.error?.message || e.message || JSON.stringify(e);
      } catch (_) {}
      throw new Error('Qwen: ' + errMsg);
    }

    const data = await resp.json();
    const text = (data.choices && data.choices[0] && data.choices[0].message
      && data.choices[0].message.content) || '';

    return { text: text.trim(), usage: data.usage || {} };
  }

  async function testKey(apiKey) {
    if (!apiKey || apiKey.length < 10) return { ok: false, error: 'Chave muito curta' };
    try {
      const r = await chatQwen({
        apiKey,
        message: 'Responda apenas: OK',
        temperature: 0,
        maxTokens: 16
      });
      return { ok: true, text: r.text };
    } catch (e) {
      return { ok: false, error: e.message };
    }
  }

  global.AIQwen = { chat: chatQwen, testKey };
})(window);
