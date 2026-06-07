# AGENTS.md — Instruções para assistentes de IA no projeto INSS 2026

Este arquivo é carregado automaticamente pelo opencode como contexto em toda sessão.

## Visão geral do projeto

Plano de estudos PWA (offline-first) para o concurso **INSS 2026 — Técnico do Seguro Social**.
Funciona 100% no navegador, sem backend. Todo o conteúdo fica em arquivos `.js` estáticos.

- **Stack:** HTML + CSS + JavaScript vanilla. **Sem TypeScript, sem framework, sem bundler.**
- **Persistência:** `localStorage` + `IndexedDB` (sem servidor).
- **IA interna do app:** Gemini (REST) e Qwen (OpenAI-compat) — implementada em `api/*.js`.
- **PWA:** `sw.js` faz cache-first. Manifest em `manifest.json`.

## Estrutura

```
/
├── index.html              # SPA principal
├── style.css               # ~3.6k linhas, responsivo + dark mode
├── script.js               # App principal, roteamento de "páginas"
├── data.js                 # Dados do edital (capítulos, questões, cronograma)
├── sw.js                    # Service Worker
├── manifest.json            # PWA manifest
├── api/                     # Módulos de IA do app (NÃO confundir com opencode)
│   ├── prompts.js           # 7 templates: matéria, tópico, questão, resumo, quiz, plano
│   ├── gemini.js            # Cliente REST Gemini
│   ├── qwen.js              # Cliente Qwen
│   ├── ai.js                # State, send, history
│   ├── ai-config.js         # Card de config no Dashboard
│   ├── ai-ui.js             # Widget flutuante ✨
│   └── ai-page.js           # Página Tutor IA
├── materias/                # 9 arquivos, 256 lições
└── videos/                  # Módulo de vídeos (IndexedDB)
```

## Disciplinas (matérias/)

| Arquivo               | Lições | Conteúdo                                    |
|-----------------------|-------:|---------------------------------------------|
| `portugues.js`        |     25 | Português                                   |
| `rju.js`              |     34 | Lei 8.112/90                                |
| `etica.js`            |     19 | Ética no serviço público                    |
| `informatica.js`      |     26 | Informática                                 |
| `administrativo.js`   |     22 | Direito Administrativo                      |
| `constitucional.js`   |     27 | Direito Constitucional                      |
| `previdenciario.js`   |     44 | Direito Previdenciário (Lei 8.213/91)       |
| `legislacao.js`       |     41 | Legislação específica INSS                  |
| `logica.js`           |     18 | Raciocínio Lógico                           |

## Convenções de código

- **JS puro (ES2020+).** Sem imports de npm no front. `const`/`let` apenas, sem `var`.
- **Sem `null`** explícito. Use `undefined` ou valores sentinela.
- **Nomes de arquivo em minúsculas**, sem acentos (`previdenciario.js`, não `previdenciário.js`).
- **Estilo de comentário:** português, sucinto, sem decoração.
- **Commits:** Conventional Commits em português, com escopo. Ex: `feat(videos): adicionar player fullscreen`, `fix(ai): corrigir PointerEvent`.
- **Mobile-first.** Toda UI deve funcionar em tela de 360px de largura.
- **Acessibilidade:** `aria-label`, foco visível, contraste AA, navegação por teclado.

## Padrões da UI

- Tema: claro/escuro via `data-theme` no `<html>`, persistido em `localStorage`.
- Ícones: emojis unicode curados (✨ 📚 🎯 etc.) — sem ícone externo.
- Componentes: classes utilitárias em `style.css`, sem CSS-in-JS.
- Modais: `<dialog>` nativo quando possível.
- Animações: `prefers-reduced-motion` sempre respeitado.

## IA do app (api/)

Os módulos em `api/` implementam o **Tutor IA dentro do app**, não tem relação com o opencode. Padrões:

- 7 templates de prompt em `prompts.js` (matéria, tópico, questão, resumo, quiz, plano, dica).
- Estado do chat e histórico ficam em `ai.js`.
- UI flutuante em `ai-ui.js`, página cheia em `ai-page.js`.
- Configuração de provider/chave no Dashboard via `ai-config.js`.

## Comandos úteis do projeto

```bash
# Servir localmente (sem build, é estático)
python -m http.server 8000
# ou
npx serve .
```

Não há `npm test`, `lint`, ou build. O app é HTML+CSS+JS puro.

## O que NÃO fazer

- ❌ Não adicionar dependências npm ao app em si.
- ❌ Não usar TypeScript, JSX, ou frameworks.
- ❌ Não introduzir bundlers (webpack, vite, etc.).
- ❌ Não commitar a chave de API do Gemini (use env var `GEMINI_API_KEY`).
- ❌ Não mexer em `sw.js` sem testar offline real (DevTools → Application → Service Workers → Offline).
- ❌ Não duplicar a lógica de IA do app dentro dos módulos `materias/`.
