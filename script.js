(function () {
  const STORAGE_KEY = 'plano_inss_2026';

  const MATERIAS = [
    'Língua Portuguesa',
    'Raciocínio Lógico-Matemático',
    'Noções de Informática',
    'Ética no Serviço Público',
    'Direito Constitucional',
    'Direito Administrativo',
    'Direito Previdenciário',
    'Legislação Previdenciária',
    'Regime Jurídico Único (Lei 8.112/90)',
  ];

  const DAYS = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];
  const DAY_COLORS = ['', 'seg', 'ter', 'qua', 'qui', 'sex', 'sab'];

  const DEFAULT_CRONOGRAMA = {
    seg: ['Direito Constitucional', 'Língua Portuguesa'],
    ter: ['Direito Administrativo', 'Raciocínio Lógico-Matemático'],
    qua: ['Direito Previdenciário', 'Noções de Informática'],
    qui: ['Legislação Previdenciária', 'Língua Portuguesa'],
    sex: ['Regime Jurídico Único (Lei 8.112/90)', 'Ética no Serviço Público'],
    sab: ['Revisão geral', 'Questões'],
  };

  let state = loadState();

  function getDefaultState() {
    return {
      cronograma: JSON.parse(JSON.stringify(DEFAULT_CRONOGRAMA)),
      checklists: {},
      progresso: {},
      simulados: [],
      calendario: {},
    };
  }

  function loadState() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        if (!parsed.cronograma) parsed.cronograma = JSON.parse(JSON.stringify(DEFAULT_CRONOGRAMA));
        if (!parsed.checklists) parsed.checklists = {};
        if (!parsed.progresso) parsed.progresso = {};
        if (!parsed.simulados) parsed.simulados = [];
        if (!parsed.calendario) parsed.calendario = {};
        return parsed;
      }
    } catch (e) { /* ignore */ }
    return getDefaultState();
  }

  function saveState() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch (e) { /* ignore */ }
  }

  function saveAndRender() {
    saveState();
    renderAll();
  }

  function getDateKey(date) {
    const d = new Date(date);
    return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
  }

  function getTodayKey() {
    return getDateKey(new Date());
  }

  function formatDateBR(dateStr) {
    const [y, m, d] = dateStr.split('-');
    return `${d}/${m}/${y}`;
  }

  function getWeekDates(refDate) {
    const d = new Date(refDate);
    const day = d.getDay();
    const diff = d.getDate() - day + (day === 0 ? -6 : 1);
    d.setDate(diff);
    const week = [];
    for (let i = 0; i < 7; i++) {
      const date = new Date(d);
      date.setDate(d.getDate() + i);
      week.push(getDateKey(date));
    }
    return week;
  }

  /* NAVIGATION */
  function initNavigation() {
    const navBtns = document.querySelectorAll('.nav-btn');
    navBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const page = btn.dataset.page;
        showPage(page);
      });
    });
  }

  function showPage(pageId) {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
    document.getElementById(`page-${pageId}`).classList.add('active');
    document.querySelector(`.nav-btn[data-page="${pageId}"]`).classList.add('active');
    renderAll();
  }

  /* TOPBAR */
  function updateTopbar() {
    const now = new Date();
    const opts = { weekday: 'long', day: 'numeric', month: 'long' };
    document.getElementById('current-date').textContent = now.toLocaleDateString('pt-BR', opts);
  }

  /* CRONOGRAMA */
  let cronogramaWeekOffset = 0;

  function renderCronograma() {
    const today = new Date();
    const ref = new Date(today);
    ref.setDate(ref.getDate() + cronogramaWeekOffset * 7);
    const weekDates = getWeekDates(ref);

    const monday = new Date(weekDates[1]);
    const sunday = new Date(weekDates[6]);
    const label = `${monday.getDate()}/${monday.getMonth() + 1} a ${sunday.getDate()}/${sunday.getMonth() + 1}`;
    document.getElementById('week-label').textContent = label;

    const grid = document.getElementById('cronograma-grid');
    grid.innerHTML = '';

    const dayNames = ['dom', 'seg', 'ter', 'qua', 'qui', 'sex', 'sab'];

    for (let i = 1; i <= 6; i++) {
      const dayKey = dayNames[i];
      const subjects = state.cronograma[dayKey] || [];
      const dateStr = weekDates[i];
      const dayChecklist = state.checklists[dateStr] || [];

      const card = document.createElement('div');
      card.className = 'cronograma-day';

      const header = document.createElement('div');
      header.className = `cronograma-day-header day-color-${dayKey}`;
      header.textContent = DAYS[i] + ' - ' + formatDateBR(dateStr);
      card.appendChild(header);

      const list = document.createElement('div');
      list.className = 'cronograma-day-subjects';

      if (subjects.length === 0) {
        const empty = document.createElement('div');
        empty.className = 'cronograma-day-empty';
        empty.textContent = 'Dia livre';
        list.appendChild(empty);
      } else {
        subjects.forEach(subj => {
          const item = document.createElement('div');
          item.className = 'cronograma-subject';

          const cb = document.createElement('input');
          cb.type = 'checkbox';
          const isDone = dayChecklist.some(function(i) { return i.text === subj; });
          cb.checked = isDone;
          if (isDone) item.classList.add('done');

          cb.addEventListener('change', () => {
            toggleChecklistItem(dateStr, subj);
          });

          const name = document.createElement('span');
          name.className = 'subject-name';
          name.textContent = subj;

          item.appendChild(cb);
          item.appendChild(name);
          list.appendChild(item);
        });
      }

      card.appendChild(list);
      grid.appendChild(card);
    }
  }

  function initCronogramaNav() {
    document.getElementById('prev-week').addEventListener('click', () => {
      cronogramaWeekOffset--;
      renderCronograma();
    });
    document.getElementById('next-week').addEventListener('click', () => {
      cronogramaWeekOffset++;
      renderCronograma();
    });
  }

  /* CHECKLIST */
  let checklistOffset = 0;

  function getChecklistDate() {
    const today = new Date();
    const d = new Date(today);
    d.setDate(d.getDate() + checklistOffset);
    return getDateKey(d);
  }

  function renderChecklist() {
    const dateStr = getChecklistDate();
    const items = state.checklists[dateStr] || [];
    const doneItems = items.filter(i => i.done).length;
    const total = items.length;

    const d = new Date(dateStr);
    const opts = { weekday: 'long', day: 'numeric', month: 'long' };
    document.getElementById('checklist-date-label').textContent =
      d.toLocaleDateString('pt-BR', opts);

    document.getElementById('checklist-progress-text').textContent =
      `${doneItems}/${total} concluído${total > 1 ? 's' : ''}`;

    const pct = total > 0 ? (doneItems / total) * 100 : 0;
    document.getElementById('checklist-progress-fill').style.width = pct + '%';

    const ul = document.getElementById('checklist-items');
    ul.innerHTML = '';

    items.forEach((item, idx) => {
      const li = document.createElement('li');
      li.className = 'checklist-item' + (item.done ? ' done' : '');

      const cb = document.createElement('input');
      cb.type = 'checkbox';
      cb.checked = item.done;
      cb.addEventListener('change', () => {
        state.checklists[dateStr][idx].done = !state.checklists[dateStr][idx].done;
        saveAndRender();
      });

      const text = document.createElement('span');
      text.className = 'item-text';
      text.textContent = item.text;

      const del = document.createElement('button');
      del.className = 'delete-item';
      del.innerHTML = '&times;';
      del.addEventListener('click', () => {
        state.checklists[dateStr].splice(idx, 1);
        saveAndRender();
      });

      li.appendChild(cb);
      li.appendChild(text);
      li.appendChild(del);
      ul.appendChild(li);
    });
  }

  function initChecklistNav() {
    document.getElementById('prev-day').addEventListener('click', () => {
      checklistOffset--;
      renderChecklist();
    });
    document.getElementById('next-day').addEventListener('click', () => {
      checklistOffset++;
      renderChecklist();
    });
    document.getElementById('add-checklist-item').addEventListener('click', () => {
      const text = prompt('Nova tarefa:');
      if (text && text.trim()) {
        const dateStr = getChecklistDate();
        if (!state.checklists[dateStr]) state.checklists[dateStr] = [];
        state.checklists[dateStr].push({ text: text.trim(), done: false });
        saveAndRender();
      }
    });
  }

  function toggleChecklistItem(dateStr, subj) {
    if (!state.checklists[dateStr]) state.checklists[dateStr] = [];
    const idx = state.checklists[dateStr].findIndex(function(i) { return i.text === subj; });
    if (idx >= 0) {
      state.checklists[dateStr].splice(idx, 1);
    } else {
      state.checklists[dateStr].push({ text: subj, done: true });
    }
    saveAndRender();
  }

  /* PROGRESSO */
  function renderProgresso() {
    const totalTopics = MATERIAS.length;
    let completedTopics = 0;

    const lista = document.getElementById('progresso-lista');
    lista.innerHTML = '';

    MATERIAS.forEach((materia, idx) => {
      const prog = state.progresso[materia] || 0;
      if (prog >= 100) completedTopics++;

      const card = document.createElement('div');
      card.className = 'progresso-card';

      const header = document.createElement('div');
      header.className = 'progresso-card-header';
      header.innerHTML = `
        <span class="subject-name">${materia}</span>
        <span class="subject-pct">${prog}%</span>
      `;

      const barWrap = document.createElement('div');
      barWrap.className = 'progresso-bar';

      const fill = document.createElement('div');
      fill.className = 'progresso-fill';
      fill.style.width = prog + '%';
      fill.style.background = getProgressColor(prog);

      barWrap.appendChild(fill);
      card.appendChild(header);
      card.appendChild(barWrap);

      const controls = document.createElement('div');
      controls.style.cssText = 'display:flex;gap:4px;margin-top:6px';

      const incBtn = document.createElement('button');
      incBtn.textContent = '+5%';
      incBtn.className = 'btn-secondary';
      incBtn.style.cssText = 'flex:1;padding:4px;font-size:0.75rem;margin:0';
      incBtn.addEventListener('click', () => {
        const cur = state.progresso[materia] || 0;
        state.progresso[materia] = Math.min(100, cur + 5);
        saveAndRender();
      });

      const decBtn = document.createElement('button');
      decBtn.textContent = '-5%';
      decBtn.className = 'btn-secondary';
      decBtn.style.cssText = 'flex:1;padding:4px;font-size:0.75rem;margin:0';
      decBtn.addEventListener('click', () => {
        const cur = state.progresso[materia] || 0;
        state.progresso[materia] = Math.max(0, cur - 5);
        saveAndRender();
      });

      const setBtn = document.createElement('button');
      setBtn.textContent = 'Definir';
      setBtn.className = 'btn-secondary';
      setBtn.style.cssText = 'flex:1;padding:4px;font-size:0.75rem;margin:0';
      setBtn.addEventListener('click', () => {
        const val = prompt(`Progresso em ${materia} (0-100):`, state.progresso[materia] || 0);
        if (val !== null) {
          const num = parseInt(val);
          if (!isNaN(num) && num >= 0 && num <= 100) {
            state.progresso[materia] = num;
            saveAndRender();
          }
        }
      });

      controls.appendChild(decBtn);
      controls.appendChild(setBtn);
      controls.appendChild(incBtn);
      card.appendChild(controls);

      lista.appendChild(card);
    });

    const geralPct = totalTopics > 0 ? Math.round((completedTopics / totalTopics) * 100) : 0;
    document.getElementById('progresso-geral-text').textContent = `Geral: ${geralPct}% (${completedTopics}/${totalTopics} concluídas)`;
    document.getElementById('progresso-geral-fill').style.width = geralPct + '%';
  }

  function getProgressColor(pct) {
    if (pct >= 80) return '#34a853';
    if (pct >= 50) return '#fbbc04';
    if (pct >= 20) return '#ff6d01';
    return '#ea4335';
  }

  /* SIMULADOS */
  function renderSimulados() {
    const select = document.getElementById('simulado-materia');
    select.innerHTML = '';
    MATERIAS.forEach(m => {
      const opt = document.createElement('option');
      opt.value = m;
      opt.textContent = m;
      select.appendChild(opt);
    });

    const lista = document.getElementById('simulados-lista');
    lista.innerHTML = '';

    const sorted = [...state.simulados].reverse();

    if (sorted.length === 0) {
      lista.innerHTML = '<p style="text-align:center;color:var(--text-secondary);padding:16px;font-size:0.85rem">Nenhum simulado registrado ainda.</p>';
    } else {
      sorted.forEach((sim, idx) => {
        const realIdx = state.simulados.length - 1 - idx;
        const pct = Math.round((sim.acertos / sim.total) * 100);
        const card = document.createElement('div');
        card.className = 'simulado-card';

        const info = document.createElement('div');
        info.className = 'sim-info';
        info.innerHTML = `
          <div class="sim-materia">${sim.materia}</div>
          <div class="sim-meta">${sim.acertos}/${sim.total} &middot; ${formatDateBR(sim.data)}</div>
        `;

        const nota = document.createElement('div');
        nota.className = `sim-nota ${pct >= 70 ? 'good' : pct >= 40 ? 'medium' : 'bad'}`;
        nota.textContent = pct + '%';

        const del = document.createElement('button');
        del.className = 'delete-simulado';
        del.innerHTML = '&times;';
        del.addEventListener('click', () => {
          state.simulados.splice(realIdx, 1);
          saveAndRender();
        });

        card.appendChild(info);
        card.appendChild(nota);
        card.appendChild(del);
        lista.appendChild(card);
      });
    }

    drawSimuladoChart();
  }

  function initSimuladosForm() {
    document.getElementById('add-simulado-btn').addEventListener('click', () => {
      const form = document.getElementById('simulados-form');
      form.classList.toggle('hidden');
      if (!form.classList.contains('hidden')) {
        document.getElementById('simulado-data').value = getTodayKey();
      }
    });

    document.getElementById('save-simulado').addEventListener('click', () => {
      const materia = document.getElementById('simulado-materia').value;
      const acertos = parseInt(document.getElementById('simulado-acertos').value);
      const total = parseInt(document.getElementById('simulado-total').value);
      const data = document.getElementById('simulado-data').value;

      if (!materia || isNaN(acertos) || isNaN(total) || !data) {
        alert('Preencha todos os campos!');
        return;
      }
      if (acertos > total) {
        alert('Acertos não podem ser maiores que o total!');
        return;
      }

      state.simulados.push({ materia, acertos, total, data });
      saveAndRender();
      document.getElementById('simulados-form').classList.add('hidden');
      document.getElementById('simulado-acertos').value = '';
      document.getElementById('simulado-total').value = '';
    });

    document.getElementById('cancel-simulado').addEventListener('click', () => {
      document.getElementById('simulados-form').classList.add('hidden');
    });
  }

  function drawSimuladoChart() {
    const canvas = document.getElementById('simulado-chart');
    const ctx = canvas.getContext('2d');

    const dpr = window.devicePixelRatio || 1;
    const rect = canvas.getBoundingClientRect();
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    ctx.scale(dpr, dpr);

    const w = rect.width;
    const h = rect.height;
    const padding = 8;

    ctx.clearRect(0, 0, w, h);

    const recent = state.simulados.slice(-10);
    if (recent.length < 2) {
      ctx.fillStyle = '#5f6368';
      ctx.font = '12px sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText('Registre 2+ simulados para ver o gráfico', w / 2, h / 2);
      return;
    }

    const values = recent.map(s => Math.round((s.acertos / s.total) * 100));
    const max = 100;
    const barW = Math.max(8, (w - padding * 2) / values.length - 4);

    ctx.font = '10px sans-serif';
    ctx.textAlign = 'center';

    values.forEach((v, i) => {
      const x = padding + i * (barW + 4);
      const barH = (v / max) * (h - padding * 2 - 14);
      const y = h - padding - 14 - barH;

      const color = v >= 70 ? '#34a853' : v >= 40 ? '#fbbc04' : '#ea4335';
      ctx.fillStyle = color;
      ctx.beginPath();
      ctx.roundRect(x, y, barW, barH, 3);
      ctx.fill();

      ctx.fillStyle = '#5f6368';
      ctx.fillText(v + '%', x + barW / 2, h - padding - 2);
    });
  }

  /* CALENDÁRIO */
  let calMonth = new Date().getMonth();
  let calYear = new Date().getFullYear();
  let selectedCalDay = null;

  function renderCalendario() {
    const monthNames = [
      'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
      'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
    ];
    document.getElementById('cal-month-label').textContent =
      `${monthNames[calMonth]} ${calYear}`;

    const daysContainer = document.getElementById('cal-days');
    daysContainer.innerHTML = '';

    const firstDay = new Date(calYear, calMonth, 1).getDay();
    const daysInMonth = new Date(calYear, calMonth + 1, 0).getDate();
    const daysInPrev = new Date(calYear, calMonth, 0).getDate();

    const todayKey = getTodayKey();

    // Previous month days
    for (let i = firstDay - 1; i >= 0; i--) {
      const day = daysInPrev - i;
      const d = new Date(calYear, calMonth - 1, day);
      const dateKey = getDateKey(d);
      const div = createCalDay(day, dateKey, true, todayKey);
      daysContainer.appendChild(div);
    }

    // Current month days
    for (let d = 1; d <= daysInMonth; d++) {
      const date = new Date(calYear, calMonth, d);
      const dateKey = getDateKey(date);
      const div = createCalDay(d, dateKey, false, todayKey);
      daysContainer.appendChild(div);
    }

    // Next month days to complete grid
    const totalCells = firstDay + daysInMonth;
    const remaining = (7 - (totalCells % 7)) % 7;
    for (let d = 1; d <= remaining; d++) {
      const date = new Date(calYear, calMonth + 1, d);
      const dateKey = getDateKey(date);
      const div = createCalDay(d, dateKey, true, todayKey);
      daysContainer.appendChild(div);
    }

    // Show detail if selected
    if (selectedCalDay) {
      showCalDayDetail(selectedCalDay);
    }
  }

  function createCalDay(dayNum, dateKey, otherMonth, todayKey) {
    const div = document.createElement('div');
    div.className = 'cal-day';
    if (otherMonth) div.classList.add('other-month');
    if (dateKey === todayKey) div.classList.add('today');

    const goal = state.calendario[dateKey];
    if (goal && goal.trim()) div.classList.add('has-goal');

    div.textContent = dayNum;
    div.dataset.date = dateKey;

    div.addEventListener('click', () => {
      selectedCalDay = dateKey;
      showCalDayDetail(dateKey);
      document.querySelectorAll('.cal-day').forEach(d => d.style.outline = 'none');
      div.style.outline = '2px solid var(--primary)';
      div.style.outlineOffset = '-2px';
    });

    return div;
  }

  function showCalDayDetail(dateKey) {
    const detail = document.getElementById('cal-day-detail');
    detail.classList.remove('hidden');

    const d = new Date(dateKey);
    const opts = { weekday: 'long', day: 'numeric', month: 'long' };
    document.getElementById('cal-day-title').textContent =
      d.toLocaleDateString('pt-BR', opts);

    const goal = state.calendario[dateKey] || '';
    document.getElementById('cal-goal-input').value = goal;
  }

  function initCalendarioNav() {
    document.getElementById('prev-month').addEventListener('click', () => {
      calMonth--;
      if (calMonth < 0) { calMonth = 11; calYear--; }
      selectedCalDay = null;
      document.getElementById('cal-day-detail').classList.add('hidden');
      renderCalendario();
    });
    document.getElementById('next-month').addEventListener('click', () => {
      calMonth++;
      if (calMonth > 11) { calMonth = 0; calYear++; }
      selectedCalDay = null;
      document.getElementById('cal-day-detail').classList.add('hidden');
      renderCalendario();
    });
    document.getElementById('save-cal-goal').addEventListener('click', () => {
      if (selectedCalDay) {
        const goal = document.getElementById('cal-goal-input').value.trim();
        if (goal) {
          state.calendario[selectedCalDay] = goal;
        } else {
          delete state.calendario[selectedCalDay];
        }
        saveAndRender();
      }
    });
  }

  /* RENDER ALL */
  function renderAll() {
    updateTopbar();
    const active = document.querySelector('.page.active');
    if (!active) return;
    const pageId = active.id.replace('page-', '');
    switch (pageId) {
      case 'cronograma': renderCronograma(); break;
      case 'checklist': renderChecklist(); break;
      case 'progresso': renderProgresso(); break;
      case 'simulados': renderSimulados(); break;
      case 'calendario': renderCalendario(); break;
    }
  }

  /* HANDLE RESIZE FOR CANVAS */
  let resizeTimeout;

  function handleResize() {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
      if (document.getElementById('page-simulados').classList.contains('active')) {
        drawSimuladoChart();
      }
    }, 200);
  }

  /* CHECKLIST HELPER FOR CRONOGRAMA */
  if (!state.checklists) state.checklists = {};

  /* INIT */
  function init() {
    initNavigation();
    initCronogramaNav();
    initChecklistNav();
    initSimuladosForm();
    initCalendarioNav();
    updateTopbar();
    showPage('cronograma');
    window.addEventListener('resize', handleResize);
  }

  document.addEventListener('DOMContentLoaded', init);
})();
