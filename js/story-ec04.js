// ENTRE-CENA 04 — O ESPELHO
Story.add('ec04_inicio', { caseLabel:'O ESPELHO', text:[
    'Sexta-feira. 03:30. Você vai ao banheiro. Olha no espelho. Não se reconhece.',
    'Não porque mudou. Mas porque está se vendo de verdade pela primeira vez.'
], choices:[
    {text:'Ir para a casa da mãe no sábado', next:'ec04_mae'},
    {text:'Ficar sozinho no apartamento', next:'ec04_sozinho'}
]});

Story.add('ec04_sozinho', { text:['As paredes estão menores. O silêncio pesa. Você precisa sair.'], next:'ec04_mae'});

Story.add('ec04_mae', { text:[
    'A casa da sua mãe cheira a bolo e feijão tropeiro.',
    '"Tá magro! Não tá comendo!" — "Tô, mãe." — "Miojo não é comida."',
    'Almoço em silêncio. Depois: "Mãe, como era quando você era criança?"',
    '"Era difícil. Sua avó falava: pode ser pobre, mas não pode ser desonesto. Eu cresci achando que honestidade resolvia tudo."',
    '[PAUSA]"Não resolve. Mas é tudo que a gente tem."',
    'Lavar louça juntos. 20 minutos de paz. Dura pouco. Mas vale por anos.'
], choices:[
    {text:'Voltar para casa e esperar o Caso 05', next:'ec04_fim'}
]});

Story.add('ec04_fim', { text:[
    'Domingo à noite. De volta ao apartamento.',
    '[SYSTEM]"Caso 05 disponível às 22:00. Descansou?"',
    'Um pouco. Na casa da mãe. Pelo tempo de uma louça lavada.'
], choices:[{text:'Continuar para o Caso 05', next:'c05_inicio'}]});
