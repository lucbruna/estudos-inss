/* ==========================================================
   materias/legislacao.js — Legislação (LGPD, ECA, Idoso, Maria da Penha, Improbidade, etc.) — 42 lições
   ========================================================== */
(function (global) {
  'use strict';
  const M = {};

  M['lgpd-introducao'] = {
    topico: 'lgpd-introducao',
    titulo: 'LGPD — Lei 13.709/2018: Introdução',
    resumo: 'Dispõe sobre o tratamento de dados pessoais, inclusive em meios digitais, com o objetivo de proteger os direitos fundamentais de liberdade e privacidade.',
    teoria: '<p>A <strong>Lei Geral de Proteção de Dados</strong> (Lei 13.709/2018) entrou em vigor em setembro de 2020 e tem como objetivo proteger os direitos fundamentais de <em>liberdade</em> e <em>privacidade</em>. É inspirada no GDPR europeu. A <strong>ANPD</strong> (Autoridade Nacional de Proteção de Dados) é a entidade reguladora.</p>',
    regras:['Fundamento: art. 5º, X e LXXIX, CF/88', 'Aplicabilidade: pessoa física ou jurídica, de direito público ou privado', 'Dado pessoal: qualquer informação que identifique pessoa', 'Dado sensível: origem racial, convicção religiosa, opinião política, dado de saúde, vida sexual, etc.'],
    excecoes:['A LGPD <em>não</em> se aplica a dados não identificados (anonimizados).', 'A LGPD <em>não</em> se aplica a dados de pessoas falecidas (apenas indiretamente).'],
    exemplos:['Nome, CPF, RG, endereço, e-mail → dados pessoais.', 'Dados de saúde (prontuário), orientação sexual, religião → dados sensíveis.'],
    pegadinchas:['<strong>Tratamento</strong> = qualquer operação com dados (coleta, armazenamento, compartilhamento, etc.).', 'A LGPD é <em>lei ordinária</em> (não complementar).', 'A <em>ANPD</em> é vinculada à Casa Civil da Presidência.'],
    exercicios: [
      { q: 'A LGPD tem como objetivo proteger os direitos fundamentais de liberdade e privacidade.', g: 'CERTO. Art. 1º, LGPD.' },
      { q: 'A LGPD é lei complementar.', g: 'ERRADO. É lei ordinária (Lei 13.709/2018).' }
    ],
    sotaque: '<strong>"LGPD = DIREITO À PRIVACIDADE. ANPD = REGULADORA"</strong>'
  };

  M['lgpd-dados-pessoais'] = {
    topico: 'lgpd-dados-pessoais',
    titulo: 'LGPD — Dados Pessoais, Sensíveis e Anonimizados',
    resumo: 'Dado pessoal é qualquer informação que identifique pessoa. Sensível é dado sobre origem racial, religião, opinião política, saúde, vida sexual, dado biométrico/genético.',
    teoria: '<p>Os <strong>dados pessoais</strong> são definidos pela LGPD (art. 5º, I) como qualquer informação que identifique pessoa natural. Já os <strong>dados sensíveis</strong> (art. 5º, II) são categorias específicas: origem racial, convicção religiosa, opinião política, dado de saúde, vida sexual, dado biométrico, dado genético.</p>',
    regras:['Dado pessoal: identificado ou identificável', 'Dado sensível: categorias especiais (raça, religião, política, saúde, sexual, biométrico, genético)', 'Dado anonimizado: não permite reidentificação, não é dado pessoal', 'Dado pseudoanonimizado: permite reidentificação, é dado pessoal'],
    excecoes:['Dados <em>anonimizados</em> não são dados pessoais.', 'Dados <em>pseudoanonimizados</em> continuam sendo dados pessoais (a LGPD alcança).'],
    exemplos:['CPF, RG, nome completo → dados pessoais.', 'Etnia, opção religiosa, prontuário médico, DNA → dados sensíveis.'],
    pegadinchas:['<strong>Anonimizado</strong> ≠ <em>pseudoanonimizado</em>. Anônimo não permite reidentificação.', 'A <em>LGPD</em> é aplicada a dado anonimizado <em>se</em> o processo de anonimização puder ser revertido.', 'A <em>criptografia</em> é técnica de segurança, não de anonimização.'],
    exercicios: [
      { q: 'O dado de saúde do segurado é dado sensível segundo a LGPD.', g: 'CERTO. Art. 5º, II, LGPD.' },
      { q: 'O dado anonimizado, que não permite reidentificação, é dado pessoal pela LGPD.', g: 'ERRADO. Dado anonimizado não é dado pessoal.' }
    ],
    sotaque: '<strong>"DADO PESSOAL = IDENTIFICA. SENSÍVEL = ESPECIAL. ANÔNIMO = NÃO PESSOAL"</strong>'
  };

  M['lgpd-principios'] = {
    topico: 'lgpd-principios',
    titulo: 'LGPD — Princípios do Tratamento (art. 6º)',
    resumo: 'Finalidade, adequação, necessidade, livre acesso, qualidade dos dados, transparência, segurança, prevenção, não discriminação, responsabilização.',
    teoria: '<p>Os <strong>princípios</strong> do tratamento de dados pessoais estão no art. 6º da LGPD. São cláusulas gerais que devem nortear toda operação com dados pessoais, com base na <em>boa-fé</em> e na <em>finalidade</em> do tratamento.</p>',
    regras:['Finalidade: propósitos legítimos, específicos e explícitos', 'Adequação: compatibilidade com a finalidade', 'Necessidade: minimização do tratamento', 'Livre acesso: garantia de consulta ao titular', 'Qualidade dos dados: exatos, claros, atualizados', 'Transparência: informações claras e acessíveis', 'Segurança: medidas técnicas e administrativas', 'Prevenção: adoção de medidas para evitar danos', 'Não discriminação: vedação de tratamento discriminatório', 'Responsabilização: demonstração de adoção de medidas'],
    excecoes:['A <em>finalidade</em> pode ser alterada, desde que mantida a compatibilidade (art. 6º, §1º).', 'A <em>necessidade</em> é avaliada caso a caso.'],
    exemplos:['Loja coleta CPF para emissão de nota fiscal → finalidade específica (nota fiscal).', 'Empresa não pode usar CPF para marketing sem consentimento (mudança de finalidade).'],
    pegadinchas:['<strong>Necessidade</strong> é o mesmo que <em>minimização</em>: coletar só o necessário.', 'A <em>transparência</em> é cláusula de <em>informação</em>, não só <em>publicidade</em>.', 'A <em>responsabilização</em> impõe ao agente demonstrar conformidade.'],
    exercicios: [
      { q: 'São princípios do tratamento de dados pessoais, segundo a LGPD: finalidade, adequação, necessidade, livre acesso, qualidade, transparência, segurança, prevenção, não discriminação e responsabilização.', g: 'CERTO. Art. 6º, LGPD.' },
      { q: 'A LGPD admite o tratamento de dados para qualquer finalidade, independentemente da compatibilidade com a coleta original.', g: 'ERRADO. Art. 6º, §1º, LGPD exige compatibilidade.' }
    ],
    sotaque: '<strong>"10 PRINCÍPIOS: FA-NE-LA-Q-T-S-P-ND-R"</strong>'
  };

  M['lgpd-base-legal'] = {
    topico: 'lgpd-base-legal',
    titulo: 'LGPD — Bases Legais do Tratamento (art. 7º)',
    resumo: '10 bases legais: consentimento, cumprimento de obrigação legal, execução de políticas públicas, tutela da saúde, interesse público, legítimo interesse, etc.',
    teoria: '<p>As <strong>bases legais</strong> para o tratamento de dados pessoais estão no art. 7º (dados comuns) e no art. 11 (dados sensíveis). A escolha da base é <em>obrigatória</em> e deve ser documentada pelo controlador. O <em>consentimento</em> é apenas uma das bases.</p>',
    regras:['Consentimento do titular', 'Cumprimento de obrigação legal', 'Execução de políticas públicas', 'Tutela da saúde (profissional de saúde)', 'Interesse público', 'Legítimo interesse', 'Execução de contrato', 'Exercício regular de direitos', 'Proteção do crédito', 'Interesse legítimo do controlador (em casos específicos)'],
    excecoes:['A <em>base legal</em> deve ser escolhida <em>antes</em> do tratamento.', 'O <em>consentimento</em> é dispensado em várias hipóteses (saúde, políticas públicas, etc.).'],
    exemplos:['INSS usa dado de saúde para perícia → art. 11, II, "g" (tutela da saúde por política pública).', 'Empresa usa CPF para cobrança → art. 7º, X (proteção do crédito).'],
    pegadinchas:['<strong>10 bases legais</strong> no art. 7º e <strong>5 bases</strong> para dados sensíveis (art. 11).', 'A <em>execução de contrato</em> é diferente de <em>consentimento</em>.', 'O <em>interesse público</em> tem requisito: <strong>exercício regular de direito</strong>.'],
    exercicios: [
      { q: 'São bases legais para tratamento de dados pessoais, segundo a LGPD, dez hipóteses taxativas.', g: 'CERTO. Art. 7º, LGPD.' },
      { q: 'O tratamento de dados sensíveis dispensa consentimento em todas as hipóteses.', g: 'ERRADO. Dispensa em hipóteses específicas (art. 11, II).' }
    ],
    sotaque: '<strong>"10 BASES. 5 PARA SENSÍVEIS"</strong>'
  };

  M['lgpd-direitos'] = {
    topico: 'lgpd-direitos',
    titulo: 'LGPD — Direitos do Titular (art. 18)',
    resumo: 'Confirmação, acesso, correção, anonimização, portabilidade, eliminação, informação sobre compartilhamento, consentimento, revisão.',
    teoria: '<p>Os <strong>direitos do titular</strong> (art. 18, LGPD) são instrumentos de exercício da autonomia informacional. O controlador deve atender ao pedido do titular em prazo razoável. O descumprimento gera sanção administrativa.</p>',
    regras:['Confirmação da existência de tratamento', 'Acesso aos dados', 'Correção de dados incompletos ou incorretos', 'Anonimização, bloqueio ou eliminação de dados desnecessários', 'Portabilidade dos dados', 'Eliminação dos dados tratados com consentimento', 'Informação sobre entidades públicas e privadas com as quais houve compartilhamento', 'Informação sobre a possibilidade de não fornecer consentimento', 'Revogação do consentimento'],
    excecoes:['O direito de <em>eliminação</em> é limitado (dados tratados com outras bases não são eliminados a pedido).', 'A <em>portabilidade</em> é direito do titular, mas o controlador pode cobrar taxa (em alguns casos).'],
    exemplos:['Pedro pede acesso aos seus dados em uma empresa → tem 15 dias para responder (regulamentação ANPD).', 'Maria pede correção de endereço → tem obrigação de corrigir.'],
    pegadinchas:['<strong>Eliminação</strong> ≠ <em>esquecimento</em>. Eliminação é o ato técnico.', 'A <em>revogação</em> do consentimento tem efeito <em>ex-nunc</em> (a partir da revogação).', 'A <em>portabilidade</em> só vale para dados tratados com consentimento ou contrato.'],
    exercicios: [
      { q: 'São direitos do titular: confirmação, acesso, correção, anonimização, portabilidade, eliminação, informação sobre compartilhamento, revogação do consentimento.', g: 'CERTO. Art. 18, LGPD.' },
      { q: 'A revogação do consentimento tem efeito retroativo (ex-tunc).', g: 'ERRADO. Tem efeito ex-nunc (daqui para frente).' }
    ],
    sotaque: '<strong>"CON-ACES-COR-ANO-POR-ELI-INF-CON-REV"</strong>'
  };

  M['lgpd-controlador'] = {
    topico: 'lgpd-controlador',
    titulo: 'LGPD — Controlador, Operador e Encarregado (DPO)',
    resumo: 'Controlador decide o tratamento. Operador realiza em nome do controlador. Encarregado (DPO) é o canal entre controlador, ANPD e titulares.',
    teoria: '<p>Os <strong>agentes</strong> do tratamento (controlador, operador, encarregado) têm responsabilidades distintas. O controlador é quem decide o tratamento; o operador é quem realiza em nome do controlador; o encarregado (DPO) é o canal de comunicação com a ANPD e com os titulares.</p>',
    regras:['Controlador: pessoa física/jurídica que decide o tratamento', 'Operador: pessoa que realiza tratamento em nome do controlador', 'Encarregado (DPO): canal entre controlador, ANPD e titulares', 'Encarregado: obrigatório para todas as empresas (Resolução CD/ANPD 4/2023)'],
    excecoes:['O <em>controlador</em> pode ser mais de um (controlador conjunto, art. 39).', 'O <em>DPO</em> pode ser pessoa física ou jurídica, interna ou externa.'],
    exemplos:['INSS é controlador dos dados de segurados. Empresa contratada para processar benefícios é operadora.', 'Hospital que terceiriza o armazenamento de prontuários: hospital é controlador, empresa é operadora.'],
    pegadinchas:['<strong>Controlador conjunto</strong> é regulado pelo art. 39 (responsabilidade solidária).', 'O <em>DPO</em> tem <em>autonomia</em> e <em>proteção</em> (não pode ser dispensado por exercer a função).', 'A <em>operação</em> pode incluir suboperadores (autorizados).'],
    exercicios: [
      { q: 'O controlador é a pessoa física ou jurídica que decide o tratamento de dados pessoais.', g: 'CERTO. Art. 5º, VI, LGPD.' },
      { q: 'O encarregado (DPO) é dispensável em pequenas empresas.', g: 'ERRADO. É obrigatório (Resolução CD/ANPD 4/2023).' }
    ],
    sotaque: '<strong>"CONTROLADOR DECIDE. OPERADOR FAZ. DPO É O CANAL"</strong>'
  };

  M['lgpd-anpd'] = {
    topico: 'lgpd-anpd',
    titulo: 'LGPD — ANPD e Fiscalização',
    resumo: 'A ANPD (Autoridade Nacional de Proteção de Dados) é a entidade reguladora, com poder de fiscalização, sanção e regulamentação.',
    teoria: '<p>A <strong>ANPD</strong> é a entidade federal de natureza reguladora, vinculada à Casa Civil da Presidência. Tem <em>autarquia especial</em>, com patrimônio próprio. Foi criada pela Lei 13.848/2019 (estrutura) e regulamentada por diversos atos.</p>',
    regras:['Vinculação: Casa Civil da Presidência (Lei 13.848/2019)', 'Composição: Conselho Diretor, Conselho Nacional de Proteção de Dados', 'Competência: fiscalizar, sancionar, regulamentar', 'Penalidades: advertência, multa, bloqueio, eliminação, etc.'],
    excecoes:['A <em>ANPD</em> tem poder de polícia, mas a aplicação da multa é graduada (princípio da razoabilidade).', 'A <em>publicidade</em> da sanção é fundamental.'],
    exemplos:['ANPD aplica multa de 2% do faturamento a empresa que vazou dados de clientes.', 'ANPD instaura processo administrativo de fiscalização contra banco.'],
    pegadinchas:['A <em>ANPD</em> é <strong>autarquia especial</strong>, vinculada à Casa Civil.', 'O <em>CD/ANPD</em> é o Conselho Diretor (5 membros).', 'A <em>sanção</em> pode chegar a 2% do faturamento, com piso de R$ 50 milhões.'],
    exercicios: [
      { q: 'A ANPD é o órgão federal responsável por fiscalizar o cumprimento da LGPD.', g: 'CERTO.' },
      { q: 'A ANPD está vinculada ao Ministério da Justiça.', g: 'ERRADO. Está vinculada à Casa Civil da Presidência.' }
    ],
    sotaque: '<strong>"ANPD = AUTARQUIA ESPECIAL. CASA CIVIL"</strong>'
  };

  M['lgpd-sancoes'] = {
    topico: 'lgpd-sancoes',
    titulo: 'LGPD — Sanções Administrativas (art. 52)',
    resumo: 'Advertência, multa, bloqueio, eliminação dos dados, suspensão, etc. Multa: até 2% do faturamento, com piso de R$ 50 milhões.',
    teoria: '<p>As <strong>sanções administrativas</strong> (art. 52, LGPD) são aplicadas pela ANPD após processo administrativo. Podem ser cumuladas e graduadas conforme a gravidade. A multa é limitada a 2% do faturamento, com piso de R$ 50 milhões (por infração).</p>',
    regras:['Advertência', 'Multa (até 2% do faturamento, piso de R$ 50 milhões)', 'Bloqueio dos dados', 'Eliminação dos dados', 'Suspensão parcial do funcionamento do banco de dados', 'Proibição parcial ou total de atividades de tratamento', 'Publicização da infração'],
    excecoes:['A <em>publicização</em> pode ser tão grave quanto a multa (dano reputacional).', 'A <em>suspensão</em> é aplicada em último caso.'],
    exemplos:['Empresa de telecom é multada em R$ 50 milhões por vazamento de dados.', 'Hospital é advertido por não comunicar incidente à ANPD.'],
    pegadinchas:['<strong>Multa</strong> tem piso de R$ 50 milhões, mas o teto é 2% do faturamento.', 'A <em>publicação</em> da sanção pode ocorrer em até 30 dias.', 'A <em>sanção</em> pode ser parcelada (regulamentação).'],
    exercicios: [
      { q: 'A multa pela infração à LGPD pode chegar a 2% do faturamento da empresa.', g: 'CERTO. Art. 52, §1º, LGPD.' },
      { q: 'A sanção da ANPD é, em regra, executada sem processo administrativo.', g: 'ERRADO. É precedida de processo administrativo com contraditório e ampla defesa.' }
    ],
    sotaque: '<strong>"MULTA = 2% FATURAMENTO, PISO R$ 50 MILHÕES"</strong>'
  };

  M['lgpd-comunicacao'] = {
    topico: 'lgpd-comunicacao',
    titulo: 'LGPD — Comunicação de Incidente (art. 48)',
    resumo: 'Controlador deve comunicar à ANPD e aos titulares em caso de incidente de segurança que possa causar risco ou dano relevante.',
    teoria: '<p>Em caso de <strong>incidente de segurança</strong> (vazamento, perda, alteração, etc.) que possa causar <em>risco</em> ou <em>dano relevante</em> aos titulares, o controlador deve comunicar à ANPD e aos titulares afetados (art. 48, LGPD). A comunicação deve ser a mais rápida possível.</p>',
    regras:['Comunicar à ANPD em prazo razoável', 'Comunicar aos titulares afetados', 'Medida: descrever o tipo de incidente, dados afetados, medidas tomadas, riscos', 'Documentação interna do incidente'],
    excecoes:['<em>Risco irrelevante</em> dispensa comunicação aos titulares.', 'A <em>ANPD</em> pode dispensar a comunicação (em casos específicos).'],
    exemplos:['Banco perde HD com 1 milhão de CPFs → comunica ANPD e titulares em 3 dias.', 'E-commerce sofre ataque ransomware → comunica ANPD.'],
    pegadinchas:['<strong>Comunicação</strong> ≠ <em>publicação</em>. Comunicação é individual (titulares) e à ANPD.', 'A <em>medida</em> é o que a organização está fazendo para remediar.', 'A <em>notificação à ANPD</em> é diferente da notificação ao titular.'],
    exercicios: [
      { q: 'O controlador deve comunicar à ANPD e aos titulares em caso de incidente de segurança que possa causar risco ou dano relevante.', g: 'CERTO. Art. 48, LGPD.' },
      { q: 'A comunicação de incidente à ANPD é dispensada mesmo em caso de risco relevante.', g: 'ERRADO. É obrigatória em risco ou dano relevante.' }
    ],
    sotaque: '<strong>"INCIDENTE = COMUNICAR ANPD + TITULARES"</strong>'
  };

  M['eca-introducao'] = {
    topico: 'eca-introducao',
    titulo: 'ECA — Lei 8.069/1990: Introdução e Princípios',
    resumo: 'Estatuto da Criança e do Adolescente. Crianças (< 12 anos) e adolescentes (12-18 anos). Princípio da proteção integral.',
    teoria: '<p>O <strong>ECA</strong> (Lei 8.069/1990) é o Estatuto da Criança e do Adolescente, fundado no princípio da <em>proteção integral</em> (art. 1º) e na <em>prioridade absoluta</em> (art. 227, CF/88). Aplica-se a crianças (até 12 anos) e adolescentes (12 a 18 anos).</p>',
    regras:['Criança: até 12 anos incompletos', 'Adolescente: 12 a 18 anos', 'Princípio da proteção integral', 'Princípio do melhor interesse', 'Princípio da prioridade absoluta', 'Direitos fundamentais: vida, saúde, alimentação, educação, lazer, etc.'],
    excecoes:['O <em>adolescente</em> de 16 anos pode ser emancipado (por casamento, emprego público, etc.).', 'O <em>adolescente</em> em conflito com a lei é sujeito de direitos, não objeto de intervenção.'],
    exemplos:['João, 8 anos → criança.', 'Maria, 15 anos → adolescente.', 'Pedro, 17 anos, 11 meses → adolescente.'],
    pegadinchas:['<strong>Proteção integral</strong> substitui a doutrina da <em>menor irregular</em>.', 'O <em>adolescente</em> tem <em>capacidade relativa</em> (CC art. 4º, II).', 'O <em>ato infracional</em> é regido por lei especial (ECA arts. 103-128).'],
    exercicios: [
      { q: 'O ECA aplica-se a crianças (até 12 anos) e adolescentes (12 a 18 anos), com base no princípio da proteção integral.', g: 'CERTO.' },
      { q: 'A criança tem capacidade civil plena.', g: 'ERRADO. Tem capacidade relativa, com representação pelos pais.' }
    ],
    sotaque: '<strong>"CRIANÇA < 12. ADOLESCENTE 12-18. PROTEÇÃO INTEGRAL"</strong>'
  };

  M['eca-direitos-fundamentais'] = {
    topico: 'eca-direitos-fundamentais',
    titulo: 'ECA — Direitos Fundamentais (arts. 7º-85)',
    resumo: 'Direitos à vida, saúde, alimentação, educação, esporte, lazer, profissionalização, cultura, dignidade, respeito, liberdade, convivência familiar.',
    teoria: '<p>Os <strong>direitos fundamentais</strong> da criança e do adolescente estão nos arts. 7º a 85 do ECA. São divididos em 4 blocos: direito à vida e saúde (7º-14), direito à liberdade, respeito e dignidade (15º-18), direito à convivência familiar e comunitária (19º-52), direito à educação, cultura, esporte e lazer (53º-73), direito à profissionalização e proteção no trabalho (69º-85).</p>',
    regras:['Direito à vida e saúde (art. 7-14)', 'Direito à liberdade, respeito e dignidade (art. 15-18)', 'Direito à convivência familiar e comunitária (art. 19-52)', 'Direito à educação, cultura, esporte e lazer (art. 53-73)'],
    excecoes:['O <em>direito à liberdade</em> inclui opinião, expressão, crença e culto.', 'A <em>convivência familiar</em> é a regra, e a institucionalização é exceção.'],
    exemplos:['Maria, 10 anos, foi internada em abrigo → tem direito à convivência familiar (art. 19).', 'João, 14 anos, trabalha → tem direito à profissionalização e proteção.'],
    pegadinchas:['<strong>Convivência familiar</strong> inclui o <em>convívio</em> com a família de origem.', 'O <em>abandono</em> é a falta de <em>poder familiar</em> ou <em>guarda</em>.', 'A <em>adoção</em> é regida pelos arts. 39-52 do ECA + Lei 12.010/2009.'],
    exercicios: [
      { q: 'São direitos fundamentais da criança e do adolescente: vida, saúde, alimentação, educação, lazer, profissionalização, cultura, dignidade, respeito, liberdade e convivência familiar.', g: 'CERTO. Art. 4º, ECA.' },
      { q: 'O ECA permite o trabalho a qualquer idade.', g: 'ERRADO. Proíbe o trabalho infantil (art. 67, ECA).' }
    ],
    sotaque: '<strong>"VIDA + SAÚDE + ALIMENTAÇÃO + EDUCAÇÃO + LAZER + ..."</strong>'
  };

  M['eca-familia'] = {
    topico: 'eca-familia',
    titulo: 'ECA — Família Substituta (Adoção, Guarda, Tutela)',
    resumo: 'Adoção: para maiores de 18 anos, com estágio de convivência. Guarda: para quem não tem poder familiar. Tutela: para menores sob risco.',
    teoria: '<p>A <strong>família substituta</strong> é o instrumento de proteção da criança/adolescente quando a família natural não é apta. Compreende <em>adoção</em>, <em>guarda</em> e <em>tutela</em>. A adoção é a mais estável e tem requisitos específicos (arts. 39-52).</p>',
    regras:['Adoção: para maiores de 18 anos (Lei 8.069/90 + Lei 12.010/2009)', 'Adoção internacional: excepcional, com preferência por brasileiros', 'Guarda: quem não tem poder familiar (art. 33)', 'Tutela: para menores em situação de risco'],
    excecoes:['A <em>adoção</em> é <em>irrevogável</em> (art. 47, ECA).', 'O <em>estágio de convivência</em> é obrigatório.'],
    exemplos:['Casal sem filhos adota criança de 8 anos → adotantes devem ter 18+ e diferença de 16 anos.', 'Tia assume a guarda da sobrinha → guarda é estável, mas pode ser revogada.'],
    pegadinchas:['<strong>Adoção</strong> é <em>irrevogável</em>, mas pode haver <em>ação revisional</em> (em casos específicos).', 'A <em>adoção</em> internacional <em>não</em> pode ser feita por <em>homens solteiros</em> (regra antiga, hoje m).', 'A <em>guarda</em> é a <em>família substituta</em> mais comum, mas não extingue o poder familiar.'],
    exercicios: [
      { q: 'A adoção é ato irrevogável.', g: 'CERTO. Art. 47, ECA.' },
      { q: 'A guarda substitui o poder familiar.', g: 'ERRADO. A guarda não substitui o poder familiar; este permanece com os pais.' }
    ],
    sotaque: '<strong>"ADOÇÃO: MAIOR 18 + ESTÁGIO. GUARDA: NÃO EXIGE IRREVOGABILIDADE"</strong>'
  };

  M['eca-ato-infracional'] = {
    topico: 'eca-ato-infracional',
    titulo: 'ECA — Ato Infracional (arts. 103-128)',
    resumo: 'Ato infracional é a conduta descrita como crime ou contravenção penal praticada por adolescente. Medidas socioeducativas.',
    teoria: '<p>O <strong>ato infracional</strong> (art. 103, ECA) é a conduta descrita como crime ou contravenção penal praticada por <em>adolescente</em> (12 a 18 anos). Para <em>criança</em> (< 12 anos), é prevista <em>medida de proteção</em>, não medida socioeducativa.</p>',
    regras:['Adolescente (12-18): medidas socioeducativas', 'Criança (< 12): medidas de proteção', 'Tipos: advertência, obrigação de reparar o dano, prestação de serviços, liberdade assistida, inserção em regime de semiliberdade, internação', 'Ação: processo do Juizado da Infância e Juventude'],
    excecoes:['A <em>internação</em> é medida extrema, para atos graves ou descumprimento reiterado (art. 122, ECA).', 'A <em>medida socioeducativa</em> tem prazo máximo de 3 anos (regra geral).'],
    exemplos:['Adolescente de 16 anos furtou celular → pode receber medida socioeducativa de prestação de serviços à comunidade.', 'Criança de 10 anos em situação de risco → abrigo (medida de proteção).'],
    pegadinchas:['<strong>Ato infracional</strong> ≠ <em>crime</em>. É conduta descrita como crime, mas sob a ótica do ECA.', 'A <em>internação</em> tem prazo máximo de 3 anos (regra geral).', 'A <em>imputabilidade</em> penal (18 anos) é regra geral; o ECA admite <em>responsabilidade</em> a partir dos 12.'],
    exercicios: [
      { q: 'Ato infracional é a conduta descrita como crime ou contravenção penal praticada por adolescente.', g: 'CERTO. Art. 103, ECA.' },
      { q: 'A criança menor de 12 anos responde por ato infracional.', g: 'ERRADO. Recebe medida de proteção.' }
    ],
    sotaque: '<strong>"12-18: SOCIOEDUCATIVA. <12: PROTEÇÃO"</strong>'
  };

  M['eca-conselhos'] = {
    topico: 'eca-conselhos',
    titulo: 'ECA — Conselhos Tutelares e CT',
    resumo: 'Conselho Tutelar: órgão permanente, autônomo, não jurisdicional, encarregado de zelar pelos direitos da criança e do adolescente.',
    teoria: '<p>O <strong>Conselho Tutelar</strong> (art. 131-138, ECA) é órgão <em>permanente</em>, <em>autônomo</em> e <em>não jurisdicional</em>, encarregado de zelar pelo cumprimento dos direitos da criança e do adolescente. É composto por 5 membros eleitos pela comunidade local.</p>',
    regras:['Composição: 5 membros titulares + 5 suplentes', 'Mandato: 4 anos (permitida uma recondução)', 'Atribuições: zelar pelo cumprimento dos direitos, aplicar medidas de proteção, requisitar serviços', 'Funcionamento: em horário de expediente, com membros com dedicação exclusiva em alguns casos'],
    excecoes:['O <em>Conselho Tutelar</em> não é <em>judicial</em>, mas suas decisões podem ser revistas pelo Judiciário.', 'O <em>conselheiro tutelar</em> tem imunidade funcional (não pode ser preso em razão das decisões).'],
    exemplos:['Conselho Tutelar aplica medida de proteção a criança em situação de rua.', 'Conselho Tutelar aciona o Ministério Público para investigar caso de abuso.'],
    pegadinchas:['<strong>Conselho Tutelar</strong> é autônomo, mas <em>não</em> jurisdicional (não julga, aplica medidas).', 'O <em>conselheiro</em> tem imunidade funcional, mas <em>não</em> impunidade.', 'A <em>eleição</em> é fiscalizada pelo Ministério Público.'],
    exercicios: [
      { q: 'O Conselho Tutelar é órgão permanente, autônomo e não jurisdicional.', g: 'CERTO. Art. 131, ECA.' },
      { q: 'O Conselho Tutelar é composto por 7 membros titulares.', g: 'ERRADO. São 5 membros (art. 132, ECA).' }
    ],
    sotaque: '<strong>"5 MEMBROS, 4 ANOS, AUTÔNOMO, NÃO JURISDICIONAL"</strong>'
  };

  M['estatuto-idoso'] = {
    topico: 'estatuto-idoso',
    titulo: 'Estatuto do Idoso — Lei 10.741/2003',
    resumo: 'Pessoas com 60 anos ou mais. Prioridade em tudo. Transporte público gratuito, isenção de IPTU, etc.',
    teoria: '<p>O <strong>Estatuto do Idoso</strong> (Lei 10.741/2003) regulamenta o art. 230 da CF/88. Aplica-se a pessoas com 60 anos ou mais, com ênfase em <em>prioridade absoluta</em> e proteção integral.</p>',
    regras:['Idoso: 60 anos ou mais', 'Prioridade: em todos os âmbitos (saúde, justiça, transporte, etc.)', 'Transporte público gratuito (ou desconto, conforme município)', 'Isenção de IPTU (para imóveis de até 1 imóvel, com renda de até 3 SM, com área construída < 70m², conforme lei local)'],
    excecoes:['O <em>idoso</em> em situação de risco tem prioridade absoluta.', 'O <em>idoso</em> com 80 anos tem preferência sobre os demais.'],
    exemplos:['Maria, 75 anos, recebe prioridade em consulta médica.', 'João, 80 anos, tem isenção de IPTU (se a lei local permitir).'],
    pegadinchas:['<strong>Prioridade</strong> não é exclusividade. O idoso tem preferência, mas não exclusão de outros.', 'O <em>transporte</em> público é <strong>gratuito</strong> para > 65 anos (regra geral); alguns estados reduzem para 60.', 'A <em>isenção de IPTU</em> é regulamentada por lei municipal.'],
    exercicios: [
      { q: 'O Estatuto do Idoso aplica-se a pessoas com 60 anos ou mais.', g: 'CERTO. Art. 1º.' },
      { q: 'O idoso tem prioridade absoluta em todos os âmbitos, conforme o Estatuto.', g: 'CERTO. Art. 3º, §1º, I.' }
    ],
    sotaque: '<strong>"≥ 60 ANOS = PRIORIDADE ABSOLUTA"</strong>'
  };

  M['maria-da-penha'] = {
    topico: 'maria-da-penha',
    titulo: 'Lei Maria da Penha — Lei 11.340/2006',
    resumo: 'Violência doméstica contra a mulher. Medidas protetivas, Juizado de Violência Doméstica, medidas de urgência.',
    teoria: '<p>A <strong>Lei Maria da Penha</strong> (Lei 11.340/2006) criou mecanismos para coibir a violência doméstica e familiar contra a mulher. Estabelece <em>medidas de proteção</em>, juizados especializados, medidas de urgência, entre outros.</p>',
    regras:['Âmbito: violência doméstica e familiar contra mulher', 'Medida protetiva: pode ser de urgência (afastamento do agressor) ou de proteção (distância, suspensão de armas)', 'Juizado: Vara de Violência Doméstica e Familiar', 'Atendimento: por equipe multidisciplinar (Lei Maria da Penha)'],
    excecoes:['A <em>violência moral</em> também é abarcada (STJ, 2014).', 'A <em>violência patrimonial</em> pode gerar restituição.'],
    exemplos:['Maria denuncia o marido por agressão → juiz determina medidas protetivas (afastamento).', 'Mulher em situação de risco → abrigo (Lei 11.340/2006).'],
    pegadinchas:['<strong>Violência doméstica</strong> pode ser <em>física</em>, <em>psicológica</em>, <em>sexual</em>, <em>patrimonial</em> e <em>moral</em>.', 'A <em>medida protetiva</em> pode ser <em>de urgência</em> (24h) ou <em>de proteção</em>.', 'O <em>Ministério Público</em> pode ser autor de ação civil pública.'],
    exercicios: [
      { q: 'A Lei Maria da Penha aplica-se a casos de violência doméstica e familiar contra a mulher.', g: 'CERTO.' },
      { q: 'A Lei Maria da Penha aplica-se também a relações homoafetivas femininas.', g: 'CERTO (STJ, 2018).' }
    ],
    sotaque: '<strong>"LEI MARIA DA PENHA = VDFM"</strong>'
  };

  M['improbidade'] = {
    topico: 'improbidade',
    titulo: 'Improbidade Administrativa — Lei 8.429/92 (e Lei 14.230/21)',
    resumo: 'Enriquecimento ilícito, prejuízo ao erário, violação de princípios. Lei 14.230/21 trouxe dolo específico e exige ato doloso.',
    teoria: '<p>A <strong>Lei de Improbidade Administrativa</strong> (Lei 8.429/1992, alterada pela Lei 14.230/2021) prevê sanções para atos de improbidade. As <em>tipos</em> são: enriquecimento ilícito, prejuízo ao erário e violação de princípios.</p>',
    regras:['Enriquecimento ilícito: auferir vantagem patrimonial indevida', 'Prejuízo ao erário: dilapidação, desvio, perda, malversação', 'Violação de princípios: violação aos deveres de honestidade, imparcialidade, legalidade, lealdade (Lei 14.230/2021)', 'Dolo específico: exigido para todos os tipos (Lei 14.230/2021)'],
    excecoes:['A <em>culpa</em> (sem dolo) não configura improbidade.', 'A <em>boa-fé</em> é causa excludente de ilicitude.'],
    exemplos:['Prefeito desvia verbas para conta pessoal → improbidade por prejuízo ao erário.', 'Servidor usa carro oficial para passeio → improbidade por violação de princípios.'],
    pegadinchas:['<strong>Improbidade</strong> tem natureza <em>cível</em>, não penal.', 'A <em>Lei 14.230/2021</em> exigiu <strong>dolo específico</strong> (não basta dolo genérico).', 'A <em>prescrição</em> é de 4 anos (a partir da ciência do ato).'],
    exercicios: [
      { q: 'A improbidade administrativa exige dolo específico, após a Lei 14.230/2021.', g: 'CERTO.' },
      { q: 'A improbidade pode ser aplicada a agentes públicos em geral.', g: 'CERTO. Aplica-se a agentes públicos (com definição na lei) e a particulares.' }
    ],
    sotaque: '<strong>"IMPROBIDADE: DOLO + ATO + SANÇÃO"</strong>'
  };

  M['abuso-autoridade'] = {
    topico: 'abuso-autoridade',
    titulo: 'Lei de Abuso de Autoridade — Lei 13.869/2019',
    resumo: 'Substitui a Lei 4.898/65. Tipifica ações e omissões de agentes públicos. Exige dolo e finalidade específica.',
    teoria: '<p>A <strong>Lei 13.869/2019</strong> substituiu a Lei 4.898/1965. Tipifica <em>ações</em> e <em>omissões</em> de agentes públicos que, com dolo e finalidade específica, atentem contra a administração pública, a liberdade de manifestação, a inviolabilidade do domicílio, etc.</p>',
    regras:['Agente público: quem exerce cargo, emprego ou função pública', 'Elemento subjetivo: dolo + finalidade específica', 'Tipos: atentado à inviolabilidade da vida, à liberdade de expressão, à inviolabilidade do domicílio, à inviolabilidade de correspondência, à administração da justiça, à administração pública', 'Penas: detenção ou reclusão (1 a 4 anos, regra geral)'],
    excecoes:['A <em>culpa</em> não configura abuso de autoridade (exige dolo).', 'A <em>manifestação de pensamento</em> é livre, mas não pode ser abusiva.'],
    exemplos:['Juiz que prende réu sem fundamentação → abuso de autoridade.', 'Policial que usa força desproporcional → abuso.'],
    pegadinchas:['<strong>Abuso de autoridade</strong> tem natureza <em>penal</em>, diferente de <em>improbidade</em> (cível).', 'A <em>lei 13.869/2019</em> revogou a Lei 4.898/65.', 'A <em>finalidade específica</em> é elemento subjetivo do tipo.'],
    exercicios: [
      { q: 'A Lei 13.869/2019 tipifica o abuso de autoridade com exigência de dolo.', g: 'CERTO.' },
      { q: 'A Lei 13.869/2019 revogou a Lei 4.898/1965.', g: 'CERTO.' }
    ],
    sotaque: '<strong>"ABUSO = AÇÃO OU OMISSÃO + DOLO + FINALIDADE"</strong>'
  };

  M['tortura'] = {
    topico: 'tortura',
    titulo: 'Lei de Tortura — Lei 9.455/1997',
    resumo: 'Constranger alguém com emprego de violência ou grave ameaça, causando sofrimento físico ou mental. Pena: 2 a 8 anos.',
    teoria: '<p>A <strong>Lei 9.455/1997</strong> define o crime de tortura. São 5 tipos penais: tortura para obter informação, declaração ou confissão (I), tortura para aplicar castigo pessoal ou medida de caráter preventivo (II), tortura por discriminação (III), tortura com fim de submeter a tratamento desumano ou degradante (IV), tortura por motivo de relevante valor social (V).</p>',
    regras:['Tipos: art. 1º, I, II, III, IV, V', 'Penas: 2 a 8 anos (regra)', 'Agravantes: se resultar em lesão grave, morte, ou contra criança/idoso, etc.', 'Inafiançável e insuscetível de graça ou anistia (CF, art. 5º, XLIV)'],
    excecoes:['A <em>tortura</em> é inafiançável e imprescritível (regra constitucional).', 'O <em>agente</em> pode ser civil ou público (incluindo agentes prisionais, policiais, etc.).'],
    exemplos:['Policial tortura preso para obter confissão → tortura do tipo I.', 'Médico submete paciente a tratamento desumano → tortura do tipo IV.'],
    pegadinchas:['<strong>Tortura</strong> é inafiançável e insuscetível de graça ou anistia (CF, art. 5º, XLIV).', 'A <em>pena</em> é de 2 a 8 anos, com agravante (até 16 anos) se resultar em morte.', 'A <em>imprescritibilidade</em> não é literal, mas a lei considera crime grave.'],
    exercicios: [
      { q: 'A tortura é crime inafiançável e insuscetível de graça ou anistia, conforme a CF.', g: 'CERTO.' },
      { q: 'A pena para o crime de tortura é de 1 a 4 anos.', g: 'ERRADO. É de 2 a 8 anos (art. 1º).' }
    ],
    sotaque: '<strong>"TORTURA: 2-8 ANOS. INAFIANÇÁVEL. IMPRESCRITÍVEL"</strong>'
  };

  M['drogas'] = {
    topico: 'drogas',
    titulo: 'Lei de Drogas — Lei 11.343/2006',
    resumo: 'Tráfico (5-15 anos), uso (advertência + medidas). Causa de aumento de pena: tráfico internacional, escolar, etc.',
    teoria: '<p>A <strong>Lei 11.343/2006</strong> é a nova Lei de Drogas. Tipifica o <em>tráfico</em> (art. 28) e o <em>uso pessoal</em> (art. 28). Distinção fundamental: <strong>tráfico</strong> é inafiançável, com pena de 5 a 15 anos; <strong>uso</strong> tem sanção administrativa (advertência, prestação de serviços, medida educativa).</p>',
    regras:['Tráfico: art. 28, pena 5-15 anos (regra)', 'Uso: art. 28, sanção administrativa', 'Causas de aumento: tráfico internacional, em zona escolar, com criança/adolescente, em transporte público, etc.', 'Colaboração premiada: redução de pena para delação'],
    excecoes:['O <em>traficante</em> pode ter redução de 1/6 a 2/3 se colaborar (art. 41).', 'O <em>usuário</em> não tem pena privativa de liberdade, mas tem sanções administrativas.'],
    exemplos:['João, com 10 kg de cocaína, é preso em flagrante → tráfico (5-15 anos).', 'Maria, com pequena quantidade para uso → sanção administrativa (não é presa).'],
    pegadinchas:['<strong>Tráfico</strong> é inafiançável.', 'O <em>usu&aacute;rio</em> não tem prisão em flagrante (regra).', 'A <em>colaboração</em> é regra de redução, não obrigatoriedade.'],
    exercicios: [
      { q: 'O crime de tráfico de drogas tem pena de 5 a 15 anos.', g: 'CERTO. Art. 33, caput, Lei 11.343/2006.' },
      { q: 'O uso pessoal de drogas é crime, com pena de detenção.', g: 'ERRADO. É infração administrativa (advertência, prestação de serviços, medida educativa).' }
    ],
    sotaque: '<strong>"TRÁFICO: 5-15 ANOS. USO: SANÇÃO ADMINISTRATIVA"</strong>'
  };

  M['tributos-federal'] = {
    topico: 'tributos-federal',
    titulo: 'Tributos Federais (CTN + CF)',
    resumo: 'Impostos (IR, IPI, II, IE, IOF, ITR, IGF, CIDE, CSLL), taxas e contribuições (COFINS, PIS, contribuição para o INSS).',
    teoria: '<p>Os <strong>tributos federais</strong> estão previstos na CF/88 (arts. 145-162) e em leis específicas. São <em>impostos</em>, <em>taxas</em>, <em>contribuições de melhoria</em>, <em>contribuições especiais</em> e <em>empréstimos compulsórios</em>.</p>',
    regras:['Impostos: IR, IPI, II, IE, IOF, ITR, IGF, CIDE, CSLL', 'Taxas: serviço público ou poder de polícia', 'Contribuições: sociais (COFINS, PIS, INSS), de intervenção (CIDE), corporativas (OAB, CREA)', 'Princípio da legalidade: art. 150, I, CF'],
    excecoes:['O <em>Imposto sobre Grandes Fortunas</em> (IGF) é previsto na CF, mas não regulamentado (não é cobrado).', 'A <em>CSLL</em> é contribuição social sobre o lucro, mas tem natureza de imposto (CTN).'],
    exemplos:['IR: 7,5% a 27,5% (pessoa física).', 'IPI: 0% a 30% (industrializado).', 'COFINS: 7,6% sobre o faturamento.', 'CIDE-Combustíveis: contribuição de intervenção no domínio econômico.'],
    pegadinchas:['<strong>Imposto</strong> ≠ <em>taxa</em>. Imposto é <strong>vinculado a uma situação independente</strong>, taxa é <em>vinculada a uma atividade estatal específica</em>.', 'A <em>CIDE-Combustíveis</em> é <strong>contribuição</strong>, não imposto (mas é regulada por LC).', 'A <em>CSLL</em> tem <strong>natureza de imposto</strong>, mas é contribuição social.'],
    exercicios: [
      { q: 'São tributos federais: IR, IPI, II, IE, IOF, ITR, IGF, CIDE, CSLL, COFINS, PIS e taxas.', g: 'CERTO.' },
      { q: 'O IGF é cobrado normalmente no Brasil.', g: 'ERRADO. É previsto na CF, mas não regulamentado.' }
    ],
    sotaque: '<strong>"IR, IPI, II, IE, IOF, ITR, IGF, CIDE, CSLL"</strong>'
  };

  M['principios-tributarios'] = {
    topico: 'principios-tributarios',
    titulo: 'Princípios Tributários (CTN + CF)',
    resumo: 'Legalidade, anterioridade, irretroatividade, igualdade, capacidade contributiva, vedação ao confisco, não diferenciação, livre circulação, etc.',
    teoria: '<p>Os <strong>princípios tributários</strong> estão no art. 150 da CF/88 (limitações constitucionais) e no CTN. São cláusulas pétreas que protegem o contribuinte.</p>',
    regras:['Legalidade (art. 150, I)', 'Anterioridade nonagesimal (art. 150, III, "c")', 'Irretroatividade (art. 150, III, "a")', 'Igualdade (art. 150, II)', 'Vedação ao confisco (art. 150, IV)', 'Não diferenciação (art. 150, V)', 'Livre circulação (art. 150, V, "a")', 'Capacidade contributiva (art. 145, §1º)'],
    excecoes:['A <em>anterioridade</em> nonagesimal é de 90 dias (regra).','A <em>anterioridade</em> simples é do exercício anterior.','A <em>legalidade</em> tributária é <em>estrita</em> (não cabe analogia, salvo em benefício do contribuinte).'],
    exemplos:['ICMS novo: só pode ser cobrado após 90 dias da publicação da lei (anterioridade nonagesimal).','IR: cobra-se no ano-calendário, com ajuste no ano seguinte.'],
    pegadinchas:['<strong>Legalidade</strong> tributária é mais rígida que a <em>penal</em>.','A <em>anterioridade</em> nonagesimal <em>não</em> se aplica a II, IE, IPI, IOF, IGF e CIDE-Combustíveis (exceções).','A <em>anterioridade</em> simples <em>não</em> se aplica a II, IE, IPI, IOF, IGF (mesmas exceções).'],
    exercicios: [
      { q: 'São princípios tributários constitucionais: legalidade, anterioridade, irretroatividade, igualdade, vedação ao confisco, capacidade contributiva.', g: 'CERTO.' },
      { q: 'A anterioridade nonagesimal aplica-se a todos os tributos.', g: 'ERRADO. Há exceções (II, IE, IPI, IOF, IGF, CIDE-Combustíveis).' }
    ],
    sotaque: '<strong>"LEGALIDADE + ANTERIORIDADE + IRRETROATIVIDADE + IGUALDADE + VEDAÇÃO AO CONFISCO"</strong>'
  };

  M['imunidades'] = {
    topico: 'imunidades',
    titulo: 'Imunidades Tributárias (CF, art. 150, VI)',
    resumo: 'Imunidades: templos, partidos, entidades de educação/assistência, livros/jornais, fonogramas, exportação, etc.',
    teoria: '<p>As <strong>imunidades tributárias</strong> (art. 150, VI, CF) são limitações constitucionais ao poder de tributar. Diferem das <em>isenções</em> (que são legais). A CF prevê 4 tipos: a) templos, b) partidos, c) entidades de educação/assistência, d) livros/jornais/fonogramas, e) exportações.</p>',
    regras:['a) Templos de qualquer culto', 'b) Partidos políticos, fundações, entidades sindicais', 'c) Entidades de educação/assistência social sem fins lucrativos', 'd) Livros, jornais, periódicos, fonogramas (e papel para impressão)', 'e) Exportações (LEI COMPLEMENTAR, art. 23)'],
    excecoes:['A <em>imunidade</em> dos templos é ampla (não cobrança de IPTU, ITBI, etc.).', 'A <em>imunidade</em> de partidos é para IPTU e ISS (STF, 2018).'],
    exemplos:['Igreja (templo) é imune a IPTU.','Partido é imune a IPTU e ISS.','Livros são imunes a ICMS, IPI, II, IE (livros em papel).'],
    pegadinchas:['<strong>Imunidade</strong> ≠ <em>isenção</em>. Imunidade é constitucional; isenção é legal.','A <em>imunidade</em> dos templos <em>não</em> alcança taxas (regra).','A <em>imunidade</em> dos livros é do <em>produto</em>, não da operação (STF).'],
    exercicios: [
      { q: 'A imunidade dos templos abrange a totalidade dos tributos, inclusive taxas.', g: 'ERRADO. Não abrange taxas, salvo as cobradas em razão do exercício regular do poder de polícia.' },
      { q: 'Livros, jornais e fonogramas gozam de imunidade tributária.', g: 'CERTO. Art. 150, VI, "d", CF.' }
    ],
    sotaque: '<strong>"5 IMUNIDADES: a, b, c, d, e"</strong>'
  };

  M['ctn-principios'] = {
    topico: 'ctn-principios',
    titulo: 'CTN — Princípios e Regras Gerais',
    resumo: 'Lei tributária é complementar (matéria reservada). CTN é lei complementar. Conceito de tributo, fato gerador, base de cálculo.',
    teoria: '<p>O <strong>CTN</strong> (Lei 5.172/1966) é o Código Tributário Nacional, lei complementar, e contém princípios e regras gerais do direito tributário. Conceitos-chave: <em>tributo</em>, <em>fato gerador</em>, <em>base de cálculo</em>, <em>alíquota</em>, <em>contribuinte</em>, <em>responsável</em>.</p>',
    regras:['Tributo: prestação pecuniária, compulsória, sem caráter sancionatório', 'Fato gerador: situação que faz nascer a obrigação', 'Base de cálculo: grandeza sobre a qual se aplica a alíquota', 'Alíquota: percentual ou valor fixo', 'Sujeito ativo: pessoa que tem o direito de cobrar', 'Sujeito passivo: pessoa obrigada ao pagamento'],
    excecoes:['A <em>taxa</em> tem fato gerador específico (serviço público ou poder de polícia).', 'O <em>imposto</em> tem fato gerador independente da atividade estatal.'],
    exemplos:['IRPF: fato gerador = aquisição de renda; base = renda bruta; alíquota = 7,5% a 27,5%.', 'ICMS: fato gerador = circulação de mercadoria; base = valor da operação; alíquota = 17% a 25% (regra geral 18%).'],
    pegadinchas:['<strong>CTN</strong> é lei complementar, mas é de 1966, antes da CF/88 (alguns artigos foram recepcionados como lei complementar).','O <em>fato gerador</em> é a <em>situação</em>, não a <em>circulação</em> (essa é a hipótese de incidência).','A <em>alíquota</em> é o percentual, mas pode ser fixada em valor (alíquota específica).'],
    exercicios: [
      { q: 'O CTN é o Código Tributário Nacional, com status de lei complementar.', g: 'CERTO.' },
      { q: 'O fato gerador do ICMS é a saída da mercadoria.', g: 'ERRADO. É a <em>circulação de mercadoria</em>, que pode incluir a saída, mas não se confunde com ela.' }
    ],
    sotaque: '<strong>"CTN = TRIBUTO + FATO GERADOR + BASE + ALÍQUOTA"</strong>'
  };

  M['lrf-introducao'] = {
    topico: 'lrf-introducao',
    titulo: 'LRF — Lei de Responsabilidade Fiscal (LC 101/2000)',
    resumo: 'Planejamento, controle, transparência, responsabilidade. Limites: pessoal, dívida, operações de crédito, restos a pagar.',
    teoria: '<p>A <strong>LRF</strong> (Lei Complementar 101/2000) estabelece normas de finanças públicas voltadas para a responsabilidade na gestão fiscal. Tem como pilares: <em>planejamento</em>, <em>controle</em>, <em>transparência</em> e <em>responsabilização</em>.</p>',
    regras:['Planejamento: PPA, LDO, LOA', 'Limites: pessoal (50% RCL para União; 60% para Estados; 60% para Municípios)', 'Dívida: limites de endividamento', 'Operações de crédito: limites por ente', 'Transparência: Portal da Transparência, audiência pública'],
    excecoes:['A <em>LRF</em> é lei complementar (LC 101/2000).', 'A <em>LDF</em> é o Anexo de Riscos Fiscais da LDO.'],
    exemplos:['União pode gastar até 50% da RCL com pessoal.', 'Estado pode gastar até 60% da RCL com pessoal.', 'Município pode gastar até 60% da RCL com pessoal.'],
    pegadinchas:['<strong>50%</strong> é o limite da União; <strong>60%</strong> é o dos demais entes (Estados e Municípios).', 'A <em>RCL</em> é a Receita Corrente Líquida (deduzidas as transferências obrigatórias).', 'A <em>LDF</em> (Lei de Diretrizes Orçamentárias) tem o anexo de riscos fiscais.'],
    exercicios: [
      { q: 'A LRF é a Lei Complementar 101/2000, que estabelece normas de responsabilidade fiscal.', g: 'CERTO.' },
      { q: 'O limite de pessoal da União é de 60% da RCL.', g: 'ERRADO. É 50%.' }
    ],
    sotaque: '<strong>"LRF: 50% (UNIÃO), 60% (ESTADOS E MUNICÍPIOS)"</strong>'
  };

  M['acesso-informacao'] = {
    topico: 'acesso-informacao',
    titulo: 'Lei de Acesso à Informação — Lei 12.527/2011',
    resumo: 'Regula o acesso a informações públicas. Prazo de resposta: 20 dias, prorrogáveis por mais 10. Silêncio = positivo.',
    teoria: '<p>A <strong>LAI</strong> (Lei 12.527/2011) regulamenta o direito de acesso a informações públicas (art. 5º, XXXIII, CF). Cria o <em>Portal da Transparência</em> e prevê prazos para resposta.</p>',
    regras:['Prazo: 20 dias (prorrogáveis por mais 10)', 'Resposta: pode ser positiva (com dados) ou negativa (com justificativa)', 'Recurso: cabível em caso de recusa', 'Sigilo: informação classificada como sigilosa (máx. 25 anos para ultrassecreta)'],
    excecoes:['O <em>silêncio</em> da administração é interpretado como <strong>negativa</strong> (regra).', 'A <em>informação pessoal</em> é sigilosa (art. 31).'],
    exemplos:['Maria pede ao INSS cópia de um processo administrativo → recebe em 20 dias.','João pede informação sigilosa → recebe resposta negativa.'],
    pegadinchas:['<strong>Sigilo</strong> pode ser: reservado (5 anos), secreto (15 anos), ultrassecreto (25 anos).','A <em>informação</em> pessoal tem prazo de sigilo de 100 anos.','A <em>improbidade</em> pode ocorrer com recusa injustificada.'],
    exercicios: [
      { q: 'A LAI é a Lei 12.527/2011, que regulamenta o acesso a informações públicas.', g: 'CERTO.' },
      { q: 'O prazo para resposta da LAI é de 30 dias.', g: 'ERRADO. É 20 dias, prorrogáveis por mais 10.' }
    ],
    sotaque: '<strong>"LAI: 20+10 DIAS, SILÊNCIO = NEGATIVA"</strong>'
  };

  M['leilao-eletronico'] = {
    topico: 'leilao-eletronico',
    titulo: 'Pregão e Licitação Eletrônica (Lei 14.133/2021)',
    resumo: 'Pregão: modalidade para bens e serviços comuns. Eletrônico: preferencial. Inversão de fases possível.',
    teoria: '<p>O <strong>pregão</strong> é a modalidade de licitação para aquisição de <em>bens e serviços comuns</em>, com critérios de menor preço ou maior desconto. A <em>licitação eletrônica</em> é o meio preferencial (Lei 14.133/2021).</p>',
    regras:['Modalidade: pregão (Lei 14.133/2021)', 'Critério: menor preço ou maior desconto', 'Eletrônico: preferencial (art. 17, §1º)', 'Inversão de fases: possível (análise de habilitação depois)'],
    excecoes:['A <em>concorrência</em> é a regra geral; o pregão é exceção (apenas para bens comuns).', 'A <em>dispensa</em> é para valores pequenos ou situações específicas.'],
    exemplos:['Município compra papel para a administração → pregão eletrônico.','Estado compra medicamento para hospital → pregão eletrônico (regra).'],
    pegadinchas:['<strong>Pregão</strong> é exclusivo para <em>bens e serviços comuns</em>.','A <em>inversão de fases</em> é regra do pregão (art. 17, §1º, Lei 14.133/2021).','A <em>Lei 14.133/2021</em> revogou a Lei 8.666/93 e a Lei 10.520/02.'],
    exercicios: [
      { q: 'O pregão é modalidade de licitação para bens e serviços comuns, com critério de menor preço ou maior desconto.', g: 'CERTO.' },
      { q: 'O pregão eletrônico é obrigatório para todos os casos.', g: 'ERRADO. É preferencial, mas pode ser presencial em casos justificados.' }
    ],
    sotaque: '<strong>"PREGÃO = BENS COMUNS, ELETRÔNICO, INVERSÃO"</strong>'
  };

  M['lei-14133-mudancas'] = {
    topico: 'lei-14133-mudancas',
    titulo: 'Lei 14.133/2021 — Principais Mudanças',
    resumo: 'Substitui Lei 8.666/93. Modalidades: pregão, concorrência, concurso, leilão, diálogo competitivo. Critérios: menor preço, melhor técnica, etc.',
    teoria: '<p>A <strong>Lei 14.133/2021</strong> (Nova Lei de Licitações e Contratos) entrou em vigor em abril de 2021 e substituiu a Lei 8.666/93. Trouxe diversas mudanças: <em>modalidades</em>, <em>critérios de julgamento</em>, <em>contratos</em>, <em>penalidades</em>, entre outras.</p>',
    regras:['Modalidades: pregão, concorrência, concurso, leilão, diálogo competitivo', 'Critérios: menor preço, melhor técnica, melhor combinação, melhor relação custo-benefício, melhor destinação de bens alienados', 'Contratos: 1 ano para serviços contínuos (prorrogável), 5 anos para obras (regra)', 'Penalidades: advertência, multa, impedimento de licitar, declaração de inidoneidade'],
    excecoes:['A <em>Lei 8.666/93</em> é revogada (exceto os dispositivos que a Lei 14.133 manteve).', 'O <em>pregão</em> é exclusivo para bens e serviços comuns.'],
    exemplos:['Obra de R$ 30 milhões → concorrência (regra).', 'Compra de gás de cozinha → pregão.', 'Venda de bem público inservível → leilão.'],
    pegadinchas:['<strong>Concorrência</strong> é a regra para obras e serviços de engenharia.','<strong>Diálogo competitivo</strong> é a novidade para licitações complexas (art. 32, Lei 14.133/2021).','<strong>Pregão</strong> é exclusivo para <em>bens e serviços comuns</em>.'],
    exercicios: [
      { q: 'A Lei 14.133/2021 substitui a Lei 8.666/93 e traz novas modalidades de licitação.', g: 'CERTO.' },
      { q: 'O pregão é a modalidade de licitação para obras de engenharia complexas.', g: 'ERRADO. Para obras de engenharia, a regra é a concorrência.' }
    ],
    sotaque: '<strong>"PREGÃO + CONCORRÊNCIA + CONCURSO + LEILÃO + DIÁLOGO"</strong>'
  };

  M['lei-14133-contratos'] = {
    topico: 'lei-14133-contratos',
    titulo: 'Lei 14.133/2021 — Contratos Administrativos',
    resumo: 'Duração: 1 ano (serviços contínuos), 5 anos (obras), 10 anos (concessão). Reajuste anual por índice. Garantia: 5% a 10%.',
    teoria: '<p>Os <strong>contratos administrativos</strong> regidos pela Lei 14.133/2021 têm regras próprias. A duração é limitada, com possibilidade de prorrogação. As <em>garantias</em> e os <em>reajustes</em> são essenciais.</p>',
    regras:['Duração: 1 ano (serviços contínuos) + prorrogação por igual período', 'Obras: 5 anos (regra geral), com possibilidade de prorrogação', 'Concessão: até 10 anos', 'Garantia: 5% a 10% do valor inicial', 'Reajuste: anual, por índice oficial (INPC, IPCA, IGP-M, etc.)'],
    excecoes:['A <em>prorrogação</em> é ato discricionário, mas pode ser direito do contratado se o poder público não se manifestar.', 'A <em>garantia</em> é facultativa, mas pode ser exigida no edital.'],
    exemplos:['Contrato de limpeza (5 anos) → prorrogado por mais 5 anos (limite 10 anos).', 'Contrato de obra (5 anos) → limite 5 anos (regra).'],
    pegadinchas:['<strong>Prorrogação</strong> é ato discricionário do poder público (regra).', '<strong>Garantia</strong> é exigida no edital, não é obrigatória.','<strong>Reajuste</strong> anual por índice oficial.'],
    exercicios: [
      { q: 'A duração dos contratos administrativos regidos pela Lei 14.133/2021 é de até 5 anos, prorrogável por igual período.', g: 'ERRADO. A regra é 1 ano para serviços contínuos, prorrogável por igual período.' },
      { q: 'A garantia nos contratos administrativos pode ser exigida no edital, em percentual de 5% a 10% do valor inicial.', g: 'CERTO.' }
    ],
    sotaque: '<strong>"1 ANO (SERVIÇO) + 5 ANOS (OBRA) + 5-10% (GARANTIA)"</strong>'
  };

  M['informatica-juridica'] = {
    topico: 'informatica-juridica',
    titulo: 'Marco Civil da Internet — Lei 12.965/2014',
    resumo: 'Regula o uso da internet no Brasil. Princípios: liberdade de expressão, privacidade, proteção de dados, neutralidade da rede.',
    teoria: '<p>O <strong>Marco Civil da Internet</strong> (Lei 12.965/2014) é a lei brasileira que regula o uso da internet. Estabelece princípios, direitos e garantias dos usuários, e disciplina a <em>neutralidade da rede</em>, a <em>proteção de dados</em> e a <em>responsabilidade dos provedores</em>.</p>',
    regras:['Princípios: liberdade de expressão, privacidade, proteção de dados, neutralidade da rede', 'Neutralidade: tratamento isonômico de pacotes', 'Responsabilidade: solidária dos provedores de aplicação (apenas em caso de descumprimento de ordem judicial)', 'Retenção de registros: 6 meses (conexão) e 12 meses (aplicação)'],
    excecoes:['O <em>provedor de aplicação</em> tem responsabilidade subjetiva (só responde com ordem judicial descumprida).', 'A <em>neutralidade</em> é exceção: pode haver diferenciação em caráter excepcional.'],
    exemplos:['YouTube não é obrigado a remover vídeo sem ordem judicial.','Operadora não pode discriminar pacotes.','Provedor de aplicação pode ser responsabilizado por descumprir ordem judicial.'],
    pegadinchas:['<strong>Marco Civil</strong> foi <em>lei federal</em>, mas tem <em>natureza de lei complementar</em> em alguns aspectos (CF, art. 21, XXVI).', 'A <em>LGPD</em> é a lei específica de proteção de dados.', 'A <em>neutralidade</em> da rede é a regra, com exceções técnicas e regulatórias.'],
    exercicios: [
      { q: 'O Marco Civil da Internet é a Lei 12.965/2014.', g: 'CERTO.' },
      { q: 'O provedor de aplicação tem responsabilidade objetiva por conteúdo de terceiros.', g: 'ERRADO. Tem responsabilidade subjetiva (regra).' }
    ],
    sotaque: '<strong>"MARCO CIVIL: NEUTRALIDADE + RETENÇÃO + RESPONSABILIDADE"</strong>'
  };

  M['constituicao-prazos'] = {
    topico: 'constituicao-prazos',
    titulo: 'Prazos Processuais na CF',
    resumo: 'AFO: 5 dias. Mandado de Segurança: 120 dias. Ação Popular: 5 anos. Habeas Data: sem prazo.',
    teoria: '<p>Os <strong>prazos processuais</strong> previstos na CF são relevantes para concursos. Os principais: <em>Ação Popular</em> (5 anos), <em>Mandado de Segurança</em> (120 dias), <em>Habeas Data</em> (sem prazo expresso), <em>Mandado de Injunção</em> (sem prazo).</p>',
    regras:['AP: 5 anos (Lei 4.717/65)', 'MS: 120 dias (Lei 12.016/09)', 'HD: sem prazo (Lei 9.507/97)', 'MI: sem prazo (Lei 13.300/16)'],
    excecoes:['O <em>HC</em> não tem prazo (regra).', 'A <em>ADPF</em> é por lei específica (Lei 9.882/99).'],
    exemplos:['MS contra ato do INSS: prazo de 120 dias (contado da ciência do ato).', 'HD para dados pessoais: sem prazo (regra).'],
    pegadinchas:['<strong>AP</strong> tem prazo de <strong>5 anos</strong> (regra).', 'O <em>MS</em> tem prazo de <strong>120 dias</strong>.', 'O <em>HD</em> <em>não</em> tem prazo (regra).'],
    exercicios: [
      { q: 'O MS tem prazo de 120 dias para impetração.', g: 'CERTO.' },
      { q: 'O HD tem prazo de 5 anos para impetração.', g: 'ERRADO. O HD não tem prazo.' }
    ],
    sotaque: '<strong>"MS: 120. AP: 5 ANOS. HD/MI: SEM PRAZO"</strong>'
  };

  M['estatuto-pcd'] = {
    topico: 'estatuto-pcd',
    titulo: 'Estatuto da Pessoa com Deficiência — Lei 13.146/2015',
    resumo: 'Lei Brasileira de Inclusão. Princípios: cidadania, inclusão social, acessibilidade, autonomia. Reserva de cargos públicos: 5% a 20%.',
    teoria: '<p>O <strong>Estatuto da Pessoa com Deficiência</strong> (Lei 13.146/2015), também conhecido como <em>Lei Brasileira de Inclusão</em> (LBI), regulamenta o art. 227, §1º, II e o art. 244 da CF. Estabelece direitos, garantias e mecanismos de inclusão.</p>',
    regras:['Reserva de cargos públicos: 5% a 20% (art. 35)', 'Acessibilidade: em todos os âmbitos (art. 53-73)', 'Direito à educação inclusiva (art. 27-30)', 'Direito à saúde (art. 18-26)'],
    excecoes:['A <em>curatela</em> é regulada pelo CC (arts. 84-86, EPD), mas o EPD limita a curatela (art. 84, §3º).', 'A <em>tomada de decisão apoiada</em> é o instrumento mais suave (art. 84, §1º, EPD).'],
    exemplos:['Concurso público com 10 vagas → reserva de 1 vaga para PCD.','Acesso a prédios públicos com rampa, banheiro adaptado, etc.'],
    pegadinchas:['<strong>LBI</strong> é a <em>Lei Brasileira de Inclusão</em> (mesma Lei 13.146/2015).', 'A <em>curatela</em> pode ser parcial (apenas atos patrimoniais).', 'O <em>BPC</em> da pessoa com deficiência é regulado pela LOAS (Lei 8.742/93).'],
    exercicios: [
      { q: 'A reserva de cargos públicos para PCD é de 5% a 20%, conforme o Estatuto.', g: 'CERTO. Art. 35, EPD.' },
      { q: 'A curatela sobre pessoa com deficiência é total, como regra.', g: 'ERRADO. A regra é curatela parcial (art. 84, §3º, EPD).' }
    ],
    sotaque: '<strong>"LBI: 5-20% DE RESERVA. CURATELA PARCIAL."</strong>'
  };

  M['estatuto-cidade'] = {
    topico: 'estatuto-cidade',
    titulo: 'Estatuto da Cidade — Lei 10.257/2001',
    resumo: 'Política urbana: função social da cidade e da propriedade. Instrumentos: IPTU progressivo no tempo, desapropriação, usucapião especial.',
    teoria: '<p>O <strong>Estatuto da Cidade</strong> (Lei 10.257/2001) regulamenta o art. 182 da CF. Disciplina a política urbana, com foco na <em>função social da cidade</em> e da <em>propriedade urbana</em>. Instrumentos: <em>IPTU progressivo no tempo</em>, <em>desapropriação</em>, <em>usucapião especial</em>, <em>concessão de uso especial</em>, entre outros.</p>',
    regras:['Função social da cidade: direito à cidade para todos', 'Função social da propriedade: uso conforme o Plano Diretor', 'Instrumentos: IPTU progressivo, desapropriação-sanção, usucapião especial urbana, concessão de uso especial para fins de moradia, direito de preempção, transferência do direito de construir, operação urbana consorciada, estudo de impacto de vizinhança'],
    excecoes:['O <em>Plano Diretor</em> é obrigatório para cidades com > 20 mil habitantes (art. 41, EC 71/2012).', 'O <em>IPTU progressivo</em> tem prazo de 5 anos.'],
    exemplos:['Prefeitura desapropria terreno ocioso (sem função social) para construção de habitação popular.','Cidadão ocupa terreno público por 5 anos para moradia → usucapião especial.'],
    pegadinchas:['<strong>Função social</strong> é princípio constitucional (art. 5º, XXIII, CF).', 'O <em>IPTU progressivo</em> é <em>tributo</em>, mas com finalidade urbanística.', 'A <em>desapropriação-sanção</em> é instrumento urbanístico, não tributário.'],
    exercicios: [
      { q: 'O Estatuto da Cidade é a Lei 10.257/2001, que regulamenta a política urbana.', g: 'CERTO.' },
      { q: 'O IPTU progressivo no tempo tem prazo de 10 anos.', g: 'ERRADO. Tem prazo de 5 anos.' }
    ],
    sotaque: '<strong>"ESTATUTO DA CIDADE: FUNÇÃO SOCIAL + 12 INSTRUMENTOS"</strong>'
  };

  M['tribunal-jurados'] = {
    topico: 'tribunal-jurados',
    titulo: 'Tribunal do Júri — Crimes Dolosos contra a Vida',
    resumo: 'Competência: crimes dolosos contra a vida. Composição: 7 jurados. Decisão: 4 votos para condenação (regra).',
    teoria: '<p>O <strong>Tribunal do Júri</strong> (CF, art. 5º, XXXVIII) tem competência para os <em>crimes dolosos contra a vida</em>. É composto por <em>1 juiz presidente</em> e <em>7 jurados</em> (que decidem por maioria simples, com 4 votos).</p>',
    regras:['Competência: crimes dolosos contra a vida (homicídio, induzimento, instigação, auxílio ao suicídio, infanticídio)', 'Composição: 1 juiz + 7 jurados', 'Decisão dos jurados: maioria simples (4 votos para condenar ou absolver)', 'Pronúncia: juízo de admissibilidade'],
    excecoes:['A <em>pronúncia</em> gera competência do Conselho de Sentença.', 'O <em>julgamento</em> é por 7 jurados, mas o conselho pode ser ampliado (Lei 13.285/2016).'],
    exemplos:['Pedro matou João → pronunciou-se e o caso vai a júri.','Maria foi absolvida por 4 votos a 3 → decisão dos jurados é soberana.'],
    pegadinchas:['<strong>Jurados</strong> decidem por maioria simples, mas a absolvição precisa de 4 votos (regra).', 'A <em>pronúncia</em> é <em>juízo de admissibilidade</em>, não de mérito.', 'O <em>veredicto</em> é <em>soberano</em>, mas pode ser cassado (quando contrário à prova dos autos).'],
    exercicios: [
      { q: 'O Tribunal do Júri tem competência para julgar crimes dolosos contra a vida.', g: 'CERTO. Art. 5º, XXXVIII, "d", CF.' },
      { q: 'O Tribunal do Júri é composto por 1 juiz e 7 jurados, com decisão por maioria simples.', g: 'CERTO. Lei 263/48.' }
    ],
    sotaque: '<strong>"JÚRI: 7 JURADOS, 4 VOTOS, MAIORIA SIMPLES"</strong>'
  };

  M['mecanismos-inclusao'] = {
    topico: 'mecanismos-inclusao',
    titulo: 'Ações Afirmativas (Cotas e Reservas)',
    resumo: 'Cotas raciais, de gênero, PCD, em concursos e universidades. Ações afirmativas são políticas de inclusão.',
    teoria: '<p>As <strong>ações afirmativas</strong> são políticas públicas voltadas para a inclusão social de grupos historicamente discriminados. No Brasil, as principais são: <em>cotas raciais</em>, <em>cotas de gênero</em>, <em>cotas para PCD</em>, <em>cotas em universidades</em>, <em>reserva de cargos em empresas</em>.</p>',
    regras:['Cotas raciais: Lei 12.711/2012 (universidades), Lei 12.990/2014 (concursos)', 'Cotas de gênero: aplicável em eleições (Lei 12.034/2009) e em alguns concursos', 'Cotas para PCD: Lei 8.112/90 (até 20%) e Lei 13.146/2015', 'Reserva de cargos: Lei 8.213/91 (PcD), Lei 10.483/2002 (aprendiz)'],
    excecoes:['As <em>cotas raciais</em> exigem <em>autodeclaração</em>.', 'As <em>cotas para PCD</em> exigem laudo pericial.'],
    exemplos:['Concurso do INSS reserva 20% das vagas para PCD.','Universidade Federal reserva 50% das vagas para alunos de escolas públicas (Lei 12.711/2012).'],
    pegadinchas:['<strong>Ações afirmativas</strong> são políticas públicas, não ações individuais.','A <em>Lei 12.711/2012</em> é a <em>Lei de Cotas</em> em universidades.','A <em>Lei 12.990/2014</em> é a <em>Lei de Cotas Raciais</em> em concursos.'],
    exercicios: [
      { q: 'A Lei 12.990/2014 reserva vagas para negros em concursos públicos federais.', g: 'CERTO.' },
      { q: 'As ações afirmativas são ações individuais.', g: 'ERRADO. São políticas públicas.' }
    ],
    sotaque: '<strong>"COTAS: RAÇA + GÊNERO + PCD + APRENDIZ"</strong>'
  };

  M['estatuto-refugiados'] = {
    topico: 'estatuto-refugiados',
    titulo: 'Estatuto dos Refugiados — Lei 9.474/1997',
    resumo: 'Refugiado: pessoa que tem medo de perseguição por raça, religião, nacionalidade, opinião política, etc.',
    teoria: '<p>O <strong>Estatuto dos Refugiados</strong> (Lei 9.474/1997) define refugiado, em conformidade com a Convenção de Genebra de 1951. O <em>CONARE</em> é o órgão nacional de decisão sobre o status de refugiado.</p>',
    regras:['Definição: temido perseguição por raça, religião, nacionalidade, opinião política, grupo social', 'Procedimento: solicitação à Polícia Federal → análise do CONARE', 'Direitos: residência, trabalho, saúde, educação', 'Inclusão social: política de integração local'],
    excecoes:['O <em>asilado</em> é diferente de <em>refugiado</em>: o asilado é o estrangeiro que sofre perseguição política (Lei 13.445/2017).', 'O <em>apátrida</em> é o que não tem nacionalidade (Convenção de 1954).'],
    exemplos:['Sírio que fugiu da guerra civil → refugiado.','Venezuelano que fugiu da crise econômica → migrante econômico (não refugiado, mas pode pedir refúgio).'],
    pegadinchas:['<strong>Refugiado</strong> ≠ <em>asilado</em>. Refugiado é o que tem medo de perseguição; asilado é o perseguido político.', 'O <em>CONARE</em> é o Comitê Nacional para Refugiados.', 'A <em>Lei 9.474/1997</em> é anterior à CF/88 (é lei ordinária).'],
    exercicios: [
      { q: 'O Estatuto dos Refugiados é a Lei 9.474/1997, que define refugiado conforme a Convenção de Genebra.', g: 'CERTO.' },
      { q: 'O asilado é a mesma coisa que o refugiado.', g: 'ERRADO. São institutos distintos.' }
    ],
    sotaque: '<strong>"REFUGIADO: PERSEGUIÇÃO + MEDO. ASILADO: PERSEGUIÇÃO POLÍTICA."</strong>'
  },

  global.MATERIAS_EXT = global.MATERIAS_EXT || {};
  global.MATERIAS_EXT.legislacao = M;
})(window);
