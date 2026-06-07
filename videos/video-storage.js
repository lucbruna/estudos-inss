/* ==========================================================
   videos/video-storage.js — Armazenamento de Vídeos (IndexedDB)
   Videos + Annotations em object stores separados
   ========================================================== */
(function (global) {
  'use strict';

  const DB_NAME = 'inss2026_videos';
  const DB_VERSION = 1;
  const STORE_VIDEOS = 'videos';
  const STORE_ANNOTATIONS = 'annotations';

  let dbPromise = null;

  function openDB() {
    if (dbPromise) return dbPromise;
    dbPromise = new Promise((resolve, reject) => {
      if (!global.indexedDB) {
        reject(new Error('IndexedDB não suportado neste navegador.'));
        return;
      }
      const req = global.indexedDB.open(DB_NAME, DB_VERSION);
      req.onupgradeneeded = function (e) {
        const db = e.target.result;
        if (!db.objectStoreNames.contains(STORE_VIDEOS)) {
          const s = db.createObjectStore(STORE_VIDEOS, { keyPath: 'id' });
          s.createIndex('subject', 'subject', { unique: false });
          s.createIndex('createdAt', 'createdAt', { unique: false });
        }
        if (!db.objectStoreNames.contains(STORE_ANNOTATIONS)) {
          const s = db.createObjectStore(STORE_ANNOTATIONS, { keyPath: 'id' });
          s.createIndex('videoId', 'videoId', { unique: false });
          s.createIndex('time', 'time', { unique: false });
        }
      };
      req.onsuccess = function (e) { resolve(e.target.result); };
      req.onerror = function (e) { reject(e.target.error); };
    });
    return dbPromise;
  }

  function genId() {
    return 'v_' + Date.now().toString(36) + '_' + Math.random().toString(36).slice(2, 8);
  }

  function tx(storeName, mode) {
    return openDB().then(db => {
      const t = db.transaction(storeName, mode);
      return t.objectStore(storeName);
    });
  }

  function promisifyReq(req) {
    return new Promise((resolve, reject) => {
      req.onsuccess = function () { resolve(req.result); };
      req.onerror = function () { reject(req.error); };
    });
  }

  /* ---------- VIDEOS ---------- */

  async function addVideo(video) {
    const v = Object.assign({
      id: genId(),
      title: 'Sem título',
      url: '',
      source: 'youtube',
      subject: 'geral',
      tags: [],
      thumbnail: '',
      createdAt: Date.now()
    }, video);
    if (!v.url && !v.blob) throw new Error('Vídeo precisa de URL ou arquivo.');
    if (v.blob && !v.url) {
      v.url = URL.createObjectURL(v.blob);
      v.hasBlob = true;
    }
    const store = await tx(STORE_VIDEOS, 'readwrite');
    await promisifyReq(store.put(v));
    return v;
  }

  async function updateVideo(id, patch) {
    const store = await tx(STORE_VIDEOS, 'readwrite');
    const existing = await promisifyReq(store.get(id));
    if (!existing) throw new Error('Vídeo não encontrado: ' + id);
    const updated = Object.assign({}, existing, patch, { id: existing.id });
    await promisifyReq(store.put(updated));
    return updated;
  }

  async function deleteVideo(id) {
    const storeV = await tx(STORE_VIDEOS, 'readwrite');
    const v = await promisifyReq(storeV.get(id));
    if (v && v.hasBlob && v.url) {
      try { URL.revokeObjectURL(v.url); } catch (e) {}
    }
    await promisifyReq(storeV.delete(id));
    const storeA = await tx(STORE_ANNOTATIONS, 'readwrite');
    const idx = storeA.index('videoId');
    const range = IDBKeyRange.only(id);
    await new Promise((resolve, reject) => {
      const cursorReq = idx.openCursor(range);
      cursorReq.onsuccess = function (e) {
        const cursor = e.target.result;
        if (cursor) {
          cursor.delete();
          cursor.continue();
        } else {
          resolve();
        }
      };
      cursorReq.onerror = function () { reject(cursorReq.error); };
    });
  }

  async function getVideo(id) {
    const store = await tx(STORE_VIDEOS, 'readonly');
    return promisifyReq(store.get(id));
  }

  async function getAllVideos() {
    const store = await tx(STORE_VIDEOS, 'readonly');
    return promisifyReq(store.getAll());
  }

  async function getBySubject(subject) {
    const store = await tx(STORE_VIDEOS, 'readonly');
    const idx = store.index('subject');
    return promisifyReq(idx.getAll(subject));
  }

  function parseYouTubeId(url) {
    if (!url) return null;
    const m = String(url).match(/(?:youtube\.com\/(?:watch\?v=|embed\/|shorts\/)|youtu\.be\/)([A-Za-z0-9_-]{6,})/);
    return m ? m[1] : null;
  }

  function youtubeEmbedUrl(url) {
    const id = parseYouTubeId(url);
    return id ? 'https://www.youtube.com/embed/' + id + '?rel=0&modestbranding=1' : null;
  }

  function youtubeThumb(url) {
    const id = parseYouTubeId(url);
    return id ? 'https://i.ytimg.com/vi/' + id + '/hqdefault.jpg' : '';
  }

  /* ---------- ANNOTATIONS ---------- */

  async function addAnnotation(annotation) {
    const a = Object.assign({
      id: genId() + '_a',
      videoId: '',
      time: 0,
      label: '',
      notes: '',
      createdAt: Date.now()
    }, annotation);
    if (!a.videoId) throw new Error('Annotation precisa de videoId.');
    const store = await tx(STORE_ANNOTATIONS, 'readwrite');
    await promisifyReq(store.put(a));
    return a;
  }

  async function deleteAnnotation(id) {
    const store = await tx(STORE_ANNOTATIONS, 'readwrite');
    await promisifyReq(store.delete(id));
  }

  async function getAnnotationsByVideo(videoId) {
    const store = await tx(STORE_ANNOTATIONS, 'readonly');
    const idx = store.index('videoId');
    const all = await promisifyReq(idx.getAll(videoId));
    return all.sort((a, b) => a.time - b.time);
  }

  function formatTime(seconds) {
    seconds = Math.max(0, Math.floor(seconds || 0));
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = seconds % 60;
    if (h > 0) {
      return h + ':' + String(m).padStart(2, '0') + ':' + String(s).padStart(2, '0');
    }
    return m + ':' + String(s).padStart(2, '0');
  }

  global.VideoStorage = {
    open: openDB,
    addVideo,
    updateVideo,
    deleteVideo,
    getVideo,
    getAllVideos,
    getBySubject,
    addAnnotation,
    deleteAnnotation,
    getAnnotationsByVideo,
    parseYouTubeId,
    youtubeEmbedUrl,
    youtubeThumb,
    formatTime
  };
})(window);
