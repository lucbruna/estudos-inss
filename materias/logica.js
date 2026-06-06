/* ==========================================================
   materias/logica.js — Raciocínio Lógico / Matemática (33 lições)
   ========================================================== */
(function (global) {
  'use strict';
  const M = {};

  M['proposicoes'] = {
    topico: 'proposicoes',
    titulo: 'Proposições e Conectivos Lógicos',
    resumo: 'Proposição: sentença declarativa V ou F. Conectivos: e (∧), ou (∨), se-então (→), se e somente se (↔), não (¬).',
    teoria: '<p>Uma <strong>proposição</strong> é uma sentença declarativa que admite um valor lógico: <em>verdadeiro (V)</em> ou <em>falso (F)</em>. Os <em>conectivos lógicos</em> unem proposições: <em>e (∧)</em>, <em>ou (∨)</em>, <em>se...então (→)</em>, <em>se e somente se (↔)</em>, <em>não (¬)</em>.</p>',
    regras:['Conjunção (∧): V quando ambas são V', 'Disjunção (∨): V quando pelo menos uma é V', 'Condicional (→): F apenas quando A é V e B é F', 'Bicondicional (↔): V quando ambas têm o mesmo valor', 'Negação (¬): inverte V/F'],
    excecoes:['<em>Sentenças abertas</em> (com variáveis) <em>não</em> são proposições.','<em>Paradoxos</em> e <em>contradições</em> podem existir.'],
    exemplos:['"Brasília é a capital do Brasil" → V.','"2 + 2 = 5" → F.','"x > 0" → não é proposição (sentença aberta).'],
    pegadinchas:['<strong>Conectivo "ou"</strong> em lógica é <em>inclusivo</em> (pode ser ambos), não exclusivo.','A <em>condicional</em> é <em>falsa</em> apenas no caso (V, F).','<em>Sentença aberta</em> com "x" <em>não</em> é proposição.'],
    exercicios: [
      { q: 'A proposição "Brasília é a capital do Brasil" é verdadeira.', g: 'CERTO.' },
      { q: 'A sentença "x + 2 = 5" é uma proposição lógica.', g: 'ERRADO. É uma sentença aberta (não tem valor lógico definido).' }
    ],
    sotaque: '<strong>"V OU F. CONECTIVOS: ∧, ∨, →, ↔, ¬"</strong>'
  };

  M['tabela-verdade'] = {
    topico: 'tabela-verdade',
    titulo: 'Tabela-Verdade dos Conectivos',
    resumo: '∧: V apenas com V e V. ∨: F apenas com F e F. →: F apenas com V e F. ↔: V com V-V e F-F. ¬: inverte.',
    teoria: '<p>A <strong>tabela-verdade</strong> mostra o valor lógico de uma proposição composta para cada combinação de valores das proposições simples. Para <em>n</em> proposições, há <em>2ⁿ</em> linhas.</p>',
    regras:['∧: V V = V; demais = F', '∨: F F = F; demais = V', '→: V F = F; demais = V', '↔: V V = V, F F = V; V F e F V = F', '¬: inverte o valor'],
    excecoes:['A <em>condicional</em> é a mais complexa: V sempre, exceto V → F.','O <em>bicondicional</em> é V quando ambas têm o mesmo valor.'],
    exemplos:['p ∧ q: V V = V, V F = F, F V = F, F F = F.','p → q: V V = V, V F = F, F V = V, F F = V.'],
    pegadinchas:['<strong>→</strong> é <em>falsa</em> apenas em V → F.','<strong>↔</strong> é <em>falsa</em> em V F e F V.','A <em>negação</em> inverte o valor.'],
    exercicios: [
      { q: 'A proposição "p ∧ q" é falsa quando pelo menos uma é falsa.', g: 'CERTO.' },
      { q: 'A proposição "p → q" é falsa apenas quando p é V e q é F.', g: 'CERTO.' }
    ],
    sotaque: '<strong>"∧: SÓ V V. ∨: SÓ F F. →: SÓ V F. ↔: V V OU F F."</strong>'
  };

  M['equivalencias'] = {
    topico: 'equivalencias',
    titulo: 'Equivalências Lógicas Importantes',
    resumo: '¬(p ∧ q) = ¬p ∨ ¬q (De Morgan). ¬(p ∨ q) = ¬p ∧ ¬q. p → q = ¬p ∨ q. p ↔ q = (p → q) ∧ (q → p).',
    teoria: '<p>As <strong>equivalências lógicas</strong> permitem transformar proposições em outras equivalentes. As principais: <em>De Morgan</em> (negação de conjunção e disjunção), <em>contrapositiva</em> (negação da condicional), <em>bicondicional</em>.</p>',
    regras:['¬(p ∧ q) ≡ ¬p ∨ ¬q (De Morgan)', '¬(p ∨ q) ≡ ¬p ∧ ¬q (De Morgan)', 'p → q ≡ ¬p ∨ q', 'p → q ≡ ¬q → ¬p (contrapositiva)', 'p ↔ q ≡ (p → q) ∧ (q → p)'],
    excecoes:['A <em>contrapositiva</em> é equivalente à condicional.','A <em>inversa</em> (¬p → ¬q) <em>não</em> é equivalente.','A <em>recíproca</em> (q → p) <em>não</em> é equivalente.'],
    exemplos:['¬(p ∧ q) = ¬p ∨ ¬q.','p → q = ¬q → ¬p.'],
    pegadinchas:['<strong>De Morgan</strong>: negação distribui, mas troca o conectivo.','<strong>Contrapositiva</strong> é equivalente.','<strong>Inversa e recíproca</strong> <em>não</em> são equivalentes.'],
    exercicios: [
      { q: 'A negação de "p ∧ q" é "¬p ∨ ¬q".', g: 'CERTO. De Morgan.' },
      { q: 'A contrapositiva de "p → q" é "q → p".', g: 'ERRADO. A contrapositiva é "¬q → ¬p".' }
    ],
    sotaque: '<strong>"DE MORGAN: ¬ ∧ = ∨ ¬. CONTRAPOSITIVA: V."</strong>'
  };

  M['negacao-proposicoes'] = {
    topico: 'negacao-proposicoes',
    titulo: 'Negação de Proposições Compostas',
    resumo: 'Negação da condicional: p → q, negação é p ∧ ¬q. Negação do bicondicional: (p ∧ ¬q) ∨ (¬p ∧ q).',
    teoria: '<p>A <strong>negação de proposições compostas</strong> segue regras específicas. A <em>negação da condicional</em> é o caso clássico: <em>¬(p → q) ≡ p ∧ ¬q</em>.</p>',
    regras:['¬(p → q) ≡ p ∧ ¬q', '¬(p ↔ q) ≡ (p ∧ ¬q) ∨ (¬p ∧ q)', '¬(p ∧ q) ≡ ¬p ∨ ¬q (De Morgan)', '¬(p ∨ q) ≡ ¬p ∧ ¬q (De Morgan)'],
    excecoes:['A <em>negação da condicional</em> é a mais cobrada em concursos.','<em>Todo</em> se torna <em>existe</em> (e vice-versa) na negação.'],
    exemplos:['"Se chover, então eu fico em casa" → "Chove e eu não fico em casa".','"Todo A é B" → "Existe A que não é B".'],
    pegadinchas:['<strong>¬(p → q)</strong> = <em>p ∧ ¬q</em>, não <em>¬p → ¬q</em>.','<strong>Todo</strong> se torna <em>existe ... que não</em>.','<strong>Algum</strong> se torna <em>nenhum</em>.'],
    exercicios: [
      { q: 'A negação de "Se p, então q" é "p e não q".', g: 'CERTO.' },
      { q: 'A negação de "Todo A é B" é "Nenhum A é B".', g: 'ERRADO. A negação é "Existe A que não é B".' }
    ],
    sotaque: '<strong>"¬(p → q) = p ∧ ¬q. TODO = EXISTE NÃO."</strong>'
  };

  M['quantificadores'] = {
    topico: 'quantificadores',
    titulo: 'Quantificadores Lógicos: Todo, Algum, Nenhum',
    resumo: 'Todo (universal): ∀. Algum (existencial): ∃. Nenhum: ¬∃.',
    teoria: '<p>Os <strong>quantificadores</strong> lógicos são: <em>universal</em> (todo, ∀) e <em>existencial</em> (algum, ∃). A <em>negação</em> troca o quantificador: <em>¬(todo) = existe ... que não</em>; <em>¬(existe) = nenhum</em>.</p>',
    regras:['Todo: ∀x P(x)', 'Algum: ∃x P(x)', 'Nenhum: ¬∃x P(x) ou ∀x ¬P(x)', 'Negação: ¬∀ = ∃¬; ¬∃ = ∀¬'],
    excecoes:['"Todo A é B" → "Não existe A que não seja B".','"Algum A é B" → "Não é verdade que nenhum A é B".'],
    exemplos:['"Todo político é corrupto" → "Existe político que não é corrupto" (negação).','"Algum gato é branco" → "Nenhum gato é branco" (negação).'],
    pegadinchas:['<strong>Negação de todo</strong> = existe ... que não.','<strong>Negação de algum</strong> = nenhum.','<strong>Nenhum</strong> é a negação de <em>pelo menos um</em>.'],
    exercicios: [
      { q: 'A negação de "Todo A é B" é "Existe A que não é B".', g: 'CERTO.' },
      { q: 'A negação de "Algum A é B" é "Algum A não é B".', g: 'ERRADO. A negação é "Nenhum A é B".' }
    ],
    sotaque: '<strong>"TODO = ∀. ALGUM = ∃. NEGAÇÃO: TROCA + INVERTE."</strong>'
  };

  M['implicacao'] = {
    topico: 'implicacao',
    titulo: 'Implicação Lógica e Equivalência',
    resumo: 'p → q é V sempre, exceto V → F. Implicação: tabela-verdade. Equivalência: p ↔ q.',
    teoria: '<p>Uma <strong>implicação lógica</strong> (p ⇒ q) ocorre quando a proposição p → q é uma <em>tautologia</em>. Uma <strong>equivalência lógica</strong> (p ⇔ q) ocorre quando p ↔ q é uma <em>tautologia</em>.</p>',
    regras:['p ⇒ q: p → q é tautologia', 'p ⇔ q: p ↔ q é tautologia', 'Tautologia: V em todas as linhas da tabela-verdade', 'Contradição: F em todas as linhas'],
    excecoes:['A <em>implicação</em> pode ser <em>verdadeira</em> mesmo quando p é F.','A <em>equivalência</em> requer mesmo valor em todas as linhas.'],
    exemplos:['p → p é tautologia (sempre V).','p ∧ ¬p é contradição (sempre F).'],
    pegadinchas:['<strong>Tautologia</strong> é sempre V.','<strong>Contradição</strong> é sempre F.','<strong>Contingência</strong> tem V e F.'],
    exercicios: [
      { q: 'A proposição "p → p" é uma tautologia.', g: 'CERTO.' },
      { q: 'A proposição "p ∧ ¬p" é uma tautologia.', g: 'ERRADO. É uma contradição.' }
    ],
    sotaque: '<strong>"TAUTOLOGIA: SEMPRE V. CONTRADIÇÃO: SEMPRE F."</strong>'
  };

  M['proposicoes-categoricas'] = {
    topico: 'proposicoes-categoricas',
    titulo: 'Proposições Categóricas: A, E, I, O',
    resumo: 'A (universal afirmativa): todo A é B. E (universal negativa): nenhum A é B. I (particular afirmativa): algum A é B. O (particular negativa): algum A não é B.',
    teoria: '<p>As <strong>proposições categóricas</strong> (silogística) classificam-se em 4 tipos: <em>A</em> (universal afirmativa - todo A é B), <em>E</em> (universal negativa - nenhum A é B), <em>I</em> (particular afirmativa - algum A é B), <em>O</em> (particular negativa - algum A não é B).</p>',
    regras:['A: todo A é B', 'E: nenhum A é B', 'I: algum A é B', 'O: algum A não é B'],
    excecoes:['A <em>contradição</em> é entre A e O, E e I.','A <em>contrariedade</em> é entre A e E.','A <em>subalternação</em> é A → I, E → O.'],
    exemplos:['"Todo político é honesto" → A.','"Nenhum gato é branco" → E.','"Algum aluno estuda" → I.','"Algum professor não leciona" → O.'],
    pegadinchas:['<strong>A e O</strong> são contraditórias.','<strong>E e I</strong> são contraditórias.','<strong>A e E</strong> são contrárias.'],
    exercicios: [
      { q: '"Todo A é B" é uma proposição categórica do tipo A.', g: 'CERTO.' },
      { q: '"Nenhum A é B" é uma proposição categórica do tipo I.', g: 'ERRADO. É do tipo E.' }
    ],
    sotaque: '<strong>"A = TODO. E = NENHUM. I = ALGUM. O = ALGUM NÃO."</strong>'
  };

  M['silogismo'] = {
    topico: 'silogismo',
    titulo: 'Silogismo Categórico',
    resumo: 'Premissa maior, premissa menor, conclusão. Figuras: 4. Modos válidos: AAA, EAE, AII, EIO, etc.',
    teoria: '<p>O <strong>silogismo categórico</strong> é um raciocínio dedutivo com 3 proposições categóricas: <em>premissa maior</em>, <em>premissa menor</em> e <em>conclusão</em>. Tem 4 <em>figuras</em> e 19 <em>silogismos válidos</em>.</p>',
    regras:['Premissa maior: contém o termo maior (predicado da conclusão)', 'Premissa menor: contém o termo menor (sujeito da conclusão)', 'Termo médio: aparece nas premissas, mas não na conclusão', 'Figuras: 4 (M-P, S-M / M-P, S-M, etc.)'],
    excecoes:['A <em>figura 1</em>: M-P, S-M → conclusões AAA, EAE, AII, EIO.','A <em>figura 2</em>: P-M, S-M → conclusões EAE, AEE, EIO, AOO.','A <em>figura 3</em>: M-P, M-S → conclusões IAI, AII, OAO, EIO, AAI, EAO.','A <em>figura 4</em>: P-M, M-S → conclusões AEE, IAI, EIO.'],
    exemplos:['Todo M é P. Todo S é M. Logo, todo S é P. (Barbara, AAA, figura 1).','Nenhum M é P. Todo S é M. Logo, nenhum S é P. (Celarent, EAE, figura 1).'],
    pegadinchas:['<strong>Termo médio</strong> não aparece na conclusão.','A <em>premissa maior</em> é a <em>primeira</em> proposição.','A <em>premissa menor</em> é a <em>segunda</em> proposição.'],
    exercicios: [
      { q: 'O silogismo categórico tem 3 proposições: premissa maior, premissa menor e conclusão.', g: 'CERTO.' },
      { q: 'O termo médio aparece na conclusão.', g: 'ERRADO. Não aparece na conclusão.' }
    ],
    sotaque: '<strong>"PREMISSA MAIOR + MENOR = CONCLUSÃO. 4 FIGURAS, 19 VÁLIDOS."</strong>'
  };

  M['analogia'] = {
    topico: 'analogia',
    titulo: 'Raciocínio por Analogia',
    resumo: 'A : B :: C : D. Mesma relação. Lógica indutiva. Cuidado: nem sempre a analogia é válida.',
    teoria: '<p>Uma <strong>analogia</strong> é uma relação de proporção entre dois pares. A : B :: C : D significa que a relação entre A e B é a mesma entre C e D. É um raciocínio <em>indutivo</em>, não <em>dedutivo</em>.</p>',
    regras:['A : B :: C : D → relação A-B = relação C-D', 'A analogia parte de casos particulares', 'A conclusão é provável, não necessária', 'Usada em física, biologia, direito, etc.'],
    excecoes:['A <em>analogia</em> pode falhar (a relação pode não ser a mesma).','<em>Jurisprudência</em> usa analogia (precedentes).'],
    exemplos:['Pena : Crime :: Recompensa : Serviço. (relação de merecimento).'],
    pegadinchas:['<strong>Analogia</strong> é raciocínio <em>indutivo</em>.','A conclusão <em>não</em> é necessária.','A analogia <em>pode</em> falhar.'],
    exercicios: [
      { q: 'A analogia é um raciocínio indutivo, com conclusão provável.', g: 'CERTO.' },
      { q: 'A analogia é um raciocínio dedutivo, com conclusão necessária.', g: 'ERRADO. É indutiva.' }
    ],
    sotaque: '<strong>"A : B :: C : D = MESMA RELAÇÃO"</strong>'
  };

  M['porcentagem'] = {
    topico: 'porcentagem',
    titulo: 'Porcentagem e Regras de Três',
    resumo: 'x% de y = (x/100) × y. Regra de 3: direta ou inversa. Proporção: direta ou inversa.',
    teoria: '<p><strong>Porcentagem</strong> é uma fração de denominador 100. <em>x% de y</em> = (x/100) × y. A <em>regra de três</em> simples é usada para resolver problemas de proporção. Pode ser <em>direta</em> ou <em>inversa</em>.</p>',
    regras:['x% de y = (x/100) × y', 'Regra de 3 direta: grandezas diretamente proporcionais', 'Regra de 3 inversa: grandezas inversamente proporcionais', 'Aumento percentual: novo = antigo × (1 + x/100)'],
    excecoes:['Aumento e desconto <em>não</em> se anulam.','<em>Porcentagem sobre porcentagem</em> usa regra de três composta.'],
    exemplos:['30% de 200 = 60.','Aumento de 20% sobre 100 = 120.','Se 5 operários fazem uma obra em 10 dias, 10 operários fazem em 5 dias.'],
    pegadinchas:['<strong>Regra de 3 inversa</strong>: as grandezas são <em>inversamente</em> proporcionais.','<em>20% + 20% ≠ 40%</em>, pois o segundo 20% incide sobre o valor original + 20%.','<em>10% de desconto</em> sobre R$ 100 = R$ 90.'],
    exercicios: [
      { q: '20% de 150 é 30.', g: 'CERTO. (20/100) × 150 = 30.' },
      { q: 'Se 8 operários fazem uma obra em 6 dias, 4 operários fazem em 12 dias.', g: 'CERTO. Inversamente proporcional.' }
    ],
    sotaque: '<strong>"x% DE y = (x/100) × y. REGRA DE 3: DIRETA OU INVERSA."</strong>'
  };

  M['juros-simples'] = {
    topico: 'juros-simples',
    titulo: 'Juros Simples',
    resumo: 'J = C × i × t. M = C + J. Juros incidem apenas sobre o capital inicial.',
    teoria: '<p>Nos <strong>juros simples</strong>, a taxa incide apenas sobre o <em>capital inicial</em>. A fórmula é: <em>J = C × i × t</em>, onde <em>J</em> é o juro, <em>C</em> é o capital, <em>i</em> é a taxa (em decimal) e <em>t</em> é o tempo.</p>',
    regras:['J = C × i × t', 'M = C + J (montante)', 'i: taxa em decimal (1% = 0,01)', 't: mesmo período da taxa'],
    excecoes:['Juros simples <em>não</em> são capitalizados.','A taxa e o tempo devem estar na <em>mesma unidade</em>.'],
    exemplos:['C = 1000, i = 10% a.a., t = 2 anos → J = 1000 × 0,1 × 2 = 200. M = 1200.'],
    pegadinchas:['<strong>Taxa</strong> em <em>decimal</em> (não %).','<strong>Tempo</strong> na mesma unidade da taxa.','<em>Juros simples</em>: linear, sem capitalização.'],
    exercicios: [
      { q: 'Em juros simples, o juro é calculado apenas sobre o capital inicial.', g: 'CERTO.' },
      { q: 'A taxa e o tempo podem estar em unidades diferentes.', g: 'ERRADO. Devem estar na mesma unidade.' }
    ],
    sotaque: '<strong>"J = C × i × t. LINEAR."</strong>'
  };

  M['juros-compostos'] = {
    topico: 'juros-compostos',
    titulo: 'Juros Compostos',
    resumo: 'M = C × (1 + i)^t. J = M - C. Capitalização: juros sobre juros.',
    teoria: '<p>Nos <strong>juros compostos</strong>, a taxa incide sobre o <em>capital + juros acumulados</em> (capitalização). A fórmula é: <em>M = C × (1 + i)^t</em>, onde <em>M</em> é o montante, <em>C</em> é o capital, <em>i</em> é a taxa (em decimal) e <em>t</em> é o tempo.</p>',
    regras:['M = C × (1 + i)^t', 'J = M - C', 'Capitalização: juros sobre juros', 'Taxa e tempo devem estar na mesma unidade'],
    excecoes:['Juros compostos crescem <em>exponencialmente</em>.','<em>Logaritmo</em> é usado para isolar a incógnita.'],
    exemplos:['C = 1000, i = 10% a.a., t = 2 anos → M = 1000 × 1,1² = 1210. J = 210.'],
    pegadinchas:['<strong>Juros compostos</strong>: exponencial, com capitalização.','<strong>Juros simples</strong>: linear, sem capitalização.','A <em>taxa</em> é sempre em <em>decimal</em>.'],
    exercicios: [
      { q: 'Em juros compostos, os juros são capitalizados, incidindo sobre o capital + juros.', g: 'CERTO.' },
      { q: 'O montante em juros compostos é calculado pela fórmula M = C + C × i × t.', g: 'ERRADO. Esta é a fórmula dos juros simples.' }
    ],
    sotaque: '<strong>"M = C × (1 + i)^t. EXPONENCIAL."</strong>'
  };

  M['analise-combinatoria'] = {
    topico: 'analise-combinatoria',
    titulo: 'Análise Combinatória: PFC, Arranjo, Combinação',
    resumo: 'PFC: tudo junto. Arranjo: ordem importa. Combinação: ordem não importa.',
    teoria: '<p>A <strong>análise combinatória</strong> estuda o número de possibilidades. Os principais tipos: <em>PFC</em> (princípio fundamental da contagem), <em>arranjo</em> (ordem importa) e <em>combinação</em> (ordem não importa).</p>',
    regras:['PFC: multiplicar opções independentes', 'Arranjo: A(n,k) = n! / (n-k)! (ordem importa)', 'Combinação: C(n,k) = n! / (k! × (n-k)!) (ordem não importa)', 'Permutação: caso particular de arranjo (n=k)'],
    excecoes:['<em>Arranjo</em> considera a <em>ordem</em>.','<em>Combinação</em> <em>não</em> considera a <em>ordem</em>.','<em>Permutação</em> é arranjo com k = n.'],
    exemplos:['Placa de carro com 3 letras e 4 números → 26³ × 10⁴.','Escolha de 3 pessoas de um grupo de 5 → C(5,3) = 10.'],
    pegadinchas:['<strong>Ordem</strong> importa → <em>arranjo</em>.','<strong>Ordem</strong> <em>não</em> importa → <em>combinação</em>.','<em>Permutação</em> = arranjo com n = k.'],
    exercicios: [
      { q: 'A combinação não considera a ordem dos elementos.', g: 'CERTO.' },
      { q: 'O arranjo é usado quando a ordem dos elementos não importa.', g: 'ERRADO. O arranjo é usado quando a ordem importa.' }
    ],
    sotaque: '<strong>"PFC: MULTIPLICAR. ARRANJO: ORDEM. COMBINAÇÃO: SEM ORDEM."</strong>'
  };

  M['probabilidade'] = {
    topico: 'probabilidade',
    titulo: 'Probabilidade: Conceito e Cálculo',
    resumo: 'P(A) = casos favoráveis / casos possíveis. 0 ≤ P ≤ 1. União: P(A∪B) = P(A) + P(B) - P(A∩B).',
    teoria: '<p>A <strong>probabilidade</strong> mede a chance de um evento ocorrer. É calculada como: <em>P(A) = casos favoráveis / casos possíveis</em>. O valor está entre 0 e 1.</p>',
    regras:['P(A) = casos favoráveis / casos possíveis', '0 ≤ P ≤ 1', 'União: P(A∪B) = P(A) + P(B) - P(A∩B)', 'Interseção: P(A∩B) (independentes: P(A) × P(B))', 'Complemento: P(A^c) = 1 - P(A)'],
    excecoes:['<em>Eventos independentes</em>: P(A∩B) = P(A) × P(B).','<em>Eventos mutuamente exclusivos</em>: P(A∩B) = 0.','<em>Condicional</em>: P(A|B) = P(A∩B) / P(B).'],
    exemplos:['Dado: P(face 3) = 1/6.','Moeda: P(cara) = 1/2.','Sorteio de 1 carta de 52: P(ás) = 4/52 = 1/13.'],
    pegadinchas:['<strong>União</strong>: subtrair a <em>interseção</em>.','<strong>Eventos independentes</strong>: multiplicar.','<strong>Complemento</strong>: 1 - P.'],
    exercicios: [
      { q: 'A probabilidade de um evento é sempre um valor entre 0 e 1.', g: 'CERTO.' },
      { q: 'A união de dois eventos é dada por P(A) + P(B) + P(A∩B).', g: 'ERRADO. A união é P(A) + P(B) - P(A∩B).' }
    ],
    sotaque: '<strong>"P = FAVORÁVEIS / POSSÍVEIS. UNIÃO: A + B - A∩B."</strong>'
  };

  M['media-mediana-moda'] = {
    topico: 'media-mediana-moda',
    titulo: 'Média, Mediana e Moda',
    resumo: 'Média: soma / n. Mediana: valor central. Moda: valor mais frequente. Distribuição simétrica: média = mediana = moda.',
    teoria: '<p>As <strong>medidas de tendência central</strong> resumem um conjunto de dados: <em>média</em> (soma dividida por n), <em>mediana</em> (valor central) e <em>moda</em> (valor mais frequente).</p>',
    regras:['Média: soma / quantidade', 'Mediana: valor central (ordenado)', 'Moda: valor mais frequente', 'Distribuição simétrica: média = mediana = moda', 'Distribuição assimétrica: média ≠ mediana'],
    excecoes:['A <em>mediana</em> é mais resistente a <em>outliers</em> do que a média.','A <em>moda</em> pode ser <em>multimodal</em> (mais de uma moda).'],
    exemplos:['[2, 4, 6, 8, 10] → média = 6, mediana = 6, sem moda.','[2, 4, 4, 6, 8] → média = 4,8, mediana = 4, moda = 4.'],
    pegadinchas:['<strong>Mediana</strong> é resistente a <em>outliers</em>.','<strong>Moda</strong> pode ser <em>multimodal</em>.','A <em>distribuição simétrica</em> tem média = mediana = moda.'],
    exercicios: [
      { q: 'A mediana é o valor central de um conjunto de dados ordenados.', g: 'CERTO.' },
      { q: 'A média é sempre igual à mediana.', g: 'ERRADO. Apenas em distribuições simétricas.' }
    ],
    sotaque: '<strong>"MÉDIA: SOMA/N. MEDIANA: CENTRO. MODA: FREQUENTE."</strong>'
  };

  M['desvio-padrao'] = {
    topico: 'desvio-padrao',
    titulo: 'Desvio Padrão e Variância',
    resumo: 'Variância: média dos quadrados dos desvios. Desvio padrão: raiz da variância.',
    teoria: '<p>O <strong>desvio padrão</strong> mede a dispersão dos dados em relação à média. A <em>variância</em> é o quadrado do desvio padrão.</p>',
    regras:['Variância: σ² = Σ(xi - μ)² / n', 'Desvio padrão: σ = √variância', 'Quanto maior o desvio, mais dispersos os dados', 'Distribuição normal: ~68% dentro de 1 desvio, ~95% dentro de 2'],
    excecoes:['<em>Variância</em> está em unidade ao quadrado.','<em>Desvio padrão</em> está na mesma unidade dos dados.'],
    exemplos:['[2, 4, 6] → μ = 4, σ² = ((2-4)² + (4-4)² + (6-4)²)/3 = 8/3. σ = √(8/3) ≈ 1,63.'],
    pegadinchas:['<strong>Variância</strong> = (x - μ)² somado.','<strong>Desvio padrão</strong> = √variância.','<em>68-95-99,7</em>: regra empírica da distribuição normal.'],
    exercicios: [
      { q: 'O desvio padrão é a raiz quadrada da variância.', g: 'CERTO.' },
      { q: 'A variância está na mesma unidade dos dados.', g: 'ERRADO. Está ao quadrado.' }
    ],
    sotaque: '<strong>"σ² = VARIÂNCIA. σ = √σ². 68-95-99,7."</strong>'
  },

  global.MATERIAS_EXT = global.MATERIAS_EXT || {};
  global.MATERIAS_EXT.logica = M;
})(window);
