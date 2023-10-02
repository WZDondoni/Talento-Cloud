//const titulo = document 
//variável que guardará o retorno do primeiro método, e atribuímos a ele o objeto document

const titulo = document.getElementById("titulo")
console.log(titulo)

const textos = document.getElementsByClassName("texto-simples");
console.log(textos);

console.log(textos[0]);

//faendo uso dos seletores CSS para acessar o elemento.
const segundoTitulo = document.querySelector("div h2");

console.log(segundoTitulo);

const textosPorClasse = document.querySelectorAll(".texto-simples");

console.log(textosPorClasse);

