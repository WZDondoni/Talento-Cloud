const nomeProduto = document.getElementById('nome-produto');
const valorProduto = document.getElementById('valor-produto');
const descricaoProduto = document.getElementById('descricao-produto');
const btnEnviar = document.getElementById('btn-enviar');
const feedbackUsuario = document.getElementById('feedback-usuario')
const produtosCadastrados = document.getElementById('produtos-cadastrados')


//função
function enviarProduto() {
    const url = 'https://httpbin.org/post'
    fetch(url).then((res) => res.jon).then((data)=> console.log(data))
    
    
}


//eventos
btnEnviar.addEventListener('click', enviarProduto())

