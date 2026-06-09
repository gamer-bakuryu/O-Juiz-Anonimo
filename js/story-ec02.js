// ENTRE-CENA 02 — O ALMOÇO
Story.add('ec02_inicio', { caseLabel:'O ALMOÇO', text:[
    'Quarta-feira. Dois casos. Duas noites mal dormidas.',
    'Olheiras no espelho. Ontem você decidiu sobre assédio. Sem provas concretas. E mesmo assim, decidiu.'
], choices:[
    {text:'Ir trabalhar no automático', next:'ec02_carla'},
    {text:'Ligar a TV — notícias', next:'ec02_tv'}
]});

Story.add('ec02_tv', { text:[
    '"...professor universitário é afastado após denúncias..." — Não é o mesmo caso. Outra cidade. Mas a mesma história.',
    'Quantos casos desses existem? Quantos nunca são denunciados?'
], next:'ec02_carla'});

Story.add('ec02_carla', { text:[
    'Carla está mais quieta hoje. Você percebe. Antes do P.A.A.M., não teria percebido.'
], choices:[
    {text:'Levar um café pra ela', next:'ec02_cafe'},
    {text:'Deixar pra lá', next:'ec02_almoco'}
]});

Story.add('ec02_cafe', { text:[
    'Com açúcar. Ela gosta com açúcar. Você sabe disso.',
    '"Minha prima tá passando por uma situação difícil no trabalho. O chefe dela... é complicado."',
    'Seu estômago gela. Você pensa em Camila.'
], next:'ec02_almoco'});

Story.add('ec02_almoco', { text:[
    'Carla insistiu: "Você vai almoçar comigo. Não é pergunta."',
    '"Você tá diferente essa semana. Mais... presente? Mais pesado?"'
], choices:[
    {text:'"Tô repensando umas coisas na vida."', next:'ec02_fim'},
    {text:'"Você acredita que uma pessoa comum pode mudar a vida de outra?"', next:'ec02_mudar'}
]});

Story.add('ec02_mudar', { text:[
    '"Minha professora da 5ª série disse que eu era inteligente. Ninguém nunca tinha dito. Eu tô aqui por causa daquela frase."',
    '"Uma frase. Uma pessoa. Uma vida mudada."',
    '"O fato de você tá pensando nisso já diz algo sobre você. Que você se importa."',
    'O P.A.A.M. disse a mesma coisa. "Você se importa."'
], next:'ec02_fim'});

Story.add('ec02_fim', { text:[
    '22:00. O notebook carrega o Caso 03.',
    '[SYSTEM]"O Caso 03 envolve números. 200 pessoas. Mas não são números. Nunca são."'
], choices:[{text:'Continuar para o Caso 03', next:'c03_inicio'}]});
