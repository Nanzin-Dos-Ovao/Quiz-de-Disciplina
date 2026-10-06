const bancoPerguntas = [
    {
        pergunta: "Qual é a capital do Brasil?",
        respostas: [
            { texto: "Brasília", correta: true },
            { texto: "São Paulo", correta: false },
            { texto: "Rio de Janeiro", correta: false },
            { texto: "Salvador", correta: false }
        ]
    },
    {
        pergunta: "Quanto é 8 × 7?",
        respostas: [
            { texto: "56", correta: true },
            { texto: "54", correta: false },
            { texto: "64", correta: false },
            { texto: "49", correta: false }
        ]
    },
    {
        pergunta: "Qual planeta é conhecido como Planeta Vermelho?",
        respostas: [
            { texto: "Marte", correta: true },
            { texto: "Vênus", correta: false },
            { texto: "Júpiter", correta: false },
            { texto: "Saturno", correta: false }
        ]
    },
    {
        pergunta: "Qual linguagem é usada para criar a estrutura de uma página web?",
        respostas: [
            { texto: "HTML", correta: true },
            { texto: "CSS", correta: false },
            { texto: "JavaScript", correta: false },
            { texto: "Python", correta: false }
        ]
    },
    {
        pergunta: "Qual é o maior oceano do planeta?",
        respostas: [
            { texto: "Pacífico", correta: true },
            { texto: "Atlântico", correta: false },
            { texto: "Índico", correta: false },
            { texto: "Ártico", correta: false }
        ]
    },
    {
        pergunta: "Qual é o resultado de 15 + 27?",
        respostas: [
            { texto: "42", correta: true },
            { texto: "41", correta: false },
            { texto: "43", correta: false },
            { texto: "40", correta: false }
        ]
    },
    {
        pergunta: "Qual órgão é responsável por bombear o sangue pelo corpo?",
        respostas: [
            { texto: "Coração", correta: true },
            { texto: "Pulmão", correta: false },
            { texto: "Fígado", correta: false },
            { texto: "Rim", correta: false }
        ]
    },
    {
        pergunta: "Em que continente fica o Brasil?",
        respostas: [
            { texto: "América do Sul", correta: true },
            { texto: "Europa", correta: false },
            { texto: "África", correta: false },
            { texto: "Ásia", correta: false }
        ]
    },
    {
        pergunta: "Qual é o idioma oficial do Brasil?",
        respostas: [
            { texto: "Português", correta: true },
            { texto: "Espanhol", correta: false },
            { texto: "Inglês", correta: false },
            { texto: "Francês", correta: false }
        ]
    },
    {
        pergunta: "Qual é o símbolo químico da água?",
        respostas: [
            { texto: "H₂O", correta: true },
            { texto: "CO₂", correta: false },
            { texto: "O₂", correta: false },
            { texto: "NaCl", correta: false }
        ]
    },
    {
        pergunta: "Qual é o maior planeta do Sistema Solar?",
        respostas: [
            { texto: "Júpiter", correta: true },
            { texto: "Terra", correta: false },
            { texto: "Saturno", correta: false },
            { texto: "Netuno", correta: false }
        ]
    },
    {
        pergunta: "Qual é a raiz quadrada de 81?",
        respostas: [
            { texto: "9", correta: true },
            { texto: "8", correta: false },
            { texto: "7", correta: false },
            { texto: "6", correta: false }
        ]
    },
    {
        pergunta: "Qual gás as plantas absorvem durante a fotossíntese?",
        respostas: [
            { texto: "Gás carbônico (CO₂)", correta: true },
            { texto: "Oxigênio (O₂)", correta: false },
            { texto: "Hidrogênio (H₂)", correta: false },
            { texto: "Nitrogênio (N₂)", correta: false }
        ]
    },
    {
        pergunta: "Quem escreveu 'Dom Casmurro'?",
        respostas: [
            { texto: "Machado de Assis", correta: true },
            { texto: "José de Alencar", correta: false },
            { texto: "Carlos Drummond de Andrade", correta: false },
            { texto: "Clarice Lispector", correta: false }
        ]
    },
    {
        pergunta: "Quantos lados tem um hexágono?",
        respostas: [
            { texto: "6", correta: true },
            { texto: "5", correta: false },
            { texto: "7", correta: false },
            { texto: "8", correta: false }
        ]
    },
    {
        pergunta: "Qual é o primeiro elemento da tabela periódica?",
        respostas: [
            { texto: "Hidrogênio", correta: true },
            { texto: "Hélio", correta: false },
            { texto: "Oxigênio", correta: false },
            { texto: "Carbono", correta: false }
        ]
    },
    {
        pergunta: "Qual é a estrela mais próxima da Terra?",
        respostas: [
            { texto: "Sol", correta: true },
            { texto: "Sirius", correta: false },
            { texto: "Betelgeuse", correta: false },
            { texto: "Vega", correta: false }
        ]
    },
    {
        pergunta: "Qual é o plural de 'cidadão'?",
        respostas: [
            { texto: "Cidadãos", correta: true },
            { texto: "Cidadões", correta: false },
            { texto: "Cidadães", correta: false },
            { texto: "Cidadans", correta: false }
        ]
    },
    {
        pergunta: "Qual instrumento mede a temperatura?",
        respostas: [
            { texto: "Termômetro", correta: true },
            { texto: "Barômetro", correta: false },
            { texto: "Anemômetro", correta: false },
            { texto: "Higrômetro", correta: false }
        ]
    },
    {
        pergunta: "Qual é a fórmula da área de um retângulo?",
        respostas: [
            { texto: "base × altura", correta: true },
            { texto: "lado + lado", correta: false },
            { texto: "2 × base + altura", correta: false },
            { texto: "base ÷ altura", correta: false }
        ]
    }
];

const TOTAL_POR_RODADA = 10;

let perguntasDaRodada = [];
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

function embaralhar(array) {
    return [...array].sort(() => Math.random() - 0.5);
}

function prepararRodada() {
    // Escolhe 10 perguntas aleatórias do banco de 20.
    perguntasDaRodada = embaralhar(bancoPerguntas)
        .slice(0, TOTAL_POR_RODADA)
        .map(pergunta => ({
            ...pergunta,
            respostas: embaralhar(pergunta.respostas)
        }));
}

function carregarPergunta() {
    respondeu = false;

    const pergunta = perguntasDaRodada[perguntaAtual];

    perguntaElemento.textContent = pergunta.pergunta;
    respostasElemento.innerHTML = "";
    feedbackElemento.textContent = "";
    feedbackElemento.className = "";

    contadorElemento.textContent =
        `${perguntaAtual + 1} / ${TOTAL_POR_RODADA}`;

    const progresso =
        ((perguntaAtual + 1) / TOTAL_POR_RODADA) * 100;

    barraProgresso.style.width = `${progresso}%`;

    pergunta.respostas.forEach((resposta) => {
        const botao = document.createElement("button");

        botao.textContent = resposta.texto;
        botao.classList.add("resposta");

        botao.addEventListener("click", () => {
            verificarResposta(resposta.correta, botao);
        });

        respostasElemento.appendChild(botao);
    });
}

function verificarResposta(estaCorreta, botaoSelecionado) {
    if (respondeu) return;

    respondeu = true;

    const respostas =
        document.querySelectorAll(".resposta");

    respostas.forEach((botao, indice) => {
        botao.disabled = true;

        const respostaAtual =
            perguntasDaRodada[perguntaAtual].respostas[indice];

        if (respostaAtual.correta) {
            botao.classList.add("correta");
        }
    });

    if (estaCorreta) {
        pontuacao++;

        botaoSelecionado.classList.add("correta");

        feedbackElemento.textContent =
            "✓ Resposta correta!";

        feedbackElemento.classList.add("feedback-certo");
    } else {
        botaoSelecionado.classList.add("errada");

        feedbackElemento.textContent =
            "✗ Resposta incorreta!";

        feedbackElemento.classList.add("feedback-errado");
    }
}

proximaBotao.addEventListener("click", () => {
    if (!respondeu) {
        alert("Escolha uma resposta primeiro!");
        return;
    }

    perguntaAtual++;

    if (perguntaAtual < TOTAL_POR_RODADA) {
        carregarPergunta();
    } else {
        mostrarResultado();
    }
});

function mostrarResultado() {
    quizElemento.classList.add("escondido");
    resultadoElemento.classList.remove("escondido");

    pontuacaoFinal.textContent =
        `Você acertou ${pontuacao} de ${TOTAL_POR_RODADA} perguntas.`;

    const porcentagem =
        (pontuacao / TOTAL_POR_RODADA) * 100;

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

function iniciarJogo() {
    perguntaAtual = 0;
    pontuacao = 0;

    prepararRodada();

    quizElemento.classList.remove("escondido");
    resultadoElemento.classList.add("escondido");

    carregarPergunta();
}

reiniciarBotao.addEventListener("click", iniciarJogo);

iniciarJogo();
