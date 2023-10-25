const linkPerfil = document.getElementById("link-perfil");
const navPerfil = document.getElementById("nav-perfil");
const linkPerfilDados = document.getElementById("link-perfil-dados")
linkPerfil.addEventListener("mouseover", ()=> {
  navPerfil.style.display = "block"
})

//ouvir o que será digitado, deve-se colocar um escutador no próprio document.
document.addEventListener("keyup", (e)=>{
  //o argumento que representa o evento "keyup" em si,nesse caso representado pelo "e". Mostra todas as propriedades associadas ao evento do "keyup"
  //console.log(e.key); //guarda o valor impresso pela tecla. o valor da tecla.
  //console.log(e.code); //guarda o identificador da tecla. Quando tem teclas que tem mesmo valor impresso, mas tem code diferentes. Ex: 1 do teclado numérico e 1 do acima da tecla "q"



  // if (e.code == "Digit1") {
  //   navPerfil.style.display = "block"
    
  // }

  // if (e.code == "Digit1") {
  //   linkPerfilDados.click() 

  // }

  //nesse dois if's ao apertar 1 abre instântaneamente o menu e a página. CORRIGIR

  if(navPerfil.style.display == "block") {
    linkPerfilDados.click() 

  }
  

  
})