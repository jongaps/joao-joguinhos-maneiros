const userScore = 0;
const computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("comp-score");
const scoreBoard_div = document.querySelector(".score-board");
const resultado_div = document.querySelector(".resultado");
const pedra_div = document.getElementById("pedra");
const papel_div = document.getElementById("papel");
const tesoura_div = document.getElementById("tesoura");

function getComputadorEscolha() {
    const escolhas = ['pedra', 'papel', 'tesoura'];
    const numeroAleatorio = (Math.floor(Math.random() * 3));
    return escolhas[numeroAleatorio];
};

function game(jogadorEscolha) {
    const computadorEscolha = getComputadorEscolha();
    console.log("Essa é a escolha do jogador = " + jogadorEscolha);
    console.log("E essa é a escolha do computador = " + computadorEscolha)
}

function main() {
    pedra_div.addEventListener("click", function() {
        game("pedra")
    });
    papel_div.addEventListener("click", function() {
        game("papel")
    });
    tesoura_div.addEventListener("click", function() {
        game("tesoura")
    });
}
main();