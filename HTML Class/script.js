// Declaração de variáveis
const areaNomes = document.querySelector("#areaNomes");
const areaResultado = document.querySelector("#areaResultado");
const listaQuantidade = document.querySelector("#listaQuantidade");
const botaoSortear = document.querySelector("#botaoSortear");

// Função para limpar as áreas de texto
function limparAreas() {
  areaNomes.value = "";
  areaResultado.innerHTML = "";
}

// Função para gerar um número aleatório
function gerarNumeroAleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Função para sortear os nomes
function sortearNomes() {
  // Limpa as áreas de texto
  limparAreas();

  // Obtém a quantidade de nomes a serem sorteados
  const quantidade = Number(listaQuantidade.value);

  // Cria um array com os nomes inseridos pelo usuário
  const nomes = areaNomes.value.split("\n");

  // Cria um array com os nomes sorteados
  const nomesSorteados = [];

  // Sorteia os nomes
  for (let i = 0; i < quantidade; i++) {
    const indice = gerarNumeroAleatorio(0, nomes.length - 1);
    nomesSorteados.push(nomes[indice]);
  }

  // Exibe os nomes sorteados na área de resultado
  nomesSorteados.forEach((nome) => {
    areaResultado.innerHTML += nome + "<br>";
  });
}

// Eventos
botaoSortear.addEventListener("click", sortearNomes);
