// ═══════════════════════════════════════
// CASO 05 — EUTANÁSIA
// ═══════════════════════════════════════

Story.add('c05_inicio', {
    caseLabel:'CASO 05 — O DIREITO DE MORRER',
    showTransition:{title:'C A S O  0 5', subtitle:'"Quando viver deixa de ser um direito e vira uma sentença?"'},
    text:[
        '[SYSTEM]"Nos casos anteriores, a morte era consequência. Aqui, a morte é o pedido."',
        '[DOSSIER-HEADER]SOLICITANTE: Helena Augusta Martins, 67 anos',
        '[DOSSIER]Professora aposentada (35 anos de Português). Casada há 42 anos (Jorge, 71). 1 filha (Renata, 38). ELA avançada — 6-12 meses.',
        '[DOSSIER]Não anda. Fala com dificuldade. Usa tablet com sintetizador. Mente 100% lúcida.',
        '[HIGHLIGHT]A mente funciona perfeitamente. O corpo é que está morrendo. Helena assiste seu próprio corpo se desligar.'
    ], choices:[
        {text:'Ler o pedido de Helena', next:'c05_pedido'},
        {text:'Ouvir o marido Jorge', next:'c05_jorge'}
    ]
});

Story.add('c05_pedido', { text:[
    '[DEPOIMENTO]<span class="speaker">HELENA (via tablet):</span>"Eu não quero morrer. Eu quero viver. Mais que qualquer um."',
    '[DEPOIMENTO]"Mas eu não vou ter. A ELA vai tirar de mim. Primeiro as pernas. Depois as mãos. Agora a voz."',
    '[DEPOIMENTO]"Qual é a diferença entre desligar uma máquina e me deixar partir agora? Nos dois casos, eu morro."',
    '[HIGHLIGHT]"Eu não estou pedindo pra morrer. Estou pedindo pra escolher COMO morrer."',
    '[DEPOIMENTO]"Prefiro partir enquanto ainda lembro."',
    '[DOSSIER]Carta de Helena: "Ontem esqueci o nome da nossa filha por 3 segundos. Renata. O nome dela é Renata. Eu lembrei. Mas e amanhã?"'
], choices:[
    {text:'Ouvir Jorge', next:'c05_jorge'},
    {text:'Ouvir Renata (filha)', next:'c05_renata'}
]});

Story.add('c05_jorge', { text:[
    '[DEPOIMENTO]<span class="speaker">JORGE:</span>"42 anos. Eu apoio. Não porque quero que ela morra. Deus sabe que não."',
    '[DEPOIMENTO]"Mas isso não é sobre mim. É sobre ela. É egoísmo obrigá-la a ficar num corpo que não funciona só porque eu não aguento ficar sozinho."',
    '[HIGHLIGHT]"Isso não é amor. Isso é egoísmo."'
], choices:[
    {text:'Ouvir Renata', next:'c05_renata'},
    {text:'Decidir', next:'c05_decisao'}
]});

Story.add('c05_renata', { text:[
    '[DEPOIMENTO]<span class="speaker">RENATA:</span>"Não. Eu me recuso. Minha mãe não vai morrer porque decidiu morrer."',
    '[DEPOIMENTO]"Ela está deprimida. Se a gente tratar a depressão..."',
    '[DEPOIMENTO]"Eu não estou pronta pra perder minha mãe."',
    '[PAUSA][pausa]',
    '[HIGHLIGHT]"E tem outra coisa. Eu estou grávida. 8 semanas. Minha mãe vai ser avó. E ela não sabe."',
    '[DOSSIER]Médicos confirmam: Helena 100% lúcida. Não deprimida — "lúcida demais."',
    '[HIGHLIGHT]Helena está tomando a decisão mais importante da vida dela sem saber que vai ser avó.'
], choices:[{text:'Decidir', next:'c05_decisao'}]});

Story.add('c05_decisao', { caseLabel:'CASO 05 — VEREDITO', text:[
    '[HIGHLIGHT]Lúcida. Terminal. Marido apoia. Filha contra. Neto que Helena não conhece.'
], choices:[
    {text:'Autorizar a eutanásia', next:'c05_pos', points:{justica:2}, decision:'Caso 05: Autorizou eutanásia'},
    {text:'Negar — a vida é sagrada', next:'c05_pos', points:{punicao:2}, decision:'Caso 05: Negou eutanásia'},
    {text:'Revelar a gravidez + Helena decide novamente', next:'c05_pos', points:{compaixao:2}, decision:'Caso 05: Revelou gravidez'},
    {text:'Adiar por 3 meses', next:'c05_pos', points:{pragmatismo:2}, decision:'Caso 05: Adiou 3 meses'},
    {text:'Autorizar + revelar + 1 semana pra Helena decidir', next:'c05_pos', points:{justica:3}, decision:'Caso 05: Autorizar + revelar'},
    {text:'Cuidados paliativos + reavaliação mensal', next:'c05_pos', points:{pragmatismo:3}, decision:'Caso 05: Paliativos + reavaliação'}
]});

Story.add('c05_pos', { text:[
    '[SYSTEM]"Registrado."',
    '[SYSTEM]"Na noite em que Helena escreveu a carta, Jorge estava dormindo. Ela ficou olhando pra ele. 3 horas. Digitando com o queixo. Letra por letra."',
    '[HIGHLIGHT]"Independente da sua decisão, aquela noite aconteceu. E foi bonita. De uma beleza que dói."'
], next:'ec05_inicio'});
