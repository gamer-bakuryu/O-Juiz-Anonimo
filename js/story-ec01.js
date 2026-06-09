// ═══════════════════════════════════════
// ENTRE-CENA 01 — A MANHÃ SEGUINTE
// ═══════════════════════════════════════

Story.add('ec01_inicio', { caseLabel:'A MANHÃ SEGUINTE', text:[
    'Terça-feira. 6:47. Acordado desde as 5:12.',
    'Mariana. Pedro. Antônio. Nomes que agora moram na sua cabeça.'
], choices:[
    {text:'Levantar e seguir a rotina', next:'ec01_onibus'},
    {text:'Verificar o notebook', next:'ec01_note'},
    {text:'Ficar na cama', next:'ec01_cama'}
]});

Story.add('ec01_cama', { text:['Você pensa em Mariana na delegacia. Em Pedro com a vizinha de 72 anos. Três pessoas acordando agora. Nenhuma sabe que você existe.'], next:'ec01_onibus'});
Story.add('ec01_note', { text:['Nenhuma notificação. Mas no canto: "Caso 02 disponível às 22:00." Você tem um dia inteiro para fingir que é normal.'], next:'ec01_onibus'});

Story.add('ec01_onibus', { text:[
    'Ônibus. 7:38. Lotado. Uma mulher com sacolas pesadas te lembra alguém.'
], choices:[
    {text:'Oferecer ajuda', next:'ec01_ajuda'},
    {text:'Colocar fone e se isolar', next:'ec01_fone'},
    {text:'Olhar pela janela', next:'ec01_janela'}
]});

Story.add('ec01_ajuda', { text:['"Ninguém oferece mais, sabia?" Ela sorri. Dentes faltando. Mas um sorriso de verdade.'], next:'ec01_trabalho'});
Story.add('ec01_fone', { text:['Todo mundo julgando. Todo mundo sendo julgado. A diferença é que o seu julgamento tem consequências documentadas.'], next:'ec01_trabalho'});
Story.add('ec01_janela', { text:['A cidade passa. Padaria. Lotérica. Farmácia. Você se pergunta se aquela mulher pode pagar os remédios.'], next:'ec01_trabalho'});

Story.add('ec01_trabalho', { text:[
    'Escritório. Carla chega com dois cafés. "Você tá com uma cara horrível. Dormiu mal?"'
], choices:[
    {text:'"Noite ruim. Obrigado pelo café."', next:'ec01_almoco'},
    {text:'"Posso te fazer uma pergunta estranha?"', next:'ec01_pergunta'},
    {text:'Pegar o café em silêncio', next:'ec01_almoco'}
]});

Story.add('ec01_pergunta', { text:[
    '"Você acha que uma pessoa boa pode fazer uma coisa errada?"',
    'Carla pensa. "Minha mãe mentiu no currículo pra conseguir emprego. Era errado. Mas a gente comeu naquela semana."'
], next:'ec01_almoco'});

Story.add('ec01_almoco', { text:[
    'Restaurante por quilo. R$22.',
    '[HIGHLIGHT]Mariana tinha R$22 na carteira no dia que roubou a farmácia.',
    'Isso é um almoço pra você. Pra ela, era tudo. A comida não desce tão fácil.'
], choices:[
    {text:'Comer e tentar não pensar', next:'ec01_noite'},
    {text:'Observar as pessoas', next:'ec01_observar'}
]});

Story.add('ec01_observar', { text:[
    'Mesa 3: mulher sozinha, uniforme de limpeza. Mesa 5: pai com criança — "Come, filho."',
    'Cada pessoa poderia ser um caso. Antes eram cenário. Agora são casos em potencial.'
], next:'ec01_noite'});

Story.add('ec01_noite', { text:[
    '21:58. O painel do P.A.A.M. está lá.',
    '[SYSTEM]"93% dos juízes disseram que o Caso 01 foi o mais fácil. Prepare-se."',
    'Se aquele foi o mais fácil...'
], choices:[{text:'Continuar para o Caso 02', next:'c02_inicio'}]});
