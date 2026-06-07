/* ==========================================================
   materias/portugues.js — Português (25 lições)
   ========================================================== */
(function (global) {
  'use strict';
  const M = {};

  M['interpretacao'] = {
    topico: 'interpretacao',
    titulo: 'Interpretação de Texto (CEBRASPE)',
    resumo: 'Ideia principal, inferência, coesão, coerência. Atenção a palavras-chave, conectivos, pronomes, hipônimos/hiperônimos.',
    teoria: '<p>A <strong>interpretação de texto</strong> no CEBRASPE exige atenção a: <em>ideia principal</em> (tema central), <em>inferência</em> (conclusões não explícitas), <em>coesão</em> (conexão entre palavras e frases), <em>coerência</em> (relação lógica entre ideias), <em>conectivos</em>, <em>pronomes</em>, <em>sinônimos/antônimos</em>, <em>hipônimos/hiperônimos</em>.</p>',
    regras:['Ler o texto com atenção, grifando palavras-chave', 'Identificar a ideia principal (tema central)', 'Atenção aos conectivos (causa, consequência, oposição, etc.)', 'Atenção aos pronomes (referenciação)', 'Não extrapolar o que está no texto'],
    excecoes:['O <em>CEBRASPE</em> adora <em>pegadinhas</em> (ideia "fora" do texto).','A <em>inferência</em> é o que o texto permite concluir, mas não está explícito.'],
    exemplos:['Texto afirma "A educação é fundamental" → a educação é valorizada.','Texto apresenta "X, mas Y" → X é parcialmente anulado por Y.'],
    pegadinchas:['<strong>Não</strong> extrapolar.','<strong>Não</strong> confundir opinião do autor com opinião do leitor.','<strong>Atenção</strong> a palavras absolutas (sempre, nunca, todos, nenhum).'],
    exercicios: [
      { q: 'A interpretação de texto exige atenção à ideia principal, à coesão e à coerência.', g: 'CERTO.' },
      { q: 'A interpretação pode incluir informações que não estão no texto.', g: 'ERRADO. Deve limitar-se ao texto.' }
    ],
    sotaque: '<strong>"LEITURA ATENTA + IDEIA PRINCIPAL + CONECTIVOS + NÃO EXTRAPOLAR"</strong>'
  };

  M['tipologia-textual'] = {
    topico: 'tipologia-textual',
    titulo: 'Tipologia Textual: Narração, Descrição, Dissertação',
    resumo: 'Narração: fatos, personagens, tempo, espaço. Descrição: características, detalhes. Dissertação: ideias, argumentos.',
    teoria: '<p>As <strong>tipologias textuais</strong> são: <em>narrativa</em> (narração de fatos), <em>descritiva</em> (descrição de objetos, lugares, pessoas) e <em>dissertativa</em> (exposição de ideias e argumentos). No CEBRASPE, os textos são predominantemente dissertativos.</p>',
    regras:['Narrativa: fatos, personagens, narrador, tempo, espaço', 'Descritiva: características, detalhes, sensações', 'Dissertativa: ideias, argumentos, tese, conclusão'],
    excecoes:['Um texto pode ter <em>mistura de tipologias</em> (ex.: dissertação com trecho descritivo).','O <em>texto dissertativo-argumentativo</em> é o mais cobrado em provas.'],
    exemplos:['Texto narrativo: conto, crônica, romance.','Texto descritivo: anúncio, propaganda.','Texto dissertativo: artigo de opinião, ensaio, redação.'],
    pegadinchas:['<strong>Não confundir</strong> narração com descrição.','<strong>Não confundir</strong> dissertação expositiva com argumentativa.','O <em>texto argumentativo</em> visa <em>convencer</em>.'],
    exercicios: [
      { q: 'São tipologias textuais: narração, descrição e dissertação.', g: 'CERTO.' },
      { q: 'O texto dissertativo visa apenas informar, sem argumentos.', g: 'ERRADO. Pode ter argumentos (dissertação-argumentativa).' }
    ],
    sotaque: '<strong>"NARRAÇÃO + DESCRIÇÃO + DISSERTAÇÃO = 3 TIPOS"</strong>'
  };

  M['coesao-coerencia'] = {
    topico: 'coesao-coerencia',
    titulo: 'Coesão e Coerência Textual',
    resumo: 'Coesão: conexão entre palavras e frases. Coerência: relação lógica entre ideias.',
    teoria: '<p>A <strong>coesão</strong> é a conexão entre palavras e frases (mecanismos linguísticos). A <strong>coerência</strong> é a relação lógica entre as ideias do texto (sentido global). Um texto pode ser coeso, mas incoerente, e vice-versa.</p>',
    regras:['Coesão: pronomes, sinônimos, conectivos, elipse, repetição', 'Coerência: relação lógica, progressão de ideias, não-contradição', 'Texto coeso + coerente = bem escrito'],
    excecoes:['Um texto <em>coeso</em> pode ser <em>incoerente</em> (pronomes bem usados, mas ideias sem sentido).','Um texto <em>coerente</em> pode ter <em>problemas de coesão</em>.'],
    exemplos:['Coesão: "Pedro saiu. <em>Ele</em> foi ao mercado." (pronome refere-se a Pedro).','Coerência: "Pedro foi ao mercado. <em>Logo</em>, ele comprou pão." (relação lógica).'],
    pegadinchas:['<strong>Coesão</strong> ≠ <em>coerência</em>.','A <em>repetição</em> é mecanismo de coesão.','O <em>conectivo</em> é mecanismo de coesão e contribui para a coerência.'],
    exercicios: [
      { q: 'Coesão é a conexão entre palavras e frases, e coerência é a relação lógica entre ideias.', g: 'CERTO.' },
      { q: 'Um texto pode ser coeso, mas incoerente.', g: 'CERTO.' }
    ],
    sotaque: '<strong>"COESÃO: CONEXÃO. COERÊNCIA: LÓGICA."</strong>'
  },

  M['concordancia-verbal'] = {
    topico: 'concordancia-verbal',
    titulo: 'Concordância Verbal',
    resumo: 'Regra geral: verbo concorda com sujeito. Casos especiais: sujeito composto, coletivo, mais de um, etc.',
    teoria: '<p>A <strong>concordância verbal</strong> é a relação de concordância entre o verbo e o sujeito. A <em>regra geral</em> é que o verbo concorda com o sujeito em <em>número</em> e <em>pessoa</em>. Há <em>casos especiais</em>: sujeito composto, coletivo, mais de um, etc.</p>',
    regras:['Regra geral: verbo concorda com sujeito (singular/plural, 1ª/2ª/3ª pessoa)', 'Sujeito composto antes do verbo: verbo no plural', 'Sujeito composto depois do verbo: verbo no singular (regra geral) ou plural', 'Coletivo: verbo no singular (regra geral)'],
    excecoes:['Sujeito <em>composto</em> de 3ª pessoa antes do verbo → plural.','Sujeito <em>coletivo</em> (multidão, povo) → singular.','Sujeito <em>mais de um</em> → singular.'],
    exemplos:['"Os meninos correram" → plural.','"Correu os meninos" → singular (sujeito posposto).','"A multidão aplaudiu" → singular.'],
    pegadinchas:['<strong>Sujeito composto</strong> posposto → verbo no <em>singular</em> (regra geral, mas há exceções).','<em>Sujeito coletivo</em> → verbo no <em>singular</em>.','<em>Mais de um</em> → verbo no <em>singular</em>.'],
    exercicios: [
      { q: 'A concordância verbal segue a regra geral de o verbo concordar com o sujeito em número e pessoa.', g: 'CERTO.' },
      { q: 'O verbo sempre fica no plural quando o sujeito é composto.', g: 'ERRADO. Quando o sujeito composto é posposto, o verbo pode ficar no singular.' }
    ],
    sotaque: '<strong>"REGRA: SUJEITO + VERBO. CASOS ESPECIAIS: COMPOSTO, COLETIVO."</strong>'
  },

  M['concordancia-nominal'] = {
    topico: 'concordancia-nominal',
    titulo: 'Concordância Nominal',
    resumo: 'Adjetivo concorda com substantivo em gênero e número. Casos especiais: adjunto adverbial, pronome, artigo.',
    teoria: '<p>A <strong>concordância nominal</strong> é a relação entre o substantivo e seus determinantes e modificadores. A <em>regra geral</em> é: o adjetivo concorda em <em>gênero</em> e <em>número</em> com o substantivo.</p>',
    regras:['Adjetivo concorda com substantivo em gênero e número', 'Artigo concorda com substantivo', 'Pronome concorda com substantivo', 'Numeral concorda com substantivo'],
    excecoes:['<em>Próprio</em> (no sentido de "conveniente"): "É próprio do servidor".','<em>Mesmo</em>, <em>próprio</em>, <em>anexo</em>, <em>incluso</em>: concordam com o substantivo.'],
    exemplos:['"As meninas bonitas" → feminino plural.','"Os livros interessantes" → masculino plural.'],
    pegadinchas:['<strong>Próprio</strong> no sentido de "conveniente" é invariável: "É próprio do servidor".','<strong>Mesmo</strong> concorda com o substantivo.','A <em>palavra "obrigado"</em> concorda com o gênero de quem agradece.'],
    exercicios: [
      { q: 'A concordância nominal segue a regra de o adjetivo concordar com o substantivo em gênero e número.', g: 'CERTO.' },
      { q: 'A palavra "próprio", no sentido de "conveniente", varia em gênero e número.', g: 'ERRADO. É invariável nesse sentido.' }
    ],
    sotaque: '<strong>"ADJETIVO + SUBS: GÊNERO + NÚMERO."</strong>'
  },

  M['crase'] = {
    topico: 'crase',
    titulo: 'Crase: Regra Geral e Exceções',
    resumo: 'Crase: fusão da preposição "a" com o artigo "a". Regra geral: antes de palavras femininas. Exceções: nomes próprios, cidades, etc.',
    teoria: '<p>A <strong>crase</strong> é a fusão da preposição <em>a</em> com o artigo <em>a</em> (ou <em>as</em>), formando o acento grave (`). A <em>regra geral</em> é usar crase antes de palavras femininas que aceitem o artigo. As <em>exceções</em> são muitas.</p>',
    regras:['Regra geral: antes de palavras femininas que aceitam artigo', 'Exceções: antes de nomes próprios femininos (Maria, Ana), antes de cidades (Salvador, BH), antes de "a distância", "a partir de"', 'Antes de palavras masculinas: não há crase', 'Antes de verbos: não há crase'],
    excecoes:['Antes de <em>nomes próprios</em>: não há crase ("Vou a Maria", não "Vou à Maria").','Antes de <em>cidades</em>: depende ("Vou a São Paulo" = sem crase, "Vou à Bahia" = com crase, porque "Bahia" admite artigo).'],
    exemplos:['"Vou à escola" → crase (escola aceita artigo).','"Vou a Salvador" → sem crase (cidade, sem artigo).','"Refiro-me à Maria" → sem crase (nome próprio, mesmo com "a distância").'],
    pegadinchas:['<strong>Nomes próprios</strong>: não há crase.','<strong>Cidades</strong>: depende do artigo.','<strong>Verbos</strong>: não há crase.','<strong>Pronome demonstrativo</strong> "a": "Refiro-me a esta menina" → "Refiro-me a esta" (sem crase).'],
    exercicios: [
      { q: 'A crase é a fusão da preposição "a" com o artigo "a".', g: 'CERTO.' },
      { q: 'A crase é sempre usada antes de palavras femininas.', g: 'ERRADO. Há exceções (nomes próprios, cidades sem artigo, verbos).' }
    ],
    sotaque: '<strong>"A + A = À. NOME PRÓPRIO: SEM CRASE."</strong>'
  },

  M['regencia'] = {
    topico: 'regencia',
    titulo: 'Regência Verbal e Nominal',
    resumo: 'Verbo: transitividade e complementos. Nome: preposição regida. Casos clássicos: preferir, assistir, visar, etc.',
    teoria: '<p>A <strong>regência</strong> é a relação de dependência entre verbos/nomes e seus complementos. A <em>verbal</em> trata da transitividade do verbo. A <em>nominal</em> trata da preposição exigida pelo nome.</p>',
    regras:['Verbo transitivo direto: VTD (sem preposição)', 'Verbo transitivo indireto: VTI (com preposição)', 'Verbo transitivo direto e indireto: VTDI (com preposição)', 'Nome: tem preposição regida'],
    excecoes:['<em>Preferir</em> → preposição "a" (Preferir A a B).','<em>Assistir</em> → preposição "a" (Assistir A, no sentido de presenciar).','<em>Visar</em> → preposição "a" (Visar A, no sentido de pretender).'],
    exemplos:['"Gosto de livros" (verbo "gostar" + preposição "de").','"Prefiro isso a aquilo" (verbo "preferir" + preposição "a").'],
    pegadinchas:['<strong>Preferir</strong> → <em>a</em>.','<strong>Assistir</strong> → <em>a</em> (no sentido de presenciar).','<strong>Visar</strong> → <em>a</em> (no sentido de pretender).'],
    exercicios: [
      { q: 'A regência trata da relação entre verbos/nomes e seus complementos.', g: 'CERTO.' },
      { q: 'O verbo "preferir" exige a preposição "de".', g: 'ERRADO. Exige a preposição "a".' }
    ],
    sotaque: '<strong>"PREFERIR + A. ASSISTIR + A. VISAR + A."</strong>'
  },

  M['crase-2'] = {
    topico: 'crase-2',
    titulo: 'Crase: Casos Especiais',
    resumo: 'À moda de, à medida que, à paisana, à vontade, à distância, à procura de, à força, à luz, à mão, à noite.',
    teoria: '<p>Há <strong>expressões fixas</strong> que admitem crase: <em>à moda de</em>, <em>à medida que</em>, <em>à paisana</em>, <em>à vontade</em>, <em>à distância</em>, <em>à procura de</em>, <em>à força</em>, <em>à luz</em>, <em>à mão</em>, <em>à noite</em> (no sentido temporal), <em>à direita</em>, <em>à esquerda</em>, entre outras.</p>',
    regras:['À moda de (à moda da casa)', 'À medida que (conforme)', 'À paisana (sem uniforme)', 'À vontade (à disposição)', 'À distância (longe)', 'À procura de (buscando)'],
    excecoes:['"À noite" (temporal) → com crase.','"De noite" (geral) → sem crase.','"À moda" → com crase.'],
    exemplos:['"Ele veio à noite" (temporal) → com crase.','"Ele veio de noite" (geral) → sem crase.'],
    pegadinchas:['<strong>À noite</strong> = temporal.','<strong>De noite</strong> = geral.','"À moda de" → com crase.'],
    exercicios: [
      { q: 'A expressão "à moda de" admite crase.', g: 'CERTO.' },
      { q: 'A expressão "a noite" (geral) admite crase.', g: 'ERRADO. Sem crase.' }
    ],
    sotaque: '<strong>"À MODA + À MEDIDA + À PAISANA + À VONTADE"</strong>'
  },

  M['pontuacao'] = {
    topico: 'pontuacao',
    titulo: 'Pontuação: Vírgula, Ponto, Ponto e Vírgula, Dois-Pontos',
    resumo: 'Vírgula: enumeração, aposto, vocativo, adjuntos. Ponto: fim de frase. Ponto e vírgula: pausa maior. Dois-pontos: explicação.',
    teoria: '<p>A <strong>pontuação</strong> é essencial para a clareza. <strong>Vírgula</strong>: enumeração, aposto, vocativo, adjuntos deslocados, antes de "mas" (em regra). <strong>Ponto</strong>: fim de frase. <strong>Ponto e vírgula</strong>: pausa maior que a vírgula. <strong>Dois-pontos</strong>: explicação, citação, enumeração.</p>',
    regras:['Vírgula: enumeração, aposto, vocativo, adjuntos, orações intercaladas', 'Ponto: fim de frase', 'Ponto e vírgula: pausa maior (entre orações independentes)', 'Dois-pontos: explicação, citação, enumeração'],
    excecoes:['Antes de "e" (coordenada aditiva), a vírgula é <em>facultativa</em>.','Antes de "mas", a vírgula é <em>obrigatória</em> (em regra).'],
    exemplos:['"Comprei arroz, feijão, carne e ovos" (vírgula na enumeração, exceto antes do "e").','"Pedro, venha aqui" (vírgula no vocativo).','"Maria, minha irmã, chegou" (vírgula no aposto).'],
    pegadinchas:['<strong>Não</strong> usar vírgula entre sujeito e verbo.','<strong>Não</strong> usar vírgula antes de "e" (regra geral).','<strong>Não</strong> usar vírgula entre nome e complemento.'],
    exercicios: [
      { q: 'A vírgula é usada em enumeração, aposto, vocativo e adjuntos.', g: 'CERTO.' },
      { q: 'A vírgula deve ser usada entre sujeito e verbo.', g: 'ERRADO. Isso é considerado erro de pontuação.' }
    ],
    sotaque: '<strong>"VÍRGULA: ENUM + APP + VOC + ADJ. PONTO: FIM."</strong>'
  },

  M['pronomes'] = {
    topico: 'pronomes',
    titulo: 'Pronomes: Tipos e Uso',
    resumo: 'Pessoais (eu, tu, ele), possessivos (meu, teu, seu), demonstrativos (este, esse, aquele), relativos (que, o qual), indefinidos.',
    teoria: '<p>Os <strong>pronomes</strong> substituem ou acompanham o substantivo. Tipos: <em>pessoais</em> (eu, tu, ele, nós, vós, eles), <em>possessivos</em> (meu, teu, seu, nosso, vosso, seu), <em>demonstrativos</em> (este, esse, aquele), <em>relativos</em> (que, o qual, cujo), <em>indefinidos</em> (algum, nenhum, todo, cada).</p>',
    regras:['Pessoais: substituem o nome', 'Possessivos: indicam posse', 'Demonstrativos: indicam posição', 'Relativos: conectam orações', 'Indefinidos: generalizam ou especificam'],
    excecoes:['<em>Este</em> (perto do falante) ≠ <em>esse</em> (perto do ouvinte) ≠ <em>aquele</em> (longe).','<em>Cujo</em> é pronome relativo, indica posse.'],
    exemplos:['"Eu comprei um livro" → "Eu" é pronome pessoal.','"Este livro é meu" → "Este" é demonstrativo, "meu" é possessivo.'],
    pegadinchas:['<strong>Este</strong> = perto (falante).','<strong>Esse</strong> = perto (ouvinte).','<strong>Aquele</strong> = longe.','<em>Cujo</em> é relativo (e <em>não</em> concorda com o possessivo, mas com o possuidor).'],
    exercicios: [
      { q: 'Os pronomes podem ser pessoais, possessivos, demonstrativos, relativos e indefinidos.', g: 'CERTO.' },
      { q: 'O pronome "cujo" concorda com o possuidor.', g: 'CERTO.' }
    ],
    sotaque: '<strong>"PESSOAL + POSSESSIVO + DEMONSTRATIVO + RELATIVO + INDEFINIDO"</strong>'
  },

  M['verbos'] = {
    topico: 'verbos',
    titulo: 'Tempos e Modos Verbais',
    resumo: 'Tempos: presente, pretérito (passado), futuro. Modos: indicativo, subjuntivo, imperativo.',
    teoria: '<p>Os <strong>verbos</strong> têm <em>três modos</em>: <em>indicativo</em> (fato real), <em>subjuntivo</em> (hipótese, desejo, dúvida), <em>imperativo</em> (ordem). Os <em>três tempos simples</em>: <em>presente</em>, <em>pretérito</em>, <em>futuro</em>.</p>',
    regras:['Indicativo: fato real', 'Subjuntivo: hipótese, desejo, dúvida', 'Imperativo: ordem', 'Presente: ação atual', 'Pretérito: ação passada', 'Futuro: ação futura'],
    excecoes:['<em>Subjuntivo presente</em>: que eu faça, que tu faças, que ele faça.','<em>Subjuntivo pretérito</em>: se eu fizesse, se tu fizesses, se ele fizesse.','<em>Futuro do subjuntivo</em>: quando eu fizer, quando tu fizeres.'],
    exemplos:['"Eu estudo" → indicativo presente.','"Que eu estude" → subjuntivo presente.','"Estuda!" → imperativo.'],
    pegadinchas:['<strong>Subjuntivo</strong> aparece em orações com <em>embora</em>, <em>talvez</em>, <em>quando</em> (futuro), <em>se</em> (hipótese).','O <em>imperativo</em> tem forma própria (2ª pessoa: "estuda", "estude").','O <em>infinitivo</em> não é modo, mas forma nominal.'],
    exercicios: [
      { q: 'Os verbos têm três modos: indicativo, subjuntivo e imperativo.', g: 'CERTO.' },
      { q: 'O verbo no subjuntivo indica fato real.', g: 'ERRADO. Indica hipótese, desejo ou dúvida.' }
    ],
    sotaque: '<strong>"INDICATIVO + SUBJUNTIVO + IMPERATIVO = 3 MODOS"</strong>'
  },

  M['acentuacao'] = {
    topico: 'acentuacao',
    titulo: 'Acentuação Gráfica',
    resumo: 'Agudas (oxítonas com -as, -es, -os, -am, -em), graves (paroxítonas com ditongo), esdrúxulas (proparoxítonas), til.',
    teoria: '<p>A <strong>acentuação gráfica</strong> segue regras: <em>agudas</em> (terminadas em -as, -es, -os, -am, -em são acentuadas), <em>graves</em> (paroxítonas com ditongo aberto, -r, -l, -x, -ps, ditongo nasal, vogal tônica -i/-u seguidos de -nh ou -s são acentuadas), <em>esdrúxulas</em> (sempre acentuadas).</p>',
    regras:['Agudas: oxítonas terminadas em -as, -es, -os, -am, -em (café, você, lápis, etc.)', 'Graves: paroxítonas com ditongo, -r, -l, -x, -ps, -nh, -s (vogal tônica)', 'Esdrúxulas: proparoxítonas (sempre acentuadas)', 'Til (~): indica nasalização (ã, õ)'],
    excecoes:['<em>Paroxítonas</em> com ditongo aberto são acentuadas: <em>assembleia</em> (antigo), hoje <em>assembleia</em> sem acento.','<em>Paroxítonas</em> com -r, -l, -x, -ps, -nh, -s são acentuadas: <em>caracter</em>, <em>portátil</em>.'],
    exemplos:['"Café" → aguda (terminada em -é).','"Vovó" → aguda (terminada em -ó).','"Assembleia" → paroxítona (sem acento, regra atual).'],
    pegadinchas:['<strong>Esdrúxulas</strong> são <em>sempre</em> acentuadas.','<strong>Paroxítonas</strong> têm <em>exceções</em>.','O <em>til</em> indica <em>nasalização</em>.'],
    exercicios: [
      { q: 'As esdrúxulas são sempre acentuadas.', g: 'CERTO.' },
      { q: 'As paroxítonas com ditongo aberto são acentuadas.', g: 'CERTO.' }
    ],
    sotaque: '<strong>"AGUDA + GRAVE + ESDRÚXULA = 3 TIPOS. ESDRÚXULAS: SEMPRE."</strong>'
  },

  M['vozes-verbais'] = {
    topico: 'vozes-verbais',
    titulo: 'Vozes Verbais: Ativa, Passiva, Reflexiva',
    resumo: 'Ativa: sujeito pratica ação. Passiva: sujeito sofre ação. Reflexiva: sujeito pratica e sofre ação.',
    teoria: '<p>As <strong>vozes verbais</strong> indicam a relação entre sujeito e verbo. <em>Ativa</em>: o sujeito pratica a ação. <em>Passiva</em>: o sujeito sofre a ação. <em>Reflexiva</em>: o sujeito pratica e sofre a ação.</p>',
    regras:['Ativa: sujeito + verbo + objeto (sem preposição)', 'Passiva analítica: sujeito + verbo auxiliar (ser) + particípio', 'Passiva sintética: sujeito + verbo + se', 'Reflexiva: sujeito + verbo + se (pronome oblíquo)'],
    excecoes:['A <em>passiva analítica</em> usa "ser + particípio".','A <em>passiva sintética</em> usa "se" (índice de indeterminação, em alguns casos).'],
    exemplos:['"Pedro comprou o livro" (ativa).','"O livro foi comprado por Pedro" (passiva analítica).','"Comprou-se o livro" (passiva sintética).'],
    pegadinchas:['<strong>Ativa</strong>: sujeito pratica.','<strong>Passiva</strong>: sujeito sofre.','<strong>Reflexiva</strong>: sujeito pratica e sofre.','O <em>se</em> pode ser <em>pronome</em> (reflexiva) ou <em>índice de indeterminação</em>.'],
    exercicios: [
      { q: 'Na voz ativa, o sujeito pratica a ação.', g: 'CERTO.' },
      { q: 'Na voz passiva, o sujeito pratica a ação.', g: 'ERRADO. O sujeito sofre a ação.' }
    ],
    sotaque: '<strong>"ATIVA + PASSIVA + REFLEXIVA = 3 VOZES"</strong>'
  },

  M['ortografia'] = {
    topico: 'ortografia',
    titulo: 'Ortografia Oficial: Acentos, Grafia, Uso do Hífen',
    resumo: 'Ortografia: grafia correta das palavras. Uso do hífen: regra geral, prefixos (co-, ex-, vice-).',
    teoria: '<p>A <strong>ortografia oficial</strong> é a grafia correta das palavras, conforme o Acordo Ortográfico de 1990 (vigente desde 2009 no Brasil). <em>Pontos importantes</em>: uso do <em>hífen</em> (em compostos, prefixos: <em>co-, ex-, vice-, pós-, pré-</em>), acentuação, grafia de palavras homófonas.</p>',
    regras:['Hífen: prefixos terminados em vogal + palavra iniciada em vogal diferente (micro-onda, auto-estrada)', 'Hífen: prefixos terminados em consoante + vogal (sub-humano, super-homem)', 'Exceção: co-, pré-, pós- (não levam hífen na maioria dos casos)', 'Hífen: palavras compostas (guarda-chuva, beija-flor)', 'Hífen: NÃO se usa com sufixos (cafezal, bazar)'],
    excecoes:['O <em>hífen</em> com <em>co-</em> foi abolido (cooperar, coibir).','O <em>hífen</em> com <em>ex-</em>: ex-presidente (com hífen).','O <em>hífen</em> em <em>guarda-chuva</em> é obrigatório.'],
    examples:['micro-ondas (com hífen), microondas (sem hífen, na nova ortografia).','ex-presidente, vice-presidente (com hífen).','guarda-chuva, beija-flor (com hífen).'],
    pegadinchas:['<strong>Acordo Ortográfico</strong> de 1990.','<em>Co-</em> aboliu o hífen.','<em>Ex-</em> mantém o hífen.','<em>Sub-, super-</em> + vogal: hífen.'],
    exercicios: [
      { q: 'A grafia "cooperar" está correta, sem hífen (após o Acordo Ortográfico).', g: 'CERTO.' },
      { q: 'A grafia "ex-presidente" está correta, com hífen.', g: 'CERTO.' }
    ],
    sotaque: '<strong>"ACORDO 1990: CO- SEM HIFEN. EX- COM HIFEN."</strong>'
  };

  M['estrutura-formacao'] = {
    topico: 'estrutura-formacao',
    titulo: 'Estrutura e Formação de Palavras',
    resumo: 'Derivação: prefixação, sufixação, parassíntese, regressiva. Composição: justaposição, aglutinação. Hibridismo, onomatopeia.',
    teoria: '<p>A <strong>formação de palavras</strong> estuda os processos de criação. <em>Derivação</em>: prefixação (re+ver), sufixação (livr+eiro), parassíntese (en+amarelar+ar), derivação regressiva (regressão do sufixo). <em>Composição</em>: justaposição (passa+tempo), aglutinação (com + o = co + mo). <em>Outros</em>: hibridismo (burocracia, do grego), onomatopeia (miau).</p>',
    regras:['Prefixação: prefixo + radical (rever, reaver)', 'Sufixação: radical + sufixo (livraria, livrinho)', 'Parassíntese: prefixo + radical + sufixo (enamorar)', 'Derivação regressiva: palavra sem sufixo (jantar < jantar + ar)', 'Composição: justaposição (passatempo) ou aglutinação (hidroelétrico)'],
    excecoes:['A <em>parassíntese</em> exige prefixo E sufixo juntos.','A <em>derivação regressiva</em> retira o sufixo.','A <em>aglutinação</em> perde a vogal.'],
    examples:['livraria (radical + sufixo) → derivação sufixal.','enamorar (en + amor + ar) → parassíntese.','passatempo (passa + tempo) → justaposição.','hidroelétrico (hidro + elétrico) → composição por aglutinação.'],
    pegadinchas:['<strong>Prefixação</strong>: prefixo.','<strong>Sufixação</strong>: sufixo.','<strong>Parassíntese</strong>: prefixo + sufixo.','<em>Regressiva</em>: subtração.'],
    exercicios: [
      { q: 'A palavra "enamorar" é formada por parassíntese (en + amor + ar).', g: 'CERTO.' },
      { q: 'A palavra "passatempo" é formada por justaposição (passa + tempo).', g: 'CERTO.' }
    ],
    sotaque: '<strong>"PRE + SUF + PARASSINT + REGRESSIVA + COMPOSICAO (JUST/AGLUT)"</strong>'
  };

  M['classes-subst-adj-adv'] = {
    topico: 'classes-subst-adj-adv',
    titulo: 'Classes de Palavras: Substantivo, Adjetivo, Advérbio',
    resumo: 'Substantivo: nomeia (comum, próprio, concreto, abstrato). Adjetivo: caracteriza (graus: comparativo, superlativo). Advérbio: modifica verbo, adjetivo (tempo, lugar, modo).',
    teoria: '<p>As <strong>classes gramaticais</strong> dividem-se em variáveis (substantivo, adjetivo, numeral, pronome, artigo, verbo) e invariáveis (advérbio, preposição, conjunção, interjeição). <em>Substantivo</em>: nomeia (comum, próprio, concreto, abstrato). <em>Adjetivo</em>: caracteriza (graus: comparativo, superlativo). <em>Advérbio</em>: modifica verbo/adjetivo (tempo, lugar, modo, intensidade).</p>',
    regras:['Substantivo: comum/próprio, concreto/abstrato, simples/composto', 'Adjetivo: graus (comparativo, superlativo)', 'Adjetivo: simples (bom), derivado (bondoso), composto (verde-claro)', 'Advérbio: tempo (ontem), lugar (aqui), modo (bem), intensidade (muito)', 'Advérbio: terminados em -mente (rapidamente)'],
    excecoes:['O <em>adjetivo</em> pode substantivar-se (o bonito).','O <em>advérbio</em> pode ser palavra denotativa (talvez, apenas).','O <em>substantivo</em> é a classe mais importante.'],
    examples:['casa (substantivo comum, concreto).','Pedro (substantivo próprio).','bonito (adjetivo).','rapidamente (advérbio de modo, derivado de rápido + mente).'],
    pegadinchas:['<strong>Subst.</strong>: nomeia.','<strong>Adj.</strong>: caracteriza.','<strong>Adv.</strong>: modifica.','<em>-mente</em> é sufixo adverbial.'],
    exercicios: [
      { q: 'Substantivo é a classe que nomeia os seres.', g: 'CERTO.' },
      { q: 'O advérbio é a classe que caracteriza o substantivo.', g: 'ERRADO. Quem caracteriza o substantivo é o adjetivo.' }
    ],
    sotaque: '<strong>"SUBST (NOMEIA) + ADJ (CARACTERIZA) + ADV (MODIFICA)"</strong>'
  };

  M['classes-verb-pron-prep'] = {
    topico: 'classes-verb-pron-prep',
    titulo: 'Classes de Palavras: Verbo, Pronome, Preposição',
    resumo: 'Verbo: ação, estado, fenômeno (conjugação). Pronome: substitui (pessoal, possessivo, demonstrativo, relativo). Preposição: liga (a, de, em, para).',
    teoria: '<p>As <strong>classes</strong> se dividem em <em>variáveis</em> (verbo, pronome) e <em>invariáveis</em> (preposição). <em>Verbo</em>: ação, estado, fenômeno; tem conjugação (tempo, modo, pessoa, número). <em>Pronome</em>: substitui ou acompanha o substantivo (pessoal, possessivo, demonstrativo, indefinido, relativo, interrogativo). <em>Preposição</em>: liga palavras (a, de, em, para, com, por, sem, entre, sobre).</p>',
    regras:['Verbo: 3 conjugações (1ª: -ar, 2ª: -er, 3ª: -ir)', 'Verbo: modos (indicativo, subjuntivo, imperativo)', 'Pronome pessoal: reto, oblíquo, de tratamento', 'Pronome possessivo: meu, teu, seu, nosso', 'Pronome demonstrativo: este, esse, aquele', 'Pronome relativo: que, o qual, quem'],
    excecoes:['O <em>verbo</em> é a única classe que tem <em>tempo</em>.','O <em>pronome</em> pode ser <em>pessoal, possessivo, demonstrativo, relativo, indefinido, interrogativo</em>.','A <em>preposição</em> é invariável.'],
    examples:['Estudar (verbo, 1ª conjugação).','Meu livro (pronome possessivo + substantivo).','O livro que comprei (pronome relativo "que").','Vou a São Paulo (preposição "a").'],
    pegadinchas:['<strong>Verbo</strong>: 3 conjugações.','<strong>Pronome</strong>: substitui.','<strong>Preposição</strong>: liga.','<em>Que</em> é pronome relativo.'],
    exercicios: [
      { q: 'O verbo é a única classe que tem tempo, modo e pessoa.', g: 'CERTO.' },
      { q: 'O pronome "que" é pronome demonstrativo.', g: 'ERRADO. É pronome relativo.' }
    ],
    sotaque: '<strong>"VERBO (TEMPO) + PRONOME (SUBSTITUI) + PREPOSICAO (LIGA)"</strong>'
  };

  M['classes-conj-interj-num-art'] = {
    topico: 'classes-conj-interj-num-art',
    titulo: 'Classes de Palavras: Conjunção, Interjeição, Numeral, Artigo',
    resumo: 'Conjunção: liga orações (coordenativa, subordinativa). Interjeição: emoção. Numeral: quantidade, ordem, fração. Artigo: definido, indefinido.',
    teoria: '<p>As <strong>classes</strong> restantes: <em>Conjunção</em>: liga orações ou termos (coordenativa: e, ou, mas; subordinativa: que, porque, embora). <em>Interjeição</em>: exprime emoção (ufa!, ah!, ai!). <em>Numeral</em>: indica quantidade (um), ordem (primeiro), fração (meio). <em>Artigo</em>: define (o, a) ou indefinido (um, uma).</p>',
    regras:['Conjunção coordenativa: aditiva, adversativa, alternativa, conclusiva, explicativa', 'Conjunção subordinativa: causal, concessiva, condicional, temporal, final, consecutiva', 'Interjeição: emoção (ufa, ai, olha, cuidado)', 'Numeral: cardinal (um, dois), ordinal (primeiro, segundo), fracionário (meio)', 'Artigo definido: o, a, os, as', 'Artigo indefinido: um, uma, uns, umas'],
    excecoes:['A <em>conjunção</em> pode ser <em>coordenativa</em> ou <em>subordinativa</em>.','O <em>numeral</em> pode ser <em>cardinal, ordinal, fracionário, multiplicativo</em>.','O <em>artigo</em> é variável (gênero e número).'],
    examples:['Estudei e passei (conjunção aditiva "e").','Estudei, mas não passei (conjunção adversativa "mas").','Ufa! (interjeição).','Primeiro lugar (numeral ordinal).','O livro (artigo definido).'],
    pegadinchas:['<strong>Conj.</strong>: liga orações.','<strong>Interj.</strong>: emoção.','<strong>Num.</strong>: quantidade, ordem.','<strong>Art.</strong>: definido/indefinido.'],
    exercicios: [
      { q: 'A conjunção "mas" é coordenativa adversativa.', g: 'CERTO.' },
      { q: 'O artigo é invariável.', g: 'ERRADO. O artigo varia em gênero e número.' }
    ],
    sotaque: '<strong>"CONJ (LIGA) + INTERJ (EMOCAO) + NUM (QTDE) + ART (DEF/INDEF)"</strong>'
  };

  M['sintaxe-termos-essenciais'] = {
    topico: 'sintaxe-termos-essenciais',
    titulo: 'Sintaxe: Termos Essenciais e Integrantes da Oração',
    resumo: 'Essenciais: sujeito, predicado. Integrantes: objeto (direto, indireto), complemento nominal, agente da passiva.',
    teoria: '<p>A <strong>sintaxe do período simples</strong> divide os termos em <em>essenciais</em>, <em>integrantes</em> e <em>acessórios</em>. <em>Essenciais</em>: <em>sujeito</em> e <em>predicado</em>. <em>Integrantes</em>: <em>objeto direto</em>, <em>objeto indireto</em>, <em>complemento nominal</em>, <em>agente da passiva</em>.</p>',
    regras:['Sujeito: ser sobre o qual se diz algo', 'Predicado: o que se diz do sujeito (verbal, nominal, verbo-nominal)', 'Objeto direto: complemento sem preposição', 'Objeto indireto: complemento com preposição', 'Complemento nominal: complementa nome (substantivo, adjetivo, advérbio)', 'Agente da passiva: quem pratica a ação na voz passiva'],
    excecoes:['O <em>sujeito</em> pode ser <em>simples, composto, indeterminado, oculto, inexistente</em>.','O <em>predicado</em> pode ser <em>verbal, nominal, verbo-nominal</em>.','O <em>objeto direto</em> usa <em>pronome átono</em> (o, a, os, as).'],
    examples:['O menino estudou (sujeito: O menino; predicado: estudou).','Pedro comprou o livro (objeto direto: o livro).','Gosto de música (objeto indireto: de música).','O livro foi escrito por Pedro (agente da passiva: por Pedro).'],
    pegadinchas:['<strong>Sujeito + Predicado</strong> = essenciais.','<em>Objeto direto</em>: sem preposição.','<em>Objeto indireto</em>: com preposição.','<em>Complemento nominal</em>: complementa nome.'],
    exercicios: [
      { q: 'Sujeito e predicado são termos essenciais da oração.', g: 'CERTO.' },
      { q: 'O objeto indireto é complemento sem preposição.', g: 'ERRADO. É com preposição.' }
    ],
    sotaque: '<strong>"ESSENCIAIS: SUJ + PRED. INTEGRANTES: OD + OI + CN + AG. PASSIVA."</strong>'
  };

  M['sintaxe-termos-acessorios'] = {
    topico: 'sintaxe-termos-acessorios',
    titulo: 'Sintaxe: Termos Acessórios e Independentes',
    resumo: 'Acessórios: adjunto adnominal, adjunto adverbial, aposto. Independentes: vocativo, interjeição.',
    teoria: '<p>Os <strong>termos acessórios</strong> não são essenciais, mas complementam o sentido. <em>Adjunto adnominal</em>: caracteriza o substantivo. <em>Adjunto adverbial</em>: modifica verbo, adjetivo ou advérbio (tempo, lugar, modo). <em>Aposto</em>: explica ou especifica um termo. Os <strong>termos independentes</strong>: <em>vocativo</em> (chamamento) e <em>interjeição</em> (emoção).</p>',
    regras:['Adjunto adnominal: caracteriza substantivo (o livro bonito)', 'Adjunto adverbial: modifica verbo/adjetivo/advérbio (Estudei muito)', 'Aposto: explica termo (Pedro, médico, ...)', 'Vocativo: chamamento (João, venha aqui!)', 'Interjeição: termo independente (Ufa!)'],
    excecoes:['O <em>adjunto adnominal</em> pode ser <em>adjetivo, pronome, numeral, artigo</em>.','O <em>aposto</em> é sempre entre vírgulas (ou travessões).','O <em>vocativo</em> é isolado por vírgula.'],
    examples:['O livro interessante (adjunto adnominal).','Estudei muito (adjunto adverbial de intensidade).','Pedro, médico, atendeu o paciente (aposto).','Maria, venha aqui! (vocativo).'],
    pegadinchas:['<strong>Adj. Adnominal</strong>: caracteriza nome.','<strong>Adj. Adverbial</strong>: modifica verbo/adj.','<strong>Aposto</strong>: explica.','<strong>Vocativo</strong>: chama.'],
    exercicios: [
      { q: 'O adjunto adnominal caracteriza o substantivo.', g: 'CERTO.' },
      { q: 'O vocativo é termo integrante da oração.', g: 'ERRADO. É termo independente.' }
    ],
    sotaque: '<strong>"ADNOMINAL (NOME) + ADVERBIAL (VERBO) + APOSTO (EXPLICA) + VOCATIVO (CHAMA)"</strong>'
  };

  M['sintaxe-coordenacao'] = {
    topico: 'sintaxe-coordenacao',
    titulo: 'Sintaxe do Período Composto: Coordenação',
    resumo: 'Orações coordenadas: assindéticas (sem conjunção) e sindéticas (com conjunção: aditiva, adversativa, alternativa, conclusiva, explicativa).',
    teoria: '<p>As <strong>orações coordenadas</strong> têm <em>independência sintática</em>. Tipos: <em>assindéticas</em> (sem conjunção: "Cheguei, vi, venci") e <em>sindéticas</em> (com conjunção: aditiva "e", adversativa "mas", alternativa "ou", conclusiva "logo", explicativa "pois").</p>',
    regras:['Assindética: sem conjunção', 'Sindética aditiva: e, nem', 'Sindética adversativa: mas, porém, contudo, todavia', 'Sindética alternativa: ou, quer... quer, ora... ora', 'Sindética conclusiva: logo, portanto, pois', 'Sindética explicativa: pois, porque, que'],
    excecoes:['As <em>coordenadas</em> são <em>independentes</em>.','O <em>"mas"</em> é a principal adversativa.','O <em>"pois"</em> pode ser explicativa ou conclusiva (cuidado com a posição).'],
    examples:['Cheguei, vi, venci (assindética).','Estudei e passei (aditiva).','Estudei, mas não passei (adversativa).','Estudei ou desisti (alternativa).','Estudei, logo passei (conclusiva).'],
    pegadinchas:['<strong>5 tipos</strong> sindéticas.','<em>Assindética</em> = sem conjunção.','<em>"pois"</em>: explicativa (antes de verbo) ou conclusiva (depois de verbo).'],
    exercicios: [
      { q: 'A oração coordenada sindética é ligada por conjunção.', g: 'CERTO.' },
      { q: 'A coordenada assindética usa conjunção.', g: 'ERRADO. Não usa conjunção.' }
    ],
    sotaque: '<strong>"COORDENADAS: 5 SINDETICAS + 1 ASSINDETICA."</strong>'
  };

  M['sintaxe-subordinacao'] = {
    topico: 'sintaxe-subordinacao',
    titulo: 'Sintaxe do Período Composto: Subordinação',
    resumo: 'Orações subordinadas: substantivas, adjetivas, adverbiais. Substantivas: com função de substantivo (sujeito, objeto, etc.).',
    teoria: '<p>As <strong>orações subordinadas</strong> têm <em>dependência sintática</em>. Tipos: <em>substantivas</em> (com função de substantivo: sujeito, objeto, complemento nominal, predicativo, aposto), <em>adjetivas</em> (com função de adjetivo: restritiva, explicativa), <em>adverbiais</em> (com função de advérbio: causal, temporal, concessiva, condicional, etc.).</p>',
    regras:['Substantiva subjetiva: sujeito', 'Substantiva objetiva direta: OD', 'Substantiva objetiva indireta: OI', 'Substantiva completiva nominal: complemento nominal', 'Substantiva predicativa: predicativo', 'Substantiva apositiva: aposto', 'Adjetiva restritiva: restringe', 'Adjetiva explicativa: explica', 'Adverbial: causal, temporal, concessiva, condicional, final, consecutiva, comparativa, proporcional'],
    excecoes:['A <em>subordinada</em> tem <em>dependência</em>.','A <em>substantiva</em> tem <em>função de substantivo</em>.','A <em>adverbial</em> tem <em>função de advérbio</em>.'],
    examples:['É importante que você estude (substantiva subjetiva).','Espero que você passe (substantiva objetiva direta).','O livro que comprei é bom (adjetiva restritiva).','Estudei porque quero passar (adverbial causal).'],
    pegadinchas:['<strong>3 tipos</strong>: substantiva, adjetiva, adverbial.','<em>"que"</em> é a principal conjunção.','<em>Substantiva</em> = função de substantivo.'],
    exercicios: [
      { q: 'A oração subordinada adjetiva tem função de adjetivo.', g: 'CERTO.' },
      { q: 'A oração subordinada adverbial tem função de substantivo.', g: 'ERRADO. Tem função de advérbio.' }
    ],
    sotaque: '<strong>"SUBST (NOME) + ADJ (ADJ) + ADV (ADV). 3 TIPOS."</strong>'
  };

  M['concordancia-especiais'] = {
    topico: 'concordancia-especiais',
    titulo: 'Concordância: Casos Especiais',
    resumo: 'Casos especiais: coletivo (singular), partitivos, porcentagem, títulos (singular), sujeitos compostos (regra geral: plural).',
    teoria: '<p>A <strong>concordância</strong> tem casos especiais: <em>coletivo</em> (singular: "A multidão gritou"), <em>partitivos</em> (singular: "A maioria votou"), <em>porcentagem</em> (singular ou plural, conforme o verbo: "20% votou" ou "20% dos alunos votaram"), <em>títulos</em> (singular), <em>sujeitos compostos</em> (regra: plural: "Pedro e Maria chegaram").</p>',
    regras:['Coletivo: singular (a multidão gritou)', 'Partitivos: singular (a maioria votou)', 'Porcentagem: singular com verbo no singular (20% votou)', 'Porcentagem: plural com sujeito explícito (20% dos alunos votaram)', 'Títulos de obras: singular (Memorial do Convento é bonito)', 'Sujeitos compostos: plural (Pedro e Maria chegaram)'],
    excecoes:['A <em>porcentagem</em> varia: singular (verbo) ou plural (com sujeito).','<em>Sujeitos</em> ligados por "ou" podem ser singulares (Pedro ou João vota).','<em>Coletivo</em> admite plural (metade dos alunos chegaram).'],
    examples:['A maioria votou (singular).','20% dos alunos votaram (plural, sujeito explícito).','Pedro e Maria chegaram (plural).','O Diário Oficial publicou (título, singular).'],
    pegadinchas:['<strong>Coletivo</strong>: singular.','<strong>Porcentagem</strong>: singular (verbo) ou plural (com sujeito).','<em>Sujeitos compostos</em>: plural.'],
    exercicios: [
      { q: 'A concordância com coletivo é no singular.', g: 'CERTO.' },
      { q: 'Com "20% dos alunos", o verbo fica no singular.', g: 'ERRADO. Com sujeito explícito, vai para o plural.' }
    ],
    sotaque: '<strong>"COLETIVO: SING. PARTITIVO: SING. %: SING/PLURAL (COM SUJ. EXPL.)"</strong>'
  };

  M['regencia-especiais'] = {
    topico: 'regencia-especiais',
    titulo: 'Regência: Casos Especiais',
    resumo: 'Aspirar, assistir, preferir, visar, chegar. Verbos com preposição obrigatória. Regência de nomes: amor a, respeito a.',
    teoria: '<p>A <strong>regência</strong> tem casos especiais. <em>Aspirar</em> (no sentido de respirar) pede <em>a</em> (aspiro <em>a</em> ar puro). <em>Assistir</em> (ver, presenciar) pede <em>a</em> (assisti <em>ao</em> filme). <em>Preferir</em> pede <em>a</em> (prefiro <em>a</em> ir). <em>Visar</em> (objetivar) pede <em>a</em> (viso <em>a</em> aprovação). <em>Chegar</em> pede <em>a</em> (cheguei <em>a</em> São Paulo).</p>',
    regras:['Aspirar (respirar): a (aspiro a ar)', 'Assistir (ver): a (assisti ao filme)', 'Preferir: a (prefiro a ir)', 'Visar (objetivar): a (viso a aprovação)', 'Chegar: a (cheguei a São Paulo)', 'Obedecer: a (obedecer aos pais)'],
    excecoes:['<em>Aspirar</em> no sentido de pretender não leva preposição (aspiro ao cargo).','<em>Assistir</em> no sentido de ajudar leva em (assisti em seu pedido).','<em>Visar</em> no sentido de mirar não leva preposição.'],
    examples:['Aspirei a ar puro (verbo + a).','Assisti ao filme (verbo + a).','Cheguei a São Paulo (verbo + a).','Obedeço aos pais (verbo + a).'],
    pegadinchas:['<strong>Aspirar</strong> (ar): a.','<strong>Assistir</strong> (ver): a.','<strong>Preferir</strong>: a.','<em>Chegar</em>: a.'],
    exercicios: [
      { q: 'O verbo "assistir" no sentido de ver pede a preposição "a".', g: 'CERTO.' },
      { q: 'O verbo "chegar" não pede preposição.', g: 'ERRADO. Pede "a" (cheguei a São Paulo).' }
    ],
    sotaque: '<strong>"ASPIRAR + A / ASSISTIR + A / PREFERIR + A / CHEGAR + A / OBEDECER + A"</strong>'
  };

  M['semantica'] = {
    topico: 'semantica',
    titulo: 'Semântica: Sinonímia, Antonímia, Polissemia',
    resumo: 'Sinônimos: sentido igual/semelhante. Antônimos: sentido oposto. Polissemia: múltiplos sentidos. Homônimos, parônimos.',
    teoria: '<p>A <strong>semântica</strong> estuda o significado das palavras. <em>Sinônimos</em>: mesmo sentido (bonito/belo). <em>Antônimos</em>: sentido oposto (alto/baixo). <em>Polissemia</em>: múltiplos sentidos (manga da camisa / manga fruta). <em>Homônimos</em>: mesma pronúncia/grafia, sentidos diferentes (manga, são). <em>Parônimos</em>: sons semelhantes, sentidos diferentes (emigrar/imigrar).</p>',
    regras:['Sinônimos: mesmo sentido', 'Antônimos: oposto', 'Polissemia: vários sentidos', 'Homônimos: mesmo som/grafia', 'Parônimos: sons parecidos', 'Hiperônimos: sentido amplo (animal)', 'Hipônimos: sentido específico (cão)'],
    excecoes:['O <em>antônimo</em> pode ser <em>gradual</em> (quente/morno/frio).','A <em>polissemia</em> depende do contexto.','<em>Parônimos</em> confundem-se na escrita (emergir/imergir).'],
    examples:['Bonito/belo (sinônimos).','Alto/baixo (antônimos).','Manga (fruta) / manga (camisa) (polissemia).','São (sadio) / são (são Paulo) (homônimos).','Emigrar (sair) / imigrar (entrar) (parônimos).'],
    pegadinchas:['<strong>Sin.</strong>: igual.','<strong>Ant.</strong>: oposto.','<strong>Polissemia</strong>: vários.','<em>Parônimos</em>: parecidos.'],
    exercicios: [
      { q: 'Sinônimos são palavras com o mesmo sentido.', g: 'CERTO.' },
      { q: 'A polissemia é uma palavra com vários sentidos.', g: 'CERTO.' }
    ],
    sotaque: '<strong>"SIN (IGUAL) + ANT (OPOSTO) + POLIS (VARIOS) + HOMO + PARON"</strong>'
  },

  global.MATERIAS_EXT = global.MATERIAS_EXT || {};
  global.MATERIAS_EXT.portugues = M;
})(window);
