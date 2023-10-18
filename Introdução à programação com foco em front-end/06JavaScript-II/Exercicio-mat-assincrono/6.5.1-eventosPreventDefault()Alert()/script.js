//CAPTURAR
let linkProz = document.getElementById("link-proz")
let btnSubmit = document.querySelector("button[type=submit]")

linkProz.addEventListener("click", (e)=>{
    //EVITAR COMPORTAMENTO PADRÃO QUANDO HÁ ERRO, POR EXEMPLO UM LINK SEM OS PONTOS, OU EMAIL SEM ARROBA, OU LETRAS SENDO ENSERIDAS EM CAMPOS DE TEXTO.
    e.preventDefault()
    alert("Não foi possível acessar o link");
    
})

btnSubmit.addEventListener("click", (e)=>{
    e.preventDefault()
    alert("Não foi possível acessar o link");

})