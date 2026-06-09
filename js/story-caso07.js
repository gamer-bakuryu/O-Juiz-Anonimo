// ═══════════════════════════════════════
// CASO 07 — O JULGAMENTO FINAL
// ═══════════════════════════════════════

Story.add('c07_inicio', {
    caseLabel:'CASO 07 — O ÚLTIMO CASO',
    showTransition:{title:'C A S O  0 7', subtitle:'"Quem julga o juiz?"'},
    text:[
        '[SEPARATOR]═══════════════════════════════════',
        '[HIGHLIGHT]PERFIL DO ACUSADO:',
        '[DOSSIER]Nome: {NOME}',
        '[DOSSIER]Função: Juiz Anônimo do P.A.A.M.',
        '[SEPARATOR]═══════════════════════════════════',
        '[SYSTEM]"Nós não trouxemos você aqui porque cometeu um crime. Sua ficha é limpa."',
        '[HIGHLIGHT]"O seu crime é a SOBERBA."',
        '[SYSTEM]"Um e-mail anônimo ofereceu poder. Você não sabe quem somos. E mesmo assim... aceitou."',
        '[SYSTEM]"Você leu texto em uma tela, tomou café, e decidiu se uma criança vai pra prisão, se uma mulher pode morrer."',
        '[HIGHLIGHT]"Quem te deu esse direito?"'
    ], choices:[
        {text:'"Vocês me deram!"', next:'c07_voces'},
        {text:'"Alguém tinha que fazer."', next:'c07_alguem'},
        {text:'"Fiz o melhor que pude."', next:'c07_melhor'},
        {text:'Ficar em silêncio', next:'c07_silencio'}
    ]
});

Story.add('c07_voces', { text:['[SYSTEM]"Nós oferecemos. A escolha de pegar foi sua. Nós abrimos a porta. Você entrou porque quis."'], next:'c07_evidencias'});
Story.add('c07_alguem', { text:['[SYSTEM]"O Estado. Os juízes de verdade. O que te fez pensar que VOCÊ faria melhor?"'], next:'c07_evidencias'});
Story.add('c07_melhor', { text:['[SYSTEM]"Fez. Mas \'o melhor que pude\' é suficiente quando vidas estão em jogo?"'], next:'c07_evidencias'});
Story.add('c07_silencio', { text:['[SYSTEM]"O silêncio diz mais do que qualquer resposta."'], next:'c07_evidencias'});

Story.add('c07_evidencias', { caseLabel:'CASO 07 — ANÁLISE', text:[
    '[DOSSIER-HEADER]ANÁLISE DO SEU PERFIL:',
    '[SYSTEM]"Suas decisões foram registradas. Seus padrões, analisados."',
    '[HIGHLIGHT]Agora, a última pergunta:',
    '[SEPARATOR]═══════════════════════════════════',
    '"Olhando para tudo que você fez — como você julga a si mesmo?"'
], choices:[
    {text:'"Eu sou INOCENTE. Fiz o necessário."', next:'c07_final_calc', decision:'Caso 07: Declarou-se inocente', setFlags:{c07:'inocente'}},
    {text:'"Eu sou CULPADO. Não deveria ter esse poder."', next:'c07_final_calc', decision:'Caso 07: Declarou-se culpado', setFlags:{c07:'culpado'}},
    {text:'"Eu sou HUMANO. Eu tentei."', next:'c07_final_calc', decision:'Caso 07: Declarou-se humano', setFlags:{c07:'humano'}},
    {text:'"Eu ME RECUSO a participar disso."', next:'epilogo_recusa', decision:'Caso 07: Recusou-se'}
]});

Story.add('c07_final_calc', {
    text:['[SYSTEM]"Registrado. Calculando seu epílogo..."'],
    choices:[{text:'Ver o resultado final', next:'_epilogo_router'}]
});
