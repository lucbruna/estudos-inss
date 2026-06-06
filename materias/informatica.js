/* ==========================================================
   materias/informatica.js — Informática (26 lições)
   ========================================================== */
(function (global) {
  'use strict';
  const M = {};

  M['conceitos-computacao'] = {
    topico: 'conceitos-computacao',
    titulo: 'Conceitos de Computação: Hardware e Software',
    resumo: 'Hardware: parte física. Software: parte lógica. Componentes: CPU, memória, dispositivos de E/S.',
    teoria: '<p>A <strong>computação</strong> divide-se em <em>hardware</em> (parte física) e <em>software</em> (parte lógica). Os <em>componentes principais</em> são: <em>CPU</em> (processador), <em>memória</em> (RAM, ROM), <em>dispositivos de entrada/saída</em>, <em>armazenamento</em> (HD, SSD).</p>',
    regras:['Hardware: CPU, memória, E/S, armazenamento', 'Software: sistema operacional, aplicativos, utilitários', 'CPU: processador (cérebro do computador)', 'Memória: RAM (volátil) e ROM (não-volátil)'],
    excecoes:['<em>ROM</em> é não-volátil (mantém dados sem energia).','<em>RAM</em> é volátil (perde dados sem energia).','<em>SSD</em> é mais rápido que <em>HD</em>.'],
    exemplos:['CPU: Intel i7, AMD Ryzen.','Memória RAM: 8 GB, 16 GB.','HD: 1 TB.','SSD: 256 GB, 512 GB.'],
    pegadinchas:['<strong>RAM</strong> = volátil.','<strong>ROM</strong> = não-volátil.','<em>Software</em> é a parte lógica.','<em>Hardware</em> é a parte física.'],
    exercicios: [
      { q: 'Hardware é a parte física do computador, e software é a parte lógica.', g: 'CERTO.' },
      { q: 'A memória RAM é não-volátil.', g: 'ERRADO. A RAM é volátil (perde dados sem energia).' }
    ],
    sotaque: '<strong>"HARDWARE: FÍSICO. SOFTWARE: LÓGICO. RAM: VOLÁTIL. ROM: NÃO-VOLÁTIL."</strong>'
  };

  M['sistemas-operacionais'] = {
    topico: 'sistemas-operacionais',
    titulo: 'Sistemas Operacionais: Windows, Linux, MacOS',
    resumo: 'SO: gerencia recursos. Windows (Microsoft), Linux (open source), MacOS (Apple). Funções: gerenciar processos, memória, E/S.',
    teoria: '<p>O <strong>sistema operacional (SO)</strong> é o software que gerencia os recursos do computador. Os principais: <em>Windows</em> (Microsoft, pago), <em>Linux</em> (open source, gratuito), <em>MacOS</em> (Apple). Funções: gerenciar processos, memória, E/S, arquivos.</p>',
    regras:['Windows: Microsoft, NT, mais usado em desktops', 'Linux: open source, distribuições (Ubuntu, Debian, Fedora)', 'MacOS: Apple, exclusivo para Mac', 'Funções: gerenciar processos, memória, E/S, arquivos, segurança'],
    excecoes:['<em>Linux</em> é <em>open source</em>.','<em>Windows</em> é o mais usado em desktops (em 2025).','<em>MacOS</em> é exclusivo para Macs.'],
    exemplos:['Windows 11, Windows Server 2022.','Ubuntu 22.04, Debian 12, Fedora 39.','MacOS Sonoma, MacOS Sequoia.'],
    pegadinchas:['<strong>Linux</strong> é <em>open source</em>.','<strong>Windows</strong> é pago.','<em>Multitarefa</em> é característica de SOs modernos.'],
    exercicios: [
      { q: 'O sistema operacional gerencia os recursos do computador.', g: 'CERTO.' },
      { q: 'O Linux é um sistema operacional pago.', g: 'ERRADO. O Linux é open source (gratuito).' }
    ],
    sotaque: '<strong>"WINDOWS (PAGO) + LINUX (GRÁTIS) + MACOS (APPLE)"</strong>'
  };

  M['microsoft-office'] = {
    topico: 'microsoft-office',
    titulo: 'Microsoft Office: Word, Excel, PowerPoint, Outlook',
    resumo: 'Pacote Office: Word (texto), Excel (planilha), PowerPoint (apresentação), Outlook (e-mail), Access (BD), OneNote (notas).',
    teoria: '<p>O <strong>Microsoft Office</strong> é o pacote de produtividade mais usado. Componentes: <em>Word</em> (texto), <em>Excel</em> (planilha), <em>PowerPoint</em> (apresentação), <em>Outlook</em> (e-mail), <em>Access</em> (banco de dados), <em>OneNote</em> (notas).</p>',
    regras:['Word: processamento de texto (.docx)', 'Excel: planilha eletrônica (.xlsx)', 'PowerPoint: apresentação (.pptx)', 'Outlook: e-mail (.pst)', 'Access: banco de dados (.accdb)'],
    excecoes:['O <em>Office 365</em> é a versão em nuvem (assinatura).','O <em>Office 2019/2021</em> é a versão local (compra única).','O <em>Google Workspace</em> é a alternativa gratuita (Docs, Sheets, Slides).'],
    exemplos:['Word: criar documentos, formatar texto, inserir imagens.','Excel: criar planilhas, fórmulas, gráficos.','PowerPoint: criar slides, animações.'],
    pegadinchas:['<strong>.docx</strong> é o formato do Word 2007+.','<strong>.xlsx</strong> é o formato do Excel 2007+.','<strong>.pptx</strong> é o formato do PowerPoint 2007+.'],
    exercicios: [
      { q: 'O Microsoft Office inclui Word, Excel, PowerPoint, Outlook, Access e OneNote.', g: 'CERTO.' },
      { q: 'O Word é um software de planilha.', g: 'ERRADO. O Word é software de texto. O Excel é planilha.' }
    ],
    sotaque: '<strong>"WORD + EXCEL + POWERPOINT + OUTLOOK + ACCESS + ONENOTE"</strong>'
  };

  M['excel-avancado'] = {
    topico: 'excel-avancado',
    titulo: 'Excel Avançado: Fórmulas, Funções, Tabela Dinâmica',
    resumo: 'Fórmulas: =, +, -, *, /. Funções: SOMA, MÉDIA, SE, PROCV, PROCH, ÍNDICE, CORRESP, CONT.SE, SOMASE, etc. Tabela dinâmica: resumo de dados.',
    teoria: '<p>O <strong>Excel</strong> tem <em>fórmulas</em> (operadores matemáticos) e <em>funções</em> (comandos pré-definidos). As <em>funções mais cobradas</em> em concursos: <em>SOMA</em>, <em>MÉDIA</em>, <em>SE</em>, <em>PROCV</em>, <em>PROCH</em>, <em>ÍNDICE</em>, <em>CORRESP</em>, <em>CONT.SE</em>, <em>SOMASE</em>, entre outras.</p>',
    regras:['Fórmulas: começam com =, +, -', 'Função SOMA: soma valores', 'Função MÉDIA: média aritmética', 'Função SE: condicional (=SE(condição; valor_se_V; valor_se_F))', 'PROCV: procura vertical (em colunas)', 'PROCH: procura horizontal (em linhas)', 'Tabela dinâmica: resumo de dados (arrastar e soltar)'],
    excecoes:['<em>PROCV</em> é a função de pesquisa mais comum (em colunas).','<em>PROCH</em> pesquisa em linhas.','<em>ÍNDICE + CORRESP</em> é mais flexível que PROCV.'],
    exemplos:['=SOMA(A1:A10) → soma os valores de A1 a A10.','=SE(A1>10; "Maior"; "Menor") → retorna "Maior" se A1 > 10, senão "Menor".','=PROCV("valor"; A1:D10; 2; FALSO) → procura "valor" na primeira coluna e retorna a 2ª coluna.'],
    pegadinchas:['<strong>PROCV</strong>: <em>procura</em> na 1ª coluna, <em>retorna</em> a coluna indicada.','<strong>SE</strong> tem 3 argumentos: condição, valor V, valor F.','A <em>tabela dinâmica</em> é a ferramenta mais poderosa de análise.'],
    exercicios: [
      { q: 'A função PROCV procura um valor na primeira coluna e retorna um valor de outra coluna.', g: 'CERTO.' },
      { q: 'A função SE tem 4 argumentos.', g: 'ERRADO. Tem 3 argumentos (condição, valor V, valor F).' }
    ],
    sotaque: '<strong>"PROCV + SE + SOMA + MÉDIA = FUNÇÕES ESSENCIAIS"</strong>'
  },

  M['rede-internet'] = {
    topico: 'rede-internet',
    titulo: 'Redes de Computadores e Internet',
    resumo: 'LAN, MAN, WAN. Protocolos: TCP/IP, HTTP, FTP, SMTP. Endereço IP: IPv4, IPv6. DNS: converte nomes em IPs.',
    teoria: '<p>A <strong>rede de computadores</strong> é o conjunto de computadores interconectados. Classificação: <em>LAN</em> (local), <em>MAN</em> (metropolitana), <em>WAN</em> (longa distância). A <em>Internet</em> é a maior WAN do mundo.</p>',
    regras:['LAN: pequena área (escritório, casa)', 'MAN: área metropolitana (cidade)', 'WAN: longa distância (países, continentes)', 'Internet: rede mundial', 'TCP/IP: protocolo base', 'HTTP/HTTPS: páginas web', 'SMTP/POP/IMAP: e-mail', 'FTP: transferência de arquivos'],
    excecoes:['<em>IP</em>: <strong>IPv4</strong> (32 bits) e <strong>IPv6</strong> (128 bits).','<em>DNS</em> converte nomes em IPs.','<em>Proxy</em> é um intermediário.','<em>VPN</em> é uma rede privada virtual.'],
    exemplos:['Casa com Wi-Fi → LAN.','Rede da empresa → LAN/MAN.','Internet → WAN.','Google.com → DNS converte em IP.'],
    pegadinchas:['<strong>TCP/IP</strong> é o protocolo base.','<strong>HTTP/HTTPS</strong> é para web.','<strong>SMTP</strong> é para envio de e-mail; <strong>POP/IMAP</strong> para recebimento.','<em>IPv4</em>: 32 bits (4 octetos); <em>IPv6</em>: 128 bits (8 grupos).'],
    exercicios: [
      { q: 'A Internet é a maior WAN do mundo.', g: 'CERTO.' },
      { q: 'O protocolo SMTP é usado para receber e-mail.', g: 'ERRADO. SMTP envia; POP/IMAP recebe.' }
    ],
    sotaque: '<strong>"LAN + MAN + WAN. TCP/IP + HTTP + SMTP + DNS"</strong>'
  },

  M['seguranca-informacao'] = {
    topico: 'seguranca-informacao',
    titulo: 'Segurança da Informação: Princípios e Ataques',
    resumo: 'Princípios: confidencialidade, integridade, disponibilidade. Ataques: malware, phishing, ransomware, DDoS.',
    teoria: '<p>A <strong>segurança da informação</strong> tem como base os <em>3 princípios</em>: <em>confidencialidade</em> (sigilo), <em>integridade</em> (não alteração) e <em>disponibilidade</em> (acesso). Os <em>ataques</em> mais comuns: <em>malware</em> (vírus, worms, trojan), <em>phishing</em>, <em>ransomware</em>, <em>DDoS</em>.</p>',
    regras:['Confidencialidade: sigilo (criptografia)', 'Integridade: não alteração (hash)', 'Disponibilidade: acesso (redundância)', 'Ataques: malware, phishing, ransomware, DDoS, MITM', 'Defesas: firewall, antivírus, atualização, autenticação'],
    excecoes:['<em>Phishing</em> é uma tentativa de obter dados.','<em>Malware</em> é software malicioso.','<em>VPN</em> protege o tráfego.','<em>2FA</em> adiciona uma camada de segurança.'],
    exemplos:['E-mail falso do banco → phishing.','Site bloqueado por muitas requisições → DDoS.','Software que criptografa arquivos e pede resgate → ransomware.'],
    pegadinchas:['<strong>CID</strong>: Confidencialidade, Integridade, Disponibilidade.','<em>Phishing</em>: e-mail fraudulento.','<em>Ransomware</em>: criptografa e pede resgate.','<em>DDoS</em>: ataque de negação de serviço distribuído.'],
    exercicios: [
      { q: 'São princípios da segurança da informação: confidencialidade, integridade e disponibilidade.', g: 'CERTO.' },
      { q: 'Phishing é um tipo de antivírus.', g: 'ERRADO. Phishing é um ataque.' }
    ],
    sotaque: '<strong>"CID: CONFIDENCIALIDADE + INTEGRIDADE + DISPONIBILIDADE"</strong>'
  },

  M['backup'] = {
    topico: 'backup',
    titulo: 'Backup: Tipos, Estratégias, Mídia',
    resumo: 'Tipos: completo, incremental, diferencial. Estratégia 3-2-1: 3 cópias, 2 mídias, 1 externa. Mídia: HD, SSD, fita, nuvem.',
    teoria: '<p>O <strong>backup</strong> é a cópia de segurança dos dados. Tipos: <em>completo</em> (todos os dados), <em>incremental</em> (apenas as mudanças desde o último backup), <em>diferencial</em> (mudanças desde o último completo). A <em>estratégia 3-2-1</em> é recomendada: 3 cópias, 2 mídias, 1 externa.</p>',
    regras:['Completo: copia todos os dados', 'Incremental: copia apenas mudanças desde o último backup (qualquer tipo)', 'Diferencial: copia mudanças desde o último completo', 'Estratégia 3-2-1: 3 cópias, 2 mídias, 1 externa'],
    excecoes:['<em>Incremental</em> é mais rápido, mas a restauração é mais lenta.','<em>Diferencial</em> é mais lento no backup, mas mais rápido na restauração.'],
    exemplos:['Backup completo: domingo.','Backup incremental: segunda, terça, ..., sábado.','Backup diferencial: segunda, terça, ..., sábado.'],
    pegadinchas:['<strong>Incremental</strong>: copia desde o último backup (qualquer tipo).','<strong>Diferencial</strong>: copia desde o último completo.','<em>3-2-1</em>: 3 cópias, 2 mídias, 1 externa.'],
    exercicios: [
      { q: 'O backup incremental copia apenas as mudanças desde o último backup (qualquer tipo).', g: 'CERTO.' },
      { q: 'A estratégia 3-2-1 recomenda 3 cópias, 2 mídias e 1 externa.', g: 'CERTO.' }
    ],
    sotaque: '<strong>"3-2-1: 3 CÓPIAS, 2 MÍDIAS, 1 EXTERNA."</strong>'
  },

  M['cloud-computing'] = {
    topico: 'cloud-computing',
    titulo: 'Computação em Nuvem: Modelos e Tipos',
    resumo: 'Modelos: IaaS, PaaS, SaaS. Tipos: pública, privada, híbrida. Vantagens: escalabilidade, custo, mobilidade.',
    teoria: '<p>A <strong>computação em nuvem</strong> (cloud computing) é a entrega de serviços de computação pela internet. <em>Modelos</em>: <em>IaaS</em> (infraestrutura), <em>PaaS</em> (plataforma), <em>SaaS</em> (software). <em>Tipos</em>: <em>pública</em>, <em>privada</em>, <em>híbrida</em>.</p>',
    regras:['IaaS: infraestrutura (servidores, armazenamento)', 'PaaS: plataforma (ambiente de desenvolvimento)', 'SaaS: software (Office 365, Google Workspace)', 'Pública: provedor externo (AWS, Azure)', 'Privada: ambiente interno (empresa)', 'Híbrida: combinação'],
    excecoes:['<em>SaaS</em> é o modelo mais usado (Office 365, Google Workspace).','<em>IaaS</em> é para empresas que querem controle.','<em>PaaS</em> é para desenvolvedores.'],
    exemplos:['Office 365 → SaaS.','Google Cloud Platform → IaaS/PaaS.','AWS → IaaS.','Heroku → PaaS.'],
    pegadinchas:['<strong>SaaS</strong>: software pronto.','<strong>PaaS</strong>: plataforma para desenvolvimento.','<strong>IaaS</strong>: infraestrutura.','<em>Pública</em>: provedor externo.','<em>Privada</em>: ambiente interno.','<em>Híbrida</em>: mistura.'],
    exercicios: [
      { q: 'SaaS é o modelo de software como serviço, com aplicação via internet.', g: 'CERTO.' },
      { q: 'IaaS é o modelo de plataforma como serviço.', g: 'ERRADO. IaaS é infraestrutura. PaaS é plataforma.' }
    ],
    sotaque: '<strong>"IAAS + PAAS + SAAS. PÚBLICA + PRIVADA + HÍBRIDA."</strong>'
  },

  M['governanca-ti'] = {
    topico: 'governanca-ti',
    titulo: 'Governança de TI: COBIT, ITIL, ISO 27001',
    resumo: 'COBIT: governança. ITIL: serviços. ISO 27001: segurança da informação. PMBOK: gerenciamento de projetos.',
    teoria: '<p>A <strong>governança de TI</strong> envolve frameworks e normas: <em>COBIT</em> (Controle Objetivos para Informação e Tecnologias relacionadas), <em>ITIL</em> (Information Technology Infrastructure Library), <em>ISO 27001</em> (Segurança da Informação), <em>PMBOK</em> (Gerenciamento de Projetos).</p>',
    regras:['COBIT: governança de TI (5 princípios, 5 domínios, 37 processos)', 'ITIL: gerenciamento de serviços de TI (5 fases)', 'ISO 27001: SGSI (Sistema de Gestão de Segurança da Informação)', 'PMBOK: gerenciamento de projetos (10 áreas)'],
    excecoes:['<em>COBIT</em> é da ISACA.','<em>ITIL</em> é do AXELOS.','<em>ISO 27001</em> é da ISO.','<em>PMBOK</em> é do PMI.'],
    exemplos:['Empresa adota COBIT para governança.','Empresa adota ITIL para gerenciar incidentes.','Empresa adota ISO 27001 para segurança.'],
    pegadinchas:['<strong>COBIT</strong> = governança.','<strong>ITIL</strong> = serviços.','<strong>ISO 27001</strong> = segurança.','<strong>PMBOK</strong> = projetos.'],
    exercicios: [
      { q: 'O COBIT é um framework de governança de TI.', g: 'CERTO.' },
      { q: 'O ITIL é um framework de segurança da informação.', g: 'ERRADO. ITIL é gerenciamento de serviços. ISO 27001 é segurança.' }
    ],
    sotaque: '<strong>"COBIT (GOVERNANÇA) + ITIL (SERVIÇOS) + ISO 27001 (SEGURANÇA) + PMBOK (PROJETOS)"</strong>'
  },

  M['transformacao-digital'] = {
    topico: 'transformacao-digital',
    titulo: 'Transformação Digital: Conceitos e Tecnologias',
    resumo: 'Big Data, IoT, IA, Machine Learning, Blockchain, 5G, Computação em Nuvem. GovTech, Gov.br.',
    teoria: '<p>A <strong>transformação digital</strong> envolve a integração de tecnologias digitais em todas as áreas. Tecnologias-chave: <em>Big Data</em>, <em>IoT</em> (Internet das Coisas), <em>IA</em> (Inteligência Artificial), <em>Machine Learning</em>, <em>Blockchain</em>, <em>5G</em>, <em>Cloud Computing</em>. No governo: <em>GovTech</em> e <em>Gov.br</em>.</p>',
    regras:['Big Data: grande volume de dados', 'IoT: conexão de objetos à internet', 'IA: simulação da inteligência humana', 'Machine Learning: aprendizado de máquina', 'Blockchain: cadeia de blocos', '5G: quinta geração de redes móveis'],
    excecoes:['<em>Gov.br</em> é o portal do governo federal.','<em>GovTech</em> é o uso de tecnologia no governo.','<em>LGPD</em> regula os dados pessoais.'],
    exemplos:['Gov.br: login único para serviços públicos.','Plataforma gov.br de pagamentos.','Cadastro único (CadÚnico).'],
    pegadinchas:['<strong>Big Data</strong>: 5 V (volume, velocidade, variedade, veracidade, valor).','<strong>IA</strong> vs. <em>Machine Learning</em>: ML é uma sub-área da IA.','<em>Blockchain</em> é imutável.'],
    exercicios: [
      { q: 'Big Data, IoT, IA, Machine Learning, Blockchain, 5G são tecnologias da transformação digital.', g: 'CERTO.' },
      { q: 'Machine Learning é mais amplo que IA.', g: 'ERRADO. ML é uma sub-área da IA.' }
    ],
    sotaque: '<strong>"BIG DATA + IOT + IA + ML + BLOCKCHAIN + 5G + CLOUD"</strong>'
  },

  M['sistemas-arquivos'] = {
    topico: 'sistemas-arquivos',
    titulo: 'Sistemas de Arquivos: FAT, NTFS, EXT4, APFS',
    resumo: 'Sistema de arquivos: organiza dados em disco. FAT (Windows antigo), NTFS (Windows atual), EXT4 (Linux), APFS (MacOS).',
    teoria: '<p>O <strong>sistema de arquivos</strong> é o software que organiza os dados no disco. Tipos: <em>FAT</em> (File Allocation Table, Windows antigo), <em>NTFS</em> (New Technology File System, Windows atual), <em>EXT4</em> (Linux), <em>APFS</em> (Apple File System, MacOS). O NTFS tem suporte a permissões, criptografia, compactação.</p>',
    regras:['FAT: simples, sem permissões, limite 4 GB por arquivo', 'NTFS: permissões, criptografia (EFS), compactação, journaling', 'EXT4: Linux, journaling, rápido', 'APFS: Apple, otimizado para SSD'],
    excecoes:['<em>NTFS</em> é nativo do Windows.','<em>EXT4</em> é nativo do Linux.','<em>FAT32</em> tem limite de 4 GB.','<em>exFAT</em> não tem o limite de 4 GB.'],
    examples:['Pendrive formatado em FAT32 → não copia arquivo > 4 GB.','Disco Windows formatado em NTFS → suporta permissões.'],
    pegadinchas:['<strong>NTFS</strong>: journaling, permissões, criptografia.','<strong>FAT32</strong>: limite 4 GB.','<strong>exFAT</strong>: sem limite 4 GB.','<em>EXT4</em> é o mais usado no Linux.'],
    exercicios: [
      { q: 'O NTFS suporta permissões, criptografia e compactação.', g: 'CERTO.' },
      { q: 'O FAT32 suporta arquivos maiores que 4 GB.', g: 'ERRADO. O limite é 4 GB por arquivo.' }
    ],
    sotaque: '<strong>"NTFS (WINDOWS) + EXT4 (LINUX) + APFS (APPLE). FAT32: LIMITE 4 GB."</strong>'
  };

  M['word-avancado'] = {
    topico: 'word-avancado',
    titulo: 'Word Avançado: Formatação, Estilos, Referências',
    resumo: 'Formatação: fonte, parágrafo, página. Estilos: títulos, subtítulos. Referências: sumário, notas, legendas. Mala direta.',
    teoria: '<p>O <strong>Word</strong> avançado envolve formatação, estilos, referências e mala direta. <em>Formatação</em>: fonte (tipo, tamanho, cor), parágrafo (alinhamento, espaçamento), página (margens, orientação). <em>Estilos</em>: padrões para títulos, subtítulos, corpo. <em>Referências</em>: sumário, notas de rodapé, legendas, índice remissivo.</p>',
    regras:['Formatação: fonte (Arial, Times), tamanho, cor', 'Parágrafo: alinhamento, espaçamento (antes, depois, linha)', 'Página: margens (normal 2,5 cm), orientação (retrato, paisagem)', 'Estilos: Título 1, Título 2, Normal', 'Sumário: automático (atualizável)', 'Notas de rodapé: explicações complementares', 'Mala direta: cartas, etiquetas, e-mails'],
    excecoes:['<em>Estilos</em> facilitam a formatação uniforme.','<em>Sumário</em> automático atualiza com F9.','A <em>mala direta</em> usa fonte de dados.'],
    examples:['Criar sumário automático no Word: Referências → Sumário → Automático.','Aplicar estilo "Título 1" aos títulos principais.','Carta modelo com mala direta para 100 destinatários.'],
    pegadinchas:['<strong>Estilos</strong>: padronização.','<strong>Sumário</strong>: automático.','<em>Mala direta</em>: usa fonte de dados.','<em>Margem normal</em>: 2,5 cm.'],
    exercicios: [
      { q: 'O Word permite criar sumário automático a partir de estilos de título.', g: 'CERTO.' },
      { q: 'A mala direta é um recurso para apagar texto.', g: 'ERRADO. Mala direta é para envio em massa com dados variáveis.' }
    ],
    sotaque: '<strong>"ESTILOS + SUMÁRIO + MALA DIRETA = WORD AVANÇADO"</strong>'
  },

  M['internet-protocolos'] = {
    topico: 'internet-protocolos',
    titulo: 'Protocolos de Internet: HTTP, HTTPS, FTP, DNS, DHCP',
    resumo: 'HTTP/HTTPS: web. FTP: transferência. DNS: nomes → IP. DHCP: IP dinâmico. TCP: confiável. UDP: rápido.',
    teoria: '<p>Os <strong>protocolos de internet</strong> são padrões que permitem a comunicação. <em>HTTP/HTTPS</em>: web (HTTPS é seguro, com SSL/TLS). <em>FTP</em>: transferência de arquivos. <em>DNS</em>: converte nomes em IPs. <em>DHCP</em>: atribui IPs dinamicamente. <em>TCP</em>: protocolo confiável (orientado a conexão). <em>UDP</em>: rápido (sem conexão).</p>',
    regras:['HTTP: web (porta 80)', 'HTTPS: web seguro (porta 443)', 'FTP: transferência de arquivos (porta 21)', 'DNS: nomes em IPs (porta 53)', 'DHCP: atribuição dinâmica de IP (porta 67/68)', 'SMTP: envio de e-mail (porta 25)', 'POP3: recebimento de e-mail (porta 110)', 'IMAP: recebimento de e-mail (porta 143)'],
    excecoes:['<em>HTTPS</em> usa <em>SSL/TLS</em>.','<em>TCP</em> é confiável; <em>UDP</em> é rápido.','<em>DNS</em> resolve nomes.','<em>DHCP</em> atribui IPs.'],
    examples:['Acessar https://www.google.com → HTTPS.','Enviar e-mail → SMTP.','Receber e-mail → POP3 ou IMAP.','Conectar à internet → DHCP atribui IP.'],
    pegadinchas:['<strong>HTTP</strong>: porta 80.','<strong>HTTPS</strong>: porta 443.','<strong>DNS</strong>: porta 53.','<strong>DHCP</strong>: porta 67/68.','<em>TCP</em>: confiável; <em>UDP</em>: rápido.'],
    exercicios: [
      { q: 'O HTTPS é a versão segura do HTTP, com SSL/TLS.', g: 'CERTO.' },
      { q: 'O FTP é usado para navegar em sites.', g: 'ERRADO. FTP é para transferência de arquivos. HTTP/HTTPS é para web.' }
    ],
    sotaque: '<strong>"HTTP 80 + HTTPS 443 + FTP 21 + DNS 53 + DHCP 67/68"</strong>'
  },

  M['tecnologias-web'] = {
    topico: 'tecnologias-web',
    titulo: 'Tecnologias Web: HTML, CSS, JavaScript, Frameworks',
    resumo: 'HTML: estrutura. CSS: estilo. JavaScript: comportamento. Frameworks: React, Angular, Vue, Node.js.',
    teoria: '<p>As <strong>tecnologias web</strong> formam a base da internet. <em>HTML</em> (HyperText Markup Language): estrutura da página. <em>CSS</em> (Cascading Style Sheets): estilo (cores, fontes, layout). <em>JavaScript</em>: comportamento (interatividade). <em>Frameworks</em>: React, Angular, Vue (front-end), Node.js (back-end).</p>',
    regras:['HTML: tags (<h1>, <p>, <div>, <a>)', 'CSS: seletores, propriedades (color, font-size)', 'JavaScript: variáveis, funções, eventos, DOM', 'React: biblioteca para UI (Facebook)', 'Angular: framework completo (Google)', 'Vue: framework progressivo', 'Node.js: JavaScript no servidor'],
    excecoes:['<em>HTML5</em> é a versão atual.','<em>CSS3</em> é a versão atual.','<em>JavaScript</em> é uma linguagem de programação.','<em>Frameworks</em> aceleram o desenvolvimento.'],
    examples:['Página web: HTML estrutura, CSS estiliza, JavaScript interage.','React: SPA (Single Page Application).','Node.js: API RESTful.'],
    pegadinchas:['<strong>HTML</strong>: estrutura.','<strong>CSS</strong>: estilo.','<strong>JavaScript</strong>: comportamento.','<em>React</em> é biblioteca; <em>Angular</em> é framework.'],
    exercicios: [
      { q: 'HTML estrutura a página, CSS estiliza e JavaScript adiciona comportamento.', g: 'CERTO.' },
      { q: 'CSS é uma linguagem de programação.', g: 'ERRADO. CSS é uma linguagem de estilo. JavaScript é linguagem de programação.' }
    ],
    sotaque: '<strong>"HTML + CSS + JS = WEB. REACT + ANGULAR + VUE + NODE = FRAMEWORKS"</strong>'
  },

  M['criacao-algoritmos'] = {
    topico: 'criacao-algoritmos',
    titulo: 'Lógica de Programação e Algoritmos',
    resumo: 'Algoritmo: sequência de passos. Variáveis, tipos, operadores, estruturas de controle (if, for, while). Pseudocódigo e fluxograma.',
    teoria: '<p>Um <strong>algoritmo</strong> é uma <em>sequência finita de passos</em> para resolver um problema. Elementos: <em>variáveis</em> (espaços de memória), <em>tipos de dados</em> (inteiro, real, texto, lógico), <em>operadores</em> (aritméticos, lógicos, relacionais), <em>estruturas de controle</em> (sequência, seleção, repetição).</p>',
    regras:['Variáveis: espaços de memória (inteiro, real, texto, lógico)', 'Operadores: + - * / (aritméticos); > < = (relacionais); E OU NÃO (lógicos)', 'Sequência: comandos em ordem', 'Seleção: if, if-else, switch', 'Repetição: for, while, do-while', 'Pseudocódigo: portugol', 'Fluxograma: representação gráfica'],
    excecoes:['<em>Algoritmo</em> ≠ <em>programa</em>: programa é o algoritmo em uma linguagem.','<em>Pseudocódigo</em> (portugol) é a representação textual.','<em>Fluxograma</em> é a representação gráfica.'],
    examples:['Algoritmo para somar 2 números: ler A, ler B, S = A + B, escrever S.','Estrutura if: if (condição) { comando } else { comando }.','Loop for: for (i=0; i<10; i++) { comando }.'],
    pegadinchas:['<strong>Sequência</strong>: ordem.','<strong>Seleção</strong>: decisão.','<strong>Repetição</strong>: loop.','<em>Pseudocódigo</em> é a linguagem intermediária.'],
    exercicios: [
      { q: 'Um algoritmo é uma sequência finita de passos para resolver um problema.', g: 'CERTO.' },
      { q: 'A estrutura de repetição é usada para decisão.', g: 'ERRADO. Para decisão usa-se seleção (if). Repetição é para loop.' }
    ],
    sotaque: '<strong>"SEQUÊNCIA + SELEÇÃO + REPETIÇÃO = ESTRUTURAS BÁSICAS"</strong>'
  },

  M['banco-dados'] = {
    topico: 'banco-dados',
    titulo: 'Banco de Dados: Relacional, SQL, SGBD',
    resumo: 'SGBD: MySQL, PostgreSQL, Oracle, SQL Server, MongoDB. SQL: DDL, DML, DCL, DQL. Modelagem: entidade-relacionamento.',
    teoria: '<p>Um <strong>banco de dados</strong> é uma coleção organizada de dados. <em>SGBD</em> (Sistema Gerenciador de Banco de Dados): MySQL, PostgreSQL, Oracle, SQL Server, MongoDB. <em>SQL</em> (Structured Query Language): linguagem de consulta. <em>Tipos</em>: relacional (tabelas), NoSQL (documentos, chave-valor, grafo).</p>',
    regras:['Relacional: tabelas, linhas, colunas, chaves', 'SQL: DDL (CREATE, ALTER, DROP), DML (INSERT, UPDATE, DELETE), DCL (GRANT, REVOKE), DQL (SELECT)', 'MySQL: open source, popular', 'PostgreSQL: open source, avançado', 'Oracle: comercial, líder em grandes empresas', 'SQL Server: Microsoft, integrado ao .NET', 'MongoDB: NoSQL, documentos JSON'],
    excecoes:['<em>Chave primária</em> identifica a linha.','<em>Chave estrangeira</em> referencia outra tabela.','<em>SQL</em> é a linguagem padrão.','<em>NoSQL</em> é para dados não-relacionais.'],
    examples:['MySQL: banco web popular.','PostgreSQL: banco avançado.','SELECT * FROM clientes WHERE cidade = \'São Paulo\'; → consulta SQL.'],
    pegadinchas:['<strong>DDL</strong>: definição.','<strong>DML</strong>: manipulação.','<strong>DCL</strong>: controle.','<strong>DQL</strong>: consulta.','<em>SQL</em> é a linguagem.','<em>SGBD</em> é o software.'],
    exercicios: [
      { q: 'SQL é a linguagem padrão para banco de dados relacionais.', g: 'CERTO.' },
      { q: 'INSERT é um comando DCL.', g: 'ERRADO. INSERT é DML (manipulação). DCL é GRANT e REVOKE.' }
    ],
    sotaque: '<strong>"DDL + DML + DCL + DQL. SQL: PADRÃO RELACIONAL."</strong>'
  };

  M['engenharia-social'] = {
    topico: 'engenharia-social',
    titulo: 'Engenharia Social: Técnicas e Prevenção',
    resumo: 'Engenharia social: manipulação psicológica. Phishing, pretexting, baiting, tailgating. Prevenção: educação, política, 2FA.',
    teoria: '<p>A <strong>engenharia social</strong> é a arte de manipular pessoas para obter informações confidenciais. <em>Técnicas</em>: <em>phishing</em> (e-mail falso), <em>pretexting</em> (pretexto falso), <em>baiting</em> (isca), <em>tailgating</em> (seguir alguém autorizado), <em>quid pro quo</em> (falsa troca). <em>Prevenção</em>: educação, política de segurança, autenticação multifator.</p>',
    regras:['Phishing: e-mail ou mensagem falsa', 'Pretexting: pretexto para obter informação', 'Baiting: deixar USB ou CD infectado', 'Tailgating: seguir alguém em área restrita', 'Quid pro quo: falsa troca (suporte técnico falso)', 'Prevenção: educação, 2FA, política, atenção'],
    excecoes:['A <em>engenharia social</em> explora o <em>fator humano</em>.','A <em>tecnologia</em> não resolve sozinha.','A <em>conscientização</em> é a melhor defesa.'],
    examples:['E-mail do "banco" pedindo senha → phishing.','Alguém pede para entrar no prédio carregando caixa → tailgating.','USB infectado deixado no estacionamento → baiting.'],
    pegadinchas:['<strong>Phishing</strong>: e-mail falso.','<strong>Pretexting</strong>: pretexto falso.','<strong>Baiting</strong>: isca.','<strong>Tailgating</strong>: invasão física.','<strong>Quid pro quo</strong>: troca falsa.'],
    exercicios: [
      { q: 'A engenharia social explora o fator humano para obter informações.', g: 'CERTO.' },
      { q: 'O antivírus é suficiente para prevenir phishing.', g: 'ERRADO. A prevenção requer educação e atenção do usuário.' }
    ],
    sotaque: '<strong>"PHISHING + PRETEXTING + BAITING + TAILGATING + QUID PRO QUO"</strong>'
  };

  M['criptografia'] = {
    topico: 'criptografia',
    titulo: 'Criptografia: Simétrica, Assimétrica, Hash',
    resumo: 'Simétrica: mesma chave (AES, DES). Assimétrica: chave pública + privada (RSA). Hash: função unidirecional (SHA-256).',
    teoria: '<p>A <strong>criptografia</strong> protege a confidencialidade e a integridade dos dados. <em>Tipos</em>: <em>simétrica</em> (mesma chave para cifrar e decifrar: AES, DES, 3DES), <em>assimétrica</em> (chave pública e privada: RSA, ECC), <em>hash</em> (função unidirecional: SHA-256, MD5).</p>',
    regras:['Simétrica: mesma chave (mais rápida)', 'AES: Advanced Encryption Standard (padrão atual)', 'DES: Data Encryption Standard (substituído pelo AES)', 'Assimétrica: chave pública (cifra) + chave privada (decifra)', 'RSA: Rivest-Shamir-Adleman (mais usado)', 'Hash: unidirecional, sem volta', 'SHA-256: Secure Hash Algorithm 256 bits (padrão)'],
    excecoes:['<em>Simétrica</em> é rápida; <em>assimétrica</em> é lenta.','<em>Assinatura digital</em> usa assimétrica + hash.','<em>MD5</em> é considerado inseguro.','<em>SHA-256</em> é o padrão atual.'],
    examples:['HTTPS: usa RSA (assimétrica) para trocar chave AES (simétrica).','Assinatura digital: hash + RSA.','Certificado digital: ICP-Brasil.'],
    pegadinchas:['<strong>Simétrica</strong>: mesma chave.','<strong>Assimétrica</strong>: pública + privada.','<strong>Hash</strong>: unidirecional.','<em>AES</em> é o padrão.','<em>MD5</em> é inseguro.'],
    exercicios: [
      { q: 'A criptografia simétrica usa a mesma chave para cifrar e decifrar.', g: 'CERTO.' },
      { q: 'A função hash é reversível.', g: 'ERRADO. Hash é unidirecional, sem volta.' }
    ],
    sotaque: '<strong>"SIMÉTRICA (MESMA CHAVE) + ASSIMÉTRICA (PÚBLICA + PRIVADA) + HASH (UNIDIRECIONAL)"</strong>'
  };

  M['biometria'] = {
    topico: 'biometria',
    titulo: 'Biometria e Autenticação Multifator',
    resumo: 'Biometria: impressão digital, facial, íris. MFA: 2 ou mais fatores (senha + token, senha + biometria).',
    teoria: '<p>A <strong>biometria</strong> é a identificação por características biológicas: <em>impressão digital</em>, <em>facial</em>, <em>íris</em>, <em>voz</em>. A <strong>autenticação multifator (MFA)</strong> combina 2 ou mais fatores: <em>algo que sei</em> (senha), <em>algo que tenho</em> (token), <em>algo que sou</em> (biometria).</p>',
    regras:['Biometria: impressão digital, facial, íris, voz', 'MFA: 2 ou mais fatores', 'Fatores: saber (senha), ter (token), ser (biometria)', 'Aplicações: celular, banco, e-gov', 'Vantagem: difícil de falsificar'],
    excecoes:['<em>Biometria</em> é mais segura que senha (sozinha).','<em>MFA</em> adiciona camada.','<em>Token</em> pode ser físico (TOTP) ou digital (SMS).'],
    examples:['Desbloqueio do celular com digital → biometria.','Login bancário com senha + SMS → MFA.','gov.br com CPF + biometria facial (Login Único).'],
    pegadinchas:['<strong>MFA</strong>: 2 ou mais fatores.','<strong>Saber + Ter + Ser</strong> = 3 fatores.','<em>Biometria</em> é um fator do tipo "ser".','<em>Token</em> é "ter".','<em>Senha</em> é "saber".'],
    exercicios: [
      { q: 'A autenticação multifator combina 2 ou mais fatores de autenticação.', g: 'CERTO.' },
      { q: 'A senha é um fator do tipo "ser".', g: 'ERRADO. Senha é "saber". Biometria é "ser".' }
    ],
    sotaque: '<strong>"MFA: SABER + TER + SER. BIOMETRIA = SER."</strong>'
  };

  M['big-data'] = {
    topico: 'big-data',
    titulo: 'Big Data: 5 V, Ferramentas, Aplicações',
    resumo: '5 V: volume, velocidade, variedade, veracidade, valor. Ferramentas: Hadoop, Spark, NoSQL. Aplicações: saúde, segurança, marketing.',
    teoria: '<p>Os <strong>5 V do Big Data</strong>: <em>Volume</em> (quantidade), <em>Velocidade</em> (rapidez), <em>Variedade</em> (tipos), <em>Veracidade</em> (qualidade), <em>Valor</em> (utilidade). <em>Ferramentas</em>: Hadoop, Spark, NoSQL, Data Lake. <em>Aplicações</em>: saúde, segurança pública, marketing, governo.</p>',
    regras:['Volume: terabytes, petabytes', 'Velocidade: tempo real', 'Variedade: estruturado, semiestruturado, não estruturado', 'Veracidade: qualidade dos dados', 'Valor: benefício para o negócio', 'Ferramentas: Hadoop, Spark, Hive, Pig, Kafka'],
    excecoes:['<em>5 V</em> é o conceito central.','<em>Hadoop</em> é a plataforma pioneira.','<em>Spark</em> é mais rápido que Hadoop.','<em>Data Lake</em> armazena dados brutos.'],
    examples:['Análise de redes sociais → Big Data.','Detecção de fraudes em transações → Big Data.','Saúde: análise de prontuários eletrônicos.'],
    pegadinchas:['<strong>5 V</strong>: Volume, Velocidade, Variedade, Veracidade, Valor.','<em>Hadoop</em>: pioneiro.','<em>Spark</em>: rápido.','<em>Data Lake</em>: brutos.'],
    exercicios: [
      { q: 'Os 5 V do Big Data são: volume, velocidade, variedade, veracidade e valor.', g: 'CERTO.' },
      { q: 'O Big Data é definido por 3 V.', g: 'ERRADO. São 5 V (com veracidade e valor).' }
    ],
    sotaque: '<strong>"5 V: VOLUME + VELOCIDADE + VARIEDADE + VERACIDADE + VALOR"</strong>'
  };

  M['ia-machine-learning'] = {
    topico: 'ia-machine-learning',
    titulo: 'IA, Machine Learning e Deep Learning',
    resumo: 'IA: área ampla. ML: sub-área (aprendizado). Deep Learning: redes neurais profundas. Tipos: supervisionado, não supervisionado, reforço.',
    teoria: '<p>A <strong>IA</strong> (Inteligência Artificial) é a área ampla. <strong>Machine Learning</strong> é sub-área (aprendizado de máquina). <strong>Deep Learning</strong> é sub-área do ML (redes neurais profundas). <em>Tipos de aprendizado</em>: <em>supervisionado</em> (com rótulos), <em>não supervisionado</em> (sem rótulos), <em>por reforço</em> (recompensa).</p>',
    regras:['IA: área ampla', 'ML: sub-área (aprendizado)', 'Deep Learning: redes neurais profundas', 'Supervisionado: com rótulos (classificação, regressão)', 'Não supervisionado: sem rótulos (clusterização, associação)', 'Reforço: recompensa (jogos, robótica)'],
    excecoes:['<em>ML</em> é sub-área da <em>IA</em>.','<em>Deep Learning</em> é sub-área do <em>ML</em>.','<em>Supervisionado</em> usa dados rotulados.','<em>Não supervisionado</em> descobre padrões.'],
    examples:['Classificação de e-mails (spam/não spam) → supervisionado.','Segmentação de clientes → não supervisionado.','AlphaGo → reforço.','ChatGPT → Deep Learning (LLM).'],
    pegadinchas:['<strong>IA</strong> ⊃ <em>ML</em> ⊃ <em>DL</em>.','<strong>Supervisionado</strong>: com rótulos.','<strong>Não supervisionado</strong>: sem rótulos.','<strong>Reforço</strong>: recompensa.'],
    exercicios: [
      { q: 'Deep Learning é uma sub-área do Machine Learning, que é sub-área da IA.', g: 'CERTO.' },
      { q: 'O aprendizado supervisionado não usa rótulos.', g: 'ERRADO. Supervisionado usa rótulos. Não supervisionado é sem rótulos.' }
    ],
    sotaque: '<strong>"IA ⊃ ML ⊃ DL. SUPERVISIONADO + NÃO SUPERVISIONADO + REFORÇO."</strong>'
  };

  M['metodologias-ageis'] = {
    topico: 'metodologias-ageis',
    titulo: 'Metodologias Ágeis: Scrum, Kanban, XP',
    resumo: 'Ágil: Manifesto Ágil (2001). Scrum: sprints, papéis (PO, SM, time). Kanban: fluxo contínuo, quadro visual. XP: práticas (TDD, pareamento).',
    teoria: '<p>As <strong>metodologias ágeis</strong> são abordagens iterativas e incrementais para desenvolvimento de software. <em>Manifesto Ágil</em> (2001): indivíduos, software, colaboração, resposta a mudanças. Principais: <em>Scrum</em>, <em>Kanban</em>, <em>XP</em> (Extreme Programming).</p>',
    regras:['Scrum: sprints (1-4 semanas), papéis (PO, SM, time), cerimônias (planning, daily, review, retro)', 'Kanban: quadro visual (a fazer, fazendo, feito), WIP limit', 'XP: TDD, pareamento, integração contínua, refatoração', 'Manifesto Ágil: indivíduos e interações > processos e ferramentas; software funcionando > documentação; colaboração com cliente > negociação; resposta a mudanças > seguir plano'],
    excecoes:['<em>Scrum</em> é o mais usado.','<em>Kanban</em> é focado em fluxo.','<em>XP</em> é focado em práticas técnicas.'],
    examples:['Scrum: time desenvolve software em sprints de 2 semanas.','Kanban: time move tarefas no quadro.','TDD: escrever teste antes do código.'],
    pegadinchas:['<strong>Scrum</strong>: papéis, cerimônias, sprints.','<strong>Kanban</strong>: fluxo contínuo, WIP.','<strong>XP</strong>: práticas técnicas.','<em>Manifesto</em>: 4 valores.'],
    exercicios: [
      { q: 'O Manifesto Ágil valoriza indivíduos e interações, software funcionando, colaboração e resposta a mudanças.', g: 'CERTO.' },
      { q: 'O Kanban é uma metodologia de gestão de projetos com sprints.', g: 'ERRADO. Kanban tem fluxo contínuo, sem sprints. Scrum é que tem sprints.' }
    ],
    sotaque: '<strong>"SCRUM (SPRINTS) + KANBAN (FLUXO) + XP (PRÁTICAS)"</strong>'
  };

  M['cloud-providers'] = {
    topico: 'cloud-providers',
    titulo: 'Provedores de Nuvem: AWS, Azure, GCP',
    resumo: 'AWS: Amazon, líder. Azure: Microsoft, integrado. GCP: Google, IA/ML. Serviços: IaaS, PaaS, SaaS, FaaS (Lambda, Functions).',
    teoria: '<p>Os <strong>provedores de nuvem</strong> são empresas que oferecem serviços de computação em nuvem. Principais: <em>AWS</em> (Amazon Web Services, líder), <em>Azure</em> (Microsoft, integrado ao Windows), <em>GCP</em> (Google Cloud Platform, forte em IA/ML). <em>Modelos</em>: IaaS, PaaS, SaaS, FaaS (Function as a Service).</p>',
    regras:['AWS: Amazon, líder de mercado, mais serviços', 'Azure: Microsoft, forte em empresas Windows', 'GCP: Google, forte em IA/ML e dados', 'IaaS: infraestrutura', 'PaaS: plataforma', 'SaaS: software', 'FaaS: serverless (Lambda, Functions, Cloud Functions)'],
    excecoes:['<em>AWS</em> tem mais serviços e市场份额.','<em>Azure</em> é forte em ambiente Microsoft.','<em>GCP</em> é forte em dados e IA.','<em>FaaS</em> é serverless.'],
    examples:['S3 (AWS): armazenamento.','EC2 (AWS): servidores.','Azure Functions: FaaS.','BigQuery (GCP): data warehouse.'],
    pegadinchas:['<strong>AWS</strong>: líder.','<strong>Azure</strong>: Microsoft.','<strong>GCP</strong>: Google, IA.','<em>Lambda</em> é AWS.','<em>Functions</em> é Azure.','<em>Cloud Functions</em> é GCP.'],
    exercicios: [
      { q: 'AWS, Azure e GCP são os principais provedores de nuvem.', g: 'CERTO.' },
      { q: 'O Azure é da Google.', g: 'ERRADO. Azure é Microsoft. GCP é da Google.' }
    ],
    sotaque: '<strong>"AWS (LÍDER) + AZURE (MICROSOFT) + GCP (GOOGLE/IA)"</strong>'
  };

  M['governanca-dados'] = {
    topico: 'governanca-dados',
    titulo: 'Governança de Dados: LGPD, ANPD, DPO',
    resumo: 'LGPD: Lei 13.709/18. Princípios: finalidade, necessidade, segurança, transparência. ANPD: autoridade. DPO: encarregado de dados.',
    teoria: '<p>A <strong>governança de dados</strong> regula o tratamento de dados pessoais. <em>LGPD</em> (Lei 13.709/2018): lei geral de proteção de dados. <em>ANPD</em>: Autoridade Nacional de Proteção de Dados. <em>DPO</em> (Data Protection Officer): encarregado de dados. <em>Princípios</em>: finalidade, adequação, necessidade, livre acesso, qualidade, transparência, segurança, prevenção, não discriminação, responsabilização.</p>',
    regras:['LGPD: 13.709/18, inspirada na GDPR europeia', '10 princípios: finalidade, adequação, necessidade, livre acesso, qualidade, transparência, segurança, prevenção, não discriminação, responsabilização', 'ANPD: órgão regulador', 'DPO: encarregado de dados', 'Bases legais: consentimento, cumprimento de obrigação legal, execução de políticas públicas, etc.'],
    excecoes:['<em>LGPD</em> se aplica a pessoas físicas e jurídicas.','<em>ANPD</em> é a autoridade.','<em>DPO</em> é obrigatório em muitas organizações.','<em>Consentimento</em> é uma das bases legais.'],
    examples:['E-commerce pede consentimento para uso de cookies → LGPD.','Hospital protege prontuários → LGPD.','gov.br adota LGPD.'],
    pegadinchas:['<strong>LGPD</strong>: 13.709/18.','<strong>ANPD</strong>: autoridade.','<strong>DPO</strong>: encarregado.','<em>10 princípios</em> da LGPD.'],
    exercicios: [
      { q: 'A LGPD (Lei 13.709/2018) é a lei brasileira de proteção de dados pessoais.', g: 'CERTO.' },
      { q: 'A ANPD é a autoridade de proteção de dados no Brasil.', g: 'CERTO.' }
    ],
    sotaque: '<strong>"LGPD + ANPD + DPO. 10 PRINCÍPIOS."</strong>'
  },

  M['mobile-computing'] = {
    topico: 'mobile-computing',
    titulo: 'Computação Móvel: BYOD, MDM, Apps',
    resumo: 'BYOD: traga seu dispositivo. MDM: gerenciamento. Apps: nativas, web, híbridas. iOS, Android.',
    teoria: '<p>A <strong>computação móvel</strong> envolve o uso de dispositivos móveis (smartphones, tablets) no trabalho. <em>BYOD</em> (Bring Your Own Device): política de uso de dispositivos pessoais. <em>MDM</em> (Mobile Device Management): gerenciamento remoto. <em>Apps</em>: nativas (iOS/Android), web (HTML5), híbridas (Cordova, React Native).</p>',
    regras:['BYOD: Bring Your Own Device', 'MDM: Mobile Device Management', 'Apps nativas: Swift (iOS), Kotlin (Android)', 'Apps web: HTML5, acessadas pelo navegador', 'Apps híbridas: Cordova, React Native, Flutter', 'Sistemas: iOS (Apple), Android (Google)'],
    excecoes:['<em>BYOD</em> traz desafios de segurança.','<em>MDM</em> gerencia e protege.','<em>Apps nativas</em> são mais rápidas.','<em>Apps web</em> são multiplataforma.'],
    examples:['Funcionário usa smartphone pessoal no trabalho → BYOD.','Empresa instala MDM para gerenciar os dispositivos.','App gov.br é híbrido/web.'],
    pegadinchas:['<strong>BYOD</strong>: dispositivo pessoal.','<strong>MDM</strong>: gerenciamento.','<em>iOS</em>: Apple.','<em>Android</em>: Google.','<em>Nativas</em> são específicas; <em>web</em> é genérica.'],
    exercicios: [
      { q: 'BYOD é a política de uso de dispositivos pessoais no trabalho.', g: 'CERTO.' },
      { q: 'O Android é o sistema operacional da Apple.', g: 'ERRADO. Android é Google. iOS é Apple.' }
    ],
    sotaque: '<strong>"BYOD + MDM. NATIVAS (SWIFT/KOTLIN) + WEB (HTML5) + HÍBRIDAS."</strong>'
  };

  M['redes-sociais-comunidades'] = {
    topico: 'redes-sociais-comunidades',
    titulo: 'Redes Sociais e Mídias Sociais no Governo',
    resumo: 'Redes sociais: Facebook, Twitter, Instagram, LinkedIn, YouTube, TikTok. Uso no governo: comunicação, transparência, participação.',
    teoria: '<p>As <strong>redes sociais</strong> são plataformas digitais de interação social. <em>Principais</em>: Facebook, Twitter/X, Instagram, LinkedIn, YouTube, TikTok. <em>Uso no governo</em>: comunicação com o cidadão, transparência, participação, ouvidoria.</p>',
    regras:['Facebook: rede social mais usada (comunicação, eventos)', 'Twitter/X: microblogging (comunicação rápida)', 'Instagram: fotos e vídeos (jovens)', 'LinkedIn: profissional (carreira)', 'YouTube: vídeos (tutoriais, transparência)', 'TikTok: vídeos curtos (público jovem)'],
    excecoes:['O <em>governo</em> usa redes para se comunicar com a população.','A <em>transparência</em> pode incluir redes sociais.','A <em>participação</em> é facilitada por redes.'],
    examples:['Governo Federal no Twitter: @govbr.','Ministério no YouTube: vídeos institucionais.','CGU no Facebook: ouvidoria.'],
    pegadinchas:['<strong>Facebook</strong>: mais usuários.','<strong>Twitter/X</strong>: comunicação rápida.','<strong>Instagram</strong>: jovens.','<strong>LinkedIn</strong>: profissional.','<strong>YouTube</strong>: vídeos.','<strong>TikTok</strong>: vídeos curtos.'],
    exercicios: [
      { q: 'As redes sociais são usadas pelo governo para comunicação, transparência e participação.', g: 'CERTO.' },
      { q: 'O LinkedIn é uma rede para fotos e vídeos curtos.', g: 'ERRADO. LinkedIn é profissional. TikTok é vídeos curtos.' }
    ],
    sotaque: '<strong>"FACEBOOK + TWITTER/X + INSTAGRAM + LINKEDIN + YOUTUBE + TIKTOK"</strong>'
  };

  global.MATERIAS_EXT = global.MATERIAS_EXT || {};
  global.MATERIAS_EXT.informatica = M;
})(window);
