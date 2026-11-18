export const perguntas = [
  {
    enunciado: "A cidade tem pouco dinheiro. Onde investir primeiro?",
    alternativas: [
      {
        texto: "Educação.",
        afirmacao: ["A melhoria nas escolas aumentou o aprendizado dos jovens.", "A cidade ganhou mão de obra mais qualificada para o futuro."]
      },
      {
        texto: "Saúde.",
        afirmacao: "Os hospitais ficaram mais equipados e o atendimento à população melhorou."
      }
    ]
  },
  {
    enunciado: "A cidade enfrenta falta de água.",
    alternativas: [
      {
        texto: "Investir em infraestrutura.",
        afirmacao: "Os vazamentos diminuíram e a distribuição de água se tornou mais eficiente."
      },
      {
        texto: "Criar campanhas de conscientização.",
        afirmacao: "Os moradores passaram a economizar água no dia a dia, reduzindo o desperdício."
      }
    ]
  },
  {
    enunciado: "Há muito lixo nas ruas.",
    alternativas: [
      {
        texto: "Aumentar a coleta.",
        afirmacao: "As ruas ficaram limpas rapidamente, evitando entupimentos e doenças."
      },
      {
        texto: "Investir em reciclagem.",
        afirmacao: "A cidade reduziu o volume de lixo nos aterros e gerou renda para cooperativas."
      }
    ]
  },
  {
    enunciado: "O trânsito está piorando.",
    alternativas: [
      {
        texto: " Melhorar o transporte público.",
        afirmacao: "Mais pessoas deixaram o carro em casa, reduzindo os engarrafamentos e a poluição."
      },
      {
        texto: "Construir novas vias.",
        afirmacao: "O fluxo de veículos melhorou temporariamente, mas a emissão de poluentes aumentou."
      }
    ]

  },
  {
    enunciado: "Depois de quatro anos:",
    alternativas: [
      {
        texto: " A cidade ficou mais sustentável.",
        afirmacao: "A qualidade de vida subiu e o meio ambiente foi preservado para as próximas gerações."
      },
      {
        texto: "A cidade melhorou economicamente, mas ainda enfrenta problemas ambientais.",
        afirmacao: "Houve geração de empregos e crescimento, mas novos desafios ecológicos surgiram."
      }
    ]
  }
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
  if (atual>= perguntas.length){
    mostraResultado();
    return;
  }
  perguntaAtual = perguntas[atual];
  caixaPerguntas.textContent = perguntaAtual.enunciado
  caixaAlternativas.textContent = "";
  mostraAlternativas();
}

function mostraAlternativas() {
  for (const alternativa of perguntaAtual.alternativas) {
    const botaoAlternativa = document.createElement("button");
    botaoAlternativa.textContent = alternativa.texto;
    botaoAlternativa.addEventListener("click", () => respostaSelecionada(alternativa))
    caixaAlternativas.appendChild(botaoAlternativa);
  }
}
function respostaSelecionada(opcaoSelecionada) {
  const afirmacao = aleatorio(opcaoSelecionada.afirmacao);
  historiaFinal += afirmacao + " ";
  atual++;
  mostraPergunta();
}

function mostraResultado(){
  caixaPerguntas.textContent = "Em 2030 ...";
  textoResultado.textContent = historiaFinal;
  caixaAlternativas.textContent = "";
}
