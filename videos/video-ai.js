/* ==========================================================
   videos/video-ai.js — Recomendações de YouTube via IA
   Usa o módulo AICore para gerar lista de vídeos sugeridos
   ========================================================== */
(function (global) {
  'use strict';

  const CACHE_KEY = 'inss2026_video_ai_cache';
  const CACHE_TTL = 7 * 24 * 60 * 60 * 1000;

  function readCache() {
    try {
      const raw = localStorage.getItem(CACHE_KEY);
      if (!raw) return {};
      return JSON.parse(raw);
    } catch (e) {
      return {};
    }
  }

  function writeCache(cache) {
    try {
      localStorage.setItem(CACHE_KEY, JSON.stringify(cache));
    } catch (e) {}
  }

  function getCached(subject) {
    const c = readCache();
    const entry = c[subject];
    if (!entry) return null;
    if (Date.now() - entry.ts > CACHE_TTL) return null;
    return entry.list;
  }

  function setCache(subject, list) {
    const c = readCache();
    c[subject] = { ts: Date.now(), list: list };
    writeCache(c);
  }

  async function recommend(subject, topico, onProgress) {
    if (typeof onProgress === 'function') onProgress({ stage: 'start', subject: subject, topico: topico });

    if (!global.AICore) {
      throw new Error('Módulo AI não carregado. Configure a IA no Dashboard primeiro.');
    }
    const _aiCfg = global.AICore.load();
    const isReady = global.AICore.hasAnyKey(_aiCfg) || global.AICore.isConfigured(_aiCfg);
    if (!isReady) {
      throw new Error('Chave de API não configurada. Vá ao Dashboard e configure Gemini ou Qwen.');
    }

    const cached = getCached(subject + '::' + (topico || ''));
    if (cached) {
      if (typeof onProgress === 'function') onProgress({ stage: 'cache', list: cached });
      return cached;
    }

    const subjectName = (global.INSS_DATA && global.INSS_DATA.CONTEUDO.find(m => m.id === subject) || {}).nome || subject;
    const prompt = `Sugira 5 vídeos do YouTube (em português) sobre o tema "${topico || 'a matéria como um todo'}" da disciplina "${subjectName}" para estudo do concurso público do INSS (CEBRASPE).

Responda EXCLUSIVAMENTE em JSON válido, no formato:
{
  "videos": [
    {"titulo": "Título do vídeo", "canal": "Nome do canal", "url": "https://www.youtube.com/watch?v=...", "duracao": "12:34", "motivo": "Por que é útil para o concurso (1 frase)"},
    ...
  ]
}

Os vídeos devem ser:
- Aulas gratuitas e de qualidade (Direção Concursos, Estratégia, Gran Cursos, ou canais de professores)
- Em português (pt-BR)
- Cobrir os pontos mais importantes do tema
- URLs reais e funcionais do YouTube (formato watch?v=)

NÃO inclua comentários, apenas o JSON.`;

    if (typeof onProgress === 'function') onProgress({ stage: 'calling' });

    let response;
    try {
      response = await global.AICore.send(_aiCfg, prompt, global.AIPrompts.systemFor('geral', {}));
    } catch (e) {
      if (typeof onProgress === 'function') onProgress({ stage: 'error', error: e.message });
      throw e;
    }

    const list = parseResponse(response && response.text ? response.text : response);
    if (list && list.length) {
      setCache(subject + '::' + (topico || ''), list);
    }
    if (typeof onProgress === 'function') onProgress({ stage: 'done', list: list });
    return list || [];
  }

  function parseResponse(text) {
    if (!text) return [];
    let jsonText = String(text).trim();
    const fence = jsonText.match(/```(?:json)?\s*([\s\S]*?)```/i);
    if (fence) jsonText = fence[1].trim();
    try {
      const obj = JSON.parse(jsonText);
      const arr = Array.isArray(obj) ? obj : (obj.videos || obj.results || obj.items || []);
      return arr.map(normalize).filter(Boolean);
    } catch (e) {
      return extractUrls(text);
    }
  }

  function extractUrls(text) {
    const re = /https?:\/\/(?:www\.)?(?:youtube\.com\/watch\?v=|youtu\.be\/)[A-Za-z0-9_-]{6,}/g;
    const urls = String(text).match(re) || [];
    return urls.map((u, i) => normalize({ titulo: 'Vídeo sugerido ' + (i + 1), url: u }));
  }

  function normalize(v) {
    if (!v) return null;
    const url = v.url || v.link || v.href;
    if (!url) return null;
    return {
      titulo: v.titulo || v.title || v.nome || 'Vídeo',
      canal: v.canal || v.channel || v.autor || '',
      url: url,
      duracao: v.duracao || v.duration || '',
      motivo: v.motivo || v.reason || v.descricao || ''
    };
  }

  function clearCache() {
    try { localStorage.removeItem(CACHE_KEY); } catch (e) {}
  }

  global.VideoAI = { recommend, clearCache, getCached };
})(window);
