// ENTRE-CENA 05 — A RUA
Story.add('ec05_inicio', { caseLabel:'A RUA', text:[
    'Segunda-feira. 05:50. Você não dormiu. Precisa sair. As paredes sufocam.'
], choices:[
    {text:'Caminhar sem destino', next:'ec05_caminhar'},
    {text:'Sentar no ponto de ônibus vazio', next:'ec05_ponto'}
]});

Story.add('ec05_caminhar', { text:[
    'As ruas estão vazias. Padeiro abrindo. Cachorro dormindo.',
    'Você para em frente ao hospital. Luzes acesas. Sempre estão.',
    'Lá dentro, agora, alguém está nascendo. Alguém está morrendo. A maioria está no meio.'
], next:'ec05_fim'});

Story.add('ec05_ponto', { text:[
    'Banco gelado. Um senhor de 70 anos senta do outro lado.',
    '"Minha esposa morreu em dezembro. Venho aqui todo dia. Ela gostava do amanhecer."',
    '"Sabe o que ela me disse no último dia? Para de chorar, velho. Eu vivi tudo que precisava viver."',
    'Helena disse quase a mesma coisa. Você fica com ele. Até o rosa do céu virar azul.'
], next:'ec05_fim'});

Story.add('ec05_fim', { text:[
    '[SYSTEM]"Caso 06 — penúltimo. E depois... depois é sobre você."'
], choices:[{text:'Continuar para o Caso 06', next:'c06_inicio'}]});
