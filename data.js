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
          },
          {
            h: '11. Classes de Palavras &mdash; Detalhamento',
            p: '<p>As 10 classes gramaticais se dividem em <strong>vari&aacute;veis</strong> (substantivo, adjetivo, artigo, numeral, pronome, verbo) e <strong>invari&aacute;veis</strong> (adv&eacute;rbio, preposi&ccedil;&atilde;o, conjun&ccedil;&atilde;o, interjei&ccedil;&atilde;o).</p>',
            ul: [
              '<strong>Substantivo:</strong> nomeia seres, objetos, sentimentos. Classifica&ccedil;&atilde;o: comum/pr&oacute;prio, concreto/abstrato, simples/composto, primitivo/derivado.',
              '<strong>Adjetivo:</strong> qualifica o substantivo. G&ecirc;nero, n&uacute;mero e grau (comparativo e superlativo).',
              '<strong>Artigo:</strong> definido (o, a, os, as) e indefinido (um, uma, uns, umas).',
              '<strong>Numeral:</strong> cardinal, ordinal, fracion&aacute;rio, multiplicativo.',
              '<strong>Pronome:</strong> pessoais (reto, obl&iacute;quo, de tratamento), possessivos, demonstrativos, indefinidos, relativos, interrogativos.',
              '<strong>Verbo:</strong> expressa a&ccedil;&atilde;o, estado, fen&ocirc;meno. Conjugado em tempo, modo, pessoa, n&uacute;mero, voz.',
              '<strong>Adv&eacute;rbio:</strong> modifica verbo, adjetivo ou outro adv&eacute;rbio. Classifica&ccedil;&atilde;o: tempo, lugar, modo, intensidade, afirma&ccedil;&atilde;o, nega&ccedil;&atilde;o, d&uacute;vida.',
              '<strong>Preposi&ccedil;&atilde;o:</strong> liga termos. Essenciais (a, de, em, para, com, por, sem, at&eacute;) e acidentais.',
              '<strong>Conjun&ccedil;&atilde;o:</strong> liga ora&ccedil;&otilde;es. Coordenativas e subordinativas.',
              '<strong>Interjei&ccedil;&atilde;o:</strong> exprime emo&ccedil;&atilde;o. Oh! Ah! Ufa!'
            ]
          },
          {
            h: '12. Sintaxe do Per&iacute;odo Simples &mdash; Termos da Ora&ccedil;&atilde;o',
            p: '<p><strong>Termos essenciais:</strong> sujeito e predicado. <strong>Termos integrantes:</strong> objeto direto, objeto indireto, complemento nominal, agente da passiva. <strong>Termos acess&oacute;rios:</strong> adjunto adverbial, adjunto adnominal, aposto. <strong>Termo independente:</strong> vocativo.</p>',
            ul: [
              '<strong>Sujeito:</strong> simples, composto, oculto (desinencial), indeterminado, inexistente.',
              '<strong>Predicado:</strong> verbal (n&uacute;cleo &eacute; verbo), nominal (n&uacute;cleo &eacute; nome), verbo-nominal (verbo + nome).',
              '<strong>Objeto direto:</strong> complemento sem preposi&ccedil;&atilde;o. Ex: <em>Comprei o livro</em>.',
              '<strong>Objeto indireto:</strong> complemento com preposi&ccedil;&atilde;o. Ex: <em>Gosto de m&uacute;sica</em>.',
              '<strong>Complemento nominal:</strong> completa nome (substantivo, adjetivo, adv&eacute;rbio). Ex: <em>amor &agrave; vida</em>.',
              '<strong>Adjunto adverbial:</strong> modifica verbo indicando tempo, lugar, modo, etc.',
              '<strong>Aposto:</strong> explica ou especifica um termo.',
              '<strong>Vocativo:</strong> chamamento (termo independente).'
            ]
          },
          {
            h: '13. Vozes Verbais',
            p: '<p>A <strong>voz verbal</strong> indica se o sujeito pratica, recebe ou sofre a a&ccedil;&atilde;o.</p>',
            ul: [
              '<strong>Voz ativa:</strong> sujeito pratica a a&ccedil;&atilde;o. Ex: <em>O aluno estudou a li&ccedil;&atilde;o</em>.',
              '<strong>Voz passiva:</strong> sujeito sofre a a&ccedil;&atilde;o. Pode ser <em>anal&iacute;tica</em> (com ser + partic&iacute;pio) ou <em>sint&eacute;tica</em> (com pronome se).',
              '<strong>Passiva anal&iacute;tica:</strong> O livro <em>foi lido</em> por mim. Agente da passiva introduzido por <em>por</em>.',
              '<strong>Passiva sint&eacute;tica (ou pronominal):</strong> Vendem-se casas (= casas s&atilde;o vendidas).',
              '<strong>Voz reflexiva:</strong> sujeito pratica e recebe a a&ccedil;&atilde;o. Ex: <em>Eu me cortei</em>.',
              '<strong>Pegadinha CEBRASPE:</strong> confundir voz passiva pronominal com voz ativa &mdash; o sujeito em &quot;vendem-se casas&quot; &eacute; indeterminado, n&atilde;o &quot;casas&quot;.'
            ]
          },
          {
            h: '14. Conectivos e Conjun&ccedil;&otilde;es',
            p: '<p>Os conectivos s&atilde;o essenciais para a coer&ecirc;ncia textual e muito cobrados pela CEBRASPE em quest&otilde;es de reescrita.</p>',
            ul: [
              '<strong>Aditivos:</strong> e, tamb&eacute;m, nem, tampouco, al&eacute;m disso, outrossim.',
              '<strong>Adversativos:</strong> mas, por&eacute;m, todavia, contudo, entretanto, no entanto, embora, sen&atilde;o.',
              '<strong>Alternativos:</strong> ou, ora...ora, j&aacute;...j&aacute;, quer...quer.',
              '<strong>Conclusivos:</strong> logo, portanto, pois, por conseguinte, dessa forma, em vista disso.',
              '<strong>Causais:</strong> porque, pois, j&aacute; que, uma vez que, visto que, como.',
              '<strong>Concessivos:</strong> embora, conquanto, mesmo que, ainda que, se bem que, posto que.',
              '<strong>Condicionais:</strong> se, caso, contanto que, a menos que, desde que.',
              '<strong>Comparativos:</strong> como, tal qual, assim como, tanto...quanto.',
              '<strong>Temporais:</strong> quando, enquanto, antes que, depois que, logo que, mal.',
              '<strong>Finais:</strong> para que, a fim de que, com o objetivo de.',
              '<strong>Proporcionais:</strong> &agrave; medida que, &agrave; propor&ccedil;&atilde;o que, quanto mais...mais.'
            ]
          },
          {
            h: '15. Per&iacute;odo Composto &mdash; Subordina&ccedil;&atilde;o Detalhada',
            p: '<p>O per&iacute;odo composto por subordina&ccedil;&atilde;o tem ora&ccedil;&otilde;es que exercem fun&ccedil;&atilde;o sint&aacute;tica umas das outras.</p>',
            ul: [
              '<strong>Substantivas:</strong> exercem fun&ccedil;&atilde;o de substantivo. Tipos: subjetiva, objetiva direta, objetiva indireta, completiva nominal, predicativa, apositiva, agente da passiva.',
              '<strong>Adjetivas:</strong> exercem fun&ccedil;&atilde;o de adjetivo. Restritiva (limita o sentido) ou explicativa (apenas acrescenta).',
              '<strong>Adverbiais:</strong> exercem fun&ccedil;&atilde;o de adjunto adverbial. Causais, concessivas, condicionais, temporais, finais, consecutivas, comparativas, conformativas, proporcionais.',
              '<strong>Reduzidas:</strong> sem conjun&ccedil;&atilde;o; usam verbo no infinitivo, ger&uacute;ndio ou partic&iacute;pio. Ex: <em>Estudo para passar</em> (= para que eu passe).',
              '<strong>Pegadinha cl&aacute;ssica:</strong> classifica&ccedil;&atilde;o de ora&ccedil;&atilde;o adjetiva restritiva vs explicativa. Observe a presen&ccedil;a ou n&atilde;o de v&iacute;rgulas.'
            ]
          },
          {
            h: '16. Sem&acirc;ntica e Estil&iacute;stica',
            p: '<p>Rela&ccedil;&otilde;es sem&acirc;nticas entre palavras muito cobradas:</p>',
            ul: [
              '<strong>Sinon&iacute;mia:</strong> palavras de sentido similar. Ex: casa / resid&ecirc;ncia.',
              '<strong>Anton&iacute;mia:</strong> sentido oposto. Ex: bom / mau.',
              '<strong>Polissemia:</strong> m&uacute;ltiplos sentidos. Ex: <em>m&atilde;o</em> (parte do corpo / de f&atacute;brica).',
              '<strong>Homon&iacute;mia:</strong> palavras com mesma grafia ou som, sentidos diferentes. Ex: <em>conserto</em> (reparo) / <em>concerto</em> (m&uacute;sica).',
              '<strong>Hiperon&iacute;mia/hipon&iacute;mia:</strong> g&ecirc;nero e esp&eacute;cie. Ex: <em>animal</em> (hiper&ocirc;nimo) / <em>cachorro</em> (hip&ocirc;nimo).',
              '<strong>Paron&iacute;mia:</strong> palavras parecidas com sentidos diferentes. Ex: <em>eminente</em> (ilustre) / <em>iminente</em> (prestes a acontecer).',
              '<strong>Denota&ccedil;&atilde;o x conota&ccedil;&atilde;o:</strong> sentido literal / sentido figurado.',
              '<strong>Figuras de linguagem:</strong> met&aacute;fora, meton&iacute;mia, pleonasmo, eufemismo, ironia, hip&eacute;rbole.'
            ]
          },
          {
            h: '17. Manual de Reda&ccedil;&atilde;o da Presid&ecirc;ncia da Rep&uacute;blica (3&ordf; ed. 2018)',
            p: '<p>Documento oficial que padroniza a reda&ccedil;&atilde;o de atos oficiais. Aplica-se aos &oacute;rg&atilde;os da Administra&ccedil;&atilde;o P&uacute;blica Federal. Caracter&iacute;sticas principais:</p>',
            ul: [
              '<strong>Impessoalidade:</strong> evitar 1&ordf; e 2&ordf; pessoa (eu, n&oacute;s, voc&ecirc;). Usar 3&ordf; pessoa ou 1&ordf; do plural (n&oacute;s) com sentido impessoal.',
              '<strong>Clareza:</strong> linguagem simples e direta, sem ambiguidades.',
              '<strong>Concis&atilde;o:</strong> eliminar palavras desnecess&aacute;rias.',
              '<strong>Formalidade:</strong> registro formal, sem g&iacute;rias, sem coloquialismos.',
              '<strong>Padroniza&ccedil;&atilde;o:</strong> seguir o formato pr&eacute;-estabelecido para cada tipo de documento.',
              '<strong>Documentos:</strong> of&iacute;cio, memorando, aviso, mensagem, telegrama, requerimento, parecer, rela&at&oacute;rio, ata.',
              '<strong>Concord&acirc;ncia com 1&ordf; do plural:</strong> <em>Somos de parecer que...</em> (sujeito indeterminado, n&atilde;o pessoal).',
              '<strong>Abrevia&ccedil;&otilde;es:</strong> V.Sa. (Vossa Senhoria), V.Exa. (Vossa Excel&ecirc;ncia), Dr. (Doutor), Ilmo. (Ilustr&iacute;ssimo).',
              '<strong>Numerais:</strong> escrever por extenso de um a dez; acima, em algarismos. Datas: <em>14 de mar&ccedil;o de 2026</em> (n&atilde;o &quot;14/03/2026&quot;).',
              '<strong>Fecho:</strong> <em>Atenciosamente</em> (para autoridades de mesma hierarquia ou inferior), <em>Respeitosamente</em> (para autoridades superiores).'
            ]
          },
          {
            h: '18. Coloca&ccedil;&atilde;o Pronominal',
            p: '<p>Posi&ccedil;&atilde;o do pronome obl&iacute;quo &aacute;tono (me, te, se, lhe, nos, vos, lhes) em rela&ccedil;&atilde;o ao verbo.</p>',
            ul: [
              '<strong>Pr&oacute;clise:</strong> pronome ANTES do verbo. Ocorre com palavras atrativas: <em>n&atilde;o, nunca, todos, algu&eacute;m, talvez, se, quando, que, onde</em>. Ex: <em>N&atilde;o me diga isso</em>.',
              '<strong>&Ecirc;nclise:</strong> pronome DEPOIS do verbo. Padr&atilde;o na norma culta quando n&atilde;o h&aacute; atrativo. Ex: <em>Entregaram-me o documento</em>.',
              '<strong>Mes&oacute;clise:</strong> pronome NO MEIO do verbo (apenas com futuro do presente e futuro do pret&eacute;rito). Ex: <em>Far-lhe-ei um favor</em>.',
              '<strong>Regras importantes:</strong>',
              '1. Com verbo no infinitivo: pr&oacute;clise ou &ecirc;nclise (ambas aceitas). Ex: <em>Para me ver / Para ver-me</em>.',
              '2. Com verbo no ger&uacute;ndio: obrigat&oacute;ria pr&oacute;clise. Ex: <em>Estava se vestindo</em>.',
              '3. Com verbo no partic&iacute;pio: obrigat&oacute;ria &ecirc;nclise. Ex: <em>Tinha dito-me</em>.',
              '<strong>Pegadinha CEBRASPE:</strong> &quot;Me empresta seu livro?&quot; &eacute; errado na norma culta (deve ser &quot;Empreste-me&quot;).'
            ]
          },
          {
            h: '19. An&aacute;lise Sint&aacute;tica Completa &mdash; Passo a Passo',
            p: '<p>M&eacute;todo para identificar a fun&ccedil;&atilde;o de cada termo da ora&ccedil;&atilde;o:</p>',
            ul: [
              '<strong>1.&deg; passo:</strong> encontre o verbo e separe o sujeito do predicado.',
              '<strong>2.&deg; passo:</strong> classifique o sujeito (simples, composto, oculto, indeterminado, inexistente).',
              '<strong>3.&deg; passo:</strong> classifique o predicado (verbal, nominal, verbo-nominal).',
              '<strong>4.&deg; passo:</strong> identifique os complementos (objetos, complemento nominal, agente da passiva).',
              '<strong>5.&deg; passo:</strong> identifique os termos acess&oacute;rios (adjuntos, apostos).',
              '<strong>6.&deg; passo:</strong> identifique o vocativo.',
              '<strong>Exemplo:</strong> <em>Entreguei o livro ao aluno estudioso ontem</em>.',
              '&nbsp;&nbsp;&bull; Sujeito: <em>eu</em> (oculto).<br>&nbsp;&nbsp;&bull; Predicado: verbal.<br>&nbsp;&nbsp;&bull; Verbo: <em>entreguei</em>.<br>&nbsp;&nbsp;&bull; Objeto direto: <em>o livro</em>.<br>&nbsp;&nbsp;&bull; Objeto indireto: <em>ao aluno</em>.<br>&nbsp;&nbsp;&bull; Adjunto adnominal: <em>estudioso</em>.<br>&nbsp;&nbsp;&bull; Adjunto adverbial: <em>ontem</em>.'
            ]
          },
          {
            h: '20. Reescrita e Par&aacute;frase (CEBRASPE)',
            p: '<p>A CEBRASPE adora quest&otilde;es de reescrita. Preste aten&ccedil;&atilde;o a:</p>',
            ul: [
              '<strong>Substitui&ccedil;&atilde;o de palavras:</strong> sin&ocirc;nimos devem manter o sentido original.',
              '<strong>Deslocamento de termos:</strong> pode alterar a rela&ccedil;&atilde;o sint&aacute;tica (ex: adverbial deslocada).',
              '<strong>Paragrafa&ccedil;&atilde;o:</strong> divis&atilde;o de per&iacute;odo em dois n&atilde;o pode mudar o sentido.',
              '<strong>Vocabul&aacute;rio:</strong> troca de palavra exige aten&ccedil;&atilde;o &agrave; reg&ecirc;ncia, crase, concord&acirc;ncia.',
              '<strong>Pegadinha:</strong> substitui&ccedil;&atilde;o de conector &mdash; &quot;por&eacute;m&quot; (adversativo) n&atilde;o pode virar &quot;portanto&quot; (conclusivo).',
              '<strong>Pegadinha:</strong> voz passiva muda a fun&ccedil;&atilde;o sint&aacute;tica: <em>Os alunos estudaram</em> (sujeito: alunos, objeto impl&iacute;cito: a mat&eacute;ria) &rarr; <em>A mat&eacute;ria foi estudada pelos alunos</em> (sujeito: mat&eacute;ria, agente: alunos).',
              '<strong>Exerc&iacute;cio mental:</strong> sempre pergunte: a nova frase mant&eacute;m o mesmo sentido e a mesma estrutura l&oacute;gica?'
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
          },
          {
            h: '9. Deveres e Proibi&ccedil;&otilde;es do Servidor (Lei 8.112/90)',
            p: '<p>Art. 116 (deveres) e 117 (proibi&ccedil;&otilde;es) da Lei 8.112/90.</p>',
            ul: [
              '<strong>Deveres principais (art. 116):</strong>',
              '&nbsp;&bull; Exercer com zelo e dedica&ccedil;&atilde;o as atribui&ccedil;&otilde;es do cargo.<br>',
              '&nbsp;&bull; Ser leal &agrave;s institui&ccedil;&otilde;es a que servir.<br>',
              '&nbsp;&bull; Observar as normas legais e regulamentares.<br>',
              '&nbsp;&bull; Cumprir as ordens superiores, exceto quando manifestamente ilegais.<br>',
              '&nbsp;&bull; Atender com presteza ao p&uacute;blico, prestando informa&ccedil;&otilde;es conforme a lei.<br>',
              '&nbsp;&bull; Levar ao conhecimento da autoridade superior irregularidade de que tiver ci&ecirc;ncia.<br>',
              '&nbsp;&bull; Zelar pela economia do material e conserva&ccedil;&atilde;o do patrim&ocirc;nio p&uacute;blico.<br>',
              '&nbsp;&bull; Guardar sigilo sobre assunto da reparti&ccedil;&atilde;o.<br>',
              '&nbsp;&bull; Manter conduta compat&iacute;vel com a moralidade administrativa.<br>',
              '&nbsp;&bull; Ser ass&iacute;duo e pontual.<br>',
              '&nbsp;&bull; Tratar com urbanidade as pessoas.<br>',
              '&nbsp;&bull; Representar contra ilegalidade, omiss&atilde;o ou abuso de poder.',
              '<strong>Proibi&ccedil;&otilde;es (art. 117):</strong>',
              '&nbsp;&bull; Ausentar-se do servi&ccedil;o durante o expediente sem autoriza&ccedil;&atilde;o.<br>',
              '&nbsp;&bull; Retirar, sem pr&eacute;via autoriza&ccedil;&atilde;o, documento ou objeto da reparti&ccedil;&atilde;o.<br>',
              '&nbsp;&bull; Recusar f&eacute; a documentos p&uacute;blicos.<br>',
              '&nbsp;&bull; Opor resist&ecirc;ncia injustificada ao andamento de documento, processo ou execu&ccedil;&atilde;o de servi&ccedil;o.<br>',
              '&nbsp;&bull; Promover manifesta&ccedil;&atilde;o de apre&ccedil;o ou desapre&ccedil;o no recinto da reparti&ccedil;&atilde;o.<br>',
              '&nbsp;&bull; Referir-se de modo depreciativo a autoridade ou servidor.<br>',
              '&nbsp;&bull; Cometer a pessoa estranha &agrave; reparti&ccedil;&atilde;o, fora dos casos previstos em lei, o desempenho de encargo.<br>',
              '&nbsp;&bull; Compor com administrador, ou contratar com ele, mesmo fora do exerc&iacute;cio do cargo.<br>',
              '&nbsp;&bull; Valer-se do cargo para obter proveito pessoal.<br>',
              '&nbsp;&bull; Participar de ger&ecirc;ncia ou administra&ccedil;&atilde;o de empresa privada.<br>',
              '&nbsp;&bull; Atuar como procurador ou intermedi&aacute;rio.<br>',
              '&nbsp;&bull; Aceitar comiss&atilde;o, emprego ou pens&atilde;o de Estado estrangeiro.<br>',
              '&nbsp;&bull; Praticar usura.<br>',
              '&nbsp;&bull; Proceder de forma desidiosa.<br>',
              '&nbsp;&bull; Cometer a outro servidor atribui&ccedil;&otilde;es estranhas ao cargo.<br>',
              '&nbsp;&bull; Exercer quaisquer atividades incompat&iacute;veis com o cargo ou a jornada.'
            ]
          },
          {
            h: '10. Responsabilidades do Servidor (Art. 121-126-A)',
            p: '<p>O servidor p&uacute;blico responde civil, penal e administrativamente pelo exerc&iacute;cio irregular de suas atribui&ccedil;&otilde;es.</p>',
            ul: [
              '<strong>Responsabilidade civil (art. 122):</strong> obriga&ccedil;&atilde;o de reparar dano causado a terceiro ou &agrave; Administra&ccedil;&atilde;o. A&ccedil;&atilde;o regressiva da Administra&ccedil;&atilde;o contra o servidor.',
              '<strong>Responsabilidade penal (art. 123):</strong> crimes funcionais (art. 312-326 CP) e crimes comuns. Aplica&ccedil;&atilde;o cumulativa das san&ccedil;&otilde;es.',
              '<strong>Responsabilidade administrativa (art. 124-126):</strong> san&ccedil;&otilde;es disciplinares (advert&ecirc;ncia, suspens&atilde;o, demiss&atilde;o).',
              '<strong>Independ&ecirc;ncia das inst&acirc;ncias (art. 125):</strong> as responsabilidades s&atilde;o <strong>independentes</strong>. A absolvi&ccedil;&atilde;o criminal n&atilde;o impede a&ccedil;&atilde;o administrativa, salvo se a senten&ccedil;a criminal negar a exist&ecirc;ncia do fato ou a autoria.',
              '<strong>Prescri&ccedil;&atilde;o (art. 142, I):</strong> 5 anos para a&ccedil;&atilde;o disciplinar punitiva. Decad&ecirc;ncia (art. 144): 2 anos para a Administra&ccedil;&atilde;o constituir a comiss&atilde;o.',
              '<strong>San&ccedil;&otilde;es disciplinares (art. 127):</strong> advert&ecirc;ncia, suspens&atilde;o, demiss&atilde;o, cassa&ccedil;&atilde;o de aposentadoria/disponibilidade, destitui&ccedil;&atilde;o de cargo em comiss&atilde;o.'
            ]
          },
          {
            h: '11. Penalidades Disciplinares Detalhadas',
            p: '<p>Art. 127 e seguintes da Lei 8.112/90.</p>',
            ul: [
              '<strong>Advert&ecirc;ncia (art. 129):</strong> para falta leve, aplicada por escrito. &Eacute; prescrit&aacute;vel ap&oacute;s 3 anos sem reincid&ecirc;ncia (Lei 9.527/97).',
              '<strong>Suspens&atilde;o (art. 130):</strong> at&eacute; 90 dias. Aplicada para faltas graves. Converter em multa de 50% da remunera&ccedil;&atilde;o por dia, se houver conveni&ecirc;ncia.',
              '<strong>Demiss&atilde;o (art. 132):</strong> faltas graves especificadas na lei. Hip&oacute;teses: crime contra a Administra&ccedil;&atilde;o, improbidade, insubordina&ccedil;&atilde;o, abandono, incontin&ecirc;ncia p&uacute;blica, jogo, aplica&ccedil;&atilde;o irregular de dinheiro p&uacute;blico, les&atilde;o aos cofres p&uacute;blicos.',
              '<strong>Cassa&ccedil;&atilde;o de aposentadoria (art. 134):</strong> para inativo que praticou falta pun&iacute;vel com demiss&atilde;o.',
              '<strong>Destitui&ccedil;&atilde;o de cargo em comiss&atilde;o (art. 135):</strong> para ocupante de cargo em comiss&atilde;o que praticou falta pun&iacute;vel com demiss&atilde;o.',
              '<strong>Destitui&ccedil;&atilde;o de fun&ccedil;&atilde;o de confian&ccedil;a:</strong> aplicada a quem ocupa fun&ccedil;&atilde;o gratificada.',
              '<strong>Efeitos da demiss&atilde;o (art. 137):</strong> inabilita&ccedil;&atilde;o para 5 anos para outro cargo p&uacute;blico, perda da aposentadoria (se houver), ressarcimento ao er&aacute;rio.',
              '<strong>Demiss&atilde;o de cargo efetivo incompat&iacute;vel (art. 132, &sect; &uacute;nico):</strong> aplica&ccedil;&atilde;o da pena de demiss&atilde;o a servidor em disponibilidade por falta pun&iacute;vel.'
            ]
          },
          {
            h: '12. Processo Administrativo Disciplinar (PAD) &mdash; Detalhamento',
            p: '<p>Apura&ccedil;&atilde;o de responsabilidade funcional de servidores. Fases detalhadas (art. 148-166):</p>',
            ul: [
              '<strong>1&ordf; fase: Instaura&ccedil;&atilde;o (art. 149):</strong>',
              '&nbsp;&bull; Portaria da autoridade competente (com poderes para aplicar a penalidade).<br>',
              '&nbsp;&bull; Indica&ccedil;&atilde;o dos fatos e fundamentos.<br>',
              '&nbsp;&bull; Nomea&ccedil;&atilde;o da comiss&atilde;o (3 servidores est&aacute;veis, sem v&iacute;nculo com o caso).',
              '<strong>2&ordf; fase: Inqu&eacute;rito (art. 150-156):</strong>',
              '&nbsp;&bull; <strong>Instru&ccedil;&atilde;o:</strong> produ&ccedil;&atilde;o de provas (testemunhal, documental, pericial).<br>',
              '&nbsp;&bull; <strong>Defesa escrita:</strong> 10 dias para o indiciado ap&oacute;s c&iacute;te.<br>',
              '&nbsp;&bull; <strong>Relat&oacute;rio:</strong> conclus&atilde;o da comiss&atilde;o, com recomenda&ccedil;&atilde;o.',
              '<strong>3&ordf; fase: Julgamento (art. 157-166):</strong>',
              '&nbsp;&bull; Prazo: 20 dias (prorrog&aacute;veis por mais 10).<br>',
              '&nbsp;&bull; Decis&atilde;o da autoridade competente (pode aceitar, reformar ou aplicar pena mais branda).<br>',
              '&nbsp;&bull; Decis&atilde;o motivada.',
              '<strong>Prazos (art. 152, &sect;1&ordm;):</strong>',
              '&nbsp;&bull; 60 dias para conclus&atilde;o do processo.<br>',
              '&nbsp;&bull; Prorroga&ccedil;&atilde;o: 60 dias, motivada.<br>',
              '&nbsp;&bull; Total m&aacute;ximo: 120 dias.',
              '<strong>Comiss&atilde;o (art. 149, &sect;2&ordm;):</strong>',
              '&nbsp;&bull; 3 servidores est&aacute;veis.<br>',
              '&nbsp;&bull; Presidente com cargo de n&iacute;vel igual ou superior ao do indiciado.<br>',
              '&nbsp;&bull; N&atilde;o podem integrar: c&ocirc;njuge, companheiro, parente consangu&iacute;neo ou afim at&eacute; 3&ordm; grau do indiciado.',
              '<strong>Afastamento preventivo (art. 147):</strong>',
              '&nbsp;&bull; Aplicado para evitar influ&ecirc;ncia na apura&ccedil;&atilde;o.<br>',
              '&nbsp;&bull; Prazo: at&eacute; 60 dias, prorrog&aacute;vel por mais 60.<br>',
              '&nbsp;&bull; Com ou sem remunera&ccedil;&atilde;o, conforme o caso.',
              '<strong>Sindic&acirc;ncia (art. 161-169):</strong>',
              '&nbsp;&bull; <strong>Sum&aacute;ria:</strong> para casos de aplica&ccedil;&atilde;o de advert&ecirc;ncia ou suspens&atilde;o at&eacute; 30 dias. Prazo: 30 dias.<br>',
              '&nbsp;&bull; <strong>Irregularidades funcionais:</strong> para apurar a materialidade dos fatos.<br>',
              '&nbsp;&bull; <strong>Acad&ecirc;mica:</strong> para investiga&ccedil;&atilde;o pr&eacute;via. Prazo: 30 dias.<br>',
              '&nbsp;&bull; <strong>Punitiva (contradit&oacute;ria):</strong> para apura&ccedil;&atilde;o com ampla defesa. Rito do PAD.'
            ]
          },
          {
            h: '13. Seguran&ccedil;a do Servidor &mdash; Regime de Previd&ecirc;ncia',
            p: '<p>Lei 8.112/90 trata de v&aacute;rios benef&iacute;cios previdenci&aacute;rios e assistenciais ao servidor.</p>',
            ul: [
              '<strong>Aposentadoria:</strong> regime pr&oacute;prio (RPPS) ou RGPS, conforme o caso (servidor efetivo ou comissionado).',
              '<strong>Pens&atilde;o por morte:</strong> 50% + 10% por dependente, vital&iacute;cia ou tempor&aacute;ria.',
              '<strong>Aux&iacute;lio-funeral:</strong> indeniza&ccedil;&atilde;o por despesas de funeral.',
              '<strong>Aux&iacute;lio-natalidade:</strong> indeniza&ccedil;&atilde;o por nascimento de filho.',
              '<strong>Sal&aacute;rio-fam&iacute;lia:</strong> para dependentes at&eacute; 14 anos.',
              '<strong>Licen&ccedil;a para tratamento de sa&uacute;de:</strong> 24 meses (prorrog&aacute;vel).',
              '<strong>Licen&ccedil;a por motivo de doen&ccedil;a em pessoa da fam&iacute;lia:</strong> 60 dias (remunerada) + 90 (sem).',
              '<strong>Licen&ccedil;a &agrave; gestante:</strong> 120 dias. Adotante: prazos por idade da crian&ccedil;a.',
              '<strong>Licen&ccedil;a-paternidade:</strong> 5 dias (regra geral).',
              '<strong>Licen&ccedil;a para capacita&ccedil;&atilde;o:</strong> 3 meses a cada 5 anos.',
              '<strong>Licen&ccedil;a para tratar de interesses particulares:</strong> at&eacute; 3 anos, sem remunera&ccedil;&atilde;o.',
              '<strong>Afastamento para miss&atilde;o no exterior:</strong> com perda total da remunera&ccedil;&atilde;o (Lei 9.527/97).',
              '<strong>Afastamento para estudo no exterior:</strong> com perda total da remunera&ccedil;&atilde;o.',
              '<strong>Exerc&iacute;cio de mandato eletivo:</strong> com afastamento do cargo (sem &eacute;poca de mandato).',
              '<strong>Afastamento para servir em organismo internacional:</strong> com perda total.',
              '<strong>Afastamento para desempenho de mandato classista:</strong> mandato classista em associa&ccedil;&atilde;o representativa de classe.'
            ]
          },
          {
            h: '14. Vencimento, Remunera&ccedil;&atilde;o e Vantagens',
            p: '<p>Sistema remunerat&oacute;rio (art. 40-50, Lei 8.112/90):</p>',
            ul: [
              '<strong>Vencimento (art. 40):</strong> retribui&ccedil;&atilde;o pecuni&aacute;ria pelo exerc&iacute;cio de cargo p&uacute;blico. N&atilde;o pode ser inferior ao sal&aacute;rio-m&iacute;nimo nem superior ao teto.',
              '<strong>Remunera&ccedil;&atilde;o (art. 41):</strong> vencimento + vantagens pecuni&aacute;rias (adicionais, gratifica&ccedil;&otilde;es).',
              '<strong>Irredutibilidade (art. 37, XV, CF):</strong> garantia constitucional.',
              '<strong>Teto remunerat&oacute;rio (art. 37, XI, CF):</strong> subs&iacute;dio do Ministro do STF (R$ 41.650,92 em 2026).',
              '<strong>Vantagens (art. 61-91):</strong> adicionais, gratifica&ccedil;&otilde;es, indeniza&ccedil;&otilde;es.',
              '<strong>Indeniza&ccedil;&otilde;es (art. 51):</strong> ajuda de custo, di&aacute;rias, transporte, aux&iacute;lio-moradia.',
              '<strong>Ajuda de custo (art. 53-57):</strong> para deslocamento a servi&ccedil;o, com mudan&ccedil;a de sede.',
              '<strong>Di&aacute;rias (art. 58):</strong> 50% do valor integral em caso de meno de 50% de afastamento. Cobre alimenta&ccedil;&atilde;o, hospedagem, transporte.',
              '<strong>Adicional por tempo de servi&ccedil;o (anu&eacute;nio):</strong> extinto pela Lei 9.527/97 (mantido o direito adquirido).',
              '<strong>Adicional de qualifica&ccedil;&atilde;o (art. 41, &sect;1&ordm;):</strong> 5% (ensino m&eacute;dio) ou 10% (ensino superior) sobre o vencimento, para servidores com pr&eacute;-requisito al&eacute;m do exigido.',
              '<strong>Adicional de insalubridade, periculosidade, atividade penosa (art. 68-72):</strong> 5%, 10% e 20% sobre o vencimento.',
              '<strong>Adicional de servi&ccedil;o extraordin&aacute;rio (hora extra, art. 73-75):</strong> 50% diurno, 100% noturno, s&aacute;bado/domingo/feriado.',
              '<strong>Adicional noturno (art. 75):</strong> 25% sobre o valor da hora diurna. Prorroga&ccedil;&atilde;o em feriado ou repouso.',
              '<strong>Adicional de f&eacute;rias (art. 76-78):</strong> 1/3 constitucional.',
              '<strong>Gratifica&ccedil;&atilde;o (art. 79-80):</strong> por fun&ccedil;&atilde;o, cargo, natalidade, jubila&iacedil;&atilde;o.',
              '<strong>Indeniza&ccedil;&atilde;o (art. 51, 49):</strong> aux&iacute;lio-moradia, f&eacute;rias, ajuda de custo.',
              '<strong>13&ordm; sal&aacute;rio (Lei 4.090/62):</strong> obrigat&oacute;rio para servidor p&uacute;blico. Pago em duas parcelas (novembro e dezembro).'
            ]
          },
          {
            h: '15. Seguran&ccedil;a Jur&iacute;dica do Servidor &mdash; Garantias',
            p: '<p>Direitos e garantias do servidor p&uacute;blico federal (art. 3&ordm; a 41, Lei 8.112/90):</p>',
            ul: [
              '<strong>Estabilidade (art. 41, CF):</strong> ap&oacute;s 3 anos de efetivo exerc&iacute;cio. Perda do cargo est&aacute;vel apenas por senten&ccedil;a judicial transitada em julgado, processo administrativo (com ampla defesa) ou avalia&ccedil;&atilde;o de desempenho insatisfat&oacute;ria (LC 173/21 e 191/22).',
              '<strong>Disponibilidade (art. 30):</strong> o servidor est&aacute;vel pode ser posto em disponibilidade com remunera&ccedil;&atilde;o proporcional, quando o cargo &eacute; extinto ou declarado desnecess&aacute;rio.',
              '<strong>Aproveitamento (art. 32):</strong> retorno do servidor em disponibilidade a cargo compat&iacute;vel. Prazo: 12 meses.',
              '<strong>Reintegra&ccedil;&atilde;o (art. 28):</strong> reinvestidura do servidor no cargo por decis&atilde;o judicial. Indeniza&ccedil;&atilde;o ao anterior.',
              '<strong>Recondu&ccedil;&atilde;o (art. 29):</strong> retorno ao cargo anterior em raz&atilde;o de inabilita&ccedil;&atilde;o em est&aacute;gio probat&oacute;rio em outro cargo ou reintegra&ccedil;&atilde;o do anterior.',
              '<strong>Revers&atilde;o (art. 27):</strong> retorno do aposentado por invalidez, se a junta m&eacute;dica declara insubsistente o motivo.',
              '<strong>Readapta&ccedil;&atilde;o (art. 24):</strong> aproveitamento em cargo compat&iacute;vel com limita&ccedil;&atilde;o f&iacute;sica ou mental. Sem diminui&ccedil;&atilde;o de vencimento.',
              '<strong>Direito a remo&ccedil;&atilde;o (art. 36):</strong> a pedido ou de of&iacute;cio, para compatibilizar o exerc&iacute;cio do cargo com o interesse p&uacute;blico.',
              '<strong>Direito de peti&ccedil;&atilde;o (art. 104-115):</strong> requerimento, representa&ccedil;&atilde;o, recurso, pedido de reconsidera&ccedil;&atilde;o.',
              '<strong>Prescri&ccedil;&atilde;o (art. 142):</strong> 5 anos para a&ccedil;&otilde;es disciplinares punitivas da Administra&ccedil;&atilde;o.',
              '<strong>Decad&ecirc;ncia (art. 144):</strong> 2 anos para a Administra&ccedil;&atilde;o constituir a comiss&atilde;o (PAD).'
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
              'San&ccedil;&otilde;es: multa (0,1% a 20% do faturamento bruto), publica&ccedil;&atilde;o extraordin&aacute;ria da decis&atilde;o, etc.'
            ]
          },
          {
            h: '7. Decreto 1.171/94 &mdash; C&oacute;digo de &Eacute;tica &mdash; Detalhamento',
            p: '<p>O C&oacute;digo de &Eacute;tica Profissional do Servidor P&uacute;blico Civil do Poder Executivo Federal foi institu&iacute;do pelo Decreto 1.171/94. Estabelece princ&iacute;pios, deveres e vedações.</p>',
            ul: [
              '<strong>Princ&iacute;pios (art. 1&ordm;):</strong>',
              '&nbsp;&bull; Legalidade, impessoalidade, moralidade, publicidade, efici&ecirc;ncia (LIMPE)<br>',
              '&nbsp;&bull; Honestidade, decoro, lealdade, dignidade, cortesia, transpar&ecirc;ncia<br>',
              '&nbsp;&bull; Respeito &agrave; vida privada e &agrave; dignidade da pessoa humana',
              '<strong>Deveres (art. 3&ordm;):</strong>',
              '&nbsp;&bull; Desempenhar com zelo, dedica&ccedil;&atilde;o e presteza as atribui&ccedil;&otilde;es<br>',
              '&nbsp;&bull; Conhecer as normas que regem o servi&ccedil;o<br>',
              '&nbsp;&bull; Zelar pela economia do material e patrim&ocirc;nio p&uacute;blico<br>',
              '&nbsp;&bull; Atender com presteza o p&uacute;blico<br>',
              '&nbsp;&bull; Levar ao conhecimento da autoridade superior irregularidade<br>',
              '&nbsp;&bull; Exercer suas fun&ccedil;&otilde;es com retid&atilde;o, decoro e honestidade',
              '<strong>Vedações (art. 4&ordm;):</strong>',
              '&nbsp;&bull; Usar o cargo para obter proveito pessoal<br>',
              '&nbsp;&bull; Utilizar informa&ccedil;&otilde;es privilegiadas<br>',
              '&nbsp;&bull; Aceitar presentes, comiss&otilde;es ou vantagens de qualquer esp&eacute;cie<br>',
              '&nbsp;&bull; Manifestar opini&atilde;o depreciativa sobre colega, autoridade ou institui&ccedil;&atilde;o<br>',
              '&nbsp;&bull; Atuar em benef&iacute;cio pr&oacute;prio ou de terceiros em processos<br>',
              '&nbsp;&bull; Fazer declara&ccedil;&otilde;es p&uacute;blicas prejudiciais ao Servi&ccedil;o P&uacute;blico<br>',
              '&nbsp;&bull; Prejudicar deliberadamente a reputa&ccedil;&atilde;o de colega',
              '<strong>Penalidades (art. 10-12):</strong>',
              '&nbsp;&bull; Advert&ecirc;ncia (faltas leves)<br>',
              '&nbsp;&bull; Censura (faltas m&eacute;dias)<br>',
              '&nbsp;&bull; Multa de at&eacute; 50% da remunera&ccedil;&atilde;o (faltas graves)',
              '<strong>Comiss&otilde;es de &Eacute;tica (art. 9&ordm;-15):</strong>',
              '&nbsp;&bull; Car&aacute;ter educativo, n&atilde;o punitivo<br>',
              '&nbsp;&bull; 3 membros titulares e 3 suplentes<br>',
              '&nbsp;&bull; Mandato de 3 anos, renov&aacute;vel<br>',
              '&nbsp;&bull; Sede em Bras&iacute;lia para a Comiss&atilde;o de &Eacute;tica P&uacute;blica (CEP)',
              '<strong>C&oacute;digo de Conduta do Servidor (Decreto 6.029/07):</strong>',
              '&nbsp;&bull; Regulamenta o funcionamento da CEP<br>',
              '&nbsp;&bull; Sistematiza as comiss&otilde;es de &eacute;tica em cada &oacute;rg&atilde;o',
              '<strong>Crit&eacute;rios para avalia&ccedil;&atilde;o &eacute;tica (art. 8&ordm;):</strong> honestidade, decoro, urbanidade, lealdade, efici&ecirc;ncia, transpar&ecirc;ncia.'
            ]
          },
          {
            h: '8. Ass&eacute;dio Moral e Sexual no Servi&ccedil;o P&uacute;blico',
            p: '<p>Tem&aacute;ticas relevantes para o servidor p&uacute;blico.</p>',
            ul: [
              '<strong>Ass&eacute;dio moral (Lei 5.352/19, no Estado; sem lei federal espec&iacute;fica):</strong>',
              '&nbsp;&bull; Exposição de servidor a situa&ccedil;&otilde;es humilhantes e constrangedoras, repetitivas e prolongadas.<br>',
              '&nbsp;&bull; Caracterizado por: agress&atilde;o verbal, isolamento, subestima&ccedil;&atilde;o, sobrecarga, des&iacute;qualifica&ccedil;&atilde;o.<br>',
              '&nbsp;&bull; Consequ&ecirc;ncias: doen&ccedil;as, depress&atilde;o, absente&iacute;smo, pedido de demiss&atilde;o.<br>',
              '&nbsp;&bull; Responsabilidade: administrativa (sanção disciplinar), civil (indeniza&ccedil;&atilde;o) e penal (crimes).',
              '<strong>Ass&eacute;dio sexual (CP, art. 216-A):</strong>',
              '&nbsp;&bull; Constranger algu&eacute;m com o intuito de obter vantagem ou favorecimento sexual.<br>',
              '&nbsp;&bull; Pena: deten&ccedil;&atilde;o de 1 a 2 anos.<br>',
              '&nbsp;&bull; Forma qualificada: se o ato &eacute; praticado por superior hier&aacute;rquico (aumento de pena).<br>',
              '&nbsp;&bull; A&ccedil;&atilde;o penal: p&uacute;blica condicionada &agrave; representa&ccedil;&atilde;o.',
              '<strong>Consequ&ecirc;ncias disciplinares:</strong> o ass&eacute;dio configura falta funcional grave, podendo levar &agrave; demiss&atilde;o.',
              '<strong>Preven&ccedil;&atilde;o:</strong> c&oacute;digos de conduta, comit&ecirc;s de &eacute;tica, canais de den&uacute;ncia, ouvidoria.'
            ]
          },
          {
            h: '9. Lei 12.527/11 &mdash; Acesso &agrave; Informa&ccedil;&atilde;o &mdash; Detalhamento',
            p: '<p>Lei de Acesso &agrave; Informa&ccedil;&atilde;o (LAI) regulamenta o art. 5&ordm;, XXXIII da CF/88.</p>',
            ul: [
              '<strong>Princ&iacute;pios (art. 3&ordm;):</strong> publicidade &eacute; regra, sigilo &eacute; exce&ccedil;&atilde;o. Transpar&ecirc;ncia ativa e passiva.',
              '<strong>Transpar&ecirc;ncia ativa (art. 8&ordm;):</strong> &oacute;rg&atilde;os p&uacute;blicos devem divulgar informa&ccedil;&otilde;es de interesse coletivo, independente de solicita&ccedil;&atilde;o. P&aacute;gina institucional.',
              '<strong>Transpar&ecirc;ncia passiva (art. 10):</strong> direito de qualquer pessoa de solicitar informa&ccedil;&otilde;es. N&atilde;o h&aacute; necessidade de justificativa.',
              '<strong>Prazo de resposta (art. 11):</strong>',
              '&nbsp;&bull; 20 dias corridos para resposta.<br>',
              '&nbsp;&bull; Prorroga&ccedil;&atilde;o por 10 dias, com justifica&ccedil;&atilde;o.',
              '<strong>Grau de sigilo (art. 24):</strong>',
              '&nbsp;&bull; <strong>Reservada:</strong> 5 anos.<br>',
              '&nbsp;&bull; <strong>Secreta:</strong> 15 anos.<br>',
              '&nbsp;&bull; <strong>Ultrassecreta:</strong> 25 anos.<br>',
              '&nbsp;&bull; Ap&oacute;s o prazo, a classifica&ccedil;&atilde;o decai (pode ser prorrogada).',
              '<strong>Autoridade classificadora:</strong> autoridade m&aacute;xima do &oacute;rg&atilde;o, no &acirc;mbito do Executivo Federal.',
              '<strong>Indisponibilidade do pedido (art. 13):</strong> somente se a informa&ccedil;&atilde;o for sigilosa ou inexistente.',
              '<strong>Pedido de desclassifica&ccedil;&atilde;o (art. 33):</strong> dirigido &agrave; autoridade que classificou, com recurso &agrave; CMRI (Comiss&atilde;o Mista de Reavalia&ccedil;&atilde;o de Informa&ccedil;&otilde;es).',
              '<strong>Pedido de acesso a informa&ccedil;&atilde;o pessoal (art. 31):</strong> restrito ao titular, com prazo de sigilo de 100 anos.',
              '<strong>Monitoramento:</strong> CGU fiscaliza a aplica&ccedil;&atilde;o da LAI. CNJ e CNMP t&ecirc;m compet&ecirc;ncia.',
              '<strong>San&ccedil;&otilde;es (art. 32):</strong> administrativas (advert&ecirc;ncia a demiss&atilde;o) e responsabilidade civil e penal.'
            ]
          },
          {
            h: '10. Lei 12.813/13 &mdash; Conflito de Interesses &mdash; Detalhamento',
            p: '<p>Lei do Conflito de Interesses (LC 12.813/13). Aplica-se a servidores do Poder Executivo federal.</p>',
            ul: [
              '<strong>Defini&ccedil;&atilde;o (art. 3&ordm;):</strong> situa&ccedil;&atilde;o na qual o agente p&uacute;blico tem interesse privado que pode influenciar ou parecer influenciar o desempenho imparcial de suas fun&ccedil;&otilde;es.',
              '<strong>Vedações (art. 5&ordm;):</strong>',
              '&nbsp;&bull; Atuar em processo em que tenha interesse privado.<br>',
              '&nbsp;&bull; Prestar consultoria a empresa que tenha interesse em decis&atilde;o do agente.<br>',
              '&nbsp;&bull; Aceitar presentes de quem tenha interesse em decis&atilde;o do agente.<br>',
              '&nbsp;&bull; Manter rela&ccedil;&atilde;o de neg&oacute;cio com pessoa f&iacute;sica ou jur&iacute;dica que tenha interesse em decis&atilde;o.<br>',
              '&nbsp;&bull; Prestar servi&ccedil;o ou manter v&iacute;nculo de qualquer natureza com empresa cuja atividade seja controlada, fiscalizada ou regulada pelo ente ao qual est&aacute; vinculado.<br>',
              '&nbsp;&bull; Exercer cargo, emprego ou fun&ccedil;&atilde;o em sociedade ou organiza&ccedil;&atilde;o que tenha relacionamento com a Administra&ccedil;&atilde;o.',
              '<strong>Situações que configuram conflito potencial (art. 6&ordm;):</strong> qualquer ato ou fato que possa vir a configurar conflito em momento futuro pr&oacute;ximo.',
              '<strong>Pedido de consulta (art. 10):</strong> o servidor pode consultar a Comiss&atilde;o de &Eacute;tica P&uacute;blica sobre situa&ccedil;&otilde;es concretas.',
              '<strong>San&ccedil;&otilde;es (art. 12):</strong> demiss&atilde;o ou medida equivalente, ap&oacute;s PAD ou CP.',
              '<strong>Exce&ccedil;&otilde;es (art. 8&ordm;):</strong> exerc&iacute;cio de atividades com autoriza&ccedil;&atilde;o pr&eacute;via da CEP, em hip&oacute;teses de acumula&ccedil;&atilde;o l&iacute;cita de cargos (art. 37, XVI, CF).'
            ]
          },
          {
            h: '11. Responsabiliza&ccedil;&atilde;o dos Agentes P&uacute;blicos',
            p: '<p>Os servidores p&uacute;blicos respondem por suas a&ccedil;&otilde;es/omiss&otilde;es em v&aacute;rias esferas.</p>',
            ul: [
              '<strong>Responsabilidade civil:</strong> indeniza&ccedil;&atilde;o por danos. A Administra&ccedil;&atilde;o tem a&ccedil;&atilde;o regressiva.',
              '<strong>Responsabilidade penal:</strong> crimes funcionais (CP, arts. 312-326) e crimes comuns.',
              '<strong>Responsabilidade administrativa:</strong> apurada em PAD. Independ&ecirc;ncia das inst&acirc;ncias.',
              '<strong>Improbidade administrativa (Lei 8.429/92, com Lei 14.230/21):</strong> 3 modalidades, todas com dolo.',
              '<strong>Lei Anticorrup&ccedil;&atilde;o (Lei 12.846/13):</strong> responsabiliza&ccedil;&atilde;o objetiva da pessoa jur&iacute;dica.',
              '<strong>Crimes do CP (art. 312-326):</strong> peculato, concuss&atilde;o, corrup&ccedil;&atilde;o passiva, prevarica&ccedil;&atilde;o, viola&ccedil;&atilde;o de sigilo funcional, advocacia administrativa.',
              '<strong>Peculato (art. 312):</strong> apropriar-se de dinheiro, valor ou bem p&uacute;blico. Pena: reclus&atilde;o 2-12 anos, multa.',
              '<strong>Concuss&atilde;o (art. 316):</strong> exigir, para si ou para outrem, direta ou indiretamente, vantagem indevida. Pena: reclus&atilde;o 2-8 anos, multa.',
              '<strong>Corrup&ccedil;&atilde;o passiva (art. 317):</strong> solicitar ou receber vantagem indevida. Pena: reclus&atilde;o 2-12 anos, multa.',
              '<strong>Prevarica&ccedil;&atilde;o (art. 319):</strong> retardar ou deixar de praticar ato de of&iacute;cio com inten&ccedil;&atilde;o de satisfazer interesse pessoal. Pena: deten&ccedil;&atilde;o 3 meses-1 ano, multa.',
              '<strong>Acumulação de penalidades (Lei 8.112/90, art. 125):</strong> as inst&acirc;ncias s&atilde;o independentes. A absolvi&ccedil;&atilde;o criminal n&atilde;o afasta a administrativa, salvo quando negar o fato ou autoria.'
            ]
          },
          {
            h: '12. Lei Geral de Prote&ccedil;&atilde;o de Dados (LGPD) Aplicada ao Setor P&uacute;blico',
            p: '<p>Lei 13.709/2018. Aplic&aacute;vel ao INSS, dada a natureza dos dados tratados (sa&uacute;de, previdenci&aacute;rios, biom&eacute;tricos).</p>',
            ul: [
              '<strong>Aplica&ccedil;&atilde;o (art. 1&ordm;):</strong> tratamento de dados pessoais por pessoa f&iacute;sica ou jur&iacute;dica, p&uacute;blica ou privada, no Brasil.',
              '<strong>Princ&iacute;pios (art. 6&ordm;):</strong> finalidade, adequa&ccedil;&atilde;o, necessidade, livre acesso, qualidade dos dados, transpar&ecirc;ncia, seguran&ccedil;a, preven&ccedil;&atilde;o, n&atilde;o discrimina&ccedil;&atilde;o, responsabiliza&ccedil;&atilde;o.',
              '<strong>10 hip&oacute;teses de tratamento (art. 7&ordm;):</strong> consentimento, cumprimento de obriga&ccedil;&atilde;o legal/regulat&oacute;ria, pol&iacute;tica p&uacute;blica, interesse p&uacute;blico, seguran&ccedil;a p&uacute;blica, tutela da sa&uacute;de, exerc&iacute;cio regular de direitos em processo, legitima&ccedil;&atilde;o de contratos, prote&ccedil;&atilde;o do cr&eacute;dito, preven&ccedil;&atilde;o &agrave; fraude &agrave; seguran&ccedil;a do titular.',
              '<strong>Dados sens&iacute;veis (art. 5&ordm;, II):</strong> origem racial/&eacute;tnica, convic&ccedil;&atilde;o religiosa, opini&atilde;o pol&iacute;tica, dados sobre sa&uacute;de, dados biom&eacute;tricos, gen&eacute;ticos, vida sexual. Bases legais espec&iacute;ficas (art. 11).',
              '<strong>Direitos do titular (art. 18):</strong> confirma&ccedil;&atilde;o da exist&ecirc;ncia, acesso, corre&ccedil;&atilde;o, anonimiza&ccedil;&atilde;o, portabilidade, elimina&ccedil;&atilde;o, informa&ccedil;&atilde;o sobre compartilhamento.',
              '<strong>ANPD (Autoridade Nacional):</strong> &oacute;rg&atilde;o fiscalizador. Sancionat&oacute;ria: advert&ecirc;ncia, multa (at&eacute; 2% do faturamento), bloqueio, elimina&ccedil;&atilde;o, etc.',
              '<strong>Encarregado de dados (DPO):</strong> designa&ccedil;&atilde;o obrigat&oacute;ria em todos os &oacute;rg&atilde;os p&uacute;blicos.',
              '<strong>Incidente de seguran&ccedil;a (art. 48):</strong> comunica&ccedil;&atilde;o &agrave; ANPD e aos titulares em prazo razo&aacute;vel.'
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
          },
          {
            h: '8. Excel Avan&ccedil;ado &mdash; F&oacute;rmulas e Fun&ccedil;&otilde;es Detalhadas',
            p: '<p>O Excel &eacute; o software mais cobrado em provas de inform&aacute;tica para concursos. Domine as fun&ccedil;&otilde;es:</p>',
            ul: [
              '<strong>Fun&ccedil;&otilde;es Matem&aacute;ticas e Estat&iacute;sticas:</strong>',
              '&nbsp;&bull; =SOMA(intervalo): soma valores<br>',
              '&nbsp;&bull; =M&Eacute;DIA(intervalo): m&eacute;dia aritm&eacute;tica<br>',
              '&nbsp;&bull; =M&Aacute;XIMO(intervalo): maior valor<br>',
              '&nbsp;&bull; =M&Iacute;NIMO(intervalo): menor valor<br>',
              '&nbsp;&bull; =CONTAGEM(intervalo): conta c&eacute;lulas com n&uacute;meros<br>',
              '&nbsp;&bull; =CONT.VALORES(intervalo): conta c&eacute;lulas n&atilde;o vazias<br>',
              '&nbsp;&bull; =CONT.SE(intervalo; crit&eacute;rio): conta c&eacute;lulas que atendem condi&ccedil;&atilde;o<br>',
              '&nbsp;&bull; =SOMASE(intervalo_soma; crit&eacute;rio): soma valores que atendem condi&ccedil;&atilde;o<br>',
              '&nbsp;&bull; =CONT.SES(intervalo1; crit&eacute;rio1; intervalo2; crit&eacute;rio2...)<br>',
              '&nbsp;&bull; =SOMASES(intervalo_soma; intervalo1; crit&eacute;rio1...)',
              '<strong>Fun&ccedil;&otilde;es L&oacute;gicas:</strong>',
              '&nbsp;&bull; =SE(condi&ccedil;&atilde;o; valor_se_verdadeiro; valor_se_falso): condicional b&aacute;sica<br>',
              '&nbsp;&bull; =E(condi&ccedil;&atilde;o1; condi&ccedil;&atilde;o2): verdadeiro se todas verdadeiras<br>',
              '&nbsp;&bull; =OU(condi&ccedil;&atilde;o1; condi&ccedil;&atilde;o2): verdadeiro se pelo menos uma<br>',
              '&nbsp;&bull; =N&Atilde;O(condi&ccedil;&atilde;o): inverte<br>',
              '&nbsp;&bull; =SEERRO(f&oacute;rmula; valor_se_erro): trata erros',
              '<strong>Fun&ccedil;&otilde;es de Procura:</strong>',
              '&nbsp;&bull; =PROCV(valor; matriz; coluna; 0): busca vertical (correspond&ecirc;ncia exata)<br>',
              '&nbsp;&bull; =PROCH(valor; matriz; linha; 0): busca horizontal<br>',
              '&nbsp;&bull; =PROCX(): substitui PROCV e PROCH (Office 365)<br>',
              '&nbsp;&bull; =蚽DICE(matriz; linha; coluna): retorna valor pelo &iacute;ndice<br>',
              '&nbsp;&bull; =CORRESP(valor; matriz; 0): posi&ccedil;&atilde;o do valor',
              '<strong>Fun&ccedil;&otilde;es de Texto:</strong>',
              '&nbsp;&bull; =ESQUERDA(texto; n&uacute;mero): primeiros n caracteres<br>',
              '&nbsp;&bull; =DIREITA(texto; n&uacute;mero): &uacute;ltimos n caracteres<br>',
              '&nbsp;&bull; =EXT.TEXTO(texto; in&iacute;cio; n&uacute;mero): caracteres do meio<br>',
              '&nbsp;&bull; =MAI&Uacute;SCULA(texto) / MIN&Uacute;SCULA(texto) / PRI.MAI&Uacute;SCULA(texto)<br>',
              '&nbsp;&bull; =CONCATENAR(texto1; texto2) ou =texto1&amp;texto2<br>',
              '&nbsp;&bull; =N&Uacute;M.CARACT(texto): n&uacute;mero de caracteres<br>',
              '&nbsp;&bull; =TIRAR(texto): remove espa&ccedil;os extras',
              '<strong>Fun&ccedil;&otilde;es de Data e Hora:</strong>',
              '&nbsp;&bull; =HOJE(): data atual<br>',
              '&nbsp;&bull; =AGORA(): data e hora atual<br>',
              '&nbsp;&bull; =DIAS(data_final; data_inicial)<br>',
              '&nbsp;&bull; =DIA(data), =M&Ecirc;S(data), =ANO(data)<br>',
              '&nbsp;&bull; =DIATRABALHO(in&iacute;cio; dias): dias &uacute;teis<br>',
              '&nbsp;&bull; =DIFDATA() / =DATADIF() (vers&otilde;es antigas)',
              '<strong>Refer&ecirc;ncia absoluta vs relativa:</strong>',
              '&nbsp;&bull; =A1 (relativa): muda ao copiar<br>',
              '&nbsp;&bull; =$A$1 (absoluta): fixa c&eacute;lula<br>',
              '&nbsp;&bull; =A$1 (mista): fixa linha<br>',
              '&nbsp;&bull; =$A1 (mista): fixa coluna',
              '<strong>Formata&ccedil;&atilde;o condicional:</strong> real&ccedil;a c&eacute;lulas conforme condi&ccedil;&otilde;es (maior/menor que, texto, escala de cor, &iacute;cones, barras de dados).',
              '<strong>Tabela din&acirc;mica:</strong> resumo de dados grandes. Inserir &gt; Tabela Din&acirc;mica. Linhas, colunas, valores, filtros.',
              '<strong>Gr&aacute;ficos:</strong> coluna, barra, linha, pizza, dispers&atilde;o, &aacute;rea, radar. Inserir &gt; Gr&aacute;ficos.',
              '<strong>Valida&ccedil;&atilde;o de dados:</strong> restri&ccedil;&atilde;o de entrada. Lista, n&uacute;mero, data, texto.',
              '<strong>Filtros e classifica&ccedil;&atilde;o:</strong> filtrar dados, classificar A-Z, Z-A, por cor.',
              '<strong>Subtotal:</strong> calcular subtotais em dados agrupados.'
            ]
          },
          {
            h: '9. Microsoft Word Avan&ccedil;ado &mdash; Recursos e Formata&ccedil;&atilde;o',
            p: '<p>Processador de texto. Recursos essenciais para concursos.</p>',
            ul: [
              '<strong>Formata&ccedil;&atilde;o de texto:</strong> fonte (tipo, tamanho, cor, negrito, it&aacute;lico, sublinhado), par&aacute;grafo (alinhamento, recuo, espa&ccedil;amento).',
              '<strong>Estilos:</strong> Normal, T&iacute;tulo 1-3, etc. Permite formata&ccedil;&atilde;o consistente.',
              '<strong>Listas:</strong> numeradas, com marcadores, multin&iacute;vel. Recuo.',
              '<strong>Tabelas:</strong> Inserir &gt; Tabela. Linhas, colunas, c&eacute;lulas. Mesclar, dividir, classificar, f&oacute;rmulas em tabelas.',
              '<strong>Imagens e formas:</strong> Inserir &gt; Imagens/Formas. Dimensionamento, disposi&ccedil;&atilde;o.',
              '<strong>Cabe&ccedil;alho e rodap&eacute;:</strong> Inserir &gt; Cabe&ccedil;alho/Rodap&eacute;. Numera&ccedil;&atilde;o de p&aacute;gina, data, hora, texto.',
              '<strong>Quebras:</strong> de p&aacute;gina (Ctrl+Enter), de se&ccedil;&atilde;o, de linha.',
              '<strong>Localizar e substituir:</strong> Ctrl+L / Ctrl+U. Suporta curingas (^p = par&aacute;grafo, ^t = tabula&ccedil;&atilde;o).',
              '<strong>Controle de altera&ccedil;&otilde;es:</strong> Revisar &gt; Controle de Altera&ccedil;&otilde;es. Aceitar/rejeitar.',
              '<strong>Coment&aacute;rios:</strong> Revisar &gt; Novo Coment&aacute;rio. Margem lateral.',
              '<strong>Sum&aacute;rio autom&aacute;tico:</strong> Refer&ecirc;ncias &gt; Sum&aacute;rio. Baseado em estilos de t&iacute;tulo.',
              '<strong>Notas de rodap&eacute; e de fim:</strong> Refer&ecirc;ncias &gt; Inserir Nota de Rodap&eacute;. Numera&ccedil;&atilde;o autom&aacute;tica.',
              '<strong>Margens, tamanho do papel, orienta&ccedil;&atilde;o:</strong> Layout &gt; Configurar P&aacute;gina.',
              '<strong>Colunas:</strong> Layout &gt; Colunas. 1, 2, 3 colunas.',
              '<strong>Hifeniza&ccedil;&atilde;o:</strong> Layout &gt; Hifeniza&ccedil;&atilde;o. Hifeniza&ccedil;&atilde;o autom&aacute;tica.',
              '<strong>Modelos:</strong> Arquivo &gt; Novo. Modelos predefinidos.',
              '<strong>Atalhos &uacute;teis:</strong> Ctrl+B (negrito), Ctrl+I (it&aacute;lico), Ctrl+U (sublinhado), Ctrl+S (salvar), Ctrl+A (selecionar tudo), Ctrl+Z (desfazer), Ctrl+Y (refazer), Ctrl+C/V/X (copiar/colar/cortar), Ctrl+Home/End (in&iacute;cio/fim do documento).',
              '<strong>PDF:</strong> Arquivo &gt; Salvar como &gt; PDF.'
            ]
          },
          {
            h: '10. Microsoft PowerPoint &mdash; Apresenta&ccedil;&otilde;es',
            p: '<p>Software de apresenta&ccedil;&atilde;o de slides.</p>',
            ul: [
              '<strong>Slides:</strong> Inserir &gt; Novo Slide. Layouts pr&eacute;-definidos.',
              '<strong>Temas:</strong> Design &gt; Temas. Cores, fontes, efeitos.',
              '<strong>Anima&ccedil;&otilde;es:</strong> Anima&ccedil;&otilde;es &gt; Adicionar Anima&ccedil;&atilde;o. Entrada, &ecirc;nfase, sa&iacute;da, trajet&oacute;ria.',
              '<strong>Transi&ccedil;&otilde;es:</strong> Transi&ccedil;&otilde;es &gt; Efeitos. Entre slides.',
              '<strong>Modo de apresenta&ccedil;&atilde;o:</strong> Apresenta&ccedil;&atilde;o &gt; Apresentar. F5 (in&iacute;cio) / Shift+F5 (do atual).',
              '<strong>Modo de apresenta&ccedil;&atilde;o do apresentador:</strong> mostra slide atual, pr&oacute;ximo, anota&ccedil;&otilde;es do apresentador, timer.',
              '<strong>Slide mestre:</strong> Exibi&ccedil;&atilde;o &gt; Slide Mestre. Define layout padr&atilde;o (cabe&ccedil;alho, rodap&eacute;, logotipo).',
              '<strong>Inser&ccedil;&atilde;o:</strong> imagens, v&iacute;deos, &aacute;udios, gr&aacute;ficos, tabelas, SmartArt, formas, &iacute;cones.',
              '<strong>SmartArt:</strong> diagramas pr&eacute;-definidos (hierarquia, ciclo, processo, etc.).',
              '<strong>Exporta&ccedil;&atilde;o:</strong> PDF, imagem (PNG, JPG), v&iacute;deo.',
              '<strong>Atalhos:</strong> F5 (apresentar), Esc (sair), B/W (preto/branco), setas (navegar).'
            ]
          },
          {
            h: '11. Seguran&ccedil;a da Informa&ccedil;&atilde;o &mdash; Detalhamento',
            p: '<p>Tr&ecirc;s pilares (CID): Confidencialidade, Integridade, Disponibilidade.</p>',
            ul: [
              '<strong>Confidencialidade:</strong> apenas pessoas autorizadas acessam a informa&ccedil;&atilde;o. Criptografia, controle de acesso.',
              '<strong>Integridade:</strong> informa&ccedil;&atilde;o n&atilde;o foi alterada indevidamente. Assinatura digital, hash.',
              '<strong>Disponibilidade:</strong> informa&ccedil;&atilde;o acess&iacute;vel quando necess&aacute;rio. Backup, redund&acirc;ncia.',
              '<strong>Tipos de malware:</strong>',
              '&nbsp;&bull; <strong>V&iacute;rus:</strong> precisa de hospedeiro. Propaga-se por execu&ccedil;&atilde;o.<br>',
              '&nbsp;&bull; <strong>Worm:</strong> auto-replicante. N&atilde;o precisa de hospedeiro. Explora vulnerabilidades.<br>',
              '&nbsp;&bull; <strong>Trojan (Cavalo de Troia):</strong> disfar&ccedil;ado de programa leg&iacute;timo.<br>',
              '&nbsp;&bull; <strong>Spyware:</strong> coleta dados sem consentimento.<br>',
              '&nbsp;&bull; <strong>Adware:</strong> exibe an&uacute;ncios.<br>',
              '&nbsp;&bull; <strong>Ransomware:</strong> criptografa dados e pede resgate. Wannacry, Petya.<br>',
              '&nbsp;&bull; <strong>Keylogger:</strong> registra teclas digitadas.<br>',
              '&nbsp;&bull; <strong>Rootkit:</strong> acesso privilegiado ao sistema, dif&iacute;cil detec&ccedil;&atilde;o.<br>',
              '&nbsp;&bull; <strong>Bot:</strong> computador infectado controlado remotamente. Botnet = rede de bots.',
              '<strong>Engenharia social:</strong> manipula&ccedil;&atilde;o psicol&oacute;gica. Phishing, vishing, smishing, pretexting, baiting.',
              '<strong>Phishing:</strong> e-mail fraudulento. Spear phishing (direcionado). Pharming (DNS falso).',
              '<strong>Firewall:</strong> filtra tr&aacute;fego de rede. Hardware ou software.',
              '<strong>Antiv&iacute;rus:</strong> detecta e remove malware. Assinaturas, comportamento, heur&iacute;stica.',
              '<strong>VPN:</strong> t&uacute;nel criptografado em rede p&uacute;blica.',
              '<strong>Criptografia:</strong>',
              '&nbsp;&bull; <strong>Sim&eacute;trica:</strong> mesma chave. AES, DES. R&aacute;pida.<br>',
              '&nbsp;&bull; <strong>Assim&eacute;trica:</strong> chave p&uacute;blica + privada. RSA. Mais lenta, mais segura.<br>',
              '&nbsp;&bull; <strong>Hash:</strong> fun&ccedil;&atilde;o unidirecional. MD5, SHA-1, SHA-256. Integridade.',
              '<strong>Senhas fortes:</strong> combina&ccedil;&atilde;o de tipos. Tamanho &gt; 12 caracteres. 2FA. N&atilde;o reutilizar.',
              '<strong>Backup:</strong>',
              '&nbsp;&bull; <strong>Completo:</strong> c&oacute;pia de todos os dados.<br>',
              '&nbsp;&bull; <strong>Incremental:</strong> apenas dados alterados desde o &uacute;ltimo backup.<br>',
              '&nbsp;&bull; <strong>Diferencial:</strong> dados alterados desde o &uacute;ltimo backup completo.<br>',
              '&nbsp;&bull; <strong>Regra 3-2-1:</strong> 3 c&oacute;pias, 2 m&iacute;dias diferentes, 1 fora do local.'
            ]
          },
          {
            h: '12. Internet, Redes e Protocolos',
            p: '<p>Conceitos fundamentais de internet e redes de computadores.</p>',
            ul: [
              '<strong>WWW (World Wide Web):</strong> sistema de documentos em hipertexto (HTML) acessados via HTTP/HTTPS.',
              '<strong>URL:</strong> esquema://dom&iacute;nio/caminho?par&acirc;metros. Ex: https://www.gov.br/inss',
              '<strong>DNS (Domain Name System):</strong> converte dom&iacute;nio em IP. Servidores DNS.',
              '<strong>TCP/IP:</strong> protocolo base da internet. Camadas: aplica&ccedil;&atilde;o, transporte, rede, enlace.',
              '<strong>HTTP e HTTPS:</strong> protocolos de transfer&ecirc;ncia de hipertexto. HTTPS usa SSL/TLS (porta 443). HTTP sem criptografia (porta 80).',
              '<strong>FTP:</strong> transfer&ecirc;ncia de arquivos (porta 21). SFTP (SSH File Transfer Protocol) &eacute; seguro.',
              '<strong>SMTP, POP3, IMAP:</strong> e-mail. SMTP (envio, porta 25). POP3 (recebimento, baixa). IMAP (recebimento, sincroniza).',
              '<strong>IP:</strong> endere&ccedil;o &uacute;nico do dispositivo. IPv4 (32 bits), IPv6 (128 bits).',
              '<strong>MAC:</strong> endere&ccedil;o f&iacute;sico da placa de rede (48 bits).',
              '<strong>LAN, MAN, WAN:</strong> redes locais, metropolitanas, de longa dist&acirc;ncia.',
              '<strong>Wi-Fi:</strong> rede sem fio. Padr&otilde;es: 802.11n (Wi-Fi 4), 802.11ac (Wi-Fi 5), 802.11ax (Wi-Fi 6).',
              '<strong>Bluetooth:</strong> rede pessoal sem fio de curto alcance.',
              '<strong>Cookies:</strong> pequenos arquivos de identifica&ccedil;&atilde;o do usu&aacute;rio em sites.',
              '<strong>Proxy:</strong> intermedi&aacute;rio entre usu&aacute;rio e internet.',
              '<strong>Topologia de rede:</strong> estrela, anel, barramento, malha.'
            ]
          },
          {
            h: '13. Sistemas Operacionais (Windows 10/11 e Linux)',
            p: '<p>Conceitos e pr&aacute;ticas de sistemas operacionais.</p>',
            ul: [
              '<strong>Windows 10/11:</strong>',
              '&nbsp;&bull; &Aacute;rea de trabalho, barra de tarefas, menu Iniciar.<br>',
              '&nbsp;&bull; Explorador de Arquivos: copiar, mover, renomear, excluir.<br>',
              '&nbsp;&bull; Gerenciador de Tarefas (Ctrl+Shift+Esc).<br>',
              '&nbsp;&bull; Painel de Controle e Configura&ccedil;&otilde;es.<br>',
              '&nbsp;&bull; Windows Defender (antiv&iacute;rus integrado).<br>',
              '&nbsp;&bull; OneDrive (nuvem).<br>',
              '&nbsp;&bull; PowerShell e Prompt de Comando.<br>',
              '&nbsp;&bull; Extens&otilde;es de arquivo: .exe, .dll, .txt, .docx, .xlsx, .pdf, .jpg, .png.',
              '<strong>Linux:</strong>',
              '&nbsp;&bull; Distribui&ccedil;&otilde;es: Ubuntu, Debian, Fedora, CentOS, Red Hat.<br>',
              '&nbsp;&bull; Interface gr&aacute;fica (GUI) e linha de comando (terminal).<br>',
              '&nbsp;&bull; Comandos b&aacute;sicos: ls, cd, pwd, mkdir, rmdir, cp, mv, rm, cat, more, less, head, tail, grep, find.<br>',
              '&nbsp;&bull; Permiss&otilde;es: leitura (r), escrita (w), execu&ccedil;&atilde;o (x).<br>',
              '&nbsp;&bull; Estrutura de diret&oacute;rios: /, /home, /etc, /var, /usr, /tmp.<br>',
              '&nbsp;&bull; Gerenciador de pacotes: apt (Debian/Ubuntu), yum (Red Hat), dnf (Fedora).<br>',
              '&nbsp;&bull; Shell scripts: bash.',
              '<strong>Permiss&otilde;es NTFS (Windows):</strong> controle de acesso de usu&aacute;rios e grupos.',
              '<strong>Gerenciamento de processos:</strong> PID, prioridade, threads.'
            ]
          },
          {
            h: '14. Conceitos de Cloud Computing e Big Data',
            p: '<p>Conceitos atuais muito cobrados.</p>',
            ul: [
              '<strong>Cloud Computing (Computa&ccedil;&atilde;o em Nuvem):</strong>',
              '&nbsp;&bull; <strong>IaaS (Infrastructure as a Service):</strong> infraestrutura. Ex: AWS EC2, Azure VM.<br>',
              '&nbsp;&bull; <strong>PaaS (Platform as a Service):</strong> plataforma para desenvolvimento. Ex: Heroku, Google App Engine.<br>',
              '&nbsp;&bull; <strong>SaaS (Software as a Service):</strong> software pronto. Ex: Office 365, Google Workspace, Salesforce.<br>',
              '&nbsp;&bull; <strong>Modelos de implanta&ccedil;&atilde;o:</strong> p&uacute;blica, privada, h&iacute;brida, comunit&aacute;ria.<br>',
              '&nbsp;&bull; <strong>Benef&iacute;cios:</strong> escalabilidade, elasticidade, redu&ccedil;&atilde;o de custos, alta disponibilidade.<br>',
              '&nbsp;&bull; <strong>Riscos:</strong> depend&ecirc;ncia do provedor, seguran&ccedil;a, conformidade, lat&ecirc;ncia.',
              '<strong>Big Data:</strong> grandes volumes de dados que n&atilde;o podem ser processados por sistemas tradicionais.',
              '&nbsp;&bull; <strong>5 V&acute;s:</strong> Volume, Velocidade, Variedade, Veracidade, Valor.<br>',
              '&nbsp;&bull; <strong>Tecnologias:</strong> Hadoop, Spark, NoSQL, Data Lake, Data Warehouse.<br>',
              '&nbsp;&bull; <strong>An&aacute;lise:</strong> descritiva, diagn&oacute;stica, preditiva, prescritiva.',
              '<strong>IoT (Internet das Coisas):</strong> objetos f&iacute;sicos conectados &agrave; internet. Sensores, atuadores.',
              '<strong>Intelig&ecirc;ncia Artificial e Machine Learning:</strong> algoritmos que aprendem com dados.',
              '<strong>Blockchain:</strong> livro-raz&atilde;o distribu&iacute;do e imut&aacute;vel. Criptomoedas, contratos inteligentes.',
              '<strong>DevOps:</strong> integra&ccedil;&atilde;o entre desenvolvimento e opera&ccedil;&otilde;es. CI/CD.'
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
          },
          {
            h: '9. Poderes Administrativos &mdash; Detalhamento',
            p: '<p>Os quatro poderes administrativos s&atilde;o instrumentos de atua&ccedil;&atilde;o da Administra&ccedil;&atilde;o:</p>',
            ul: [
              '<strong>Poder Hier&aacute;rquico:</strong> rela&ccedil;&atilde;o de subordina&ccedil;&atilde;o dentro da Administra&ccedil;&atilde;o. Atributos: dar ordens, fiscalizar, revisar atos dos subordinados, delegar (Lei 9.784/99, art. 12), avocar. Pode ser exercido em todas as entidades administrativas.',
              '<strong>Poder Disciplinar:</strong> puni&ccedil;&atilde;o interna de servidores p&uacute;blicos e de pessoas com v&iacute;nculo especial (ex: permission&aacute;rios, concession&aacute;rios, delegados). Aplicado pela Administra&ccedil;&atilde;o, com processo administrativo e ampla defesa.',
              '<strong>Poder Regulamentar (ou Normativo):</strong> edi&ccedil;&atilde;o de atos normativos (decretos, resolu&ccedil;&otilde;es, portarias, instru&ccedil;&otilde;es normativas) para fiel execu&ccedil;&atilde;o da lei. N&atilde;o pode inovar (criar obriga&ccedil;&otilde;es al&eacute;m da lei). Limites: lei, CF, princ&iacute;pios.',
              '<strong>Poder de Pol&iacute;cia:</strong> limita&ccedil;&atilde;o de direitos individuais em favor do interesse p&uacute;blico. Atributos: <em>discricionariedade</em>, <em>autoexecutoriedade</em>, <em>coercibilidade</em>. Ex: fiscaliza&ccedil;&atilde;o sanit&aacute;ria, ambiental, de tr&acirc;nsito. Pode ser delegado a entidades privadas (ex: CREA).',
              '<strong>Poder de pol&iacute;cia administrativa x judici&aacute;ria:</strong> administrativa = preventiva, repressiva; judici&aacute;ria = repress&aacute;vel, ap&oacute;s a infra&ccedil;&atilde;o.',
              '<strong>Ato de pol&iacute;cia:</strong> licen&ccedil;a, autoriza&ccedil;&atilde;o, permiss&atilde;o. Discricion&aacute;rios em regra.'
            ]
          },
          {
            h: '10. Atos Administrativos &mdash; Elementos, Atributos e Esp&eacute;cies',
            p: '<p>Todo ato administrativo tem 5 elementos (art. 2&ordm;, Lei 4.717/65):</p>',
            ul: [
              '<strong>Compet&ecirc;ncia:</strong> &aacute;gora, mat&eacute;ria, fun&ccedil;&atilde;o. Definida em lei. Pode ser delegada e avocada, salvo reserva legal.',
              '<strong>Finalidade:</strong> interesse p&uacute;blico. Sempre vinculada. Ex: licen&ccedil;a = autorizar o que a lei permite.',
              '<strong>Forma:</strong> exigida em lei. Geralmente escrita. V&iacute;cio de forma = nulidade (salvo se convalid&aacute;vel).',
              '<strong>Motivo:</strong> fato + fundamento jur&iacute;dico. Deve ser escrito (motiva&ccedil;&atilde;o obrigat&oacute;ria por constitui&ccedil;&atilde;o).',
              '<strong>Objeto:</strong> conte&uacute;do do ato. O que se faz/produz.',
              '<strong>Atributos (PATI):</strong>',
              '&nbsp;&bull; <strong>P</strong>resun&ccedil;&atilde;o de legitimidade: ato presume-se v&aacute;lido at&eacute; prova em contr&aacute;rio (inverte &ocirc;nus).<br>',
              '&nbsp;&bull; <strong>A</strong>utoexecutoriedade: a Administra&ccedil;&atilde;o executa sem autoriza&ccedil;&atilde;o judicial.<br>',
              '&nbsp;&bull; <strong>T</strong>ipicidade: cada ato corresponde a um tipo legal.<br>',
              '&nbsp;&bull; <strong>I</strong>mperatividade: obriga&aacute; independentemente da concord&acirc;ncia do particular.',
              '<strong>Classifica&ccedil;&atilde;o:</strong>',
              '&nbsp;&bull; <strong>Vinculados x Discricion&aacute;rios:</strong> vinculado = lei determina todos os elementos; discricion&aacute;rio = h&aacute; margem de escolha (conveni&ecirc;ncia e oportunidade).<br>',
              '&nbsp;&bull; <strong>Simples x Complexos:</strong> simples = uma manifesta&ccedil;&atilde;o de vontade; complexos = v&aacute;rias vontades.<br>',
              '&nbsp;&bull; <strong>Unilaterais x Bilaterais:</strong> unilaterais = uma s&oacute; vontade; bilaterais = acordo.<br>',
              '&nbsp;&bull; <strong>Gerais x Individuais:</strong> gera alcance impessoal; individual uma pessoa espec&iacute;fica.<br>',
              '&nbsp;&bull; <strong>Definitivos x Provis&oacute;rios:</strong> definitivos n&atilde;o dependem de confirma&ccedil;&atilde;o; provis&oacute;rios sim.'
            ]
          },
          {
            h: '11. Esp&eacute;cies de Atos Administrativos',
            p: '<p>Principais esp&eacute;cies:</p>',
            ul: [
              '<strong>Licen&ccedil;a:</strong> ato vinculado que autoriza o particular a exercer direito pr&eacute;-existente. Ex: licen&ccedil;a para construir.',
              '<strong>Autoriza&ccedil;&atilde;o:</strong> ato discricion&aacute;rio, prec&aacute;rio, sem prazo. Ex: uso de bem p&uacute;blico, porte de arma.',
              '<strong>Permiss&atilde;o:</strong> ato discricion&aacute;rio, prec&aacute;rio, oneroso. Ex: banca de jornal, transporte.',
              '<strong>Concess&atilde;o:</strong> ato vinculado (lei autoriza), com prazo, oneroso. Ex: PPP.',
              '<strong>Admiss&atilde;o:</strong> ato vinculado de ingresso de servidor no cargo p&uacute;blico.',
              '<strong>Homologa&ccedil;&atilde;o:</strong> ato de controle, vinculado. Ex: homologa&ccedil;&atilde;o de licita&ccedil;&atilde;o.',
              '<strong>Of&iacute;cio:</strong> manifesta&ccedil;&atilde;o interna.',
              '<strong>Memorando:</strong> comunica&ccedil;&atilde;o interna simplificada.',
              '<strong>Certid&atilde;o:</strong> documento que atesta situa&ccedil;&atilde;o f&aacute;tica ou jur&iacute;dica.',
              '<strong>Atestado:</strong> declara&ccedil;&atilde;o de situa&ccedil;&atilde;o f&aacute;tica. Ex: atestado m&eacute;dico.',
              '<strong>Protocolo:</strong> registro de entrada de documento.',
              '<strong>Alvar&aacute;:</strong> ordem judicial ou administrativa de autoriza&ccedil;&atilde;o.'
            ]
          },
          {
            h: '12. Extin&ccedil;&atilde;o dos Atos Administrativos',
            p: '<p>Formas de extin&ccedil;&atilde;o dos atos administrativos:</p>',
            ul: [
              '<strong>Anula&ccedil;&atilde;o:</strong> v&iacute;cio de legalidade. Efeitos <em>ex tunc</em> (retroativos). Vinculada. A Administra&ccedil;&atilde;o tem o dever de anular (S&uacute;mula 473 STF). Prazo decadencial: 5 anos (Lei 9.784/99, art. 54).',
              '<strong>Revoga&ccedil;&atilde;o:</strong> por conveni&ecirc;ncia e oportunidade. Efeitos <em>ex nunc</em> (para o futuro). Discricion&aacute;ria. N&atilde;o pode revogar atos vinculados nem os que geraram direito adquirido.',
              '<strong>Cassa&ccedil;&atilde;o:</strong> extin&ccedil;&atilde;o por descumprimento de condi&ccedil;&atilde;o ou falta de requisito. Ex: cassa&ccedil;&atilde;o de licen&ccedil;a por irregularidade.',
              '<strong>Caducidade:</strong> perda de efic&aacute;cia por mudan&ccedil;a de lei ou de fato.',
              '<strong>Contraposi&ccedil;&atilde;o (ou oposi&ccedil;&atilde;o):</strong> extin&ccedil;&atilde;o de ato pela pr&oacute;pria Administra&ccedil;&atilde;o por raz&otilde;es de legalidade.',
              '<strong>Convalida&ccedil;&atilde;o:</strong> saneamento de v&iacute;cio san&aacute;vel (ex: v&iacute;cio de compet&ecirc;ncia n&atilde;o exclusiva, v&iacute;cio de forma). N&atilde;o pode convalidar v&iacute;cio de motivo ou objeto.',
              '<strong>Prescri&ccedil;&atilde;o administrativa:</strong> 5 anos para a Administra&ccedil;&atilde;o anular ato com v&iacute;cio (Lei 9.784/99).',
              '<strong>Decad&ecirc;ncia x prescri&ccedil;&atilde;o:</strong> decad&ecirc;ncia = perda do direito de agir (ato n&atilde;o-ed); prescri&ccedil;&atilde;o = perda do direito de punir (atos punitivos).'
            ]
          },
          {
            h: '13. Licita&ccedil;&otilde;es (Lei 14.133/21) &mdash; Detalhamento',
            p: '<p>Lei 14.133/2021 (Nova Lei de Licita&ccedil;&otilde;es) substituiu a Lei 8.666/93. Principais pontos:</p>',
            ul: [
              '<strong>Modalidades (art. 28):</strong>',
              '&nbsp;&bull; <strong>Concorr&ecirc;ncia:</strong> regra geral para valores maiores; obras e servi&ccedil;os de engenharia.<br>',
              '&nbsp;&bull; <strong>Preg&atilde;o:</strong> para bens e servi&ccedil;os comuns. Eletr&ocirc;nico &eacute; preferencial.<br>',
              '&nbsp;&bull; <strong>Concurso:</strong> para escolha de trabalho t&eacute;cnico, art&iacute;stico ou cient&iacute;fico.<br>',
              '&nbsp;&bull; <strong>Leilh&atilde;o:</strong> para venda de bens inserv&iacute;veis ou de origem il&iacute;cita.<br>',
              '&nbsp;&bull; <strong>Di&aacute;logo Competitivo:</strong> para casos complexos em que a Administra&ccedil;&atilde;o n&atilde;o consegue definir a solu&ccedil;&atilde;o t&eacute;cnica.',
              '<strong>Tipos (art. 33):</strong>',
              '&nbsp;&bull; Menor pre&ccedil;o<br>',
              '&nbsp;&bull; Melhor t&eacute;cnica ou conte&uacute;do art&iacute;stico<br>',
              '&nbsp;&bull; T&eacute;cnica e pre&ccedil;o<br>',
              '&nbsp;&bull; Maior retorno econ&ocirc;mico<br>',
              '&nbsp;&bull; Maior desconto',
              '<strong>Fases (art. 17):</strong> preparat&oacute;ria, de divulga&ccedil;&atilde;o, de apresenta&ccedil;&atilde;o de propostas, de julgamento, de habilita&ccedil;&atilde;o, recursal, de homologa&ccedil;&atilde;o.',
              '<strong>Princ&iacute;pios (art. 5&ordm;):</strong> legalidade, impessoalidade, moralidade, publicidade, efici&ecirc;ncia, interesse p&uacute;blico, probidade, igualdade, planejamento, transpar&ecirc;ncia, efic&aacute;cia, segrega&ccedil;&atilde;o de fun&ccedil;&otilde;es, motiva&ccedil;&atilde;o, vincula&ccedil;&atilde;o ao edital, julgamento objetivo, seguran&ccedil;a jur&iacute;dica, razoabilidade, competitividade, proporcionalidade, celeridade, economicidade, desenvolvimento nacional sustent&aacute;vel.',
              '<strong>Dispensa (art. 75):</strong> rol taxativo. Valores at&eacute; R$ 50.000 (obras) / R$ 50.000 (outros servi&ccedil;os e compras).',
              '<strong>Inexigibilidade (art. 74):</strong> inviabilidade de competi&ccedil;&atilde;o. Not&oacute;ria especializa&ccedil;&atilde;o ou singularidade do servi&ccedil;o.',
              '<strong>Carona (ades&atilde;o &agrave; ata de registro de pre&ccedil;o):</strong> limitada a 50% dos quantitativos (regra).',
              '<strong>Crit&eacute;rios de desempate (art. 60):</strong> bens produzidos no Brasil, sustentabilidade, microempresas e EPP, sorteio.'
            ]
          },
          {
            h: '14. Contratos Administrativos &mdash; Caracter&iacute;sticas',
            p: '<p>Regidos pela Lei 14.133/21. Caracter&iacute;sticas:</p>',
            ul: [
              '<strong>Cl&aacute;usulas exorbitantes:</strong> prerrogativas da Administra&ccedil;&atilde;o (alterar, rescindir, fiscalizar, aplicar san&ccedil;&otilde;es). Equil&iacute;brio econ&ocirc;mico-financeiro.',
              '<strong>Altera&ccedil;&atilde;o unilateral (art. 124):</strong> quantitativa at&eacute; 25% (obras) ou 50% (servi&ccedil;os) do valor inicial.',
              '<strong>Rescis&atilde;o:</strong> unilateral (interesse p&uacute;blico, com indeniza&ccedil;&atilde;o), por acordo (Lei 14.133/21), judicial.',
              '<strong>Garantias (art. 96):</strong> cau&ccedil;&atilde;o em dinheiro, seguro-garantia, fian&ccedil;a banc&aacute;ria, t&iacute;tulos da d&iacute;vida p&uacute;blica.',
              '<strong>San&ccedil;&otilde;es (art. 156):</strong> advert&ecirc;ncia, multa, impedimento de licitar e contratar (at&eacute; 3 anos), declara&ccedil;&atilde;o de inidoneidade (at&eacute; 6 anos).',
              '<strong>Equil&iacute;brio econ&ocirc;mico-financeiro:</strong> direito do contratado a recomposi&ccedil;&atilde;o em caso de fato imprevis&iacute;vel ou previs&iacute;vel de efeitos incalcul&aacute;veis (teoria da imprevis&atilde;o).',
              '<strong>Garantia contratual:</strong> limite 5% do valor (obras) ou 10% (grandes vultos).',
              '<strong>Modalidades: empreitada por pre&ccedil;o global, por pre&ccedil;o unit&aacute;rio, integral, tarefa.</strong>'
            ]
          },
          {
            h: '15. Servi&ccedil;os P&uacute;blicos',
            p: '<p>Atividades prestadas pela Administra&ccedil;&atilde;o ou por seus delegados para satisfa&ccedil;&atilde;o de necessidades coletivas.</p>',
            ul: [
              '<strong>Princ&iacute;pios (art. 6&ordm;, Lei 8.987/95):</strong> atualidade, continuidade, efici&ecirc;ncia, generalidade, cortesia, modificade das tarifas, seguran&ccedil;a.',
              '<strong>Classifica&ccedil;&atilde;o:</strong> pr&oacute;prios (Administra&ccedil;&atilde;o presta diretamente), impr&oacute;prios (s&atilde;o atividades de utilidade p&uacute;blica, n&atilde;o exclusivos do Estado).',
              '<strong>Concess&atilde;o (Lei 8.987/95):</strong> deleg&aacute;&ccedil;&atilde;o da presta&ccedil;&atilde;o de servi&ccedil;o p&uacute;blico, com prazo, onerosa, mediante licita&ccedil;&atilde;o.',
              '<strong>Permiss&atilde;o:</strong> ato discricion&aacute;rio, prec&aacute;rio (pode ser revogado a qualquer tempo).',
              '<strong>Autoriza&ccedil;&atilde;o:</strong> ato discricion&aacute;rio, prec&aacute;rio, sem prazo. Para servi&ccedil;os de baixo interesse p&uacute;blico.',
              '<strong>PPP (Lei 11.079/04):</strong> concess&atilde;o patrocinada ou administrativa. Prazo m&iacute;nimo 5 anos, m&aacute;ximo 35. Valor m&iacute;nimo R$ 20 milh&otilde;es.',
              '<strong>Desconcentra&ccedil;&atilde;o:</strong> distribui&ccedil;&atilde;o interna de atribui&ccedil;&otilde;es. Dentro da mesma pessoa jur&iacute;dica. Cria &oacute;rg&atilde;os.',
              '<strong>Descentraliza&ccedil;&atilde;o:</strong> transfer&ecirc;ncia de compet&ecirc;ncia para outra pessoa jur&iacute;dica. Cria entidades (autarquias, empresas p&uacute;blicas, etc.).',
              '<strong>Entidades paraestatais:</strong> entidades privadas que exercem fun&ccedil;&otilde;es p&uacute;blicas. Ex: SESI, SENAI, OAB, CRMV.',
              '<strong>&Oacute;rg&atilde;os p&uacute;blicos:</strong> unidades sem personalidade jur&iacute;dica. Classifica&ccedil;&atilde;o: aut&ocirc;nomos, aut&aacute;rquicos, superiores, subalternos, independentes, auxiliares, de assessoramento, coletivos, singulares.'
            ]
          },
          {
            h: '16. Responsabilidade Civil do Estado &mdash; Aprofundamento',
            p: '<p>Art. 37, &sect;6&ordm;, CF/88: <strong>as pessoas jur&iacute;dicas de direito p&uacute;blico e as de direito privado prestadoras de servi&ccedil;os p&uacute;blicos responder&atilde;o pelos danos que seus agentes, nessa qualidade, causarem a terceiros</strong>.</p>',
            ul: [
              '<strong>Teoria adotada:</strong> <em>risco administrativo</em>. Responsabilidade OBJETIVA (n&atilde;o exige culpa do agente), mas admite excludentes.',
              '<strong>Excludentes e atenuantes:</strong>',
              '&nbsp;&bull; Culpa exclusiva da v&iacute;tima<br>',
              '&nbsp;&bull; Culpa concorrente da v&iacute;tima (reduz a indeniza&ccedil;&atilde;o)<br>',
              '&nbsp;&bull; Caso fortuito / for&ccedil;a maior<br>',
              '&nbsp;&bull; Fato exclusivo de terceiro',
              '<strong>A&ccedil;&atilde;o de regresso:</strong> contra o agente (subjetiva, com dolo ou culpa). Prazo prescricional: 5 anos (S&uacute;mula 666 STF, Decreto 20.910/32).',
              '<strong>For&ccedil;as Armadas:</strong> objetiva + teoria do risco integral em danos nucleares e em opera&ccedil;&otilde;es militares.',
              '<strong>Omiss&atilde;o do Estado:</strong> ainda h&aacute; diverg&ecirc;ncia. STJ (tese atual): admite responsabilidade objetiva se o Estado tinha o dever de agir e omitiu.',
              '<strong>A&ccedil;&atilde;o contra o Estado:</strong> prazos prescricionais variados (5 anos para Fazenda, salvo leis espec&iacute;ficas).',
              '<strong>Danos morais coletivos:</strong> cab&iacute;veis. Devem ser demonstrados.'
            ]
          },
          {
            h: '17. Controle da Administra&ccedil;&atilde;o P&uacute;blica',
            p: '<p>Formas de controle:</p>',
            ul: [
              '<strong>Controle Interno (art. 74 CF):</strong> exercido pela pr&oacute;pria Administra&ccedil;&atilde;o. Sistema de controle interno (SCI), integrado em cada Poder. Atribui&ccedil;&otilde;es: avaliar cumprimento de metas, fiscalizar legalidade, acompanhar resultados.',
              '<strong>Controle Externo (art. 71-75 CF):</strong> exercido pelo Congresso Nacional com aux&iacute;lio do TCU.',
              '<strong>Controle Legislativo:</strong> CPI, susta&ccedil;&atilde;o de atos, fiscaliza&ccedil;&atilde;o cont&aacute;bil.',
              '<strong>Controle Jurisdicional:</strong> exercido pelo Judici&aacute;rio. Instrumentos: MS, AP, ACP, a&ccedil;&atilde;o de improbidade.',
              '<strong>Controle Social:</strong> participa&ccedil;&atilde;o do cidad&atilde;o. Conselho de Usu&aacute;rios, ouvidoria, audi&ecirc;ncias p&uacute;blicas.',
              '<strong>S&uacute;mula 473 STF:</strong> a Administra&ccedil;&atilde;o pode anular seus pr&oacute;prios atos, quando eivados de v&iacute;cios que os tornam ilegais, porque deles n&atilde;o se originam direitos; ou revog&aacute;-los, por motivo de conveni&ecirc;ncia e oportunidade.',
              '<strong>Princ&iacute;pio da Autotutela:</strong> mesmo princ&iacute;pio acima.',
              '<strong>Lei 9.784/99:</strong> processo administrativo federal. Prazos, recursos, anula&ccedil;&atilde;o, revoga&ccedil;&atilde;o.',
              '<strong>MP (art. 127-130):</strong> controle por inq&uacute;erito civil e a&ccedil;&atilde;o civil p&uacute;blica.',
              '<strong>CGU (Controladoria-Geral da Uni&atilde;o):</strong> &oacute;rg&atilde;o central de controle interno do Executivo.'
            ]
          },
          {
            h: '18. Improbidade Administrativa (Lei 8.429/92 com Lei 14.230/21)',
            p: '<p>A Lei 14.230/21 (conhecida como "Nova Lei de Improbidade") reformulou completamente a mat&eacute;ria. Principais mudan&ccedil;as:</p>',
            ul: [
              '<strong>3 modalidades (arts. 9&ordm;, 10 e 11):</strong>',
              '&nbsp;&bull; <strong>Enriquecimento il&iacute;cito (art. 9&ordm;):</strong> auferir, ilicitamente, vantagem patrimonial em raz&atilde;o do cargo.<br>',
              '&nbsp;&bull; <strong>Preju&iacute;zo ao er&aacute;rio (art. 10):</strong> auferir vantagem em favor de outrem, n&atilde;o proceder &agrave; presta&ccedil;&atilde;o de contas, revelar informa&ccedil;&atilde;o privilegiada, frustrar licita&ccedil;&atilde;o, etc.<br>',
              '&nbsp;&bull; <strong>Viola&ccedil;&atilde;o de princ&iacute;pios (art. 11):</strong> violar princ&iacute;pios da Administra&ccedil;&atilde;o ou deveres inerentes ao cargo.',
              '<strong>Elemento subjetivo:</strong> <em>DOLO</em> para todas as modalidades. A Lei 14.230/21 eliminou a culpa (mas com ressalva jurisprudencial).',
              '<strong>San&ccedil;&otilde;es (art. 12):</strong> perda da fun&ccedil;&atilde;o p&uacute;blica, suspens&atilde;o dos direitos pol&iacute;ticos (at&eacute; 14 anos), multa civil, ressarcimento ao er&aacute;rio.',
              '<strong>Prescri&ccedil;&atilde;o (art. 23):</strong> 8 anos para a&ccedil;&otilde;es de improbidade. <strong>A&ccedil;&atilde;o de ressarcimento &eacute; IMPRESCRIT&Iacute;VEL</strong> (art. 37, &sect;5&ordm;, CF/88).',
              '<strong>Legitimados ativos (art. 17):</strong> MP, pessoa jur&iacute;dica interessada (Uni&atilde;o, Estado, DF, Munic&iacute;pio).',
              '<strong>Elemento subjetivo:</strong> dolo deve ser provado pelo autor da a&ccedil;&atilde;o.',
              '<strong>Fim do nexo causal autom&aacute;tico:</strong> a conduta deve efetivamente causar enriquecimento, dano ou viola&ccedil;&atilde;o.',
              '<strong>Princ&iacute;pio da insignific&acirc;ncia:</strong> n&atilde;o configuram improbidade atos com valores irris&oacute;rios.'
            ]
          },
          {
            h: '19. Processo Administrativo Federal (Lei 9.784/99)',
            p: '<p>Lei que disciplina o processo administrativo no &acirc;mbito da Administra&ccedil;&atilde;o P&uacute;blica Federal. Principais pontos:</p>',
            ul: [
              '<strong>Princ&iacute;pios (art. 2&ordm;):</strong> legalidade, finalidade, motiva&ccedil;&atilde;o, razoabilidade, proporcionalidade, moralidade, ampla defesa, contradit&oacute;rio, seguran&ccedil;a jur&iacute;dica, interesse p&uacute;blico, efici&ecirc;ncia.',
              '<strong>Direitos do administrado (art. 3&ordm;):</strong> ser tratado com respeito, ter acesso a atos e registros, obter certid&otilde;es, conhecer identifica&ccedil;&atilde;o dos agentes, formular alega&ccedil;&otilde;es, ter prazo para defesa.',
              '<strong>Prazos (art. 24 e 29):</strong> 5 dias para manifesta&ccedil;&atilde;o do interessado; 30 dias para decis&atilde;o de requerimento; 10 dias para recurso (regra).',
              '<strong>Recursos:</strong> hier&aacute;rquico (regra), em raz&atilde;o de legalidade e m&eacute;rito.',
              '<strong>Anula&ccedil;&atilde;o de atos (art. 53):</strong> 5 anos. Decad&ecirc;ncia.',
              '<strong>Revoga&ccedil;&atilde;o (art. 55):</strong> por conveni&ecirc;ncia e oportunidade. N&atilde;o pode atingir atos vinculados ou que geraram direito adquirido.',
              '<strong>Prescri&ccedil;&atilde;o (art. 1&ordm;, &sect;1&ordm;):</strong> 5 anos para a&ccedil;&otilde;es punitivas da Administra&ccedil;&atilde;o contra servidores e particulares.',
              '<strong>Modalidades de processo:</strong> ordin&aacute;rio (regra), sum&aacute;rio (situa&ccedil;&otilde;es urgentes, art. 24, IX, par&aacute;grafo &uacute;nico), sum&iacute;ssimo (Lei 9.784/99, art. 47).'
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
          },
          {
            h: '8. Direitos e Garantias Fundamentais &mdash; Detalhamento do Art. 5&ordm;',
            p: '<p>O art. 5&ordm; da CF/88 cont&eacute;m 78 incisos. A CEBRASPE cobra os principais:</p>',
            ul: [
              '<strong>II &mdash; Igualdade:</strong> homens e mulheres s&atilde;o iguais em direitos e obriga&ccedil;&otilde;es.',
              '<strong>III &mdash; Liberdade de express&atilde;o:</strong> vedado o anonimato (vedado mas com exce&ccedil;&otilde;es: literatura, arte, ci&ecirc;ncia).',
              '<strong>IV &mdash; Livre manifesta&ccedil;&atilde;o do pensamento.</strong>',
              '<strong>V &mdash; Direito de resposta + indeniza&ccedil;&atilde;o por dano moral/material &agrave; imagem.</strong>',
              '<strong>VI &mdash; Liberdade religiosa.</strong>',
              '<strong>VII &mdash; Garantia de atendimento em religi&otilde;es em hip&oacute;teses de risco &agrave; sa&uacute;de p&uacute;blica.</strong>',
              '<strong>VIII &mdash; Ningu&eacute;m ser&aacute; preso sen&atilde;o em flagrante delito ou por ordem escrita de autoridade competente.</strong>',
              '<strong>IX &mdash; Liberdade de exerc&iacute;cio de trabalho.</strong>',
              '<strong>X &mdash; Inviolabilidade da intimidade, vida privada, honra e imagem.</strong>',
              '<strong>XI &mdash; Inviolabilidade de casa (sem consentimento do morador; em flagrante, desastre, socorro, ou por ordem judicial, durante o dia).</strong>',
              '<strong>XII &mdash; Inviolabilidade do sigilo da correspond&ecirc;ncia e comunica&ccedil;&otilde;es telef&ocirc;nicas (ordem judicial).</strong>',
              '<strong>XIII &mdash; Livre exerc&iacute;cio de trabalho, of&iacute;cio ou profiss&atilde;o.</strong>',
              '<strong>XIV &mdash; Acesso &agrave; informa&ccedil;&atilde;o (LAI).</strong>',
              '<strong>XXXIII &mdash; Direito &agrave; informa&ccedil;&atilde;o p&uacute;blica (Lei 12.527/11).</strong>',
              '<strong>XXXV &mdash; Inafastabilidade do Judici&aacute;rio (&quot;a lei n&atilde;o excluir&aacute; da aprecia&ccedil;&atilde;o do Poder Judici&aacute;rio les&atilde;o ou amea&ccedil;a a direito&quot;).</strong>',
              '<strong>XXXVI &mdash; Direito adquirido, ato jur&iacute;dico perfeito e coisa julgada.</strong>',
              '<strong>XXXIX &mdash; N&atilde;o h&aacute; crime sem lei anterior que o defina (legalidade penal).</strong>',
              '<strong>XL &mdash; Irretroatividade da lei penal, salvo para beneficiar o r&eacute;u.</strong>',
              '<strong>XLV &mdash; Pena pessoal, individualiza&ccedil;&atilde;o, proibi&ccedil;&atilde;o de banimento, trabalhos for&ccedil;ados, etc.</strong>',
              '<strong>LXVII &mdash; Mandado de Seguran&ccedil;a (Lei 12.016/09).</strong>',
              '<strong>LXVIII &mdash; Habeas Corpus.</strong>',
              '<strong>LXIX &mdash; Mandado de Injun&ccedil;&atilde;o.</strong>',
              '<strong>LXX &mdash; Habeas Data.</strong>',
              '<strong>LXXI &mdash; Mandado de Seguran&ccedil;a Coletivo.</strong>',
              '<strong>LXXII &mdash; A&ccedil;&atilde;o Popular (cidad&atilde;o no gozo dos direitos pol&iacute;ticos).</strong>',
              '<strong>LXXVII &mdash; Gratuidade de HC, HD e MS.'
            ]
          },
          {
            h: '9. Rem&eacute;dios Constitucionais &mdash; Diferen&ccedil;as Cruciais',
            p: '<p>Comparativo essencial para a CEBRASPE:</p>',
            ul: [
              '<strong>Habeas Corpus (HC):</strong> protege <em>liberdade de locomo&atilde;o</em>. Qualquer pessoa pode impetrar. Gratuito.',
              '<strong>Habeas Data (HD):</strong> protege <em>informa&ccedil;&otilde;es pessoais em bancos de dados p&uacute;blicos</em>. Prazo: 60 dias da negativa administrativa.',
              '<strong>Mandado de Seguran&ccedil;a (MS):</strong> protege <em>direito l&iacute;quido e certo n&atilde;o amparado por HC ou HD</em>. Prazo: 120 dias corridos (decadencial). Gratuito.',
              '<strong>Mandado de Injun&ccedil;&atilde;o (MI):</strong> para exerc&iacute;cio de direitos/atividades sem norma regulamentadora. Pode ser coletivo.',
              '<strong>A&ccedil;&atilde;o Popular (AP):</strong> <em>cidad&atilde;o no gozo dos direitos pol&iacute;ticos</em>, anula ato lesivo ao patrim&ocirc;nio p&uacute;blico, moralidade, meio ambiente, etc.',
              '<strong>A&ccedil;&atilde;o Civil P&uacute;blica (ACP):</strong> MP, DP, Uni&atilde;o, Estados, DF, Munic&iacute;pios, associa&ccedil;&otilde;es. Para interesses difusos/coletivos.'
            ]
          },
          {
            h: '10. Nacionalidade e CIDADANIA',
            p: '<p><strong>Art. 12 CF/88 &mdash; Brasileiros:</strong></p>',
            ul: [
              '<strong>Natos (art. 12, I):</strong>',
              '&nbsp;&bull; nascidos na Rep&uacute;blica Federativa do Brasil, ainda que de pais estrangeiros, desde que estes n&atilde;o estejam a servi&ccedil;o de seu pa&iacute;s;<br>',
              '&nbsp;&bull; nascidos no estrangeiro, de pai brasileiro ou m&atilde;e brasileira, desde que qualquer deles esteja a servi&ccedil;o da Rep&uacute;blica Federativa do Brasil;<br>',
              '&nbsp;&bull; nascidos no estrangeiro, de pai brasileiro ou m&atilde;e brasileira, desde que sejam registrados em reparti&ccedil;&atilde;o brasileira competente (ou v&ecirc;m residir antes dos 12 anos);<br>',
              '&nbsp;&bull; nascidos em pa&iacute;s que n&atilde;o admita o princ&iacute;pio do <em>jus soli</em>, de pai brasileiro ou m&atilde;e brasileira, que v&ecirc;m residir no Brasil e optam pela nacionalidade.',
              '<strong>Naturalizados (art. 12, II):</strong> estrangeiros de qualquer nacionalidade, residentes h&aacute; mais de 15 anos ininterruptos e sem condena&ccedil;&atilde;o penal, ou que tenham obtido a nacionalidade por outra forma prevista em lei.',
              '<strong>CARGOS PRIVATIVOS DE BRASILEIRO NATO (art. 12, &sect;3&ordm;):</strong> Presidente e Vice-Presidente, Presidente da C&acirc;mara dos Deputados e do Senado Federal, Ministros do STF, Tribunais superiores, TCU, Chefes de Miss&atilde;o Diplom&aacute;tica, Ministro de Estado da Defesa, Comandantes das For&ccedil;as Armadas, Membro do Conselho da Rep&uacute;blica.',
              '<strong>Pegadinha CEBRASPE:</strong> confundir nato e naturalizado. Nato = nasce brasileiro (mesmo no exterior em certas condi&ccedil;&otilde;es). Naturalizado = passou por processo de naturaliza&ccedil;&atilde;o.'
            ]
          },
          {
            h: '11. Direitos Pol&iacute;ticos',
            p: '<p>Art. 14 a 16 CF/88. <strong>Sufr&aacute;gio:</strong> voto.</p>',
            ul: [
              '<strong>Voto obrigat&oacute;rio:</strong> maiores de 18 e menores de 70 anos.',
              '<strong>Voto facultativo:</strong> maiores de 70 anos, menores de 18 anos (alfabetizados), estrangeiros.',
              '<strong>Capacidades pol&iacute;ticasativas:</strong> direito de votar e ser votado.',
              '<strong>Inelegibilidade (art. 14, &sect;4&ordm;):</strong> declarada em condi&ccedil;&otilde;es especificadas na pr&oacute;pria Constitui&ccedil;&atilde;o e em lei complementar (Lei de Inelegibilidade - LC 64/90).',
              '<strong>Cassados e suspens&atilde;o dos direitos pol&iacute;ticos:</strong> condenados por crime doloso com senten&ccedil;a transitada em julgado, improbidade administrativa, etc.',
              '<strong>Perda dos direitos pol&iacute;ticos (art. 15):</strong> cancelamento da naturaliza&ccedil;&atilde;o por sentencia judicial em virtude de atividade nociva ao interesse nacional.',
              '<strong>Restri&ccedil;&atilde;o (suspens&atilde;o):</strong> condena&ccedil;&atilde;o criminal transitada em julgado (enquanto dura o efeito da condena&ccedil;&atilde;o).',
              '<strong>A&ccedil;&atilde;o Popular (art. 5&ordm;, LXXIII):</strong> exige cidadania (&quot;cidad&atilde;o no gozo dos direitos pol&iacute;ticos&quot;).'
            ]
          },
          {
            h: '12. Organiza&ccedil;&atilde;o do Estado &mdash; Detalhamento',
            p: '<p><strong>Art. 18 CF/88:</strong> &quot;A organiza&ccedil;&atilde;o pol&iacute;tico-administrativa da Rep&uacute;blica Federativa do Brasil compreende a Uni&atilde;o, os Estados, o Distrito Federal, os Munic&iacute;pios, todos aut&ocirc;nomos&quot;.</p>',
            ul: [
              '<strong>Uni&atilde;o (art. 21-24):</strong> pessoa jur&iacute;dica de Direito P&uacute;blico interno. Compet&ecirc;ncias exclusivas (art. 21) e privativas (art. 22).',
              '<strong>Estados (art. 25-28):</strong> autonomia pol&iacute;tica, administrativa e financeira. Constitui&ccedil;&atilde;o estadual pr&oacute;pria.',
              '<strong>DF (art. 32):</strong> n&atilde;o &eacute; Munic&iacute;pio, n&atilde;o tem Assembl&eacute;ia Legislativa; tem C&acirc;mara Legislativa e Governador.',
              '<strong>Munic&iacute;pios (art. 29-31):</strong> pessoa jur&iacute;dica de Direito P&uacute;blico. Lei Org&acirc;nica pr&oacute;pria. Autonomia.',
              '<strong>Interven&ccedil;&atilde;o Federal (art. 34-35):</strong> nos Estados, na Uni&atilde;o. Hip&oacute;teses taxativas. Decreto do Congresso Nacional ou do STF, conforme o caso.',
              '<strong>Interven&ccedil;&atilde;o Estadual (art. 36):</strong> em Munic&iacute;pios. Hip&oacute;teses taxativas. Decreto do Governador ou Assembleias Legislativas ou Tribunal de Justi&ccedil;a.'
            ]
          },
          {
            h: '13. Poder Constituinte',
            p: '<p>Capacidade de elaborar a Constitui&ccedil;&atilde;o.</p>',
            ul: [
              '<strong>Poder Constituinte Origin&aacute;rio:</strong> inicial, ilimitado, incondicionado, aut&ocirc;nomo. Cria a Constitui&ccedil;&atilde;o. Irrevers&iacute;vel.',
              '<strong>Poder Constituinte Derivado Reformador:</strong> decorrente. Capacidade de <em>emendar</em> a Constitui&ccedil;&atilde;o (art. 60). <strong>Limita&ccedil;&otilde;es:</strong> cl&aacute;usulas p&eacute;treas (art. 60, &sect;4&ordm;).',
              '<strong>Poder Constituinte Derivado Decorrente:</strong> capacidade dos Estados de elaborarem suas pr&oacute;prias Constitui&ccedil;&otilde;es (art. 25).',
              '<strong>Poder Constituinte Derivado Revis&iacute;stico:</strong> revis&atilde;o constitucional (art. 3&ordm; ADCT).',
              '<strong>Cl&aacute;usulas p&eacute;treas:</strong> forma federativa, voto, separa&ccedil;&atilde;o dos Poderes, direitos e garantias individuais.',
              '<strong>Emendas Constitucionais (art. 60):</strong> 1/3 dos membros da C&acirc;mara ou do Senado, ou 2/3 das Assembleias Legislativas (mais de 50% delas). Vota&ccedil;&atilde;o em dois turnos, 3/5 dos votos.'
            ]
          },
          {
            h: '14. Seguran&ccedil;a Social &mdash; Detalhamento Constitucional',
            p: '<p>Art. 194-204. Tri&aacute;de: <strong>sa&uacute;de + previd&ecirc;ncia + assist&ecirc;ncia</strong>.</p>',
            ul: [
              '<strong>Sa&uacute;de (art. 196-200):</strong> direito de todos, dever do Estado. SUS &uacute;nico e descentralizado. A&ccedil;&otilde;es e servi&ccedil;os de sa&uacute;de s&atilde;o de relev&acirc;ncia p&uacute;blica.',
              '<strong>Previd&ecirc;ncia (art. 201-202):</strong> car&aacute;ter contributivo, filia&ccedil;&atilde;o obrigat&oacute;ria. Cobertura: doen&ccedil;a, invalidez, morte, idade, prote&ccedil;&atilde;o &agrave; maternidade. Tr&ecirc;s regimes: RGPS, RPPS, previd&ecirc;ncia complementar.',
              '<strong>Assist&ecirc;ncia (art. 203):</strong> n&atilde;o contributiva. BPC, prote&ccedil;&atilde;o &agrave; fam&iacute;lia, maternidade, crian&ccedil;a, adolescente, idoso, pessoa com defici&ecirc;ncia.',
              '<strong>Financiamento (art. 195):</strong> contribui&ccedil;&otilde;es dos empregadores, dos trabalhadores e sobre a receita de concursos de progn&oacute;sticos. N&atilde;o incidir&aacute; sobre aposentadoria e pens&atilde;o concedidas pelo regime geral.',
              '<strong>Equ&iacute;voco comum:</strong> BPC (assist&ecirc;ncia) n&atilde;o &eacute; benef&iacute;cio previdenci&aacute;rio. N&atilde;o exige contribui&ccedil;&atilde;o.',
              '<strong>Or&ccedil;amento da Seguridade (art. 165, &sect;5&ordm;, III e art. 250):</strong> receitas e despesas aparecem em or&ccedil;amento pr&oacute;prio.'
            ]
          },
          {
            h: '15. EC 103/2019 &mdash; Reforma da Previd&ecirc;ncia &mdash; Mudan&ccedil;as Detalhadas',
            p: '<p>A Emenda Constitucional 103/2019 alterou profundamente o sistema previdenci&aacute;rio brasileiro.</p>',
            ul: [
              '<strong>Aposentadoria por idade (RGPS):</strong> 65 anos (H) / 62 anos (M) com 20/15 anos de contribui&ccedil;&atilde;o. Car&ecirc;ncia de 180 meses.',
              '<strong>Regra de transi&ccedil;&atilde;o &mdash; pontos (art. 17):</strong> soma de idade + tempo de contribui&ccedil;&atilde;o. Em 2019: 86 (M) e 96 (H). Aumenta 1 ponto por ano at&eacute; 99 (M) e 105 (H).',
              '<strong>Ped&aacute;gio 50% (art. 17, &sect;2&ordm;):</strong> quem estava a at&eacute; 2 anos do tempo de contribui&ccedil;&atilde;o. Cumpriu ped&aacute;gio de 50% do tempo restante.',
              '<strong>Ped&aacute;gio 100% (art. 20):</strong> idade m&iacute;nima de 60 (H) e 57 (M) + tempo de contribui&ccedil;&atilde;o + ped&aacute;gio integral.',
              '<strong>Regras de idade progressiva (art. 4&ordm;):</strong> idade m&iacute;nima progride de 56/61 (M) e 61/65 (H).',
              '<strong>Sal&aacute;rio-de-benef&iacute;cio:</strong> m&eacute;dia de 100% dos sal&aacute;rios desde 07/1994 (fator previdenci&aacute;rio extinto).',
              '<strong>Valor da aposentadoria por idade:</strong> 60% + 2% por ano que exceder 20 (H) ou 15 (M) anos.',
              '<strong>Pens&atilde;o por morte:</strong> 50% + 10% por dependente, at&eacute; 100%. Dura&ccedil;&atilde;o vital&iacute;cia ou tempor&aacute;ria conforme idade do c&ocirc;njuge.',
              '<strong>Aposentadoria especial:</strong> 15, 20 ou 25 anos, conforme agente. Para quem come&ccedil;ou depois, pode haver idade m&iacute;nima (60/55).',
              '<strong>Al&iacute;quotas progressivas:</strong> 7,5% a 14% para o empregado (Lei 14.973/24).',
              '<strong>Reforma tamb&eacute;m abrangeu servidores p&uacute;blicos:</strong> idade m&iacute;nima de 65 (H) e 62 (M), regras de transi&ccedil;&atilde;o espec&iacute;ficas.'
            ]
          },
          {
            h: '16. Sistema Tribut&aacute;rio Nacional',
            p: '<p>Art. 145-162. <strong>Princ&iacute;pios:</strong> legalidade, anterioridade, irretroatividade, vedação ao confisco, isonomia, capacidade contributiva.</p>',
            ul: [
              '<strong>Impostos da Uni&atilde;o (art. 153):</strong> II, IE, IR, IPI, IOF, ITR, IGF (imposto sobre grandes fortunas &mdash; n&atilde;o regulamentado).',
              '<strong>Impostos dos Estados (art. 155):</strong> ICMS, IPVA, ITCMD.',
              '<strong>Impostos dos Munic&iacute;pios (art. 156):</strong> ISS, IPTU, ITBI.',
              '<strong>Contribui&ccedil;&otilde;es especiais (art. 149 e 195):</strong> contribui&ccedil;&otilde;es sociais, de interven&ccedil;&atilde;o no dom&iacute;nio econ&ocirc;mico, de categoria profissional.',
              '<strong>Reparti&ccedil;&atilde;o de receitas tribut&aacute;rias:</strong> IR (art. 157), IPI (art. 159), IOF, ITR, ICMS (art. 158).',
              '<strong>Imunidades (art. 150, VI):</strong> religi&otilde;es, partidos, sindicatos, livros, jornais, peri&oacute;dicos, papel para impress&atilde;o, entidades educacionais e assistenciais sem fins lucrativos.',
              '<strong>Princ&iacute;pio da legalidade estrita (art. 150, I):</strong> nenhum tributo pode ser criado ou aumentado sem lei.'
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
          },
          {
            h: '10. Sal&aacute;rio-de-Benef&iacute;cio e RMI &mdash; Aprofundamento',
            p: '<p>O sal&aacute;rio-de-benef&iacute;cio (SB) &eacute; a base para o c&aacute;lculo da Renda Mensal Inicial (RMI). Regras conforme EC 103/19:</p>',
            ul: [
              '<strong>Regra geral (ap&oacute;s EC 103/19, art. 26):</strong> m&eacute;dia aritm&eacute;tica simples de 100% dos sal&aacute;rios-de-contribui&ccedil;&atilde;o desde 07/1994 (ou do in&iacute;cio das contribui&ccedil;&otilde;es, se posterior).',
              '<strong>Regra antiga (antes EC 103/19):</strong> 80% dos maiores sal&aacute;rios (descontados os 20% menores), com aplica&ccedil;&atilde;o do fator previdenci&aacute;rio (Lei 9.876/99).',
              '<strong>Limite do SB:</strong> teto do RGPS (R$ 8.157,41 em 2026).',
              '<strong>Aposentadoria por idade (RGPS, EC 103/19):</strong> valor = 60% + 2% por ano que exceder 20 (H) ou 15 (M) anos. Ex: mulher com 20 anos = 60% + 2%&times;5 = 70% da m&eacute;dia.',
              '<strong>Aposentadoria por tempo de contribui&ccedil;&atilde;o:</strong> extinta pela EC 103/19. Quem j&aacute; tinha direito adquirido pode se aposentar pela regra antiga (80% + fator).',
              '<strong>Aposentadoria especial:</strong> 100% da m&eacute;dia (integral, sem redutor).',
              '<strong>Aposentadoria por incapacidade permanente (invalidez):</strong> 100% da m&eacute;dia.',
              '<strong>Aux&iacute;lio por incapacidade tempor&aacute;ria:</strong> 91% da m&eacute;dia (regra geral). Acidente do trabalho = 100%.',
              '<strong>Pens&atilde;o por morte:</strong> 50% + 10% por dependente, at&eacute; 100% (cota familiar).',
              '<strong>Fator previdenci&aacute;rio (extinto em 2019):</strong> multiplicava o valor. Favorecia quem se aposentava mais tarde. Quem se aposentou antes da EC 103/19 pode usar.',
              '<strong>Regra de prote&ccedil;&atilde;o (Lei 8.213/91, art. 26-A):</strong> se a regra nova for pior, usa-se a regra antiga (limite: teto do RGPS).'
            ]
          },
          {
            h: '11. C&aacute;lculo Pr&aacute;tico da Aposentadoria por Idade',
            p: '<p>Exemplo pr&aacute;tico: <strong>Mulher, 62 anos, 15 anos de contribui&ccedil;&atilde;o, m&eacute;dia de R$ 5.000</strong>.</p>',
            ul: [
              '<strong>Passo 1 &mdash; Idade e tempo:</strong> 62 anos (M) + 15 anos = atinge o m&iacute;nimo. Regra da EC 103/19.',
              '<strong>Passo 2 &mdash; Car&ecirc;ncia:</strong> 180 contribui&ccedil;&otilde;es (15 anos). A partir de EC 103/19, regra transit&oacute;ria reduz para quem j&aacute; contribuiu at&eacute; 14/11/2019.',
              '<strong>Passo 3 &mdash; SB:</strong> m&eacute;dia de 100% dos sal&aacute;rios desde 07/1994 = R$ 5.000.',
              '<strong>Passo 4 &mdash; RMI:</strong> 60% + 2% por ano que exceder 15. (15 anos &rarr; 60% = R$ 3.000).',
              '<strong>Resultado:</strong> RMI = R$ 3.000/m&ecirc;s (se optar pela regra da EC 103/19).',
              '<strong>Pegadinha CEBRASPE:</strong> confundir fator previdenci&aacute;rio (extinto) com a regra de 60% + 2%. N&atilde;o existe mais fator ap&oacute;s 13/11/2019.'
            ]
          },
          {
            h: '12. Aposentadoria Especial &mdash; Detalhamento',
            p: '<p>Para atividades com exposi&ccedil;&atilde;o a agentes nocivos (f&iacute;sicos, qu&iacute;micos, biol&oacute;gicos, ergon&ocirc;micos) ou periculosidade.</p>',
            ul: [
              '<strong>Tempo de atividade especial (regra antiga, at&eacute; 13/11/2019):</strong> 15, 20 ou 25 anos, conforme o agente.',
              '&nbsp;&bull; <strong>15 anos:</strong> ru&iacute;do, vibra&ccedil;&atilde;o, calor, frio, umidade, radia&ccedil;&atilde;o ionizante (alguns).<br>',
              '&nbsp;&bull; <strong>20 anos:</strong> agente qu&iacute;mico, biol&oacute;gico, ergon&ocirc;micos.<br>',
              '&nbsp;&bull; <strong>25 anos:</strong> minera&ccedil;&atilde;o subterr&acirc;nea, atividades com amianto, radia&ccedil;&atilde;o ionizante.',
              '<strong>Regra nova (ap&oacute;s EC 103/19, para quem come&ccedil;ou depois):</strong> idade m&iacute;nima de 60 (H) / 55 (M), com 25/20/15 anos de atividade especial, conforme agente.',
              '<strong>Lista de atividades:</strong> Anexos I, II, III do Decreto 3.048/99.',
              '<strong>Documenta&ccedil;&atilde;o:</strong> PPP (Perfil Profissiogr&aacute;fico Previdenci&aacute;rio) ou laudo t&eacute;cnico. LTCAT (Laudo T&eacute;cnico de Condi&ccedil;&otilde;es Ambientais do Trabalho) substitu&iacute;do em alguns casos.',
              '<strong>Convers&atilde;o de tempo especial em comum:</strong> multiplicador 1,4 (mulher) / 1,5 (homem), ou 1,2 para atividades com agentes menos nocivos.',
              '<strong>Per&iacute;odo como aluno:</strong> tempo de estudo (t&eacute;cnico) pode ser convertido em tempo comum, com idade m&iacute;nima de 25 anos (Lei 9.527/97).',
              '<strong>Valor:</strong> 100% da m&eacute;dia (integral).'
            ]
          },
          {
            h: '13. Aposentadoria por Incapacidade Permanente (Invalidez)',
            p: '<p>Antes da EC 103/19, era chamada aposentadoria por invalidez.</p>',
            ul: [
              '<strong>Requisitos:</strong> doen&ccedil;a ou acidente que torne o segurado total e permanentemente incapaz para o trabalho, sem possibilidade de reabilita&ccedil;&atilde;o.',
              '<strong>Car&ecirc;ncia:</strong> 12 contribui&ccedil;&otilde;es mensais (salvo acidente do trabalho, doen&ccedil;a profissional ou do trabalho).',
              '<strong>Qualidade de segurado:</strong> necess&aacute;ria (salvo acidente do trabalho).',
              '<strong>Per&iacute;odo de gra&ccedil;a:</strong> se o segurado perdeu a qualidade, n&atilde;o tem direito (salvo acidente do trabalho).',
              '<strong>Valor:</strong> 100% do sal&aacute;rio-de-benef&iacute;cio.',
              '<strong>Acidente do trabalho:</strong> dispensa car&ecirc;ncia e qualidade de segurado. Estabilidade no emprego de 1 ano ap&oacute;s cessar o aux&iacute;lio.',
              '<strong>Doen&ccedil;as que isentam car&ecirc;ncia (Lei 8.213/91, art. 26, II):</strong> tuberculose ativa, hansen&iacute;ase, aliena&ccedil;&atilde;o mental, neoplasia maligna, cegueira, Aids, cardiopatia grave, doen&ccedil;a de Parkinson, espondiloartrose anquilosante, nefropatia grave, hepatopatia grave, esclerose m&uacute;ltipla, s&iacute;ndrome de defici&ecirc;ncia imunol&oacute;gica.',
              '<strong>Readapta&ccedil;&atilde;o profissional:</strong> INSS tentar&aacute; recolocar o segurado em outra fun&ccedil;&atilde;o antes da aposentadoria.'
            ]
          },
          {
            h: '14. Aux&iacute;lio por Incapacidade Tempor&aacute;ria (antigo Aux&iacute;lio-Doen&ccedil;a)',
            p: '<p>Nomenclatura alterada pela EC 103/19.</p>',
            ul: [
              '<strong>Requisitos:</strong>',
              '&nbsp;&bull; Qualidade de segurado.<br>',
              '&nbsp;&bull; Car&ecirc;ncia de 12 contribui&ccedil;&otilde;es (salvo acidente do trabalho).<br>',
              '&nbsp;&bull; Incapacidade tempor&aacute;ria para o trabalho, comprovada por per&iacute;cia m&eacute;dica do INSS.',
              '<strong>Valor:</strong> 91% da m&eacute;dia. Para acidente do trabalho: 100% da m&eacute;dia.',
              '<strong>Per&iacute;odo de pagamento:</strong> enquanto perdurar a incapacidade (com per&iacute;cias peri&oacute;dicas).',
              '<strong>Data de in&iacute;cio do benef&iacute;cio (DIB):</strong> 16&ordm; dia de afastamento (empregado) ou data do requerimento (demais).',
              '<strong>Pegadinha CEBRASPE:</strong> a nova nomenclatura (aux&iacute;lio por incapacidade tempor&aacute;ria) substituiu "aux&iacute;lio-doen&ccedil;a", mas a legisla&ccedil;&atilde;o antiga continua a ser cobrada com o nome antigo. N&atilde;o confunda os termos.',
              '<strong>Prorroga&ccedil;&atilde;o:</strong> per&iacute;cia m&eacute;dica avalia a cada 60 dias (pode ser menos em casos graves).'
            ]
          },
          {
            h: '15. Aux&iacute;lio-Acidente',
            p: '<p>Indeniza&ccedil;&atilde;o por redu&ccedil;&atilde;o definitiva da capacidade de trabalho.</p>',
            ul: [
              '<strong>Requisitos:</strong>',
              '&nbsp;&bull; Qualidade de segurado.<br>',
              '&nbsp;&bull; Car&ecirc;ncia: NENHUMA (Lei 8.213/91, art. 26, &sect;1&ordm;).<br>',
              '&nbsp;&bull; Redu&ccedil;&atilde;o definitiva da capacidade para o trabalho habitual.<br>',
              '&nbsp;&bull; N&atilde;o gera aposentadoria.',
              '<strong>Valor:</strong> 50% do sal&aacute;rio-de-benef&iacute;cio que serviria de base para a aposentadoria por incapacidade permanente.',
              '<strong>Caracter&iacute;sticas:</strong>',
              '&nbsp;&bull; Pode ser acumulado com sal&aacute;rio (se continuar trabalhando).<br>',
              '&nbsp;&bull; Vital&iacute;cio (n&atilde;o cessa com a recupera&ccedil;&atilde;o, salvo se o segurado retornar &agrave; atividade habitual).<br>',
              '&nbsp;&bull; Acumul&aacute;vel com pens&atilde;o por morte (S&uacute;mula 507 STJ).',
              '<strong>Pegadinha CEBRASPE:</strong> aux&iacute;lio-acidente &eacute; indeniza&ccedil;&atilde;o, n&atilde;o substitui o sal&aacute;rio.'
            ]
          },
          {
            h: '16. Sal&aacute;rio-Maternidade',
            p: '<p>Benef&iacute;cio pago &agrave; m&atilde;e (ou pai, em casos espec&iacute;ficos) durante a licen&ccedil;a maternidade.</p>',
            ul: [
              '<strong>Categorias e prazos:</strong>',
              '&nbsp;&bull; <strong>Empregada:</strong> 120 dias, a partir do 8&ordm; m&ecirc;s de gesta&ccedil;&atilde;o. Pago pela empresa (que compensa com o INSS) ou pelo INSS (quando n&atilde;o h&aacute; v&iacute;nculo empregat&iacute;cio).<br>',
              '&nbsp;&bull; <strong>Contribuinte individual, facultativa, especial, MEI:</strong> 120 dias, mediante requerimento.<br>',
              '&nbsp;&bull; <strong>Desempregada (qualidade de segurado):</strong> 120 dias, se mantida a qualidade de segurado.<br>',
              '&nbsp;&bull; <strong>Adotante:</strong> 120 dias, redu&ccedil;&otilde;es conforme a idade da crian&ccedil;a (Lei 13.509/17, art. 71-A).',
              '<strong>Car&ecirc;ncia:</strong>',
              '&nbsp;&bull; Empregada: 0 (desde que comprove filia&ccedil;&atilde;o).<br>',
              '&nbsp;&bull; Demais: 10 contribui&ccedil;&otilde;es.<br>',
              '&nbsp;&bull; Em parto antecipado, mant&eacute;m-se o prazo de 120 dias.',
              '<strong>Valor:</strong>',
              '&nbsp;&bull; Empregada: integral (sem redu&ccedil;&atilde;o).<br>',
              '&nbsp;&bull; Contribuinte individual e facultativa: 1/12 da soma dos 12 &uacute;ltimos sal&aacute;rios-de-contribui&ccedil;&atilde;o (ou do total se menos).<br>',
              '&nbsp;&bull; Adotante: mesmo valor.',
              '<strong>Licen&ccedil;a-maternidade estendida (Cultura/Empresa Cidad&atilde;):</strong> 180 dias, conforme ades&atilde;o ao programa.',
              '<strong>Aborto n&atilde;o criminoso:</strong> 2 semanas.',
              '<strong>P&eacute;rdida do beb&ecirc; (natimorto):</strong> 120 dias, mas com discusses jurisprudenciais.'
            ]
          },
          {
            h: '17. Sal&aacute;rio-Fam&iacute;lia',
            p: '<p>Benef&iacute;cio pago ao segurado de baixa renda que tem filhos ou equiparados de at&eacute; 14 anos (ou inv&aacute;lidos de qualquer idade).</p>',
            ul: [
              '<strong>Requisitos:</strong> qualidade de segurado e filho/equiparado nas condi&ccedil;&otilde;es da lei. <strong>N&atilde;o exige car&ecirc;ncia</strong>.',
              '<strong>Limitado a:</strong> 14 anos, ou inv&aacute;lido de qualquer idade.',
              '<strong>Cota parte familiar:</strong> pago por dependente.',
              '<strong>Limite de renda (atualizado por MP):</strong> cabe&ccedil;a-de-fam&iacute;lia com renda at&eacute; certo valor (regras sofrem atualiza&ccedil;&atilde;o peri&oacute;dica via portaria).',
              '<strong>Valor (2026):</strong> R$ 62,04 por dependente (empregado) ou outro valor, conforme atualiza&ccedil;&atilde;o.',
              '<strong>Quem recebe:</strong> o segurado empregado, avulso, dom&eacute;stico. Demais categorias n&atilde;o t&ecirc;m direito.',
              '<strong>Caracter&iacute;stica:</strong> pago com o sal&aacute;rio, pelo empregador (que deduz do INSS).',
              '<strong>Cumulabilidade:</strong> com aux&iacute;lio-doen&ccedil;a, aposentadoria por invalidez, idade ou especial. N&atilde;o cumul&aacute;vel com aux&iacute;lio-acidente ou pens&atilde;o (S&uacute;mula 55 STJ).'
            ]
          },
          {
            h: '18. Aux&iacute;lio-Reclus&atilde;o',
            p: '<p>Benef&iacute;cio pago aos dependentes do segurado recolhido &agrave; pris&atilde;o em regime fechado.</p>',
            ul: [
              '<strong>Requisitos:</strong>',
              '&nbsp;&bull; Qualidade de segurado do recluso.<br>',
              '&nbsp;&bull; Regime fechado (n&atilde;o se aplica a regimes aberto, semiaberto ou domiciliar).<br>',
              '&nbsp;&bull; Car&ecirc;ncia: 24 contribui&ccedil;&otilde;es, reduzidas para 12 em caso de regime prisional.<br>',
              '&nbsp;&bull; Dependentes em condi&ccedil;&otilde;es de receber.<br>',
              '&nbsp;&bull; Recluso de baixa renda (regra da EC 104/20: renda do segurado at&eacute; R$ 1.754,18 em 2026).',
              '<strong>Valor:</strong> equivalente ao aux&iacute;lio-doen&ccedil;a, se recluso de baixa renda; valor da aposentadoria por invalidez, se regime fechado e sem renda m&aacute;xima.',
              '<strong>Suspensa&ccedil;&atilde;o:</strong> se o segurado passar para regime aberto, semiaberto ou domiciliar.',
              '<strong>Cessada&ccedil;&atilde;o:</strong> morte do segurado, fuga, sa&iacute;da definitiva do sistema prisional.',
              '<strong>Manuten&ccedil;&atilde;o do aux&iacute;lio:</strong> at&eacute; 6 meses ap&oacute;s a sa&iacedil;&atilde;o, se o segurado voltar ao trabalho.',
              '<strong>Pegadinha CEBRASPE:</strong> aux&iacute;lio-reclus&atilde;o n&atilde;o &eacute; pago ao pr&oacute;prio segurado, mas aos seus dependentes.'
            ]
          },
          {
            h: '19. Reaberta&ccedil;&atilde;o e Reabilita&ccedil;&atilde;o Profissional',
            p: '<p>Procedimentos que visam reintegrar o segurado ao trabalho.</p>',
            ul: [
              '<strong>Reabilita&ccedil;&atilde;o profissional (Lei 8.213/91, art. 89-93):</strong> programa do INSS para segurados com incapacidade parcial. Fornece cursos, treinamentos, pr&oacute;teses, &oacute;rteses. Objetivo: reinserir no mercado de trabalho.',
              '<strong>Curso de qualifica&ccedil;&atilde;o profissional:</strong> ministrado pelo INSS ou por entidades conveniadas.',
              '<strong>Readapta&ccedil;&atilde;o funcional:</strong> remo&ccedil;&atilde;o para cargo compat&iacute;vel com a limita&ccedil;&atilde;o (servidor p&uacute;blico).',
              '<strong>Habilita&ccedil;&atilde;o e reabilita&ccedil;&atilde;o:</strong> segurado incapaz parcial ou totalmente deve ser encaminhado para o programa antes da aposentadoria por invalidez (se houver possibilidade de recupera&ccedil;&atilde;o).',
              '<strong>Indeniza&ccedil;&atilde;o:</strong> se o segurado recusar ou abandonar o programa, pode ter o benef&iacute;cio suspenso.'
            ]
          },
          {
            h: '20. Crimes Previdenci&aacute;rios e Penalidades',
            p: '<p>Crimes previstos no C&oacute;digo Penal e em legisla&ccedil;&atilde;o penal extravagante.</p>',
            ul: [
              '<strong>Estelionato previdenci&aacute;rio (art. 171, &sect;3&ordm;, CP):</strong> obter, para si ou para outrem, vantagem il&iacute;cita em preju&iacute;zo do INSS, induzindo ou mantendo algu&eacute;m em erro. Pena: reclus&atilde;o de 1 a 5 anos, multa.',
              '<strong>Apropria&ccedil;&atilde;o ind&eacute;bita previdenci&aacute;ria (art. 168-A, CP):</strong> n&atilde;o recolher contribui&ccedil;&atilde;o social descontada de trabalhador, no prazo legal. Pena: reclus&atilde;o de 2 a 5 anos, multa.',
              '<strong>Sonega&ccedil;&atilde;o de contribui&ccedil;&atilde;o previdenci&aacute;ria (art. 337-A, CP):</strong> suprimir ou reduzir contribui&ccedil;&atilde;o social, por qualquer meio. Pena: reclus&atilde;o de 2 a 5 anos, multa.',
              '<strong>Fraude na qualidade de segurado (art. 347, CP):</strong> obter benef&iacute;cio sem direito. Pena: deten&ccedil;&atilde;o de 1 a 5 anos, multa.',
              '<strong>Lei 8.212/91, art. 95:</strong> constitui crime deixar de recolher contribui&ccedil;&atilde;o social no prazo legal. Pena: deten&ccedil;&atilde;o de 6 meses a 2 anos, multa.',
              '<strong>Lei 8.213/91, art. 116:</strong> crimes contra a seguridade social.',
              '<strong>Princ&iacute;pio da insignific&acirc;ncia:</strong> STF (HC 115.254): valores muito pequenos n&atilde;o configuram crime.',
              '<strong>Extin&ccedil;&atilde;o da punibilidade:</strong> pagamento do d&eacute;bito antes do recebimento da den&uacute;ncia (Lei 10.684/03).'
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
          },
          {
            h: '8. Lei 8.212/91 &mdash; Custeio da Seguridade &mdash; Detalhamento',
            p: '<p>Lei 8.212/91 disciplina o <strong>custeio</strong> da Seguridade Social. Foco nas contribui&ccedil;&otilde;es sociais.</p>',
            ul: [
              '<strong>Contribuintes (art. 11):</strong>',
              '&nbsp;&bull; Empresas<br>',
              '&nbsp;&bull; Empregadores dom&eacute;sticos<br>',
              '&nbsp;&bull; Trabalhadores (segurados)<br>',
              '&nbsp;&bull; Entidades beneficentes de assist&ecirc;ncia social<br>',
              '&nbsp;&bull; Cooperativas<br>',
              '&nbsp;&bull; Administra&ccedil;&atilde;o P&uacute;blica direta, indireta e fundacional',
              '<strong>Sal&aacute;rio-de-contribui&ccedil;&atilde;o (art. 28):</strong>',
              '&nbsp;&bull; Empregado: total da remunera&ccedil;&atilde;o (sal&aacute;rio + gorjetas + comiss&otilde;es + adicionais).<br>',
              '&nbsp;&bull; Contribuinte individual: o valor por ele declarado.<br>',
              '&nbsp;&bull; Limites: m&iacute;nimo = sal&aacute;rio-m&iacute;nimo; m&aacute;ximo = teto do RGPS.<br>',
              '&nbsp;&bull; Dirigente sindical: a remunera&ccedil;&atilde;o paga pela entidade.',
              '<strong>Al&iacute;quotas (Lei 14.973/2024):</strong>',
              '&nbsp;&bull; <strong>Empregado, dom&eacute;stico e trabalhador avulso (progressiva):</strong><br>',
              '&nbsp;&bull; At&eacute; R$ 1.518,00: 7,5%<br>',
              '&nbsp;&bull; De R$ 1.518,01 a R$ 2.793,88: 9%<br>',
              '&nbsp;&bull; De R$ 2.793,89 a R$ 4.190,83: 12%<br>',
              '&nbsp;&bull; De R$ 4.190,84 a R$ 8.157,41: 14%<br>',
              '&nbsp;&bull; <strong>Contribuinte individual e facultativo:</strong> 20% (fixa) ou 11% (baixa renda, para cobertura simplificada).<br>',
              '&nbsp;&bull; <strong>MEI:</strong> 5% do sal&aacute;rio-m&iacute;nimo (renda at&eacute; R$ 81.000/ano).<br>',
              '&nbsp;&bull; <strong>Empregador (empresa):</strong> 20% sobre a folha + RAT (1%, 2% ou 3%) + Sistema S (aplica&ccedil;&atilde;o opcional).',
              '<strong>Decreto 3.048/99 (Regulamento da Previd&ecirc;ncia):</strong> normas detalhadas de procedimentos, per&iacute;cia, benef&iacute;cios.'
            ]
          },
          {
            h: '9. Benef&iacute;cios Detalhados (Lei 8.213/91)',
            p: '<p>Art. 18 da Lei 8.213/91 elenca os benef&iacute;cios do RGPS:</p>',
            ul: [
              '<strong>I &mdash; Aposentadorias:</strong> por incapacidade permanente, idade, especial, compuls&oacute;ria (70 anos), tempo de contribui&ccedil;&atilde;o (regra transit&oacute;ria, EC 103/19).',
              '<strong>II &mdash; Aux&iacute;lio por incapacidade tempor&aacute;ria (antigo aux&iacute;lio-doen&ccedil;a):</strong> art. 59-63. 12 contribui&ccedil;&otilde;es de car&ecirc;ncia (salvo acidente). 91% do SB.',
              '<strong>III &mdash; Sal&aacute;rio-fam&iacute;lia (art. 65-70):</strong> para filhos/equiparados at&eacute; 14 anos. Pago com o sal&aacute;rio. Sem car&ecirc;ncia.',
              '<strong>IV &mdash; Sal&aacute;rio-maternidade (art. 71-73):</strong> 120 dias para a m&atilde;e. Car&ecirc;ncia 10 meses (empregada n&atilde;o exige).',
              '<strong>V &mdash; Aux&iacute;lio-acidente (art. 86):</strong> indeniza&ccedil;&atilde;o. 50% do SB. Sem car&ecirc;ncia.',
              '<strong>VI &mdash; Pens&atilde;o por morte (art. 74-79):</strong> 50% + 10%/dependente. Sem car&ecirc;ncia (basta qualidade de segurado).',
              '<strong>VII &mdash; Aux&iacute;lio-reclus&atilde;o (art. 80-84):</strong> regime fechado. Car&ecirc;ncia 24 meses. Rendas baixas.',
              '<strong>VIII &mdash; Abono anual (13&ordm;):</strong> pago em dezembro aos segurados que recebem benef&iacute;cios.',
              '<strong>IX &mdash; Servi&ccedil;os:</strong> reabilita&ccedil;&atilde;o profissional, justificação administrativa.',
              '<strong>Per&iacute;odo de gra&ccedil;a (art. 15):</strong> 12 meses ap&oacute;s cessar contribui&ccedil;&atilde;o (regra geral). Prorroga&ccedil;&atilde;o para quem contribuiu 120 (H) ou 60 (M) meses: mais 12 meses.'
            ]
          },
          {
            h: '10. Dependentes (Lei 8.213/91, art. 16)',
            p: '<p>Dependentes previdenci&aacute;rios se dividem em 3 classes:</p>',
            ul: [
              '<strong>Classe I:</strong> c&ocirc;njuge, companheiro(a), filho(a) n&atilde;o emancipado(a) de qualquer condi&ccedil;&atilde;o, menor de 21 anos ou inv&aacute;lido(a), enteado(a), tutelado(a).',
              '<strong>Classe II:</strong> pai, m&atilde;e, irm&atilde;o (n&atilde;o emancipado, menor de 21 anos ou inv&aacute;lido).',
              '<strong>Classe III:</strong> demais parentes (av&oacute;s, tios, etc.) n&atilde;o mencionados nas classes anteriores, desde que vivam sob depend&ecirc;ncia econ&ocirc;mica.',
              '<strong>Ordem de prefer&ecirc;ncia:</strong> 1&ordf; classe &rarr; 2&ordf; classe &rarr; 3&ordf; classe.',
              '<strong>Companheiro(a) homossexual:</strong> equipara&ccedil;&atilde;o legal (CF/88, art. 5&ordm; e Lei 11.340/06). STF e STJ reconhecem uniões homoafetivas.',
              '<strong>Menor sob guarda:</strong> S&uacute;mula 187 do STJ. Equipara&ccedil;&atilde;o a filho para fins previdenci&aacute;rios.',
              '<strong>Inscri&ccedil;&atilde;o:</strong> autom&aacute;tica, por declara&ccedil;&atilde;o do segurado, dispensada para dependentes legais.',
              '<strong>Perda da qualidade de dependente:</strong> cessada a condi&ccedil;&atilde;o (ex: casamento do filho, morte).'
            ]
          },
          {
            h: '11. Habilita&ccedil;&atilde;o de Benef&iacute;cios e Documenta&ccedil;&atilde;o',
            p: '<p>Para requerer benef&iacute;cios no INSS, o segurado deve apresentar documenta&ccedil;&atilde;o b&aacute;sica:</p>',
            ul: [
              '<strong>Documentos pessoais:</strong> RG, CPF, comprovante de resid&ecirc;ncia, CTPS ou comprovante de v&iacute;nculo.',
              '<strong>CNIS (Cadastro Nacional de Informa&ccedil;&otilde;es Sociais):</strong> principal fonte de dados do segurado. Pode ser consultado e corrigido.',
              '<strong>Carn&ecirc;-contribui&ccedil;&atilde;o / GPS / GFIP:</strong> comprovantes de contribui&ccedil;&atilde;o.',
              '<strong>Laudos e PPP:</strong> para aposentadoria especial.',
              '<strong>Atestado m&eacute;dico:</strong> para aux&iacute;lio-doen&ccedil;a (per&iacute;cia INSS).',
              '<strong>Certid&atilde;o de &oacute;bito:</strong> para pens&atilde;o por morte.',
              '<strong>Documentos dos dependentes:</strong> para pens&atilde;o.',
              '<strong>Justifica&ccedil;&atilde;o administrativa (Lei 8.213/91, art. 108-110):</strong> prova testemunhal quando n&atilde;o h&aacute; documentos. Valor probante limitado.',
              '<strong>INSS Digital / Meu INSS:</strong> canais eletr&ocirc;nicos para requerimento.',
              '<strong>Prazo para an&aacute;lise:</strong> 30 dias (Lei 10.711/03, alterada pela Lei 13.846/19). Se n&atilde;o cumprido, o benef&iacute;cio deve ser concedido pr&eacute;viamente at&eacute; a decis&atilde;o.'
            ]
          },
          {
            h: '12. Processo Administrativo Previdenci&aacute;rio &mdash; Detalhamento',
            p: '<p>Procedimento no &acirc;mbito do INSS:</p>',
            ul: [
              '<strong>1&ordf; inst&acirc;ncia:</strong> APS (Ag&ecirc;ncia da Previd&ecirc;ncia Social). Decis&atilde;o do chefe da APS ou do gerente executivo.',
              '<strong>2&ordf; inst&acirc;ncia:</strong> JR (Junta de Recursos) do CRPS (Conselho de Recursos da Previd&ecirc;ncia Social). &Oacute;rg&atilde;o colegiado com representa&ccedil;&atilde;o parit&aacute;ria (Uni&atilde;o, empresas, segurados).',
              '<strong>3&ordf; inst&acirc;ncia (em mat&eacute;ria espec&iacute;fica):</strong> CRPS (em Bras&iacute;lia).',
              '<strong>Prazo para recurso:</strong> 30 dias corridos (Lei 9.784/99, art. 59).',
              '<strong>Efeito suspensivo:</strong> regra &eacute; ter efeito suspensivo (Lei 8.213/91, art. 126, &uacute;nico).',
              '<strong>Pedido de reconsidera&ccedil;&atilde;o:</strong> cab&iacute;vel na 1&ordf; inst&acirc;ncia, 10 dias.',
              '<strong>Justifica&ccedil;&atilde;o administrativa (art. 108-110):</strong> quando o segurado n&atilde;o tem como provar a atividade.',
              '<strong>Recurso especial / extraordin&aacute;rio:</strong> para mat&eacute;ria constitucional ou de relev&acirc;ncia.',
              '<strong>Reclama&ccedil;&atilde;o ao Conselho de Recursos:</strong> 30 dias.',
              '<strong>Representa&ccedil;&atilde;o processual:</strong> por advogado com procura&ccedil;&atilde;o ou sindicato (com autoriza&ccedil;&atilde;o).'
            ]
          },
          {
            h: '13. Processo Judicial Previdenci&aacute;rio',
            p: '<p>A&ccedil;&otilde;es judiciais para garantia de direitos previdenci&aacute;rios.</p>',
            ul: [
              '<strong>Compet&ecirc;ncia (CF, art. 109, I):</strong> Justi&ccedil;a Federal. Varas Federais Previdenci&aacute;rias.',
              '<strong>Juizados Especiais Federais (Lei 10.259/01):</strong> causas at&eacute; <strong>60 sal&aacute;rios-m&iacute;nimos</strong>. Gratuidade de custas. Sem honor&aacute;rios para vencido (salvo lide maliciosa).',
              '<strong>Turmas Recursais e Turma Regional:</strong> para recursos dos JEFs.',
              '<strong>TRF (Tribunal Regional Federal):</strong> &uacute;ltima inst&acirc;ncia na Justi&ccedil;a Federal (salvo STF/STJ em mat&eacute;ria constitucional/infraconstitucional).',
              '<strong>Legitima&ccedil;&atilde;o ativa:</strong> segurado, dependente, sindicato (como substituto processual), MP.',
              '<strong>Legitima&ccedil;&atilde;o passiva:</strong> INSS.',
              '<strong>Imprescritibilidade do direito ao benef&iacute;cio (S&uacute;mula 85 STJ):</strong> o direito &agrave; concess&atilde;o do benef&iacute;cio n&atilde;o prescreve.',
              '<strong>Decad&ecirc;ncia das parcelas (5 anos):</strong> parcelas vencidas h&aacute; mais de 5 anos s&atilde;o perdidas (Lei 8.213/91, art. 103-A).',
              '<strong>Tutela antecipada:</strong> cab&iacute;vel quando h&aacute; prova documental e risco de dano.',
              '<strong>Honor&aacute;rios advocat&iacute;cios:</strong> 10% a 20% sobre o valor da condena&ccedil;&atilde;o, conforme jurisprud&ecirc;ncia.',
              '<strong>Custas:</strong> 1% do valor da causa, isento se benefici&aacute;rio da justi&ccedil;a gratuita.',
              '<strong>Justi&ccedil;a gratuita:</strong> presun&ccedil;&atilde;o de hipossufici&ecirc;ncia para quem recebe benef&iacute;cio de valor at&eacute; teto do INSS (Lei 10.259/01, art. 3&ordm;).',
              '<strong>Reconven&ccedil;&atilde;o:</strong> INSS n&atilde;o pode reconvir. Mas pode contestar.',
              '<strong>CPC aplicado:</strong> Lei 13.105/15 (CPC/2015).'
            ]
          },
          {
            h: '14. Crimes e Infra&ccedil;&otilde;es Administrativas Previdenci&aacute;rias',
            p: '<p>Legisla&ccedil;&atilde;o penal e administrativa aplic&aacute;vel.</p>',
            ul: [
              '<strong>CP, art. 171, &sect;3&ordm; (estelionato):</strong> obter vantagem em preju&iacute;zo do INSS. Pena: reclus&atilde;o 1-5 anos.',
              '<strong>CP, art. 168-A (apropria&ccedil;&atilde;o ind&eacute;bita):</strong> n&atilde;o recolher contribui&ccedil;&atilde;o descontada. Pena: reclus&atilde;o 2-5 anos.',
              '<strong>CP, art. 337-A (sonega&ccedil;&atilde;o de contribui&ccedil;&atilde;o):</strong> suprimir ou reduzir contribui&ccedil;&atilde;o. Pena: reclus&atilde;o 2-5 anos.',
              '<strong>Lei 8.212/91, art. 32 (caput):</strong> o d&eacute;bito atualizado monetariamente &eacute; considerado cr&eacute;dito da Uni&atilde;o.',
              '<strong>Lei 8.212/91, art. 32-A (inclu&iacute;do pela Lei 11.727/08):</strong> inclus&atilde;o da contribui&ccedil;&atilde;o em d&iacute;vida ativa e execu&ccedil;&atilde;o fiscal.',
              '<strong>Infra&ccedil;&otilde;es (Lei 8.212/91, art. 22):</strong> multas, encerramento de atividades, etc.',
              '<strong>Mandado de Procedimento Fiscal (MPF):</strong> emitido pela Receita Federal.',
              '<strong>NIT (N&uacute;mero de Identifica&ccedil;&atilde;o do Trabalhador) / PIS/PASEP:</strong> identificadores do segurado.',
              '<strong>Certificado de Regularidade Fiscal (CRF):</strong> exigido para participar de licita&ccedil;&otilde;es, etc.',
              '<strong>Princ&iacute;pio da insignific&acirc;ncia:</strong> STF: valores at&eacute; R$ 20.000 n&atilde;o configuram crime (HC 115.254, mas com ressalva).'
            ]
          },
          {
            h: '15. Contagem Rec&iacute;proca e Certid&atilde;o de Tempo de Contribui&ccedil;&atilde;o (CTC)',
            p: '<p>Regras para contagem de tempo de contribui&ccedil;&atilde;o em diferentes regimes.</p>',
            ul: [
              '<strong>Contagem rec&iacute;proca (art. 94-99, Lei 8.213/91):</strong> tempo de contribui&ccedil;&atilde;o em RGPS, RPPS e regimes militares pode ser contado para aposentadoria em outro regime.',
              '<strong>CTC (Certid&atilde;o de Tempo de Contribui&ccedil;&atilde;o):</strong> documento emitido pelo &oacute;rg&atilde;o de origem para aproveitamento do tempo em outro regime. Formato digital ou f&iacute;sico.',
              '<strong>Averbação:</strong> registro do tempo de contribui&ccedil;&atilde;o em outro regime.',
              '<strong>Limite:</strong> n&atilde;o se pode contar o mesmo tempo em dois regimes (vedação da duplicidade).',
              '<strong>Desconto das contribui&ccedil;&otilde;es:</strong> o segurado que transita para outro regime pode ter desconto proporcional.',
              '<strong>Princ&iacute;pio do paralelismo:</strong> o c&aacute;lculo do tempo segue a legisla&ccedil;&atilde;o do regime de origem.',
              '<strong>Atividade rural:</strong> pode ser contada pelo regime pr&oacute;prio (segurado especial).',
              '<strong>Tempo militar:</strong> conta para aposentadoria no RGPS ou RPPS, com aplica&ccedil;&atilde;o de ped&aacute;gio em alguns casos.'
            ]
          },
          {
            h: '16. Regimes Pr&oacute;prios de Previd&ecirc;ncia Social (RPPS)',
            p: '<p>Regimes dos servidores p&uacute;blicos titulares de cargo efetivo.</p>',
            ul: [
              '<strong>Constitui&ccedil;&atilde;o (art. 40):</strong> regime pr&oacute;prio, de car&aacute;ter contributivo e solid&aacute;rio.',
              '<strong>Lei 9.717/98:</strong> regras gerais para RPPS dos servidores p&uacute;blicos.',
              '<strong>Lei 10.887/04:</strong> regras para aposentadoria e pens&atilde;o.',
              '<strong>Regras de aposentadoria (EC 103/19):</strong> idade m&iacute;nima de 65 (H) / 62 (M), com 25/10 anos de efetivo exerc&iacute;cio e 10 anos de servi&ccedil;o p&uacute;blico, 5 anos no cargo.',
              '<strong>Regras de transi&ccedil;&atilde;o (EC 103/19, art. 4&ordm; e 21):</strong> pontos, idade m&iacute;nima progressiva, ped&aacute;gio.',
              '<strong>Regra de direito adquirido:</strong> quem cumpriu requisitos antes de 13/11/2019 pode se aposentar pela regra antiga.',
              '<strong>Pens&atilde;o por morte:</strong> 50% + 10% por dependente, vital&iacute;cia ou tempor&aacute;ria.',
              '<strong>Al&iacute;quotas progressivas:</strong> de 7,5% a 16,79% (servidor federal), conforme faixa de contribui&ccedil;&atilde;o.',
              '<strong>Teto:</strong> o maior valor entre o teto do RGPS e o subs&iacute;dio do Ministro do STF.',
              '<strong>Cumulação:</strong> aposentado em RPPS pode acumular com PENS&Atilde;O (mas n&atilde;o com outra aposentadoria).',
              '<strong>Cargo comissionado e tempor&aacute;rio:</strong> vincula-se ao RGPS, n&atilde;o ao RPPS.'
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
          },
          {
            h: '9. L&oacute;gica Proposicional &mdash; Detalhamento Completo',
            p: '<p>Proposi&ccedil;&otilde;es s&atilde;o senten&ccedil;as declarativas (V ou F). N&atilde;o s&atilde;o proposi&ccedil;&otilde;es: exclama&ccedil;&otilde;es, perguntas, ordens, paradoxos, senten&ccedil;as abertas.</p>',
            ul: [
              '<strong>Conectivos l&oacute;gicos:</strong>',
              '&nbsp;&bull; <strong>N&Atilde;O (~):</strong> inverte V/F. ~V = F, ~F = V.<br>',
              '&nbsp;&bull; <strong>E (∧):</strong> V s&oacute; quando ambas V. Tabela-verdade: VV=V, VF=F, FV=F, FF=F.<br>',
              '&nbsp;&bull; <strong>OU (∨):</strong> F s&oacute; quando ambas F. Tabela-verdade: VV=V, VF=V, FV=V, FF=F.<br>',
              '&nbsp;&bull; <strong>SE...ENT&Atilde;O (&rarr;):</strong> F s&oacute; quando V&rarr;F. Tabela: VV=V, VF=F, FV=V, FF=V.<br>',
              '&nbsp;&bull; <strong>SE E SOMENTE SE (&harr;):</strong> V quando ambas V ou ambas F.',
              '<strong>Equival&ecirc;ncias essenciais:</strong>',
              '&nbsp;&bull; <strong>Contrapositiva:</strong> P &rarr; Q &equiv; ~Q &rarr; ~P<br>',
              '&nbsp;&bull; <strong>Implica&ccedil;&atilde;o material:</strong> P &rarr; Q &equiv; ~P &or; Q<br>',
              '&nbsp;&bull; <strong>De Morgan:</strong> ~(P ∧ Q) &equiv; ~P &or; ~Q; ~(P &or; Q) &equiv; ~P ∧ ~Q<br>',
              '&nbsp;&bull; <strong>Bicondicional:</strong> P &harr; Q &equiv; (P &rarr; Q) ∧ (Q &rarr; P)<br>',
              '&nbsp;&bull; <strong>Dupla nega&ccedil;&atilde;o:</strong> ~(~P) &equiv; P',
              '<strong>Negações Importantes:</strong>',
              '&nbsp;&bull; ~(P ∧ Q) = ~P &or; ~Q<br>',
              '&nbsp;&bull; ~(P &or; Q) = ~P ∧ ~Q<br>',
              '&nbsp;&bull; ~(P &rarr; Q) = P ∧ ~Q<br>',
              '&nbsp;&bull; ~(P &harr; Q) = P ↔ ~Q (ou ~P ↔ Q)<br>',
              '&nbsp;&bull; ~(∀x: P(x)) = ∃x: ~P(x)<br>',
              '&nbsp;&bull; ~(∃x: P(x)) = ∀x: ~P(x)<br>',
              '&nbsp;&bull; "Todo A &eacute; B" → "Algum A n&atilde;o &eacute; B"<br>',
              '&nbsp;&bull; "Algum A &eacute; B" → "Nenhum A &eacute; B"<br>',
              '&nbsp;&bull; "Nenhum A &eacute; B" → "Algum A &eacute; B"',
              '<strong>Quantificadores:</strong>',
              '&nbsp;&bull; <strong>Universal (∀):</strong> "todo", "qualquer", "cada".<br>',
              '&nbsp;&bull; <strong>Existencial (∃):</strong> "algum", "existe pelo menos um", "pelo menos um".<br>',
              '&nbsp;&bull; "Algum" no sentido de "pelo menos um" (n&atilde;o exclusivo).',
              '<strong>Tipos de proposições compostas:</strong>',
              '&nbsp;&bull; <strong>Contradição:</strong> sempre F (ex: P ∧ ~P).<br>',
              '&nbsp;&bull; <strong>Tautologia:</strong> sempre V (ex: P &or; ~P).<br>',
              '&nbsp;&bull; <strong>Contingência:</strong> ora V, ora F (ex: P ∧ Q).',
              '<strong>Equivalência x Implicação:</strong>',
              '&nbsp;&bull; <strong>Equivalência (≡):</strong> tabelas-verdade idênticas.<br>',
              '&nbsp;&bull; <strong>Implicação l&oacute;gica (⇒):</strong> toda vez que P &eacute; V, Q tamb&eacute;m &eacute; V.',
              '<strong>Argumento v&aacute;lido:</strong> se todas as premissas forem V, a conclusão tamb&eacute;m &eacute; V.',
              '<strong>Argumento inv&aacute;lido:</strong> pode ter premissas V e conclusão F.',
              '<strong>Diagramas de Euler-Venn:</strong> auxiliam em problemas de conjuntos e silogismos.'
            ]
          },
          {
            h: '10. Análise Combinatória &mdash; Aprofundamento',
            p: '<p>Técnicas de contagem. Cuidado para identificar o tipo correto de agrupamento.</p>',
            ul: [
              '<strong>Princ&iacute;pio Fundamental da Contagem (PFC):</strong> se h&aacute; <em>m</em> modos de fazer A e <em>n</em> modos de fazer B, h&aacute; m &times; n modos de fazer A <em>e</em> B. <em>Princ&iacute;pio multiplicativo.</em>',
              '<strong>Permutação (P):</strong> arranjo onde se usam TODOS os elementos. P(n) = n!.',
              '<strong>Arranjo (A):</strong> grupos onde a ORDEM importa. A(n,k) = n!/(n-k)!.',
              '<strong>Combinação (C):</strong> grupos onde a ORDEM NÃO importa. C(n,k) = n!/[k!(n-k)!].',
              '<strong>Identificação do tipo:</strong>',
              '&nbsp;&bull; Ordem importa? <strong>Sim</strong> &rarr; Arranjo. <strong>Não</strong> &rarr; Combinação.<br>',
              '&nbsp;&bull; Usa todos os elementos? <strong>Sim</strong> &rarr; Permutação.<br>',
              '&nbsp;&bull; Repeti&ccedil;&atilde;o permitida? &rarr; usar f&oacute;rmulas espec&iacute;ficas.',
              '<strong>Permutação com repetição:</strong> P(n; r1, r2, ..., rk) = n! / (r1! &times; r2! &times; ... &times; rk!), onde r1+r2+...+rk = n.',
              '<strong>Combinação completa:</strong> C(n+k-1, k) = número de combinações com repetição de n elementos tomados k a k.',
              '<strong>Triângulo de Pascal:</strong> n=0: 1; n=1: 1 1; n=2: 1 2 1; n=3: 1 3 3 1; n=4: 1 4 6 4 1; n=5: 1 5 10 10 5 1. Linhas dão os valores de C(n,k).',
              '<strong>Binômio de Newton:</strong> (a+b)^n = Σ C(n,k) &times; a^(n-k) &times; b^k, para k de 0 a n.',
              '<strong>Exemplos pr&aacute;ticos:</strong>',
              '&nbsp;&bull; 5 pessoas em fila: P(5) = 5! = 120<br>',
              '&nbsp;&bull; 5 pessoas premiar 1&ordm;, 2&ordm; e 3&ordm; lugares: A(5,3) = 60<br>',
              '&nbsp;&bull; 5 pessoas formar comiss&atilde;o de 3: C(5,3) = 10<br>',
              '&nbsp;&bull; Anagrama de BANANA: P(6; 3,2,1) = 60 (B=1, A=3, N=2)'
            ]
          },
          {
            h: '11. Probabilidade &mdash; Detalhamento',
            p: '<p>Conceito cl&aacute;ssico de Laplace: P = casos favor&aacute;veis / casos poss&iacute;veis.</p>',
            ul: [
              '<strong>Defini&ccedil;&atilde;o cl&aacute;ssica:</strong> P(A) = n&uacute;mero de casos favor&aacute;veis / n&uacute;mero de casos poss&iacute;veis.',
              '<strong>Propriedades:</strong> 0 ≤ P(A) ≤ 1. P(Ω) = 1 (evento certo). P(∅) = 0 (evento imposs&iacute;vel).',
              '<strong>Eventos complementares:</strong> P(A) + P(~A) = 1. Logo, P(~A) = 1 - P(A).',
              '<strong>Eventos mutuamente exclusivos:</strong> P(A ∩ B) = 0.',
              '<strong>Uni&atilde;o de eventos:</strong> P(A ∪ B) = P(A) + P(B) - P(A ∩ B).',
              '<strong>Interse&ccedil;&atilde;o de eventos independentes:</strong> P(A ∩ B) = P(A) &times; P(B).',
              '<strong>Probabilidade condicional:</strong> P(A|B) = P(A ∩ B) / P(B). Indica a probabilidade de A dado que B ocorreu.',
              '<strong>Teorema de Bayes:</strong> P(A|B) = [P(B|A) &times; P(A)] / P(B). Inverte condicional.',
              '<strong>Distribuição Binomial:</strong> P(X=k) = C(n,k) &times; p^k &times; (1-p)^(n-k).',
              '&nbsp;&bull; n = n&uacute;mero de tentativas.<br>',
              '&nbsp;&bull; k = n&uacute;mero de sucessos desejados.<br>',
              '&nbsp;&bull; p = probabilidade de sucesso em cada tentativa.<br>',
              '&nbsp;&bull; Esperan&ccedil;a: E(X) = n&times;p. Vari&acirc;ncia: Var(X) = n&times;p&times;(1-p).',
              '<strong>Exemplo:</strong> lan&ccedil;ar moeda 10 vezes, qual P de sair 5 caras?<br>&nbsp;&bull; n=10, k=5, p=0,5. P = C(10,5) &times; 0,5^5 &times; 0,5^5 = 252 &times; 0,000976 = 0,2461.'
            ]
          },
          {
            h: '12. Estat&iacute;stica &mdash; Medidas, Tendência e Dispersão',
            p: '<p>Conceitos estat&iacute;sticos para concurso.</p>',
            ul: [
              '<strong>M&eacute;dia aritmética simples:</strong> &micro; = (x1 + x2 + ... + xn) / n.',
              '<strong>M&eacute;dia aritmética ponderada:</strong> &micro; = Σ(xi &times; pi) / Σ pi.',
              '<strong>Mediana (Md):</strong> valor que divide a amostra ordenada em duas metades. Se n &iacute;mpar, &eacute; o valor central. Se n par, &eacute; a m&eacute;dia dos dois centrais.',
              '<strong>Moda (Mo):</strong> valor que mais se repete. Pode haver mais de uma (bimodal, multimodal).',
              '<strong>Relação entre m&eacute;dia, mediana e moda:</strong>',
              '&nbsp;&bull; Distribui&ccedil;&atilde;o sim&eacute;trica: &micro; = Md = Mo.<br>',
              '&nbsp;&bull; Assim&eacute;trica &agrave; direita: Mo < Md < &micro;.<br>',
              '&nbsp;&bull; Assim&eacute;trica &agrave; esquerda: &micro; < Md < Mo.',
              '<strong>Vari&acirc;ncia (σ&sup2;):</strong> m&eacute;dia dos quadrados dos desvios em rela&ccedil;&atilde;o &agrave; m&eacute;dia. &sigma;&sup2; = Σ(xi - &micro;)&sup2; / n (populacional) ou /(n-1) (amostral).',
              '<strong>Desvio padr&atilde;o (σ):</strong> raiz quadrada da vari&acirc;ncia.',
              '<strong>Coeficiente de varia&ccedil;&atilde;o (CV):</strong> CV = σ / &micro; &times; 100%. Mede dispers&atilde;o relativa.',
              '<strong>Frequência relativa:</strong> fr = fi / n. Pode ser expressa em %.',
              '<strong>Gr&aacute;ficos:</strong> histograma (vari&aacute;veis cont&iacute;nuas), gr&aacute;fico de barras (discretas), gr&aacute;fico de pizza (proporções).',
              '<strong>Probabilidade e estat&iacute;stica:</strong> estat&iacute;stica descritiva, inferencial.'
            ]
          },
          {
            h: '13. Matem&aacute;tica Financeira &mdash; Detalhamento',
            p: '<p>Juros, descontos, taxas.</p>',
            ul: [
              '<strong>Juros Simples:</strong> J = C &times; i &times; t. M = C(1 + i&middot;t). Os juros incidem apenas sobre o capital inicial.',
              '&nbsp;&bull; Juros sempre iguais.<br>',
              '&nbsp;&bull; C = capital inicial. i = taxa (em decimal). t = per&iacute;odo.<br>',
              '&nbsp;&bull; Convers&atilde;o de taxa: ano &divide; 12 = m&ecirc;s (simples).',
              '<strong>Juros Compostos:</strong> M = C(1 + i)^t. Os juros incidem sobre o capital + juros acumulados.',
              '&nbsp;&bull; Crescimento exponencial.<br>',
              '&nbsp;&bull; Convers&atilde;o de taxa anual para mensal: (1 + i_a) = (1 + i_m)^12 &rarr; i_m = (1 + i_a)^(1/12) - 1.',
              '<strong>Descontos:</strong>',
              '&nbsp;&bull; <strong>Simples (por dentro):</strong> D = N &times; d &times; t. Valor atual: A = N - D = N(1 - d&middot;t).<br>',
              '&nbsp;&bull; <strong>Composto (por dentro):</strong> D = N &times; [1 - (1-d)^t]. Valor atual: A = N &times; (1-d)^t.<br>',
              '&nbsp;&bull; <strong>Racional (por dentro):</strong> D = N &times; d &times; t / (1 + d&middot;t).<br>',
              '&nbsp;&bull; <strong>Comercial (por fora):</strong> D = N &times; d &times; t.',
              '<strong>Equival&ecirc;ncia de capitais:</strong> dois capitais s&atilde;o equivalentes se, descontados &agrave; mesma taxa e mesma data focal, t&ecirc;m o mesmo valor atual.',
              '<strong>Taxa efetiva vs nominal:</strong> efetiva &eacute; a aplicada; nominal &eacute; a taxa contratual (ex: 12% a.a. com capitaliza&ccedil;&atilde;o mensal = 1% a.m. = 12,68% efetiva).',
              '<strong>S&eacute;ries de pagamentos:</strong>',
              '&nbsp;&bull; <strong>Postecipada (renda certa):</strong> pagamento no fim de cada per&iacute;odo.<br>',
              '&nbsp;&bull; <strong>Antecipada:</strong> pagamento no in&iacute;cio de cada per&iacute;odo.<br>',
              '&nbsp;&bull; <strong>F&oacute;rmula do valor presente (postecipada):</strong> PV = PMT &times; [(1 - (1+i)^-n) / i].<br>',
              '&nbsp;&bull; <strong>F&oacute;rmula do valor futuro:</strong> FV = PMT &times; [((1+i)^n - 1) / i].',
              '<strong>Taxa interna de retorno (TIR):</strong> taxa que iguala o valor presente l&iacute;quido a zero.',
              '<strong>Inflação e corre&ccedil;&atilde;o monet&aacute;ria:</strong> taxa real = (1 + taxa nominal) / (1 + infla&ccedil;&atilde;o) - 1.'
            ]
          },
          {
            h: '14. Geometria Plana e Espacial',
            p: '<p>Conceitos b&aacute;sicos de geometria para resolver quest&otilde;es.</p>',
            ul: [
              '<strong>Per&iacute;metro (P):</strong> soma dos lados de uma figura.',
              '<strong>&Aacute;rea (A):</strong>',
              '&nbsp;&bull; <strong>Quadrado:</strong> A = L&sup2;<br>',
              '&nbsp;&bull; <strong>Ret&acirc;ngulo:</strong> A = base &times; altura<br>',
              '&nbsp;&bull; <strong>Tri&acirc;ngulo:</strong> A = (base &times; altura) / 2<br>',
              '&nbsp;&bull; <strong>Trap&eacute;zio:</strong> A = [(B + b) &times; h] / 2 (soma de bases vezes altura / 2)<br>',
              '&nbsp;&bull; <strong>Losango:</strong> A = (D &times; d) / 2 (diagonais)<br>',
              '&nbsp;&bull; <strong>C&iacute;rculo:</strong> A = π &times; r&sup2;<br>',
              '&nbsp;&bull; <strong>Setor circular:</strong> A = (θ/360) &times; π &times; r&sup2;',
              '<strong>Volume (V):</strong>',
              '&nbsp;&bull; <strong>Cubo:</strong> V = a&sup3;<br>',
              '&nbsp;&bull; <strong>Paralelep&iacute;pedo:</strong> V = a &times; b &times; c<br>',
              '&nbsp;&bull; <strong>Cilindro:</strong> V = π &times; r&sup2; &times; h<br>',
              '&nbsp;&bull; <strong>Cone:</strong> V = (1/3) &times; π &times; r&sup2; &times; h<br>',
              '&nbsp;&bull; <strong>Esfera:</strong> V = (4/3) &times; π &times; r&sup3;<br>',
              '&nbsp;&bull; <strong>Pir&acirc;mide:</strong> V = (1/3) &times; A_base &times; h',
              '<strong>Teorema de Pit&aacute;goras:</strong> a&sup2; = b&sup2; + c&sup2;. Para tri&acirc;ngulo ret&acirc;ngulo.',
              '<strong>Raz&otilde;es trigonom&eacute;tricas:</strong> sen, cos, tan em tri&acirc;ngulos ret&acirc;ngulos.',
              '<strong>Semelhan&ccedil;a de tri&acirc;ngulos:</strong> raz&atilde;o entre lados correspondentes &eacute; constante.'
            ]
          },
          {
            h: '15. Conjuntos &mdash; Detalhamento',
            p: '<p>Opera&ccedil;&otilde;es com conjuntos e diagramas de Venn.</p>',
            ul: [
              '<strong>Representação:</strong> por extenso (listagem), por propriedade (x | condi&ccedil;&atilde;o), por diagrama de Venn.',
              '<strong>Subconjunto (⊂):</strong> A ⊂ B se todo elemento de A pertence a B.',
              '&nbsp;&bull; A ⊂ A (todo conjunto &eacute; subconjunto de si mesmo).<br>',
              '&nbsp;&bull; ∅ ⊂ A (conjunto vazio &eacute; subconjunto de qualquer conjunto).<br>',
              '&nbsp;&bull; N&uacute;mero de subconjuntos: 2^n.',
              '<strong>Uni&atilde;o (A ∪ B):</strong> elementos de A ou B. |A ∪ B| = |A| + |B| - |A ∩ B|.',
              '<strong>Interse&ccedil;&atilde;o (A ∩ B):</strong> elementos comuns a A e B. Se A ∩ B = ∅, s&atilde;o disjuntos.',
              '<strong>Diferen&ccedil;a (A - B):</strong> elementos de A que n&atilde;o est&atilde;o em B.',
              '<strong>Complementar (A&acute; ou A^c):</strong> elementos do universo (U) que n&atilde;o est&atilde;o em A. A ∪ A&acute; = U; A ∩ A&acute; = ∅.',
              '<strong>Leis de De Morgan (conjuntos):</strong>',
              '&nbsp;&bull; (A ∪ B)&acute; = A&acute; ∩ B&acute;<br>',
              '&nbsp;&bull; (A ∩ B)&acute; = A&acute; ∪ B&acute;',
              '<strong>Princ&iacute;pio da inclus&atilde;o-exclus&atilde;o:</strong>',
              '&nbsp;&bull; |A ∪ B| = |A| + |B| - |A ∩ B|<br>',
              '&nbsp;&bull; |A ∪ B ∪ C| = |A| + |B| + |C| - |A ∩ B| - |A ∩ C| - |B ∩ C| + |A ∩ B ∩ C|',
              '<strong>Exemplo:</strong> 30 alunos, 15 gostam de matem&aacute;tica, 10 de portugu&ecirc;s, 5 de ambos. Quantos gostam de pelo menos uma? 15 + 10 - 5 = 20. S&oacute matem&aacute;tica: 10. S&oacute portugu&ecirc;s: 5. Nenhuma: 30 - 20 = 10.'
            ]
          },
          {
            h: '16. Sequências, Padrões e Raciocínio Analítico (CEBRASPE)',
            p: '<p>Tipo especial de quest&atilde;o muito cobrada.</p>',
            ul: [
              '<strong>Sequência aritmética (PA):</strong> a_n = a_1 + (n-1) &times; r, onde r &eacute; a raz&atilde;o.',
              '<strong>Sequência geométrica (PG):</strong> a_n = a_1 &times; q^(n-1), onde q &eacute; a raz&atilde;o.',
              '<strong>Soma dos n primeiros termos de uma PA:</strong> S_n = n &times; (a_1 + a_n) / 2.',
              '<strong>Soma dos n primeiros termos de uma PG:</strong> S_n = a_1 &times; (q^n - 1) / (q - 1), q &ne; 1.',
              '<strong>Padrões num&eacute;ricos:</strong> analisar diferen&ccedil;as, raz&otilde;es, altern&acirc;ncia (pares/&iacute;mpares), Fibonacci.',
              '<strong>Sequência de Fibonacci:</strong> 1, 1, 2, 3, 5, 8, 13, 21, 34, 55... Cada termo &eacute; a soma dos dois anteriores.',
              '<strong>Raciocínio analítico CEBRASPE:</strong> enunciados longos com gr&aacute;ficos, tabelas, esquemas. Cuidado com:',
              '&nbsp;&bull; Palavras absolutistas (sempre, nunca, todo, nenhum) - geralmente tornam a proposi&ccedil;&atilde;o F.<br>',
              '&nbsp;&bull; Palavras suavizadoras (alguns, pode, eventualmente) - geralmente tornam a proposi&ccedil;&atilde;o C.<br>',
              '&nbsp;&bull; Quantificadores invertidos (alguns &eacute; diferente de todos).<br>',
              '&nbsp;&bull; Distin&ccedil;&atilde;o entre "se P, ent&atilde;o Q" e "P porque Q".',
              '<strong>Diagramas l&oacute;gicos:</strong> auxiliam em problemas de conjuntos e silogismos categ&oacute;ricos.',
              '<strong>Silogismo categ&oacute;rico:</strong> racioc&iacute;nio dedutivo com tr&ecirc;s proposi&ccedil;&otilde;es (duas premissas e uma conclus&atilde;o). Ex: "Todo A &eacute; B. Todo B &eacute; C. Logo, todo A &eacute; C."',
              '<strong>Fal&aacute;cias l&oacute;gicas:</strong>',
              '&nbsp;&bull; <strong>Ad hominem:</strong> atacar a pessoa, n&atilde;o o argumento.<br>',
              '&nbsp;&bull; <strong>Ad populum:</strong> "todo mundo faz, ent&atilde;o &eacute; certo".<br>',
              '&nbsp;&bull; <strong>Falsa dicotomia:</strong> apresentar s&oacute; duas op&ccedil;&otilde;es quando h&aacute; mais.<br>',
              '&nbsp;&bull; <strong>Non sequitur:</strong> conclus&atilde;o n&atilde;o decorre das premissas.<br>',
              '&nbsp;&bull; <strong>Espantalho:</strong> distorcer o argumento do advers&aacute;rio.',
              '<strong>Proposições equivalentes e tautológicas:</strong> s&atilde;o verdadeiras em qualquer situa&ccedil;&atilde;o.',
              '<strong>Proposições contradit&oacute;rias:</strong> sempre uma V e outra F.'
            ]
          },
          {
            h: '17. Equações e Sistemas Lineares',
            p: '<p>&Uacute;ltima revis&atilde;o de matem&aacute;tica b&aacute;sica.</p>',
            ul: [
              '<strong>Equa&ccedil;&atilde;o de 1&ordm; grau:</strong> ax + b = 0 &rarr; x = -b/a.',
              '<strong>Equa&ccedil;&atilde;o de 2&ordm; grau:</strong> ax&sup2; + bx + c = 0. F&oacute;rmula de Bhaskara: x = (-b ± √Δ) / 2a, onde Δ = b&sup2; - 4ac.',
              '&nbsp;&bull; Se Δ > 0: duas ra&iacute;zes reais distintas.<br>',
              '&nbsp;&bull; Se Δ = 0: duas ra&iacute;zes reais iguais.<br>',
              '&nbsp;&bull; Se Δ < 0: nenhuma raiz real.',
              '<strong>Rela&ccedil;&otilde;es entre coeficientes e ra&iacute;zes:</strong>',
              '&nbsp;&bull; Soma: x1 + x2 = -b/a<br>',
              '&nbsp;&bull; Produto: x1 &times; x2 = c/a',
              '<strong>Sistemas lineares 2x2:</strong> resolu&ccedil;&atilde;o por substitui&ccedil;&atilde;o, adi&ccedil;&atilde;o ou regra de Cramer.',
              '<strong>Regra de Cramer 2x2:</strong>',
              '&nbsp;&bull; ax + by = c<br>',
              '&nbsp;&bull; dx + ey = f<br>',
              '&nbsp;&bull; D = a&times;e - b&times;d (determinante).<br>',
              '&nbsp;&bull; Se D &ne; 0: SPD (solu&ccedil;&atilde;o &uacute;nica).<br>',
              '&nbsp;&bull; Se D = 0: SI (sem solu&ccedil;&atilde;o) ou SPI (infinitas).',
              '<strong>Sistemas 3x3:</strong> regra de Cramer ou escalonamento (Gauss).',
              '<strong>Inequa&ccedil;&otilde;es:</strong> multiplicar/dividir por n&uacute;mero negativo inverte o sinal da desigualdade.',
              '<strong>Inequação-produto:</strong> estudar o sinal de cada fator (usar tabela de sinais).',
              '<strong>Inequação-quociente:</strong> n&atilde;o pode zerar o denominador.'
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
