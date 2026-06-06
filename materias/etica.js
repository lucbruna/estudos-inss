/* ==========================================================
   materias/etica.js — Ética no Serviço Público (19 lições)
   ========================================================== */
(function (global) {
  'use strict';
  const M = {};

  M['etica-moral'] = {
    topico: 'etica-moral',
    titulo: 'Ética, Moral e Conduta',
    resumo: 'Ética: reflexão sobre a moral. Moral: regras de conduta. Diferença: ética é teoria, moral é prática.',
    teoria: '<p>A <strong>ética</strong> é a reflexão filosófica sobre a <em>moral</em>. A <em>moral</em> é o conjunto de regras de conduta, valores e costumes de uma sociedade. A <em>conduta</em> é o comportamento efetivo de um indivíduo.</p>',
    regras:['Ética: teoria sobre a moral', 'Moral: regras de conduta', 'Conduta: comportamento efetivo', 'Deontologia: deveres de uma profissão'],
    excecoes:['A <em>bioética</em> é o campo da ética aplicada à vida.','A <em>axiologia</em> é a teoria dos valores.'],
    exemplos:['"Ética" = pensar sobre o certo e o errado.','"Moral" = seguir as regras (não roubar, não mentir).','"Conduta" = o que a pessoa faz na prática.'],
    pegadinchas:['<strong>Ética</strong> ≠ <em>moral</em>.','A <em>moral</em> varia entre culturas.','A <em>ética</em> é universal (em regra).'],
    exercicios: [
      { q: 'A ética é a reflexão filosófica sobre a moral.', g: 'CERTO.' },
      { q: 'A moral é a teoria sobre o certo e o errado.', g: 'ERRADO. Isso é ética. A moral é a prática de seguir regras.' }
    ],
    sotaque: '<strong>"ÉTICA: TEORIA. MORAL: PRÁTICA. CONDUTA: AÇÃO."</strong>'
  };

  M['codigo-etica'] = {
    topico: 'codigo-etica',
    titulo: 'Código de Ética do Servidor (Decreto 1.171/94)',
    resumo: 'Decreto 1.171/94: código de ética do servidor público civil do Poder Executivo. Regras deontológicas.',
    teoria: '<p>O <strong>Código de Ética do Servidor Público</strong> (Decreto 1.171/1994) estabelece os deveres éticos do servidor público civil do Poder Executivo Federal. Tem como base a <em>função pública</em>, a <em>legalidade</em>, a <em>impessoalidade</em>, a <em>moralidade</em>, a <em>publicidade</em> e a <em>eficiência</em>.</p>',
    regras:['Função pública: missão de servir ao público', 'Legalidade: a lei é o limite da ação', 'Impessoalidade: tratamento isonômico', 'Moralidade: honestidade, lealdade, boa-fé', 'Publicidade: transparência', 'Eficiência: produtividade'],
    excecoes:['A <em>corregedoria</em> é o órgão responsável pela aplicação do Código.','As <em>comissões de ética</em> existem em cada órgão.'],
    exemplos:['Servidor que usa cargo para favorecimento pessoal → viola a ética.','Servidor que presta contas com clareza → observa a ética.'],
    pegadinchas:['<strong>Decreto 1.171/94</strong> é a fonte do Código.','As <em>comissões de ética</em> são vinculadas à Corregedoria.','A <em>ética</em> é independente de sanção jurídica.'],
    exercicios: [
      { q: 'O Código de Ética do Servidor Público é o Decreto 1.171/1994.', g: 'CERTO.' },
      { q: 'O Código de Ética tem natureza penal.', g: 'ERRADO. Tem natureza administrativa/deontológica.' }
    ],
    sotaque: '<strong>"DECRETO 1.171/94: LIMPE + FUNÇÃO PÚBLICA"</strong>'
  };

  M['principios-eticos'] = {
    topico: 'principios-eticos',
    titulo: 'Princípios Éticos Fundamentais',
    resumo: 'Respeito à dignidade humana, integridade, honestidade, lealdade, responsabilidade, justiça, equidade.',
    teoria: '<p>Os <strong>princípios éticos fundamentais</strong> são: <em>respeito à dignidade humana</em>, <em>integridade</em>, <em>honestidade</em>, <em>lealdade</em>, <em>responsabilidade</em>, <em>justiça</em>, <em>equidade</em>. São universais e devem orientar a conduta do servidor.</p>',
    regras:['Respeito à dignidade humana', 'Integridade', 'Honestidade', 'Lealdade', 'Responsabilidade', 'Justiça', 'Equidade'],
    excecoes:['A <em>equidade</em> é diferente de <em>igualdade</em>: igualdade é o mesmo tratamento, equidade é o tratamento diferenciado para desigualar.','A <em>responsabilidade</em> é o dever de responder pelos atos.'],
    exemplos:['Servidor que trata todos com respeito → dignidade.','Servidor que é honesto nas contas → integridade.'],
    pegadinchas:['<strong>Respeito à dignidade</strong> é o princípio <em>base</em>.','<strong>Equidade</strong> ≠ <em>igualdade</em>.','A <em>responsabilidade</em> é o dever de <em>responder</em> pelos atos.'],
    exercicios: [
      { q: 'São princípios éticos fundamentais: respeito à dignidade humana, integridade, honestidade, lealdade, responsabilidade, justiça e equidade.', g: 'CERTO.' },
      { q: 'A equidade é o mesmo que a igualdade.', g: 'ERRADO. A equidade é o tratamento diferenciado para desigualar.' }
    ],
    sotaque: '<strong>"DIGNIDADE + INTEGRIDADE + HONESTIDADE + LEALDADE + RESPONSABILIDADE + JUSTIÇA + EQUIDADE"</strong>'
  },

  M['conflito-interesses'] = {
    topico: 'conflito-interesses',
    titulo: 'Conflito de Interesses (Lei 12.813/2013)',
    resumo: 'Conflito: interesse privado influencia exercício da função. Vedações: aceitar vantagem, usar cargo, etc.',
    teoria: '<p>A <strong>Lei 12.813/2013</strong> trata do conflito de interesses no exercício de cargo ou emprego do Poder Executivo federal. Define conflito de interesses como a <em>situação gerada pelo confronto entre interesses públicos e privados</em> que possa comprometer o interesse coletivo ou influenciar o desempenho da função pública.</p>',
    regras:['Conflito: interesse privado que compromete o público', 'Vedações: aceitar vantagem, usar cargo, atuar em benefício próprio, etc.', 'Comunicação: obrigatória em caso de conflito', 'Penalidades: sanção disciplinar, demissão, etc.'],
    excecoes:['A <em>comissão de ética</em> é responsável por analisar os casos.','O <em>impedimento</em> é o <em>afastamento</em> temporário do servidor.'],
    exemplos:['Servidor que participa de licitação com empresa da qual é sócio → conflito.','Servidor que usa cargo para favorecer familiar → conflito.'],
    pegadinchas:['<strong>Conflito</strong> = confronto público-privado.','A <em>comunicação</em> é obrigatória.','A <em>CGU</em> é o órgão central.'],
    exercicios: [
      { q: 'A Lei 12.813/2013 trata do conflito de interesses no Poder Executivo federal.', g: 'CERTO.' },
      { q: 'O conflito de interesses é uma conduta criminosa.', g: 'ERRADO. É infração administrativa.' }
    ],
    sotaque: '<strong>"CONFLITO = PÚBLICO vs. PRIVADO. COMUNICAÇÃO OBRIGATÓRIA."</strong>'
  },

  M['improbidade-etica'] = {
    topico: 'improbidade-etica',
    titulo: 'Improbidade vs. Infração Ética',
    resumo: 'Improbidade: cível, dolo, sanção grave. Infração ética: administrativa, culpa ou dolo, sanção leve.',
    teoria: '<p>A <strong>improbidade administrativa</strong> (Lei 8.429/92) tem natureza <em>cível</em>, exige <em>dolo específico</em> e prevê sanções graves (perda do cargo, multa, etc.). A <strong>infração ética</strong> (Decreto 1.171/94) tem natureza <em>administrativa</em>, pode envolver <em>culpa</em> ou <em>dolo</em>, e prevê sanções leves (advertência, censura).</p>',
    regras:['Improbidade: cível, dolo, Lei 8.429/92, sanção grave', 'Infração ética: administrativa, culpa/dolo, Decreto 1.171/94, sanção leve', 'Improbidade: 3 tipos (enriquecimento, prejuízo, princípios)', 'Infração ética: deveres do Código'],
    excecoes:['A <em>improbidade</em> pode ser <em>acumulada</em> com a <em>infração ética</em>.','A <em>infração ética</em> não exige PAD (regra).'],
    exemplos:['Servidor que desvia verbas → improbidade (cível) + peculato (penal).','Servidor que atrasa para o serviço → infração ética (administrativa).'],
    pegadinchas:['<strong>Improbidade</strong> = cível.','<strong>Infração ética</strong> = administrativa.','<em>Acumulação</em> é possível.'],
    exercicios: [
      { q: 'A improbidade tem natureza cível, e a infração ética tem natureza administrativa.', g: 'CERTO.' },
      { q: 'A infração ética exige PAD.', g: 'ERRADO. Não exige, em regra.' }
    ],
    sotaque: '<strong>"IMPROBIDADE = CÍVEL. INFRAÇÃO ÉTICA = ADMINISTRATIVA."</strong>'
  },

  M['comissao-etica'] = {
    topico: 'comissao-etica',
    titulo: 'Comissões de Ética e CGU',
    resumo: 'Comissões de ética em cada órgão. CGU: órgão central. Análise de condutas éticas.',
    teoria: '<p>As <strong>comissões de ética</strong> existem em cada órgão público, com a função de apurar condutas antiéticas. A <strong>CGU</strong> (Controladoria-Geral da União) é o órgão central do sistema, coordenando as comissões.</p>',
    regras:['Comissão de ética: em cada órgão (3 membros)', 'CGU: órgão central', 'Atribuição: apurar condutas éticas, aplicar sanções', 'Sanções: advertência, censura, suspensão (até 30 dias)'],
    excecoes:['A <em>CEAF</em> (Comissão de Ética Pública) é uma comissão especial.','A <em>comissão de ética</em> é diferente da <em>comissão de PAD</em>.'],
    exemplos:['Servidor que viola o Código de Ética → Comissão de Ética aplica sanção.','CGU coordena as comissões de ética em todo o Executivo federal.'],
    pegadinchas:['<strong>CGU</strong> é o órgão central.','<strong>Comissões de ética</strong> são locais.','<em>CEAF</em> é a comissão de alto escalão.'],
    exercicios: [
      { q: 'A CGU é o órgão central do sistema de ética do Poder Executivo federal.', g: 'CERTO.' },
      { q: 'As comissões de ética são órgãos vinculados ao Ministério da Justiça.', g: 'ERRADO. São vinculadas à CGU.' }
    ],
    sotaque: '<strong>"CGU: CENTRAL. COMISSÕES: LOCAIS."</strong>'
  },

  M['condutas-vedadas'] = {
    topico: 'condutas-vedadas',
    titulo: 'Condutas Vedadas ao Servidor Público',
    resumo: 'Vedações: usar cargo para favorecimento, aceitar presentes, omitir informações, etc.',
    teoria: '<p>As <strong>condutas vedadas</strong> ao servidor público estão previstas no Código de Ética (Decreto 1.171/94) e em outras normas. São proibições éticas, com o objetivo de preservar a integridade da função pública.</p>',
    regras:['Usar cargo para favorecimento pessoal ou de terceiros', 'Aceitar presentes, brindes, hospitalidades (regra: até R$ 100, conforme órgão)', 'Omitir informações ou prestar informações falsas', 'Proceder de forma desidiosa, negligente ou discriminatória', 'Pleitear vantagens no exercício do cargo'],
    excecoes:['A <em>hospitalidade</em> pode ser aceita, conforme regras do órgão.','O <em>brinde</em> tem limite de valor (em regra, R$ 100).'],
    exemplos:['Servidor que aceita R$ 1.000 de empresa fiscalizada → vedação.','Servidor que usa carro oficial para passeio → vedação.'],
    pegadinchas:['<strong>Presente</strong>: regra geral é recusar.','<strong>Hospitalidade</strong>: pode ser aceita em alguns casos.','A <em>omissão</em> é tão grave quanto a <em>ação</em>.'],
    exercicios: [
      { q: 'São condutas vedadas ao servidor: usar cargo para favorecimento, aceitar presentes, omitir informações, proceder de forma desidiosa, pleitear vantagens.', g: 'CERTO.' },
      { q: 'O servidor pode aceitar qualquer presente, sem limites.', g: 'ERRADO. Há limites (em regra, R$ 100).' }
    ],
    sotaque: '<strong>"VEDAÇÕES: CARGO + PRESENTE + OMISSÃO + DESÍDIA + VANTAGEM"</strong>'
  },

  M['cgu-estrutura'] = {
    topico: 'cgu-estrutura',
    titulo: 'CGU — Estrutura e Atribuições',
    resumo: 'CGU: Controladoria-Geral da União. Atribuições: controle interno, auditoria, ouvidoria, ética, transparência.',
    teoria: '<p>A <strong>CGU</strong> (Controladoria-Geral da União) é o órgão central do sistema de controle interno, correição, ouvidoria, ética e transparência do Poder Executivo federal. Foi criada pela Lei 10.683/2003.</p>',
    regras:['CGU: vinculada à Presidência da República', 'Atribuições: controle interno, auditoria, correição, ouvidoria, ética, transparência', 'Atuação: preventiva, detectiva, corretiva', 'Sistema: SFC, SNA, OGU, CEC, STPC'],
    excecoes:['A <em>CGU</em> tem natureza de <em>Ministério</em> (Chefia).','A <em>Casa Civil</em> tem outras atribuições (articulação política).'],
    exemplos:['CGU fiscaliza aplicação de verbas federais.','CGU recebe denúncias em sua Ouvidoria.'],
    pegadinchas:['<strong>CGU</strong> é o órgão central do controle interno.','<strong>TCU</strong> é o controle externo.','A <em>CGU</em> tem <em>5</em> sistemas.'],
    exercicios: [
      { q: 'A CGU é o órgão central do sistema de controle interno do Poder Executivo federal.', g: 'CERTO.' },
      { q: 'A CGU é o controle externo.', g: 'ERRADO. O controle externo é do TCU.' }
    ],
    sotaque: '<strong>"CGU: CONTROLE INTERNO. TCU: EXTERNO."</strong>'
  },

  M['lei-improbidade'] = {
    topico: 'lei-improbidade',
    titulo: 'Lei de Improbidade (Lei 8.429/92, com Lei 14.230/21)',
    resumo: 'Improbidade: enriquecimento ilícito, prejuízo ao erário, violação de princípios. Sanções: perda do cargo, multa, inelegibilidade.',
    teoria: '<p>A <strong>Lei 8.429/92</strong> (alterada pela <em>Lei 14.230/21</em>) define <em>improbidade administrativa</em>. São <strong>3 tipos</strong>: <em>enriquecimento ilícito</em> (art. 9º), <em>prejuízo ao erário</em> (art. 10) e <em>violação de princípios</em> (art. 11). As <em>sanções</em>: <em>perda do cargo</em>, <em>multa civil</em>, <em>inelegibilidade</em>, <em>proibição de contratar</em>.</p>',
    regras:['3 tipos: enriquecimento, prejuízo, princípios', 'Enriquecimento: art. 9º (dolo específico)', 'Prejuízo: art. 10 (dolo ou culpa)', 'Princípios: art. 11 (dolo)', 'Sanções: perda do cargo, multa, inelegibilidade, proibição de contratar', 'Elemento subjetivo: dolo (regra); culpa apenas no art. 10'],
    excecoes:['A <em>Lei 14.230/21</em> retirou a possibilidade de punição por <em>culpa</em> nos arts. 9º e 11.','A <em>sanção de inelegibilidade</em> pode ser de até <em>14 anos</em>.','A <em>prescrição</em> é de 8 anos (regra).'],
    exemplos:['Servidor que desvia verba pública → enriquecimento ilícito + prejuízo ao erário.','Servidor que nomeia parente sem concurso → violação de princípios.'],
    pegadinchas:['<strong>Dolo</strong> é regra em improbidade.','<strong>Culpa</strong> só no art. 10.','<em>Violação de princípios</em> é a menos grave.','<em>Enriquecimento ilícito</em> é a mais grave.'],
    exercicios: [
      { q: 'São tipos de improbidade: enriquecimento ilícito, prejuízo ao erário e violação de princípios.', g: 'CERTO.' },
      { q: 'A culpa é punível em todos os tipos de improbidade.', g: 'ERRADO. A culpa só é punível no art. 10 (prejuízo ao erário).' }
    ],
    sotaque: '<strong>"3 TIPOS: ENRIQUECIMENTO + PREJUÍZO + PRINCÍPIOS. DOLO: REGRA. CULPA: SÓ ART. 10."</strong>'
  };

  M['abuso-autoridade'] = {
    topico: 'abuso-autoridade',
    titulo: 'Abuso de Autoridade (Lei 13.869/2019)',
    resumo: 'Lei 13.869/2019. Sujeitos: agente público, militar, particular. Tipos: ações e omissões. Sanções: penais, administrativas, cíveis.',
    teoria: '<p>A <strong>Lei 13.869/2019</strong> define os <em>crimes de abuso de autoridade</em>. Sujeitos: <em>agente público</em>, <em>militar</em>, <em>gestor de empresas estatais</em>, <em>particular</em> (em alguns casos). Os tipos estão nos arts. 27 a 38.</p>',
    regras:['Sujeitos: agente público, militar, gestor estatal, particular', 'Conduta: ação ou omissão', 'Elemento subjetivo: dolo específico (finalidade)', 'Sanções: penais (detenção ou reclusão), administrativas, cíveis', 'Sujeito passivo: Administração Pública, particular'],
    excecoes:['A <em>finalidade específica</em> é exigida: <em>prejudicar</em> ou <em>favorecer</em> alguém.','A <em>retroatividade</em> é <em>vedada</em> (não retroage).'],
    exemplos:['Juiz que profere sentença com finalidade de prejudicar réu → abuso.','Delegado que obtém prova com tortura → abuso.'],
    pegadinchas:['<strong>Dolo específico</strong> é exigido.','<strong>Finalidade</strong>: prejudicar ou favorecer.','A <em>boa-fé</em> exclui o crime.','A <em>omissão</em> também é punível.'],
    exercicios: [
      { q: 'A Lei 13.869/2019 define os crimes de abuso de autoridade.', g: 'CERTO.' },
      { q: 'O abuso de autoridade é punível por culpa.', g: 'ERRADO. Exige dolo específico.' }
    ],
    sotaque: '<strong>"DOLO ESPECÍFICO: FINALIDADE DE PREJUDICAR OU FAVORECER."</strong>'
  };

  M['corrupcao-ativa-passiva'] = {
    topico: 'corrupcao-ativa-passiva',
    titulo: 'Corrupção Ativa e Passiva (CP, arts. 333 e 317)',
    resumo: 'Corrupção ativa: oferecer/aceitar vantagem a funcionário. Passiva: solicitar/receber. Penas: reclusão + multa.',
    teoria: '<p>A <strong>corrupção ativa</strong> (CP, art. 333) é o ato de <em>oferecer, prometer ou dar</em> vantagem indevida a funcionário público. A <strong>corrupção passiva</strong> (CP, art. 317) é o ato de <em>solicitar ou receber</em> vantagem indevida. Ambos são crimes contra a Administração Pública.</p>',
    regras:['Ativa: oferecer, prometer, dar (particulares e funcionários)', 'Passiva: solicitar, receber (funcionário público)', 'Pena: reclusão, 2 a 12 anos, mais multa', 'Sujeito passivo: Administração Pública', 'Vantagem: indevida (não devida)'],
    excecoes:['A <em>corrupção ativa</em> pode ser praticada por <em>qualquer pessoa</em>.','A <em>passiva</em> é exclusiva de <em>funcionário público</em>.','A <em>prevaricação</em> (art. 319) é crime autônomo.'],
    exemplos:['Empresário que paga propina a fiscal → corrupção ativa.','Fiscal que aceita propina → corrupção passiva.'],
    pegadinchas:['<strong>Ativa</strong>: quem oferece.','<strong>Passiva</strong>: quem recebe.','<em>Vantagem indevida</em> = não devida.','<em>Função pública</em> é o núcleo do tipo.'],
    exercicios: [
      { q: 'A corrupção ativa é praticada por quem oferece a vantagem; a passiva, por quem recebe.', g: 'CERTO.' },
      { q: 'A corrupção é punível apenas com pena de detenção.', g: 'ERRADO. A pena é de reclusão.' }
    ],
    sotaque: '<strong>"ATIVA: OFERECER. PASSIVA: RECEBER. AMBOS: RECLUSÃO."</strong>'
  };

  M['lei-acesso-informacao'] = {
    topico: 'lei-acesso-informacao',
    titulo: 'Lei de Acesso à Informação (Lei 12.527/2011)',
    resumo: 'LAI: publicidade como regra, sigilo como exceção. Prazos: 20 dias (resposta), prorrogação por 10. Recursos hierárquicos.',
    teoria: '<p>A <strong>Lei 12.527/2011</strong> (LAI) regula o acesso a informações públicas. <em>Regra</em>: <em>publicidade</em>. <em>Exceção</em>: <em>sigilo</em> (temporário, conforme a classificação: <em>reservada</em> 5 anos, <em>secreta</em> 15 anos, <em>ultrassecreta</em> 25 anos). <em>Prazos</em>: resposta em <em>20 dias</em>, prorrogável por mais 10.</p>',
    regras:['Regra: publicidade', 'Exceção: sigilo (reservada 5, secreta 15, ultrassecreta 25)', 'Prazo de resposta: 20 dias (prorrogação de 10)', 'Recursos: 1ª instância (autoridade superior), 2ª instância (autoridade máxima), 3ª instância (CGU)', 'Pedido: qualquer pessoa, sem necessidade de motivação'],
    excecoes:['O <em>sigilo</em> é temporário, não eterno.','<em>Documentos pessoais</em> (privacidade) são restritos.','A <em>classificação</em> é de competência da autoridade.'],
    exemplos:['Cidadão pede dados de gastos do órgão → LAI garante acesso.','Cidadão pede dados pessoais de terceiro → LAI nega (privacidade).'],
    pegadinchas:['<strong>Publicidade</strong> é a regra.','<strong>Sigilo</strong> é exceção, temporário.','<em>Prazo</em>: 20 dias + 10.','<em>Recurso</em>: 3 instâncias (autoridade, máxima, CGU).'],
    exercicios: [
      { q: 'A LAI estabelece a publicidade como regra e o sigilo como exceção.', g: 'CERTO.' },
      { q: 'O prazo para resposta ao pedido de acesso é de 30 dias.', g: 'ERRADO. É de 20 dias, prorrogável por mais 10.' }
    ],
    sotaque: '<strong>"PUBLICIDADE: REGRA. SIGILO: EXCEÇÃO. PRAZO: 20+10."</strong>'
  };

  M['transparencia-ativa'] = {
    topico: 'transparencia-ativa',
    titulo: 'Transparência Ativa e Passiva',
    resumo: 'Ativa: órgãos publicam informações proativamente. Passiva: respondem a pedidos. Portal da Transparência.',
    teoria: '<p>A <strong>transparência</strong> tem duas dimensões: <em>ativa</em> (publicação proativa de informações pelos órgãos) e <em>passiva</em> (resposta a pedidos de informação). O <em>Portal da Transparência</em> (transparencia.gov.br) é a principal ferramenta de transparência ativa do Executivo federal.</p>',
    regras:['Transparência ativa: publicação proativa (receitas, despesas, contratos, servidores)', 'Transparência passiva: resposta a pedidos (LAI)', 'Portal da Transparência: transparencia.gov.br', 'Conteúdo mínimo: receitas, despesas, estrutura, contratos, concursos', 'Atualização: periódica (regra: mensal)'],
    excecoes:['A <em>transparência ativa</em> independe de pedido.','A <em>transparência passiva</em> depende de pedido.','<em>Dados pessoais</em> são restritos.'],
    exemplos:['Portal publica salários dos servidores → transparência ativa.','Cidadão pede cópia de contrato → transparência passiva.'],
    pegadinchas:['<strong>Ativa</strong>: proativa.','<strong>Passiva</strong>: reativa (pedido).','O <em>Portal</em> é da CGU.','Os <em>dados abertos</em> estão em dados.gov.br.'],
    exercicios: [
      { q: 'A transparência ativa é a publicação proativa de informações pelos órgãos.', g: 'CERTO.' },
      { q: 'A transparência passiva independe de pedido.', g: 'ERRADO. Depende de pedido (LAI).' }
    ],
    sotaque: '<strong>"ATIVA: PROATIVA. PASSIVA: REATIVA. PORTAL: TRANSPARENCIA.GOV.BR"</strong>'
  };

  M['declaracao-bens'] = {
    topico: 'declaracao-bens',
    titulo: 'Declaração de Bens e Rendimentos',
    resumo: 'Obrigatória para servidores públicos. Prazo: até 30 dias da posse (e anualmente). Modelo: DBP (Declaração de Bens e Posse).',
    teoria: '<p>A <strong>declaração de bens e rendimentos</strong> é obrigatória para servidores públicos. Prazo: até <em>30 dias</em> da posse (e anualmente, no IR). Modelo: <em>DBP</em> (Declaração de Bens e Posse). É instrumento de transparência e de combate ao enriquecimento ilícito.</p>',
    regras:['Obrigatória: para todo servidor público', 'Prazo: 30 dias da posse (e anualmente no IR)', 'Modelo: DBP', 'Conteúdo: bens imóveis, móveis, investimentos, dívidas', 'Penalidade: omissão → sanção disciplinar'],
    excecoes:['A <em>declaração de IR</em> substitui, em parte, a DBP.','A <em>declaração de bens</em> é sigilosa (acesso restrito).'],
    exemplos:['Servidor que omite bem da declaração → pode configurar enriquecimento ilícito.','Servidor que declara todos os bens → observa a norma.'],
    pegadinchas:['<strong>30 dias</strong> da posse.','<strong>DBP</strong>: Declaração de Bens e Posse.','A <em>omissão</em> é punível.','O <em>acesso</em> é restrito.'],
    exercicios: [
      { q: 'A declaração de bens e rendimentos deve ser feita em até 30 dias da posse.', g: 'CERTO.' },
      { q: 'A declaração de bens é pública.', g: 'ERRADO. É sigilosa (acesso restrito).' }
    ],
    sotaque: '<strong>"DBP: 30 DIAS DA POSE. ANUALMENTE: IR."</strong>'
  };

  M['codigo-conduta-alto-escalao'] = {
    topico: 'codigo-conduta-alto-escalao',
    titulo: 'Código de Conduta da Alta Administração Federal',
    resumo: 'Aplica-se a ministros, secretários, presidentes de estatais, etc. Princípios: honestidade, decoro, transparência. Vedações: presentes, viagens.',
    teoria: '<p>O <strong>Código de Conduta da Alta Administração Federal</strong> aplica-se a <em>ministros</em>, <em>secretários</em>, <em>presidentes de estatais</em>, <em>dirigentes máximos</em> de órgãos da Administração Federal. Estabelece padrões éticos elevados, com vedações específicas para presentes, hospitalidades, viagens, etc.</p>',
    regras:['Sujeitos: ministros, secretários, presidentes de estatais, dirigentes', 'Princípios: honestidade, decoro, transparência, integridade', 'Vedações: presentes acima de R$ 100, hospitalidades incompatíveis, viagens não funcionais', 'Sanções: administrativas (advertência, demissão), políticas (impeachment, etc.)'],
    excecoes:['A <em>CEAF</em> (Comissão de Ética Pública) é responsável por aplicar o Código.','Os <em>agentes políticos</em> têm regime próprio (Lei do impeachment, CRFB).'],
    examples:['Ministro que aceita presente de R$ 5.000 → violação do Código.','Presidente de estatal que usa cargo para favorecimento → violação.'],
    pegadinchas:['<strong>CEAF</strong> aplica o Código.','<strong>Limite</strong> de presente: em regra, R$ 100.','<em>Agentes políticos</em> têm regime próprio.','A <em>vacância</em> do cargo não extingue a punibilidade.'],
    exercicios: [
      { q: 'O Código de Conduta aplica-se a ministros, secretários, presidentes de estatais.', g: 'CERTO.' },
      { q: 'O limite de presentes para a alta administração é de R$ 1.000.', g: 'ERRADO. O limite é, em regra, R$ 100 (pode variar conforme órgão).' }
    ],
    sotaque: '<strong>"ALTA ADMINISTRAÇÃO: CEAF + DECORO + TRANSPARÊNCIA."</strong>'
  };

  M['etica-setor-publico'] = {
    topico: 'etica-setor-publico',
    titulo: 'Ética no Setor Público: Função, Missão, Valores',
    resumo: 'Função pública: missão de servir ao público. Valores: legalidade, impessoalidade, moralidade, publicidade, eficiência (LIMPE).',
    teoria: '<p>A <strong>ética no setor público</strong> é regida pelos <em>princípios constitucionais</em> da Administração Pública: <em>Legalidade</em>, <em>Impessoalidade</em>, <em>Moralidade</em>, <em>Publicidade</em> e <em>Eficiência</em> (LIMPE). Esses valores devem orientar toda a conduta do servidor.</p>',
    regras:['Legalidade: a lei é o limite da ação', 'Impessoalidade: tratamento isonômico, sem favorecimento', 'Moralidade: honestidade, lealdade, boa-fé', 'Publicidade: transparência (LAI)', 'Eficiência: produtividade, qualidade'],
    excecoes:['<em>Moralidade</em> é diferente de <em>legalidade</em>: conduta pode ser legal e imoral.','A <em>eficiência</em> foi acrescida pela EC 19/98 (reforma administrativa).'],
    examples:['Servidor que usa cargo para favorecimento → viola impessoalidade.','Servidor que não cumpre metas → viola eficiência.'],
    pegadinchas:['<strong>LIMPE</strong>: Legalidade, Impessoalidade, Moralidade, Publicidade, Eficiência.','A <em>moralidade</em> é o aspecto ético.','A <em>legalidade</em> é o aspecto jurídico.'],
    exercicios: [
      { q: 'São princípios constitucionais da Administração Pública: legalidade, impessoalidade, moralidade, publicidade e eficiência.', g: 'CERTO.' },
      { q: 'A moralidade e a legalidade são a mesma coisa.', g: 'ERRADO. A moralidade é ética; a legalidade é jurídica.' }
    ],
    sotaque: '<strong>"LIMPE: LEGALIDADE + IMPESSOALIDADE + MORALIDADE + PUBLICIDADE + EFICIÊNCIA"</strong>'
  };

  M['etica-profissional'] = {
    topico: 'etica-profissional',
    titulo: 'Ética Profissional e Deontologia',
    resumo: 'Ética profissional: normas de conduta da profissão. Deontologia: ciência dos deveres. Códigos: OAB, CRM, CREA, etc.',
    teoria: '<p>A <strong>ética profissional</strong> é o conjunto de <em>normas de conduta</em> de uma profissão. A <em>deontologia</em> é a <em>ciência dos deveres</em>. Cada profissão tem seu <em>código de ética</em>: <em>OAB</em> (advogados), <em>CRM</em> (médicos), <em>CREA</em> (engenheiros), <em>CFP</em> (psicólogos), entre outros.</p>',
    regras:['Ética profissional: normas da profissão', 'Deontologia: ciência dos deveres', 'Códigos: OAB, CRM, CREA, CFP, CFC, etc.', 'Fiscalização: conselhos profissionais', 'Sanções: advertência, multa, suspensão, cassação'],
    excecoes:['A <em>ética profissional</em> é mais específica que a <em>ética geral</em>.','O <em>código de ética</em> é elaborado pelo conselho.','A <em>fiscalização</em> é do conselho.'],
    examples:['Advogado que viola o sigilo profissional → processo ético na OAB.','Médico que negligencia → processo ético no CRM.'],
    pegadinchas:['<strong>Deontologia</strong> = ciência dos deveres.','<strong>Conselho</strong>: fiscaliza.','<strong>Código</strong>: elaborado pelo conselho.','A <em>ética profissional</em> complementa a ética geral.'],
    exercicios: [
      { q: 'A deontologia é a ciência dos deveres profissionais.', g: 'CERTO.' },
      { q: 'O código de ética é elaborado pelo Ministério Público.', g: 'ERRADO. É elaborado pelo conselho profissional.' }
    ],
    sotaque: '<strong>"DEONTOLOGIA = CIÊNCIA DOS DEVERES. CONSELHO: FISCALIZA."</strong>'
  };

  M['gestao-etica'] = {
    topico: 'gestao-etica',
    titulo: 'Gestão da Ética no Setor Público',
    resumo: 'Comissões de ética, CGU, CEAF, programas de integridade. Compliance público. Lei Anticorrupção (12.846/13).',
    teoria: '<p>A <strong>gestão da ética</strong> envolve <em>comissões de ética</em> (locais), <em>CGU</em> (órgão central), <em>CEAF</em> (comissão de ética da alta administração), <em>programas de integridade</em> (<em>compliance</em> público) e a <em>Lei Anticorrupção</em> (Lei 12.846/13).</p>',
    regras:['Comissões de ética: locais, em cada órgão', 'CGU: órgão central', 'CEAF: alta administração', 'Compliance: programas de integridade', 'Lei Anticorrupção: 12.846/13 (responsabilidade objetiva)'],
    excecoes:['A <em>Lei Anticorrupção</em> responsabiliza a <em>pessoa jurídica</em> (objetiva).','O <em>compliance</em> é privado e público.','A <em>CEAF</em> tem composição diferenciada.'],
    examples:['Empresa que paga propina a servidor → Lei Anticorrupção responsabiliza a empresa.','Órgão que adota programa de integridade → reduz riscos.'],
    pegadinchas:['<strong>CGU</strong>: central.','<strong>CEAF</strong>: alta administração.','<strong>Lei Anticorrupção</strong>: 12.846/13.','<em>Compliance</em> é o programa de integridade.'],
    exercicios: [
      { q: 'A gestão da ética envolve comissões de ética, CGU, CEAF, programas de integridade e a Lei Anticorrupção.', g: 'CERTO.' },
      { q: 'A Lei Anticorrupção responsabiliza a pessoa física.', g: 'ERRADO. Responsabiliza a pessoa jurídica (e também física).' }
    ],
    sotaque: '<strong>"GESTÃO ÉTICA: COMISSÕES + CGU + CEAF + COMPLIANCE + LEI ANTICORRUPÇÃO"</strong>'
  };

  M['assedio-moral-sexual'] = {
    topico: 'assedio-moral-sexual',
    titulo: 'Assédio Moral e Sexual no Serviço Público',
    resumo: 'Assédio moral: exposição humilhante, repetida. Assédio sexual: chantagem ou constrangimento sexual. Lei 14.540/23 (assédio sexual em qualquer lugar).',
    teoria: '<p>O <strong>assédio moral</strong> é a exposição humilhante, repetida e prolongada de um trabalhador a situações constrangedoras, no ambiente de trabalho. O <strong>assédio sexual</strong> é o constrangimento com o objetivo de obter favorecimento sexual. A <em>Lei 14.540/23</em> tipificou o assédio sexual em qualquer lugar (não só no trabalho).</p>',
    regras:['Assédio moral: conduta repetida, humilhante, prolongada', 'Assédio sexual: constrangimento para favorecimento sexual', 'Lei 14.540/23: assédio sexual em qualquer lugar (pena: 1 a 2 anos)', 'Sujeitos: servidor, chefe, colega, terceiro', 'Sanções: administrativas (advertência, demissão), penais, cíveis'],
    excecoes:['A <em>uma única conduta</em> pode configurar assédio (depende do caso).','O <em>assédio sexual</em> pode ocorrer fora do trabalho.','A <em>denúncia</em> é protegida.'],
    examples:['Chefe que humilha subordinado repetidamente → assédio moral.','Chefe que exige favores sexuais em troca de promoção → assédio sexual.'],
    pegadinchas:['<strong>Moral</strong>: conduta repetida, humilhante.','<strong>Sexual</strong>: constrangimento sexual.','<em>Lei 14.540/23</em> ampliou o assédio sexual.','A <em>denúncia</em> não pode gerar retaliação.'],
    exercicios: [
      { q: 'O assédio moral é a exposição humilhante, repetida e prolongada no ambiente de trabalho.', g: 'CERTO.' },
      { q: 'O assédio sexual só pode ocorrer no ambiente de trabalho.', g: 'ERRADO. A Lei 14.540/23 ampliou para qualquer lugar.' }
    ],
    sotaque: '<strong>"MORAL: REPETIDO + HUMILHANTE. SEXUAL: CONSTRANGIMENTO SEXUAL. LEI 14.540/23."</strong>'
  };

  global.MATERIAS_EXT = global.MATERIAS_EXT || {};
  global.MATERIAS_EXT.etica = M;
})(window);
