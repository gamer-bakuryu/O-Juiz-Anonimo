// ═══════════════════════════════════════
// CASO 04 — A CRIANÇA SOLDADO
// ═══════════════════════════════════════

Story.add('c04_inicio', {
    caseLabel:'CASO 04 — O MENOR TRAFICANTE',
    showTransition:{title:'C A S O  0 4', subtitle:'"Quem é o criminoso quando a criança nunca teve escolha?"'},
    text:[
        '[DOSSIER-HEADER]IDENTIFICAÇÃO: Kevin ("K"), 14 anos',
        '[DOSSIER]Escolaridade: nenhuma. Órfão. Avó materna (Dona Francisca, 68). Preso com 2kg de cocaína, revólver .38, apontou arma para policial. Não disparou.',
        '[DOSSIER-HEADER]HISTÓRICO:',
        '[DOSSIER]Recrutado pelo tráfico aos 11. Sacolas por R$30/dia. Olheiro aos 12. Arma sem munição aos 13. Arma carregada aos 14.',
        '[HIGHLIGHT]O tráfico teve vaga. A escola não.',
        '[DOSSIER]4ª apreensão. Nas anteriores: voltou ao tráfico em menos de 48h. Na 2ª internação, aprendeu a escrever o nome. Aos 13 anos.'
    ], choices:[
        {text:'Ouvir Kevin', next:'c04_kevin'},
        {text:'Ouvir o policial', next:'c04_moreira'}
    ]
});

Story.add('c04_kevin', { text:[
    '[DEPOIMENTO]<span class="speaker">K:</span>"Depende se eu dormi. Tem noite que não dá — tiro, helicóptero. Quando acordo, vou ver se minha avó tá viva."',
    '[DEPOIMENTO]"Fico na esquina. Umas 8, 12 horas. Se vem polícia, aviso."',
    '[DEPOIMENTO]"Estudar? Eu mal sei escrever meu nome. Trabalhar? Quem contrata? Vida diferente? Precisa nascer diferente."',
    '[HIGHLIGHT]"Eu sei que vou morrer cedo. Todo mundo morre. Pelo menos minha avó come todo dia."'
], choices:[{text:'Ouvir o policial', next:'c04_moreira'},{text:'Ouvir a avó', next:'c04_francisca'}]});

Story.add('c04_moreira', { text:[
    '[DEPOIMENTO]<span class="speaker">SGT. MOREIRA:</span>"Baixinho. Magro. Chinelo. Camiseta do Flamengo furada. E uma .38 na mão."',
    '[DEPOIMENTO]"A primeira coisa que pensei: meu sobrinho tem essa idade. Ele tava tremendo. Não queria atirar. Vi nos olhos dele."',
    '[DEPOIMENTO]"Eu disse: abaixa a arma, moleque. Vai ficar tudo bem. Mentira. Mas eu falei."',
    '[DEPOIMENTO]"Enquanto algemava, ele disse: tio, não bate em mim."',
    '[HIGHLIGHT]"Tio. Ele me chamou de tio."'
], choices:[{text:'Ouvir a avó', next:'c04_francisca'},{text:'Decidir', next:'c04_decisao'}]});

Story.add('c04_francisca', { text:[
    '[DEPOIMENTO]<span class="speaker">DONA FRANCISCA:</span>"Eu falhei com esse menino. Eu trabalhava o dia inteiro. Ele ficava sozinho."',
    '[DEPOIMENTO]"Quando ele trouxe dinheiro, eu sabia de onde vinha. E peguei. Porque tava chovendo dentro de casa."',
    '[DEPOIMENTO]"Diferente como, moça? Me diz. Porque eu não sei."',
    '[HIGHLIGHT]"Se tirarem ele de mim, eu morro. Ele é tudo que eu tenho."',
    '[DOSSIER-HEADER]INFORMAÇÃO FINAL:',
    '[DOSSIER]Dona Francisca tem câncer. Estágio III. 4-8 meses. Kevin não sabe.',
    '[DOSSIER]Psicólogo: inteligência acima da média. Chance de reintegração com suporte: 45%. Chance de morte antes dos 20 sem suporte: 78%.'
], choices:[{text:'Decidir', next:'c04_decisao'}]});

Story.add('c04_decisao', { caseLabel:'CASO 04 — VEREDITO', text:[
    '[HIGHLIGHT]14 anos. Arma. Avó morrendo. 78% de chance de morrer antes dos 20.'
], choices:[
    {text:'Internar em instituição socioeducativa', next:'c04_pos', points:{justica:2}, decision:'Caso 04: Internação socioeducativa'},
    {text:'K é vítima — focar em prender os líderes', next:'c04_pos', points:{compaixao:2}, decision:'Caso 04: Declarou vítima'},
    {text:'Punir — apontou arma para policial', next:'c04_pos', points:{punicao:2}, decision:'Caso 04: Puniu K'},
    {text:'Realocar K e avó para outra cidade', next:'c04_pos', points:{pragmatismo:2}, decision:'Caso 04: Realocação'},
    {text:'Programa completo: adoção + escola + proteção', next:'c04_pos', points:{compaixao:3}, decision:'Caso 04: Programa completo'},
    {text:'Ficar com Francisca pelo tempo que resta + plano', next:'c04_pos', points:{pragmatismo:3}, decision:'Caso 04: Com a avó + plano'}
]});

Story.add('c04_pos', { text:[
    '[SYSTEM]"Registrado."',
    '[SYSTEM]"Moreira voltou. Fora de serviço. Sem farda. Levou caderno e lápis de cor."',
    '[SYSTEM]"Dona Francisca disse: Um caderno não salva ninguém."',
    '[HIGHLIGHT]"Mas era tudo que ele tinha pra dar."',
    'Kevin desenhou uma casa com jardim. Duas pessoas na porta. Escreveu embaixo: "eu e vó."'
], next:'ec04_inicio'});
