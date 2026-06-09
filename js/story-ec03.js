// ENTRE-CENA 03 — A LIGAÇÃO
Story.add('ec03_inicio', { caseLabel:'A LIGAÇÃO', text:[
    'Quinta-feira. 00:14. Você está na cozinha. No escuro.',
    'Três mortes. A torneira pinga. Plic. Plic. Plic.'
], choices:[
    {text:'Ir dormir', next:'ec03_fim'},
    {text:'Sentar no chão da cozinha', next:'ec03_chao'},
    {text:'Consertar a torneira (agora, meia-noite)', next:'ec03_torneira'}
]});

Story.add('ec03_chao', { text:[
    'O chão é frio. O azulejo contra suas costas é real de um jeito que a tela do notebook não é.',
    'O problema é que os casos não param quando você fecha o notebook. Eles moram em você agora.'
], next:'ec03_fim'});

Story.add('ec03_torneira', { text:[
    'Chave de fenda. Aperta. Gira. 10 minutos. A torneira para de pingar.',
    'Você consertou uma coisa. Mínima. Irrelevante. Mas consertou.',
    'Talvez julgar seja como consertar uma torneira à meia-noite. Você não sabe se fez certo. Mas tentou.'
], next:'ec03_fim'});

Story.add('ec03_fim', { text:[
    '[SYSTEM]"Caso 04 disponível. O acusado tem 14 anos. E com 14 anos, no lugar onde ele nasceu, as escolhas são feitas por você. Pela fome. Pelo medo. Pela bala."'
], choices:[{text:'Continuar para o Caso 04', next:'c04_inicio'}]});
