let celulas = document.querySelectorAll('.celula');
const mensagem = document.getElementById('mensagem');
const reset = document.getElementById('reset');

let jogador = 'X';
let jogoTerminado = false;

const posicoesVencedoras = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

celulas.forEach((celula) => {
    celula.addEventListener('click', () => {
        jogada(celula);
    });
});

const jogada = (celula) => {
    if (jogoTerminado === false && celula.innerHTML === '') {
        if (jogador === 'X') {
            celula.innerHTML = jogador;
            jogador = 'O';
            mensagem.innerHTML = 'Vez do jogador O!';
        } else {
            celula.innerHTML = jogador;
            jogador = 'X';
            mensagem.innerHTML = 'Vez do jogador X!';
        }
    }
    verificarGanhador();
    verificarEmpate();
}

const verificarGanhador = () => {
    for (let i = 0; i < posicoesVencedoras.length; i++) {
        const [a, b, c] = posicoesVencedoras[i];
        if (celulas[a].innerHTML === 'X' && celulas[b].innerHTML === 'X' && celulas[c].innerHTML === 'X') {
            mensagem.innerHTML = 'Jogador X venceu!';
            jogoTerminado = true;
            return;
        } else if (celulas[a].innerHTML === 'O' && celulas[b].innerHTML === 'O' && celulas[c].innerHTML === 'O') {
            mensagem.innerHTML = 'Jogador O venceu!';
            jogoTerminado = true;
            return;
        }
    }
}

const verificarEmpate = () => {
    if (Array.from(celulas).every((celula) => celula.innerHTML !== '')) {
        mensagem.innerHTML = 'Deu Velha!';
        jogoTerminado = true;
    }
}

reset.addEventListener('click', () => location.reload());
