/* ============================================
   O JUIZ ANÔNIMO — GAME CONTROLLER
   Inicialização e controle geral
   ============================================ */

// Checar save existente ao carregar
window.addEventListener('DOMContentLoaded', () => {
    if (Engine.hasSave()) {
        const nameInput = document.querySelector('.name-input-container');
        const continueDiv = document.getElementById('continue-container');
        nameInput.style.display = 'none';
        continueDiv.style.display = 'flex';
    }

    // Enter no campo de nome
    document.getElementById('player-name').addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            startGame();
        }
    });
});

// Iniciar novo jogo
function startGame() {
    const nameInput = document.getElementById('player-name');
    const name = nameInput.value.trim();

    if (!name) {
        nameInput.style.borderColor = '#e74c3c';
        nameInput.placeholder = 'Digite seu nome';
        setTimeout(() => {
            nameInput.style.borderColor = '';
            nameInput.placeholder = 'Seu nome';
        }, 2000);
        return;
    }

    Engine.clearStorage();
    Engine.state.playerName = name;

    document.getElementById('juiz-id').textContent = `JUIZ #4891 — ${name.toUpperCase()}`;

    switchToGame();
    Engine.init();
    Engine.goTo('start');
}

// Continuar jogo salvo
function continueGame() {
    const saveData = Engine.loadFromStorage();
    if (saveData) {
        Engine.state = saveData.state;
        document.getElementById('juiz-id').textContent =
            `JUIZ #4891 — ${Engine.state.playerName.toUpperCase()}`;

        switchToGame();
        Engine.init();
        Engine.goTo(Engine.state.currentNode);
    }
}

// Novo jogo (quando tem save)
function newGame() {
    const nameInput = document.querySelector('.name-input-container');
    const continueDiv = document.getElementById('continue-container');
    nameInput.style.display = 'flex';
    continueDiv.style.display = 'none';
}

// Trocar para tela de jogo
function switchToGame() {
    document.getElementById('title-screen').classList.remove('active');
    document.getElementById('game-screen').classList.add('active');
}

// Voltar à tela inicial
function backToTitle() {
    closeMenu();
    document.getElementById('game-screen').classList.remove('active');
    document.getElementById('title-screen').classList.add('active');

    if (Engine.hasSave()) {
        const nameInput = document.querySelector('.name-input-container');
        const continueDiv = document.getElementById('continue-container');
        nameInput.style.display = 'none';
        continueDiv.style.display = 'flex';
    }
}

// Menu
function openMenu() {
    document.getElementById('menu-overlay').classList.add('active');
}

function closeMenu() {
    document.getElementById('menu-overlay').classList.remove('active');
}

// Save
function saveGame() {
    Engine.saveToStorage();
    const btn = event.target;
    btn.textContent = '✅ Salvo!';
    setTimeout(() => {
        btn.textContent = '💾 Salvar Jogo';
    }, 2000);
}

// Som
function toggleSound() {
    Engine.config.soundEnabled = !Engine.config.soundEnabled;
    document.getElementById('sound-status').textContent =
        Engine.config.soundEnabled ? 'ON' : 'OFF';
}

// Stats
function showStats() {
    closeMenu();
    const overlay = document.getElementById('stats-overlay');
    overlay.classList.add('active');

    const p = Engine.state.profile;
    const maxVal = Math.max(p.justica, p.compaixao, p.punicao, p.pragmatismo, 1);

    document.getElementById('val-justica').textContent = p.justica;
    document.getElementById('val-compaixao').textContent = p.compaixao;
    document.getElementById('val-punicao').textContent = p.punicao;
    document.getElementById('val-pragmatismo').textContent = p.pragmatismo;

    document.getElementById('bar-justica').style.width = `${(p.justica / maxVal) * 100}%`;
    document.getElementById('bar-compaixao').style.width = `${(p.compaixao / maxVal) * 100}%`;
    document.getElementById('bar-punicao').style.width = `${(p.punicao / maxVal) * 100}%`;
    document.getElementById('bar-pragmatismo').style.width = `${(p.pragmatismo / maxVal) * 100}%`;

    // Log de decisões
    const log = document.getElementById('decisions-log');
    log.innerHTML = '<strong style="color: var(--accent-blue-light)">Decisões tomadas:</strong>';

    if (Engine.state.decisions.length === 0) {
        log.innerHTML += '<p>Nenhuma decisão registrada ainda.</p>';
    } else {
        Engine.state.decisions.forEach(d => {
            log.innerHTML += `<p>📋 ${d.text}</p>`;
        });
    }
}

function closeStats() {
    document.getElementById('stats-overlay').classList.remove('active');
}

// Handler para nó especial "_title"
const originalGoTo = Engine.goTo.bind(Engine);
Engine.goTo = async function(nodeId) {
    if (nodeId === '_title') {
        backToTitle();
        return;
    }
    return originalGoTo(nodeId);
};
