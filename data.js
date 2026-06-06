/* ==========================================================
   INSS 2026 — DADOS DO CONTEÚDO
   Conteúdo programático completo, banco de questões e top assuntos
   Baseado nos últimos editais (CEBRASPE) e provas anteriores do INSS
   ========================================================== */

(function() {
  'use strict';

  // =====================================================
  // CONTEÚDO PROGRAMÁTICO COMPLETO
  // =====================================================
  const CONTEUDO = [
    {
      id: 'portugues',
      nome: 'Língua Portuguesa',
      icon: '\u{1F4D6}',
      cor: '#2563eb',
      grupo: 'conhecimentos-basicos',
      topicos: [
        'Compreensão e interpretação de textos',
        'Tipologia e gêneros textuais',
        'Ortografia oficial',
        'Acentuação gráfica',
        'Emprego do sinal indicativo de crase',
        'Pontuação',
        'Concordância verbal e nominal',
        'Regência verbal e nominal',
        'Colocação pronominal',
        'Estrutura e formação de palavras',
        'Classes de palavras: substantivo, adjetivo, advérbio',
        'Classes de palavras: verbo, pronome, preposição',
        'Classes de palavras: conjunção, interjeição, numeral, artigo',
        'Sintaxe: termos essenciais e integrantes da oração',
        'Sintaxe: termos acessórios e independentes',
        'Sintaxe do período composto: coordenação',
        'Sintaxe do período composto: subordinação',
        'Concordância: casos especiais',
        'Regência: casos especiais',
        'Semântica: sinonímia, antonímia, polissemia',
        'Coesão e coerência textuais',
        'Redação oficial: padrões e aplicabilidade',
        'Manual de Redação da Presidência (características)',
        'Correio eletrônico: uso adequado',
        'Reescrita de frases: substituição, deslocamento, paragrafia'
      ],
      materia: {
        introducao: '<p>A <strong>L&iacute;ngua Portuguesa</strong> &eacute; a mat&eacute;ria de maior peso entre os <em>Conhecimentos B&aacute;sicos</em> do concurso do INSS, representando cerca de <strong>15 a 20% da prova objetiva</strong>. A banca CEBRASPE costuma cobrar, al&eacute;m de portugu&ecirc;s tradicional, quest&otilde;es de <strong>interpreta&ccedil;&atilde;o de texto</strong> com alto grau de dificuldade, exigindo do candidato racioc&iacute;nio cr&iacute;tico e aten&ccedil;&atilde;o a detalhes. Nesta se&ccedil;&atilde;o, voc&ecirc; encontrar&aacute; o conte&uacute;do program&aacute;tico completo, com teoria, exemplos comentados e pegadinhas cl&aacute;ssicas da banca.</p>',
        capitulos: [
          {
            h: '1. Interpreta&ccedil;&atilde;o e Compreens&atilde;o de Textos',
            p: '<p>A interpreta&ccedil;&atilde;o de texto &eacute; a habilidade mais exigida pela CEBRASPE. Diferente de outras bancas, a CEBRASPE n&atilde;o pergunta apenas o que o texto diz, mas sim o que se pode <strong>inferir</strong> dele. A banca trabalha com textos longos, densos e de &aacute;reas diversas (sa&uacute;de, ci&ecirc;ncia, comportamento, pol&iacute;tica, tecnologia).</p>',
            ul: [
              '<strong>Ideia central (tese):</strong> o assunto principal do texto, o ponto que o autor quer defender.',
              '<strong>Ideias secund&aacute;rias:</strong> argumentos, exemplos, dados que sustentam a tese.',
              '<strong>Infer&ecirc;ncia:</strong> conclus&atilde;o l&oacute;gica que se tira do texto sem que esteja escrita.',
              '<strong>Pressuposto:</strong> informa&ccedil;&atilde;o impl&iacute;cita necess&aacute;ria para o texto fazer sentido.',
              '<strong>Subentendido:</strong> o que o texto deixa entender sem dizer explicitamente.',
              '<strong>Ambiguidade:</strong> dupla interpreta&ccedil;&atilde;o — geralmente a CEBRASPE explora esse recurso para confundir.'
            ]
          },
          {
            h: '2. Tipologia e G&ecirc;neros Textuais',
            p: '<p>Os <strong>g&ecirc;neros textuais</strong> s&atilde;o as formas como o texto se apresenta (not&iacute;cia, cr&ocirc;nica, artigo, editorial, relat&oacute;rio, manual). A <strong>tipologia</strong> &eacute; a classifica&ccedil;&atilde;o em tr&ecirc;s tipos b&aacute;sicos:</p>',
            ul: [
              '<strong>Narrativo:</strong> conta hist&oacute;ria (romance, cr&ocirc;nica, not&iacute;cia). Tem narrador, personagens, enredo.',
              '<strong>Descritivo:</strong> descreve algo (retrato, paisagem). Uso de adjetivos.',
              '<strong>Dissertativo/argumentativo:</strong> defende ideias (artigo, editorial, disserta&ccedil;&atilde;o). Tem tese, argumentos e proposta.',
              '<strong>Injuntivo/instrucional:</strong> d&aacute; instru&ccedil;&otilde;es (manual, receita, bula).',
              '<strong>Expositivo:</strong> explica conceitos (texto did&aacute;tico, enciclop&eacute;dico).'
            ]
          },
          {
            h: '3. Ortografia Oficial e Acentua&ccedil;&atilde;o',
            p: '<p>A CEBRASPE exige dom&iacute;nio da ortografia conforme o <strong>Acordo Ortogr&aacute;fico de 2009</strong> (em vigor desde 2016). Principais mudan&ccedil;as:</p>',
            ul: [
              'Trema: eliminou-se (lingu&iacute;stica, eloqu&ecirc;ncia, mas <em>qualquer</em> mant&eacute;m acento).',
              'Alfabeto: 26 letras (inclui k, w, y).',
              'Acento em parox&iacute;tonas com ditongo aberto: <em>ideia</em> perde o acento.',
              '<strong>Regras de acentua&ccedil;&atilde;o:</strong> proparox&iacute;tonas (sempre acentuadas), parox&iacute;tonas (n&atilde;o acentuadas, exceto as terminadas em L, N, R, X, PS, ditongo, etc.), ox&iacute;tonas (acentuadas quando terminadas em L, N, R, X, ditongo).',
              'Diferen&ccedil;a entre <strong>porque</strong> (causa) / <strong>por que</strong> (preposi&ccedil;&atilde;o + pronome) / <strong>porqu&ecirc;</strong> (substantivo) / <strong>porqu&ecirc;</strong> (fim de frase).'
            ]
          },
          {
            h: '4. Crase',
            p: '<p>A crase (&agrave;) &eacute; a fus&atilde;o da preposi&ccedil;&atilde;o <em>a</em> com o artigo <em>a</em>. Regra fundamental: <strong>usa-se crase antes de palavra feminina que admite o artigo &quot;a&quot;</strong>.</p>',
            ul: [
              '<strong>USA-SE crase:</strong> antes de palavras femininas determinadas (vou &agrave; escola, referi-me &agrave; paciente).',
              '<strong>N&Atilde;O USA-SE crase:</strong> antes de palavras masculinas, verbos, pronomes pessoais, palavras repetidas (&quot;a mim a mim&quot;), nomes de cidades (vou a S&atilde;o Paulo), antes de &quot;casa&quot; quando n&atilde;o h&aacute; sentido de lar.',
              '<strong>Casos especiais:</strong> &agrave; moda de (&agrave; maneira de), &agrave; medida que (&agrave; propor&ccedil;&atilde;o que), &agrave; noite (&agrave; noite escura est&aacute; impl&iacute;cito).',
              '<strong>Pegadinha cl&aacute;ssica:</strong> &quot;chegar a&quot; (verbo + preposi&ccedil;&atilde;o) vs. &quot;chegar em casa&quot; (sem crase).'
            ]
          },
          {
            h: '5. Pontua&ccedil;&atilde;o',
            p: '<p>Dominar o uso de v&iacute;rgula, ponto e v&iacute;rgula, dois-pontos e ponto final &eacute; fundamental.</p>',
            ul: [
              '<strong>V&iacute;rgula:</strong> separa termos coordenados, isola apostos, separa ora&ccedil;&otilde;es intercaladas, ap&oacute;s adv&eacute;rbios deslocados.',
              '<strong>Ponto e v&iacute;rgula:</strong> separa ora&ccedil;&otilde;es independentes longas, antes de conjun&ccedil;&otilde;es adversativas.',
              '<strong>Dois-pontos:</strong> introduzem cita&ccedil;&atilde;o, enumera&ccedil;&atilde;o, explica&ccedil;&atilde;o, f&oacute;rmula de tratamento.',
              '<strong>Ponto final:</strong> encerra frase declarativa. <strong>Ponto de interroga&ccedil;&atilde;o</strong> em perguntas diretas; <strong>exclama&ccedil;&atilde;o</strong> para emo&ccedil;&atilde;o.'
            ]
          },
          {
            h: '6. Concord&acirc;ncia Verbal e Nominal',
            p: '<p>A <strong>concord&acirc;ncia verbal</strong> &eacute; o ajuste do verbo ao sujeito (n&uacute;mero e pessoa). A <strong>nominal</strong> &eacute; o ajuste do nome (substantivo, adjetivo, artigo) ao substantivo a que se refere.</p>',
            ul: [
              '<strong>Casos especiais de concord&acirc;ncia verbal:</strong> sujeito coletivo (singular), haver/acontecer/existir no sentido de existir (impessoal, singular), &quot;mais de um&quot; (singular ou plural), sujeito indeterminado.',
              '<strong>Concord&acirc;ncia nominal:</strong> &quot;mesmo&quot; (mesmo eu), &quot;pr&oacute;prio&quot;, &quot;anexo&quot;, &quot;incluso&quot;, &quot;que&quot; (do que eu &mdash; errado; de que eu &mdash; certo).',
              '<strong>Pegadinhas:</strong> &quot;faz dez anos&quot; (impessoal, singular), &quot;houve debates&quot; (impessoal, singular).'
            ]
          },
          {
            h: '7. Reg&ecirc;ncia Verbal e Nominal',
            p: '<p>A <strong>reg&ecirc;ncia</strong> trata da rela&ccedil;&atilde;o de depend&ecirc;ncia entre verbos/nomes e complementos, exigindo ou n&atilde;o preposi&ccedil;&atilde;o.</p>',
            ul: [
              '<strong>Aspirar a</strong> (desejar), <strong>assistir a</strong> (ver/presenciar), <strong>preferir a</strong> (e n&atilde;o &quot;do que&quot;), <strong>obedecer a</strong>, <strong>visar a</strong> (almejar).',
              '<strong>Verbos sem preposi&ccedil;&atilde;o:</strong> alcan&ccedil;ar (objetivo), solicitar (algo), sugest&atilde;o de.',
              '<strong>Reg&ecirc;ncia nominal:</strong> &quot;avesso a&quot;, &quot;ansioso por/de&quot;, &quot;habil em&quot;, &quot;paralelo a&quot;, &quot;prefer&ecirc;ncia por&quot;.',
              '<strong>Crase + reg&ecirc;ncia:</strong> ir &agrave; praia, voltar &agrave;s aulas (se h&aacute; artigo).'
            ]
          },
          {
            h: '8. Sintaxe do Per&iacute;odo Composto',
            p: '<p>O per&iacute;odo composto tem duas ou mais ora&ccedil;&otilde;es. Divide-se em:</p>',
            ul: [
              '<strong>Coordena&ccedil;&atilde;o:</strong> ora&ccedil;&otilde;es independentes. Tipos: sind&eacute;tica (com conjun&ccedil;&atilde;o: e, mas, ou, por&eacute;m) e assind&eacute;tica (sem conjun&ccedil;&atilde;o).',
              '<strong>Subordina&ccedil;&atilde;o:</strong> ora&ccedil;&atilde;o principal + subordinada. Substantivas (fun&ccedil;&atilde;o de substantivo), adjetivas (fun&ccedil;&atilde;o de adjetivo), adverbiais (fun&ccedil;&atilde;o de adv&eacute;rbio), reduzidas (sem conjun&ccedil;&atilde;o).',
              '<strong>Pegadinhas:</strong> ora&ccedil;&atilde;o principal n&atilde;o tem conjun&ccedil;&atilde;o; adverbiais com &quot;a&quot; podem confundir com adjunto adverbial.'
            ]
          },
          {
            h: '9. Reda&ccedil;&atilde;o Oficial',
            p: '<p>O <strong>Manual de Reda&ccedil;&atilde;o da Presid&ecirc;ncia da Rep&uacute;blica</strong> &eacute; refer&ecirc;ncia para reda&ccedil;&atilde;o oficial. Caracter&iacute;sticas:</p>',
            ul: [
              '<strong>Clareza:</strong> linguagem simples, sem ambiguidade.',
              '<strong>Concis&atilde;o:</strong> eliminar palavras desnecess&aacute;rias.',
              '<strong>Formalidade:</strong> tratamento cerimonioso, sem g&iacute;rias.',
              '<strong>Impessoalidade:</strong> evitar 1&ordf; e 2&ordf; pessoas; preferir 3&ordf; ou 1&ordf; do plural (n&oacute;s).',
              'Atributos do texto oficial: <strong>impessoalidade, clareza, concis&atilde;o, formalidade, padroniza&ccedil;&atilde;o</strong>.',
              '<strong>Abrevia&ccedil;&otilde;es:</strong> V.Sa. (Vossa Senhoria), V.Exa. (Vossa Excel&ecirc;ncia), Sr. (Senhor).'
            ]
          },
          {
            h: '10. Coes&atilde;o e Coer&ecirc;ncia',
            p: '<p><strong>Coes&atilde;o:</strong> conex&atilde;o entre palavras e ora&ccedil;&otilde;es (recursos gramatificais e estil&iacute;sticos). <strong>Coer&ecirc;ncia:</strong> rela&ccedil;&atilde;o l&oacute;gica do texto com o mundo real.</p>',
            ul: [
              'Conectivos: <em>portanto</em> (conclus&atilde;o), <em>por&eacute;m</em> (contraste), <em>embora</em> (concess&atilde;o), <em>porque</em> (causa), <em>quando</em> (tempo), <em>se</em> (condi&ccedil;&atilde;o).',
              'Referencia&ccedil;&atilde;o: pronomes, sin&ocirc;nimos, elipse.',
              'Coes&atilde;o sequencial: <em>primeiro... em seguida... finalmente</em>.',
              'Substitui&ccedil;&atilde;o, elipse, repeti&ccedil;&atilde;o, paralelismo.'
            ]
          }
        ]
      },
      resumo: {
        titulo: 'Língua Portuguesa — Resumo Estratégico',
        secoes: [
          {
            h: 'Interpretação de Texto (Maior peso)',
            ul: [
              'CEBRASPE cobra muito: identificar tese central, ideias principais e secundárias',
              'Inferência: o que o texto sugere sem dizer explicitamente',
              'Relações de causa/consequência, comparação, contraste, exemplificação',
              'Cuidado com pegadinhas: palavras absolutistas (sempre, nunca, todos, nenhum)'
            ]
          },
          {
            h: 'Crase — Regra Prática',
            ul: [
              'Crase = à (preposição a + artigo a)',
              'NÃO usa crase antes de: palavra masculina, verbo, palavra repetida',
              'USA crase antes de: palavras femininas que admitem o artigo "a"',
              'Regra mnemônica: troque por "para a" — se fizer sentido, use crase'
            ]
          },
          {
            h: 'Concordância Verbal — Casos Especiais',
            ul: [
              'Sujeito coletivo: verbo no singular (maioria + singular OU plural)',
              'Houve/Houve (sem acento): Haver/Acontecer/Existir no sentido de existir',
              'Verbo + se (partícula apassivadora ou índice de indeterminação)',
              'Concordância com "mais de um": singular OU plural (ambos corretos)'
            ]
          },
          {
            h: 'Regência Verbal — Principais',
            ul: [
              'Aspirar a (desejar), assistir a (ver), preferir a, obedecer a, visar a',
              'Ajudar a/alguém, chegar a/atrás, chegar em (gíria - não oficial)',
              'Lembrar/Esquecer: com preposição se vier pronome (lembre-se de)'
            ]
          },
          {
            h: 'Pontuação — Pontos-Chave',
            ul: [
              'Vírgula: separa termos, isola apostos, após advérbios deslocados',
              'Ponto e vírgula: separa orações independentes longas',
              'Dois-pontos: introduzem explicação, citação, enumeração'
            ]
          }
        ]
      }
    },
    {
      id: 'rju',
      nome: 'Regime Jurídico Único (Lei 8.112/90)',
      icon: '\u{1F4DC}',
      cor: '#6366f1',
      grupo: 'conhecimentos-basicos',
      topicos: [
        'Lei 8.112/90: disposições preliminares e cargo público',
        'Provimento: formas (nomeação, readaptação, reintegração, etc.)',
        'Nomeação: competência, prazo e requisitos',
        'Posse: prazos, documentação',
        'Exercício: conceito, prazos, prorrogação',
        'Estágio probatório: 3 anos, critérios',
        'Vacância: exoneração, demissão, aposentadoria, falecimento',
        'Readaptação e reversão',
        'Reintegração e recondução',
        'Disponibilidade: conceito, remuneração, aproveitamento',
        'Direitos e deveres: vencimento, remuneração, indenização',
        'Adicionais: insalubridade, periculosidade, serviço extraordinário',
        'Adicional noturno, de férias',
        'Gratificações e vantagens pessoais',
        'Licenças: por motivo de doença em pessoa da família',
        'Licenças: para tratamento de saúde',
        'Licenças: gestante, paternidade, adoção',
        'Licenças: para capacitação e interesse particular',
        'Licenças: para desempenho de mandato classista',
        'Afastamentos para estudo, missão, exercício de cargo eletivo',
        'Férias: duração, parcelamento, indenização',
        'Deveres do servidor público',
        'Proibições ao servidor público',
        'Acumulação de cargos: regra e exceções',
        'Responsabilidade civil, penal e administrativa',
        'Processo Administrativo Disciplinar (PAD): fases',
        'Sindicância: rito sumário e ordinário',
        'Sanções disciplinares: advertência, suspensão, demissão',
        'Demissão: hipóteses, incompatibilização',
        'Cassação de aposentadoria e disponibilidade',
        'Prescrição e decadência disciplinar'
      ],
      resumo: {
        titulo: 'Lei 8.112/90 — Resumo Estratégico',
        secoes: [
          {
            h: 'Provimento e Vacância',
            ul: [
              'Provimento: nomeação, promoção, readaptação, reversão, reintegração, recondução',
              'Posse: até 30 dias da nomeação',
              'Exercício: até 15 dias da posse',
              'Estágio probatório: 3 anos, avaliado por chefia'
            ]
          },
          {
            h: 'Licenças — Prazos para Memorizar',
            ul: [
              'Tratamento de saúde: até 24 meses',
              'Doença em pessoa da família: até 60 dias (remunerada) + 90 (sem)',
              'Gestante: 120 dias (pode ser 28 antes do parto)',
              'Paternidade: 5 dias',
              'Adoção: 90 dias (criança até 1 ano); 60 (1-4 anos); 30 (4-8 anos)',
              'Capacitação: até 3 meses a cada 5 anos',
              'Interesse particular: até 3 anos (sem remuneração)'
            ]
          },
          {
            h: 'PAD — Fases do Procedimento',
            ul: [
              '1. Instauração (portaria)',
              '2. Inquérito: fase de instrução (provas) + defesa',
              '3. Defesa escrita: 10 dias (prazo)',
              '4. Relatório (recomendação da autoridade)',
              '5. Julgamento (autoridade competente)',
              'Prazo total: 60 dias (+60 prorrogáveis)'
            ]
          },
          {
            h: 'Sanções Disciplinares',
            ul: [
              'Advertência: leve, escrita, sem registro após 3 anos',
              'Suspensão: até 90 dias',
              'Demissão: faltas graves',
              'Cassação de aposentadoria (mesma pena da demissão)'
            ]
          },
          {
            h: 'Acumulação de Cargos',
            ul: [
              'Regra: VEDADA acumulação',
              'Exceções: 2 cargos de professor, 1 prof + 1 técnico (mesmo somatório de horários), 2 cargos de profissional de saúde',
              'Aposentado: só pode acumular se cargo acumulável'
            ]
          }
        ]
      },
      materia: {
        introducao: '<p>A <strong>Lei 8.112/90</strong> &eacute; o <em>Estatuto dos Servidores P&uacute;blicos Civis da Uni&atilde;o</em>, instituindo o Regime Jur&iacute;dico &Uacute;nico (RJU) para os servidores da administra&ccedil;&atilde;o direta, aut&aacute;rquica e fundacional da Uni&atilde;o. N&atilde;o se aplica a empregados p&uacute;blicos (CLT), empresas p&uacute;blicas ou sociedades de economia mista. Comp&otilde;e cerca de <strong>10-12% da prova do INSS</strong> e exige memoriza&ccedil;&atilde;o de prazos e hip&oacute;teses legais.</p>',
        capitulos: [
          {
            h: '1. Disposi&ccedil;&otilde;es Preliminares e Cargo P&uacute;blico',
            p: '<p>Art. 2&ordm;: <strong>servidor</strong> &eacute; a pessoa legalmente investida em cargo p&uacute;blico. Art. 3&ordm;: <strong>cargo p&uacute;blico</strong> &eacute; o conjunto de atribui&ccedil;&otilde;es e responsabilidades previstas na estrutura organizacional, com denomina&ccedil;&atilde;o pr&oacute;pria, n&uacute;mero certo e vencimento pago pelos cofres p&uacute;blicos. Os cargos podem ser de carreira (isolados ou em carreira), em comiss&atilde;o ou fun&ccedil;&atilde;o de confian&ccedil;a.</p>',
            ul: [
              'Cargo em comiss&atilde;o: livre nomea&ccedil;&atilde;o e exonera&ccedil;&atilde;o, sem concurso.',
              'Cargo efetivo: exige concurso p&uacute;blico, estabilidade ap&oacute;s 3 anos.',
              'Fun&ccedil;&atilde;o gratificada: exercida por servidor efetivo, sem substituir cargo.',
              'Acumulabilidade: art. 37, XVI, CF/88.'
            ]
          },
          {
            h: '2. Provimento',
            p: '<p>Formas de provimento (art. 8&ordm;): <strong>nomea&ccedil;&atilde;o, promo&ccedil;&atilde;o, readapta&ccedil;&atilde;o, revers&atilde;o, reintegra&ccedil;&atilde;o, recondu&ccedil;&atilde;o e aproveitamento</strong>. <strong>Nomea&ccedil;&atilde;o</strong> &eacute; o ato de designa&ccedil;&atilde;o para cargo p&uacute;blico. <strong>Posse</strong> &eacute; o ato de aceita&ccedil;&atilde;o formal das atribui&ccedil;&otilde;es, com termo assinado pela autoridade competente; prazo de <strong>30 dias</strong> contados da publica&ccedil;&atilde;o do ato de nomea&ccedil;&atilde;o, prorrog&aacute;vel por mais 30 dias. <strong>Exerc&iacute;cio</strong> &eacute; o desempenho efetivo das fun&ccedil;&otilde;es; prazo de <strong>15 dias</strong> contados da posse.</p>',
            ul: [
              '<strong>Readapta&ccedil;&atilde;o:</strong> aproveitamento em cargo compat&iacute;vel com limita&ccedil;&atilde;o f&iacute;sica ou mental.',
              '<strong>Revers&atilde;o:</strong> retorno &agrave; atividade do servidor aposentado por invalidez, quando a junta m&eacute;dica declara insubsistente o motivo.',
              '<strong>Reintegra&ccedil;&atilde;o:</strong> reinvestidura do servidor no cargo anterior por decis&atilde;o judicial.',
              '<strong>Recondu&ccedil;&atilde;o:</strong> retorno do servidor ao cargo anterior por inabilita&ccedil;&atilde;o em est&aacute;gio probat&oacute;rio ou reintegra&ccedil;&atilde;o do anterior.',
              '<strong>Est&aacute;gio probat&oacute;rio:</strong> 3 anos; avalia&ccedil;&atilde;o de assiduidade, disciplina, capacidade de iniciativa, produtividade, responsabilidade.'
            ]
          },
          {
            h: '3. Vac&acirc;ncia',
            p: '<p>Formas de vac&acirc;ncia (art. 33): exonera&ccedil;&atilde;o, demiss&atilde;o, promo&ccedil;&atilde;o, readapta&ccedil;&atilde;o, aposentadoria, posse em outro cargo inacumul&aacute;vel, falecimento.</p>',
            ul: [
              '<strong>Exonera&ccedil;&atilde;o</strong> de cargo em comiss&atilde;o: a crit&eacute;rio da autoridade.',
              '<strong>Exonera&ccedil;&atilde;o</strong> de cargo efetivo: a pedido do servidor OU durante est&aacute;gio probat&oacute;rio (por insufici&ecirc;ncia de desempenho).',
              '<strong>Demiss&atilde;o:</strong> puni&ccedil;&atilde;o disciplinar por falta grave.',
              '<strong>Posse em outro cargo inacumul&aacute;vel:</strong> gera vac&acirc;ncia do cargo anterior.'
            ]
          },
          {
            h: '4. Direitos e Vantagens',
            p: '<p><strong>Vencimento</strong> &eacute; a retribui&ccedil;&atilde;o pecuni&aacute;ria pelo exerc&iacute;cio de cargo p&uacute;blico; <strong>remunera&ccedil;&atilde;o</strong> &eacute; o vencimento acrescido das vantagens. <strong>Irredutibilidade</strong> dos vencimentos &eacute; garantia constitucional (art. 37, XV). As vantagens incluem:</p>',
            ul: [
              '<strong>Adicional por tempo de servi&ccedil;o (anu&eacute;nio):</strong> extinto pela Lei 9.527/97, mantido o direito adquirido.',
              '<strong>Adicional de qualifica&ccedil;&atilde;o:</strong> para servidores com pr&eacute;-requisito acima do exigido (5% ou 10%).',
              '<strong>Adicional de insalubridade/periculosidade/atividade penosa:</strong> 5%/10%/20%.',
              '<strong>Adicional de servi&ccedil;o extraordin&aacute;rio (hora extra):</strong> 50% diurna, 100% noturna, 100% s&aacute;bado/domingo/feriado.',
              '<strong>Adicional noturno:</strong> 25% sobre o valor da hora diurna (22h &agrave;s 5h).',
              '<strong>Adicional de f&eacute;rias:</strong> 1/3 constitucional sobre o valor da remunera&ccedil;&atilde;o.'
            ]
          },
          {
            h: '5. F&eacute;rias, Licen&ccedil;as e Afastamentos',
            p: '<p><strong>F&eacute;rias:</strong> 30 dias por ano (ap&oacute;s 12 meses de exerc&iacute;cio), podendo ser parceladas em at&eacute; 3 vezes. <strong>Licen&ccedil;as</strong> (art. 81 a 96):</p>',
            ul: [
              '<strong>Por motivo de doen&ccedil;a em pessoa da fam&iacute;lia:</strong> at&eacute; 60 dias com remunera&ccedil;&atilde;o (prorrog&aacute;vel por mais 90 sem).',
              '<strong>Para tratamento da pr&oacute;pria sa&uacute;de:</strong> at&eacute; 24 meses.',
              '<strong>&Agrave; gestante:</strong> 120 dias (pode iniciar at&eacute; 28 dias antes do parto).',
              '<strong>&Agrave; adotante:</strong> 90 (crian&ccedil;a at&eacute; 1 ano) / 60 (1-4) / 30 (4-8).',
              '<strong>Paternidade:</strong> 5 dias.',
              '<strong>Para capacita&ccedil;&atilde;o:</strong> at&eacute; 3 meses a cada 5 anos.',
              '<strong>Para tratar de interesses particulares:</strong> at&eacute; 3 anos, sem remunera&ccedil;&atilde;o.',
              '<strong>Para desempenho de mandato classista:</strong> limitada a 1 associa&ccedil;&atilde;o por servidor.',
              '<strong>Para servir em organismo internacional:</strong> com perda total da remunera&ccedil;&atilde;o (Lei 9.527/97).'
            ]
          },
          {
            h: '6. Regime Disciplinar e San&ccedil;&otilde;es',
            p: '<p>Os <strong>deveres</strong> (art. 116) e <strong>proibi&ccedil;&otilde;es</strong> (art. 117) do servidor. <strong>San&ccedil;&otilde;es disciplinares</strong> (art. 127):</p>',
            ul: [
              '<strong>Advert&ecirc;ncia:</strong> para falta leve.',
              '<strong>Suspens&atilde;o:</strong> at&eacute; 90 dias.',
              '<strong>Demiss&atilde;o:</strong> falta grave, especificamente prevista em lei.',
              '<strong>Cassa&ccedil;&atilde;o de aposentadoria ou disponibilidade:</strong> aplicada a inativo ou dispon&iacute;vel que praticou falta pun&iacute;vel com demiss&atilde;o.',
              '<strong>Destitui&ccedil;&atilde;o de cargo em comiss&atilde;o</strong> ou fun&ccedil;&atilde;o de confian&ccedil;a.'
            ]
          },
          {
            h: '7. PAD &mdash; Processo Administrativo Disciplinar',
            p: '<p>Apura&ccedil;&atilde;o de responsabilidade funcional. Fases:</p>',
            ul: [
              '<strong>Instaura&ccedil;&atilde;o:</strong> portaria da autoridade competente.',
              '<strong>Inqu&eacute;rito administrativo:</strong> instru&ccedil;&atilde;o (provas), defesa escrita (10 dias para o indiciado), relat&oacute;rio.',
              '<strong>Julgamento:</strong> autoridade competente (prazo de 20 dias, podendo ser prorrogado por mais 10).',
              '<strong>Comiss&atilde;o:</strong> 3 servidores est&aacute;veis; presidente deve ter cargo de n&iacute;vel igual ou superior ao do indiciado.',
              '<strong>Afastamento preventivo:</strong> at&eacute; 60 dias, prorrog&aacute;veis por mais 60 (art. 147).',
              '<strong>Prazo total do processo:</strong> 60 dias + 60 dias prorrog&aacute;veis (art. 152).',
              '<strong>Sindic&acirc;ncia:</strong> pode ser punitiva (com contradit&oacute;rio) ou meramente investigativa.'
            ]
          },
          {
            h: '8. Acumula&ccedil;&atilde;o de Cargos',
            p: '<p>Art. 37, XVI, CF/88: <strong>vedada</strong> a acumula&ccedil;&atilde;o remunerada de cargos p&uacute;blicos, <strong>salvo</strong>:</p>',
            ul: [
              'Dois cargos de professor.',
              'Um cargo de professor com outro t&eacute;cnico/cient&iacute;fico.',
              'Dois cargos de profissional de sa&uacute;de, com profiss&atilde;o regulamentada.',
              'Somat&oacute;rio de hor&aacute;rios: n&atilde;o pode exceder 60h semanais (S&uacute;mula AGU).',
              'Aposentado: pode acumular com cargos acumul&aacute;veis na ativa.'
            ]
          }
        ]
      }
    },
    {
      id: 'etica',
      nome: 'Ética no Serviço Público',
      icon: '\u{1F6E1}',
      cor: '#dc2626',
      grupo: 'conhecimentos-basicos',
      topicos: [
        'Ética e moral: conceitos e diferenças',
        'Ética no serviço público: princípios',
        'Código de Ética do Servidor (Decreto 1.171/94)',
        'Deveres fundamentais do servidor',
        'Vedações ao servidor público',
        'Comissões de Ética: composição e atuação',
        'Processo ético: rito, penalidades',
        'Improbidade administrativa (Lei 8.429/92, com alterações da Lei 14.230/21)',
        'Atos de improbidade: enriquecimento ilícito',
        'Atos de improbidade: prejuízo ao erário',
        'Atos de improbidade: violação de princípios',
        'Sanções: perda de bens, ressarcimento, suspensão, demissão',
        'Conduta e decoro funcional',
        'Assédio moral no serviço público',
        'Assédio sexual',
        'Conflito de interesses (Lei 12.813/13)',
        'Transparência pública (Lei 12.527/11)',
        'Lei Anticorrupção (Lei 12.846/13)',
        'Responsabilização administrativa e judicial'
      ],
      resumo: {
        titulo: 'Ética e Improbidade — Resumo Estratégico',
        secoes: [
          {
            h: 'Decreto 1.171/94 — Código de Ética',
            ul: [
              'Deveres: moralidade, publicidade, cortesia, eficiência',
              'Vedações: usar cargo para favorecimento, receber presentes, opinar depreciativamente sobre colega',
              'Comissões de Ética: educativas, não punitivas (multa de até 50% da remuneração)'
            ]
          },
          {
            h: 'Lei 8.429/92 (com Lei 14.230/21)',
            ul: [
              '3 modalidades: enriquecimento ilícito, prejuízo ao erário, violação de princípios',
              'Sanções: perda da função, suspensão dos direitos políticos, multa civil, ressarcimento',
              'Elemento subjetivo (dolo) necessário para todas as modalidades',
              'Prescrição: 8 anos para improbidade; ação de ressarcimento é IMPRESCRITÍVEL'
            ]
          },
          {
            h: 'Conflito de Interesses (Lei 12.813/13)',
            ul: [
              'Vedação de: atuar em processo em que tenha interesse privado',
              'Prestar consultoria a empresa que tenha interesse em decisão sua',
              'Aceitar presentes de quem tenha interesse em decisão'
            ]
          }
        ]
      },
      materia: {
        introducao: '<p>A <strong>&Eacute;tica no Servi&ccedil;o P&uacute;blico</strong> &eacute; mat&eacute;ria cl&aacute;ssica, com cobran&ccedil;a regular da CEBRASPE. O conte&uacute;do &eacute; centrado no <strong>Decreto 1.171/94</strong> (C&oacute;digo de &Eacute;tica), na <strong>Lei 8.429/92</strong> (Improbidade, com a Lei 14.230/21), na <strong>Lei 12.813/13</strong> (Conflito de Interesses) e na <strong>Lei 12.527/11</strong> (Acesso &agrave; Informa&ccedil;&atilde;o). Comp&otilde;e cerca de <strong>5% da prova</strong>.</p>',
        capitulos: [
          {
            h: '1. &Eacute;tica e Moral &mdash; Distin&ccedil;&otilde;es',
            p: '<p><strong>Moral</strong> &eacute; o conjunto de normas, valores e costumes de um grupo social, vari&aacute;vel no tempo e no espa&ccedil;o. <strong>&Eacute;tica</strong> &eacute; a reflex&atilde;o cr&iacute;tica sobre a moral, a ci&ecirc;ncia do comportamento moral, que busca justificar racionalmente as normas. A <strong>bio&eacute;tica</strong> trata de quest&otilde;es &eacute;ticas aplicadas &agrave; vida (sa&uacute;de, ci&ecirc;ncia).</p>',
            ul: [
              'Moral: normativa, concreta, vari&aacute;vel.',
              '&Eacute;tica: te&oacute;rica, reflexiva, universal.',
              'Para o servidor: conduta &eacute;tica = moral + reflex&atilde;o + transpar&ecirc;ncia.',
              'Decreto 1.171/94: aplica-se aos servidores do Poder Executivo Federal.'
            ]
          },
          {
            h: '2. Decreto 1.171/94 &mdash; C&oacute;digo de &Eacute;tica',
            p: '<p>Estabelece princ&iacute;pios, deveres e vedações aos servidores p&uacute;blicos do Executivo Federal. Os principais deveres (art. 3&ordm;) e vedações (art. 4&ordm;):</p>',
            ul: [
              '<strong>Deveres:</strong> moralidade, publicidade, cortesia, efici&ecirc;ncia, transpar&ecirc;ncia, urbanidade, integridade, conduta exemplar.',
              '<strong>Veda&ccedil;&otilde;es:</strong> usar cargo para favorecimento pessoal, aceitar presentes que n&atilde;o sejam protocolares, opinar depreciativamente sobre colegas, ausentar-se do servi&ccedil;o sem autoriza&ccedil;&atilde;o, fazer declara&ccedil;&otilde;es p&uacute;blicas prejudiciais ao Servi&ccedil;o P&uacute;blico.',
              'Faltas &eacute;ticas: natureza leve (advert&ecirc;ncia), m&eacute;dia (censura), grave (multa at&eacute; 50% da remunera&ccedil;&atilde;o).',
              'Comiss&otilde;es de &Eacute;tica: educativas, n&atilde;o punitivas. T&ecirc;m efeito moral.'
            ]
          },
          {
            h: '3. Lei 8.429/92 &mdash; Improbidade Administrativa (Lei 14.230/21)',
            p: '<p>A Lei 14.230/21 (conhecida como &quot;Lei da Improbidade&quot;) reformulou completamente a mat&eacute;ria. Principais mudan&ccedil;as:</p>',
            ul: [
              '<strong>3 modalidades</strong> (arts. 9&ordm;, 10 e 11): enriquecimento il&iacute;cito, preju&iacute;zo ao er&aacute;rio e viola&ccedil;&atilde;o de princ&iacute;pios.',
              '<strong>Elemento subjetivo:</strong> <em>dolo</em> necess&aacute;rio para todas as modalidades. A culpa foi eliminada (salvo na modalidade do art. 10, com a devida adequa&ccedil;&atilde;o jurisprudencial).',
              '<strong>San&ccedil;&otilde;es:</strong> perda da fun&ccedil;&atilde;o p&uacute;blica, suspens&atilde;o dos direitos pol&iacute;ticos (at&eacute; 14 anos), multa civil, ressarcimento ao er&aacute;rio.',
              '<strong>Prescri&ccedil;&atilde;o:</strong> 8 anos para a&ccedil;&otilde;es de improbidade. <strong>A&ccedil;&atilde;o de ressarcimento &eacute; imprescrit&iacute;vel</strong> (art. 37, &sect;5&ordm;, CF/88).',
              '<strong>Legitimados ativos:</strong> MP, pessoa jur&iacute;dica interessada (União, Estado, DF, Munic&iacute;pio).',
              '<strong>Elemento subjetivo:</strong> o dolo deve ser provado pelo autor da a&ccedil;&atilde;o.'
            ]
          },
          {
            h: '4. Lei 12.813/13 &mdash; Conflito de Interesses',
            p: '<p>Regula o conflito de interesses no &acirc;mbito do Poder Executivo federal. Situa&ccedil;&otilde;es que configuram conflito (art. 5&ordm;):</p>',
            ul: [
              'Atuar em processo em que tenha interesse privado.',
              'Prestar consultoria a empresa que tenha interesse em decis&atilde;o do agente.',
              'Aceitar presentes de quem tenha interesse em decis&atilde;o.',
              'Manter rela&ccedil;&atilde;o de neg&oacute;cio com pessoa f&iacute;sica ou jur&iacute;dica que tenha interesse em decis&atilde;o sua.',
              '<strong>San&ccedil;&atilde;o:</strong> demiss&atilde;o ou medida equivalente (art. 12).'
            ]
          },
          {
            h: '5. Lei 12.527/11 &mdash; Lei de Acesso &agrave; Informa&ccedil;&atilde;o (LAI)',
            p: '<p>Regula o acesso a informa&ccedil;&otilde;es p&uacute;blicas. Princ&iacute;pios: <strong>publicidade &eacute; regra, sigilo &eacute; exce&ccedil;&atilde;o</strong>.</p>',
            ul: [
              'Prazo de resposta: <strong>20 dias corridos</strong>, prorrog&aacute;veis por mais 10, com justificativa.',
              'Grau de sigilo: <strong>reservada (5 anos), secreta (15 anos), ultrassecreta (25 anos)</strong>.',
              'Ap&oacute;s o prazo, a classifica&ccedil;&atilde;o decai.',
              'A autoridade m&aacute;xima do &oacute;rg&atilde;o &eacute; a respons&aacute;vel pela classifica&ccedil;&atilde;o.',
              'Indisponibilidade do pedido: s&oacute; se a informa&ccedil;&atilde;o for sigilosa ou inexistente.',
              'Pedido de desclassifica&ccedil;&atilde;o/reexame: dirigido &agrave; autoridade que classificou.'
            ]
          },
          {
            h: '6. Lei 12.846/13 &mdash; Lei Anticorrup&ccedil;&atilde;o',
            p: '<p>Responsabiliza&ccedil;&atilde;o administrativa e civil de pessoas jur&iacute;dicas por atos lesivos contra a Administra&ccedil;&atilde;o P&uacute;blica. Atos lesivos (art. 5&ordm;):</p>',
            ul: [
              'Prometer, oferecer ou dar vantagem indevida a agente p&uacute;blico.',
              'Comprovadamente financiar custeio de atos il&iacute;citos.',
              'Utilizar intermedi&aacute;rio para ocultar interesse ou identidade.',
              'Dificultar atividade de investiga&ccedil;&atilde;o ou fiscaliza&ccedil;&atilde;o.',
              'San&ccedil;&otilde;es: multa (0,1% a 20% do faturamento bruto), publica&ccedil;&atilde;o extraordin&atilde;ria da decis&atilde;o, etc.'
            ]
          }
        ]
      }
    },
    {
      id: 'informatica',
      nome: 'Noções de Informática',
      icon: '\u{1F4BB}',
      cor: '#0891b2',
      grupo: 'conhecimentos-basicos',
      topicos: [
        'MS Word: edição e formatação de texto',
        'MS Word: tabelas, imagens e gráficos',
        'MS Word: mala direta, referências',
        'MS Excel: células, fórmulas básicas',
        'MS Excel: funções (SOMA, MÉDIA, SE, PROCV, etc.)',
        'MS Excel: gráficos e tabelas dinâmicas',
        'MS Excel: formatação condicional',
        'MS PowerPoint: criação de apresentações',
        'Internet: navegadores, URLs, pesquisa',
        'Correio eletrônico: envio, anexos, etiquetas',
        'Segurança da informação: conceitos',
        'Malware: vírus, worms, trojans, ransomware',
        'Senhas: boas práticas, autenticação',
        'Criptografia: conceitos, assinatura digital',
        'Certificado digital: ICP-Brasil',
        'Redes de computadores: conceitos',
        'Protocolos: TCP/IP, HTTP, HTTPS, FTP',
        'Hardware: processador, memória, dispositivos',
        'Software: sistemas operacionais',
        'Windows 10/11: interface, atalhos',
        'Nuvem (cloud computing): conceitos',
        'Big Data e Internet das Coisas (IoT)',
        'LGPD (Lei 13.709/18): princípios',
        'Lei de Acesso à Informação (Lei 12.527/11)',
        'Gov.br e serviços digitais',
        'Backup: tipos e importância'
      ],
      resumo: {
        titulo: 'Informática — Resumo Estratégico',
        secoes: [
          {
            h: 'Excel — Funções Mais Cobradas',
            ul: [
              '=SOMA(A1:A10): soma intervalo',
              '=MÉDIA(A1:A10): média aritmética',
              '=MÁXIMO/MÍNIMO: maior/menor valor',
              '=SE(condição; valor_verdadeiro; valor_falso): condicional',
              '=PROCV(valor; matriz; coluna; 0): busca vertical',
              '=CONT.SE: conta células que atendem condição',
              '=SOMASE: soma células que atendem condição'
            ]
          },
          {
            h: 'Segurança da Informação',
            ul: [
              'Pilares: Confidencialidade, Integridade, Disponibilidade (CID)',
              'Phishing: e-mail fraudulento para roubo de dados',
              'Ransomware: criptografa dados e pede resgate',
              'Firewall: controle de tráfego de rede',
              'VPN: túnel seguro em rede pública'
            ]
          },
          {
            h: 'Internet e Protocolos',
            ul: [
              'HTTP: navegação sem criptografia (porta 80)',
              'HTTPS: navegação segura com SSL/TLS (porta 443)',
              'TCP/IP: protocolo base da internet',
              'DNS: converte domínio em IP',
              'FTP: transferência de arquivos'
            ]
          },
          {
            h: 'Gov.br e Lei de Acesso',
            ul: [
              'LAI (Lei 12.527/11): publicidade como regra, sigilo como exceção',
              'Prazo para resposta: 20 dias (prorrogáveis por 10)',
              'Sigilo: 5 anos (reservada), 15 anos (secreta)',
              'Documentos ultrassecretos: 25 anos'
            ]
          }
        ]
      },
      materia: {
        introducao: '<p>A <strong>Inform&aacute;tica</strong> no concurso do INSS foca em <strong>Microsoft Office (Word, Excel, PowerPoint)</strong>, <strong>Internet/Seguran&ccedil;a da Informa&ccedil;&atilde;o</strong>, e temas atuais como <strong>LGPD, Gov.br e Certificado Digital</strong>. Comp&otilde;e cerca de <strong>5-7% da prova</strong>. A CEBRASPE adota a nomenclatura do <strong>BR Office</strong> em alguns casos (ex: <em>Calc</em> em vez de Excel), mas mant&eacute;m equival&ecirc;ncia.</p>',
        capitulos: [
          {
            h: '1. Microsoft Excel (Foco Principal)',
            p: '<p>O <strong>Excel</strong> &eacute; o software mais cobrado. Principais funcionalidades:</p>',
            ul: [
              '<strong>Fun&ccedil;&otilde;es b&aacute;sicas:</strong> =SOMA, =M&Eacute;DIA, =M&Aacute;XIMO, =M&Iacute;NIMO, =CONTAGEM.',
              '<strong>Fun&ccedil;&atilde;o SE:</strong> =SE(condi&ccedil;&atilde;o; valor_se_verdadeiro; valor_se_falso). Aninhamento: =SE(... ; SE(... ; ...)).',
              '<strong>PROCV:</strong> =PROCV(valor_procurado; matriz_tabela; n&uacute;m_&iacute;ndice_coluna; 0 para exato).',
              '<strong>PROCH:</strong> busca horizontal.',
              '<strong>Fun&ccedil;&otilde;es estat&iacute;sticas:</strong> =CONT.SE, =SOMASE, =M&Eacute;DIASE, =CONT.SES, =SOMASES.',
              '<strong>Fun&ccedil;&otilde;es de data:</strong> =HOJE(), =AGORA(), =DIAS(data_final; data_inicial), =M&Ecirc;S(7/2024).',
              '<strong>Formata&ccedil;&atilde;o condicional:</strong> real&ccedil;a c&eacute;lulas conforme condi&ccedil;&otilde;es (maior/menor que, &uacute;nicas, escala de cor, &iacute;cones).',
              '<strong>Tabela din&acirc;mica:</strong> resumo de grandes volumes de dados, com filtros, agrupamentos, etc.',
              '<strong>Gr&aacute;ficos:</strong> coluna, barra, linha, pizza, dispers&atilde;o, &aacute;rea.',
              '<strong>Refer&ecirc;ncia absoluta ($):</strong> trava a c&eacute;lula em c&oacute;pias. Ex: =A$1 fixa linha, =$A$1 fixa c&eacute;lula.'
            ]
          },
          {
            h: '2. Microsoft Word',
            p: '<p>Recursos cobrados:</p>',
            ul: [
              '<strong>Formata&ccedil;&atilde;o:</strong> fonte, par&aacute;grafo, espa&ccedil;amento, recuo, tabula&ccedil;&atilde;o.',
              '<strong>Estilos:</strong> t&iacute;tulos, subt&iacute;tulos, normal, etc.',
              '<strong>Listas:</strong> numeradas, com marcadores, multin&iacute;vel.',
              '<strong>Tabelas:</strong> inser&ccedil;&atilde;o, formata&ccedil;&atilde;o, convers&atilde;o de texto em tabela.',
              '<strong>Imagens e formas:</strong> inser&ccedil;&atilde;o, dimensionamento, disposi&ccedil;&atilde;o.',
              '<strong>Cabe&ccedil;alho/rodap&eacute;:</strong> numera&ccedil;&atilde;o de p&aacute;gina, data, hora.',
              '<strong>Quebras:</strong> de p&aacute;gina, se&ccedil;&atilde;o, linha.',
              '<strong>Localizar e substituir:</strong> com curingas (^p, ^t).',
              '<strong>Controle de altera&ccedil;&otilde;es.</strong>'
            ]
          },
          {
            h: '3. Microsoft PowerPoint',
            p: '<p>Software de apresenta&ccedil;&otilde;es. Recursos:</p>',
            ul: [
              'Slides, layouts, temas.',
              'Anima&ccedil;&otilde;es de entrada, &ecirc;nfase e sa&iacute;da.',
              'Transi&ccedil;&otilde;es entre slides.',
              'Modo de apresenta&ccedil;&atilde;o do apresentador.',
              'Inser&ccedil;&atilde;o de v&iacute;deos, &aacute;udios, gr&aacute;ficos, tabelas, SmartArt.',
              'Slide mestre: define o layout padr&atilde;o.',
              'Exporta&ccedil;&atilde;o para PDF, imagem.'
            ]
          },
          {
            h: '4. Internet e Navegadores',
            p: '<p>Conceitos b&aacute;sicos de internet:</p>',
            ul: [
              '<strong>WWW (World Wide Web):</strong> sistema de documentos em hipertexto.',
              '<strong>URL:</strong> endere&ccedil;o de recurso (esquema://dom&iacute;nio/caminho).',
              '<strong>Navegadores:</strong> Chrome, Firefox, Edge, Safari. Renderizam HTML.',
              '<strong>Mecanismos de busca:</strong> Google, Bing, Yahoo. Operadores: &quot;&quot; (busca exata), - (excluir), site:, filetype:.',
              '<strong>HTTP e HTTPS:</strong> protocolos de transfer&ecirc;ncia. HTTPS usa SSL/TLS (porta 443).',
              '<strong>FTP:</strong> transfer&ecirc;ncia de arquivos (porta 21).',
              '<strong>DNS:</strong> converte dom&iacute;nio em IP.',
              '<strong>TCP/IP:</strong> protocolo base da internet.',
              '<strong>Cookies:</strong> pequenos arquivos de identifica&ccedil;&atilde;o do usu&aacute;rio.'
            ]
          },
          {
            h: '5. Seguran&ccedil;a da Informa&ccedil;&atilde;o',
            p: '<p>Os tr&ecirc;s pilares (CID): <strong>Confidencialidade, Integridade, Disponibilidade</strong>.</p>',
            ul: [
              '<strong>Malware:</strong> v&iacute;rus, worm, trojan (cavalo de troia), spyware, adware, ransomware, keylogger.',
              '<strong>Phishing:</strong> e-mail fraudulento para roubo de dados. Spear phishing &eacute; direcionado.',
              '<strong>Engenharia social:</strong> manipula&ccedil;&atilde;o psicol&oacute;gica para obter informa&ccedil;&otilde;es.',
              '<strong>Firewall:</strong> filtra tr&aacute;fego de rede.',
              '<strong>Antiv&iacute;rus:</strong> detecta e remove malware.',
              '<strong>VPN:</strong> t&uacute;nel criptografado em rede p&uacute;blica.',
              '<strong>Criptografia:</strong> sim&eacute;trica (mesma chave) e assim&eacute;trica (chave p&uacute;blica + privada).',
              '<strong>Senhas fortes:</strong> combina&ccedil;&atilde;o de letras, n&uacute;meros e s&iacute;mbolos; autentica&ccedil;&atilde;o de dois fatores (2FA).',
              '<strong>Backup:</strong> completo, incremental, diferencial. Regra 3-2-1.'
            ]
          },
          {
            h: '6. Certificado Digital (ICP-Brasil)',
            p: '<p>Documento eletr&ocirc;nico que identifica pessoa f&iacute;sica ou jur&iacute;dica no ambiente virtual, garantindo <strong>autenticidade, integridade e sigilo</strong>.</p>',
            ul: [
              '<strong>e-CPF:</strong> para pessoa f&iacute;sica.',
              '<strong>e-CNPJ:</strong> para pessoa jur&iacute;dica.',
              'Tipos: A1 (arquivo no computador, val. 1 ano), A3 (token/smart card, val. 3 anos), S1/S3 (sigilo).',
              '<strong>ICP-Brasil:</strong> cadeia de certifica&ccedil;&atilde;o brasileira (AC Raiz, ACs, ARs).',
              'Usos: e-SOCIAL, SPED, PJe, Receita Federal, INSS Digital.'
            ]
          },
          {
            h: '7. LGPD (Lei 13.709/18)',
            p: '<p><strong>Lei Geral de Prote&ccedil;&atilde;o de Dados Pessoais</strong>. Principais pontos:</p>',
            ul: [
              '<strong>Aplica&ccedil;&atilde;o:</strong> tratamento de dados pessoais por pessoa f&iacute;sica ou jur&iacute;dica, p&uacute;blica ou privada, no Brasil.',
              '<strong>Princ&iacute;pios:</strong> finalidade, adequa&ccedil;&atilde;o, necessidade, livre acesso, qualidade dos dados, transpar&ecirc;ncia, seguran&ccedil;a, preven&ccedil;&atilde;o, n&atilde;o discrimina&ccedil;&atilde;o, responsabiliza&ccedil;&atilde;o.',
              '<strong>10 hip&oacute;teses de tratamento</strong> (art. 7&ordm;): consentimento, cumprimento de obriga&ccedil;&atilde;o legal, pol&iacute;tica p&uacute;blica, etc.',
              '<strong>Direitos do titular:</strong> confirma&ccedil;&atilde;o de exist&ecirc;ncia, acesso, corre&ccedil;&atilde;o, anonimiza&ccedil;&atilde;o, portabilidade, elimina&ccedil;&atilde;o.',
              '<strong>ANPD (Autoridade Nacional):</strong> &oacute;rg&atilde;o fiscalizador, com poder de san&ccedil;&atilde;o.',
              'Diferen&ccedil;as para GDPR europeu: LGPD &eacute; menos rigorosa, mas similar em esp&iacute;rito.'
            ]
          }
        ]
      }
    },
    {
      id: 'administrativo',
      nome: 'Direito Administrativo',
      icon: '\u{1F4C4}',
      cor: '#ea580c',
      grupo: 'conhecimentos-especificos',
      topicos: [
        'Princípios da Administração Pública (LIMPE)',
        'Poderes administrativos: hierárquico, disciplinar, regulamentar, de polícia',
        'Poder de polícia: administrativo e judiciário',
        'Atos administrativos: conceito e elementos',
        'Atributos dos atos administrativos: PATI (presunção, Autoexecutoriedade, Tipicidade, Imperatividade)',
        'Classificação dos atos: vinculados x discricionários',
        'Espécies de atos: licença, autorização, permissão, admissão, homologação',
        'Extinção dos atos: anulação, revogação, cassação, caducidade, contraposição',
        'Convalidação',
        'Contratos administrativos: características',
        'Cláusulas exorbitantes',
        'Equilíbrio econômico-financeiro',
        'Alteração, rescisão e execução dos contratos',
        'Licitações: princípios (Lei 14.133/21)',
        'Modalidades: concorrência, pregão, concurso, leilão, diálogo competitivo',
        'Dispensa e inexigibilidade',
        'Pregão: presencial e eletrônico',
        'Tipos: menor preço, melhor técnica, técnica e preço, maior retorno econômico',
        'Fases da licitação: edital, habilitação, julgamento, homologação',
        'Servidores públicos: cargo, emprego, função pública',
        'Responsabilidade civil do Estado: objetiva, teoria do risco administrativo',
        'Excludentes e atenuantes da responsabilidade estatal',
        'Improbidade administrativa (visão geral)',
        'Processo administrativo: princípios (Lei 9.784/99)',
        'Bens públicos: classificação, regime jurídico',
        'Uso de bens públicos: autorização, permissão, concessão',
        'Serviços públicos: conceito, princípios, classificação',
        'Concessão, permissão e autorização de serviços',
        'Desconcentração e descentralização',
        'Órgãos públicos: conceito, classificações',
        'Entidades paraestatais',
        'Controle da Administração: interno, externo, judicial',
        'Controle legislativo: CPI, TCU',
        'Mandado de Segurança (Lei 12.016/09)',
        'Mandado de Segurança Coletivo',
        'Ação Popular (Lei 4.717/65)',
        'Ação Civil Pública (Lei 7.347/85)',
        'Prescrição administrativa: 5 anos (Decreto 20.910/32)'
      ],
      resumo: {
        titulo: 'Direito Administrativo — Resumo Estratégico',
        secoes: [
          {
            h: 'Princípios — LIMPE',
            ul: [
              'L — Legalidade (estrita) + Impessoalidade',
              'M — Moralidade',
              'P — Publicidade',
              'E — Eficiência (EC 19/98)'
            ]
          },
          {
            h: 'Atos Administrativos',
            ul: [
              'Elementos: competência, finalidade, forma, motivo, objeto',
              'Atributos PATI: Presunção de legitimidade, Autoexecutoriedade, Tipicidade, Imperatividade',
              'Anulação: vício, retroage (ex tunc), vinculada',
              'Revogação: conveniência e oportunidade, não retroage (ex nunc), discricionária'
            ]
          },
          {
            h: 'Licitações (Lei 14.133/21)',
            ul: [
              'Modalidades: concorrência, pregão, concurso, leilão, diálogo competitivo',
              'Pregão: bens e serviços comuns; eletrônico é regra',
              'Dispensa: até R$ 50.000 (obras) / R$ 50.000 (outros)',
              'Inexigibilidade: notória especialização ou singularidade do serviço',
              'Fases: preparatória, divulgação, apresentação, julgamento, habilitação, recursal, homologação'
            ]
          },
          {
            h: 'Responsabilidade Civil do Estado',
            ul: [
              'Regra: OBJETIVA (não precisa provar culpa do agente)',
              'Risco administrativo: admite excludentes (culpa exclusiva, caso fortuito, força maior)',
              'Direito de regresso: ação contra o agente (subjetiva + dolo/culpa)'
            ]
          },
          {
            h: 'Controle e Remédios Constitucionais',
            ul: [
              'MS individual: 120 dias corridos (decadência)',
              'MS coletivo: legitimados (partidos, sindicato, etc.)',
              'Ação Popular: cidadão no gozo dos direitos políticos, anular ato lesivo',
              'Ação Civil Pública: MP, DP, Município, associações'
            ]
          }
        ]
      },
      materia: {
        introducao: '<p>O <strong>Direito Administrativo</strong> regula a Administra&ccedil;&atilde;o P&uacute;blica e suas rela&ccedil;&otilde;es com administrados. No concurso do INSS, comp&otilde;e cerca de <strong>10-12% da prova</strong>. A CEBRASPE cobra com frequ&ecirc;ncia: princ&iacute;pios, atos administrativos, licita&ccedil;&otilde;es (Lei 14.133/21), responsabilidade civil do Estado e improbidade.</p>',
        capitulos: [
          {
            h: '1. Princ&iacute;pios Constitucionais da Administra&ccedil;&atilde;o P&uacute;blica (Art. 37, CF/88)',
            p: '<p>Conhecidos como <strong>LIMPE</strong>:</p>',
            ul: [
              '<strong>Legalidade:</strong> a Administra&ccedil;&atilde;o s&oacute; pode fazer o que a lei permite (ao contr&aacute;rio do particular, que pode tudo que a lei n&atilde;o probe).',
              '<strong>Impessoalidade:</strong> tratamento igual a todos; atos devem ser atribu&iacute;dos ao &oacute;rg&atilde;o, n&atilde;o &agrave; pessoa.',
              '<strong>Moralidade:</strong> honestidade, lealdade, boa-f&eacute;. Viola&ccedil;&atilde;o &eacute; improbidade.',
              '<strong>Publicidade:</strong> transpar&ecirc;ncia (com exce&ccedil;&otilde;es legais).',
              '<strong>Efici&ecirc;ncia</strong> (EC 19/98): resultados com economicidade.',
              'Outros princ&iacute;pios: autotutela, razoabilidade, proporcionalidade, motiva&ccedil;&atilde;o, seguran&ccedil;a jur&iacute;dica, autotutela (S&uacute;mula 473 STF).'
            ]
          },
          {
            h: '2. Poderes Administrativos',
            p: '<p>Instrumentos que a Administra&ccedil;&atilde;o det&eacute;m para o exerc&iacute;cio de suas fun&ccedil;&otilde;es:</p>',
            ul: [
              '<strong>Poder hier&aacute;rquico:</strong> rela&ccedil;&atilde;o de subordina&ccedil;&atilde;o dentro da Administra&ccedil;&atilde;o (ordens, fiscaliza&ccedil;&atilde;o, delega&ccedil;&atilde;o, avocação).',
              '<strong>Poder disciplinar:</strong> puni&ccedil;&atilde;o interna de servidores e pessoas com v&iacute;nculo especial (licenciados, delegados, etc.).',
              '<strong>Poder regulamentar (ou normativo):</strong> edi&ccedil;&atilde;o de atos normativos para fiel execu&ccedil;&atilde;o da lei. N&atilde;o pode inovar (criar obriga&ccedil;&otilde;es).',
              '<strong>Poder de pol&iacute;cia:</strong> limita&ccedil;&atilde;o de direitos individuais em favor do interesse p&uacute;blico. Atributos: discricionariedade, autoexecutoriedade, coercibilidade.'
            ]
          },
          {
            h: '3. Atos Administrativos',
            p: '<p>Declara&ccedil;&atilde;o unilateral de vontade da Administra&ccedil;&atilde;o que produz efeitos jur&iacute;dicos. <strong>Elementos (art. 2&ordm;, Lei 4.717/65):</strong></p>',
            ul: [
              '<strong>Compet&ecirc;ncia:</strong> &aacute;gora, fun&ccedil;&atilde;o, mat&eacute;ria. V&iacute;cio: ato nulo.',
              '<strong>Finalidade:</strong> interesse p&uacute;blico.',
              '<strong>Forma:</strong> a exigida em lei.',
              '<strong>Motivo:</strong> fato + fundamento jur&iacute;dico.',
              '<strong>Objeto:</strong> conte&uacute;do do ato.'
            ],
            p2: '<p><strong>Atributos (PATI):</strong></p>',
            ul2: [
              '<strong>Presun&ccedil;&atilde;o de legitimidade:</strong> ato presume-se v&aacute;lido at&eacute; prova em contr&aacute;rio.',
              '<strong>Autoexecutoriedade:</strong> a Administra&ccedil;&atilde;o executa sem precisar de autoriza&ccedil;&atilde;o judicial.',
              '<strong>Tipicidade:</strong> cada ato corresponde a um tipo legal.',
              '<strong>Imperatividade:</strong> obriga&aacute; independentemente da concord&acirc;ncia do particular.'
            ],
            p3: '<p><strong>Classifica&ccedil;&atilde;o:</strong> vinculados x discricion&aacute;rios; simples x complexos; unilaterais x bilaterais; gerais x individuais; definitivos x provis&oacute;rios.</p>',
            ul3: [
              '<strong>Esp&eacute;cies:</strong> licen&ccedil;a, autoriza&ccedil;&atilde;o, permiss&atilde;o, admiss&atilde;o, homologa&ccedil;&atilde;o.',
              '<strong>Extin&ccedil;&atilde;o:</strong> anula&ccedil;&atilde;o (v&iacute;cio, ex tunc, vinculada), revoga&ccedil;&atilde;o (conveni&ecirc;ncia, ex nunc, discricion&aacute;ria), cassa&ccedil;&atilde;o, caducidade, contraposi&ccedil;&atilde;o.',
              '<strong>Convalida&ccedil;&atilde;o:</strong> saneamento de v&iacute;cio san&aacute;vel (n&atilde;o v&aacute;lido para atos vinculados a compet&ecirc;ncia exclusiva).'
            ]
          },
          {
            h: '4. Licita&ccedil;&otilde;es (Lei 14.133/21)',
            p: '<p>Procedimento obrigat&oacute;rio para contrata&ccedil;&atilde;o de obras, servi&ccedil;os, compras e aliena&ccedil;&otilde;es pela Administra&ccedil;&atilde;o. <strong>Princ&iacute;pios (art. 5&ordm;):</strong></p>',
            ul: [
              'Legalidade, impessoalidade, moralidade, publicidade, efici&ecirc;ncia.',
              'Interesse p&uacute;blico, probidade administrativa, igualdade.',
              'Planejamento, transpar&ecirc;ncia, efic&aacute;cia, segrega&ccedil;&atilde;o de fun&ccedil;&otilde;es, motiva&ccedil;&atilde;o, vincula&ccedil;&atilde;o ao edital, julgamento objetivo, seguran&ccedil;a jur&iacute;dica, razoabilidade, competitividade, proporcionalidade, celeridade, economicidade, desenvolvimento nacional sustent&aacute;vel.'
            ],
            p2: '<p><strong>Modalidades (art. 28):</strong> concorr&ecirc;ncia, preg&atilde;o, concurso, leilh&atilde;o, di&aacute;logo competitivo. <strong>Tipos (art. 33):</strong> menor pre&ccedil;o, melhor t&eacute;cnica, t&eacute;cnica e pre&ccedil;o, maior retorno econ&ocirc;mico, maior desconto.</p>',
            ul2: [
              '<strong>Dispensa (art. 75):</strong> rol taxativo, valores at&eacute; R$ 50.000 (obras) e R$ 50.000 (outros).',
              '<strong>Inexigibilidade (art. 74):</strong> inviabilidade de competi&ccedil;&atilde;o. Not&oacute;ria especializa&ccedil;&atilde;o ou singularidade do servi&ccedil;o.',
              '<strong>Fases (art. 17):</strong> preparat&oacute;ria, de divulga&ccedil;&atilde;o, de apresenta&ccedil;&atilde;o, de julgamento, de habilita&ccedil;&atilde;o, recursal, de homologa&ccedil;&atilde;o.'
            ]
          },
          {
            h: '5. Contratos Administrativos',
            p: '<p>Regidos pela Lei 14.133/21. Caracter&iacute;sticas:</p>',
            ul: [
              '<strong>Cl&aacute;usulas exorbitantes:</strong> prerrogativas da Administra&ccedil;&atilde;o (alterar, rescindir, fiscalizar, aplicar san&ccedil;&otilde;es).',
              '<strong>Equil&iacute;brio econ&ocirc;mico-financeiro:</strong> garantia do contratado.',
              '<strong>Altera&ccedil;&atilde;o unilateral</strong> (quantitativa at&eacute; 25% ou 50%, conforme o caso).',
              '<strong>Rescis&atilde;o:</strong> unilateral (interesse p&uacute;blico), por acordo, judicial.',
              '<strong>Garantias:</strong> cau&ccedil;&atilde;o, seguro-garantia, fian&ccedil;a banc&aacute;ria.',
              '<strong>San&ccedil;&otilde;es administrativas:</strong> advert&ecirc;ncia, multa, impedimento de licitar, declara&ccedil;&atilde;o de inidoneidade.'
            ]
          },
          {
            h: '6. Responsabilidade Civil do Estado',
            p: '<p>Art. 37, &sect;6&ordm;, CF/88: <strong>responsabilidade objetiva</strong>, baseada na teoria do <strong>risco administrativo</strong>. Admite excludentes (culpa exclusiva da v&iacute;tima, caso fortuito, for&ccedil;a maior). A&ccedil;&atilde;o de regresso: contra o agente (subjetiva, dolo/culpa).</p>',
            ul: [
              'Omiss&atilde;o: corrente majorit&aacute;ria (STJ) admite responsabilidade, mas exige culpa.',
              'A&ccedil;&atilde;o de regresso: prescreve em 5 anos (Decreto 20.910/32, S&uacute;mula 666 STF).',
              'A&ccedil;&atilde;o contra o Estado: prescreve em 5 anos contra particulares; imprescrit&iacute;vel para a Fazenda em ju&iacute;zo.',
              'For&ccedil;as Armadas: responsabilidade objetiva + teoria do risco integral (danos nucleares).'
            ]
          },
          {
            h: '7. Controle da Administra&ccedil;&atilde;o',
            p: '<p><strong>Controle interno</strong> (hierarquia, corregedorias, ouvidorias, CGU) e <strong>controle externo</strong> (Parlamento, TCU, MP, sociedade).</p>',
            ul: [
              'CPI: poderes de investiga&ccedil;&atilde;o pr&oacute;prios das autoridades judiciais (art. 58, &sect;3&ordm;, CF).',
              'TCU: fiscaliza&ccedil;&atilde;o cont&aacute;bil, financeira, or&ccedil;ament&aacute;ria, operacional e patrimonial da Uni&atilde;o.',
              'MP: pode promover inq&uacute;erito civil e ACP para defesa do patrim&acirc;nio p&uacute;blico.',
              'Sociedade: a&ccedil;&atilde;o popular (cidad&atilde;o), peti&ccedil;&atilde;o, reclama&ccedil;&atilde;o.',
              'Controle judicial: MF, MS, AP, ACP, HD.'
            ]
          },
          {
            h: '8. Servidores P&uacute;blicos e Bens P&uacute;blicos',
            p: '<p><strong>Agentes p&uacute;blicos</strong>: lato sensu (todos que prestam servi&ccedil;o ao Estado) e stricto sensu (servidores estatut&aacute;rios). <strong>Bens p&uacute;blicos</strong> (art. 98, CC):</p>',
            ul: [
              'Uso especial: edif&iacute;cios, terrenos (aplica&ccedil;&atilde;o especial).',
              'Uso comum: ruas, pra&ccedil;as (uso geral).',
              'Dominicais: integram o patrim&ocirc;nio como propriedade.',
              'Afeta&ccedil;&atilde;o: v&iacute;nculo do bem a uma finalidade p&uacute;blica.',
              'Desafeta&ccedil;&atilde;o: perda da finalidade p&uacute;blica.'
            ]
          }
        ]
      }
    },
    {
      id: 'constitucional',
      nome: 'Direito Constitucional',
      icon: '\u{2696}',
      cor: '#7c3aed',
      grupo: 'conhecimentos-especificos',
      topicos: [
        'Constituição: conceito, classificações, poder constituinte',
        'Princípios Fundamentais (arts. 1º a 4º)',
        'Direitos e garantias fundamentais (art. 5º)',
        'Direitos individuais e coletivos',
        'Remédios constitucionais: HC, HD, MS, MI, AP, ACP',
        'Direitos sociais (arts. 6º a 11)',
        'Nacionalidade (arts. 12 e 13)',
        'Cidadania e direitos políticos',
        'Sufrágio: voto obrigatório, facultativo',
        'Organização político-administrativa',
        'União, Estados, DF, Municípios',
        'Intervenção federal e estadual',
        'Administração Pública (arts. 37 a 41)',
        'Princípios constitucionais da Administração',
        'Acumulação de cargos: regra e exceções',
        'Estabilidade do servidor público',
        'Poder Legislativo: estrutura, funções',
        'Imunidades parlamentares',
        'Processo legislativo: ordinário, sumário, especial',
        'Poder Executivo: Chefe de Estado e Governo',
        'Poder Judiciário: estrutura, garantias',
        'Supremo Tribunal Federal: composição, competências',
        'Conselho Nacional de Justiça (CNJ)',
        'Funções essenciais à justiça: MP, DP, Advocacia',
        'Ministério Público: garantias, vedações',
        'Defensor Público: finalidade',
        'Organização do Estado: tributação, orçamento, finanças',
        'Ordem Social: Seguridade Social',
        'Previdência Social (arts. 201 e 202)',
        'Assistência Social (art. 203)',
        'Saúde (art. 196-200)',
        'Reforma da Previdência (EC 103/2019)',
        'Controle de constitucionalidade',
        'Ações: ADI, ADC, ADPF',
        'Efeito erga omnes e vinculante',
        'Súmula vinculante',
        'Precatórios (art. 100)',
        'Mandado de Injunção'
      ],
      resumo: {
        titulo: 'Direito Constitucional — Resumo Estratégico',
        secoes: [
          {
            h: 'Art. 5º — Direitos Individuais (Mais Cobrados)',
            ul: [
              'Igualdade, legalidade, liberdade',
              'Inviolabilidade: casa, correspondência, sigilo bancário/fiscal/telefônico (com reserva de jurisdição)',
              'HC para quem sofrer violência ou coação em liberdade de locomoção',
              'HD quando faltar norma regulamentadora',
              'MS contra ato de autoridade (120 dias)',
              'Propriedade privada com função social',
              'Direito de petição, certidões, informação (resposta em 30 dias)'
            ]
          },
          {
            h: 'Direitos Sociais (Art. 6º)',
            ul: [
              'Educação, saúde, alimentação, trabalho, moradia, transporte',
              'Previdência social, proteção à maternidade/infância, assistência aos desamparados'
            ]
          },
          {
            h: 'Seguridade Social (Art. 194)',
            ul: [
              'Tríade: PREVIDÊNCIA + SAÚDE + ASSISTÊNCIA',
              'Financiamento: orçamento, Segurados, empregadores',
              'Equidade na forma de participação no custeio',
              'Caráter contributivo da previdência; seletividade na distribuição dos benefícios'
            ]
          },
          {
            h: 'Nacionalidade (Arts. 12-13)',
            ul: [
              'Brasileiros natos: nascidos no Brasil (mesmo de estrangeiros), nascidos no estrangeiro de pai/mãe brasileiro a serviço do Brasil, nascidos no estrangeiro de pai/mãe brasileiro (se registrados) ou opção',
              'Privativos de brasileiro nato: cargos de Presidente, VP, Presidente da Câmara/Senado, STF, TCU, Membro do CN, Diplomata, Ministro de Estado, Comandantes das Forças'
            ]
          },
          {
            h: 'Remédios Constitucionais',
            ul: [
              'HC: liberdade de locomoção (qualquer pessoa, gratuito)',
              'HD: norma regulamentadora faltante',
              'MS: direito líquido e certo não amparado por HC/HD',
              'MI: exercício de direitos/atividades sem norma regulamentadora',
              'AP: cidadão, ato lesivo ao patrimônio público',
              'ACP: MP, DP, associações — interesses difusos/coletivos'
            ]
          },
          {
            h: 'Reforma da Previdência (EC 103/2019)',
            ul: [
              'Idade mínima: 65 (homem) e 62 (mulher), com 25 anos de contribuição',
              'Regra de transição: pontos (homem 96+; mulher 86+) ou pedágio',
              'Servidor público: regras próprias; limite de idade para inatividade',
              'Pensão por morte: 50% + 10% por dependente (até 100%)'
            ]
          }
        ]
      },
      materia: {
        introducao: '<p>O <strong>Direito Constitucional</strong> &eacute; mat&eacute;ria transversal em qualquer concurso federal, e no INSS n&atilde;o &eacute; diferente. Comp&otilde;e cerca de <strong>10% da prova</strong>. A CEBRASPE cobra com frequ&ecirc;ncia os direitos e garantias fundamentais (art. 5&ordm;), a Seguridade Social (art. 194), a Reforma da Previd&ecirc;ncia (EC 103/2019), e a organiza&ccedil;&atilde;o do Estado.</p>',
        capitulos: [
          {
            h: '1. Princ&iacute;pios Fundamentais (Arts. 1&ordm; a 4&ordm;)',
            p: '<p>A Rep&uacute;blica Federativa do Brasil, formada pela uni&atilde;o indissol&iacute;vel dos Estados, Munic&iacute;pios e DF, constitui-se em Estado Democr&aacute;tico de Direito e tem como fundamentos:</p>',
            ul: [
              '<strong>I</strong> &mdash; Soberania.',
              '<strong>II</strong> &mdash; Cidadania.',
              '<strong>III</strong> &mdash; Dignidade da pessoa humana.',
              '<strong>IV</strong> &mdash; Valores sociais do trabalho e da livre iniciativa.',
              '<strong>V</strong> &mdash; Pluralismo pol&iacute;tico.',
              'Objetivos fundamentais (art. 3&ordm;): construir sociedade livre, justa e solid&aacute;ria; garantir desenvolvimento nacional; erradicar pobreza/marginaliza&ccedil;&atilde;o; promover o bem de todos sem preconceitos.'
            ]
          },
          {
            h: '2. Direitos e Garantias Fundamentais (Art. 5&ordm;)',
            p: '<p>Os <strong>78 incisos</strong> do art. 5&ordm; cont&ecirc;m o cat&aacute;logo mais importante de direitos individuais. Principais:</p>',
            ul: [
              '<strong>XI</strong> &mdash; Inviolabilidade da casa: ingresso sem consentimento apenas em caso de flagrante, desastre, socorro, ou durante o dia, por ordem judicial.',
              '<strong>XII</strong> &mdash; Inviolabilidade do sigilo da correspond&ecirc;ncia e das comunica&ccedil;&otilde;es (com exce&ccedil;&atilde;o de ordem judicial para fins penais).',
              '<strong>XIII</strong> &mdash; Livre exerc&iacute;cio de trabalho, of&iacute;cio ou profiss&atilde;o, atendidas as qualifica&ccedil;&otilde;es legais.',
              '<strong>XXXIII</strong> &mdash; Direito &agrave; informa&ccedil;&atilde;o (Lei 12.527/11 — LAI).',
              '<strong>LXVII</strong> &mdash; Mandado de Seguran&ccedil;a (Lei 12.016/09).',
              '<strong>LXVIII</strong> &mdash; Habeas corpus.',
              '<strong>LXIX</strong> &mdash; Mandado de Injun&ccedil;&atilde;o.',
              '<strong>LXX</strong> &mdash; Habeas data.',
              '<strong>LXXI</strong> &mdash; Mandado de Seguran&ccedil;a Coletivo.',
              '<strong>LXXIII</strong> &mdash; A&ccedil;&atilde;o Popular.',
              '<strong>LXXVII</strong> &mdash; Gratuidade das a&ccedil;&otilde;es de HC, HD e MS.'
            ]
          },
          {
            h: '3. Seguran&ccedil;a Social e Previd&ecirc;ncia (Arts. 194 a 202)',
            p: '<p>Art. 194 define seguridade social como conjunto integrado de a&ccedil;&otilde;es relativas &agrave; <strong>sa&uacute;de, previd&ecirc;ncia e assist&ecirc;ncia social</strong>. Os princ&iacute;pios:</p>',
            ul: [
              '<strong>Universalidade da cobertura e do atendimento:</strong> todos t&ecirc;m direito.',
              '<strong>Uniformidade e equival&ecirc;ncia dos benef&iacute;cios:</strong> igual valor para mesmas condi&ccedil;&otilde;es.',
              '<strong>Seletividade e distributividade na presta&ccedil;&atilde;o.</strong>',
              '<strong>Irredutibilidade do valor dos benef&iacute;cios.</strong>',
              '<strong>Equidade na forma de participa&ccedil;&atilde;o no custeio.</strong>',
              '<strong>Diversidade da base de financiamento.</strong>',
              '<strong>Caráter democr&aacute;tico e descentralizado da gest&atilde;o.</strong>',
              'Financiamento (art. 195): contribui&ccedil;&otilde;es dos empregadores, dos trabalhadores e sobre a receita de concursos de progn&oacute;sticos.',
              'Art. 201: regimes de previd&ecirc;ncia (geral, pr&oacute;prio e complementar).',
              'Art. 202: previd&ecirc;ncia privada, facultativa, organizada sob regime de capitaliza&ccedil;&atilde;o.'
            ]
          },
          {
            h: '4. Organiza&ccedil;&atilde;o do Estado',
            p: '<p>Forma de governo: <strong>Rep&uacute;blica</strong> (chefia de Estado eletiva e tempor&aacute;ria); sistema de governo: <strong>presidencialismo</strong>; forma de Estado: <strong>federativa</strong>. A Uni&atilde;o, Estados, DF e Munic&iacute;pios s&atilde;o entes federativos aut&ocirc;nomos.</p>',
            ul: [
              '<strong>Interven&ccedil;&atilde;o federal:</strong> arts. 34 e 35. Casos: manter integridade, repelir invas&atilde;o, garantir funcionamento dos Poderes, etc.',
              '<strong>Interven&ccedil;&atilde;o estadual:</strong> art. 36. Em munic&iacute;pios, nas hip&oacute;teses do art. 35, por omiss&atilde;o de tributos, por desobedi&ecirc;ncia a ordem judicial, etc.',
              '<strong>Vedações aos entes federativos:</strong> art. 19, III (criar distin&ccedil;&otilde;es entre brasileiros).',
              '<strong>Administra&ccedil;&atilde;o P&uacute;blica (arts. 37-41):</strong> princ&iacute;pios do art. 37, caput. Acumula&ccedil;&atilde;o de cargos, estabilidade, teto remunerat&oacute;rio.'
            ]
          },
          {
            h: '5. Poderes do Estado',
            p: '<p><strong>Legislativo</strong> (arts. 44-75): bicameral (C&acirc;mara dos Deputados + Senado Federal), com fun&ccedil;&otilde;es t&iacute;picas (legislar, fiscalizar) e at&iacute;picas (administrativas, judiciais). <strong>Executivo</strong> (arts. 76-91): Presidente, Vice, Ministros e aux&iacute;lios. <strong>Judici&aacute;rio</strong> (arts. 92-126): STF, STJ, TRFs, TJs, etc. Garantias da magistratura: <strong>vitaliciedade, inamovibilidade e irredutibilidade de subs&iacute;dio</strong>.</p>',
            ul: [
              'MPs (art. 62): requisitos relevantes, veda&ccedil;&otilde;es, prazo de 120 dias.',
              'CPI (art. 58, &sect;3&ordm;): poderes de investiga&ccedil;&atilde;o pr&oacute;prios das autoridades judiciais.',
              'STF: composi&ccedil;&atilde;o 11 ministros (art. 101, caput).',
              'STJ: 33 ministros (art. 104, caput).'
            ]
          },
          {
            h: '6. Fun&ccedil;&otilde;es Essenciais &agrave; Justi&ccedil;a (Arts. 127-135)',
            p: '<p><strong>Minist&eacute;rio P&uacute;blico</strong> (arts. 127-130): fun&ccedil;&otilde;es institucionais (promover a&ccedil;&atilde;o penal p&uacute;blica, defesa da ordem jur&iacute;dica, do regime democr&aacute;tico e dos interesses sociais e individuais indispon&iacute;veis). Garantias: <strong>vitaliciedade, inamovibilidade e irredutibilidade de subs&iacute;dio</strong>. <strong>Defensoria P&uacute;blica</strong> (arts. 134-135): orienta&ccedil;&atilde;o jur&iacute;dica, promo&ccedil;&atilde;o dos direitos humanos e defesa dos necessitados.</p>',
            ul: [
              'MP: institucionalmente aut&ocirc;nomo, com ingresso por concurso de provas e t&iacute;tulos.',
              'Vedações ao MP: receber honor&aacute;rios, exercer advocacia, participar de sociedade comercial.',
              'DP: institui&ccedil;&atilde;o permanente, essencial &agrave; fun&ccedil;&atilde;o jurisdicional do Estado.',
              'Advocacia: livre (art. 133), com CF/OAB.'
            ]
          },
          {
            h: '7. Controle de Constitucionalidade',
            p: '<p><strong>Sistema misto</strong> no Brasil: controle <strong>incidental</strong> (difuso) por qualquer juiz/&oacute;rg&atilde;o e controle <strong>principal</strong> (concentrado) pelo STF.</p>',
            ul: [
              '<strong>ADI (A&ccedil;&atilde;o Direta de Inconstitucionalidade):</strong> leis e atos normativos federais/estaduais.',
              '<strong>ADC (A&ccedil;&atilde;o Declarat&oacute;ria de Constitucionalidade):</strong> declara constitucionalidade de lei.',
              '<strong>ADPF (Arg&ucirc;i&ccedil;&atilde;o de Descumprimento de Preceito Fundamental):</strong> preceitos fundamentais.',
              '<strong>S&uacute;mula vinculante (art. 103-A):</strong> efeito vinculante e erga omnes.',
              'Efeitos: <strong>erga omnes</strong>, <strong>ex tunc</strong> (regra), <strong>retroativo</strong>.',
              'Modula&ccedil;&atilde;o de efeitos (art. 27 da Lei 9.868/99): o STF pode restringir efeitos ou fixar momento diverso.'
            ]
          }
        ]
      }
    },
    {
      id: 'previdenciario',
      nome: 'Direito Previdenciário',
      icon: '\u{1F4B0}',
      cor: '#d97706',
      grupo: 'conhecimentos-especificos',
      topicos: [
        'Seguridade Social: conceito, princípios, organização',
        'RGPS: regime geral, custeio e benefícios',
        'RPPS: regime próprio (servidores públicos)',
        'Princípios da Seguridade Social',
        'Segurados obrigatórios: empregado, doméstico',
        'Segurados obrigatórios: contribuinte individual, avulso',
        'Segurado especial (trabalhador rural)',
        'Segurado facultativo',
        'Qualidade de segurado: mantida e perdida',
        'Período de graça: prorrogação',
        'Dependentes: classes (Lei 8.213/91, art. 16)',
        'Inscrição e filiação: diferenças',
        'Carência: conceito, regras',
        'Salário-de-benefício: regras atuais (EC 103/2019)',
        'Aposentadoria por idade: requisitos',
        'Aposentadoria por idade do professor',
        'Aposentadoria por tempo de contribuição (regra geral)',
        'Aposentadoria especial: insalubridade/periculosidade',
        'Aposentadoria da pessoa com deficiência (Lei Complementar 142/13)',
        'Aposentadoria rural',
        'Regras de transição (EC 103/2019)',
        'Regra de pontos',
        'Pedágio de 50% e 100%',
        'Idade mínima progressiva',
        'Pensão por morte: requisitos, duração, valor',
        'Auxílio por incapacidade temporária (antigo aux-doença)',
        'Auxílio-acidente: requisitos, valor',
        'Salário-maternidade: categorias',
        'Salário-família: requisitos, valor',
        'Auxílio-reclusão: requisitos',
        'Habilitação e reabilitação profissional',
        'Justificação administrativa',
        'Decadência e prescrição no previdenciário',
        'Benefícios do RPPS',
        'Cálculo do valor dos benefícios',
        'Reajuste dos benefícios (INPC)',
        'Teto do RGPS',
        'Cumulação de benefícios: regra e exceções',
        'INSS: autarquia, finalidade',
        'Compete à Justiça Federal processar ações previdenciárias',
        'Benefício de Prestação Continuada (BPC/LOAS)',
        'Lei 14.331/2022: novas regras',
        'Lei 14.973/2024: alterações',
        'Decreto 3.048/99 (Regulamento da Previdência)'
      ],
      resumo: {
        titulo: 'Direito Previdenciário — Resumo Estratégico',
        secoes: [
          {
            h: 'Segurados — Quem é Quem',
            ul: [
              'Empregado, doméstico, trabalhador avulso',
              'Contribuinte individual: autônomos, diretores, síndicos, microempreendedor individual',
              'Especial: trabalhador rural (pescador, lavrador, etc.)',
              'Facultativo: dona-de-casa, estudante, desempregado, presidiário (sem vínculo)'
            ]
          },
          {
            h: 'Carência',
            ul: [
              'Regra geral: 12 contribuições mensais',
              'Exceções: acidente do trabalho (sem carência), salário-maternidade (10 meses para empregado; 0 para outras categorias)',
              'Aposentadoria por idade e especial: 180 contribuições (15 anos)',
              'Pensão por morte: 0 carência (qualidade de segurado)'
            ]
          },
          {
            h: 'Aposentadoria por Idade (EC 103/19)',
            ul: [
              'Homem: 65 anos + 20 anos de contribuição',
              'Mulher: 62 anos + 15 anos de contribuição',
              'Trabalhador rural: 60 (H) e 55 (M), com carência reduzida',
              'Professor: 5 anos a menos em idade'
            ]
          },
          {
            h: 'Aposentadoria Especial',
            ul: [
              '25 anos de atividade especial (insalubre/perigoso) — sem idade',
              'A partir de 2024, pode haver idade mínima (60/55) se não cumprir pontos',
              'Lista de atividades: Anexo do Decreto 3.048/99'
            ]
          },
          {
            h: 'Pensão por Morte (EC 103/19)',
            ul: [
              'Cota familiar: 50% + 10% por dependente, limitado a 100%',
              'Cota mínima de 60% (5 dependentes ou mais)',
              'Duração: vitalícia (cônjuge com mais de 44/41 anos) ou temporária (mais jovens)',
              'Vitalício: pensionista inválido ou com deficiência'
            ]
          },
          {
            h: 'Salário-de-Benefício (EC 103/19)',
            ul: [
              'Aposentadoria por idade: média de 100% dos salários desde 07/1994',
              'Pensão por morte: 50% + 10% (calculado sobre aposentadoria)',
              'Auxílio-doença: 91% da média'
            ]
          },
          {
            h: 'Regras de Transição (EC 103/19)',
            ul: [
              'Regra de pontos: 86 (mulher) e 96 (homem), com 30/35 anos',
              'Pontos aumentam progressivamente',
              'Pedágio 50%: quem faltava ≤ 2 anos',
              'Pedágio 100%: quem faltava > 2 anos (idade mínima de 60/57)'
            ]
          }
        ]
      },
      materia: {
        introducao: '<p>O <strong>Direito Previdenci&aacute;rio</strong> &eacute; a mat&eacute;ria de <strong>maior peso</strong> no concurso do INSS, representando cerca de <strong>50-60% da prova objetiva</strong> quando somada com a <strong>Legisla&ccedil;&atilde;o Previdenci&aacute;ria</strong>. Conhe&ccedil;as leis 8.212/91, 8.213/91, 8.742/93 (LOAS), 10.259/01 (JEF) e a EC 103/2019 (Reforma da Previd&ecirc;ncia) &eacute; fundamental.</p>',
        capitulos: [
          {
            h: '1. Seguridade Social (CF/88, Arts. 194-200)',
            p: '<p>Conjunto integrado de a&ccedil;&otilde;es relativas &agrave; <strong>sa&uacute;de, previd&ecirc;ncia e assist&ecirc;ncia social</strong>. Princ&iacute;pios constitucionais (art. 194, par&aacute;grafo &uacute;nico):</p>',
            ul: [
              '<strong>I &mdash; Universalidade da cobertura e do atendimento.</strong>',
              '<strong>II &mdash; Uniformidade e equival&ecirc;ncia dos benef&iacute;cios e servi&ccedil;os &agrave;s popula&ccedil;&otilde;es urbanas e rurais.</strong>',
              '<strong>III &mdash; Seletividade e distributividade na presta&ccedil;&atilde;o dos benef&iacute;cios e servi&ccedil;os.</strong>',
              '<strong>IV &mdash; Irredutibilidade do valor dos benef&iacute;cios.</strong>',
              '<strong>V &mdash; Equidade na forma de participa&ccedil;&atilde;o no custeio.</strong>',
              '<strong>VI &mdash; Diversidade da base de financiamento.</strong>',
              '<strong>VII &mdash; Car&aacute;ter democr&aacute;tico e descentralizado da gest&atilde;o administrativa.</strong>'
            ],
            p2: '<p><strong>Financiamento (art. 195):</strong> contribui&ccedil;&otilde;es dos empregadores, dos trabalhadores e sobre a receita de concursos de progn&oacute;sticos. N&atilde;o h&aacute; contribui&ccedil;&atilde;o sobre aposentadoria/pens&atilde;o de servidor com doen&ccedil;a incapacitante (art. 40, &sect;21, CF).</p>'
          },
          {
            h: '2. Segurados do RGPS (Lei 8.213/91, Arts. 11-14)',
            p: '<p><strong>Segurados obrigat&oacute;rios (art. 12):</strong></p>',
            ul: [
              '<strong>Empregado:</strong> urbano ou rural, pessoa f&iacute;sica que presta servi&ccedil;o de natureza n&atilde;o eventual a empregador, sob depend&ecirc;ncia deste e mediante sal&aacute;rio.',
              '<strong>Empregado dom&eacute;stico:</strong> pessoal que presta servi&ccedil;o de natureza cont&iacute;nua e de finalidade n&atilde;o lucrativa &agrave; pessoa ou fam&iacute;lia, sem fins econ&ocirc;micos.',
              '<strong>Trabalhador avulso:</strong> prestado de forma descont&iacute;nua, sem v&iacute;nculo empregat&iacute;cio, a v&aacute;rios tomadores (estivadores, carregadores).',
              '<strong>Contribuinte individual:</strong> prestador de servi&ccedil;o sem v&iacute;nculo; aut&ocirc;nomo; s&iacute;ndico; diretor; MEI; etc.',
              '<strong>Segurado especial:</strong> trabalhador rural, pescador artesanal, garimpeiro, extrativista vegetal, etc., em regime de economia familiar.'
            ],
            p2: '<p><strong>Segurado facultativo (art. 13):</strong> maior de 16 anos que n&atilde;o exerce atividade remunerada (dona-de-casa, estudante, presidi&aacute;rio, desempregado).</p>',
            ul2: [
              'Sind&ocirc;me, c&ocirc;njuge/companheiro de microempreendedor individual (MEI): facultativos.',
              'Presidi&oacute;rio n&atilde;o exerce atividade remunerada: facultativo.',
              'Dirigente sindical: segurado obrigat&oacute;rio (Mandado de Seguran&ccedil;a Coletivo do STF).'
            ]
          },
          {
            h: '3. Qualidade de Segurado e Per&iacute;odo de Gra&ccedil;a',
            p: '<p><strong>Qualidade de segurado</strong> &eacute; a condi&ccedil;&atilde;o de filiado ao RGPS, mantida enquanto o segurado contribui. <strong>Per&iacute;odo de gra&ccedil;a</strong> &eacute; a manuten&ccedil;&atilde;o da qualidade de segurado mesmo sem contribui&ccedil;&atilde;o.</p>',
            ul: [
              '<strong>Regra geral:</strong> 12 meses ap&oacute;s o &uacute;ltimo dia em que contribuiu (Lei 8.213/91, art. 15, I).',
              '<strong>Prorroga&ccedil;&atilde;o:</strong> segurado que contribuiu por 120 meses (homem) ou 60 meses (mulher) tem o per&iacute;odo de gra&ccedil;a estendido em mais 12 meses.',
              '<strong>Trabalhador rural (especial):</strong> mesmo per&iacute;odo de gra&ccedil;a de 12 meses.',
              '<strong>Em caso de segurado desempregado:</strong> per&iacute;odo de gra&ccedil;a normal.',
              'Per&iacute;odo de gra&ccedil;a decadente: para aposentadoria por idade com car&ecirc;ncia, o tempo de gra&ccedil;a n&atilde;o conta como car&ecirc;ncia.'
            ]
          },
          {
            h: '4. Car&ecirc;ncia e Sal&aacute;rio-de-Contribui&ccedil;&atilde;o',
            p: '<p><strong>Car&ecirc;ncia</strong> &eacute; o n&uacute;mero m&iacute;nimo de contribui&ccedil;&otilde;es mensais necess&aacute;rias para obten&ccedil;&atilde;o de benef&iacute;cio (Lei 8.213/91, art. 24 e 25-A). <strong>Regra geral:</strong> 12 contribui&ccedil;&otilde;es mensais.</p>',
            ul: [
              '<strong>Aposentadoria por idade:</strong> 180 contribui&ccedil;&otilde;es (15 anos), reduzidas para 15 anos para quem j&aacute; contribuiu at&eacute; 14/11/2019 (EC 103/19, art. 19).',
              '<strong>Especial:</strong> 180 contribui&ccedil;&otilde;es.',
              '<strong>Incapacidade tempor&aacute;ria (aux&iacute;lio-doen&ccedil;a):</strong> 12 contribui&ccedil;&otilde;es (salvo acidente do trabalho).',
              '<strong>Sal&aacute;rio-maternidade:</strong> 0 para contribuinte individual, especial e facultativo; 10 meses para empregada.',
              '<strong>Aposentadoria por incapacidade permanente (invalidez):</strong> 12 contribui&ccedil;&otilde;es.',
              '<strong>Pens&atilde;o por morte e aux&iacute;lio-acidente:</strong> 0 (basta qualidade de segurado).'
            ]
          },
          {
            h: '5. Benef&iacute;cios em Esp&eacute;cie',
            p: '<p><strong>EC 103/19 alterou a nomenclatura:</strong></p>',
            ul: [
              '<strong>Aposentadoria por incapacidade permanente</strong> (era aposentadoria por invalidez).',
              '<strong>Aux&iacute;lio por incapacidade tempor&aacute;ria</strong> (era aux&iacute;lio-doen&ccedil;a).',
              'A nomenclatura antiga (aux&iacute;lio-doen&ccedil;a) continua muito cobrada.'
            ],
            p2: '<p><strong>Regra de aposentadoria por idade (RGPS, EC 103/19):</strong> 65 anos (H) / 62 anos (M) + 15/20 anos de contribui&ccedil;&atilde;o. Car&ecirc;ncia m&iacute;nima: 180 meses (15 anos). Valor: 60% + 2% por ano que exceder 20 (H) ou 15 (M) anos de contribui&ccedil;&atilde;o.</p>',
            ul2: [
              'Aposentadoria por idade do professor: 5 anos a menos.',
              'Aposentadoria por idade do trabalhador rural: 60 (H) e 55 (M), com car&ecirc;ncia reduzida.',
              'Aposentadoria por idade do segurado especial: 60 (H) e 55 (M), com 15 anos de atividade rural.'
            ]
          },
          {
            h: '6. Aposentadoria Especial (Art. 57, Lei 8.213/91)',
            p: '<p>Para atividades com exposi&ccedil;&atilde;o a agentes nocivos (f&iacute;sicos, qu&iacute;micos, biol&oacute;gicos) ou periculosidade. Regra antiga: <strong>15, 20 ou 25 anos</strong> conforme o agente. A EC 103/19 manteve essencialmente essas regras para quem j&aacute; as implementou at&eacute; 13/11/2019.</p>',
            ul: [
              '<strong>Tempo de atividade especial:</strong> 15 anos (ru&iacute;do), 20 anos (outros agentes), 25 anos (minera&ccedil;&atilde;o subterr&acirc;nea).',
              '<strong>Requisito adicional para quem come&ccedil;ou depois da EC 103/19:</strong> idade m&iacute;nima de 60 (H) / 55 (M), com regra de pontos alternativa.',
              'Lista de atividades: Anexos I, II, III do Decreto 3.048/99.'
            ]
          },
          {
            h: '7. Pens&atilde;o por Morte (EC 103/19)',
            p: '<p>Benef&iacute;cio pago aos dependentes do segurado que faleceu (mantida a qualidade de segurado). <strong>Valor:</strong></p>',
            ul: [
              '<strong>Regra:</strong> 50% + 10% por dependente, at&eacute; o limite de 100% (cota familiar).',
              '<strong>Cota m&iacute;nima:</strong> 60% (5+ dependentes).',
              '<strong>Base de c&aacute;lculo:</strong> aposentadoria que o segurado recebia ou a que teria direito se fosse aposentado por incapacidade permanente na data do &oacute;bito.',
              '<strong>Dura&ccedil;&atilde;o (c&ocirc;njuge/companheiro):</strong> vital&iacute;cio se mais de 44 (H) / 41 (M) anos na data do &oacute;bito; tempor&aacute;rio de 4 a 20 anos se mais jovem; vital&iacute;cio se inv&aacute;lido ou com defici&ecirc;ncia.'
            ]
          },
          {
            h: '8. Regras de Transi&ccedil;&atilde;o (EC 103/19, Art. 4&ordm; a 21)',
            p: '<p>Para quem j&aacute; contribuiu antes da EC 103/2019 (13/11/2019):</p>',
            ul: [
              '<strong>Pontos (art. 17):</strong> Soma idade + tempo de contribui&ccedil;&atilde;o. Em 2019: 86 (M) e 96 (H); sobe 1 ponto/ano at&eacute; 99 (M) e 105 (H).',
              '<strong>Ped&aacute;gio 50% (art. 17, &sect;2&ordm;):</strong> quem faltava at&eacute; 2 anos para o tempo total. Cumpriu ped&aacute;gio de 50% do tempo restante.',
              '<strong>Ped&aacute;gio 100% (art. 20):</strong> regras de idade m&iacute;nima + ped&aacute;gio integral.',
              '<strong>Regra do &quot;direito adquirido&quot; (art. 3&ordm;):</strong> quem preencheu os requisitos antes da EC 103/19 pode se aposentar pela regra antiga.',
              '<strong>Professor:</strong> regras espec&iacute;ficas com pontos reduzidos.'
            ]
          },
          {
            h: '9. BPC/LOAS (Lei 8.742/93, Art. 20)',
            p: '<p><strong>Benef&iacute;cio de Presta&ccedil;&atilde;o Continuada</strong> &mdash; assistencial, n&atilde;o contributivo, no valor de 1 sal&aacute;rio-m&iacute;nimo.</p>',
            ul: [
              '<strong>Idoso:</strong> 65 anos ou mais.',
              '<strong>Pessoa com defici&ecirc;ncia:</strong> qualquer idade.',
              '<strong>Requisito social:</strong> renda per capita do grupo familiar <strong>inferior a 1/4 do sal&aacute;rio-m&iacute;nimo</strong>. STF em 2024 considerou esse crit&eacute;rio t&atilde;o restritivo que ampliou para 1/2 sal&aacute;rio-m&iacute;nimo (Tese de Repercuss&atilde;o Geral 1.236).',
              'N&atilde;o exige contribui&ccedil;&atilde;o pr&eacute;via.',
              'N&atilde;o pode ser acumulado com outro benef&iacute;cio do RGPS ou RPPS.',
              'Revis&atilde;o bienal (atualiza&ccedil;&atilde;o do cadastro).'
            ]
          }
        ]
      }
    },
    {
      id: 'legislacao',
      nome: 'Legislação Previdenciária',
      icon: '\u{1F4C3}',
      cor: '#0d9488',
      grupo: 'conhecimentos-especificos',
      topicos: [
        'Lei 8.212/91: Plano de Custeio da Seguridade',
        'Contribuições: segurados (empregado, doméstico, etc.)',
        'Contribuição do empregador, da empresa, do trabalhador avulso',
        'Alíquotas atuais: empregado (7,5% a 14%), contribuinte individual (20%)',
        'Salário-de-contribuição: conceito, abrangência',
        'Limites mínimo e máximo do salário-de-contribuição',
        'Contribuição sobre a folha de pagamento',
        'Sistema Integrado de Cobrança (SIS)',
        'INSS Digital e eSocial',
        'Lei 8.213/91: Plano de Benefícios',
        'Benefícios em espécie: relação completa',
        'Decreto 3.048/99: Regulamento da Previdência',
        'IN 128/2022 e atualizações do INSS',
        'Lei 13.846/2019: alteração no processo previdenciário',
        'Lei 14.331/2022: alteração nas regras',
        'Lei 14.973/2024: atualizações',
        'Cálculo da renda mensal inicial (RMI)',
        'Reajuste dos benefícios: data-base',
        'Fator previdenciário: extinção, regra transitória',
        'Aposentadoria da pessoa com deficiência (LC 142/13)',
        'BPC/LOAS (Lei 8.742/93)',
        'Defesa administrativa no INSS',
        'Recurso administrativo: prazos, instâncias',
        'Justificação administrativa: conceito, valor probante',
        'Perícia médica no INSS',
        'Habilitação de benefícios: documentos necessários',
        'CNIS (Cadastro Nacional de Informações Sociais)',
        'Processo Judicial Eletrônico (PJe)',
        'Ações previdenciárias: prazos (imprescritíveis X prescreíveis)',
        'Parcelas pretéritas: prazo decadencial de 5 anos',
        'Tutela antecipada em previdenciário',
        'Honorários advocatícios',
        'Custas processuais no JEF',
        'Juizados Especiais Federais (Lei 10.259/01)',
        'Competência: Varas Previdenciárias',
        'Contagem recíproca de tempo de contribuição',
        'Averbação de tempo de serviço',
        'Certidão de Tempo de Contribuição (CTC)',
        'Aposentadoria compulsória (70 anos)',
        'Crime de estelionato previdenciário',
        'Crime de apropriação indébita previdenciária',
        'Sonegação previdenciária (CP art. 337-A)'
      ],
      resumo: {
        titulo: 'Legislação Previdenciária — Resumo Estratégico',
        secoes: [
          {
            h: 'Alíquotas do Empregado (atual)',
            ul: [
              'Até R$ 1.518,00: 7,5%',
              'De R$ 1.518,01 a R$ 2.793,88: 9%',
              'De R$ 2.793,89 a R$ 4.190,83: 12%',
              'De R$ 4.190,84 a R$ 8.157,41: 14%',
              'Teto 2026: aprox. R$ 8.157,41'
            ]
          },
          {
            h: 'Lei 8.213/91 — Estrutura dos Benefícios',
            ul: [
              'Art. 18: relação de benefícios',
              'Art. 25: renda mensal inicial (após EC 103/2019)',
              'Art. 29: cálculo do valor do benefício',
              'Art. 32: aposentadoria por idade',
              'Art. 36: aposentadoria por tempo de contribuição (regra geral)',
              'Art. 42: aposentadoria especial',
              'Art. 74: auxílio por incapacidade temporária',
              'Art. 86: pensão por morte'
            ]
          },
          {
            h: 'Processo Previdenciário',
            ul: [
              'Carta de indeferimento → recurso à JR/CRPS (30 dias)',
              'JEF: causas até 60 salários mínimos',
              'Parcelas pretéritas: 5 anos (decadência)',
              'Imprescritibilidade: direito ao benefício, mas NÃO das parcelas'
            ]
          },
          {
            h: 'BPC/LOAS (Lei 8.742/93)',
            ul: [
              'Idoso ≥ 65 anos OU pessoa com deficiência',
              'Renda per capita < 1/4 do salário mínimo',
              'NÃO contributivo: 1 salário mínimo',
              'Atualização do critério de renda pelo STF (1/2 SM em tese)'
            ]
          }
        ]
      },
      materia: {
        introducao: '<p>A <strong>Legisla&ccedil;&atilde;o Previdenci&aacute;ria</strong> complementa o Direito Previdenci&acirc;rio, focando nas leis esparsas: <strong>Lei 8.212/91</strong> (Custeio), <strong>Lei 8.213/91</strong> (Benef&iacute;cios), <strong>Decreto 3.048/99</strong> (Regulamento), <strong>Lei 8.742/93</strong> (LOAS), <strong>Lei 10.259/01</strong> (JEF), al&eacute;m das novidades <strong>Lei 14.331/22</strong> e <strong>Lei 14.973/24</strong>. Comp&otilde;e cerca de <strong>15-20% da prova</strong> (somada com Dir. Prev.).</p>',
        capitulos: [
          {
            h: '1. Lei 8.212/91 &mdash; Custeio da Seguridade Social',
            p: '<p>Regula a <strong>contribui&ccedil;&atilde;o</strong> para a Seguridade Social. <strong>Al&iacute;quotas do empregado (ap&oacute;s Lei 14.973/24):</strong></p>',
            ul: [
              'At&eacute; R$ 1.518,00: <strong>7,5%</strong>',
              'De R$ 1.518,01 at&eacute; R$ 2.793,88: <strong>9%</strong>',
              'De R$ 2.793,89 at&eacute; R$ 4.190,83: <strong>12%</strong>',
              'De R$ 4.190,84 at&eacute; R$ 8.157,41 (teto): <strong>14%</strong>'
            ],
            p2: '<p><strong>Al&iacute;quotas do empregador e contribuinte individual:</strong></p>',
            ul2: [
              'Empregador: 20% sobre o total da folha de sal&aacute;rios (mais RAT - Riscos Ambientais do Trabalho: 1%, 2% ou 3% conforme o risco).',
              'Contribuinte individual: 20% sobre o sal&aacute;rio-de-contribui&ccedil;&atilde;o.',
              'MEI: 5% do sal&aacute;rio-m&iacute;nimo (renda at&eacute; R$ 81.000/ano).',
              'Dom&eacute;stico: 8% (patr&atilde;o) + 7,5% a 14% (empregado).'
            ]
          },
          {
            h: '2. Sal&aacute;rio-de-Contribui&ccedil;&atilde;o',
            p: '<p>Base de c&aacute;lculo das contribui&ccedil;&otilde;es (art. 28, Lei 8.212/91):</p>',
            ul: [
              '<strong>Empregado:</strong> total da remunera&ccedil;&atilde;o (sal&aacute;rio + gorjetas, comiss&otilde;es, adicionais, etc.).',
              '<strong>Contribuinte individual:</strong> sal&aacute;rio-m&iacute;nimo at&eacute; o teto.',
              '<strong>Facultativo:</strong> valor por ele escolhido, desde que n&atilde;o inferior ao sal&aacute;rio-m&iacute;nimo.',
              'Limites: <strong>m&iacute;nimo (sal&aacute;rio-m&iacute;nimo)</strong> e <strong>m&aacute;ximo (teto do RGPS)</strong>.'
            ]
          },
          {
            h: '3. Lei 8.213/91 &mdash; Benef&iacute;cios (estrutura)',
            p: '<p>Art. 18 enumera os benef&iacute;cios: I &mdash; aposentadoria; II &mdash; aux&iacute;lio-doen&ccedil;a; III &mdash; sal&aacute;rio-fam&iacute;lia; IV &mdash; sal&aacute;rio-maternidade; V &mdash; aux&iacute;lio-acidente; VI &mdash; pens&atilde;o por morte; VII &mdash; aux&iacute;lio-reclus&atilde;o; VIII &mdash; outros previstos em lei.</p>',
            ul: [
              '<strong>Aposentadoria por idade (art. 48):</strong> ap&oacute;s EC 103/19, exige 65/62 anos + 15 anos m&iacute;nimo.',
              '<strong>Aposentadoria por tempo de contribui&ccedil;&atilde;o (art. 52):</strong> com a EC 103/19, restou a regra de ped&aacute;gio 100% (art. 20).',
              '<strong>Aposentadoria especial (art. 57):</strong> 15/20/25 anos, conforme o agente nocivo.',
              '<strong>Aux&iacute;lio por incapacidade tempor&aacute;ria (art. 59):</strong> antigo aux&iacute;lio-doen&ccedil;a. Nomenclatura alterada pela EC 103/19.',
              '<strong>Aux&iacute;lio-acidente (art. 86):</strong> indeniza&ccedil;&atilde;o por redu&ccedil;&atilde;o da capacidade.',
              '<strong>Pens&atilde;o por morte (art. 74):</strong> cota familiar de 50% + 10%/dependente.',
              '<strong>Sal&aacute;rio-fam&iacute;lia (art. 65):</strong> para dependentes at&eacute; 14 anos (ou inv&aacute;lidos).'
            ]
          },
          {
            h: '4. Sal&aacute;rio-de-Benef&iacute;cio (EC 103/19)',
            p: '<p>Base de c&aacute;lculo dos benef&iacute;cios. A EC 103/19 alterou profundamente:</p>',
            ul: [
              '<strong>Antes (Lei 8.213/91 antiga):</strong> 80% dos maiores sal&aacute;rios (com fator previdenci&aacute;rio).',
              '<strong>Depois (EC 103/19, art. 26):</strong> m&eacute;dia aritm&eacute;tica simples de <strong>100% dos sal&aacute;rios-de-contribui&ccedil;&atilde;o</strong> a partir de julho/1994 (ou do m&ecirc;s de in&iacute;cio das contribui&ccedil;&otilde;es, se posterior).',
              'Fator previdenci&aacute;rio: foi extinto (ap&oacute;s EC 103/19), mas com <strong>regra de prote&ccedil;&atilde;o</strong> para quem j&aacute; se beneficiava.',
              'Sal&aacute;rio-de-benef&iacute;cio &eacute; limitado ao teto do RGPS.'
            ]
          },
          {
            h: '5. BPC &mdash; Benef&iacute;cio de Presta&ccedil;&atilde;o Continuada (Lei 8.742/93)',
            p: '<p>Benef&iacute;cio assistencial, n&atilde;o contributivo. Requisitos:</p>',
            ul: [
              '<strong>Idoso:</strong> 65 anos ou mais.',
              '<strong>Pessoa com defici&ecirc;ncia:</strong> impedimentos de natureza f&iacute;sica, mental, intelectual ou sensorial.',
              '<strong>Renda per capita do grupo familiar</strong> < 1/4 do sal&aacute;rio-m&iacute;nimo (crit&eacute;rio ampliado pelo STF em 2024 para at&eacute; 1/2 SM).',
              '<strong>Cadastro &Uacute;nico do Governo Federal</strong> atualizado.',
              '<strong>Atualiza&ccedil;&atilde;o bienal</strong> (revis&atilde;o do benef&iacute;cio).',
              'N&atilde;o pode ser acumulado com benef&iacute;cio previdenci&aacute;rio.',
              '1 sal&aacute;rio-m&iacute;nimo, pago pelo INSS (Lei 14.176/21 transferiu a gest&atilde;o do MDS para o INSS).'
            ]
          },
          {
            h: '6. Processo Administrativo e Judicial Previdenci&aacute;rio',
            p: '<p><strong>Processo administrativo:</strong></p>',
            ul: [
              '<strong>Requerimento:</strong> no INSS (agora INSS Digital).',
              '<strong>Indeferimento:</strong> pode recorrer &agrave; JR/CRPS em <strong>30 dias</strong>.',
              '<strong>2&ordf; inst&acirc;ncia:</strong> CRPS (Conselho de Recursos da Previd&ecirc;ncia Social).',
              '<strong>Justifica&ccedil;&atilde;o administrativa:</strong> prova testemunhal quando n&atilde;o h&aacute; documentos, realizada no pr&oacute;prio INSS.'
            ],
            p2: '<p><strong>Processo judicial:</strong></p>',
            ul2: [
              '<strong>Compet&ecirc;ncia:</strong> Vara Federal ou Juizado Especial Federal (Lei 10.259/01).',
              '<strong>JEF:</strong> causas at&eacute; <strong>60 sal&aacute;rios-m&iacute;nimos</strong>.',
              '<strong>Parcelas pret&eacute;ritas:</strong> prazo decadencial de 5 anos (Lei 8.213/91, art. 103-A, Lei 10.839/04).',
              '<strong>Imprescritibilidade do direito ao benef&iacute;cio</strong> (S&uacute;mula 85 do STJ).',
              '<strong>Honor&aacute;rios:</strong> 10% a 20% sobre o valor da condena&ccedil;&atilde;o, conforme jurisprud&ecirc;ncia.',
              '<strong>Tutela antecipada:</strong> cab&iacute;vel quando houver prova documental suficiente.'
            ]
          },
          {
            h: '7. Atualidades Legislativas (Lei 14.331/22 e 14.973/24)',
            p: '<p><strong>Lei 14.331/2022:</strong> permitiu o pagamento direto ao cidada&atilde;o em caso de morat&oacute;ria do INSS; revis&atilde;o de prazos para reabilita&ccedil;&atilde;o.</p>',
            ul: [
              '<strong>Lei 14.973/2024:</strong> atualizou al&iacute;quotas progressivas do segurado empregado (novas faixas: 7,5%, 9%, 12%, 14%).',
              '<strong>Lei 13.846/2019:</strong> anistiou contribui&ccedil;&otilde;es em atraso (de 2017 a 2018), criou a CIP (Certifica&ccedil;&atilde;o de Informa&ccedil;&otilde;es Previdenci&aacute;rias), alterou prazos de recursos.',
              '<strong>EC 103/19:</strong> marco normativo atual, com regras transit&oacute;rias.',
              '<strong>Lei 14.176/2021:</strong> transferiu a gest&atilde;o do BPC do MDS para o INSS.'
            ]
          }
        ]
      }
    },
    {
      id: 'logica',
      nome: 'Raciocínio Lógico-Matemático',
      icon: '\u{1F9EE}',
      cor: '#059669',
      grupo: 'conhecimentos-especificos',
      topicos: [
        'Estruturas lógicas: proposições, conectivos',
        'Proposições: simples e compostas',
        'Conectivos: E, OU, SE...ENTÃO, SE E SOMENTE SE',
        'Tabela-verdade: como construir',
        'Equivalências lógicas',
        'Negação de proposições compostas',
        'Lógica de argumentação: válido e inválido',
        'Diagramas lógicos (Venn)',
        'Quantificadores: todo, algum, nenhum',
        'Raciocínio sequencial (padrões numéricos)',
        'Probabilidade: conceito, evento',
        'Probabilidade condicional',
        'Estatística: média aritmética',
        'Estatística: moda e mediana',
        'Estatística: variância e desvio padrão',
        'Porcentagem e percentis',
        'Razão e proporção',
        'Regra de três simples',
        'Regra de três composta',
        'Juros simples',
        'Juros compostos',
        'Descontos simples e compostos',
        'Análise combinatória: PFC e permutação',
        'Análise combinatória: arranjo e combinação',
        'Princípio fundamental da contagem',
        'Probabilidade: distribuição binomial',
        'Conjuntos: operações e diagramas',
        'Matrizes e determinantes (básico)',
        'Geometria plana: áreas e perímetros',
        'Geometria espacial: volumes',
        'Raciocínio analítico com gráficos e tabelas',
        'Equações de 1º e 2º grau',
        'Inequações e sistemas de equações'
      ],
      resumo: {
        titulo: 'Raciocínio Lógico — Resumo Estratégico',
        secoes: [
          {
            h: 'Conectivos e Tabelas-Verdade',
            ul: [
              'E (∧): verdadeiro só se AMBAS verdadeiras',
              'OU (∨): falso só se AMBAS falsas',
              'SE...ENTÃO (→): falso só se V→F',
              'SE E SOMENTE SE (↔): V só se ambas V ou ambas F',
              'NÃO (~): inverte o valor lógico'
            ]
          },
          {
            h: 'Equivalências Essenciais',
            ul: [
              'Contrapositiva: P→Q ≡ ~Q→~P',
              'Negação do E: ~(P∧Q) ≡ ~P ∨ ~Q (De Morgan)',
              'Negação do OU: ~(P∨Q) ≡ ~P ∧ ~Q',
              'Negação do SE: ~(P→Q) ≡ P ∧ ~Q',
              'Negação do "todo": existe... que não',
              'Negação do "algum": nenhum... é'
            ]
          },
          {
            h: 'Juros Simples x Compostos',
            ul: [
              'Simples: M = C(1 + i·t). Juros sempre sobre o capital inicial',
              'Compostos: M = C(1+i)^t. Juros sobre juros',
              'Taxa anual → mensal: dividir por 12 (juros simples) OU aplicar (1+i)^(1/12) - 1 (compostos)'
            ]
          },
          {
            h: 'Análise Combinatória',
            ul: [
              'PFC: n × m × p... (escolhas independentes)',
              'Permutação: P(n) = n! (trocar ordem)',
              'Arranjo: A(n,k) = n!/(n-k)! (ordem importa)',
              'Combinação: C(n,k) = n!/[k!(n-k)!] (ordem NÃO importa)'
            ]
          }
        ]
      },
      materia: {
        introducao: '<p>O <strong>Racioc&iacute;nio L&oacute;gico-Matem&aacute;tico (RLM)</strong> &eacute; mat&eacute;ria de <strong>Conhecimentos Espec&iacute;ficos</strong> no INSS, representando cerca de <strong>10-15% da prova</strong>. A CEBRASPE cobra tanto l&oacute;gica proposicional quanto matem&aacute;tica financeira, an&aacute;lise combinat&oacute;ria e estat&iacute;stica. As quest&otilde;es geralmente s&atilde;o do tipo <strong>Certo/Errado</strong>, com enunciados que exigem leitura atenciosa.</p>',
        capitulos: [
          {
            h: '1. L&oacute;gica Proposicional',
            p: '<p><strong>Proposi&ccedil;&atilde;o</strong> &eacute; uma senten&ccedil;a declarativa que admite valor V ou F (verdadeiro ou falso).</p>',
            ul: [
              '<strong>Simples (at&ocirc;mica):</strong> sem conectivo. Ex: "2 &eacute; par".',
              '<strong>Composta (molecular):</strong> com conectivos.',
              'Sentido amplo: exclui exclama&ccedil;&otilde;es, perguntas, ordens, paradoxos.'
            ],
            p2: '<p><strong>Conectivos:</strong></p>',
            ul2: [
              '<strong>N&Atilde;O (~):</strong> inverte o valor.',
              '<strong>E (∧):</strong> V s&oacute; se ambas V.',
              '<strong>OU (∨):</strong> F s&oacute; se ambas F.',
              '<strong>SE...ENT&Atilde;O (&rarr;):</strong> F s&oacute; quando V &rarr; F. Em outros casos, &eacute; V.',
              '<strong>SE E SOMENTE SE (&harr;):</strong> V s&oacute; quando ambas V ou ambas F.'
            ]
          },
          {
            h: '2. Equival&ecirc;ncias L&oacute;gicas',
            p: '<p>Equival&ecirc;ncias essenciais para a CEBRASPE:</p>',
            ul: [
              '<strong>Contrapositiva:</strong> P&rarr;Q &equiv; ~Q&rarr;~P.',
              '<strong>De Morgan:</strong> ~(P&and;Q) &equiv; ~P &or; ~Q; ~(P&or;Q) &equiv; ~P &and; ~Q.',
              '<strong>Implica&ccedil;&atilde;o material:</strong> P&rarr;Q &equiv; ~P &or; Q.',
              '<strong>Bicondicional:</strong> P&harr;Q &equiv; (P&rarr;Q) &and; (Q&rarr;P).',
              '<strong>Dupla nega&ccedil;&atilde;o:</strong> ~(~P) &equiv; P.'
            ]
          },
          {
            h: '3. Ne ga&ccedil;&otilde;es Importantes',
            p: '<p><strong>Negação de proposições compostas:</strong></p>',
            ul: [
              '<strong>~(~P) = P</strong>',
              '<strong>~(P &and; Q) = ~P &or; ~Q</strong>',
              '<strong>~(P &or; Q) = ~P &and; ~Q</strong>',
              '<strong>~(P &rarr; Q) = P &and; ~Q</strong>',
              '<strong>~(P &harr; Q) = P &harr; ~Q</strong> (ou ~(P &harr; Q) &equiv; (~P &harr; Q))'
            ],
            p2: '<p><strong>Quantificadores:</strong></p>',
            ul2: [
              '<strong>~ (&forall;x: P(x)) &equiv; &exist;x: ~P(x)</strong> (existe pelo menos um que NÃO)',
              '<strong>~ (&exist;x: P(x)) &equiv; &forall;x: ~P(x)</strong> (nenhum)',
              '<strong>"Todo A &eacute; B" &rarr; nega&ccedil;&atilde;o: "Algum A n&atilde;o &eacute; B"</strong>',
              '<strong>"Algum A &eacute; B" &rarr; nega&ccedil;&atilde;o: "Nenhum A &eacute; B"</strong>',
              '<strong>"Nenhum A &eacute; B" &rarr; nega&ccedil;&atilde;o: "Algum A &eacute; B"</strong>'
            ]
          },
          {
            h: '4. An&aacute;lise Combinat&oacute;ria',
            p: '<p><strong>Princ&iacute;pio Fundamental da Contagem (PFC):</strong> se h&aacute; <em>m</em> modos de fazer A e <em>n</em> modos de fazer B, ent&atilde;o h&aacute; m &times; n modos de fazer A e B.</p>',
            ul: [
              '<strong>Arranjo (A):</strong> ordem importa. A(n,k) = n!/(n-k)!.',
              '<strong>Permuta&ccedil;&atilde;o (P):</strong> caso especial do arranjo. P(n) = n!.',
              '<strong>Combina&ccedil;&atilde;o (C):</strong> ordem n&atilde;o importa. C(n,k) = n!/[k!(n-k)!].',
              'Exemplo: 5 pessoas, quantas comiss&otilde;es de 3? C(5,3) = 10.',
              'Exemplo: 5 pessoas, quantas formas de premiar 1&ordm;, 2&ordm; e 3&ordm; lugar? A(5,3) = 60.'
            ]
          },
          {
            h: '5. Probabilidade',
            p: '<p>Conceito cl&aacute;ssico: <strong>P(A) = n&uacute;mero de casos favor&aacute;veis / n&uacute;mero de casos poss&iacute;veis</strong>.</p>',
            ul: [
              '0 &le; P(A) &le; 1 (ou 0% &le; P(A) &le; 100%).',
              '<strong>Eventos complementares:</strong> P(A) + P(~A) = 1.',
              '<strong>Uni&atilde;o:</strong> P(A &or; B) = P(A) + P(B) - P(A &and; B).',
              '<strong>Interse&ccedil;&atilde;o (independentes):</strong> P(A &and; B) = P(A) &times; P(B).',
              '<strong>Condicional:</strong> P(A|B) = P(A &and; B) / P(B).',
              '<strong>Probabilidade binomial:</strong> P = C(n,k) &times; p^k &times; (1-p)^(n-k).'
            ]
          },
          {
            h: '6. Matem&aacute;tica Financeira',
            p: '<p><strong>Juros Simples:</strong> J = C &times; i &times; t. M = C + J = C(1 + i&middot;t). Juros sempre sobre o capital inicial.</p>',
            ul: [
              '<strong>Juros Compostos:</strong> M = C(1+i)^t. Juros sobre juros (capitaliza&ccedil;&atilde;o).',
              '<strong>Taxa equivalente:</strong> (1+i_a) = (1+i_m)^12 (taxa anual a partir da mensal).',
              '<strong>Desconto simples:</strong> D = N &times; d &times; t (onde N &eacute; valor nominal, d taxa de desconto).',
              '<strong>Desconto composto:</strong> D = N &times; [1 - (1+d)^(-t)].'
            ]
          },
          {
            h: '7. Racioc&iacute;nio Anal&iacute;tico (CEBRASPE)',
            p: '<p>A CEBRASPE cobra quest&otilde;es de racioc&iacute;nio anal&iacute;tico com gr&aacute;ficos, tabelas e esquemas. Dicas:</p>',
            ul: [
              'Leia o enunciado com aten&ccedil;&atilde;o a <strong>palavras absolutistas</strong> (sempre, nunca, todo, nenhum).',
              'Proposi&ccedil;&otilde;es com <em>alguns</em>, <em>pode</em>, <em>eventualmente</em> s&atilde;o mais seguras.',
              'Use o <strong>m&eacute;todo da hip&oacute;tese</strong>: substitua por n&uacute;meros para validar.',
              'Em quest&otilde;es de sequ&ecirc;ncia, observe o padr&atilde;o (aritm&eacute;tico, geom&eacute;trico, alternado).',
              'Diagramas l&oacute;gicos de Venn auxiliam em problemas de conjuntos.'
            ]
          },
          {
            h: '8. Porcentagem e Propor&ccedil;&atilde;o',
            p: '<p><strong>Regra de 3 simples:</strong> grandezas diretamente ou inversamente proporcionais.</p>',
            ul: [
              '<strong>Porcentagem:</strong> X% de V = V &times; X/100.',
              '<strong>Aumento percentual:</strong> V &rarr; V &times; (1 + X/100).',
              '<strong>Redu&ccedil;&atilde;o percentual:</strong> V &rarr; V &times; (1 - X/100).',
              '<strong>Aumento seguido de redu&ccedil;&atilde;o:</strong> o resultado l&iacute;quido &eacute; V &times; (1+X/100)(1-Y/100).',
              'Cuidado: a ordem dos fatores N&Atilde;O altera o resultado (mas alterar o percentual muda).'
            ]
          }
        ]
      }
    }
  ];

  // =====================================================
  // TOP ASSUNTOS MAIS COBRADOS (CEBRASPE)
  // =====================================================
  const TOP_ASSUNTOS = {
    portugues: [
      { topico: 'Interpretação e compreensão de texto', freq: 98, edicao: 'Todas' },
      { topico: 'Crase', freq: 92, edicao: 'Recorrente' },
      { topico: 'Concordância verbal e nominal', freq: 88, edicao: 'Recorrente' },
      { topico: 'Pontuação', freq: 85, edicao: 'Recorrente' },
      { topico: 'Regência verbal e nominal', freq: 82, edicao: 'Recorrente' },
      { topico: 'Conectivos e conjunções', freq: 78, edicao: '2022-2024' },
      { topico: 'Redação Oficial / Manual da Presidência', freq: 75, edicao: 'Todas' },
      { topico: 'Coesão e coerência', freq: 70, edicao: 'Recente' },
      { topico: 'Classes de palavras', freq: 65, edicao: 'Recorrente' },
      { topico: 'Reescrita e paráfrase', freq: 60, edicao: 'CEBRASPE' }
    ],
    constitucional: [
      { topico: 'Art. 5º - Direitos individuais', freq: 95, edicao: 'Recorrente' },
      { topico: 'Seguridade Social (Art. 194)', freq: 92, edicao: 'Todas' },
      { topico: 'Previdência Social (Arts. 201-202)', freq: 90, edicao: 'Recorrente' },
      { topico: 'Remédios constitucionais (HC, HD, MS, MI)', freq: 88, edicao: 'Recorrente' },
      { topico: 'Organização do Estado (União, Estados, DF, Municípios)', freq: 85, edicao: 'Recorrente' },
      { topico: 'Administração Pública (Arts. 37-41)', freq: 82, edicao: 'Todas' },
      { topico: 'Poderes do Estado', freq: 78, edicao: 'Recorrente' },
      { topico: 'EC 103/2019 - Reforma da Previdência', freq: 95, edicao: 'Recente' },
      { topico: 'Direitos sociais (Art. 6º)', freq: 75, edicao: 'Recorrente' },
      { topico: 'Nacionalidade (Arts. 12-13)', freq: 70, edicao: 'Recorrente' }
    ],
    administrativo: [
      { topico: 'Princípios da Administração (LIMPE)', freq: 95, edicao: 'Todas' },
      { topico: 'Atos administrativos', freq: 92, edicao: 'Recorrente' },
      { topico: 'Poderes administrativos', freq: 88, edicao: 'Recorrente' },
      { topico: 'Licitações (Lei 14.133/21)', freq: 90, edicao: 'Recente' },
      { topico: 'Responsabilidade civil do Estado', freq: 85, edicao: 'Recorrente' },
      { topico: 'Contratos administrativos', freq: 80, edicao: 'Recorrente' },
      { topico: 'Bens e serviços públicos', freq: 75, edicao: 'Recorrente' },
      { topico: 'Improbidade administrativa', freq: 82, edicao: 'Recorrente' },
      { topico: 'Mandado de Segurança', freq: 70, edicao: 'Recorrente' },
      { topico: 'Processo administrativo (Lei 9.784/99)', freq: 68, edicao: 'Recorrente' }
    ],
    previdenciario: [
      { topico: 'Aposentadoria por idade (EC 103/19)', freq: 96, edicao: 'Recente' },
      { topico: 'Aposentadoria por tempo de contribuição', freq: 93, edicao: 'Todas' },
      { topico: 'Pensão por morte', freq: 91, edicao: 'Todas' },
      { topico: 'Regras de transição (EC 103/19)', freq: 90, edicao: 'Recente' },
      { topico: 'Salário-de-benefício', freq: 88, edicao: 'Recorrente' },
      { topico: 'Carência e qualidade de segurado', freq: 85, edicao: 'Recorrente' },
      { topico: 'Auxílio por incapacidade temporária', freq: 82, edicao: 'Recorrente' },
      { topico: 'Salário-maternidade', freq: 75, edicao: 'Recorrente' },
      { topico: 'Dependentes e classes', freq: 78, edicao: 'Recorrente' },
      { topico: 'Aposentadoria especial', freq: 85, edicao: 'Recorrente' }
    ],
    legislacao: [
      { topico: 'Lei 8.213/91 - Plano de Benefícios', freq: 95, edicao: 'Todas' },
      { topico: 'Lei 8.212/91 - Custeio', freq: 90, edicao: 'Todas' },
      { topico: 'Decreto 3.048/99', freq: 88, edicao: 'Recorrente' },
      { topico: 'Alíquotas e salário-de-contribuição', freq: 85, edicao: 'Recorrente' },
      { topico: 'BPC/LOAS', freq: 82, edicao: 'Recorrente' },
      { topico: 'Lei 13.846/2019', freq: 78, edicao: 'Recente' },
      { topico: 'Lei 14.331/2022 e 14.973/2024', freq: 80, edicao: 'Recente' },
      { topico: 'Processo administrativo previdenciário', freq: 75, edicao: 'Recorrente' },
      { topico: 'Justificação administrativa', freq: 70, edicao: 'Recorrente' },
      { topico: 'Benefícios do RPPS', freq: 68, edicao: 'Recorrente' }
    ],
    rju: [
      { topico: 'Provimento e vacância', freq: 92, edicao: 'Recorrente' },
      { topico: 'Licenças e afastamentos', freq: 90, edicao: 'Recorrente' },
      { topico: 'Processo Administrativo Disciplinar (PAD)', freq: 95, edicao: 'Recorrente' },
      { topico: 'Sindicância', freq: 85, edicao: 'Recorrente' },
      { topico: 'Sanções disciplinares', freq: 88, edicao: 'Recorrente' },
      { topico: 'Estágio probatório', freq: 80, edicao: 'Recorrente' },
      { topico: 'Estabilidade', freq: 78, edicao: 'Recorrente' },
      { topico: 'Direitos e deveres', freq: 85, edicao: 'Recorrente' },
      { topico: 'Acumulação de cargos', freq: 82, edicao: 'Recorrente' },
      { topico: 'Prescrição e decadência', freq: 75, edicao: 'Recorrente' }
    ],
    etica: [
      { topico: 'Decreto 1.171/94 - Código de Ética', freq: 95, edicao: 'Recorrente' },
      { topico: 'Lei 8.429/92 - Improbidade', freq: 92, edicao: 'Recorrente' },
      { topico: 'Lei 12.813/13 - Conflito de Interesses', freq: 85, edicao: 'Recente' },
      { topico: 'Lei 12.527/11 - Acesso à Informação', freq: 82, edicao: 'Recorrente' },
      { topico: 'Lei 12.846/13 - Anticorrupção', freq: 78, edicao: 'Recente' },
      { topico: 'Deveres e vedações', freq: 88, edicao: 'Recorrente' },
      { topico: 'Comissões de Ética', freq: 75, edicao: 'Recorrente' },
      { topico: 'Assédio moral e sexual', freq: 70, edicao: 'Recente' }
    ],
    informatica: [
      { topico: 'MS Excel (fórmulas e funções)', freq: 95, edicao: 'Recorrente' },
      { topico: 'MS Word', freq: 85, edicao: 'Recorrente' },
      { topico: 'Segurança da informação', freq: 92, edicao: 'Recorrente' },
      { topico: 'Internet e navegadores', freq: 80, edicao: 'Recorrente' },
      { topico: 'Correio eletrônico', freq: 78, edicao: 'Recorrente' },
      { topico: 'Gov.br e serviços digitais', freq: 88, edicao: 'Recente' },
      { topico: 'Certificado digital / ICP-Brasil', freq: 75, edicao: 'Recorrente' },
      { topico: 'LGPD (Lei 13.709/18)', freq: 85, edicao: 'Recente' },
      { topico: 'Lei de Acesso à Informação', freq: 82, edicao: 'Recorrente' },
      { topico: 'Cloud Computing', freq: 70, edicao: 'Recente' }
    ],
    logica: [
      { topico: 'Estruturas lógicas e tabela-verdade', freq: 95, edicao: 'Recorrente' },
      { topico: 'Equivalências lógicas', freq: 92, edicao: 'Recorrente' },
      { topico: 'Raciocínio sequencial', freq: 88, edicao: 'Recorrente' },
      { topico: 'Probabilidade', freq: 85, edicao: 'Recorrente' },
      { topico: 'Juros compostos', freq: 82, edicao: 'Recorrente' },
      { topico: 'Análise combinatória', freq: 80, edicao: 'Recorrente' },
      { topico: 'Porcentagem', freq: 78, edicao: 'Recorrente' },
      { topico: 'Estatística básica', freq: 75, edicao: 'Recorrente' },
      { topico: 'Regra de três', freq: 70, edicao: 'Recorrente' }
    ]
  };

  // =====================================================
  // BANCO DE QUESTÕES (estilo CEBRASPE)
  // =====================================================
  const QUESTOES = {
    portugues: [
      {
        enunciado: 'O texto acima tem como principal finalidade',
        opcoes: [
          'criticar a postura de servidores públicos',
          'informar o leitor sobre uma pesquisa científica',
          'persuadir o leitor a adotar um comportamento',
          'descrever objetivamente um acontecimento histórico',
          'narrar uma história fictícia para entretenimento'
        ],
        correta: 2,
        explicacao: 'O texto argumentativo visa persuadir o leitor, característica típica de artigos de opinião e textos dissertativos.'
      },
      {
        enunciado: 'Assinale a opção em que a crase está empregada corretamente.',
        opcoes: [
          'Refiro-me à você desde o início.',
          'Vou à pé até a escola.',
          'Cheguei à minha casa por volta das dez horas.',
          'Entreguei o documento à ela mesma.',
          'Fui à pé e voltei à cavalo.'
        ],
        correta: 2,
        explicacao: '"À minha casa" - crase antes de palavra feminina que admite o artigo "a". Nas outras há erros: "a você" (não usa crase), "a pé" (locução adverbial sem artigo), "a ela" (pronome pessoal não usa crase).'
      },
      {
        enunciado: 'Em "Fazem cinco anos que ele saiu da cidade", a concordância está',
        opcoes: [
          'correta, pois o verbo fazer concorda com o tempo decorrido',
          'incorreta, pois o verbo fazer é impessoal e deve ficar no singular',
          'correta, pois o verbo concorda com "ele"',
          'incorreta, pois deve ser "faz cinco anos"',
          'incorreta, pois deve ser "fazia cinco anos"'
        ],
        correta: 1,
        explicacao: 'O verbo "fazer" indicando tempo decorrido é impessoal e permanece no singular: "Faz cinco anos".'
      },
      {
        enunciado: 'A negação da proposição "Se chove, então a rua fica molhada" é logicamente equivalente a:',
        opcoes: [
          'Se não chove, então a rua não fica molhada',
          'Se a rua não fica molhada, então não chove',
          'Chove e a rua não fica molhada',
          'Não chove ou a rua fica molhada',
          'Se chove, então a rua não fica molhada'
        ],
        correta: 2,
        explicacao: 'A negação de P→Q é P∧~Q. Portanto, a negação é "Chove e a rua não fica molhada".'
      },
      {
        enunciado: 'Quanto à regência verbal, assinale a alternativa correta.',
        opcoes: [
          'Aspiro o cargo de gerente',
          'Obedeço as normas da empresa',
          'Prefiro o filme antigo do que o novo',
          'Cheguei em casa por volta do meio-dia',
          'Assistimos ao filme no cinema'
        ],
        correta: 4,
        explicacao: '"Assistir" exige preposição "a" quando o sentido é presenciar: assistimos AO filme. As demais têm erros: aspirar A, obedecer A, preferir A (e não "do que") e "chegar em casa" (correto é "chegar a casa" ou "chegar em casa" na linguagem coloquial).'
      },
      {
        enunciado: 'Em relação à colocação pronominal, assinale a frase correta:',
        opcoes: [
          'Me empresta seu livro?',
          'Empresta-me seu livro?',
          'Empresta seu livro para mim?',
          'Me dê seu livro',
          'Dê-me seu livro agora'
        ],
        correta: 1,
        explicacao: 'Na norma culta, com verbo no imperativo afirmativo, a próclise é obrigatória: "Empreste-me" ou "Empreste seu livro a mim". A forma "me empresta" é coloquial mas não gramaticalmente aceita na norma padrão.'
      }
    ],
    constitucional: [
      {
        enunciado: 'A seguridade social, conforme a Constituição Federal de 1988, abrange',
        opcoes: [
          'apenas a previdência social e a saúde pública',
          'a saúde, a previdência e a assistência social',
          'somente a previdência social e a assistência social',
          'apenas a saúde pública e a educação',
          'todas as políticas públicas de proteção ao cidadão'
        ],
        correta: 1,
        explicacao: 'Art. 194 CF/88: seguridade social = saúde + previdência + assistência. Tríade constitucional.'
      },
      {
        enunciado: 'A respeito dos direitos sociais previstos na Constituição Federal, assinale a alternativa correta:',
        opcoes: [
          'São direitos de aplicação imediata, sem necessidade de lei',
          'Estão previstos no art. 6º da CF/88',
          'Aplicam-se exclusivamente aos servidores públicos',
          'Dependem de regulamentação infraconstitucional para produzir efeitos',
          'São normas programáticas sem força vinculante'
        ],
        correta: 1,
        explicacao: 'Art. 6º CF/88 lista os direitos sociais: educação, saúde, alimentação, trabalho, moradia, transporte, lazer, segurança, previdência, proteção à maternidade/infância, assistência aos desamparados.'
      },
      {
        enunciado: 'Quanto ao Mandado de Segurança, é correto afirmar:',
        opcoes: [
          'Pode ser impetrado por qualquer pessoa, física ou jurídica',
          'Seu prazo decadencial é de 180 dias',
          'Concede-se para proteger direito líquido e certo não amparado por HC ou HD',
          'É instrumento adequado para impetração contra sentença judicial',
          'Sempre tem efeito suspensivo automático'
        ],
        correta: 2,
        explicacao: 'MS (art. 5º LXIX): protege direito líquido e certo não amparado por HC ou HD, contra ato de autoridade. Prazo: 120 dias corridos (decadência). Lei 12.016/09 regulamenta.'
      },
      {
        enunciado: 'A respeito da aposentadoria por idade após a EC 103/2019, assinale a alternativa correta:',
        opcoes: [
          'A idade mínima é de 60 anos para homens e 55 para mulheres',
          'A idade mínima é de 65 anos para homens e 60 para mulheres',
          'A idade mínima é de 65 anos para homens e 62 para mulheres, com tempo mínimo de contribuição',
          'A idade mínima é de 70 anos para ambos os sexos',
          'Não há idade mínima, apenas tempo de contribuição'
        ],
        correta: 2,
        explicacao: 'EC 103/2019: idade mínima de 65 (homens) e 62 (mulheres), com 20 e 15 anos de contribuição respectivamente (regra geral do RGPS).'
      }
    ],
    administrativo: [
      {
        enunciado: 'São princípios constitucionais da Administração Pública, EXCETO:',
        opcoes: [
          'Legalidade',
          'Impessoalidade',
          'Eficiência',
          'Autotutela',
          'Publicidade'
        ],
        correta: 3,
        explicacao: 'LIMPE: Legalidade, Impessoalidade, Moralidade, Publicidade, Eficiência. Autotutela é princípio doutrinário (Súmula 473 STF), não constitucional.'
      },
      {
        enunciado: 'Os atos administrativos possuem como atributos:',
        opcoes: [
          'Presunção de legitimidade, tipicidade, imperatividade e autoexecutoriedade',
          'Legalidade, impessoalidade, moralidade e publicidade',
          'Vincularão, tipicidade, presunção e eficácia',
          'Obrigatoriedade, tipicidade, presunção e executoriedade',
          'Presunção de legitimidade, legalidade, moralidade e imperatividade'
        ],
        correta: 0,
        explicacao: 'Atributos dos atos administrativos: PATI = Presunção de legitimidade, Autoexecutoriedade, Tipicidade, Imperatividade.'
      },
      {
        enunciado: 'A respeito das licitações (Lei 14.133/21), assinale a alternativa correta:',
        opcoes: [
          'O pregão é modalidade obrigatória para todas as compras',
          'A concorrência é a modalidade padrão para licitações de grande vulto',
          'A inexigibilidade é dispensada apenas em casos de notória especialização',
          'A dispensa de licitação é possível para compras de até R$ 100.000,00',
          'Não há mais a modalidade tomada de preços na nova lei'
        ],
        correta: 1,
        explicacao: 'A Lei 14.133/21 trouxe modalidades: concorrência (regra), pregão, concurso, leilão, diálogo competitivo. Eliminação: tomada de preços, carta-convite, concorrência (alguns casos). Resposta: alternativa b está correta.'
      },
      {
        enunciado: 'A responsabilidade civil do Estado, no direito brasileiro, é:',
        opcoes: [
          'subjetiva, baseada na culpa do agente',
          'objetiva, baseada na teoria do risco administrativo',
          'mista, com elementos subjetivos e objetivos',
          'sólida e integral, independente de culpa',
          'exclusiva do servidor, com regresso obrigatório'
        ],
        correta: 1,
        explicacao: 'A responsabilidade civil do Estado é OBJETIVA (art. 37 §6º CF/88), baseada na teoria do RISCO ADMINISTRATIVO. Admite excludentes (culpa exclusiva da vítima, caso fortuito, força maior).'
      }
    ],
    previdenciario: [
      {
        enunciado: 'São segurados obrigatórios do RGPS, EXCETO:',
        opcoes: [
          'empregado e trabalhador doméstico',
          'contribuinte individual e trabalhador avulso',
          'segurado especial e facultativo',
          'servidor público titular de cargo efetivo',
          'diretores e síndicos'
        ],
        correta: 3,
        explicacao: 'Servidor público titular de cargo efetivo é segurado do RPPS (Regime Próprio), não do RGPS. Facultativo não é obrigatório (é voluntário).'
      },
      {
        enunciado: 'A carência para aposentadoria por idade no RGPS é de:',
        opcoes: [
          '12 contribuições mensais',
          '15 anos de contribuição',
          '180 contribuições mensais',
          '20 anos de contribuição',
          'Não há carência para aposentadoria'
        ],
        correta: 2,
        explicacao: 'A carência para aposentadoria por idade é de 180 contribuições mensais (15 anos). Exceção: aposentadoria por idade do segurado especial.'
      },
      {
        enunciado: 'A pensão por morte, após a EC 103/2019, será composta por:',
        opcoes: [
          'valor integral do benefício recebido pelo falecido',
          '50% + 10% por dependente, limitado a 100%',
          '50% fixa, independente do número de dependentes',
          '1 salário mínimo, independente da renda do falecido',
          '60% + 5% por dependente, até 100%'
        ],
        correta: 1,
        explicacao: 'Pensão por morte: cota familiar de 50% + 10% por dependente, até o limite de 100%. Cota mínima de 60% (5 dependentes).'
      },
      {
        enunciado: 'O salário-maternidade para a segurada empregada tem duração de:',
        opcoes: [
          '90 dias',
          '120 dias',
          '150 dias',
          '180 dias',
          '240 dias'
        ],
        correta: 1,
        explicacao: 'Salário-maternidade: 120 dias, podendo ser estendido em casos de parto prematuro ou complicações. Carência: 10 meses para empregada (exceto parto).'
      }
    ],
    legislacao: [
      {
        enunciado: 'A alíquota de contribuição do segurado empregado, em 2024, segue a seguinte faixa:',
        opcoes: [
          '11% sobre todo o salário',
          '7,5% a 14%, de forma progressiva por faixas',
          '20% sobre o salário mínimo',
          'Fixa em 8%, 9% ou 11%',
          '10% sobre o teto do RGPS'
        ],
        correta: 1,
        explicacao: 'Alíquotas progressivas (Lei 14.973/2024 e atualizações): 7,5% (até R$ 1.518); 9%; 12%; 14% (teto). Aplicadas por faixa.'
      },
      {
        enunciado: 'O BPC/LOAS (Lei 8.742/93) é um benefício:',
        opcoes: [
          'contributivo, no valor de 1 salário mínimo, para idosos com 65 anos ou pessoas com deficiência',
          'não contributivo, no valor de 1 salário mínimo, para idosos com 65 anos ou pessoas com deficiência de baixa renda',
          'contributivo, no valor de meio salário mínimo, para desempregados',
          'não contributivo, variável, para servidores públicos',
          'contributivo, no valor de 1 salário mínimo, para participantes do INSS'
        ],
        correta: 1,
        explicacao: 'BPC (Benefício de Prestação Continuada): idoso ≥65 anos OU pessoa com deficiência, renda per capita familiar < 1/4 SM (atualizado pelo STF para até 1/2 SM em alguns casos), 1 SM, sem contribuição.'
      },
      {
        enunciado: 'No processo administrativo previdenciário, o prazo para recurso à Junta de Recursos é de:',
        opcoes: [
          '5 dias úteis',
          '10 dias úteis',
          '15 dias úteis',
          '30 dias corridos',
          '60 dias corridos'
        ],
        correta: 3,
        explicacao: 'Prazo para recurso à JR/CRPS: 30 dias corridos a partir da ciência do indeferimento.'
      }
    ],
    rju: [
      {
        enunciado: 'O estágio probatório do servidor público federal, conforme a Lei 8.112/90, tem duração de:',
        opcoes: [
          '1 ano',
          '2 anos',
          '3 anos',
          '5 anos',
          '10 anos'
        ],
        correta: 2,
        explicacao: 'Estágio probatório: 3 anos, durante o qual o servidor é avaliado em: assiduidade, disciplina, capacidade de iniciativa, produtividade e responsabilidade.'
      },
      {
        enunciado: 'A licença para tratamento de saúde do servidor pode ser concedida por até:',
        opcoes: [
          '15 dias',
          '30 dias',
          '60 dias',
          '90 dias',
          '24 meses'
        ],
        correta: 4,
        explicacao: 'Licença para tratamento de saúde: até 24 meses (prorrogável). A licença por motivo de doença em pessoa da família: 60 dias com remuneração + 90 sem.'
      },
      {
        enunciado: 'São penalidades disciplinares previstas na Lei 8.112/90:',
        opcoes: [
          'advertência, suspensão, demissão, cassação de aposentadoria e disponibilidade',
          'advertência, multa, suspensão e demissão',
          'repreensão, suspensão, demissão e exoneração',
          'prisão, advertência, demissão',
          'multa, suspensão, demissão e disponibilidade'
        ],
        correta: 0,
        explicacao: 'Sanções (art. 127 Lei 8.112/90): advertência, suspensão (até 90 dias), demissão, cassação de aposentadoria e disponibilidade.'
      }
    ],
    etica: [
      {
        enunciado: 'O Decreto 1.171/94 (Código de Ética do Servidor) prevê como vedação:',
        opcoes: [
          'cumprir ordens superiores mesmo quando ilegais',
          'receber presentes de qualquer valor em razão do cargo',
          'usar o cargo para favorecimento pessoal ou de terceiros',
          'omitir-se diante de irregularidades',
          'todas as alternativas anteriores'
        ],
        correta: 2,
        explicacao: 'Vedação expressa: usar cargo para favorecimento pessoal ou de terceiros. Também é vedado: aceitar presentes que não sejam protocolares, opinar depreciativamente sobre colegas, etc.'
      },
      {
        enunciado: 'A Lei 8.429/92 (Improbidade Administrativa), após a Lei 14.230/21, exige:',
        opcoes: [
          'culpa para configuração de improbidade',
          'dolo para configuração de improbidade',
          'mera conduta imoral, sem dolo ou culpa',
          'enriquecimento ilícito de pelo menos R$ 100.000',
          'notificação prévia do Ministério Público'
        ],
        correta: 1,
        explicacao: 'A Lei 14.230/21 alterou a Lei 8.429/92 exigindo DOLO para todas as modalidades de improbidade. A ação de ressarcimento ao erário é imprescritível.'
      }
    ],
    informatica: [
      {
        enunciado: 'No Microsoft Excel, a função =PROCV(valor; matriz; coluna; 0) tem como finalidade:',
        opcoes: [
          'somar valores de uma coluna',
          'contar células que atendem uma condição',
          'procurar um valor na primeira coluna e retornar dados de outra coluna',
          'calcular a média de valores em uma faixa',
          'multiplicar valores de células'
        ],
        correta: 2,
        explicacao: 'PROCV (Procura Vertical): busca um valor na primeira coluna de uma matriz e retorna um valor de outra coluna. O "0" indica correspondência exata.'
      },
      {
        enunciado: 'O certificado digital ICP-Brasil tem como principal função:',
        opcoes: [
          'aumentar a velocidade da internet',
          'compactar arquivos no computador',
          'garantir autenticidade, integridade e sigilo em transações eletrônicas',
          'proteger o computador contra vírus',
          'criar senhas automáticas para o usuário'
        ],
        correta: 2,
        explicacao: 'Certificado digital ICP-Brasil: garante autenticidade (quem é), integridade (não foi alterado) e, opcionalmente, sigilo (criptografia). Usado em e-CPF, e-CNPJ, declarações fiscais, PJe.'
      }
    ],
    logica: [
      {
        enunciado: 'A negação da proposição "Todos os homens são mortais" é:',
        opcoes: [
          'Nenhum homem é mortal',
          'Alguns homens são mortais',
          'Existe pelo menos um homem que não é mortal',
          'Todos os homens não são mortais',
          'Nenhum homem não é mortal'
        ],
        correta: 2,
        explicacao: 'Negação de "Todo A é B" = "Existe pelo menos um A que não é B" (∃x: A(x) ∧ ~B(x)).'
      },
      {
        enunciado: 'Um capital de R$ 1.000,00 aplicado a juros compostos de 10% ao mês durante 2 meses resultará em:',
        opcoes: [
          'R$ 1.100,00',
          'R$ 1.200,00',
          'R$ 1.210,00',
          'R$ 1.250,00',
          'R$ 1.331,00'
        ],
        correta: 2,
        explicacao: 'M = C(1+i)^t = 1000 × (1,1)^2 = 1000 × 1,21 = R$ 1.210,00.'
      },
      {
        enunciado: 'Se a probabilidade de um evento A é 0,3 e de B é 0,5, sendo A e B independentes, a probabilidade de ambos ocorrerem é:',
        opcoes: [
          '0,15',
          '0,20',
          '0,35',
          '0,65',
          '0,80'
        ],
        correta: 0,
        explicacao: 'Para eventos independentes: P(A∩B) = P(A) × P(B) = 0,3 × 0,5 = 0,15.'
      }
    ]
  };

  // =====================================================
  // CRONOGRAMA PADRÃO
  // =====================================================
  const CRONO_PADRAO = {
    seg: [
      { materia: 'Direito Constitucional', horas: 2 },
      { materia: 'Língua Portuguesa', horas: 2 }
    ],
    ter: [
      { materia: 'Direito Administrativo', horas: 2 },
      { materia: 'Raciocínio Lógico', horas: 2 }
    ],
    qua: [
      { materia: 'Direito Previdenciário', horas: 2 },
      { materia: 'Legislação Previdenciária', horas: 2 }
    ],
    qui: [
      { materia: 'Regime Jurídico Único', horas: 2 },
      { materia: 'Língua Portuguesa', horas: 2 }
    ],
    sex: [
      { materia: 'Ética no Serviço Público', horas: 1.5 },
      { materia: 'Informática', horas: 1.5 },
      { materia: 'Simulado', horas: 1 }
    ],
    sab: [
      { materia: 'Revisão geral', horas: 2 },
      { materia: 'Questões e exercícios', horas: 2 }
    ]
  };

  // =====================================================
  // CONQUISTAS / ACHIEVEMENTS
  // =====================================================
  const CONQUISTAS = [
    { id: 'first_topic', icon: '\u{1F31F}', nome: 'Primeira Estrela', desc: 'Complete 1 tópico', check: s => s.totalTopicosFeitos >= 1 },
    { id: 'first_subject', icon: '\u{1F4DA}', nome: 'Maratonista', desc: 'Complete 1 matéria', check: s => s.concluidas >= 1 },
    { id: 'first_simulado', icon: '\u{1F3AF}', nome: 'Atirador Certeiro', desc: 'Faça 1 simulado', check: s => s.totalSimulados >= 1 },
    { id: 'streak_3', icon: '\u{1F525}', nome: 'Em Chamas', desc: '3 dias seguidos', check: s => s.streak >= 3 },
    { id: 'streak_7', icon: '\u{1F4AA}', nome: 'Imparável', desc: '7 dias seguidos', check: s => s.streak >= 7 },
    { id: 'streak_30', icon: '\u{1F451}', nome: 'Lendário', desc: '30 dias seguidos', check: s => s.streak >= 30 },
    { id: 'progress_25', icon: '\u{1F4C8}', nome: 'Quarto do Caminho', desc: '25% de progresso', check: s => s.pctGeral >= 25 },
    { id: 'progress_50', icon: '\u{1F680}', nome: 'Na Metade', desc: '50% de progresso', check: s => s.pctGeral >= 50 },
    { id: 'progress_75', icon: '\u{1F3C6}', nome: 'Quase Lá', desc: '75% de progresso', check: s => s.pctGeral >= 75 },
    { id: 'progress_100', icon: '\u{1F947}', nome: 'Concurseiro', desc: '100% de progresso', check: s => s.pctGeral >= 100 },
    { id: 'nota_80', icon: '\u{1F31F}', nome: 'Gênio', desc: '80%+ no simulado', check: s => s.melhorNota >= 80 },
    { id: 'first_note', icon: '\u{1F4DD}', nome: 'Escritor', desc: 'Crie 1 anotação', check: s => s.totalNotas >= 1 },
    { id: 'pomo_5', icon: '\u{23F1}', nome: 'Focado', desc: '5 pomodoros hoje', check: s => s.pomoHoje >= 5 },
    { id: 'all_subjects', icon: '\u{1F30D}', nome: 'Universo Completo', desc: 'Complete todas', check: s => s.concluidas >= 9 }
  ];

  // =====================================================
  // EXPORTAÇÃO GLOBAL
  // =====================================================
  window.INSS_DATA = {
    CONTEUDO: CONTEUDO,
    TOP_ASSUNTOS: TOP_ASSUNTOS,
    QUESTOES: QUESTOES,
    CRONO_PADRAO: CRONO_PADRAO,
    CONQUISTAS: CONQUISTAS
  };
})();
