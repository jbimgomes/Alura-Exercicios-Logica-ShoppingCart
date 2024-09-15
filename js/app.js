let valorTotal = 0;

function adicionar() {
  let qtde = parseInt(document.getElementById("quantidade").value);

  if (qtde > 0 && qtde <= 100) {
    let produto = document.getElementById("produto").value;
    let nomeProduto = produto.split("-")[0];
    let valorUnitario = produto.split("R$")[1];
    let preco = qtde * valorUnitario;
    valorTotal = valorTotal + preco;
    atualizaCarrinho(qtde, nomeProduto, valorUnitario, valorTotal);
    document.getElementById("quantidade").value = 0;
  } else {
    alert("Insira uma quantidade entre 1 e 100.");
  }
}

function atualizaCarrinho(qtde, produto, valorUnit, valorTotal) {
  let produtos = document.querySelector(".carrinho__produtos__produto");
  let insertList = `<br> <span class="texto-azul">${qtde}x</span> ${produto} <span class="texto-azul">R$${valorUnit},00</span>`;
  produtos.insertAdjacentHTML("beforeend", insertList);
  document.getElementById("valor-total").innerHTML = `R$${valorTotal},00`;
}

function limpar() {
  valorTotal = 0;
  let produtos = document.querySelector(".carrinho__produtos__produto");
  produtos.innerHTML = "";
  document.getElementById("valor-total").innerHTML = `R$0,00`;
}
