/* ==========================================================
   materias/previdenciario.js — Direito Previdenciário (45 lições)
   Estrutura por lição: {topico, titulo, resumo, teoria, regras,
   excecoes, exemplos, pegadinhas, exercicios, sotaque}
   ========================================================== */
(function (global) {
  'use strict';
  const M = {};

  M['seguridade-social'] = {
    topico: 'seguridade-social',
    titulo: 'Seguridade Social (CF, arts. 194-200)',
    resumo: 'Conjunto integrado de ações relativas à saúde, previdência e assistência social, com princípios constitucionais próprios.',
    teoria: '<p>A <strong>Seguridade Social</strong> é o conjunto integrado de ações do Estado e da sociedade destinadas a assegurar os direitos relativos à <strong>saúde</strong>, <strong>previdência</strong> e <strong>assistência social</strong> (art. 194, caput, CF/88). Trata-se de um <em>subsistema</em> dentro do ordenamento, com financiamento próprio e princípios específicos.</p><p>Os <strong>princípios constitucionais</strong> (art. 194, parágrafo único) são cláusulas pétreas materiais — não podem ser abolidas por emenda constitucional. O CEBRASPE adora cobrá-los literalmente.</p>',
    regras: ['I — Universalidade da cobertura e do atendimento', 'II — Uniformidade e equivalência dos benefícios e serviços às populações urbanas e rurais', 'III — Seletividade e distributividade na prestação dos benefícios e serviços', 'IV — Irredutibilidade do valor dos benefícios', 'V — Equidade na forma de participação no custeio', 'VI — Diversidade da base de financiamento', 'VII — Caráter democrático e descentralizado da gestão administrativa, com participação da comunidade, em especial de trabalhadores, empregadores e aposentados', 'VIII — Preexistência do custeio sobre o benefício ou serviço'],
    excecoes: ['A assistência social é prestada a quem dela necessitar, <strong>independentemente de contribuição</strong> (art. 203).', 'A previdência social tem natureza <em>contributiva</em>, embora com filiação obrigatória.'],
    exemplos: ['O SUS é parte da seguridade social e é universal — não exige contribuição.', 'O BPC (LOAS) é benefício assistencial — não exige contribuição, mas exige miserabilidade e idade/incapacidade.', 'A aposentadoria é contributiva — exige carência e idade (regra geral).'],
    pegadinhas: ['NUNCA confunda Seguridade Social com Previdência Social. Seguridade = saúde + previdência + assistência. Previdência é apenas um tripé.', 'O princípio da <strong>irredutibilidade</strong> é do valor dos benefícios, mas pode haver <em>revisão</em> para adequação ao teto.', 'A <strong>universalidade da cobertura</strong> é diferente de universalidade do atendimento: a primeira é do risco coberto, a segunda é do público alvo.'],
    exercicios: [
      { q: 'A seguridade social compreende as ações relativas à saúde, previdência e assistência social, sendo financiada por toda a sociedade.', g: 'CERTO. Art. 195: financiamento por toda a sociedade, de forma direta e indireta.' },
      { q: 'O princípio da irredutibilidade impede qualquer revisão do valor dos benefícios previdenciários.', g: 'ERRADO. A irredutibilidade é do valor nominal, mas há revisão para adequação ao teto (art. 201, §11).' }
    ],
    sotaque: '<strong>"SAÚDE + PREVIDÊNCIA + ASSISTÊNCIA = SEGURIDADE"</strong>'
  };

  M['custeio-seguridade'] = {
    topico: 'custeio-seguridade',
    titulo: 'Custeio da Seguridade Social (art. 195)',
    resumo: 'Fontes de receita: contribuições sociais (sobre folha, faturamento/receita, lucro, importador), contribuição do trabalhador, concursos, e receita de concursos de prognósticos.',
    teoria: '<p>O art. 195 da CF/88 prevê o <strong>financiamento da seguridade social</strong> por toda a sociedade, de forma direta e indireta, mediante recursos provenientes da União, Estados, DF, Municípios e de contribuições sociais. As contribuições sociais possuem <em>natureza tributária</em> e são regidas pelo CTN.</p>',
    regras: ['I — Contribuições do empregador, da empresa e da entidade a ela equiparada (incidentes sobre folha, faturamento/receita e lucro)', 'II — Contribuições do trabalhador e dos demais segurados', 'III — Receita de concursos de prognósticos', 'IV — Outras receitas (doações, patrimônio, alienações, etc.)'],
    excecoes: ['A <strong>COFINS</strong> incide sobre o faturamento, não sobre o lucro (quem incide sobre lucro é a CSLL).', 'A contribuição sobre <strong>importação de bens e serviços</strong> (CIDE-Combustíveis e similares) tem aplicação específica.'],
    exemplos: ['Contribuição sobre folha: 20% a 22,5% (previdenciária patronal), mais 5,8% (Sistema S/SESC).', 'COFINS: 7,6% sobre o faturamento (regra geral).', 'CSLL: 9% ou 15% sobre o lucro (varia conforme a atividade).'],
    pegadinhas: ['A contribuição do <strong>empregador doméstico</strong> tem alíquota reduzida e regras próprias (LC 150/2015).', 'Cuidado: contribuição sobre <strong>faturamento</strong> ≠ contribuição sobre <strong>receita</strong> em alguns contextos (Cofins era faturamento; após LC 214/2025 pode mudar).', 'A DRU (Desvinculação de Receitas da União) desvincula parte das contribuições sociais para fins gerais — mas não afeta o piso de saúde e educação.'],
    exercicios: [
      { q: 'A seguridade social é financiada por toda a sociedade, mediante recursos da União, Estados, DF e Municípios, além de contribuições sociais.', g: 'CERTO. Art. 195, caput, CF.' },
      { q: 'A contribuição do empregador sobre a folha de salários é de 30%.', g: 'ERRADO. Em regra, é de 20% a 22,5% (risco previdenciário), mais 5,8% (Sistema S/SESC), totalizando 25,8% a 28,3%.' }
    ],
    sotaque: '<strong>"FISCO + TRABALHADOR + JOGOS + OUTROS = FONTES DA SEGURIDADE"</strong>'
  };

  M['saude'] = {
    topico: 'saude',
    titulo: 'Saúde (Lei 8.080/90 e SUS)',
    resumo: 'A saúde é direito de todos e dever do Estado, garantido mediante políticas sociais e econômicas. O SUS é o sistema público, universal e gratuito.',
    teoria: '<p>O direito à <strong>saúde</strong> está previsto nos arts. 6º e 196-200 da CF/88 e regulamentado pela Lei 8.080/90. O <strong>SUS</strong> (Sistema Único de Saúde) foi criado pela CF/88 e é regido pela Lei 8.080/90 e Lei 8.142/90 (participação social). É <em>universal, integral, equânime e gratuito</em>.</p>',
    regras: ['Universalidade de acesso', 'Integralidade da atenção', 'Equidade', 'Descentralização (municipalização)', 'Regionalização e hierarquização', 'Participação da comunidade (conselhos e conferências)'],
    excecoes: ['A iniciativa privada pode participar <strong>complementarmente</strong> do SUS (art. 199).', 'A <em>dupla porta</em> permite ao usuário usar o SUS e o sistema privado concomitantemente.'],
    exemplos: ['UBS (Unidade Básica de Saúde) é a porta de entrada do SUS.', 'Consultas, exames, internações, transplantes e medicamentos de alto custo são cubiertos pelo SUS.', 'O usuário pode escolher qualquer serviço público de saúde, independentemente de vínculo territorial.'],
    pegadinhas: ['SUS ≠ SUDS. O SUDS foi sistema <em>transitório</em> anterior ao SUS.', 'Cuidado: o STF firmou tese de que o <strong>Estado</strong> é obrigado a fornecer medicamento de alto custo <em>registrado na ANVISA</em> (RE 657.718).', 'A <em>judicialização da saúde</em> é tema frequente em prova.'],
    exercicios: [
      { q: 'O SUS é financiado exclusivamente por recursos da União.', g: 'ERRADO. O financiamento é tripartite: União, Estados e Municípios.' },
      { q: 'É permitida a participação complementar da iniciativa privada no SUS.', g: 'CERTO. Art. 199, §1º, CF.' }
    ],
    sotaque: '<strong>"UNI = UNIVERSAL, INTEGRAL, EQUÂNIME"</strong>'
  };

  M['assistencia-social'] = {
    topico: 'assistencia-social',
    titulo: 'Assistência Social (LOAS — Lei 8.742/93)',
    resumo: 'Política não contributiva, organizada pelo SUAS, que prevê o BPC e benefícios eventuais para quem dela necessitar.',
    teoria: '<p>A <strong>Assistência Social</strong> é a terceira vertente da Seguridade Social (art. 203, CF). É prestada a quem dela necessitar, <em>independentemente de contribuição</em>, com objetivo de proteger a família, maternidade, infância, adolescência, velhice e a pessoa com deficiência. É organizada pelo <strong>SUAS</strong> (Sistema Único de Assistência Social — Lei 12.435/2011).</p>',
    regras: ['BPC (Benefício de Prestação Continuada): 1 salário mínimo mensal ao idoso ≥ 65 anos ou à pessoa com deficiência', 'Renda per capita familiar < 1/4 do salário mínimo (regra atual; STF modulou para 1/2 em 2025)', 'Atualização dos valores na mesma data dos benefícios do RGPS', 'Benefícios eventuais (auxílio-natalidade, funeral, calamidade, etc.)'],
    excecoes: ['O BPC <strong>não paga 13º</strong> (não segue regra do RGPS).', 'Cumulação do BPC com outro benefício do RGPS é <strong>vedada</strong> (art. 20, §4º).', 'O BPC <em>pode</em> ser cumulado com pensão especial de natureza indenizatória.'],
    exemplos: ['Maria, 67 anos, renda per capita R$ 200 (1/4 do SM), sem outro benefício → tem direito ao BPC idoso.', 'João, 30 anos, deficiência física, mesma renda → tem direito ao BPC pessoa com deficiência.'],
    pegadinhas: ['BPC é <em>intransferível</em> e <em>irrenunciável</em>.', 'O critério de renda foi ampliado pelo STF (2025) para até 1/2 do SM, mas a lei fala em 1/4 — questão controversa.', 'A pessoa com deficiência tem o BPC <strong>enquanto perdurar a deficiência</strong>; pode haver revisão.'],
    exercicios: [
      { q: 'O BPC é devido ao idoso com 65 anos ou mais, desde que comprove renda per capita inferior a 1/4 do salário mínimo.', g: 'CERTO (regra legal, mas com modulação do STF).' },
      { q: 'O BPC pode ser acumulado com aposentadoria de até 1 salário mínimo.', g: 'ERRADO. A acumulação é vedada (art. 20, §4º).' }
    ],
    sotaque: '<strong>"BPC: IDOSO 65+ ou PcD, SEM 13º, SEM CUMULAR COM RGPS"</strong>'
  };

  M['regime-juridico-previdenciario'] = {
    topico: 'regime-juridico-previdenciario',
    titulo: 'Regime Jurídico Previdenciário (RGPS vs RPPS)',
    resumo: 'O RGPS é contributivo, de filiação obrigatória, para trabalhadores em geral. O RPPS é de filiação vinculada ao cargo efetivo.',
    teoria: '<p>Existem dois regimes previdenciários básicos no Brasil: o <strong>RGPS</strong> (Regime Geral de Previdência Social) e o <strong>RPPS</strong> (Regime Próprio de Previdência Social). O RGPS é gerido pelo INSS e se aplica a todos os trabalhadores não vinculados a regime próprio. O RPPS é gerido por cada ente federativo para seus servidores públicos titulares de cargo efetivo.</p>',
    regras: ['RGPS: contributivo e de filiação obrigatória', 'RPPS: contributivo, solidário e de filiação vinculada ao cargo efetivo', 'Aposentadoria compulsória (75 anos) é regra comum aos dois regimes', 'Teto do RGPS: valor igual ao teto do funcionalismo (vinculação atual)'],
    excecoes: ['O servidor <em>estável</em> que exerça atividade privada (acumulação legal) é filiado ao RGPS.', 'O <strong>mandato eletivo</strong> gera filiação ao RGPS, salvo se o servidor já for titular de cargo efetivo acumulável.'],
    exemplos: ['João, CLT de uma empresa privada → RGPS.', 'Maria, servidora estatutária do município de Belo Horizonte → RPPS municipal.', 'José, servidor do INSS → RPPS federal (regime próprio).'],
    pegadinhas: ['Cuidado: o <strong>celetista</strong> da administração pública (empresa pública, sociedade de economia mista) é filiado ao <em>RGPS</em>, não ao RPPS.', 'O <em>ocupante apenas de cargo em comissão</em> é filiado ao RGPS.', 'A EC 103/2019 alterou profundamente as regras do RPPS (alíquota progressiva, idade mínima, etc.).'],
    exercicios: [
      { q: 'O ocupante exclusivamente de cargo em comissão é filiado ao RGPS.', g: 'CERTO. Art. 40, §14, CF.' },
      { q: 'O servidor público titular de cargo efetivo, ao exercer cumulativamente cargo em comissão, deixa de ser filiado ao RPPS.', g: 'ERRADO. A acumulação lícita mantém a filiação ao RPPS no cargo efetivo.' }
    ],
    sotaque: '<strong>"RGPS = CLT e assemelhados. RPPS = cargo efetivo estatutário"</strong>'
  };

  M['filiacao'] = {
    topico: 'filiacao',
    titulo: 'Filiados e Segurados do RGPS (Lei 8.213/91)',
    resumo: 'Filiação é o vínculo ao RGPS, obrigatório para quem exerce atividade remunerada. Segurado é quem está filiado.',
    teoria: '<p>A <strong>filiação</strong> é o vínculo jurídico que une a pessoa ao RGPS, gerando direitos e obrigações. Para o segurado <em>empregado</em>, a filiação é automática com o início da atividade. Para os demais, depende do primeiro pagamento ou inscrição. <strong>Segurado</strong> é a pessoa física filiada ao RGPS (arts. 11-15, Lei 8.213/91).</p>',
    regras: ['Segurados obrigatórios: empregado, doméstico, trabalhador avulso, contribuinte individual, segurado especial', 'Segurados facultativos: donas-de-casa, estudantes, presidiários, etc.', 'A qualidade de segurado independe do recolhimento de contribuições', 'Período de graça: mantém a qualidade de segurado por certo período após cessar a contribuição'],
    excecoes: ['O <em>segurado facultativo</em> não pode contribuir sobre salário mínimo (precisa de pelo menos 1 SM).', 'O <em>empregador doméstico</em> tem regras específicas (LC 150/2015).'],
    exemplos: ['Pedro, professor particular, dá aulas informais → contribuinte individual.', 'Ana, dona de casa sem renda → segurada facultativa.', 'João, lavrador que produz em sua terra e comercializa → segurado especial.'],
    pegadinhas: ['<strong>Filiação</strong> ≠ <strong>segurado</strong> em sentido estrito. Filiação é o ato; segurado é o status.', 'O <em>estagiário</em> é filiado ao RGPS (Lei 11.788/2008), mas há discussão sobre a qualidade de segurado em si.', 'O <em>sindicalista</em> é segurado obrigatório mesmo quando remunerado exclusivamente pelo sindicato.'],
    exercicios: [
      { q: 'A filiação ao RGPS é automática para o segurado empregado.', g: 'CERTO. Art. 20, Lei 8.213/91.' },
      { q: 'A dona de casa sem renda é segurada facultativa do RGPS.', g: 'CERTO. Art. 13, Lei 8.213/91.' }
    ],
    sotaque: '<strong>"FILIAR = ato. SEGURAR = estado."</strong>'
  };

  M['segurados-obrigatorios'] = {
    topico: 'segurados-obrigatorios',
    titulo: 'Segurados Obrigatórios (art. 11)',
    resumo: 'Lista taxativa do art. 11: empregado, doméstico, avulso, contribuinte individual, segurado especial.',
    teoria: '<p>Os <strong>segurados obrigatórios</strong> estão taxativamente enumerados no art. 11 da Lei 8.213/91. A enumeração é exaustiva, embora a expressão "sem excluir" do caput admita interpretação extensiva. São: <em>empregado, empregado doméstico, trabalhador avulso, contribuinte individual e segurado especial</em>.</p>',
    regras: ['Empregado: trabalho não-eventual, com subordinação e onerosidade', 'Doméstico: pessoa que presta serviço a pessoa/famínea, sem fim lucrativo (LC 150/2015)', 'Avulso: trabalho prestado a várias empresas, sem vínculo empregatício', 'Contribuinte individual: autônomos, diretores, presidiários, etc.', 'Segurado especial: produtor rural, pescador artesanal, garimpeiro (em cooperativa)'],
    excecoes: ['O <em>trabalhador eventual</em> sem vínculo é contribuinte individual.', 'O <em>estagiário</em> é segurado obrigatório, mas com regras próprias.'],
    exemplos: ['Médico, advogado, dentista, engenheiro que trabalham por conta própria → contribuintes individuais.', 'Catador de recicláveis em cooperativa → segurado especial (Lei 9.867/99).', 'Presidente de empresa → contribuinte individual (mesmo que tenha mandato).'],
    pegadinhas: ['NUNCA confunda <em>avulso</em> com <em>eventual</em>. Avulso tem habitualidade e várias empresas; eventual é esporádico.', 'O <strong>magistrado</strong> de Tribunal de Justiça é vinculado ao RPPS, não ao RGPS.', 'O <em>menor aprendiz</em> é segurado obrigatório (empregado).'],
    exercicios: [
      { q: 'São segurados obrigatórios do RGPS: empregado, doméstico, avulso, contribuinte individual e segurado especial.', g: 'CERTO. Art. 11, Lei 8.213/91.' },
      { q: 'O trabalhador eventual sem vínculo empregatício é segurado obrigatório do RGPS como avulso.', g: 'ERRADO. É contribuinte individual, pois avulso presta serviços a várias empresas com habitualidade.' }
    ],
    sotaque: '<strong>"EMPREGADO + DOMÉSTICO + AVULSO + INDIVIDUAL + ESPECIAL = OBRIGATÓRIO"</strong>'
  };

  M['segurados-facultativos'] = {
    topico: 'segurados-facultativos',
    titulo: 'Segurados Facultativos (art. 13)',
    resumo: 'Pessoas sem atividade remunerada que optam por filiar-se ao RGPS. Lista do art. 13.',
    teoria: '<p>São <strong>segurados facultativos</strong> as pessoas físicas que não exercem atividade remunerada e se filiam ao RGPS por opção. O rol do art. 13, Lei 8.213/91, é taxativo. A filiação é feita mediante inscrição formal e primeiro recolhimento.</p>',
    regras: ['Dona-de-casa', 'Estudante', 'Estagiário (em alguns casos)', 'Desempregado', 'Presidiário (sem vínculo)', 'Brasileiro que vive no exterior sem vínculo', 'Pescador e garimpeiro (sem cooperativa)'],
    excecoes: ['O <em>estagiário</em> com bolsa-auxílio é filiado obrigatório (Lei 11.788/2008).', 'O <em>menor de 16 anos</em> não pode ser segurado facultativo (salvo em caso de menor aprendiz a partir de 14).'],
    exemplos: ['Maria, mãe de família, cuida da casa → pode se filiar como facultativa.', 'João, estudante de Direito, sem renda → facultativo.'],
    pegadinhas: ['<strong>Facultativo</strong> tem carência e qualidade de segurado.', 'O <em>magistrado</em> aposentado que volta a advogar pode ser facultativo do RGPS.', 'O <em>afastado</em> sem renda é facultativo.'],
    exercicios: [
      { q: 'A dona de casa sem renda que opta por se filiar ao RGPS é segurada facultativa.', g: 'CERTO. Art. 13, Lei 8.213/91.' },
      { q: 'O estagiário que recebe bolsa-auxílio é segurado facultativo do RGPS.', g: 'ERRADO. É segurado obrigatório (Lei 11.788/2008).' }
    ],
    sotaque: '<strong>"FACULTATIVO: NÃO É OBRIGADO, MAS QUER"</strong>'
  };

  M['perda-qualidade'] = {
    topico: 'perda-qualidade',
    titulo: 'Perda da Qualidade de Segurado',
    resumo: 'A perda ocorre com o falecimento, o término do vínculo, ou a cessação da atividade (com possibilidade de período de graça).',
    teoria: '<p>Perde a qualidade de segurado quem <em>falecer</em> ou deixar de exercer atividade que o filiou ao RGPS sem recolher contribuições. Para os segurados obrigatórios, a perda ocorre no dia seguinte ao do término do vínculo ou da atividade. Para os facultativos, no dia seguinte ao do último recolhimento.</p>',
    regras: ['Regra geral: perda no dia seguinte ao término da atividade/vínculo', 'Período de graça: 12 meses (prorrogáveis)', 'Período de graça estendido: até 24 ou 36 meses em casos específicos (Lei 8.213/91, art. 15, §1º a §3º)'],
    excecoes: ['O <em>segurado que está recebendo benefício</em> (auxílio-doença, aposentadoria) mantém a qualidade mesmo sem contribuição.', 'O <em>segurado recluso</em> mantém a qualidade (Lei 8.213/91, art. 116).'],
    exemplos: ['Maria perdeu o emprego em 01/01/2026 → se não contribuir, perde a qualidade em 01/01/2027 (12 meses).', 'Pedro ficou doente em 02/2026 e recebeu benefício até 10/2026 → manteve a qualidade.'],
    pegadinhas: ['O <strong>período de graça</strong> NÃO é perda da qualidade; é prorrogação.', 'A <em>prorrogação</em> de 24 meses exige idade ≥ 60 anos (homem) ou ≥ 55 anos (mulher) e tempo de contribuição ≥ 120 meses.', 'A <em>prorrogação</em> de 36 meses exige tempo de contribuição ≥ 120 meses, com cumprimento parcial de carência.'],
    exercicios: [
      { q: 'O segurado que se aposenta e depois decai do benefício mantém a qualidade de segurado por 12 meses.', g: 'ERRADO. Aposentado que recebe benefício mantém a qualidade; quem decai do benefício pode ter período de graça.' },
      { q: 'O período de graça pode ser prorrogado por até 24 ou 36 meses, conforme o caso.', g: 'CERTO. Art. 15, §1º, Lei 8.213/91.' }
    ],
    sotaque: '<strong>"PERDA = FIM DO VÍNCULO. PERÍODO DE GRAÇA = PRORROGAÇÃO"</strong>'
  };

  M['carencia'] = {
    topico: 'carencia',
    titulo: 'Carência (art. 24-25)',
    resumo: 'Número mínimo de contribuições mensais para ter direito a certos benefícios. Regra: 12 contribuições, salvo exceções.',
    teoria: '<p><strong>Carência</strong> é o número mínimo de contribuições mensais indispensáveis para a concessão de determinados benefícios. Regra geral: 12 contribuições mensais (art. 25, I). Algumas prestações previdenciárias não exigem carência (art. 26).</p>',
    regras: ['Regra geral: 12 contribuições mensais', 'Aposentadoria por idade, por invalidez, especial: carência específica', 'Auxílio-doença: 12 contribuições (salvo acidente)', 'Salário-maternidade: dispensa carência em alguns casos', 'Pensão por morte: dispensa carência (art. 26, I)'],
    excecoes: ['Benefícios sem carência (art. 26): pensão por morte, salário-família, auxílio-acidente, salário-maternidade (em alguns casos), aposentadoria por invalidez acidentária.', 'Para o <em>segurado especial</em>, a carência pode ser comprovada por tempo de trabalho rural (Lei 11.718/2008).'],
    exemplos: ['Pedro, 25 anos, 11 contribuições → não tem carência para auxílio-doença.', 'Maria, sofreu acidente de trabalho → não precisa de carência para aposentadoria por invalidez.'],
    pegadinhas: ['<strong>Carência</strong> ≠ tempo de contribuição. Carência é o número de meses; tempo de contribuição é o cômputo total.', 'O <em>período de graça</em> não conta como carência (em regra).', 'Para <em>aposentadoria por idade</em>, a carência é a mesma regra (12 contribuições), mas há regra transitória para 180 meses até 2027 (EC 103/2019).'],
    exercicios: [
      { q: 'A carência para aposentadoria por idade é, regra geral, de 180 contribuições mensais.', g: 'ERRADO. A regra é de 12 contribuições, com regra de transição da EC 103/2019 para 180 até 2027.' },
      { q: 'A pensão por morte dispensa carência.', g: 'CERTO. Art. 26, I, Lei 8.213/91.' }
    ],
    sotaque: '<strong>"CARÊNCIA: 12 EM REGRA, EXCEÇÕES NO ART. 26"</strong>'
  };

  M['salario-beneficio'] = {
    topico: 'salario-beneficio',
    titulo: 'Salário-de-Benefício (SB) — Regras CEBRASPE',
    resumo: 'Base de cálculo dos benefícios. Para a maioria, é a média dos 80% maiores salários desde 07/1994.',
    teoria: '<p>O <strong>salário-de-benefício</strong> (SB) é a base de cálculo sobre a qual se aplica o coeficiente para obter o valor da prestação. Para a maioria dos benefícios (aposentadoria por idade, aposentadoria por invalidez, auxílio-doença), o SB é a média aritmética simples dos <strong>80% maiores salários-de-contribuição</strong> de todo o período contributivo desde julho de 1994 (Lei 8.213/91, art. 28).</p>',
    regras: ['Para a maioria: média dos 80% maiores salários de contribuição desde 07/1994', 'Para aposentadoria por idade após EC 103/2019: 100% dos salários', 'Auxílio-doença: 80% maiores', 'Pensão por morte: 100% dos salários (regra nova)'],
    excecoes: ['Para o <em>segurado especial</em>, há regras específicas de cálculo.', 'Para <em>aposentadoria especial</em>, o cálculo é diferente (soma de fatores).'],
    exemplos: ['Pedro contribuiu por 20 anos → média dos 80% maiores salários = R$ 3.000 → SB = R$ 3.000.', 'Aposentadoria por idade após 13/11/2019 → média de 100% dos salários.'],
    pegadinhas: ['Cuidado: a <em>média</em> é aritmética simples, não ponderada.', 'O <em>período básico de cálculo</em> (PBC) é o período desde 07/1994 ou desde a primeira contribuição (se posterior).', 'O <em>fator previdenciário</em> e o <em>fator 85/95</em> (extinto em 13/11/2019) eram aplicados.'],
    exercicios: [
      { q: 'O salário-de-benefício de aposentadoria por idade é a média aritmética simples dos 80% maiores salários de contribuição desde julho de 1994.', g: 'CERTO (para benefícios anteriores à EC 103/2019).' },
      { q: 'A EC 103/2019 alterou a regra de cálculo do SB para todas as aposentadorias.', g: 'ERRADO. A regra nova vale para aposentadorias concedidas após 13/11/2019.' }
    ],
    sotaque: '<strong>"SB: MÉDIA DOS 80% MAIORES (ou 100% após 2019)"</strong>'
  };

  M['aposentadoria-invalidez'] = {
    topico: 'aposentadoria-invalidez',
    titulo: 'Aposentadoria por Invalidez (art. 42-47)',
    resumo: 'Benefício devido ao segurado permanentemente incapaz de trabalhar. Valor: 100% do SB + 25% se precisar de cuidador.',
    teoria: '<p>A <strong>aposentadoria por invalidez</strong> é devida ao segurado que, estando ou não em gozo de auxílio-doença, for considerado <em>incapaz e insusceptível de reabilitação</em> para o exercício de atividade que lhe garanta a subsistência (art. 42). Tem caráter <em>permanente</em>, com revisões periódicas.</p>',
    regras: ['Carência: 12 contribuições (salvo acidente, doença profissional ou do trabalho)', 'Valor: 100% do SB', 'Acrescenta 25% se necessitar de assistência permanente de outra pessoa', 'Termo inicial: 17º dia do afastamento (se > 15 dias), exceto acidente (dia seguinte)'],
    excecoes: ['O <em>aposentado por invalidez</em> pode ser convocado a exame médico a qualquer tempo.', 'A <em>concessão</em> depende de incapacidade total e permanente (não basta incapacidade parcial).'],
    exemplos: ['João, metalúrgico, perdeu a mão em acidente → aposentadoria por invalidez acidentária (sem carência).', 'Maria, 50 anos, com câncer terminal → aposentadoria por invalidez.'],
    pegadinhas: ['O valor é de <strong>100% do SB</strong> (não 50% ou 60%).', 'O adicional de 25% por dependente de cuidador <em>não</em> gera efeito cascata em outros benefícios.', 'O <em>aposentado por invalidez</em> tem isenção de IR (até o teto).'],
    exercicios: [
      { q: 'A aposentadoria por invalidez tem valor de 100% do salário-de-benefício.', g: 'CERTO. Art. 44, Lei 8.213/91.' },
      { q: 'O aposentado por invalidez com deficiência grave que precise de cuidador recebe 50% a mais.', g: 'ERRADO. Recebe 25% a mais.' }
    ],
    sotaque: '<strong>"INVALIDEZ: 100% + 25% (cuidador)"</strong>'
  };

  M['aposentadoria-idade'] = {
    topico: 'aposentadoria-idade',
    titulo: 'Aposentadoria por Idade (art. 48-51)',
    resumo: 'Idade mínima: 65 (homem) / 62 (mulher) + 180 meses de contribuição (regra de transição EC 103/2019).',
    teoria: '<p>A <strong>aposentadoria por idade</strong> exige idade mínima (65 anos, homem; 62 anos, mulher — após EC 103/2019) e tempo de contribuição mínimo (180 meses em 2027; regride em alguns casos). A regra antiga (CF/88 antes da EC 103/2019) exigia 65/60 anos e 180 meses de contribuição para homens e mulheres, respectivamente.</p>',
    regras: ['Idade: 65 (H) / 62 (M) após 13/11/2019', 'Carência: 180 meses (regra transitória: 180 até 2027, mas há exceções)', 'Valor: 60% + 1% por ano extra se homem; 60% + 2% por ano extra se mulher', 'Regra de pontos: somatório de idade + tempo de contribuição'],
    excecoes: ['Professor (educação infantil, fundamental e médio): 5 anos a menos.', '<em>Segurado especial</em>: regras específicas de idade (60/55 anos) e cálculo diferenciado.'],
    exemplos: ['Maria, 62 anos, 15 anos de contribuição → pode se aposentar por idade (com coeficiente reduzido: 60% + 1% × 5 = 65%).', 'Professor com 25 anos de magistério → pode se aposentar com 50/55 anos.'],
    pegadinhas: ['O <em>coeficiente</em> é de 60% + 1% por ano de contribuição (H) ou 60% + 2% (M) — começa em 60%, não em 50%.', 'A <em>regra dos pontos</em> (86/96 após 2019) é alternativa, não cumulativa.', 'O <em>segurado especial</em> tem idade de 60/55, mas valor de 1 SM (regra antiga).'],
    exercicios: [
      { q: 'A aposentadoria por idade, após a EC 103/2019, exige 65 anos de idade para homens e 62 para mulheres.', g: 'CERTO. Regra atual.' },
      { q: 'O professor de educação básica tem direito à redução de 5 anos na idade de aposentadoria.', g: 'CERTO. Art. 40, §5º, CF/88; art. 56, Lei 8.213/91.' }
    ],
    sotaque: '<strong>"65/62 + 180 MESES (regra de transição até 2027)"</strong>'
  };

  M['aposentadoria-contribuicao'] = {
    topico: 'aposentadoria-contribuicao',
    titulo: 'Aposentadoria por Tempo de Contribuição (extinta pela EC 103/2019)',
    resumo: 'Extinta pela EC 103/2019 para novos segurados. Quem estava em transição pôde usar regras de pontos ou idade mínima.',
    teoria: '<p>A <strong>aposentadoria por tempo de contribuição</strong> foi extinta pela EC 103/2019 para novos segurados, mas permitiu regras de transição para quem já contribuía antes. Hoje, é substituída pela <em>aposentadoria programada</em> com idade mínima e regras de pontos (86/96 escalonada).</p>',
    regras: ['Extinta para novos segurados (pós-13/11/2019)', 'Regras de transição: pontos (86/96) ou idade + tempo de contribuição', 'Fator previdenciário era aplicável (agora opcional)', 'Valor: 100% do SB para regra dos pontos'],
    excecoes: ['O <em>professor</em> tem redução de 5 anos (ou 5 pontos) na regra de transição.', 'O <em>segurado com deficiência</em> tem regras próprias.'],
    exemplos: ['Maria, 60 anos, 35 anos de contribuição, 95 pontos → aposenta por tempo de contribuição (regra de pontos).', 'Pedro, 50 anos, 25 anos → não tem regra de transição aplicável.'],
    pegadinhas: ['A EC 103/2019 <em>extinguiu</em> a aposentadoria por tempo de contribuição para o RGPS, mas não para o RPPS.', 'A regra dos <strong>86/96 pontos</strong> subiu para 87/97 em 2020, 88/98 em 2021, etc.', 'O <em>segurado com deficiência</em> tem aposentadoria com tempo reduzido (Lei Complementar 142/2013).'],
    exercicios: [
      { q: 'A aposentadoria por tempo de contribuição foi extinta pela EC 103/2019 para todos os segurados do RGPS.', g: 'CERTO (para novas concessões).' },
      { q: 'A regra dos pontos para aposentadoria por tempo de contribuição prevê 86/96 (mulher/homem) em 2019, escalonada até 92/100 em 2028.', g: 'CERTO. Regra da EC 103/2019, art. 17.' }
    ],
    sotaque: '<strong>"ATC EXTINTA. PONTOS: 86/96 → 92/100"</strong>'
  };

  M['aposentadoria-especial'] = {
    topico: 'aposentadoria-especial',
    titulo: 'Aposentadoria Especial (art. 57)',
    resumo: 'Para quem trabalha exposto a agentes nocivos (físicos, químicos, biológicos). 15/20/25 anos, sem idade mínima.',
    teoria: '<p>A <strong>aposentadoria especial</strong> é devida ao segurado que tenha trabalhado <em>15, 20 ou 25 anos</em> em atividade especial (exposição a agentes nocivos), conforme o caso. Não exige idade mínima. Requisitos definidos pelo Decreto 3.048/99 e atualizações.</p>',
    regras: ['15 anos: agentes químicos de alta periculosidade', '20 anos: insalubridade média', '25 anos: qualquer agente nocivo (até EC 103/2019)', 'Após 13/11/2019: exige idade mínima de 60 (H) / 55 (M) para atividades insalubres'],
    excecoes: ['A <em>periculosidade</em> (Lei 12.740/2012) é tratada à parte, com adicional de 30% na remuneração.', 'O <em>tempo de atividade especial</em> pode ser convertido em comum (regra antiga).'],
    exemplos: ['Trabalhador de mineração subterrânea exposto a poeira de sílica → 25 anos de atividade especial (regra antiga).', 'Técnico de raio-X com 20 anos de exposição → aposentadoria especial.'],
    pegadinhas: ['<strong>Atividade especial</strong> = trabalho com exposição a agentes nocivos (não basta contrato).', 'O PPP (Perfil Profissiográfico Previdenciário) substituiu o antigo DIRBEN 8030.', 'A <em>aposentadoria especial</em> tem conversão de tempo especial em comum (regra do Decreto 3.048/99, art. 70).'],
    exercicios: [
      { q: 'A aposentadoria especial exige idade mínima de 60/55 anos após a EC 103/2019.', g: 'CERTO (para atividades insalubres).' },
      { q: 'O PPP substituiu o DIRBEN 8030.', g: 'CERTO.' }
    ],
    sotaque: '<strong>"ESPECIAL: 15/20/25 ANOS (REGRAS ANTIGAS)"</strong>'
  };

  M['auxilio-doenca'] = {
    topico: 'auxilio-doenca',
    titulo: 'Auxílio-doença (art. 59-63)',
    resumo: 'Incapacidade temporária. Carência: 12 contribuições (salvo acidente). Valor: 91% do SB (após EC 103/2019).',
    teoria: '<p>O <strong>auxílio-doença</strong> é devido ao segurado que ficar incapacitado para o trabalho por mais de 15 dias consecutivos (não precisa de carência se acidente). Após a EC 103/2019, o valor é de 91% do salário-de-benefício (antes era 80% na manutenção e 91% na concessão, mas regra foi unificada).</p>',
    regras: ['Carência: 12 contribuições (salvo acidente, doença profissional ou do trabalho)', 'Valor: 91% do SB (regra atual) ou 80% se mais de 15 dias no emprego (regra antiga)', 'Termo inicial: 17º dia (acidente: dia seguinte)', 'Perícia médica é obrigatória'],
    excecoes: ['O <em>segurado facultativo</em> tem carência de 12 contribuições (mesma regra).', 'O <em>segurado recluso</em> (acidente em presídio) tem regras específicas.'],
    exemplos: ['Pedro, empregado, ficou com pneumonia por 20 dias → recebe auxílio-doença a partir do 17º dia.', 'Maria, grávida de risco, é afastada → pode receber auxílio-doença (ou salário-maternidade).'],
    pegadinhas: ['O valor mudou com a EC 103/2019: <strong>91%</strong> para todos os casos atuais.', 'O <em>período de graça</em> é válido para a concessão de auxílio-doença (em regra).', 'O <em>auxílio-acidente</em> é diferente (sequela, com redução de capacidade).'],
    exercicios: [
      { q: 'O auxílio-doença tem carência de 12 contribuições, salvo acidente do trabalho.', g: 'CERTO.' },
      { q: 'O valor do auxílio-doença é de 100% do salário-de-benefício.', g: 'ERRADO. Após EC 103/2019, é 91%.' }
    ],
    sotaque: '<strong>"DOENÇA: 91% DO SB (EC 103/2019)"</strong>'
  };

  M['auxilio-acidente'] = {
    topico: 'auxilio-acidente',
    titulo: 'Auxílio-acidente (art. 86)',
    resumo: 'Indenização por sequela permanente que reduza a capacidade. Valor: 50% do SB. Cumulável com aposentadoria.',
    teoria: '<p>O <strong>auxílio-acidente</strong> é devido ao segurado que, após consolidação das lesões, apresentar <em>sequela permanente</em> que reduza sua capacidade de trabalho, sem impedir o exercício da atividade. É uma <em>indenização</em> e pode ser cumulado com aposentadoria.</p>',
    regras: ['Sem carência', 'Valor: 50% do SB', 'Termo inicial: alta médica ou cessação do auxílio-doença', 'Pode ser cumulado com aposentadoria (regra do art. 124)'],
    excecoes: ['O <em>segurado que perdeu a capacidade</em> (invalidez) não recebe auxílio-acidente, mas aposentadoria por invalidez.', 'A <em>concessão</em> depende de laudo médico pericial.'],
    exemplos: ['Pedro perdeu o polegar em acidente → recebe 50% do SB como auxílio-acidente, além de continuar trabalhando.', 'Maria, com sequela em coluna, reduziu o içamento de peso → recebe auxílio-acidente.'],
    pegadinhas: ['<strong>Auxílio-acidente</strong> ≠ <em>auxílio-doença</em>. Acidente pressupõe sequela permanente, doença é temporária.', 'O <em>valor</em> é 50% do SB, não do salário-de-contribuição.', 'A <em>cumulação</em> com aposentadoria é expressamente permitida.'],
    exercicios: [
      { q: 'O auxílio-acidente tem carência de 12 contribuições.', g: 'ERRADO. Não tem carência (art. 86, §2º).' },
      { q: 'O auxílio-acidente pode ser cumulado com aposentadoria.', g: 'CERTO. Art. 124, Lei 8.213/91.' }
    ],
    sotaque: '<strong>"ACIDENTE: 50% DO SB, CUMULÁVEL COM APOSENTADORIA"</strong>'
  };

  M['salario-maternidade'] = {
    topico: 'salario-maternidade',
    titulo: 'Salário-maternidade (art. 71-73)',
    resumo: 'Devido à segurada por parto, adoção ou aborto. Valor: integral (sem teto) para empregada. Carência dispensada.',
    teoria: '<p>O <strong>salário-maternidade</strong> é devido à segurada do RGPS (e RPPS) por 120 dias, em caso de parto, adoção, guarda para fins de adoção ou aborto. Para a <em>empregada</em>, é integral (sem teto do RGPS). Para as demais, o valor pode ser limitado.</p>',
    regras: ['Duração: 120 dias (prorrogável por mais 60 dias para empresas do Programa Empresa Cidadã)', 'Carência: dispensada', 'Adoção: proporcional à idade da criança (120/60/30 dias)', 'Abato: 2 semanas'],
    excecoes: ['O <em>segurado homem</em> (pai) pode receber o salário-maternidade em caso de falecimento ou incapacidade da mãe, ou guarda judicial da criança.', 'A <em>adotante</em> de até 4 anos recebe 120 dias; de 4 a 8, recebe 60 dias; maior de 8, 30 dias.'],
    exemplos: ['Maria, empregada, deu à luz → 120 dias de salário-maternidade integral.', 'João, pai adotivo, com guarda de criança de 3 anos → 120 dias.'],
    pegadinhas: ['<strong>Carência</strong> é dispensada (art. 26, IX).', 'A <em>licença-maternidade</em> é do empregador, mas o <em>salário-maternidade</em> é pago pela previdência.', 'A empregada doméstica tem salário-maternidade desde a LC 150/2015 (sem carência).'],
    exercicios: [
      { q: 'O salário-maternidade tem duração de 120 dias, prorrogável por mais 60.', g: 'CERTO. Art. 71, Lei 8.213/91.' },
      { q: 'A segurada facultativa tem carência de 12 contribuições para receber salário-maternidade.', g: 'ERRADO. Carência é dispensada.' }
    ],
    sotaque: '<strong>"MATERNIDADE: 120 DIAS, SEM CARÊNCIA"</strong>'
  };

  M['pensao-morte'] = {
    topico: 'pensao-morte',
    titulo: 'Pensão por Morte (art. 74-79)',
    resumo: 'Devido aos dependentes do segurado que falecer. Sem carência. Cota: 50% + 10% por dependente adicional (até 100%).',
    teoria: '<p>A <strong>pensão por morte</strong> é devida aos <em>dependentes</em> do segurado que falecer, ou que tiver desaparecido em acidente. Não tem carência. O valor é dividido em <em>cotas</em>: 50% + 10% por dependente habilitado, até o limite de 100% (art. 77, EC 103/2019).</p>',
    regras: ['Sem carência (art. 26, I)', 'Cota: 50% + 10% por dependente (até 100%)', 'Classe dos dependentes: cônjuge, filhos (até 21/24 se estudante), pais, irmãos (em regra)', 'Renda: 100% do SB do segurado (regra nova) ou 80% + 10% (regra antiga)'],
    excecoes: ['O <em>cônjuge divorciado</em> recebe apenas se estiver recebendo alimentos do falecido.', 'O <em>companheiro homoafetivo</em> tem os mesmos direitos do cônjuge (STF, 2011).'],
    exemplos: ['Maria, viúva, com 2 filhos → 50% + 10% + 10% = 70% do SB.', 'Pedro, viúvo, sem filhos → 50% do SB.'],
    pegadinhas: ['A <em>pensão por morte</em> tem duração de 4 meses para cônjuge < 21 anos; 6 meses para 21-26; 8 meses para 27-29; 10 meses para 30-40; 20 meses para 41-43; e vitalícia para ≥ 44 anos (após EC 103/2019).', 'A <em>cumulação</em> com aposentadoria é limitada (não pode ultrapassar o teto).', 'O <em>esquema de cotas</em> (50% + 10%) está sujeito ao teto do RGPS.'],
    exercicios: [
      { q: 'A pensão por morte tem carência de 12 contribuições mensais.', g: 'ERRADO. Dispensa carência.' },
      { q: 'A cota de pensão por morte é 50% + 10% por dependente, limitado a 100%.', g: 'CERTO. Regra da EC 103/2019.' }
    ],
    sotaque: '<strong>"PENSÃO: 50% + 10% POR DEP. ATÉ 100% (EC 103/2019)"</strong>'
  };

  M['dependentes'] = {
    topico: 'dependentes',
    titulo: 'Dependentes (art. 16-22)',
    resumo: 'Em 3 classes: cônjuge/companheiro/filhos (1ª); pais (2ª); irmãos (3ª). Habilitação segue esta ordem.',
    teoria: '<p>Os <strong>dependentes</strong> do segurado do RGPS estão classificados em três classes (art. 16, Lei 8.213/91). A habilitação segue a ordem, mas convivência de classes é possível (Lei 13.846/2019). A <em>companheira</em> é equiparada ao cônjuge.</p>',
    regras: ['1ª classe: cônjuge, companheiro(a), filho(a) menor de 21/24 (estudante) ou inválido', '2ª classe: pais', '3ª classe: irmão(a) menor de 21/24 ou inválido', 'Cônjuge divorciado habilitado só se recebe alimentos'],
    excecoes: ['O <em>enteado</em> e o <em>menor tutelado</em> são equiparados a filhos (desde Lei 8.213/91, art. 16, §2º).', 'A <em>união homoafetiva</em> é equiparada (STF, 2011).'],
    exemplos: ['Maria, esposa, com 2 filhos menores → 1ª classe (todos habilitados).', 'João, solteiro, sem filhos → pais podem ser habilitados na 2ª classe.'],
    pegadinhas: ['Cuidado: a <strong>classe</strong> define a habilitação, mas a distribuição da cota é igual entre os habilitados.', 'O <em>cônjuge divorciado</em> habilita-se apenas se fazia jus a alimentos na data do falecimento.', 'A Lei 13.846/2019 admitiu a <em>habilitação simultânea</em> de dependentes de classes distintas, mas o rateio é proporcional.'],
    exercicios: [
      { q: 'Os pais do segurado habilitado são dependentes da 1ª classe.', g: 'ERRADO. São da 2ª classe.' },
      { q: 'A companheira homoafetiva tem o mesmo regime da cônjuge na pensão por morte.', g: 'CERTO. STF, 2011.' }
    ],
    sotaque: '<strong>"CLASSE 1: ESPOSA + FILHOS. 2: PAIS. 3: IRMÃOS"</strong>'
  };

  M['decoreba-custeio'] = {
    topico: 'decoreba-custeio',
    titulo: 'Tabela de Custeio (Decreto 3.048/99, Anexo I)',
    resumo: 'Alíquotas progressivas (EC 103/2019) para empregados: 7,5% a 14%, conforme faixa de salário.',
    teoria: '<p>Desde a EC 103/2019, a contribuição do segurado <em>empregado</em> é progressiva: 7,5% (até 1 SM) → 9% (1-2 SM) → 12% (2-3 SM) → 14% (3-4 SM) → 14,9% (acima de 4 SM). O cálculo é "por faixa", e a alíquota efetiva é menor que a nominal.</p>',
    regras: ['Faixa 1: até 1 SM → 7,5%', 'Faixa 2: 1 a 2 SM → 9%', 'Faixa 3: 2 a 3 SM → 12%', 'Faixa 4: 3 a 4 SM → 14%', 'Faixa 5: acima de 4 SM → 14,9%'],
    excecoes: ['O <em>contribuinte individual</em> tem alíquota de 20% sobre o salário-de-contribuição (regra geral).', 'O <em>segurado facultativo</em> tem alíquota de 20% (ou 11% se for de baixa renda, regra antiga).'],
    exemplos: ['Salário de R$ 2.500: 7,5% × 1.412 + 9% × 1.088 = 105,90 + 97,92 = R$ 203,82.', 'Salário de R$ 7.000: progressão por todas as faixas.'],
    pegadinchas: ['A alíquota <em>nominal</em> é a da última faixa, mas a <em>efetiva</em> é menor (cálculo por faixa).', 'O <em>teto do RGPS</em> (R$ 7.786,02 em 2025) é o limite de contribuição.', 'A <em>alíquota patronal</em> é 20% a 22,5% (risco), mais 5,8% (Sistema S).'],
    exercicios: [
      { q: 'A alíquota do segurado empregado é fixa em 11% sobre o salário-de-contribuição.', g: 'ERRADO. Hoje é progressiva (7,5% a 14,9%) após EC 103/2019.' },
      { q: 'O cálculo da alíquota do empregado é por faixa.', g: 'CERTO. Sistema de "cálculo por faixa".' }
    ],
    sotaque: '<strong>"7,5 / 9 / 12 / 14 / 14,9% — 5 FAIXAS PROGRESSIVAS"</strong>'
  };

  M['decoreba-custeio-patronal'] = {
    topico: 'decoreba-custeio-patronal',
    titulo: 'Alíquotas Patronais (20% + RAT + Sistema S)',
    resumo: '20% (previdência) + 1-3% (RAT/SAT) + 5,8% (Sistema S) = 26,8% a 28,8% sobre a folha.',
    teoria: '<p>A contribuição <em>patronal</em> é de 20% (previdência) sobre a folha, com adicionais conforme o <strong>RAT</strong> (Risco Ambiental do Trabalho, antigo SAT) e o <strong>Sistema S</strong>. A alíquota total pode chegar a 28,8% sobre a folha bruta.</p>',
    regras: ['20% (previdência)', '1% (RAT baixo) | 2% (RAT médio) | 3% (RAT alto)', '5,8% (Sistema S: SESC, SENAI, SESI, etc.)', '0,5% a 2% (INCRA) | 0,6% (Salário-Educação)'],
    excecoes: ['O <em>microempresário</em> e o <em>MEI</em> têm alíquotas reduzidas.', 'A <em>entidade filantrópica</em> tem isenção da cota patronal.'],
    exemplos: ['Indústria com RAT alto: 20% + 3% + 5,8% = 28,8% sobre a folha.', 'Empresa comercial com RAT baixo: 20% + 1% + 5,8% = 26,8% sobre a folha.'],
    pegadinchas: ['O <strong>Senat</strong> e o <strong>Sest</strong> são contribuições de 1% sobre o salário dos trabalhadores de transporte.', 'A <em>desoneração da folha</em> substitui 20% sobre a folha por 1% a 4,5% sobre a receita bruta (Lei 12.546/2011).', 'A <em>CP patronal</em> da empregadora doméstica é 8% (LC 150/2015).'],
    exercicios: [
      { q: 'A alíquota patronal do empregador é de 30% sobre a folha de salários.', g: 'ERRADO. É 20% + RAT + Sistema S, totalizando 26,8% a 28,8%.' },
      { q: 'O RAT/SAT incide sobre a folha em 1% a 3%, conforme o risco da atividade.', g: 'CERTO.' }
    ],
    sotaque: '<strong>"20% + RAT 1-3% + 5,8% = 26,8-28,8% PATRONAL"</strong>'
  };

  M['cnis-pericia'] = {
    topico: 'cnis-pericia',
    titulo: 'CNIS e Perícia Médica',
    resumo: 'CNIS é o Cadastro Nacional de Informações Sociais. A perícia é obrigatória para concessão de benefícios com incapacidade.',
    teoria: '<p>O <strong>CNIS</strong> (Cadastro Nacional de Informações Sociais) é o banco de dados do RGPS, com informações de filiação, contribuições e benefícios. Para a concessão de <em>auxílio-doença</em> e <em>aposentadoria por invalidez</em>, a <em>perícia médica</em> é obrigatória.</p>',
    regras: ['CNIS: obrigação do INSS, do empregador e do contribuinte individual', 'Perícia: realizada por perito do INSS (médico ou assistente social)', 'Prazo de manutenção do benefício: 2 anos (auxílio-doença)', 'A perícia pode ser administrativa ou judicial'],
    excecoes: ['A <em>justiça estadual</em> pode determinar perícia privada (descontada do segurado).', 'O <em>laudo pericial</em> é a peça-chave para a concessão.'],
    exemplos: ['Pedro, empregado, com hérnia de disco → passa por perícia do INSS para requerer auxílio-doença.', 'Maria, autônoma, com endometriose → passa por perícia para requerer aposentadoria por invalidez.'],
    pegadinchas: ['O <em>atestado médico</em> não substitui a perícia (salvo para afastamentos < 15 dias, que são a cargo do empregador).', 'A <em>perícia</em> pode ser <strong>judicial</strong> (juiz nomeia perito).', 'A <em>revisão da incapacidade</em> (aposentadoria por invalidez) é periódica (a cada 2 anos, regra geral).'],
    exercicios: [
      { q: 'A concessão de auxílio-doença depende de perícia médica do INSS.', g: 'CERTO. Art. 60, Lei 8.213/91.' },
      { q: 'O atestado médico do empregador é suficiente para concessão de auxílio-doença por mais de 30 dias.', g: 'ERRADO. A partir do 16º dia, é preciso perícia do INSS.' }
    ],
    sotaque: '<strong>"CNIS = CADASTRO. PERÍCIA = OBRIGATÓRIA PARA INCAPACIDADE"</strong>'
  };

  M['decadencia-prescricao'] = {
    topico: 'decadencia-prescricao',
    titulo: 'Decadência e Prescrição no RGPS',
    resumo: 'Decadência: 10 anos para revisão do ato concessório (art. 103-A). Prescrição: 5 anos para parcelas vencidas (art. 103).',
    teoria: '<p>A <strong>decadência</strong> (Lei 10.839/2004) prevê prazo de 10 anos para a previdência revisar atos concessórios. A <strong>prescrição</strong> atinge parcelas vencidas há mais de 5 anos (art. 103, Lei 8.213/91). São institutos diferentes.</p>',
    regras: ['Decadência: 10 anos para revisão de ato concessório', 'Prescrição: 5 anos para parcelas vencidas', 'Hipóteses de não incidência: má-fé, fraude', 'A EC 103/2019 introduziu a regra da <em>irredutibilidade do valor do benefício</em> (limitação temporal)'],
    excecoes: ['O <em>erro de fato</em> pode ser revisto a qualquer tempo.', 'A <em>fraude</em> ou <em>má-fé</em> afasta a decadência.'],
    exemplos: ['Benefício concedido em 2010 pode ser revisado pela previdência até 2020 (decadência).', 'Parcelas de 2015 (mais de 5 anos) são prescritas, salvo má-fé.'],
    pegadinchas: ['<strong>Decadência</strong> ataca o <em>direito</em> de revisar; <strong>prescrição</strong> ataca a <em>ação</em> de cobrança.', 'A <em>EC 103/2019</em> prevê revisão anual dos benefícios para adequação ao teto (art. 28, §6º).', 'O <em>segurado</em> também tem prazo decadencial para revisão do ato (5 anos, art. 103-A, §4º).'],
    exercicios: [
      { q: 'A previdência tem prazo de 5 anos para revisar atos concessórios de benefícios.', g: 'ERRADO. É 10 anos (art. 103-A).' },
      { q: 'A prescrição atinge parcelas vencidas há mais de 5 anos.', g: 'CERTO. Art. 103, Lei 8.213/91.' }
    ],
    sotaque: '<strong>"DECADÊNCIA: 10 ANOS (REVISÃO). PRESCRIÇÃO: 5 ANOS (PARCELAS)"</strong>'
  };

  M['regras-transicao-ec103'] = {
    topico: 'regras-transicao-ec103',
    titulo: 'Regras de Transição da EC 103/2019',
    resumo: 'Pontos (86/96 escalonada), idade + tempo de contribuição, pedágio 50%, pedágio 100%. Quem cumpriu requisitos antes de 13/11/2019.',
    teoria: '<p>A <strong>EC 103/2019</strong> extinguiu a aposentadoria por tempo de contribuição, mas criou <em>regras de transição</em> para quem já contribuía. São quatro regras: pontos (86/96), idade + tempo, pedágio 50% e pedágio 100%. Cada uma tem requisitos específicos.</p>',
    regras: ['Pontos: 86 (M) / 96 (H) em 2019, escalonando até 92/100 em 2028', 'Idade + tempo: 30 (M) / 35 (H) anos de contribuição + idade mínima', 'Pedágio 50%: faltava 1 ano ou menos em 13/11/2019, paga pedágio de 50%', 'Pedágio 100%: regras de pontos com pedágio de 100% sobre o tempo faltante'],
    excecoes: ['O <em>professor</em> tem redução de 5 anos (ou 5 pontos) na regra aplicável.', 'O <em>segurado com deficiência</em> tem regras próprias.'],
    exemplos: ['Maria, 60 anos, 35 anos, 95 pontos → não cabe regra de pontos (precisa 86 em 2019; 92 em 2028).', 'Pedro, com 33 anos e 9 meses em 11/2019 → pedágio 50%: 3 meses de pedágio.'],
    pegadinchas: ['As <strong>4 regras</strong> são alternativas, não cumulativas.', 'A <em>regra dos pontos</em> é a mais usada pelos advogados previdenciários.', 'A <em>EC 103/2019</em> não resgatou o fator previdenciário (mas ele continua aplicável como opção).'],
    exercicios: [
      { q: 'A EC 103/2019 manteve a aposentadoria por tempo de contribuição com idade mínima progressiva.', g: 'ERRADO. Extinguiu a aposentadoria por tempo de contribuição.' },
      { q: 'A regra dos pontos exige 86/96 em 2019, escalonando até 92/100 em 2028.', g: 'CERTO.' }
    ],
    sotaque: '<strong>"4 REGRAS DE TRANSIÇÃO: PONTOS / IDADE / 50% / 100%"</strong>'
  };

  M['aposentadoria-programada-rpps'] = {
    topico: 'aposentadoria-programada-rpps',
    titulo: 'Aposentadoria Programada no RPPS (EC 103/2019)',
    resumo: 'Servidores públicos: idade 65/62, tempo 25 (M) / 25 (H), com regras de transição. Limite de teto: benefício + pensão.',
    teoria: '<p>A <strong>aposentadoria programada</strong> é a regra permanente do <em>RPPS</em> após a EC 103/2019. Exige idade mínima (65 H / 62 M) e tempo de contribuição (25 anos), com regras de transição para quem já era servidor.</p>',
    regras: ['Idade: 65 (H) / 62 (M)', 'Tempo: 25 anos (H) / 25 anos (M) — ambos', 'Valor: 60% + 2% por ano extra (homem) ou 60% + 1% (mulher)', 'Regra dos pontos: 86/96 (com 25 anos de contribuição)'],
    excecoes: ['O <em>professor</em> tem redução de 5 anos.', 'O <em>segurado com deficiência</em> tem redução de tempo.'],
    exemplos: ['José, servidor público federal, 65 anos, 25 anos → aposentadoria programada (60% + 2% × 5 = 70%).', 'Maria, professora, 55 anos, 25 anos → aposentadoria com 60% + 2% × 5 = 70%.'],
    pegadinchas: ['O <em>teto</em> do RPPS é igual ao teto do funcionalismo (R$ 41.650,92 em 2025).', 'A <em>cumulação</em> de aposentadoria com pensão tem regra específica (limite do teto + 80%).', 'A <em>alíquota do servidor</em> é progressiva (7,5% a 22%, faixa única para ativo).'],
    exercicios: [
      { q: 'A aposentadoria programada do RPPS exige 30/25 anos de contribuição (H/M).', g: 'ERRADO. Exige 25 anos para ambos.' },
      { q: 'O valor da aposentadoria programada é 60% + 2% por ano extra de contribuição (H).', g: 'CERTO. Art. 26, EC 103/2019.' }
    ],
    sotaque: '<strong>"RPPS PROGRAMADA: 65/62 + 25 ANOS, 60% + 2%/ANO (H)"</strong>'
  };

  M['aliquota-servidor'] = {
    topico: 'aliquota-servidor',
    titulo: 'Alíquota Progressiva do Servidor Público (EC 103/2019)',
    resumo: 'Faixas: 7,5% a 22% sobre a base de contribuição (inclui gratificações). Faixa única para ativos.',
    teoria: '<p>A <strong>EC 103/2019</strong> instituiu alíquota <em>progressiva</em> para o servidor público federal, aplicada a todas as <em>verbas remuneratórias</em> (incluindo gratificações, adicionais, etc.). O Estado também contribui com no mínimo o dobro da alíquota do servidor (14% mínimo).</p>',
    regras: ['Faixa 1: até 1 SM → 7,5%', 'Faixa 2: 1 a 2 SM → 9%', 'Faixa 3: 2 a 3 SM → 12,5%', 'Faixa 4: 3 a 4 SM → 14,5%', 'Faixa 5: 4 a 6 SM → 16,5%', 'Faixa 6: 6 a 8 SM → 18%', 'Faixa 7: 8 a 12 SM → 19,5%', 'Faixa 8: acima de 12 SM → 22%'],
    excecoes: ['A <em>faixa única</em> para ativos (não progressiva) foi mantida em alguns entes (por lei local).', 'A <em>contribuição do ente</em> deve ser no mínimo o dobro do servidor (14% mínimo).'],
    exemplos: ['Servidor com R$ 10.000: alíquota efetiva ≈ 19,5% × parte acima de 8 SM + 18% × parte de 6-8 SM + ...', 'Servidor com 1 SM: 7,5% de contribuição.'],
    pegadinchas: ['A <em>base de cálculo</em> inclui verbas indenizatórias <strong>não</strong>, mas <em>remuneratórias</em> sim.', 'A <em>contribuição do ente</em> deve ser no mínimo 14% (paridade mínima: ativo e inativo).', 'O <em>servidor em disponibilidade</em> tem alíquota de 22% (EC 103/2019, art. 11, §4º).'],
    exercicios: [
      { q: 'A alíquota do servidor público federal é fixa em 11% após a EC 103/2019.', g: 'ERRADO. É progressiva (7,5% a 22%).' },
      { q: 'A contribuição do ente federativo deve ser no mínimo o dobro da alíquota do servidor.', g: 'CERTO. Paridade mínima de 14%.' }
    ],
    sotaque: '<strong>"PROGRESSIVA 7,5 → 22% (8 FAIXAS)"</strong>'
  };

  M['complemento-15-anos'] = {
    topico: 'complemento-15-anos',
    titulo: 'Previdência Complementar do Servidor (Funpresp)',
    resumo: 'Servidores federais podem aderir ao Funpresp (Funpresp-Exe, Funpresp-Leg e Funpresp-Jud). Contribuição adicional, teto de RGPS.',
    teoria: '<p>A <strong>Funpresp</strong> (Lei 12.618/2012) é o regime de previdência complementar dos servidores públicos federais titulares de cargo efetivo. Oferece benefício adicional acima do teto do RGPS, com contribuição paritária do servidor e do ente (até 8,5% cada).</p>',
    regras: ['Adesão voluntária (no prazo de 2 anos do ingresso no cargo)', 'Contribuição: até 8,5% (servidor) + 8,5% (ente)', 'Valor: na forma de renda programada, renda vitalícia ou percentual', 'Resgate: 100% das contribuições do servidor ao final da carreira (se sem benefício)'],
    excecoes: ['O <em>saldo do Funpresp</em> pode ser resgatado em até 80% (Lei 12.618/2012).', 'O <em>entes estadual e municipal</em> podem instituir regime próprio sem previdência complementar.'],
    exemplos: ['Maria, servidora federal, 30 anos, adere ao Funpresp com 7% → recebe benefício extra ao se aposentar.', 'Pedro, sem aderir, recebe só o teto do RGPS.'],
    pegadinchas: ['A <em>contribuição paritária</em> é incentivo (8,5% × 2 = 17% total).', 'O <em>teto do RGPS</em> é o limite do RPPS (sem Funpresp).', 'A <em>Lei Complementar 109/2001</em> disciplina as EFPC (Entidades Fechadas de Previdência Complementar).'],
    exercicios: [
      { q: 'A Funpresp é obrigatória para todos os servidores federais.', g: 'ERRADO. É facultativa.' },
      { q: 'A contribuição do ente ao Funpresp é paritária com a do servidor (até 8,5% cada).', g: 'CERTO.' }
    ],
    sotaque: '<strong>"FUNPRESP: ATÉ 8,5% × 2, PARITÁRIO"</strong>'
  };

  M['compensacao-previdenciaria'] = {
    topico: 'compensacao-previdenciaria',
    titulo: 'Compensação Previdenciária (Lei 9.796/99)',
    resumo: 'RPGS paga o valor até o teto do RGPS; RGPS/RPPS de outro ente compensa se houver cargo acumulável. Operada pelo Comprev.',
    teoria: '<p>A <strong>compensação previdenciária</strong> ocorre quando o segurado recebe aposentadoria de um regime e trabalhou em outro. O <em>Comprev</em> é o sistema operacional. O regime que paga a aposentadoria que excede o teto do RGPS pede compensação ao outro regime, limitado ao teto.</p>',
    regras: ['Operada pelo Comprev (sistema informatizado)', 'Cálculo: proporcional ao tempo de contribuição em cada regime', 'Limite: teto do RGPS', 'Prazo: 5 anos para requerer'],
    excecoes: ['Se o segundo regime não for <em>RPPS</em>, não há compensação (mas pode haver complementação).', 'O <em>RGPS</em> pode compensar com RPPS, e vice-versa.'],
    exemplos: ['Maria, servidora estadual (RPPS) que também contribuiu ao RGPS → pede compensação do RGPS ao RPPS.', 'Pedro, empregado (RGPS) que foi servidor do município → RGPS pede compensação ao RPPS.'],
    pegadinchas: ['A <em>compensação</em> é entre regimes; a <em>cumulação</em> é dentro do mesmo regime (cumulação de cargos).', 'O <em>limite</em> é o teto do RGPS (R$ 7.786,02 em 2025).', 'A <em>EC 103/2019</em> prevê prazo decadencial de 5 anos para a compensação.'],
    exercicios: [
      { q: 'A compensação previdenciária é devida entre o RGPS e o RPPS quando o segurado recebe aposentadoria de apenas um regime.', g: 'ERRADO. A compensação pressupõe contribuição em <em>dois</em> regimes.' },
      { q: 'O Comprev é o sistema de operacionalização da compensação previdenciária.', g: 'CERTO.' }
    ],
    sotaque: '<strong>"COMPENSAÇÃO: COMPREV. LIMITE: TETO RGPS"</strong>'
  };

  M['previdencia-complementar-aberta'] = {
    topico: 'previdencia-complementar-aberta',
    titulo: 'Previdência Complementar Aberta (PGBL/VGBL)',
    resumo: 'PGBL: indicado para quem faz declaração completa (deduz até 12% da renda bruta). VGBL: indicado para simplificada ou isento.',
    teoria: '<p>A <strong>previdência complementar aberta</strong> é oferecida por bancos e seguradoras. Tem dois regimes fiscais: <strong>PGBL</strong> (Plano Gerador de Benefício Livre) e <strong>VGBL</strong> (Vida Gerador de Benefício Livre). A diferença é a tributação na saída (IR).</p>',
    regras: ['PGBL: IR sobre o valor total resgatado; dedução de até 12% da renda bruta na declaração completa', 'VGBL: IR apenas sobre os rendimentos; indicado para declaração simplificada ou isento', 'Tabela regressiva: alíquotas decrescentes (10 anos)', 'Tabela progressiva: alíquotas crescentes'],
    excecoes: ['A <em>tabela regressiva</em> é mais vantajosa para quem vai resgatar depois de 10 anos.', 'O <em>VGBL</em> não deduz no IR de entrada, mas é melhor para herança (pensão de IR é sobre rendimentos, não sobre o total).'],
    exemplos: ['Maria, alta renda, declara completa → PGBL com 12% da renda bruta.', 'Pedro, isento ou simplificado → VGBL.'],
    pegadinchas: ['PGBL deduz no IR de entrada (até 12%); VGBL não deduz, mas cobra IR só sobre os rendimentos na saída.', 'A <em>tabela regressiva</em> é mais comum para aposentadoria.', 'A <em>portabilidade</em> entre planos é garantida pela Resolução CNSP 7/2001.'],
    exercicios: [
      { q: 'O PGBL é indicado para o segurado que faz declaração de IR simplificada.', g: 'ERRADO. PGBL é para declaração completa.' },
      { q: 'A previdência complementar aberta pode ser acumulada com o benefício do RGPS, sem limite.', g: 'CERTO. Não há limite, salvo para abono de permanência (servidor público).' }
    ],
    sotaque: '<strong>"PGBL = DEDUZ 12%. VGBL = IR SÓ SOBRE RENDIMENTOS"</strong>'
  };

  M['prova-inss-estrategia'] = {
    topico: 'prova-inss-estrategia',
    titulo: 'Estratégia para Prova do INSS (CEBRASPE)',
    resumo: 'Foque em CF/88, Lei 8.112/90, Lei 8.213/91, Lei 8.742/93, Lei 9.784/99, Lei 14.133/21, LGPD, RLM e Português.',
    teoria: '<p>Para a <strong>prova do INSS</strong> (CEBRASPE), a estratégia é focar nas disciplinas mais cobradas: <em>Constitucional</em> (Seguridade Social), <em>Previdenciário</em> (Lei 8.213/91, EC 103/2019), <em>Administrativo</em> (Lei 9.784/99, Lei 14.133/21), <em>Ética</em> (Lei 8.112/90), <em>RLM</em> (proposições), <em>Português</em> (interpretação), <em>Informática</em> (Excel, segurança), <em>Legislação</em> (LGPD, Lei 13.709/18).</p>',
    regras: ['Estude <em>jurisprudência</em> recente do STF e STJ', 'Faça <em>simulados</em> específicos do CEBRASPE', 'Leia as <em>notas explicativas</em> dos artigos', 'Mantenha-se atualizado em LC e ECs recentes'],
    excecoes: ['A <em>direito constitucional</em> é o pilar: Seguridade, Direitos Fundamentais, Organização do Estado.', 'A <em>legislação previdenciária</em> tem peso alto (40% da prova específica).'],
    exemplos: ['Tema sempre cobrado: Seguridade Social (CF, arts. 194-200).', 'Tema sempre cobrado: Custeio e benefícios do RGPS.', 'Tema sempre cobrado: LOAS, BPC, Renda Mensal Vitalícia.'],
    pegadinchas: ['<strong>CEBRASPE</strong> adora cobrar "CERTO ou ERRADO" — cuidado com a leitura literal.', 'A <em>EC 103/2019</em> tem 34 artigos; conheça os principais (regras de transição, alíquota, teto).', 'A <em>LGPD</em> é o tema mais "novo" — é certo que será cobrada.'],
    exercicios: [
      { q: 'A seguridade social tem como princípio a irredutibilidade do valor dos benefícios.', g: 'CERTO. Art. 194, IV, CF.' },
      { q: 'A aposentadoria por invalidez exige 36 contribuições mensais como carência.', g: 'ERRADO. Carência é 12 contribuições (salvo acidente).' }
    ],
    sotaque: '<strong>"CONST + PREV + ADM + ETI + RLM + PORT + INFO + LEG"</strong>'
  };

  M['questoes-clasicas'] = {
    topico: 'questoes-clasicas',
    titulo: 'Questões Clássicas do CEBRASPE (INSS)',
    resumo: 'Cobradas sempre: princípio da universalidade, irredutibilidade, preexistência do custeio, conceito de segurado obrigatório e dependente.',
    teoria: '<p>Algumas <strong>questões clássicas</strong> do CEBRASPE sobre previdência voltam a cada certame com pequenas variações. O segredo é dominar os <em>princípios constitucionais</em>, as <em>regras de transição da EC 103/2019</em>, a <em>Lei 8.213/91</em> e a <em>CF</em>.</p>',
    regras: ['Universalidade: cobertura e atendimento', 'Irredutibilidade: valor dos benefícios', 'Preexistência: custeio antes do benefício', 'Equidade: participação no custeio', 'Seletividade: distributividade'],
    excecoes: ['A <em>assistência social</em> é independente de contribuição.', 'A <em>saúde</em> é universal e gratuita no SUS.'],
    exemplos: ['Questão recorrente: "O princípio da irredutibilidade do valor dos benefícios impede qualquer revisão."', 'Resposta: ERRADO, pois a revisão para adequação ao teto é constitucional.'],
    pegadinchas: ['<strong>Universalidade</strong> da cobertura ≠ universalidade do atendimento.', 'A <em>previdência</em> é contributiva; a <em>assistência</em> é não-contributiva.', 'A <em>saúde</em> tem financiamento próprio (art. 196).'],
    exercicios: [
      { q: 'O princípio da universalidade da cobertura aplica-se igualmente à previdência e à assistência social.', g: 'CERTO. Art. 194, parágrafo único, I, CF.' },
      { q: 'A assistência social é prestada independentemente de contribuição.', g: 'CERTO. Art. 203, CF.' }
    ],
    sotaque: '<strong>"CF 194: 8 PRINCÍPIOS, TODOS NA ORDEM"</strong>'
  };

  M['pratica-custeio'] = {
    topico: 'pratica-custeio',
    titulo: 'Exercícios Práticos de Custeio',
    resumo: 'Calcular contribuição por faixa, alíquota efetiva, valor devido do empregador. Tabela progressiva 2025.',
    teoria: '<p>Questões de <strong>prática de custeio</strong> pedem para calcular a contribuição do empregado e do empregador. Para o empregado, a alíquota é progressiva (7,5% a 14,9%); para o empregador, 20% + RAT + Sistema S (26,8% a 28,8%).</p>',
    regras: ['Tabela progressiva: 7,5% (1 SM) | 9% (1-2 SM) | 12% (2-3 SM) | 14% (3-4 SM) | 14,9% (4+ SM)', 'Cálculo por faixa (não pelo total)', 'Teto do RGPS: R$ 7.786,02 (2025)', 'Empregado doméstico: 8% a 12% (regra especial)'],
    excecoes: ['O <em>MEI</em> tem alíquota fixa de 5% (R$ 66,00 em 2025) sobre 1 SM.', 'O <em>facultativo</em> tem alíquota de 20% ou 11% (baixa renda, regra antiga).'],
    exemplos: ['Salário R$ 4.000: 7,5%×1.412 + 9%×1.413 + 12%×1.175 = 105,9 + 127,17 + 141,0 = 374,07.', 'Salário R$ 8.000: limitado ao teto (R$ 7.786,02 × 14,9% = R$ 1.160,12).'],
    pegadinchas: ['O <em>salário-de-contribuição</em> é diferente do salário-base (não inclui aviso-prévio, férias indenizadas, etc.).', 'A <em>contribuição do décimo terceiro</em> é separada, mas segue a mesma tabela.', 'O <em>teto</em> é aplicado <strong>antes</strong> do cálculo por faixa.'],
    exercicios: [
      { q: 'Calcule a contribuição do empregado com salário de R$ 5.000.', g: '7,5%×1.412 + 9%×1.412 + 12%×1.412 + 14%×764 = 105,9 + 127,08 + 169,44 + 106,96 = 509,38.' },
      { q: 'A alíquota do empregador doméstico é 20% sobre o salário.', g: 'ERRADO. É 8% (cota patronal) + 7,5-14% (segurado) + 0,8% (FGTS) etc.' }
    ],
    sotaque: '<strong>"POR FAIXA: 7,5% × 1.412 + 9% × 1.412 + ..."</strong>'
  };

  M['teto-contribuicao'] = {
    topico: 'teto-contribuicao',
    titulo: 'Teto do RGPS e Teto Constitucional',
    resumo: 'Teto do RGPS: R$ 7.786,02 (2025). Teto constitucional: R$ 41.650,92. Benefício de até 1 SM é isento de IR.',
    teoria: '<p>O <strong>teto do RGPS</strong> é o limite de salário-de-contribuição e de benefício. O <strong>teto constitucional</strong> (subsídio do ministro do STF) é o limite do funcionalismo. Os dois estão <em>vinculados</em> desde a EC 41/2003.</p>',
    regras: ['Teto do RGPS: atualizado anualmente (R$ 7.786,02 em 2025)', 'Teto constitucional: R$ 41.650,92 (2025)', 'Benefícios de até 1 SM: isentos de IR (art. 6º, XV, Lei 7.713/88)', 'Aposentados com moléstia grave: isenção de IR'],
    excecoes: ['O <em>MEI</em> tem alíquota fixa, sem aplicação de teto.', 'O <em>Funpresp-Exe</em> paga valores acima do teto do RGPS.'],
    exemplos: ['Benefício de R$ 7.500,00 → tributado pelo IR (acima de 1 SM).', 'Benefício de R$ 1.412,00 (1 SM) → isento de IR.'],
    pegadinchas: ['<strong>Teto</strong> e <em>benefício</em> são coisas diferentes: teto é o limite de contribuição; benefício é o que se recebe.', 'A <em>irredutibilidade</em> (art. 194, IV) é do valor nominal, mas pode haver redução para adequação ao teto (cálculo, não o valor em si).', 'A <em>isenção de IR para maiores de 65</em> é de R$ 1.903,98 (regra atual, valores de 2025).'],
    exercicios: [
      { q: 'O teto do RGPS é o mesmo que o teto constitucional.', g: 'ERRADO. O teto do RGPS é igual ao salário-de-contribuição máximo; o teto constitucional é o limite dos servidores.' },
      { q: 'Os benefícios de até 1 salário mínimo são isentos de IR.', g: 'CERTO. Art. 6º, XV, Lei 7.713/88.' }
    ],
    sotaque: '<strong>"TETO RGPS = SALÁRIO MÁXIMO. TETO CONST = R$ 41.650,92"</strong>'
  };

  M['decisao-monocratica-mn'] = {
    topico: 'decisao-monocratica-mn',
    titulo: 'Mandado de Segurança (MS) e Mandado de Injunção (MI)',
    resumo: 'MS: direito líquido e certo não amparado por HC ou HD. MI: falta de norma regulamentadora.',
    teoria: '<p>Os <strong>remédios constitucionais</strong> são instrumentos de defesa de direitos. O <em>MS</em> (Lei 12.016/09) protege direito líquido e certo não amparado por HC ou HD. O <em>MI</em> (Lei 13.300/16) é para a falta de norma regulamentadora de direito constitucional.</p>',
    regras: ['MS: prazo de 120 dias decadencial (regra geral)', 'MI: instrumento para o exercício de direitos constitucionais sem norma regulamentadora', 'HD: dados não protegidos por lei podem ser objeto de HD', 'HC: liberdade de locomoção'],
    excecoes: ['O <em>MS coletivo</em> pode ser impetrado por partido político (representação no CN) ou organização sindical.', 'O <em>MI coletivo</em> é impetrado por partido com representação no CN.'],
    exemplos: ['Servidor tem seu direito líquido e certo ameaçado de impedir cobrança indevida → impetra MS.', 'Categoria de servidores sem regulamentação de greve → impetra MI.'],
    pegadinchas: ['<strong>MS</strong> é para ato <em>de autoridade</em> (não ato privado).', '<strong>HD</strong> é para dados <em>pessoais</em> em bancos.', 'O <em>MS</em> é <strong>constitucional</strong>, mas tem <em>lei específica</em> (Lei 12.016/09).'],
    exercicios: [
      { q: 'O MS tem prazo decadencial de 120 dias para impetração.', g: 'CERTO. Lei 12.016/09, art. 23.' },
      { q: 'O MI é utilizado para o exercício de direitos constitucionais sem norma regulamentadora.', g: 'CERTO.' }
    ],
    sotaque: '<strong>"MS: 120 DIAS. MI: SEM NORMA REGULAMENTADORA"</strong>'
  };

  M['crimes-previdenciarios'] = {
    topico: 'crimes-previdenciarios',
    titulo: 'Crimes Previdenciários (Lei 8.212/91, art. 168-A e 337-A)',
    resumo: 'Apropriação indébita previdenciária (CP 168-A) e sonegação de contribuição (CP 337-A). Penas: 2 a 5 anos.',
    teoria: '<p>Os <strong>crimes previdenciários</strong> estão no Código Penal (apropriação indébita previdenciária) e na Lei 8.137/90 (sonegação fiscal e de contribuição). A extinção da punibilidade ocorre pelo pagamento do tributo (Lei 10.684/2003).</p>',
    regras: ['Apropriação indébita previdenciária: CP, art. 168-A — pena: 2 a 5 anos', 'Sonegação de contribuição previdenciária: Lei 8.137/90, art. 337-A — pena: 2 a 5 anos', 'Extinção da punibilidade: pagamento integral do débito (Lei 10.684/2003)', 'Ação penal: pública incondicionada (apropriação) ou condicionada à representação (sonegação)'],
    excecoes: ['A <em>denúncia espontânea</em> (art. 138, CP) impede a punibilidade, salvo se for parcelado e inadimplente.', 'A <em>fraude à execução</em> (CPC 792) é crime autônomo.'],
    exemplos: ['Patrão que não repassa contribuição ao INSS → apropriação indébita previdenciária.', 'Empresa que omite informação à Receita → sonegação.'],
    pegadinchas: ['A <em>apropriação indébita</em> é crime <em>omissivo</em> próprio (omissão de repasse).', 'A <em>sonegação</em> envolve <em>ação</em> (fraude, omissão, recusa).', 'O <em>pagamento</em> extingue a punibilidade, mas o crédito tributário subsiste.'],
    exercicios: [
      { q: 'A apropriação indébita previdenciária tem pena de 2 a 5 anos.', g: 'CERTO. Art. 168-A, CP.' },
      { q: 'O pagamento do débito previdenciário não extingue a punibilidade do crime de apropriação indébita.', g: 'ERRADO. Extingue a punibilidade (Lei 10.684/2003).' }
    ],
    sotaque: '<strong>"APROPRIAÇÃO 168-A (CP): 2-5 ANOS. EXTINÇÃO: PAGAMENTO"</strong>'
  };

  M['fraude-previdenciaria'] = {
    topico: 'fraude-previdenciaria',
    titulo: 'Fraude na Concessão de Benefício (CP 171 e Lei 8.213/91)',
    resumo: 'Estelionato (CP 171): obter vantagem ilícita em prejuízo alheio. Fraude à previdência: art. 95 da Lei 8.213/91.',
    teoria: '<p>A <strong>fraude na concessão de benefício</strong> pode configurar estelionato (CP 171) ou crime específico (art. 95, Lei 8.213/91, com pena de 2 a 5 anos). A pena é de reclusão, e a reincidência específica é comum.</p>',
    regras: ['Estelionato: pena 1 a 5 anos, reclusão', 'Fraude específica à previdência: art. 95, Lei 8.213/91, pena 2 a 5 anos', 'Suspensão do benefício: 30 a 60 dias (art. 84)', 'Ação penal: pública incondicionada (fraude específica)'],
    excecoes: ['A <em>denúncia espontânea</em> pode afastar a ilicitude.', 'O <em>erro escusável</em> (art. 23, CP) pode afastar a culpabilidade.'],
    exemplos: ['Segurado que mente sobre vínculo empregatício para manter BPC → fraude.', 'Médico que atesta falsamente incapacidade → pode configurar fraude.'],
    pegadinchas: ['<strong>Estelionato</strong> exige <em>vantagem ilícita</em> + <em>prejuízo alheio</em>.', 'A <em>fraude específica</em> (art. 95) tem pena maior que o estelionato simples.', 'A <em>suspensão</em> do benefício é administrativa; a <em>prisão</em> é penal.'],
    exercicios: [
      { q: 'O estelionato previdenciário tem pena de 1 a 5 anos.', g: 'CERTO. Art. 171, CP.' },
      { q: 'A fraude específica para obtenção de benefício previdenciário tem pena de 1 a 5 anos.', g: 'ERRADO. Tem pena de 2 a 5 anos (art. 95, Lei 8.213/91).' }
    ],
    sotaque: '<strong>"ESTELIONATO: 1-5 ANOS. FRAUDE PREV: 2-5 ANOS"</strong>'
  };

  M['recadastramento'] = {
    topico: 'recadastramento',
    titulo: 'Recadastramento e Prova de Vida (INSS)',
    resumo: 'A "prova de vida" é feita pelo INSS, não pelo segurado. Ocorre em estabelecimentos bancários ou app Meu INSS.',
    teoria: '<p>A <strong>prova de vida</strong> de aposentados e pensionistas do INSS é feita pelo próprio instituto, com base em dados de outras bases governamentais (Receita, TSE, SUS, etc.). O segurado não precisa ir ao banco (regra nova, IN 100/2018).</p>',
    regras: ['Periodicidade: 1 vez por ano', 'Local: app Meu INSS, agência bancária ou lotérica', 'Reativação: 90 dias após a interrupção do pagamento', 'A prova de vida é automática (INSS consulta bases)'],
    excecoes: ['O <em>segurado com mais de 80 anos</em> ou com dificuldade de locomoção pode pedir prova de vida domiciliar.', 'A <em>biometria</em> é prevista para o futuro.'],
    exemplos: ['Aposentado que viajou por 1 ano e não fez prova de vida → pagamento é interrompido após 90 dias.', 'Maria, 85 anos, com dificuldade de locomoção → pede prova de vida em casa.'],
    pegadinchas: ['A <em>prova de vida</em> é do <strong>INSS</strong>, não do segurado (na maioria dos casos).', 'A <em>interrupção</em> do pagamento é de 90 dias (não 30).', 'A <em>reativação</em> é feita pelo app Meu INSS, sem precisar ir ao banco.'],
    exercicios: [
      { q: 'A prova de vida de aposentado do INSS é feita anualmente no banco.', g: 'ERRADO. Hoje é feita pelo INSS, com base em outras bases governamentais.' },
      { q: 'A interrupção do pagamento por falta de prova de vida ocorre após 90 dias.', g: 'CERTO.' }
    ],
    sotaque: '<strong>"PROVA DE VIDA = ANUAL. INTERRUPÇÃO = 90 DIAS"</strong>'
  };

  M['justica-estadual'] = {
    topico: 'justica-estadual',
    titulo: 'Justiça Estadual e Competência Previdenciária',
    resumo: 'Justiça Federal: ações contra o INSS. Justiça Estadual: ações contra o RPPS (salvo casos específicos).',
    teoria: '<p>A <strong>competência</strong> para processar ações previdenciárias segue o regime. Ações contra o <em>INSS</em> são da <strong>Justiça Federal</strong>. Ações contra o <em>RPPS</em> (estados, municípios) são da <em>Justiça Estadual</em> (Comarca), salvo se houver vara especializada.</p>',
    regras: ['Justiça Federal: ações contra o INSS (União)', 'Justiça Estadual: ações contra o RPPS (estado ou município)', 'Juizados Especiais Federais: causas de até 60 salários mínimos (Lei 10.259/2001)', 'Turma Recursal: julgamento de recursos dos JEFs'],
    excecoes: ['O <em>RPPS da União</em> (funcionários da União) é processado na Justiça Federal.', 'Ações de <em>cumprimento de sentença</em> contra a Fazenda Pública (RPPS municipal) podem ser na Justiça Estadual.'],
    exemplos: ['Maria, segurada do RGPS, ajuíza ação na Justiça Federal de seu domicílio.', 'José, servidor estadual, ajuíza ação na Vara Cível da Comarca.'],
    pegadinchas: ['O <em>juizado especial federal</em> (JEF) é o caminho mais rápido para causas previdenciárias menores.', 'A <em>Turma Recursal</em> julga recursos do JEF; o <em>STJ</em> julga o Recurso Especial.', 'A <em>desapropriação</em> para fins de reforma agrária é da Justiça Federal, mas o <em>benefício previdenciário</em> é regra geral.'],
    exercicios: [
      { q: 'A ação contra o INSS para concessão de aposentadoria é da Justiça Federal.', g: 'CERTO.' },
      { q: 'A ação contra o RPPS municipal é da Justiça Federal.', g: 'ERRADO. É da Justiça Estadual (regra geral).' }
    ],
    sotaque: '<strong>"INSS = JUSTIÇA FEDERAL. RPPS = JUSTIÇA ESTADUAL (GERAL)"</strong>'
  };

  M['reajuste-beneficios'] = {
    topico: 'reajuste-beneficios',
    titulo: 'Reajuste dos Benefícios do RGPS',
    resumo: 'Reajuste anual do INPC para benefícios de até 1 SM. Para benefícios acima, pelo IPCA. Regras específicas.',
    teoria: '<p>Os <strong>benefícios do RGPS</strong> são reajustados anualmente. Desde 2009, a regra é: benefícios de até 1 SM são reajustados pelo INPC (a partir de 2020, têm ganho real); benefícios acima do SM são reajustados pela variação do IPCA (Lei 8.213/91, art. 41-A).</p>',
    regras: ['Até 1 SM: reajustado pelo INPC (índice cheio), com ganho real (Lei 14.663/2023)', 'Acima de 1 SM: reajustado pelo IPCA', 'Reajuste: sempre na data-base (janeiro, regra geral)', 'Reajuste do BPC: mesma data do RGPS'],
    excecoes: ['A <em>MP 1.131/2022</em> alterou as regras de reajuste (revogada).', 'O <em>salário mínimo</em> tem política de valorização, gerando ganho real para benefícios de até 1 SM.'],
    exemplos: ['Benefício de 1 SM em 2025: R$ 1.412. Em 2026: R$ 1.518 (estimativa).', 'Benefício de R$ 5.000: reajustado pelo IPCA de 2025.'],
    pegadinchas:['O <em>reajuste</em> é anual, mas o <em>gatilho</em> de 1 SM é pelo INPC + 0,5% a 2% (Lei 14.663/2023).', 'O <em>reajuste</em> é proporcional ao tempo de contribuição em alguns casos (aposentadoria por idade com coeficiente).', 'A <em>irredutibilidade</em> (CF 194, IV) é do valor nominal, mas reajustes são limitados pelo teto.'],
    exercicios: [
      { q: 'Os benefícios do RGPS acima de 1 salário mínimo são reajustados pelo INPC.', g: 'ERRADO. São reajustados pelo IPCA.' },
      { q: 'Os benefícios de até 1 SM são reajustados pelo INPC, com ganho real (Lei 14.663/2023).', g: 'CERTO.' }
    ],
    sotaque: '<strong>"ATÉ 1 SM: INPC. ACIMA: IPCA"</strong>'
  };

  M['meu-inss'] = {
    topico: 'meu-inss',
    titulo: 'Aplicativo Meu INSS e Atendimento Digital',
    resumo: 'App Meu INSS, Meu INSS Web e central 135. Mais de 90 serviços disponíveis. Biometria e segurança.',
    teoria: '<p>O <strong>Meu INSS</strong> é o aplicativo oficial do INSS para smartphones, com mais de 90 serviços disponíveis. Permite requerer benefício, consultar situação, agendar perícia, etc. A central 135 atende por telefone (ligação gratuita, 24/7).</p>',
    regras: ['App Meu INSS: iOS e Android', 'Meu INSS Web: gov.br/meuinss', 'Central 135: ligação gratuita, 24/7', 'Login: gov.br com conta Prata, Ouro ou selo nível 4'],
    excecoes: ['O <em>agendamento</em> da perícia é feito pelo app.', 'O <em>atestmed</em> (atestado médico) é documento digital.'],
    exemplos: ['Maria baixa o app, faz login, clica em "Auxílio-doença" → pede benefício.', 'Pedro liga 135 para consultar o status do benefício.'],
    pegadinchas:['O <em>login</em> é pelo gov.br, não por usuário do INSS.', 'A <em>perícia</em> pode ser agendada por app, mas a primeira é presencial.', 'O <em>atestmed</em> é válido para perícia até 90 dias.'],
    exercicios: [
      { q: 'O Meu INSS permite requerer benefício por meio do aplicativo.', g: 'CERTO.' },
      { q: 'A central 135 é paga e funciona em horário comercial.', g: 'ERRADO. É gratuita e 24/7.' }
    ],
    sotaque: '<strong>"MEU INSS + CENTRAL 135 = 24/7"</strong>'
  };

  M['segurado-especial'] = {
    topico: 'segurado-especial',
    titulo: 'Segurado Especial (Lei 11.718/2008)',
    resumo: 'Produtor rural, pescador, garimpeiro, etc. Idade 60/55 (H/M). Carência pode ser por tempo de trabalho.',
    teoria: '<p>O <strong>segurado especial</strong> é o trabalhador rural que exerce atividade individualmente ou em regime de economia familiar (Lei 11.718/2008). Inclui pescador artesanal, garimpeiro em cooperativa, etc. A idade para aposentadoria é 60/55 (H/M).</p>',
    regras: ['Idade: 60 (H) / 55 (M)', 'Carência: 180 meses', 'Aposentadoria por idade: 1 SM (regra antiga)', 'Comprova por documentos públicos (Declaração de Aptidão - DAP, hoje CADAGRO)'],
    excecoes: ['O <em>segurado especial</em> que tem <strong>auxílio de terceiros</em> (assalariado) perde a condição.', 'O <em>produtor rural</em> pessoa jurídica perde a condição de segurado especial.'],
    exemplos: ['João, lavrador, 62 anos, com 25 anos de trabalho rural → aposentadoria por idade de 1 SM.', 'Maria, pescadora artesanal, 56 anos, 20 anos → aposentadoria.'],
    pegadinchas:['A <em>carência</em> do segurado especial pode ser comprovada por tempo de <em>trabalho</em>, não só contribuição.', 'O <em>auxílio eventual</em> de terceiros (empreitada) não descaracteriza (a Lei 11.718/2008 admite até 120 dias/ano).', 'A <em>venda</em> da produção gera <em>contribuição</em> sobre o produto (e não sobre o salário mínimo).'],
    exercicios: [
      { q: 'O segurado especial é o produtor rural, pescador artesanal ou garimpeiro em cooperativa, que trabalha em regime de economia familiar.', g: 'CERTO. Art. 11, VII, Lei 8.213/91.' },
      { q: 'A idade do segurado especial para aposentadoria é 65/60 anos (H/M).', g: 'ERRADO. É 60/55 anos.' }
    ],
    sotaque: '<strong>"ESPECIAL: 60/55 + 180 MESES, 1 SM"</strong>'
  };

  M['decoreba-beneficios'] = {
    topico: 'decoreba-beneficios',
    titulo: 'Tabela de Benefícios do RGPS (Resumo)',
    resumo: 'Mapear benefícios: aposentadoria (4 tipos), auxílios (3), pensão, salário (maternidade e família).',
    teoria: '<p>Conhecer a <strong>tabela de benefícios</strong> do RGPS é fundamental. São 4 tipos de aposentadoria, 3 auxílios, 1 pensão, 1 salário-maternidade, 1 salário-família, mais o BPC (assistência).</p>',
    regras: [
      'Aposentadoria por idade',
      'Aposentadoria por invalidez',
      'Aposentadoria por tempo de contribuição (extinta EC 103/2019)',
      'Aposentadoria especial',
      'Auxílio-doença',
      'Auxílio-acidente',
      'Auxílio-reclusão (extinto para servidores, mantido para RGPS)',
      'Pensão por morte',
      'Salário-maternidade',
      'Salário-família'
    ],
    excecoes:['O <em>auxílio-reclusão</em> foi extinto para o servidor público (EC 103/2019), mas mantido no RGPS.', 'O <em>salário-família</em> é devido ao empregado de baixa renda com filhos.'],
    exemplos:['Aposentadoria por idade: 65/62 + 180 meses.', 'Auxílio-doença: 91% do SB (regra nova).', 'Pensão por morte: 50% + 10% por dependente (até 100%).'],
    pegadinchas:['A <em>EC 103/2019</em> extinguiu o auxílio-reclusão para o servidor público, mas manteve para o RGPS.', 'A <em>pensão por morte</em> tem natureza de <em>cota</em>, não de <em>salário</em>.', 'O <em>salário-família</em> tem regras próprias de renda per capita.'],
    exercicios: [
      { q: 'São benefícios do RGPS: aposentadoria por idade, invalidez, tempo de contribuição e especial; auxílios-doença, acidente e reclusão; pensão por morte; salário-maternidade e salário-família.', g: 'CERTO.' },
      { q: 'O auxílio-reclusão foi extinto pela EC 103/2019 para todos os segurados.', g: 'ERRADO. Foi extinto apenas para o servidor público.' }
    ],
    sotaque: '<strong>"4 APOS + 3 AUXÍLIOS + PENSÃO + MATERN + FAMÍLIA"</strong>'
  };

  M['lgpd-impactos'] = {
    topico: 'lgpd-impactos',
    titulo: 'LGPD e Proteção de Dados Previdenciários',
    resumo: 'Dados previdenciários são sensíveis. Tratamento regulado pela LGPD e pela Lei 13.709/2018. Consentimento dispensado.',
    teoria: '<p>A <strong>LGPD</strong> (Lei 13.709/2018) considera <em>dado sensível</em> aquele sobre saúde, vida sexual, dados biométricos, etc. Dados previdenciários são sensíveis. O tratamento pelo <em>INSS</em> é dispensado de consentimento (art. 11, II, "g") por estar no exercício de políticas públicas.</p>',
    regras:['Dado sensível: saúde, biometria, convicção religiosa, opinião política, etc.', 'Tratamento dispensado de consentimento: políticas públicas, tutela da saúde, etc.', 'Direitos do titular: confirmação, acesso, correção, anonimização, portabilidade', 'ANPD: autoridade reguladora'],
    excecoes:['O <em>tratamento</em> de dado sensível exige consentimento, salvo exceções do art. 11, II.', 'O <em>compartilhamento</em> com outras bases é regulado por política.'],
    exemplos:['INSS acessou dados de saúde do segurado para periciar auxílio-doença → dispensado consentimento.', 'Empresa pediu dados de saúde de candidato → precisa consentimento.'],
    pegadinchas:['A <em>LGPD</em> tem <em>17 artigos sobre tratamento de dados pessoais</em>.', 'A <em>ANPD</em> é a <strong>Autoridade Nacional de Proteção de Dados</strong>.', 'O <em>DPO</em> (Data Protection Officer) é o encarregado de dados.'],
    exercicios: [
      { q: 'O INSS pode tratar dados de saúde do segurado sem consentimento para fins de perícia médica.', g: 'CERTO. Art. 11, II, "g", LGPD.' },
      { q: 'A ANPD é o conselho nacional de previdência.', g: 'ERRADO. ANPD é a Autoridade Nacional de Proteção de Dados.' }
    ],
    sotaque: '<strong>"DADO PREV = SENSÍVEL. ANPD = REGULADORA"</strong>'
  };

  M['custeio-empregado-domestico'] = {
    topico: 'custeio-empregado-domestico',
    titulo: 'Custeio do Empregado Doméstico (LC 150/2015)',
    resumo: 'O empregador doméstico recolhe 8% (INSS) + 7,5% a 14% (FGTS) + 0,8% (seguro). 30 dias de férias. 13º.',
    teoria: '<p>A <strong>LC 150/2015</strong> equiparou os direitos do empregado doméstico aos urbanos, com algumas exceções (piso salarial, jornada). O <em>custeio</em> é de 8% (INSS patronal) + 7,5% a 14% (FGTS) + 0,8% (seguro contra acidentes) + IR, se houver.</p>',
    regras:['8% INSS (cota patronal)', '7,5% a 14% FGTS (sobre a remuneração)', '0,8% seguro contra acidentes (GILRAT)', '0,2% salário-educação, 1% Sistema S'],
    excecoes:['A <em>férias</em> é de 30 dias (não 30 + 1/3, mas o 1/3 está incluído).', 'O <em>FGTS</em> pode ser opcional (rescisão com 3,2% em vez de 40% com 50%).'],
    exemplos:['Empregadora paga R$ 1.500 a Maria (mensalista): 8% × 1.500 = 120 (INSS) + 11% × 1.500 = 165 (FGTS) + 0,8% = 12.', 'Férias de 30 dias é regra, mas a cada 12 meses trabalha, ganha 1/3 constitucional.'],
    pegadinchas:['A <em>LC 150/2015</em> equiparou direitos, mas a <em>jornada</em> continua 8h/dia (sem limite semanal explícito).', 'A <em>férias</em> é <strong>30 dias</strong> (regra geral CLT).', 'O <em>FGTS</em> é obrigatório, mas há regime optativo com 3,2% + 50% rescisório.'],
    exercicios: [
      { q: 'O empregador doméstico recolhe 8% de INSS sobre o salário do empregado.', g: 'CERTO.' },
      { q: 'O empregado doméstico tem direito a FGTS de 8% sobre a remuneração.', g: 'ERRADO. O FGTS é de 8% (Lei 8.036/90), mas o doméstico pode ter o regime optativo (3,2% + 50%).' }
    ],
    sotaque: '<strong>"DOMÉSTICO: 8% + FGTS + 0,8% GILRAT"</strong>'
  };

  M['sistema-juridico'] = {
    topico: 'sistema-juridico',
    titulo: 'Sistema Jurídico: Constitucional x Infraconstitucional',
    resumo: 'Leis infraconstitucionais não podem contrariar a CF. CF é a norma de maior hierarquia.',
    teoria: '<p>O <strong>sistema jurídico brasileiro</strong> é hierarquizado: a CF/88 está no topo, seguida por emendas constitucionais, leis complementares, leis ordinárias, etc. As <em>normas infraconstitucionais</em> devem obediência à CF, sob pena de inconstitucionalidade.</p>',
    regras:['CF/88: hierarquia máxima', 'EC: hierarquia constitucional', 'LC: complementar (aprovada por maioria absoluta)', 'LO: ordinária (maioria simples)', 'MP: força de lei, mas com prazo e requisitos'],
    excecoes:['A <em>MP</em> tem força de lei, mas o STF pode declarar sua inconstitucionalidade.', 'O <em>decreto</em> pode ter força de lei (delegação legislativa).'],
    exemplos:['Lei 8.213/91 é LO (maioria simples).', 'LC 150/2015 é LC (maioria absoluta).', 'EC 103/2019 é EC (3/5 + 2 turnos).'],
    pegadinchas:['<strong>LC</strong> exige maioria absoluta, não relativa.', '<strong>MP</strong> tem prazo de 60 dias (prorrogável por mais 60).', 'A <em>reforma da previdência</em> foi feita por <strong>EC</strong> (EC 103/2019).'],
    exercicios: [
      { q: 'A EC tem hierarquia superior à LC.', g: 'ERRADO. Têm a mesma hierarquia (constitucional e complementar).' },
      { q: 'A MP tem força de lei, mas pode ser declarada inconstitucional pelo STF.', g: 'CERTO.' }
    ],
    sotaque: '<strong>"CF > EC > LC > LO > MP/DECRETO"</strong>'
  },

  global.MATERIAS_EXT = global.MATERIAS_EXT || {};
  global.MATERIAS_EXT.previdenciario = M;
})(window);
