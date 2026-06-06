/* ==========================================================
   materias/administrativo.js — Direito Administrativo (38 lições)
   ========================================================== */
(function (global) {
  'use strict';
  const M = {};

  M['principios-administrativos'] = {
    topico: 'principios-administrativos',
    titulo: 'Princípios da Administração Pública (art. 37, caput)',
    resumo: 'LIMPE: Legalidade, Impessoalidade, Moralidade, Publicidade, Eficiência. CF, art. 37, caput.',
    teoria: '<p>A <strong>Administração Pública</strong> brasileira rege-se por princípios constitucionais expressos no <em>art. 37, caput, CF/88</em>: <strong>Legalidade</strong>, <strong>Impessoalidade</strong>, <strong>Moralidade</strong>, <strong>Publicidade</strong> e <strong>Eficiência</strong> (este último incluído pela EC 19/1998). A estes se somam outros, como <em>autotutela</em>, <em>indisponibilidade do interesse público</em>, <em>supremacia do interesse público</em> e <em>razoabilidade</em>.</p>',
    regras:['Legalidade: a Administração só pode fazer o que a lei permite', 'Impessoalidade: tratamento isonômico, sem favorecimento', 'Moralidade: honestidade, lealdade, boa-fé', 'Publicidade: transparência, ressalvado o sigilo', 'Eficiência: boa gestão, produtividade'],
    excecoes:['<em>Autotutela</em> é princípio implícito (Súmula 473/STF).', '<em>Razoabilidade</em> e <em>proporcionalidade</em> são princípios gerais de Direito.'],
    exemplos:['Servidor que usa carro oficial para passeio → violação da impessoalidade e moralidade.','Município publica edital com critérios subjetivos → violação da legalidade.'],
    pegadinchas:['<strong>LIMPE</strong> é a sigla clássica.','A <em>moralidade</em> é <em>administrativa</em>, não a moral comum.','A <em>publicidade</em> é regra, mas admite <em>sigilo</em> (quando o interesse público o exigir).'],
    exercicios: [
      { q: 'São princípios da Administração Pública: legalidade, impessoalidade, moralidade, publicidade e eficiência.', g: 'CERTO. Art. 37, caput, CF.' },
      { q: 'A autotutela é princípio expresso na CF.', g: 'ERRADO. É princípio implícito (Súmula 473/STF).' }
    ],
    sotaque: '<strong>"LIMPE: LEGAL + IMPESSO + MORAL + PUBLIC + EFICIENTE"</strong>'
  };

  M['poderes-administrativos'] = {
    topico: 'poderes-administrativos',
    titulo: 'Poderes Administrativos: Hierárquico, Disciplinar, Regulamentar, de Polícia',
    resumo: '4 poderes: hierárquico (escala), disciplinar (sanção), regulamentar (normas), polícia (limites a direitos).',
    teoria: '<p>Os <strong>poderes administrativos</strong> são instrumentos de que dispõe a Administração para cumprir suas finalidades. São <em>vinculados</em> ou <em>discricionários</em>, conforme a lei. Os <em>4 poderes</em> principais: <em>hierárquico</em>, <em>disciplinar</em>, <em>regulamentar</em> e <em>de polícia</em>.</p>',
    regras:['Hierárquico: ordenar, fiscalizar, delegar, avocar (dentro da Administração)', 'Disciplinar: punir servidores e particulares com vínculo especial', 'Regulamentar: expedir normas para fiel execução da lei (decreto)', 'Polícia: limitar direitos individuais em favor do interesse público'],
    excecoes:['O <em>poder disciplinar</em> tem natureza <em>interna</em> (servidores e contratados).', 'O <em>poder de polícia</em> tem natureza <em>externa</em> (atinge particulares).'],
    exemplos:['Chefe de seção aplica advertência a subordinado (hierárquico + disciplinar).','Fiscal sanitário lacra restaurante com falta de higiene (polícia).'],
    pegadinchas:['<strong>Polícia</strong> tem <em>atributos</em>: discricionariedade, autoexecutoriedade, coercibilidade.','O <em>regulamentar</em> não cria direitos nem obrigações, só regula.','O <em>disciplinar</em> tem <em>atributos</em> próprios: presunção de legitimidade, autoexecutoriedade (em regra).'],
    exercicios: [
      { q: 'São poderes administrativos: hierárquico, disciplinar, regulamentar e de polícia.', g: 'CERTO.' },
      { q: 'O poder de polícia é exercido apenas pela Polícia Federal.', g: 'ERRADO. É exercido por diversos órgãos (sanitário, ambiental, de trânsito, etc.).' }
    ],
    sotaque: '<strong>"HIER + DISC + REG + POL = 4 PODERES"</strong>'
  };

  M['atos-administrativos'] = {
    topico: 'atos-administrativos',
    titulo: 'Atos Administrativos: Conceito, Elementos, Atributos',
    resumo: 'Elementos: competência, finalidade, forma, motivo, objeto. Atributos: presunção de legitimidade, imperatividade, autoexecutoriedade, tipicidade.',
    teoria: '<p>O <strong>ato administrativo</strong> é a declaração unilateral de vontade da Administração, com efeitos jurídicos. Tem <em>5 elementos</em>: <em>competência</em>, <em>finalidade</em>, <em>forma</em>, <em>motivo</em> e <em>objeto</em>. Os <em>atributos</em> são: <em>presunção de legitimidade</em>, <em>imperatividade</em>, <em>autoexecutoriedade</em> e <em>tipicidade</em>.</p>',
    regras:['Elementos: competência (sujeito), finalidade (interesse público), forma (procedimento), motivo (fato e fundamento), objeto (conteúdo)', 'Atributos: presunção de legitimidade, imperatividade, autoexecutoriedade, tipicidade', 'Classificação: vinculados ou discricionários', 'Espécies: licença, autorização, permissão, concessão, etc.'],
    excecoes:['O <em>ato vinculado</em> não admite juízo de conveniência e oportunidade.', 'O <em>ato discricionário</em> admite juízo de conveniência e oportunidade (em regra).'],
    exemplos:['Demissão de servidor por justa causa (ato vinculado, após PAD).','Concessão de alvará para evento (ato discricionário).'],
    pegadinchas:['<strong>Forma</strong> é elemento essencial (em regra).','<strong>Autoexecutoriedade</strong> é a possibilidade de a Administração executar o ato sem ordem judicial.','<strong>Tipicidade</strong> significa que o ato deve corresponder a uma figura definida em lei.'],
    exercicios: [
      { q: 'São elementos do ato administrativo: competência, finalidade, forma, motivo e objeto.', g: 'CERTO.' },
      { q: 'A autoexecutoriedade é atributo exclusivo de ato vinculado.', g: 'ERRADO. Pode estar presente em ato discricionário.' }
    ],
    sotaque: '<strong>"COMP + FINAL + FORM + MOT + OBJ = 5 ELEMENTOS"</strong>'
  };

  M['atos-validade'] = {
    topico: 'atos-validade',
    titulo: 'Validade, Eficácia e Existência dos Atos',
    resumo: 'Válido: todos os elementos presentes. Eficaz: produz efeitos. Anulável (vício sanável) ou nulo (vício insanável).',
    teoria: '<p>O <strong>ato administrativo</strong> pode ser <em>válido</em> (todos os elementos), <em>anulável</em> (vício sanável, convalidação) ou <em>nulo</em> (vício insanável). A <em>eficácia</em> é a produção de efeitos.</p>',
    regras:['Válido: todos os elementos presentes', 'Anulável: vício sanável (convalidação)', 'Nulo: vício insanável (sem convalidação)', 'Eficácia: produz efeitos (após publicação ou notificação)'],
    excecoes:['O <em>ato nulo</em> pode ser objeto de anulação pela Administração (Súmula 473/STF).', 'O <em>ato anulável</em> pode ser convalidado pela Administração.'],
    exemplos:['Ato com vício de competência (emissor incompetente) → anulável.','Ato com objeto ilegal (contrário à lei) → nulo.'],
    pegadinchas:['<strong>Nulidade</strong> é vício insanável.','<strong>Anulabilidade</strong> é vício sanável.','<strong>Convalidação</strong> é o ato de sanar o vício.'],
    exercicios: [
      { q: 'O ato nulo tem vício insanável.', g: 'CERTO.' },
      { q: 'O ato anulável não pode ser convalidado.', g: 'ERRADO. Pode ser convalidado (em regra).' }
    ],
    sotaque: '<strong>"NULO = INSANÁVEL. ANULÁVEL = CONVALIDÁVEL."</strong>'
  };

  M['autotutela'] = {
    topico: 'autotutela',
    titulo: 'Autotutela e Anulação (Súmula 473/STF)',
    resumo: 'A Administração tem o poder-dever de anular atos ilegais e revogar atos inconvenientes. Prazo: 5 anos (Lei 9.784/99).',
    teoria: '<p>A <strong>autotutela</strong> é o poder de a Administração Pública anular seus próprios atos, quando ilegais, ou revogá-los, quando inconvenientes (Súmula 473/STF). A anulação tem prazo de <em>5 anos</em> (Lei 9.784/99, art. 54).</p>',
    regras:['Anulação: ato ilegal (vício de legalidade)', 'Revogação: ato inconveniente (mérito)', 'Prazo: 5 anos (Lei 9.784/99)', 'Efeitos: ex tunc (anulação) ou ex nunc (revogação)'],
    excecoes:['A <em>revogação</em> atinge apenas atos <em>discricionários</em>.', 'A <em>anulação</em> pode atingir atos <em>vinculados</em> e <em>discricionários</em> (se ilegais).'],
    exemplos:['Prefeito anula licença de funcionamento irregular → autotutela.','Prefeito revoga autorização de uso de bem público → autotutela.'],
    pegadinchas:['<strong>Anulação</strong> = vício de legalidade.','<strong>Revogação</strong> = conveniência e oportunidade.','<strong>Prazo</strong> de anulação: 5 anos (Lei 9.784/99).'],
    exercicios: [
      { q: 'A Administração pode anular seus atos ilegais, conforme a Súmula 473 do STF.', g: 'CERTO.' },
      { q: 'A revogação atinge atos vinculados.', g: 'ERRADO. Atinge atos discricionários.' }
    ],
    sotaque: '<strong>"AUTOTUTELA: ANULAR ILEGAIS + REVOGAR INCONVENIENTES, 5 ANOS"</strong>'
  };

  M['licitacao-conceito'] = {
    topico: 'licitacao-conceito',
    titulo: 'Licitação: Conceito, Finalidade, Princípios',
    resumo: 'Procedimento para escolha de melhor proposta. Princípios: legalidade, impessoalidade, moralidade, publicidade, eficiência, Isonomia, Vinculação ao Edital, Julgamento Objetivo.',
    teoria: '<p>A <strong>licitação</strong> é o procedimento administrativo por meio do qual a Administração Pública seleciona a melhor proposta para a contratação de obras, serviços, compras, etc. Os <em>princípios</em> estão no art. 37, XXI, CF e no art. 5º da Lei 14.133/2021.</p>',
    regras:['Princípios: legalidade, impessoalidade, moralidade, publicidade, eficiência', 'Princípios específicos: isonomia, vinculação ao edital, julgamento objetivo, planejamento, economicidade, segregação de funções', 'Finalidade: selecionar a melhor proposta, garantir isonomia, evitar favorecimento'],
    excecoes:['Há <em>dispensa</em> e <em>inexigibilidade</em> (arts. 74-75, Lei 14.133/2021).', 'O <em>pregão</em> é exclusivo para bens e serviços comuns.'],
    exemplos:['Município abre pregão para compra de merenda.','Estado contrata empresa por inexigibilidade (notória especialização).'],
    pegadinchas:['<strong>Vinculação ao edital</strong> é princípio específico.','<strong>Julgamento objetivo</strong> é regra (sem subjetivismo).','<strong>Segregação de funções</strong> é princípio novo da Lei 14.133/2021.'],
    exercicios: [
      { q: 'São princípios da licitação: legalidade, impessoalidade, moralidade, publicidade, eficiência, isonomia, vinculação ao edital e julgamento objetivo.', g: 'CERTO.' },
      { q: 'A licitação é obrigatória em todos os casos.', g: 'ERRADO. Há hipóteses de dispensa e inexigibilidade.' }
    ],
    sotaque: '<strong>"LIMPE + ISONOMIA + VINCULAÇÃO + OBJETIVO"</strong>'
  };

  M['modalidades-licitacao'] = {
    topico: 'modalidades-licitacao',
    titulo: 'Modalidades de Licitação (Lei 14.133/2021)',
    resumo: 'Pregão, concorrência, concurso, leilão, diálogo competitivo. Critérios: menor preço, melhor técnica, melhor combinação, etc.',
    teoria: '<p>As <strong>modalidades</strong> de licitação estão previstas no art. 28 da Lei 14.133/2021: <em>pregão</em>, <em>concorrência</em>, <em>concurso</em>, <em>leilão</em> e <em>diálogo competitivo</em>. O <em>critério de julgamento</em> é o fator para definir a melhor proposta.</p>',
    regras:['Pregão: bens e serviços comuns, menor preço ou maior desconto', 'Concorrência: obras e serviços de engenharia, concessões, alienações', 'Concurso: trabalhos técnicos, científicos, artísticos', 'Leilão: alienação de bens', 'Diálogo competitivo: licitações complexas'],
    excecoes:['<em>Pregão</em> é exclusivo para bens e serviços comuns.','<em>Concurso</em> é exclusivo para trabalhos intelectuais.','<em>Diálogo competitivo</em> é a novidade para licitações complexas.'],
    exemplos:['Compra de merenda → pregão.','Obra de R$ 30 milhões → concorrência.','Venda de imóvel público → leilão.','Concurso para defensor → concurso.'],
    pegadinchas:['<strong>5 modalidades</strong>: pregão, concorrência, concurso, leilão, diálogo.','A <em>Lei 14.133/2021</em> revogou a Lei 8.666/93.','<em>Concurso</em> é para <em>trabalhos técnicos</em>.'],
    exercicios: [
      { q: 'São modalidades de licitação: pregão, concorrência, concurso, leilão e diálogo competitivo.', g: 'CERTO.' },
      { q: 'O pregão é a modalidade para obras de engenharia complexas.', g: 'ERRADO. Para obras, regra é concorrência.' }
    ],
    sotaque: '<strong>"5 MODALIDADES: PREGÃO + CONCOR + CONCURSO + LEILÃO + DIÁLOGO"</strong>'
  };

  M['dispensa-inexigibilidade'] = {
    topico: 'dispensa-inexigibilidade',
    titulo: 'Dispensa e Inexigibilidade de Licitação',
    resumo: 'Dispensa: rol taxativo (pequeno valor, emergência, etc.). Inexigibilidade: inviabilidade de competição (notória especialização, serviço técnico, etc.).',
    teoria: '<p>A <strong>dispensa</strong> e a <strong>inexigibilidade</strong> são exceções à obrigatoriedade de licitação. A <em>dispensa</em> tem <em>rol taxativo</em> (art. 75, Lei 14.133/2021); a <em>inexigibilidade</em> decorre da <em>inviabilidade de competição</em> (art. 74, Lei 14.133/2021).</p>',
    regras:['Dispensa: rol taxativo (pequeno valor, emergência, etc.)', 'Inexigibilidade: notória especialização, serviço técnico, singularidade, etc.', 'Dispensa por valor: obras e serviços de engenharia até R$ 100.000; outros serviços e compras até R$ 50.000 (regra geral)', 'Justificativa: obrigatória em qualquer hipótese'],
    excecoes:['A <em>dispensa</em> é rol taxativo, mas a <em>inexigibilidade</em> é rol exemplificativo (jurisprudência).', 'A <em>emergência</em> ou <em>calamidade pública</em> não pode ser usada para fugir da licitação (deve ser fundamentada).'],
    exemplos:['Compra de R$ 5.000 de material de escritório → dispensa por valor.','Contratação de cantor famoso para show → inexigibilidade (notória especialização).'],
    pegadinchas:['<strong>Dispensa</strong> é <em>rol taxativo</em>.','<strong>Inexigibilidade</strong> é <em>rol exemplificativo</em> (a jurisprudência admite outras hipóteses).','A <em>justificativa</em> é sempre obrigatória.'],
    exercicios: [
      { q: 'A dispensa de licitação tem rol taxativo na Lei 14.133/2021.', g: 'CERTO. Art. 75.' },
      { q: 'A inexigibilidade tem rol taxativo.', g: 'ERRADO. Tem rol exemplificativo (art. 74, Lei 14.133/2021).' }
    ],
    sotaque: '<strong>"DISPENSA: TAXATIVA. INEXIGIBILIDADE: EXEMPLIFICATIVA."</strong>'
  };

  M['contratos-administrativos'] = {
    topico: 'contratos-administrativos',
    titulo: 'Contratos Administrativos: Características, Cláusulas, Alteração',
    resumo: 'Cláusulas: exorbitantes, financeiras, técnicas. Alteração: unilateral pela Administração, bilateral pelas partes.',
    teoria: '<p>O <strong>contrato administrativo</strong> tem <em>cláusulas exorbitantes</em> (prerrogativas da Administração) e pode ser <em>alterado</em>, <em>rescindido</em> ou <em>anulado</em> unilateralmente pela Administração (Lei 14.133/2021).</p>',
    regras:['Cláusulas exorbitantes: alteração, rescisão, anulação unilateral, fiscalização, aplicação de sanções', 'Equilíbrio econômico-financeiro: direito do contratado', 'Garantia: 5% a 10% (opcional, conforme edital)', 'Reajuste: anual, por índice oficial'],
    excecoes:['A <em>alteração</em> unilateral tem limite de 25% (acréscimo) ou 50% (supressão, somados).', 'A <em>rescisão</em> unilateral é cabível em caso de <em>inadimplemento</em> ou <em>interesse público</em>.'],
    exemplos:['Administração acresce 20% ao contrato de obra → alteração unilateral.','Administração rescinde contrato por descumprimento → rescisão unilateral.'],
    pegadinchas:['<strong>Cláusulas exorbitantes</strong> são <em>privilégios</em> da Administração.','O <em>equilíbrio econômico-financeiro</em> é <em>direito</em> do contratado.','A <em>fiscalização</em> é poder-dever da Administração.'],
    exercicios: [
      { q: 'São cláusulas exorbitantes do contrato administrativo: alteração unilateral, rescisão unilateral, anulação unilateral, fiscalização e aplicação de sanções.', g: 'CERTO.' },
      { q: 'O equilíbrio econômico-financeiro é prerrogativa da Administração.', g: 'ERRADO. É direito do contratado.' }
    ],
    sotaque: '<strong>"EXORBITANTES: ALTER + RESCIND + ANULAR + FISCALIZAR + SANÇÃO"</strong>'
  };

  M['bens-publicos'] = {
    topico: 'bens-publicos',
    titulo: 'Bens Públicos: Classificação, Uso, Alienação',
    resumo: 'Classificação: uso comum, uso especial, dominicais. Afetação e desafetação. Alienação: venda, doação, permuta, etc.',
    teoria: '<p>Os <strong>bens públicos</strong> são classificados em <em>uso comum</em> (ruas, praças), <em>uso especial</em> (escolas, hospitais) e <em>dominicais</em> (terras devolutas). A <em>alienação</em> é condicionada a autorização legislativa e licitação (regra).</p>',
    regras:['Uso comum: aberto ao público (ruas, praças)', 'Uso especial: afetação a serviço público (escola, hospital)', 'Dominicais: não afetados (terras devolutas)', 'Alienação: autorização legislativa + licitação (regra)'],
    excecoes:['A <em>doação</em> é permitida para fins públicos, sem contraprestação.','A <em>permuta</em> é admitida entre bens públicos de mesma natureza.','A <em>venda</em> de bem público é condicionada a <em>avaliação prévia</em> e <em>licitação</em>.'],
    exemplos:['Rua municipal → bem de uso comum.','Escola pública → bem de uso especial.','Terras devolutas → bens dominicais.'],
    pegadinchas:['<strong>Bens de uso comum</strong> são <em>inalienáveis</em>, enquanto estiverem afetados.','A <em>afetação</em> é o ato de <em>destinar</em> o bem.','A <em>desafetação</em> é o ato de <em>retirar</em> a destinação.'],
    exercicios: [
      { q: 'Bens públicos são classificados em uso comum, uso especial e dominicais.', g: 'CERTO.' },
      { q: 'Os bens de uso comum são alienáveis por definição.', g: 'ERRADO. São inalienáveis enquanto afetados ao uso comum.' }
    ],
    sotaque: '<strong>"USO COMUM + USO ESPECIAL + DOMINICAIS"</strong>'
  };

  M['servidores-publicos'] = {
    topico: 'servidores-publicos',
    titulo: 'Servidores Públicos: Agentes, Cargos, Funções',
    resumo: 'Agentes: políticos, administrativos, particulares em colaboração. Cargo público: criação por lei. Função: temporária, sem estabilidade.',
    teoria: '<p>Os <strong>agentes públicos</strong> são todos que exercem função pública, ainda que transitoriamente. Classificam-se em: <em>políticos</em> (Presidente, Governador), <em>administrativos</em> (servidores), <em>particulares em colaboração</em> (mesário, jurado). O <em>cargo</em> é criado por lei; a <em>função</em> é temporária.</p>',
    regras:['Políticos: eleitos, mandatos temporários', 'Administrativos: concursados, com estabilidade (após 3 anos)', 'Particulares em colaboração: jurado, mesário, etc.', 'Cargo: criação por lei, provimento por concurso (regra)'],
    excecoes:['O <em>estável</em> (CF, art. 41) só perde o cargo por: sentença judicial, processo administrativo (ampla defesa), avaliação periódica de desempenho, excesso de despesa com pessoal.','A <em>função de confiança</em> é exercida por servidor efetivo, com livre nomeação e exoneração.'],
    exemplos:['Presidente da República → agente político.','Professor efetivo → servidor administrativo.','Mesário em eleição → particular em colaboração.'],
    pegadinchas:['<strong>Estabilidade</strong> é direito de servidores <em>concursados</em> após 3 anos.','<em>Função de confiança</em> é para servidor efetivo (regra).','<em>Cargo em comissão</em> é de livre nomeação e exoneração.'],
    exercicios: [
      { q: 'Os servidores públicos estáveis só podem perder o cargo nas hipóteses constitucionais (art. 41, CF).', g: 'CERTO.' },
      { q: 'A função de confiança pode ser exercida por qualquer pessoa.', g: 'ERRADO. É exercida por servidor efetivo (regra).' }
    ],
    sotaque: '<strong>"POLÍTICOS + ADMINISTRATIVOS + PARTICULARES"</strong>'
  };

  M['estabilidade-art-41'] = {
    topico: 'estabilidade-art-41',
    titulo: 'Estabilidade no Serviço Público (art. 41, CF)',
    resumo: 'Estabilidade após 3 anos de efetivo exercício. Perda do cargo: sentença judicial, PAD, avaliação de desempenho, excesso de despesa.',
    teoria: '<p>A <strong>estabilidade</strong> (art. 41, CF) é direito do servidor público concursado após <em>3 anos de efetivo exercício</em>. A perda do cargo estável é restrita a hipóteses constitucionais: <em>sentença judicial transitada em julgado</em>, <em>processo administrativo</em> (com ampla defesa), <em>avaliação periódica de desempenho</em>, <em>excesso de despesa com pessoal</em>.</p>',
    regras:['3 anos de efetivo exercício', 'Perda do cargo: sentença judicial, PAD (ampla defesa), avaliação de desempenho, excesso de despesa', 'Estabilidade é regra; perda é exceção', 'Cargo em comissão: livre nomeação e exoneração (não tem estabilidade)'],
    excecoes:['A <em>avaliação periódica de desempenho</em> é regulamentada por lei (ainda não há lei federal específica).','O <em>excesso de despesa</em> é regulado pela LRF (Lei Complementar 101/2000).'],
    exemplos:['Servidor que falta há 1 ano → pode ser demitido por abandono (PAD).','Servidor com avaliação ruim → pode perder o cargo (se a lei federal for editada).'],
    pegadinchas:['<strong>3 anos</strong> de efetivo exercício, não 5.','A <em>perda</em> é restrita a <em>4 hipóteses</em>.','O <em>cargo em comissão</em> é livre nomeação e exoneração.'],
    exercicios: [
      { q: 'O servidor estável adquire a estabilidade após 3 anos de efetivo exercício.', g: 'CERTO. Art. 41, CF.' },
      { q: 'A perda do cargo estável pode ocorrer por qualquer motivo, a critério do chefe.', g: 'ERRADO. As hipóteses são taxativas.' }
    ],
    sotaque: '<strong>"3 ANOS. PERDA: JUDICIAL + PAD + AVALIAÇÃO + EXCESSO."</strong>'
  };

  M['improbidade-administrativa'] = {
    topico: 'improbidade-administrativa',
    titulo: 'Improbidade Administrativa (Lei 8.429/92 + Lei 14.230/21)',
    resumo: 'Enriquecimento ilícito, prejuízo ao erário, violação de princípios. Dolo específico. Sanções: perda do cargo, multa, ressarcimento, inabilitação.',
    teoria: '<p>A <strong>Lei de Improbidade Administrativa</strong> (Lei 8.429/1992, alterada pela Lei 14.230/2021) prevê <em>3 espécies</em> de atos de improbidade: <em>enriquecimento ilícito</em>, <em>prejuízo ao erário</em> e <em>violação de princípios</em>. A <em>Lei 14.230/2021</em> exigiu <em>dolo específico</em> para todos os tipos.</p>',
    regras:['Enriquecimento ilícito: auferir vantagem patrimonial indevida', 'Prejuízo ao erário: dilapidação, desvio, perda, malversação', 'Violação de princípios: violação aos deveres de honestidade, imparcialidade, legalidade, lealdade', 'Dolo específico: exigido para todos os tipos'],
    excecoes:['A <em>culpa</em> (sem dolo) não configura improbidade.','A <em>boa-fé</em> é causa excludente de ilicitude.'],
    exemplos:['Prefeito desvia verbas para conta pessoal → improbidade por prejuízo ao erário.','Servidor usa carro oficial para passeio → improbidade por violação de princípios.'],
    pegadinchas:['<strong>Improbidade</strong> tem natureza <em>cível</em>, não penal.','A <em>Lei 14.230/2021</em> exigiu <em>dolo específico</em>.','A <em>prescrição</em> é de 4 anos (a partir da ciência do ato).'],
    exercicios: [
      { q: 'A improbidade administrativa exige dolo específico, após a Lei 14.230/2021.', g: 'CERTO.' },
      { q: 'A improbidade pode ser aplicada a agentes públicos em geral.', g: 'CERTO. Aplica-se a agentes públicos e a particulares.' }
    ],
    sotaque: '<strong>"IMPROBIDADE: DOLO + ATO + SANÇÃO"</strong>'
  };

  M['responsabilidade-civil'] = {
    topico: 'responsabilidade-civil',
    titulo: 'Responsabilidade Civil do Estado (art. 37, §6º, CF)',
    resumo: 'Teoria do risco administrativo. Responsabilidade objetiva. Ação regressiva contra o agente (subjetiva, com dolo ou culpa).',
    teoria: '<p>A <strong>responsabilidade civil do Estado</strong> está prevista no art. 37, §6º, CF: é <em>objetiva</em> (sem culpa), com base na <em>teoria do risco administrativo</em>. O <em>agente</em> responde <em>subjetivamente</em> (dolo ou culpa) em ação regressiva.</p>',
    regras:['Responsabilidade do Estado: objetiva (risco administrativo)', 'Direito de regresso: contra o agente (subjetiva, com dolo ou culpa)', 'Excludentes de responsabilidade: culpa exclusiva da vítima, caso fortuito, força maior, fato de terceiro', 'Ação: contra o Estado, que tem prazo de 5 anos (decadencial)'],
    excecoes:['A <em>culpa exclusiva da vítima</em> exclui a responsabilidade do Estado.','O <em>caso fortuito</em> interno <em>não</em> exclui a responsabilidade (regra).','O <em>caso fortuito</em> externo <em>exclui</em> a responsabilidade.'],
    exemplos:['Detido em delegacia é torturado por policial → Estado responde objetivamente.','Buraco na pista causa acidente → Estado responde (responsabilidade objetiva).'],
    pegadinchas:['<strong>Responsabilidade objetiva</strong> é do <em>Estado</em>.','<strong>Responsabilidade subjetiva</strong> é do <em>agente</em> (em regresso).','A <em>ação regressiva</em> exige <em>dolo ou culpa</em> do agente.'],
    exercicios: [
      { q: 'A responsabilidade civil do Estado é objetiva, com base no risco administrativo.', g: 'CERTO. Art. 37, §6º, CF.' },
      { q: 'A ação regressiva contra o agente exige dolo ou culpa.', g: 'CERTO.' }
    ],
    sotaque: '<strong>"ESTADO: OBJETIVA. AGENTE: SUBJETIVA (DOLO OU CULPA)."</strong>'
  };

  M['lei-9784'] = {
    topico: 'lei-9784',
    titulo: 'Lei 9.784/99: Processo Administrativo Federal',
    resumo: 'Lei federal de processo administrativo. Princípios: legalidade, finalidade, motivação, razoabilidade, proporcionalidade, moralidade, ampla defesa, contraditório, segurança jurídica, interesse público, eficiência.',
    teoria: '<p>A <strong>Lei 9.784/99</strong> regula o processo administrativo no âmbito da Administração Pública Federal. Os <em>princípios</em> são: legalidade, finalidade, motivação, razoabilidade, proporcionalidade, moralidade, ampla defesa, contraditório, segurança jurídica, interesse público, eficiência.</p>',
    regras:['Princípios: LIMPE + ampla defesa + contraditório + segurança jurídica + proporcionalidade + razoabilidade + motivação + finalidade', 'Prazos: 5 dias (recurso), 30 dias (decisão), 5 anos (anulação de atos), 5 anos (prescrição de sanções)', 'Recursos: hierárquico, reconsideração, revisão', 'Prazos: 5 dias (recurso) + 30 dias (decisão do recurso)'],
    excecoes:['A <em>ampla defesa</em> e o <em>contraditório</em> são aplicáveis em processos que possam afetar interesse do administrado.','A <em>segurança jurídica</em> limita a anulação de atos (em regra, 5 anos).'],
    exemplos:['Servidor responde a PAD → tem direito a ampla defesa e contraditório.','Cidadão apresenta recurso administrativo → tem prazo de 5 dias (regra).'],
    pegadinchas:['<strong>5 anos</strong> é o prazo para anulação de atos.','A <em>motivação</em> é obrigatória em atos que afetem direitos.','A <em>segurança jurídica</em> é princípio implícito.'],
    exercicios: [
      { q: 'São princípios da Lei 9.784/99: legalidade, finalidade, motivação, razoabilidade, proporcionalidade, moralidade, ampla defesa, contraditório, segurança jurídica e eficiência.', g: 'CERTO.' },
      { q: 'O prazo para anulação de atos administrativos é de 10 anos.', g: 'ERRADO. É de 5 anos (art. 54).' }
    ],
    sotaque: '<strong>"11 PRINCÍPIOS, 5 ANOS, 5 DIAS (RECURSO), 30 DIAS (DECISÃO)"</strong>'
  };

  M['lei-9784-prazos'] = {
    topico: 'lei-9784-prazos',
    titulo: 'Lei 9.784/99: Prazos e Recursos',
    resumo: 'Recurso administrativo: 5 dias para interpor, 30 dias para decidir. Anulação: 5 anos. Prescrição de sanções: 5 anos.',
    teoria: '<p>Os <strong>prazos</strong> da Lei 9.784/99 são importantes para concursos. O <em>recurso administrativo</em> deve ser interposto em <em>10 dias</em> (regra geral), com decisão em <em>30 dias</em>. A <em>anulação</em> de atos tem prazo de <em>5 anos</em>. A <em>prescrição</em> de sanções é de <em>5 anos</em>.</p>',
    regras:['Recurso: 10 dias (regra), 5 dias (regra específica)', 'Decisão do recurso: 30 dias (prorrogável por mais 30)', 'Anulação: 5 anos (Lei 9.784/99, art. 54)', 'Prescrição de sanções: 5 anos (regra geral)'],
    excecoes:['O <em>recurso</em> tem prazo diferente conforme o <em>processo</em>.', 'A <em>decisão do recurso</em> é <em>30 dias</em>, prorrogável por mais 30 (regra).'],
    exemplos:['Servidor recorre de demissão em 10 dias (regra).','Administração anula ato ilegal em 5 anos.'],
    pegadinchas:['<strong>10 dias</strong> para recurso (regra geral).','<strong>30 dias</strong> para decidir (prorrogável por 30).','<strong>5 anos</strong> para anulação.'],
    exercicios: [
      { q: 'O recurso administrativo na Lei 9.784/99 tem prazo de 10 dias, com decisão em 30 dias.', g: 'CERTO.' },
      { q: 'A anulação de atos administrativos tem prazo de 10 anos.', g: 'ERRADO. Tem prazo de 5 anos.' }
    ],
    sotaque: '<strong>"RECURSO: 10 + 30 DIAS. ANULAÇÃO: 5 ANOS."</strong>'
  };

  M['lei-14133-completa'] = {
    topico: 'lei-14133-completa',
    titulo: 'Lei 14.133/2021: Estrutura, Tipos Contratuais, Garantias',
    resumo: 'Modalidades: pregão, concorrência, concurso, leilão, diálogo. Critérios: menor preço, melhor técnica, etc. Contratos: até 5 anos (regra geral).',
    teoria: '<p>A <strong>Lei 14.133/2021</strong> é a Nova Lei de Licitações e Contratos. Substituiu a Lei 8.666/93. Trouxe mudanças em <em>modalidades</em>, <em>critérios</em>, <em>contratos</em>, <em>penalidades</em>, entre outros.</p>',
    regras:['Modalidades: pregão, concorrência, concurso, leilão, diálogo competitivo', 'Critérios: menor preço, melhor técnica, melhor combinação, melhor relação custo-benefício, melhor destinação de bens alienados', 'Contratos: 1 ano (serviços contínuos) + 5 anos (obras) + 10 anos (concessão)', 'Penalidades: advertência, multa, impedimento de licitar, declaração de inidoneidade'],
    excecoes:['A <em>Lei 8.666/93</em> é revogada (com ressalvas).','O <em>pregão</em> é exclusivo para bens e serviços comuns.'],
    exemplos:['Compra de merenda → pregão.','Obra de R$ 30 milhões → concorrência.','Venda de imóvel → leilão.'],
    pegadinchas:['<strong>Pregão</strong> é exclusivo para <em>bens e serviços comuns</em>.','<strong>Concorrência</strong> é regra para <em>obras e serviços de engenharia</em>.','<strong>Diálogo competitivo</strong> é a novidade (art. 32).'],
    exercicios: [
      { q: 'A Lei 14.133/2021 substitui a Lei 8.666/93.', g: 'CERTO.' },
      { q: 'O pregão é a modalidade para obras complexas.', g: 'ERRADO. Para obras, regra é concorrência.' }
    ],
    sotaque: '<strong>"5 MODALIDADES + 5 CRITÉRIOS + 1/5/10 ANOS (CONTRATOS)"</strong>'
  };

  M['lei-14133-contratos'] = {
    topico: 'lei-14133-contratos',
    titulo: 'Lei 14.133/2021: Contratos Administrativos',
    resumo: 'Duração: 1 ano (serviços), 5 anos (obras), 10 anos (concessão). Garantia: 5% a 10%. Reajuste: anual por índice.',
    teoria: '<p>Os <strong>contratos administrativos</strong> regidos pela Lei 14.133/2021 têm regras próprias: <em>duração</em> limitada, <em>prorrogação</em> possível, <em>garantias</em>, <em>reajuste</em> anual, <em>cláusulas exorbitantes</em>, entre outros.</p>',
    regras:['Duração: 1 ano (serviços contínuos), 5 anos (obras), 10 anos (concessão)', 'Prorrogação: ato discricionário (regra)', 'Garantia: 5% a 10% (opcional, conforme edital)', 'Reajuste: anual, por índice oficial'],
    excecoes:['A <em>prorrogação</em> pode ser direito do contratado, se o poder público não se manifestar.', 'A <em>garantia</em> pode ser exigida no edital, mas é <em>facultativa</em>.'],
    exemplos:['Contrato de limpeza (1 ano) → prorrogado por mais 1 ano (limite 5 anos).','Contrato de obra (5 anos) → prorrogado por mais 5 anos (limite 10 anos).'],
    pegadinchas:['<strong>1 ano</strong> (serviços contínuos) + <strong>5 anos</strong> (obras) + <strong>10 anos</strong> (concessão).','<strong>5% a 10%</strong> de garantia.','<strong>Reajuste</strong> anual por índice oficial.'],
    exercicios: [
      { q: 'A duração dos contratos administrativos regidos pela Lei 14.133/2021 é de até 5 anos, prorrogável por igual período.', g: 'ERRADO. A regra é 1 ano para serviços contínuos, prorrogável por igual período.' },
      { q: 'A garantia nos contratos pode ser exigida no edital, em percentual de 5% a 10% do valor inicial.', g: 'CERTO.' }
    ],
    sotaque: '<strong>"1 ANO (SERVIÇO) + 5 ANOS (OBRA) + 10 ANOS (CONCESSÃO) + 5-10% (GARANTIA)"</strong>'
  };

  M['policia-administrativa'] = {
    topico: 'policia-administrativa',
    titulo: 'Poder de Polícia: Conceito, Atributos, Atos',
    resumo: 'Discricionariedade, autoexecutoriedade, coercibilidade. Atos: licença, autorização, fiscalização, sanção.',
    teoria: '<p>O <strong>poder de polícia</strong> é a faculdade de a Administração limitar direitos individuais em benefício do interesse público. Tem <em>3 atributos</em>: <em>discricionariedade</em> (em regra), <em>autoexecutoriedade</em> e <em>coercibilidade</em>. Os <em>atos</em> são: <em>licença</em>, <em>autorização</em>, <em>fiscalização</em>, <em>sanção</em>.</p>',
    regras:['Discricionariedade: juízo de conveniência e oportunidade', 'Autoexecutoriedade: execução sem ordem judicial', 'Coercibilidade: aplicação de meios indiretos de coerção (multa, interdição)', 'Atos: licença (vinculada), autorização (discricionária), fiscalização, sanção'],
    excecoes:['A <em>licença</em> é <em>vinculada</em> (atende aos requisitos, a Administração é obrigada a conceder).','A <em>autorização</em> é <em>discricionária</em> (depende de juízo de conveniência).'],
    exemplos:['Alvará de funcionamento → licença.','Uso de bem público → autorização.','Multa por infração sanitária → sanção.'],
    pegadinchas:['<strong>Licença</strong> é <em>vinculada</em>.','<strong>Autorização</strong> é <em>discricionária</em>.','<strong>Autoexecutoriedade</strong> é exceção (em regra, atos autoexecutórios são ilegais, salvo lei).'],
    exercicios: [
      { q: 'São atributos do poder de polícia: discricionariedade, autoexecutoriedade e coercibilidade.', g: 'CERTO.' },
      { q: 'A licença é ato discricionário da Administração.', g: 'ERRADO. A licença é ato vinculado.' }
    ],
    sotaque: '<strong>"DAC: DISCRICIONARIEDADE + AUTOEXECUTORIEDADE + COERCIBILIDADE"</strong>'
  };

  M['improbidade-abuso'] = {
    topico: 'improbidade-abuso',
    titulo: 'Improbidade vs. Abuso de Autoridade',
    resumo: 'Improbidade: cível. Abuso: penal. Improbidade exige dolo. Abuso de autoridade: dolo + finalidade.',
    teoria: '<p>A <strong>improbidade administrativa</strong> tem natureza <em>cível</em> (Lei 8.429/92) e exige <em>dolo específico</em> (Lei 14.230/2021). O <strong>abuso de autoridade</strong> tem natureza <em>penal</em> (Lei 13.869/2019) e exige <em>dolo + finalidade específica</em>.</p>',
    regras:['Improbidade: Lei 8.429/92 (alterada pela Lei 14.230/2021), dolo específico, sanção cível', 'Abuso de autoridade: Lei 13.869/2019, dolo + finalidade específica, sanção penal', 'Improbidade: enriquecimento ilícito, prejuízo ao erário, violação de princípios', 'Abuso: atentado à inviolabilidade da vida, à liberdade, à administração da justiça, etc.'],
    excecoes:['A <em>improbidade</em> tem <em>prescrição</em> de 4 anos.','O <em>abuso de autoridade</em> tem <em>pena</em> de 1 a 4 anos (regra).'],
    exemplos:['Prefeito desvia verbas → improbidade (cível) + peculato (penal).','Policial tortura preso → abuso de autoridade (penal) + improbidade (cível, se houver dolo).'],
    pegadinchas:['<strong>Improbidade</strong> = <em>cível</em>, <strong>abuso de autoridade</strong> = <em>penal</em>.','A <em>culpa</em> <strong>não</strong> configura improbidade.','A <em>finalidade específica</em> é elemento do abuso de autoridade.'],
    exercicios: [
      { q: 'A improbidade administrativa tem natureza cível.', g: 'CERTO.' },
      { q: 'O abuso de autoridade tem natureza cível.', g: 'ERRADO. Tem natureza penal.' }
    ],
    sotaque: '<strong>"IMPROBIDADE = CÍVEL. ABUSO = PENAL."</strong>'
  },

  global.MATERIAS_EXT = global.MATERIAS_EXT || {};
  global.MATERIAS_EXT.administrativo = M;
})(window);
