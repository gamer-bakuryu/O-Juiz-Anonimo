const Engine = {
    state: {
        playerName: '',
        currentNode: 'start',
        profile: { justica: 0, compaixao: 0, punicao: 0, pragmatismo: 0 },
        decisions: [],
        flags: {},
        currentCase: 'PRÓLOGO',
        history: []
    },
    config: { typeSpeed: 22, lineDelay: 300, choiceDelay: 500, soundEnabled: true, skipMode: false },
    dom: {},
    typewriter: { isTyping: false, currentResolve: null, timeout: null, fullText: '' },

    init() {
        this.dom.textOutput = document.getElementById('text-output');
        this.dom.choicesContainer = document.getElementById('choices-container');
        this.dom.caseIndicator = document.getElementById('case-indicator');
        this.dom.cursor = document.getElementById('cursor');
        document.getElementById('text-container').addEventListener('click', () => {
            if (this.typewriter.isTyping) this.skipTyping();
        });
        document.addEventListener('keydown', (e) => {
            if ((e.key === ' ' || e.key === 'Enter') && this.typewriter.isTyping) {
                e.preventDefault(); this.skipTyping();
            }
        });
    },

    async goTo(nodeId) {
        if (nodeId === '_title') { backToTitle(); return; }
        const node = Story.getNode(nodeId);
        if (!node) { console.error('Node not found:', nodeId); return; }

        this.state.currentNode = nodeId;
        this.state.history.push(nodeId);
        if (node.caseLabel) { this.state.currentCase = node.caseLabel; this.dom.caseIndicator.textContent = node.caseLabel; }
        this.clearScreen();
        if (node.setFlags) Object.assign(this.state.flags, node.setFlags);
        if (node.points) { for (const [k, v] of Object.entries(node.points)) this.state.profile[k] = (this.state.profile[k] || 0) + v; }
        if (node.decision) this.state.decisions.push({ case: this.state.currentCase, node: nodeId, text: node.decision, ts: Date.now() });
        if (node.showTransition) await this.showCaseTransition(node.showTransition.title, node.showTransition.subtitle);
        if (node.text) await this.displayText(node.text);
        if (node.choices && node.choices.length > 0) { await this.delay(this.config.choiceDelay); this.showChoices(node.choices); }
        if (node.next && (!node.choices || node.choices.length === 0)) { await this.delay(1200); this.goTo(node.next); }
        this.saveToStorage();
    },

    async displayText(textArray) {
        if (typeof textArray === 'string') textArray = [textArray];
        this.dom.cursor.classList.add('visible');
        this.typewriter.isTyping = true;
        for (let i = 0; i < textArray.length; i++) {
            await this.typeLine(textArray[i]);
            if (i < textArray.length - 1) await this.delay(this.config.lineDelay);
        }
        this.typewriter.isTyping = false;
        this.dom.cursor.classList.remove('visible');
    },

    typeLine(content) {
        return new Promise((resolve) => {
            this.typewriter.currentResolve = resolve;
            const p = document.createElement('p');
            if (content.startsWith('[DOSSIER-HEADER]')) { p.className = 'dossier-header'; content = content.replace('[DOSSIER-HEADER]', ''); }
            else if (content.startsWith('[DOSSIER]')) { p.className = 'dossier'; content = content.replace('[DOSSIER]', ''); }
            else if (content.startsWith('[SYSTEM]')) { p.className = 'system-msg'; content = content.replace('[SYSTEM]', ''); }
            else if (content.startsWith('[SEPARATOR]')) { p.className = 'separator'; content = content.replace('[SEPARATOR]', ''); }
            else if (content.startsWith('[DEPOIMENTO]')) { p.className = 'depoimento'; content = content.replace('[DEPOIMENTO]', ''); }
            else if (content.startsWith('[PAUSA]')) { p.className = 'pausa'; content = content.replace('[PAUSA]', ''); }
            else if (content.startsWith('[HIGHLIGHT]')) { p.className = 'highlight'; content = content.replace('[HIGHLIGHT]', ''); }
            content = content.replace(/\{NOME\}/g, this.state.playerName || 'Juiz');
            this.dom.textOutput.appendChild(p);
            this.typewriter.fullText = content;

            if (this.config.skipMode) { p.innerHTML = content; this.scrollToBottom(); resolve(); return; }

            let i = 0; let inTag = false;
            const type = () => {
                if (i >= content.length) { p.innerHTML = content; this.scrollToBottom(); resolve(); return; }
                if (content[i] === '<') inTag = true;
                if (inTag) { if (content[i] === '>') inTag = false; i++; type(); return; }
                p.innerHTML = content.substring(0, i + 1);
                i++; this.scrollToBottom();
                this.typewriter.timeout = setTimeout(type, this.config.typeSpeed);
            };
            type();
        });
    },

    skipTyping() {
        if (this.typewriter.timeout) clearTimeout(this.typewriter.timeout);
        this.config.skipMode = true;
        if (this.typewriter.currentResolve) { this.typewriter.currentResolve(); this.typewriter.currentResolve = null; }
        setTimeout(() => { this.config.skipMode = false; }, 50);
    },

    showChoices(choices) {
        this.dom.choicesContainer.innerHTML = '';
        const filtered = choices.filter(c => !c.condition || this.checkCondition(c.condition));
        filtered.forEach((choice) => {
            const btn = document.createElement('button');
            btn.className = 'choice-btn';
            btn.innerHTML = '<span class="choice-prefix">></span> ' + choice.text;
            btn.addEventListener('click', () => this.selectChoice(choice));
            this.dom.choicesContainer.appendChild(btn);
        });
    },

    selectChoice(choice) {
        this.dom.choicesContainer.querySelectorAll('.choice-btn').forEach(b => { b.disabled = true; b.style.opacity = '0.3'; b.style.pointerEvents = 'none'; });
        if (choice.points) { for (const [k, v] of Object.entries(choice.points)) this.state.profile[k] = (this.state.profile[k] || 0) + v; }
        if (choice.setFlags) Object.assign(this.state.flags, choice.setFlags);
        if (choice.decision) this.state.decisions.push({ case: this.state.currentCase, node: this.state.currentNode, text: choice.decision || choice.text, ts: Date.now() });
        setTimeout(() => { if (choice.next) this.goTo(choice.next); }, 300);
    },

    checkCondition(c) { return typeof c === 'function' ? c(this.state) : !!this.state.flags[c]; },

    showCaseTransition(title, subtitle) {
        return new Promise((resolve) => {
            const el = document.getElementById('case-transition');
            document.getElementById('ct-title').textContent = title;
            document.getElementById('ct-subtitle').textContent = subtitle || '';
            el.classList.add('active');
            setTimeout(() => { el.classList.remove('active'); setTimeout(resolve, 800); }, 3000);
        });
    },

    clearScreen() { this.dom.textOutput.innerHTML = ''; this.dom.choicesContainer.innerHTML = ''; },
    scrollToBottom() { document.getElementById('text-container').scrollTop = document.getElementById('text-container').scrollHeight; },
    delay(ms) { return new Promise(r => setTimeout(r, ms)); },

    getDominantProfile() {
        const p = this.state.profile;
        const m = Math.max(p.justica, p.compaixao, p.punicao, p.pragmatismo);
        if (m === 0) return 'neutro';
        if (p.justica === m) return 'justica';
        if (p.compaixao === m) return 'compaixao';
        if (p.punicao === m) return 'punicao';
        return 'pragmatismo';
    },

    saveToStorage() { localStorage.setItem('juiz_save', JSON.stringify({ state: this.state, v: '2.0', t: Date.now() })); },
    loadFromStorage() { try { const d = JSON.parse(localStorage.getItem('juiz_save')); return d && d.v === '2.0' ? d : null; } catch(e) { return null; } },
    clearStorage() { localStorage.removeItem('juiz_save'); },
    hasSave() { return !!localStorage.getItem('juiz_save'); }
};

const Story = {
    nodes: {},
    getNode(id) { return this.nodes[id] || null; },
    add(id, data) { this.nodes[id] = { id, ...data }; }
};
