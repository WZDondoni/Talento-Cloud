//fazer com que quando estiver no perfil dados volte a tela inicial

const retornoAoIndex = document.querySelector("main p a");

document.addEventListener("keyup", (e) => {
  if (e.code == "Backspace") {
    retornoAoIndex.click();
  }
});
