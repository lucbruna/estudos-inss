/* ==========================================================
   materias/constitucional.js — Direito Constitucional (38 lições)
   ========================================================== */
(function (global) {
  'use strict';
  const M = {};

  M['teoria-constituicao'] = {
    topico: 'teoria-constituicao',
    titulo: 'Teoria da Constituição: Conceito e Classificação',
    resumo: 'Constituição é a lei fundamental de um Estado. Classificação: promulgada, outorgada, rígida, suprema, formal, material, analítica, sintética, etc.',
    teoria: '<p>A <strong>Constituição</strong> é a lei fundamental de um Estado, que organiza o poder político e limita-o por meio de direitos fundamentais. Pode ser classificada quanto à <em>origem</em> (promulgada ou outorgada), <em>forma</em> (escrita ou não escrita), <em>estabilidade</em> (rígida, flexível, semirrígida), <em>conteúdo</em> (formal ou material), entre outras.</p>',
    regras:['Origem: promulgada (democrática) ou outorgada (imposta)', 'Forma: escrita (regra) ou não escrita', 'Estabilidade: rígida (CF brasileira), flexível (Inglaterra), semirrígida (Espanha)', 'Conteúdo: formal (procedimento) ou material (conteúdo)'],
    excecoes:['A <em>CF brasileira</em> é <strong>escrita, promulgada, rígida, analítica, formal e material</strong>.', 'A <em>CF da Inglaterra</em> é <strong>não escrita, costumeira</strong>.'],
    exemplos:['CF/88 brasileira: promulgada pela Assembleia Constituinte em 05/10/1988.','CF dos EUA: rígida, escrita, sintética (7 artigos).'],
    pegadinchas:['<strong>Rígida</strong> é a CF que tem <em>procedimento especial</em> para reforma (CF/88: 3/5 + 2 turnos).','A <em>CF brasileira</em> é <em>analítica</em> (detalhada, com 250 artigos).','<strong>Formal</strong> ≠ <em>material</em>. Formal é <em>procedimento</em>; material é <em>conteúdo</em>.'],
    exercicios: [
      { q: 'A CF/88 é promulgada, escrita, rígida e analítica.', g: 'CERTO.' },
      { q: 'A CF dos EUA é classificada como rígida e sintética.', g: 'CERTO. Rígida (procedimento especial) e sintética (7 artigos).' }
    ],
    sotaque: '<strong>"CF/88: PRO + ESC + RÍG + ANA"</strong>'
  };

  M['poder-constituinte'] = {
    topico: 'poder-constituinte',
    titulo: 'Poder Constituinte: Originário, Derivado e Decorrente',
    resumo: 'Originário: cria nova CF. Derivado: reforma (EC). Decorrente: CF/88 estaduais. Limitado e condicionado.',
    teoria: '<p>O <strong>Poder Constituinte</strong> é o poder de criar ou reformar a Constituição. Divide-se em: <em>originário</em> (cria nova CF, é ilimitado, autônomo e incondicionado), <em>derivado</em> (reforma a CF via EC, é limitado e condicionado), e <em>decorrente</em> (cria CF estadual, é limitado pela CF federal).</p>',
    regras:['Originário: poder de fazer a CF (ilimitado, autônomo, incondicionado)', 'Derivado: poder de reforma (EC 1-117)', 'Decorrente: poder de fazer CF estadual (art. 11, ADCT)', 'Limitado: matérias não podem ser abolidas (cláusulas pétreas)'],
    excecoes:['O <em>originário</em> é <strong>ilimitado</strong> (pode fazer qualquer CF).', 'O <em>derivado</em> é <strong>limitado</strong> (não pode abolir cláusulas pétreas).'],
    exemplos:['CF/88 foi criada pelo Poder Constituinte Originário.','EC 103/2019 (Reforma da Previdência) é Poder Constituinte Derivado.'],
    pegadinchas:['<strong>Originário</strong> ≠ <em>decorrente</em>. Originário é para a CF federal; decorrente para a CF estadual.','<strong>Cláusulas pétreas</strong> limitam o poder de reforma.','O <em>poder decorrente</em> é do Estado-membro.'],
    exercicios: [
      { q: 'O Poder Constituinte Originário é ilimitado, autônomo e incondicionado.', g: 'CERTO.' },
      { q: 'O Poder Constituinte Derivado tem o mesmo poder do Originário.', g: 'ERRADO. O derivado é limitado e condicionado.' }
    ],
    sotaque: '<strong>"ORIGINÁRIO: ILIMITADO. DERIVADO: LIMITADO."</strong>'
  };

  M['clausulas-petreas'] = {
    topico: 'clausulas-petreas',
    titulo: 'Cláusulas Pétreas (art. 60, §4º, CF)',
    resumo: 'Forma federativa, voto direto, secreto, universal e periódico, separação dos Poderes, direitos e garantias individuais.',
    teoria: '<p>As <strong>cláusulas pétreas</strong> (art. 60, §4º, CF) são limitações materiais ao poder de reforma constitucional. Não podem ser abolidas, nem sequer por emenda constitucional.</p>',
    regras:['Forma federativa de Estado', 'Voto direto, secreto, universal e periódico', 'Separação dos Poderes (Legislativo, Executivo, Judiciário)', 'Direitos e garantias individuais'],
    excecoes:['As <em>cláusulas pétreas</em> não podem ser <em>abolidas</em>, mas podem ser <em>regulamentadas</em>.', 'A <em>forma federativa</em> inclui o <em>sistema presidencialista</em>? Não (é cláusula material autônoma, embora discutida).'],
    exemplos:['Tentar abolir o voto direto: EC inconstitucional.','Tentar abolir o habeas corpus: EC inconstitucional.'],
    pegadinchas:['<strong>Cláusula pétrea</strong> não pode ser <em>abolida</em>, mas pode ser <em>alterada</em> (regra).','<strong>Direitos individuais</strong> da CF/88 são pétreos, mas há críticas (criação de novos direitos por emenda).','O <em>regime presidencialista</em> é cláusula material (não está no art. 60, §4º, mas é defendido por parte da doutrina).'],
    exercicios: [
      { q: 'São cláusulas pétreas: forma federativa, voto direto, secreto, universal e periódico, separação dos Poderes, direitos e garantias individuais.', g: 'CERTO.' },
      { q: 'É possível abolir o voto secreto por emenda constitucional.', g: 'ERRADO. É cláusula pétrea.' }
    ],
    sotaque: '<strong>"FEDERATIVA + VOTO + SEPARAÇÃO + DIREITOS"</strong>'
  };

  M['direitos-fundamentais'] = {
    topico: 'direitos-fundamentais',
    titulo: 'Direitos Fundamentais (art. 5º)',
    resumo: 'Direitos individuais e coletivos. 78 incisos no art. 5º. Igualdade, liberdade, propriedade, segurança, etc.',
    teoria: '<p>Os <strong>direitos fundamentais</strong> da CF/88 estão catalogados no art. 5º (individuais e coletivos), arts. 6º-11 (sociais, econômicos, culturais), art. 14 (políticos), art. 227 (criança/adolescente), entre outros.</p>',
    regras:['Direitos individuais (art. 5º): vida, liberdade, igualdade, segurança, propriedade', 'Direitos sociais (art. 6º): educação, saúde, alimentação, trabalho, moradia, transporte, lazer, segurança, previdência, proteção à maternidade, infância, assistência aos desamparados', 'Direitos políticos (art. 14): voto, elegibilidade, plebiscito, referendo, iniciativa popular'],
    excecoes:['<em>Direitos individuais</em> têm aplicação <em>imediata</em> (art. 5º, §1º).', '<em>Direitos sociais</em> são <em>programáticos</em>, dependem de ação estatal.'],
    exemplos:['Habeas corpus (art. 5º, LXVIII) → remédio constitucional.','Salário mínimo (art. 7º, IV) → direito social do trabalhador.'],
    pegadinchas:['<strong>Direitos individuais</strong> têm aplicação <strong>imediata</strong>.','<strong>Direitos sociais</strong> são <em>programáticos</em>.','A <em>remédios constitucionais</em> são instrumentos de defesa de direitos.'],
    exercicios: [
      { q: 'Os direitos individuais têm aplicação imediata, conforme a CF.', g: 'CERTO. Art. 5º, §1º.' },
      { q: 'Os direitos sociais são apenas normas programáticas, sem aplicação direta.', g: 'ERRADO. Podem ser aplicados diretamente (mínimo existencial).' }
    ],
    sotaque: '<strong>"INDIVIDUAIS: IMEDIATOS. SOCIAIS: PROGRAMÁTICOS."</strong>'
  };

  M['remdios-constitucionais'] = {
    topico: 'remdios-constitucionais',
    titulo: 'Remédios Constitucionais: HC, HD, MS, MI, AP',
    resumo: 'HC: liberdade. HD: dados. MS: direito líquido e certo. MI: falta de norma. AP: patrimônio público. AP: ação popular.',
    teoria: '<p>Os <strong>remédios constitucionais</strong> são instrumentos constitucionais de defesa de direitos. São: <em>Habeas Corpus</em> (HC), <em>Habeas Data</em> (HD), <em>Mandado de Segurança</em> (MS), <em>Mandado de Injunção</em> (MI), <em>Ação Popular</em> (AP) e <em>Ação Civil Pública</em> (ACP).</p>',
    regras:['HC: liberdade de locomoção (art. 5º, LXVIII)', 'HD: dados pessoais (art. 5º, LXX)', 'MS: direito líquido e certo (art. 5º, LXIX)', 'MI: falta de norma regulamentadora (art. 5º, LXXI)', 'AP: patrimônio público (art. 5º, LXXIII)'],
    excecoes:['O <em>HC</em> é gratuito (não há custas).', 'O <em>MS</em> tem prazo de 120 dias (decadencial).', 'O <em>HD</em> é gratuito e não tem prazo.'],
    exemplos:['Preso sem ordem judicial → impetra HC.','Cidadão quer dados sobre si em banco → impetra HD.','Ato de autoridade fere direito líquido → impetra MS.'],
    pegadinchas:['<strong>HC</strong> é para liberdade de locomoção.','<strong>HD</strong> é para <em>dados pessoais</em> (não dados públicos).','<strong>MS</strong> é para direito <em>líquido e certo</em> (sem dilação probatória).'],
    exercicios: [
      { q: 'O HC é instrumento de defesa da liberdade de locomoção.', g: 'CERTO.' },
      { q: 'O MS tem prazo de 60 dias.', g: 'ERRADO. Tem prazo de 120 dias (Lei 12.016/09).' }
    ],
    sotaque: '<strong>"HC + HD + MS + MI + AP"</strong>'
  };

  M['direitos-sociais'] = {
    topico: 'direitos-sociais',
    titulo: 'Direitos Sociais (art. 6º-11)',
    resumo: 'Educação, saúde, alimentação, trabalho, moradia, transporte, lazer, segurança, previdência, proteção à maternidade/infância, assistência aos desamparados.',
    teoria: '<p>Os <strong>direitos sociais</strong> estão no art. 6º (rol taxativo, embora discutido) e nos arts. 7º-11 (direitos dos trabalhadores). O <em>mínimo existencial</em> é o núcleo essencial de direitos sociais.</p>',
    regras:['Art. 6º: educação, saúde, alimentação, trabalho, moradia, transporte, lazer, segurança, previdência social, proteção à maternidade e à infância, assistência aos desamparados', 'Art. 7º: direitos dos trabalhadores (urbanos e rurais)', 'Art. 227: criança, adolescente, idoso', 'Mínimo existencial: núcleo essencial de direitos sociais'],
    excecoes:['A <em>segurança</em> foi acrescentada por EC (segurança pública).', 'O <em>transporte</em> foi acrescentado por EC (2010).'],
    exemplos:['Direito à saúde (art. 6º, art. 196-200).','Direito à educação (art. 6º, art. 205-214).','Direito à moradia (art. 6º, art. 21, XX, e art. 23, IX).'],
    pegadinchas:['<strong>Art. 6º</strong> é <em>taxativo</em> (regra), mas há controvérsia.','<strong>Mínimo existencial</strong> é o núcleo essencial de direitos sociais.','A <em>EC 26/2000</em> incluiu moradia.','A <em>EC 64/2010</em> incluiu transporte.'],
    exercicios: [
      { q: 'São direitos sociais: educação, saúde, alimentação, trabalho, moradia, transporte, lazer, segurança, previdência, proteção à maternidade e à infância, assistência aos desamparados.', g: 'CERTO.' },
      { q: 'O direito à segurança pública foi acrescentado ao art. 6º pela EC 64/2010.', g: 'ERRADO. Foi a EC 82/2014.' }
    ],
    sotaque: '<strong>"EDU + SAÚDE + ALIM + TRAB + MOR + TRANSP + LAZ + SEG + PREV + MATERN + ASSIST"</strong>'
  };

  M['direitos-trabalhistas'] = {
    topico: 'direitos-trabalhistas',
    titulo: 'Direitos dos Trabalhadores (art. 7º)',
    resumo: '34 incisos: salário mínimo, irredutibilidade, 13º, FGTS, horas extras, adicional noturno, férias, licença-maternidade, etc.',
    teoria: '<p>O <strong>art. 7º</strong> da CF/88 prevê os direitos dos trabalhadores urbanos e rurais. São 34 incisos, muitos com aplicação aos servidores públicos. O <em>salário mínimo</em> é unificado nacionalmente.</p>',
    regras:['Salário mínimo: unificado, reajustado anualmente', 'Irredutibilidade: do salário (não admite redução)', '13º salário', 'FGTS: 8%', 'Horas extras: mínimo 50%', 'Adicional noturno: 20%', 'Férias: 30 dias, com 1/3 constitucional', 'Licença-maternidade: 120 dias (prorrogável)'],
    excecoes:['Os <em>direitos do art. 7º</em> são aplicáveis a <em>todos</em> os trabalhadores, urbanos e rurais.', 'A <em>licença-paternidade</em> é de 5 dias, prorrogável por 15 dias (Empresa Cidadã).'],
    exemplos:['Trabalhador recebe adicional de 50% sobre horas extras.','Trabalhadora tem 120 dias de licença-maternidade.'],
    pegadinchas:['<strong>FGTS</strong> é de 8% (regra geral, opcional para doméstico com 3,2%).','<strong>Horas extras</strong>: mínimo 50% (regra).','<strong>Adicional noturno</strong>: mínimo 20% (urbano) e 25% (rural).'],
    exercicios: [
      { q: 'São direitos dos trabalhadores: salário mínimo, irredutibilidade salarial, 13º, FGTS, horas extras, adicional noturno, férias de 30 dias com 1/3.', g: 'CERTO.' },
      { q: 'A licença-maternidade é de 60 dias.', g: 'ERRADO. É de 120 dias (CF, art. 7º, XVIII).' }
    ],
    sotaque: '<strong>"34 INCISOS: SAL MÍN + IRRED + 13 + FGTS + 50% H.E. + 20% NOT + FÉRIAS 30+1/3"</strong>'
  };

  M['nacionalidade'] = {
    topico: 'nacionalidade',
    titulo: 'Nacionalidade (art. 12-13)',
    resumo: 'Brasileiros natos: nascidos no Brasil, portugueses com residência, etc. Naturalizados: estrangeiros que adquirem a nacionalidade.',
    teoria: '<p>A <strong>nacionalidade</strong> é o vínculo jurídico-político entre a pessoa e o Estado. Os brasileiros podem ser <em>natos</em> (art. 12, I-II) ou <em>naturalizados</em> (art. 12, II). Os <em>portugueses</em> têm regra especial (igualdade de direitos, salvo nos cargos privativos).</p>',
    regras:['Brasileiro nato: nascido no Brasil (art. 12, I, "a"), nascido no exterior de pai ou mãe brasileira (art. 12, I, "b"), português com residência (art. 12, I, "c")', 'Brasileiro naturalizado: estrangeiros que adquirem a nacionalidade (art. 12, II, "a" e "b")', 'Cargos privativos de brasileiro nato: presidente, vice, presidente da Câmara/Senado, STF, TCU, etc. (art. 12, §3º)'],
    excecoes:['O <em>português</em> equiparado ao brasileiro nato tem <em>direitos iguais</em>, mas <strong>não</strong> acesso a cargos privativos.','O <em>brasileiro naturalizado</em> pode perder a nacionalidade se tiver <em>naturalização cancelada</em> (art. 12, §4º).'],
    exemplos:['Filho de mãe brasileira nascido no exterior → brasileiro nato (art. 12, I, "c").','Português com residência no Brasil por mais de 1 ano → equiparado ao nato (regra).'],
    pegadinchas:['<strong>Cargo privativo</strong> de brasileiro nato: presidente, vice, presidente da Câmara, do Senado, do STF, do TCU, do STJ, do TSE, etc.','<strong>Português</strong> equiparado ao nato tem <em>igualdade de direitos</em>, mas <em>não</em> cargo privativo.','A <em>perda</em> da nacionalidade é <em>excepcional</em> (apenas em caso de naturalização cancelada).'],
    exercicios: [
      { q: 'São cargos privativos de brasileiro nato: presidente, vice, presidentes do Senado, da Câmara, do STF, do TCU, do TSE, do STJ, entre outros.', g: 'CERTO.' },
      { q: 'O português equiparado ao brasileiro nato pode ser presidente da República.', g: 'ERRADO. Não pode acessar cargos privativos.' }
    ],
    sotaque: '<strong>"NATOS: NASCIDO BR + NASCIDO EXT/PAI/MÃE BR + PORTUGUÊS"</strong>'
  };

  M['direitos-politicos'] = {
    topico: 'direitos-politicos',
    titulo: 'Direitos Políticos (art. 14)',
    resumo: 'Voto facultativo (16-17, 70+, analfabeto) e obrigatório (18-70). Plebiscito, referendo, iniciativa popular, elegibilidade.',
    teoria: '<p>Os <strong>direitos políticos</strong> são os direitos de participação na vida política do Estado. Incluem o <em>voto</em>, a <em>elegibilidade</em>, o <em>plebiscito</em>, o <em>referendo</em> e a <em>iniciativa popular</em>.</p>',
    regras:['Voto: obrigatório (18-70), facultativo (16-17, 70+, analfabeto)', 'Elegibilidade: requisitos constitucionais (art. 14, §3º)', 'Iniciativa popular: 1% do eleitorado nacional (mínimo 3 estados)', 'Plebiscito e referendo: convocados pelo Congresso'],
    excecoes:['O <em>voto</em> é obrigatório para os <em>estrangeiros</em> não (só brasileiros).', 'O <em>plebiscito</em> e o <em>referendo</em> são convocados pelo Congresso Nacional (art. 49, XV, CF).'],
    exemplos:['Maria, 17 anos, vota, mas não é obrigada.','João, 65 anos, vota (obrigatório até 70).','Plebiscito sobre o sistema de governo (1993).'],
    pegadinchas:['<strong>Voto</strong> é facultativo para <strong>16-17</strong> e <strong>70+</strong> e <strong>analfabetos</strong>.','O <em>conselho da República</em> não é órgão de decisão, mas de consulta.','A <em>iniciativa popular</em> é <strong>1% do eleitorado</strong> nacional.'],
    exercicios: [
      { q: 'O voto é facultativo para brasileiros entre 16 e 17 anos, com 70 anos ou mais ou analfabetos.', g: 'CERTO.' },
      { q: 'O voto é obrigatório para estrangeiros com residência permanente.', g: 'ERRADO. O voto é privativo de brasileiros.' }
    ],
    sotaque: '<strong>"FACULTATIVO: 16-17, 70+, ANALFABETO. OBRIGATÓRIO: 18-70"</strong>'
  };

  M['organizacao-estado'] = {
    topico: 'organizacao-estado',
    titulo: 'Organização do Estado: União, Estados, DF, Municípios',
    resumo: 'Forma federativa. União (4 poderes, DF). Estados (Executivo, Legislativo, Judiciário). Municípios (Executivo, Legislativo, sem Judiciário).',
    teoria: '<p>A <strong>organização do Estado</strong> brasileiro é <em>federativa</em> (art. 1º, CF), composta por <em>União</em>, <em>Estados</em>, <em>DF</em> e <em>Municípios</em>. Cada ente tem <em>autonomia</em> constitucional.</p>',
    regras:['União: 4 Poderes (Executivo, Legislativo, Judiciário + MP/TCU)', 'Estados: 3 Poderes + MP Estadual + TCE', 'DF: 3 Poderes, organizado em Regiões Administrativas (Lei Orgânica)', 'Municípios: 2 Poderes (Executivo, Legislativo), sem Judiciário'],
    excecoes:['O <em>Município</em> não tem <em>Judiciário</em> (pertence ao Estado ou à União).', 'O <em>DF</em> tem peculiaridades (não é dividido em municípios).'],
    exemplos:['São Paulo é Estado-membro da Federação.','Brasília é o DF, sede do Governo Federal.','Recife é Município, com Vereadores e Prefeito.'],
    pegadinchas:['<strong>Município</strong> tem <strong>2 poderes</strong> (não tem Judiciário).','<strong>DF</strong> tem <strong>3 poderes</strong> e acumula funções (estadual e municipal).','A <em>CF/88</em> prevê a <em>vedação da criação</em> de novos territórios.'],
    exercicios: [
      { q: 'O Município tem 2 Poderes: Executivo e Legislativo.', g: 'CERTO.' },
      { q: 'O DF tem apenas as funções estaduais, sem funções municipais.', g: 'ERRADO. O DF acumula funções estaduais e municipais.' }
    ],
    sotaque: '<strong>"UNIÃO: 4. ESTADOS/DF: 3. MUNICÍPIOS: 2."</strong>'
  };

  M['uniao'] = {
    topico: 'uniao',
    titulo: 'União: Competências (art. 21-24)',
    resumo: 'Competências exclusivas (art. 21) e privativas (art. 22). Lei delegada (art. 68). MP (art. 62).',
    teoria: '<p>A <strong>União</strong> tem competências privativas (legislar sobre direito civil, penal, comercial, etc. — art. 22) e exclusivas (defesa, política externa, emissão de moeda, etc. — art. 21). As competências privativas podem ser <em>delegadas</em> aos Estados (art. 22, parágrafo único).</p>',
    regras:['Competência exclusiva (art. 21): 30 incisos (defesa, política externa, moeda, etc.)', 'Competência privativa (art. 22): legislar sobre direito civil, penal, comercial, processual, etc.', 'Lei delegada (art. 68): ato do Presidente, com base em delegação do Congresso', 'MP (art. 62): ato monocrático do Presidente, com força de lei, prazo de 60 dias (prorrogável por mais 60)'],
    excecoes:['As <em>competências privativas</em> podem ser <em>delegadas</em> aos Estados (art. 22, parágrafo único).', 'A <em>MP</em> tem <strong>força de lei</strong>, mas pode ser declarada inconstitucional.'],
    exemplos:['União legisla sobre direito civil (CC, CPC).','Presidente edita MP em caso de relevância e urgência.','União emite moeda (Bacen).'],
    pegadinchas:['<strong>MP</strong> tem prazo de 60 dias, prorrogável por mais 60 (regra).','<strong>Lei delegada</strong> é diferente de MP: aquela é do Congresso, esta é do Presidente.','A <em>delegação</em> da competência privativa é específica, com prazo.'],
    exercicios: [
      { q: 'A União tem competência privativa para legislar sobre direito civil, penal, comercial, processual, entre outros.', g: 'CERTO.' },
      { q: 'A MP tem prazo de 90 dias, prorrogável por mais 30.', g: 'ERRADO. Tem prazo de 60 dias, prorrogável por mais 60.' }
    ],
    sotaque: '<strong>"UNIÃO: 30 EXCLUSIVAS (21) + 22 PRIVATIVAS. MP: 60+60."</strong>'
  };

  M['estados-municipios'] = {
    topico: 'estados-municipios',
    titulo: 'Estados e Municípios: Competências',
    resumo: 'Estados: competência residual (art. 25, §1º). Municípios: interesse local (art. 30). Vedações.',
    teoria: '<p>Os <strong>Estados</strong> têm competência <em>residual</em> (art. 25, §1º) para legislar sobre matérias que não sejam da União, nem dos Municípios. Os <strong>Municípios</strong> têm competência para matérias de <em>interesse local</em> (art. 30).</p>',
    regras:['Estados: competência residual (art. 25, §1º)', 'Municípios: interesse local (art. 30, I), suplementar à União e Estados (art. 30, II)', 'Vedações: criar tributos, instituir moeda, etc.', 'DF: acumula funções estaduais e municipais (art. 32)'],
    excecoes:['O <em>Município</em> pode legislar sobre <em>interesse local</em> (regra).', 'O <em>DF</em> tem vedações próprias (art. 19, ADCT).'],
    exemplos:['Estado legisla sobre desapropriação por necessidade pública.','Município legisla sobre horário de funcionamento de bares.','DF legisla sobre matérias estaduais e municipais.'],
    pegadinchas:['<strong>Estado</strong> tem <em>competência residual</em> (não expressa).','<strong>Município</strong> tem <em>interesse local</em>, mas a <em>suplementação</em> é limitada.','A <em>CF</em> prevê <em>vedações</em> específicas para cada ente.'],
    exercicios: [
      { q: 'O Estado tem competência residual, conforme a CF.', g: 'CERTO. Art. 25, §1º.' },
      { q: 'O Município pode legislar sobre direito civil.', g: 'ERRADO. O direito civil é competência privativa da União (art. 22, I).' }
    ],
    sotaque: '<strong>"ESTADO: RESIDUAL. MUNICÍPIO: INTERESSE LOCAL."</strong>'
  };

  M['intervencao'] = {
    topico: 'intervencao',
    titulo: 'Intervenção Federal e Estadual (art. 34-36)',
    resumo: 'Federal: nos estados. Estadual: nos municípios. Hipóteses taxativas. Limites materiais.',
    teoria: '<p>A <strong>intervenção</strong> é medida excepcional de supressão temporária da autonomia de um ente federativo. Pode ser <em>federal</em> (União nos Estados) ou <em>estadual</em> (Estado nos Municípios). As hipóteses são taxativas.</p>',
    regras:['Federal (art. 34): 6 hipóteses (União intervém em Estado)', 'Estadual (art. 35): 4 hipóteses (Estado intervém em Município)', 'Federal no DF (art. 36): 1 hipótese (Presidente intervém no DF, com aprovação do Senado)', 'Limites materiais: coisa julgada, exercício de direitos políticos'],
    excecoes:['A <em>intervenção federal</em> é <em>decreto</em> do Presidente, com aprovação do Senado.', 'A <em>intervenção estadual</em> é <em>decreto</em> do Governador, com aprovação da Assembleia.'],
    exemplos:['Estado invade território de outro → intervenção federal (art. 34, III).','Município não paga dívida → intervenção estadual (art. 35, IV).'],
    pegadinchas:['<strong>Federal</strong> é União nos Estados (art. 34).','<strong>Estadual</strong> é Estado nos Municípios (art. 35).','<strong>Decreto</strong> presidencial ou governamental é o instrumento.'],
    exercicios: [
      { q: 'A intervenção federal tem hipóteses taxativas na CF.', g: 'CERTO. Art. 34.' },
      { q: 'A intervenção federal dispensa aprovação do Senado.', g: 'ERRADO. Aprovação do Senado é necessária (art. 36, §1º).' }
    ],
    sotaque: '<strong>"INTERVENÇÃO: HIPÓTESES TAXATIVAS. DECRETO + APROVAÇÃO."</strong>'
  };

  M['poder-legislativo'] = {
    topico: 'poder-legislativo',
    titulo: 'Poder Legislativo: Estrutura e Funções',
    resumo: 'Bicameral: Câmara (513) e Senado (81). Imunidade material. CPI. TCU. Quatro funções típicas: legislar, fiscalizar, julgar, administrar.',
    teoria: '<p>O <strong>Poder Legislativo</strong> é exercido pelo Congresso Nacional (Câmara dos Deputados + Senado Federal) em nível federal. Tem <em>quatro funções</em>: <em>legislar</em> (fazer leis), <em>fiscalizar</em> (controlar Executivo), <em>administrar</em> (gestão interna) e <em>julgar</em> (processar e julgar autoridades).</p>',
    regras:['Câmara: 513 deputados (sistema proporcional, mandato 4 anos)', 'Senado: 81 senadores (sistema majoritário, mandato 8 anos)', 'CPI: poderes de investigação próprios das autoridades judiciais (art. 58, §3º)', 'TCU: controla contas públicas (art. 71-75)'],
    excecoes:['A <em>imunidade material</em> é de opinião, voto e declaração (art. 53).', 'A <em>CPI</em> pode <em>quebrar sigilo</em> bancário, fiscal, telefônico, sem ordem judicial.'],
    exemplos:['CPI do INSS é instalada com 27 assinaturas.','Senado aprova sabatina de ministro do STF.'],
    pegadinchas:['<strong>CPI</strong> tem poderes próprios das autoridades judiciais (quebra de sigilo).','<strong>Imunidade</strong> é para opiniões, votos e declarações, não para crimes.','O <em>mandato</em> de senador é 8 anos; de deputado é 4 anos.'],
    exercicios: [
      { q: 'A Câmara tem 513 deputados e o Senado tem 81 senadores.', g: 'CERTO.' },
      { q: 'A CPI tem poderes próprios das autoridades judiciais, conforme a CF.', g: 'CERTO. Art. 58, §3º.' }
    ],
    sotaque: '<strong>"513 + 81. 4 FUNÇÕES: LEGISLAR + FISCALIZAR + ADMINISTRAR + JULGAR."</strong>'
  };

  M['poder-executivo'] = {
    topico: 'poder-executivo',
    titulo: 'Poder Executivo: Presidente, Governador, Prefeito',
    resumo: 'Chefia de Estado e de Governo (Presidente). Mandato de 4 anos. Sistema presidencialista. Vice-presidente substitui e sucede.',
    teoria: '<p>O <strong>Poder Executivo</strong> é exercido pelo Presidente da República (União), Governador (Estado/DF) e Prefeito (Município). O Presidente é <em>Chefe de Estado</em> e <em>Chefe de Governo</em>, com mandato de 4 anos (CF/88, art. 82).</p>',
    regras:['Presidente: Chefe de Estado e Governo, 4 anos, vice presente', 'Mandato: 4 anos, sem possibilidade de prorrogação', 'Vice-presidente: substitui e sucede', 'Sistema: presidencialista (CF/88)'],
    excecoes:['O <em>Presidente</em> tem <em>imunidade</em> <strong>formal</strong> (prisão em flagrante por crime inafiançável).', 'O <em>Prefeito</em> tem <em>subsídio</em> fixado pela Câmara Municipal (art. 29, V, CF).'],
    exemplos:['Presidente é diplomado pelo TSE.','Governador responde por crime de responsabilidade.'],
    pegadinchas:['<strong>Presidente</strong> é Chefe de Estado e Governo, ao contrário do Brasil pré-1988 (que era Chefe de Estado).','<strong>Imunidade</strong> é apenas <em>formal</em>, não material.','O <em>mandato</em> é de 4 anos (regra).'],
    exercicios: [
      { q: 'O Presidente da República é Chefe de Estado e Chefe de Governo.', g: 'CERTO.' },
      { q: 'O mandato do Presidente é de 5 anos, com possibilidade de prorrogação.', g: 'ERRADO. É de 4 anos, sem prorrogação.' }
    ],
    sotaque: '<strong>"PRESIDENTE: 4 ANOS. CH. ESTADO + CH. GOVERNO."</strong>'
  };

  M['poder-judiciario'] = {
    topico: 'poder-judiciario',
    titulo: 'Poder Judiciário: Estrutura e Garantias',
    resumo: 'STF (11), STJ (33), TRF (6), TJ (27), TRF. Garantias: vitaliciedade, inamovibilidade, irredutibilidade de subsídio.',
    teoria: '<p>O <strong>Poder Judiciário</strong> é estruturado em <em>tribunais</em>: STF, STJ, TRFs, TJs, TJs Militares, TEs Eleitorais e Tribunais Superiores específicos. Os <em>juízes</em> têm <em>garantias constitucionais</em>: <em>vitaliciedade</em>, <em>inamovibilidade</em> e <em>irredutibilidade de subsídio</em>.</p>',
    regras:['STF: 11 ministros (Supremo Tribunal Federal)', 'STJ: 33 ministros (Superior Tribunal de Justiça)', 'TRFs: 6 (Tribunais Regionais Federais)', 'TJs: 27 (Tribunais de Justiça Estaduais)'],
    excecoes:['O <em>juiz</em> tem <em>vitaliciedade</em> (perde o cargo apenas por sentença transitada em julgado).', 'A <em>inamovibilidade</em> é relativa (pode ser removido por interesse público, com decisão do tribunal).'],
    exemplos:['Ministro do STF é indicado pelo Presidente, sabatinado pelo Senado, nomeado.','Juiz de Direito tem garantias constitucionais.'],
    pegadinchas:['<strong>STF</strong> tem 11 ministros, não 10 (CF, art. 92, I).','<strong>Vitaliciedade</strong> é para <em>juízes</em>, não para <em>promotores</em> (que têm vitaliciedade mas relativa).','A <em>irredutibilidade</em> é de <em>subsídio</em>, não de <em>vencimento</em>.'],
    exercicios: [
      { q: 'São garantias da magistratura: vitaliciedade, inamovibilidade e irredutibilidade de subsídio.', g: 'CERTO.' },
      { q: 'O STF é composto por 10 ministros.', g: 'ERRADO. São 11 ministros (art. 92, I, CF).' }
    ],
    sotaque: '<strong>"STF: 11. STJ: 33. TRF: 6. TJ: 27."</strong>'
  };

  M['ministerio-publico'] = {
    topico: 'ministerio-publico',
    titulo: 'Ministério Público: Estrutura e Funções',
    resumo: 'Função institucional: promover ação penal pública, zelar pelo patrimônio público, etc. Garantias: vitaliciedade, inamovibilidade, irredutibilidade.',
    teoria: '<p>O <strong>Ministério Público</strong> (MP) é instituição permanente, essencial à função jurisdicional do Estado. Tem <em>autonomia funcional</em> e <em>administrativa</em>. As <em>garantias</em> são: <em>vitaliciedade</em>, <em>inamovibilidade</em> e <em>irredutibilidade de subsídio</em>.</p>',
    regras:['MPRU: MP da União (Federal, do Trabalho, Militar, DF)', 'MP dos Estados', 'Funções: ação penal pública, zelo pelo patrimônio público, defesa dos direitos constitucionais, controle externo da atividade policial', 'Garantias: vitaliciedade, inamovibilidade, irredutibilidade de subsídio'],
    excecoes:['O <em>MP</em> tem <em>autonomia</em> funcional, administrativa e financeira.', 'O <em>controle externo</em> da atividade policial é do MP.'],
    exemplos:['Promotor oferece denúncia em ação penal pública.','MP fiscaliza aplicação de verbas públicas em programa social.'],
    pegadinchas:['<strong>MP</strong> tem <em>garantias</em> idênticas à magistratura (art. 128, §5º, I, "a", "b", "c", CF).','O <em>controle externo</em> da polícia é do MP (não da polícia).','O <em>MP Estadual</em> não tem a atribuição de promover ação penal federal.'],
    exercicios: [
      { q: 'O MP tem garantias constitucionais de vitaliciedade, inamovibilidade e irredutibilidade de subsídio.', g: 'CERTO.' },
      { q: 'O controle externo da atividade policial é da Polícia Federal.', g: 'ERRADO. É do Ministério Público.' }
    ],
    sotaque: '<strong>"MP: AÇÃO PÚBLICA + PATRIMÔNIO + CONTROLE EXTERNO + GARANTIAS"</strong>'
  };

  M['tcu'] = {
    topico: 'tcu',
    titulo: 'Tribunal de Contas da União (TCU)',
    resumo: 'Fiscalização contábil, financeira, orçamentária, operacional e patrimonial. Sancionatório (multa). 9 ministros. Mandato 8 anos.',
    teoria: '<p>O <strong>TCU</strong> (Tribunal de Contas da União) é o órgão de controle externo da União, com atuação no campo contábil, financeiro, orçamentário, operacional e patrimonial (art. 71-75, CF). Tem natureza <em>administrativa</em> e <em>jurisdicional</em>.</p>',
    regras:['Composição: 9 ministros', 'Mandato: 8 anos, vedada a recondução', 'Quórum: 6 ministros', 'Competências: fiscalização contábil, financeira, orçamentária, operacional, patrimonial', 'Poderes: sancionatório (multa), opinativo, normativo'],
    excecoes:['O <em>TCU</em> é <em>órgão</em>, não <em>autarquia</em> ou <em>fundação</em>.', 'O <em>TCU</em> aprecia contas anuais, mas <em>julga</em> contas de responsáveis.'],
    exemplos:['TCU fiscaliza aplicação de verbas federais.','Ministro do TCU é indicado pelo Presidente, sabatinado pelo Senado.'],
    pegadinchas:['<strong>TCU</strong> tem 9 ministros, <strong>não</strong> 7.','O <em>mandato</em> é 8 anos, <strong>sem</strong> recondução.','O <em>quórum</em> é de 6 ministros para deliberação.'],
    exercicios: [
      { q: 'O TCU é composto por 9 ministros, com mandato de 8 anos, vedada a recondução.', g: 'CERTO.' },
      { q: 'O TCU aprecia e julga as contas anuais do Presidente da República.', g: 'ERRADO. O TCU aprecia e emite parecer prévio; o julgamento é do Congresso.'  }
    ],
    sotaque: '<strong>"TCU: 9 MINISTROS, 8 ANOS, SEM RECONDUÇÃO"</strong>'
  };

  M['defensoria'] = {
    topico: 'defensoria',
    titulo: 'Defensoria Pública: Estrutura e Funções',
    resumo: 'Instituição permanente, essencial à função jurisdicional. Assistência jurídica gratuita. Garantias: similares a juízes e MPs.',
    teoria: '<p>A <strong>Defensoria Pública</strong> (art. 134, CF) é instituição permanente, essencial à função jurisdicional, incumbida da orientação jurídica e da defesa dos necessitados. Tem <em>autonomia</em> funcional e <em>administrativa</em>.</p>',
    regras:['Defensoria Pública da União (DPU)', 'Defensorias Públicas dos Estados', 'Garantias: inamovibilidade, irredutibilidade de subsídio, estabilidade após 3 anos', 'Ingresso: concurso público de provas e títulos'],
    excecoes:['A <em>DPU</em> e as <em>DPs</em> Estaduais têm a mesma natureza.', 'O <em>concurso</em> para defensor é de provas e títulos.'],
    exemplos:['Defensor atende réu em processo criminal.','Defensor atua em ação civil pública.'],
    pegadinchas:['<strong>Defensoria</strong> tem <em>garantias</em> similares a juízes e MPs (mas não vitaliciedade).','A <em>estabilidade</em> é após 3 anos de exercício.','A <em>DPU</em> é vinculada à União, mas <em>autônoma</em>.'],
    exercicios: [
      { q: 'A Defensoria Pública é instituição permanente, essencial à função jurisdicional, incumbida da defesa dos necessitados.', g: 'CERTO.' },
      { q: 'O defensor público tem vitaliciedade como o juiz.', g: 'ERRADO. Tem estabilidade após 3 anos, não vitaliciedade.' }
    ],
    sotaque: '<strong>"DEFENSORIA: ASSISTÊNCIA + CONCURSO + ESTABILIDADE (3 ANOS)"</strong>'
  };

  M['seguranca-publica'] = {
    topico: 'seguranca-publica',
    titulo: 'Segurança Pública (art. 144)',
    resumo: 'Polícia Federal, Polícia Rodoviária Federal, Polícia Ferroviária Federal, Polícia Civil, Polícia Militar, Corpo de Bombeiros, PCDF.',
    teoria: '<p>A <strong>segurança pública</strong> é dever do Estado, direito e responsabilidade de todos. Os <em>órgãos</em> são: <em>Polícia Federal</em>, <em>Polícia Rodoviária Federal</em>, <em>Polícia Ferroviária Federal</em>, <em>Polícia Civil</em>, <em>Polícia Militar</em> e <em>Corpo de Bombeiros Militar</em>.</p>',
    regras:['PF: crimes federais', 'PRF: rodovias federais', 'PFerr: ferrovias federais', 'PC: crimes comuns (estaduais)', 'PM: policiamento ostensivo', 'CBM: incêndios e resgates'],
    excecoes:['A <em>PC</em> é organizada pela União (PCDF) e pelos Estados (PCs).', 'A <em>PM</em> e o <em>CBM</em> são <em>forças auxiliares</em> do Exército.'],
    exemplos:['PF combate tráfico internacional.','PRF fiscaliza rodovias federais.','PM faz policiamento ostensivo.'],
    pegadinchas:['<strong>PM</strong> e <strong>CBM</strong> são <em>forças auxiliares</em> do Exército (CF, art. 42).','<strong>PF</strong> tem <em>competência</em> para crimes federais, mas a <em>PC</em> tem crimes estaduais.','A <em>PCDF</em> é mantida pela União (Lei 10.875/2004).'],
    exercicios: [
      { q: 'A segurança pública é dever do Estado, direito e responsabilidade de todos.', g: 'CERTO. Art. 144, caput, CF.' },
      { q: 'A Polícia Federal é responsável pelo policiamento ostensivo.', g: 'ERRADO. A PF faz investigação. A PM faz policiamento ostensivo.' }
    ],
    sotaque: '<strong>"PF + PRF + PFerr + PC + PM + CBM"</strong>'
  };

  M['tributos-ordenamento'] = {
    topico: 'tributos-ordenamento',
    titulo: 'Sistema Tributário Nacional (CF, art. 145-162)',
    resumo: 'Princípios, imunidades, limitações, tributos da União, dos Estados, dos Municípios e do DF. Repartição de receitas tributárias.',
    teoria: '<p>O <strong>Sistema Tributário Nacional</strong> está nos arts. 145-162 da CF/88. Inclui <em>princípios</em> (legalidade, anterioridade, irretroatividade), <em>imunidades</em>, <em>limitações</em> ao poder de tributar, <em>tributos</em> da União, dos Estados, dos Municípios e do DF, e a <em>repartição de receitas tributárias</em>.</p>',
    regras:['Tributos: impostos, taxas, contribuições de melhoria, contribuições especiais, empréstimos compulsórios', 'Imunidades: templos, partidos, educação/assistência, livros, exportação', 'Limitações: legalidade, anterioridade, irretroatividade, igualdade, vedação ao confisco', 'Repartição: FPE, FPM, royalties, etc.'],
    excecoes:['O <em>IGF</em> é previsto mas não regulamentado.','A <em>CSLL</em> tem natureza de imposto, mas é contribuição.'],
    exemplos:['IR (União), ICMS (Estados), ISS (Municípios), IPVA (Estados), IPTU (Municípios), ITR (União).'],
    pegadinchas:['<strong>Princípios</strong> limitam o poder de tributar.','<strong>Imunidades</strong> são limitações constitucionais.','<strong>Isenções</strong> são limitações legais.'],
    exercicios: [
      { q: 'O Sistema Tributário Nacional é disciplinado pelos arts. 145-162 da CF.', g: 'CERTO.' },
      { q: 'Os Municípios podem cobrar ICMS.', g: 'ERRADO. O ICMS é estadual (art. 155, II).' }
    ],
    sotaque: '<strong>"UNIÃO: 8 IMPOSTOS. ESTADO: 4. MUNICÍPIO: 4."</strong>'
  };

  M['orcamento'] = {
    topico: 'orcamento',
    titulo: 'Orçamento Público (PPA, LDO, LOA)',
    resumo: 'PPA: plano plurianual (4 anos). LDO: diretrizes (1 ano). LOA: orçamento anual (1 ano). Princípios: anualidade, unidade, universalidade, etc.',
    teoria: '<p>O <strong>orçamento público</strong> é regido por três leis: <em>PPA</em> (plano plurianual, 4 anos), <em>LDO</em> (diretrizes, 1 ano) e <em>LOA</em> (orçamento, 1 ano). Os <em>princípios</em> são: anualidade, unidade, universalidade, exclusividade, programação, entre outros.</p>',
    regras:['PPA: 4 anos, planejamento (art. 165, I)', 'LDO: 1 ano, diretrizes (art. 165, II)', 'LOA: 1 ano, orçamento (art. 165, III)', 'Princípios: anualidade, unidade, universalidade, exclusividade, programação, equilíbrio'],
    excecoes:['O <em>PPA</em> tem vigência no primeiro exercício do mandato do Chefe do Executivo até o primeiro exercício do mandato subsequente.', 'A <em>LDO</em> pode criar receita extraordinária.'],
    exemplos:['PPA 2024-2027: plano do atual governo.','LDO 2025: diretrizes para 2025.','LOA 2025: orçamento de 2025.'],
    pegadinchas:['<strong>PPA</strong>: 4 anos (e não 3 ou 5).','<strong>LDO</strong>: pode criar receita extraordinária (art. 167, §3º).','A <em>LOA</em> não pode criar tributo (princípio da legalidade).'],
    exercicios: [
      { q: 'O PPA tem vigência de 4 anos, conforme a CF.', g: 'CERTO.' },
      { q: 'A LOA pode criar tributo novo, conforme a CF.', g: 'ERRADO. A LOA não pode criar tributo (princípio da legalidade).' }
    ],
    sotaque: '<strong>"PPA: 4 ANOS. LDO: 1 ANO. LOA: 1 ANO."</strong>'
  };

  M['cf-direitos-humanos'] = {
    topico: 'cf-direitos-humanos',
    titulo: 'Direitos Humanos na CF/88',
    resumo: 'Art. 5º, §3º: equivalência dos tratados. STF: supraconstitucional. Características: universalidade, indivisibilidade, interdependência.',
    teoria: '<p>Os <strong>direitos humanos</strong> na CF/88 estão no art. 5º, §2º e §3º. O §3º trata da <em>equivalência</em> entre tratado e emenda constitucional (regra original). O STF, no julgamento do RE 466.343-SP (2008), entendeu que <em>tratados de direitos humanos</em> são <em>supraconstitucionais</em>.</p>',
    regras:['Art. 5º, §2º: direitos e garantias não excluem outros', 'Art. 5º, §3º: tratado sobre direitos humanos equivale a EC (se aprovado em 2 turnos, 3/5)', 'STF: supraconstitucional (RE 466.343)', 'Características: universalidade, indivisibilidade, interdependência'],
    excecoes:['<em>Tratados comuns</em> têm hierarquia <em>supralegal</em> (regra).','<em>Tratados de DH</em> aprovados em 2 turnos e 3/5 têm hierarquia de EC (regra).','<em>Tratados de DH</em> não aprovados nesse rito têm hierarquia de EC (STF, supraconstitucional).'],
    exemplos:['Pacto de San José da Costa Rica (1969) tem natureza supraconstitucional (STF).','Declaração Universal dos Direitos Humanos (1948) é parâmetro interpretativo.'],
    pegadinchas:['<strong>STF</strong>: tratados de DH têm hierarquia <em>supraconstitucional</em>.','A <em>regra do §3º</em> é a equivalência a EC, mas a jurisprudência é mais protetiva.','O <em>Brasil</em> é signatário de vários tratados de DH (CEDH, PIDCP, etc.).'],
    exercicios: [
      { q: 'Os tratados de direitos humanos têm hierarquia supraconstitucional, segundo o STF.', g: 'CERTO.' },
      { q: 'Os tratados comuns têm hierarquia constitucional.', g: 'ERRADO. Têm hierarquia supralegal (regra).' }
    ],
    sotaque: '<strong>"DH = SUPRACONSTITUCIONAL (STF). COMUM = SUPRALEGAL."</strong>'
  },

  global.MATERIAS_EXT = global.MATERIAS_EXT || {};
  global.MATERIAS_EXT.constitucional = M;
})(window);
