// ---------- VALIDAÇÃO USERNAME ---------- //

let usernameInput = document.getElementById("username"); // <input "username"
let usernameLabel = document.querySelector('label[for="username"]'); //<label "username"
let usernameHelper = document.getElementById("username-helper");//<p "Mensagem de ajuda"

        // Mostrar popup de campo obrigatório

        // usernameInput.addEventListener("focus", ()=>{
        //     usernameLabel.classList.add("required-popup")
        // })


        // // Ocultar popup de campo obrigatório
        // usernameInput.addEventListener("blur", ()=>{
        //     usernameLabel.classList.remove("required-popup")
        // })


        // Validar valor do input

        usernameInput.addEventListener("change", (e)=>{
            //pegar o valor de dentro do input
            let valor = e.target.value

            //digitos mínimos
            if (valor.length < 4){
                usernameInput.classList.remove("correct")
                usernameInput.classList.add("error")
                usernameHelper.classList.add("visible")
                usernameHelper.innerText = "Seu username deve ter mais que 3 características"
            } else {
                usernameInput.classList.add("correct")
                usernameHelper.classList.remove("visible")
                usernameInput.classList.remove("error")

            }


        })


// --------------- VALIDAÇÃO EMAIL ---------------//

    //CAPTURA
        let emailInput = document.getElementById("email")
        let emailLabel = document.querySelector('label[for="email"]')
        let emailHelper = document.getElementById("email-helper")

        //console.log(emailInput, emailLaber, emailHelper);
    
    //FUNÇÃO
        //arroba e ponto

        emailInput.addEventListener("change", (e)=>{
            let valor = e.target.value

            if(valor.includes("@") && valor.includes(".com")){
                emailInput.classList.add("corret")
                emailInput.classList.remove("error")
                emailHelper.classList.remove("visible")

            } else {
                emailInput.classList.remove("corret")
                emailInput.classList.add("error")
                emailHelper.classList.add("visible")
                emailHelper.innerText = "Email inválido, conferir todos os elementos obrigatórios, o arroba e o ponto"


            }
        })
// FUNÇÃO DE AVISO NOS CAMPOS

        function mostrarPopup (input, label){
            //Mostrar popup de campo obrigatório
            input.addEventListener("focus", ()=>{
                label.classList.add("required-popup")
            })

            //Ocultar popup de campo obrigatório
            input.addEventListener("blur", ()=> {
                label.classList.remove("required-popup")
            })
        }

        mostrarPopup(usernameInput, usernameLabel)
        mostrarPopup(emailInput, emailLabel)
