// ═══════════════════════════════════════
// CASO 02 — O PROFESSOR E A ALUNA
// ═══════════════════════════════════════

Story.add('c02_inicio', {
    caseLabel:'CASO 02 — ACUSAÇÃO DE ASSÉDIO',
    showTransition:{title:'C A S O  0 2', subtitle:'"A palavra de quem pesa mais?"'},
    text:[
        '[SYSTEM]"No Caso 01, havia câmeras. No Caso 02, há palavras contra palavras."',
        '[HIGHLIGHT]"Não existe câmera dentro de uma sala fechada."',
        '[DOSSIER-HEADER]ACUSADO: Ricardo de Almeida Lemos, 52 anos',
        '[DOSSIER]Divorciado. Professor titular de Direito Penal. 24 anos de carreira. 47 artigos, 3 livros. Nenhum registro de queixas.',
        '[DOSSIER-HEADER]ACUSADORA: Camila Rodrigues Ferreira, 22 anos',
        '[DOSSIER]Estudante de Direito, 4º período. Bolsista integral. Primeira da família na faculdade.'
    ],
    choices:[
        {text:'Ver a cronologia dos fatos', next:'c02_crono'},
        {text:'Pensar no que está em jogo para os dois', next:'c02_jogo'}
    ]
});

Story.add('c02_jogo', { text:[
    'Para Camila: se verdade e ninguém acreditar, o sistema falhou. Para Ricardo: se inocente e condenado, 24 anos viram cinzas.',
    'O que está em jogo é tudo. Para os dois. E você está no meio.'
], next:'c02_crono'});

Story.add('c02_crono', { text:[
    '[DOSSIER-HEADER]CRONOLOGIA:',
    '[DOSSIER]Mar-Abr: Elogio público, convite para monitoria. Mai-Jun: Reuniões individuais no gabinete. Jul: Camila relata mudança — comentários sobre aparência, porta trancada. Ago: Camila para de ir. Ricardo insiste por e-mail. Set: Reprovação. Out: Denúncia.',
    '[DOSSIER-HEADER]E-MAILS DE RICARDO:',
    '[DOSSIER]"Você é especial, Camila. Diferente das outras."',
    '[DOSSIER]"Podemos conversar em particular? Sem formalidades."',
    '[DOSSIER]"Se você não comparecer, não posso garantir sua nota."',
    'Isoladamente, cada e-mail é ambíguo. Juntos, na sequência...'
], choices:[
    {text:'Ouvir a defesa de Ricardo', next:'c02_defesa'},
    {text:'Ouvir Camila', next:'c02_camila'}
]});

Story.add('c02_defesa', { text:[
    '[DEPOIMENTO]<span class="speaker">RICARDO:</span>"Essa acusação é absurda. 24 anos, nenhuma queixa. \'Especial\' era academicamente. \'Sem formalidades\' era \'me chame pelo nome\'. \'Algo pessoal\' era um estágio surpresa. Ela reprovou e está ressentida."',
    'Uma defesa perfeita. Talvez perfeita demais? Um professor de Direito Penal sabe se defender.'
], choices:[
    {text:'Ouvir Camila', next:'c02_camila'},
    {text:'Ir para a decisão', next:'c02_decisao'}
]});

Story.add('c02_camila', { text:[
    '[DEPOIMENTO]<span class="speaker">CAMILA:</span>"Eu não queria tá aqui. Eu queria terminar minha faculdade."',
    '[DEPOIMENTO]"Quando ele elogiou meu trabalho, foi o melhor dia da minha vida. Liguei pra minha mãe. Ela chorou."',
    '[DEPOIMENTO]"Mas aos poucos... um elogio muda de tom. Uma porta aberta vira trancada. Um dia, ele colocou a mão no meu joelho. Eu congelei."',
    '[DEPOIMENTO]"Eu escolhi reprovar. Denunciei pela próxima. Pela próxima menina da periferia que vai receber um elogio e achar que é verdade."',
    '[HIGHLIGHT]"Ele tem 24 anos de carreira. Eu tenho 22 anos de vida. Ele tem 3 livros. Eu tenho esse depoimento. É tudo que eu tenho."',
    '[DOSSIER-HEADER]COMPLICAÇÃO:',
    '[DOSSIER]Outra ex-aluna (Fernanda, 2019) quase denunciou. "Não vou dar detalhes. Mas aconteceu comigo também."',
    '[DOSSIER]14 orientandas mulheres em 10 anos. 0 homens. A filha de Ricardo: "Eu amo meu pai. Mas eu acredito na Camila. Porque eu conheço meu pai."'
], choices:[{text:'Ir para a decisão', next:'c02_decisao'}]});

Story.add('c02_decisao', { caseLabel:'CASO 02 — VEREDITO', text:[
    '[HIGHLIGHT]Duas versões. Nenhuma certeza. Alguém precisa decidir.'
], choices:[
    {text:'Condenar Ricardo — os indícios formam padrão', next:'c02_pos', points:{punicao:2}, decision:'Caso 02: Condenou Ricardo'},
    {text:'Absolver Ricardo — sem provas concretas', next:'c02_pos', points:{justica:2}, decision:'Caso 02: Absolveu Ricardo'},
    {text:'Afastar temporariamente + investigação', next:'c02_pos', points:{pragmatismo:2}, decision:'Caso 02: Afastamento temporário'},
    {text:'Acreditar em Camila — vítimas precisam ser ouvidas', next:'c02_pos', points:{compaixao:2}, decision:'Caso 02: Acreditou em Camila'},
    {text:'Pedir mais informações', next:'c02_maisinfo', points:{justica:1}}
]});

Story.add('c02_maisinfo', { text:[
    '[DOSSIER]Ricardo é solitário. Confunde relações profissionais com pessoais. Camila está sozinha na denúncia. Universidade sem protocolo anti-assédio.',
], choices:[
    {text:'Condenar + obrigar protocolo anti-assédio', next:'c02_pos', points:{justica:3}, decision:'Caso 02: Condenou + protocolo'},
    {text:'Afastar + canal denúncia + suporte Camila', next:'c02_pos', points:{compaixao:3}, decision:'Caso 02: Afastar + suporte'},
    {text:'Sistema incapaz de julgar — declarar impasse', next:'c02_pos', points:{pragmatismo:3}, decision:'Caso 02: Declarou impasse'}
]});

Story.add('c02_pos', { text:[
    '[SYSTEM]"Decisão registrada."',
    '[SYSTEM]"Camila voltou de ônibus. 1h40. Sentou no fundo. Fone de ouvido. Sem música. Chegou em casa. A mãe perguntou: como foi a aula? Foi bem, mãe."',
    '[HIGHLIGHT]"Ela trancou a porta do quarto. E chorou até dormir. Independente da sua decisão, isso aconteceu."'
], next:'ec02_inicio'});
