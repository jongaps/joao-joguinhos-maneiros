let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("comp-score");
const scoreBoard_div = document.querySelector(".score-board");
const resultado_p = document.querySelector(".resultado > p");
const pd_div = document.getElementById("pd");
const pp_div = document.getElementById("pp");
const ts_div = document.getElementById("ts");

function getComputadorEscolha() {
    const escolhas = ['pd', 'pp', 'ts'];
    const numeroAleatorio = (Math.floor(Math.random() * 3));
    return escolhas[numeroAleatorio];
};

function transformarLegivel(letras) {
    if (letras === "pd") return "Pedra";
    if (letras === "pp") return "Papel";
    return "Tesoura";
};

function ganhou(jogador, computador) {
    const palavrinhaPlayer = "Player".fontsize(3).sup().fontcolor("seablue");
    const palavrinhaComp = "Comp".fontsize(3).sup().fontcolor("orange");
    const jogadorEscolha_div = document.getElementById(jogador);
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerhtml = computerScore;
    resultado_p.innerHTML = `${transformarLegivel(jogador)}${palavrinhaPlayer} ganha de ${transformarLegivel(computador)}${palavrinhaComp}, você venceu!`;
    jogadorEscolha_div.classList.add('brilho-verde');
    setTimeout(() => jogadorEscolha_div.classList.remove('brilho-verde'), 700);
};

function perdeu(jogador, computador) {
    const palavrinhaPlayer = "Player".fontsize(3).sup().fontcolor("seablue");
    const palavrinhaComp = "Comp".fontsize(3).sup().fontcolor("orange");
    const jogadorEscolha_div = document.getElementById(jogador);
    computerScore++;
    computerScore_span.innerHTML = computerScore;
    userScore_span.innerhtml = userScore;
    resultado_p.innerHTML = `${transformarLegivel(jogador)}${palavrinhaPlayer} não ganha de ${transformarLegivel(computador)}${palavrinhaComp}, você perdeu.`;
    jogadorEscolha_div.classList.add('brilho-vermelho');
    setTimeout(() => jogadorEscolha_div.classList.remove('brilho-vermelho'), 700);
};

function empatou(jogador, computador) {
    const palavrinhaPlayer = "Player".fontsize(3).sup().fontcolor("seablue");
    const palavrinhaComp = "Comp".fontsize(3).sup().fontcolor("orange");
    const jogadorEscolha_div = document.getElementById(jogador);
    userScore_span.innerHTML = userScore;
    computerScore_span.innerhtml = computerScore;
    resultado_p.innerHTML = `${transformarLegivel(jogador)}${palavrinhaPlayer} é igual a ${transformarLegivel(computador)}${palavrinhaComp}, você empatou.`;
    jogadorEscolha_div.classList.add('brilho-cinza');
    setTimeout(() => jogadorEscolha_div.classList.remove('brilho-cinza'), 700);
};

function game(jogadorEscolha) {
    const computadorEscolha = getComputadorEscolha();

    switch(jogadorEscolha + computadorEscolha) {
        case "pdts":
        case "pppd":
        case "tspp":
            ganhou(jogadorEscolha, computadorEscolha);
            break;
        case "pdpp":
        case "ppts":
        case "tspd":
            perdeu(jogadorEscolha, computadorEscolha);
            break;
        case "pdpd":
        case "pppp":
        case "tsts":
            empatou(jogadorEscolha, computadorEscolha);
            break;
    }
}

function main() {
    pd_div.addEventListener("click", () => game("pd"));
    pp_div.addEventListener("click", () => game("pp"));
    ts_div.addEventListener("click", () => game("ts"));
}
main();