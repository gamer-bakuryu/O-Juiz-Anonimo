// ═══════════════════════════════════════
// EPÍLOGOS
// ═══════════════════════════════════════

// Router — calcula qual epílogo mostrar
Story.add('_epilogo_router', {
    text:['[SYSTEM]Processando perfil do Juiz #4891...'],
    choices:[{
        text:'Revelar resultado',
        next:'_calc_epilogo'
    }]
});

Story.add('_calc_epilogo', {
    text:[''], // O game.js irá redirecionar
    next:'_redirect'
});

// EPÍLOGO 1 — O JUSTO (⚖️)
Story.add('epilogo_justo', {
    caseLabel:'EPÍLOGO — O JUSTO',
    showTransition:{title:'E P Í L O G O', subtitle:'O Justo'},
    text:[
        '[HIGHLIGHT]Você buscou equilíbrio. Ponderou. Voltou atrás quando sentiu que estava errado.',
        '[SYSTEM]"Você não foi o juiz mais rápido. Mas foi o mais honesto."',
        '[SEPARATOR]═══════════════════════════════════',
        '[DOSSIER-HEADER]RESULTADOS:',
        '[DOSSIER]Mariana fez acordo. Trabalha na farmácia. No 6º mês, Antônio aumentou suas horas — não porque precisava, porque assim ela ganhava mais.',
        '[DOSSIER]Ricardo — investigação de 9 meses. Mais alunas falaram. Demitido. Universidade criou canal de denúncia. 11 denúncias no 1º ano.',
        '[DOSSIER]Kevin — realocado pro interior. Dona Francisca morreu 4 meses depois. Kevin trabalha numa padaria. Faz pão de manhã, desenha à noite.',
        '[DOSSIER]Helena — conheceu o neto por 2 semanas. Morreu segurando a mão da filha.',
        '[DOSSIER]Paulo — devolveu o dinheiro. Hospital de Vila Norte começou a ser reconstruído.',
        '[SEPARATOR]═══════════════════════════════════',
        '[SYSTEM]"A justiça perfeita não existe. Mas a busca por ela é a única coisa que impede o mundo de desmoronar."',
        '[HIGHLIGHT]"Obrigado, Juiz #4891. O programa está encerrado."',
        '[SEPARATOR]═══════════════════════════════════',
        'Sexta-feira. Ônibus. Uma mulher com sacolas pesadas.',
        '"Quer ajuda?" Ela sorri. "Obrigada, querido."',
        'É pouco. É mínimo. Mas é alguma coisa.',
        'O mundo não mudou. Mas você mudou. E talvez isso baste.'
    ],
    choices:[{text:'FIM — Voltar ao início', next:'_title'}]
});

// EPÍLOGO 2 — O COMPASSIVO (❤️)
Story.add('epilogo_compassivo', {
    caseLabel:'EPÍLOGO — O COMPASSIVO',
    showTransition:{title:'E P Í L O G O', subtitle:'O Compassivo'},
    text:[
        '[HIGHLIGHT]Você usou o coração como bússola. Sempre viu o humano por trás do erro.',
        '[SYSTEM]"Compaixão sem limites é uma enchente. Salva quem está perto. Afoga quem está longe."',
        '[SEPARATOR]═══════════════════════════════════',
        '[DOSSIER-HEADER]RESULTADOS:',
        '[DOSSIER]Mariana absolvida. Antônio não foi ressarcido. A farmácia fechou em 6 meses.',
        '[DOSSIER]Kevin salvo pelo programa completo. Mas a verba tirou recursos de outros 3 meninos. Um deles — Matheus, 13 — foi morto.',
        '[DOSSIER]Helena partiu em paz, sem saber do neto. Renata nunca perdoou.',
        '[DOSSIER]Paulo perdoado. Dona Maria protesta todo mês na porta do MP.',
        '[SEPARATOR]═══════════════════════════════════',
        '[SYSTEM]"Cada pessoa que você salvou foi salva de verdade. Para elas, você foi a única coisa entre elas e o abismo."',
        '[HIGHLIGHT]"Ame os que você salvou. Carregue os que você perdeu. É tudo que pode fazer."',
        'Você chora. Pela primeira vez na semana. Lágrimas de alívio e dor misturadas.'
    ],
    choices:[{text:'FIM — Voltar ao início', next:'_title'}]
});

// EPÍLOGO 3 — O PUNIDOR (🔥)
Story.add('epilogo_punidor', {
    caseLabel:'EPÍLOGO — O PUNIDOR',
    showTransition:{title:'E P Í L O G O', subtitle:'O Punidor'},
    text:[
        '[HIGHLIGHT]Você usou o fogo como bússola. Ações têm consequências.',
        '[SYSTEM]"Mas a punição sem contexto é crueldade."',
        '[SEPARATOR]═══════════════════════════════════',
        '[DOSSIER-HEADER]RESULTADOS:',
        '[DOSSIER]Mariana presa. Pedro no abrigo — chora pela mãe toda noite.',
        '[DOSSIER]Ricardo condenado, banido. Tentou suicídio. Sobreviveu. Não fala mais com ninguém.',
        '[DOSSIER]Kevin internado. Em 3 meses, recrutado por facção DENTRO da unidade. Matou um rival aos 15.',
        '[DOSSIER]Helena forçada a viver. Sonda. Máquina. Os últimos meses foram tortura consciente.',
        '[DOSSIER]Paulo preso junto com quem delatou. Nenhum novo delator se apresentou. Corrupção aumentou 40%.',
        '[SEPARATOR]═══════════════════════════════════',
        '[SYSTEM]"Você não fez justiça. Fez o mundo ter medo. E medo não é respeito."',
        '[HIGHLIGHT]"O programa está encerrado."',
        'Carla no trabalho: "Você tá frio ultimamente." Sua mãe: "O que aconteceu? Você tá diferente."',
        'Você está sozinho. Porque decidiu que era necessário.'
    ],
    choices:[{text:'FIM — Voltar ao início', next:'_title'}]
});

// EPÍLOGO 4 — O PRAGMÁTICO (🎭)
Story.add('epilogo_pragmatico', {
    caseLabel:'EPÍLOGO — O PRAGMÁTICO',
    showTransition:{title:'E P Í L O G O', subtitle:'O Pragmático'},
    text:[
        '[HIGHLIGHT]Você foi prático. Sem drama. "O que funciona?"',
        '[SYSTEM]"Eficiência sem alma é a coisa mais assustadora que existe."',
        '[SEPARATOR]═══════════════════════════════════',
        '[DOSSIER-HEADER]RESULTADOS:',
        '[DOSSIER]Ninguém completamente salvo. Ninguém completamente destruído. Tudo... morno.',
        '[DOSSIER]Kevin não se adaptou. Fugiu. Voltou pro tráfico em outra cidade.',
        '[DOSSIER]Helena morreu antes do prazo. A natureza resolveu o que você não conseguiu.',
        '[DOSSIER]Paulo trabalha pro Estado. Eficiente. As famílias não concordam.',
        '[SEPARATOR]═══════════════════════════════════',
        '[SYSTEM]"Você é o tipo de pessoa que o sistema adora. Porque o sistema precisa de engrenagens. Não de corações."',
        '[HIGHLIGHT]"Parabéns, Juiz #4891. Você é perfeitamente funcional. O programa continuará. Nada muda."',
        'O peso sumiu. Mas deixou um vazio que você nunca vai preencher.'
    ],
    choices:[{text:'FIM — Voltar ao início', next:'_title'}]
});

// EPÍLOGO 5 — A RECUSA
Story.add('epilogo_recusa', {
    caseLabel:'EPÍLOGO — A RECUSA',
    showTransition:{title:'E P Í L O G O', subtitle:'O Espelho Quebrado'},
    text:[
        '[SYSTEM]"Você se recusa."',
        '[SYSTEM]"Você julgou Mariana. Ricardo. Fernando. Kevin. Helena. Paulo. Seis vidas."',
        '[HIGHLIGHT]"E agora, quando a câmera vira pra você... você tampa a lente."',
        '[SEPARATOR]═══════════════════════════════════',
        '[SYSTEM]"TODAS as suas decisões foram ANULADAS."',
        '[SYSTEM]"Os casos serão redistribuídos para outro juiz. Juiz #4892."',
        '[SYSTEM]"Alguém que pode ser melhor. Ou pior. Você nunca vai saber."',
        '[SEPARATOR]═══════════════════════════════════',
        '[SYSTEM]"Os casos continuam. Mariana ainda espera. Kevin ainda está na esquina."',
        '[HIGHLIGHT]"Adeus, {NOME}. Volte a ser invisível."',
        '[SEPARATOR]═══════════════════════════════════',
        'Sexta-feira. Uma notícia no celular: "Mãe é presa por furtar remédios."',
        'Outra Mariana. Outro juiz.',
        'Você lê a manchete. E passa pro próximo post. Um gato tocando piano.',
        'O mundo continua girando. Sem você.'
    ],
    choices:[
        {text:'FIM — Voltar ao início', next:'_title'},
        {text:'Recomeçar', next:'start'}
    ]
});
