/**
 * Ponto de partida para a atividade de construção de um sistema de cadastro.
 *
 * Para executar este ficheiro, você precisa do Node.js e do pacote `prompt-sync`.
 * Instale o `prompt-sync` com o comando: npm install prompt-sync
 */

// Configuração para ler input do utilizador no terminal
const entrada = require("readline-sync")

// Array que servirá como nosso "banco de dados" em memória
const produtos = [];
const precos = [];
const quantidades = [];
// --- Funções a Serem Desenvolvidas ---

function cadastrarProduto() {
  console.log("Insira o nome do produto\n>")
  let nome = entrada.question();
  if (produtos.includes(nome)) {
    console.log("Produto ja cadastrado! Retornando ao cadastro...")
    cadastrarProduto()
  } else {
    let preco = 0
    do {
      console.log("Insira o preço do produto\n>")
      preco = entrada.questionFloat()
      if (preco < 0) {
        console.log("Preco menor que zero!")
      }
    } while (preco < 0)
    let quantidade = 0
    do {
      console.log("Insira a quantidade do produto\n>")
      quantidade = entrada.questionInt()
    } while (quantidade < 0)
    produtos.push(nome)
    precos.push(preco)
    quantidades.push(quantidade)
  }

}


function listarProdutos() {
  console.log("\n--- Funcionalidade de Listar Produtos ---");
  for (let i = 0; i < precos.length; i++) {
    console.log("-------------------------------------------------")
    console.log("|Nome: " + produtos[i] + "\t|Preco: " + precos[i] + "\t|Quantidade: " + quantidades[i]+ "\t|\n")
    console.log("-------------------------------------------------")
  }
}

function procurarProduto() {
  console.log("\n--- Funcionalidade de Procurar Produto ---");
  console.log("\n--- Funcionalidade de Procurar Produto ---");
    console.log("Insira o nome do produto\n>")
    let nome = entrada.question()
    if (!produtos.includes(nome)) {
        console.log("Produto não encontrado! retornando ao menu...")
        return
    } else {
        let indice = produtos.indexOf(nome)
        console.log("-------------------------------------------------")
        console.log("|Nome: " + produtos[indice] + "\t|Preco: " + precos[indice] + "\t|Quantidade: " + quantidades[indice] + "\t|\n")
        console.log("-------------------------------------------------")
    }
}

function atualizarProduto() {
  console.log("\n--- Funcionalidade de Atualizar Produto ---");
  // Lógica para atualizar um produto deve ser implementada aqui
  console.log("Funcionalidade ainda não implementada.");
}

function removerProduto() {
  console.log("\n--- Funcionalidade de Remover Produto ---");
  // Lógica para remover um produto deve ser implementada aqui
  console.log("Funcionalidade ainda não implementada.");
}


// --- Loop Principal do Menu ---

let loop = true;
while (loop) {
  console.log("\n===== Sistema de Cadastro de Produtos =====");
  console.log("1. Cadastrar produto");
  console.log("2. Listar produtos");
  console.log("3. Procurar produto por nome");
  console.log("4. Atualizar produto");
  console.log("5. Remover produto");
  console.log("6. Sair");

  const opcao = entrada.questionInt("Escolha uma opção: ");

  switch (opcao) {
    case 1:
      cadastrarProduto();
      break;
    case 2:
      listarProdutos();
      break;
    case 3:
      procurarProduto();
      break;
    case 4:
      atualizarProduto();
      break;
    case 5:
      removerProduto();
      break;
    case 6:
      console.log("A sair do sistema. Até logo!");
      loop = false;
      break;
    default:
      console.log("Opção inválida. Tente novamente.");
  }
}
