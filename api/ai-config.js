/* ==========================================================
   api/ai-config.js — Config UI no Dashboard
   ========================================================== */
(function (global) {
  'use strict';

  function renderCard(containerId) {
    const el = document.getElementById(containerId);
    if (!el) return;
    const cfg = global.AICore.load();
    el.innerHTML = `
      <div class="ai-config-card glass-card">
        <div class="ai-config-head">
          <div>
            <h3>&#10024; Configurar IA</h3>
            <p class="muted">Tutor pessoal para explicar matérias, gerar resumos, quizzes e analisar questões.</p>
          </div>
          <span class="ai-status" id="ai-card-status"></span>
        </div>

        <div class="ai-provider-row">
          <label class="ai-prov-opt">
            <input type="radio" name="ai-provider" value="gemini" ${cfg.provider === 'gemini' ? 'checked' : ''}>
            <span class="ai-prov-card">
              <strong>Google Gemini</strong>
              <small>gemini-1.5-flash (free tier)</small>
            </span>
          </label>
          <label class="ai-prov-opt">
            <input type="radio" name="ai-provider" value="qwen" ${cfg.provider === 'qwen' ? 'checked' : ''}>
            <span class="ai-prov-card">
              <strong>Alibaba Qwen</strong>
              <small>qwen-turbo (DashScope)</small>
            </span>
          </label>
          <label class="ai-prov-opt">
            <input type="radio" name="ai-provider" value="ollama" ${cfg.provider === 'ollama' ? 'checked' : ''}>
            <span class="ai-prov-card">
              <strong>Ollama (local)</strong>
              <small>100% offline, sem chave</small>
            </span>
          </label>
        </div>

        <div class="ai-field">
          <label>Chave Gemini (Google AI Studio)</label>
          <div class="ai-input-row">
            <input type="password" id="ai-key-gemini" placeholder="AIzaSy..." value="${escAttr(cfg.geminiKey)}">
            <button class="ai-mini" data-toggle="ai-key-gemini" title="Mostrar/ocultar">&#128065;</button>
          </div>
          <small><a href="https://aistudio.google.com/app/apikey" target="_blank" rel="noopener">Obter chave grátis &rarr;</a></small>
        </div>

        <div class="ai-field">
          <label>Chave Qwen (DashScope - Alibaba Cloud)</label>
          <div class="ai-input-row">
            <input type="password" id="ai-key-qwen" placeholder="sk-..." value="${escAttr(cfg.qwenKey)}">
            <button class="ai-mini" data-toggle="ai-key-qwen" title="Mostrar/ocultar">&#128065;</button>
          </div>
          <small><a href="https://dashscope.console.aliyun.com/apiKey" target="_blank" rel="noopener">Obter chave &rarr;</a></small>
        </div>

        <div class="ai-field">
          <label>Ollama — servidor local</label>
          <div class="ai-input-row">
            <input type="text" id="ai-ollama-url" placeholder="http://localhost:11434" value="${escAttr(cfg.ollamaBaseUrl)}">
            <button class="ai-mini" id="ai-ollama-detect" title="Listar modelos instalados">&#128269;</button>
          </div>
          <label>Modelo</label>
          <input type="text" id="ai-ollama-model" list="ai-ollama-models" placeholder="qwen2.5-coder:7b" value="${escAttr(cfg.ollamaModel)}">
          <datalist id="ai-ollama-models"></datalist>
          <small><a href="https://ollama.com" target="_blank" rel="noopener">Instalar Ollama &rarr;</a> &nbsp; <code>ollama pull qwen2.5:7b</code></small>
        </div>

        <div class="ai-advanced">
          <details>
            <summary>Configura&ccedil;&otilde;es avan&ccedil;adas</summary>
            <div class="ai-field">
              <label>Temperatura: <span id="ai-temp-val">${cfg.temperature}</span></label>
              <input type="range" id="ai-temp" min="0" max="1.5" step="0.1" value="${cfg.temperature}">
            </div>
            <div class="ai-field">
              <label>Modelo Gemini</label>
              <select id="ai-model-gemini">
                <option value="gemini-1.5-flash" ${cfg.geminiModel === 'gemini-1.5-flash' ? 'selected' : ''}>gemini-1.5-flash (recomendado, grátis)</option>
                <option value="gemini-1.5-flash-8b" ${cfg.geminiModel === 'gemini-1.5-flash-8b' ? 'selected' : ''}>gemini-1.5-flash-8b (mais rápido)</option>
                <option value="gemini-1.5-pro" ${cfg.geminiModel === 'gemini-1.5-pro' ? 'selected' : ''}>gemini-1.5-pro (mais inteligente)</option>
              </select>
            </div>
            <div class="ai-field">
              <label>Modelo Qwen</label>
              <select id="ai-model-qwen">
                <option value="qwen-turbo" ${cfg.qwenModel === 'qwen-turbo' ? 'selected' : ''}>qwen-turbo (rápido)</option>
                <option value="qwen-plus" ${cfg.qwenModel === 'qwen-plus' ? 'selected' : ''}>qwen-plus (balanceado)</option>
                <option value="qwen-max" ${cfg.qwenModel === 'qwen-max' ? 'selected' : ''}>qwen-max (mais capaz)</option>
              </select>
            </div>
          </details>
        </div>

        <div class="ai-config-actions">
          <button class="btn-outline" id="ai-test">&#128269; Testar conex&atilde;o</button>
          <button class="btn-primary" id="ai-save">&#128190; Salvar configura&ccedil;&otilde;es</button>
        </div>
        <div id="ai-test-result" class="ai-test-result"></div>

        <div class="ai-footnote muted">
          <p>&#128274; Suas chaves ficam salvas <b>apenas no seu navegador</b> (localStorage). Nada &eacute; enviado para servidor.</p>
        </div>
      </div>
    `;

    /* Eventos */
    el.querySelectorAll('input[name="ai-provider"]').forEach(r => {
      r.addEventListener('change', () => updateCardStatus());
    });
    el.querySelectorAll('[data-toggle]').forEach(b => {
      b.addEventListener('click', () => {
        const i = document.getElementById(b.dataset.toggle);
        if (i) i.type = i.type === 'password' ? 'text' : 'password';
      });
    });
    const temp = el.querySelector('#ai-temp');
    const tempVal = el.querySelector('#ai-temp-val');
    temp.addEventListener('input', () => { tempVal.textContent = temp.value; });
    el.querySelector('#ai-test').addEventListener('click', testConnection);
    el.querySelector('#ai-save').addEventListener('click', saveConfig);
    el.querySelector('#ai-ollama-detect').addEventListener('click', detectOllamaModels);

    updateCardStatus();
  }

  function escAttr(s) { return String(s || '').replace(/"/g, '&quot;'); }

  function updateCardStatus() {
    const cfg = global.AICore.load();
    const prov = (document.querySelector('input[name="ai-provider"]:checked') || {}).value || cfg.provider;
    const has = isProviderReady(prov, cfg);
    const el = document.getElementById('ai-card-status');
    if (el) el.className = 'ai-status ' + (has ? 'on' : 'off');
  }

  function isProviderReady(prov, cfg) {
    if (prov === 'qwen') return !!cfg.qwenKey;
    if (prov === 'ollama') return !!(cfg.ollamaBaseUrl && cfg.ollamaModel);
    return !!cfg.geminiKey;
  }

  async function detectOllamaModels() {
    const result = document.getElementById('ai-test-result');
    const baseURL = document.getElementById('ai-ollama-url').value.trim();
    if (!baseURL) {
      result.className = 'ai-test-result err';
      result.textContent = '❌ Informe a URL do Ollama.';
      return;
    }
    result.className = 'ai-test-result loading';
    result.textContent = '🔄 Buscando modelos...';
    try {
      const r = await global.AIOllama.testConfig(baseURL);
      if (r.ok) {
        const dl = document.getElementById('ai-ollama-models');
        dl.innerHTML = r.models.map(m => `<option value="${escAttr(m)}">`).join('');
        result.className = 'ai-test-result ok';
        result.textContent = `✅ ${r.models.length} modelo(s) encontrado(s): ${r.models.slice(0, 5).join(', ')}${r.models.length > 5 ? '...' : ''}`;
      } else {
        result.className = 'ai-test-result err';
        result.textContent = '❌ ' + r.error;
      }
    } catch (e) {
      result.className = 'ai-test-result err';
      result.textContent = '❌ ' + e.message;
    }
  }

  async function testConnection() {
    const result = document.getElementById('ai-test-result');
    result.className = 'ai-test-result loading';
    result.textContent = '🔄 Testando...';

    const cfg = global.AICore.load();
    const prov = (document.querySelector('input[name="ai-provider"]:checked') || {}).value || cfg.provider;

    if (prov === 'ollama') {
      const baseURL = document.getElementById('ai-ollama-url').value.trim();
      const model = document.getElementById('ai-ollama-model').value.trim();
      if (!baseURL || !model) {
        result.className = 'ai-test-result err';
        result.textContent = '❌ Informe URL e modelo do Ollama.';
        return;
      }
      try {
        const r = await global.AIOllama.chat({
          baseURL,
          model,
          message: 'Responda apenas: OK',
          temperature: 0,
          maxTokens: 16
        });
        result.className = 'ai-test-result ok';
        result.textContent = '✅ Conexão OK! Resposta: "' + r.text + '"';
      } catch (e) {
        result.className = 'ai-test-result err';
        result.textContent = '❌ ' + e.message;
      }
      return;
    }

    const key = prov === 'qwen'
      ? document.getElementById('ai-key-qwen').value.trim()
      : document.getElementById('ai-key-gemini').value.trim();

    if (!key) {
      result.className = 'ai-test-result err';
      result.textContent = '❌ Informe a chave de API primeiro.';
      return;
    }

    try {
      const fn = prov === 'qwen' ? global.AIQwen.testKey : global.AIGemini.testKey;
      const r = await fn(key);
      if (r.ok) {
        result.className = 'ai-test-result ok';
        result.textContent = '✅ Conexão OK! Resposta: "' + r.text + '"';
      } else {
        result.className = 'ai-test-result err';
        result.textContent = '❌ Falha: ' + r.error;
      }
    } catch (e) {
      result.className = 'ai-test-result err';
      result.textContent = '❌ Erro: ' + e.message;
    }
  }

  function saveConfig() {
    const cfg = global.AICore.load();
    cfg.provider = (document.querySelector('input[name="ai-provider"]:checked') || {}).value || 'gemini';
    cfg.geminiKey = document.getElementById('ai-key-gemini').value.trim();
    cfg.qwenKey = document.getElementById('ai-key-qwen').value.trim();
    cfg.ollamaBaseUrl = document.getElementById('ai-ollama-url').value.trim();
    cfg.ollamaModel = document.getElementById('ai-ollama-model').value.trim();
    cfg.geminiModel = document.getElementById('ai-model-gemini').value;
    cfg.qwenModel = document.getElementById('ai-model-qwen').value;
    cfg.temperature = parseFloat(document.getElementById('ai-temp').value);
    cfg.maxOutputTokens = 1024;
    global.AICore.save(cfg);
    if (global.AIWidget) global.AIWidget.refresh();
    updateCardStatus();
    const result = document.getElementById('ai-test-result');
    result.className = 'ai-test-result ok';
    result.textContent = '✅ Configurações salvas com sucesso!';
    setTimeout(() => { result.textContent = ''; result.className = 'ai-test-result'; }, 4000);
  }

  function openModal() {
    /* se o usuário clicar no widget, rolar para o card */
    const card = document.getElementById('ai-config-host');
    if (card) card.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }

  global.AIConfig = { renderCard, openModal, saveConfig, testConnection };
})(window);
