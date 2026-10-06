const perguntas = [
    {
        pergunta: "Qual é a capital do Brasil?",
        respostas: ["São Paulo", "Brasília", "Rio de Janeiro", "Salvador"],
        correta: 1
    },
    {
        pergunta: "Quanto é 8 x 7?",
        respostas: ["54", "56", "64", "49"],
        correta: 1
    },
    {
        pergunta: "Qual planeta é conhecido como Planeta Vermelho?",
        respostas: ["Vênus", "Júpiter", "Marte", "Saturno"],
        correta: 2
    },
    {
        pergunta: "Qual linguagem é usada para criar a estrutura de uma página web?",
        respostas: ["HTML", "CSS", "JavaScript", "Python"],
        correta: 0
    },
    {
        pergunta: "Qual é o maior oceano do planeta?",
        respostas: ["Atlântico", "Índico", "Ártico", "Pacífico"],
        correta: 3
    }
];

let perguntaAtual = 0;
let pontuacao = 0;
let respondeu = false;

const perguntaElemento = document.getElementById("pergunta");
const respostasElemento = document.getElementById("respostas");
const feedbackElemento = document.getElementById("feedback");
const proximaBotao = document.getElementById("proxima");
const contadorElemento = document.getElementById("contador");
const barraProgresso = document.getElementById("barra-progresso");
const quizElemento = document.getElementById("quiz");
const resultadoElemento = document.getElementById("resultado");
const pontuacaoFinal = document.getElementById("pontuacao-final");
const mensagemFinal = document.getElementById("mensagem-final");
const reiniciarBotao = document.getElementById("reiniciar");

function carregarPergunta() {
    respondeu = false;
    const pergunta = perguntas[perguntaAtual];

    perguntaElemento.textContent = pergunta.pergunta;
    respostasElemento.innerHTML = "";
    feedbackElemento.textContent = "";
    feedbackElemento.className = "";

    contadorElemento.textContent = `${perguntaAtual + 1} / ${perguntas.length}`;

    const progresso = ((perguntaAtual + 1) / perguntas.length) * 100;
    barraProgresso.style.width = `${progresso}%`;

    pergunta.respostas.forEach((resposta, indice) => {
        const botao = document.createElement("button");
        botao.textContent = resposta;
        botao.classList.add("resposta");

        botao.addEventListener("click", () => {
            verificarResposta(indice, botao);
        });

        respostasElemento.appendChild(botao);
    });
}

function verificarResposta(indiceSelecionado, botaoSelecionado) {
    if (respondeu) return;

    respondeu = true;
    const pergunta = perguntas[perguntaAtual];
    const botoes = document.querySelectorAll(".resposta");

    botoes.forEach((botao, indice) => {
        botao.disabled = true;

        if (indice === pergunta.correta) {
            botao.classList.add("correta");
        }
    });

    if (indiceSelecionado === pergunta.correta) {
        pontuacao++;
        botaoSelecionado.classList.add("correta");
        feedbackElemento.textContent = "✓ Resposta correta!";
        feedbackElemento.classList.add("feedback-certo");
    } else {
        botaoSelecionado.classList.add("errada");
        feedbackElemento.textContent = "✗ Resposta incorreta!";
        feedbackElemento.classList.add("feedback-errado");
    }
}

proximaBotao.addEventListener("click", () => {
    if (!respondeu) {
        alert("Escolha uma resposta primeiro!");
        return;
    }

    perguntaAtual++;

    if (perguntaAtual < perguntas.length) {
        carregarPergunta();
    } else {
        mostrarResultado();
    }
});

function mostrarResultado() {
    quizElemento.classList.add("escondido");
    resultadoElemento.classList.remove("escondido");

    pontuacaoFinal.textContent =
        `Você acertou ${pontuacao} de ${perguntas.length} perguntas.`;

    const porcentagem = (pontuacao / perguntas.length) * 100;
    let mensagem;

    if (porcentagem === 100) {
        mensagem = "Parabéns! Você acertou tudo! 🏆";
    } else if (porcentagem >= 70) {
        mensagem = "Muito bem! Você teve um ótimo resultado! 👏";
    } else if (porcentagem >= 50) {
        mensagem = "Bom trabalho! Continue estudando! 📚";
    } else {
        mensagem = "Não desista! Tente novamente e melhore sua pontuação! 💪";
    }

    mensagemFinal.textContent = mensagem;
}

reiniciarBotao.addEventListener("click", () => {
    perguntaAtual = 0;
    pontuacao = 0;

    quizElemento.classList.remove("escondido");
    resultadoElemento.classList.add("escondido");

    carregarPergunta();
});

carregarPergunta();
