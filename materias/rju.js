/* ==========================================================
   materias/rju.js — Regime Jurídico Único (Lei 8.112/90) — 31 lições
   ========================================================== */
(function (global) {
  'use strict';
  const M = {};

  M['servidores-publicos'] = {
    topico: 'servidores-publicos',
    titulo: 'Servidores Públicos: Conceito e Classificação',
    resumo: 'Servidor: pessoa que ocupa cargo público. Classificação: estatutário (Lei 8.112/90), celetista (CLT), temporário (Lei 8.745/93).',
    teoria: '<p><strong>Servidor público</strong> é a pessoa que ocupa <em>cargo público</em>, com vínculo estatutário (regra geral na Administração Pública direta, autárquica e fundacional). A classificação principal é: <em>estatutário</em> (Lei 8.112/90), <em>celetista</em> (CLT, em empresas públicas e sociedades de economia mista) e <em>temporário</em> (Lei 8.745/93).</p>',
    regras:['Estatutário: cargo público, vínculo estatutário (Lei 8.112/90)', 'Celetista: emprego público, vínculo CLT (empresas estatais)', 'Temporário: contrato por prazo determinado (Lei 8.745/93)', 'Cargo em comissão: livre nomeação e exoneração (sem estabilidade)'],
    excecoes:['O <em>cargo em comissão</em> é de livre nomeação e exoneração, dispensando concurso.','A <em>função de confiança</em> é para servidor efetivo.'],
    exemplos:['Servidor do INSS → estatutário (Lei 8.112/90).','Servidor dos Correios → celetista (CLT).','Servidor do IBGE em contrato temporário → Lei 8.745/93.'],
    pegadinchas:['<strong>Estatutário</strong> = regime da Lei 8.112/90.','<strong>Celetista</strong> = CLT (em empresas estatais).','<strong>Temporário</strong> = Lei 8.745/93 (contrato por prazo determinado).'],
    exercicios: [
      { q: 'O servidor público ocupante de cargo público é regido pela Lei 8.112/90.', g: 'CERTO. (regra geral)' },
      { q: 'O servidor de empresa pública é regido pela Lei 8.112/90.', g: 'ERRADO. É regido pela CLT.' }
    ],
    sotaque: '<strong>"ESTATUTÁRIO (8.112) + CELETISTA (CLT) + TEMPORÁRIO (8.745)"</strong>'
  };

  M['concurso-publico'] = {
    topico: 'concurso-publico',
    titulo: 'Concurso Público: Provimento e Investidura',
    resumo: 'Concurso: provas ou provas e títulos. Prazo de validade: até 2 anos, prorrogável por mais 2. Nomeação: dentro do número de vagas + cadastro reserva.',
    teoria: '<p>O <strong>concurso público</strong> é o meio de provimento de cargos públicos (art. 37, II, CF). É de provas ou de provas e títulos, com prazo de validade de até <em>2 anos</em>, prorrogável por mais <em>2</em>.</p>',
    regras:['Concurso: provas ou provas e títulos', 'Prazo de validade: até 2 anos + prorrogação por mais 2', 'Nomeação: dentro do número de vagas', 'Posse: até 30 dias da nomeação', 'Exercício: até 15 dias da posse'],
    excecoes:['O <em>concurso</em> pode ter <em>cadastro reserva</em> para nomeação durante o prazo de validade.','A <em>aprovação</em> no concurso não gera direito à nomeação, salvo o número de vagas.'],
    exemplos:['Concurso do INSS com 1.000 vagas → nomeação dos 1.000 aprovados.','Concurso do INSS com 1.000 vagas + CR → nomeação dos 1.000 + aprovados do CR (dentro do prazo).'],
    pegadinchas:['<strong>2 + 2 anos</strong> é o prazo de validade.','<strong>30 dias</strong> para posse (prorrogável por mais 30).','<strong>15 dias</strong> para exercício.'],
    exercicios: [
      { q: 'O prazo de validade do concurso público é de até 2 anos, prorrogável por mais 2.', g: 'CERTO. Art. 37, III, CF.' },
      { q: 'A aprovação em concurso garante a nomeação automática.', g: 'ERRADO. Garante o direito à nomeação dentro do número de vagas e do prazo de validade.' }
    ],
    sotaque: '<strong>"CONCURSO: 2+2 ANOS. POSSE: 30 DIAS. EXERCÍCIO: 15 DIAS."</strong>'
  };

  M['provimento'] = {
    topico: 'provimento',
    titulo: 'Provimento de Cargo Público',
    resumo: 'Provimento: nomeação, promoção, readaptação, reintegração, aproveitamento. Investidura: posse + exercício.',
    teoria: '<p>O <strong>provimento</strong> é o ato pelo qual a pessoa é designada para ocupar cargo público. Pode ser <em>originário</em> (nomeação) ou <em>derivado</em> (promoção, readaptação, reintegração, aproveitamento). A <em>investidura</em> é o conjunto de <em>posse + exercício</em>.</p>',
    regras:['Nomeação: provimento originário (cargo vago)', 'Promoção: progressão na carreira (regra: merecimento + qualificação)', 'Readaptação: restrição por invalidez parcial (mesma carreira)', 'Reintegração: retorno do servidor invalidado (cargo vago)', 'Aproveitamento: retorno do servidor em disponibilidade (cargo compatível)'],
    excecoes:['A <em>readaptação</em> ocorre quando o servidor tem <em>limitação física</em>.','A <em>reintegração</em> é condicionada a <em>decisão judicial</em> ou <em>processo administrativo</em>.'],
    exemplos:['Servidor aprovado em concurso → nomeação.','Servidor com problema de saúde → readaptação.','Servidor invalidado por decisão judicial → reintegração.'],
    pegadinchas:['<strong>Provimento originário</strong>: nomeação.','<strong>Provimento derivado</strong>: promoção, readaptação, reintegração, aproveitamento.','A <em>investidura</em> = posse + exercício.'],
    exercicios: [
      { q: 'São formas de provimento derivado: promoção, readaptação, reintegração e aproveitamento.', g: 'CERTO.' },
      { q: 'A nomeação é forma de provimento derivado.', g: 'ERRADO. É provimento originário.' }
    ],
    sotaque: '<strong>"NOME + PROM + READ + REINT + APROV = PROVIMENTO"</strong>'
  };

  M['estabilidade'] = {
    topico: 'estabilidade',
    titulo: 'Estabilidade no Serviço Público (Lei 8.112/90, art. 41)',
    resumo: 'Estabilidade após 3 anos de efetivo exercício. Perda: PAD, sentença judicial transitada em julgado, avaliação periódica de desempenho, excesso de despesa.',
    teoria: '<p>O <strong>estatuto da estabilidade</strong> (art. 41, CF + art. 21 da Lei 8.112/90) prevê que o servidor adquire estabilidade após <em>3 anos</em> de efetivo exercício. A perda do cargo estável é restrita a hipóteses constitucionais: <em>sentença judicial transitada em julgado</em>, <em>processo administrativo</em> (com ampla defesa), <em>avaliação periódica de desempenho</em> e <em>excesso de despesa com pessoal</em>.</p>',
    regras:['3 anos de efetivo exercício', 'Perda do cargo: sentença judicial, PAD (ampla defesa), avaliação de desempenho, excesso de despesa', 'Estabilidade é regra; perda é exceção', 'Cargo em comissão: livre nomeação e exoneração (não tem estabilidade)'],
    excecoes:['A <em>avaliação periódica</em> ainda depende de regulamentação.','O <em>excesso de despesa</em> é regulado pela LRF.'],
    exemplos:['Servidor com 3 anos de efetivo exercício → estável.','Servidor demitido por justa causa em PAD → pode perder o cargo.'],
    pegadinchas:['<strong>3 anos</strong> de efetivo exercício.','<strong>4 hipóteses</strong> de perda do cargo.','O <em>cargo em comissão</em> é livre.'],
    exercicios: [
      { q: 'O servidor estável adquire a estabilidade após 3 anos de efetivo exercício.', g: 'CERTO. Art. 21, Lei 8.112/90.' },
      { q: 'A perda do cargo estável pode ocorrer por qualquer motivo, a critério do chefe.', g: 'ERRADO. As hipóteses são taxativas.' }
    ],
    sotaque: '<strong>"3 ANOS. 4 HIPÓTESES DE PERDA."</strong>'
  };

  M['direitos-deveres'] = {
    topico: 'direitos-deveres',
    titulo: 'Direitos e Deveres do Servidor',
    resumo: 'Direitos: vencimento, adicionais, gratificações, férias, licenças, afastamentos. Deveres: assiduidade, pontualidade, urbanidade, etc.',
    teoria: '<p>Os <strong>direitos</strong> do servidor público estão previstos no art. 40 e ss. da Lei 8.112/90: vencimento, adicionais, gratificações, férias (30 dias, com 1/3 constitucional), licenças, afastamentos, entre outros. Os <strong>deveres</strong> estão no art. 116: assiduidade, pontualidade, urbanidade, lealdade, etc.</p>',
    regras:['Direitos: vencimento, adicionais (qualificação, tempo de serviço, etc.), gratificações, férias, licenças, afastamentos', 'Deveres: assiduidade, pontualidade, urbanidade, lealdade, probidade, decoro, etc.', 'Vencimento: irredutível (CF, art. 37, XV)', 'Férias: 30 dias por ano, com 1/3 constitucional'],
    excecoes:['As <em>gratificações</em> são <em>pro labore faciendo</em> (pelo exercício da função).','As <em>licenças</emas podem ser <em>remuneradas</em> ou <em>não</em>.'],
    exemplos:['Servidor recebe vencimento + adicional de qualificação + gratificação.','Servidor tira 30 dias de férias.'],
    pegadinchas:['<strong>Vencimento</strong> é irredutível.','<strong>Férias</strong>: 30 dias + 1/3.','A <em>licença-prêmio</em> foi extinta (Lei 9.527/97).'],
    exercicios: [
      { q: 'São direitos do servidor: vencimento, adicionais, gratificações, férias e licenças.', g: 'CERTO.' },
      { q: 'O servidor pode tirar 60 dias de férias por ano.', g: 'ERRADO. São 30 dias por ano (regra).' }
    ],
    sotaque: '<strong>"VENC + ADIC + GRATIF + FÉRIAS (30) + LICENÇAS"</strong>'
  };

  M['vacancia'] = {
    topico: 'vacancia',
    titulo: 'Vacância do Cargo Público',
    resumo: 'Vacância: exoneração, demissão, promoção, readaptação, aposentadoria, posse em outro cargo, falecimento.',
    teoria: '<p>A <strong>vacância</strong> do cargo público ocorre nas hipóteses do art. 33 da Lei 8.112/90: <em>exoneração</em>, <em>demissão</em>, <em>promoção</em>, <em>readaptação</em>, <em>aposentadoria</em>, <em>posse em outro cargo inacumulável</em>, <em>falecimento</em>.</p>',
    regras:['Exoneração: a pedido (servidor) ou de ofício (cargo em comissão)', 'Demissão: penalidade (infração disciplinar grave)', 'Promoção: progressão na carreira (regra)', 'Readaptação: restrição por invalidez parcial', 'Aposentadoria: requisitos legais cumpridos', 'Posse em outro cargo: inacumulável'],
    excecoes:['A <em>exoneração</em> de ofício é para cargo em comissão.','A <em>demissão</em> é sanção disciplinar.'],
    exemplos:['Servidor pede exoneração (a pedido).','Servidor é demitido por abandono.','Servidor aposenta-se.'],
    pegadinchas:['<strong>Exoneração</strong> = a pedido ou de ofício.','<strong>Demissão</strong> = penalidade.','<strong>Aposentadoria</strong> = vacância.'],
    exercicios: [
      { q: 'São hipóteses de vacância: exoneração, demissão, promoção, readaptação, aposentadoria, posse em outro cargo e falecimento.', g: 'CERTO.' },
      { q: 'A demissão é ato discricionário, sem processo administrativo.', g: 'ERRADO. Requer PAD, com ampla defesa.' }
    ],
    sotaque: '<strong>"EX + DEM + PROM + READ + APOS + POSSE + FALEC = VACÂNCIA"</strong>'
  };

  M['pad'] = {
    topico: 'pad',
    titulo: 'Processo Administrativo Disciplinar (PAD)',
    resumo: 'PAD: apuração de irregularidade. Fases: instauração, instrução, defesa, relatório, julgamento. Penas: advertência, suspensão, demissão, cassação de aposentadoria.',
    teoria: '<p>O <strong>Processo Administrativo Disciplinar</strong> (PAD) é o instrumento para apurar irregularidades cometidas por servidores. As <em>fases</em> são: <em>instauração</em>, <em>instrução</em> (diligências, oitiva de testemunhas, defesa), <em>relatório</em> (pela comissão) e <em>julgamento</em> (pela autoridade competente). As <em>penas</em> são: <em>advertência</em>, <em>suspensão</em>, <em>demissão</em>, <em>cassação de aposentadoria</em> ou <em>disponibilidade</em>, <em>destituição de cargo em comissão</em>.</p>',
    regras:['Fases: instauração, instrução, defesa, relatório, julgamento', 'Penas: advertência, suspensão (até 90 dias), demissão, cassação, destituição', 'Comissão: 3 servidores estáveis', 'Prazo: 60 dias (prorrogável por mais 60)', 'Ampla defesa: obrigatória'],
    excecoes:['O <em>sindicância</em> é fase <em>preparatória</em> do PAD.','A <em>comissão</em> deve ser de servidores estáveis.'],
    exemplos:['Servidor é acusado de fraude em processo → PAD.','Servidor é acusado de abandono → PAD ou sindicância.'],
    pegadinchas:['<strong>PAD</strong>: 3 fases, comissão de 3, prazo de 60+60 dias.','<strong>Penas</strong>: advertência, suspensão, demissão, cassação.','<em>Ampla defesa</em> é obrigatória.'],
    exercicios: [
      { q: 'O PAD tem fases: instauração, instrução, relatório e julgamento.', g: 'CERTO.' },
      { q: 'O PAD pode ser conduzido por qualquer servidor, sem necessidade de estabilidade.', g: 'ERRADO. A comissão deve ser de servidores estáveis.' }
    ],
    sotaque: '<strong>"PAD: 3 ESTÁVEIS, 60+60 DIAS, 4 PENAS"</strong>'
  };

  M['regime-disciplinar'] = {
    topico: 'regime-disciplinar',
    titulo: 'Regime Disciplinar: Deveres, Proibições, Penalidades',
    resumo: 'Deveres: assiduidade, pontualidade, urbanidade, etc. Proibições: ausentar-se do serviço, etc. Penalidades: advertência, suspensão, demissão, etc.',
    teoria: '<p>O <strong>regime disciplinar</strong> da Lei 8.112/90 estabelece <em>deveres</em> (art. 116), <em>proibições</em> (art. 117) e <em>penalidades</em> (art. 127). As penalidades são aplicadas após PAD, com observância do <em>contraditório</em> e da <em>ampla defesa</em>.</p>',
    regras:['Deveres (art. 116): 18 incisos (assiduidade, pontualidade, urbanidade, lealdade, probidade, decoro, etc.)', 'Proibições (art. 117): 18 incisos (ausentar-se do serviço sem autorização, etc.)', 'Penalidades: advertência, suspensão (até 90 dias), demissão, cassação, destituição', 'Rito: PAD (comissão de 3 estáveis, prazo de 60+60)'],
    excecoes:['A <em>advertência</em> pode ser aplicada sem PAD (em infrações leves).','A <em>suspensão</em> pode ser aplicada sem PAD (em infrações médias).'],
    exemplos:['Servidor que falta 1 dia sem justificativa → advertência (ou suspensão).','Servidor que desvia verbas → demissão (após PAD).'],
    pegadinchas:['<strong>18 deveres</strong>, <strong>18 proibições</strong>, <strong>4 penalidades</strong>.','<em>Advertência</em> e <em>suspensão</em> <em>podem</em> ser aplicadas sem PAD (em casos leves).','<em>Demissão</em> <strong>exige</strong> PAD.'],
    exercicios: [
      { q: 'São deveres do servidor: assiduidade, pontualidade, urbanidade, lealdade, probidade e decoro.', g: 'CERTO.' },
      { q: 'A demissão pode ser aplicada sem PAD.', g: 'ERRADO. Exige PAD.' }
    ],
    sotaque: '<strong>"18 DEVERES + 18 PROIBIÇÕES + 4 PENAS"</strong>'
  },

  M['nomeacao'] = {
    topico: 'nomeacao',
    titulo: 'Nomeação: Competência, Prazos e Requisitos',
    resumo: 'Nomeação: ato de designar servidor. Competência: autoridade indicada. Prazo: 30 dias para posse. Requisitos: idoneidade, aptidão.',
    teoria: '<p>A <strong>nomeação</strong> é o ato administrativo de designação de servidor para cargo público. <em>Competência</em>: autoridade competente indicada em lei/regimento. <em>Prazo</em>: o servidor tem 30 dias para tomar posse (prorrogável por mais 30). <em>Requisitos</em>: idoneidade moral, aptidão física e mental.</p>',
    regras:['Nomeação: ato de designação', 'Competência: autoridade indicada (presidente, governador, prefeito)', 'Prazo para posse: 30 dias (prorrogável por mais 30)', 'Requisitos: idoneidade, aptidão física e mental', 'Forma: publicação no DOU/DOE'],
    excecoes:['A <em>nomeação</em> é requisito para a <em>posse</em>.','A <em>prorrogação</em> é de 30 dias (não 15).'],
    examples:['Presidente nomeia servidor para INSS.','Ato publicado no DOU.','Servidor tem 30 dias para posse.'],
    pegadinchas:['<strong>30 dias</strong> para posse (prorrogável por mais 30).','<em>Competência</em> da autoridade indicada.','A <em>publicação</em> é essencial.'],
    exercicios: [
      { q: 'O prazo para posse é de 30 dias, prorrogável por mais 30.', g: 'CERTO.' },
      { q: 'A nomeação é ato da autoridade competente, com publicação no DOU.', g: 'CERTO.' }
    ],
    sotaque: '<strong>"NOMEACAO: 30 + 30 DIAS PARA POSSE."</strong>'
  };

  M['posse'] = {
    topico: 'posse',
    titulo: 'Posse: Prazos e Documentação',
    resumo: 'Posse: aceitação formal. Prazo: 30 dias da nomeação (prorrogável por 30). Documentos: identidade, CPF, comprovante de escolaridade.',
    teoria: '<p>A <strong>posse</strong> é o ato de aceitação formal das atribuições do cargo. <em>Prazo</em>: 30 dias da publicação da nomeação (prorrogável por mais 30). <em>Documentos</em>: identidade, CPF, comprovante de escolaridade, declaração de bens, certidões negativas, etc. <em>Efeito</em>: vínculo estatutário.</p>',
    regras:['Posse: aceitação formal', 'Prazo: 30 dias (+30 prorrogáveis)', 'Documentos: RG, CPF, escolaridade, declaração de bens, certidões', 'Forma: termo assinado pela autoridade', 'Efeito: vínculo estatutário'],
    excecoes:['A <em>posse</em> gera vínculo estatutário.','A <em>declaração de bens</em> é obrigatória.','A <em>prorrogação</em> é de 30 dias.'],
    examples:['Servidor assina termo de posse.','Declara seus bens e apresenta documentos.','Torna-se servidor público.'],
    pegadinchas:['<strong>30 + 30</strong> dias.','<em>Declaração de bens</em> obrigatória.','<em>Certidões negativas</em> são exigidas.'],
    exercicios: [
      { q: 'A posse é o ato de aceitação formal, com prazo de 30 dias (prorrogável por mais 30).', g: 'CERTO.' },
      { q: 'A declaração de bens não é exigida na posse.', g: 'ERRADO. É obrigatória (até 30 dias da posse).' }
    ],
    sotaque: '<strong>"POSSE: 30 + 30 DIAS. DECLARACAO DE BENS OBRIGATORIA."</strong>'
  };

  M['exercicio'] = {
    topico: 'exercicio',
    titulo: 'Exercício: Início, Prazos e Prorrogação',
    resumo: 'Exercício: desempenho efetivo. Prazo: 15 dias da posse (prorrogável por 30). Remetente: chefia imediata.',
    teoria: '<p>O <strong>exercício</strong> é o desempenho efetivo das atribuições do cargo. <em>Prazo</em>: até 15 dias contados da posse (prorrogável por mais 30). <em>Remetente</em>: chefia imediata. <em>Efeito</em>: contagem de tempo de serviço e demais efeitos funcionais.</p>',
    regras:['Exercício: desempenho efetivo', 'Prazo: 15 dias da posse (+30 prorrogáveis)', 'Remetente: chefia imediata', 'Efeito: contagem de tempo de serviço', 'Consequência: o não-exercício sem justificativa gera demissão'],
    excecoes:['A <em>prorrogação</em> é de 30 dias.','O <em>não-exercício</em> sem motivo gera demissão (art. 8º).'],
    examples:['Servidor inicia trabalho na unidade designada.','Chefia registra o início do exercício.'],
    pegadinchas:['<strong>15 + 30</strong> dias (diferente da posse: 30+30).','O <em>não-exercício</em> sem motivo gera demissão.'],
    exercicios: [
      { q: 'O prazo para início do exercício é de 15 dias da posse, prorrogável por mais 30.', g: 'CERTO.' },
      { q: 'O exercício não é essencial para a contagem de tempo de serviço.', g: 'ERRADO. É a partir do exercício que se conta o tempo.' }
    ],
    sotaque: '<strong>"EXERCICIO: 15 + 30 DIAS."</strong>'
  };

  M['estagio-probatorio'] = {
    topico: 'estagio-probatorio',
    titulo: 'Estágio Probatório: 3 Anos, Critérios',
    resumo: 'Estágio probatório: 3 anos. Critérios: assiduidade, pontualidade, capacidade, eficiência, responsabilidade, idoneidade. Estabilidade após.',
    teoria: '<p>O <strong>estágio probatório</strong> é o período de 3 anos em que o servidor é avaliado para fins de estabilidade. <em>Critérios</em>: assiduidade, pontualidade, capacidade, eficiência, responsabilidade, idoneidade moral. <em>Resultado</em>: aprovação (estabilidade) ou reprovação (demissão ou exoneração).</p>',
    regras:['Duração: 3 anos', 'Critérios: assiduidade, pontualidade, capacidade, eficiência, responsabilidade, idoneidade', 'Avaliação: periódica (semestral ou anual)', 'Resultado: estabilidade (efetivo) ou perda do cargo', 'Cômputo: tempo de serviço conta normalmente'],
    excecoes:['A <em>estabilidade</em> é adquirida após 3 anos.','A <em>avaliação</em> é da chefia imediata.','A <em>perda do cargo</em> é possível durante o estágio.'],
    examples:['Servidor concursado exerce o cargo por 3 anos.','A cada 6 meses é avaliado pela chefia.','Aprovado → estável.'],
    pegadinchas:['<strong>3 anos</strong> de estágio.','<strong>6 critérios</strong> (assiduidade, pontualidade, capacidade, eficiência, responsabilidade, idoneidade).','A <em>estabilidade</em> é a aprovação.'],
    exercicios: [
      { q: 'O estágio probatório tem duração de 3 anos, com avaliação periódica.', g: 'CERTO.' },
      { q: 'A estabilidade é adquirida no momento da posse.', g: 'ERRADO. A estabilidade é após 3 anos de estágio.' }
    ],
    sotaque: '<strong>"ESTAGIO: 3 ANOS. CRITERIOS: APCI (ASSIDUIDADE, PONTUALIDADE, CAPACIDADE, IDONEIDADE)"</strong>'
  };

  M['readaptacao-reversao'] = {
    topico: 'readaptacao-reversao',
    titulo: 'Readaptação e Reversão',
    resumo: 'Readaptação: aproveitamento em cargo compatível com limitação física/mental. Reversão: retorno do aposentado por invalidez (com ressalvas).',
    teoria: '<p>A <strong>readaptação</strong> é o aproveitamento do servidor em cargo compatível com uma limitação física ou mental sofrida. A <strong>reversão</strong> é o retorno do servidor aposentado por invalidez ao serviço, quando declarada insubsistente a causa da aposentadoria (lei 8.112/90 foi alterada; a EC 103/19 restringiu aposentadoria por invalidez).</p>',
    regras:['Readaptação: limitação física/mental → cargo compatível', 'Reversão: aposentadoria por invalidez → retorno (insubsistente a causa)', 'Readaptação: cargo compatível do mesmo grupo', 'Reversão: mesmo cargo ou transformado', 'Reversão: sem estabilidade (efetivo, mas não estável novamente)'],
    excecoes:['A <em>reversão</em> tem prazo decadencial.','A <em>readaptação</em> pode ocorrer em cargo de outro grupo (com vencimento compatível).','A <em>EC 103/19</em> acabou com aposentadoria por invalidez.'],
    examples:['Servidor com problema na perna → readaptado para cargo de escritório.','Aposentado por invalidez cuja junta médica declara insubsistência → reverte.'],
    pegadinchas:['<strong>Readaptação</strong>: limitação → cargo compatível.','<strong>Reversão</strong>: aposentado por invalidez → retorno.','<em>Reversão</em> tem prazo (caducidade).'],
    exercicios: [
      { q: 'A readaptação aproveita o servidor em cargo compatível com sua limitação.', g: 'CERTO.' },
      { q: 'A reversão é o retorno do servidor aposentado por invalidez.', g: 'CERTO (com restrições da EC 103/19).' }
    ],
    sotaque: '<strong>"READAPTACAO: LIMITACAO → CARGO COMPATIVEL. REVERSAO: APOSENTADO → RETORNO."</strong>'
  };

  M['reintegracao-reconducao'] = {
    topico: 'reintegracao-reconducao',
    titulo: 'Reintegração e Recondução',
    resumo: 'Reintegração: servidor retorna por decisão judicial (cargo ocupado por terceiro). Recondução: retorno ao cargo anterior por inabilitação em estágio probatório ou reintegração do anterior.',
    teoria: '<p>A <strong>reintegração</strong> é o retorno do servidor ao cargo, em caso de invalidade do ato de demissão (decisão judicial ou administrativa), com ressarcimento de vencimentos. O ocupante anterior do cargo (se houver) é deslocado para outro cargo ou reconduzido. A <strong>recondução</strong> é o retorno do servidor estável ao cargo que ocupava anteriormente, em razão de inabilitação em estágio probatório em outro cargo, ou reintegração do anterior.</p>',
    regras:['Reintegração: invalidade de demissão → retorno', 'Recondução: inabilitação em estágio → cargo anterior', 'Reintegração: ressarcimento de vencimentos', 'Recondução: estável no cargo anterior', 'Efeito: se o cargo está ocupado, o ocupante é reconduzido/disposto'],
    excecoes:['A <em>recondução</em> pressupõe servidor estável.','A <em>reintegração</em> gera ressarcimento.','O <em>terceiro</em> (ocupante) é deslocado.'],
    examples:['Servidor demitido obtém decisão judicial anulando → reintegra.','Servidor inabilitado em estágio de outro cargo → reconduzido ao anterior.'],
    pegadinchas:['<strong>Reintegração</strong>: decisão judicial/anulação → retorno + ressarcimento.','<strong>Recondução</strong>: inabilitação em estágio → cargo anterior.','O <em>terceiro</em> é deslocado.'],
    exercicios: [
      { q: 'A reintegração é o retorno do servidor por invalidade de sua demissão.', g: 'CERTO.' },
      { q: 'A recondução ocorre por decisão judicial.', g: 'ERRADO. A recondução é por inabilitação em estágio ou reintegração do anterior.' }
    ],
    sotaque: '<strong>"REINTEGRACAO: JUDICIAL + RESSARCIMENTO. RECONDUCAO: INABILITACAO → ANTERIOR."</strong>'
  };

  M['disponibilidade'] = {
    topico: 'disponibilidade',
    titulo: 'Disponibilidade: Conceito, Remuneração, Aproveitamento',
    resumo: 'Disponibilidade: servidor estável em posto extinto ou declarado desnecessário. Remuneração: proporcional. Aproveitamento: nomeação em cargo compatível.',
    teoria: '<p>A <strong>disponibilidade</strong> é a situação do servidor estável cujo cargo foi extinto ou declarado desnecessário. <em>Remuneração</em>: vencimento proporcional ao tempo de serviço. <em>Aproveitamento</em>: nomeação em cargo compatível (de preferência o mesmo). <em>Prazo</em>: se aproveitado, o servidor tem 30 dias para entrar em exercício.</p>',
    regras:['Disponibilidade: cargo extinto ou desnecessário', 'Remuneração: proporcional ao tempo de serviço', 'Aproveitamento: cargo compatível', 'Prazo para exercício: 30 dias', 'Não aproveitado: aposentadoria compulsória com proventos proporcionais'],
    excecoes:['O <em>aproveitamento</em> é obrigatório (regra).','A <em>remuneração</em> é <em>proporcional</em>.','A <em>aposentadoria</em> é compulsória.'],
    examples:['Cargo extinto pela reestruturação do órgão.','Servidor posto em disponibilidade.','Aproveitado em novo cargo compatível.'],
    pegadinchas:['<strong>Disponibilidade</strong>: cargo extinto.','<strong>Remuneração proporcional</strong>.','<strong>30 dias</strong> para exercício após aproveitamento.'],
    exercicios: [
      { q: 'A disponibilidade ocorre com cargo extinto ou declarado desnecessário.', g: 'CERTO.' },
      { q: 'A remuneração na disponibilidade é integral.', g: 'ERRADO. É proporcional ao tempo de serviço.' }
    ],
    sotaque: '<strong>"DISPONIBILIDADE: PROPORCIONAL + 30 DIAS PARA EXERCICIO."</strong>'
  };

  M['adicionais'] = {
    topico: 'adicionais',
    titulo: 'Adicionais: Insalubridade, Periculosidade, Serviço Extraordinário',
    resumo: 'Insalubridade: 10%, 20%, 40% (graus mínimo, médio, máximo). Periculosidade: 10% sobre vencimento. Extraordinário: 50% (diurna/noturna) ou 100% (feriado).',
    teoria: '<p>Os <strong>adicionais</strong> são vantagens devidas ao servidor em condições especiais. <em>Insalubridade</em>: 10% (mínimo), 20% (médio), 40% (máximo). <em>Periculosidade</em>: 10% sobre o vencimento. <em>Serviço extraordinário</em>: 50% sobre a hora normal (diurna ou noturna), 100% em feriados e dias santos.</p>',
    regras:['Insalubridade: 10% (mín.), 20% (mé.), 40% (máx.)', 'Periculosidade: 10% sobre vencimento', 'Extraordinário diurno: 50%', 'Extraordinário noturno: 50% (hora noturna de 52min30s)', 'Extraordinário em feriado: 100%', 'Incompatibilidade: insalubridade + periculosidade (escolha do servidor)'],
    excecoes:['<em>Insalubridade</em> e <em>periculosidade</em> são inacumuláveis.','A <em>hora noturna</em> tem 52min30s.','O <em>serviço extraordinário</em> tem limite (regra: 2h/dia).'],
    examples:['Servidor que trabalha com produtos químicos → insalubridade.','Servidor que trabalha com eletricidade → periculosidade.','Servidor que trabalha após a jornada → extraordinário.'],
    pegadinchas:['<strong>Insalubridade</strong>: 10, 20, 40.','<strong>Periculosidade</strong>: 10.','<strong>Extraordinário</strong>: 50 (ou 100 em feriado).','Hora noturna: 52min30s.'],
    exercicios: [
      { q: 'A insalubridade é de 10%, 20% ou 40% conforme o grau (mínimo, médio, máximo).', g: 'CERTO.' },
      { q: 'A periculosidade é de 50% sobre o vencimento.', g: 'ERRADO. A periculosidade é de 10%.' }
    ],
    sotaque: '<strong>"INSALUBRIDADE: 10/20/40. PERICULOSIDADE: 10. EXTRA: 50/100."</strong>'
  };

  M['adicional-noturno-ferias'] = {
    topico: 'adicional-noturno-ferias',
    titulo: 'Adicional Noturno e Adicional de Férias',
    resumo: 'Noturno: 25% sobre o valor da hora diurna (hora noturna: 52min30s). Férias: 1/3 constitucional sobre o valor do vencimento.',
    teoria: '<p>O <strong>adicional noturno</strong> é devido ao servidor que trabalha em horário noturno (22h às 5h) e corresponde a 25% sobre o valor da hora diurna. Cada hora noturna é computada como 52min30s (7 horas noturnas = 8 horas diurnas). O <strong>adicional de férias</strong> é de 1/3 sobre o valor do vencimento, devido no gozo das férias (regra constitucional).</p>',
    regras:['Adicional noturno: 25% sobre hora diurna', 'Hora noturna: 52min30s (7h noturnas = 8h diurnas)', 'Horário noturno: 22h às 5h', 'Adicional de férias: 1/3 sobre o vencimento', 'Férias: pago antes do início (regra)'],
    excecoes:['O <em>1/3 de férias</em> é constitucional (art. 7º, XVII, CF/88).','A <em>hora noturna</em> é ficta (52min30s).','O <em>adicional noturno</em> é diferente do noturno do CLT.'],
    examples:['Servidor que trabalha das 22h às 6h → adicional noturno.','Servidor em férias → recebe 1/3 adicional.'],
    pegadinchas:['<strong>25%</strong> noturno.','<strong>52min30s</strong> = hora noturna.','<strong>1/3</strong> de férias é constitucional.'],
    exercicios: [
      { q: 'O adicional noturno é de 25% sobre o valor da hora diurna.', g: 'CERTO.' },
      { q: 'O adicional de férias é de 50% sobre o vencimento.', g: 'ERRADO. É de 1/3 (33,33%).' }
    ],
    sotaque: '<strong>"NOTURNO: 25%. HORA NOTURNA: 52MIN30S. FERIAS: 1/3."</strong>'
  };

  M['gratificacoes-vantagens'] = {
    topico: 'gratificacoes-vantagens',
    titulo: 'Gratificações e Vantagens Pessoais',
    resumo: 'Gratificações: adicionais, função, cargo em comissão. Vantagens pessoais: tempo de serviço, qualificação. Não se incorporam ao vencimento (regra).',
    teoria: '<p>As <strong>gratificações</strong> são vantagens de natureza transitória, vinculadas ao desempenho de função ou cargo. <em>Gratificação de função</em>: para cargo em comissão ou função de confiança. <em>Gratificação natalina</em> (13º): anual. As <strong>vantagens pessoais</strong> são adquiridas (ex: anuênio, qüinqüênio) e acompanham o servidor. <em>Regra</em>: não se incorporam ao vencimento.</p>',
    regras:['Gratificação de função: para cargo/função', 'Gratificação natalina (13º): anual', 'Vantagens pessoais: anuênio, qüinqüênio (5%)', 'Regra: não incorporação ao vencimento', 'Exceção: vantagens pessoais incorporadas (anterior à Lei 8.112)'],
    excecoes:['A <em>gratificação natalina</em> é constitucional.','As <em>vantagens pessoais</em> podem ser <em>incorporadas</em> (regra anterior).','A <em>gratificação de função</em> é de 20% a 100% (varia).'],
    examples:['Servidor recebe 13º em dezembro.','Servidor recebe qüinqüênio a cada 5 anos.','Servidor em função gratificada recebe gratificação.'],
    pegadinchas:['<strong>13º</strong> (gratificação natalina).','<strong>5% qüinqüênio</strong> a cada 5 anos.','<em>Não incorporação</em> é a regra atual.'],
    exercicios: [
      { q: 'A gratificação natalina (13º) é anual.', g: 'CERTO.' },
      { q: 'As gratificações incorporam-se ao vencimento.', g: 'ERRADO. Em regra, não se incorporam.' }
    ],
    sotaque: '<strong>"13 (NATALINA) + QUINQUENIO 5%. NAO INCORPORACAO (REGRA)."</strong>'
  };

  M['licenca-tratamento-saude'] = {
    topico: 'licenca-tratamento-saude',
    titulo: 'Licença para Tratamento de Saúde',
    resumo: 'Tratamento de saúde: até 24 meses. Atestado médico: 1 a 14 dias (perícia singular), 15+ dias (junta oficial).',
    teoria: '<p>A <strong>licença para tratamento de saúde</strong> é concedida ao servidor em caso de incapacidade laborativa. <em>Atestado de 1 a 14 dias</em>: perícia singular (médico do órgão). <em>15+ dias</em>: junta médica oficial. <em>Prazo</em>: até 24 meses, com vencimentos (salvo doença ocupacional ou acidente de serviço).</p>',
    regras:['Prazo: até 24 meses', 'Atestado 1-14 dias: perícia singular', 'Atestado 15+ dias: junta médica oficial', 'Remuneração: integral (até 24 meses)', 'Consequência: se ultrapassar 24 meses, aposentadoria por invalidez'],
    excecoes:['<em>Doença ocupacional</em> ou <em>acidente de serviço</em>: 100% de remuneração (sem prazo).','<em>24 meses</em> é o limite.','<em>Junta oficial</em> é para 15+ dias.'],
    examples:['Servidor gripado por 5 dias → atestado singular.','Servidor em cirurgia: 30 dias → junta oficial.','Servidor com depressão: 12 meses → prorrogação.'],
    pegadinchas:['<strong>24 meses</strong> (limite).','<strong>15+ dias</strong> = junta.','<strong>1-14 dias</strong> = singular.','Acidente de serviço: 100% sem prazo.'],
    exercicios: [
      { q: 'A licença para tratamento de saúde pode ser de até 24 meses.', g: 'CERTO.' },
      { q: 'Para afastamentos de 1-14 dias, exige-se junta médica oficial.', g: 'ERRADO. Para 1-14 dias basta perícia singular.' }
    ],
    sotaque: '<strong>"24 MESES (TRATAMENTO SAUDE). 1-14 (SINGULAR), 15+ (JUNTA)."</strong>'
  };

  M['licenca-doenca-familia'] = {
    topico: 'licenca-doenca-familia',
    titulo: 'Licença por Motivo de Doença em Pessoa da Família',
    resumo: 'Doença em pessoa da família: até 60 dias (remunerada) + 90 dias (sem). Parente: cônjuge, filhos, pais, enteados, dependentes.',
    teoria: '<p>A <strong>licença por motivo de doença em pessoa da família</strong> é devida para cuidar de familiar enfermo. <em>Limite</em>: até 60 dias com remuneração + 90 dias sem remuneração. <em>Parentes</em>: cônjuge, companheiro, pais, filhos, enteados, dependentes. <em>Comprovação</em>: atestado médico.</p>',
    regras:['Prazo: 60 dias (remunerada) + 90 dias (sem)', 'Parentes: cônjuge, companheiro, pais, filhos, enteados, dependentes', 'Comprovação: atestado médico', 'Remuneração: integral nos primeiros 60 dias', 'Consequência: familiar sem cuidado adequado'],
    excecoes:['O <em>limite total</em> é 150 dias (60+90).','A <em>segunda parcela</em> (90 dias) é sem remuneração.','<em>Dependentes</em> no IR são considerados.'],
    examples:['Servidor cuida do pai doente por 30 dias → licença remunerada.','Servidor cuida do filho por 4 meses → 60 remunerados + 60 sem.'],
    pegadinchas:['<strong>60 + 90</strong> dias.','<strong>Parentesco</strong> definido em lei.','<em>2ª parcela</em> (90 dias) é <em>sem</em> remuneração.'],
    exercicios: [
      { q: 'A licença por motivo de doença em pessoa da família é de até 60 dias (remunerada) + 90 dias (sem remuneração).', g: 'CERTO.' },
      { q: 'O limite total é de 24 meses.', g: 'ERRADO. O limite é 60+90 dias.' }
    ],
    sotaque: '<strong>"DOENCA FAMILIA: 60 (REMUNERADA) + 90 (SEM)."</strong>'
  };

  M['licenca-gestante-paternidade'] = {
    topico: 'licenca-gestante-paternidade',
    titulo: 'Licenças: Gestante, Paternidade, Adoção',
    resumo: 'Gestante: 120 dias (pode ser 28 antes). Paternidade: 5 dias. Adoção: 90 dias (até 1 ano), 60 dias (1-4), 30 dias (4-8).',
    teoria: '<p>As <strong>licenças parentais</strong> protegem a maternidade e paternidade. <em>Gestante</em>: 120 dias (pode ser 28 dias antes do parto + 92 após). <em>Paternidade</em>: 5 dias. <em>Adoção</em>: 90 dias (criança até 1 ano), 60 dias (1-4 anos), 30 dias (4-8 anos).</p>',
    regras:['Gestante: 120 dias (28 antes + 92 após)', 'Paternidade: 5 dias', 'Adoção: 90 dias (até 1 ano)', 'Adoção: 60 dias (1-4 anos)', 'Adoção: 30 dias (4-8 anos)', 'Remuneração: integral'],
    excecoes:['A <em>gestante</em> pode antecipar 28 dias.','A <em>paternidade</em> é curta (5 dias).','A <em>adoção</em> varia conforme a idade.'],
    examples:['Servidora gestante: 120 dias.','Servidor pai: 5 dias.','Adotante de recém-nascido: 90 dias.'],
    pegadinchas:['<strong>120</strong> gestante (28+92).','<strong>5</strong> paternidade.','<strong>90/60/30</strong> adoção (conforme idade).'],
    exercicios: [
      { q: 'A licença gestante é de 120 dias, podendo ser 28 antes do parto.', g: 'CERTO.' },
      { q: 'A licença paternidade é de 20 dias.', g: 'ERRADO. É de 5 dias.' }
    ],
    sotaque: '<strong>"GESTANTE 120 (28+92). PATERNIDADE 5. ADOCAO 90/60/30."</strong>'
  };

  M['licenca-capacitacao-interesse'] = {
    topico: 'licenca-capacitacao-interesse',
    titulo: 'Licenças para Capacitação e Interesse Particular',
    resumo: 'Capacitação: até 3 meses a cada 5 anos (sem remuneração). Interesse particular: até 3 anos (sem remuneração).',
    teoria: '<p>A <strong>licença para capacitação</strong> é devida ao servidor para fins de estudo, com prazo de até <em>3 meses</em> a cada <em>5 anos</em> de efetivo exercício, sem remuneração. A <strong>licença para tratar de interesses particulares</strong> é de até <em>3 anos</em>, sem remuneração.</p>',
    regras:['Capacitação: até 3 meses a cada 5 anos', 'Interesse particular: até 3 anos (sem remuneração)', 'Remuneração: nenhuma (em ambas)', 'Requisito: 5 anos de efetivo exercício (capacitação)', 'Concessão: a critério da administração'],
    excecoes:['A <em>capacitação</em> é por quinquênio.','A <em>interesse particular</em> é a critério da administração (não é direito).','A <em>contagem de tempo</em> é suspensa (em regra).'],
    examples:['Servidor com 5 anos de serviço pede 3 meses para mestrado.','Servidor pede 2 anos para tratar interesses pessoais.'],
    pegadinchas:['<strong>3 meses / 5 anos</strong> (capacitação).','<strong>3 anos</strong> (interesse particular).','<em>Sem remuneração</em> em ambas.'],
    exercicios: [
      { q: 'A licença para capacitação é de até 3 meses a cada 5 anos.', g: 'CERTO.' },
      { q: 'A licença para interesse particular é de até 2 anos.', g: 'ERRADO. É de até 3 anos.' }
    ],
    sotaque: '<strong>"CAPACITACAO: 3 MESES / 5 ANOS. INTERESSE: 3 ANOS."</strong>'
  };

  M['licenca-mandato-classista'] = {
    topico: 'licenca-mandato-classista',
    titulo: 'Licença para Desempenho de Mandato Classista',
    resumo: 'Mandato classista: liberado para exercício em sindicato ou associação (sem remuneração do órgão de origem, em regra).',
    teoria: '<p>A <strong>licença para desempenho de mandato classista</strong> é devida ao servidor que exerce cargo de direção em sindicato ou associação de classe. <em>Prazo</em>: até o término do mandato. <em>Remuneração</em>: em regra, sem vencimento do órgão de origem (custeado pela entidade).</p>',
    regras:['Mandato classista: cargo em sindicato/associação', 'Prazo: até o término do mandato', 'Remuneração: regra = sem vencimento do órgão', 'Exceção: cargo eletivo (vereador, etc.) → outro regime', 'Concessão: obrigatória (servidor estável)'],
    excecoes:['O <em>mandato</em> é o de direção, não de representação.','A <em>remuneração</em> é por conta da entidade.','O <em>estável</em> tem direito.'],
    examples:['Servidor é eleito presidente do sindicato → licença.','Servidor exerce mandato até o final → retorna.'],
    pegadinchas:['<strong>Mandato classista</strong> = cargo de direção.','<strong>Sem remuneração</strong> do órgão de origem.'],
    exercicios: [
      { q: 'A licença para mandato classista é devida ao servidor estável eleito para cargo de direção em sindicato.', g: 'CERTO.' },
      { q: 'O servidor em licença para mandato classista continua recebendo do órgão de origem.', g: 'ERRADO. Em regra, não.' }
    ],
    sotaque: '<strong>"MANDATO CLASSISTA: SEM REMUNERACAO DO ORGAO."</strong>'
  };

  M['afastamentos'] = {
    topico: 'afastamentos',
    titulo: 'Afastamentos: Estudo, Missão, Cargo Eletivo',
    resumo: 'Afastamento para estudo: com ou sem ônus. Missão: no exterior ou interior. Cargo eletivo: prazos e regras constitucionais.',
    teoria: '<p>Os <strong>afastamentos</strong> são interrupções do exercício para fins específicos. <em>Afastamento para estudo</em>: para pós-graduação, com ou sem ônus (remunerado ou não). <em>Afastamento para missão</em>: no exterior ou interior, a serviço. <em>Afastamento para cargo eletivo</em>: regras da CF/88 (art. 38).</p>',
    regras:['Afastamento para estudo: com/sem ônus', 'Missão: no exterior ou interior', 'Cargo eletivo: art. 38, CF/88', 'Cargo eletivo federal: afastamento sem remuneração', 'Cargo eletivo municipal: pode acumular (se houver compatibilidade de horários)'],
    excecoes:['O <em>cargo eletivo</em> tem regras específicas.','<em>Missão</em> é autorizada pela autoridade.','<em>Estudo</em> com ônus: Administração paga.'],
    examples:['Servidor em mestrado no exterior → afastamento para estudo.','Servidor em viagem oficial → missão.','Servidor eleito vereador → afastamento.'],
    pegadinchas:['<strong>Art. 38 CF/88</strong>: cargo eletivo.','<strong>Missão</strong>: a serviço.','<strong>Estudo</strong>: com/sem ônus.'],
    exercicios: [
      { q: 'O afastamento para cargo eletivo é regido pelo art. 38 da CF/88.', g: 'CERTO.' },
      { q: 'O afastamento para estudo é sempre sem ônus.', g: 'ERRADO. Pode ser com ou sem ônus.' }
    ],
    sotaque: '<strong>"ESTUDO (COM/SEM ONUS) + MISSAO + ART. 38 CF (ELETIVO)"</strong>'
  };

  M['ferias'] = {
    topico: 'ferias',
    titulo: 'Férias: Duração, Parcelamento, Indenização',
    resumo: 'Férias: 30 dias por ano (após 12 meses). Pode ser parcelada em até 3 vezes (se > 30 dias). Indenização: proporcional.',
    teoria: '<p>As <strong>férias</strong> são devidas após 12 meses de exercício (período aquisitivo). <em>Duração</em>: 30 dias. <em>Parcelamento</em>: pode ser parcelada em até 3 vezes (regra). <em>Indenização</em>: proporcional, em caso de exoneração/demissão. <em>1/3 constitucional</em>: adicional de 1/3 sobre o vencimento.</p>',
    regras:['Duração: 30 dias', 'Período aquisitivo: 12 meses', 'Parcelamento: até 3 vezes (com mínimo de 5 dias cada)', 'Indenização: proporcional', 'Adicional: 1/3 constitucional'],
    excecoes:['A <em>indenização</em> é proporcional aos meses.','O <em>parcelamento</em> é opção do servidor (regra).','O <em>1/3</em> é constitucional.'],
    examples:['Servidor com 12 meses: 30 dias de férias.','Servidor exonera antes: 15 dias indenizados.','Servidor divide em 3 períodos de 10 dias.'],
    pegadinchas:['<strong>30 dias</strong> (após 12 meses).','<strong>3 vezes</strong> (parcelamento).','<strong>1/3</strong> constitucional.','<em>Indenização</em> = proporcional.'],
    exercicios: [
      { q: 'As férias são de 30 dias, com adicional de 1/3 constitucional.', g: 'CERTO.' },
      { q: 'As férias podem ser parceladas em até 5 vezes.', g: 'ERRADO. Podem ser em até 3 vezes.' }
    ],
    sotaque: '<strong>"FERIAS: 30 DIAS + 1/3 CONSTITUCIONAL. 3 PARCELAS."</strong>'
  };

  M['deveres-servidor'] = {
    topico: 'deveres-servidor',
    titulo: 'Deveres do Servidor Público (Art. 116)',
    resumo: '18 deveres: assiduidade, pontualidade, urbanidade, lealdade, probidade, decoro, zelo, etc. Exercer com dedicação; cumprir ordens, exceto ilegais.',
    teoria: '<p>Os <strong>deveres do servidor</strong> estão no art. 116 da Lei 8.112/90, com 18 incisos. Principais: <em>assiduidade</em>, <em>pontualidade</em>, <em>urbanidade</em>, <em>lealdade</em>, <em>probidade</em>, <em>decoro</em>, <em>zelo</em>, <em>dedicação</em> ao serviço, <em>cumprir ordens</em> (exceto ilegais), <em>representar</em> sobre ilegalidade.</p>',
    regras:['Art. 116: 18 incisos', 'Assiduidade, pontualidade, urbanidade, lealdade, probidade, decoro', 'Zelo, dedicação ao serviço', 'Cumprir ordens, exceto ilegais', 'Representar contra ilegalidade', 'Respeitar superiores e colegas'],
    excecoes:['O servidor <em>não</em> deve cumprir ordem <em>ilegal</em> (deve representar).','A <em>probidade</em> é moral e administrativa.','O <em>decoro</em> é postura pública.'],
    examples:['Servidor falta sem justificativa → viola assiduidade.','Servidor cumpre ordem ilegal sem representar → viola.'],
    pegadinchas:['<strong>18 deveres</strong> (art. 116).','<em>Ordem ilegal</em>: deve representar.','<em>Probidade</em> é central.'],
    exercicios: [
      { q: 'São deveres do servidor: assiduidade, pontualidade, urbanidade, lealdade, probidade e decoro.', g: 'CERTO.' },
      { q: 'O servidor deve cumprir ordens, mesmo ilegais.', g: 'ERRADO. Não deve cumprir ordens ilegais; deve representar.' }
    ],
    sotaque: '<strong>"18 DEVERES (ART. 116). ORDEM ILEGAL: NAO CUMPRIR."</strong>'
  };

  M['proibicoes-servidor'] = {
    topico: 'proibicoes-servidor',
    titulo: 'Proibições ao Servidor Público (Art. 117)',
    resumo: '18 proibições: ausentar-se sem autorização, recusar fé pública, opor resistência, etc. Acumulação ilegal, valer-se do cargo.',
    teoria: '<p>As <strong>proibições</strong> estão no art. 117, com 18 incisos. Principais: <em>ausentar-se do serviço</em> sem autorização, <em>recusar fé pública</em>, <em>opor resistência</em>, <em>recusar atualização de dados</em>, <em>comentar/desviar servidor</em>, <em>valer-se do cargo</em>, <em>participar de gerência</em> de empresa, <em>constituir-se procurador</em>, <em>receber presentes</em> (em regra), <em>aceder a pedido</em> ilegal, <em>exercer comércio</em> (em regra).</p>',
    regras:['Art. 117: 18 incisos', 'Ausentar-se sem autorização', 'Recusar fé pública', 'Opor resistência ao exercício do cargo', 'Valer-se do cargo para favorecimento', 'Receber presentes (em regra)', 'Exercer comércio (em regra)'],
    excecoes:['<em>Presentes</em> podem ser aceitos em alguns casos (limite, finalidade).','<em>Comércio</em> pode ser exercido em alguns casos (regra: não).','<em>Gerência</em> é proibida.'],
    examples:['Servidor ausenta-se sem autorização → proibição.','Servidor recebe presente para favorecer empresa → proibição.'],
    pegadinchas:['<strong>18 proibições</strong> (art. 117).','<em>Valer-se do cargo</em>: proibição.','<em>Presentes</em>: regra = recusar.'],
    exercicios: [
      { q: 'São proibições do servidor: ausentar-se sem autorização, recusar fé pública, opor resistência, valer-se do cargo, receber presentes, exercer comércio.', g: 'CERTO.' },
      { q: 'O servidor pode sempre receber presentes, sem limites.', g: 'ERRADO. Regra geral: recusar (ou respeitar limite).' }
    ],
    sotaque: '<strong>"18 PROIBICOES (ART. 117). VALER-SE DO CARGO: NAO."</strong>'
  };

  M['acumulacao-cargos'] = {
    topico: 'acumulacao-cargos',
    titulo: 'Acumulação de Cargos: Regra e Exceções',
    resumo: 'Regra (CF/88, art. 37, XVI): vedada. Exceções: 2 cargos de professor; 1 prof + 1 técnico (mesmo somatório de horários); 2 cargos de profissional de saúde.',
    teoria: '<p>A <strong>acumulação de cargos públicos</strong> é <em>vedada</em> pela CF/88 (art. 37, XVI), com <em>exceções</em>: <em>2 cargos de professor</em>; <em>1 cargo de professor com 1 técnico/científico</em> (com mesmo somatório de horários); <em>2 cargos ou empregos de profissional de saúde</em> (com mesmo somatório de horários).</p>',
    regras:['Regra: VEDADA acumulação', 'Exceção 1: 2 cargos de professor', 'Exceção 2: 1 professor + 1 técnico/científico', 'Exceção 3: 2 cargos de profissional de saúde', 'Aposentado: só pode acumular com cargo acumulável', 'Comprovação: compatibilidade de horários'],
    excecoes:['A <em>acumulação</em> de cargos <em>técnicos</em> exige o <em>mesmo somatório</em>.','A <em>acumulação</em> com cargo <em>privado</em> é possível (sem cargo público).','A <em>aposentadoria</em> não extingue a vedação.'],
    examples:['Professor universitário + professor estadual → pode.','Médico federal + médico estadual → pode.','Auditor federal + auditor estadual → pode (1 técnico + 1 técnico).'],
    pegadinchas:['<strong>3 exceções</strong>: professor, técnico, saúde.','<em>Mesmo somatório</em> de horários.','<em>Aposentado</em> segue a regra.'],
    exercicios: [
      { q: 'A acumulação de 2 cargos de professor é permitida pela CF/88.', g: 'CERTO.' },
      { q: 'A acumulação de 1 cargo de professor com 1 cargo técnico é permitida, desde que haja compatibilidade de horários.', g: 'CERTO.' }
    ],
    sotaque: '<strong>"3 EXCECOES: PROFESSOR + TECNICO + SAUDE. MESMO SOMATORIO."</strong>'
  };

  M['responsabilidade'] = {
    topico: 'responsabilidade',
    titulo: 'Responsabilidade Civil, Penal e Administrativa',
    resumo: 'Civil: ação regressiva (omissão específica). Penal: crime funcional. Administrativa: PAD. As instâncias são independentes.',
    teoria: '<p>A <strong>responsabilidade do servidor</strong> pode ser <em>civil</em>, <em>penal</em> e <em>administrativa</em>. <em>Civil</em>: ação regressiva do Estado contra o servidor (em caso de dolo ou culpa). <em>Penal</em>: crime funcional (CP, leis penais). <em>Administrativa</em>: PAD. As instâncias são <em>independentes</em> (não se comunicam obrigatoriamente).</p>',
    regras:['Civil: ação regressiva (dolo ou culpa)', 'Penal: crime funcional (CP, leis específicas)', 'Administrativa: PAD (Lei 8.112/90)', 'Independência das instâncias', 'Denúncia: autoridade pode remeter ao MP (crime)'],
    excecoes:['A <em>independência</em> é regra, mas a <em>condenação penal</em> pode influenciar a administrativa.','A <em>ação regressiva</em> tem prazo prescricional.','A <em>omissão</em> específica gera responsabilidade.'],
    examples:['Servidor que desvia verbas → penal (peculato) + civil (regressiva) + administrativa (demissão).'],
    pegadinchas:['<strong>3 responsabilidades</strong>: civil, penal, administrativa.','<strong>Independência</strong> das instâncias.','<em>Regressiva</em> é ação do Estado.'],
    exercicios: [
      { q: 'As responsabilidades civil, penal e administrativa do servidor são independentes.', g: 'CERTO.' },
      { q: 'A condenação penal sempre anula a administrativa.', g: 'ERRADO. Em regra, são independentes.' }
    ],
    sotaque: '<strong>"3 RESPONSABILIDADES: CIVIL + PENAL + ADMINISTRATIVA. INDEPENDENCIA."</strong>'
  };

  M['sindicancia'] = {
    topico: 'sindicancia',
    titulo: 'Sindicância: Rito Sumário e Ordinário',
    resumo: 'Sindicância: apuração prévia. Rito sumário: 30 dias (aplicação de advertência/suspensão até 30 dias). Ordinário: 45 dias (apuração de irregularidade).',
    teoria: '<p>A <strong>sindicância</strong> é o procedimento de apuração prévia, mais simples que o PAD. <em>Rito sumário</em>: 30 dias, para aplicação de <em>advertência</em> ou <em>suspensão de até 30 dias</em>. <em>Rito ordinário</em>: 45 dias, para apurar irregularidade (sem aplicação de penalidade mais grave). <em>Finalidade</em>: investigar antes de instaurar PAD.</p>',
    regras:['Rito sumário: 30 dias', 'Rito sumário: aplicação de advertência/suspensão até 30 dias', 'Rito ordinário: 45 dias', 'Rito ordinário: apuração prévia (sem PAD)', 'Comissão: 2 ou 3 servidores'],
    excecoes:['A <em>sindicância</em> é <em>prévia</em> ao PAD.','O <em>rito sumário</em> é mais rápido.','A <em>defesa</em> é garantida.'],
    examples:['Servidor falta muito → instaura-se sindicância sumária para apurar e aplicar advertência.'],
    pegadinchas:['<strong>Sumário: 30 dias</strong> (advertência/suspensão até 30).','<strong>Ordinário: 45 dias</strong> (apuração).','<em>Prévia</em> ao PAD.'],
    exercicios: [
      { q: 'A sindicância sumária tem prazo de 30 dias e pode aplicar advertência ou suspensão de até 30 dias.', g: 'CERTO.' },
      { q: 'A sindicância é o mesmo que o PAD.', g: 'ERRADO. A sindicância é mais simples, prévia ao PAD.' }
    ],
    sotaque: '<strong>"SUMARIO: 30 DIAS. ORDINARIO: 45 DIAS. PREVIA AO PAD."</strong>'
  };

  M['sancoes-disciplinares'] = {
    topico: 'sancoes-disciplinares',
    titulo: 'Sanções Disciplinares: Advertência, Suspensão, Demissão',
    resumo: 'Advertência (leve), suspensão (até 90 dias), demissão (grave). Cassação de aposentadoria (mesma pena da demissão).',
    teoria: '<p>As <strong>sanções disciplinares</strong> são: <em>advertência</em> (verbal ou escrita, para faltas leves), <em>suspensão</em> (até 90 dias, para faltas médias), <em>demissão</em> (para faltas graves), <em>destituição de cargo em comissão</em> (para ocupante de cargo em comissão), <em>cassação de aposentadoria</em> (equivalente à demissão). <em>Regra</em>: aplicação após PAD (ou diretamente em casos leves).</p>',
    regras:['Advertência: verbal ou escrita (leves)', 'Suspensão: até 90 dias (médias)', 'Demissão: faltas graves', 'Destituição: cargo em comissão', 'Cassação: aposentadoria/disponibilidade (mesma pena da demissão)'],
    excecoes:['A <em>advertência</em> pode ser sem PAD (leves).','A <em>suspensão</em> pode ser sem PAD (até 30 dias).','A <em>demissão</em> exige PAD.'],
    examples:['Servidor falta 1 dia → advertência.','Servidor falta 5 dias → suspensão de 5 dias.','Servidor desvia verbas → demissão (após PAD).'],
    pegadinchas:['<strong>3 sanções</strong>: advertência, suspensão, demissão.','<em>Cassação</em> = demissão para aposentado.','<em>Suspensão</em> até 90 dias.'],
    exercicios: [
      { q: 'São sanções disciplinares: advertência, suspensão, demissão, destituição de cargo em comissão, cassação de aposentadoria.', g: 'CERTO.' },
      { q: 'A demissão pode ser aplicada sem PAD.', g: 'ERRADO. A demissão exige PAD.' }
    ],
    sotaque: '<strong>"3 SANCOES: ADVERTENCIA + SUSPENSAO (90) + DEMISSAO. CASSACAO = DEMISSAO."</strong>'
  };

  M['demissao'] = {
    topico: 'demissao',
    titulo: 'Demissão: Hipóteses e Incompatibilização',
    resumo: 'Demissão: faltas graves (15 hipóteses no art. 132). Incompatibilização: 5 anos para novo cargo (em regra).',
    teoria: '<p>A <strong>demissão</strong> é a sanção máxima, aplicada em <em>faltas graves</em> previstas no art. 132 (15 hipóteses). <em>Exemplos</em>: crime contra a Administração, improbidade, abandono de cargo, inassiduidade habitual, ofensa física em serviço, etc. <em>Incompatibilização</em>: o servidor demitido fica <em>incompatibilizado</em> por <em>5 anos</em> para novo cargo público federal.</p>',
    regras:['Demissão: 15 hipóteses (art. 132)', 'Exemplos: crime, improbidade, abandono, inassiduidade, ofensa física', 'Incompatibilização: 5 anos para novo cargo', 'Fundamentação: art. 132 da Lei 8.112/90', 'Início: após trânsito em julgado (em caso de PAD)'],
    excecoes:['A <em>incompatibilização</em> é de 5 anos.','A <em>demissão</em> de servidor estável dá direito a recurso.','A <em>falta grave</em> está taxativa no art. 132.'],
    examples:['Servidor que desvia verbas → demissão.','Servidor que agride colega em serviço → demissão.'],
    pegadinchas:['<strong>15 hipóteses</strong> (art. 132).','<strong>5 anos</strong> de incompatibilização.','<em>Crime contra a Administração</em> = demissão.'],
    exercicios: [
      { q: 'São hipóteses de demissão: crime contra a Administração, improbidade, abandono de cargo, inassiduidade habitual, ofensa física em serviço.', g: 'CERTO.' },
      { q: 'A incompatibilização é de 10 anos.', g: 'ERRADO. É de 5 anos.' }
    ],
    sotaque: '<strong>"DEMISSAO: 15 HIPOTESES (ART. 132). INCOMPATIBILIZACAO: 5 ANOS."</strong>'
  };

  M['cassacao'] = {
    topico: 'cassacao',
    titulo: 'Cassação de Aposentadoria e Disponibilidade',
    resumo: 'Cassação: aplicada ao inativo que praticou falta grave (mesma pena da demissão). Disponibilidade: servidor em disponibilidade cassada.',
    teoria: '<p>A <strong>cassação de aposentadoria</strong> (e de disponibilidade) é aplicada ao servidor inativo que praticou falta grave (mesma pena da demissão). <em>Hipóteses</em>: as mesmas da demissão (art. 132). <em>Efeito</em>: perda da aposentadoria (ou da remuneração na disponibilidade).</p>',
    regras:['Cassação: aplicada ao inativo', 'Cassação: mesma pena da demissão (art. 132)', 'Aposentadoria: perda do benefício', 'Disponibilidade: perda da remuneração', 'Iniciativa: autoridade administrativa ou judicial'],
    excecoes:['A <em>cassação</em> é <em>pós</em> aposentadoria/disponibilidade.','O <em>inativo</em> pode ser processado (mesmo após aposentado).','A <em>cassação</em> não é automática.'],
    examples:['Servidor aposentado que praticou corrupção quando ativo → cassação.'],
    pegadinchas:['<strong>Cassação</strong> = demissão para inativo.','<strong>Mesma pena</strong> da demissão.','<em>Perda</em> do benefício.'],
    exercicios: [
      { q: 'A cassação de aposentadoria equivale à demissão.', g: 'CERTO.' },
      { q: 'A cassação é automática após a aposentadoria.', g: 'ERRADO. Exige processo.' }
    ],
    sotaque: '<strong>"CASSACAO = DEMISSAO PARA INATIVO."</strong>'
  };

  M['prescricao-decadencia'] = {
    topico: 'prescricao-decadencia',
    titulo: 'Prescrição e Decadência Disciplinar',
    resumo: 'Prescrição: 5 anos (regra) para ação disciplinar. Decadência: 5 anos para instauração do PAD. Lei 14.230/21 alterou regras.',
    teoria: '<p>A <strong>prescrição disciplinar</strong> é o prazo para a Administração aplicar a penalidade. <em>Regra geral</em>: 5 anos (salvo se o fato for também crime, caso em que segue o prazo penal). A <strong>decadência</strong> é o prazo para instauração do PAD: 5 anos do conhecimento do fato (regra).</p>',
    regras:['Prescrição: 5 anos (regra)', 'Decadência: 5 anos (instaurar PAD)', 'Crime: segue prazo penal (se maior)', 'Marco inicial: conhecimento do fato (decadência)', 'Marco inicial: instauração do PAD (prescrição)'],
    excecoes:['A <em>prescrição</em> é contada da <em>instauracao</em> do PAD.','A <em>decadência</em> é do <em>conhecimento</em> do fato.','A <em>lei 14.230/21</em> alterou algumas regras.'],
    examples:['Fato em 2018, conhecido em 2019, sem PAD → decadência em 2024.','Fato em 2018, PAD em 2019 → prescreve em 2024.'],
    pegadinchas:['<strong>5 anos</strong> (regra) para ambos.','<em>Decadência</em>: conhecimento.','<em>Prescrição</em>: instauração.'],
    exercicios: [
      { q: 'A prescrição disciplinar é de 5 anos, contados da instauração do PAD.', g: 'CERTO.' },
      { q: 'A decadência é de 10 anos.', g: 'ERRADO. É de 5 anos.' }
    ],
    sotaque: '<strong>"DECADENCIA (CONHECIMENTO) + PRESCRICAO (INSTAURACAO) = 5 ANOS."</strong>'
  };

  global.MATERIAS_EXT = global.MATERIAS_EXT || {};
  global.MATERIAS_EXT.rju = M;
})(window);
