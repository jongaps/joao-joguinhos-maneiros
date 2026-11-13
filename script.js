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
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerhtml = computerScore;
    const palavrinhaPlayer = "Player".fontsize(3).sup().fontcolor("seablue");
    const palavrinhaComp = "Comp".fontsize(3).sup().fontcolor("orange");
    resultado_p.innerHTML = `${transformarLegivel(jogador)}${palavrinhaPlayer} ganha de ${transformarLegivel(computador)}${palavrinhaComp}, você venceu!`;
};

function perdeu(jogador, computador) {
    computerScore++;
    computerScore_span.innerHTML = computerScore;
    userScore_span.innerhtml = userScore;
    const palavrinhaPlayer = "Player".fontsize(3).sup().fontcolor("seablue");
    const palavrinhaComp = "Comp".fontsize(3).sup().fontcolor("orange");
    resultado_p.innerHTML = `${transformarLegivel(jogador)}${palavrinhaPlayer} não ganha de ${transformarLegivel(computador)}${palavrinhaComp}, você perdeu.`;
};

function empatou(jogador, computador) {
    userScore_span.innerHTML = userScore;
    computerScore_span.innerhtml = computerScore;
    const palavrinhaPlayer = "Player".fontsize(3).sup().fontcolor("seablue");
    const palavrinhaComp = "Comp".fontsize(3).sup().fontcolor("orange");
    resultado_p.innerHTML = `${transformarLegivel(jogador)}${palavrinhaPlayer} é igual a ${transformarLegivel(computador)}${palavrinhaComp}, você empatou.`;
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
    pd_div.addEventListener("click", function() {
        game("pd")
    });
    pp_div.addEventListener("click", function() {
        game("pp")
    });
    ts_div.addEventListener("click", function() {
        game("ts")
    });
}
main();