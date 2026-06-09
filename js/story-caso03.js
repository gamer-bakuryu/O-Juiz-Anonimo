// ═══════════════════════════════════════
// CASO 03 — O EMPRESÁRIO
// ═══════════════════════════════════════

Story.add('c03_inicio', {
    caseLabel:'CASO 03 — DEMISSÃO EM MASSA',
    showTransition:{title:'C A S O  0 3', subtitle:'"Quanto vale uma vida em uma planilha?"'},
    text:[
        '[DOSSIER-HEADER]ACUSADO: Fernando Augusto Bastos, 45 anos',
        '[DOSSIER]CEO da TechNova. Fundou em 2012. 823 funcionários → demitiu 200. Divorciado. 1 filha (Luísa, 12).',
        '[DOSSIER-HEADER]FATOS:',
        '[DOSSIER]Em 11 minutos de reunião, anunciou 200 demissões. Sem aviso prévio. Mínimo legal pago. Acessos bloqueados às 9:14. Na rua às 9:20.',
        '[HIGHLIGHT]Do anúncio à rua: 20 minutos. Algumas tinham 10 anos de empresa.'
    ], choices:[
        {text:'Ver a justificativa de Fernando', next:'c03_fernando'},
        {text:'Ver as consequências', next:'c03_consequencias'}
    ]
});

Story.add('c03_fernando', { text:[
    '[DEPOIMENTO]<span class="speaker">FERNANDO:</span>"Meu sócio Rafael desviou R$2 milhões. Fugiu pra Portugal. A consultoria disse: corta 200 e salva 623. Ou perde os 823."',
    '[DEPOIMENTO]"Eu li cada nome. Rodrigo, 10 anos, filho autista. Amanda, voltou de licença. Seu Carlos, limpeza, 22 anos. Eu sabia os rostos."',
    '[DEPOIMENTO]"623 é maior que 200. Eu não durmo desde maio."',
    '[DOSSIER]O sindicato propôs 3 alternativas. Todas rejeitadas por Fernando em 24 horas.',
    '[DOSSIER]O apartamento de R$4mi: comprado com herança da mãe. Confirmado. Mas o timing...',
    '[DEPOIMENTO]"Não a demissão. A forma. A forma podia ter sido humana. E não foi."'
], choices:[{text:'Ver as consequências', next:'c03_consequencias'}]});

Story.add('c03_consequencias', { text:[
    '[DOSSIER-HEADER]CONSEQUÊNCIAS (6 meses depois):',
    '[DOSSIER]67 recolocados. 48 fazendo bicos. 39 desempregados. 3 morreram.',
    '[HIGHLIGHT]MARCOS (41): Suicídio. Perdeu o imóvel. Esposa encontrou.',
    '[HIGHLIGHT]LETÍCIA (29): Depressão. Perdeu plano de saúde e medicação. Encontrada pelo vizinho.',
    '[HIGHLIGHT]SEU CARLOS (59): 22 anos de empresa. Infarto. Morreu sozinho.',
    '[DOSSIER]Fernando tem pesadelos. Toma antidepressivos. Sonha com os rostos.',
    '[DOSSIER]Rafael Duarte — o sócio — está em Lisboa. Sem previsão de extradição.'
], choices:[{text:'Decidir', next:'c03_decisao'}]});

Story.add('c03_decisao', { caseLabel:'CASO 03 — VEREDITO', text:[
    '[HIGHLIGHT]Ele salvou 623. Perdeu 200. 3 morreram. O sócio fugiu. Quem paga?'
], choices:[
    {text:'Condenar Fernando — ele tinha alternativas', next:'c03_pos', points:{punicao:2}, decision:'Caso 03: Condenou Fernando'},
    {text:'Absolver — salvou 623 empregos', next:'c03_pos', points:{pragmatismo:2}, decision:'Caso 03: Absolveu Fernando'},
    {text:'Condenar parcialmente + indenização', next:'c03_pos', points:{justica:2}, decision:'Caso 03: Condenação parcial'},
    {text:'Responsabilizar pelas 3 mortes', next:'c03_pos', points:{punicao:3}, decision:'Caso 03: Responsabilizou pelas mortes'},
    {text:'Condenar A FORMA, não a decisão', next:'c03_pos', points:{pragmatismo:3}, decision:'Caso 03: Condenou a forma'},
    {text:'Reempregar quem puder + fundo famílias', next:'c03_pos', points:{justica:3}, decision:'Caso 03: Reemprego + fundo'}
]});

Story.add('c03_pos', { text:[
    '[SYSTEM]"Registrado."',
    '[SYSTEM]"Fernando escreveu 200 e-mails de desculpas. Personalizados. Terminou às 4:37. Não enviou nenhum."',
    '[HIGHLIGHT]"200 pedidos de desculpa que nunca foram lidos."'
], next:'ec03_inicio'});
