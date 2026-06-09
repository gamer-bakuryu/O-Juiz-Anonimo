/* ============================================
   O JUIZ ANÔNIMO — STORY DATA
   Todos os nós da história
   ============================================ */

const Story = {
    nodes: {},

    getNode(id) {
        return this.nodes[id] || null;
    },

    // Registrar nó
    add(id, data) {
        this.nodes[id] = { id, ...data };
    }
};

// ═══════════════════════════════════════════
// PRÓLOGO
// ═══════════════════════════════════════════

Story.add('start', {
    caseLabel: 'PRÓLOGO',
    text: [
        'Segunda-feira. 22:47.',
        'Você chega em casa depois de mais um dia que não vai deixar nenhuma marca na sua memória.',
        'Chaves na mesa. Sapatos no canto. Geladeira aberta. Fechada. Nada de interessante.',
        'O apartamento está silencioso como sempre. O tipo de silêncio que não é paz — é ausência.',
        'Você se joga no sofá.',
        'O notebook está na mesa de centro, exatamente onde você deixou ontem. E anteontem. E no dia anterior.'
    ],
    choices: [
        { text: 'Abrir o notebook e checar e-mails', next: 'prologo_notebook' },
        { text: 'Ignorar e ir direto dormir', next: 'prologo_dormir' },
        { text: 'Ligar a TV para ter barulho de fundo', next: 'prologo_tv' },
        { text: 'Pegar o celular e rolar redes sociais', next: 'prologo_celular' }
    ]
});

Story.add('prologo_tv', {
    caseLabel: 'PRÓLOGO',
    text: [
        'O jornal da noite está passando.',
        '[DEPOIMENTO]"...o caso do empresário acusado de desviar verbas públicas continua sem julgamento. A família da vítima protesta em frente ao tribunal pelo terceiro dia consecutivo..."',
        'A âncora continua falando, mas você não está mais ouvindo.',
        'Justiça. Que palavra curiosa. Todo mundo quer. Ninguém concorda no que é.',
        'Você desliga a TV. O silêncio volta, mais pesado que antes.',
        'O notebook parece te encarar da mesa.'
    ],
    choices: [
        { text: 'Abrir o notebook', next: 'prologo_notebook' },
        { text: 'Ir dormir', next: 'prologo_dormir' }
    ]
});

Story.add('prologo_celular', {
    caseLabel: 'PRÓLOGO',
    text: [
        'Instagram. Twitter. TikTok. O ciclo de sempre.',
        'Um post chama sua atenção:',
        '[HIGHLIGHT]"Enquete: Se você pudesse decidir o destino de uma pessoa, faria isso?"',
        '87% responderam "Sim".',
        'Você olha para os comentários:',
        '[DEPOIMENTO]"Fácil, eu seria mais justo que qualquer juiz"',
        '[DEPOIMENTO]"Ninguém deveria ter esse poder"',
        '[DEPOIMENTO]"Depende da pessoa lol"',
        'Você fecha o app. Algo naquela pergunta ficou na sua cabeça.',
        'O notebook está ali. Esperando.'
    ],
    choices: [
        { text: 'Abrir o notebook', next: 'prologo_notebook' },
        { text: 'Ir dormir', next: 'prologo_dormir' }
    ]
});

Story.add('prologo_dormir', {
    caseLabel: 'PRÓLOGO',
    text: [
        'Você vai para o quarto. Escova os dentes mecanicamente. Deita.',
        'Fica olhando para o teto.',
        '10 minutos. 20 minutos. 40 minutos.',
        'O sono não vem.',
        'Tem algo errado e você não sabe o quê. Não é insônia. É inquietação. Como se algo estivesse prestes a acontecer.',
        'Você levanta, vai até a sala.',
        'O notebook está com a tela ligada.',
        '[HIGHLIGHT]Você tem certeza de que não o abriu.',
        'A tela mostra sua caixa de e-mail. Há uma mensagem não lida.',
        'Remetente: [EM BRANCO]',
        'Assunto: "Você foi escolhido."',
        'Seu coração acelera. Só um pouco.'
    ],
    choices: [
        { text: 'Ler o e-mail', next: 'prologo_email' },
        { text: 'Fechar o notebook imediatamente', next: 'prologo_fechar_notebook' },
        { text: 'Verificar se alguém invadiu seu computador', next: 'prologo_verificar' }
    ]
});

Story.add('prologo_fechar_notebook', {
    caseLabel: 'PRÓLOGO',
    text: [
        'Você fecha a tampa. Se levanta. Vai até a cozinha. Bebe um copo d\'água.',
        'Quando volta, o notebook está aberto. A tela mostra o e-mail.',
        'Você não encosta nele.',
        'Vai para o quarto. Fecha a porta.',
        'Às 3:14 da manhã, seu celular vibra. Uma notificação de um app que você não instalou:',
        '[SYSTEM]"Tudo bem. Esperamos. Mas os casos não esperam."',
    ],
    choices: [
        { text: 'Voltar à sala e ler o e-mail', next: 'prologo_email' },
        { text: 'Ignorar e tentar dormir', next: 'prologo_ignorar_final' }
    ]
});

Story.add('prologo_verificar', {
    caseLabel: 'PRÓLOGO',
    text: [
        'Você checa os processos rodando. Nada estranho.',
        'Checa o remetente do e-mail. Em branco. Sem IP rastreável. Sem headers normais.',
        'Como se o e-mail tivesse sempre estado ali.',
        'Isso não é um vírus comum. Isso é algo maior.',
        'O e-mail continua na tela, esperando.'
    ],
    choices: [
        { text: 'Ler o e-mail', next: 'prologo_email' },
        { text: 'Fechar tudo e ir dormir', next: 'prologo_dormir' }
    ]
});

Story.add('prologo_ignorar_final', {
    caseLabel: 'PRÓLOGO',
    text: [
        'Você força os olhos fechados.',
        'Às 4:02, o celular vibra de novo:',
        '[SYSTEM]"Caso 01 será atribuído a outro juiz. Uma mãe de 34 anos será julgada por alguém que talvez não se importe."',
        '[SYSTEM]"Você se importa?"',
        'O teto do quarto parece mais baixo que antes.',
        '[PAUSA]...',
        'Você sonha com um tribunal vazio. Você está sentado na cadeira do juiz. Não há ninguém na sala.',
        'Mas há uma voz:',
        '[DEPOIMENTO]"Todo mundo julga, todos os dias. No ônibus. No trabalho. No jantar. A única diferença é que aqui... suas opiniões têm peso."',
        'Você acorda suando. São 6:15 da manhã.',
        'O notebook está aberto na mesa de centro. O e-mail está na tela.',
        'Desta vez, você senta e lê.'
    ],
    next: 'prologo_email'
});

Story.add('prologo_notebook', {
    caseLabel: 'PRÓLOGO',
    text: [
        'A tela acende.',
        'Caixa de entrada: 14 e-mails não lidos.',
        'Spam. Newsletter. Promoção. Fatura.',
        'E um e-mail diferente.',
        'Sem remetente. Sem horário de envio. Como se sempre tivesse estado ali.',
        '[HIGHLIGHT]Assunto: "Você foi escolhido."'
    ],
    choices: [
        { text: 'Abrir o e-mail', next: 'prologo_email' },
        { text: 'Deletar sem ler', next: 'prologo_deletar' },
        { text: 'Marcar como spam', next: 'prologo_deletar' },
        { text: 'Verificar o remetente nos detalhes técnicos', next: 'prologo_verificar' }
    ]
});

Story.add('prologo_deletar', {
    caseLabel: 'PRÓLOGO',
    text: [
        'Você deleta o e-mail.',
        'A tela pisca.',
        'O e-mail está de volta. Na caixa de entrada. Como se nada tivesse acontecido.',
        'Você deleta de novo. Ele volta. De novo. Volta.',
        'Uma linha aparece abaixo do assunto que não estava lá antes:',
        '[SYSTEM]"Você pode ignorar. Mas não pode apagar."'
    ],
    choices: [
        { text: 'Abrir o e-mail', next: 'prologo_email' },
        { text: 'Fechar o notebook e se afastar', next: 'prologo_fechar_notebook' }
    ]
});

Story.add('prologo_email', {
    caseLabel: 'PRÓLOGO',
    text: [
        'Você lê:',
        '[SEPARATOR]═══════════════════════════════════',
        '[DOSSIER]Prezado(a),',
        '[DOSSIER]Você foi selecionado(a) para integrar o Programa Anônimo de Arbitragem Moral.',
        '[DOSSIER-HEADER]P.A.A.M.',
        '[DOSSIER]Este não é um jogo. Este não é um teste psicológico. Este não é um experimento acadêmico.',
        '[DOSSIER]Você receberá casos reais. Pessoas reais. Consequências reais.',
        '[DOSSIER]Suas decisões serão implementadas.',
        '[DOSSIER]Regras:',
        '[DOSSIER]1. Você não pode ignorar um caso após aceitá-lo.',
        '[DOSSIER]2. Você não pode investigar por conta própria.',
        '[DOSSIER]3. As informações fornecidas são tudo que você terá.',
        '[DOSSIER]4. Você não saberá os resultados até o final.',
        '[DOSSIER]5. Você será julgado ao final.',
        '[DOSSIER]Não sabemos se você é uma boa pessoa. Não sabemos se é justo. Mas alguém precisa decidir. E algoritmos, juízes e políticos falharam.',
        '[DOSSIER]Talvez um estranho comum seja a resposta. Talvez não.',
        '[DOSSIER]Vamos descobrir juntos.',
        '[DOSSIER]— P.A.A.M.',
        '[SEPARATOR]═══════════════════════════════════',
        'Abaixo do texto, dois botões: [ACEITAR] e [RECUSAR]',
        '[SYSTEM]"Aceitar é irreversível. Recusar também é uma decisão."'
    ],
    choices: [
        { text: 'Aceitar imediatamente', next: 'prologo_aceitar' },
        { text: 'Recusar', next: 'prologo_recusar' },
        { text: 'Reler o e-mail com mais cuidado', next: 'prologo_reler' },
        { text: 'Pesquisar "P.A.A.M." no Google', next: 'prologo_pesquisar' },
        { text: 'Responder o e-mail com perguntas', next: 'prologo_responder' },
        { text: 'Ligar para alguém e pedir conselho', next: 'prologo_ligar' }
    ]
});

Story.add('prologo_reler', {
    caseLabel: 'PRÓLOGO',
    text: [
        'Você relê. Três vezes.',
        '"Casos reais." "Pessoas reais." "Consequências reais."',
        'Essas três frases ficam na sua cabeça.',
        'Se for real, é poder demais para uma pessoa. Se for falso, é uma pegadinha elaborada.',
        'Mas e se for real?',
        'Uma parte de você — a parte que assistiu ao jornal e sentiu que o mundo é injusto — quer clicar em ACEITAR.',
        'Outra parte — a parte racional — diz que isso é loucura.'
    ],
    choices: [
        { text: 'Aceitar', next: 'prologo_aceitar' },
        { text: 'Recusar', next: 'prologo_recusar' },
        { text: 'Pesquisar "P.A.A.M." primeiro', next: 'prologo_pesquisar' },
        { text: 'Responder com perguntas', next: 'prologo_responder' }
    ]
});

Story.add('prologo_pesquisar', {
    caseLabel: 'PRÓLOGO',
    text: [
        'Você abre outra aba. Google.',
        '"P.A.A.M." — Nenhum resultado relevante.',
        '"Programa Anônimo de Arbitragem Moral" — Nada.',
        'Nada no Reddit. Nada no Twitter. Nada em lugar nenhum.',
        'Ou isso não existe... ou foi feito para não ser encontrado.',
        'Você volta à aba do e-mail.',
        'Uma nova linha apareceu no final:',
        '[SYSTEM]"Não vai encontrar nada. Esse é o ponto de ser anônimo. Você também será anônimo."',
        '[HIGHLIGHT]Eles sabem que você pesquisou.',
        'Seu estômago gela.'
    ],
    choices: [
        { text: 'Aceitar', next: 'prologo_aceitar' },
        { text: 'Recusar', next: 'prologo_recusar' },
        { text: 'Responder: "Como vocês sabem o que eu faço?"', next: 'prologo_como_sabem' }
    ]
});

Story.add('prologo_como_sabem', {
    caseLabel: 'PRÓLOGO',
    text: [
        'Você digita: "Como vocês sabem o que eu faço no meu computador? Quem são vocês? Isso é legal?"',
        'ENVIAR.',
        'Resposta em 4 segundos:',
        '[SYSTEM]"Legalidade é um conceito interessante, vindo de alguém que está prestes a julgar pessoas fora de qualquer sistema legal."',
        '[SYSTEM]"Quanto a quem somos: somos as pessoas que fazem o que os tribunais não conseguem. Mais rápido. Mais honesto. Sem política. Sem corrupção. Sem burocracia."',
        '[SYSTEM]"Só uma pessoa. Uma decisão. Uma consequência."',
        '[SYSTEM]"Última pergunta?"'
    ],
    choices: [
        { text: '"Por que eu?"', next: 'prologo_porque_eu' },
        { text: '"O que acontece se eu recusar?"', next: 'prologo_se_recusar' },
        { text: '"Quantos casos serão?"', next: 'prologo_quantos_casos' },
        { text: 'Aceitar sem mais perguntas', next: 'prologo_aceitar' }
    ]
});

Story.add('prologo_porque_eu', {
    caseLabel: 'PRÓLOGO',
    text: [
        'Resposta em 7 segundos:',
        '[SYSTEM]"Analisamos 12.847 pessoas nos últimos 6 meses."',
        '[SYSTEM]"Perfis psicológicos. Histórico de decisões. Padrões de comportamento online. Como você trata garçons. O que você faz quando ninguém está olhando."',
        '[SYSTEM]"Você não é especial. Você não é o mais inteligente, nem o mais ético, nem o mais justo."',
        '[HIGHLIGHT]"Mas você se importa."',
        '[SYSTEM]"Nem todo mundo se importa."',
        '[SYSTEM]"E as pessoas que se importam cometem erros mais interessantes."'
    ],
    choices: [
        { text: 'Aceitar', next: 'prologo_aceitar' },
        { text: '"Isso não é uma resposta de verdade"', next: 'prologo_nao_resposta' },
        { text: 'Recusar', next: 'prologo_recusar' }
    ]
});

Story.add('prologo_nao_resposta', {
    caseLabel: 'PRÓLOGO',
    text: [
        'Resposta em 2 segundos:',
        '[SYSTEM]"Tem razão. Não é."',
        '[SYSTEM]"A resposta de verdade é simples: você está sozinho numa segunda-feira à noite lendo e-mails de estranhos."',
        '[SYSTEM]"Você quer que sua vida tenha peso. Nós estamos oferecendo peso."',
        '[SYSTEM]"O resto é escolha sua."',
        'Isso dói um pouco.',
        'Porque é verdade.'
    ],
    choices: [
        { text: 'Aceitar', next: 'prologo_aceitar' },
        { text: 'Recusar', next: 'prologo_recusar' }
    ]
});

Story.add('prologo_se_recusar', {
    caseLabel: 'PRÓLOGO',
    text: [
        'Resposta em 10 segundos. Como se tivessem pensado antes de responder.',
        '[SYSTEM]"Nada."',
        '[SYSTEM]"Sua vida continua exatamente como está. Amanhã você vai trabalhar. Volta para casa. Abre o notebook. Fecha o notebook. Dorme. Repete."',
        '[SYSTEM]"Os casos serão enviados para outro juiz. Alguém decidirá no seu lugar."',
        '[SYSTEM]"Talvez alguém mais sábio. Talvez alguém que não se importe."',
        '[SYSTEM]"Você nunca vai saber."'
    ],
    choices: [
        { text: 'Aceitar', next: 'prologo_aceitar' },
        { text: 'Recusar mesmo assim', next: 'prologo_recusar' },
        { text: '"Quantos casos serão?"', next: 'prologo_quantos_casos' }
    ]
});

Story.add('prologo_quantos_casos', {
    caseLabel: 'PRÓLOGO',
    text: [
        'Resposta em 3 segundos:',
        '[SYSTEM]"Sete."',
        '[SYSTEM]"Sete casos. Sete decisões. Depois disso, o programa se encerra para você."',
        '[SYSTEM]"Não tomará mais que algumas horas da sua vida."',
        '[HIGHLIGHT]"Mas vai mudar a vida de outras pessoas para sempre."',
        '[SYSTEM]"Talvez mude a sua também."'
    ],
    choices: [
        { text: 'Aceitar', next: 'prologo_aceitar' },
        { text: 'Recusar', next: 'prologo_recusar' }
    ]
});

Story.add('prologo_responder', {
    caseLabel: 'PRÓLOGO',
    text: [
        'Você digita uma resposta e envia.',
        'A resposta chega em 4 segundos:',
        '[SYSTEM]"Suas perguntas são compreensíveis. Mas as respostas só fazem sentido depois que você começa."',
        '[SYSTEM]"Aceitar ou recusar. Não há meio-termo."'
    ],
    choices: [
        { text: 'Aceitar', next: 'prologo_aceitar' },
        { text: 'Recusar', next: 'prologo_recusar' },
        { text: '"Por que eu?"', next: 'prologo_porque_eu' }
    ]
});

Story.add('prologo_ligar', {
    caseLabel: 'PRÓLOGO',
    text: [
        'Você pega o celular.',
        'Seus contatos recentes:',
        '- Mãe (última ligação: 12 dias atrás)',
        '- Trabalho - Carla (ontem)',
        '- Entrega iFood (3 dias atrás)',
        'Você percebe que não tem para quem ligar. Não sobre isso.',
        '"Oi, recebi um e-mail misterioso de uma organização secreta que quer que eu julgue pessoas. Tudo bem?"',
        'Quem acreditaria?',
        'Você coloca o celular na mesa.',
        '[HIGHLIGHT]É uma decisão que só você pode tomar.'
    ],
    choices: [
        { text: 'Aceitar', next: 'prologo_aceitar' },
        { text: 'Recusar', next: 'prologo_recusar' }
    ]
});

Story.add('prologo_recusar', {
    caseLabel: 'PRÓLOGO',
    text: [
        'Você clica em [RECUSAR].',
        'A tela fica branca por 5 segundos.',
        'Depois, uma única frase:',
        '[SYSTEM]"Recusar é a primeira decisão que muitos juízes gostariam de ter tomado. Respeitamos sua escolha."',
        'A tela volta ao normal. O e-mail desapareceu. Nenhum rastro.',
        'Você fecha o notebook. Vai para a cama. Dorme.',
        '[PAUSA]...',
        'Terça-feira. Quarta-feira. Quinta-feira.',
        'A semana passa. Mas algo mudou.',
        'Você começa a prestar atenção nas notícias. Na mulher que foi presa por roubar comida. No professor acusado sem provas. Na criança encontrada com drogas.',
        'Antes, eram manchetes. Agora, são casos.',
        'E você pensa: "O que eu teria decidido?"',
        '[PAUSA]...',
        'Sexta-feira. 23:12.',
        'Um novo e-mail. Mesmo remetente em branco.',
        'Assunto: "Você mudou de ideia?"',
        'Abaixo, uma única linha:',
        '[SYSTEM]"O caso 01 ainda está esperando um juiz."',
        'Não há botão de recusar desta vez.'
    ],
    choices: [
        { text: 'Aceitar', next: 'prologo_aceitar' }
    ]
});

Story.add('prologo_aceitar', {
    caseLabel: 'PRÓLOGO',
    text: [
        'Você clica em [ACEITAR].',
        'A tela escurece por 3 segundos.',
        '[SEPARATOR]═══════════════════════════════════',
        '[HIGHLIGHT]BEM-VINDO, JUIZ #4891.',
        'Seu perfil foi criado. Suas decisões serão registradas. Seus padrões serão analisados.',
        '[SYSTEM]"Lembre-se: Não existe resposta certa. Existe apenas a SUA resposta. E toda resposta tem um preço."',
        '[SEPARATOR]═══════════════════════════════════'
    ],
    next: 'prologo_briefing'
});

Story.add('prologo_briefing', {
    caseLabel: 'PRÓLOGO',
    text: [
        '[DOSSIER-HEADER]BRIEFING INICIAL',
        '[DOSSIER]Antes do primeiro caso, algumas orientações:',
        '[DOSSIER]1. Você receberá informações sobre cada caso. Elas são TUDO que você tem. Na vida real, juízes também decidem com informações incompletas.',
        '[DOSSIER]2. Em alguns casos, você poderá pedir MAIS INFORMAÇÕES. Cuidado: saber mais nem sempre ajuda. Às vezes, mais contexto torna a decisão mais difícil, não mais fácil.',
        '[DOSSIER]3. Não existe resposta certa. Se existisse, não precisaríamos de você.',
        '[DOSSIER]4. Suas decisões serão implementadas EXATAMENTE como você determinar.',
        '[SEPARATOR]═══════════════════════════════════',
        'Uma última pergunta antes de começarmos:',
        '[HIGHLIGHT]"O que você acredita que é mais importante na hora de julgar alguém?"'
    ],
    choices: [
        {
            text: 'A lei acima de tudo',
            next: 'prologo_briefing_lei',
            points: { justica: 1 },
            decision: 'Acredita que a lei está acima de tudo'
        },
        {
            text: 'O contexto de cada pessoa',
            next: 'prologo_briefing_contexto',
            points: { compaixao: 1 },
            decision: 'Acredita no contexto de cada pessoa'
        },
        {
            text: 'As consequências da decisão',
            next: 'prologo_briefing_consequencias',
            points: { pragmatismo: 1 },
            decision: 'Acredita nas consequências da decisão'
        },
        {
            text: 'Não sei — talvez descubra ao longo do caminho',
            next: 'prologo_briefing_naosabe',
            decision: 'Não sabe o que é mais importante ao julgar'
        }
    ]
});

Story.add('prologo_briefing_lei', {
    caseLabel: 'PRÓLOGO',
    text: [
        '[SYSTEM]"Interessante. A lei é clara, objetiva, impessoal. Mas foi escrita por pessoas. E pessoas erram."',
        '[SYSTEM]"Veremos se você mantém essa posição quando a lei parecer injusta."',
        '[SYSTEM]"Registrado."'
    ],
    next: 'prologo_momento_antes'
});

Story.add('prologo_briefing_contexto', {
    caseLabel: 'PRÓLOGO',
    text: [
        '[SYSTEM]"Interessante. Empatia como bússola. Mas e quando duas pessoas sofrem e só uma pode ser ajudada?"',
        '[SYSTEM]"O contexto de quem pesa mais?"',
        '[SYSTEM]"Veremos. Registrado."'
    ],
    next: 'prologo_momento_antes'
});

Story.add('prologo_briefing_consequencias', {
    caseLabel: 'PRÓLOGO',
    text: [
        '[SYSTEM]"Interessante. Pragmatismo. O que importa é o resultado, não a intenção."',
        '[SYSTEM]"Mas e quando a melhor consequência exige uma decisão cruel?"',
        '[SYSTEM]"Veremos. Registrado."'
    ],
    next: 'prologo_momento_antes'
});

Story.add('prologo_briefing_naosabe', {
    caseLabel: 'PRÓLOGO',
    text: [
        '[SYSTEM]"A resposta mais honesta que já recebemos."',
        '[SYSTEM]"A maioria dos juízes chega aqui com certezas. Saem com dúvidas."',
        '[SYSTEM]"Talvez começar com dúvidas seja uma vantagem."',
        '[SYSTEM]"Registrado."'
    ],
    next: 'prologo_momento_antes'
});

Story.add('prologo_momento_antes', {
    caseLabel: 'PRÓLOGO',
    text: [
        'Você olha ao redor do apartamento.',
        'Tudo igual. As mesmas paredes. O mesmo sofá. A mesma solidão.',
        'Mas algo mudou.',
        '[HIGHLIGHT]Pela primeira vez em muito tempo, o que você vai fazer a seguir importa de verdade.',
        'Não para você. Para alguém que você nunca vai conhecer.',
        '[SEPARATOR]═══════════════════════════════════',
        '[SYSTEM]CASO 01: FURTO EM FARMÁCIA',
        '[SYSTEM]STATUS: AGUARDANDO SEU VEREDITO',
        '[SEPARATOR]═══════════════════════════════════'
    ],
    choices: [
        { text: 'Abrir o Caso 01', next: 'caso01_inicio' },
        { text: 'Esperar um momento (respirar)', next: 'prologo_respirar' }
    ]
});

Story.add('prologo_respirar', {
    caseLabel: 'PRÓLOGO',
    text: [
        'Você respira fundo.',
        'Olha para suas mãos. Mãos normais. De uma pessoa normal. Que está prestes a fazer algo que não é normal.',
        'Você se pergunta:',
        '[HIGHLIGHT]"Eu sou qualificado para isso?"',
        'A resposta, claro, é não.',
        'Ninguém é.',
        'Esse é o ponto.'
    ],
    choices: [
        { text: 'Abrir o Caso 01', next: 'caso01_inicio' }
    ]
});

// ═══════════════════════════════════════════
// CASO 01 — A MÃE QUE ROUBOU
// ═══════════════════════════════════════════

Story.add('caso01_inicio', {
    caseLabel: 'CASO 01 — FURTO EM FARMÁCIA',
    showTransition: {
        title: 'C A S O  0 1',
        subtitle: '"Até onde vai o desespero de uma mãe?"'
    },
    text: [
        'A tela muda. O fundo branco que você conhece dá lugar a um painel escuro. Letras brancas. Formatação fria. Clínica.',
        'Como um prontuário. Como uma ficha policial. Como algo que não deveria estar na tela do seu notebook.',
        'No topo, um aviso:',
        '[SYSTEM]"As informações a seguir são reais. A pessoa descrita é real. Sua decisão será real."',
        '[SYSTEM]"Leia com atenção."',
        'Você engole seco.',
        'O dossiê começa a carregar.'
    ],
    choices: [
        { text: 'Ler o dossiê imediatamente', next: 'caso01_dossie' },
        { text: 'Pegar um copo d\'água antes', next: 'caso01_agua' },
        { text: 'Anotar coisas em um caderno (se preparar)', next: 'caso01_caderno', setFlags: { temCaderno: true } }
    ]
});

Story.add('caso01_agua', {
    caseLabel: 'CASO 01 — FURTO EM FARMÁCIA',
    text: [
        'Você levanta. Vai até a cozinha. Abre a torneira.',
        'A água corre. Você fica olhando.',
        'Quanto tempo faz que alguém dependeu de uma decisão sua?',
        'No trabalho, suas decisões afetam planilhas. Relatórios. Prazos.',
        'Agora afetam uma pessoa.',
        'Você enche o copo. Bebe devagar. Volta para o sofá.',
        'O dossiê está esperando.'
    ],
    next: 'caso01_dossie'
});

Story.add('caso01_caderno', {
    caseLabel: 'CASO 01 — FURTO EM FARMÁCIA',
    text: [
        'Você procura um caderno na gaveta. Acha um velho, de espiral, com anotações de uma lista de compras de 2022.',
        'Pega uma caneta.',
        'No topo da primeira página limpa, escreve: "Caso 01"',
        'E fica olhando para o papel em branco.',
        'Você nem sabe o que vai anotar ainda. Mas segurar a caneta te dá uma sensação estranha de responsabilidade.',
        'Como se agora fosse oficial.'
    ],
    setFlags: { temCaderno: true },
    next: 'caso01_dossie'
});

Story.add('caso01_dossie', {
    caseLabel: 'CASO 01 — FURTO EM FARMÁCIA',
    text: [
        '[DOSSIER-HEADER]CASO 01: FURTO EM ESTABELECIMENTO COMERCIAL',
        '[SEPARATOR]═══════════════════════════════════',
        '[DOSSIER]ACUSADA:',
        '[DOSSIER]Nome: Mariana Cristina dos Santos',
        '[DOSSIER]Idade: 34 anos',
        '[DOSSIER]Estado civil: Solteira',
        '[DOSSIER]Filhos: 1 (Pedro, 6 anos)',
        '[DOSSIER]Profissão: Auxiliar de limpeza (desempregada há 8 meses)',
        '[DOSSIER]Renda atual: R$450/mês (bicos e faxinas esporádicas)',
        '[DOSSIER]Antecedentes: Nenhum registro criminal',
        '[SEPARATOR]═══════════════════════════════════',
        'Você lê cada linha.',
        '34 anos. Mãe solo. Desempregada.',
        'Antes de saber o que ela fez, você já está sentindo algo.',
        'Não é pena. Ainda não. É reconhecimento. Você conhece alguém assim. Todo mundo conhece.'
    ],
    choices: [
        { text: 'Continuar lendo os fatos', next: 'caso01_crime' },
        { text: 'Parar e refletir sobre o perfil dela', next: 'caso01_refletir_perfil' }
    ]
});

Story.add('caso01_refletir_perfil', {
    caseLabel: 'CASO 01 — FURTO EM FARMÁCIA',
    text: [
        'Você olha para o perfil.',
        'Auxiliar de limpeza. R$450 por mês. Um filho de 6 anos.',
        'Você pensa no seu salário. No seu apartamento. Na sua geladeira que tem pouca coisa, mas sempre tem algo.',
        'R$450 por mês. Pra duas pessoas.',
        'Você faz a conta mentalmente. R$15 por dia. Pra comer, vestir, pagar luz, água, gás.',
        '[HIGHLIGHT]R$15 por dia.',
        'Seu café da manhã de hoje custou R$12.'
    ],
    next: 'caso01_crime'
});

Story.add('caso01_crime', {
    caseLabel: 'CASO 01 — FURTO EM FARMÁCIA',
    text: [
        '[DOSSIER-HEADER]DESCRIÇÃO DOS FATOS:',
        '[DOSSIER]Na noite de 14 de março, às 21:38, Mariana Cristina dos Santos entrou na Farmácia São Lucas.',
        '[DOSSIER]Ela permaneceu no estabelecimento por aproximadamente 12 minutos.',
        '[DOSSIER]Às 21:50, a câmera de segurança registrou Mariana colocando os seguintes itens dentro da bolsa:',
        '[DOSSIER]- Amoxicilina 500mg (caixa) — R$42,90',
        '[DOSSIER]- Prednisolona 3mg/ml (frasco) — R$38,50',
        '[DOSSIER]- Paracetamol infantil (frasco) — R$18,00',
        '[DOSSIER]- Kit nebulização com soro — R$32,00',
        '[DOSSIER]- Vitamina C infantil (frasco) — R$28,00',
        '[DOSSIER]- Dipirona gotas (frasco) — R$12,50',
        '[DOSSIER]- Soro fisiológico (3 un.) — R$18,00',
        '[DOSSIER]- Termômetro digital — R$24,90',
        '[DOSSIER]- Máscara infantil (pacote) — R$15,20',
        '[HIGHLIGHT]TOTAL: R$230,00',
        '[DOSSIER]Mariana foi abordada pelo segurança na saída da loja.',
        '[SEPARATOR]═══════════════════════════════════',
        'Você olha para a lista.',
        'Não é maquiagem. Não é perfume. Não é eletrônico.',
        '[HIGHLIGHT]São remédios. Para uma criança.'
    ],
    choices: [
        { text: 'Continuar — quero saber mais', next: 'caso01_contexto' },
        { text: 'Já tenho minha opinião formada', next: 'caso01_opiniao_rapida' },
        { text: 'Isso é só um lado da história', next: 'caso01_um_lado' }
    ]
});

Story.add('caso01_opiniao_rapida', {
    caseLabel: 'CASO 01 — FURTO EM FARMÁCIA',
    text: [
        'Talvez.',
        'Mas a história ainda não acabou.',
        '[SYSTEM]O P.A.A.M. aprendeu algo com os juízes anteriores: quem decide rápido demais geralmente se arrepende.',
        'Continue lendo.'
    ],
    next: 'caso01_contexto'
});

Story.add('caso01_um_lado', {
    caseLabel: 'CASO 01 — FURTO EM FARMÁCIA',
    text: [
        'Correto.',
        'Cada caso tem pelo menos dois lados. Às vezes três. Às vezes dez.',
        'O outro lado vem a seguir.'
    ],
    next: 'caso01_contexto'
});

Story.add('caso01_contexto', {
    caseLabel: 'CASO 01 — FURTO EM FARMÁCIA',
    text: [
        '[DOSSIER-HEADER]CONTEXTO:',
        '[DOSSIER]O filho de Mariana, Pedro (6 anos), foi diagnosticado com infecção pulmonar aguda (pneumonia bacteriana) quatro dias antes do furto.',
        '[DOSSIER]Mariana levou Pedro à UPA do bairro. O médico prescreveu os medicamentos listados e recomendou início IMEDIATO do tratamento.',
        '[DOSSIER]Mariana procurou o medicamento pelo SUS. A Unidade Básica de Saúde informou que a Amoxicilina estava em falta há 3 semanas.',
        '[DOSSIER]Mariana procurou 4 farmácias. Nenhuma aceitou fiado.',
        '[DOSSIER]No dia do furto, Pedro estava com febre de 39.8°C há dois dias.',
        '[HIGHLIGHT]Mariana não tinha os R$230.',
        '[SEPARATOR]═══════════════════════════════════',
        '[DOSSIER-HEADER]NOTA MÉDICA:',
        '[DOSSIER]Pedro foi hospitalizado no dia seguinte ao furto com quadro de insuficiência respiratória.',
        '[HIGHLIGHT]O médico declarou que, sem os antibióticos administrados na noite do dia 14, "o desfecho poderia ter sido fatal."',
        '[SEPARATOR]═══════════════════════════════════',
        'Você relê essa última frase.',
        '"O desfecho poderia ter sido fatal."',
        'O menino poderia ter morrido.',
        'A mãe roubou. E salvou a vida do filho.',
        '[HIGHLIGHT]As duas coisas são verdade ao mesmo tempo.'
    ],
    choices: [
        { text: 'Continuar — quero ver o lado da farmácia', next: 'caso01_outro_lado' },
        { text: 'Isso encerra o caso pra mim — ela é inocente', next: 'caso01_inocente_rapido' },
        { text: 'Roubar é errado independente do motivo', next: 'caso01_errado_rapido' },
        { text: 'Sentir o peso da situação em silêncio', next: 'caso01_silencio' }
    ]
});

Story.add('caso01_inocente_rapido', {
    caseLabel: 'CASO 01 — FURTO EM FARMÁCIA',
    text: [
        'Talvez.',
        'Mas você ainda não ouviu o outro lado.',
        '[SYSTEM]Justiça que só ouve um lado não é justiça — é simpatia.',
        'Você precisa ver o quadro completo.'
    ],
    next: 'caso01_outro_lado'
});

Story.add('caso01_errado_rapido', {
    caseLabel: 'CASO 01 — FURTO EM FARMÁCIA',
    text: [
        'Talvez.',
        'Mas uma criança quase morreu.',
        '[SYSTEM]A lei diz uma coisa. A realidade diz outra. Você está aqui justamente porque as duas nem sempre concordam.'
    ],
    next: 'caso01_outro_lado'
});

Story.add('caso01_silencio', {
    caseLabel: 'CASO 01 — FURTO EM FARMÁCIA',
    text: [
        'Você fica olhando para a tela.',
        'Não clica em nada por 30 segundos.',
        'É estranho. É só texto. São só palavras em uma tela.',
        'Mas você está pensando em uma mulher que você nunca viu, segurando uma criança com 39.8° de febre, contando moedas, e decidindo que ia roubar.',
        'Ela deve ter ficado parada na frente da farmácia. Quanto tempo? 5 minutos? 10?',
        'Ela sabia o que estava fazendo. Sabia que era errado. E entrou mesmo assim.',
        'Porque o filho estava queimando de febre e ela não tinha mais ninguém.',
        'Você respira fundo.'
    ],
    next: 'caso01_outro_lado'
});

Story.add('caso01_outro_lado', {
    caseLabel: 'CASO 01 — FURTO EM FARMÁCIA',
    text: [
        '[DOSSIER-HEADER]PARTE INTERESSADA:',
        '[DOSSIER]Nome: Antônio Carlos Ferreira',
        '[DOSSIER]Idade: 61 anos',
        '[DOSSIER]Profissão: Farmacêutico, proprietário da Farmácia São Lucas há 28 anos',
        '[SEPARATOR]═══════════════════════════════════',
        '[DEPOIMENTO]<span class="speaker">ANTÔNIO:</span>"Eu entendo a situação dela. Eu tenho coração. Mas essa farmácia é tudo que eu tenho."',
        '[DEPOIMENTO]"Nos últimos 3 anos, fui assaltado duas vezes. Furtado mais de dez vezes. Perdi R$14.000 em mercadorias no ano passado."',
        '[DEPOIMENTO]"Todo mundo tem uma história triste. Se eu deixar todo mundo levar o que precisa sem pagar, eu fecho as portas em 6 meses."',
        '[DEPOIMENTO]"E se eu fechar, as 4 pessoas que trabalham aqui perdem o emprego."',
        '[DEPOIMENTO]"Ela levou R$230. Parece pouco pra você. Pra mim, é o lucro de uma semana."',
        '[SEPARATOR]═══════════════════════════════════',
        '[DOSSIER-HEADER]INFORMAÇÃO COMPLEMENTAR:',
        '[DOSSIER]- Antônio é viúvo há 5 anos.',
        '[DOSSIER]- Tem uma filha (Laura, 32 anos) com paralisia cerebral que necessita de cuidados especiais.',
        '[DOSSIER]- Custo mensal do tratamento de Laura: R$3.200.',
        '[DOSSIER]- A farmácia é a ÚNICA fonte de renda da família.',
        '[DOSSIER]- Antônio trabalha 14 horas por dia, 6 dias por semana.',
        '[SEPARATOR]═══════════════════════════════════',
        'A situação ficou mais complicada.',
        'Uma mãe que roubou para salvar o filho. Um homem que trabalha 14 horas por dia para cuidar da filha.',
        '[HIGHLIGHT]Os dois estão sofrendo. Os dois estão certos. Os dois estão errados.',
        'E você tem que escolher.'
    ],
    choices: [
        { text: 'Continuar — preciso ver o agravante', next: 'caso01_agravante' },
        { text: 'Já sei o suficiente — quero decidir', next: 'caso01_decisao' },
        { text: 'Isso não é justo — os dois são vítimas', next: 'caso01_injusto' }
    ]
});

Story.add('caso01_injusto', {
    caseLabel: 'CASO 01 — FURTO EM FARMÁCIA',
    text: [
        'Não. Não é.',
        'E essa é a parte que nenhum manual de direito te prepara pra enfrentar.',
        'Em muitos casos, não existe vilão. Só pessoas tentando sobreviver.',
        '[HIGHLIGHT]Mas alguém precisa decidir. Hoje, esse alguém é você.'
    ],
    next: 'caso01_agravante'
});

Story.add('caso01_agravante', {
    caseLabel: 'CASO 01 — FURTO EM FARMÁCIA',
    text: [
        '[DOSSIER-HEADER]AGRAVANTE:',
        '[DOSSIER]A análise das câmeras revelou que Mariana furtou a mesma farmácia em uma ocasião anterior.',
        '[DOSSIER]DATA: 18 de janeiro (2 meses antes)',
        '[DOSSIER]ITENS: Fraldas infantis (R$42), leite em pó infantil (R$38), pomada para assaduras (R$22)',
        '[DOSSIER]TOTAL: R$102,00',
        '[DOSSIER]O furto de janeiro não foi percebido na época. Só foi identificado após revisão das câmeras.',
        '[SEPARATOR]═══════════════════════════════════',
        'Isso muda as coisas. Ou não muda?',
        'A primeira vez foram fraldas e leite. A segunda foram remédios.',
        'Ela não roubou para si mesma. Nenhuma das vezes.',
        'Mas roubou duas vezes. Do mesmo lugar. Do mesmo homem que também está sofrendo.'
    ],
    choices: [
        { text: 'Quero ouvir o que Mariana tem a dizer', next: 'caso01_voz_mariana' },
        { text: 'Isso muda minha visão — ela é reincidente', next: 'caso01_reincidente' },
        { text: 'Não muda nada — fraldas e leite não são luxo', next: 'caso01_nao_muda' },
        { text: 'Ir direto para a decisão', next: 'caso01_decisao' }
    ]
});

Story.add('caso01_reincidente', {
    text: [
        'A reincidência é um fato. Ela furtou. Não foi pega. E furtou de novo.',
        'Do ponto de vista legal, isso agrava a situação.',
        'Do ponto de vista humano... ela não parou de precisar.'
    ],
    next: 'caso01_voz_mariana'
});

Story.add('caso01_nao_muda', {
    text: [
        'Não são. São o mínimo. O básico. O que nenhuma criança deveria ficar sem.',
        'Mas o fato de serem necessidades não muda o fato de que outra pessoa pagou por eles sem saber.',
        'Antônio perdeu R$102 em janeiro e R$230 em março. R$332 no total.',
        'Pra ele, isso importa.'
    ],
    next: 'caso01_voz_mariana'
});

Story.add('caso01_voz_mariana', {
    caseLabel: 'CASO 01 — FURTO EM FARMÁCIA',
    text: [
        '[DOSSIER-HEADER]DEPOIMENTO DA ACUSADA:',
        '[SEPARATOR]═══════════════════════════════════',
        '[DEPOIMENTO]<span class="speaker">MARIANA:</span>"Eu sei que é errado. Eu sei. Não precisa ninguém me dizer."',
        '[DEPOIMENTO]"Eu fui criada pra ser honesta. Minha mãe lavava roupa pros outros e nunca pegou nada que não fosse dela."',
        '[DEPOIMENTO]"Quando eu perdi o emprego, tentei de tudo. Mandei currículo em 47 lugares. Quarenta e sete."',
        '[DEPOIMENTO]"Fiz faxina. Fiz bico. Vendi bolo na rua. Vendi as coisas de casa. O liquidificador. A televisão. O ventilador."',
        '[PAUSA][pausa]',
        '[DEPOIMENTO]"Ficou só o colchão e o fogão."',
        '[DEPOIMENTO]"Quando o Pedro ficou doente... ele não parava de tossir. A noite inteira. Aquele barulho no peito."',
        '[DEPOIMENTO]"Levei na UPA. O médico disse: \'Precisa começar o antibiótico hoje.\' Hoje. Não amanhã. Hoje."',
        '[DEPOIMENTO]"Fui no SUS. Não tinha. Fui na farmácia. R$230."',
        '[DEPOIMENTO]"Eu tinha R$22 na carteira."',
        '[PAUSA][pausa longa]',
        '[DEPOIMENTO]"Eu fiquei parada na frente da farmácia por... eu não sei. Muito tempo."',
        '[DEPOIMENTO]"Eu chorei ali na calçada. As pessoas passavam. Ninguém perguntou nada."',
        '[DEPOIMENTO]"Aí eu entrei. Eu sabia o que ia fazer. Minhas mãos tavam tremendo."',
        '[DEPOIMENTO]"Na saída, o segurança me parou."',
        '[DEPOIMENTO]"Eu não corri. Não menti. Não gritei."',
        '[DEPOIMENTO]"Eu só falei: \'Meu filho tá morrendo. Me leva presa se quiser. Mas deixa os remédios com alguém que possa dar pra ele.\'"',
        '[PAUSA][silêncio prolongado]',
        '[HIGHLIGHT]"Eu sei que foi errado. Eu faria de novo."',
        '[SEPARATOR]═══════════════════════════════════',
        'A última frase fica na tela.',
        '"Eu sei que foi errado. Eu faria de novo."',
        'Você lê de novo. E de novo.'
    ],
    choices: [
        { text: 'Ir para o veredito', next: 'caso01_decisao' },
        { text: 'Lembrar que Antônio também tem uma filha', next: 'caso01_lembrar_antonio' },
        { text: 'Sentir raiva do mundo', next: 'caso01_raiva' }
    ]
});

Story.add('caso01_raiva', {
    text: [
        'Raiva de quê, exatamente?',
        'De um sistema de saúde que falha? De uma economia que descarta pessoas? De uma sociedade que não percebeu uma mãe chorando na calçada?',
        'A raiva é justa. Mas não resolve o caso.',
        'Mariana ainda está esperando.'
    ],
    next: 'caso01_decisao'
});

Story.add('caso01_lembrar_antonio', {
    text: [
        'Antônio. 61 anos. Viúvo. Trabalha 14 horas por dia. Filha com paralisia cerebral.',
        'Ele também está fazendo o impossível para manter alguém vivo. Ele também está sozinho.',
        'A diferença é que ninguém roubou de Mariana. Mas alguém roubou dele.',
        'As duas dores são reais.'
    ],
    next: 'caso01_decisao'
});

Story.add('caso01_decisao', {
    caseLabel: 'CASO 01 — VEREDITO',
    text: [
        '[SEPARATOR]═══════════════════════════════════',
        '[DOSSIER-HEADER]JUIZ #4891 — VEREDITO DO CASO 01',
        'Você analisou os fatos. Ouviu os dois lados. Sentiu o peso.',
        '[HIGHLIGHT]Agora precisa decidir.',
        '[SEPARATOR]═══════════════════════════════════'
    ],
    choices: [
        {
            text: 'Absolver Mariana — ela agiu em estado de necessidade',
            next: 'caso01_absolver',
            points: { compaixao: 2 },
            decision: 'Caso 01: Absolveu Mariana'
        },
        {
            text: 'Condenar Mariana — furto é crime, independente do motivo',
            next: 'caso01_condenar',
            points: { punicao: 2 },
            decision: 'Caso 01: Condenou Mariana'
        },
        {
            text: 'Absolver, mas determinar ressarcimento parcelado a Antônio',
            next: 'caso01_ressarcimento',
            points: { justica: 2 },
            decision: 'Caso 01: Absolveu com ressarcimento'
        },
        {
            text: 'Condenar o sistema público, isentar Mariana',
            next: 'caso01_sistema',
            points: { pragmatismo: 2 },
            decision: 'Caso 01: Condenou o sistema'
        },
        {
            text: 'Pedir mais informações antes de decidir',
            next: 'caso01_mais_info',
            points: { justica: 1 }
        }
    ]
});

// Ramos de decisão do Caso 01
Story.add('caso01_absolver', {
    text: [
        'Você escolheu absolver Mariana.',
        '[SYSTEM]"Absolvição total. Mariana será liberada sem restrições."',
        '[SYSTEM]"Nota: Antônio não será ressarcido. O prejuízo de R$332 permanece com ele."',
        'Sua decisão foi registrada.'
    ],
    next: 'caso01_consequencia'
});

Story.add('caso01_condenar', {
    text: [
        'Você escolheu condenar Mariana.',
        '[SYSTEM]"Condenação registrada. Mariana será processada criminalmente."',
        '[SYSTEM]"Nota: Pedro (6 anos) será encaminhado ao Conselho Tutelar, pois Mariana não tem outros familiares cadastrados."',
        '[HIGHLIGHT]Existe a possibilidade de Pedro ser enviado a um abrigo.',
        'Sua decisão foi registrada.'
    ],
    next: 'caso01_consequencia'
});

Story.add('caso01_ressarcimento', {
    text: [
        'Você escolheu absolver com ressarcimento.',
        '[SYSTEM]"Absolvição com ressarcimento parcelado registrada."',
        '[SYSTEM]"Mariana pagará R$30/mês até quitar R$332. Levará aproximadamente 11 meses."',
        '[SYSTEM]"Nota: Com renda de R$450/mês, R$30 representa quase 7% do que ela ganha. Para alimentar dois."',
        'Sua decisão foi registrada.'
    ],
    next: 'caso01_consequencia'
});

Story.add('caso01_sistema', {
    text: [
        'Você escolheu responsabilizar o sistema.',
        '[SYSTEM]"Decisão registrada. Mariana será absolvida com protesto formal ao sistema público de saúde."',
        '[SYSTEM]"Nota honesta: protestos formais de juízes anônimos têm impacto próximo de zero no funcionamento do Estado."',
        '[SYSTEM]"Mas pelo menos está registrado. Talvez isso importe um dia. Talvez não."',
        'Sua decisão foi registrada.'
    ],
    next: 'caso01_consequencia'
});

Story.add('caso01_mais_info', {
    caseLabel: 'CASO 01 — INFO ADICIONAL',
    text: [
        '[SYSTEM]"Informações adicionais disponíveis."',
        '[DOSSIER-HEADER]SOBRE MARIANA:',
        '[DOSSIER]- Perdeu os pais aos 19 anos (acidente de carro). Não tem irmãos.',
        '[DOSSIER]- Foi funcionária exemplar na empresa de limpeza onde trabalhou por 5 anos. Demitida por corte de custos.',
        '[DOSSIER]- Vizinhos descrevem Mariana como "a mulher mais orgulhosa do prédio" — nunca pediu ajuda a ninguém.',
        '[DOSSIER-HEADER]SOBRE ANTÔNIO:',
        '[DOSSIER]- A esposa morreu de câncer. Ele vendeu o carro para pagar o tratamento.',
        '[DOSSIER]- Já doou mais de R$8.000 em medicamentos ao longo de 28 anos.',
        '[DOSSIER]- Na delegacia, disse: "Eu queria ajudar ela. Mas eu não posso mais ajudar ninguém. Eu mal consigo me ajudar."',
        '[DOSSIER-HEADER]SOBRE PEDRO:',
        '[DOSSIER]- Está no 1° ano do fundamental. Professora: "extremamente inteligente, mas tímido."',
        '[DOSSIER]- Pedro não sabe que a mãe foi presa.',
        '[SEPARATOR]═══════════════════════════════════',
        '[HIGHLIGHT]Agora você sabe mais. Antônio não é um empresário ganancioso. Mariana não é uma criminosa habitual.',
        'Você desejou não ter pedido mais informações.'
    ],
    choices: [
        {
            text: 'Absolver Mariana',
            next: 'caso01_absolver',
            points: { compaixao: 2 },
            decision: 'Caso 01: Absolveu Mariana (com info extra)'
        },
        {
            text: 'Condenar Mariana',
            next: 'caso01_condenar',
            points: { punicao: 2 },
            decision: 'Caso 01: Condenou Mariana (com info extra)'
        },
        {
            text: 'Criar acordo: Mariana trabalha na farmácia para pagar a dívida',
            next: 'caso01_acordo',
            points: { justica: 3 },
            decision: 'Caso 01: Acordo de trabalho na farmácia'
        },
        {
            text: 'Absolver + criar fundo de apoio para Antônio',
            next: 'caso01_fundo',
            points: { compaixao: 3 },
            decision: 'Caso 01: Absolveu + fundo para Antônio'
        }
    ]
});

Story.add('caso01_acordo', {
    text: [
        '[SYSTEM]"Solução interessante."',
        '[SYSTEM]"Mariana pagaria a dívida com trabalho. Antônio ganharia uma funcionária. Pedro teria uma mãe empregada."',
        '[SYSTEM]"Nota: Isso depende de Antônio aceitar. Um homem que foi roubado duas vezes aceitaria a ladra como funcionária?"',
        '[SYSTEM]"Talvez sim. Talvez não."',
        'Sua decisão foi registrada.'
    ],
    next: 'caso01_consequencia'
});

Story.add('caso01_fundo', {
    text: [
        '[SYSTEM]"Decisão registrada. Mariana absolvida. Fundo de apoio criado para Antônio."',
        '[SYSTEM]"Origem do fundo: a ser determinada. O P.A.A.M. não tem orçamento para fundos de apoio."',
        '[SYSTEM]"Mas a intenção está registrada."',
        'Sua decisão foi registrada.'
    ],
    next: 'caso01_consequencia'
});

Story.add('caso01_consequencia', {
    caseLabel: 'CASO 01 — ENCERRADO',
    text: [
        'Sua decisão foi registrada.',
        'A tela fica escura por um momento.',
        '[SYSTEM]"Obrigado, Juiz #4891. Sua decisão será implementada."',
        '[SYSTEM]"Você não saberá o resultado até o final do programa."',
        '[SEPARATOR]═══════════════════════════════════',
        '[HIGHLIGHT]"Como você se sente?"'
    ],
    choices: [
        {
            text: 'Aliviado — fiz o que achava certo',
            next: 'caso01_sentimento_alivio'
        },
        {
            text: 'Inseguro — e se eu estiver errado?',
            next: 'caso01_sentimento_inseguro'
        },
        {
            text: 'Vazio — nenhuma decisão parecia boa',
            next: 'caso01_sentimento_vazio'
        },
        {
            text: 'Com raiva — ninguém deveria ter esse poder',
            next: 'caso01_sentimento_raiva'
        }
    ]
});

Story.add('caso01_sentimento_alivio', {
    text: [
        '[SYSTEM]"Alívio. Curioso. A maioria dos juízes sente alívio no primeiro caso."',
        '[SYSTEM]"Diminui com o tempo."',
        '[SYSTEM]"Caso 02 disponível em breve."'
    ],
    next: 'entre_cena_01'
});

Story.add('caso01_sentimento_inseguro', {
    text: [
        '[SYSTEM]"Insegurança. Bom."',
        '[SYSTEM]"Juízes confiantes demais são perigosos. A dúvida é o que separa o julgamento da arrogância."',
        '[SYSTEM]"Caso 02 disponível em breve."'
    ],
    next: 'entre_cena_01'
});

Story.add('caso01_sentimento_vazio', {
    text: [
        '[SYSTEM]"Vazio. Quando nenhuma opção parece boa, o vazio é a resposta mais honesta."',
        '[SYSTEM]"Acostume-se. Os próximos casos não serão mais fáceis."',
        '[SYSTEM]"Caso 02 disponível em breve."'
    ],
    next: 'entre_cena_01'
});

Story.add('caso01_sentimento_raiva', {
    text: [
        '[SYSTEM]"Raiva. Direcionada a quem? A nós, por colocar você aqui? Ao mundo, por criar essa situação? A si mesmo, por ter aceitado?"',
        '[SYSTEM]"Guarde essa raiva. Vai precisar dela."',
        '[SYSTEM]"Caso 02 disponível em breve."'
    ],
    next: 'entre_cena_01'
});

// ═══════════════════════════════════════════
// ENTRE-CENA 01 — A MANHÃ SEGUINTE
// ═══════════════════════════════════════════

Story.add('entre_cena_01', {
    caseLabel: 'A MANHÃ SEGUINTE',
    text: [
        'Terça-feira. 6:47.',
        'O alarme toca.',
        'Você não precisava dele. Estava acordado desde as 5:12.',
        'O teto do quarto é o mesmo de sempre. Mas parece diferente.',
        'Tudo parece diferente quando você sabe que decidiu o destino de alguém às 2 da manhã.',
        'Mariana dos Santos. 34 anos. Pedro. 6 anos. Antônio. 61 anos.',
        'Nomes que você não conhecia ontem. Nomes que agora moram na sua cabeça.'
    ],
    choices: [
        { text: 'Levantar e seguir a rotina', next: 'ec01_rotina' },
        { text: 'Ficar na cama mais um pouco', next: 'ec01_cama' },
        { text: 'Verificar o notebook — alguma atualização?', next: 'ec01_notebook' }
    ]
});

Story.add('ec01_cama', {
    caseLabel: 'A MANHÃ SEGUINTE',
    text: [
        'Você fica. Olha para o teto. Tenta não pensar.',
        'Não funciona.',
        'Você pensa em Mariana na delegacia. Em Pedro com a vizinha de 72 anos. Em Antônio fechando a farmácia.',
        'Três pessoas acordando agora. Nenhuma sabe que você existe.',
        'Mas a vida delas mudou por sua causa.',
        'O alarme toca de novo. Snooze.'
    ],
    next: 'ec01_rotina'
});

Story.add('ec01_notebook', {
    caseLabel: 'A MANHÃ SEGUINTE',
    text: [
        'Você vai até a sala. O notebook está onde você deixou. Fechado. Inofensivo.',
        'Você abre.',
        'Nenhuma notificação do P.A.A.M. Nenhum e-mail novo.',
        'Mas no canto inferior da tela, quase invisível:',
        '[SYSTEM]"Caso 02 disponível às 22:00."',
        '22:00. Hoje à noite.',
        'Você tem um dia inteiro para fingir que é uma pessoa normal.'
    ],
    next: 'ec01_rotina'
});

Story.add('ec01_rotina', {
    caseLabel: 'A MANHÃ SEGUINTE',
    text: [
        'Ônibus. 7:38. Lotado como sempre.',
        'Você está espremido entre um homem de terno que fala alto no celular e uma mulher com duas sacolas de feira.',
        'Antes, isso era só o ônibus. Barulho. Trânsito. Rotina.',
        'Hoje você olha diferente.',
        'A mulher com as sacolas. Quantos anos ela tem? 50? 55? As mãos estão cansadas. As sacolas são pesadas.',
        'Ela te lembra alguém.'
    ],
    choices: [
        { text: 'Oferecer ajuda com as sacolas', next: 'ec01_ajuda' },
        { text: 'Colocar fone de ouvido e se isolar', next: 'ec01_fone' },
        { text: 'Olhar pela janela e tentar não pensar', next: 'ec01_janela' }
    ]
});

Story.add('ec01_ajuda', {
    text: [
        '"Quer ajuda com as sacolas?"',
        'A mulher olha pra você surpresa.',
        '"Ah, obrigada, querido. Mas tô quase descendo."',
        'Ela sorri. Dentes faltando. Mas um sorriso de verdade.',
        '"Ninguém oferece mais, sabia?"',
        'Ela desce no ponto seguinte. Carregando as sacolas sozinha.',
        'Você fica pensando se Mariana também andava de ônibus com o Pedro. Se alguém já ofereceu ajuda pra ela.',
        'Provavelmente não.'
    ],
    next: 'ec01_trabalho'
});

Story.add('ec01_fone', {
    text: [
        'Você coloca o fone. Playlist aleatória. Uma música toca. Você não ouve.',
        'Está olhando para as pessoas no ônibus.',
        'O senhor de pé — segurando na barra, mão tremendo. Ninguém oferece lugar.',
        'Todo mundo julgando. Todo mundo sendo julgado. O tempo inteiro.',
        'A diferença é que o seu julgamento tem consequências documentadas.'
    ],
    next: 'ec01_trabalho'
});

Story.add('ec01_janela', {
    text: [
        'A cidade passa. Padaria. Lotérica. Escola. Farmácia.',
        'Farmácia.',
        'Você olha. "Farmácia São Judas." Não é a mesma. Mas poderia ser.',
        'Alguém está no balcão. Um homem mais velho. Atendendo uma mulher com uma criança.',
        'Você se pergunta se essa mulher pode pagar os remédios.',
        'Antes, você não pensaria nisso. Agora não consegue parar.'
    ],
    next: 'ec01_trabalho'
});

Story.add('ec01_trabalho', {
    caseLabel: 'A MANHÃ SEGUINTE',
    text: [
        'Escritório. 8:15.',
        'Mesa. Computador. Cadeira giratória. Post-its amarelos. Caneca de café.',
        'Tudo igual. Absurdamente igual.',
        'Carla, sua colega da mesa ao lado, chega com dois cafés.',
        '"Bom dia! Trouxe café pra você. Cara, você tá com uma cara horrível. Dormiu mal?"'
    ],
    choices: [
        { text: '"É, noite ruim. Obrigado pelo café."', next: 'ec01_cafe_normal' },
        { text: '"Carla, posso te fazer uma pergunta estranha?"', next: 'ec01_pergunta_estranha' },
        { text: 'Pegar o café em silêncio e ligar o computador', next: 'ec01_silencio_trabalho' }
    ]
});

Story.add('ec01_cafe_normal', {
    text: [
        '"Noite ruim, hein? Acontece."',
        'Ela sorri e volta pra mesa.',
        'Você bebe o café. Está bom. Carla sempre acerta o ponto.',
        'O computador liga. A planilha está esperando. Os números não fazem sentido. Nada faz sentido.',
        'Mas você trabalha mesmo assim. Porque é o que pessoas normais fazem.'
    ],
    next: 'ec01_almoco'
});

Story.add('ec01_pergunta_estranha', {
    caseLabel: 'A MANHÃ SEGUINTE',
    text: [
        'Carla ergue a sobrancelha.',
        '"Estranha como? Estranha tipo \'você acredita em aliens\' ou estranha tipo \'preciso de um advogado\'?"'
    ],
    choices: [
        {
            text: '"Você acha que uma pessoa boa pode fazer uma coisa errada?"',
            next: 'ec01_pessoa_boa'
        },
        {
            text: '"Deixa pra lá, esquece."',
            next: 'ec01_cafe_normal'
        }
    ]
});

Story.add('ec01_pessoa_boa', {
    text: [
        'Carla para de rir.',
        '"Hm. Isso é pesado pra uma terça de manhã."',
        'Ela gira na cadeira.',
        '"Acho que sim. Acho que todo mundo já fez algo errado achando que era a coisa certa."',
        '"Tipo... minha mãe mentiu no currículo pra conseguir emprego quando eu era criança. Era errado? Era. Mas a gente comeu naquela semana."',
        '"Por quê? Aconteceu alguma coisa?"',
        '"Não, só um pensamento aleatório."',
        'Ela volta pra tela. Mas te olha de um jeito diferente pelo resto da manhã.'
    ],
    next: 'ec01_almoco'
});

Story.add('ec01_silencio_trabalho', {
    text: [
        'Você pega o café. "Obrigado."',
        'Carla te olha por um segundo. "Tá tudo bem?"',
        '"Tá."',
        'Não tá.',
        'Mas como explicar? "Eu participei de um tribunal secreto ontem à noite e decidi o destino de uma mãe solteira"?',
        'Não dá.',
        'Você liga o computador. Abre a planilha. Trabalha. Porque é o que pessoas normais fazem.'
    ],
    next: 'ec01_almoco'
});

Story.add('ec01_almoco', {
    caseLabel: 'A MANHÃ SEGUINTE',
    text: [
        '12:30. Restaurante por quilo. Mesa do canto.',
        'Arroz, feijão, frango, salada.',
        '[HIGHLIGHT]R$22.',
        'Você olha pro prato.',
        'R$22.',
        'Mariana tinha R$22 na carteira no dia que roubou a farmácia.',
        'Isso é um almoço pra você. Pra ela, era tudo.',
        'A comida não desce tão fácil.'
    ],
    choices: [
        { text: 'Comer e tentar não pensar', next: 'ec01_fim_dia' },
        { text: 'Observar as pessoas no restaurante', next: 'ec01_observar' }
    ]
});

Story.add('ec01_observar', {
    text: [
        'O restaurante está cheio.',
        'Mesa 1: Dois executivos rindo. Pratos cheios. Cerveja.',
        'Mesa 3: Uma mulher sozinha, comendo rápido. Uniforme de limpeza.',
        'Mesa 5: Um pai com uma criança. "Come, filho. Não pode desperdiçar."',
        'Cada pessoa aqui tem uma história. Cada uma poderia ser um caso.',
        'Antes do P.A.A.M., essas pessoas eram cenário.',
        'Agora são casos em potencial.',
        'Você não sabe se isso é empatia ou paranoia.'
    ],
    next: 'ec01_fim_dia'
});

Story.add('ec01_fim_dia', {
    caseLabel: 'A MANHÃ SEGUINTE',
    text: [
        '21:15. Você está em casa.',
        'Jantou. Ou tentou. Fez um miojo. Comeu metade.',
        'O notebook está na mesa. Esperando.',
        '[SYSTEM]"Caso 02 disponível às 22:00."',
        'Faltam 45 minutos. Você tem 45 minutos para ser uma pessoa normal.'
    ],
    choices: [
        { text: 'Assistir algo na TV pra distrair', next: 'ec01_tv' },
        { text: 'Sentar e esperar em silêncio', next: 'ec01_esperar' },
        { text: 'Abrir uma cerveja', next: 'ec01_cerveja' }
    ]
});

Story.add('ec01_tv', {
    text: [
        'Netflix. Scroll infinito.',
        'Comédia? Não tá com humor. Ação? Não consegue focar.',
        '"Making a Murderer." "The Innocence Files." "Tribunal da Internet."',
        'Tudo sobre julgamento. O algoritmo tá zoando com você.',
        'Você desliga a TV.'
    ],
    next: 'ec01_caso02_chega'
});

Story.add('ec01_esperar', {
    text: [
        'Você senta no sofá. Silêncio.',
        'O relógio da cozinha faz aquele barulho. Tic. Tac. Tic. Tac.',
        'Você nunca tinha percebido como ele é alto.',
        'Você pensa. Não em Mariana. Não em Antônio. Em você.',
        '"Quem é você pra julgar alguém?"',
        'Você paga as contas em dia. Não tem ficha criminal. Nunca roubou nada.',
        'Mas nunca foi testado de verdade. Nunca ficou sem R$22.',
        'Você está julgando pessoas que vivem em um mundo que você não conhece.',
        'Isso te assusta.'
    ],
    next: 'ec01_caso02_chega'
});

Story.add('ec01_cerveja', {
    text: [
        'Geladeira. Última cerveja.',
        'O primeiro gole é bom. Frio. Amargo. Normal.',
        'O segundo gole vem com um pensamento: "Será que eu deveria tomar decisões sobre a vida das pessoas sóbrio?"',
        'O terceiro gole: "Será que os juízes de verdade bebem?"',
        'Provavelmente.',
        'Você termina a cerveja. Não pega outra. Uma é companhia. Duas é fuga.'
    ],
    next: 'ec01_caso02_chega'
});

Story.add('ec01_caso02_chega', {
    caseLabel: 'A MANHÃ SEGUINTE',
    text: [
        '21:58. Você abre o notebook.',
        'O painel do P.A.A.M. está lá. O contador está rodando.',
        'Uma mensagem aparece antes do caso:',
        '[SYSTEM]"Juiz #4891. Antes do Caso 02, uma informação:"',
        '[HIGHLIGHT]"93% dos juízes do P.A.A.M. disseram que o Caso 01 foi o mais fácil."',
        '[SYSTEM]"Prepare-se."',
        'Você engole seco.',
        'Se aquele foi o mais fácil...'
    ],
    choices: [
        { text: 'Continuar para o Caso 02', next: 'caso02_inicio' }
    ]
});

// ═══════════════════════════════════════════
// CASO 02 — O PROFESSOR E A ALUNA (INÍCIO)
// ═══════════════════════════════════════════

Story.add('caso02_inicio', {
    caseLabel: 'CASO 02 — ACUSAÇÃO DE ASSÉDIO',
    showTransition: {
        title: 'C A S O  0 2',
        subtitle: '"A palavra de quem pesa mais?"'
    },
    text: [
        'Uma nota aparece antes do dossiê:',
        '[SYSTEM]"Juiz #4891, este caso é diferente do anterior."',
        '[SYSTEM]"No Caso 01, havia câmeras. Notas fiscais. Evidências físicas."',
        '[SYSTEM]"No Caso 02, há palavras contra palavras. Memórias contra memórias. Versões contra versões."',
        '[HIGHLIGHT]"Não existe câmera dentro de uma sala fechada."',
        '[SYSTEM]"Prepare-se para a incerteza."',
        '[SEPARATOR]═══════════════════════════════════',
        '[SYSTEM]Este caso continua em desenvolvimento...',
        '[SYSTEM]Obrigado por jogar O Juiz Anônimo.',
        '[SEPARATOR]═══════════════════════════════════',
        'O Caso 02 e os demais capítulos serão adicionados em futuras atualizações.',
        'Seu progresso foi salvo.',
    ],
    choices: [
        { text: 'Voltar à tela inicial', next: 'fim_demo' }
    ]
});

Story.add('fim_demo', {
    text: [
        '[SEPARATOR]═══════════════════════════════════',
        '[HIGHLIGHT]OBRIGADO POR JOGAR',
        '[SYSTEM]O Juiz Anônimo — Versão Demo',
        '[SYSTEM]Prólogo + Caso 01 + Entre-Cena 01',
        '[SEPARATOR]═══════════════════════════════════',
        'Seu perfil moral até agora:',
        'Suas decisões foram registradas e salvas.',
        '[SYSTEM]Casos 02 a 07 em breve.',
    ],
    choices: [
        { text: 'Voltar à tela inicial', next: '_title' }
    ]
});
