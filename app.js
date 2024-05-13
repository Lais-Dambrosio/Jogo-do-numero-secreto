let listaDeNumeros = [];
let numeroLimite = 10;
let numeroSecreto = numeroAleatorio();
let tentativas = 1;

// Função com parametros
function exibirTextoNaTela(tag, textos) {
  let campos = document.querySelector(tag);
  campos.innerHTML = textos;
}

function exibirMensagemInicial() {
  exibirTextoNaTela("h1", "Jogo do número secreto");
  exibirTextoNaTela("p", "Escolha um número entre 1 e 10.");
}

//chamando a função
exibirMensagemInicial();

//Função sem paramentros
function verificarChute() {
  let chute = document.querySelector("input").value;

  if (chute == numeroSecreto) {
    exibirTextoNaTela("h1", "Acertou!");
    let palavraTentativas = tentativas > 1 ? "tentativas" : "tentativa";
    let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativas}!`;
    exibirTextoNaTela("p", mensagemTentativas);
    document.getElementById("reiniciar").removeAttribute("disabled");
  } else {
    if (chute > numeroSecreto) {
      exibirTextoNaTela("p", "O número secreto é menor");
    } else {
      exibirTextoNaTela("p", " O número secreto é maior");
    }
    tentativas++;
    limparCampo();
  }
}

function numeroAleatorio() {
  let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
  let quantidadeDeElementosNaLista = listaDeNumeros.length;

  if (quantidadeDeElementosNaLista == numeroLimite) {
    listaDeNumeros = [];
  }

  if (listaDeNumeros.includes(numeroEscolhido)) {
    return numeroAleatorio();
  } else {
    listaDeNumeros.push(numeroEscolhido);
    console.log(listaDeNumeros);
    return numeroEscolhido;
  }
}

function limparCampo() {
  chute = document.querySelector("input");
  chute.value = "";
}

function reiniciarJogo() {
  numeroSecreto = numeroAleatorio();
  limparCampo();
  tentativas = 1;
  exibirMensagemInicial();
  document.getElementById("reiniciar").setAttribute("disabled", true);
}
