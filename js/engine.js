/* ============================================
   O JUIZ ANÔNIMO — ENGINE
   Motor do jogo: typewriter, navegação, save
   ============================================ */

const Engine = {
    // Estado do jogo
    state: {
        playerName: '',
        currentNode: 'start',
        profile: {
            justica: 0,
            compaixao: 0,
            punicao: 0,
            pragmatismo: 0
        },
        decisions: [],
        flags: {},
        currentCase: 'PRÓLOGO',
        history: []
    },

    // Configurações
    config: {
        typeSpeed: 25,
        lineDelay: 400,
        choiceDelay: 600,
        soundEnabled: true,
        skipMode: false
    },

    // Referências DOM
    dom: {
        textOutput: null,
        choicesContainer: null,
        caseIndicator: null,
        cursor: null,
        typingIndicator: null
    },

    // Typewriter state
    typewriter: {
        isTyping: false,
        queue: [],
        currentResolve: null,
        timeout: null
    },

    // Inicializar
    init() {
        this.dom.textOutput = document.getElementById('text-output');
        this.dom.choicesContainer = document.getElementById('choices-container');
        this.dom.caseIndicator = document.getElementById('case-indicator');
        this.dom.cursor = document.getElementById('cursor');
        this.dom.typingIndicator = document.getElementById('typing-indicator');

        // Click para pular digitação
        document.getElementById('text-container').addEventListener('click', () => {
            if (this.typewriter.isTyping) {
                this.skipTyping();
            }
        });

        // Tecla para pular
        document.addEventListener('keydown', (e) => {
            if (e.key === ' ' || e.key === 'Enter') {
                if (this.typewriter.isTyping) {
                    e.preventDefault();
                    this.skipTyping();
                }
            }
        });
    },

    // Navegar para um nó
    async goTo(nodeId) {
        const node = Story.getNode(nodeId);
        if (!node) {
            console.error(`Node não encontrado: ${nodeId}`);
            return;
        }

        this.state.currentNode = nodeId;
        this.state.history.push(nodeId);

        // Atualizar indicador de caso
        if (node.caseLabel) {
            this.state.currentCase = node.caseLabel;
            this.dom.caseIndicator.textContent = node.caseLabel;
        }

        // Limpar tela
        this.clearScreen();

        // Executar flags se houver
        if (node.setFlags) {
            Object.assign(this.state.flags, node.setFlags);
        }

        // Aplicar pontos morais
        if (node.points) {
            for (const [key, val] of Object.entries(node.points)) {
                this.state.profile[key] = (this.state.profile[key] || 0) + val;
            }
        }

        // Registrar decisão
        if (node.decision) {
            this.state.decisions.push({
                case: this.state.currentCase,
                node: nodeId,
                text: node.decision,
                timestamp: Date.now()
            });
        }

        // Mostrar transição de caso se houver
        if (node.showTransition) {
            await this.showCaseTransition(node.showTransition.title, node.showTransition.subtitle);
        }

        // Exibir texto
        if (node.text) {
            await this.displayText(node.text);
        }

        // Exibir escolhas
        if (node.choices && node.choices.length > 0) {
            await this.delay(this.config.choiceDelay);
            this.showChoices(node.choices);
        }

        // Auto-avançar se não houver escolhas
        if (node.next && (!node.choices || node.choices.length === 0)) {
            await this.delay(1500);
            this.goTo(node.next);
        }

        // Auto-save
        this.saveToStorage();
    },

    // Exibir texto com typewriter
    async displayText(textArray) {
        if (typeof textArray === 'string') {
            textArray = [textArray];
        }

        this.dom.cursor.classList.add('visible');
        this.typewriter.isTyping = true;

        for (let i = 0; i < textArray.length; i++) {
            const line = textArray[i];
            await this.typeLine(line);
            if (i < textArray.length - 1) {
                await this.delay(this.config.lineDelay);
            }
        }

        this.typewriter.isTyping = false;
        this.dom.cursor.classList.remove('visible');
    },

    // Digitar uma linha
    typeLine(content) {
        return new Promise((resolve) => {
            this.typewriter.currentResolve = resolve;

            const p = document.createElement('p');

            // Checar por formatação especial
            if (content.startsWith('[DOSSIER]')) {
                p.className = 'dossier';
                content = content.replace('[DOSSIER]', '');
            } else if (content.startsWith('[DOSSIER-HEADER]')) {
                p.className = 'dossier-header';
                content = content.replace('[DOSSIER-HEADER]', '');
            } else if (content.startsWith('[SYSTEM]')) {
                p.className = 'system-msg';
                content = content.replace('[SYSTEM]', '');
            } else if (content.startsWith('[SEPARATOR]')) {
                p.className = 'separator';
                content = content.replace('[SEPARATOR]', '');
            } else if (content.startsWith('[DEPOIMENTO]')) {
                p.className = 'depoimento';
                content = content.replace('[DEPOIMENTO]', '');
            } else if (content.startsWith('[PAUSA]')) {
                p.className = 'pausa';
                content = content.replace('[PAUSA]', '');
            } else if (content.startsWith('[HIGHLIGHT]')) {
                p.className = 'highlight';
                content = content.replace('[HIGHLIGHT]', '');
            }

            // Processar nome do jogador
            content = content.replace(/\{NOME\}/g, this.state.playerName || 'Juiz');

            this.dom.textOutput.appendChild(p);

            if (this.config.skipMode) {
                p.innerHTML = content;
                this.scrollToBottom();
                resolve();
                return;
            }

            let charIndex = 0;
            let htmlBuffer = '';
            let insideTag = false;

            const typeChar = () => {
                if (charIndex >= content.length) {
                    p.innerHTML = content;
                    this.scrollToBottom();
                    resolve();
                    return;
                }

                const char = content[charIndex];

                // Pular tags HTML inteiras
                if (char === '<') {
                    insideTag = true;
                }

                if (insideTag) {
                    htmlBuffer += char;
                    if (char === '>') {
                        insideTag = false;
                        p.innerHTML = content.substring(0, charIndex + 1);
                    }
                    charIndex++;
                    typeChar();
                    return;
                }

                p.innerHTML = content.substring(0, charIndex + 1);
                charIndex++;
                this.scrollToBottom();

                this.typewriter.timeout = setTimeout(typeChar, this.config.typeSpeed);
            };

            typeChar();
        });
    },

    // Pular digitação
    skipTyping() {
        if (this.typewriter.timeout) {
            clearTimeout(this.typewriter.timeout);
        }

        // Mostrar todo o texto restante
        const paragraphs = this.dom.textOutput.querySelectorAll('p');
        if (paragraphs.length > 0) {
            // Resolver a promise atual
            if (this.typewriter.currentResolve) {
                this.config.skipMode = true;
                this.typewriter.currentResolve();
                this.typewriter.currentResolve = null;

                setTimeout(() => {
                    this.config.skipMode = false;
                }, 100);
            }
        }
    },

    // Mostrar escolhas
    showChoices(choices) {
        this.dom.choicesContainer.innerHTML = '';

        // Filtrar escolhas por condições
        const filtered = choices.filter(c => {
            if (c.condition) {
                return this.checkCondition(c.condition);
            }
            return true;
        });

        filtered.forEach((choice, i) => {
            const btn = document.createElement('button');
            btn.className = 'choice-btn';

            const prefix = document.createElement('span');
            prefix.className = 'choice-prefix';
            prefix.textContent = '>';
            btn.appendChild(prefix);

            const textSpan = document.createElement('span');
            textSpan.textContent = ' ' + choice.text;
            btn.appendChild(textSpan);

            btn.addEventListener('click', () => {
                this.selectChoice(choice);
            });

            this.dom.choicesContainer.appendChild(btn);
        });
    },

    // Selecionar escolha
    selectChoice(choice) {
        // Desabilitar escolhas
        const buttons = this.dom.choicesContainer.querySelectorAll('.choice-btn');
        buttons.forEach(b => {
            b.disabled = true;
            b.style.opacity = '0.3';
            b.style.pointerEvents = 'none';
        });

        // Aplicar pontos
        if (choice.points) {
            for (const [key, val] of Object.entries(choice.points)) {
                this.state.profile[key] = (this.state.profile[key] || 0) + val;
            }
        }

        // Aplicar flags
        if (choice.setFlags) {
            Object.assign(this.state.flags, choice.setFlags);
        }

        // Registrar decisão
        if (choice.decision) {
            this.state.decisions.push({
                case: this.state.currentCase,
                node: this.state.currentNode,
                text: choice.decision || choice.text,
                timestamp: Date.now()
            });
        }

        // Navegar
        setTimeout(() => {
            if (choice.next) {
                this.goTo(choice.next);
            }
        }, 300);
    },

    // Checar condição
    checkCondition(condition) {
        if (typeof condition === 'function') {
            return condition(this.state);
        }
        if (typeof condition === 'string') {
            return !!this.state.flags[condition];
        }
        return true;
    },

    // Mostrar transição de caso
    showCaseTransition(title, subtitle) {
        return new Promise((resolve) => {
            let transition = document.querySelector('.case-transition');
            if (!transition) {
                transition = document.createElement('div');
                transition.className = 'case-transition';
                document.body.appendChild(transition);
            }

            transition.innerHTML = `
                <h2>${title}</h2>
                <p>${subtitle || ''}</p>
            `;

            transition.classList.add('active');

            setTimeout(() => {
                transition.classList.remove('active');
                setTimeout(resolve, 800);
            }, 3000);
        });
    },

    // Utilitários
    clearScreen() {
        this.dom.textOutput.innerHTML = '';
        this.dom.choicesContainer.innerHTML = '';
    },

    scrollToBottom() {
        const container = document.getElementById('text-container');
        container.scrollTop = container.scrollHeight;
    },

    delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    },

    // Obter perfil dominante
    getDominantProfile() {
        const p = this.state.profile;
        const max = Math.max(p.justica, p.compaixao, p.punicao, p.pragmatismo);

        if (max === 0) return 'neutro';
        if (p.justica === max) return 'justica';
        if (p.compaixao === max) return 'compaixao';
        if (p.punicao === max) return 'punicao';
        if (p.pragmatismo === max) return 'pragmatismo';
        return 'neutro';
    },

    // Save/Load
    saveToStorage() {
        const saveData = {
            state: this.state,
            config: { soundEnabled: this.config.soundEnabled },
            version: '1.0',
            savedAt: Date.now()
        };
        localStorage.setItem('juiz_anonimo_save', JSON.stringify(saveData));
    },

    loadFromStorage() {
        const data = localStorage.getItem('juiz_anonimo_save');
        if (data) {
            try {
                const parsed = JSON.parse(data);
                if (parsed.version === '1.0') {
                    return parsed;
                }
            } catch (e) {
                console.error('Erro ao carregar save:', e);
            }
        }
        return null;
    },

    clearStorage() {
        localStorage.removeItem('juiz_anonimo_save');
    },

    hasSave() {
        return !!localStorage.getItem('juiz_anonimo_save');
    }
};
