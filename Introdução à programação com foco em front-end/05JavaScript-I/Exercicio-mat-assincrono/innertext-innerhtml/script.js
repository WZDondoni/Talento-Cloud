// Primeiro, abrimos nosso arquivo script.js e guardamos o elemento <h1> na variável chamada elementoH1, usando qualquer um dos quatro métodos aprendidos para acessar elementos do DOM.
//Neste caso, usaremos o método querySelector(), passando a string h1 como argumento.
//Depois, imprimimos o elementoH1 no terminal do navegador usando o método console.log().
// let elementoH1 = document.querySelector("h1");
// console.log(elementoH1);


// console.log(elementoH1.innerText);


// let elementoMain = document.querySelector("main");
// console.log(elementoMain);
// console.log(elementoMain.innerText);
// console.log(elementoMain.innerHTML);


let elementoH1 = document.querySelector("h1");
elementoH1.innerText = "Novo título com JS"


let elementoMain = document.querySelector("main");
elementoMain.innerHTML = `
<h2>Novo subtítulo</h2>
<ul>
    <li>Elemento de lista JS 01</li>
    <li>Elemento de lista JS 02</li>
    <li>Elemento de lista JS 03</li>
</ul>
`



