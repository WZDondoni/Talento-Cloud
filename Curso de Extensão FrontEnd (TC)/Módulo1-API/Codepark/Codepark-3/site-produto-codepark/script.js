//caputurar elemento

const nomeProduto = document.getElementById("nomeProd");
const msgEnvio = document.getElementById("msgEnvio");
const descProduto = document.getElementById("descProd");
const qtdProduto = document.getElementById("qtdProd");
const btnEnviar = document.getElementById("btnEnv");
const msgBotaoEnviar = document.getElementById("msgEnvio");
const cntListarEnviados = document.getElementById(
  "container-listarCadastrados"
);

//manipular

function enviarProduto() {
  const produto = JSON.stringify({
    produto: nomeProduto.value,
    descricao: descProduto.value,
    quantidade: qtdProduto.value,
  });

  fetch("https://httpbin.org/post", {
    method: "POST",
    header: {
      "Content-Type": "application/json",
    },
    body: produto,
  })
    .then((res) => res.json())
    .then((data) => {
      msgEnvio.innerText = "Enviando";
      const dataParsed = JSON.parse(data.data);
      const listarEnviados = document.createElement("div");
      listarEnviados.innerHTML = `
      <h3>${dataParsed.quantidade} unid - ${dataParsed.produto} - ${dataParsed.descricao}</h3>
      
      `;
      cntListarEnviados.prepend(listarEnviados);

      msgEnvio.innerText = "Enviado com sucesso!";
      msgEnvio.classList.add("ok")
      nomeProduto.value = "";
      descProduto.value = "";
      qtdProduto.value = "";
      
      
    })
    .catch((err) => {
        msgEnvio.innerText = "Erro no envio do produto para cadastro";
        msgEnvio.classList.add("error");
        console.log(err);
    });
    
    msgEnvio.innerText = "";

}

//eventos
btnEnviar.addEventListener("click", enviarProduto);
