/* ==========================================================
   sw.js — Service Worker (offline-first PWA)
   Strategy: cache-first para assets, network-first para o resto
   ========================================================== */
'use strict';

const CACHE_NAME = 'inss2026-v2';
const CORE_ASSETS = [
  './',
  './index.html',
  './data.js',
  './script.js',
  './style.css',
  './manifest.json',
  './icons/icon-192.svg',
  './icons/icon-512.svg',
  './materias/loader.js',
  './materias/portugues.js',
  './materias/rju.js',
  './materias/etica.js',
  './materias/informatica.js',
  './materias/administrativo.js',
  './materias/constitucional.js',
  './materias/previdenciario.js',
  './materias/legislacao.js',
  './materias/logica.js',
  './api/prompts.js',
  './api/gemini.js',
  './api/qwen.js',
  './api/ollama.js',
  './api/ai.js',
  './api/ai-config.js',
  './api/ai-ui.js',
  './api/ai-page.js',
  './videos/video-storage.js',
  './videos/video-ai.js',
  './videos/video-ui.js'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return Promise.allSettled(
        CORE_ASSETS.map(url => cache.add(url).catch(() => null))
      );
    }).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys => Promise.all(
      keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k))
    )).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', event => {
  const req = event.request;
  if (req.method !== 'GET') return;

  const url = new URL(req.url);
  if (url.origin !== location.origin) return;

  if (req.mode === 'navigate') {
    event.respondWith(
      fetch(req).then(res => {
        const copy = res.clone();
        caches.open(CACHE_NAME).then(c => c.put(req, copy));
        return res;
      }).catch(() => caches.match('./index.html'))
    );
    return;
  }

  event.respondWith(
    caches.match(req).then(cached => {
      if (cached) return cached;
      return fetch(req).then(res => {
        if (!res || res.status !== 200) return res;
        const copy = res.clone();
        caches.open(CACHE_NAME).then(c => c.put(req, copy));
        return res;
      }).catch(() => cached);
    })
  );
});

self.addEventListener('message', event => {
  if (event.data === 'SKIP_WAITING') self.skipWaiting();
});
