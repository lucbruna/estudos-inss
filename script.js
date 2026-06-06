(function() {
  const KEY = 'inss2026_data';

  /* ── CONTEÚDO COMPLETO INSS ── */
  const CONTEUDO = [
    {
      id: 'portugues',
      nome: 'Língua Portuguesa',
      icon: '&#128214;',
      cor: '#2563eb',
      topicos: [
        'Compreensão e interpretação de textos',
        'Tipologia textual',
        'Ortografia oficial',
        'Acentuação gráfica',
        'Crase',
        'Pontuação',
        'Concordância verbal e nominal',
        'Regência verbal e nominal',
        'Colocação pronominal',
        'Estrutura e formação de palavras',
        'Classes de palavras',
        'Sintaxe: termos da oração',
        'Sintaxe: período composto',
        'Semântica: sentido próprio e figurado',
        'Redação oficial',
        'Reescrita e paráfrase',
      ]
    },
    {
      id: 'logica',
      nome: 'Raciocínio Lógico-Matemático',
      icon: '&#129518;',
      cor: '#059669',
      topicos: [
        'Estruturas lógicas',
        'Conectivos lógicos',
        'Tabelas-verdade',
        'Equivalências lógicas',
        'Lógica de argumentação',
        'Diagramas lógicos (Venn)',
        'Raciocínio sequencial',
        'Probabilidade',
        'Estatística básica: média, moda, mediana',
        'Matemática financeira: juros simples',
        'Matemática financeira: juros compostos',
        'Razão e proporção',
        'Regra de três simples e composta',
        'Porcentagem',
        'Análise combinatoria básica',
        'Geometria básica',
      ]
    },
    {
      id: 'informatica',
      nome: 'Noções de Informática',
      icon: '&#128187;',
      cor: '#0891b2',
      topicos: [
        'MS Word: edição e formatação',
        'MS Word: tabelas e imagens',
        'MS Excel: fórmulas e funções',
        'MS Excel: gráficos e tabelas dinâmicas',
        'MS PowerPoint: apresentações',
        'Internet: navegação e pesquisa',
        'Correio eletrônico (e-mail)',
        'Segurança da informação',
        'Senhas e criptografia',
        'Certificação digital',
        'Redes de computadores básico',
        'Hardware e periféricos',
        'Software e sistemas operacionais',
        'Windows 10/11',
        'Lei de Acesso à Informação (Lei 12.527/11)',
        'Armazenamento em nuvem',
      ]
    },
    {
      id: 'etica',
      nome: 'Ética no Serviço Público',
      icon: '&#9888;',
      cor: '#dc2626',
      topicos: [
        'Ética e moral: conceitos',
        'Ética no serviço público',
        'Código de Ética do Servidor (Decreto 1.171/94)',
        'Deveres do servidor público',
        'Proibições ao servidor público',
        'Comissões de Ética',
        'Processo ético disciplinar',
        'Improbidade administrativa (Lei 8.429/92)',
        'Conduta e decoro',
        'Assédio moral no serviço público',
        'Transparência e responsabilidade',
      ]
    },
    {
      id: 'constitucional',
      nome: 'Direito Constitucional',
      icon: '&#9878;',
      cor: '#7c3aed',
      topicos: [
        'Constituição Federal de 1988: princípios',
        'Princípios fundamentais (arts. 1º a 4º)',
        'Direitos e garantias fundamentais',
        'Direitos individuais (art. 5º)',
        'Direitos sociais (arts. 6º a 11)',
        'Nacionalidade (arts. 12 e 13)',
        'Cidadania e direitos políticos',
        'Organização político-administrativa',
        'Administração Pública (arts. 37 a 41)',
        'Poder Executivo',
        'Poder Legislativo',
        'Poder Judiciário',
        'Ordem Social: Seguridade Social',
        'Ordem Social: Previdência (arts. 201 e 202)',
        'Ordem Social: Assistência Social',
        'Ordem Social: Saúde',
      ]
    },
    {
      id: 'administrativo',
      nome: 'Direito Administrativo',
      icon: '&#128220;',
      cor: '#ea580c',
      topicos: [
        'Princípios da Administração Pública',
        'Atos administrativos: conceito e requisitos',
        'Atributos dos atos administrativos',
        'Classificação dos atos administrativos',
        'Extinção dos atos administrativos',
        'Contratos administrativos',
        'Licitações: Lei 14.133/2021',
        'Modalidades de licitação',
        'Pregão eletrônico e presencial',
        'Servidores públicos: cargo e emprego',
        'Responsabilidade civil do Estado',
        'Improbidade administrativa',
        'Processo administrativo',
        'Bens públicos',
        'Serviços públicos',
        'Desconcentração e descentralização',
      ]
    },
    {
      id: 'previdenciario',
      nome: 'Direito Previdenciário',
      icon: '&#128184;',
      cor: '#d97706',
      topicos: [
        'Regime Geral de Previdência Social (RGPS)',
        'Princípios da Seguridade Social',
        'Segurados obrigatórios: empregado',
        'Segurados obrigatórios: contribuinte individual',
        'Segurados obrigatórios: trabalhador avulso',
        'Segurados obrigatórios: segurado especial',
        'Segurado facultativo',
        'Dependentes: classes',
        'Inscrição e filiação',
        'Carência',
        'Salário-de-contribuição',
        'Salário-de-benefício',
        'Aposentadoria por idade',
        'Aposentadoria por tempo de contribuição',
        'Aposentadoria especial',
        'Aposentadoria da pessoa com deficiência',
        'Aposentadoria rural',
        'Pensão por morte',
        'Auxílio-doença',
        'Auxílio-acidente',
        'Salário-maternidade',
        'Salário-família',
        'Reajuste dos benefícios',
        'Decadência e prescrição',
      ]
    },
    {
      id: 'legislacao',
      nome: 'Legislação Previdenciária',
      icon: '&#128196;',
      cor: '#0d9488',
      topicos: [
        'Lei 8.212/91: Plano de Custeio',
        'Lei 8.212/91: contribuições sociais',
        'Lei 8.213/91: Plano de Benefícios',
        'Lei 8.213/91: benefícios em espécie',
        'Decreto 3.048/99: Regulamento da Previdência',
        'Lei 13.846/2019: alterações',
        'Lei 14.331/2022: novos benefícios',
        'Lei 14.973/2024: atualizações',
        'Reforma da Previdência (EC 103/2019)',
        'Regras de transição',
        'Pedágio 50% e 100%',
        'Idade mínima progressiva',
        'Cálculo do fator previdenciário',
        'Desaposentação',
        'Contribuições em atraso',
        'Regularização de vínculos',
      ]
    },
    {
      id: 'rju',
      nome: 'Regime Jurídico Único (Lei 8.112/90)',
      icon: '&#128221;',
      cor: '#6366f1',
      topicos: [
        'Provimento: conceito e formas',
        'Nomeação e posse',
        'Exercício e estágio probatório',
        'Vacância: exoneração e demissão',
        'Vacância: aposentadoria e falecimento',
        'Readaptação e reversão',
        'Reintegração e recondução',
        'Direitos e vantagens: vencimento e remuneração',
        'Adicionais e gratificações',
        'Licenças: por motivo de doença',
        'Licenças: gestante, paternidade e adoção',
        'Licenças: capacitação e interesse particular',
        'Afastamentos',
        'Deveres do servidor',
        'Proibições ao servidor',
        'Processo administrativo disciplinar (PAD)',
        'Sindicância',
      ]
    },
  ];

  const DIAS = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];
  const CRONO_PADRAO = {
    seg: ['Direito Constitucional', 'Língua Portuguesa'],
    ter: ['Direito Administrativo', 'Raciocínio Lógico-Matemático'],
    qua: ['Direito Previdenciário', 'Noções de Informática'],
    qui: ['Legislação Previdenciária', 'Língua Portuguesa'],
    sex: ['Regime Jurídico Único (Lei 8.112/90)', 'Ética no Serviço Público'],
    sab: ['Revisão geral', 'Questões'],
  };

  let state = {};

  function estadoPadrao() {
    const topicos = {};
    CONTEUDO.forEach(m => {
      topicos[m.id] = {};
      m.topicos.forEach(t => { topicos[m.id][t] = false; });
    });
    return {
      cronograma: JSON.parse(JSON.stringify(CRONO_PADRAO)),
      topicos,
      progresso: {},
      checklists: {},
      simulados: [],
      calendario: {},
    };
  }

  function carregar() {
    try {
      const raw = localStorage.getItem(KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        if (!parsed.cronograma) parsed.cronograma = JSON.parse(JSON.stringify(CRONO_PADRAO));
        if (!parsed.topicos) {
          parsed.topicos = {};
          CONTEUDO.forEach(m => {
            parsed.topicos[m.id] = {};
            m.topicos.forEach(t => { parsed.topicos[m.id][t] = false; });
          });
        }
        if (!parsed.checklists) parsed.checklists = {};
        if (!parsed.progresso) parsed.progresso = {};
        if (!parsed.simulados) parsed.simulados = [];
        if (!parsed.calendario) parsed.calendario = {};
        state = parsed;
        return;
      }
    } catch (e) {}
    state = estadoPadrao();
  }

  function salvar() {
    try { localStorage.setItem(KEY, JSON.stringify(state)); } catch (e) {}
  }

  function salvarRender() {
    salvar();
    renderizar();
  }

  function chaveData(d) {
    const dt = new Date(d);
    return `${dt.getFullYear()}-${String(dt.getMonth()+1).padStart(2,'0')}-${String(dt.getDate()).padStart(2,'0')}`;
  }

  function hojeKey() { return chaveData(new Date()); }

  function formatarBR(s) {
    const [y,m,d] = s.split('-');
    return `${d}/${m}/${y}`;
  }

  function nomeMes(m) {
    const meses = ['Janeiro','Fevereiro','Março','Abril','Maio','Junho','Julho','Agosto','Setembro','Outubro','Novembro','Dezembro'];
    return meses[m];
  }

  function semanaRef(data, offset) {
    const d = new Date(data);
    d.setDate(d.getDate() + offset * 7);
    const dia = d.getDay();
    d.setDate(d.getDate() - dia + (dia === 0 ? -6 : 1));
    const semana = [];
    for (let i = 0; i < 7; i++) {
      const dt = new Date(d);
      dt.setDate(dt.getDate() + i);
      semana.push(chaveData(dt));
    }
    return semana;
  }

  /* ── NAVEGAÇÃO ── */
  function initNav() {
    document.querySelectorAll('.nav-btn').forEach(b => {
      b.addEventListener('click', () => {
        const p = b.dataset.page;
        document.querySelectorAll('.page').forEach(x => x.classList.remove('active'));
        document.querySelectorAll('.nav-btn').forEach(x => x.classList.remove('active'));
        document.getElementById('page-'+p).classList.add('active');
        b.classList.add('active');
        renderizar();
      });
    });
    document.querySelectorAll('.see-all-btn').forEach(b => {
      b.addEventListener('click', () => {
        const p = b.dataset.page;
        document.querySelectorAll('.page').forEach(x => x.classList.remove('active'));
        document.querySelectorAll('.nav-btn').forEach(x => x.classList.remove('active'));
        document.getElementById('page-'+p).classList.add('active');
        document.querySelector(`.nav-btn[data-page="${p}"]`).classList.add('active');
        if (b.dataset.tab) {
          document.querySelectorAll('.tab-btn').forEach(x => x.classList.remove('active'));
          document.querySelectorAll('.tab-content').forEach(x => x.classList.remove('active'));
          document.querySelector(`.tab-btn[data-tab="${b.dataset.tab}"]`).classList.add('active');
          document.getElementById(b.dataset.tab).classList.add('active');
        }
        renderizar();
      });
    });
  }

  /* ── TOPBAR ── */
  function atualizarTopbar() {
    const agora = new Date();
    document.getElementById('streak-display').textContent = '\u{1F525} ' + calcularStreak();
  }

  function calcularStreak() {
    const hoje = new Date();
    let streak = 0;
    for (let i = 0; i < 365; i++) {
      const d = new Date(hoje);
      d.setDate(d.getDate() - i);
      const key = chaveData(d);
      const checklist = state.checklists[key] || [];
      if (checklist.length > 0 && checklist.some(x => x.done)) {
        streak++;
      } else if (i === 0) {
        continue;
      } else {
        break;
      }
    }
    return streak;
  }

  /* ── DASHBOARD ── */
  function renderDashboard() {
    const h = new Date().getHours();
    const saudacao = h < 12 ? 'Bom dia' : h < 18 ? 'Boa tarde' : 'Boa noite';
    document.getElementById('greeting').textContent = saudacao + '!';

    document.getElementById('dash-today-date').textContent =
      new Date().toLocaleDateString('pt-BR', { weekday: 'long', day: 'numeric', month: 'long' });

    /* Progress ring */
    let totalTopicos = 0, feitosTopicos = 0;
    CONTEUDO.forEach(m => {
      const tops = state.topicos[m.id] || {};
      Object.keys(tops).forEach(t => {
        totalTopicos++;
        if (tops[t]) feitosTopicos++;
      });
    });
    const pctGeral = totalTopicos > 0 ? Math.round(feitosTopicos / totalTopicos * 100) : 0;
    const circ = 2 * Math.PI * 54;
    document.getElementById('ring-fill-dash').style.strokeDashoffset = circ - (circ * pctGeral / 100);
    document.getElementById('ring-pct').textContent = pctGeral + '%';

    const concluidas = CONTEUDO.filter(m => {
      const tops = state.topicos[m.id] || {};
      const vals = Object.values(tops);
      return vals.length > 0 && vals.every(v => v);
    }).length;
    document.getElementById('dash-concluidas').textContent = concluidas;
    document.getElementById('dash-topicos').textContent = feitosTopicos;
    document.getElementById('dash-simulados').textContent = state.simulados.length;

    /* Hoje - pega do cronograma */
    const diaSemana = new Date().getDay();
    const mapa = ['dom','seg','ter','qua','qui','sex','sab'];
    const keyHoje = mapa[diaSemana];
    const materiasHoje = state.cronograma[keyHoje] || [];
    const container = document.getElementById('dash-hoje');
    container.innerHTML = '';
    if (materiasHoje.length === 0) {
      container.innerHTML = '<div class="dash-empty">Nenhuma matéria programada para hoje</div>';
    } else {
      materiasHoje.forEach(m => {
        const materia = CONTEUDO.find(c => c.nome === m || m.startsWith(c.nome));
        const div = document.createElement('div');
        div.className = 'dash-hoje-item';
        const cor = document.createElement('div');
        cor.className = 'hoje-color';
        cor.style.background = materia ? materia.cor : '#64748b';
        const info = document.createElement('div');
        info.className = 'hoje-info';
        info.innerHTML = `<div class="hoje-name">${m}</div><div class="hoje-desc">Clique para estudar</div>`;
        div.appendChild(cor);
        div.appendChild(info);
        div.addEventListener('click', () => {
          if (materia) abrirMateria(materia.id);
          else {
            document.querySelectorAll('.page').forEach(x => x.classList.remove('active'));
            document.querySelectorAll('.nav-btn').forEach(x => x.classList.remove('active'));
            document.getElementById('page-materias').classList.add('active');
            document.querySelector('.nav-btn[data-page="materias"]').classList.add('active');
            renderizar();
          }
        });
        container.appendChild(div);
      });
    }

    /* Últimos simulados */
    const simContainer = document.getElementById('dash-simulados');
    simContainer.innerHTML = '';
    const recentes = [...state.simulados].reverse().slice(0, 3);
    if (recentes.length === 0) {
      simContainer.innerHTML = '<div class="dash-empty">Nenhum simulado registrado</div>';
    } else {
      recentes.forEach(s => {
        const pct = Math.round(s.acertos / s.total * 100);
        const div = document.createElement('div');
        div.className = 'dash-sim-item';
        div.innerHTML = `
          <div><div class="sim-materia">${s.materia}</div><div class="sim-data">${formatarBR(s.data)}</div></div>
          <div class="sim-nota ${pct>=70?'good':pct>=40?'med':'bad'}">${pct}%</div>`;
        simContainer.appendChild(div);
      });
    }
  }

  /* ── MATÉRIAS ── */
  let materiaAtiva = null;

  function renderMaterias() {
    if (materiaAtiva) {
      renderMateriaDetalhe(materiaAtiva);
      return;
    }
    document.getElementById('materia-detail').classList.add('hidden');
    document.getElementById('materias-lista').classList.remove('hidden');

    const busca = (document.getElementById('search-materia').value || '').toLowerCase();
    const lista = document.getElementById('materias-lista');
    lista.innerHTML = '';

    CONTEUDO.filter(m => m.nome.toLowerCase().includes(busca)).forEach(m => {
      const tops = state.topicos[m.id] || {};
      const vals = Object.values(tops);
      const feitos = vals.filter(v => v).length;
      const total = vals.length;
      const pct = total > 0 ? Math.round(feitos / total * 100) : 0;

      const card = document.createElement('div');
      card.className = 'materia-card';
      card.innerHTML = `
        <div class="materia-icon" style="background:${m.cor}15;color:${m.cor}">${m.icon}</div>
        <div class="materia-info">
          <div class="materia-name">${m.nome}</div>
          <div class="materia-meta">${feitos}/${total} tópicos</div>
        </div>
        <div class="materia-pct">${pct}%</div>`;
      card.addEventListener('click', () => abrirMateria(m.id));
      lista.appendChild(card);
    });
  }

  function abrirMateria(id) {
    materiaAtiva = id;
    document.getElementById('materias-lista').classList.add('hidden');
    const detail = document.getElementById('materia-detail');
    detail.classList.remove('hidden');
    renderMateriaDetalhe(id);
  }

  function renderMateriaDetalhe(id) {
    const materia = CONTEUDO.find(m => m.id === id);
    if (!materia) return;

    document.getElementById('materia-detail-title').textContent = materia.nome;
    const tops = state.topicos[id] || {};
    const vals = Object.values(tops);
    const feitos = vals.filter(v => v).length;
    const total = vals.length;
    const pct = total > 0 ? Math.round(feitos / total * 100) : 0;

    document.getElementById('materia-detail-pct').textContent = pct + '%';
    document.getElementById('materia-detail-bar').style.width = pct + '%';

    const container = document.getElementById('materia-detail-topics');
    container.innerHTML = '';
    materia.topicos.forEach(t => {
      const done = tops[t] || false;
      const div = document.createElement('div');
      div.className = 'topic-item' + (done ? ' done' : '');
      div.innerHTML = `
        <div class="topic-check">${done ? '\u2713' : ''}</div>
        <span class="topic-text">${t}</span>`;
      div.addEventListener('click', () => {
        state.topicos[id][t] = !state.topicos[id][t];
        salvarRender();
      });
      container.appendChild(div);
    });
  }

  function initMaterias() {
    document.getElementById('back-materias').addEventListener('click', () => {
      materiaAtiva = null;
      document.getElementById('materia-detail').classList.add('hidden');
      document.getElementById('materias-lista').classList.remove('hidden');
      renderMaterias();
    });
    document.getElementById('search-materia').addEventListener('input', () => renderMaterias());
  }

  /* ── CRONOGRAMA ── */
  let cronoOffset = 0;

  function renderCronograma() {
    const hoje = new Date();
    const ref = new Date(hoje);
    ref.setDate(ref.getDate() + cronoOffset * 7);
    const semana = semanaRef(ref, 0);

    const seg = new Date(semana[1]);
    const sab = new Date(semana[6]);
    document.getElementById('week-label').textContent =
      `${seg.getDate()}/${seg.getMonth()+1} a ${sab.getDate()}/${sab.getMonth()+1}`;

    const grid = document.getElementById('cronograma-grid');
    grid.innerHTML = '';

    const mapa = ['dom','seg','ter','qua','qui','sex','sab'];
    for (let i = 1; i <= 6; i++) {
      const key = mapa[i];
      const dataStr = semana[i];
      const materias = state.cronograma[key] || [];
      const checklist = state.checklists[dataStr] || [];

      const day = document.createElement('div');
      day.className = 'crono-day';
      const hdr = document.createElement('div');
      hdr.className = `crono-day-header day-color-${key}`;
      hdr.innerHTML = `${DIAS[i]} <span class="crono-day-date">${formatarBR(dataStr)}</span>`;
      day.appendChild(hdr);

      const body = document.createElement('div');
      body.className = 'crono-day-body';

      if (materias.length === 0) {
        body.innerHTML = '<div class="crono-empty">Dia livre</div>';
      } else {
        materias.forEach(m => {
          const item = document.createElement('div');
          item.className = 'crono-subject';
          const done = checklist.some(x => x.text === m);
          if (done) item.classList.add('done');

          const cb = document.createElement('div');
          cb.className = 'crono-cb' + (done ? ' checked' : '');
          cb.textContent = done ? '\u2713' : '';
          cb.addEventListener('click', () => {
            if (!state.checklists[dataStr]) state.checklists[dataStr] = [];
            const idx = state.checklists[dataStr].findIndex(x => x.text === m);
            if (idx >= 0) state.checklists[dataStr].splice(idx, 1);
            else state.checklists[dataStr].push({ text: m, done: true });
            salvarRender();
          });

          const nome = document.createElement('span');
          nome.className = 'crono-name';
          nome.textContent = m;

          item.appendChild(cb);
          item.appendChild(nome);
          body.appendChild(item);
        });
      }
      day.appendChild(body);
      grid.appendChild(day);
    }
  }

  function initCrono() {
    document.getElementById('prev-week').addEventListener('click', () => { cronoOffset--; renderCronograma(); });
    document.getElementById('next-week').addEventListener('click', () => { cronoOffset++; renderCronograma(); });
  }

  /* ── PROGRESSO (MATÉRIAS + SIMULADOS) ── */
  function renderProgressoMaterias() {
    const lista = document.getElementById('progresso-lista');
    lista.innerHTML = '';
    CONTEUDO.forEach(m => {
      const tops = state.topicos[m.id] || {};
      const vals = Object.values(tops);
      const feitos = vals.filter(v => v).length;
      const total = vals.length;
      const pct = total > 0 ? Math.round(feitos / total * 100) : 0;
      const cor = pct >= 80 ? '#10b981' : pct >= 50 ? '#f59e0b' : pct >= 20 ? '#ea580c' : '#ef4444';

      const card = document.createElement('div');
      card.className = 'prog-card';
      card.innerHTML = `
        <div class="prog-card-header">
          <span class="prog-name">${m.nome}</span>
          <span class="prog-pct" style="color:${cor}">${pct}%</span>
        </div>
        <div class="prog-bar"><div class="prog-fill" style="width:${pct}%;background:${cor}"></div></div>`;
      lista.appendChild(card);
    });
  }

  function renderSimulados() {
    const select = document.getElementById('simulado-materia');
    if (select) {
      select.innerHTML = '';
      CONTEUDO.forEach(m => {
        const opt = document.createElement('option');
        opt.value = m.nome;
        opt.textContent = m.nome;
        select.appendChild(opt);
      });
    }

    const lista = document.getElementById('simulados-lista');
    lista.innerHTML = '';
    const sorted = [...state.simulados].reverse();
    if (sorted.length === 0) {
      lista.innerHTML = '<div style="text-align:center;color:var(--text-muted);padding:16px;font-size:0.82rem">Nenhum simulado registrado. Adicione o primeiro!</div>';
    } else {
      sorted.forEach((s, idx) => {
        const realIdx = state.simulados.length - 1 - idx;
        const pct = Math.round(s.acertos / s.total * 100);
        const card = document.createElement('div');
        card.className = 'sim-card';
        card.innerHTML = `
          <div class="sim-info">
            <div class="sim-materia">${s.materia}</div>
            <div class="sim-meta">${s.acertos}/${s.total} &middot; ${formatarBR(s.data)}</div>
          </div>
          <div class="sim-nota ${pct>=70?'good':pct>=40?'med':'bad'}">${pct}%</div>
          <button class="delete-sim" data-idx="${realIdx}">&times;</button>`;
        card.querySelector('.delete-sim').addEventListener('click', () => {
          state.simulados.splice(realIdx, 1);
          salvarRender();
        });
        lista.appendChild(card);
      });
    }

    drawChart();
  }

  function initSimulados() {
    document.getElementById('add-simulado-btn').addEventListener('click', () => {
      const form = document.getElementById('simulados-form');
      form.classList.toggle('hidden');
      if (!form.classList.contains('hidden')) document.getElementById('simulado-data').value = hojeKey();
    });
    document.getElementById('save-simulado').addEventListener('click', () => {
      const materia = document.getElementById('simulado-materia').value;
      const acertos = parseInt(document.getElementById('simulado-acertos').value);
      const total = parseInt(document.getElementById('simulado-total').value);
      const data = document.getElementById('simulado-data').value;
      if (!materia || isNaN(acertos) || isNaN(total) || !data) { alert('Preencha todos os campos!'); return; }
      if (acertos > total) { alert('Acertos não podem ser maiores que o total!'); return; }
      state.simulados.push({ materia, acertos, total, data });
      salvarRender();
      document.getElementById('simulados-form').classList.add('hidden');
      document.getElementById('simulado-acertos').value = '';
      document.getElementById('simulado-total').value = '';
    });
    document.getElementById('cancel-simulado').addEventListener('click', () => {
      document.getElementById('simulados-form').classList.add('hidden');
    });
    /* Tabs */
    document.querySelectorAll('.tab-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
        document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
        btn.classList.add('active');
        document.getElementById(btn.dataset.tab).classList.add('active');
        if (btn.dataset.tab === 'prog-simulados') drawChart();
      });
    });
  }

  function drawChart() {
    const canvas = document.getElementById('simulado-chart');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const dpr = window.devicePixelRatio || 1;
    const rect = canvas.getBoundingClientRect();
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    ctx.scale(dpr, dpr);
    const w = rect.width, h = rect.height;
    ctx.clearRect(0, 0, w, h);
    const recent = state.simulados.slice(-8);
    if (recent.length < 2) {
      ctx.fillStyle = '#94a3b8'; ctx.font = '12px Inter, sans-serif'; ctx.textAlign = 'center';
      ctx.fillText('Registre 2+ simulados para ver o gráfico', w/2, h/2);
      return;
    }
    const values = recent.map(s => Math.round(s.acertos / s.total * 100));
    const barW = Math.max(8, (w - 16) / values.length - 4);
    const pad = 8;
    ctx.font = '9px Inter, sans-serif'; ctx.textAlign = 'center';
    values.forEach((v, i) => {
      const x = pad + i * (barW + 4);
      const barH = (v / 100) * (h - 30);
      const y = h - 16 - barH;
      ctx.fillStyle = v >= 70 ? '#10b981' : v >= 40 ? '#f59e0b' : '#ef4444';
      ctx.beginPath();
      const r = Math.min(3, barW/2);
      const bx = x, by = y, bw = barW, bh = barH;
      ctx.moveTo(bx + r, by);
      ctx.lineTo(bx + bw - r, by);
      ctx.quadraticCurveTo(bx + bw, by, bx + bw, by + r);
      ctx.lineTo(bx + bw, by + bh - r);
      ctx.quadraticCurveTo(bx + bw, by + bh, bx + bw - r, by + bh);
      ctx.lineTo(bx + r, by + bh);
      ctx.quadraticCurveTo(bx, by + bh, bx, by + bh - r);
      ctx.lineTo(bx, by + r);
      ctx.quadraticCurveTo(bx, by, bx + r, by);
      ctx.closePath();
      ctx.fill();
      ctx.fillStyle = '#64748b';
      ctx.fillText(v+'%', x + barW/2, h - 4);
    });
  }

  /* ── CALENDÁRIO ── */
  let calMes = new Date().getMonth();
  let calAno = new Date().getFullYear();
  let calDiaSel = null;

  function renderCalendario() {
    document.getElementById('cal-month-label').textContent = nomeMes(calMes) + ' ' + calAno;
    const grid = document.getElementById('cal-days');
    grid.innerHTML = '';

    const primeiro = new Date(calAno, calMes, 1).getDay();
    const diasNoMes = new Date(calAno, calMes + 1, 0).getDate();
    const diasPrev = new Date(calAno, calMes, 0).getDate();
    const hoje = hojeKey();

    for (let i = primeiro - 1; i >= 0; i--) {
      const dia = diasPrev - i;
      const d = new Date(calAno, calMes - 1, dia);
      grid.appendChild(criarDiaCal(dia, chaveData(d), true, hoje));
    }
    for (let d = 1; d <= diasNoMes; d++) {
      const dt = new Date(calAno, calMes, d);
      grid.appendChild(criarDiaCal(d, chaveData(dt), false, hoje));
    }
    const total = primeiro + diasNoMes;
    const rest = (7 - total % 7) % 7;
    for (let d = 1; d <= rest; d++) {
      const dt = new Date(calAno, calMes + 1, d);
      grid.appendChild(criarDiaCal(d, chaveData(dt), true, hoje));
    }
    if (calDiaSel) mostrarDetalheCal(calDiaSel);
  }

  function criarDiaCal(num, key, other, hoje) {
    const div = document.createElement('div');
    div.className = 'cal-day';
    if (other) div.classList.add('other-month');
    if (key === hoje) div.classList.add('today');
    if (state.calendario[key] && state.calendario[key].trim()) div.classList.add('has-goal');
    if (key === calDiaSel) div.classList.add('selected');
    div.textContent = num;
    div.dataset.key = key;
    div.addEventListener('click', () => {
      calDiaSel = key;
      document.querySelectorAll('.cal-day').forEach(d => d.classList.remove('selected'));
      div.classList.add('selected');
      mostrarDetalheCal(key);
    });
    return div;
  }

  function mostrarDetalheCal(key) {
    const det = document.getElementById('cal-day-detail');
    det.classList.remove('hidden');
    const d = new Date(key);
    document.getElementById('cal-day-title').textContent =
      d.toLocaleDateString('pt-BR', { weekday: 'long', day: 'numeric', month: 'long' });
    document.getElementById('cal-goal-input').value = state.calendario[key] || '';
    renderCalChecklist(key);
  }

  function renderCalChecklist(key) {
    const ul = document.getElementById('cal-checklist-items');
    ul.innerHTML = '';
    (state.checklists[key] || []).forEach((item, idx) => {
      const li = document.createElement('li');
      li.className = 'cal-checklist-item' + (item.done ? ' done' : '');
      const cb = document.createElement('input');
      cb.type = 'checkbox';
      cb.checked = item.done;
      cb.addEventListener('change', () => {
        state.checklists[key][idx].done = !state.checklists[key][idx].done;
        salvarRender();
      });
      const span = document.createElement('span');
      span.textContent = item.text;
      const del = document.createElement('button');
      del.className = 'del-task';
      del.textContent = '✕';
      del.addEventListener('click', () => {
        state.checklists[key].splice(idx, 1);
        salvarRender();
      });
      li.appendChild(cb);
      li.appendChild(span);
      li.appendChild(del);
      ul.appendChild(li);
    });
  }

  function initCal() {
    document.getElementById('prev-month').addEventListener('click', () => {
      calMes--; if (calMes < 0) { calMes = 11; calAno--; }
      calDiaSel = null; document.getElementById('cal-day-detail').classList.add('hidden');
      renderCalendario();
    });
    document.getElementById('next-month').addEventListener('click', () => {
      calMes++; if (calMes > 11) { calMes = 0; calAno++; }
      calDiaSel = null; document.getElementById('cal-day-detail').classList.add('hidden');
      renderCalendario();
    });
    document.getElementById('save-cal-goal').addEventListener('click', () => {
      if (calDiaSel) {
        const goal = document.getElementById('cal-goal-input').value.trim();
        if (goal) state.calendario[calDiaSel] = goal;
        else delete state.calendario[calDiaSel];
        salvarRender();
      }
    });
    document.getElementById('cal-add-task').addEventListener('click', () => {
      if (!calDiaSel) return;
      const text = prompt('Nova tarefa:');
      if (text && text.trim()) {
        if (!state.checklists[calDiaSel]) state.checklists[calDiaSel] = [];
        state.checklists[calDiaSel].push({ text: text.trim(), done: false });
        salvarRender();
      }
    });
  }

  /* ── RENDER GERAL ── */
  function renderizar() {
    atualizarTopbar();
    const active = document.querySelector('.page.active');
    if (!active) return;
    const id = active.id.replace('page-', '');
    switch (id) {
      case 'dashboard': renderDashboard(); break;
      case 'materias': renderMaterias(); break;
      case 'cronograma': renderCronograma(); break;
      case 'progresso':
        renderProgressoMaterias();
        if (document.querySelector('.tab-btn[data-tab="prog-simulados"].active')) drawChart();
        break;
      case 'calendario': renderCalendario(); break;
    }
  }

  let resizeTimer;
  function handleResize() {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      if (document.querySelector('.tab-btn[data-tab="prog-simulados"].active')) drawChart();
    }, 200);
  }

  /* ── INIT ── */
  function init() {
    carregar();
    initNav();
    initMaterias();
    initCrono();
    initSimulados();
    initCal();
    document.getElementById('page-dashboard').classList.add('active');
    document.querySelector('.nav-btn[data-page="dashboard"]').classList.add('active');
    renderizar();
    window.addEventListener('resize', handleResize);
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
