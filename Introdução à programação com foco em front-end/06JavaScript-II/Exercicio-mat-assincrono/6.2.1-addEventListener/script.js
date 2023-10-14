//INÍCIO CAPTURAR ELEMENTOS

let numero = document.querySelector("h1");
let botao = document.querySelector("button");

//DECLARAR VARIÁVEL QUE RECEBERÁ A CONTAGEM
let contagem = 0;

//CRIAR A FUNÇÃO
function adicionarUm() {
    contagem = contagem + 1;
    numero.innerText = contagem;
}


//INCREMENTAR NO ELEMENTO DOM O MÉTODO.
//INFORMAR O 1º ARGUMENTO ( O QUE DISPARARÁ O FUNÇÃO, NO CASO UM CLIQUE)
//INFORMAR A FUNÇÃO QUE SERÁ EXECUTADA
botao.addEventListener("click", adicionarUm);


//Embora a organização do código proposta nesse material seja muito útil pela perspectiva didática,  encontraremos outras formas de organização no dia a dia.Uma alternativa muito comum é, ao invés de declarar a função separadamente, escrevê-la como uma função anônima dentro do parênteses do addEventListener.


/*

let numero = document.querySelector("h1");

let botao = document.querySelector("button");

let contagem = 0;


botao.addEventListener("click", function(){

   contagem = contagem + 1;

   numero.innerText = contagem;

});

*/

//Nesses casos, também há o uso de arrow functions para declarar a função anônima, substituindo o trecho function( ) por ( ) =>. Dessa forma

/*
let numero = document.querySelector("h1");

let botao = document.querySelector("button");

let contagem = 0;

botao.addEventListener("click", () => {

  contagem = contagem + 1;

  numero.innerText = contagem;

});
*/