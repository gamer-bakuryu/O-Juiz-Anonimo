// ENTRE-CENA 06 — A ÚLTIMA NOITE
Story.add('ec06_inicio', { caseLabel:'A ÚLTIMA NOITE', text:[
    'Terça-feira. 23:55. O notebook diz:',
    '[SYSTEM]"Caso 07 — O Último Caso. Disponível amanhã às 22:00. Amanhã é sobre você."'
], choices:[
    {text:'Reler todas as decisões', next:'ec06_reler'},
    {text:'Escrever no caderno', next:'ec06_caderno'},
    {text:'Ligar pra mãe', next:'ec06_mae'}
]});

Story.add('ec06_reler', { text:[
    'Seis linhas. Seis momentos. Por trás de cada linha, uma noite sem dormir.',
    'Você se reconhece nessas decisões?'
], choices:[
    {text:'Sim', next:'ec06_esperar'}, {text:'Não sei mais', next:'ec06_esperar'}
]});

Story.add('ec06_caderno', { text:[
    '"1. Ninguém é 100% culpado ou inocente. 2. Contexto muda tudo. 3. A decisão mais difícil é entre errado e errado. 4. Eu não sei se sou uma boa pessoa. 5. Amanhã eu descubro."'
], next:'ec06_esperar'});

Story.add('ec06_mae', { text:[
    '"Alô? É quase meia-noite!" — "Só queria ouvir sua voz."',
    '"Mãe, você acha que eu sou uma boa pessoa?"',
    '"Você é meu filho. Eu te vi errar. Te vi acertar. Você é bom? Você tenta ser. E tentar já é mais do que a maioria faz."'
], next:'ec06_esperar'});

Story.add('ec06_esperar', { text:[
    'Quarta-feira. 21:50. O contador roda. Uma última mensagem:',
    '[SYSTEM]"Você julgou estranhos. Com informações incompletas. Com medo. Com dúvida. Exatamente como juízes de verdade."',
    '[HIGHLIGHT]"Pronto?"'
], choices:[{text:'Abrir o último caso', next:'c07_inicio'}]});
