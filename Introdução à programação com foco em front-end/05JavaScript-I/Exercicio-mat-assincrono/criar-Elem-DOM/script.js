let elementoJavaScript = document.createElement("li");
    elementoJavaScript.innerText = "JavaScript"
    elementoJavaScript.id = "ling-js"

//console.log(elementoJavaScript);

let listaLinguagens = document.querySelector(".lista-linguagens");
    listaLinguagens.appendChild(elementoJavaScript);

const postagemJavaScript = document.createElement("div");

postagemJavaScript.innerHTML =

    `<h2 class="post-titulo">(Adicionado via DOM)JavaScript</h2>

    <p class="post-texto">

    (Adicionado via DOM) JavaScript é uma linguagem de programação

    </p>`

const postagens = document.querySelector(".postagens");
    postagens.appendChild(postagemJavaScript);






