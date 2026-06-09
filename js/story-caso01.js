// ═══════════════════════════════════════
// CASO 01 — A MÃE QUE ROUBOU
// ═══════════════════════════════════════

Story.add('c01_inicio', {
    caseLabel:'CASO 01 — FURTO EM FARMÁCIA',
    showTransition:{title:'C A S O  0 1', subtitle:'"Até onde vai o desespero de uma mãe?"'},
    text:[
        'Painel escuro. Letras brancas. Formatação fria.',
        '[SYSTEM]"As informações a seguir são reais. A pessoa descrita é real. Sua decisão será real. Leia com atenção."'
    ],
    choices:[
        {text:'Ler o dossiê', next:'c01_dossie'},
        {text:'Pegar um copo d\'água antes', next:'c01_agua'},
        {text:'Pegar um caderno para anotar', next:'c01_caderno', setFlags:{temCaderno:true}}
    ]
});

Story.add('c01_agua', { text:['Você bebe devagar. Volta para o sofá. O dossiê está esperando.'], next:'c01_dossie'});
Story.add('c01_caderno', { text:['No topo da página: "Caso 01". Segurar a caneta te dá uma sensação estranha de responsabilidade.'], setFlags:{temCaderno:true}, next:'c01_dossie'});

Story.add('c01_dossie', { text:[
    '[DOSSIER-HEADER]ACUSADA: Mariana Cristina dos Santos, 34 anos',
    '[DOSSIER]Solteira. 1 filho (Pedro, 6). Auxiliar de limpeza, desempregada há 8 meses. Renda: R$450/mês. Sem antecedentes.',
    '[SEPARATOR]═══════════════════════════════════',
    '[DOSSIER-HEADER]FATOS:',
    '[DOSSIER]Na noite de 14 de março, Mariana furtou R$230 em remédios infantis da Farmácia São Lucas: antibióticos, antitérmicos, nebulização, termômetro.',
    '[HIGHLIGHT]São remédios. Para uma criança.',
    '[DOSSIER-HEADER]CONTEXTO:',
    '[DOSSIER]Pedro foi diagnosticado com pneumonia bacteriana. Febre de 39.8°C há 2 dias. SUS sem medicamento há 3 semanas. 4 farmácias, nenhuma aceitou fiado. Mariana tinha R$22.',
    '[HIGHLIGHT]O médico declarou que sem os antibióticos, "o desfecho poderia ter sido fatal."',
    'A mãe roubou. E salvou a vida do filho. As duas coisas são verdade ao mesmo tempo.'
], choices:[
    {text:'Ver o lado da farmácia', next:'c01_antonio'},
    {text:'Sentir o peso em silêncio', next:'c01_silencio'}
]});

Story.add('c01_silencio', { text:[
    'Você está pensando em uma mulher segurando uma criança com 39.8° de febre, contando moedas, decidindo que ia roubar.',
    'Ela sabia que era errado. E entrou mesmo assim. Porque o filho estava queimando de febre.'
], next:'c01_antonio'});

Story.add('c01_antonio', { text:[
    '[DOSSIER-HEADER]PARTE INTERESSADA: Antônio Carlos Ferreira, 61 anos. Farmacêutico, dono há 28 anos.',
    '[DEPOIMENTO]<span class="speaker">ANTÔNIO:</span>"Essa farmácia é tudo que eu tenho. Fui assaltado 2 vezes, furtado mais de 10. Todo mundo tem história triste. Se eu deixar, fecho em 6 meses."',
    '[DOSSIER]Viúvo. Filha (Laura, 32) com paralisia cerebral. Tratamento: R$3.200/mês. Trabalha 14h/dia.',
    '[HIGHLIGHT]Os dois estão sofrendo. Os dois estão certos. E você tem que escolher.',
    '[DOSSIER-HEADER]AGRAVANTE:',
    '[DOSSIER]Câmeras revelaram furto anterior: janeiro, R$102 em fraldas e leite. Mariana é reincidente.'
], choices:[
    {text:'Ouvir Mariana', next:'c01_mariana'},
    {text:'Ir direto para a decisão', next:'c01_decisao'}
]});

Story.add('c01_mariana', { text:[
    '[DOSSIER-HEADER]DEPOIMENTO DE MARIANA:',
    '[DEPOIMENTO]<span class="speaker">MARIANA:</span>"Eu sei que é errado. Minha mãe me ensinou a ser honesta."',
    '[DEPOIMENTO]"Mandei currículo em 47 lugares. Vendi o liquidificador. A televisão. Ficou só o colchão e o fogão."',
    '[DEPOIMENTO]"O médico disse: precisa começar hoje. Eu tinha R$22. Fiquei parada na frente da farmácia. Chorei na calçada. Ninguém perguntou nada."',
    '[DEPOIMENTO]"Na saída, o segurança me parou. Eu disse: meu filho tá morrendo. Me leva presa. Mas deixa os remédios."',
    '[HIGHLIGHT]"Eu sei que foi errado. Eu faria de novo."'
], next:'c01_decisao'});

Story.add('c01_decisao', { caseLabel:'CASO 01 — VEREDITO', text:[
    '[SEPARATOR]═══════════════════════════════════',
    '[DOSSIER-HEADER]JUIZ #4891 — VEREDITO DO CASO 01',
    '[HIGHLIGHT]Agora precisa decidir.',
    '[SEPARATOR]═══════════════════════════════════'
], choices:[
    {text:'Absolver Mariana — estado de necessidade', next:'c01_pos', points:{compaixao:2}, decision:'Caso 01: Absolveu Mariana'},
    {text:'Condenar — furto é crime, independente do motivo', next:'c01_pos', points:{punicao:2}, decision:'Caso 01: Condenou Mariana'},
    {text:'Absolver com ressarcimento parcelado', next:'c01_pos', points:{justica:2}, decision:'Caso 01: Absolveu com ressarcimento'},
    {text:'Condenar o sistema, isentar Mariana', next:'c01_pos', points:{pragmatismo:2}, decision:'Caso 01: Condenou o sistema'},
    {text:'Pedir mais informações', next:'c01_maisinfo', points:{justica:1}}
]});

Story.add('c01_maisinfo', { text:[
    '[DOSSIER]Mariana perdeu os pais aos 19. Vizinhos: "a mais orgulhosa do prédio, nunca pediu ajuda."',
    '[DOSSIER]Antônio já doou R$8.000 em medicamentos. Parou porque não conseguia mais.',
    '[DOSSIER]Pedro — professora: "extremamente inteligente, mas tímido." Não sabe que a mãe foi presa.',
    '[HIGHLIGHT]Você desejou não ter pedido mais informações.'
], choices:[
    {text:'Absolver Mariana', next:'c01_pos', points:{compaixao:2}, decision:'Caso 01: Absolveu (info extra)'},
    {text:'Condenar Mariana', next:'c01_pos', points:{punicao:2}, decision:'Caso 01: Condenou (info extra)'},
    {text:'Acordo: Mariana trabalha na farmácia', next:'c01_pos', points:{justica:3}, decision:'Caso 01: Acordo de trabalho'},
    {text:'Absolver + fundo de apoio para Antônio', next:'c01_pos', points:{compaixao:3}, decision:'Caso 01: Absolveu + fundo'}
]});

Story.add('c01_pos', { caseLabel:'CASO 01 — ENCERRADO', text:[
    '[SYSTEM]"Decisão registrada. Você não saberá o resultado até o final."',
    '[HIGHLIGHT]"Como você se sente?"'
], choices:[
    {text:'Aliviado', next:'c01_fim_a'},
    {text:'Inseguro', next:'c01_fim_i'},
    {text:'Vazio', next:'c01_fim_v'},
    {text:'Com raiva', next:'c01_fim_r'}
]});

Story.add('c01_fim_a', { text:['[SYSTEM]"Alívio. A maioria sente alívio no primeiro caso. Diminui com o tempo."'], next:'ec01_inicio'});
Story.add('c01_fim_i', { text:['[SYSTEM]"Insegurança. Bom. Juízes confiantes demais são perigosos."'], next:'ec01_inicio'});
Story.add('c01_fim_v', { text:['[SYSTEM]"Vazio. Quando nenhuma opção parece boa, o vazio é a resposta mais honesta."'], next:'ec01_inicio'});
Story.add('c01_fim_r', { text:['[SYSTEM]"Raiva. Guarde. Vai precisar dela."'], next:'ec01_inicio'});
