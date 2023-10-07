//CRIAR ELEMENTOS
let elementoMain = document.createElement("main");
elementoMain.id = "elmMain";
let elementoH1Titulo = document.createElement("h1");
elementoH1Titulo.id = "titulo";
let elementoDivProdutos = document.createElement("div");
elementoDivProdutos.id = "elmdiv-venda-prod";
const arrayProduto = [
    {
        nome: "Alface",
        descrição: "Folhas Verdes e sem manchas",
        preço: "R$ 4,00",
    }
]
let imgProduto = document.createElement("img");


//POPULAR ELEMENTOS
imgProduto.src = "./img/alface.png"
imgProduto.style.height = "40px";
imgProduto.style.width = "40px";

elementoH1Titulo.innerText = "Venda de Produtos Artesanais";

elementoDivProdutos.innerHTML =
`
<h3>
Produto:${arrayProduto[0].nome}
Descrição: ${arrayProduto[0].descrição}
Preço: ${arrayProduto[0].preço }
</h3>
`;

//ADICIONAR AO DOM
let body = document.querySelector("body");
body.appendChild(elementoMain);
let main = document.querySelector("main")
main.appendChild(elementoH1Titulo);
main.appendChild(elementoDivProdutos);
let divPro = document.querySelector("#elmdiv-venda-prod").appendChild(imgProduto)

