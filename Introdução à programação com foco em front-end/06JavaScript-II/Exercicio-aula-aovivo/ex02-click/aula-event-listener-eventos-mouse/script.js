let quantidadeSubtotal = document.getElementById("quantidade-subtotal");
let valorSubtotal = document.getElementById("valor-subtotal");

let subtotalInfo = {
  quantidade: 1,
  valor: 11.66,
};

quantidadeSubtotal.innerText = subtotalInfo.quantidade + " itens";
valorSubtotal.innerText = subtotalInfo.valor;

/* Integrantes:
Watiley Z Dondoni;
Alessandro C. Santos;
Evaldo Moreira;
Tadeu da Costa;
*/

//Botão Mais

//Capturar Elementos
let btnAdicionarProduto01 = document.querySelector("#btn-adicionar-produto-01")
let btnQuantidadeProduto01 = document.querySelector("#quantidade-produto-01")


//Declarar Função
function modificarQuantidade(operador)

{

  let obj = document.querySelector("#quantidade-produto-01");

  let valorAtual = parseInt(obj.value);

  obj.value = operador == '-'? valorAtual -= 1: valorAtual += 1;

}


