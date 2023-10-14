// CAPTURAR
    //titulo
    let titulo = document.querySelector("h2")

//MANIPULANDO
    //titulo
        titulo.style.color = "blue";
        // quando queremos chamar alguma propriedade que tem duas palavras, seguem padrão camelCase ao invés de kebab-case;
        titulo.style.fontSize = "2.5rem";

// ------------------------------------------


//PROBLEMÁTICA:

//1ª Primeira interação do usuário.
//Usuário digita um nome de usuário não válido.
//Aplicar estilização de erro ao input.

    //CAPTURAR
        //input
            let loginUsuario = document.querySelector("#login-usuario")

        //texto usuário inválido
            let errorTextUsuario = document.querySelector(".error-text")

    //MANIPULANDO
        //input
            loginUsuario.classList.add("error")

        //texto usuário inválido
            errorTextUsuario.classList.add("visible")
            //esse elemento tem uma classe display:none, porém ao atribur uma nova/mesma classe, ele sobrescreve, pois o código é rodado de cima pra baixo.

//---------------------------------------------

//2ª Segunda interação do usuário
//Usuário digitou usuário válido mas senha incorreta.

//CAPUTRAR ELEMENTOS

    //input Nome de Usuário
        let inputNomeUsuario = document.querySelector("#login-usuario")
        
        //input Senha
        let inputSenhaUsuario = document.querySelector("#login-senha")
        
        
        //texto 'Senha incorreta'
        let txtSenhaIncorreta = document.querySelectorAll(".error-text")
        
//MANIPULAR

    //input Nome de Usuário
        inputNomeUsuario.classList.add("correct")
        
    //input Senha
        inputSenhaUsuario.classList.add("error")
        
    //txt Senha incorreta
        txtSenhaIncorreta[1].classList.add("visible")
    
    //txt usuário inávlido       
        errorTextUsuario.classList.remove("visible")
        
// ----------------------------------------------------------------------------
    

//3ª Terceira iteração

let botaoForm = document.querySelector("button")
botaoForm.style.color = "blue"
botaoForm.style.backgroundColor = "gray"
botaoForm.style.borderRadius = "30px"
botaoForm.style.fontWeight = "900"











