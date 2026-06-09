// ═══════════════════════════════════════
// CASO 06 — O DELATOR
// ═══════════════════════════════════════

Story.add('c06_inicio', {
    caseLabel:'CASO 06 — TRAIÇÃO OU HEROÍSMO?',
    showTransition:{title:'C A S O  0 6', subtitle:'"É possível fazer a coisa certa pelos motivos errados?"'},
    text:[
        '[DOSSIER-HEADER]ACUSADO/DELATOR: Paulo Henrique, 40 anos. Contador.',
        '[DOSSIER]Participou de esquema de corrupção por 6 ANOS. Ajudou a desviar R$15 milhões de obras públicas: hospital (340.000 sem), escola (teto desabou), posto de saúde (nunca construído).',
        '[DOSSIER]Recebeu R$20.000/mês por fora. Total: R$1.440.000. Guardou R$832.000.',
        '[DOSSIER]Delatou após ameaça de ser descartado pelo esquema. A delação prendeu 4 executivos e 2 políticos.',
        '[HIGHLIGHT]Sem Paulo, NINGUÉM seria preso. Mas Paulo só delatou pra se salvar.'
    ], choices:[
        {text:'Ver as consequências do esquema', next:'c06_consequencias'},
        {text:'Ouvir Paulo', next:'c06_paulo'}
    ]
});

Story.add('c06_consequencias', { text:[
    '[DOSSIER-HEADER]CONSEQUÊNCIAS:',
    '[DOSSIER]12 mortes por demora no atendimento. 3 gestantes mortas. 1 criança (Miguel, 8) paraplégica — teto da escola caiu.',
    '[DEPOIMENTO]<span class="speaker">MÃE DE JOANA (gestante que morreu):</span>"Minha filha morreu a 4km do hospital que nunca existiu. E o homem que roubou o dinheiro quer ser perdoado?"',
    '[DEPOIMENTO]<span class="speaker">MÃE DE MIGUEL:</span>"As pernas do meu filho valem R$20.000?"'
], choices:[{text:'Ouvir Paulo', next:'c06_paulo'}]});

Story.add('c06_paulo', { text:[
    '[DEPOIMENTO]<span class="speaker">PAULO:</span>"Eu sou um covarde. Covarde quando aceitei. Covarde durante 6 anos. Covarde quando delatei."',
    '[DEPOIMENTO]"R$20.000 por mês. Meu salário era R$8.500. Sobrava R$200. A Daniela sabia. Ou fingia não saber. Pacto silencioso."',
    '[DEPOIMENTO]"A culpa abriu a porta. O medo me empurrou. Eu fiz a coisa certa pelo motivo errado."',
    '[HIGHLIGHT]"Os 4 presos estão presos por minha causa. Isso conta pra alguma coisa?"',
    '[DOSSIER]Grampo telefônico: "Fábio, eu preciso me proteger. Eu tô pensando em sobreviver." — Não em fazer o certo.'
], choices:[{text:'Decidir', next:'c06_decisao'}]});

Story.add('c06_decisao', { caseLabel:'CASO 06 — VEREDITO', text:[
    '[HIGHLIGHT]6 anos cúmplice. 12 mortes. R$832.000 guardados. Mas sem ele, zero prisões.'
], choices:[
    {text:'Perdoar — sem ele, criminosos livres', next:'c06_pos', points:{pragmatismo:2}, decision:'Caso 06: Perdoou Paulo'},
    {text:'Punir igualmente — 6 anos é 6 anos', next:'c06_pos', points:{justica:2}, decision:'Caso 06: Puniu igualmente'},
    {text:'Pena reduzida + devolver dinheiro', next:'c06_pos', points:{justica:2}, decision:'Caso 06: Pena reduzida'},
    {text:'Condenação total — delação foi oportunismo', next:'c06_pos', points:{punicao:2}, decision:'Caso 06: Condenação total'},
    {text:'Devolver tudo + trabalhar como perito anti-fraude', next:'c06_pos', points:{justica:3}, decision:'Caso 06: Perito anti-fraude'},
    {text:'Encontrar as famílias + pedir desculpas + serviço em Vila Norte', next:'c06_pos', points:{compaixao:3}, decision:'Caso 06: Encontrar famílias'}
]});

Story.add('c06_pos', { text:[
    '[SYSTEM]"Seis casos. Seis noites. Seis decisões."',
    '[HIGHLIGHT]"Qual caso te mantém acordado à noite?"',
    '[SYSTEM]"Amanhã é o último caso. E o último caso... é sobre você."'
], next:'ec06_inicio'});
