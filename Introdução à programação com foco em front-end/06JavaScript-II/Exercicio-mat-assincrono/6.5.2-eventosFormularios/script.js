//CAPTURAR ELEMENTOS DO DOM
let inputEmail = document.getElementById("email");

let inputIdade = document.getElementById("idade");

let formulario = document.querySelector("form");

//FUNÇÃO

inputEmail.addEventListener("focus", ()=>{
    inputEmail.style.backgroundColor = "lightgreen"
//usando o inputEmail
});

inputEmail.addEventListener("blur", (e)=>{
    e.target.style.backgroundColor = ""
//usando "evento" + target
});

inputIdade.addEventListener("change", ()=> {
    alert("Certeza que quer alterar seus dados?")

});

formulario.addEventListener("submit", ()=> {
    alert("Dados enviados com sucesso!")

 });


